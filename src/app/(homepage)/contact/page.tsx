import ContactUsPageComponent from "@/components/pages/contactUs/ContactUsPageComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edulife It School | Contact",
  description: "Edulife It School",
};

export default async function page() {
  return <ContactUsPageComponent />;
}
