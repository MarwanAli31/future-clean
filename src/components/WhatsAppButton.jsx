import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config/contact";

/**
 * Every WhatsApp CTA on the site should render this component so the
 * number and message stay centralized in src/config/contact.js.
 *
 * variant: "solid" (green, filled) | "outline" (for dark backgrounds) | "ghost" (navbar)
 */
export default function WhatsAppButton({
  children = "كلمنا على واتساب",
  message,
  variant = "solid",
  size = "md",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full transition-all duration-300 focus-visible:outline-2";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    solid:
      "bg-leaf text-white shadow-lg shadow-leaf/25 hover:bg-leaf-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-leaf/30",
    outline:
      "bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-leaf hover:border-leaf",
    ghost: "bg-leaf/10 text-leaf-600 hover:bg-leaf hover:text-white",
  };

  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={size === "lg" ? 22 : 18} strokeWidth={2.2} />
      {children}
    </a>
  );
}
