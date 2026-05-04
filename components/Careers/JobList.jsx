"use client";
import { useState } from "react";
import EmployeeForm from "./EmployeeForm";

export default function JobList({ jobPostings }) {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="space-y-6">

      {jobPostings.map((job) => (
        <div
          key={job.id}
          className="bg-white border rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition"
        >

          {/* TITLE */}
          <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
            <span className="font-bold">Job Title:</span> {job.role}
          </h3>

          {/* LOCATION */}
          <p className="text-xs sm:text-sm text-gray-700 mb-3">
            <span className="font-bold">Location:</span> {job.location}
          </p>

          {/* REQUIREMENTS */}
          <div className="mb-4 space-y-1">
            <p className="font-semibold text-sm">Requirements:</p>

            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-semibold">Qualification:</span>{" "}
              {job.qualifications}
            </p>

            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-semibold">Experience:</span>{" "}
              {job.experience}
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-4">
            <p className="font-semibold text-sm mb-2">Job Description:</p>

            <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* BUTTON */}
          <button
            onClick={() =>
              setSelectedJob(selectedJob?.id === job.id ? null : job)
            }
            className="bg-[#000033] text-white px-4 py-2 text-xs sm:text-sm rounded-md hover:bg-blue-900 transition"
          >
            Apply Now
          </button>

          {/* FORM */}
          {selectedJob?.id === job.id && (
            <div className="mt-6 border-t pt-6">
              <EmployeeForm job={job} />
            </div>
          )}

        </div>
      ))}

    </div>
  );
}