import ContactUsPageComponent from "@/components/pages/contactUs/ContactUsPageComponent";
import { siteSettingDataFetch } from "@/lib/fetch/siteSettingDataFetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edulife It School | Contact",
  description: "Edulife It School",
};

export default async function page() {
  const { data } = await siteSettingDataFetch();
  return <ContactUsPageComponent data={data} />;
}
