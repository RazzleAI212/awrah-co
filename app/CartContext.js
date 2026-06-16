"use client"
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

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
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}