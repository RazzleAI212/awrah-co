import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">Legal</p>
          <h1 className="text-white text-5xl md:text-7xl font-bold font-serif tracking-tight mb-16">
            Privacy Policy.
          </h1>

          <div className="space-y-12">
            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Who We Are</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Awrah Co is a UK based activewear brand. This privacy policy explains how we collect, use and protect your personal data when you visit our website or make a purchase.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">What We Collect</h2>
              <ul className="space-y-3">
                {[
                  "Name and email address when you join our waitlist or make a purchase",
                  "Delivery address and phone number when you place an order",
                  "Payment information — processed securely by Stripe, we never store card details",
                  "Browsing data via cookies to improve your experience",
                ].map((item) => (
                  <li key={item} className="text-zinc-500 text-sm flex gap-3">
                    <span className="text-zinc-700">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">How We Use Your Data</h2>
              <ul className="space-y-3">
                {[
                  "To process and fulfil your orders",
                  "To send order confirmations and shipping updates",
                  "To send you updates about new products and launches if you have opted in",
                  "To improve our website and customer experience",
                ].map((item) => (
                  <li key={item} className="text-zinc-500 text-sm flex gap-3">
                    <span className="text-zinc-700">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Third Parties</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We use Stripe for payment processing and Buttondown for email marketing. Both are GDPR compliant. We do not sell or share your personal data with any other third parties.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Your Rights</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                You have the right to access, correct or delete your personal data at any time. To exercise these rights or to unsubscribe from our mailing list, contact us at privacy@awrahco.com.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Cookies</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We use essential cookies to make our website function. We do not use tracking or advertising cookies without your consent.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Contact</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                If you have any questions about this privacy policy, contact us at privacy@awrahco.com.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}