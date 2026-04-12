"use client";

import { config } from "@/lib/site-config";

export default function SectionHero() {
  const { hero } = config;

  return (
    <section
      id="hero"
      className="section"
      style={{
        background: hero.bg,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: hero.backgroundImage ? `url(${hero.backgroundImage})` : "none",
        backgroundSize: "cover", backgroundPosition: "center center",
      }} />

      {/* Dark gradient overlay for text contrast */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(26,22,18,0.55) 0%, rgba(26,22,18,0.25) 40%, rgba(26,22,18,0.85) 100%)",
      }} />

      {/* Hero logo / title */}
      <div style={{
        position: "relative", zIndex: 2,
        width: "92%", maxWidth: "1100px",
        margin: "0 auto", padding: "0 0 18vh",
        textAlign: "center",
      }}>
        <h1 className="t-display t-display-xl" style={{ color: "#F4ECDD", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}>
          {config.name}
        </h1>
      </div>

      {/* Subtitle */}
      <div style={{
        position: "absolute", bottom: "2.5rem", left: "var(--page-margin)",
        right: "var(--page-margin)",
        zIndex: 4,
        color: "#F4ECDD",
        textAlign: "center",
      }}>
        <p className="t-caption" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>{hero.subtitle}</p>
      </div>

      {/* Bottom edge */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 4, background: "#1A1612", zIndex: 5,
      }} />
    </section>
  );
}
