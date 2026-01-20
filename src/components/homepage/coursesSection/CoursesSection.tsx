"use client";

import MainContainer from "@/components/container/MainContainer";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import { Images } from "@/lib/store/images";
import { EventItem } from "@/types/generalType/eventDta";
import { Teacher } from "@/types/generalType/teacherDataType";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaCalendar } from "react-icons/fa6";

export function CoursesSection({
  teacherData,
  events,
}: {
  teacherData: Teacher[];
  events: EventItem[];
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

  return (
    <section
      id="event"
      ref={sectionRef}
      className="bg-gradient-to-b from-slate-50 to-white py-5 scroll-mt-28"
    >
      <MainContainer>
        <div>
          <div
            className={`mb-12 text-center sm:mb-16 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">
              শিক্ষকমন্ডলী
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
          </div>

          <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
            {teacherData.map((teacher, i) => (
              <div
                key={teacher.id}
                className={`group overflow-hidden rounded-3xl bg-card text-center shadow-xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 hover:rotate-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(i + 4) * 100}ms` }}
              >
                <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 p-5">
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-8 group-hover:shadow-3xl sm:border-8">
                    <Image
                      src={teacher.profilePicture}
                      alt="img"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loader={({ src }) => src}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div
                  className={`relative overflow-hidden md:p-5 p-3 text-white sm:p-6 bg-[#3020b7]`}
                >
                  <h3 className="relative truncate md:text-lg text-[12px] font-black transition-transform duration-300 group-hover:scale-110 sm:text-xl">
                    {teacher.name}
                  </h3>
                  <p className="relative text-sm font-medium opacity-95 truncate">
                    {teacher.qualification}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div
            className={`mb-12 text-center sm:mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <HeadingOne text="আমাদের ইভেন্ট" />
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {events.map((event, i) => (
              <Link href={`/event/${event.id}`} key={i} prefetch={true}>
                <div
                  className={`group flex flex-row items-center overflow-hidden rounded-2xl bg-card shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-3 gap-5 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative  shrink-0 overflow-hidden w-28 h-28 rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />
                    <Image
                      src={event.icon}
                      alt="img"
                      className="h-full object-cover w-full transition-transform duration-700 group-hover:scale-110 aspect-square rounded-lg"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-center">
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-base font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-lg">
                        {event.title}
                      </h3>
                      <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2 transition-colors duration-300 group-hover:text-secondary">
                          <Clock className="h-3 w-3" /> {event.time}
                        </div>
                        <div className="flex items-center gap-2 transition-colors duration-300 group-hover:text-secondary">
                          <MapPin className="h-3 w-3" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 transition-colors duration-300 group-hover:text-secondary">
                          <FaCalendar className="h-3 w-3" />
                          <span className="line-clamp-1">
                            {new Date(event.date).toDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
