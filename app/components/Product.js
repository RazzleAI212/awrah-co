export default function Product() {
  return (
    <section id="product" className="py-32 px-6 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">
          The Product
        </p>
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-16 font-serif">
          Engineered for <br />coverage and performance.
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-zinc-900">
          <div className="bg-black p-10 hover:bg-zinc-950 transition-colors">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">
              Dual Layer Construction
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              An inner layer that covers to the knee built into the short itself. No compromise, no extra clothing needed.
            </p>
          </div>
          <div className="bg-black p-10 hover:bg-zinc-950 transition-colors">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">
              Performance Fabric
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Lightweight, breathable, and moisture wicking. Built to move with you whether you're at the gym, on the pitch, or at the track.
            </p>
          </div>
          <div className="bg-black p-10 hover:bg-zinc-950 transition-colors">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">
              Minimal Design
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              No loud logos or graphics. Clean, understated aesthetics that work beyond the gym.
            </p>
          </div>
          <div className="bg-black p-10 hover:bg-zinc-950 transition-colors">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">
              Built for Coverage
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Designed with the awrah in mind. Knee length coverage as a standard, not an afterthought.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}