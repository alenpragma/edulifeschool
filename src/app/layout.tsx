import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ProgressBar from "@/lib/progress/Progressbar";
import { AuthProvider } from "@/components/provider/MainProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Edulife It School",
  description: "Edulife It School",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {" "}
        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
