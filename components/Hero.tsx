import { Icon } from "./Icons";
import HeroBook from "./HeroBook";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="glow"></div>
        <div className="sun"></div>
        <svg className="birds" viewBox="0 0 120 40" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round">
          <path d="M10 20q6-6 12 0q6-6 12 0" /><path d="M50 10q4-4 8 0q4-4 8 0" /><path d="M78 26q5-5 10 0q5-5 10 0" />
        </svg>
        <svg className="waves" viewBox="0 0 2880 160" preserveAspectRatio="none" style={{ width: "200%" }}>
          <path fill="#3c5566" d="M0 80 C240 40 480 120 720 80 S1200 40 1440 80 S1920 120 2160 80 S2640 40 2880 80 V160 H0Z" />
          <path fill="#152838" d="M0 110 C240 70 480 150 720 110 S1200 70 1440 110 S1920 150 2160 110 S2640 70 2880 110 V160 H0Z" />
        </svg>
      </div>

      <div className="container hero-grid">
        <div>
          <span className="eyebrow fade-up d1">A Memoir by Emil Imbro</span>
          <h1>
            <span className="line"><span>Fate Gave</span></span>
            <span className="line"><span>Me</span></span>
            <span className="script">Two Lives</span>
          </h1>
          <p className="lead fade-up d2">The story of a Brooklyn-born twin who chased success, nearly lost everything, and discovered in his second life the answer to one question: what really matters?</p>
          <div className="hero-actions fade-up d3">
            <a href="#buy" className="btn btn-primary">Order Your Copy <Icon name="arrow" /></a>
            <a href="#book" className="btn btn-ghost">Read the Story</a>
          </div>
          <div className="hero-meta fade-up d4">
            <div><strong>1947</strong>Born in Brooklyn</div>
            <div><strong>Two</strong>Lives, One Story</div>
            <div><strong>46</strong>A New Beginning</div>
          </div>
        </div>

        <HeroBook />
      </div>

      <a href="#book" className="scroll-cue">Scroll<span></span></a>
    </section>
  );
}
