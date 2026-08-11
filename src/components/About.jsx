import { ShieldCheck, Users, Clock3 } from "lucide-react";
import ImageFrame from "./ImageFrame";

// EDIT ME: بدّل نقاط الثقة والوصف دول براحتك.
const trustPoints = [
  { icon: ShieldCheck, label: "فريق مدرّب وموثوق" },
  { icon: Users, label: "أكتر من 500 عميل واثق فينا" },
  { icon: Clock3, label: "في الميعاد دايمًا" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-mist-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative animate-fade-up">
          {/* EDIT ME: replace /public/images/about.jpg */}
          <ImageFrame
            src="/images/about.jpg"
            alt="فريق فيوتشر كلين وهو بيشتغل"
            label="ضيف صورة about.jpg"
            className="aspect-[5/4] rounded-3xl shadow-xl shadow-navy-900/10"
          />
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-skyline-600">
            مين احنا
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-navy text-balance">
            عن فيوتشر كلين
          </h2>
          <p className="mt-5 text-navy-400 text-lg leading-relaxed">
            فيوتشر كلين هدفها إنها تقدملك خدمة تنظيف موثوقة واحترافية للبيوت
            والمكاتب والشركات. هدفنا بسيط: مساحات أنضف، نتايج أحسن، وخدمة
            تقدر تثق فيها.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            {trustPoints.map((point) => (
              <div
                key={point.label}
                className="flex items-center gap-2.5 bg-white border border-mist-200 rounded-full ps-3 pe-4 py-2"
              >
                <span className="grid place-items-center w-8 h-8 rounded-full bg-skyline-50 text-skyline-600">
                  <point.icon size={16} strokeWidth={2.2} />
                </span>
                <span className="text-sm font-medium text-navy-700">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
