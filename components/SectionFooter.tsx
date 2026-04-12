"use client";

import { config } from "@/lib/site-config";

export default function SectionFooter() {
  const { footer, name } = config;

  return (
    <footer
      style={{
        background: "var(--color-silver)",
        minHeight: "clamp(50vh, 70vh, 90vh)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "var(--page-margin)",
      }}
    >
      {/* CTA */}
      <a href={footer.ctaHref} className="t-body-lg underline-accent"
        style={{ fontSize: "clamp(2rem, 5vw, 5rem)", textAlign: "center" }}>
        {footer.cta}
      </a>

      {/* Social links */}
      <div style={{ display: "flex", gap: "2rem", marginTop: "3rem" }}>
        {footer.links.map((link) => (
          <a key={link.label} href={link.href} className="t-caption" style={{ opacity: 0.6 }}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Credits */}
      <div style={{
        position: "absolute", bottom: "var(--page-margin)",
        left: "var(--page-margin)", right: "var(--page-margin)",
        display: "flex", justifyContent: "space-between",
      }}>
        <span className="t-label">{footer.credit}</span>
        <span className="t-label">{name} &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
