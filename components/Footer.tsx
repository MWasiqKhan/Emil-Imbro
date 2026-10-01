import Link from "next/link";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="logo"><strong>EMIL IMBRO</strong><small>Fate Gave Me Two Lives</small></Link>
          <div className="socials">
            <a href="https://www.facebook.com/EmilImbroAuthor/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
            <a href="https://www.instagram.com/emilimbroauthor?stkn=eDh4MjlhMTAzNG94" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Emil Imbro. All rights reserved.</span>
          <a href="https://fortunepublishers.com/" target="_blank" rel="noopener noreferrer" className="powered-by">
            <small>Powered by</small>
            <img src="/images/fortune-publishers-logo.png" alt="Fortune Publishers" />
          </a>
        </div>
      </div>
    </footer>
  );
}
