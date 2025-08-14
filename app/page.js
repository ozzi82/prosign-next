// app/page.js
import Hero from "./components/Hero";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
// If your Header is rendered in app/layout.tsx, you can remove this import
// import Header from "./components/Header";

import JsonLd from "./components/JsonLd";
// If OrganizationSchema/FAQSchema/HowToSchema are wrappers that also emit JSON-LD,
// you can delete them to avoid duplicates. We'll emit JSON-LD via <JsonLd /> only.
// import { OrganizationSchema, FAQSchema, HowToSchema } from "./components/SeoSchema";

const SITE = "https://www.sunlitesigns.com";
const LOGO = `${SITE}/logo.png`;           // ensure this exists in /public
const OG_IMAGE = `${SITE}/og.jpg`;         // create a 1200x630 image in /public/og.jpg

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Sunlite Signs — Wholesale Trimless Channel Letters",
    template: "%s | Sunlite Signs",
  },
  description:
    "UL-listed trimless channel letters & cast block acrylic letters. 24–48h quotes, pro drawings, ~21-day delivery across USA & Canada.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-CA": "/?region=ca",
    },
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Sunlite Signs",
    title: "Sunlite Signs — Wholesale Trimless Channel Letters",
    description:
      "UL-listed trimless channel letters & cast block acrylic letters. 24–48h quotes, pro drawings, ~21-day delivery across USA & Canada.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sunlite Signs manufacturing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunlite Signs — Wholesale Trimless Channel Letters",
    description:
      "UL-listed trimless channel letters & cast block acrylic letters. 24–48h quotes, pro drawings, ~21-day delivery across USA & Canada.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // add this file if you want iOS icon support
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  themeColor: "#0b0f1a",
};

export default function Home() {
  // --- JSON-LD blocks (keep these accurate) ---

  // Organization (1x only; remove any duplicate OrganizationSchema usage)
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sunlite Signs",
    legalName: "Sunlite Signs LLC",
    url: SITE,
    logo: LOGO, // Google recommends absolute URL
    // Add any real social profiles you have:
    sameAs: [
      // "https://www.instagram.com/sunlitesigns",
      // "https://www.facebook.com/profile.php?id=61553443110216",
      // "https://www.linkedin.com/company/sunlite-signs-llc",
    ],
    areaServed: ["US", "CA"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-689-294-0912",
        email: "hello@sunlitesigns.com",
        contactType: "sales",
        areaServed: ["US", "CA"],
        availableLanguage: ["en"],
      },
    ],
  };

  // WebSite (Sitelinks SearchBox). Only keep this if you actually have /search?q=
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sunlite Signs",
    url: SITE,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // FAQ data (for FAQPage rich result)
  const faqItems = [
    {
      "@type": "Question",
      name: "What are trimless channel letters?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Trimless channel letters feature a flush-face with no visible trim. LEDs are enclosed within the letter for a clean, modern look.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I get a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 24–48 hours once we receive artwork and specifications.",
      },
    },
    {
      "@type": "Question",
      name: "Do you ship across USA & Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We crate and insure all shipments and provide photo documentation before they leave our facility.",
      },
    },
  ];

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  };

  // HowTo (requesting a quote)
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Request a Quote for Trimless Channel Letters",
    step: [
      {
        "@type": "HowToStep",
        name: "Share your artwork",
        text: "Upload vector artwork (AI, EPS, PDF, SVG) or a high-resolution file.",
      },
      {
        "@type": "HowToStep",
        name: "Add specs",
        text:
          "Include letter height, finish, lighting type (front/back/combo), mounting method, and delivery ZIP/postal code.",
      },
      {
        "@type": "HowToStep",
        name: "Get drawings",
        text: "We send production drawings once ordered within 24–48 hours.",
      },
    ],
  };

  // Product examples (optional but helpful if you have dedicated product pages/images)
  const trimlessProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Trimless Channel Letters",
    brand: { "@type": "Brand", name: "Sunlite Signs" },
    category: "Signs",
    description:
      "True trimless, flush-face channel letters with UL-listed LEDs — modern, clean edges for premium storefronts.",
    url: `${SITE}/products/trimless-channel-letters`,
    image: `${SITE}/images/trimless-channel-letters.jpg`, // add file to /public/images/
    // If you don't want to publish prices, omit offers entirely.
    // offers: {
    //   "@type": "Offer",
    //   url: `${SITE}/contact`,
    //   priceCurrency: "USD",
    //   price: "24",
    //   availability: "https://schema.org/InStock",
    // },
  };

  const acrylicProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cast Block Acrylic Letters",
    brand: { "@type": "Brand", name: "Sunlite Signs" },
    category: "Signs",
    description:
      "Precision-cut cast block acrylic letters, custom finishes and sizes for architectural applications.",
    url: `${SITE}/products/cast-acrylic-letters`,
    image: `${SITE}/images/cast-acrylic-letters.jpg`,
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* JSON-LD */}
      <JsonLd data={organization} />
      <JsonLd data={website} />      {/* remove if you don’t have /search */}
      <JsonLd data={faqPage} />
      <JsonLd data={howTo} />
      <JsonLd data={trimlessProduct} />
      <JsonLd data={acrylicProduct} />

      {/* Page sections */}
      <Hero />
      <Products />
      <Services />

