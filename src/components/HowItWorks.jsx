import { MessageCircle, ClipboardList, Sparkle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "كلمنا",
    description: "كلمنا على واتساب وقولنا عن مكانك.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "قولنا احتياجك",
    description: "بنأكد التفاصيل ونحدد ميعاد يناسبك.",
  },
  {
    number: "03",
    icon: Sparkle,
    title: "استمتع بمكان نضيف",
    description: "فريقنا يبدأ الشغل ويسيبلك مكانك نضيف تمام.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-grid opacity-[0.08] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-skyline-100">
            إزاي بنشتغل
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-white text-balance">
            خطوات الحجز
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-6 relative">
          {/* Connecting line, desktop only */}
          <div className="hidden md:block absolute top-8 start-[16.6%] end-[16.6%] h-px bg-white/15" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative text-center animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative mx-auto grid place-items-center w-16 h-16 rounded-2xl bg-white text-navy shadow-lg shadow-navy-950/30">
                <step.icon size={26} strokeWidth={2} />
              </div>
              <p className="mt-5 font-display text-sm tracking-[0.15em] text-skyline-100">
                {step.number}
              </p>
              <h3 className="mt-1.5 font-display font-semibold text-xl text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-navy-100/70 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
