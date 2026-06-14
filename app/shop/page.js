"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Shop() {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColour, setSelectedColour] = useState("Black")
  const [added, setAdded] = useState(false)

  const sizes = ["S", "M", "L", "XL", "XXL"]
  const colours = ["Black", "Navy", "Olive"]

  function handleAddToBag() {
    if (!selectedSize) return
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
            <div className="aspect-[3/4] bg-zinc-950 border border-zinc-900 flex items-center justify-center">
              <p className="text-zinc-700 text-xs tracking-[0.3em] uppercase">Product Photo</p>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-8">

              {/* Name and Price */}
              <div>
                <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-3">Awrah Co</p>
                <h1 className="text-white text-3xl font-bold font-serif mb-4">
                  Dual Layer Training Short
                </h1>
                <p className="text-white text-2xl font-bold">£25.00</p>
              </div>

              {/* Colour */}
              <div className="border-t border-zinc-900 pt-8">
                <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-4">
                  Colour — <span className="text-white">{selectedColour}</span>
                </p>
                <div className="flex gap-3">
                  {colours.map((colour) => (
                    <button
                      key={colour}
                      onClick={() => setSelectedColour(colour)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColour === colour ? "border-white" : "border-zinc-700"
                      } ${
                        colour === "Black" ? "bg-zinc-900" :
                        colour === "Navy" ? "bg-blue-950" :
                        "bg-olive-800 bg-[#4a5240]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="border-t border-zinc-900 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase">Size</p>
                  <a href="/sizing" className="text-zinc-500 text-xs tracking-wider uppercase hover:text-white transition-colors">
                    Size Guide →
                  </a>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-3 text-sm font-bold tracking-wider uppercase border transition-all ${
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
                  className={`w-full py-4 text-sm font-bold tracking-widest uppercase transition-all ${
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
                    "Dual layer construction",
                    "Outer shell sits above the knee",
                    "Inner layer extends to the knee",
                    "Lightweight moisture-wicking fabric",
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