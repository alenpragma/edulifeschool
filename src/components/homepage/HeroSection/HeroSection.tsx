"use client";

import MainContainer from "@/components/container/MainContainer";
import CustomButton from "@/components/shared/submitButton/CustomButton";
import { Hero } from "@/types/generalType/generalType";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function HeroSection({ heroData }: { heroData: Hero }) {
  const { heroImage, subtitle, title } = heroData || {};
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

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 py-3 md:min-h-[100dvh] flex items-center h-auto md:pt-0 pt-20"
    >
      {/* Background Blurs */}
      <div className="absolute top-16 right-0 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-secondary/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 h-56 w-56 sm:h-96 sm:w-96 rounded-full bg-accent/15 blur-3xl animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 left-1/3 hidden sm:block h-32 w-32 rounded-full bg-primary/10 blur-2xl animate-[float_7s_ease-in-out_infinite]" />

      <MainContainer>
        <div className="grid items-center md:grid-cols-2 grid-cols-1">
          <div
            className={`relative z-10 text-center lg:text-left transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-foreground text-balance">
              {title}
            </h1>

            <p
              className={`mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-muted-foreground leading-relaxed transition-all duration-700 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {subtitle}
            </p>

            <div
              className={`mt-6 sm:mt-8 flex justify-center lg:justify-start transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Link href="/contact">
                <CustomButton text="Contact" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-5"
            }`}
          >
            <div className="relative z-10 mx-auto md:max-w-[80%] w-full overflow-hidden rounded-3xl border-8 sm:border-12 border-white shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1">
              <Image
                className="w-full h-auto object-cover"
                src={heroImage}
                alt="img"
                width={600}
                height={600}
                unoptimized
              />
            </div>

            {/* Decorative Shapes */}
            <div className="absolute -top-4 -right-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-accent opacity-40 animate-[bounce-subtle_2s_ease-in-out_infinite]" />
            <div className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 h-28 w-28 sm:h-40 sm:w-40 rounded-full border-4 border-secondary/50 animate-[float_5s_ease-in-out_infinite]" />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
