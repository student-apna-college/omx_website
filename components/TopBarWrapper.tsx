"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import dynamic from "next/dynamic";

const EnquiryForm = dynamic(
  () => import("@/components/Ui/Forms/EnquiryForm"),
  { ssr: false }
);

const MeetingForm = dynamic(
  () => import("@/components/Ui/Forms/MeetingForm"),
  { ssr: false }
);

export default function TopBarWrapper() {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  return (
    <>
      <TopBar setActiveForm={setActiveForm} />

      {/* FORMS */}
      {activeForm === "enquiry" && (
        <EnquiryForm setActiveForm={setActiveForm} />
      )}

      {activeForm === "meeting" && (
        <MeetingForm setActiveForm={setActiveForm} />
      )}
    </>
  );
}