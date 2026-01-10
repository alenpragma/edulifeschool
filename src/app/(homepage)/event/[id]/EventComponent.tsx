import MainContainer from "@/components/container/MainContainer";
import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function EventDetailsPage() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <MainContainer>
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://c8.alamy.com/comp/2B149CM/illustration-of-a-family-day-school-event-with-student-kids-parents-and-teachers-running-down-the-hill-2B149CM.jpg"
              alt="Event Banner"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium">
              Upcoming Event
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Annual Cultural Programme
            </h1>

            <div className="space-y-3 text-gray-600">
              <p className="flex items-center gap-2">
                <CalendarDays size={18} /> 12 September, 2026
              </p>
              <p className="flex items-center gap-2">
                <Clock size={18} /> 8:00 AM – 10:00 PM
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} /> New York 56 Glassford Street, Glasgow
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
            <p className="text-gray-600 leading-relaxed mb-4">
              Join us for an exciting Annual Cultural Programme filled with
              performances, creativity, and celebration. This event brings
              together students, parents, and teachers to showcase cultural
              diversity through music, dance, art, and drama.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Enjoy a full day of engaging activities, delicious food stalls,
              and unforgettable moments. Everyone is welcome to be part of this
              vibrant celebration.
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl text-white p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Event Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Date</span>
                <span className="font-medium">12 September</span>
              </li>
              <li className="flex justify-between">
                <span>Time</span>
                <span className="font-medium">8:00 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Location</span>
                <span className="font-medium">Glasgow</span>
              </li>
              <li className="flex justify-between">
                <span>Entry</span>
                <span className="font-medium">Free</span>
              </li>
            </ul>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
