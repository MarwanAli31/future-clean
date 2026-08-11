import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "../data/gallery";
import ImageFrame from "./ImageFrame";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % galleryImages.length),
    []
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, next, prev]);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-skyline-600">
            شغلنا
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-navy text-balance">
            معرض الصور
          </h2>
        </div>

        {/* Masonry-style grid via CSS columns */}
        <div className="mt-14 columns-2 md:columns-3 gap-4 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`block w-full rounded-xl overflow-hidden group relative animate-fade-up ${
                i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
              aria-label={`افتح صورة ${img.caption} بملء الشاشة`}
            >
              <ImageFrame
                src={img.src}
                alt={img.caption}
                className="w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/25 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-navy-950/95 backdrop-blur-sm flex items-center justify-center px-4 animate-fade-up"
          role="dialog"
          aria-modal="true"
          aria-label="عرض الصورة"
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-6 right-6 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="إغلاق"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={prev}
            className="absolute left-3 sm:left-6 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="الصورة السابقة"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="max-w-3xl w-full">
            <ImageFrame
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].caption}
              className="w-full aspect-[4/3] rounded-2xl"
            />
            <p className="mt-4 text-center text-white/80 font-display">
              {galleryImages[activeIndex].caption}
            </p>
          </div>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 sm:right-6 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="الصورة التالية"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
