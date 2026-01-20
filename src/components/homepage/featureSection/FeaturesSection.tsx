"use client";

import MainContainer from "@/components/container/MainContainer";
import Descript from "@/components/shared/heading/Descrip";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import HeadingTwo from "@/components/shared/heading/HeadingTwo";
import { Images } from "@/lib/store/images";
import { Features, WhyChooseUs } from "@/types/generalType/generalType";
import {
  BarChart3,
  HousePlus,
  Laptop,
  Mic,
  MonitorPlay,
  Puzzle,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function FeaturesSection({
  featureData,
  whyChoosePoint,
}: {
  featureData: Features;
  whyChoosePoint: WhyChooseUs;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const activities = [
    {
      id: 1,
      title: featureData.feature1.title,
      description: featureData.feature1.description,
      icon: Puzzle,
      color: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600",
      hoverColor: "group-hover:from-blue-100 group-hover:to-blue-200",
    },
    {
      id: 2,
      title: featureData.feature2.title,
      description: featureData.feature2.description,
      icon: MonitorPlay,
      color: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600",
      hoverColor: "group-hover:from-purple-100 group-hover:to-purple-200",
    },
    {
      id: 3,
      title: featureData.feature3.title,
      description: featureData.feature3.description,
      icon: Laptop,
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-600",
      hoverColor: "group-hover:from-indigo-100 group-hover:to-indigo-200",
    },
    {
      id: 4,
      title: featureData.feature4.title,
      description: featureData.feature4.description,
      icon: HousePlus,
      color: "bg-gradient-to-br from-green-50 to-green-100 text-green-600",
      hoverColor: "group-hover:from-green-100 group-hover:to-green-200",
    },
    {
      id: 5,
      title: featureData.feature5.title,
      description: featureData.feature5.description,
      icon: Mic,
      color: "bg-gradient-to-br from-pink-50 to-pink-100 text-pink-600",
      hoverColor: "group-hover:from-pink-100 group-hover:to-pink-200",
    },
    {
      id: 6,
      title: featureData.feature6.title,
      description: featureData.feature6.description,
      icon: BarChart3,
      color: "bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600",
      hoverColor: "group-hover:from-orange-100 group-hover:to-orange-200",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="bg-white py-5 scroll-mt-28">
      <MainContainer>
        <div
          className={`mb-12 text-center sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <HeadingOne
            className="md:max-w-3/4 mx-auto text-center w-full"
            text="এডুলাইফ আইটি স্কুলে শিশুদের জন্য বিশেষ শিক্ষাব্যবস্থা"
          />
          <Descript
            text="আমরা শিশুদের জন্য এমন একটি নিরাপদ, আনন্দময় ও শিশু-বান্ধব পরিবেশ
            নিশ্চিত করি, যেখানে শেখা হয় উপভোগ্য ও কার্যকর। আমাদের আধুনিক ও
            প্রয়োজনভিত্তিক সুবিধাসমূহ শিশুদের মানসিক, শারীরিক ও বুদ্ধিবৃত্তিক
            বিকাশে সহায়তা করে।"
            className="md:max-w-2/4 mx-auto text-center w-full mt-3"
          />
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {activities.map((activity, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50  ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 sm:mb-6 ${activity.color} ${activity.hoverColor}`}
                >
                  <activity.icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <HeadingTwo text={`${activity.title}`} />
                <p className="my-3 text-sm leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-8 sm:mt-24 lg:mt-32 lg:grid-cols-2 lg:gap-12">
          <div
            className={`order-2 lg:order-1 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <HeadingOne text={`${whyChoosePoint.title}`} />
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary mt-2" />
            <Descript text={`${whyChoosePoint.description}`} className="mt-3" />
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {whyChoosePoint.points.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 rounded-lg mt-3 transition-all duration-300 hover:bg-primary/5 hover:shadow-md sm:gap-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-sm font-bold text-primary transition-all duration-300 group-hover:scale-110 group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-500 h-full ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="group relative h-full overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Image
                src={Images.student_laptop}
                alt="Student with laptop"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[]1.02]"
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
