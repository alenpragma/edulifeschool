"use client";

import { GenericForm, GenericFormRef } from "@/components/Form/GenericForm";
import { TextField } from "@/components/Form/fields/TextField";
import { signUpSchema } from "@/components/schema/loginAndSignUp/loginAndSignup";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

type SignUpFormType = z.infer<typeof signUpSchema>;

const initialValues: SignUpFormType = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
};

export default function SignUpComponent() {
  const formRef = useRef<GenericFormRef<SignUpFormType>>(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (
    data: SignUpFormType | React.FormEvent<HTMLFormElement>
  ) => {
    if ("preventDefault" in data) return;
    console.log("SignUp Data:", data);
  };

  return (
    <div className="min-h-[100dvh] py-5 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full md:max-w-md bg-white p-3 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Create an Account
        </h2>
        <p className="text-gray-500 text-center mb-6">Sign up to get started</p>
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
          schema={signUpSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="space-y-4">
            <TextField
              name="name"
              label="Full Name"
              placeholder="Enter your full name"
              inputClass="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <TextField
              name="email"
              label="Email"
              placeholder="Enter your email"
              inputClass="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <TextField
              name="phone"
              label="Phone Number"
              placeholder="Enter your phone number"
              inputClass="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter password"
              inputClass="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <TextField
              name="confirm_password"
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              inputClass="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              Sign Up
            </button>
          </div>
        </GenericForm>
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
