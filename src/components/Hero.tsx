"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/slide1.webp",
    alt: "منجز للخدمات الإلكترونية — نختصر عليك الإجراءات الإلكترونية",
  },
  {
    src: "/slide2.webp",
    alt: "منجز للخدمات الإلكترونية — منجز الأقرب إليك",
  },
] as const;

const INTERVAL_MS = 5500;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => {
    setActive((current) => (current + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setActive((current) => (current - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(next, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [next, paused]);

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      aria-roledescription="carousel"
      aria-label="العروض الرئيسية"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative aspect-[1690/653] min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[420px]">
        {SLIDES.map((slide, index) => {
          const isActive = index === active;

          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} من ${SLIDES.length}`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[5500ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

        <div
          className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2 sm:bottom-5"
          role="tablist"
          aria-label="اختيار الشريحة"
        >
          {SLIDES.map((slide, index) => {
            const isActive = index === active;

            return (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`الشريحة ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-1.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  isActive
                    ? "w-7 bg-white"
                    : "w-1.5 bg-white/45 hover:bg-white/75"
                }`}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="الشريحة السابقة"
          className="absolute top-1/2 right-3 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex"
        >
          <span aria-hidden>&rsaquo;</span>
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="الشريحة التالية"
          className="absolute top-1/2 left-3 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex"
        >
          <span aria-hidden>&lsaquo;</span>
        </button>
      </div>
    </section>
  );
}