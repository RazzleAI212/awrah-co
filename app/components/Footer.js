import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <p className="text-white text-sm font-bold tracking-widest uppercase font-serif mb-4">
              Awrah Co
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Performance activewear built for the Muslim man. Modest. Active. Uncompromised.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">Shop</p>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-zinc-400 text-xs hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop/training-short" className="text-zinc-400 text-xs hover:text-white transition-colors">
                  The Training Short
                </Link>
              </li>
              <li>
                <Link href="/shop/underlayer" className="text-zinc-400 text-xs hover:text-white transition-colors">
                  The Underlayer
                </Link>
              </li>
              <li>
                <Link href="/shop/thermal" className="text-zinc-400 text-xs hover:text-white transition-colors">
                  The Thermal
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
<div>
  <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">Info</p>
  <ul className="space-y-3">
    <li>
      <Link href="/about" className="text-zinc-400 text-xs hover:text-white transition-colors">
        About
      </Link>
    </li>
    <li>
      <Link href="/sizing" className="text-zinc-400 text-xs hover:text-white transition-colors">
        Sizing Guide
      </Link>
    </li>
    <li>
      <Link href="/faq" className="text-zinc-400 text-xs hover:text-white transition-colors">
        FAQ
      </Link>
    </li>
    <li>
      <Link href="/scholarly-opinion" className="text-zinc-400 text-xs hover:text-white transition-colors">
        Scholarly Opinion
      </Link>
    </li>
    <li>
      <Link href="/returns" className="text-zinc-400 text-xs hover:text-white transition-colors">
        Returns Policy
      </Link>
    </li>
    <li>
      <Link href="/privacy" className="text-zinc-400 text-xs hover:text-white transition-colors">
        Privacy Policy
      </Link>
    </li>
    <li>
      <Link href="/terms" className="text-zinc-400 text-xs hover:text-white transition-colors">
        Terms & Conditions
      </Link>
    </li>
  </ul>
</div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs tracking-wider">
            © 2025 Awrah Co. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs tracking-wider">
            Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}