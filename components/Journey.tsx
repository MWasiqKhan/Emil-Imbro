import Timeline from "./Timeline";

export default function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">The Journey</span>
          <h2 className="section-title">A life told in chapters</h2>
          <p className="lead">From the streets of Brooklyn to a van on a Key West beach, the moments that shaped both lives.</p>
        </div>

        <Timeline />
      </div>
    </section>
  );
}
