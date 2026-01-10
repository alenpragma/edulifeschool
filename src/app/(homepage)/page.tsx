import BannerBlog from "@/components/homepage/BannerBlog/BannerBlog";
import { CoursesSection } from "@/components/homepage/coursesSection/CoursesSection";
import { FeaturesSection } from "@/components/homepage/featureSection/FeaturesSection";
import { HeroSection } from "@/components/homepage/HeroSection/HeroSection";
import ImageGallery from "@/components/homepage/ImageGallery/ImageGallery";
import OpeningHours from "@/components/homepage/routine/Routine";
import { StartSection } from "@/components/homepage/startSection/StartSection";
import {
  eventDataFetch,
  imageGalleryFetch,
  siteSettingDataFetch,
  teacherDataFetch,
} from "@/lib/fetch/siteSettingDataFetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edulife It School | Home",
  description: "Edulife It School",
};

export default async function HomePage() {
  const { data } = await siteSettingDataFetch();
  const { data: teacherData } = await teacherDataFetch();
  const { data: events } = await eventDataFetch();
  const { data: images } = await imageGalleryFetch();
  return (
    <div className="bg-white overflow-hidden">
      <HeroSection heroData={data.hero} />
      <BannerBlog />
      <StartSection />
      <ImageGallery images={images} />
      <OpeningHours openingHours={data.openingHours} />
      <FeaturesSection />
      <CoursesSection teacherData={teacherData} events={events} />
    </div>
  );
}



// navbar route id diye korte hobe.
// testimonials dynamic korte hobe
// event dynamic kore korte hobe 
// gallery image click korle modal view hobe
// footer er galery image ta slice kore korte hobe