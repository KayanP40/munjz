import Reveal from "@/components/Reveal";

const steps = [
  {
    title: "تواصل معنا",
    body: "راسلنا عبر واتساب وأخبرنا بالخدمة التي تحتاجها.",
  },
  {
    title: "دراسة الطلب",
    body: "نراجع متطلباتك والمستندات اللازمة ونوضح لك المسار والمدة المتوقعة.",
  },
  {
    title: "التنفيذ والمتابعة",
    body: "نتولى الإجراءات الرسمية ونبقيك على اطلاع بكل مرحلة.",
  },
  {
    title: "التسليم والإنجاز",
    body: "نستكمل الطلب ونسلّمك النتيجة جاهزة بكل وضوح واحتراف.",
  },
] as const;

export default function Process() {
  return (
    <section
      id="process"
      className="border-t border-black/10 bg-[#f7f7f7] text-black"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-wide text-black/45">
            منجز لخدمات الأعمال
          </p>
          <h2
            id="process-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            كيف نعمل؟
          </h2>
          <p className="mt-6 text-base leading-8 text-black/70 sm:text-lg sm:leading-9">
            نختصر عليك الإجراءات بخطوات مرتبة وواضحة.
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="pointer-events-none absolute top-8 right-8 left-8 hidden h-px bg-black/15 lg:block"
          />
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              as="li"
              delay={index * 100}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center border border-black bg-white text-sm font-semibold">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
