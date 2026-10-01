import { Icon } from "./Icons";

export default function BookIntro() {
  return (
    <section className="book-intro" id="book">
      <div className="container">
        <div className="head">
          <div className="reveal left">
            <span className="eyebrow">The Book</span>
            <h2 className="section-title">One story. Really about <em>two lives.</em></h2>
          </div>
          <p className="lead reveal right">This is the story of a life, and the lessons learned along the way. An honest, warm and hopeful memoir about ambition, adversity, family and the freedom to finally ask what matters most.</p>
        </div>

        <div className="two-lives">
          <article className="life-card first reveal">
            <span className="num">I</span>
            <span className="tag"><Icon name="city" />The First Life &middot; 1947</span>
            <h3>Ambition, Brooklyn and the business world</h3>
            <p>Born a twin into an Italian-American family in Brooklyn, he was ambitious, eager and impatient to fulfill his dreams of success. He married, earned his MBA and started a family. Then an insidious medical condition almost ended his life three times within a decade and left him disabled. It changed everything: how he measured success and what was most important.</p>
            <div className="bar"><i></i></div>
          </article>

          <article className="life-card second reveal delay-2">
            <span className="num">II</span>
            <span className="tag"><Icon name="sun" />The Second Life &middot; Year 46</span>
            <h3>Time, wanderlust and what really matters</h3>
            <p>His second life began in his 46th year, when his medical condition forced him to stop working. As terrible as that was, it gave him the priceless gift of unrestricted time. Time to think and ask &ldquo;What really matters in life?&rdquo; Time to make his wanderlust dreams a reality.</p>
            <div className="bar"><i></i></div>
          </article>
        </div>
      </div>
    </section>
  );
}
