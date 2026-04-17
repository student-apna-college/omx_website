"use client";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/Ui/Forms/EnquiryForm";
import MeetingForm from "@/components/Ui/Forms/MeetingForm";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  return (
    <>
      {/* HEADER */}
     <header className="fixed top-0 w-full z-50">
  <TopBar setActiveForm={setActiveForm} />
  <Navbar />
</header>

      {/* FORMS */}
      {activeForm === "enquiry" && (
        <EnquiryForm setActiveForm={setActiveForm} />
      )}
      {activeForm === "meeting" && (
        <MeetingForm setActiveForm={setActiveForm} />
      )}

      
     <main className="pt-[120px] md:pt-[140px]">
  {children}
</main>

      <Footer />
    </>
  );
}