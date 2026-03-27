"use client";

import { useState } from "react";

export default function EmployeeForm({ job }) {
  const [formData, setFormData] = useState({ name: "", email: "", experience: "", message: "" });
  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setResumeFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    data.append("jobId", job.id);
    data.append("jobRole", job.role);
    if (resumeFile) data.append("resume", resumeFile);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: data });
      const result = await res.json();
      alert("Application Submitted ");
    } catch (err) {
      console.error(err);
      alert("Submission Failed ");
    }
  };

  return (
    <div className="bg-white p-10 rounded-2xl border shadow space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for {job.role}</h2>
      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input type="text" name="name" onChange={handleChange} required className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email Address</label>
          <input type="email" name="email" onChange={handleChange} required className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Experience</label>
          <select name="experience" onChange={handleChange} required className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none">
            <option value="">Select</option>
            <option>0-1 Years</option>
            <option>1-3 Years</option>
            <option>3-5 Years</option>
            <option>5+ Years</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Upload Resume (PDF/DOC)</label>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="w-full mt-2" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Why should we hire you?</label>
          <textarea name="message" onChange={handleChange} rows={5} className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" />
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition">
          Submit Application
        </button>
      </form>
    </div>
  );
}