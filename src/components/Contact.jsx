import { useState } from "react";
import { MessageCircle, Phone, Clock3, Send } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import {
  PHONE_NUMBER,
  PHONE_NUMBER_TEL,
  WORKING_HOURS,
  getWhatsAppUrl,
} from "../config/contact";

const infoCards = [
  {
    icon: MessageCircle,
    title: "واتساب",
    detail: "كلمنا على واتساب",
  },
  {
    icon: Phone,
    title: "تليفون",
    detail: "اتصل بفيوتشر كلين",
  },
  {
    icon: Clock3,
    title: "مواعيد الشغل",
    detail: "متاحين للحجز والاستفسار",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  // فورم فرونت-إند بس: مفيش باك إند ولا داتابيز — بمجرد الإرسال
  // بنبني رسالة واتساب جاهزة وبنفتح المحادثة.
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `أهلاً فيوتشر كلين، اسمي ${name || "..."}.`,
      service && `مهتم بـ: ${service}.`,
      details && `تفاصيل: ${details}`,
    ].filter(Boolean);
    window.open(getWhatsAppUrl(lines.join(" ")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-skyline-600">
            تواصل معانا
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-navy text-balance">
            يلا نضيف مكانك
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          {/* Info cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 lg:grid-cols-1 gap-5">
            {infoCards.map((card, i) => (
              <div
                key={card.title}
                className="rounded-2xl border border-mist-200 p-6 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-skyline-50 text-skyline-600">
                  <card.icon size={20} strokeWidth={2.1} />
                </span>
                <h3 className="mt-4 font-display font-semibold text-navy">{card.title}</h3>
                <p className="mt-1 text-sm text-navy-400">{card.detail}</p>
                {card.title === "تليفون" && (
                  <a
                    href={`tel:${PHONE_NUMBER_TEL}`}
                    className="mt-2 inline-block text-sm font-semibold text-skyline-600 hover:underline"
                    dir="ltr"
                  >
                    {PHONE_NUMBER}
                  </a>
                )}
                {card.title === "مواعيد الشغل" && (
                  <p className="mt-2 text-sm font-semibold text-navy-700">{WORKING_HOURS}</p>
                )}
              </div>
            ))}
            <WhatsAppButton size="lg" className="w-full mt-1">
              كلمنا على واتساب
            </WhatsAppButton>
          </div>

          {/* فورم فرونت-إند بس ← بيفتح واتساب */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-mist-200 p-8 space-y-5 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-navy-700">
                اسمك
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثلاً: سارة أحمد"
                className="mt-1.5 w-full rounded-xl border border-mist-200 px-4 py-3 text-navy placeholder:text-navy-200 focus-visible:outline-2"
              />
            </div>
            <div>
              <label htmlFor="service" className="text-sm font-medium text-navy-700">
                الخدمة اللي محتاجها
              </label>
              <input
                id="service"
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="مثلاً: تنظيف مكاتب"
                className="mt-1.5 w-full rounded-xl border border-mist-200 px-4 py-3 text-navy placeholder:text-navy-200 focus-visible:outline-2"
              />
            </div>
            <div>
              <label htmlFor="details" className="text-sm font-medium text-navy-700">
                في حاجة تانية تحب تقولهالنا؟
              </label>
              <textarea
                id="details"
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="مساحة المكان، الميعاد المفضل، أي طلبات خاصة..."
                className="mt-1.5 w-full rounded-xl border border-mist-200 px-4 py-3 text-navy placeholder:text-navy-200 resize-none focus-visible:outline-2"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full font-display font-semibold bg-navy text-white hover:bg-navy-600 transition-colors"
            >
              <Send size={18} />
              ابعت عن طريق واتساب
            </button>
            <p className="text-xs text-navy-300">
              لما تبعت هيتفتح واتساب برسالتك جاهزة — مفيش حاجة بتتخزن أو
              تتبعت لأي حتة تانية.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
