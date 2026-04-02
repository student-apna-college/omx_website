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
      <section className="py-32 px-6 bg-gradient-to-b from-[#f0fcf8] to-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-8">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05]">
              Build Your <span className="font-medium italic text-[#006853]">Career</span> With Us
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">Join a company that values innovation, professional growth, and collaboration. Employees are empowered to contribute to impactful projects and grow alongside a supportive leadership team.</p>
            <p className="text-lg text-gray-600 leading-relaxed">We offer structured career paths, mentorship programs, skill development, and exposure to real-world challenges. Whether entry-level or experienced, our culture encourages learning and excellence.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Explore our current job openings below and take the next step in your professional journey.</p>
          </div>

          <div className="lg:col-span-4 bg-[#1a1a1a] p-12 rounded-2xl text-white relative flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ArrowRight size={200} />
            </div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-light italic">
                Request <br /> <span className="text-[#006853]">Career</span> Consultation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">Our HR team provides personalized guidance and career advice for candidates interested in high-impact roles.</p>
              <Link href="/contact" className="inline-block w-full border border-gray-700 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-[#006853] hover:text-[#006853] transition-colors">
                Schedule Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f0fcf8]">
        <JobList jobPostings={jobPostings} />
      </section>
    </div>
  );
}