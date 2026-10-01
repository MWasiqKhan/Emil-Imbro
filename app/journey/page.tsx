import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import Journey from "@/components/Journey";
import Quote from "@/components/Quote";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Journey",
  description: "From Brooklyn in 1947 to Key West and Ft. Lauderdale: the chapters that shaped Emil Imbro's two lives.",
};

const lives = [
  {
    cls: "first",
    icon: "city",
    label: "The First Life",
    when: "1947 · Brooklyn & New Jersey",
    points: [
      "Born a twin into an Italian-American family in Brooklyn",
      "Married, earned his MBA and started a family",
      "Built a career and raised his family in New Jersey",
      "Three brushes with death within a decade",
    ],
  },
  {
    cls: "second",
    icon: "sun",
    label: "The Second Life",
    when: "Year 46 · Key West to Florida",
    points: [
      "Forced to stop working, he gained unrestricted time",
      "A van became his beachside home in Key West",
      "Years of travel across the US and abroad",
      "Home near Ft. Lauderdale, with Sicily always calling",
    ],
  },
];

export default function JourneyPage() {
  return (
    <>
      <PageHero
        crumb="Journey"
        eyebrow="The Journey"
        title={<>A life told in <em>chapters</em></>}
        lead="From the streets of Brooklyn to a van on a Key West beach, the moments that shaped both lives."
      />

      <section className="compare">
        <div className="container">
          <div className="center-head reveal">
            <span className="eyebrow">Two Lives at a Glance</span>
            <h2 className="section-title">Before and after <em>year 46</em></h2>
          </div>
          <div className="compare-grid">
            {lives.map((l, i) => (
              <article key={l.label} className={`compare-card ${l.cls} reveal${i ? " delay-2" : ""}`}>
                <span className="tag"><Icon name={l.icon} />{l.label}</span>
                <h3>{l.when}</h3>
                <ul>
                  {l.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </article>
            ))}
            <div className="compare-turn reveal zoom" aria-hidden="true"><span>46</span></div>
          </div>
        </div>
      </section>

      <Journey />
      <Quote />

      <CtaBand
        title="Walk the places that shaped him"
        text="Brooklyn, Key West, Sicily and Ft. Lauderdale each hold a chapter of the story."
        primary={{ href: "/places", label: "Explore the Places" }}
        secondary={{ href: "/book", label: "About the Book" }}
      />
    </>
  );
}
