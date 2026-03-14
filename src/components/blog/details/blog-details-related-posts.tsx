import React from "react";
import {
  getRelatedBlogPosts,
  formatBlogDate,
  orderedBlogPosts,
  type BlogPost,
} from "@/content/blog";
import BlogItemTwo from "../blog-item/blog-item-2";

type BlogDetailsRelatedPostsProps = {
  post?: BlogPost;
};

export default function BlogDetailsRelatedPosts({
  post,
}: BlogDetailsRelatedPostsProps) {
  const resolvedPost = post ?? orderedBlogPosts[0];
  const blogItems = getRelatedBlogPosts(resolvedPost).map((item) => ({
    id: item.id,
    slug: item.slug,
    img: item.coverImage,
    title: item.title,
    date: formatBlogDate(item.publishedAt).toUpperCase(),
    category: item.category,
    author: item.author.name,
  }));

  return (
    <div className="blog-details-realated-area grey-bg-2 pt-90 pb-40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="blog-details-realated-title-box text-center mb-50">
              <h3 className="blog-details-realated-title">Related posts</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {blogItems.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-50">
              <BlogItemTwo item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
