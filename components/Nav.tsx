"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { amazonUrl } from "./links";
import { navLinks } from "./navLinks";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="container">
        <Link href="/" className="logo"><strong>EMIL IMBRO</strong><small>Author &amp; Traveler</small></Link>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? "active" : undefined}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get the Book</a>
      </div>
    </header>
  );
}
