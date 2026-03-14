import React from "react";
import Image from "next/image";
import Link from "next/link";
import { orderedBlogPosts, type BlogAuthor } from "@/content/blog";
import { siteSettings } from "@/content/site-settings";

type BlogDetailsAuthorProps = {
  author?: BlogAuthor;
};

export default function BlogDetailsAuthor({ author }: BlogDetailsAuthorProps) {
  const authorDetails = author ?? orderedBlogPosts[0].author;

  return (
    <div className="blog-details-author d-flex mb-60">
      <div className="blog-details-author-img">
        <Image
          style={{ width: "100%", height: "auto" }}
          src={authorDetails.avatar}
          alt={authorDetails.name}
        />
      </div>
      <div className="blog-details-author-content-wrap">
        <div className="blog-details-author-social text-end">
          {siteSettings.footerSocialLinks
            .filter((link) =>
              ["facebook", "linkedin", "instagram"].includes(link.label)
            )
            .map((link) => (
              <Link href={link.href} key={link.label} target="_blank">
                <i className={`fab fa-${link.label === "linkedin" ? "linkedin-in" : link.label}`}></i>
              </Link>
            ))}
        </div>
        <div className="blog-details-author-content">
          <h4 className="blog-details-author-title">{authorDetails.name}</h4>
          <p>{authorDetails.bio}</p>
        </div>
      </div>
    </div>
  );
}
