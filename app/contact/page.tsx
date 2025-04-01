import { NextPage } from "next";
import { CONTACT_SEO } from "../seo/contactSeo";
import { Metadata } from "next";

export const metadata: Metadata = CONTACT_SEO;

const Contact: NextPage = () => {
  return <h1>Contact Page</h1>;
};

export default Contact;
