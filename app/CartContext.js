"use client"
import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [loaded, setLoaded] = useState(false)

  function updateQuantity(name, size, colour, amount) {
    setCart((prev) =>
      prev.map((item) => {
        if (item.name === name && item.size === size && item.colour === colour) {
          const newQty = item.quantity + amount
          if (newQty <= 0) return null
          return { ...item, quantity: newQty }
        }
        return item
      }).filter(Boolean)
    )
  }

  useEffect(() => {
    const saved = localStorage.getItem("awrah-cart")
    if (saved) {
      setCart(JSON.parse(saved))
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("awrah-cart", JSON.stringify(cart))
    }
  }, [cart, loaded])

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.name === item.name && i.size === item.size && i.colour === item.colour
      )
      if (existing) {
        return prev.map((i) =>
          i.name === item.name && i.size === item.size && i.colour === item.colour
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  function removeFromCart(name, size, colour) {
    setCart((prev) =>
      prev.filter(
        (i) => !(i.name === name && i.size === size && i.colour === colour)
      )
    )
  }

  function clearCart() {
    setCart([])
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total, itemCount, loaded }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}