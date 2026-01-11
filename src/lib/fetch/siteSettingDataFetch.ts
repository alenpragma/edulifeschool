import { EventResponseById, UpcomingEventsType } from "@/types/generalType/eventDta";
import { SiteSettingsResponse } from "@/types/generalType/generalType";
import { IGalleryResponse } from "@/types/generalType/iamgeGellery";
import { TeachersApiResponse } from "@/types/generalType/teacherDataType";
import { getData } from "./getData";

export const siteSettingDataFetch = async () => {
  return await getData<SiteSettingsResponse>("/site-settings", {
    next: { revalidate: 60 },
  });
};
export const imageGalleryFetch = async () => {
  return await getData<IGalleryResponse>("/gallery", {
    next: { revalidate: 60 },
  });
};
export const teacherDataFetch = async () => {
  return await getData<TeachersApiResponse>("/teachers", {
    next: { revalidate: 60 },
  });
};
export const eventDataFetch = async () => {
  return await getData<UpcomingEventsType>("/upcoming-events", {
    next: { revalidate: 60 },
  });
};
export const eventDataFetchById = async (id: string) => {
  return await getData<EventResponseById>(`/upcoming-events${id}`, {
    next: { revalidate: 60 },
  });
};
