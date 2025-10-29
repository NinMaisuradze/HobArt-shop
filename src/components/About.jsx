import "./About.css";
import aboutVideo from "./images/video/ჩვენ შესახებ.mp4";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="about-container">
        {/* 🎥 ვიდეო */}
        <div className="about-video">
          <video
            src={aboutVideo}
            controls
            autoPlay
            muted
            loop
            className="about-video-element"
          />
        </div>

        {/* ტექსტი */}
        <h2>{t("about.title")}</h2>
        <p>{t("about.text1")}</p>
        <p>
          {t("about.text2")}{" "}
          <span className="font-medium">{t("about.textHighlight")}</span>{" "}
          {t("about.text3")}
        </p>
      </div>
    </section>
  );
};

export default About;
