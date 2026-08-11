import * as Icons from "lucide-react";
import { services } from "../data/services";
import WhatsAppButton from "./WhatsAppButton";

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-skyline-600">
            اللي بنقدمه
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-navy text-balance">
            خدمات التنظيف بتاعتنا
          </h2>
          <p className="mt-4 text-navy-400 text-lg leading-relaxed">
            حلول تنظيف احترافية مصممة على مقاس مكانك.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = Icons[service.icon] || Icons.Sparkles;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl border border-mist-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/[0.06] hover:border-skyline-100 animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-skyline-50 text-skyline-600 transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="mt-6 font-display font-semibold text-lg text-navy">
                  {service.name}
                </h3>
                <p className="mt-2.5 text-navy-400 leading-relaxed">
                  {service.description}
                </p>
                <WhatsAppButton
                  variant="ghost"
                  size="sm"
                  className="mt-6"
                  message={`أهلاً فيوتشر كلين، حابب أسأل عن خدمة ${service.name}.`}
                >
                  اسأل عن الخدمة دي
                </WhatsAppButton>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
