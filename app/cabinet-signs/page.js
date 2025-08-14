import Link from "next/link";
import ProductHero from "../products/ProductHero";
import FAQ from "../components/FAQ";
import { ProductSchema } from "../components/SeoSchema";

export const metadata = {
  title: "Cabinet Signs | Wholesale | Sunlite Signs",
  description:
    "LED-illuminated cabinet signs with durable faces, custom sizes, and high visibility. Built for quick service and roadside applications.",
  openGraph: {
    title: "Cabinet Signs | Wholesale | Sunlite Signs",
    description:
      "LED-illuminated cabinet signs with durable faces, custom sizes, and high visibility.",
    url: "https://www.sunlitesigns.com/cabinet-signs",
    images: ["/og/cabinet-signs.png"],
  },
  alternates: { canonical: "https://www.sunlitesigns.com/cabinet-signs" },
};

export default function Page() {
  const product = {
    id: "cabinet-signs",
    title: "LED Cabinet Signs",
    description:
      "High-visibility cabinet signs with UL-listed LEDs, robust frames, and weather-sealed construction—ideal for roadside and quick service sites.",
    image: "/images/cabinet.jpg",
    chips: ["High visibility", "UL-listed LEDs", "Rugged build"],
    specs: {
      Illumination: "Internal LED arrays, even diffusion",
      Face: "Acrylic / polycarbonate, printed or vinyl",
      Frame: "Aluminum cabinet, weather sealed",
      Mounting: "Wall, pole, or pylon integration",
      Finish: "Painted to spec",
      Warranty: "3 years",
    },
    bullets: [
      "Bright, even illumination",
      "Durable cabinet for harsh environments",
      "Flexible mounting options (wall/pylon)",
      "Excellent for QSR and roadside visibility",
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ProductSchema
        name="LED Cabinet Signs"
        description={product.description}
        brand="Sunlite Signs"
        sku="CABINET-LED"
        category="Illuminated Cabinet"
        material="Aluminum / Acrylic / Polycarbonate"
        additionalProperty={[
          { name: "Illumination", value: "Internal LED arrays" },
          { name: "Face", value: "Acrylic / polycarbonate" },
          { name: "Mounting", value: "Wall / pole / pylon" },
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
            <p className="mt-6 text-sm text-neutral-400">Mounting hardware and drawings available.</p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <FAQ withSchema={false} maxItems={3} title="Questions about cabinet signs" />
      </section>
    </main>
  );
}
