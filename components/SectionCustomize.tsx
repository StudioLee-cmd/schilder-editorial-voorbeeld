"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { config } from "@/lib/site-config";

export default function SectionCustomize() {
  const { customize } = config;
  const ref = useRef<HTMLElement>(null);
  useInView(ref);

  // Split title and wrap highlight word
  const words = customize.title.split(" ");

  return (
    <section
      ref={ref}
      className="section fade-up"
      style={{
        background: "var(--color-steel)",
        padding: "clamp(2rem, 4vw, 4rem)",
      }}
    >
      <div style={{
        background: "var(--color-bg)",
        borderRadius: "0.625rem",
        padding: "clamp(3rem, 8vw, 8rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Title */}
        <h2 className="t-display t-display-lg" style={{ marginBottom: "3rem" }}>
          {words.map((w, i) => (
            <span key={i}>
              {w.toLowerCase() === customize.highlightWord.toLowerCase() ? (
                <span className="highlight">{w}</span>
              ) : w}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        {/* Video / media */}
        <div style={{ width: "100%", position: "relative" }}>
          {customize.video ? (
            <video
              autoPlay muted loop playsInline
              style={{ width: "100%", borderRadius: "0.5rem" }}
            >
              <source src={customize.video} type="video/mp4" />
            </video>
          ) : (
            <div className="video-placeholder" />
          )}
        </div>

        {/* Label */}
        <p className="t-caption" style={{ marginTop: "1.5rem", opacity: 0.5 }}>
          {customize.label}
        </p>
      </div>
    </section>
  );
}
