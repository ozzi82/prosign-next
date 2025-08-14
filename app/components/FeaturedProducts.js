import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const plazaLettersImage =
  "https://cdn.builder.io/api/v1/image/assets%2F91c68b23f3a04bf5a94564bf5338d5e4%2F2f66ed09023d40b3b70fa7bf13e196fc";
const haloLettersImage =
  "https://cdn.builder.io/api/v1/image/assets%2F91c68b23f3a04bf5a94564bf5338d5e4%2Fdc7335d63a994993b10b147eb551d888";

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: "trimless-channel-letters",
      image: plazaLettersImage,
      title: "Trimless Channel Letters",
      description:
        "True trimless design with no visible seams - our signature product that outperforms traditional channel letters.",
      features: [
        "Flush-face design, no trim lines",
        "UL listed LED modules included",
        "Weather sealed construction",
        "Custom fonts and sizes",
        "3-year comprehensive warranty",
      ],
      highlight: true,
      price: "Starting at $24/letter",
    },
    {
      id: "halo-lit-letters",
      image: haloLettersImage,
      title: "Halo-Lit Channel Letters",
      description:
        "Premium halo-illuminated letters with beautiful warm backlighting effects - perfect for sophisticated architectural applications.",
      features: [
        "Even halo illumination effect",
        "Multiple standoff heights available",
        "Premium brushed or painted faces",
        "Warm LED backlighting",
        "Architectural quality finish",
      ],
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Featured Products
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            Our most popular wholesale signage products, trusted by sign
            companies across North America. 24-48 hour quotes, professional
            drawings included, 21-day delivery from approval.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className={[
                // glass base
                "relative group rounded-2xl overflow-hidden",
                "bg-white/5 backdrop-blur-xl ring-1 ring-white/10",
                // subtle inner border + top highlight using extra layers
                "before:absolute before:inset-0 before:pointer-events-none before:rounded-2xl",
                "before:[box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.06)]",
                "after:absolute after:inset-x-0 after:top-0 after:h-24 after:pointer-events-none after:rounded-t-2xl",
                "after:bg-gradient-to-b after:from-white/12 after:to-transparent",
                // interaction
                "transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(255,160,60,0.25)]",
                product.highlight ? "ring-1 ring-orange-300/30" : "",
              ].join(" ")}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* softer image veil to improve text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                {/* glass price chip */}
                {product.price && (
                  <span className="absolute bottom-3 left-3 text-sm text-white/90 px-3 py-1 rounded-lg border border-white/20 backdrop-blur-md bg-white/10 shadow-sm">
                    {product.price}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-6 relative">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
                  {product.highlight && (
                    <Star className="w-6 h-6 text-yellow-400/90" />
                  )}
                </div>

                <p className="text-neutral-300">{product.description}</p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-neutral-300 flex items-start"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link
                    href="/products"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white/95 rounded-lg hover:bg-white/5 transition backdrop-blur-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* soft outer glow on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background:
                  "radial-gradient(80% 80% at 50% 50%, rgba(255,172,64,0.15) 0%, rgba(255,172,64,0.08) 40%, rgba(255,172,64,0.00) 70%)",
              }} />
            </div>
          ))}
        </div>

        {/* CTA to Products */}
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center text-xl px-12 py-6 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            View Our Sunlite Signs Signage Selection Guide
            <ArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
