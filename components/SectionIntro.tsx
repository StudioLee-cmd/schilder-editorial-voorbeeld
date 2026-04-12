"use client";

import WordReveal from "./WordReveal";
import { config } from "@/lib/site-config";

export default function SectionIntro() {
  const { intro } = config;

  return (
    <section
      id="intro"
      className="section"
      style={{
        background: "var(--color-bg)",
        padding: "9.375rem var(--page-margin)",
        paddingLeft: "clamp(var(--page-margin), 15vw, 20vw)",
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Text with word-by-word reveal */}
      <div style={{ maxWidth: "55rem", position: "relative", zIndex: 2 }}>
        <WordReveal
          text={intro.text}
          accentWords={intro.accentWords}
          className="t-body-lg"
        />
      </div>

      {/* Side image (spinning can / product) */}
      <div style={{
        position: "absolute", right: "4%", top: "50%",
        transform: "translateY(-50%)",
        width: "clamp(150px, 30vw, 400px)",
        height: "clamp(200px, 40vw, 500px)",
        zIndex: 1,
      }}>
        {intro.sideImage ? (
          <img src={intro.sideImage} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        ) : (
          <div className="img-placeholder" data-label="Side Image" style={{ height: "100%" }} />
        )}
      </div>
    </section>
  );
}
