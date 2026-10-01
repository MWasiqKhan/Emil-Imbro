import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#home" className="logo"><strong>EMIL IMBRO</strong><small>Fate Gave Me Two Lives</small></a>
          <div className="socials">
            <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
            <a href="#" aria-label="Instagram"><Icon name="instagram" /></a>
            <a href="#" aria-label="X"><Icon name="twitter" /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Emil Imbro. All rights reserved.</span>
          <nav><a href="#book">The Book</a><a href="#about">About</a><a href="#buy">Buy</a><a href="#contact">Contact</a></nav>
        </div>
      </div>
    </footer>
  );
}
