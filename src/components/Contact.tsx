function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.4.6.2 1 .4 1.5.9.4.4.7.9.9 1.5.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.4 2.3-.2.6-.4 1-.9 1.5-.4.4-.9.7-1.5.9-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.4-.6-.2-1-.4-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.4-2.3.2-.6.4-1 .9-1.5.4-.4.9-.7 1.5-.9.4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.2 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3 1-.4 2-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2 1 .3 2 .4 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-1-.3-2-.4-1.3-.1-1.6-.1-4.8-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm6.1-8.3a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0Z"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.8L23.3 22h-6.5l-5.1-6.7L5.7 22H2.5l7.3-8.3L.7 2h6.7l4.6 6.1L18.9 2Zm-1.1 18h1.8L6.3 3.9H4.4L17.8 20Z"
      />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M19.6 7.4a5.8 5.8 0 0 1-3.4-1.1v7.2a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.9a2.8 2.8 0 1 0 2 2.7V2h2.9c.2 1.6 1.1 3 2.4 3.9A5.8 5.8 0 0 0 21 7.1l-1.4.3Z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M12 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.3-1.4A9.9 9.9 0 1 0 12 2Zm0 18a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 1 1 12 20Zm4.5-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 2.6.6.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"
      />
    </svg>
  );
}

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/Munjz_sa",
    Icon: InstagramIcon,
  },
  {
    name: "X",
    href: "https://twitter.com/Munjz_sa",
    Icon: XIcon,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@Munjz_sa",
    Icon: TikTokIcon,
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-black/10 bg-white text-black"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-24">
        <h2
          id="contact-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          تواصل معنا
        </h2>

        <div className="relative mx-auto mt-10 max-w-sm">
          <div
            aria-hidden
            className="contact-whatsapp-ring pointer-events-none absolute -inset-1 bg-[#25D366]/35 blur-md"
          />
          <a
            href="https://wa.me/966535088808"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex w-full items-center justify-center gap-3 bg-[#25D366] px-6 py-3.5 text-base font-semibold text-black transition duration-300 hover:bg-[#20c05c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>تواصل عبر واتساب</span>
          </a>
        </div>

        <p className="mt-12 text-sm text-black/55">تابعنا على</p>

        <div className="mx-auto mt-4 flex w-fit items-center gap-1 border border-black/10 bg-[#f7f7f7] p-1.5">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="flex h-11 w-11 items-center justify-center text-black/70 transition duration-300 hover:bg-black hover:text-white"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
