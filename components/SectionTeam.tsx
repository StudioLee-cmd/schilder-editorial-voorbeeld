"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { config } from "@/lib/site-config";

export default function SectionTeam() {
  const { team } = config;
  const ref = useRef<HTMLElement>(null);
  useInView(ref);

  return (
    <section
      ref={ref}
      id="team"
      className="section stagger-children"
      style={{
        background: "var(--color-navy)",
        color: "var(--color-bg)",
        padding: "clamp(4rem, 12vw, 12.5rem) var(--page-margin)",
      }}
    >
      <h2 className="t-display t-display-md" style={{ marginBottom: "4rem" }}>Team</h2>

      <div style={{
        display: "flex",
        gap: "clamp(1rem, 2vw, 2rem)",
        overflowX: "auto",
        scrollbarWidth: "none",
        paddingBottom: "2rem",
      }}>
        {team.map((member, i) => (
          <div key={i} className="team-card">
            {/* Portrait */}
            <div className="team-card__image">
              {member.image ? (
                <img src={member.image} alt={member.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div className="img-placeholder --light" data-label={member.role}
                  style={{ height: "100%", borderRadius: "0.625rem" }} />
              )}
            </div>

            {/* Info */}
            <div className="team-card__info">
              <h3 className="t-body underline-accent" style={{ fontWeight: 700, marginBottom: "0.25rem" }}>
                {member.name}
              </h3>
              <p className="t-caption" style={{ opacity: 0.6 }}>{member.role}</p>
              {member.bio && (
                <p className="t-label" style={{ marginTop: "0.75rem", opacity: 0.5 }}>
                  {member.bio}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
