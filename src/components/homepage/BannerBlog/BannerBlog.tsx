"use client";

import MainContainer from "@/components/container/MainContainer";
import { cn } from "@/lib/utils";
import { Highlights } from "@/types/generalType/generalType";
import { useEffect, useRef, useState } from "react";

export default function BannerBlog({ bannerBlog }: { bannerBlog: Highlights }) {
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

  const data = [
    {
      title: bannerBlog.highlight1.title,
      description: bannerBlog.highlight1.description,
    },
    {
      title: bannerBlog.highlight2.title,
      description: bannerBlog.highlight2.description,
    },
    {
      title: bannerBlog.highlight3.title,
      description: bannerBlog.highlight3.description,
    },
  ];
  return (
    <section id="blog" className="scroll-mt-28">
      <MainContainer>
        <div
          className={`grid gap-4 md:mt-10 mt-3 sm:gap-6 md:grid-cols-3 transition-all duration-700 delay-400 
   
      `}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-xl p-4 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
                index === 0 && "bg-gradient-to-br from-[#062389] to-[#3a4d91]",
                index === 1 && "bg-gradient-to-br from-[#0b598d] to-[#0588E1]",
                index === 2 && " bg-gradient-to-br from-[#062389] to-[#3a4d91]",
              )}
            >
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-3 md:text-[24px] text-[14px] font-semibold sm:mb-4">
                  <span>{item.title}:</span>
                </div>
                <p className="text-sm text-white/95 leading-relaxed sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
}

//  ${
//     isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//   }
