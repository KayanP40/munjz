import Image from "next/image";

const reasons = [
  {
    title: "الاحترافية",
    body: "نلتزم بأعلى معايير الجودة والدقة الاحترافية في تقديم الخدمات.",
  },
  {
    title: "الابتكار",
    body: "نسعى جاهدين لتقديم حلول مبتكرة وتقنية متقدمة لتحسين عمليات التعامل الحقوقي والإداري وتحقيق خدمات سهلة وفريدة.",
  },
  {
    title: "الأمان والسرية",
    body: "نحرص على أمان المعلومات والبيانات الشخصية للعملاء والحفاظ على سرية التعاملات القانونية والإدارية.",
  },
] as const;

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-black/10 bg-white text-black"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:py-28">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.avif"
              alt="منجز"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <p className="text-sm font-medium tracking-wide text-black/55">
              منجز للخدمات الإلكترونية
            </p>
          </div>

          <h2
            id="about-heading"
            className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            من نحن
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-black/75 sm:text-lg sm:leading-9">
            خدمات إلكترونية متعددة في مجال التعامل الرقمي والإداري الخاصة
            بالموارد البشرية والخدمات العامة للأعمال والمشاريع التجارية وتسجيل
            العلامة التجارية وخدمات الملكية الفكرية، ويهدف الموقع إلى تسهيل
            وتسريع العمليات الإدارية والقانونية.
          </p>
        </div>

        <div className="lg:col-span-7">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            لماذا مُنجز؟
          </h3>
          <p className="mt-3 text-sm text-black/55">حيثُ:</p>

          <ul className="mt-10 space-y-0 divide-y divide-black/10 border-y border-black/10">
            {reasons.map((reason, index) => (
              <li
                key={reason.title}
                className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="text-sm font-medium text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="text-lg font-semibold tracking-tight">
                    {reason.title}
                  </h4>
                  <p className="mt-2 max-w-2xl text-base leading-8 text-black/70">
                    {reason.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
