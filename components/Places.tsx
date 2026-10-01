import { Icon } from "./Icons";

export const places = [
  { cls: "p1", delay: "", icon: "bridge", idx: "01 · NEW YORK", name: "Brooklyn", text: "Where it all began in 1947, a twin in a lively Italian-American family." },
  { cls: "p2", delay: " delay-1", icon: "wave", idx: "02 · FLORIDA", name: "Key West", text: "A winter refuge, where a van parked by the water became a beachside home." },
  { cls: "p3", delay: " delay-2", icon: "mountain", idx: "03 · ITALY", name: "Sicily", text: "His favorite destination, and a way of reconnecting with family past and present." },
  { cls: "p4", delay: " delay-3", icon: "palm", idx: "04 · FLORIDA", name: "Ft. Lauderdale", text: "Home today, shared with his wife under the Florida sun." },
];

export default function Places() {
  return (
    <section className="places" id="places">
      <div className="container">
        <div className="head">
          <div className="reveal left">
            <span className="eyebrow">Places That Shaped Him</span>
            <h2 className="section-title">Where the story <em>lives</em></h2>
          </div>
          <p className="lead reveal right">Four places, two lives. Each one holds a chapter of the journey.</p>
        </div>

        <div className="place-grid">
          {places.map((p) => (
            <article key={p.name} className={`place ${p.cls} reveal${p.delay}`}>
              <Icon name={p.icon} className="big-icon" />
              <div className="line-bar"></div>
              <span className="idx">{p.idx}</span>
              <h4>{p.name}</h4>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
