"use client"
import { useCart } from "../CartContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"
import { useState } from "react"

export default function Cart() {
  const { cart, removeFromCart, total, itemCount } = useCart()

  const [loading, setLoading] = useState(false)

async function handleCheckout() {
  setLoading(true)
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart }),
  })
  const data = await response.json()
  if (data.url) {
    window.location.href = data.url
  } else {
    console.error("Checkout error:", data.error)
    setLoading(false)
  }
}

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">Your Bag</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold font-serif tracking-tight mb-16">
            {itemCount > 0 ? `${itemCount} item${itemCount > 1 ? "s" : ""}` : "Your bag is empty"}
          </h1>

          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-zinc-500 text-sm mb-8">Looks like you haven't added anything yet.</p>
              <Link href="/shop" className="bg-white text-black text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-zinc-200 transition-colors">
                Go to Shop
              </Link>
            </div>
          ) : (
            <div>
              {/* Cart Items */}
              <div className="space-y-px bg-zinc-900 mb-12">
                {cart.map((item) => (
                  <div key={`${item.name}-${item.size}-${item.colour}`} className="bg-black p-6 flex items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-white text-sm font-bold mb-1">{item.name}</p>
                      <p className="text-zinc-500 text-xs tracking-wider uppercase mb-1">
                        {item.colour} — Size {item.size}
                      </p>
                      <p className="text-zinc-500 text-xs">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm font-bold mb-4">
                        £{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.name, item.size, item.colour)}
                        className="text-zinc-600 text-xs tracking-wider uppercase hover:text-white transition-colors cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="border-t border-zinc-900 pt-8 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-zinc-500 text-sm">Subtotal</p>
                  <p className="text-white text-sm">£{total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-zinc-500 text-sm">Shipping</p>
                  <p className="text-zinc-500 text-sm">Calculated at checkout</p>
                </div>
                <div className="flex justify-between items-center border-t border-zinc-900 pt-4">
                  <p className="text-white text-sm font-bold">Total</p>
                  <p className="text-white text-sm font-bold">£{total.toFixed(2)}</p>
                </div>
              </div>

              {/* Checkout Button */}
              <button
  onClick={handleCheckout}
  disabled={loading}
  className="w-full bg-white text-black text-sm font-bold tracking-widest uppercase py-4 hover:bg-zinc-200 transition-colors cursor-pointer disabled:opacity-50"
>
  {loading ? "Redirecting..." : "Proceed to Checkout"}
</button>

              <Link href="/shop" className="block text-center text-zinc-500 text-xs tracking-wider uppercase mt-6 hover:text-white transition-colors">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}