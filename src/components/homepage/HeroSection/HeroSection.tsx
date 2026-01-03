"use client";

import MainContainer from "@/components/container/MainContainer";
import { Button } from "@/components/ui/button";
import { Images } from "@/lib/store/images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "ইংরেজিতে বিশেষ গুরুত্ব",
    description:
      "আমরা খুবই গভীরভাবে ইংরেজি ধ্বনিতত্ব, উচ্চারণ, বাচনভঙ্গি, এবং সর্বোপরি স্পোকেন ইংলিশ শেখার ওপর গুরুত্ব দিচ্ছি। যা ছাত্র-ছাত্রীদের ব্যক্তিগত আত্মবিশ্বাস এবং ইংরেজি কথোপকথনে সাবলীলতার পাশাপাশি তাদের ভবিষ্যতকে উজ্জ্বল ও সাফল্যমন্ডিত করতে সহায়তা করবে।",
  },
  {
    title: "জাতীয় শিক্ষাক্রম এবং আইটি দক্ষতা",
    description:
      "জাতীয় শিক্ষানীতি ও শিক্ষাক্রম এর পাশাপাশি আমরা ছোটবেলা থেকেই বাচ্চাদেরকে প্রোগ্রামিং, কোডিং ও কম্পিউটার শিখনের মাধ্যমে তাদেরকে ভবিষ্যৎ প্রযুক্তিগত বিশ্বায়নের অংশ হিসেবে তৈরি করতে প্রতিজ্ঞাবদ্ধ।",
  },
  {
    title: "গৃহ শিক্ষক নির্ভরতা কমানো",
    description:
      "আমাদের স্কুল কার্যক্রম এমনভাবে সাজানো হয়েছে, যাতে ক্লাসের পড়া ক্লাসেই সম্পন্ন হবে। তাই আমাদের কোনো শিক্ষার্থীকে স্কুলের পড়াশোনা ব্যাতিত অন্যত্র প্রাইভেট পড়ার প্রয়োজন হবে না। যার ফলে সন্তানের পড়াশোনা নিয়ে অভিভাকদের উদ্বেগ কমবে।",
  },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20"
    >
      <div className="absolute top-20 right-0 h-48 w-48 rounded-full bg-secondary/20 blur-3xl animate-[float_8s_ease-in-out_infinite] sm:h-64 sm:w-64" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl animate-[float_6s_ease-in-out_infinite] sm:h-96 sm:w-96" />
      <div className="absolute top-1/2 left-1/3 h-32 w-32 rounded-full bg-primary/10 blur-2xl animate-[float_7s_ease-in-out_infinite]" />

      <MainContainer>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 py-8">
          <div
            className={`relative z-10 text-center lg:text-left transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
              CREATING FUTURE LEADERS
            </h1>
            <p
              className={`mt-4 max-w-xl text-base text-muted-foreground leading-relaxed mx-auto sm:mt-6 sm:text-[14px] lg:mx-0 transition-all duration-700 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              এডুলাইফ আইটি স্কুল পাহাড়ে প্রযুক্তির বাতিঘর। আমরা বাচ্চাদের
              প্রয়োজনীয় লাইফ স্কিল শেখানোর মাধ্যমে তাদের প্রযুক্তি ও উদ্ভাবনে
              সফল করে গড়ে তুলি। জাতীয় শিক্ষাক্রম ও আধুনিক প্রযুক্তির সমন্বয়ে
              গঠিত আমাদের স্কুলে পাঠ্যক্রমের পাশাপাশি কোডিং, স্পোকেন ইংলিশ,
              কম্পিউটার ফাউন্ডেশন এবং আইসিটির প্রতি বিশেষ গুরুত্ব দেওয়া হয়।
            </p>
            <div
              className={`mt-6 flex justify-center sm:mt-8 lg:justify-start transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-lg bg-primary px-8 py-5 text-base font-bold text-primary-foreground shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 sm:px-10 sm:py-6 sm:text-lg"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </div>
          </div>
          <div
            className={`relative order-first lg:order-last transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative z-10 overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:rotate-1 sm:rounded-[2.5rem] sm:border-[12px]">
              <Image
                src={Images.hero}
                alt="EduLife Students"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-accent animate-[bounce-subtle_2s_ease-in-out_infinite] opacity-40 sm:-top-6 sm:-right-6 sm:h-24 sm:w-24" />
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full border-4 border-secondary/50 animate-[float_5s_ease-in-out_infinite] sm:-bottom-10 sm:-left-10 sm:h-40 sm:w-40" />
            <div className="absolute top-1/2 -right-8 h-20 w-20 rounded-full bg-primary/20 blur-xl animate-[float_4s_ease-in-out_infinite]" />
          </div>
        </div>

        <div
          className={`mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3 lg:mt-24 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-xl p-4 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
                index === 0 &&
                  "bg-gradient-to-br from-orange-400 to-orange-500",
                index === 1 && "bg-gradient-to-br from-cyan-400 to-cyan-500",
                index === 2 &&
                  " bg-gradient-to-br from-yellow-400 to-yellow-500"
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
