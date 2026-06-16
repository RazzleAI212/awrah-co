"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <p className="text-black text-sm font-bold tracking-[0.3em] uppercase">
          {title}
        </p>
        <span className={`text-zinc-400 text-xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[2000px] pb-8" : "max-h-0"}`}>
        {children}
      </div>
    </div>
  )
}

export default function ScholarlyOpinion() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Greeting */}
          <div className="text-center mb-16">
          <p className="text-black text-5xl mb-4" dir="rtl">
  السلام عليكم ورحمة الله وبركاته
</p>
<p className="text-zinc-500 text-lg tracking-wider">
  Assalamu Alaykum Wa Rahmatullahi Wa Barakatuh
</p>
          </div>

          {/* Intention */}
          <div className="mb-16 pb-16 border-b border-zinc-200">
            <p className="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-6">Our Intention</p>
            <p className="text-zinc-800 text-lg leading-relaxed">
              [Placeholder — your opening statement about the intention behind this page.]
            </p>
          </div>

          {/* Hayaa Section */}
          <div className="mb-16 pb-16 border-b border-zinc-200">
            <p className="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-6">
              Hayaa — Modesty as Part of Faith
            </p>

            <div className="bg-zinc-50 border-l-4 border-zinc-300 px-8 py-6 mb-8">
              <p className="text-black text-xl text-right mb-4 leading-relaxed" dir="rtl">
                الإِيمَانُ بِضْعٌ وَسِتُّونَ شُعْبَةً، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ
              </p>
              <p className="text-zinc-700 text-base italic mb-2">
                "Imān is sixty and odd branches — and having a sense of shame and modesty (Al-Hayā') is from Imān."
              </p>
              <p className="text-zinc-400 text-sm">Bukhāri, no. 9</p>
            </div>

            <div className="bg-zinc-50 border-l-4 border-zinc-300 px-8 py-6 mb-8">
              <p className="text-black text-xl text-right mb-4 leading-relaxed" dir="rtl">
                دَعْهُ فَإِنَّ الْحَيَاءَ مِنَ الإِيمَانِ
              </p>
              <p className="text-zinc-700 text-base italic mb-2">
                "Leave him, for indeed modesty and shyness is a part of faith."
              </p>
              <p className="text-zinc-400 text-sm">
  Bukhāri no. 24, Kitāb al-Imān — Narrated by Sālim bin 'Abdillāh from his father 'Abdullah bin 'Umar (radiyallāhu 'anhumā): Once Allah's Messenger (ﷺ) passed by an Ansārī man who was admonishing his brother for being too modest and shy, upon which he said the above.
</p>
            </div>

            <p className="text-zinc-600 text-base leading-relaxed">
              [Placeholder — brief explanation of hayaa in the context of how we dress.]
            </p>
          </div>

          {/* Accordion Sections */}
          <div className="mb-16">
            <p className="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-8">
              The Awrah of a Man
            </p>

            <Accordion title="Outside of Salah">
              <div className="space-y-6">
                <div className="bg-zinc-50 border-l-4 border-zinc-300 px-8 py-6">
                  <p className="text-zinc-400 text-sm italic">
                    [Placeholder — hadith(s) specifically on the awrah outside salah]
                  </p>
                </div>
                <p className="text-zinc-600 text-base leading-relaxed">
                  [Placeholder — scholarly explanation of the four madhab positions on the awrah outside salah.]
                </p>
              </div>
            </Accordion>

            <Accordion title="Inside of Salah">
              <div className="space-y-6">
                <div className="bg-zinc-50 border-l-4 border-zinc-300 px-8 py-6">
                  <p className="text-zinc-400 text-sm italic">
                    [Placeholder — hadith(s) specifically on the awrah inside salah]
                  </p>
                </div>
                <p className="text-zinc-600 text-base leading-relaxed">
                  [Placeholder — scholarly explanation of the awrah requirements inside salah.]
                </p>
              </div>
            </Accordion>
          </div>

          {/* Reasoning */}
          <div className="mb-16 pb-16 border-b border-zinc-200">
            <p className="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-6">Our Reasoning</p>
            <p className="text-zinc-800 text-lg leading-relaxed">
              [Placeholder — your personal reasoning. Covering the knee as the cautious position, accessibility, dawah angle, peace of mind when praying.]
            </p>
          </div>

          {/* Sources */}
          <div className="pt-4">
            <p className="text-zinc-400 text-xs tracking-[0.4em] uppercase mb-4">Sources</p>
            <ul className="space-y-2">
              <li>
                <a href="https://islamqa.info/en/answers/34976" target="_blank" className="text-zinc-400 text-xs hover:text-zinc-600 transition-colors">
                  islamqa.info — Evidence that men's awrah is from the navel to the knee
                </a>
              </li>
              <li>
                <a href="https://islamqa.info/en/answers/171584" target="_blank" className="text-zinc-400 text-xs hover:text-zinc-600 transition-colors">
                  islamqa.info — What is the awrah of a man
                </a>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}