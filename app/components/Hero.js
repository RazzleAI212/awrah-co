export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">
          Modest. Active. Uncompromised.
        </p>
        <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8">
          Built for the <br />
          Muslim Man
        </h1>
        <p className="text-zinc-400 text-lg max-w-md mb-12">
          Performance activewear that doesn't make you choose between your deen and your sport.
        </p>
        <a href="#waitlist" className="bg-white text-black text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-zinc-200 transition-colors">
          Join the Waitlist
        </a>
      </section>
    )
  }