import React from "react";
import { useParams } from "react-router-dom";
import "./SingleBlog.css";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import data from "../../data/Blogs.json";

function SingleBlog() {
	const { id } = useParams();

	const blog = data.blogsData.find((receivedBlog) => receivedBlog.blogId === id);

	if (!blog) {
		return (
			<div className="mobile-responsive">
				<ExamplesNavbar activePage="/blogs" />
				<div className="single-blog text-center mt-5">
					<h2>Blog Not Found</h2>
				</div>
			</div>
		);
	}

	return (
		<div className="mobile-responsive">
			<ExamplesNavbar activePage="/blogs" />
			<div className="single-blog" key={blog.heading}>
				<h1
					className="blog-heading-single-page"
					style={{ fontSize: "3.4rem" }}
				>
					{blog.heading}
				</h1>
				<h2
					className="single-blog-author"
					style={{ fontSize: "1.8rem" }}
				>
					{blog.author}
				</h2>
				<h2
					className="single-blog-date"
					style={{ fontSize: "1.8rem" }}
				>
					{blog.date}
				</h2>
				<div>
					{blog.body.map((contentobject, index) => {
						if (contentobject.type === "para") {
							return (
								<p
									className="blogs-description text-left mb-5"
									key={`para${index}`}
								>
									{contentobject.content}
								</p>
							);
						} else if (contentobject.type === "image") {
							return (
								<img
									className="single-blog-image"
									src={require("assets/img/blog/BlogImages/" +
										contentobject.src)}
									key={`img${index}`}
									alt=""
								/>
							);
						} else if (contentobject.type === "h2") {
							return (
								<h2
									className="blog-secondary-heading text-left"
									key={`h2${index}`}
								>
									{contentobject.content}
								</h2>
							);
						} else if (contentobject.type === "list-block") {
							return (
								<div
									className="blog-list-block"
									key={`lb${index}`}
								>
									<h3 className="blog-list-heading">
										{contentobject.listHeading}
									</h3>
									{contentobject.listItems.map(
										(listItem, index) => {
											return (
												<li
													className="blog-list-item"
													key={`bli${index}`}
												>
													{listItem}
												</li>
											);
										}
									)}
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		</div>
	);
}

export default SingleBlog;
