import Link from "next/link";
import ProductHero from "../products/ProductHero";
import { ProductSchema } from "../components/SeoSchema";

export const metadata = {
  title: "ADA Signs | Wholesale | Sunlite Signs",
  description:
    "Code-compliant ADA signage with Grade 2 Braille, tactile lettering, and proper color contrast. Fast, accurate manufacturing.",
  openGraph: {
    title: "ADA Signs | Wholesale | Sunlite Signs",
    description:
      "Code-compliant ADA signage with Grade 2 Braille and tactile lettering.",
    url: "https://www.sunlitesigns.com/ada-signs",
    images: ["/og/ada-signs.png"],
  },
  alternates: { canonical: "https://www.sunlitesigns.com/ada-signs" },
};

export default function Page() {
  const product = {
    id: "ada-signs",
    title: "ADA Signs",
    description:
      "Code-compliant ADA signage featuring Grade 2 Braille, tactile lettering, and compliant contrast/finish. Built for durability with clean architectural presentation.",
    image: "/images/ada.jpg",
    chips: ["Grade 2 Braille", "Tactile lettering", "High contrast"],
    specs: {
      Compliance: "ADA & ICC A117.1",
      Braille: "Grade 2, domed",
      Tactile: "Raised 1/32 in (0.8 mm)",
      Finish: "Non-glare, high contrast",
      Mounting: "Foam/adhesive or hardware",
      Warranty: "3 years",
    },
    bullets: [
      "Consistent, code-compliant layouts",
      "Durable, non-glare finishes",
      "Matching wayfinding packages",
      "Fast production for rollouts",
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ProductSchema
        name="ADA Signs"
        description={product.description}
        brand="Sunlite Signs"
        sku="ADA-SIGNS"
        category="ADA / Wayfinding"
        material="Acrylic / Laminate / Metal"
        additionalProperty={[
          { name: "Compliance", value: "ADA & ICC A117.1" },
          { name: "Braille", value: "Grade 2 (domed)" },
          { name: "Finish", value: "Non-glare, high contrast" },
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
            <p className="mt-6 text-sm text-neutral-400">Submittals and code references available upon request.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
