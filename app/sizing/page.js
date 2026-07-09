"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const sizeChart = [
  { size: "S", waistCm: [76, 81], hipsCm: [86, 91], inseamCm: 48 },
  { size: "M", waistCm: [81, 86], hipsCm: [91, 96], inseamCm: 49 },
  { size: "L", waistCm: [86, 91], hipsCm: [96, 101], inseamCm: 50 },
  { size: "XL", waistCm: [91, 96], hipsCm: [101, 106], inseamCm: 51 },
  { size: "XXL", waistCm: [96, 101], hipsCm: [106, 111], inseamCm: 52 },
]

function toInches(cm) {
  return Math.round(cm / 2.54 * 10) / 10
}

function formatRange(range, unit) {
  if (unit === "in") return `${toInches(range[0])}–${toInches(range[1])}`
  return `${range[0]}–${range[1]}`
}

export default function Sizing() {
  const [unit, setUnit] = useState("cm")
  const [waistInput, setWaistInput] = useState("")
  const [hipsInput, setHipsInput] = useState("")

  function findSize() {
    if (!waistInput) return null
    let waist = parseFloat(waistInput)
    let hips = hipsInput ? parseFloat(hipsInput) : null
    if (isNaN(waist)) return null
    if (unit === "in") {
      waist = waist * 2.54
      if (hips) hips = hips * 2.54
    }

    for (const row of sizeChart) {
      const waistFits = waist >= row.waistCm[0] && waist <= row.waistCm[1]
      const hipsFits = !hips || (hips >= row.hipsCm[0] && hips <= row.hipsCm[1])
      if (waistFits && hipsFits) return row.size
    }

    for (const row of sizeChart) {
      if (waist >= row.waistCm[0] && waist <= row.waistCm[1]) return row.size
    }

    if (waist < sizeChart[0].waistCm[0]) return "S"
    if (waist > sizeChart[sizeChart.length - 1].waistCm[1]) return "XXL"
    return null
  }

  const suggestedSize = findSize()

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">
            Sizing Guide
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6 font-serif">
            Find your fit.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-16">
            Our shorts are designed with coverage in mind. The outer shell sits at mid-thigh, the inner layer extends to the knee. Measure yourself carefully before ordering.
          </p>

          <div className="space-y-16">

            {/* Find Your Size */}
            <div className="border border-zinc-900 p-8">
              <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8">
                Find Your Size
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-zinc-500 text-xs tracking-[0.3em] uppercase block mb-3">
                    Waist ({unit})
                  </label>
                  <input
                    type="number"
                    value={waistInput}
                    onChange={(e) => setWaistInput(e.target.value)}
                    placeholder={unit === "cm" ? "e.g. 84" : "e.g. 33"}
                    className="w-full bg-zinc-900 text-white text-sm px-6 py-4 outline-none border border-zinc-800 placeholder:text-zinc-600 focus:border-zinc-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-zinc-500 text-xs tracking-[0.3em] uppercase block mb-3">
                    Hips ({unit}) — optional
                  </label>
                  <input
                    type="number"
                    value={hipsInput}
                    onChange={(e) => setHipsInput(e.target.value)}
                    placeholder={unit === "cm" ? "e.g. 94" : "e.g. 37"}
                    className="w-full bg-zinc-900 text-white text-sm px-6 py-4 outline-none border border-zinc-800 placeholder:text-zinc-600 focus:border-zinc-600 transition-colors"
                  />
                </div>
              </div>
              {waistInput && (
                suggestedSize ? (
                  <p className="text-white text-sm">
                    Your suggested size is{" "}
                    <span className="font-bold text-lg">{suggestedSize}</span>
                    {" "}— highlighted in the chart below.
                  </p>
                ) : (
                  <p className="text-zinc-500 text-sm">
                    We couldn't match those measurements — double check them, or contact us and we'll help you out.
                  </p>
                )
              )}
            </div>

            {/* Size Chart */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase">
                  Size Chart
                </p>
                <div className="flex border border-zinc-800">
                  <button
                    onClick={() => setUnit("cm")}
                    className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors cursor-pointer ${
                      unit === "cm" ? "bg-white text-black font-bold" : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    CM
                  </button>
                  <button
                    onClick={() => setUnit("in")}
                    className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors cursor-pointer ${
                      unit === "in" ? "bg-white text-black font-bold" : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    IN
                  </button>
                </div>
              </div>
              <div className="border border-zinc-900 overflow-hidden">
                <div className="grid grid-cols-4 bg-zinc-950 px-6 py-4">
                  <p className="text-zinc-400 text-xs tracking-widest uppercase font-bold">Size</p>
                  <p className="text-zinc-400 text-xs tracking-widest uppercase font-bold">Waist ({unit})</p>
                  <p className="text-zinc-400 text-xs tracking-widest uppercase font-bold">Hips ({unit})</p>
                  <p className="text-zinc-400 text-xs tracking-widest uppercase font-bold">Inseam ({unit})</p>
                </div>
                {sizeChart.map((row, i) => (
                  <div
                    key={row.size}
                    className={`grid grid-cols-4 px-6 py-4 border-t border-zinc-900 transition-colors ${
                      suggestedSize === row.size
                        ? "bg-white/10 border-l-2 border-l-white"
                        : i % 2 === 0 ? "bg-black" : "bg-zinc-950"
                    }`}
                  >
                    <p className={`text-sm font-bold ${suggestedSize === row.size ? "text-white" : "text-white"}`}>
                      {row.size}
                      {suggestedSize === row.size && (
                        <span className="text-zinc-400 text-xs ml-2">← your size</span>
                      )}
                    </p>
                    <p className="text-zinc-400 text-sm">{formatRange(row.waistCm, unit)}</p>
                    <p className="text-zinc-400 text-sm">{formatRange(row.hipsCm, unit)}</p>
                    <p className="text-zinc-400 text-sm">
                      {unit === "in" ? toInches(row.inseamCm) : row.inseamCm}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Measure */}
            <div>
              <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8">
                How to Measure
              </p>
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">
                    Waist
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Measure around your natural waistline, keeping the tape comfortable and level.
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">
                    Hips
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Measure around the fullest part of your hips, approximately 20cm below your waistline.
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">
                    Inseam
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Measure from your crotch to the bottom of your ankle bone along the inside of your leg.
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage Details */}
            <div className="border-t border-zinc-900 pt-16">
              <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">
                Coverage Details
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">
                    Outer Shell
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Sits approximately 5cm above the knee. Relaxed fit through the seat and thigh.
                  </p>
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">
                    Inner Layer
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Extends to just below the knee. Lightweight and fitted without restricting movement.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}