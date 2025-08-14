import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const productLinks = [
    { name: "Trimless Channel Letters", href: "/products/trimless-channel-letters" },
    { name: "Cast Block Acrylic Letters", href: "/products/cast-acrylic-letters" },
    { name: "Flat Cut Metal Letters", href: "/products/flat-cut-letters" },
    { name: "Backlit Channel Letters", href: "/products/backlit-letters" },
    { name: "Custom Metal Fabrication", href: "/products/metal-fabrication" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Manufacturing Process", href: "/about#process" },
    { name: "Quality Standards", href: "/about#quality" },
    { name: "Wholesale Partner Program", href: "/about#partnership" },
  ];

  return (
    <footer className="relative overflow-hidden text-neutral-200">
      {/* top separator line (gradient) */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] md:h-[3px] z-10"
        style={{
          background:
            "linear-gradient(90deg, #ffb84d 0%, #ff7a1a 30%, #ffb84d 60%, #ffd27a 100%)",
        }}
      />

      {/* background layers: deep gradient + animated conic glow + soft blobs */}
      <div className="absolute inset-0 -z-10">
        {/* deep base gradient so it reads differently from the rest of the site */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />

        {/* animated conic glow (liquid feel without extra CSS) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(255,172,64,0.18), rgba(80,170,255,0.18), rgba(255,172,64,0.18))",
            animation: "spin 40s linear infinite", // Tailwind’s built-in @keyframes spin
          }}
        />

        {/* a couple of static warm/cool blobs for depth */}
        <div
          className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,172,64,0.24), rgba(255,172,64,0.00) 60%)",
          }}
        />
        <div
          className="absolute -bottom-28 -right-20 w-[460px] h-[460px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(80,170,255,0.20), rgba(80,170,255,0.00) 60%)",
          }}
        />

        {/* faint grid texture */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 0H0v24' fill='none' stroke='%23ffffff' stroke-opacity='0.35' stroke-width='0.5'/></svg>\")",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="relative rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-colors hover:bg-white/8">
            <div className="text-2xl font-bold mb-4">Sunlite Signs</div>
            <p className="text-neutral-300 mb-6">
              Wholesale manufacturer of premium channel letters and acrylic signage for sign
              companies across USA and Canada.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-neutral-200/90">689-294-0912</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-neutral-200/90">hello@sunlitesigns.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="relative rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-colors hover:bg-white/8">
            <h4 className="font-semibold text-lg mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-sm">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="relative rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-colors hover:bg-white/8">
            <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="relative rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-colors hover:bg-white/8">
            <h4 className="font-semibold text-lg mb-4 text-white">Service Areas</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• United States (All 50 States)</li>
              <li>• Canada (All Provinces)</li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Sunlite Signs LLC. All rights reserved. Wholesale
              supplier to the sign industry.
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-neutral-400 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
