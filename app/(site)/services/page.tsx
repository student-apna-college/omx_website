import Link from "next/link";
import { Shield, Zap, Database, Trash2, HardDrive, ArrowRight } from "lucide-react";


const services = [
  { 
    slug: "records-management", 
    title: "Records Management", 
    icon: <Database size={24} strokeWidth={1.5} />, 
    desc: "Secure storage, tracking, and lifecycle management of physical records with full compliance",
    img: "/banner/image10.jpg",
  },
  { 
    slug: "scanning-digitization", 
    title: "Scanning & Digitization", 
    icon: <Zap size={24} strokeWidth={1.5} />, 
    desc: "High-speed document scanning with OCR, indexing, and digital archive creation",
    img: "/images/1.jpeg",
  },
  { 
    slug: "digital-document-storage-dms-services", 
    title: "DMS Solutions", 
    icon: <Zap size={24} strokeWidth={1.5} />, 
    desc: "Cloud-based document management system with secure access and workflow automation",
    img: "/banner/4.jpeg",
  },
  { 
    slug: "secure-shredding", 
    title: "Secure Shredding", 
    icon: <Trash2 size={24} strokeWidth={1.5} />, 
    desc: "Certified destruction of confidential documents ensuring compliance and data protection",
    img: "/banner/image2.jpg",
  },
  { 
    slug: "data-entry", 
    title: "Data Entry", 
    icon: <HardDrive size={24} strokeWidth={1.5} />, 
    desc: "Scalable data entry services with validation and quality control",
    img: "/banner/6.jpg",
  },
  { 
    slug: "data-security-compliance-solutions", 
    title: "Data Security & Compliance", 
    icon: <Shield size={24} strokeWidth={1.5} />, 
    desc: "Advanced data protection, audit compliance, and secure document access systems",
    img: "/banner/7.jpg",
  },
  { 
    slug: "record-ranagement-infra-solution", 
    title: "Infra Solutions", 
    icon: <Shield size={24} strokeWidth={1.5} />, 
    desc: "End-to-end infrastructure setup for physical and digital record management systems",
    img: "/banner/5.jpg",
  },
  { 
    slug: "filling-binding-indexing", 
    title: "Filing & Indexing", 
    icon: <Shield size={24} strokeWidth={1.5} />, 
    desc: "Professional file structuring, binding, and indexing for easy retrieval",
    img: "/banner/data.jpg",
  },
  { 
    slug: "mail-room-services", 
    title: "Mail Room Services", 
    icon: <Shield size={24} strokeWidth={1.5} />, 
    desc: "Centralized mail handling, scanning, and distribution for enterprises",
    img: "/banner/2.jpeg",
  },
  { 
    slug: "record-information-management", 
    title: "RIM Services", 
    icon: <Shield size={24} strokeWidth={1.5} />, 
    desc: "Comprehensive record and information lifecycle management solutions",
    img: "/banner/image10.jpg",
  },
];

