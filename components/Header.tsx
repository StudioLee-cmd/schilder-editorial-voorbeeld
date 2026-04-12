"use client";

import { useState } from "react";
import { config } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header --dark">
        <span className="t-caption">{config.name}</span>

        <button
          className="btn-circle"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              width: 16, height: 2, background: "var(--color-dark)",
              transition: "transform 0.3s", borderRadius: 1,
              transform: open
                ? i === 0 ? "rotate(45deg) translateY(6px)" : i === 2 ? "rotate(-45deg) translateY(-6px)" : "scaleX(0)"
                : "none",
            }} />
          ))}
        </button>
      </header>

      {/* Full-screen nav */}
      <nav style={{
        position: "fixed", inset: 0, zIndex: 199,
        background: "var(--color-dark)", color: "var(--color-bg)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: "3rem",
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.4s cubic-bezier(.215,.61,.355,1)",
      }}>
        {config.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="t-display t-display-md"
            style={{ transition: "opacity 0.2s", opacity: open ? 1 : 0 }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
