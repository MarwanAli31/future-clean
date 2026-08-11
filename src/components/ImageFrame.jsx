import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Wraps an <img> so that if the file at `src` hasn't been added yet
 * (or fails to load), we show a clean branded placeholder instead of
 * a broken-image icon. Drop your real photo at the given path in
 * /public/images/ and it will appear automatically — no code changes.
 */
export default function ImageFrame({ src, alt, className = "", label, fit = "cover" }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`img-frame ${className}`}>
      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          style={{ objectFit: fit }}
        />
      ) : (
        <div className="img-fallback">
          <ImageIcon size={28} strokeWidth={1.5} />
          <span>{label || alt || "ضيف صورة"}</span>
        </div>
      )}
    </div>
  );
}
