import Link from "next/link";
import ProductHero from "../products/ProductHero";
import FAQ from "../components/FAQ";
import { ProductSchema } from "../components/SeoSchema";

export const metadata = {
  title: "Trimless Channel Letters | Wholesale | Sunlite Signs",
  description:
    "True trimless, flush-face channel letters with UL-listed LEDs, clean modern edges, and reliable lead times.",
  openGraph: {
    title: "Trimless Channel Letters | Wholesale | Sunlite Signs",
    description:
      "True trimless, flush-face channel letters with UL-listed LEDs and clean modern edges.",
    url: "https://www.sunlitesigns.com/channel-letters",
    images: ["/og/channel-letters.png"],
  },
  alternates: { canonical: "https://www.sunlitesigns.com/channel-letters" },
};

export default function Page() {
  const product = {
    id: "channel-letters",
    title: "Trimless Channel Letters",
    description:
      "Flush-face, trimless construction with consistent LED diffusion. Modern look with sealed bodies and clean returns.",
    image: "/images/trimless.jpg",
    chips: ["True trimless", "UL-listed LEDs", "Weather-sealed"],
    specs: {
      Lighting: "Front-lit (white/RGB), halo/backlit, or combo",
      Depth: "2–5 in typical",
      Face: "Acrylic, flush mount",
      Finish: "Painted / brushed / powder options",
      Power: "UL-listed LED modules & supplies",
      Warranty: "3 years",
    },
    bullets: [
      "No visible trim-cap—seamless faces",
      "Even illumination with premium modules",
      "Durable, weather-sealed construction",
      "Professional drawings within 24–48h",
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ProductSchema
        name="Trimless Channel Letters"
        description={product.description}
        brand="Sunlite Signs"
        sku="CHANNEL-TRIMLESS"
        category="LED Channel Letters"
        material="Acrylic / Aluminum"
        additionalProperty={[
          { name: "Depth", value: "2–5 in typical" },
          { name: "Lighting", value: "Front-lit / halo / combo" },
          { name: "Power", value: "UL-listed modules & PSUs" },
        ]}
      />

      <ProductHero product={product} />

      <section className="relative py-14">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
            <p className="text-neutral-300">{product.description}</p>
            <ul className="mt-5 space-y-2">
              {product.bullets.map((b, i) => (
                <li key={i} className="text-neutral-300">• {b}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.title)}`}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-neutral-900"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                Request Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/15 text-white bg-white/5 hover:bg-white/10 transition"
              >
                Back to Products
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Specifications</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-neutral-400">{k}</dt>
                  <dd className="text-neutral-200 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-neutral-400">UL documentation included with each order.</p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <FAQ withSchema={false} maxItems={3} title="Questions about channel letters" />
      </section>
    </main>
  );
}
