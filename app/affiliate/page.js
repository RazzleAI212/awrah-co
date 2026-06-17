import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Affiliate() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">Work With Us</p>
          <h1 className="text-white text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6">
            Become an Affiliate.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-16">
            We're building something meaningful for the Muslim community. If you have a platform and want to be part of it, we'd love to work with you.
          </p>

          {/* How it works */}
          <div className="mb-16 pb-16 border-b border-zinc-900">
            <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-12">How It Works</p>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group">
                <p className="text-zinc-800 text-8xl font-bold font-serif mb-6 group-hover:text-zinc-700 transition-colors">01</p>
                <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Apply</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Fill in the form below and tell us about yourself and your platform. We review every application personally.
                </p>
              </div>
              <div className="group">
                <p className="text-zinc-800 text-8xl font-bold font-serif mb-6 group-hover:text-zinc-700 transition-colors">02</p>
                <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Get Your Code</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Once approved you'll receive a personal discount code to share with your audience. Every use is tracked to you.
                </p>
              </div>
              <div className="group">
                <p className="text-zinc-800 text-8xl font-bold font-serif mb-6 group-hover:text-zinc-700 transition-colors">03</p>
                <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Earn Commission</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Earn a commission on every sale made using your code. Paid out monthly. The more your audience uses it, the more you earn.
                </p>
              </div>
            </div>
          </div>

          {/* Why partner */}
          <div className="mb-16 pb-16 border-b border-zinc-900">
            <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8">Why Partner With Us</p>
            <div className="grid md:grid-cols-2 gap-px bg-zinc-900">
              <div className="bg-black p-8">
                <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">Meaningful Product</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  This isn't just activewear. It's a solution to a genuine problem Muslim men face. Your audience will appreciate the recommendation.
                </p>
              </div>
              <div className="bg-black p-8">
                <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">Fair Commission</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  We offer competitive commission rates and pay on time, every time. We want this to be worth your while.
                </p>
              </div>
              <div className="bg-black p-8">
                <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">Your Audience Gets a Discount</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Your code gives your followers a discount. It's a win for them, a win for you, and a win for us.
                </p>
              </div>
              <div className="bg-black p-8">
                <h3 className="text-white text-sm font-bold tracking-widets uppercase mb-3">Community First</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  We're not chasing viral moments. We're building trust within the Muslim community slowly and properly.
                </p>
              </div>
            </div>
          </div>

          {/* Apply section */}
          <div>
            <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8">Apply to Partner</p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Fill in the form below or reach out directly at <span className="text-white">partnerships@awrahco.com</span>. We'll get back to you within a few days.
            </p>
            <Link
              href="/contact"
              className="bg-white text-black text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-zinc-200 transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  )
}