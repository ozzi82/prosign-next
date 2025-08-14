"use client";

import { Clock, Shield, Star } from "lucide-react";

/**
 * Props:
 *  - product?: {
 *      title: string
 *      description?: string
 *      image?: string
 *      heroImage?: string
 *      chips?: string[]        // optional: overrides default chips
 *    }
 */
export default function ProductHero({ product = null }) {
  const isDetail = !!product;
  const bgImage = product?.heroImage || product?.image || null;

  const chips =
    product?.chips && product.chips.length
      ? product.chips
      : ["5–7 Day Production", "UL-listed Components", "25+ Years Experience"];

  return (
    <section className="relative overflow-hidden pt-28 pb-16 text-neutral-100">
      {/* top separator line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
        style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
      />

      {/* Backgrounds */}
      {bgImage ? (
        /* product detail: image + dark fade */
        <div className="absolute inset-0 -z-10">
          <img
            src={bgImage}
            alt={product?.title || "Product"}
            className="w-full h-[48vh] md:h-[60vh] object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        </div>
      ) : (
        /* catalog: liquid-glass glow */
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
              background: "radial-gradient(circle at 50% 50%, rgba(255,172,64,0.22), rgba(255,172,64,0) 60%)",
            }}
          />
          <div
            className="absolute -bottom-28 -right-20 w-[460px] h-[460px] rounded-full blur-3xl opacity-20"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(80,170,255,0.20), rgba(80,170,255,0) 60%)",
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-6 relative">
        <div
          className={[
            isDetail ? "max-w-2xl" : "max-w-4xl",
            "mx-auto",
            isDetail ? "ml-0 md:ml-0 lg:ml-0" : "",
            isDetail ? "text-left" : "text-center",
          ].join(" ")}
        >
          {/* Glass content wrapper on product detail */}
          <div
            className={[
              isDetail
                ? "rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-6 md:p-8"
                : "",
            ].join(" ")}
          >
            <h1
              className={[
                "font-extrabold mb-4",
                isDetail ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl",
              ].join(" ")}
            >
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                {isDetail ? product.title : "Wholesale Product Catalog"}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-200/90 mb-6">
              {isDetail
                ? product.description
                : "Premium channel letters, acrylic letters, and metal fabrication for sign companies. Fast turnaround, competitive wholesale pricing, nationwide shipping."}
            </p>

            {/* Chips (glass) */}
            <div className={["flex flex-wrap gap-3", isDetail ? "" : "justify-center"].join(" ")}>
              {chips.map((label, i) => {
                const Icon = i === 0 ? Clock : i === 1 ? Shield : Star;
                return (
                  <span
                    key={`${label}-${i}`}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-sm"
                  >
                    <Icon className="w-4 h-4 mr-2 text-orange-300" />
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
