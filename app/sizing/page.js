import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Sizing() {
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

            <div>
              <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8">
                Size Chart
              </p>
              <div className="border border-zinc-900 overflow-hidden">
                <div className="grid grid-cols-4 bg-zinc-950 px-6 py-4">
                  <p className="text-zinc-400 text-xs tracking-widest uppercase font-bold">Size</p>
                  <p className="text-zinc-400 text-xs tracking-widest uppercase font-bold">Waist (cm)</p>
                  <p className="text-zinc-400 text-xs tracking-widest uppercase font-bold">Hips (cm)</p>
                  <p className="text-zinc-400 text-xs tracking-widest uppercase font-bold">Inseam (cm)</p>
                </div>
                {[
                  { size: "S", waist: "76–81", hips: "86–91", inseam: "48" },
                  { size: "M", waist: "81–86", hips: "91–96", inseam: "49" },
                  { size: "L", waist: "86–91", hips: "96–101", inseam: "50" },
                  { size: "XL", waist: "91–96", hips: "101–106", inseam: "51" },
                  { size: "XXL", waist: "96–101", hips: "106–111", inseam: "52" },
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-4 px-6 py-4 border-t border-zinc-900 ${i % 2 === 0 ? "bg-black" : "bg-zinc-950"}`}>
                    <p className="text-white text-sm font-bold">{row.size}</p>
                    <p className="text-zinc-400 text-sm">{row.waist}</p>
                    <p className="text-zinc-400 text-sm">{row.hips}</p>
                    <p className="text-zinc-400 text-sm">{row.inseam}</p>
                  </div>
                ))}
              </div>
            </div>

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