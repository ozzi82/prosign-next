
import { ProductSchema } from "../components/SeoSchema";

export const metadata = { title: "Trimless Channel Letters | Wholesale | ProSign" };

export default function Page() {
  return (
    <main className="container py-10">
      <ProductSchema
        name="Trimless Channel Letters"
        description="True trimless design with clean edges, tight seams, and uniform LED illumination."
        brand="ProSign Manufacturing"
        sku="TRIMLESS-CH-BASE"
        category="LED Signage"
        material="Stainless steel / Acrylic"
        additionalProperty={[
          { name: "Lighting", value: "Front-lit, back-lit, or combo" },
          { name: "Mounting", value: "Studs or rail, plans included" },
          { name: "Warranty", value: "Manufacturer warranty on LEDs & PSU" }
        ]}
      />
      <h1>Trimless Channel Letters</h1>
      <p className="mt-3">True trimless design with clean edges, tight seams, and uniform LED illumination.</p>
      <ul className="mt-4 list-disc pl-6 text-neutral-300">
        <li>Materials: Stainless (satin, mirror, painted) or acrylic</li>
        <li>Lighting: High-efficiency LEDs, even diffusion</li>
        <li>Mounting: Stud or rail with detailed plans</li>
      </ul>
    </main>
  );
}
