import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../../data/BlogData";
import "../../styles/BlogList.css";

export default function BlogList() {
  return (
    <section className="blog-section">
      <h2 className="blog-title">ბლოგი / Blog</h2>
      <div className="blog-container">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
            <h3 className="blog-card-title">{blog.title}</h3>
            <p className="blog-card-text">
              {blog.content.slice(0, 150)}...
            </p>
            <Link to={`/blog/${blog.id}`} className="read-more">
              წაიკითხე მეტი →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
