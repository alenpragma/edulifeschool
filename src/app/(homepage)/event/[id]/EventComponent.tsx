"use client";

import MainContainer from "@/components/container/MainContainer";
import { EventData } from "@/types/generalType/eventDta";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function EventDetailsPage({
  eventData,
}: {
  eventData: EventData;
}) {
  console.log(eventData);
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <MainContainer>
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={eventData.icon}
              alt="Event Banner"
              fill
              className="object-cover"
              loader={({ src }) => src}
            />
          </div>

          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium">
              Upcoming Event
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {eventData.title}
            </h1>

            <div className="space-y-3 text-gray-600">
              <p className="flex items-center gap-2">
                <CalendarDays size={18} />{" "}
                {new Date(eventData.date).toLocaleDateString()}
              </p>
              <p className="flex items-center gap-2">
                <Clock size={18} /> {eventData.time}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                {eventData.location}
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-md md:p-8 p-3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Event Description
            </h2>
            <p>
              {eventData.description.split("\r\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl text-white p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Event Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Date</span>
                <span className="font-medium">
                  {new Date(eventData.date).toLocaleDateString()}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Time</span>
                <span className="font-medium">{eventData.time}</span>
              </li>
              <li className="flex justify-between">
                <span>Location</span>
                <span className="font-medium">{eventData.location}</span>
              </li>
              <li className="flex justify-between">
                <span>Entry</span>
                <span className="font-medium">
                  {eventData.entryFee > 0 ? (
                    <span>
                      {Number(eventData.entryFee).toLocaleString()} Tk
                    </span>
                  ) : (
                    "Free"
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
