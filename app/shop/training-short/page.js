"use client"
import { useState } from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useCart } from "../../CartContext"
import Link from "next/link"

export default function TrainingShort() {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColour, setSelectedColour] = useState("Black")
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const sizes = ["S", "M", "L", "XL", "XXL"]
  const colours = [
    { name: "Black", image: "/product-black.png" },
    { name: "Navy", image: "/product-navy-blue.png" },
    { name: "Olive", image: "/product-olive-green.png" },
  ]

  function handleAddToBag() {
    if (!selectedSize) return
    addToCart({
      name: "The Training Short",
      size: selectedSize,
      colour: selectedColour,
      price: 25.00,
      image: colours.find(c => c.name === selectedColour).image,
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
                src={colours.find(c => c.name === selectedColour).image}
                alt={`Awrah Co The Training Short in ${selectedColour}`}
                className="w-full h-full object-cover transition-opacity duration-300"
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
                  The Training Short
                </h1>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
  Dual layer construction designed for the Muslim man who trains. Outer shell sits above the knee, inner layer extends to the knee — full coverage, full performance, no compromise.
</p>
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
                      key={colour.name}
                      onClick={() => setSelectedColour(colour.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer ${
                        selectedColour === colour.name ? "border-white" : "border-zinc-700"
                      } ${
                        colour.name === "Black" ? "bg-zinc-900" :
                        colour.name === "Navy" ? "bg-blue-950" :
                        "bg-[#4a5240]"
                      }`}
                    />
                  ))}
                </div>
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