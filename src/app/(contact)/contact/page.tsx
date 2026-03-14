import React from "react";
import { Metadata } from "next";
import ContactMain from "@/page-views/contact/contact";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.contact.title,
  description: siteSettings.metadata.contact.description,
};

const ContactPage = () => {
  return (
    <ContactMain/>
  );
};

export default ContactPage;
