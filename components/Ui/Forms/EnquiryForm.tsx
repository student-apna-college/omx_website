"use client";
import Modal from "@/components/Ui/Modal";

import { useState } from "react";

type Props = {
  setActiveForm: (value: string | null) => void;
};

export default function EnquiryForm({ setActiveForm }: Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    department: "",
    companyaddress: "",
    queryType: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); //  NEW

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

    if (loading) return; //prevent double submit
    setLoading(true);
    setMessage("");

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

      if (!res.ok) throw new Error("Failed");

      // success message
      setMessage("Enquiry submitted successfully");

      //form reset (same fields)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        department: "",
        companyaddress: "",
        queryType: "",
        message: "",
      });

      // Auto close after 2 sec
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
        Enquiry Form
      </h2>

      {/* MESSAGE */}
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
          placeholder="Full Name"
          value={formData.fullName}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Department */}
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
        />

        {/* Company */}
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
        />

        {/* Company Address */}
        <input
          type="text"
          name="companyaddress"
          placeholder="Company Address"
          value={formData.companyaddress}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
        />

        {/* Query Type */}
        <select
          name="queryType"
          value={formData.queryType}
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
          value={formData.message}
          className="border w-full p-2 rounded-md"
          onChange={handleChange}
          required
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md font-semibold text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

      </form>
    </Modal>
  );
}


