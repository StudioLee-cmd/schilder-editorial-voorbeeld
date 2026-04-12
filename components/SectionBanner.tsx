"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { config } from "@/lib/site-config";

export default function SectionBanner() {
  const { banner } = config;
  const ref = useRef<HTMLElement>(null);
  useInView(ref);

  return (
    <section
      ref={ref}
      className="section"
      style={{
        background: banner.bg,
        color: "var(--color-bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Video background */}
      {banner.video ? (
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
        >
          <source src={banner.video} type="video/mp4" />
        </video>
      ) : (
        <div style={{ position: "absolute", inset: 0, opacity: 0.05 }}>
          <div className="img-placeholder --light" data-label="Background Video" style={{ height: "100%", borderRadius: 0 }} />
        </div>
      )}

      {/* Staggered text lines with clip-path reveals */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {banner.lines.map((line, i) => (
          <div
            key={i}
            className={i % 2 === 0 ? "clip-reveal-ltr" : "clip-reveal-rtl"}
            style={{
              transform: `rotate(${i % 2 === 0 ? "3.5deg" : "-3.5deg"})`,
              marginBottom: "0.5rem",
            }}
            data-reveal
          >
            {line.style === "display" ? (
              <span className="t-display t-display-xl">{line.text}</span>
            ) : (
              <span className="t-body-lg">{line.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "30%", background: `linear-gradient(${banner.bg}, transparent)`, zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: `linear-gradient(transparent, ${banner.bg})`, zIndex: 1 }} />
    </section>
  );
}
