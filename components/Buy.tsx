import { Icon } from "./Icons";
import { amazonUrl } from "./links";
import FlipBook from "./FlipBook";
import Formats from "./Formats";

export default function Buy() {
  return (
    <section className="buy" id="buy">
      <div className="container buy-grid">
        <div className="reveal zoom">
          <FlipBook />
        </div>

        <div className="reveal right">
          <span className="eyebrow">Available Now</span>
          <h2 className="section-title">Bring the journey <em>home.</em></h2>
          <p className="lead">A memoir for anyone who has faced a turning point and wondered what comes next. Choose your format and start reading today.</p>

          <Formats />

          <div className="retailers">
            <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Icon name="cart" />Buy on Amazon</a>
            <a href="#" className="btn btn-dark">Barnes &amp; Noble <Icon name="arrow" /></a>
          </div>

          <div className="book-details">
            <div>Genre<strong>Memoir</strong></div>
            <div>Author<strong>Emil Imbro</strong></div>
            <div>ISBN<strong>978-1-6629-1358-7</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
