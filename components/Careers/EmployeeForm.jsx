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
    message: ""
  });

  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setResumeFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) =>
      data.append(key, formData[key])
    );

    data.append("jobId", job.id);
    data.append("jobRole", job.role);

    if (resumeFile) data.append("resume", resumeFile);

    try {
      await fetch("/api/apply", {
        method: "POST",
        body: data,
      });

      alert("Application Submitted Successfully");
    } catch (err) {
      console.error(err);
      alert("Submission Failed");
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl border max-w-5xl mx-auto"> 
      
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
        Apply for {job.role}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6"> 

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6"> 

          {/* First Name */}
          <div>
            <label className="form-label">First Name *</label>
            <input type="text" name="firstName" required onChange={handleChange} className="input" />
          </div>

          {/* Last Name */}
          <div>
            <label className="form-label">Last Name</label>
            <input type="text" name="lastName" onChange={handleChange} className="input" />
          </div>

          {/* Contact */}
          <div>
            <label className="form-label">Contact *</label>
            <input type="tel" name="contact" required onChange={handleChange} className="input" />
          </div>

          {/* Email */}
          <div>
            <label className="form-label">Email *</label>
            <input type="email" name="email" required onChange={handleChange} className="input" />
          </div>

          {/* Employee Status */}
          <div>
            <label className="form-label">Current Employee Status *</label>
            <select name="employeeStatus" required onChange={handleChange} className="input">
              <option value="">Select</option>
              <option>Fresher</option>
              <option>Working</option>
              <option>Serving Notice Period</option>
              <option>Immediate Joiner</option>
            </select>
          </div>

          {/* Position */}
          <div>
            <label className="form-label">Position Apply For *</label>
            <select name="position" required onChange={handleChange} className="input">
              <option value="">Select</option>
              <option>{job.role}</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
            </select>
          </div>

          {/* Current CTC */}
          <div>
            <label className="form-label">Current CTC *</label>
            <input type="text" name="currentCTC" required onChange={handleChange} className="input" />
          </div>

          {/* Expected CTC */}
          <div>
            <label className="form-label">Expected CTC *</label>
            <input type="text" name="expectedCTC" required onChange={handleChange} className="input" />
          </div>

          {/* Experience */}
          <div>
            <label className="form-label">Total Experience *</label>
            <select name="experience" required onChange={handleChange} className="input">
              <option value="">Select</option>
              <option>0-1 Years</option>
              <option>1-3 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>
          </div>

          {/* Relocation */}
          <div>
            <label className="form-label">Relocation *</label>
            <div className="flex flex-wrap gap-4 mt-2"> 
              <label className="flex items-center gap-2">
                <input type="radio" name="relocate" value="Yes" onChange={handleChange} required />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="relocate" value="No" onChange={handleChange} />
                No
              </label>
            </div>
          </div>

        </div>

        {/* Resume */}
        <div>
          <label className="form-label">Upload Resume *</label>
          <input type="file" accept=".pdf,.doc,.docx" required onChange={handleFileChange} className="mt-2 w-full text-sm sm:text-base" /> {/* ✅ UPDATED */}
        </div>

        {/* Message */}
        <div>
          <label className="form-label">Why should we hire you?</label>
          <textarea name="message" rows={4} onChange={handleChange} className="input"></textarea>
        </div>

        {/* Submit */}
        <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-semibold hover:scale-105 transition"> {/* ✅ UPDATED */}
          Submit Application
        </button>
      </form>

      {/* Reusable styles */}
      <style jsx>{`
        .form-label {
          display: block;
          font-weight: 500;
          margin-bottom: 5px;
          color: #374151;
          font-size: 14px; /* */
        }

        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 10px 12px;
          border-radius: 10px;
          outline: none;
          transition: 0.2s;
          font-size: 14px; 
        }

        @media (min-width: 640px) {
          .input {
            font-size: 15px; 
          }
        }

        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
      `}</style>
    </div>
  );
}