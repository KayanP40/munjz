"use client";

import { useId, useState } from "react";
import Reveal from "@/components/Reveal";
import {
  serviceCategories,
  type ServiceItem,
} from "@/data/services";

const WHATSAPP_NUMBER = "966535088808";
const tabs = serviceCategories;

function whatsappServiceLink(serviceName: string) {
  const message = `السلام عليكم ورحمة الله وبركاته أبي أطلب خدمة ${serviceName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ServiceDetails({ service }: { service: ServiceItem }) {
  return (
    <>
      {service.body ? (
        <p className="mt-3 text-sm leading-7 text-black/70">{service.body}</p>
      ) : null}
      {service.subtypes ? (
        <ul className="mt-4 space-y-2 text-sm leading-7 text-black/70">
          {service.subtypes.map((subtype) => (
            <li key={subtype} className="flex gap-2">
              <span
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-black/40"
                aria-hidden
              />
              <span>{subtype}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {service.items ? (
        <ul className="mt-4 space-y-2 text-sm leading-7 text-black/70">
          {service.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-black/40"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <a
        href={whatsappServiceLink(service.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="motion-safe-hover mt-6 inline-flex w-fit bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/85"
      >
        اطلب الخدمة
      </a>
    </>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  return (
    <Reveal
      as="article"
      delay={(index % 6) * 60}
      className="motion-safe-hover motion-lift flex h-full w-full flex-col border border-black/10 bg-[#fafafa] p-6 text-black sm:p-7"
    >
      <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
      <ServiceDetails service={service} />
    </Reveal>
  );
}

export default function Services() {
  const [activeId, setActiveId] = useState(tabs[0]!.id);
  const tabsId = useId();
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0]!;
  const isSingle = activeTab.children.length === 1;

  return (
    <section
      id="services"
      className="border-t border-black/10 bg-white text-black"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-wide text-black/45">
            منجز لخدمات الأعمال
          </p>
          <h2
            id="services-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            خدماتنا
          </h2>
          <p className="mt-6 text-base leading-8 text-black/70 sm:text-lg sm:leading-9">
            حلول إلكترونية متكاملة تسهّل إجراءاتك الإدارية والقانونية وتختصر
            عليك الوقت والجهد.
          </p>
        </Reveal>

        <div className="mt-14">
          <div className="-mx-6 border-b border-black/10 sm:mx-0">
            <div
              role="tablist"
              aria-label="فئات الخدمات"
              className="flex items-center gap-x-1 overflow-x-auto px-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
            >
              {tabs.map((tab) => {
                const selected = tab.id === activeTab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`${tabsId}-${tab.id}`}
                    aria-selected={selected}
                    aria-controls={`${tabsId}-panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveId(tab.id)}
                    className={`relative shrink-0 whitespace-nowrap px-3 py-3 text-sm font-medium transition sm:px-4 sm:text-base ${
                      selected
                        ? "text-black"
                        : "text-black/45 hover:text-black/75"
                    }`}
                  >
                    {tab.tabLabel}
                    <span
                      className={`absolute inset-x-2 -bottom-px h-0.5 bg-black transition sm:inset-x-3 ${
                        selected ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            id={`${tabsId}-panel-${activeTab.id}`}
            aria-labelledby={`${tabsId}-${activeTab.id}`}
            className="mt-8"
          >
            {!isSingle ? (
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium tracking-wide text-black/45">
                  {activeTab.title}
                </p>
                {activeTab.description ? (
                  <p className="mt-3 text-sm leading-7 text-black/70">
                    {activeTab.description}
                  </p>
                ) : null}
              </div>
            ) : null}

            {activeTab.legalNotice ? (
              <div className="mx-auto mt-6 max-w-3xl border border-black/10 bg-[#fafafa] px-6 py-5 text-center sm:px-8">
                <p className="text-sm font-semibold tracking-tight text-black">
                  التنويه النظامي
                </p>
                <p className="mt-3 text-sm leading-7 text-black/70">
                  {activeTab.legalNotice}
                </p>
              </div>
            ) : null}

            <div
              className={`mt-8 grid gap-5 ${
                isSingle
                  ? "mx-auto max-w-2xl grid-cols-1"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {activeTab.children.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
