// app/products/page.js
import ProductHero from "./ProductHero";
import ProductGrid from "./ProductsGrid"; // 👈 matches the actual filename

export const metadata = {
  title: "Products | Sunlite Signs",
  description:
    "Trimless channel letters, cast block acrylic letters, and illuminated signage systems for sign professionals.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <ProductHero />
      <ProductGrid
        title="Our Products"
        subtitle="Engineered for sign professionals — UL-listed LEDs, 24–48h drawings & quotes, ~21-day delivery, 3-year warranty."
      />
    </main>
  );
}
