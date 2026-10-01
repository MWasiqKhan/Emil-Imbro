import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  script?: string;
  lead: string;
  crumb: string;
};

// Dark banner at the top of every inner page (keeps the white nav readable).
export default function PageHero({ eyebrow, title, script, lead, crumb }: Props) {
  return (
    <section className="page-hero">
      <div className="hero-bg">
        <div className="glow"></div>
        <div className="sun"></div>
        <svg className="waves" viewBox="0 0 2880 160" preserveAspectRatio="none" style={{ width: "200%" }}>
          <path fill="#3c5566" d="M0 80 C240 40 480 120 720 80 S1200 40 1440 80 S1920 120 2160 80 S2640 40 2880 80 V160 H0Z" />
          <path fill="#152838" d="M0 110 C240 70 480 150 720 110 S1200 70 1440 110 S1920 150 2160 110 S2640 70 2880 110 V160 H0Z" />
        </svg>
      </div>

      <div className="container">
        <nav className="crumbs ph-up p1" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><span aria-current="page">{crumb}</span>
        </nav>
        <span className="eyebrow ph-up p2">{eyebrow}</span>
        <h1 className="ph-up p3">{title}</h1>
        {script && <span className="script">{script}</span>}
        <p className="lead ph-up p4">{lead}</p>
      </div>
    </section>
  );
}
