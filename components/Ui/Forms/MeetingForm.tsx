"use client";

import Modal from "@/components/Ui/Modal";
import { useState } from "react";

export default function MeetingForm({ setActiveForm }:any) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    purposeofmeeting: "",
    meetingAddress: "",
    date: "",
    schedule: "", 
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  try {
    const res = await fetch(
      "https://blogspaneluat.omlogistics.co.in/api/websites/omx/meeting",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          purposeofmeeting: formData.purposeofmeeting,
          meetingAddress: formData.meetingAddress,
          date: formData.date,
          schedule: formData.schedule,
        }),
      }
    );

    const data = await res.json();
    console.log("Response:", data);

    alert("Meeting request sent ");
    setActiveForm(null);

  } catch (error) {
    console.error(error);
    alert("Something went wrong ");
  }
};

  return (
    <Modal onClose={() => setActiveForm(null)}>
      <h2 className="text-lg font-bold mb-4">Meeting Request</h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        {/* Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Name"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Purpose */}
        <input
          type="text"
          name="purposeofmeeting"
          placeholder="Purpose of Meeting"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
        />


        {/*  */}
        <input
          type="text"
           name="meetingAddress" 
          placeholder="Meeting Address"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Schedule Dropdown */}
        <select
          name="schedule"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        >
          <option value="">Select Schedule</option>
          <option value="first-half">First Half (Morning)</option>
          <option value="second-half">Second Half (Afternoon)</option>
        </select>

        {/* Submit */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md font-semibold">
          Request Meeting
        </button>

      </form>
    </Modal>
  );
}