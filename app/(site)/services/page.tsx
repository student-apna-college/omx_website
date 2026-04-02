import Link from "next/link";
import { Shield, Zap, Database, Trash2, HardDrive, Settings, ArrowRight } from "lucide-react";

const services = [
  { 
    slug: "records-management", 
    title: "Physical Records Management", 
    icon: <Database size={24} strokeWidth={1.5} />, 
    desc: "End-to-end lifecycle management of physical documents with secure tracking and vaulting."
  },
  { 
    slug: "scanning-digitization", 
    title: "Digital Transformation & Scanning", 
    icon: <Zap size={24} strokeWidth={1.5} />, 
    desc: "High-speed digitization with automated indexing and accuracy control."
  },
  { 
    slug: "secure-shredding", 
    title: "Secure Data Destruction", 
    icon: <Trash2 size={24} strokeWidth={1.5} />, 
    desc: "Compliance-driven shredding services with certified destruction."
  },
  { 
    slug: "media-storage", 
    title: "Media Vaulting", 
    icon: <HardDrive size={24} strokeWidth={1.5} />, 
    desc: "Climate-controlled storage for tapes, files, and critical assets."
  },
  { 
    slug: "in-house-solutions", 
    title: "In-House Solutions", 
    icon: <Settings size={24} strokeWidth={1.5} />, 
    desc: "Custom on-site record management infrastructure setup."
  },
  { 
    slug: "data-security", 
    title: "DMS & Cloud", 
    icon: <Shield size={24} strokeWidth={1.5} />, 
    desc: "Secure cloud-based document access with advanced DMS system."
  },
];

export default function ServicesListing() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white pt-24 md:pt-32 pb-16 md:pb-24">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* TOP LABEL */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[2px] w-12 bg-[rgb(0,104,83)]"></div>
          <span className="text-[rgb(0,104,83)] text-xs font-bold uppercase tracking-[0.3em]">
            Enterprise Solutions
          </span>
        </div>

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-24 items-start">

          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-light leading-tight">
              Core <span className="font-semibold">Services</span><br/>
              & <span className="text-[rgb(0,104,83)] font-semibold">Infrastructure</span>
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-gray-600 border-l-4 border-[rgb(0,104,83)] pl-6 leading-relaxed text-sm md:text-base">
              We provide secure storage, scanning, and document lifecycle solutions 
              designed for modern enterprises across industries.
            </p>
          </div>

        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((s) => (

            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >

              {/* ICON */}
              <div className="mb-6 text-gray-400 group-hover:text-[rgb(0,104,83)] transition">
                {s.icon}
              </div>

              {/* TEXT */}
              <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-snug">
                {s.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-semibold text-[rgb(0,104,83)] opacity-0 group-hover:opacity-100 transition-all">
                <span>Explore</span>
                <ArrowRight size={16} />
              </div>

            </Link>

          ))}

          {/* CTA CARD */}
          <div className="rounded-2xl p-6 md:p-8 bg-[rgb(0,104,83)] text-white flex flex-col justify-between shadow-lg">

            <h3 className="text-2xl md:text-3xl font-light leading-snug">
              Need Custom <br/> Solution?
            </h3>

            <div className="mt-10">

              <p className="text-sm text-white/80 mb-5">
                Contact us for enterprise-level document management solutions.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/40 px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[rgb(0,104,83)] transition"
              >
                Contact Us
                <ArrowRight size={14} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}