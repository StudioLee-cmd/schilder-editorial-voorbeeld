"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * CharReveal — Character-by-character reveal.
 * Each letter wraps in overflow:hidden, slides up staggered.
 * Used for big display numbers/titles like "8,888".
 */

interface CharRevealProps {
  text: string;
  className?: string;
  tag?: "h2" | "h3" | "span" | "div";
}

export default function CharReveal({
  text,
  className = "",
  tag: Tag = "h2",
}: CharRevealProps) {
  const ref = useRef<HTMLElement>(null);
  useInView(ref as any);

  return (
    <Tag ref={ref as any} className={`char-reveal t-display ${className}`}>
      {text.split("").map((char, i) => (
        <span key={i} className="char">
          <span
            className="letter"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </Tag>
  );
}
