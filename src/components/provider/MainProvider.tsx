"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type React from "react";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

export function AuthProvider({ children }: { children: React.ReactNode }) {

  return (
    <QueryClientProvider client={queryClient}>
      {children} <Toaster />
    </QueryClientProvider>
  );
}
