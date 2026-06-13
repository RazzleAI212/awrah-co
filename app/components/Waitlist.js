"use client"
import { useState } from "react"

export default function Waitlist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="waitlist" className="py-32 px-6 border-t border-zinc-900">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">
          Early Access
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Be first to know.
        </h2>
        <p className="text-zinc-500 text-sm leading-relaxed mb-12">
          We're sampling now. Join the waitlist and be the first to know when Awrah Co drops.
        </p>
        {submitted ? (
          <p className="text-white text-sm tracking-widest uppercase">
            You're on the list. We'll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-zinc-900 text-white text-sm px-6 py-4 outline-none border border-zinc-800 placeholder:text-zinc-600 focus:border-zinc-600"
            />
            <button
              type="submit"
              className="bg-white text-black text-sm font-bold tracking-widest uppercase px-8 py-4 hover:bg-zinc-200 transition-colors"
            >
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  )
}