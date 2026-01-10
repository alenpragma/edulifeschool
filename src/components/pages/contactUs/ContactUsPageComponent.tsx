"use client";

import { GenericForm, GenericFormRef } from "@/components/Form/GenericForm";
import { SubmitButton } from "@/components/Form/fields/SubmitButton";
import { TextareaField } from "@/components/Form/fields/TextAreaField";
import { TextField } from "@/components/Form/fields/TextField";
import MainContainer from "@/components/container/MainContainer";
import { contactUsSchema } from "@/components/schema/contactUs/contactUs";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios/AxiosInstance";
import { contactResponse } from "@/types/generalType/contactType";
import { SiteSettingsData } from "@/types/generalType/generalType";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

type contactUsFormType = z.infer<typeof contactUsSchema>;

const initialValues: contactUsFormType = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactUsPageComponent({
  data,
}: {
  data: SiteSettingsData;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<GenericFormRef<contactUsFormType>>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async (
      data: contactUsFormType | React.FormEvent<HTMLFormElement>
    ) => {
      const response = await axiosInstance.post<contactResponse>(
        `/contact-form`,
        data
      );
      return response.data;
    },
    onSuccess: (data: contactResponse) => {
      if (data.success === true) {
        formRef.current?.reset();
        toast.success(data.message || "Successfully send message", {
          position: "top-center",
          style: {
            width: "fit-content",
          },
        });
      }
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err.message || "Something went wrong");
    },
  });

  const handleSubmit = (
    data: contactUsFormType | React.FormEvent<HTMLFormElement>
  ) => {
    if ("preventDefault" in data) return;
    const payload = {
      ...data,
    };
    if (!payload.email) {
      delete payload.email;
    }

    mutate(payload);
  };

  const { contact, campuses } = data || {};
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: contact[0].name,
      detail: contact[0].value,
      description: "Mon-Sat: 9:00 AM - 5:00 PM",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: contact[1].name,
      detail: contact[1].value,
      description: "Send us your query anytime",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: contact[2].name,
      detail: contact[2].value,
      description: "Khagrachari Sadar, Bangladesh",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: contact[4].name,
      detail: contact[4].value,
      description: "Sunday: Closed",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 mt-8">
        <div className="absolute top-20 right-0 h-48 w-48 rounded-full bg-secondary/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <MainContainer className="py-8">
          <div className="text-center">
            <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed sm:mt-6 sm:text-lg">
              Have questions about our programs? Want to schedule a visit? We'd
              love to hear from you. Our team is here to help you find the right
              educational path for your child.
            </p>
          </div>
        </MainContainer>
      </section>

      {/* Contact Info Cards */}
      <section ref={sectionRef} className="py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />
                <div className="relative z-10">
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <info.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {info.title}
                  </h3>
                  <p className="mb-1 text-sm font-semibold text-primary">
                    {info.detail}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50">
        <MainContainer className="">
          {/* Campus Selector Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {campuses.map((campus, index) => (
              <Button
                key={index}
                variant={selectedCampus === index ? "default" : "outline"}
                onClick={() => setSelectedCampus(index)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 ${
                  selectedCampus === index
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {campus.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {/* Contact Form */}
            <div className="rounded-2xl bg-card p-3 shadow-xl ">
              <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
                Send Us a Message
              </h2>
              <p className="mb-6 text-sm text-muted-foreground sm:mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
              <GenericForm
                schema={contactUsSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                ref={formRef}
              >
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                    <TextField
                      name="name"
                      label="Name"
                      placeholder="Enter Name"
                      inputClass="contactus_form"
                    />
                    <TextField
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      inputClass="contactus_form"
                    />
                  </div>
                  <TextField
                    name="phone"
                    label="Phone Number"
                    type="number"
                    countryLog={true}
                    placeholder="Enter Phone"
                    inputClass="w-full pl-12"
                  />
                  <TextField
                    name="subject"
                    label="Subject"
                    placeholder="What's this about?"
                    inputClass="contactus_form"
                  />
                  <TextareaField
                    name="message"
                    label="Subject"
                    placeholder="Enter message"
                    // inputClass="contactus_form"
                  />
                  <SubmitButton
                    label={isPending ? "Sending..." : "Send Message"}
                    width="full"
                  />{" "}
                </div>
              </GenericForm>
            </div>

            {/* Google Map */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl bg-card shadow-xl overflow-hidden flex-1 min-h-[200px]">
                <iframe
                  src={campuses[selectedCampus].googleMapUrl || ""}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[30%] transition-all duration-500 hover:grayscale-0"
                />
              </div>

              {/* Campus-specific Info Card */}
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 sm:p-8 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="mb-4 text-xl font-bold text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" /> {campuses[selectedCampus].name}
                </h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-bold text-foreground shrink-0">
                      Address:
                    </span>
                    {campuses[selectedCampus].address}
                  </p>
                  <p className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-bold text-foreground shrink-0">
                      Phone:
                    </span>
                    {campuses[selectedCampus].phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </section>
    </div>
  );
}
