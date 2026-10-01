import { Icon } from "./Icons";

export default function Quote() {
  return (
    <section className="quote">
      <div className="container reveal zoom">
        <Icon name="quote" className="icon-quote" />
        <blockquote>Time to think and ask, <span>&ldquo;What really matters in life?&rdquo;</span></blockquote>
        <cite>Emil Imbro &middot; Fate Gave Me Two Lives</cite>
      </div>
    </section>
  );
}
