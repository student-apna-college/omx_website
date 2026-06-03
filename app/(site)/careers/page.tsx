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
    qualifications: "Graduate / MBA Preferred",
    experience: "5+ Years Experience",

    description: [
      "Oversee daily business operations",
      "Lead cross-functional teams",
      "Improve process efficiency"
    ],
  },
  {
    id: "OMX-002",
    role: "Scanning & Data Entry Executives",
    location:
      "Delhi NCR, Hyderabad, Kochin, Bengaluru, Pune, Mumbai, Chandigarh, Jaipur, Indore, Faridabad",
    type: "Full-Time",

    qualifications: "Any Graduate",
    experience: "1+ Year Experience",

    description: [
      "Handle document scanning and digitization",
      "Ensure data accuracy and quality checks",
      "Maintain document workflows",
      
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-[#1a1a1a]">

      <Hero />

      {/* HERO CONTENT */}
      <section className="py-16 md:py-20 px-6 lg:ml-[50px]">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-10 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Build Your{" "}
              <span className="font-semibold text-[#1574AD]">Career</span> With Us
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Join a company that values innovation, growth, and collaboration.
            </p>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              We offer structured career paths, mentorship, and real-world exposure.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">

            <div className="w-full max-w-md rounded-2xl p-[1px] bg-[#1574AD]">

              <div className="rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition relative overflow-hidden">

                <ArrowRight
                  size={120}
                  className="absolute -top-6 -right-6 text-gray-100"
                />

                <div className="relative z-10 space-y-4 text-center lg:text-left">

                  <h3 className="text-xl md:text-2xl font-light text-white">
                    Career Consultation
                  </h3>

                  <p className="text-sm text-white">
                    Get guidance from our HR team for the right role.
                  </p>

                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#0f172a] text-white px-5 py-3 rounded-xl text-xs font-bold uppercase hover:bg-blue-800 transition"
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
      <section className="py-10 md:py-12 bg-[#f7fbff]">
        <div className="max-w-[1000px] mx-auto px-4">
          <JobList jobPostings={jobPostings} />
        </div>
      </section>

    </div>
  );
}


