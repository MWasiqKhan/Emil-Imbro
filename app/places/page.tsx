import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { amazonUrl } from "@/components/links";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import CtaBand from "@/components/CtaBand";
import { places } from "@/components/Places";

export const metadata: Metadata = {
  title: "Places",
  description: "Brooklyn, Key West, Sicily and Ft. Lauderdale: the four places that shaped Emil Imbro's two lives.",
};

// Longer copy for each place, matched by name to the shared places list.
const details: Record<string, { life: string; text: string }> = {
  Brooklyn: {
    life: "The First Life",
    text: "Emil was born a twin in 1947 and raised in a close Italian-American family in Brooklyn, New York. It is where the ambition began: eager and impatient to fulfill his dreams of success.",
  },
  "Key West": {
    life: "The Second Life",
    text: "When his medical condition forced him to stop working, Key West became his winter refuge. A van parked by the water became his beachside home, and the start of years of travel.",
  },
  Sicily: {
    life: "Family Roots",
    text: "Of everywhere he has traveled in the US and abroad, Sicily remains his favorite destination, because he loves reconnecting with his family, past and present.",
  },
  "Ft. Lauderdale": {
    life: "Today",
    text: "Today Emil lives near Ft. Lauderdale, Florida, with his wife, returning whenever he can to his beloved Sicily.",
  },
};

export default function PlacesPage() {
  return (
    <>
      <PageHero
        crumb="Places"
        eyebrow="Places That Shaped Him"
        title={<>Where the story <em>lives</em></>}
        lead="Four places, two lives. Each one holds a chapter of the journey."
      />

      <section className="place-details">
        <div className="container">
          {places.map((p, i) => (
            <article key={p.name} className={`place-row${i % 2 ? " flip-row" : ""}`}>
              <div className={`place-visual ${p.cls} reveal ${i % 2 ? "right" : "left"}`}>
                <Icon name={p.icon} className="big-icon" />
                <span className="place-num">0{i + 1}</span>
              </div>
              <div className={`reveal ${i % 2 ? "left" : "right"}`}>
                <span className="eyebrow">{details[p.name].life}</span>
                <h2 className="section-title">{p.name}</h2>
                <span className="place-region"><Icon name="pin" />{p.idx.split("·")[1]?.trim()}</span>
                <p className="lead">{p.text}</p>
                <p className="body-copy">{details[p.name].text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Marquee />

      <CtaBand
        title="Read the full journey"
        text="Every place is a chapter in Fate Gave Me Two Lives."
        primary={{ href: amazonUrl, label: "Buy on Amazon" }}
        secondary={{ href: "/journey", label: "See the Timeline" }}
      />
    </>
  );
}
