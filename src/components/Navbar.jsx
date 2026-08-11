import { useEffect, useState } from "react";
import { Menu, X, Droplets } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const NAV_LINKS = [
  { label: "الرئيسية", href: "#home" },
  { label: "خدماتنا", href: "#services" },
  { label: "قبل وبعد", href: "#before-after" },
  { label: "مين احنا", href: "#about" },
  { label: "تواصل معانا", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm shadow-navy-900/5"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20"
        aria-label="القائمة الرئيسية"
      >
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className={`grid place-items-center w-9 h-9 rounded-lg transition-colors ${
              scrolled ? "bg-navy text-white" : "bg-white text-navy"
            }`}
          >
            <Droplets size={18} strokeWidth={2.4} />
          </span>
          <span
            className={`font-display font-semibold text-lg tracking-tight transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Future Clean
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-navy-600 hover:text-skyline"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppButton size="sm">كلمنا على واتساب</WhatsAppButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`lg:hidden grid place-items-center w-10 h-10 rounded-full transition-colors ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "قفل القائمة" : "فتح القائمة"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-navy-900 transition-all duration-300 ease-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pt-8">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className="border-b border-white/10"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg font-display font-medium text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 mt-8">
          <WhatsAppButton size="lg" className="w-full">
            كلمنا على واتساب
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
