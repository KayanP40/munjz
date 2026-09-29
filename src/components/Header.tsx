"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/#about", label: "من نحن" },
  { href: "/#services", label: "خدماتنا" },
  { href: "/#process", label: "كيف نعمل" },
  { href: "/#clients", label: "عملاؤنا" },
  { href: "/#contact", label: "تواصل معنا" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const overDark = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        overDark
          ? "border-white/10 bg-black/25 text-white backdrop-blur-md"
          : "border-black/10 bg-white/95 text-black backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-6 sm:px-8">
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
            className={`h-9 w-9 object-contain transition ${
              overDark ? "brightness-0 invert" : ""
            }`}
            priority
          />
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            منجز لخدمات الأعمال
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="القائمة الرئيسية"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition ${
                overDark
                  ? "text-white/75 hover:text-white"
                  : "text-black/65 hover:text-black"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/966535088808"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 text-sm font-medium transition ${
              overDark
                ? "bg-white text-black hover:bg-white/90"
                : "bg-black text-white hover:bg-black/85"
            }`}
          >
            اطلب خدمتك
          </a>
        </nav>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center border lg:hidden ${
            overDark ? "border-white/25" : "border-black/15"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "إغلاق" : "فتح"}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden>
            <span
              className={`h-px w-full transition ${
                overDark ? "bg-white" : "bg-black"
              } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full transition ${
                overDark ? "bg-white" : "bg-black"
              } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t lg:hidden ${
          open ? "block" : "hidden"
        } ${
          overDark
            ? "border-white/10 bg-black/95 text-white"
            : "border-black/10 bg-white text-black"
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
              className={`px-2 py-3 text-base transition ${
                overDark
                  ? "text-white/80 hover:text-white"
                  : "text-black/80 hover:text-black"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/966535088808"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-2 px-4 py-3 text-center text-sm font-semibold ${
              overDark ? "bg-white text-black" : "bg-black text-white"
            }`}
            onClick={() => setOpen(false)}
          >
            اطلب خدمتك
          </a>
        </nav>
      </div>
    </header>
  );
}
