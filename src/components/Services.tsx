import Reveal from "@/components/Reveal";

const WHATSAPP_NUMBER = "966535088808";

const services = [
  {
    title: "تأسيس الشركات",
    body: "إتمام إجراءات تأسيس المنشآت والشركات بخطوات واضحة وسريعة، من البداية حتى جاهزية الكيان للعمل.",
  },
  {
    title: "تسجيل العلامة التجارية",
    body: "تسجيل وحماية علامتك التجارية وفق الإجراءات الرسمية لضمان حقوقك وهويتك في السوق.",
  },
  {
    title: "تسجيل الملكية الفكرية",
    body: "حماية حقوق الملكية الفكرية وتسجيلها بما يحفظ ابتكاراتك وأعمالك من التعدي والاستخدام غير المشروع.",
  },
  {
    title: "إدارة الموظفين والعمالة",
    body: "خدمات رقمية وإدارية لتنظيم شؤون الموظفين والعمالة وتسهيل المتطلبات المتعلقة بالموارد البشرية.",
  },
  {
    title: "إنشاء وإدارة التراخيص وامتثال الأنشطة",
    body: "إصدار وإدارة التراخيص ومتابعة امتثال الأنشطة للمتطلبات النظامية بمرونة ودقة.",
  },
] as const;

function whatsappServiceLink(serviceName: string) {
  const message = `السلام عليكم ورحمة الله وبركاته أبي أطلب خدمة ${serviceName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Services() {
  const [featured, ...rest] = services;

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

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal
            as="article"
            className="motion-safe-hover motion-lift flex flex-col border border-black bg-black p-8 text-white sm:p-10"
          >
            <span className="text-sm font-medium text-white/45">01</span>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-4 flex-1 text-base leading-8 text-white/70">
              {featured.body}
            </p>
            <a
              href={whatsappServiceLink(featured.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="motion-safe-hover mt-8 inline-flex w-fit bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
            >
              اطلب الخدمة
            </a>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2">
            {rest.map((service, index) => (
              <Reveal
                key={service.title}
                as="li"
                delay={(index + 1) * 80}
                className="motion-safe-hover motion-lift flex flex-col border border-black/10 bg-[#fafafa] p-6"
              >
                <span className="text-sm font-medium text-black/35">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-black/70">
                  {service.body}
                </p>
                <a
                  href={whatsappServiceLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="motion-safe-hover mt-6 inline-flex w-fit bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/85"
                >
                  اطلب الخدمة
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
