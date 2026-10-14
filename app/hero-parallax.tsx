"use client";

import { useEffect } from "react";

export default function HeroParallax() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    if (!hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;

      if (reducedMotion.matches) {
        hero.style.setProperty("--hero-decor-left-y", "0px");
        hero.style.setProperty("--hero-decor-right-y", "0px");
        hero.style.setProperty("--hero-cards-y", "0px");
        return;
      }

      const bounds = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -bounds.top / bounds.height));

      hero.style.setProperty("--hero-decor-left-y", `${Math.round(progress * 24)}px`);
      hero.style.setProperty("--hero-decor-right-y", `${Math.round(progress * -18)}px`);
      hero.style.setProperty("--hero-cards-y", `${Math.round(progress * 12)}px`);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
