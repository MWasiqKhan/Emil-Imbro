import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { amazonUrl } from "@/components/links";
import PageHero from "@/components/PageHero";
import BookIntro from "@/components/BookIntro";
import Trailers from "@/components/Trailers";
import Quote from "@/components/Quote";
import Buy from "@/components/Buy";

export const metadata: Metadata = {
  title: "About the Book",
  description: "Fate Gave Me Two Lives, a memoir by Emil Imbro about ambition, adversity, family and what really matters.",
};

const themes = [
  { icon: "city", title: "Ambition", text: "A Brooklyn-born twin, eager and impatient to fulfill his dreams of success: marriage, an MBA, a career and a family." },
  { icon: "heart", title: "Adversity", text: "An insidious medical condition that almost ended his life three times within a decade, and changed how he measured success." },
  { icon: "award", title: "Family", text: "An Italian-American upbringing, a family raised in New Jersey, and a lifelong bond with relatives past and present." },
  { icon: "sun", title: "Freedom", text: "The priceless gift of unrestricted time, and the wanderlust dreams it finally made possible." },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        crumb="About Book"
        eyebrow="A Memoir by Emil Imbro"
        title={<>Fate Gave Me <em>Two Lives</em></>}
        lead="An honest, warm and hopeful memoir about ambition, adversity, family and the freedom to finally ask what matters most."
      />

      <section className="synopsis">
        <div className="container split">
          <div className="cover-card reveal left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/cover-front.png" alt="Front cover of Fate Gave Me Two Lives" />
          </div>
          <div className="reveal right">
            <span className="eyebrow">About the Book</span>
            <h2 className="section-title">The story of a life, and the <em>lessons learned</em> along the way.</h2>
            <p className="lead">The story of a Brooklyn-born twin who chased success, nearly lost everything, and discovered in his second life the answer to one question: what really matters?</p>
            <p className="body-copy">A memoir for anyone who has faced a turning point and wondered what comes next. It follows one man from the streets of Brooklyn to a van on a Key West beach, and on to the family roots he treasures in Sicily.</p>
            <div className="book-details">
              <div>Genre<strong>Memoir</strong></div>
              <div>Author<strong>Emil Imbro</strong></div>
              <div>ISBN<strong>978-1-6629-1358-7</strong></div>
            </div>
            <div className="retailers inline-actions">
              <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Icon name="cart" />Buy on Amazon</a>
              <Link href="/journey" className="btn btn-outline">Follow the Journey <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      <Trailers />
      <BookIntro />

      <section className="themes">
        <div className="container">
          <div className="center-head reveal">
            <span className="eyebrow">Inside the Pages</span>
            <h2 className="section-title">What the story <em>explores</em></h2>
          </div>
          <div className="feature-grid">
            {themes.map((t, i) => (
              <article key={t.title} className={`feature reveal${i ? ` delay-${i}` : ""}`}>
                <span className="feature-ic"><Icon name={t.icon} /></span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Quote />
      <Buy />
    </>
  );
}
