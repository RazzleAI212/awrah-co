"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const links = [
    { label: "Shop", href: "/shop" },
    { label: "Sizing", href: "/sizing" },
    { label: "About", href: "/about" },
    { label: "Waitlist", href: isHome ? "#waitlist" : "/#waitlist" },
  ]
  
  return (
    <>
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-50 transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"}`}>
        <Link href="/" className="text-white text-sm font-bold tracking-widest uppercase font-serif">
          Awrah Co
        </Link>
        <ul className="hidden md:flex gap-8">
          {links.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-zinc-400 text-sm tracking-wider uppercase hover:text-white transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 z-50">
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-white font-serif text-4xl hover:text-zinc-400 transition-colors">
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}