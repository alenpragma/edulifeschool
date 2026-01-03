import { z } from "zod";

export const roomSearchSchema = z.object({
  search: z.string().nonempty({ message: "Enter a location" }),
  checkIn: z.date(),
  checkOut: z.date(),
  rooms: z.string(),
  guests: z.string(),
  adults: z.number().min(1).default(1),
  children: z.number().min(0).default(0),
  childAges: z.array(z.string()).optional(),
});

export const carSearchSchema = z.object({
  picup: z.string().nonempty({ message: "Enter a location" }),
  drop: z.string().nonempty({ message: "Enter a location" }),
  checkIn: z.date(),
  checkOut: z.date(),
});
