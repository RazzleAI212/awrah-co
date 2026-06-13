import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Problem from "./components/Problem"
import Product from "./components/Product"
import Waitlist from "./components/Waitlist"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Problem />
      <Product />
      <Waitlist />
      <Footer />
    </main>
  )
}