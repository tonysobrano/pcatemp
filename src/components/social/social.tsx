import React from "react";
import { Facebook, Instagram, Linkdin, Twitter } from "../svg";
import Link from "next/link";
import { siteSettings } from "@/content/site-settings";

const iconMap = {
  linkedin: <Linkdin />,
  facebook: <Facebook />,
  instagram: <Instagram />,
  tiktok: <Twitter />,
} as const;

export default function Social() {
  return (
    <>
      {siteSettings.footerSocialLinks.map((item) => (
        <Link href={item.href} key={item.label} target="_blank">
          <span>{iconMap[item.label as keyof typeof iconMap] ?? <Facebook />}</span>
        </Link>
      ))}
    </>
  );
}
