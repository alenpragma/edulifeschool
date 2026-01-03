"use client";

import MainContainer from "@/components/container/MainContainer";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import { Images } from "@/lib/store/images";
import { MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CoursesSection() {
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

  const events = [
    {
      title: "Annual Cultural Programme",
      date: "12",
      month: "September",
      time: "8:00 AM - 10:00 PM",
    },
    {
      title: "World Kids Day",
      date: "12",
      month: "September",
      time: "8:00 AM - 10:00 PM",
    },
    {
      title: "World Drawing Day",
      date: "17",
      month: "October",
      time: "8:00 AM - 10:00 PM",
    },
    {
      title: "Annual Cultural Programme",
      date: "21",
      month: "November",
      time: "8:00 AM - 10:00 PM",
    },
  ];

  const teachers = [
    {
      name: "Mr. Kollol Roy",
      role: "English Teacher",
      color: "bg-gradient-to-br from-primary to-primary/80",
    },
    {
      name: "Mr. Al Noman",
      role: "English Teacher",
      color: "bg-gradient-to-br from-secondary to-secondary/80",
    },
    {
      name: "Paul Groves",
      role: "Math Teacher",
      color: "bg-gradient-to-br from-accent to-accent/80",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-slate-50 to-white py-12"
    >
      <MainContainer>
        <div
          className={`mb-12 text-center sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <HeadingOne text="Upcoming Event" />
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-card shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 sm:flex-row ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-32 sm:w-32">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />
                <Image
                  src={Images.school_event}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-4 sm:flex-row sm:items-center sm:p-6">
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
                      <span className="line-clamp-1">
                        New York 56 Glassford Street Glasgow
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:flex-col sm:gap-1 sm:text-center">
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-secondary sm:h-20 sm:w-20">
                    <div className="text-2xl font-black text-primary transition-colors duration-300 group-hover:text-white sm:text-3xl">
                      {event.date}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-white">
                      {event.month}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 sm:mt-24 lg:mt-32">
          <div
            className={`mb-12 text-center sm:mb-16 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">
              Meet Our Teacher
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {teachers.map((teacher, i) => (
              <div
                key={i}
                className={`group overflow-hidden rounded-3xl bg-card text-center shadow-xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 hover:rotate-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(i + 4) * 100}ms` }}
              >
                <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 p-6 sm:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-8 group-hover:shadow-3xl sm:border-8">
                    <img
                      src={`/diverse-teacher-classroom.png?height=300&width=300&query=teacher ${i}`}
                      alt={teacher.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div
                  className={`relative overflow-hidden p-5 text-white sm:p-6 ${teacher.color}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                  <h3 className="relative text-lg font-black transition-transform duration-300 group-hover:scale-110 sm:text-xl">
                    {teacher.name}
                  </h3>
                  <p className="relative text-sm font-medium opacity-95">
                    {teacher.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
