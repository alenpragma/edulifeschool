import { Footer } from "@/components/NavbarAndFooter/Footer";
import Navbar from "@/components/NavbarAndFooter/Navbar";
import {
  imageGalleryFetch,
  siteSettingDataFetch,
} from "@/lib/fetch/siteSettingDataFetch";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await siteSettingDataFetch();
  const { data: imageGallery } = await imageGalleryFetch();
  const { data: siteSetting } = await siteSettingDataFetch();

  return (
    <>
      <Navbar contactItemSiteSetting={siteSetting.contact} />
      <div className="pt-12 bg-[#EBF0F4]">{children}</div>
      <Footer socialLink={data.social} imageGallery={imageGallery} />
    </>
  );
}
