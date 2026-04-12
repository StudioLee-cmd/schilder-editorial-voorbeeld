"use client";

import { config } from "@/lib/site-config";

export default function SectionColumns() {
  const { columns } = config;

  return (
    <section
      id="gallery"
      className="section"
      style={{
        padding: 0,
        height: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {columns.items.map((item, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            background: item.color,
            color: item.textColor,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "relative",
            padding: "2rem",
            transition: "flex 0.5s cubic-bezier(.19, 1, .22, 1)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.flex = "2"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.flex = "1"; }}
        >
          {/* Column title — vertical writing mode prevents clipping */}
          <h3
            className="t-display"
            style={{
              position: "absolute",
              top: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              writingMode: "vertical-rl",
              transformOrigin: "center",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1,
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
              fontWeight: 900,
              margin: 0,
            }}
          >
            {item.name}
          </h3>

          {/* Character/product image */}
          <div style={{
            width: "80%", maxWidth: "300px",
            height: "60%",
            position: "relative",
          }}>
            {item.image ? (
              <img src={item.image} alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom" }} />
            ) : (
              <div className="img-placeholder --light" data-label={item.name} style={{ height: "100%" }} />
            )}
          </div>

          {/* Description (visible on hover via CSS) */}
          <p className="t-caption" style={{ marginTop: "1rem", textAlign: "center", maxWidth: "200px" }}>
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
}
