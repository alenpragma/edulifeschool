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

export interface EventData {
  id: string;
  title: string;
  description: string;
  time: string;
  location: string;
  icon: string;
  date: Date;
  entryFee: number;
  createdAt: string;
  updatedAt: string;
}

export interface EventResponseById {
  success: boolean;
  message: string;
  data: EventData;
}
