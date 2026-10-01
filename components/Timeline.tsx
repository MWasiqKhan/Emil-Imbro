"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { year: "1947", title: "Born a twin in Brooklyn", text: "Raised in a close Italian-American family in Brooklyn, New York." },
  { year: "The Climb", title: "Marriage, an MBA and a family", text: "Ambitious and eager, he built a career and raised his family in New Jersey." },
  { year: "A Decade of Trials", title: "Three brushes with death", text: "An insidious medical condition nearly ended his life three times and left him disabled." },
  { year: "Year 46", title: "The second life begins", text: "Forced to stop working, he received the priceless gift of unrestricted time." },
  { year: "Key West", title: "A van becomes a beachside home", text: "A winter refuge by the sea, and the start of years of travel across the US and abroad." },
  { year: "Today", title: "Home near Ft. Lauderdale", text: "Living with his wife in Florida, and returning whenever he can to his beloved Sicily." },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setProgress(Math.min(Math.max((window.innerHeight * 0.6 - r.top) / r.height, 0), 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="timeline" id="timeline" ref={ref}>
      <div className="progress" id="timelineProgress" style={{ height: `${progress * 100}%` }}></div>
      {items.map((item) => (
        <div className="t-item reveal" key={item.title}>
          <span className="dot"></span>
          <span className="year">{item.year}</span>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
