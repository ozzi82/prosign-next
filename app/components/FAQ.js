// app/components/FAQ.js (server component)
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function FAQ({
  withSchema = true,
  maxItems,
  title = "Frequently Asked Questions",
  showViewAll = true,
} = {}) {
  const faqs = [
    {
      question: "What are trimless channel letters?",
      answer:
        "Trimless channel letters feature a flush-face design with no visible trim or seams around the face. The LED modules are fully enclosed within the letter, creating a clean, seamless appearance that's superior to traditional trim-cap construction.",
    },
    {
      question: "What is the minimum stroke width for trimless letters?",
      answer:
        "Our trimless channel letters require a minimum stroke width of 1.5 inches to accommodate the LED modules and maintain structural integrity. For smaller text, we recommend our cast block acrylic letters.",
    },
    {
      question: "What is your lead time from art approval?",
      answer:
        "Production and delivery is 21 days from final art approval. We provide production drawings and 3D renderings within 24–48 hours of order placement for your approval before manufacturing begins.",
    },
    {
      question: "Are your channel letters UL 48 listed?",
      answer:
        "Yes, all our channel letters use UL 48 listed LED modules and are manufactured to UL standards. We provide UL documentation with every order and include appropriate power supplies.",
    },
    {
      question: "Do you ship to Canada?",
      answer:
        "Yes, we ship to both USA and Canada. All products are manufactured in Florida and shipped via freight carriers. Shipping costs are calculated based on weight, dimensions, and destination.",
    },
    {
      question: "What's included with every order?",
      answer:
        "Every order includes: production drawings, 3D day/night renderings, touch-up paint (for painted products), 1:1 installation patterns, power supplies (for LED products), and a comprehensive 3-year warranty.",
    },
  ];

  const visibleFaqs = typeof maxItems === "number" ? faqs.slice(0, maxItems) : faqs;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: visibleFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Distinct background so it transitions nicely into footer */}
      <section className="relative py-20 overflow-hidden text-neutral-200">
        {/* Background: deep gradient + round drifting blobs + faint top glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0b0f19] to-[#0a0e17]" />
          <div
            className="absolute -top-24 left-1/4 w-[540px] h-[540px] rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,172,64,0.25), rgba(255,172,64,0.00) 60%)",
            }}
          />
          <div
            className="absolute bottom-[-140px] right-1/3 w-[420px] h-[420px] rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(80,170,255,0.20), rgba(80,170,255,0.00) 60%)",
            }}
          />
          <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
            <p className="text-lg text-neutral-300">
              Answers about trimless letters, cast acrylic, lead times, UL listing, shipping, and more.
            </p>
          </div>

          {/* Glass accordion cards */}
          <div className="space-y-4">
            {visibleFaqs.map((faq, i) => (
              <details
                key={i}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 shadow-lg transition-colors"
              >
                {/* subtle per-card glow */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-open:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 20% 0%, rgba(255,172,64,0.14), rgba(255,172,64,0))",
                  }}
                />
                <summary className="cursor-pointer list-none text-left text-lg font-semibold text-white flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-white/80 transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="mt-3 text-neutral-200/90">{faq.answer}</div>
              </details>
            ))}
          </div>

          {/* Reassurance pills (glass chips) */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "UL 48 listed components",
              "24–48h drawings & quotes",
              "3-year comprehensive warranty",
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 shadow"
              >
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-neutral-100">{t}</span>
              </div>
            ))}
          </div>

          {showViewAll && (
            <div className="text-center mt-10">
              <Link
                href="/faq"
                className="inline-flex items-center rounded-xl px-5 py-2 font-semibold text-neutral-900"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                View all FAQs
              </Link>
            </div>
          )}
        </div>
        
      </section>
    </>
  );
}
