import { Droplets, Facebook, Instagram, MessageCircle, Phone, MapPin } from "lucide-react";
import { PHONE_NUMBER, PHONE_NUMBER_TEL, LOCATION, getWhatsAppUrl } from "../config/contact";

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "خدماتنا", href: "#services" },
  { label: "قبل وبعد", href: "#before-after" },
  { label: "مين احنا", href: "#about" },
  { label: "تواصل معانا", href: "#contact" },
];

// EDIT ME: حط روابط السوشيال ميديا الحقيقية بتاعتك هنا، أو احذف أي واحد مش بتستخدمه.
const socialLinks = [
  { icon: Facebook, label: "فيسبوك", href: "#" },
  { icon: Instagram, label: "إنستجرام", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:pe-8">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-white text-navy">
              <Droplets size={18} strokeWidth={2.4} />
            </span>
            <span className="font-display font-semibold text-lg text-white">Future Clean</span>
          </a>
          <p className="mt-4 text-sm text-navy-200/70 leading-relaxed">
            خدمات تنظيف احترافية للبيوت والمكاتب والشركات.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid place-items-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 transition-colors"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm tracking-wide uppercase text-white/70">
            روابط سريعة
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-navy-200/80 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm tracking-wide uppercase text-white/70">
            تواصل
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-navy-200/80 hover:text-white transition-colors"
              >
                <MessageCircle size={16} /> واتساب
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className="flex items-center gap-2.5 text-sm text-navy-200/80 hover:text-white transition-colors"
              >
                <Phone size={16} /> <span dir="ltr">{PHONE_NUMBER}</span>
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-navy-200/80">
              <MapPin size={16} /> {LOCATION}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm tracking-wide uppercase text-white/70">
            احجز تنظيف
          </h3>
          <p className="mt-4 text-sm text-navy-200/70 leading-relaxed">
            ابعتلنا رسالة على واتساب وهنرد عليك في نفس اليوم.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs text-navy-300/70 text-center">
          © 2026 فيوتشر كلين. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
