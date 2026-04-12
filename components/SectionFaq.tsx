"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { config } from "@/lib/site-config";

export default function SectionFaq() {
  const { faq } = config;
  const ref = useRef<HTMLElement>(null);
  useInView(ref);

  return (
    <section
      ref={ref}
      id="faq"
      className="section fade-up"
      style={{
        background: "linear-gradient(var(--color-steel), var(--color-silver))",
        padding: "clamp(2rem, 4vw, 4rem)",
        marginTop: "-4rem",
      }}
    >
      <div style={{
        background: "var(--color-bg)",
        borderRadius: "0.625rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        padding: "clamp(3rem, 8vw, 8rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Left: title + questions */}
        <div>
          <h2 className="t-display t-display-xl" style={{ marginBottom: "3rem" }}>FAQ</h2>

          {faq.map((item, i) => (
            <details key={i} className="faq-item">
              <summary className="t-caption">{item.question}</summary>
              <div className="faq-answer">
                <p className="t-body" style={{ opacity: 0.7 }}>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Right: image placeholder */}
        <div style={{ position: "relative" }}>
          <div className="img-placeholder" data-label="FAQ Illustration"
            style={{ height: "100%", position: "sticky", top: "4rem" }} />
        </div>
      </div>
    </section>
  );
}
