"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 2000); // show after 2s
    return () => clearTimeout(t);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded card */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 mb-2 animate-in fade-in-0">
          <div className="rounded-lg border border-neutral-700 bg-neutral-900/95 shadow-xl p-4 max-w-xs relative">
            <button
              aria-label="Close"
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-neutral-800"
            >
              <X className="w-4 h-4 text-neutral-300" />
            </button>
            <h3 className="font-semibold text-neutral-100 mb-2">Get Your Quote</h3>
            <p className="text-sm text-neutral-400 mb-3">
              Ready to start your project? Get wholesale pricing and professional drawings in 24–48 hours.
            </p>

            <div className="space-y-2">
              <Link
                href="/contact"
                className="block w-full text-center rounded-md px-3 py-2 font-medium bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Request Quote
              </Link>
              <Link
                href="/products"
                className="block w-full text-center rounded-md px-3 py-2 font-medium border border-neutral-700 text-neutral-100 hover:bg-neutral-800 transition"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        aria-label="Open quote options"
        onClick={() => setIsExpanded((v) => !v)}
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-orange-500 hover:bg-orange-600 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
