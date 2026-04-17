import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Database, Zap, Trash2, Shield,
  CheckCircle2
} from 'lucide-react';
import { ShieldCheck, Clock, Truck, BadgeCheck } from "lucide-react";

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
    'secure-shredding',
    'media-storage',
    'data-security'
  ];

  return slugs.map((slug) => ({ slug }));
}

// REMOVE "any"
const serviceContent: Record<string, ServiceType> = {
  'records-management': {
    title: "Physical Records Management",
    id: "SRV-001",
    tagline: "Industrial-grade vaulting for high-frequency corporate assets.",
    icon: <Database size={32} strokeWidth={1.5} />,
    features: [
      "Biometric Access Control",
      "Pest & Moisture Control",
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

  'data-security': {
    title: "DMS & Cloud Infrastructure",
    id: "SRV-006",
    tagline: "Advanced cybersecurity frameworks for digital asset protection",
    icon: <Shield size={32} strokeWidth={1.5} />,
    features: [
      "End-to-End Encryption",
      "Multi-Factor Authentication",
      "Disaster Recovery Planning",
      "Secure Data Access Control",
      "Role-Based Permissions",
      "Real-Time Data Sync",
      "Encrypted File Transfer",
      "Audit Log Monitoring",
      "24/7 System Monitoring"
    ],
    imageSrc: "/banner/data.jpg",
    metaTitle: "Cloud DMS & Data Security | OMX Info Management",
    metaDesc: "Secure cloud-based document management systems with military-grade encryption and automated backups"
  }
};

// FIXED METADATA (no await)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = serviceContent[slug];

  return {
    title: service?.metaTitle || "Service | OMX Info Management",
    description: service?.metaDesc || "OMX Info Management technical services.",
  };
}

// FIXED PARAM TYPE
export default async function ServicePage({ params }: { params: { slug: string } }) {

  const { slug } = params;
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
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">

          {[ 
            { icon: ShieldCheck, title: "Safer and Fastest Infrastructure", color: "from-blue-200/50 to-blue-500" },
            { icon: Clock, title: "Fast Processing", color: "from-purple-200/50 to-purple-500" },
            { icon: Truck, title: "Quick Delivery", color: "from-green-200/50 to-green-500" },
            { icon: BadgeCheck, title: "Certified Quality", color: "from-orange-200/50 to-orange-500" },
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