import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Find us here:</p>

      <div className="contact-layout">
        {/* რუკა მარცხნივ */}
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.929269774527!2d45.482252886183524!3d41.915879197075995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404432c8fc7551df%3A0xd56dfc2405dd1cfe!2zNDMg4YOX4YOQ4YOb4YOQ4YOgIOGDm-GDlOGDpOGDmOGDoSDhg6Xhg6Phg6nhg5AsIFRlbGF2aQ!5e0!3m2!1sen!2sge!4v1760676834105!5m2!1sen!2sge"
            title="HobArt Location"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* ტექსტი მარჯვნივ */}
        <div className="contact-info">
          <p><strong>Phone:</strong> <a href="tel:+593585424">593585424</a></p>
          <p><strong>Email:</strong> <a href="mailto:ninmaisuradze20@gmail.com">ninmaisuradze20@gmail.com</a></p>

          <div style={{ marginTop: "20px" }}>
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}