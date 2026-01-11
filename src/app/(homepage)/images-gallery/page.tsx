import { Metadata } from "next";
import ImagesGallery from "./ImagesGallery";
import { imageGalleryFetch } from "@/lib/fetch/siteSettingDataFetch";

export const metadata: Metadata = {
  title: "Edulife It School | Images Gallery",
  description: "Edulife It School",
};

export default async function ImagesGalleryPage() {
  const { data: images } = await imageGalleryFetch();
  return <ImagesGallery images={images} />;
}
