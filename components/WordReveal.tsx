"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * WordReveal — Word-by-word text reveal animation.
 * Each line's words slide up from below with staggered delay.
 * Exact same mechanic as Chainzoku's .lines system.
 *
 * text: array of strings, each string = one visual line
 * accentWords: words that get a green underline bar
 */

interface WordRevealProps {
  text: string[];
  accentWords?: string[];
  className?: string;
  tag?: "p" | "h1" | "h2" | "h3" | "div";
}

export default function WordReveal({
  text,
  accentWords = [],
  className = "",
  tag: Tag = "div",
}: WordRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref);

  return (
    <Tag ref={ref as any} className={`word-reveal ${className}`}>
      {text.map((line, i) => (
        <span key={i} className="line">
          {line.split(" ").map((word, j) => (
            <span key={`${i}-${j}`} className="word">
              {word}
              {accentWords.includes(word) && (
                <span className="underline-bar" style={{ width: "100%" }} />
              )}
              {j < line.split(" ").length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
