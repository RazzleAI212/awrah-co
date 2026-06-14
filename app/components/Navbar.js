export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-50">
        <span className="text-white text-sm font-bold tracking-widest uppercase font-serif">
  Awrah Co
</span>
        <ul className="flex gap-8">
          <li>
            <a href="#story" className="text-zinc-400 text-sm tracking-wider uppercase hover:text-white transition-colors">
              Story
            </a>
          </li>
          <li>
            <a href="#product" className="text-zinc-400 text-sm tracking-wider uppercase hover:text-white transition-colors">
              Product
            </a>
          </li>
          <li>
            <a href="#waitlist" className="text-zinc-400 text-sm tracking-wider uppercase hover:text-white transition-colors">
              Waitlist
            </a>
          </li>
        </ul>
      </nav>
    )
  }