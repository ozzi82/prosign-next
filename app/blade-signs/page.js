import Link from "next/link";
import ProductHero from "../products/ProductHero";
import FAQ from "../components/FAQ";
import { ProductSchema } from "../components/SeoSchema";

export const metadata = {
  title: "Blade Signs | Wholesale | Sunlite Signs",
  description:
    "Architectural blade signs for retail and commercial corridors. Double-sided options, lighting, and premium finishes.",
  openGraph: {
    title: "Blade Signs | Wholesale | Sunlite Signs",
    description:
      "Architectural blade signs for retail and commercial corridors. Double-sided options and lighting.",
    url: "https://www.sunlitesigns.com/blade-signs",
    images: ["/og/blade-signs.png"],
  },
  alternates: { canonical: "https://www.sunlitesigns.com/blade-signs" },
};

export default function Page() {
  const product = {
    id: "blade-signs",
    title: "Architectural Blade Signs",
    description:
      "Premium blade signs engineered for retail corridors and streetscapes. Double-sided visibility with optional LED illumination.",
    image: "/images/blade.jpg",
    chips: ["Double-sided", "Optional LED", "Architectural finishes"],
    specs: {
      Orientation: "Perpendicular wall-mount",
      Illumination: "None / edge-lit / panel-lit",
      Faces: "Acrylic / metal with graphics",
      Mounting: "Wall plates or brackets",
      Finish: "Painted / powder / brushed metal",
      Warranty: "3 years",
    },
    bullets: [
      "Excellent corridor/street visibility",
      "Durable brackets and hardware",
      "Lighting options for night visibility",
      "Custom shapes and sizes available",
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ProductSchema
        name="Blade Signs"
        description={product.description}
        brand="Sunlite Signs"
        sku="BLADE-ARCH"
        category="Architectural Blade Sign"
        material="Aluminum / Acrylic"
        additionalProperty={[
          { name: "Orientation", value: "Perpendicular mount" },
          { name: "Illumination", value: "None / edge-lit / panel-lit" },
          { name: "Finish", value: "Paint / powder / brushed" },
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
            <p className="mt-6 text-sm text-neutral-400">Mounting drawings provided as needed.</p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <FAQ withSchema={false} maxItems={3} title="Questions about blade signs" />
      </section>
    </main>
  );
}
