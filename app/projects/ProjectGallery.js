"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Plaza Shopping Center",
    location: "Retail Complex",
    type: "Trimless Channel Letters",
    image: "/lovable-uploads/04527713-5a62-42a7-8c53-a76cc1d16206.png",
    description:
      "Large-scale trimless channel letters with perfect flush-face installation. Clean, professional appearance with no visible seams.",
    features: ["60\" tall letters", "White LED illumination", "Flush mounting", "Weather sealed"],
    category: "retail",
  },
  {
    id: 2,
    title: "Resistor Technology",
    location: "Corporate Office",
    type: "Illuminated Channel Letters",
    image: "/lovable-uploads/35f59ec9-bce4-4cea-bf24-64fe074725e0.png",
    description:
      "Vibrant pink illuminated channel letters creating strong brand visibility. Custom color matching and precision fabrication.",
    features: ["Custom pink color", "High-visibility LED", "Corporate branding", "Night impact"],
    category: "corporate",
  },
  {
    id: 3,
    title: "Professional Services",
    location: "Medical Building",
    type: "Halo-Lit Letters",
    image: "/lovable-uploads/4ab12be9-9199-4263-b08b-208aab0968ee.png",
    description:
      "Sophisticated halo-illuminated letters with warm backlighting effect. Perfect for upscale professional environments.",
    features: ["Warm white halo", "Standoff mounting", "Professional finish", "Architectural quality"],
    category: "professional",
  },
  {
    id: 4,
    title: "Signature Styles",
    location: "Boutique Retail",
    type: "Trimless Channel Letters",
    image: "/lovable-uploads/71fcf487-152f-4a68-8ad8-9075fa11c370.png",
    description:
      "Elegant white channel letters with seamless trimless construction. Perfect for high-end retail applications.",
    features: ["Seamless design", "Premium white finish", "Retail optimization", "Brand enhancement"],
    category: "retail",
  },
  {
    id: 5,
    title: "Subway Restaurant",
    location: "Quick Service",
    type: "Backlit Channel Letters",
    image: "/lovable-uploads/be85f9ad-8d0b-4c0f-8921-f630ba88ee69.png",
    description:
      "High-impact backlit letters for maximum visibility. Strategic lighting design for quick service restaurant branding.",
    features: ["High visibility", "Brand standard colors", "Quick service design", "Maximum impact"],
    category: "restaurant",
  },
];

export default function ProjectGallery() {
  const [active, setActive] = useState("all");

  const categories = useMemo(() => {
    const counts = PROJECTS.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    return [
      { id: "all", name: "All Projects", count: PROJECTS.length },
      ...Object.keys(counts).map((c) => ({
        id: c,
        name: c.charAt(0).toUpperCase() + c.slice(1),
        count: counts[c],
      })),
    ];
  }, []);

  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  // SEO: CollectionPage JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects & References",
    about: "Wholesale signage references and recent installations",
    hasPart: PROJECTS.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      about: p.type,
      contentLocation: p.location,
      image: p.image,
      genre: p.category,
      description: p.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                Projects & References
              </span>
            </h1>
            <p className="text-lg text-neutral-300 mt-3">
              Real installations across retail, corporate, professional, and restaurant environments.
            </p>
          </div>

          {/* Filter chips (glass) */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max">
              {categories.map((c) => {
                const activeState = active === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    aria-pressed={activeState}
                    className={[
                      "whitespace-nowrap rounded-full px-4 py-2 text-sm transition border backdrop-blur-md",
                      activeState
                        ? "bg-orange-500 text-white border-orange-500 shadow"
                        : "bg-white/5 text-white border-white/10 hover:bg-white/10",
                    ].join(" ")}
                  >
                    {c.name}
                    <span className="opacity-70 ml-1">({c.count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects grid (glass cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="group relative rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.type}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(60% 60% at 50% 60%, rgba(255,172,64,0.18), rgba(255,172,64,0))" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={`/contact?project=${encodeURIComponent(project.title)}`}
                      className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold bg-white/90 text-neutral-900 hover:bg-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Request Similar Project
                    </Link>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-1 truncate">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-neutral-300">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 opacity-80" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>
                    <span className="shrink-0 text-[11px] rounded-full border border-white/15 bg-white/5 px-2 py-1 text-neutral-200">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-300">{project.description}</p>

                  <div className="mt-4">
                    <h5 className="font-medium text-white text-sm mb-1">Project Highlights</h5>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((f, i) => (
                        <li key={i} className="text-xs text-neutral-300">• {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA (glass) */}
          <div className="text-center">
            <div className="inline-block rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <div className="p-8 max-w-2xl">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Start Your Project?
                </h3>
                <p className="text-neutral-300 mb-6">
                  Get wholesale pricing on trimless channel letters and illuminated signage.
                  24–48 hour quotes, professional drawings included.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-xl font-semibold text-neutral-900"
                    style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/products"
                    className="px-6 py-3 rounded-xl border border-white/15 text-white bg-white/5 hover:bg-white/10 transition"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
