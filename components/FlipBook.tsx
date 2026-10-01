"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";

/* eslint-disable @next/next/no-img-element */

// Interactive book: hover shows back cover, clicks turn 3 pages, then it closes and points to Amazon.
// Steps: 0 closed | 1 cover open | 2 page 1 turned | 3 page 2 turned | 4 closed + blurred + buy message
export default function FlipBook() {
  const [step, setStep] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function advance() {
    if (step >= 3) return;
    const next = step + 1;
    setStep(next);
    if (next === 3) {
      timers.current.push(
        setTimeout(() => {
          setStep(4);
          timers.current.push(setTimeout(() => setStep(0), 4000));
        }, 3000)
      );
    }
  }

  return (
    <div className="pb" data-step={step}>
      <div
        className="pb-scene"
        role="button"
        tabIndex={0}
        aria-label="Book preview. Press to open and turn pages."
        onClick={(e) => { if (!(e.target as HTMLElement).closest("a")) advance(); }}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); advance(); } }}
      >
        <div className="pb-wrap">
          <div className="pb-shadow"></div>
          <div className="pb-book">
            <div className="pb-spine"></div>
            <div className="pb-edge"></div>
            <div className="pb-back-cover"><img src="/images/cover-back.png" alt="Back cover of Fate Gave Me Two Lives" /></div>

            <div className="pb-page3"><img src="/images/page-3.png" alt="Book page 7" /></div>
            <div className="pb-leaf pb-page pb-p2">
              <div className="pb-face"><img src="/images/page-2.png" alt="Book page 6" /></div>
              <div className="pb-face pb-back"></div>
            </div>
            <div className="pb-leaf pb-page pb-p1">
              <div className="pb-face"><img src="/images/page-1.png" alt="Book page 5, Introduction" /></div>
              <div className="pb-face pb-back"></div>
            </div>
            <div className="pb-leaf pb-cover">
              <div className="pb-face"><img src="/images/cover-front.png" alt="Front cover of Fate Gave Me Two Lives" /></div>
              <div className="pb-face pb-back"></div>
            </div>
          </div>
        </div>

        <div className="pb-overlay">
          <a className="pb-buy" href="#">
            <span className="pb-buy-text">Buy the book<br />to read more</span>
            <span className="pb-rule"></span>
            <svg className="pb-arrow" viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 20h104" /><path d="M92 6l18 14-18 14" /></svg>
          </a>
        </div>
      </div>
      <div className="flip-hint" aria-hidden="true"><Icon name="rotate" /><span className="h0">Hover to turn &middot; click to open</span><span className="h1">Click to turn the page</span></div>
    </div>
  );
}
