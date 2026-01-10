export interface EventItem {
  id: number;
  title: string;
  time: string;
  location: string;
  icon: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpcomingEventsType {
  success: boolean;
  message: string;
  data: EventItem[];
}
