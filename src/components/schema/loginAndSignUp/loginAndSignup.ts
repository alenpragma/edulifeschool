import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(10, "Enter a valid phone number"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_password: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const adminLoginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  // for hotel owner
  name: z.string().min(2, "Enter your name"),
  phone: z
    .string()
    .min(11, "Enter 11 digit phone number")
    .max(11, "Enter 11 digit phone number"),
  image: z
    .array(
      z
        .instanceof(File, { message: "Select your image" })
        .refine((file) => file.type.startsWith("image/"), {
          message: "Only image files are allowed",
        })
        .refine((file) => file.size <= 2 * 1024 * 1024, {
          message: "Image must be less than 2MB",
        })
    )
    .min(1, "Select profile image"),

  // for hotel schema
  hotel_name: z.string().min(2, "Enter hotel name"),
  hotel_address: z.string().min(5, "Enter hotel address"),
  hotel_email: z.string().email("Enter a valid email address"),
  hotel_googleMapUrl: z.string().url("Enter a valid Google Map URL"),
  hotel_tradeLicense: z
    .array(
      z
        .instanceof(File, { message: "Select your image" })
        .refine((file) => file.type.startsWith("image/"), {
          message: "Only image files are allowed",
        })
        .refine((file) => file.size <= 2 * 1024 * 1024, {
          message: "Image must be less than 2MB",
        })
    )
    .min(1, "At least one image is required"),
  hotel_tinCertificate: z
    .array(
      z
        .instanceof(File, { message: "Select your image" })
        .refine((file) => file.type.startsWith("image/"), {
          message: "Only image files are allowed",
        })
        .refine((file) => file.size <= 2 * 1024 * 1024, {
          message: "Image must be less than 2MB",
        })
    )
    .min(1, "At least one image is required"),
  hotel_tinNumber: z.string().min(5, "TIN number is required"),
  hotel_hotline: z
    .array(z.string())
    .nonempty("At least one hotline number is required"),
  hotel_vatHotel: z.string().refine(
    (val) => {
      const num = Number(val);
      return !isNaN(num) && num >= 1 && num <= 100;
    },
    {
      message: "VAT for hotel must be a number between 1 and 100",
    }
  ),

  hotel_vatFood: z.string().refine(
    (val) => {
      const num = Number(val);
      return !isNaN(num) && num >= 1 && num <= 100;
    },
    {
      message: "VAT for food must be a number between 1 and 100",
    }
  ),

  hotel_clockInTime: z
    .string()
    .regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, "Invalid time format"),
    // .nonempty("Clock-in time is required"),

  hotel_clockOutTime: z
    .string()
    .regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, "Invalid time format")
    .nonempty("Clock-out time is required"),

  hotel_images: z
    .array(
      z
        .instanceof(File, { message: "Select your image" })
        .refine((file) => file.type.startsWith("image/"), {
          message: "Only image files are allowed",
        })
        .refine((file) => file.size <= 2 * 1024 * 1024, {
          message: "Image must be less than 2MB",
        })
    )
    .min(1, "At least one image is required"),

  hotel_division: z.string().min(1, "Division is required"),
  hotel_district: z.string().min(1, "District is required"),
  hotel_upazila: z.string().min(1, "Upazila is required"),
});
