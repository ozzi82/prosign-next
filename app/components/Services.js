"use client";

import { Lightbulb, Printer, Wrench, Truck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "LED Channel Letters",
      description:
        "Custom illuminated channel letters and logo signs with energy-efficient LED lighting systems.",
      features: [
        "Custom fabrication",
        "Energy efficient LEDs",
        "Weather resistant",
        "UL listed components",
      ],
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Digital Printing",
      description:
        "Large format digital printing on various substrates including vinyl, mesh, and rigid materials.",
      features: [
        "UV resistant inks",
        "Large format capability",
        "Multiple substrates",
        "Color matching",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Custom Fabrication",
      description:
        "Complete sign fabrication services including metal work, acrylic forming, and assembly.",
      features: ["Metal fabrication", "Acrylic forming", "CNC routing", "Powder coating"],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Installation & Support",
      description:
        "Professional installation services and ongoing maintenance support for all sign types.",
      features: ["Licensed installers", "Permit assistance", "Maintenance plans", "24/7 support"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* moving gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[120%] h-[120%] animate-spin-slow bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-orange-500 via-pink-500 to-purple-600 opacity-30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            From design to installation, we provide comprehensive signage solutions for businesses
            of all sizes across the nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg overflow-hidden group transition-all duration-500 hover:scale-[1.02]"
            >
              {/* glowing blur on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 blur-2xl" />

              <div className="relative z-10">
                <div className="text-orange-400 mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="text-neutral-300 mt-1">{s.description}</p>

                <ul className="space-y-2 my-6">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="text-sm text-neutral-300 flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-orange-400/50 text-white rounded-lg hover:bg-orange-500 hover:border-orange-500 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
