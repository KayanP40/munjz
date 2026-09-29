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
        className={`clients-marquee flex w-max items-center gap-12 py-5 ${
          direction === "left"
            ? "clients-marquee--left"
            : "clients-marquee--right"
        }`}
      >
        {doubled.map((client, index) => (
          <div
            key={`${client.src}-${index}`}
            className="flex h-24 w-48 shrink-0 items-center justify-center sm:h-28 sm:w-56"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={224}
              height={112}
              className="max-h-20 w-auto max-w-full object-contain sm:max-h-24"
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
      className="border-t border-black/10 bg-white text-black"
      aria-labelledby="clients-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-wide text-black/45">
            منجز لخدمات الأعمال
          </p>
          <h2
            id="clients-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            عملاؤنا
          </h2>
          <p className="mt-6 text-base leading-8 text-black/70 sm:text-lg sm:leading-9">
            نفتخر بثقة مجموعة من العلامات التجارية والمنشآت التي اعتمدت منجز
            لتسهيل إجراءاتها الإدارية والقانونية.
          </p>
        </div>
      </div>

      <div className="pb-20 lg:pb-24">
        <LogoRow items={rowOne} direction="left" />
        <div className="mt-2">
          <LogoRow items={rowTwo.length ? rowTwo : rowOne} direction="right" />
        </div>
      </div>
    </section>
  );
}
