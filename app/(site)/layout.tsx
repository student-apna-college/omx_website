"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/Forms/EnquiryForm";
import MeetingForm from "@/components/Forms/MeetingForm";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <TopBar setActiveForm={setActiveForm} />
        <Navbar />
      </header>

      {/* 🔥 Forms */}
      {activeForm === "enquiry" && (
        <EnquiryForm setActiveForm={setActiveForm} />
      )}

      {activeForm === "meeting" && (
        <MeetingForm setActiveForm={setActiveForm} />
      )}

      <main className="pt-44">
        {children}
      </main>

      <Footer />
    </>
  );
}