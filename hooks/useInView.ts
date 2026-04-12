"use client";

import { useEffect, useRef, RefObject } from "react";

/**
 * Intersection Observer hook.
 * Adds 'in-view' class when element enters viewport.
 * once=true means it stays after first trigger (like Chainzoku's data-in-view-once).
 */
export function useInView(
  ref: RefObject<HTMLElement | null>,
  { threshold = 0.2, once = true }: { threshold?: number; once?: boolean } = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("in-view");
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, once]);
}

/**
 * Auto-observe: call once on mount, observes all [data-reveal] elements.
 */
export function useAutoReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            const once = entry.target.getAttribute("data-reveal") !== "repeat";
            if (once) observer.unobserve(entry.target);
          } else {
            const once = entry.target.getAttribute("data-reveal") !== "repeat";
            if (!once) entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
