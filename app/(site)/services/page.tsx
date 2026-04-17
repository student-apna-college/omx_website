import Link from "next/link";
import { Shield, Zap, Database, Trash2, HardDrive, Settings, ArrowRight } from "lucide-react";
import ClientCarousel from "@/components/About/ClientCarousel";

const services = [
  { 
    slug: "records-management", 
    title: "Physical Records Management", 
    icon: <Database size={24} strokeWidth={1.5} />, 
    desc: "End-to-end lifecycle management of physical documents with secure tracking and vaulting"
  },
  { 
    slug: "scanning-digitization", 
    title: "Digital Transformation & Scanning", 
    icon: <Zap size={24} strokeWidth={1.5} />, 
    desc: "High-speed digitization with automated indexing and accuracy control"
  },
  { 
    slug: "secure-shredding", 
    title: "Secure Data Destruction", 
    icon: <Trash2 size={24} strokeWidth={1.5} />, 
    desc: "Compliance-driven shredding services with certified destruction"
  },
  { 
    slug: "media-storage", 
    title: "Media Vaulting", 
    icon: <HardDrive size={24} strokeWidth={1.5} />, 
    desc: "Climate-controlled storage for tapes, files, and critical assets"
  },
  { 
    slug: "data-security", 
    title: "DMS & Cloud", 
    icon: <Shield size={24} strokeWidth={1.5} />, 
    desc: "Secure cloud-based document access with advanced DMS system"
  },
];

export default function ServicesListing() {
  return (
    <div className="bg-gradient-to-b from-[#f8fbff] via-[#f1f6ff] to-[#f8fbff] pt-24 md:pt-32 pb-16 md:pb-24">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* TOP LABEL */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[2px] w-12 bg-[#000033]"></div>
          <span className="text-[#000033] text-xs font-bold uppercase tracking-[0.3em]">
            Enterprise Solutions
          </span>
        </div>

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-24 items-start">

          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-light leading-tight">
              Core <span className="font-semibold">Services</span><br/>
              & <span className="text-[#000033] font-semibold">Infrastructure</span>
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-gray-600 border-l-4 border-[#000033] pl-6 leading-relaxed text-sm md:text-base">
              We provide secure storage, scanning, and document lifecycle solutions 
              designed for modern enterprises across industries
            </p>
          </div>

        </div>

{/* SUCCESS STORY */}
<section className="py-8 md:py-8 bg-white">
  <div className="max-w-[1100px] mx-auto px-6">

    <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
      Large Scale <span className="text-[#000033]">Digitization Success</span>
    </h2>

    <div className="bg-[#eef5ff] rounded-2xl p-6 md:p-10 shadow-lg space-y-6 text-gray-700">

      <p className="text-lg">
        OMX Info Management Ltd's Multi-City Success Story In today's fast-paced business landscape, adapting to change is crucial for survival. OMX Info Management Ltd has risen to this challenge, expanding its digital transformation services from Delhi NCR to a pan-India scale. What started as a small digitization project has grown into a confident, large-scale operation, leveraging cutting-edge technology and expertise
      </p>

      {/* SERVICES */}
      <div>
        <h3 className="font-semibold text-xl mb-3 text-[#1a1a1a]">Core Services Delivered</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc pl-5">
          <li>Document Digitization</li>
          <li>Secure Records Management</li>
          <li>DMS Implementation</li>
        </ul>
      </div>

      {/* APPROACH */}
      <div>
        <h3 className="font-semibold text-xl mb-3 text-[#1a1a1a]">Execution Strategy</h3>

        <ul className="space-y-3 list-disc pl-5">
          <li>
            <strong>Multi-City Deployment:</strong> OMX's diversified operational strategy involved deploying specialized teams across key cities, including Faridabad in Delhi NCR apart from Noida & Jamalpur, Hyderabad, Pune, Indore, and Cochin. This approach enabled:
          </li>
          <p>On-site analysis and customized execution plans</p>
          <p>Minimal disruption to operations</p>
          <p>Efficient handling of location-specific challenges</p>
          <li>
            <strong>End-to-End Workflow:</strong> A structured workflow ensured seamless digitization
          </li>
          <p>Collection and categorization of physical files</p>
          <p>High-resolution scanning with quality checks</p>
          <p>Indexing and metadata tagging</p>
          <li>
            <strong>Centralized System:</strong> The digitized records were integrated into a unified platform, enabling
          </li>
          <p>Unified access across locations</p>
          <p>Real-time data retrieval</p>
          <p>Reduced physical storage and manual processes</p>
        </ul>
      </div>

      {/* RESULT */}
      <div className="bg-white p-5 rounded-xl border">
        <p className="font-semibold text-[#1a1a1a]">
          Result:
        </p>
        <p>
          The transformation enabled clients to move from manual processes to a connected digital environment, significantly improving efficiency, accessibility, and data security
        </p>
      </div>

    </div>

  </div>
</section>

{/* CARDS GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

  {services.map((s, i) => {
    const styles = [
      { bg: "bg-[#eaf2ff]", iconBg: "bg-[#cfe0ff] text-blue-600" },
      { bg: "bg-[#f3ecff]", iconBg: "bg-[#e0d2ff] text-purple-600" },
      { bg: "bg-[#fff6d8]", iconBg: "bg-[#ffeaa7] text-yellow-600" },
      { bg: "bg-[#e6f7ee]", iconBg: "bg-[#c8f2da] text-green-600" },
      { bg: "bg-[#ffecec]", iconBg: "bg-[#ffd6d6] text-red-600" },
      { bg: "bg-[#e6f9ff]", iconBg: "bg-[#ccefff] text-cyan-600" },
    ];

    const style = styles[i % styles.length];

    return (
      <Link
        key={s.slug}
        href={`/services/${s.slug}`}
        className={`${style.bg} group rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col`}
      >

        <div className={`w-12 h-12 mb-6 flex items-center justify-center rounded-full ${style.iconBg} group-hover:scale-110 transition`}>
          {s.icon}
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#0f172a] max-w-[220px] leading-snug">
  {s.title}
</h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow">
          {s.desc}
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-[#000033] opacity-0 group-hover:opacity-100 transition-all">
          <span>Explore</span>
          <ArrowRight size={16} />
        </div>

      </Link>
    );
  })}

  {/* CTA CARD */}
  <div className="rounded-2xl p-6 md:p-8 bg-[#000033] text-white flex flex-col justify-between shadow-lg">

    <h3 className="text-2xl md:text-3xl font-light leading-snug">
      Need Custom <br/> Solution?
    </h3>

    <div className="mt-10">
      <p className="text-sm text-white/80 mb-5">
        Contact us for enterprise-level document management solutions
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 border border-white/40 px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#000033] transition"
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