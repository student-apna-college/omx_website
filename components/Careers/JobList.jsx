"use client";
import { useState } from "react";
import EmployeeForm from "./EmployeeForm";

export default function JobList({ jobPostings }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-8 mb-16 items-start ">

      {/* LEFT - JOB LIST */}
      <div className="lg:col-span-4 space-y-6 ">

        <h2 className="text-2xl font-semibold text-gray-800 text-center lg:text-left">
          Open Roles
        </h2>

        <div className="space-y-4">
          {jobPostings.map((job) => (
            <div
              key={job.id}
              onClick={() => { setSelectedJob(job); setShowForm(false); }}
              className={`bg-white p-5 rounded-2xl border cursor-pointer transition shadow hover:shadow-xl transform hover:-translate-y-1 ${
                selectedJob?.id === job.id
                  ? "border-[#000033] ring-1 ring-green-300"
                  : "border-gray-200"
              }`}
            >
              <h3 className="font-semibold text-lg text-gray-900">
                {job.role}
              </h3>
              <p className="text-gray-500 mt-1 text-sm">
                {job.location} • {job.type}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT - DETAILS */}
      <div className="lg:col-span-8 space-y-6">

        {!selectedJob && (
          <div className="bg-white p-10 md:p-14 rounded-2xl border shadow text-gray-500 text-center">
            Select a job to view details
          </div>
        )}

        {selectedJob && !showForm && (
          <div className="bg-white p-8 md:p-10 rounded-2xl border shadow space-y-6">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {selectedJob.role}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {selectedJob.location} • {selectedJob.type}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {selectedJob.description}
            </p>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Responsibilities
              </h3>
              <ul className="list-disc ml-6 space-y-1 text-gray-600">
                {selectedJob.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Requirements
              </h3>
              <ul className="list-disc ml-6 space-y-1 text-gray-600">
                {selectedJob.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="mt-4 bg-[#000033] text-white px-8 py-3 rounded-full font-semibold hover:scale-[1.02] transition"
            >
              Apply Now
            </button>

          </div>
        )}

        {selectedJob && showForm && (
          <div className="bg-white p-6 md:p-8 rounded-2xl border shadow">
            <EmployeeForm job={selectedJob} />
          </div>
        )}

      </div>
    </div>
  );
}