"use client";

import { useRef, useState } from "react";
import { Icon } from "./Icons";

const trailers = [
  { src: "/videos/trailer-1.mp4", tag: "Trailer I", title: "He built a career. He built a family.", text: "Ambition, success and the life he worked so hard to build." },
  { src: "/videos/trailer-2.mp4", tag: "Trailer II", title: "Every life begins with a story", text: "A Brooklyn childhood in an Italian-American family, where it all began." },
];

function TrailerCard({ src, tag, title, text, delay }: (typeof trailers)[number] & { delay: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    ref.current?.play();
  };

  // Only one trailer plays at a time.
  const onPlay = () => {
    document.querySelectorAll<HTMLVideoElement>(".trailer video").forEach((v) => { if (v !== ref.current) v.pause(); });
  };

  return (
    <article className={`trailer reveal${delay}`}>
      <div className={`trailer-frame${started ? " started" : ""}`}>
        {/* #t=0.5 makes mobile browsers show a frame instead of a blank box before playback */}
        <video ref={ref} src={`${src}#t=0.5`} preload="metadata" playsInline controls={started} onPlay={onPlay} />
        {!started && (
          <button className="trailer-play" onClick={play} aria-label={`Play ${tag}: ${title}`}>
            <span className="trailer-btn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg></span>
          </button>
        )}
      </div>
      <span className="trailer-tag"><Icon name="book" />{tag}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default function Trailers() {
  return (
    <section className="trailers" id="trailers">
      <div className="container">
        <div className="center-head reveal">
          <span className="eyebrow">Book Trailers</span>
          <h2 className="section-title">Watch the story <em>come to life</em></h2>
          <p className="lead">Two short films from Fate Gave Me Two Lives.</p>
        </div>
        <div className="trailer-grid">
          {trailers.map((t, i) => <TrailerCard key={t.src} {...t} delay={i ? " delay-2" : ""} />)}
        </div>
      </div>
    </section>
  );
}
