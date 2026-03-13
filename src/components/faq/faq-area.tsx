import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import faq_banner from '@/assets/img/inner-faq/faq/banner-faq.jpg';
import FaqItem from "./faq-item";

// type 
type IFaq = {
  id: number;
  question: string;
  answer: string;
}
// faq data
export const faq_data:IFaq[] = [
  {
    id: 1,
    question: "What services does Prime Creative offer?",
    answer:
      "We provide production, branding and design, digital marketing, website and system development, and event support for businesses and organizations.",
  },
  {
    id: 2,
    question: "Do you only work with businesses in Jigjiga?",
    answer:
      "No. While Prime Creative is based in Jigjiga, we work with clients across East Africa and on remote projects where the scope can be managed digitally.",
  },
  {
    id: 3,
    question: "Can you handle both strategy and execution?",
    answer:
      "Yes. We support projects from planning and positioning through production, design, launch, and delivery so the final output stays consistent.",
  },
  {
    id: 4,
    question: "How long does a project usually take?",
    answer:
      "Timelines depend on scope. Smaller design or content jobs can move quickly, while larger brand, web, or event projects are planned in phases with clear milestones.",
  },
  {
    id: 5,
    question: "Do you work on retainers or one-off projects?",
    answer:
      "We do both. Some clients need one focused deliverable, while others need ongoing support across campaigns, content, and digital operations.",
  },
  {
    id: 6,
    question: "How do we get started?",
    answer:
      "Send us a message with your goals, timeline, and what you need help with. We will review the brief and recommend the right next step.",
  },
];

export default function FaqArea() {
  return (
    <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
                <div className="accordion" id="accordionExample">
                  {faq_data.map((item) => (
                    <FaqItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="fq-faq-sidebar">
              <div className="fq-faq-sidebar-content">
                <h4 className="fq-faq-sidebar-title">Q&A</h4>
                <p>
                  Questions about scope, pricing, or timelines? Start with the
                  answers here, then reach out if you need a more specific
                  recommendation.
                </p>
              </div>
              <div className="fq-faq-sidebar-thumb">
                <Image
                  className="w-100"
                  src={faq_banner}
                  alt="faq-banner"
                  style={{height:'auto'}}
                />
              </div>
              <div className="fq-faq-sidebar-input p-relative">
                <input type="text" placeholder="Search questions" />
                <button className="fq-faq-sidebar-search">
                  <Search />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
