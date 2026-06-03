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
    title: "Securing Your Data Secrecy", 
    icon: <Trash2 size={24} strokeWidth={1.5} />, 
    desc: "Certified destruction of confidential documents ensuring compliance and data protection",
    img: "/industry/audit5.jpg",
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
    title: "Record Information Management Services", 
    icon: <Shield size={24} strokeWidth={1.5} />, 
    desc: "Comprehensive record and information lifecycle management solutions",
    img: "/banner/image10.jpg",
  },
];

export default function ServicesListing() {
  return (
    <div className="bg-gradient-to-b from-[#f8fbff] via-[#f1f6ff] to-[#f8fbff] pt-24 md:pt-25 pb-24 md:pb-24">

      <div className="w-full mx-auto px-0 sm:px-4 md:px-6 ">

        {/* TOP LABEL */}
<div className="flex items-center gap-4 mb-10 md:px-20">
  <div className="h-[2px] w-14 bg-[#1574AD] rounded-full"></div>

  <span className="text-[#1574AD] text-xs font-semibold uppercase tracking-[0.35em]">
    Enterprise Solutions
  </span>
</div>

{/* HEADER */}
<div className="grid lg:grid-cols-12 gap-10 mb-8 md:mb-4 items-start md:px-20">

  <div className="lg:col-span-8">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-slate-900">
      Core <span className="font-semibold">Services</span>
      <br />
      &{" "}
      <span className="text-[#1574AD] font-semibold">
        Infrastructure
      </span>
    </h1>
  </div>

  <div className="lg:col-span-4">
    <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-transparent"></div>

      <p className="relative z-10 text-slate-600 leading-relaxed text-[15px] md:text-base">
        We provide smarter, safer, and trusted storage, scanning,
        digitization, and document lifecycle solutions designed for
        modern enterprises across industries.
      </p>

    </div>
  </div>

</div>

{/* SUCCESS STORY */}
<section className="w-full py-8 md:py-8 bg-gradient-to-b from-[#f7faff] via-white to-[#f8fbff]">

  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

    {/* TITLE */}
    <div className="text-center mb-14">

      <p className="text-[#1574AD] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
        Case Study
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight text-slate-900">
        Large Scale{" "}
        <span className="font-semibold text-[#1574AD]">
          Digitization Success
        </span>
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-[#1574AD] to-blue-300 mx-auto mt-6 rounded-full"></div>

    </div>

    {/* MAIN CARD */}
    <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-white/90 backdrop-blur-xl p-5 sm:p-8 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>

      <div className="relative z-10 space-y-10">

        {/* INTRO */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-100 rounded-3xl p-6 md:p-8">

          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            OMX Info Management Ltd's Multi-City Success Story In today's
            fast-paced business landscape, adapting to change is crucial
            for survival. OMX Info Management Ltd has risen to this
            challenge, expanding its digital transformation services from
            Delhi NCR to a pan-India scale. What started as a small
            digitization project has grown into a confident, large-scale
            operation, leveraging cutting-edge technology and expertise.
          </p>

        </div>

        {/* SERVICES */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 md:p-8">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_40%)]"></div>

          <div className="relative z-10">

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#1574AD] font-semibold mb-2">
                  Solutions
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  Core Services Delivered
                </h3>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {[
                "Records Management",
                "Scanning & Digitization",
                "DMS Solutions",
                "Secure Shredding",
                "Data Entry",
                "Data Security & Compliance",
                "Infra Solutions",
                "Filing & Indexing",
                "Mail Room Services",
                "Record Information Management (RIM)",
              ].map((item, i) => (

                <div
                  key={i}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    bg-[#1574AD]
                    p-5
                    text-white
                    shadow-md
                    hover:shadow-[0_20px_40px_rgba(21,116,173,0.35)]
                    hover:-translate-y-1
                    transition-all
                    duration-500
                  "
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/20 to-transparent"></div>

                  <div className="relative z-10 flex items-center justify-between">

                    <span className="font-medium text-[15px] leading-relaxed">
                      {item}
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition duration-500">
                      →
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* EXECUTION STRATEGY */}
        <div>

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#1574AD] font-semibold mb-3">
              Workflow
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Execution Strategy
            </h3>
          </div>

          <div className="space-y-6">

            {[
              {
                title: "Multi-City Deployment",
                text:
                  "OMX's diversified operational strategy involved deploying specialized teams across key cities, including Faridabad in Delhi NCR apart from Noida & Jamalpur, Hyderabad, Pune, Indore, and Cochin.",
                points: [
                  "On-site analysis and customized execution plans",
                  "Minimal disruption to operations",
                  "Efficient handling of location-specific challenges",
                ],
              },

              {
                title: "End-to-End Workflow",
                text:
                  "A structured workflow ensured seamless digitization across every project phase.",
                points: [
                  "Collection and categorization of physical files",
                  "High-resolution scanning with quality checks",
                  "Indexing and metadata tagging",
                ],
              },

              {
                title: "Centralized System",
                text:
                  "The digitized records were integrated into a unified platform enabling operational visibility.",
                points: [
                  "Unified access across locations",
                  "Real-time data retrieval",
                  "Reduced physical storage and manual processes",
                ],
              },
            ].map((step, i) => (

              <div
                key={i}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-blue-100
                  bg-white/80
                  backdrop-blur-md
                  p-6 md:p-8
                  shadow-sm
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  hover:-translate-y-1
                  transition-all
                  duration-500
                "
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 to-transparent"></div>

                <div className="relative z-10">

                  <div className="flex items-center gap-4 mb-5">

                    <div className="w-12 h-12 rounded-2xl bg-[#1574AD] text-white flex items-center justify-center font-semibold shadow-lg">
                      0{i + 1}
                    </div>

                    <h4 className="text-xl md:text-2xl font-semibold text-slate-900">
                      {step.title}
                    </h4>

                  </div>

                  <p className="text-slate-600 leading-relaxed mb-5">
                    {step.text}
                  </p>

                  <ul className="space-y-3">

                    {step.points.map((point, idx) => (

                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-600"
                      >

                        <div className="w-2 h-2 rounded-full bg-[#1574AD] mt-2"></div>

                        <span>{point}</span>

                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* RESULT */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-[#1574AD] to-[#0d5d91] p-7 md:p-10 text-white shadow-[0_20px_60px_rgba(21,116,173,0.25)]">

          <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <p className="uppercase tracking-[0.3em] text-xs font-semibold mb-3 text-blue-100">
              Final Outcome
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Transformation Result
            </h3>

            <p className="text-blue-50 leading-relaxed text-base md:text-lg max-w-4xl">
              The transformation enabled clients to move from manual
              processes to a connected digital environment, significantly
              improving efficiency, accessibility, and data security.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* CARDS GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4">

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
  className="group relative rounded-2xl overflow-hidden min-h-[320px] h-full flex flex-col justify-end shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-500"
    style={{ backgroundImage: `url(${s.img})` }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#08519c]/80 via-[#08519c]/0 to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 p-5 text-white">

    <div className="mb-3 opacity-90 group-hover:scale-110 transition">
      {s.icon}
    </div>

    <h3 className="text-lg md:text-xl font-semibold mb-2 leading-snug">
      {s.title}
    </h3>

    <p className="text-sm text-white line-clamp-2">
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