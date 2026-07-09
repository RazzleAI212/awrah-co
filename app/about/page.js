import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function About() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">
            Our Story
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-none mb-16 font-serif">
            Built from <br />frustration.
          </h1>
          <div className="space-y-8">
            <p className="text-zinc-400 text-lg leading-relaxed">
            Every Muslim man who trains knows the feeling. You show up to the gym, the pitch, the track — and you're immediately faced with a choice nobody should have to make. Compromise your deen or compromise your performance.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
            Standard gym shorts don't cover. Tracksuit bottoms overheat and restrict movement. The modest activewear market has catered almost exclusively to women. Muslim men have been an afterthought for too long.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
            And where modest activewear for men does exist, it's priced like a luxury. We don't think covering your awrah should cost extra
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
            Awrah Co was built to fix that. Performance activewear made specifically for Muslim men — knee length coverage built in, breathable fabric, at a price that doesn't punish you for it — without sacrificing the look or feel of proper sportswear.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              No compromise. No afterthought. Built with purpose.
            </p>
          </div>
          <div className="mt-16 pt-16 border-t border-zinc-900">
            <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8">
              The Values
            </p>
            <div className="grid md:grid-cols-2 gap-12">
  <div>
    <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">
      Grounded in Knowledge
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">
      We don't cherry-pick rulings to sell shorts. The scholarship behind this brand is laid out openly — differences of opinion included — so you can decide for yourself.
    </p>
  </div>
  <div>
    <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">
      Accessible On Purpose
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">
      Modesty is for every Muslim, so the price has to be too. We'd rather sell to the many at an honest price than to the few at a premium.
    </p>
  </div>
  <div>
    <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">
      Honest by Default
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">
      No fake scarcity, no inflated claims, no marketing games. If something is limited, it's because it's actually limited. If we don't know, we say so.
    </p>
  </div>
  <div>
    <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">
      Deen Doesn't Bend
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">
      The deen isn't adjusted to fit the product. The product is built to fit the deen. That order never reverses — it's the reason this brand exists.
    </p>
  </div>
</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}