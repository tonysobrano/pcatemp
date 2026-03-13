import React from "react";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import { QuoteThree, Share, Tag } from "@/components/svg";
import BlogDetailsAuthor from "./blog-details-author";
import BlogDetailsNavigation from "./blog-details-navigation";
import BlogDetailsComments from "./blog-details-comments";
import BlogReplyForm from "@/components/form/blog-reply-form";
import details_thumb_1 from "@/assets/img/inner-blog/blog-details/blog-details-2.jpg";
import details_thumb_2 from "@/assets/img/inner-blog/blog-details/blog-details-3.jpg";
import details_thumb_3 from "@/assets/img/inner-blog/blog-details/blog-details-4.jpg";
import Link from "next/link";

export default function BlogDetailsArea() {
  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              <div className="blog-details-top-text">
                <p>
                  Strong brands are easier to trust because people can quickly
                  understand who they are, what they offer, and why they
                  matter. That clarity improves every campaign, platform, and
                  customer interaction that follows.
                </p>
              </div>
              <div className="blog-details-left-content">
                <h4 className="blog-details-left-title">
                  Why positioning matters
                </h4>
                <p className="mb-20">
                  Positioning is the foundation that tells people how to
                  understand a business. Before design systems, campaigns, or
                  content calendars, teams need a clear point of view about
                  their audience, value, and message.
                </p>
                <p>
                  When that foundation is missing, even polished creative work
                  can feel inconsistent. When it is present, the brand becomes
                  easier to remember and easier to trust.
                </p>
              </div>
              <div className="blog-details-thumb-box">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      <Image
                        className="w-100 mb-20"
                        src={details_thumb_1}
                        alt="details-thumb"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      <Image
                        className="w-100 mb-20"
                        src={details_thumb_2}
                        alt="details-thumb"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details-left-content">
                <h4 className="blog-details-left-title">
                  Relationship & Communication
                </h4>
                <p>
                  Brands grow through repetition and relationship. That means
                  the language, visuals, and customer experience all need to
                  reinforce the same message across touchpoints instead of
                  competing with each other.
                </p>
              </div>
              <div className="blog-details-blockquote">
                <blockquote>
                  <span className="quote-icon">
                    <QuoteThree />
                  </span>
                  <p>{"Don't"} watch the clock; do what it does. keep going.</p>
                  <span className="blockquote-info">Sam Levenson</span>
                </blockquote>
              </div>
              <div className="blog-details-left-content">
                <p>
                  Execution matters just as much as direction. Strategy should
                  make delivery faster by helping teams decide what belongs in
                  the work, what can be simplified, and what should stay
                  consistent from start to finish.
                </p>
              </div>
              <div className="blog-details-thumb-box">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="blog-details-thumb">
                      <Image
                        src={details_thumb_3}
                        alt="details-thumb"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details-left-content">
                <h4 className="blog-details-left-title">
                  Consistency builds recall
                </h4>
                <p>
                  A recognizable brand is rarely the result of one dramatic
                  asset. It usually comes from repeated decisions that align
                  voice, visuals, offers, and user experience over time.
                </p>
                <p>
                  That is why the strongest identities are not just attractive.
                  They are usable, repeatable, and clear enough for teams to
                  apply them everywhere the business shows up.
                </p>
              </div>
              <div className="blog-details-share-wrap mb-40">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="blog-details-tag">
                      <span>
                        <Tag />
                      </span>
                      <Link href="#">Creative</Link>
                      <Link href="#">Branding</Link>
                      <Link href="#">Strategy</Link>
                      <Link href="#">Digital</Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="blog-details-share text-start text-md-end">
                      <span>
                        <Share />
                      </span>
                      <Link href="#">Share Post</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* blog details author */}
              <BlogDetailsAuthor />
              {/* blog details author */}

              {/* blog details navigation */}
              <BlogDetailsNavigation />
              {/* blog details navigation */}

              <div className="postbox__comment mb-100">
                <h3 className="postbox__comment-title">3 Comments</h3>
                {/* blog details comments */}
                <BlogDetailsComments />
                {/* blog details comments */}
              </div>

              <div className="tp-postbox-details-form">
                <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                {/* blog reply form */}
                <BlogReplyForm />
                {/* blog reply form */}
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
