"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 py-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-zinc-400 text-xs leading-relaxed max-w-xl">
          We use essential cookies to make our site work. By clicking Accept you agree to our use of cookies.{" "}
          <Link href="/privacy" className="text-white underline hover:text-zinc-300 transition-colors">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-4 flex-shrink-0">
          <button
            onClick={decline}
            className="text-zinc-500 text-xs tracking-widest uppercase hover:text-white transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-white text-black text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}