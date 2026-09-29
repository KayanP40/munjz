import Reveal from "@/components/Reveal";

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
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-wide text-black/45">
            منجز لخدمات الأعمال
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            من نحن
          </h2>
          <p className="mt-6 text-base leading-8 text-black/70 sm:text-lg sm:leading-9">
            خدمات إلكترونية متعددة في مجال التعامل الرقمي والإداري الخاصة
            بالموارد البشرية والخدمات العامة للأعمال والمشاريع التجارية وتسجيل
            العلامة التجارية وخدمات الملكية الفكرية، ويهدف الموقع إلى تسهيل
            وتسريع العمليات الإدارية والقانونية.
          </p>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <h3 className="text-center text-2xl font-semibold tracking-tight">
              لماذا مُنجز؟
            </h3>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {reasons.map((reason, index) => (
              <Reveal
                key={reason.title}
                as="li"
                delay={index * 90}
                className="motion-safe-hover motion-lift border border-black/10 bg-[#fafafa] p-7"
              >
                <span className="text-sm font-medium text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-6 text-xl font-semibold tracking-tight">
                  {reason.title}
                </h4>
                <p className="mt-3 text-base leading-8 text-black/70">
                  {reason.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
