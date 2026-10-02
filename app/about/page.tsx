import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { places } from "@/components/Places";

export const metadata: Metadata = {
  title: "About the Author",
  description: "Meet Emil Imbro: Brooklyn-born memoirist, Italian heritage columnist and world traveler.",
};

const values = [
  { icon: "heart", title: "Family First", text: "He loves reconnecting with his family, past and present, most of all on his visits to Sicily." },
  { icon: "pen", title: "Heritage in Words", text: "For many years he wrote an Italian Heritage column, and served as VP of Cultural Affairs for the Alpha Phi Delta Fraternity." },
  { icon: "plane", title: "Wanderlust", text: "He has traveled extensively in the US and abroad, turning long-held dreams into real journeys." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Author"
        eyebrow="Meet the Author"
        title={<>Emil <em>Imbro</em></>}
        lead="Brooklyn-born memoirist, Italian heritage writer and world traveler. Now living near Ft. Lauderdale with his wife."
      />

      <Gallery />
      <About />

      <section className="values">
        <div className="container">
          <div className="center-head reveal">
            <span className="eyebrow">What Drives Him</span>
            <h2 className="section-title">The heart behind <em>the story</em></h2>
          </div>
          <div className="feature-grid three">
            {values.map((v, i) => (
              <article key={v.title} className={`feature reveal${i ? ` delay-${i}` : ""}`}>
                <span className="feature-ic"><Icon name={v.icon} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-trail">
        <div className="container">
          <div className="center-head reveal">
            <span className="eyebrow">Where He Has Called Home</span>
            <h2 className="section-title">From Brooklyn to <em>Florida</em></h2>
          </div>
          <ol className="trail">
            {places.map((p, i) => (
              <li key={p.name} className={`reveal${i ? ` delay-${i}` : ""}`}>
                <div className="trail-stop">
                  <span className="trail-ic"><Icon name={p.icon} /></span>
                  <small>{p.idx}</small>
                  <strong>{p.name}</strong>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Invite Emil to your book club"
        text="For book clubs, speaking invitations, interviews and reader letters, Emil would love to hear from you."
        primary={{ href: "/contact", label: "Get in Touch" }}
        secondary={{ href: "/book", label: "Read About the Book" }}
      />
    </>
  );
}
