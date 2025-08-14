import Link from "next/link";
import { CheckCircle } from "lucide-react";

function badgeClasses(text) {
  const t = String(text).toLowerCase();
  if (t.includes("best"))    return "bg-blue-500/18 text-blue-200 border-blue-400/30";
  if (t.includes("premium")) return "bg-indigo-500/16 text-indigo-200 border-indigo-400/30";
  if (t.includes("ul"))      return "bg-white/8 text-neutral-200 border-white/15";
  if (t.includes("year"))    return "bg-white/8 text-neutral-200 border-white/15";
  return "bg-white/8 text-neutral-200 border-white/15";
}

const MAX_PREVIEW = 180; // chars shown before "Read more"

/** Server component – uses <details> for the toggle (no JS). */
export default function ProductCard({ product }) {
  const {
    id,
    title,
    description = "",
    image,
    badges = [],
    specifications = {},
  } = product || {};

  const specs = Object.entries(specifications);

  // Split description into preview + rest
  const needsMore = description.length > MAX_PREVIEW;
  const preview =
    needsMore ? description.slice(0, MAX_PREVIEW).replace(/\s+\S*$/, "") + "…" : description;

  return (
    <article className="h-full">
      {/* one card, no outer gradient wrapper to avoid “gray backer” */}
      <div className="flex h-full flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        {/* Image */}
        {image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={title ? `${title} product photo` : "Product photo"}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        {/* Content (flex-1 so actions sit at the bottom; equal height cards) */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Badges */}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {badges.map((b, i) => (
                <span
                  key={`${b}-${i}`}
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeClasses(
                    b
                  )}`}
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>

          {/* Description with “Read more” */}
          {description && (
            <details className="group mt-1">
              {/* preview shown when closed */}
              <p className="text-neutral-300 group-open:hidden">{preview}</p>

              {/* full text when open */}
              {needsMore && (
                <div className="hidden group-open:block">
                  <p className="text-neutral-300">{description}</p>
                </div>
              )}

              {/* summary button */}
              {needsMore && (
                <summary className="mt-2 text-sm text-orange-300 hover:text-orange-200 cursor-pointer list-none inline-flex items-center">
                  <span className="group-open:hidden">Read more</span>
                  <span className="hidden group-open:inline">Show less</span>
                </summary>
              )}
            </details>
          )}

          {/* Specifications */}
          {specs.length > 0 && (
            <div className="mt-5">
              <h4 className="text-sm font-semibold text-white mb-2">Specifications</h4>
              <ul className="space-y-1.5">
                {specs.map(([label, value], idx) => (
                  <li key={idx} className="text-sm text-neutral-300 flex">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-400 flex-shrink-0" />
                    <span>
                      <span className="font-medium text-neutral-200">{label}:</span>{" "}
                      <span className="text-neutral-300">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions pinned to bottom via mt-auto on the wrapper */}
          <div className="mt-auto pt-6 flex gap-3">
            <Link
              href={`/products/${id}`}
              className="flex-1 inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold text-neutral-900"
              style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
            >
              View Details
            </Link>
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center rounded-xl px-4 py-2 border border-white/15 text-white bg-white/5 hover:bg-white/10 transition"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
