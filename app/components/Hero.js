export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_#ffffff1a_0%,_transparent_65%)]" />
      <div className="relative flex flex-col items-center">
        <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">
          Modest. Active. Uncompromised.
        </p>
        <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8 font-serif">
          Built for the <br />
          Muslim Man
        </h1>
        <p className="text-zinc-400 text-lg max-w-md mb-12">
          Performance activewear that doesn't make you choose between your deen and your sport.
        </p>
        <a href="#waitlist" className="bg-white text-black text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-zinc-200 transition-colors">
          Join the Waitlist
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-zinc-600 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
        <a 
  href="#story" 
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
>
  <span className="text-zinc-600 text-xs tracking-[0.3em] uppercase group-hover:text-zinc-400 transition-colors">Scroll</span>
  <svg 
    className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 animate-bounce transition-colors" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
  </svg>
</a>
      </div>
    </section>
  )
}