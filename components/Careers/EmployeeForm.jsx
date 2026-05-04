"use client";
import { useState } from "react";

export default function EmployeeForm({ job }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    employeeStatus: "",
    position: "",
    currentCTC: "",
    expectedCTC: "",
    experience: "",
    relocate: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // ✅ File validation
    if (file && file.size > 2 * 1024 * 1024) {
      alert("File size must be less than 2MB");
      return;
    }

    setResumeFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!job?.id) {
      alert("Job not found");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();

      // append form fields
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // ✅ only jobId (no jobRole needed)
      data.append("jobId", job.id);

      if (resumeFile) {
        data.append("resume", resumeFile);
      }

      // ✅ Dummy API call
      const res = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      console.log("Response:", result);

      alert("Application Submitted Successfully ✅");

    } catch (err) {
      console.error(err);
      alert("Submission Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:p-6 md:p-8 lg:p-10 rounded-2xl max-w-5xl mx-auto">

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        Apply for {job?.role || "Position"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <input name="firstName" placeholder="First Name *" required onChange={handleChange} className="input" />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} className="input" />

          <input name="contact" placeholder="Contact *" required onChange={handleChange} className="input" />
          <input name="email" placeholder="Email *" required onChange={handleChange} className="input" />

          <select name="employeeStatus" required onChange={handleChange} className="input">
            <option value="">Employee Status</option>
            <option>Fresher</option>
            <option>Working</option>
            <option>Notice Period</option>
          </select>

          <select name="position" required onChange={handleChange} className="input">
            <option value="">Position</option>
            <option>{job?.role}</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
          </select>

          <input name="currentCTC" placeholder="Current CTC" required onChange={handleChange} className="input" />
          <input name="expectedCTC" placeholder="Expected CTC" required onChange={handleChange} className="input" />

          <select name="experience" required onChange={handleChange} className="input">
            <option value="">Experience</option>
            <option>0-1</option>
            <option>1-3</option>
            <option>3+</option>
          </select>

          <div className="flex gap-4 items-center">
            <p>Are you comfortable in relocating?</p>
            <label>
              <input type="radio" name="relocate" value="Yes" onChange={handleChange} required /> Yes
            </label>
            <label>
              <input type="radio" name="relocate" value="No" onChange={handleChange} /> No
            </label>
          </div>

        </div>

        {/* File */}
        <input type="file" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />

        {/* Message */}
        <textarea name="message" placeholder="Why should we hire you?" onChange={handleChange} className="input" />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>

      </form>

      {/* Styles */}
      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}