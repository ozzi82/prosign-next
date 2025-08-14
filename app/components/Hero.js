"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Factory, Truck, Award, Zap } from "lucide-react";

const heroPlaceholder = "/hero-placeholder.jpg"; // put a file into /public or change this

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const content = {
    title: "Wholesale Trimless Channel Letters &",
    subtitle: "Cast Block Acrylic",
    description:
      "UL-listed trimless channel letters and precision-cut cast block acrylic letters. German engineering precision meets USA — serving sign companies across USA and Canada.",
    image_url:
      "https://www.sunlitesigns.com/wp-content/uploads/2024/12/RADAI-1024x768.jpg",
    button_text: "Request Wholesale Quote",
    button_url: "/contact",
    additional_data: {
      tagline: "Engineered for Sign Professionals",
      secondaryButtonText: "View Product Catalog",
      secondaryButtonUrl: "/products",
      stats: [
        { icon: "Factory", value: "25+ Years", label: "Manufacturing" },
        { icon: "Truck", value: "24 – 48h", label: "Quote Response" },
        { icon: "Award", value: "UL Listed", label: "Components" },
        { icon: "Zap", value: "LED", label: "Efficient Lighting" },
      ],
    },
  };

  const icons = { Factory, Truck, Award, Zap };
  const getIcon = (name) => icons[name] || Factory; // <-- JS-safe

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image + gentle vignettes */}
      <div className="absolute inset-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/80 via-neutral-800/60 to-neutral-700/40 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-ping" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-neutral-300 font-medium">Loading...</p>
              </div>
            </div>
          </div>
        )}

        <img
          src={content.image_url || heroPlaceholder}
          alt="Professional channel letter manufacturing facility"
          className={`w-full h-full object-cover object-left transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            if (e.currentTarget.src !== heroPlaceholder) e.currentTarget.src = heroPlaceholder;
            setImageLoaded(true);
          }}
          loading="eager"
        />

        {/* subtle vignette to improve contrast for the glass card */}
        <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_70%_50%,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.55)_100%)] pointer-events-none" />
      </div>

      {/* Foreground content aligned to right */}
      <div className="container mx-auto px-6 relative z-10 flex justify-end items-center min-h-screen">
        {/* GLASS CARD */}
        <div
          className={[
            "relative max-w-md w-full m-4 md:mr-8 rounded-2xl overflow-hidden",
            "bg-white/8 backdrop-blur-2xl ring-1 ring-white/15 shadow-xl",
            "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none",
            "before:[box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.06)]",
            "after:absolute after:inset-x-0 after:top-0 after:h-28 after:rounded-t-2xl after:pointer-events-none",
            "after:bg-gradient-to-b after:from-white/18 after:to-transparent",
          ].join(" ")}
        >
          {/* corner glow accent */}
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-70"
            style={{
              background:
                "radial-gradient(80% 80% at 110% -10%, rgba(255,172,64,0.25) 0%, rgba(255,172,64,0.12) 35%, rgba(255,172,64,0) 65%)",
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
          />

          <div className="relative p-5 md:p-7 space-y-4">
            <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
              {content.title}
              <span className="block text-3xl lg:text-5xl mt-1 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
                {content.subtitle}
              </span>
              <span className="block text-sm lg:text-lg mt-2 text-white/90 drop-shadow-md">
                {content.additional_data.tagline}
              </span>
            </h1>

            <p className="text-sm lg:text-base text-white/85 leading-relaxed drop-shadow-md">
              {content.description}
            </p>

            {/* CTAs (glassy primary + ghost glass) */}
            <div className="flex flex-col gap-2">
              <Link
                href={content.button_url}
                className="text-sm px-4 py-3 rounded-lg text-neutral-900 font-semibold inline-flex items-center justify-center shadow-md"
                style={{
                  background:
                    "linear-gradient(90deg,#ffb84d,#ff7a1a), radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 40%)",
                  backgroundBlendMode: "overlay, normal",
                }}
              >
                {content.button_text}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <Link
                href={content.additional_data.secondaryButtonUrl}
                className="text-sm px-4 py-3 rounded-lg text-white/95 font-semibold text-center border border-white/25 bg-white/10 hover:bg-white/15 backdrop-blur-md"
              >
                {content.additional_data.secondaryButtonText}
              </Link>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 text-sm pt-2">
              {content.additional_data.stats.map((s, i) => {
                const Icon = getIcon(s.icon); // <-- no TS cast
                return (
                  <div
                    key={i}
                    className="flex items-center text-white/95 bg-white/5 rounded-lg px-3 py-2 border border-white/10 backdrop-blur-sm"
                  >
                    <Icon className="w-5 h-5 mr-2 text-orange-400 drop-shadow-md" />
                    <div>
                      <div className="font-bold">{s.value}</div>
                      <div className="opacity-80 text-xs">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
