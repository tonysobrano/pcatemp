import React from "react";
import Image from "next/image";
import { Reply } from "@/components/svg";
import avatar_1 from "@/assets/img/inner-blog/blog-details/avatar/avatar-3.jpg";
import avatar_2 from "@/assets/img/inner-blog/blog-details/avatar/avatar-4.jpg";
import Link from "next/link";

// comment data
const comment_data = [
  {
    id: 1,
    name: "Abdiqeni Rashid",
    avatar: avatar_1,
    date: "April 8, 2024 at 7:38 am",
    comment:
      "Clear positioning really does make the rest of the communication easier. Once the message is sharp, the creative work has a much stronger direction.",
  },
  {
    id: 2,
    children: true,
    avatar: avatar_2,
    name: "Abdifetah Ahmed",
    date: "May 10, 2024 at 8:40 am",
    comment:
      "Agreed. Teams often jump to visuals too early, but the strongest projects usually start with clarity on audience, offer, and desired action.",
  },
  {
    id: 3,
    avatar: avatar_1,
    name: "Sakariya Hassen",
    date: "Feb 20, 2024 at 9:00 am",
    comment:
      "The section on consistency is especially important. Repetition across content, design, and channels is what makes a brand feel intentional.",
  },
];

export default function BlogDetailsComments() {
  return (
    <ul>
      {comment_data.map((item) => (
        <li key={item.id} className={item.children ? "children" : ""}>
          <div className="postbox__comment-box d-flex">
            <div className="postbox__comment-info ">
              <div className="postbox__comment-avater mr-20">
                <Image src={item.avatar} alt="avatar" />
              </div>
            </div>
            <div className="postbox__comment-text">
              <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                <h5>{item.name}</h5>
                <span className="post-meta">{item.date}</span>
              </div>
              <p>{item.comment}</p>
              <div className="postbox__comment-reply">
                <Link href="#">
                  Reply
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
