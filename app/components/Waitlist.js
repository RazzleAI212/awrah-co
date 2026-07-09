"use client"
import { useState } from "react"

export default function Waitlist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError("")

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()

    if (response.ok) {
      setSubmitted(true)
    } else {
      setError("Something went wrong. Please try again.")
    }

    setLoading(false)
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
  First production run coming soon, and it'll be limited. The waitlist gets first access before anything goes public.
</p>
        {submitted ? (
          <p className="text-white text-sm tracking-widest uppercase">
            You're on the list. We'll be in touch.
          </p>
        ) : (
          <>
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
                disabled={loading}
                className="bg-white text-black text-sm font-bold tracking-widest uppercase px-8 py-4 hover:bg-zinc-200 transition-colors disabled:opacity-50"
              >
                {loading ? "Joining..." : "Join"}
              </button>
            </form>
            {error && (
              <p className="text-red-500 text-xs mt-4">{error}</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}