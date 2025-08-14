// app/cast-acrylic-letters/page.js
import Link from "next/link";
import ProductHero from "../products/ProductHero";
import FAQ from "../components/FAQ";
import { ProductSchema } from "../components/SeoSchema";

export const metadata = {
  title: "Cast Acrylic Letters | Wholesale | Sunlite Signs",
  description:
    "Precision-cut cast block acrylic letters with polished edges. Stud-mounted, custom colors and thicknesses. Fast drawings & nationwide shipping.",
  openGraph: {
    title: "Cast Acrylic Letters | Wholesale | Sunlite Signs",
    description:
      "Precision-cut cast block acrylic letters with polished edges. Stud-mounted, custom colors and thicknesses.",
    url: "https://www.sunlitesigns.com/cast-acrylic-letters",
    images: ["/og/cast-acrylic-letters.png"],
  },
  alternates: { canonical: "https://www.sunlitesigns.com/cast-acrylic-letters" },
};

export default function Page() {
  const product = {
    id: "cast-acrylic-letters",
    title: "Cast Block Acrylic Letters",
    description:
      "Solid cast acrylic letters with crisp contours and polished edges for premium interior branding, reception walls, and architectural panels.",
    image: "/images/acrylic.jpg",
    chips: ["Polished edges", "Indoor / outdoor", "Stud-mounted"],
    specs: {
      Material: "Cast acrylic",
      Thickness: "1/4–1.5 in (6–38 mm)",
      Mounting: "Stud-mounted / spacer standoffs",
      Finish: "Painted (PMS/RAL), polished, frost",
      Tolerance: "±0.5 mm typical",
      Warranty: "3 years",
    },
    bullets: [
      "High clarity with excellent edge polish",
      "UV-stable paints and finishes available",
      "Fast turnaround on common fonts",
      "Ideal for reception walls & boutiques",
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ProductSchema
        name="Cast Acrylic Letters"
        description={product.description}
        brand="Sunlite Signs"
        sku="CAST-ACRYLIC"
        category="Architectural Letters"
        material="Cast Acrylic"
        additionalProperty={[
          { name: "Thickness", value: "1/4–1.5 in (6–38 mm)" },
          { name: "Mounting", value: "Stud-mounted / spacer" },
          { name: "Finish", value: "Painted (PMS/RAL), polished, frost" },
        ]}
      />

      <ProductHero product={product} />

      <section className="relative py-14">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Overview */}
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

          {/* Specs */}
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
            <p className="mt-6 text-sm text-neutral-400">
              Production drawings and mounting templates included with every order.
            </p>
          </div>
        </div>
      </section>



      <section className="pb-16">
        <FAQ withSchema={false} maxItems={3} title="Questions about cast acrylic letters" />
      </section>
    </main>
  );
}
