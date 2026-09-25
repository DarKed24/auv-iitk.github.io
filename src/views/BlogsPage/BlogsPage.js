import React from "react";
import PageShell from "components/Layout/PageShell";
import PageHero from "components/Layout/PageHero";
import FadeIn from "views/Animations/FadeIn";
import heroImg from "assets/img/blog/background.png";
import blogsData from "data/Blogs.json";
import Blog from "./components/Blog";

const BLOGS = blogsData.blogsData;

function BlogsPage() {
  return (
    <PageShell title="Blogs">
      <PageHero
        kicker="Blogs"
        title="Notes from the deep"
        lead="Engineering write-ups from the team — hydrophones, hull design, vision pipelines and everything we learnt the hard way."
        image={heroImg}
        meta={
          <span className="oc-chip">
            <i className="fa fa-pencil" aria-hidden="true" /> {BLOGS.length} articles
          </span>
        }
      />

      <section className="oc-section">
        <div className="lm-container">
          <div className="oc-grid oc-grid--2">
            {BLOGS.map((b, i) => (
              <FadeIn direction="up" delay={(i % 2) * 90} key={b.blogId}>
                <Blog blog={b} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default BlogsPage;
