import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import ProductHero from "../ProductHero";
import { products, getProductById } from "../../data/products";
import ImageSlider from "../../components/ImageSlider";


export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const product = getProductById(params.id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} | Sunlite Signs`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);
  if (!product) {
    return (
      <main className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-neutral-400 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center rounded-md px-4 py-2 font-semibold text-neutral-900"
            style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    category: product.category,
    image: [product.dayImage, product.nightImage].filter(Boolean),
    brand: { "@type": "Brand", name: "Sunlite Signs" },
  };

  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <ProductHero product={product} />

      {/* Breadcrumb + Category */}
      <section className="pb-4 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span>›</span>
            <span className="text-white font-semibold">{product.title}</span>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-orange-500/40 text-orange-300">
              {product.category}
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 bg-neutral-950">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="inline-flex items-center text-neutral-300 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
<div className="animate-fade-in">
  <ImageSlider
    dayImage={product.dayImage}
    nightImage={product.nightImage}
    productTitle={product.title}
  />
</div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                {/* Badges */}
                {product.badges?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.badges.map((b, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border border-neutral-700 text-neutral-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="text-4xl font-bold text-white mb-3">
                  {product.title}
                </h1>
                <p className="text-lg text-neutral-400 mb-6">{product.description}</p>

                <div className="flex gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md px-5 py-3 font-semibold text-neutral-900"
                    style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md px-5 py-3 border border-neutral-700 text-white hover:bg-neutral-800 transition"
                  >
                    Technical Support
                  </Link>
                </div>
              </div>

              {/* Features */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow">
                <div className="p-6 border-b border-neutral-800">
                  <h2 className="text-xl font-bold text-white">Key Features</h2>
                  <p className="text-neutral-400 text-sm">
                    Professional-grade features for superior performance
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    {product.features.map((f, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-300">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow">
            <div className="p-6 border-b border-neutral-800">
              <h2 className="text-2xl font-bold text-white">Technical Specifications</h2>
              <p className="text-neutral-400 text-sm">
                Detailed technical information and specifications
              </p>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([label, value]) => (
                <div key={label} className="space-y-2">
                  <div className="font-medium text-white">{label}:</div>
                  <p className="text-sm text-neutral-300 pl-4 border-l-2 border-neutral-700">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow">
              <div className="p-8 max-w-2xl">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Order {product.title}?
                </h3>
                <p className="text-neutral-400 mb-6">
                  Get wholesale pricing and professional drawings. Our team provides
                  24–48 hour quotes with complete technical specifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-md font-semibold text-neutral-900"
                    style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
                  >
                    Request Wholesale Quote
                  </Link>
                  <Link
                    href="/products"
                    className="px-6 py-3 rounded-md border border-neutral-700 text-white hover:bg-neutral-800 transition"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
