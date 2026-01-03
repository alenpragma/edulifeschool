import { Metadata } from "next";
import LoginComponent from "./LoginComponent";
export const metadata: Metadata = {
  title: "Edulife It School | Login",
  description: "Edulife It School",
};
export default async function LoginPage() {
  return <LoginComponent />;
}
