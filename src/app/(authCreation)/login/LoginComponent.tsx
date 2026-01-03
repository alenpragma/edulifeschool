"use client";

import { GenericForm, GenericFormRef } from "@/components/Form/GenericForm";
import { TextField } from "@/components/Form/fields/TextField";
import { useRef, useState } from "react";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { loginSchema } from "@/components/schema/loginAndSignUp/loginAndSignup";
import { signIn } from "next-auth/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Images } from "@/lib/store/images";

type LoginFormType = z.infer<typeof loginSchema>;

const initialValues: LoginFormType = {
  email: "",
  password: "",
};

export default function LoginComponent() {
  const formRef = useRef<GenericFormRef<LoginFormType>>(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (
    data: LoginFormType | React.FormEvent<HTMLFormElement>
  ) => {
    if ("preventDefault" in data) return;
    console.log("Login Form Data:", data);
  };

  return (
    <div className="h-[100dvh] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-3">
      <div className="w-full max-w-md bg-white p-3 rounded-2xl shadow-lg border border-gray-100">
        <Link href="/" className="mb-5 flex justify-center">
          <Image
            className="w-[150px]"
            src={Images.logo}
            alt="img"
            width={300}
            height={300}
          />
        </Link>
        <p className="text-gray-500 text-center mb-6">
          Please sign in to continue
        </p>
        <button
          onClick={() => {
            setLoading(true);
            signIn("google", { callbackUrl: "/verify-account" });
          }}
          type="button"
          disabled={loading}
          className={cn(
            "w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 transition",
            loading && "opacity-60 cursor-not-allowed"
          )}
        >
          <FcGoogle className="text-2xl" />
          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <GenericForm
          schema={loginSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="space-y-4">
            <TextField
              name="email"
              label="Email"
              placeholder="Enter your email"
              inputClass="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            <TextField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              inputClass="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              Sign In
            </button>
          </div>
        </GenericForm>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-indigo-600 font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
