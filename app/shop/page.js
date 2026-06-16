import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Shop() {
  const products = [
    {
      name: "The Training Short",
      description: "Dual layer construction. Outer shell above the knee, inner layer to the knee. Built for the gym.",
      price: "£25.00",
      image: "/product-black.png",
      href: "/shop/training-short",
    },
    {
      name: "The Underlayer",
      description: "Knee length inner layer. Wear under any shorts for everyday modest coverage.",
      price: "£9.99",
      image: "/underlayer-black.png",
      href: "/shop/underlayer",
    },
    {
      name: "The Thermal",
      description: "Ankle length thermal base layer for winter training. Full coverage, moisture wicking warmth.",
      price: "£11.99",
      image: "/thermal-black.png",
      href: "/shop/thermal",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-6">The Collection</p>
          <h1 className="text-white text-5xl md:text-7xl font-bold font-serif tracking-tight mb-16">
            Shop All
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.name} href={product.href} className="group">
                <div className="aspect-[3/4] relative overflow-hidden mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_30px_rgba(0,0,0,0.8)]" />
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
                </div>
                <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-2">Awrah Co</p>
                <h2 className="text-white text-lg font-bold font-serif mb-2 group-hover:text-zinc-300 transition-colors">
                  {product.name}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-3">
                  {product.description}
                </p>
                <p className="text-white text-sm font-bold">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}