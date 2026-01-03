"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type React from "react";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .then((reg) => console.log("SW registered", reg))
  //       .catch(console.error);
  //   }
  // }, []);

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster />
    </SessionProvider>
  );
}
