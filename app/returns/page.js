import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Returns() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">Returns & Refunds</p>
          <h1 className="text-white text-5xl md:text-7xl font-bold font-serif tracking-tight mb-16">
            Our Returns Policy.
          </h1>

          <div className="space-y-12">
            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">30 Day Returns</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We offer a 30 day returns policy on all unused items in their original condition. If you are not satisfied with your purchase for any reason, you may return it within 30 days of delivery for a full refund.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Conditions</h2>
              <ul className="space-y-3">
                {[
                  "Items must be unworn and unwashed",
                  "Items must be in their original packaging with tags attached",
                  "Items must be returned within 30 days of the delivery date",
                  "Sale items are non-returnable unless faulty",
                ].map((item) => (
                  <li key={item} className="text-zinc-500 text-sm flex gap-3">
                    <span className="text-zinc-700">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">How to Return</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                To initiate a return, contact us at returns@awrahco.com with your order number and reason for return. We will provide you with a return address and instructions. Return postage costs are the responsibility of the customer unless the item is faulty.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Faulty Items</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                If you receive a faulty or incorrect item, please contact us within 7 days of delivery. We will arrange a free return and send a replacement or issue a full refund including postage costs.
              </p>
            </div>

            <div>
              <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-4">Refunds</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Once your return is received and inspected, we will process your refund within 5-7 working days. Refunds will be issued to the original payment method.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}