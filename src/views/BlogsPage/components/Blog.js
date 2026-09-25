import React from "react";
import { Link } from "react-router-dom";
import { img } from "components/UI/RichText";
import "./Blog.css";

function Blog({ blog }) {
  return (
    <Link to={`/blogs/${blog.blogId}`} className="oc-card oc-card--hover oc-card--link blog-card">
      <div className="blog-card__media">
        <img src={img(`blog/BlogImages/${blog.bannerImage}`)} alt="" loading="lazy" />
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>
            <i className="fa fa-user-o" aria-hidden="true" /> {blog.author}
          </span>
          <span>
            <i className="fa fa-calendar-o" aria-hidden="true" /> {blog.date}
          </span>
        </div>
        <h2 className="blog-card__title">{blog.heading}</h2>
        <p className="lm-body blog-card__abstract">{blog.abstract}</p>
        <span className="lm-link-btn">
          Read article
          <span className="lm-link-btn__arrow">→</span>
        </span>
      </div>
    </Link>
  );
}

export default Blog;
