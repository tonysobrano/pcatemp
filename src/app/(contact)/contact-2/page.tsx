import React from "react";
import { Metadata } from "next";
import ContactTwoMain from "@/page-views/contact/contact-2";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.contactAlt.title,
  description: siteSettings.metadata.contactAlt.description,
};

const ContactTwoPage = () => {
  return (
    <ContactTwoMain/>
  );
};

export default ContactTwoPage;
