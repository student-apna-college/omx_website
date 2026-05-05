"use client";
import Modal from "@/components/Ui/Modal";
import { useState } from "react";

type Props = {
  setActiveForm: (value: string | null) => void;
};

export default function EnquiryForm({ setActiveForm}:Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    department: "",
    companyaddress:"",
    queryType: "",
    message: "",
  });

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch(
      "https://blogspaneluat.omlogistics.co.in/api/websites/omx/enquiry",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          empname: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          department: formData.department,
          company: formData.company,
          queryType: formData.queryType,
          message: formData.message,
        }),
      }
    );

    const data = await res.json();
    console.log("Response:", data);

    alert("Enquiry submitted successfully");
    setActiveForm(null);

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
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
          name="fullName"
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
          name="department"
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
          name="companyaddress" 
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
