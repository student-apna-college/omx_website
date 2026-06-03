import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Database, Zap, Trash2, Shield,
  CheckCircle2,
} from 'lucide-react';
import {Building2, FileText, Mail} from "lucide-react";
import CardService from "@/components/Service/CardServices";

type ServiceType = {
  title: string;
  id: string;
  tagline: string;
  icon: React.ReactNode;
  features: string[];
  imageSrc: string;
  metaTitle: string;
  metaDesc: string;
};

// STATIC PARAMS (same logic)
export async function generateStaticParams() {
  const slugs = [
    'records-management',
    'scanning-digitization',
    'Digital-Document-Storage-DMS-Services',
    'secure-shredding',
    'data-entry',
    'data-security',
    'Record-Management-Infra-Solution',
    'Filling-Binding-Indexing',
    'Mail-Room-Services',
    'Record-Information-Management',
    'Mail-Room-Services',
  ];

  return slugs.map((slug) => ({ slug }));
}


const serviceContent: Record<string, ServiceType> = {
  'records-management': {
    title: "Physical Records Management",    
    id: "SRV-001",
    tagline: "Industrial-grade vaulting for high-frequency corporate assets.",
    icon: <Database size={32} strokeWidth={1.5} />,
    features: [
      "Biometric Access Control",
      "Pest & Humidity Control",
      "Fire Safety Protection",
      "Barcode File Tracking",
      "Secure Document Shredding",
      "Climate Controlled Storage",
      "24/7 CCTV Surveillance",
      "Fast File Indexing System",
      "Pickup & Delivery Service"
    ],
    imageSrc: "/banner/image10.jpg",
    metaTitle: "Physical Records Management | OMX Info Management",
    metaDesc: "Secure off-site document storage and physical records management with Tier 4 security and RSSQL tracking"
  },

  'scanning-digitization': {
    title: "Digitization & Transformation",
    id: "SRV-002",
    tagline: "High-throughput data conversion for institutional memory",
    icon: <Zap size={32} strokeWidth={1.5} />,
    features: [
      "Industrial Batch Scanning",
      "OCR Searchability",
      "Cloud / On-Premise Integration",
      "High-Speed Document Digitization",
      "Barcode Based File Indexing",
      "Bulk File Processing",
      "Secure Data Encryption",
      "Multi-Format Export (PDF, TIFF, JPEG)",
      "Quality Checked Scanning",
      "Document Version Control"
    ],
    imageSrc: "/images/1.jpeg",
    metaTitle: "Scanning & Digitization Services | OMX Info Management",
    metaDesc: "Transform physical documents into searchable digital assets with industrial-grade OCR scanning services"
  },



  'digital-document-storage-dms-services': {
  title: "Digital Document Storage DMS Services",
  id: "SRV-002",
  tagline: "Smart, Secure & Scalable Document Management System",
  icon: <Zap size={32} strokeWidth={1.5} />,
  features: [
    "Centralized Document Repository",
    "Advanced Search & Retrieval (OCR Enabled)",
    "Role-Based Access Control",
    "Secure Cloud / On-Premise Storage",
    "Document Version Control & History Tracking",
    "Automated Workflow & Approval System",
    "Audit Trail & Activity Monitoring",
    "Data Encryption & Backup Management",
    "Multi-Device Access (Web & Mobile)",
    "Customization Service According to Client Requirement"
  ],
  imageSrc: "/banner/4.jpeg",
  metaTitle: "Digital Document Management System (DMS) Services | OMX Info Management",
  metaDesc: "Streamline, store, and manage your business documents securely with our advanced DMS solutions featuring access control, workflow automation, and cloud integration."
 },



  'secure-shredding': {
    title: "Securing Your Data Secrecy",
    id: "SRV-003",
    tagline: "Compliance-driven purging of semi-active and inactive records",
    icon: <Trash2 size={32} strokeWidth={1.5} />,
    features: [
      "Certified Document Destruction",
      "Eco-Friendly Recycling Process",
      "On-Site & Off-Site Shredding",
      "Legal & Compliance Approved",
      "Secure File Tracking Before Destruction",
      "Barcode Verified Purging",
      "Confidential Data Protection",
      "Bulk Record Disposal",
      "Authorized Audit Trail",
      "Scheduled Destruction Service",
      "Certificate of Destruction Provided",
      "Client Approved Destruction",
    ],
    imageSrc: "/banner/image2.jpg",
    metaTitle: "Secure Data Destruction & Shredding | OMX Info Management",
    metaDesc: "Certified document destruction services ensuring complete data privacy and legal compliance"
  },

  'data-entry': {
  title: "Data Entry Services",
  id: "SRV-004",
  tagline: "Efficient and error-free digitization of business records",
  icon: <Database size={32} strokeWidth={1.5} />,
  features: [
    "High Accuracy Data Entry",
    "Data Validation & Quality Check",
    "Custom Data Formats (Excel, CSV)",
    "Fast Turnaround Time",
    "Client-Specific Data Structuring Data Entry",
  ],
  imageSrc: "/banner/6.jpg",
  metaTitle: "Professional Data Entry Services | OMX Info Management",
  metaDesc: "Reliable and secure data entry solutions for accurate digital transformation of your business records"
},

'data-security-compliance-solutions': {
  title: "Data Security & Compliance Solutions",
  id: "SRV-010",
  tagline: "Protect your business data with advanced security frameworks and ensure regulatory compliance.",
  icon: <Shield size={32} strokeWidth={1.5} />,
  features: [
    "End-to-End Data Encryption",
    "Multi-Factor Authentication (MFA)",
    "Secure Access Control & Identity Management",
    "Regulatory Compliance (ISO, GDPR, etc.)",
    "Disaster Recovery & Business Continuity Planning",
    "Real-Time Threat Monitoring",
    "Audit Logs & Activity Tracking",
    "Secure Data Backup & Restoration",
    "Encrypted File Transfers",
    "24/7 Security Monitoring & Alerts"
  ],
  imageSrc: "/banner/7.jpg",
  metaTitle: "Data Security & Compliance Services | OMX Info Management",
  metaDesc: "Ensure complete protection of your business data with advanced cybersecurity solutions, compliance frameworks, and 24/7 monitoring."
 },


  'record-management-infra-solution': {
  title: "Record Management Infrastructure Solution",
  id: "SRV-006",
  tagline: "End-to-end setup of secure and scalable record management infrastructure.",
  icon: <Building2 size={32} strokeWidth={1.5} />,
  features: [
    "On-site Record Storage Infrastructure Setup",
    "Racking & Shelving System Design",
    "Barcode & File Tracking Implementation",
    "Document Storage Layout Planning",
    "Fire Safety & Climate Control Systems",
    "Secure Access Control Implementation",
    "Record Lifecycle Management Setup",
    "Integration with DMS Software",
    "Compliance & Audit-Ready Infrastructure",
    "Warehouse Optimization & Space Planning"
  ],
  imageSrc: "/banner/5.jpg",
  metaTitle: "Record Management Infrastructure Setup Services | OMX Info Management",
  metaDesc: "Design and deploy safer, compliant, and scalable record storage infrastructure with advanced tracking, safety systems, and optimized warehouse planning."
 },



 'filling-binding-indexing': {
  title: "Filing, Binding & Indexing Services",
  id: "SRV-007",
  tagline: "Structured document organization for easy storage, retrieval, and long-term preservation.",
  icon: <FileText size={32} strokeWidth={1.5} />,
  features: [
    "Systematic File Arrangement & Categorization",
    "Professional Document Binding (Hard & Soft)",
    "Custom File Labeling & Tagging",
    "Barcode & Indexing System Implementation",
    "Easy Retrieval & Reference Management",
    "Bulk File Sorting & Organization",
    "Document Repair & Restoration",
    "Standardized Record Structuring",
    "Department-wise File Segregation",
    "Physical to Digital Index Mapping"
  ],
  imageSrc: "/banner/data.jpg",
  metaTitle: "Filing, Binding & Indexing Services | OMX Info Management",
  metaDesc: "Organize, bind, and index your documents efficiently with structured filing systems for quick retrieval and long-term preservation."
 },


  'mail-room-services': {
  title: "Mail Room Management Services",
  id: "SRV-008",
  tagline: "Efficient handling, sorting, and distribution of inbound and outbound corporate mail.",
  icon: <Mail size={32} strokeWidth={1.5} />,
  features: [
    "Inbound & Outbound Mail Handling",
    "Mail Sorting & Department-wise Distribution",
    "Courier & Dispatch Management",
    "Digital Mailroom (Scan & Email Documents)",
    "Tracking & Delivery Confirmation System",
    "Confidential Mail Handling & Security",
    "Bulk Mail Processing",
    "Vendor & Courier Coordination",
    "Centralized Mailroom Operations",
    "Record Keeping & Audit Support"
  ],
  imageSrc: "/banner/2.jpeg",
  metaTitle: "Mail Room Management Services | OMX Info Management",
  metaDesc: "Streamline your business communication with efficient mailroom management services including sorting, dispatch, tracking, and secure handling."
 },

  'record-information-management': {
  title: "Record & Information Management",
  id: "SRV-009",
  tagline: "Comprehensive lifecycle management of physical and digital records for secure storage, access, and compliance.",
  icon: <Database size={32} strokeWidth={1.5} />,
  features: [
    "End-to-End Record Lifecycle Management",
    "Secure Physical & Digital Record Storage",
    "Document Classification & Categorization",
    "Quick Retrieval & Delivery Services",
    "Barcode & Tracking System Integration",
    "Compliance & Regulatory Support",
    "Audit Trail & Record Monitoring",
    "Digitization & DMS Integration",
    "Centralized Record Control System"
  ],
  imageSrc: "/banner/image10.jpg",
  metaTitle: "Record & Information Management Services | OMX Info Management",
  metaDesc: "Manage, store, and control your business records efficiently with our comprehensive record and information management solutions ensuring compliance and quick access."
 }
 };

