import Hero from "@/components/Careers/Hero";
import JobList from "@/components/Careers/JobList";

// Job data (can be server-side fetched)
const jobPostings = [
  {
    id: "OMX-001",
    role: "Operations Manager",
    location: "New Delhi",
    type: "Full-Time",
    description: "We are looking for an experienced Operations Manager to oversee daily business activities.",
    responsibilities: [
      "Manage daily operations",
      "Lead cross-functional teams",
      "Improve process efficiency",
    ],
    requirements: [
      "5+ years experience",
      "Strong leadership skills",
      "Operations background",
    ],
  },
  {
    id: "OMX-002",
    role: "Digitization Specialist",
    location: "Hyderabad",
    type: "Full-Time",
    description: "Responsible for handling document digitization and data processing.",
    responsibilities: [
      "Digitize physical records",
      "Ensure data accuracy",
      "Maintain document workflows",
    ],
    requirements: [
      "3+ years experience",
      "Attention to detail",
      "Tech familiarity",
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <div className="max-w-[1200px] mx-auto px-6 py-16 space-y-8 text-gray-700">
        <h2 className="text-4xl font-bold text-gray-900 text-center">Build Your Career With Us</h2>
        <p className="text-lg leading-relaxed text-center max-w-[900px] mx-auto">
          Join a company that values innovation, professional growth, and collaboration. Our organization provides meaningful opportunities in operations, digitization, management, and corporate functions. Employees are empowered to take initiative, contribute to impactful projects, and grow alongside a supportive leadership team.
        </p>
        <p className="text-lg leading-relaxed text-center max-w-[900px] mx-auto">
          We offer structured career paths, mentorship programs, skill development, and exposure to real-world challenges. Whether you are an entry-level professional or a seasoned leader, our culture encourages continuous learning, accountability, and excellence.
        </p>
        <p className="text-lg leading-relaxed text-center max-w-[900px] mx-auto">
          Explore our current job openings below and take the next step in your professional journey. Start your journey with a company that supports ambition, encourages learning, and nurtures leadership at every level.
        </p>
      </div>

      <JobList jobPostings={jobPostings} />
    </div>
  );
}