import React from "react";
import Image from "next/image";
import overlay from "@/assets/img/inner-blog/blog-details/bg-shape/overly.png";
import { formatBlogDateLong, type BlogPost } from "@/content/blog";

type BlogDetailsBreadcrumbProps = {
  post: BlogPost;
};

export default function BlogDetailsBreadcrumb({
  post,
}: BlogDetailsBreadcrumbProps) {
  return (
    <div className="blog-details-area">
      <div
        className="blog-details-bg blog-details-bg-height blog-details-overlay p-relative d-flex align-items-end pt-170 pb-170"
        style={{
          backgroundImage: `url(${post.coverImage.src})`,
        }}
      >
        <div className="blog-details-overlay-shape">
          <Image src={overlay} alt="overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11">
              <div className="blog-details-content z-index-5">
                <span className="blog-details-meta">
                  {post.category} <i>. {formatBlogDateLong(post.publishedAt)}</i>
                </span>
                <h4 className="blog-details-title tp-char-animation">
                  {post.title}
                </h4>
                <div className="blog-details-top-author d-flex align-items-center">
                  <Image src={post.author.avatar} alt={post.author.name} />
                  <span>
                    {post.author.name} / <i>{post.readTime}</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
