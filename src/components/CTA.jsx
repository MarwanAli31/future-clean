import WhatsAppButton from "./WhatsAppButton";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div className="absolute inset-0 bg-blueprint-grid opacity-[0.08] pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 text-center animate-fade-up">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-white text-balance">
          جاهز لمكان أنضف؟
        </h2>
        <p className="mt-4 text-navy-100/75 text-lg leading-relaxed">
          كلم فيوتشر كلين دلوقتي وسيبلنا مهمة التنظيف علينا.
        </p>
        <div className="mt-9 flex justify-center">
          <WhatsAppButton size="lg">كلمنا على واتساب</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
