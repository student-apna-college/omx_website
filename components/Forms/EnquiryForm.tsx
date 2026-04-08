"use client";

import Modal from "@/components/ui/Modal";
import { useState } from "react";

export default function EnquiryForm({ setActiveForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companyaddress:"",
    queryType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setActiveForm(null);
  };

  return (
    <Modal onClose={() => setActiveForm(null)}>
      <h2 className="text-lg font-bold mb-4 text-center">
        Enquiry Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />
{/* Company */}
        <input
          type="text"
          name="company"
          placeholder="Department"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
        />

        {/* Company */}
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
        />

        <input
          type="text"
          name="Address"
          placeholder="company Address"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
        />


        {/* Dropdown */}
        <select
          name="queryType"
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        >
          <option value="">Select Query</option>
          <option>Physical Record Management & Document Management</option>
          <option>Scanning & Digitization Services</option>
          <option>Digital Document Storage (DMS Services)</option>
          <option>Secure Shredding & Destruction Services</option>
          <option>Record Management Infra Solution</option>
          <option>Data Entry and Indexing</option>
          <option>Others</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Brief your query..."
          rows={3}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Submit */}
        <button className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-md font-semibold">
          Submit Enquiry
        </button>

      </form>
    </Modal>
  );
}
