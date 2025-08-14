
export function OrganizationSchema({ name, url, logo, sameAs = [] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name, url, logo, sameAs
  };
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function ProductSchema({ name, description, brand, sku, category, material, additionalProperty=[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name, description,
    brand: { "@type": "Brand", name: brand },
    sku, category, material,
    additionalProperty: additionalProperty.map(p => ({ "@type": "PropertyValue", ...p })),
  };
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function FAQSchema({ items=[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(q => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a }
    }))
  };
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function HowToSchema({ name, steps=[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map(s => ({ "@type":"HowToStep", name: s.name, text: s.text }))
  };
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
