import { ArrowLeft } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-800 pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Signature: faint blueprint grid — the "floor plan" of a space about to be cleaned */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -end-32 w-[520px] h-[520px] rounded-full bg-skyline/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -start-24 w-[420px] h-[420px] rounded-full bg-skyline/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center animate-fade-up">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-skyline-100 bg-white/10 border border-white/15 rounded-full px-4 py-1.5">
          بنخدم القاهرة وكل مصر
        </span>

        <h1 className="mt-6 font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.2] text-white text-balance">
          تنظيف احترافي.
          <br />
          مساحات نضيفة.
          <br />
          <span className="text-skyline-100">حياة أحلى.</span>
        </h1>

        <p className="mt-6 text-lg text-navy-100/80 max-w-xl mx-auto leading-relaxed">
          فيوتشر كلين بتقدملك حلول تنظيف احترافية للبيوت والمكاتب والشركات.
          بنخلي أي مكان أنضف وأصح وجاهز لأي حاجة جاية.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
          <WhatsAppButton size="lg">كلمنا على واتساب</WhatsAppButton>
          <a
            href="#before-after"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-display font-semibold text-white border border-white/25 hover:border-white/60 hover:bg-white/5 transition-all"
          >
            شوف شغلنا
            <ArrowLeft size={20} />
          </a>
        </div>

        <div className="mt-12 inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
          <span className="font-display font-semibold text-white text-lg leading-none">100%</span>
          <span className="text-navy-100/70 text-sm">رضاكم مضمون</span>
        </div>
      </div>
    </section>
  );
}
