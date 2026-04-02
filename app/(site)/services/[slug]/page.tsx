import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Database, Zap, Trash2, HardDrive, Settings, 
  Shield, CheckCircle2, ArrowRight, Info 
} from 'lucide-react';
import { ShieldCheck, Clock, Truck, BadgeCheck } from "lucide-react";

export async function generateStaticParams() {
  const slugs = [
    'records-management',
    'scanning-digitization',
    'secure-shredding',
    'media-storage',
    'in-house-solutions',
    'data-security'
  ];

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

const serviceContent: any = {
  'records-management': {
    title: "Physical Records Management",
    id: "SRV-001",
    tagline: "Industrial-grade vaulting for high-frequency corporate assets.",
    icon: <Database size={32} strokeWidth={1.5} />,
    features: [
      "24-Hour Retrieval Guarantee",
      "RSSQL Tracking System",
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
    imageSrc: "/banner/placeholder_01.png",
    metaTitle: "Physical Records Management | OMX Info Management",
    metaDesc: "Secure off-site document storage and physical records management with Tier 4 security and RSSQL tracking."
  },

  // 🔥 SAME DATA (NO CHANGE)
  'scanning-digitization': {
    title: "Digitization & Transformation",
    id: "SRV-002",
    tagline: "High-throughput data conversion for institutional memory.",
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
    imageSrc: "/banner/placeholder_02.png",
    metaTitle: "Scanning & Digitization Services | OMX Info Management",
    metaDesc: "Transform physical documents into searchable digital assets with industrial-grade OCR scanning services."
  },

  'secure-shredding': {
    title: "Certified Secure Destruction",
    id: "SRV-003",
    tagline: "Compliance-driven purging of semi-active and inactive records.",
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
    imageSrc: "/banner/placeholder_03.png",
    metaTitle: "Secure Data Destruction & Shredding | OMX Info Management",
    metaDesc: "Certified document destruction services ensuring complete data privacy and legal compliance."
  },

  'media-storage': {
    title: "Specialized Media Vaulting",
    id: "SRV-004",
    tagline: "Climate-engineered environments for irreplaceable assets.",
    icon: <HardDrive size={32} strokeWidth={1.5} />,
    features: [
      "HDD Protection",
      "Fire-Rated Secure Vault",
      "Dust-Free Controlled Environment",
      "Humidity & Temperature Control",
      "Climate Controlled Storage",
      "24/7 CCTV Monitoring",
      "Barcode Based Media Tracking",
      "Disaster Recovery Safe Storage",
      "Restricted Biometric Access",
      "Shock-Proof Storage Racks",
      "Offsite Backup Protection",
      "High Security Vault Facility"
    ],
    imageSrc: "/banner/placeholder_04.png",
    metaTitle: "Climate Controlled Media Storage | OMX Info Management",
    metaDesc: "Specialized vaulting for magnetic tapes, hard drives, and sensitive media assets with fire-rated protection."
  },

  'in-house-solutions': {
    title: "Turn-key In-House Solutions",
    id: "SRV-005",
    tagline: "Bespoke on-site infrastructure and process management.",
    icon: <Settings size={32} strokeWidth={1.5} />,
    features: ["On-site Facility Setup", "Manpower Outsourcing", "Process Standardization", "Technology Implementation"],
    imageSrc: "/banner/placeholder_05.png",
    metaTitle: "In-House Records Management Solutions | OMX Info Management",
    metaDesc: "Custom on-site records management consultancy and manpower solutions for large-scale enterprises."
  },

  'data-security': {
    title: "DMS & Cloud Infrastructure",
    id: "SRV-006",
    tagline: "Advanced cybersecurity frameworks for digital asset protection.",
    icon: <Shield size={32} strokeWidth={1.5} />,
    features: [
      "End-to-End Encryption",
      "Multi-Factor Authentication",
      "Automated Cloud Backups",
      "Disaster Recovery Planning",
      "Secure Data Access Control",
      "Role-Based Permissions",
      "Real-Time Data Sync",
      "Encrypted File Transfer",
      "Audit Log Monitoring",
      "High Availability Servers",
      "Data Loss Prevention",
      "24/7 System Monitoring"
    ],
    imageSrc: "/banner/placeholder_06.png",
    metaTitle: "Cloud DMS & Data Security | OMX Info Management",
    metaDesc: "Secure cloud-based document management systems with military-grade encryption and automated backups."
  }
};

export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params;
  const service = serviceContent[slug];
  
  return {
    title: service?.metaTitle || "Service | OMX Info Management",
    description: service?.metaDesc || "OMX Info Management technical services.",
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceContent[slug];

  if (!service) notFound();

  return (
    <div className="bg-gradient-to-b from-[#f8fbff] to-white text-[#1a1a1a]">

      {/* HERO */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden">
        <Image src={service.imageSrc} alt={service.title} fill className="object-cover scale-105"/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full">
            <h1 className="text-5xl md:text-8xl text-white font-light leading-tight">
              {service.title}
            </h1>
            <p className="text-gray-300 mt-6 max-w-xl text-lg">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-6">

          {service.features.map((f: string, i: number) => (
            <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <CheckCircle2 className="text-[rgb(0,104,83)]"/>
              <span className="font-semibold text-gray-700">{f}</span>
            </div>
          ))}

        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white border-y">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-6 px-6">
          {[ShieldCheck, Clock, Truck, BadgeCheck].map((Icon, i) => (
            <div key={i} className="bg-[#f8fbff] p-8 rounded-xl text-center hover:shadow-lg transition">
              <Icon className="mx-auto mb-4 text-[rgb(0,104,83)]" size={32}/>
              <p className="font-bold text-xl">Enterprise Grade</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <Link href="/services" className="text-[rgb(0,104,83)] font-bold uppercase tracking-widest hover:underline">
          View All Services →
        </Link>
      </section>

    </div>
  );
}