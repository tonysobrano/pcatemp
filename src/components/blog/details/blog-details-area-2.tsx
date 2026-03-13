import React from "react";
import Image from "next/image";
import { QuoteThree, Share, Tag } from "@/components/svg";
import BlogDetailsAuthor from "./blog-details-author";
import BlogDetailsNavigation from "./blog-details-navigation";
import BlogDetailsComments from "./blog-details-comments";
import BlogReplyForm from "@/components/form/blog-reply-form";

// images
import details_thumb_1 from "@/assets/img/inner-blog/blog-details-without-sidebar/blog-details-1.jpg";
import details_thumb_2 from "@/assets/img/inner-blog/blog-details-without-sidebar/blog-details-2.jpg";
import details_thumb_3 from "@/assets/img/inner-blog/blog-details/blog-details-4.jpg";
import Link from "next/link";

export default function BlogDetailsAreaTwo() {
  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="postbox__wrapper">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="blog-details-top-text tp_fade_bottom">
                    <p>
                      Strong brands do not rely on one impressive moment. They
                      build trust through repeated clarity across identity,
                      messaging, content, and digital experience.
                    </p>
                  </div>
                  <div className="blog-details-left-content tp_fade_bottom">
                    <p className="pb-40">
                      A clear brand makes better decisions possible. It helps
                      teams know what to say, how to look, and what kind of
                      experience they want people to have across campaigns,
                      platforms, and day-to-day communication.
                    </p>
                    <h4 className="blog-details-left-title">
                      Clarity before creativity
                    </h4>
                    <p className="mb-20">
                      Creativity works best when the strategic questions have
                      already been answered. Teams move faster when they know
                      their audience, message, and offer before production
                      starts.
                    </p>
                    <p>
                      That is what turns design and content from decoration into
                      communication that actually supports growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-details-thumb-box tp_fade_bottom">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      <Image
                        className="mb-20"
                        src={details_thumb_1}
                        alt="details-thumb"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      <Image
                        className="mb-20"
                        src={details_thumb_2}
                        alt="details-thumb"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="blog-details-left-content tp_fade_bottom">
                    <h4 className="blog-details-left-title">
                      Relationship & Communication
                    </h4>
                    <p>
                      Communication is not just about promotion. It shapes how
                      people understand the business, how confidently teams
                      present the work, and how consistently the brand shows up
                      over time.
                    </p>
                  </div>
                  <div className="blog-details-blockquote tp_fade_bottom">
                    <blockquote>
                      <span className="quote-icon">
                        <QuoteThree />
                      </span>
                      <p>
                        {"Don't"} watch the clock; do what it does. keep going.
                      </p>
                      <span className="blockquote-info">Sam Levenson</span>
                    </blockquote>
                  </div>
                  <div className="blog-details-left-content tp_fade_bottom">
                    <p>
                      Strong execution comes from structure. Once the direction
                      is clear, teams can plan timelines better, reduce
                      unnecessary revisions, and deliver work that feels more
                      intentional.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-details-thumb-box">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="blog-details-thumb">
                      <Image
                        className="w-100"
                        src={details_thumb_3}
                        alt="details-thumb"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="blog-details-left-content tp_fade_bottom">
                    <h4 className="blog-details-left-title">
                      Turning strategy into delivery
                    </h4>
                    <p>
                      Great brand work becomes valuable when it is usable in the
                      real world. That means systems, not just one-off visuals,
                      and messaging people across the team can apply with
                      confidence.
                    </p>
                    <p>
                      The goal is not only to look better. It is to make the
                      business easier to understand, easier to market, and
                      easier to grow.
                    </p>
                  </div>
                  <div className="blog-details-share-wrap mb-40">
                    <div className="row">
                      <div className="col-xl-8">
                        <div className="blog-details-tag">
                          <span>
                            <Tag />
                          </span>
                          <Link href="#">Creative</Link>
                          <Link href="#">Photography</Link>
                          <Link href="#">Lifestyle</Link>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="blog-details-share text-md-end text-start">
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
                    <h3 className="tp-postbox-details-form-title">
                      Leave a Reply
                    </h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    {/* blog reply form */}
                    <BlogReplyForm />
                    {/* blog reply form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
