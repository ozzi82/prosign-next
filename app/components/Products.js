import Link from "next/link";

const productsData = [
  {
    image: "/images/trimless.jpg",
    title: "Trimless Channel Letters",
    description: "True trimless, flush-face letters with UL-listed LEDs and clean modern edges.",
    price: "Starting at $299",
    features: ["Seamless faces", "UL-listed LEDs", "Weather sealed", "24–48h drawings"],
    href: "/channel-letters",
  },
  {
    image: "/images/acrylic.jpg",
    title: "Cast Acrylic Letters",
    description: "Precision-cut cast block acrylic with polished edges and custom finishes.",
    price: "Starting at $14/in",
    features: ["Polished edges", "Stud-mounted", "PMS/RAL colors", "Indoor/Outdoor"],
    href: "/cast-acrylic-letters",
  },
  {
    image: "/images/cabinet.jpg",
    title: "LED Cabinet Signs",
    description: "High-visibility cabinet signs with rugged frames and even LED illumination.",
    price: "Starting at $2,999",
    features: ["Even diffusion", "Durable frames", "Wall/Pylon mount", "UL components"],
    href: "/cabinet-signs",
  },
  {
    image: "/images/blade.jpg",
    title: "Blade Signs",
    description: "Architectural blade signs with double-sided visibility and optional lighting.",
    price: "Custom pricing",
    features: ["Double-sided", "LED options", "Architectural finishes", "Custom shapes"],
    href: "/blade-signs",
  },
  {
    image: "/images/ada.jpg",
    title: "ADA Signs",
    description: "Code-compliant ADA signage with Grade 2 Braille and tactile lettering.",
    price: "From $45/panel",
    features: ["Grade 2 Braille", "Tactile lettering", "Contrast compliant", "Durable finishes"],
    href: "/ada-signs",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Rounded, drifting background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="liquid-blob animate-blob-1"
          style={{
            top: "20%", left: "35%", width: "620px", height: "620px",
            background: "radial-gradient(circle at 50% 50%, rgba(255,172,64,0.25), rgba(255,172,64,0.0) 60%)",
          }}
        />
        <div
          className="liquid-blob animate-blob-2 anim-delay-1500"
          style={{
            bottom: "-160px", left: "-160px", width: "520px", height: "520px",
            background: "radial-gradient(circle at 50% 50%, rgba(64,181,255,0.22), rgba(64,181,255,0.0) 60%)",
          }}
        />
        <div
          className="liquid-blob animate-blob-3 anim-delay-3000"
          style={{
            top: "-80px", right: "-80px", width: "320px", height: "320px",
            background: "radial-gradient(circle at 50% 50%, rgba(255,214,102,0.20), rgba(255,214,102,0.0) 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Products</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Explore our most popular signage solutions designed to elevate your business presence.
          </p>
        </div>

        {/* 5 products — add xl:5 to show five-up at wide screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {productsData.map((p, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Card liquid blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="liquid-blob animate-blob-1"
                  style={{
                    top: "20%", left: "10%", width: "220px", height: "220px",
                    background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25), rgba(255,255,255,0) 60%)",
                  }}
                />
                <div
                  className="liquid-blob animate-blob-2 anim-delay-1500"
                  style={{
                    bottom: "10%", right: "8%", width: "180px", height: "180px",
                    background: "radial-gradient(circle at 50% 50%, rgba(255,164,80,0.20), rgba(255,164,80,0) 60%)",
                  }}
                />
                <div
                  className="liquid-blob animate-blob-3 anim-delay-3000"
                  style={{
                    top: "10%", right: "25%", width: "140px", height: "140px",
                    background: "radial-gradient(circle at 50% 50%, rgba(90,170,255,0.18), rgba(90,170,255,0) 60%)",
                  }}
                />
              </div>

              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} wholesale signage`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <span className="text-orange-400 font-semibold text-lg">{p.price}</span>
                </div>
                <p className="text-neutral-300">{p.description}</p>

                <ul className="space-y-2 my-6">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="text-sm text-neutral-300 flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Link
                    href={`/contact?product=${encodeURIComponent(p.title)}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white/10 border border-white/30 text-white font-medium rounded hover:bg-white/20 transition"
                    aria-label={`Get quote for ${p.title}`}
                  >
                    Get Quote
                  </Link>
                  <Link
                    href={p.href}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white/10 border border-white/30 text-white rounded hover:bg-white/20 transition"
                    aria-label={`View details for ${p.title}`}
                  >
                    Details
                  </Link>
                </div>
              </div>

              {/* Subtle halo on hover */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(80% 80% at 50% 50%, rgba(255,172,64,0.14) 0%, rgba(255,172,64,0.07) 40%, rgba(255,172,64,0) 70%)",
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center px-10 py-4 bg-orange-500 text-white text-lg rounded hover:bg-orange-600 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
