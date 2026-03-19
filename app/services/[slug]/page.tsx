import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Database, Zap, Trash2, HardDrive, Settings, 
  Shield, CheckCircle2, ArrowRight, Info 
} from 'lucide-react';

// Technical Content Mapping
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
    features: ["24-Hour Retrieval Guarantee", "RSSQL Tracking System", "Biometric Access Control", "Pest & Moisture Control"],
    imageSrc: "/banner/placeholder_01.png",
    metaTitle: "Physical Records Management | OMX Info Management",
    metaDesc: "Secure off-site document storage and physical records management with Tier 4 security and RSSQL tracking."
  },
  'scanning-digitization': {
    title: "Digitization & Transformation",
    id: "SRV-002",
    tagline: "High-throughput data conversion for institutional memory.",
    icon: <Zap size={32} strokeWidth={1.5} />,
    features: ["Industrial Batch Scanning", "Automated Meta-Tagging", "OCR Searchability", "Cloud/On-Prem Integration"],
    imageSrc: "/banner/placeholder_02.png",
    metaTitle: "Scanning & Digitization Services | OMX Info Management",
    metaDesc: "Transform physical documents into searchable digital assets with industrial-grade OCR scanning services."
  },
  'secure-shredding': {
    title: "Certified Secure Destruction",
    id: "SRV-003",
    tagline: "Compliance-driven purging of semi-active and inactive records.",
    icon: <Trash2 size={32} strokeWidth={1.5} />,
    features: ["Destruction Certification", "Eco-friendly Purging", "On-site Shredding Logistics", "Legal Compliance Audit"],
    imageSrc: "/banner/placeholder_03.png",
    metaTitle: "Secure Data Destruction & Shredding | OMX Info Management",
    metaDesc: "Certified document destruction services ensuring complete data privacy and legal compliance."
  },
  'media-storage': {
    title: "Specialized Media Vaulting",
    id: "SRV-004",
    tagline: "Climate-engineered environments for irreplaceable assets.",
    icon: <HardDrive size={32} strokeWidth={1.5} />,
    features: ["Magnetic Tape Protection", "Fire-Rated Vaulting", "Dust-Free Environment", "Humidity Level Control"],
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
    features: ["End-to-End Encryption", "Multi-factor Authentication", "Automated Cloud Backups", "Disaster Recovery Planning"],
    imageSrc: "/banner/placeholder_06.png",
    metaTitle: "Cloud DMS & Data Security | OMX Info Management",
    metaDesc: "Secure cloud-based document management systems with military-grade encryption and automated backups."
  }
};

// DYNAMIC SEO METADATA
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
    <div className="bg-white text-[#1a1a1a]">
      
      {/* 1. FULL WIDTH BANNER HEADER */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden bg-gray-100">
        <Image 
          src={service.imageSrc} 
          alt={service.title} 
          fill 
          className="object-cover transition-transform duration-[2000ms] scale-105"
          priority
        />
        {/* Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content Over Image */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center">
          <div className="max-w-[1440px] mx-auto w-full px-8 md:px-20">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-[tomato]"></div>
                  <span className="text-[tomato] text-[10px] font-black uppercase tracking-[0.5em]">
                    Technical Specification // {service.id}
                  </span>
                </div>
                <h1 className="text-6xl md:text-[110px] font-light tracking-tighter leading-[0.85] m-0 text-white">
                  {service.title.split(' ')[0]} <br/>
                  <span className="font-medium italic text-[tomato]">
                    {service.title.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-6">
                <div className="p-8 border-l border-white/30 backdrop-blur-sm bg-black/10">
                  <p className="text-xl text-gray-200 font-medium leading-snug">
                    {service.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL SPECS & FEATURES */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-20">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-[tomato]">
                <Info size={20} />
                <h3 className="text-xs font-black uppercase tracking-[0.3em]">Operational Overview</h3>
              </div>
              <p className="text-2xl text-gray-600 leading-relaxed font-light">
                We utilize world-leading storage technology and ISO-certified protocols to manage 
                all record formats. Our process helps clients meet strict company compliance 
                and risk management obligations efficiently.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-gray-100">
              {service.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-4 group">
                  <CheckCircle2 size={18} className="text-[tomato]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Sidebar Card */}
          <div className="lg:col-span-5 bg-[#1a1a1a] p-12 text-white relative overflow-hidden flex flex-col justify-between h-fit min-h-[500px]">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <Shield size={200} strokeWidth={1} />
             </div>
             
             <div className="relative z-10 space-y-8">
               <h4 className="text-3xl font-light leading-tight italic">
                 Request <br/> <span className="text-[tomato]">Institutional</span> <br/> Service Quote
               </h4>
               <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                 OMX consultants provide bespoke site audits and transition strategies for enterprises shifting to high-security record ecosystems.
               </p>
             </div>

             <div className="relative z-10 space-y-6">
               <Link href="/contact" className="flex items-center justify-between w-full border border-gray-700 p-6 hover:border-[tomato] transition-all group">
                 <span className="text-xs font-bold uppercase tracking-[0.3em]">Initialize Inquiry</span>
                 <ArrowRight size={20} className="text-[tomato] group-hover:translate-x-2 transition-transform" />
               </Link>
               <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center italic">
                 Confidential Institutional Handling Guaranteed
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE STRIP */}
      <section className="border-y border-gray-100 py-16">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-[#1a1a1a]">
           <div>
             <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Security</p>
             <p className="text-3xl font-bold tracking-tighter">Tier 4 Compliant</p>
           </div>
           <div>
             <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Uptime</p>
             <p className="text-3xl font-bold tracking-tighter">99.9% Retrieval</p>
           </div>
           <div>
             <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Logistics</p>
             <p className="text-3xl font-bold tracking-tighter">Own Fleet</p>
           </div>
           <div>
             <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Certification</p>
             <p className="text-3xl font-bold tracking-tighter">ISO 9001:2015</p>
           </div>
        </div>
      </section>

      {/* 4. CROSS-NAVIGATION */}
      <section className="py-24 text-center">
        <Link href="/services" className="text-xs font-black uppercase tracking-[0.5em] text-gray-300 hover:text-[tomato] transition-colors">
          View All Core Infrastructure Services
        </Link>
      </section>
    </div>
  );
}