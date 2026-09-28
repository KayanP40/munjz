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
  return (
    <section
      id="services"
      className="border-t border-black/10 bg-white text-black"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <h2
            id="services-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            خدماتنا
          </h2>
          <p className="mt-4 text-base leading-8 text-black/70 sm:text-lg sm:leading-9">
            حلول إلكترونية متكاملة تسهّل إجراءاتك الإدارية والقانونية وتختصر
            عليك الوقت والجهد.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.title}
              className={`group flex flex-col border border-black/10 bg-[#fafafa] p-7 transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="text-sm font-medium text-black/35 transition group-hover:text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-xl font-semibold tracking-tight sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-8 text-black/70">
                {service.body}
              </p>
              <a
                href={whatsappServiceLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center justify-center bg-black px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-[#25D366] hover:text-black"
              >
                اطلب الخدمة
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
