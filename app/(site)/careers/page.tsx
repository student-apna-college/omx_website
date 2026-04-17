import Hero from "@/components/Careers/Hero";
import JobList from "@/components/Careers/JobList";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const jobPostings = [
  {
    id: "OMX-001",
    role: "Operations Manager",
    location: "New Delhi",
    type: "Full-Time",
    description: "We are looking for an experienced Operations Manager to oversee daily business activities.",
    responsibilities: ["Manage daily operations", "Lead cross-functional teams", "Improve process efficiency"],
    requirements: ["5+ years experience", "Strong leadership skills", "Operations background"],
  },
  {
    id: "OMX-002",
    role: "Digitization Specialist",
    location: "Hyderabad",
    type: "Full-Time",
    description: "Responsible for handling document digitization and data processing.",
    responsibilities: ["Digitize physical records", "Ensure data accuracy", "Maintain document workflows"],
    requirements: ["3+ years experience", "Attention to detail", "Tech familiarity"],
  },
];

export default function CareersPage() {
 return (
  <div className="bg-white text-[#1a1a1a]">

    <Hero />

    {/* HERO CONTENT SECTION */}
    <section className="py-20 md:py-24 px-6 bg-gradient-to-b from-[#f5fffb] via-white to-[#f7faff]">

      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-8 space-y-6">

          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
            Build Your{" "}
            <span className="font-semibold text-[#0f172a]">Career</span> With Us
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Join a company that values innovation, professional growth, and collaboration.
            Employees are empowered to contribute to impactful projects and grow alongside a supportive leadership team.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We offer structured career paths, mentorship programs, skill development, and exposure to real-world challenges.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Explore our current job openings below and take the next step in your professional journey.
          </p>

        </div>

        {/* RIGHT CTA CARD */}
        <div className="lg:col-span-4">

          <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition relative overflow-hidden">

              {/* BACK ICON */}
              <ArrowRight
                size={180}
                className="absolute -top-10 -right-10 text-gray-100"
              />

              <div className="relative z-10 space-y-5">

                <h3 className="text-2xl md:text-3xl font-light">
                  Request <br />
                  <span className="font-semibold text-[#0f172a]">
                    Career Consultation
                  </span>
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Our HR team provides personalized guidance and career advice for candidates interested in high-impact roles.
                </p>

                <Link
                  href="/contact"
                  className="inline-block w-full text-center bg-[#0f172a] text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#1e3a8a] transition"
                >
                  Schedule Meeting
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

    {/* JOB SECTION */}
    <section className="py-5 md:py-5 bg-[#f7fbff]">
      <div className="max-w-[1400px] mx-auto px-6">
        <JobList jobPostings={jobPostings} />
      </div>
    </section>

  </div>
);
}