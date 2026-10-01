// Inline SVG sprite, referenced by <Icon name="..." /> via <use href="#i-name" />.
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="i-book" viewBox="0 0 24 24"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3H11v17H4.5A2.5 2.5 0 0 0 2 22.5zM22 5.5A2.5 2.5 0 0 0 19.5 3H13v17h6.5a2.5 2.5 0 0 1 2.5 2.5z" /></symbol>
      <symbol id="i-city" viewBox="0 0 24 24"><path d="M3 21h18M5 21V8l5-3v16M10 21V3h6v18M16 21V10h3v11M13 7h0M13 11h0M13 15h0M7 11h0M7 15h0" /></symbol>
      <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></symbol>
      <symbol id="i-plane" viewBox="0 0 24 24"><path d="M17.8 19.2L16 11l3.5-3.5A2.1 2.1 0 0 0 16.5 4.5L13 8 4.8 6.2l-1.3 1.3 6.5 3.5-3 3-2.5-.5L3 15l3.5 1.5L8 20l1-1-.5-2.5 3-3 3.5 6.5z" /></symbol>
      <symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" /><path d="M8.2 13.9L7 22l5-3 5 3-1.2-8.1" /></symbol>
      <symbol id="i-pen" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></symbol>
      <symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" /></symbol>
      <symbol id="i-bridge" viewBox="0 0 24 24"><path d="M2 20h20M5 20V6M19 20V6M5 6c2 5 5 7 7 7s5-2 7-7M5 10h14M9 12v8M15 12v8" /></symbol>
      <symbol id="i-palm" viewBox="0 0 24 24"><path d="M13 8c0-2.8 2.2-5 5-5M13 8c-2-2-5-2-7 0M13 8c3-1 6 0 8 3M13 8c-2 1-4 4-4 7M13 8c1 4 0 9-2 13" /></symbol>
      <symbol id="i-mountain" viewBox="0 0 24 24"><path d="M3 20l7-12 4 6 2-3 5 9zM8.5 11l1.5 2 1.5-2" /></symbol>
      <symbol id="i-wave" viewBox="0 0 24 24"><path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /></symbol>
      <symbol id="i-heart" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" /></symbol>
      <symbol id="i-quote" viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5H3v7h4c0 4-2 6-4 6zM14 21c3 0 7-1 7-8V5h-7v7h4c0 4-2 6-4 6z" /></symbol>
      <symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></symbol>
      <symbol id="i-pin" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></symbol>
      <symbol id="i-mic" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M19 10a7 7 0 0 1-14 0M12 17v5M8 22h8" /></symbol>
      <symbol id="i-cart" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></symbol>
      <symbol id="i-tablet" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 18h0" /></symbol>
      <symbol id="i-headphones" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z" /></symbol>
      <symbol id="i-rotate" viewBox="0 0 24 24"><path d="M23 4v6h-6M1 20v-6h6" /><path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15" /></symbol>
      <symbol id="i-up" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7" /></symbol>
      <symbol id="i-menu" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M9 17h12" /></symbol>
      <symbol id="i-facebook" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></symbol>
      <symbol id="i-instagram" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h0" /></symbol>
      <symbol id="i-twitter" viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20" /></symbol>
      <symbol id="i-linkedin" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></symbol>
    </svg>
  );
}

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg className={className ? `icon ${className}` : "icon"}>
      <use href={`#i-${name}`} />
    </svg>
  );
}
