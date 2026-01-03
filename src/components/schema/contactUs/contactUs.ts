import { z } from "zod";

export const contactUsSchema = z.object({
  name: z.string().min(2, "Name is required").max(50, "Name is too long"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().nonempty("Enter a valid phone number"),
  message: z.string().nonempty("Password must be at least 6 characters"),
});
