import type { Metadata } from "next";
import { Anton, DM_Sans, Space_Grotesk } from "next/font/google";
import { config } from "@/lib/site-config";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: config.name,
  description: config.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${anton.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
        {/* StudioLee credit badge — fixed bottom-right */}
        <a
          href="https://www.studiolee.nl"
          target="_blank"
          rel="noopener"
          style={{
            position: "fixed",
            bottom: 14,
            right: 14,
            zIndex: 9999,
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            padding: "9px 18px",
            borderRadius: 99,
            fontFamily: "system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.04em",
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,.25)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          Speciaal gemaakt voor aannemers door StudioLee.nl ↗
        </a>
      </body>
    </html>
  );
}
