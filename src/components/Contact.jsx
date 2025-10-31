import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.text")}</p>

      <div className="contact-layout">
        {/* რუკა მარცხნივ */}
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.929269774527!2d45.482252886183524!3d41.915879197075995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404432c8fc7551df%3A0xd56dfc2405dd1cfe!2zNDMg4YOX4YOQ4YOb4YOQ4YOgIOGDm-GDlOGDpOGDmOGDoSDhg6Xhg6Phg6nhg5AsIFRlbGF2aQ!5e0!3m2!1sen!2sge!4v1760676834105!5m2!1sen!2sge"
            title={t("contact.title")}
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* კონტაქტის ინფორმაცია მარჯვნივ */}
        <div className="contact-info">
          <p>
            <strong>{t("contact.phoneLabel")}:</strong>{" "}
            <a href={`tel:${t("contact.phone")}`}>{t("contact.phone")}</a>
          </p>
          <p>
            <strong>{t("contact.emailLabel")}:</strong>{" "}
            <a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a>
          </p>

          <div style={{ marginTop: "20px" }}>
            <Link to="/" className="btn-primary">
              {t("contact.backHome")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
