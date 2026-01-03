import { Metadata } from "next";
import SignUpComponent from "./SignupComponent";

export const metadata: Metadata = {
  title: "Edulife It School | Sign-Up",
  description: "Edulife It School",
};
export default async function SignUpPage() {
  return <SignUpComponent />;
}
