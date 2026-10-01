const words = ["Brooklyn", "New Jersey", "Key West", "Ft. Lauderdale", "Sicily", "What Really Matters"];

export default function Marquee() {
  // Words are rendered twice so the -50% translate loops seamlessly.
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...words, ...words].map((w, i) => <span key={i}>{w}</span>)}
      </div>
    </div>
  );
}
