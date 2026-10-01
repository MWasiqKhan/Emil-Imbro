import { Icon } from "./Icons";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="reveal left">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-title">Let&rsquo;s share the story</h2>
          <p className="lead">For book clubs, speaking invitations, interviews and reader letters, Emil would love to hear from you.</p>
          <ul className="contact-list">
            <li><span className="ic"><Icon name="mail" /></span><div><small>Email</small>hello@emilimbro.com</div></li>
            <li><span className="ic"><Icon name="mic" /></span><div><small>Speaking &amp; Events</small>Book clubs, heritage societies, talks</div></li>
            <li><span className="ic"><Icon name="pin" /></span><div><small>Based In</small>Ft. Lauderdale, Florida</div></li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
