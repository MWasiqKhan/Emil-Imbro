"use client";

import { useState, type MouseEvent } from "react";

// 3D book in the hero that tilts to follow the cursor.
export default function HeroBook() {
  const [tilt, setTilt] = useState<string | undefined>();

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt(`rotateY(${-14 + x * 26}deg) rotateX(${4 - y * 14}deg)`);
  };

  return (
    <div className="book-stage fade-up d5" id="bookStage" onMouseMove={onMove} onMouseLeave={() => setTilt(undefined)}>
      <div className="book" id="book3d" style={tilt ? { transform: tilt } : undefined}>
        <div className="spine"></div>
        <div className="pages"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="back" src="/images/cover-back.png" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="front" src="/images/cover-front.png" alt="Fate Gave Me Two Lives book cover by Emil Imbro" />
        <div className="shine"></div>
      </div>
      <div className="book-shadow"></div>
    </div>
  );
}
