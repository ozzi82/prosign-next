"use client";

import Link from "next/link";
import { useContentByType } from "@/app/hooks/useContent";

export default function DynamicContent({ contentType, className = "", variant = "section" }) {
  const { content, loading, error } = useContentByType(contentType);

  const isInternal = (u) => typeof u === "string" && u.startsWith("/");

  const ButtonLink = ({ href, children, big = false }) =>
    isInternal(href) ? (
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-md font-semibold text-neutral-900 hover:opacity-95 transition ${
          big ? "px-6 py-3 text-lg" : "px-4 py-2"
        }`}
        style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
      >
        {children}
      </Link>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-md font-semibold text-neutral-900 hover:opacity-95 transition ${
          big ? "px-6 py-3 text-lg" : "px-4 py-2"
        }`}
        style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
      >
        {children}
      </a>
    );

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-4 bg-neutral-800 rounded w-3/4 mb-2" />
        <div className="h-4 bg-neutral-800 rounded w-1/2" />
      </div>
    );
  }

  if (error || !content) return null;

  const Hero = () => (
    <section className={`py-20 text-primary-foreground relative ${className} bg-gradient-hero`}>
      <div className="container mx-auto px-4 text-center">
        {content.title && (
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-100">{content.title}</h1>
        )}
        {content.subtitle && <p className="text-xl mb-6 text-gray-200">{content.subtitle}</p>}
        {content.description && (
          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">{content.description}</p>
        )}
        {content?.additional_data?.tagline && (
          <p className="text-lg mb-8 font-semibold text-orange-400">{content.additional_data.tagline}</p>
        )}
        {content.button_text && content.button_url && (
          <ButtonLink href={content.button_url} big>
            {content.button_text}
          </ButtonLink>
        )}
        {content.image_url && (
          <div className="mt-12">
            <img
              src={content.image_url}
              alt={content.title || "Image"}
              className="mx-auto rounded-lg shadow-2xl max-w-4xl w-full"
            />
          </div>
        )}
      </div>
    </section>
  );

  const Card = () => (
    <div className={`rounded-xl border border-neutral-800 bg-neutral-900/60 shadow ${className}`}>
      {content.title && (
        <div className="p-6 border-b border-neutral-800">
          <h3 className="text-xl font-semibold text-white">{content.title}</h3>
          {content.subtitle && <p className="text-neutral-400 mt-1">{content.subtitle}</p>}
        </div>
      )}
      <div className="p-6">
        {content.image_url && (
          <img
            src={content.image_url}
            alt={content.title || "Image"}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        {content.description && <p className="text-neutral-400 mb-4">{content.description}</p>}
        {content.button_text && content.button_url && (
          <ButtonLink href={content.button_url}>{content.button_text}</ButtonLink>
        )}
      </div>
    </div>
  );

  const Section = () => (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {content.title && (
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
            {content.title}
          </h2>
        )}
        {content.subtitle && (
          <p className="text-xl text-center text-neutral-400 mb-8">{content.subtitle}</p>
        )}
        {content.image_url && (
          <div className="text-center mb-8">
            <img
              src={content.image_url}
              alt={content.title || "Image"}
              className="mx-auto rounded-lg shadow-lg max-w-2xl w-full"
            />
          </div>
        )}
        {content.description && (
          <div className="max-w-4xl mx-auto text-center mb-8 text-neutral-300">
            <p>{content.description}</p>
          </div>
        )}
        {content.button_text && content.button_url && (
          <div className="text-center">
            <ButtonLink href={content.button_url}>{content.button_text}</ButtonLink>
          </div>
        )}
      </div>
    </section>
  );

  if (variant === "hero") return <Hero />;
  if (variant === "card") return <Card />;
  return <Section />;
}
