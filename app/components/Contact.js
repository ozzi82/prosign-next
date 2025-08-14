// app/components/Contact.js
"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Calculator, FileText, Phone, Mail } from "lucide-react";

export default function Contact() {
  // HubSpot embed
  const formRef = useRef(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!scriptReady || !formRef.current) return;
    // prevent double-render
    if (formRef.current.dataset.rendered) return;

    if (typeof window !== "undefined" && window.hbspt?.forms?.create) {
      window.hbspt.forms.create({
        portalId: "47141522",
        formId: "02a5f813-b959-4141-bd1e-28edc296de68",
        region: "na1",
        target: "#hubspot-form-container",
      });
      formRef.current.dataset.rendered = "1";
    }
  }, [scriptReady]);

  const chips = [
    { icon: Calculator, text: "24–48h Quote Turnaround" },
    { icon: FileText, text: "Detailed Production Drawings" },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Get in Touch with Our Team",
      primary: { label: "WEST: +1 123 4455 · Kenan Hanhan", href: "tel:+11234455" },
      secondary: { label: "EAST: +1 123 4455 · Ozan Yilmaz", href: "tel:+11234455" },
      description: "Speak directly with our sales team.",
      hours: "Mon–Fri · 7:00 AM – 6:00 PM EST",
    },
    {
      icon: Mail,
      title: "Email Quotes",
      primary: { label: "hello@sunlitesigns.com", href: "mailto:hello@sunlitesigns.com" },
      description: "Send detailed specifications for pricing.",
      hours: "",
    },
  ];

  return (
    <>
      {/* HubSpot script */}
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />

      {/* HERO — liquid glass */}
      <section className="relative overflow-hidden pt-28 pb-16 text-neutral-100">
        {/* top separator line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{
            background:
              "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)",
          }}
        />
        {/* background glows */}
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

        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
              Get Your Wholesale Quote
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200/90 mb-6">
            Ready to start your next signage project? Our team provides fast, accurate quotes for
            wholesale channel letters and acrylic signage.
          </p>

          {/* glass chips */}
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {chips.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-sm"
              >
                <Icon className="w-4 h-4 mr-2 text-orange-300" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT — contact info + program */}
          <div className="space-y-8">
            <div className="relative rounded-3xl border border-white/10 bg-white/6 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <h2 className="text-3xl font-bold text-white mb-4">Contact Our Sales Team</h2>
              <p className="text-neutral-300">
                Multiple ways to reach us for quotes, technical support, and order assistance. We’re
                here to help with your wholesale signage needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactMethods.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-orange-300 bg-white/10 border border-white/15 p-3 rounded-xl">
                      <m.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{m.title}</h3>

                      {m.primary?.label && (
                        <p className="text-neutral-200 font-medium">
                          {m.primary.href ? (
                            <Link href={m.primary.href} className="hover:underline">
                              {m.primary.label}
                            </Link>
                          ) : (
                            m.primary.label
                          )}
                        </p>
                      )}

                      {m.secondary?.label && (
                        <p className="text-neutral-300 text-sm mb-2">
                          {m.secondary.href ? (
                            <Link href={m.secondary.href} className="hover:underline">
                              {m.secondary.label}
                            </Link>
                          ) : (
                            m.secondary.label
                          )}
                        </p>
                      )}

                      {m.description && (
                        <p className="text-sm text-neutral-300">{m.description}</p>
                      )}
                      {m.hours && (
                        <p className="text-xs text-neutral-400 mt-1">{m.hours}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner program */}
            <div className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-xl font-bold text-white mb-4">Wholesale Partner Program</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Volume discounts for regular customers",
                  "Net 30 terms for qualified accounts",
                  "Dedicated account representative",
                  "Priority production scheduling",
                ].map((t) => (
                  <li key={t} className="flex items-center text-neutral-300">
                    <span className="w-2 h-2 bg-orange-300 rounded-full mr-3" />
                    {t}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-neutral-400 mt-4">
                Prefer email?{" "}
                <Link href="mailto:hello@sunlitesigns.com" className="text-orange-300 hover:underline">
                  hello@sunlitesigns.com
                </Link>
              </p>
            </div>
          </div>

          {/* RIGHT — HubSpot form (glass card + light inner for readability) */}
          <div className="rounded-3xl border border-white/10 bg-white/6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">Request Wholesale Quote</h3>
              <p className="text-neutral-300">
                Provide project details below for an accurate quote within 24–48 hours.
              </p>
            </div>
            <div className="p-6">
              {/* Keep white background to match HubSpot default styles */}
              <div
                id="hubspot-form-container"
                ref={formRef}
                className="min-h-[480px] rounded-xl border border-white/20 bg-white p-6 text-neutral-900"
              >
                <div className="h-full w-full flex items-center justify-center text-neutral-600">
                  Loading form…
                </div>
              </div>
              <p className="text-xs text-neutral-400 text-center mt-4">
                * By submitting this form, you agree to receive communications about your quote request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
