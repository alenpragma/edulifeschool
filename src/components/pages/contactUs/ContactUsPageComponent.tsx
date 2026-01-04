"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contactUsSchema } from "@/components/schema/contactUs/contactUs";
import { z } from "zod";
import { GenericForm, GenericFormRef } from "@/components/Form/GenericForm";
import { TextField } from "@/components/Form/fields/TextField";
import { TextareaField } from "@/components/Form/fields/TextAreaField";
import { SubmitButton } from "@/components/Form/fields/SubmitButton";
import MainContainer from "@/components/container/MainContainer";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Number",
    detail: "01519-575226",
    description: "Mon-Sat: 9:00 AM - 5:00 PM",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "Email Address",
    detail: "edulifeitschool@gmail.com",
    description: "Send us your query anytime",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Main Campus",
    detail: "শান্তিনগর রোড, ব্র্যাক অফিস সংলগ্ন, খাগড়াছড়ি সদর, খাগড়াছড়ি",
    description: "Khagrachari Sadar, Bangladesh",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat: 9:00 AM - 5:00 PM",
    description: "Sunday: Closed",
    color: "from-green-500 to-teal-500",
  },
];

const campuses = [
  {
    name: "খাগড়াছড়ি ক্যাম্পাস",
    address: "শান্তিনগর রোড, ব্র্যাক অফিস সংলগ্ন, খাগড়াছড়ি সদর, খাগড়াছড়ি",
    phone: "01519-575226",
    mapUrl:
      "https://www.google.com/maps/search/%E0%A6%B6%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%A8%E0%A6%97%E0%A6%B0+%E0%A6%B0%E0%A7%8B%E0%A6%A1+%E0%A6%96%E0%A6%BE%E0%A6%97%E0%A7%9C%E0%A6%BE%E0%A6%9B%E0%A7%9C%E0%A6%BF+%E0%A6%B8%E0%A6%A6%E0%A6%B0/@23.0984034,91.9544922,6101m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  },
  {
    name: "লক্ষ্মীছড়ি ক্যাম্পাস",
    address: " নারী কল্যাণ সমিতি ভবন, উপজেলা চত্ত্বর, লক্ষ্মীছড়ি, খাগড়াছড়ি ",
    phone: " 01511-899175",
    mapUrl:
      "https://www.google.com/maps/place/Khagrapur+Mohila+Kalyan+Samity/@23.1238268,91.9920645,763m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3752ef54f96075cd:0xabac4cb0df80c419!8m2!3d23.1238219!4d91.9946394!16s%2Fg%2F11fwn3d2x4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  },
];

type contactUsFormType = z.infer<typeof contactUsSchema>;

const initialValues: contactUsFormType = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactUsPageComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<GenericFormRef<contactUsFormType>>(null);
  const handleSubmit = (
    data: contactUsFormType | React.FormEvent<HTMLFormElement>
  ) => {
    if ("preventDefault" in data) return;
    console.log("contact us Data:", data);
  };

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

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 py-12">
        <div className="absolute top-20 right-0 h-48 w-48 rounded-full bg-secondary/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl animate-[float_6s_ease-in-out_infinite]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Contact Info Cards */}
      <section ref={sectionRef} className="py-12">
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
                  <SubmitButton label="Send Message" width="full" />{" "}
                </div>
              </GenericForm>
            </div>

            {/* Google Map */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl bg-card shadow-xl overflow-hidden flex-1 min-h-[200px]">
                <iframe
                  src={campuses[selectedCampus].mapUrl}
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
