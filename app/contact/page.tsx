import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Emil Imbro for book clubs, speaking invitations, interviews and reader letters.",
};

const ways = [
  { icon: "book", title: "Book Clubs", text: "Reading Fate Gave Me Two Lives with your group? Invite Emil to join the conversation." },
  { icon: "mic", title: "Speaking & Events", text: "Talks and events for heritage societies, book clubs and community groups." },
  { icon: "quote", title: "Interviews", text: "Press, podcast and media requests about the memoir and its story." },
  { icon: "mail", title: "Reader Letters", text: "Share your thoughts on the book or the turning points in your own life." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in Touch"
        title={<>Let&rsquo;s share <em>the story</em></>}
        lead="For book clubs, speaking invitations, interviews and reader letters, Emil would love to hear from you."
      />

      <section className="ways">
        <div className="container">
          <div className="feature-grid">
            {ways.map((w, i) => (
              <article key={w.title} className={`feature reveal${i ? ` delay-${i}` : ""}`}>
                <span className="feature-ic"><Icon name={w.icon} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