export default function ServicesListing() {
  return (
    <div className="bg-gradient-to-b from-[#f8fbff] via-[#f1f6ff] to-[#f8fbff] pt-24 md:pt-25 pb-24 md:pb-24">

      <div className="max-w-full mx-auto px-6">

        {/* TOP LABEL */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[2px] w-12 bg-[#000033]"></div>
          <span className="text-[#000033] text-xs font-bold uppercase tracking-[0.3em]">
            Enterprise Solutions
          </span>
        </div>

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 mb-5 md:mb-10 items-start">

          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-light leading-tight">
              Core <span className="font-semibold">Services</span><br/>
              & <span className="text-[#000033] font-semibold">Infrastructure</span>
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-gray-600 border-l-4 border-[#000033] pl-6 leading-relaxed text-base md:text-base">
              We provide smarter safer and trusted storage, scanning, and document lifecycle solutions 
              designed for modern enterprises across industries
            </p>
          </div>

        </div>

{/* SUCCESS STORY */}
<section className="w-full py-12 md:py-16 bg-gradient-to-b from-[#f7faff] to-white">
  
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 leading-tight">
      Large Scale{" "}
      <span className="text-[#0a2a66] relative">
        Digitization Success
        <span className="absolute left-0 bottom-[-6px] w-full h-1 bg-blue-200 rounded-full"></span>
      </span>
    </h2>

    {/* MAIN WRAPPER */}
    <div className="w-full bg-white rounded-3xl shadow-xl border border-blue-100 p-5 sm:p-8 md:p-12 space-y-10">

      {/* INTRO (FULL CONTENT - UNCHANGED) */}
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        OMX Info Management Ltd's Multi-City Success Story In today's fast-paced business landscape, adapting to change is crucial for survival. OMX Info Management Ltd has risen to this challenge, expanding its digital transformation services from Delhi NCR to a pan-India scale. What started as a small digitization project has grown into a confident, large-scale operation, leveraging cutting-edge technology and expertise.
      </p>

      {/* SERVICES */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-5 sm:p-6 rounded-2xl border border-blue-100">
        
        <h3 className="font-semibold text-xl mb-4 text-[#0a2a66]">
          Core Services Delivered
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
          <div className="bg-yellow-100 p-3 rounded-lg shadow-sm border">
            Records Mangement
          </div>
          <div className="bg-red-100 p-3 rounded-lg shadow-sm border">
           Scanning & Digitization
          </div>
          <div className="bg-orange-100 p-3 rounded-lg shadow-sm border">
            DMS Solutions
          </div>
          <div className="bg-green-100 p-3 rounded-lg shadow-sm border">
            Secure Shredding
          </div>

          <div className="bg-purple-100 p-3 rounded-lg shadow-sm border">
            Data Entry
          </div>

          <div className="bg-pink-100 p-3 rounded-lg shadow-sm border">
            Data Security & Compliance
          </div>

          <div className="bg-orange-100 p-3 rounded-lg shadow-sm border">
            Infra Solutions
          </div>

          <div className="bg-black-100 p-3 rounded-lg shadow-sm border">
           Filing & Indexing
          </div>

          <div className="bg-red-100 p-3 rounded-lg shadow-sm border">
            Mail Room Services
          </div>
          <div className="bg-purple-100 p-3 rounded-lg shadow-sm border">
            Record Information Management (RIM) Services
          </div>
        </div>

      </div>

      {/* EXECUTION STRATEGY (FULL CONTENT PRESERVED) */}
      <div className="space-y-6">

        <h3 className="font-semibold text-xl text-[#0a2a66]">
          Execution Strategy
        </h3>

        <div className="space-y-6">

          {/* STEP 1 */}
          <div className="bg-blue-100 border-l-4 border-blue-500 p-5 rounded-xl shadow-sm hover:shadow-md transition w-full">
            <p className="font-semibold text-gray-800">
              Multi-City Deployment:
            </p>
            <p className="text-gray-600 mt-2">
              OMX's diversified operational strategy involved deploying specialized teams across key cities, including Faridabad in Delhi NCR apart from Noida & Jamalpur, Hyderabad, Pune, Indore, and Cochin. This approach enabled:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
              <li>On-site analysis and customized execution plans</li>
              <li>Minimal disruption to operations</li>
              <li>Efficient handling of location-specific challenges</li>
            </ul>
          </div>

          {/* STEP 2 */}
          <div className="bg-green-100 border-l-4 border-green-500 p-5 rounded-xl shadow-sm hover:shadow-md transition w-full">
            <p className="font-semibold text-gray-800">
              End-to-End Workflow:
            </p>
            <p className="text-gray-600 mt-2">
              A structured workflow ensured seamless digitization
            </p>
            <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
              <li>Collection and categorization of physical files</li>
              <li>High-resolution scanning with quality checks</li>
              <li>Indexing and metadata tagging</li>
            </ul>
          </div>

          {/* STEP 3 */}
          <div className="bg-purple-100 border-l-4 border-purple-500 p-5 rounded-xl shadow-sm hover:shadow-md transition w-full">
            <p className="font-semibold text-gray-800">
              Centralized System:
            </p>
            <p className="text-gray-600 mt-2">
              The digitized records were integrated into a unified platform, enabling
            </p>
            <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
              <li>Unified access across locations</li>
              <li>Real-time data retrieval</li>
              <li>Reduced physical storage and manual processes</li>
            </ul>
          </div>

        </div>
      </div>

      {/* RESULT (FULL CONTENT) */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 sm:p-6 rounded-2xl border border-green-200 w-full">
        <p className="font-semibold text-green-800 mb-2">
          Result:
        </p>
        <p className="text-gray-700">
          The transformation enabled clients to move from manual processes to a connected digital environment, significantly improving efficiency, accessibility, and data security.
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
  className="group relative rounded-2xl overflow-hidden h-[280px] flex flex-col justify-end shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
>

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-500"
    style={{ backgroundImage: `url(${s.img})` }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 p-5 text-white">

    <div className="mb-3 opacity-90 group-hover:scale-110 transition">
      {s.icon}
    </div>

    <h3 className="text-lg md:text-xl font-semibold mb-2 leading-snug">
      {s.title}
    </h3>

    <p className="text-sm text-gray-200 line-clamp-2">
      {s.desc}
    </p>

    <div className="flex items-center gap-2 text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 transition">
      <span>Explore</span>
      <ArrowRight size={14} />
    </div>

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
      <p className="text-base text-white/80 mb-5">
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