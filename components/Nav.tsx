"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`} id="nav">
      <div className="container">
        <a href="#home" className="logo"><strong>EMIL IMBRO</strong><small>Author &amp; Traveler</small></a>
        <ul className="nav-links">
          <li><a href="#book" onClick={close}>The Book</a></li>
          <li><a href="#journey" onClick={close}>Journey</a></li>
          <li><a href="#about" onClick={close}>About</a></li>
          <li><a href="#places" onClick={close}>Places</a></li>
          <li><a href="#contact" onClick={close}>Contact</a></li>
        </ul>
        <a href="#buy" className="btn btn-primary">Get the Book</a>
        <button className="menu-toggle" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
          <Icon name="menu" />
        </button>
      </div>
    </header>
  );
}
