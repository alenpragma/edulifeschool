"use client";

import MainContainer from "@/components/container/MainContainer";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import { OpeningHourss } from "@/types/generalType/generalType";

const dayOrder = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const formatDay = (day: string) => day.charAt(0).toUpperCase() + day.slice(1);

export default function OpeningHours({
  openingHours,
}: {
  openingHours: OpeningHourss;
}) {
  const today = new Date()
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();

  return (
    <section>
      <MainContainer>
        <HeadingOne
          className="md:max-w-3/4 mx-auto text-center w-full"
          text="আমাদের সপ্তাহিক কার্যক্রমের সময়সূচী"
        />

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 mt-5">
          {dayOrder.map((day) => (
            <div
              key={day}
              className={`flex justify-between items-center px-3 py-4 rounded-lg transition ${
                today === day
                  ? "bg-green-50 border border-green-200"
                  : "bg-gray-50"
              }`}
            >
              <span
                className={`font-semibold ${
                  today === day ? "text-green-700" : "text-gray-700"
                }`}
              >
                {formatDay(day)}
              </span>

              <span className="text-gray-800">
                {openingHours[day as keyof OpeningHourss] || "Off Day"}
              </span>
            </div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
}