{/* Capabilities teaser (upgraded) */}
<section id="capabilities" aria-labelledby="capabilities-heading" className="relative overflow-hidden bg-neutral-950 py-20">
  {/* top separator line */}
  <div
    className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
    style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
  />

  {/* liquid-glass background layers */}
  <div className="absolute inset-0 -z-10">
    {/* slow conic glow */}
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmax] h-[120vmax] rounded-full opacity-15 blur-3xl animate-[spin_40s_linear_infinite]"
      style={{
        background:
          "conic-gradient(from 0deg, rgba(255,172,64,.22), rgba(80,170,255,.22), rgba(255,172,64,.22))",
      }}
    />
    {/* warm & cool blobs */}
    <div
      className="absolute -left-24 -top-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
      style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,172,64,.22), rgba(255,172,64,0) 60%)" }}
    />
    <div
      className="absolute -right-20 bottom-0 w-[460px] h-[460px] rounded-full blur-3xl opacity-20"
      style={{ background: "radial-gradient(circle at 50% 50%, rgba(80,170,255,.20), rgba(80,170,255,0) 60%)" }}
    />
  </div>

  <div className="container mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto">
      <h2 id="capabilities-heading" className="text-3xl md:text-5xl font-bold">
        <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
          Wholesale Manufacturing Capabilities
        </span>
      </h2>
      <p className="mt-4 text-neutral-300">
        Advanced manufacturing for trimless channel letters and cast block acrylic. 24–48&nbsp;hour
        quotes, ~21-day delivery from approval, 3-year warranty across USA &amp; Canada.
      </p>
    </div>

    {/* capability cards */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Acrylic & CNC */}
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            {/* layers icon */}
            <svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 9 5-9 5-9-5 9-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m3 14 9 5 9-5" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">Acrylic &amp; CNC</h3>
        </div>
        <ul className="space-y-2 text-sm text-neutral-200/90">
          <li className="flex gap-2"><svg className="mt-1 h-4 w-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Cast block acrylic up to 1.5″</li>
          <li className="flex gap-2"><svg className="mt-1 h-4 w-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Precision CNC &amp; laser cutting</li>
          <li className="flex gap-2"><svg className="mt-1 h-4 w-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Custom finishes &amp; paint matching</li>
        </ul>
      </div>

      {/* Metal Fabrication */}
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            {/* wrench/cog icon */}
            <svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317a1 1 0 0 1 1.35-.436l1.618.81a8.001 8.001 0 0 1 3.016 3.016l.81 1.618a1 1 0 0 1-.436 1.35l-1.07.535a6 6 0 1 1-5.143-5.143l.535-1.07z"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">Metal Fabrication</h3>
        </div>
        <ul className="space-y-2 text-sm text-neutral-200/90">
          <li className="flex gap-2"><svg className="mt-1 h-4 w-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Stainless &amp; aluminum builds</li>
          <li className="flex gap-2"><svg className="mt-1 h-4 w-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Trimless channel construction</li>
          <li className="flex gap-2"><svg className="mt-1 h-4 w-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Powder coat &amp; brushed finishes</li>
        </ul>
      </div>

      {/* Electrical & UL */}
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            {/* zap/bolt icon */}
            <svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">Electrical &amp; UL</h3>
        </div>
        <ul className="space-y-2 text-sm text-neutral-200/90">
          <li className="flex gap-2"><svg className="mt-1 h-4 w-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> UL-listed LED modules &amp; supplies</li>
          <li className="flex gap-2"><svg className="mt-1 h-4 w-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Day/Night renderings &amp; drawings</li>
          <li className="flex gap-2"><svg className="mt-1 h-4 w-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> 1:1 patterns &amp; documentation</li>
        </ul>
      </div>
    </div>

    {/* stats strip */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center py-4">
        <div className="text-2xl font-bold text-white">24–48h</div>
        <div className="text-neutral-300 text-sm">Quotes &amp; drawings</div>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center py-4">
        <div className="text-2xl font-bold text-white">~21 days</div>
        <div className="text-neutral-300 text-sm">From approval to delivery</div>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center py-4">
        <div className="text-2xl font-bold text-white">3 years</div>
        <div className="text-neutral-300 text-sm">Comprehensive warranty</div>
      </div>
    </div>

    {/* CTAs */}
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
      <a
        href="/contact"
        className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-neutral-900"
        style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
      >
        Request Wholesale Quote
      </a>
      <a
        href="/products"
        className="inline-flex items-center rounded-xl px-6 py-3 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
      >
        View Products
      </a>
    </div>
  </div>
</section>


      {/* <FeaturedProducts />  */}

      {/* Show FAQ UI but don’t emit duplicate JSON-LD here (we already did above) */}
      <FAQ withSchema={false} maxItems={4} title="FAQs about our manufacturing" />
    </main>
  );
}
