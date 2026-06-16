"use client"
import { useState } from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useCart } from "../../CartContext"
import Link from "next/link"

export default function Underlayer() {
  const [selectedSize, setSelectedSize] = useState(null)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const sizes = ["S", "M", "L", "XL", "XXL"]

  function handleAddToBag() {
    if (!selectedSize) return
    addToCart({
      name: "The Underlayer",
      size: selectedSize,
      colour: "Black",
      price: 9.99,
      image: "/underlayer-black.png",
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Product Image */}
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src="/underlayer-black.png"
                alt="Awrah Co The Underlayer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_60px_30px_rgba(0,0,0,0.8)]" />
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-8">

              <div>
                <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-3">Awrah Co</p>
                <h1 className="text-white text-3xl font-bold font-serif mb-4">
                  The Underlayer
                </h1>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Knee length inner layer designed to be worn under any shorts. Casual everyday coverage — at the gym, at the mall, anywhere.
                </p>
                <p className="text-white text-2xl font-bold">£9.99</p>
              </div>

              {/* Size */}
              <div className="border-t border-zinc-900 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase">Size</p>
                  <Link href="/sizing" className="text-zinc-500 text-xs tracking-wider uppercase hover:text-white transition-colors">
                    Size Guide →
                  </Link>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-3 text-sm font-bold tracking-wider uppercase border transition-all cursor-pointer ${
                        selectedSize === size
                          ? "border-white text-white"
                          : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-zinc-600 text-xs mt-3">Please select a size</p>
                )}
              </div>

              {/* Add to Bag */}
              <div className="border-t border-zinc-900 pt-8">
                <button
                  onClick={handleAddToBag}
                  disabled={!selectedSize}
                  className={`w-full py-4 text-sm font-bold tracking-widest uppercase transition-all cursor-pointer ${
                    selectedSize
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-zinc-900 text-zinc-600 cursor-not-allowed"
                  }`}
                >
                  {added ? "Added to Bag ✓" : "Add to Bag"}
                </button>
              </div>

              {/* Product Details */}
              <div className="border-t border-zinc-900 pt-8 space-y-4">
                <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase">Product Details</p>
                <ul className="space-y-2">
                  {[
                    "Knee length coverage",
                    "Wear under any shorts",
                    "Lightweight and breathable",
                    "Suitable for everyday wear",
                    "87% Polyester, 13% Elastane",
                    "Machine washable",
                  ].map((detail) => (
                    <li key={detail} className="text-zinc-500 text-sm flex gap-3">
                      <span className="text-zinc-700">—</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}