// FIXED METADATA (no await)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await  params;
  const service = serviceContent[slug];

  return {
    title: service?.metaTitle || "Service | OMX Info Management",
    description: service?.metaDesc || "OMX Info Management technical services.",
  };
 }

//  FIXED PARAM TYPE
export default async function ServicePage({ params }: { params: { slug: string } }) {

  const { slug } = await params;
  const service = serviceContent[slug];

  if (!service) notFound();

  return (
    <div className="bg-gradient-to-b from-[#f8fbff] via-white to-[#f4f8ff] text-[#1a1a1a] mt-15 sm:mt-5 md:mt-5 lg:mt-5">

     {/* ================= PREMIUM HERO ================= */}
<section className="relative overflow-hidden">

  <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[80vh] lg:h-[95vh] min-h-[420px]">

    {/* IMAGE */}
    <Image
      src={service.imageSrc}
      alt={service.title}
      fill
      priority
      sizes="
        (max-width: 640px) 100vw,
        (max-width: 768px) 100vw,
        (max-width: 1024px) 100vw,
        100vw
      "
      className="
        object-cover
        object-[center_18%]
        sm:object-[center_15%]
        md:object-center
        lg:object-center
        scale-105
      "
    />

    {/* PREMIUM OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#021B3A]/90 via-[#021B3A]/55  z-10" />

    {/* LIGHT GLOW */}
    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full z-10" />

    {/* CONTENT */}
    <div className="absolute inset-0 z-20 flex mt-25">

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full">

        <div className="max-w-3xl">

          {/* TOP LABEL */}
          <div className="flex items-center gap-4 mb-6">

            <div className="h-[2px] w-14 bg-white"></div>

            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-white/80">
              Enterprise Services
            </span>

          </div>

          {/* TITLE */}
          <h1 className="
            text-white
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-4xl
            font-light
            leading-tight
            mb-6
          ">
            {service.title}
          </h1>

          {/* TAGLINE */}
          <p className="
            text-white/85
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
            max-w-2xl
          ">
            {service.tagline}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                bg-white
                text-[#021B3A]
                px-7
                py-3
                rounded-full
                font-semibold
                shadow-xl
                hover:scale-105
                transition-all
                duration-500
              "
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="
                inline-flex
                items-center
                gap-2
                border
                border-white/40
                text-white
                px-7
                py-3
                rounded-full
                font-semibold
                hover:bg-white
                hover:text-[#021B3A]
                transition-all
                duration-500
              "
            >
              Explore Services
            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* FEATURES */}
      <section className="py-10 md:py-14">
  <div className="max-w-[1200px] mx-auto px-6">

    <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8 text-[#0f172a]">
      Key Features
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {service.features.map((f, i) => (
        <div key={i} className="group relative p-[1px]">
          
          {/* BLUE CARD */}
          <div
              className="bg-[#1574AD] rounded-2xl p-6 shadow-sm 
              hover:shadow-2xl hover:scale-105 
              transition-all duration-300 ease-in-out"
  >
  <div className="flex items-start gap-3">
    
    <CheckCircle2 className="text-white mt-1 group-hover:scale-110 transition duration-300" />

    <span className="font-medium text-white text-base md:text-base">
      {f}
    </span>

  </div>
</div>
        </div>
      ))}

    </div>
  </div>
</section>

      
      {/* card section  */}
      <CardService></CardService>

      {/* CTA */}
      <section className="py-20 text-center">
        <Link
          href="/services"
          className="inline-block px-6 py-3 rounded-full bg-[#1574AD] text-white font-semibold hover:bg-[#1e3a8a] transition"
        >
          View All Services →
        </Link>
      </section>

    </div>
  );
 }