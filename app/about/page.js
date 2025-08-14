// app/about/page.js
import { CheckCircle, Users, Shield, Clock, Award, Factory, Truck } from "lucide-react";

export const metadata = {
  title: "About | Sunlite Signs",
  description:
    "25 years of innovation in wholesale signage manufacturing. Trimless channel letters, acrylic letters, and nationwide service.",
};

export default function AboutPage() {
  const milestones = [
    { year: "1999", event: "Company Founded", description: "Started as a small fabrication shop" },
    { year: "2005", event: "First Major Expansion", description: "Added automated cutting equipment" },
    { year: "2010", event: "LED Technology Leader", description: "Early adopter of LED lighting systems" },
    { year: "2015", event: "Trimless Innovation", description: "Developed proprietary trimless channel letter process" },
    { year: "2020", event: "National Distribution", description: "Serving all 50 states and Canada" },
    { year: "2024", event: "25 Years Strong", description: "Industry leader in wholesale manufacturing" },
  ];

  const capabilities = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "50,000 sq ft Manufacturing",
      description:
        "State-of-the-art facility with advanced CNC equipment, laser cutting, and automated LED assembly lines.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description:
        "Skilled craftspeople, engineers, and quality control specialists with decades of combined experience.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Standards",
      description:
        "ISO 9001 certified quality management system ensuring consistent, reliable manufacturing processes.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Nationwide Shipping",
      description:
        "Fast, secure shipping to all 50 states and Canada with tracking and white-glove delivery options.",
    },
  ];

  const quality = [
    { icon: <Shield className="w-8 h-8 text-orange-400" />, title: "UL Listed", text: "All LED components meet UL safety standards" },
    { icon: <Award className="w-8 h-8 text-orange-400" />, title: "ISO 9001", text: "Certified quality management system" },
    { icon: <Clock className="w-8 h-8 text-orange-400" />, title: "5 Year Warranty", text: "Comprehensive warranty on all LED systems" },
    { icon: <CheckCircle className="w-8 h-8 text-orange-400" />, title: "100% QC", text: "Every product tested before shipment" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Sunlite Signs Manufacturing",
    mainEntity: {
      "@type": "Organization",
      name: "Sunlite Signs",
      areaServed: ["US", "CA"],
      url: "https://www.sunlitesigns.com",
      logo: "https://www.sunlitesigns.com/logo.png",
    },
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20">
        {/* top separator line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />
        {/* liquid background */}
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                About Sunlite Signs Manufacturing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300">
              25 years of innovation in wholesale signage manufacturing. Trusted by sign companies
              across North America for quality, reliability, and exceptional service.
            </p>

            {/* glass stat chips */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Years", value: "25+" },
                { label: "Partners", value: "2,500+" },
                { label: "Projects", value: "150k+" },
                { label: "Coverage", value: "US & CA" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-md py-3 text-center"
                >
                  <div className="text-xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-neutral-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY + TIMELINE */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-lg text-neutral-300 mb-6">
              Founded in 1999, Sunlite Signs began as a small fabrication shop with a simple mission:
              create the highest quality channel letters and signage products for the sign industry.
            </p>
            <p className="text-lg text-neutral-300 mb-6">
              Over 25 years, we've grown into one of North America's leading wholesale signage manufacturers,
              pioneering innovations like true trimless channel letters and advanced LED integration systems.
            </p>
            <p className="text-lg text-neutral-300 mb-8">
              Today, we serve over 2,500 sign companies across the USA and Canada, maintaining our commitment
              to quality, innovation, and the partnerships that built our success.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-3xl font-bold text-white">2,500+</div>
                <div className="text-sm text-neutral-300">Sign Company Partners</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-3xl font-bold text-white">150,000+</div>
                <div className="text-sm text-neutral-300">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Company Timeline (fixed, liquid-glass) */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <h3 className="text-2xl font-bold text-white mb-6">Company Timeline</h3>

            {/* vertical guide line + list */}
            <div className="relative">
              <span className="pointer-events-none absolute left-[32px] top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
              <ol className="mt-2">
                {milestones.map((m) => (
                  <li key={m.year} className="relative grid grid-cols-[72px_1fr] gap-4 py-3">
                    {/* year badge */}
                    <div className="relative flex items-start justify-center">
                      <div className="h-12 w-12 rounded-full bg-white/8 border border-white/20 backdrop-blur-md ring-4 ring-orange-400/15 shadow flex items-center justify-center text-xs font-semibold text-white">
                        {m.year}
                      </div>
                      {/* connector */}
                      <span className="absolute left-[68px] top-[24px] h-px w-5 bg-white/15" />
                    </div>

                    {/* event card */}
                    <div className="group rounded-2xl bg-white/5 border border-white/10 p-4">
                      <div className="text-lg font-semibold text-white">{m.event}</div>
                      <p className="text-neutral-300">{m.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative overflow-hidden py-20">
        {/* top separator line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Manufacturing Excellence</h2>
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto">
              Advanced equipment, skilled craftspeople, and rigorous quality control ensure
              every product meets the highest industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="text-orange-400 mb-4">{c.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-neutral-300">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & CERTIFICATIONS */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Quality & Certifications</h2>
            <p className="text-xl text-neutral-300">
              Our commitment to quality is backed by industry certifications and rigorous testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quality.map((q) => (
              <div key={q.title} className="text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-white/8 border border-white/15 backdrop-blur-md">
                  {q.icon}
                </div>
                <h3 className="font-semibold text-white mb-1">{q.title}</h3>
                <p className="text-sm text-neutral-300">{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
