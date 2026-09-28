import Image from "next/image";
import { clients } from "@/data/clients";

function LogoRow({
  items,
  direction,
}: {
  items: typeof clients;
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];

  return (
    <div className="clients-marquee-wrap relative overflow-hidden" dir="ltr">
      <div
        className={`clients-marquee flex w-max items-center gap-10 py-4 ${
          direction === "left"
            ? "clients-marquee--left"
            : "clients-marquee--right"
        }`}
      >
        {doubled.map((client, index) => (
          <div
            key={`${client.src}-${index}`}
            className="flex h-16 w-36 shrink-0 items-center justify-center sm:h-20 sm:w-44"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={176}
              height={80}
              className="max-h-14 w-auto max-w-full object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const midpoint = Math.ceil(clients.length / 2);
  const rowOne = clients.slice(0, midpoint);
  const rowTwo = clients.slice(midpoint);

  return (
    <section
      id="clients"
      className="border-t border-black/10 bg-[#f7f7f7] text-black"
      aria-labelledby="clients-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <h2
            id="clients-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            عملاؤنا
          </h2>
          <p className="mt-4 text-base leading-8 text-black/70 sm:text-lg sm:leading-9">
            نفتخر بثقة مجموعة من العلامات التجارية والمنشآت التي اعتمدت منجز
            لتسهيل إجراءاتها الإدارية والقانونية.
          </p>
        </div>
      </div>

      <div className="pb-16 sm:pb-20">
        <LogoRow items={rowOne} direction="left" />
        <div className="mt-2">
          <LogoRow items={rowTwo.length ? rowTwo : rowOne} direction="right" />
        </div>
      </div>
    </section>
  );
}
