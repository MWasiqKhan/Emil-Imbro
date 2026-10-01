"use client";

import { useState } from "react";
import { Icon } from "./Icons";

const formats = [
  { icon: "book", name: "Paperback", note: "Print edition" },
  { icon: "tablet", name: "eBook", note: "Kindle & more" },
  { icon: "headphones", name: "Audiobook", note: "Coming soon" },
];

export default function Formats() {
  const [active, setActive] = useState("Paperback");

  return (
    <div className="formats">
      {formats.map((f) => (
        <div key={f.name} className={`format${active === f.name ? " active" : ""}`} onClick={() => setActive(f.name)}>
          <Icon name={f.icon} />
          <div><strong>{f.name}</strong><small>{f.note}</small></div>
        </div>
      ))}
    </div>
  );
}
