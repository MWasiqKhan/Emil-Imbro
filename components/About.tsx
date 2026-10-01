import { Icon } from "./Icons";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="portrait reveal left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="frame"><img src="/images/author.png" alt="Portrait of author Emil Imbro" /></div>
          <div className="badge">
            <Icon name="pen" />
            <div><strong>Memoirist</strong><small>Italian Heritage Writer</small></div>
          </div>
        </div>

        <div className="reveal right">
          <span className="eyebrow">Meet the Author</span>
          <h2 className="section-title">Emil <em>Imbro</em></h2>
          <p><strong>Emil Imbro grew up in Brooklyn, New York.</strong> He raised his family in New Jersey and found a winter refuge in Key West, where his van became his beachside home. He now resides near Ft. Lauderdale with his wife.</p>
          <p>He has traveled extensively in the US and abroad. Sicily remains his favorite destination because he loves reconnecting with his family, past and present.</p>
          <div className="signature">Emil Imbro</div>
          <div className="facts">
            <div className="fact"><Icon name="award" /><h5>VP of Cultural Affairs</h5><span>Alpha Phi Delta Fraternity</span></div>
            <div className="fact"><Icon name="pen" /><h5>Columnist</h5><span>Italian Heritage column, for many years</span></div>
            <div className="fact"><Icon name="globe" /><h5>World Traveler</h5><span>Across the US and abroad</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
