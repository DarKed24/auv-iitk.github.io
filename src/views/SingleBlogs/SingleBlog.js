import React from "react";
import { Link, useParams } from "react-router-dom";
import PageShell from "components/Layout/PageShell";
import PageHero from "components/Layout/PageHero";
import { img } from "components/UI/RichText";
import data from "data/Blogs.json";
import "views/BlogsPage/components/Blog.css";

function Body({ body }) {
  return body.map((block, i) => {
    switch (block.type) {
      case "para":
        return <p key={i}>{block.content}</p>;
      case "h2":
        return <h2 key={i}>{block.content}</h2>;
      case "image":
        return (
          <figure className="oc-figure" key={i}>
            <img src={img(`blog/BlogImages/${block.src}`)} alt="" loading="lazy" />
          </figure>
        );
      case "list-block":
        return (
          <div key={i}>
            {block.listHeading && <h3>{block.listHeading}</h3>}
            <ul>
              {block.listItems.map((li, j) => (
                <li key={j}>{li}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  });
}

function SingleBlog() {
  const { id } = useParams();
  const blogs = data.blogsData;
  const index = blogs.findIndex((b) => b.blogId === id);
  const blog = blogs[index];

  if (!blog) {
    return (
      <PageShell title="Article not found">
        <section className="oc-empty">
          <div>
            <p className="oc-empty__code lm-grad">404</p>
            <h1 className="oc-empty__title">Article not found</h1>
            <p className="lm-body" style={{ maxWidth: "46rem", margin: "0 auto 3rem" }}>
              This article may have been moved or never existed. Browse the rest
              of our write-ups instead.
            </p>
            <Link to="/blogs" className="lp-btn lp-btn--primary">
              <span>All Articles</span>
            </Link>
          </div>
        </section>
      </PageShell>
    );
  }

  const prev = blogs[index - 1];
  const next = blogs[index + 1];
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <PageShell title={blog.heading}>
      <PageHero
        kicker="Blog"
        title={blog.heading}
        meta={
          <>
            <span className="oc-chip">
              <i className="fa fa-user-o" aria-hidden="true" /> {blog.author}
            </span>
            <span className="oc-chip">
              <i className="fa fa-calendar-o" aria-hidden="true" /> {blog.date}
            </span>
          </>
        }
        actions={
          <Link to="/blogs" className="lm-link-btn lm-link-btn--back">
            All articles
            <span className="lm-link-btn__arrow">←</span>
          </Link>
        }
      />

      <article className="oc-section oc-section--flush-top" style={{ paddingTop: "2rem" }}>
        <div className="lm-container">
          <div className="oc-prose">
            <div className="oc-frame article__banner">
              <img src={img(`blog/BlogImages/${blog.bannerImage}`)} alt="" />
            </div>
            <Body body={blog.body} />

            <footer className="article__footer">
              <div className="article__share" aria-label="Share this article">
                <a
                  className="oc-member__social"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.heading)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a
                  className="oc-member__social"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
              <div className="article__meta">
                {prev && (
                  <Link to={`/blogs/${prev.blogId}`} className="lp-btn lp-btn--ghost lp-btn--sm">
                    <span>← Previous</span>
                  </Link>
                )}
                {next && (
                  <Link to={`/blogs/${next.blogId}`} className="lp-btn lp-btn--ghost lp-btn--sm">
                    <span>Next →</span>
                  </Link>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

export default SingleBlog;
