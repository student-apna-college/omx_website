import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Database, Zap, Trash2, Shield,
  CheckCircle2,
  FileScanIcon,
  MonitorCloud
} from 'lucide-react';
import { ShieldCheck, Clock, Truck, BadgeCheck,Building2, FileText, Mail} from "lucide-react";

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
    imageSrc: "/banner/image6.jpg",
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
    title: "Certified Secure Destruction",
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
  title: "Accurate Data Entry Services",
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
  imageSrc: "/banner/data.jpg",
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
    <div className="bg-gradient-to-b from-[#f8fbff] via-white to-[#f4f8ff] text-[#1a1a1a]">

      {/* HERO */}
      <section className="relative w-full bg-black">

        <div className="relative w-full h-[55vh] md:h-[75vh] min-h-[400px] overflow-hidden flex items-center justify-center bg-black">

          <Image
            src={service.imageSrc}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-100 md:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full">

            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight max-w-[700px]">
              {service.title}
            </h1>

            <p className="text-gray-300 mt-4 max-w-xl text-sm md:text-lg">
              {service.tagline}
            </p>

          </div>
        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">

          <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12 text-[#0f172a]">
            Key Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {service.features.map((f, i) => (
              <div key={i} className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#1e3a8a] mt-1 group-hover:scale-110 transition" />
                    <span className="font-medium text-gray-700 text-sm md:text-base">
                      {f}
                    </span>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-r from-[#f8fbff] via-white to-[#f3f7ff] border-y">
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 md:grid-cols-6 gap-6 px-6">

          {[ 
            { icon: ShieldCheck, title: "Safer and Trusted Storage", color: "from-blue-200/50 to-blue-500" },
            { icon: Clock, title: "Efficient and Timely Retrieval", color: "from-purple-200/50 to-purple-500" },
            { icon: Truck, title: "100% TAT Adherence Guaranteed", color: "from-green-200/50 to-green-500" },
            { icon: BadgeCheck, title: "Eco-Friendly Certified Shradding", color: "from-orange-200/50 to-orange-500" },
            { icon: MonitorCloud, title: "Robust and Secure DMS Software", color: "from-red-200/50 to-red-500" },
            { icon: FileScanIcon, title: "High Resolution Scanning", color: "from-yellow-200/50 to-yellow-500" },

          ].map((item, i) => (
            <div key={i} className={`relative p-[1px] rounded-2xl bg-gradient-to-br ${item.color} group`}>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300">
                <item.icon className="mx-auto mb-4 text-[#0f172a] group-hover:scale-110 transition duration-300" size={36} />
                <p className="font-semibold text-gray-700 group-hover:text-[#0f172a] transition">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <Link
          href="/services"
          className="inline-block px-6 py-3 rounded-full bg-[#0f172a] text-white font-semibold hover:bg-[#1e3a8a] transition"
        >
          View All Services →
        </Link>
      </section>

    </div>
  );
}