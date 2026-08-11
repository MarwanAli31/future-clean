import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { beforeAfterProjects } from "../data/beforeAfter";
import ImageFrame from "./ImageFrame";

function CompareSlider({ project }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50); // % from left, "after" revealed left of this line
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX);
  };
  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-mist-200 shadow-sm">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] select-none touch-none cursor-ew-resize"
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={stopDragging}
      >
        {/* AFTER (full width, base layer) */}
        <div className="absolute inset-0">
          <ImageFrame
            src={project.after}
            alt={`${project.title} — after cleaning`}
            label="ضيف صورة بعد"
            className="w-full h-full"
          />
          <span className="absolute top-3 right-3 text-[11px] font-display font-semibold tracking-wide bg-leaf text-white px-2.5 py-1 rounded-full">
            بعد
          </span>
        </div>

        {/* BEFORE (full-size layer, clipped by slider position so it never rescales) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <ImageFrame
            src={project.before}
            alt={`${project.title} — before cleaning`}
            label="ضيف صورة قبل"
            className="w-full h-full"
          />
          <span className="absolute top-3 left-3 text-[11px] font-display font-semibold tracking-wide bg-navy text-white px-2.5 py-1 rounded-full">
            قبل
          </span>
        </div>

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(10,30,59,0.15)]"
          style={{ left: `${position}%` }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label={`سلايدر المقارنة لمشروع ${project.title}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            onKeyDown={onKeyDown}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid place-items-center w-11 h-11 rounded-full bg-white shadow-lg shadow-navy-900/20 text-navy focus-visible:outline-2"
          >
            <MoveHorizontal size={20} strokeWidth={2.4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 lg:py-32 bg-mist-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-skyline-600">
            نتايج حقيقية
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-navy text-balance">
            شوف الفرق بنفسك
          </h2>
          <p className="mt-4 text-navy-400 text-lg leading-relaxed">
            نتايج حقيقية من فيوتشر كلين. حرّك السلايدر عشان تقارن.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterProjects.map((project, i) => (
            <div
              key={project.title}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CompareSlider project={project} />
              <p className="mt-4 font-display font-medium text-navy text-center">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
