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
      <StartSection testimonials={data.testimonials} />
      <FeaturesSection />
      <CoursesSection teacherData={teacherData} events={events} />
      <ImageGallery images={images} />
      <OpeningHours openingHours={data.openingHours} />
    </div>
  );
}

// navbar route id diye korte hobe. - done
// testimonials dynamic korte hobe - done
// event dynamic kore korte hobe - done
// gallery image click korle modal view hobe
// footer er galery image ta slice kore korte hobe - done

// gallery and routine sobar niche chole jabe
// teacher section opore utbe and event ta niche chole jabe then gallery and routine ta niche jabe
