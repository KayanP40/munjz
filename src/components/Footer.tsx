import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const navLinks = [
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#process", label: "كيف نعمل" },
  { href: "#clients", label: "عملاؤنا" },
  { href: "#contact", label: "تواصل معنا" },
] as const;

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/Munjz_sa",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.4.6.2 1 .4 1.5.9.4.4.7.9.9 1.5.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.4 2.3-.2.6-.4 1-.9 1.5-.4.4-.9.7-1.5.9-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.4-.6-.2-1-.4-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.4-2.3.2-.6.4-1 .9-1.5.4-.4.9-.7 1.5-.9.4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.2 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3 1-.4 2-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2 1 .3 2 .4 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-1-.3-2-.4-1.3-.1-1.6-.1-4.8-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm6.1-8.3a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0Z",
  },
  {
    name: "X",
    href: "https://twitter.com/Munjz_sa",
    path: "M18.9 2H22l-6.8 7.8L23.3 22h-6.5l-5.1-6.7L5.7 22H2.5l7.3-8.3L.7 2h6.7l4.6 6.1L18.9 2Zm-1.1 18h1.8L6.3 3.9H4.4L17.8 20Z",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@Munjz_sa",
    path: "M19.6 7.4a5.8 5.8 0 0 1-3.4-1.1v7.2a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.9a2.8 2.8 0 1 0 2 2.7V2h2.9c.2 1.6 1.1 3 2.4 3.9A5.8 5.8 0 0 0 21 7.1l-1.4.3Z",
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.avif"
              alt="منجز"
              width={40}
              height={40}
              className="h-10 w-10 object-contain invert"
            />
            <span className="text-base font-semibold tracking-tight">
              منجز لخدمات الأعمال
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
            نسهّل ونسرّع عملياتك الإدارية والقانونية بخدمات موثوقة للأعمال
            والعلامات التجارية والملكية الفكرية.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">روابط سريعة</p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">تابعنا</p>
          <ul className="mt-4 flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition hover:border-white hover:bg-white hover:text-black"
                >
                  <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/966535088808"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-safe-hover mt-5 inline-flex bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-black hover:bg-[#20c05c]"
          >
            اطلب خدمتك
          </a>
        </div>
      </Reveal>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} منجز لخدمات الأعمال. جميع الحقوق محفوظة.</p>
          <p dir="ltr">@Munjz_sa</p>
        </div>
      </div>
    </footer>
  );
}
