import { CheckCircle2 } from "lucide-react";
import ImageFrame from "./ImageFrame";

const points = [
  "فريق محترف",
  "تنظيف عالي الجودة",
  "موثوق وفي الميعاد",
  "اهتمام بالتفاصيل",
  "حلول تنظيف مرنة",
  "رضا العملاء",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 animate-fade-up">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-skyline-600">
            ليه فيوتشر كلين
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-navy text-balance">
            ليه تختار فيوتشر كلين؟
          </h2>

          <ul className="mt-9 grid sm:grid-cols-2 gap-x-6 gap-y-5">
            {points.map((point, i) => (
              <li
                key={point}
                className="flex items-start gap-3 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="mt-0.5 text-leaf shrink-0">
                  <CheckCircle2 size={22} strokeWidth={2} />
                </span>
                <span className="text-navy-700 font-medium leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2 relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          {/* EDIT ME: replace /public/images/why-choose-us.jpg */}
          <ImageFrame
            src="/images/why-choose-us.jpg"
            alt="أحد أعضاء فريق فيوتشر كلين وهو بيشتغل باهتمام"
            label="ضيف صورة why-choose-us.jpg"
            className="aspect-square rounded-3xl shadow-xl shadow-navy-900/10"
          />
        </div>
      </div>
    </section>
  );
}
