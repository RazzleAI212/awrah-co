"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-black/60 backdrop-blur-md"
        : "bg-transparent"
    }`}>
      <Link href="/" className="text-white text-sm font-bold tracking-widest uppercase font-serif">
        Awrah Co
      </Link>
      <ul className="flex gap-8">
        <li>
          <Link href="/about" className="text-zinc-400 text-sm tracking-wider uppercase hover:text-white transition-colors">
            About
          </Link>
        </li>
        <li>
    <Link href="/sizing" className="text-zinc-400 text-sm tracking-wider uppercase hover:text-white transition-colors">
      Sizing
    </Link>
  </li>
        <li>
          <a href={isHome ? "#story" : "/#story"} className="text-zinc-400 text-sm tracking-wider uppercase hover:text-white transition-colors">
            Story
          </a>
        </li>
        <li>
          <a href={isHome ? "#product" : "/#product"} className="text-zinc-400 text-sm tracking-wider uppercase hover:text-white transition-colors">
            Product
          </a>
        </li>
        <li>
          <a href={isHome ? "#waitlist" : "/#waitlist"} className="text-zinc-400 text-sm tracking-wider uppercase hover:text-white transition-colors">
            Waitlist
          </a>
        </li>
      </ul>
    </nav>
  )
}