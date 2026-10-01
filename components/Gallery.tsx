"use client";

import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */

const photos = [
  { src: "/images/gallery-uniform.webp", alt: "Emil Imbro as a young man in uniform", caption: "In uniform", cls: "tall" },
  { src: "/images/gallery-office.jpg", alt: "Emil Imbro at his office desk", caption: "The business years", cls: "tall" },
  { src: "/images/gallery-brooklyn-bridge.webp", alt: "Emil Imbro celebrating on a bike on the Brooklyn Bridge", caption: "Back on the Brooklyn Bridge", cls: "tall" },
  { src: "/images/gallery-van-sunset.webp", alt: "Emil Imbro's van parked by the water at sunset", caption: "A home on wheels at sunset", cls: "" },
  { src: "/images/gallery-van-selfie.webp", alt: "Emil Imbro in a sun hat in front of his van", caption: "Life on the road", cls: "" },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i + photos.length - 1) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <section className="gallery">
      <div className="container">
        <div className="center-head reveal">
          <span className="eyebrow">Photo Album</span>
          <h2 className="section-title">Moments from <em>two lives</em></h2>
          <p className="lead">Snapshots from Emil&rsquo;s own collection, from his early years to life on the road.</p>
        </div>

        <div className="gallery-grid">
          {photos.map((p, i) => (
            <button key={p.src} className={`gallery-item ${p.cls} reveal${i % 4 ? ` delay-${i % 4}` : ""}`} onClick={() => setOpen(i)} aria-label={`View photo: ${p.caption}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
              <span className="gallery-cap">{p.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={photos[open].caption} onClick={() => setOpen(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={photos[open].src} alt={photos[open].alt} />
            <figcaption>{photos[open].caption}<small>{open + 1} / {photos.length}</small></figcaption>
          </figure>
          <button className="lb-close" aria-label="Close" onClick={() => setOpen(null)}>&times;</button>
          <button className="lb-nav prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setOpen((open + photos.length - 1) % photos.length); }}>&#8249;</button>
          <button className="lb-nav next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % photos.length); }}>&#8250;</button>
        </div>
      )}
    </section>
  );
}
