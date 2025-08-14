// app/components/ProductGrid.js
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ title = "Our Products", subtitle }) {
  const list = Array.isArray(products) ? products : [];

  return (
    <section className="relative py-20 bg-neutral-950 overflow-hidden">
      {/* top separator line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
        style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
      />

      {/* liquid-glass background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] rounded-full opacity-20 blur-3xl animate-[spin_40s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(255,172,64,0.18), rgba(80,170,255,0.18), rgba(255,172,64,0.18))",
          }}
        />
        <div
          className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,172,64,0.22), rgba(255,172,64,0.00) 60%)",
          }}
        />
        <div
          className="absolute -bottom-28 -right-20 w-[460px] h-[460px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(80,170,255,0.20), rgba(80,170,255,0.00) 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* optional heading */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>
            )}
            {subtitle && <p className="mt-3 text-neutral-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}

        {/* empty state */}
        {list.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-8 text-center text-neutral-300">
            No products available yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((p) => (
              <ProductCard
                key={p.id}
                product={{
                  ...p,
                  image: p.dayImage || p.nightImage || p.image || "/placeholder.png",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
