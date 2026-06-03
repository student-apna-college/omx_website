"use client";

import React, { useState } from "react";

interface Job {
  id: string;
  role: string;
}

interface JobProps {
  job: Job;
}

interface FormDataType {
  fullName: string;
  lastName: string;
  contact: string;
  email: string;
  employeeStatus: string;
  position: string;
  currentCTC: string;
  expectedCTC: string;
  experience: string;
  relocate: string;
  message: string;
}

export default function EmployeeForm({ job }: JobProps) {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
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

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [responseMsg, setResponseMsg] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setResponseMsg("File size must be less than 2MB");
      setIsError(true);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setResponseMsg("Only PDF/DOC/DOCX allowed");
      setIsError(true);
      return;
    }

    setResumeFile(file);
    setResponseMsg("");
    setIsError(false);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!job?.id) {
      setResponseMsg("Job not found");
      setIsError(true);
      return;
    }

    setLoading(true);
    setResponseMsg("");

    try {
      const data = new FormData();

      data.append("firstName", formData.fullName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      data.append("contact", formData.contact);
      data.append("position", formData.position || job.role);
      data.append("experience", formData.experience);
      data.append("currentCTC", formData.currentCTC);
      data.append("expectedCTC", formData.expectedCTC);
      data.append("message", formData.message);
      data.append("jobId", job.id);

      if (resumeFile) {
        data.append("resume", resumeFile);
      }

      const res = await fetch(
        "https://blogspaneluat.omlogistics.co.in/api/websites/omx/omx-apply",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

      if (res.ok) {
        setResponseMsg("Application Submitted Successfully");
        setIsError(false);

        setFormData({
          fullName: "",
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

        setResumeFile(null);
      } else {
        setResponseMsg(result?.message || "Submission Failed");
        setIsError(true);
      }
    } catch (err) {
      console.error(err);
      setResponseMsg("Something went wrong");
      setIsError(true);
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
          <input
            name="fullName"
            value={formData.fullName}
            placeholder="First Name *"
            required
            onChange={handleChange}
            className="input"
          />

          <input
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            onChange={handleChange}
            className="input"
          />

          <input
            type="tel"
            name="contact"
            value={formData.contact}
            placeholder="Contact *"
            required
            onChange={handleChange}
            className="input"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email *"
            required
            onChange={handleChange}
            className="input"
          />

          <select
            name="employeeStatus"
            value={formData.employeeStatus}
            required
            onChange={handleChange}
            className="input"
          >
            <option value="">Employee Status</option>
            <option>Fresher</option>
            <option>Working</option>
            <option>Notice Period</option>
          </select>

          <select
            name="position"
            value={formData.position}
            required
            onChange={handleChange}
            className="input"
          >
            <option value="">Position</option>
            <option>{job?.role}</option>
            <option>Scanning & Data Entry Executives</option>
          </select>

          <input
            name="currentCTC"
            value={formData.currentCTC}
            placeholder="Current CTC"
            required
            onChange={handleChange}
            className="input"
          />

          <input
            name="expectedCTC"
            value={formData.expectedCTC}
            placeholder="Expected CTC"
            required
            onChange={handleChange}
            className="input"
          />

          <select
            name="experience"
            value={formData.experience}
            required
            onChange={handleChange}
            className="input"
          >
            <option value="">Experience</option>
            <option>0-1</option>
            <option>1-3</option>
            <option>3+</option>
          </select>

          <div className="flex gap-4 items-center">
            <p>Are you comfortable in relocating?</p>

            <label>
              <input
                type="radio"
                name="relocate"
                value="Yes"
                onChange={handleChange}
                required
              />{" "}
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="relocate"
                value="No"
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>
        </div>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={handleFileChange}
        />

        <textarea
          name="message"
          value={formData.message}
          placeholder="Why should we hire you?"
          onChange={handleChange}
          className="input"
        />

        {responseMsg && (
          <p
            className={`text-center font-semibold ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {responseMsg}
          </p>
        )}

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>

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