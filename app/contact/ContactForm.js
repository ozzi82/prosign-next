"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Render once after script is loaded
    if (!loaded || !window.hbspt || !containerRef.current) return;
    if (containerRef.current.dataset.rendered) return;

    window.hbspt.forms.create({
      portalId: "47141522",
      formId: "02a5f813-b959-4141-bd1e-28edc296de68",
      region: "na1",
      target: "#hubspot-form-container",
    });

    containerRef.current.dataset.rendered = "1";
  }, [loaded]);

  return (
    <>
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
      />
      <div
        id="hubspot-form-container"
        ref={containerRef}
        className="min-h-[420px] rounded-lg border border-neutral-800 bg-white p-6"
      >
        <div className="text-center text-neutral-500 py-10">Loading form…</div>
      </div>
      <p className="text-xs text-neutral-400 text-center mt-4">
        * By submitting this form, you agree to receive communications about your quote request.
        We typically respond within 2 hours during business hours.
      </p>
    </>
  );
}
