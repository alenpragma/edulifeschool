"use client";

import MainContainer from "@/components/container/MainContainer";
import { cn } from "@/lib/utils";
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

export default function BannerBlog() {
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
                index === 2 && " bg-gradient-to-br from-[#062389] to-[#3a4d91]"
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
