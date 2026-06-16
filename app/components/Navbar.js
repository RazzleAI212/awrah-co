"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "../CartContext"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { itemCount } = useCart()
  const isLight = pathname === "/scholarly-opinion"

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
    { label: "About", href: "/about" },
    { label: "Scholarly Opinion", href: "/scholarly-opinion" },
    { label: "Waitlist", href: isHome ? "#waitlist" : "/#waitlist" },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"}`}>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 items-center px-8 py-6">
        <Link href="/" title="Home" className={`text-sm font-bold tracking-widest uppercase font-serif ${isLight ? "text-black" : "text-white"}`}>
  Awrah Co
</Link>
          <ul className="flex gap-8 justify-center">
            {links.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={`text-sm tracking-wider uppercase transition-colors ${isLight ? "text-zinc-600 hover:text-black" : "text-zinc-400 hover:text-white"}`}>
  {item.label}
</a>
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
          <Link href="/cart" className={`flex items-center gap-2 transition-colors ${isLight ? "text-zinc-600 hover:text-black" : "text-zinc-400 hover:text-white"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 19a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              {itemCount > 0 && (
                <span className="bg-white text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between px-8 py-6">
          <Link href="/" className="text-white text-sm font-bold tracking-widest uppercase font-serif">
            Awrah Co
          </Link>
          <div className="flex items-center gap-6">
          <Link href="/cart" className={`flex items-center gap-2 transition-colors ${isLight ? "text-zinc-600 hover:text-black" : "text-zinc-400 hover:text-white"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 19a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              {itemCount > 0 && (
                <span className="bg-white text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 z-50">
  <span className={`block w-5 h-px transition-all duration-300 ${isLight ? "bg-black" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
  <span className={`block w-5 h-px transition-all duration-300 ${isLight ? "bg-black" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
  <span className={`block w-5 h-px transition-all duration-300 ${isLight ? "bg-black" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
</button>
          </div>
        </div>
      </nav>

      {/* Full screen mobile menu */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-white font-serif text-4xl hover:text-zinc-400 transition-colors">
            {item.label}
          </a>
        ))}
        <Link href="/cart" onClick={() => setMenuOpen(false)} className="text-white font-serif text-4xl hover:text-zinc-400 transition-colors">
          Cart {itemCount > 0 && `(${itemCount})`}
        </Link>
      </div>
    </>
  )
}