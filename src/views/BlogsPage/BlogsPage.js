import React, { useState, useEffect } from "react";
// reactstrap components
import { Container, Row, Spinner } from "reactstrap";

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import blogsData from "../../data/Blogs.json";
import Blog from "./components/Blog";

function BlogsPage() {
  const [blogsArray, setBlogsArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    setLoading(true);
    setBlogsArray(blogsData.blogsData);
    setLoading(false);
  }, []);

  const blogList = blogsArray.map((receivedBlog) => {
    return (
      <div key={receivedBlog.heading}>
        <Blog
          heading={receivedBlog.heading}
          author={receivedBlog.author}
          date={receivedBlog.date}
          bannerImage={receivedBlog.bannerImage}
          abstract={receivedBlog.abstract}
          id={receivedBlog.blogId}
        />
      </div>
    );
  });

  const display = loading ? (
    <Spinner className="blogs-page-spinner" />
  ) : (
    blogList
  );

  return (
    <>
      <ExamplesNavbar activePage="/blogs" />
      <div className="section text-center ">
        <Container className="reduce-margin">
          <Row>
            <h2 className="heading-main" style={{ fontSize: "4.3rem" }}>BLOGS</h2>
          </Row>
        </Container>
      </div>

      <div className="main">{display}</div>
    </>
  );
}

export default BlogsPage;
