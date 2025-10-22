// src/components/BestSellers.jsx
import React from "react";
import "./BestSellers.css";
import s1 from "./images/B1.jpg";
import s2 from "./images/B2.jpg";
import s3 from "./images/B3.jpg";

const sampleData = [
  { id: 1, title: "წყვილის სანთელი", img: s1 },
  { id: 2, title: "ფენიქსის სამაჯური", img: s2 },
  { id: 3, title: "კულონები ცოცხალი ყვავილებით", img: s3 },
];

export default function BestSellers({ items = sampleData }) {
  return (
    <section id="best-sellers" className="best-sellers">
      <div className="container">
        <h2>⭐ საუკეთესო გაყიდვები</h2>
        <p>შეამოწმე ჩვენი ყველაზე პოპულარული ხელნაკეთი ნივთები</p>
        <div className="grid">
          {items.map((item) => (
            <div key={item.id} className="card">
              <img src={item.img} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
