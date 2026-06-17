import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Terms() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">Legal</p>
          <h1 className="text-white text-5xl md:text-7xl font-bold font-serif tracking-tight mb-16">
            Terms & Conditions.
          </h1>

          <div className="space-y-12">
            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Overview</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                By using the Awrah Co website and placing an order, you agree to the following terms and conditions. Please read them carefully before making a purchase.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Orders</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                All orders are subject to availability and confirmation of the order price. We reserve the right to refuse or cancel any order at our discretion. Once an order is placed you will receive a confirmation email.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Pricing</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                All prices are listed in GBP and include VAT where applicable. We reserve the right to change prices at any time. The price you pay is the price shown at the time of checkout.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Delivery</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We aim to dispatch all orders within 2-3 working days. Delivery times are estimates and may vary. We are not responsible for delays caused by third party carriers or circumstances outside our control.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Returns</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Please refer to our Returns Policy for full details on returns and refunds.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Intellectual Property</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                All content on this website including text, images, logos and design is the property of Awrah Co. You may not reproduce or use any content without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Limitation of Liability</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Awrah Co will not be liable for any indirect or consequential loss arising from the use of our products or website. Our liability is limited to the value of the goods purchased.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Governing Law</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Contact</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                For any questions regarding these terms, contact us at legal@awrahco.com.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}