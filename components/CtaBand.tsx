import Link from "next/link";
import { Icon } from "./Icons";

type Props = {
  title: string;
  text: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export default function CtaBand({ title, text, primary, secondary }: Props) {
  return (
    <section className="cta-band">
      <div className="container cta-inner reveal zoom">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          {primary.href.startsWith("http") ? (
            <a href={primary.href} target="_blank" rel="noopener noreferrer" className="btn btn-dark">{primary.label} <Icon name="arrow" /></a>
          ) : (
            <Link href={primary.href} className="btn btn-dark">{primary.label} <Icon name="arrow" /></Link>
          )}
          {secondary && <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  );
}
