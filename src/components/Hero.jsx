// src/components/Hero.jsx
import "./Hero.css";
import { useEffect, useState } from "react";
import s1 from "./images/s1.jpg";
import s2 from "./images/s2.jpg";
import s3 from "./images/s3.jpg";
import s4 from "./images/s4.jpg";
import s5 from "./images/s5.jpg";

export default function Hero() {
  const images = [s1, s2, s3, s4, s5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <h1>Welcome to HobArt</h1>
      <p>Discover unique handcrafted items</p>
      <a href="#best-sellers" className="btn-primary">
        Shop Now
      </a>
    </section>
  );
}
