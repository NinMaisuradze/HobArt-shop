import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../../data/products";
import { useTranslation } from "react-i18next";
import "./DecorationCandle.css";

export default function DecorationCandle({ lang }) {
  const { t } = useTranslation();

  // ფილტრი დეკორატიული სანთლებისთვის
  const decorationCandles = products.filter(
    (p) => p.category === "decoration-candle"
  );

  return (
    <section className="decoration-candle-section">
      <h2 className="section-title">
        {lang === "ka" ? "დეკორატიული სანთლები" : "Decoration Candles"}
      </h2>

      <div className="products-grid">
        {decorationCandles.map(
          (p) =>
            p?.img &&
            p?.title && (
              <div key={p.id} className="product-card">
                <div className="img-wrapper">
                  <img src={p.img} alt={p.title[lang] || "Decoration candle"} />
                </div>
                <h3>{p.title[lang]}</h3>
              </div>
            )
        )}
      </div>

      <div className="link-wrapper">
        <Link to="/products/decoration-candle" className="view-more-link">
          {lang === "ka" ? "მეტის ნახვა" : "View More"}
        </Link>
      </div>
    </section>
  );
}
