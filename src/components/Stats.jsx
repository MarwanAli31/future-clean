/**
 * EDIT ME: حدّث الأرقام دي كل ما شغلك يكبر.
 */
const stats = [
  { value: "+500", label: "مساحة اتنضفت" },
  { value: "100%", label: "رضا العملاء" },
  { value: "فريق محترف", label: "للتنظيف" },
  { value: "خدمة سريعة", label: "وموثوقة" },
];

export default function Stats() {
  return (
    <section className="border-y border-mist-200 bg-mist-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="text-center lg:text-start lg:border-s lg:first:border-s-0 border-mist-200 lg:ps-8 lg:first:ps-0 animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <p className="font-display font-semibold text-2xl sm:text-3xl text-navy">
              {stat.value}
            </p>
            <p className="text-sm text-navy-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
