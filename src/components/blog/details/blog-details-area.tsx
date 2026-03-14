import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogSidebar from "../blog-sidebar";
import { Share, Tag } from "@/components/svg";
import BlogDetailsAuthor from "./blog-details-author";
import BlogDetailsNavigation from "./blog-details-navigation";
import BlogDetailsComments from "./blog-details-comments";
import BlogReplyForm from "@/components/form/blog-reply-form";
import type { BlogContentBlock, BlogPost } from "@/content/blog";

type BlogDetailsAreaProps = {
  post: BlogPost;
};

function renderContentBlock(block: BlogContentBlock, index: number) {
  if (block.type === "paragraph") {
    return (
      <div key={`${block.type}-${index}`} className="blog-details-left-content">
        <p>{block.content}</p>
      </div>
    );
  }

  if (block.type === "heading") {
    return (
      <div key={`${block.type}-${index}`} className="blog-details-left-content">
        <h4 className="blog-details-left-title">{block.content}</h4>
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <div key={`${block.type}-${index}`} className="blog-details-blockquote">
        <blockquote>
          <p>{block.content}</p>
          <span className="blockquote-info">{block.attribution}</span>
        </blockquote>
      </div>
    );
  }

  if (block.type === "image-row") {
    return (
      <div key={`${block.type}-${index}`} className="blog-details-thumb-box">
        <div className="row">
          {block.images.map((image) => (
            <div key={image.alt} className="col-md-6">
              <div className="blog-details-thumb">
                <Image
                  className="w-100 mb-20"
                  src={image.src}
                  alt={image.alt}
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div key={`${block.type}-${index}`} className="blog-details-thumb-box">
      <div className="row">
        <div className="col-xl-12">
          <div className="blog-details-thumb">
            <Image
              src={block.image.src}
              alt={block.image.alt}
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogDetailsArea({ post }: BlogDetailsAreaProps) {
  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              {post.content.map((block, index) => renderContentBlock(block, index))}

              <div className="blog-details-share-wrap mb-40">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="blog-details-tag">
                      <span>
                        <Tag />
                      </span>
                      {post.tags.map((tag) => (
                        <Link href="/blog-list" key={tag}>
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="blog-details-share text-start text-md-end">
                      <span>
                        <Share />
                      </span>
                      <Link href="/contact">Share Post</Link>
                    </div>
                  </div>
                </div>
              </div>

              <BlogDetailsAuthor author={post.author} />
              <BlogDetailsNavigation slug={post.slug} />

              <div className="postbox__comment mb-100">
                <h3 className="postbox__comment-title">3 Comments</h3>
                <BlogDetailsComments />
              </div>

              <div className="tp-postbox-details-form">
                <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <BlogReplyForm />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
