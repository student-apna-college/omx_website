"use client";

import Modal from "@/components/Ui/Modal";
import { useState } from "react";

export default function MeetingForm({ setActiveForm }: any) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    purposeofmeeting: "",
    meetingAddress: "",
    date: "",
    schedule: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (loading) return; // prevent double click
    setLoading(true);
    setMessage("");

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

      if (!res.ok) throw new Error("Failed");

      //  success message
      setMessage("Meeting request sent successfully");

      //reset form (same fields)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        purposeofmeeting: "",
        meetingAddress: "",
        date: "",
        schedule: "",
      });

      // auto close after delay
      setTimeout(() => {
        setActiveForm(null);
      }, 2000);

    } catch (error) {
      console.error(error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal onClose={() => setActiveForm(null)}>
      <h2 className="text-lg font-bold mb-4 text-center">
        Meeting Request
      </h2>

      {/*MESSAGE */}
      {message && (
        <p
          className={`text-center font-medium mb-2 ${
            message.includes("success")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

       <form onSubmit={handleSubmit} className="space-y-3">

        {/* Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Name"
          value={formData.fullName}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Purpose */}
        <input
          type="text"
          name="purposeofmeeting"
          placeholder="Purpose of Meeting"
          value={formData.purposeofmeeting}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
        />

        {/* Address */}
        <input
          type="text"
          name="meetingAddress"
          placeholder="Meeting Address"
          value={formData.meetingAddress}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Schedule */}
        <select
          name="schedule"
          value={formData.schedule}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        >
          <option value="">Select Schedule</option>
          <option value="first-half">First Half (Morning)</option>
          <option value="second-half">Second Half (Afternoon)</option>
        </select>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md font-semibold text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Submitting..." : "Request Meeting"}
        </button>

      </form>
    </Modal>
  );
}