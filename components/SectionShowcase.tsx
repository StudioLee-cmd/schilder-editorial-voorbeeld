"use client";

import CharReveal from "./CharReveal";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { config } from "@/lib/site-config";

export default function SectionShowcase() {
  const { showcase } = config;
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref);

  return (
    <section
      id="features"
      className="section"
      style={{
        background: "var(--color-bg)",
        textAlign: "center",
        padding: "8rem var(--page-margin)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
      }}
    >
      {/* 3D viewer / product image placeholder */}
      <div style={{
        width: "clamp(250px, 50vw, 600px)",
        aspectRatio: "1",
        margin: "0 auto",
      }}>
        {showcase.image ? (
          <img src={showcase.image} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        ) : (
          <div className="img-placeholder" data-label="Product / 3D Viewer" style={{ height: "100%", borderRadius: "50%" }} />
        )}
      </div>

      {/* Big number / title */}
      <CharReveal text={showcase.title} className="t-display-xl" />

      {/* Subtitle with accent */}
      <div ref={ref} className="fade-up">
        <h3 className="t-body-lg underline-accent">{showcase.subtitle}</h3>
      </div>

      {/* Description */}
      <p className="t-body" style={{ maxWidth: "23rem", margin: "0 auto", opacity: 0.7 }}>
        {showcase.description}
      </p>
    </section>
  );
}
