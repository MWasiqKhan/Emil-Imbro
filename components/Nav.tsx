"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icons";
import { amazonUrl } from "./links";
import { navLinks } from "./navLinks";

export default function Nav() {
  const pathname = usePathname();
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
        <Link href="/" className="logo" onClick={close}><strong>EMIL IMBRO</strong><small>Author &amp; Traveler</small></Link>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={close} className={pathname === l.href ? "active" : undefined}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get the Book</a>
        <button className="menu-toggle" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
          <Icon name="menu" />
        </button>
      </div>
    </header>
  );
}
