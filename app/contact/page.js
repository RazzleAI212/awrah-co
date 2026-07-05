"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const socials = [
  { name: "Instagram", handle: "@awrahco", href: "#" },
  { name: "TikTok", handle: "@awrahco", href: "#" },
  { name: "Email", handle: "hello@awrahco.com", href: "mailto:hello@awrahco.com" },
  { name: "WhatsApp", handle: "Message us", href: "#" },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setLoading(true)
  
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
  
    if (response.ok) {
      setSubmitted(true)
    } else {
      console.error("Failed to send message")
    }
  
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">Get in Touch</p>
          <h1 className="text-white text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6">Contact Us.</h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-16">Whether you have a question about an order, want to collaborate, or just want to get in touch — we would love to hear from you.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {socials.map((social) => {
              return (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="border border-zinc-900 p-6 flex flex-col gap-3 hover:border-zinc-700 transition-colors group">
                  <p className="text-white text-xs font-bold tracking-wider uppercase mb-1 group-hover:text-zinc-300 transition-colors">{social.name}</p>
                  <p className="text-zinc-600 text-xs">{social.handle}</p>
                </a>
              )
            })}
          </div>
          <div className="border-t border-zinc-900 pt-16">
            <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-12">Send a Message</p>
            {submitted ? (
              <div className="border border-zinc-900 p-12 text-center">
                <p className="text-white text-sm font-bold tracking-widest uppercase mb-4">Message Received</p>
                <p className="text-zinc-500 text-sm">JazakAllahu Khairan for reaching out. We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-zinc-500 text-xs tracking-[0.3em] uppercase block mb-3">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full bg-zinc-900 text-white text-sm px-6 py-4 outline-none border border-zinc-800 placeholder:text-zinc-600 focus:border-zinc-600 transition-colors" />
                  </div>
                  <div>
                    <label className="text-zinc-500 text-xs tracking-[0.3em] uppercase block mb-3">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="w-full bg-zinc-900 text-white text-sm px-6 py-4 outline-none border border-zinc-800 placeholder:text-zinc-600 focus:border-zinc-600 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-zinc-500 text-xs tracking-[0.3em] uppercase block mb-3">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this regarding?" className="w-full bg-zinc-900 text-white text-sm px-6 py-4 outline-none border border-zinc-800 placeholder:text-zinc-600 focus:border-zinc-600 transition-colors" />
                </div>
                <div>
                  <label className="text-zinc-500 text-xs tracking-[0.3em] uppercase block mb-3">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows={6} className="w-full bg-zinc-900 text-white text-sm px-6 py-4 outline-none border border-zinc-800 placeholder:text-zinc-600 focus:border-zinc-600 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading} className="bg-white text-black text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-zinc-200 transition-colors disabled:opacity-50 cursor-pointer">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}