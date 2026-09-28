"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#clients", label: "عملاؤنا" },
  { href: "#contact", label: "تواصل معنا" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        scrolled
          ? "border-black/10 bg-white/95 backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.avif"
            alt="منجز"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            منجز للخدمات الإلكترونية
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="القائمة الرئيسية">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-black/65 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/966535088808"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85"
          >
            تواصل واتساب
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-black/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "إغلاق" : "فتح"}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden>
            <span
              className={`h-px w-full bg-black transition ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-black transition ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-black/10 bg-white lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 sm:px-8"
          aria-label="القائمة الجوال"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2 py-3 text-base text-black/80 transition hover:text-black"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/966535088808"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#25D366] px-4 py-3 text-center text-sm font-semibold text-black"
            onClick={() => setOpen(false)}
          >
            تواصل واتساب
          </a>
        </nav>
      </div>
    </header>
  );
}
