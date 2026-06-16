"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const faqs = [
  {
    question: "What makes Awrah Co different from regular gym shorts?",
    answer: "Awrah Co shorts are specifically designed with Muslim men in mind. Our dual layer construction means the inner layer extends to the knee, providing full awrah coverage without needing to wear separate compression tights underneath."
  },
  {
    question: "What is the difference between The Training Short and The Underlayer?",
    answer: "The Training Short is a complete 2-in-1 short with a built-in inner layer — designed specifically for sport and gym use. The Underlayer is just the inner layer on its own, designed to be worn under any shorts you already own, whether at the gym, out casually, or anywhere else."
  },
  {
    question: "What is The Thermal for?",
    answer: "The Thermal is an ankle length base layer designed for winter training. It provides full leg coverage and warmth while remaining moisture wicking and comfortable under shorts or trousers."
  },
  {
    question: "What sizes do you offer?",
    answer: "We currently offer S, M, L, XL and XXL across all products. Visit our Sizing page for a full size guide and measurement instructions."
  },
  {
    question: "What fabric are the products made from?",
    answer: "Our products are made from 87% Polyester and 13% Elastane — a lightweight, breathable, moisture wicking blend designed for performance."
  },
  {
    question: "Are the products machine washable?",
    answer: "Yes — all Awrah Co products are machine washable. We recommend washing at 30°C and avoiding tumble drying to maintain the fabric quality."
  },
  {
    question: "How long does delivery take?",
    answer: "We are currently in pre-launch. Once we launch, delivery times and shipping costs will be confirmed. Join our waitlist to be the first to know."
  },
  {
    question: "Do you ship internationally?",
    answer: "We are launching in the UK first. International shipping will be considered based on demand. Join the waitlist and let us know where you're based."
  },
  {
    question: "What is your returns policy?",
    answer: "We will offer a full returns policy on launch. Unused items in original condition can be returned within 30 days of purchase. Full details will be available at launch."
  },
  {
    question: "Is Awrah Co a Muslim owned brand?",
    answer: "Yes. Awrah Co was founded by a Muslim, for Muslim men. The entire brand is built around Islamic values of modesty and making halal activewear accessible and affordable."
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-zinc-900">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
      >
        <p className="text-white text-sm font-bold tracking-wide pr-8 group-hover:text-zinc-300 transition-colors">
          {question}
        </p>
        <span className={`text-zinc-400 text-xl transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-zinc-500 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">FAQ</p>
          <h1 className="text-white text-5xl md:text-7xl font-bold font-serif tracking-tight mb-16">
            Questions answered.
          </h1>
          <div className="border-t border-zinc-900">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}