"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form className="form reveal right" onSubmit={onSubmit}>
      <h3>Send a Message</h3>
      <p>Share your thoughts on the book or ask a question.</p>
      <div className="field"><input type="text" id="name" placeholder=" " required /><label htmlFor="name">Your Name</label></div>
      <div className="field"><input type="email" id="email" placeholder=" " required /><label htmlFor="email">Email Address</label></div>
      <div className="field"><textarea id="msg" rows={4} placeholder=" " required></textarea><label htmlFor="msg">Your Message</label></div>
      <button type="submit" className="btn btn-primary">
        {sent ? "Thank you, message sent" : <>Send Message <Icon name="arrow" /></>}
      </button>
    </form>
  );
}
