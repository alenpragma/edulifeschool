import BannerBlog from "@/components/homepage/BannerBlog/BannerBlog";
import { CoursesSection } from "@/components/homepage/coursesSection/CoursesSection";
import { FeaturesSection } from "@/components/homepage/featureSection/FeaturesSection";
import { HeroSection } from "@/components/homepage/HeroSection/HeroSection";
import { StartSection } from "@/components/homepage/startSection/stats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edulife It School | Home",
  description: "Edulife It School",
};

export default async function HomePage() {
  return (
    <div className="bg-white overflow-hidden">
      <HeroSection />
      <BannerBlog />
      <StartSection />
      <FeaturesSection />
      <CoursesSection />
    </div>
  );
}
