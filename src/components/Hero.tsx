"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/slide1.webp",
    alt: "منجز لخدمات الأعمال",
  },
  {
    src: "/slide2.webp",
    alt: "منجز لخدمات الأعمال",
  },
] as const;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-[78vh] overflow-hidden bg-black text-white lg:min-h-[86vh]"
      aria-label="القسم الرئيسي"
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/50" />

      <div className="hero-animate relative z-10 mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-6 pb-16 pt-28 sm:px-8 lg:min-h-[86vh] lg:pb-20 lg:pt-32">
        <p className="text-sm font-medium tracking-wide text-white/60">
          شريكك في إنجاز معاملات الأعمال
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          منجز لخدمات الأعمال
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">
          نسهّل ونسرّع إجراءاتك الإدارية والقانونية — من تأسيس الشركات وتسجيل
          العلامات التجارية إلى إدارة التراخيص والموارد البشرية.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://wa.me/966535088808"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-safe-hover bg-white px-6 py-3.5 text-sm font-semibold text-black hover:bg-white/90"
          >
            اطلب خدمتك
          </a>
          <a
            href="#about"
            className="motion-safe-hover border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:border-white hover:bg-white/10"
          >
            تعرّف علينا
          </a>
        </div>

        <div
          className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="اختيار الخلفية"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`الخلفية ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-1.5 transition-all ${
                index === active ? "w-7 bg-white" : "w-1.5 bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
