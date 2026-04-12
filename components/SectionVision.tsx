"use client";

import { useState } from "react";
import WordReveal from "./WordReveal";
import { config } from "@/lib/site-config";

export default function SectionVision() {
  const { visionCards } = config;
  const [active, setActive] = useState(0);
  const card = visionCards[active];

  return (
    <section
      className="section"
      style={{
        background: "var(--color-bg)",
        padding: "8rem var(--page-margin)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(2rem, 6vw, 6rem)",
        maxWidth: "1200px",
        width: "100%",
        alignItems: "center",
      }}>
        {/* Left: Card visual */}
        <div style={{ position: "relative" }}>
          <div className="vision-card" style={{
            transform: active % 2 === 0 ? "rotate(-3deg)" : "rotate(2.4deg)",
            transition: "transform 0.5s cubic-bezier(.19, 1, .22, 1)",
          }}>
            <div className="vision-card__image">
              {card.image ? (
                <img src={card.image} alt={card.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div className="img-placeholder" data-label={`Card ${card.index}`}
                  style={{ height: "100%", borderRadius: "0.5rem" }} />
              )}
            </div>
          </div>
        </div>

        {/* Right: Card text */}
        <div>
          <span className="t-display t-display-md" style={{ opacity: 0.15, display: "block", marginBottom: "1rem" }}>
            {card.index}
          </span>

          <h3 style={{ marginBottom: "1.5rem" }}>
            <span className="highlight t-body-lg" style={{ fontWeight: 900 }}>
              {card.title}
            </span>
          </h3>

          <WordReveal
            text={[card.description]}
            className="t-body"
            key={active}
          />

          {/* Nav dots */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "3rem" }}>
            <button
              className="btn btn-circle"
              onClick={() => setActive(Math.max(0, active - 1))}
              style={{ width: "2.5rem", height: "2.5rem", fontSize: "1.2rem" }}
            >
              ←
            </button>
            <button
              className="btn btn-circle"
              onClick={() => setActive(Math.min(visionCards.length - 1, active + 1))}
              style={{ width: "2.5rem", height: "2.5rem", fontSize: "1.2rem" }}
            >
              →
            </button>
            <span className="t-caption" style={{ alignSelf: "center", marginLeft: "0.5rem" }}>
              {active + 1} / {visionCards.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
