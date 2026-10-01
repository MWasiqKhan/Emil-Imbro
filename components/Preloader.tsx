const letters: [string, string][] = [
  ["E", ".05s"], ["m", ".1s"], ["i", ".15s"], ["l", ".2s"],
];
const lastName: [string, string][] = [
  ["I", ".3s"], ["m", ".35s"], ["b", ".4s"], ["r", ".45s"], ["o", ".5s"],
];

export default function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div>
        <span>
          {letters.map(([l, d], i) => <i key={i} style={{ animationDelay: d }}>{l}</i>)}
          &nbsp;
          {lastName.map(([l, d], i) => <i key={i} style={{ animationDelay: d }}>{l}</i>)}
        </span>
        <div className="bar"></div>
      </div>
    </div>
  );
}
