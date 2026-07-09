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
      Two Layers, One Short
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">
      An inner layer that covers to the knee, built into the short itself. No separate tights, no extra clothing — it's just how they're made.
    </p>
  </div>
  <div className="bg-black p-10 hover:bg-zinc-950 transition-colors">
    <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">
      Wear It Anywhere
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">
    From the gym to five-a-side to a day out with family. Sportswear that doesn't look out of place anywhere    </p>
  </div>
  <div className="bg-black p-10 hover:bg-zinc-950 transition-colors">
    <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">
      Made for Salah
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">
      Coverage you can pray in. Whether it's at the gym, the park, or on the go — you're always ready for salah.
    </p>
  </div>
  <div className="bg-black p-10 hover:bg-zinc-950 transition-colors">
    <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">
      Affordable On Purpose
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">
      Modest activewear shouldn't cost more than regular activewear. We keep prices accessible because this should be for everyone.
    </p>
  </div>
</div>
      </div>
    </section>
  )
}