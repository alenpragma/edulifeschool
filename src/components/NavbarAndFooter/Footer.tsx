"use client";

import { Images } from "@/lib/store/images";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const socialIcons = [
    {
      Icon: Facebook,
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50",
    },
    {
      Icon: Twitter,
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-50",
    },
    {
      Icon: Instagram,
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50",
    },
    { Icon: Youtube, color: "hover:text-red-600", bgColor: "hover:bg-red-50" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-white to-slate-50 pt-16 pb-8 sm:pt-20 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-border pb-12 sm:grid-cols-2 sm:gap-10 sm:pb-16 lg:grid-cols-4 lg:gap-12">
          <div
            className={`lg:col-span-1 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 flex items-center gap-2 transition-transform duration-300 hover:scale-105 sm:mb-6">
              <Image
                className="w-[120px]"
                src={Images.logo}
                alt="img"
                width={300}
                height={300}
              />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:mb-6">
              EduLife IT School is a leading IT training institute that provides
              quality education to children and students.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, color, bgColor }, i) => (
                <div
                  key={i}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${color} ${bgColor}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="mb-4 font-bold text-foreground sm:mb-6">
              Activities
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground sm:space-y-4">
              {[
                "Maths Olympiad",
                "Art Competition",
                "English Novels",
                "Science Competition",
                "Teachers Day",
              ].map((item, i) => (
                <li
                  key={i}
                  className="transition-all duration-300 hover:text-primary hover:translate-x-2 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="mb-4 font-bold text-foreground sm:mb-6">About Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground sm:space-y-4">
              {[
                "Edulife IT Institute",
                "Edulife Agency",
                "Edulife Kids Program",
                "Edu Tech",
                "Privacy Policy",
              ].map((item, i) => (
                <li
                  key={i}
                  className="transition-all duration-300 hover:text-primary hover:translate-x-2 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="mb-4 font-bold text-foreground sm:mb-6">Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="group aspect-square overflow-hidden rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:z-10"
                >
                  <img
                    src={`/school-life-.jpg?height=80&width=80&query=school life ${i}`}
                    alt="Gallery"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mt-6 text-center text-xs font-medium text-muted-foreground transition-all duration-700 delay-400 sm:mt-8 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Copyright EduLife. All Rights Reserved by EduLife IT School
        </div>
      </div>
    </footer>
  );
}
