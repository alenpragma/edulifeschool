import { eventDataFetchById } from "@/lib/fetch/siteSettingDataFetch";
import { Metadata } from "next";
import EventComponent from "./EventComponent";

export const metadata: Metadata = {
  title: "Edulife It School | Event",
  description: "Edulife It School",
};

type PageProps = {
  params: {
    id: string;
  };
};

export default async function EventPage({ params }: PageProps) {
  const { id } = await params;
  const { data: eventData } = await eventDataFetchById(`/${id}`);

  return <EventComponent eventData={eventData} />;
}
