"use client"
import { useEffect } from "react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useCart } from "../CartContext"

export default function Success() {
  const { clearCart, loaded } = useCart()

  useEffect(() => {
    if (loaded) {
      clearCart()
    }
  }, [loaded])

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8">
          Order Confirmed
        </p>
        <p className="text-white text-4xl mb-2 leading-relaxed" dir="rtl">
          جَزَاكَ اللَّهُ خَيْرًا
        </p>
        <h1 className="text-white text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6">
          JazakAllahu Khairan.
        </h1>
        <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent mb-6" />
        <p className="text-zinc-400 text-3xl mb-2 leading-relaxed" dir="rtl">
          اللَّهُمَّ بَارِكْ
        </p>
        <p className="text-zinc-500 text-sm tracking-widest uppercase mb-12">
          Allahumma Barik
        </p>
        <p className="text-zinc-400 text-lg max-w-md mb-12">
          Your order has been placed successfully. We'll be in touch shortly with your tracking information.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/shop" className="bg-white text-black text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-zinc-200 transition-colors">
            Continue Shopping
          </Link>
          <Link href="/" className="border border-zinc-800 text-white text-sm font-bold tracking-widest uppercase px-10 py-4 hover:border-zinc-600 transition-colors">
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}