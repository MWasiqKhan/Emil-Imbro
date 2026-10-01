import Link from "next/link";
import { Icon } from "./Icons";
import { amazonUrl } from "./links";
import { navLinks } from "./navLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="logo"><strong>EMIL IMBRO</strong><small>Fate Gave Me Two Lives</small></Link>
          <div className="socials">
            <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
            <a href="#" aria-label="Instagram"><Icon name="instagram" /></a>
            <a href="#" aria-label="X"><Icon name="twitter" /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Emil Imbro. All rights reserved.</span>
          <nav>{navLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}<a href={amazonUrl} target="_blank" rel="noopener noreferrer">Buy on Amazon</a></nav>
        </div>
      </div>
    </footer>
  );
}
