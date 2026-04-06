"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

const heroCards = [
  "/onboarding/hero-1.jpg",
  "/onboarding/hero-2.jpg",
  "/onboarding/hero-3.jpg",
  "/onboarding/hero-4.jpg",
];

const cardLayouts = [
  {
    scale: 1,
    rotation: -1.5,
    offsetX: "0px",
    offsetY: "0px",
    opacity: 1,
    zIndex: 4,
    shadowOpacity: 0.26,
  },
  {
    scale: 0.92,
    rotation: 6,
    offsetX: "calc(var(--card-width) * 0.26)",
    offsetY: "calc(var(--card-height) * 0.046)",
    opacity: 0.82,
    zIndex: 3,
    shadowOpacity: 0.18,
  },
  {
    scale: 0.84,
    rotation: 2,
    offsetX: "0px",
    offsetY: "calc(var(--card-height) * 0.077)",
    opacity: 0.56,
    zIndex: 2,
    shadowOpacity: 0.12,
  },
  {
    scale: 0.88,
    rotation: -7,
    offsetX: "calc(var(--card-width) * -0.26)",
    offsetY: "calc(var(--card-height) * 0.046)",
    opacity: 0.72,
    zIndex: 1,
    shadowOpacity: 0.16,
  },
] as const;

export function OnboardingHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (heroCards.length <= 1) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % heroCards.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, []);

  const containerStyle = {
    "--card-width": "clamp(15.75rem, 74vw, 18.75rem)",
    "--card-height": "calc(var(--card-width) * 1.306666667)",
    height: "calc(var(--card-height) + 2.5rem)",
  } as CSSProperties;

  return (
    <div
      className="relative w-full max-w-[29rem]"
      style={containerStyle}
      role="img"
      aria-label="CoverPics onboarding preview"
    >
      {heroCards.map((src, index) => {
        const layout = cardLayouts[relativeIndex(index, currentIndex)];
        const cardStyle = {
          width: "var(--card-width)",
          height: "var(--card-height)",
          transform: `translate3d(calc(-50% + ${layout.offsetX}), ${layout.offsetY}, 0) scale(${layout.scale}) rotate(${layout.rotation}deg)`,
          opacity: layout.opacity,
          zIndex: layout.zIndex,
          boxShadow: `0 18px 28px rgba(0, 0, 0, ${layout.shadowOpacity})`,
        } as CSSProperties;

        return (
          <div
            key={src}
            className="absolute bottom-0 left-1/2 overflow-hidden rounded-[1.875rem] border border-[var(--app-panel-border)] bg-[var(--app-panel-fill)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={cardStyle}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 640px) 74vw, 300px"
              className="object-cover"
              priority={index === 0}
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,var(--app-panel-highlight),transparent_22%)] mix-blend-screen" />
          </div>
        );
      })}
    </div>
  );
}

function relativeIndex(index: number, currentIndex: number) {
  return (index - currentIndex + heroCards.length) % heroCards.length;
}
