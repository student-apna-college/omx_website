"use client";
import Link from 'next/link';
import { Shield, Zap, Database, Trash2, HardDrive, Settings, ArrowRight } from 'lucide-react';

const services = [
  { 
    slug: "records-management", 
    title: "Physical Records Management", 
    icon: <Database size={24} strokeWidth={1.5} />, 
    id: "01",
    desc: "End-to-end lifecycle management of physical documents with RSSQL-enabled tracking and secure vaulting."
  },
  { 
    slug: "scanning-digitization", 
    title: "Digital Transformation & Scanning", 
    icon: <Zap size={24} strokeWidth={1.5} />, 
    id: "02",
    desc: "High-throughput digitization services using industrial-grade scanners and automated indexing."
  },
  { 
    slug: "secure-shredding", 
    title: "Secure Data Destruction", 
    icon: <Trash2 size={24} strokeWidth={1.5} />, 
    id: "03",
    desc: "Compliance-driven shredding services for semi-active and inactive records with destruction certification."
  },
  { 
    slug: "media-storage", 
    title: "Climate-Controlled Media Vaulting", 
    icon: <HardDrive size={24} strokeWidth={1.5} />, 
    id: "04",
    desc: "Specially engineered environments for the storage of magnetic tapes, legal papers, and irreplaceable assets."
  },
  { 
    slug: "in-house-solutions", 
    title: "Turn-key In-House Solutions", 
    icon: <Settings size={24} strokeWidth={1.5} />, 
    id: "05",
    desc: "Consultancy and infrastructure setup for on-site record management centers tailored to corporate protocols."
  },
  { 
    slug: "data-security", 
    title: "DMS & Cloud Infrastructure", 
    icon: <Shield size={24} strokeWidth={1.5} />, 
    id: "06",
    desc: "Robust Document Management System (DMS) providing cloud-based access and military-grade security."
  },
];

export default function ServicesListing() {
  return (
    <div className="bg-[#fcfcfc] text-[#1a1a1a] pt-40 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Professional Breadcrumb/Meta */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-[tomato]"></div>
          <span className="text-[tomato] text-xs font-bold uppercase tracking-[0.3em]">
            Enterprise Information Assets
          </span>
        </div>

        {/* Sharp Typography Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-24 items-start">
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-[0.95]">
              Core <span className="font-medium">Infrastructure</span><br/>
              & <span className="italic text-[tomato]">Information</span> Services
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pt-4">
            <p className="text-lg text-gray-500 border-l border-gray-200 pl-8 leading-relaxed">
              OMX Info Management provides the technical framework for the storage, protection, 
              and retrieval of sensitive corporate intelligence across the Indian subcontinent.
            </p>
          </div>
        </div>

        {/* Serious Grid: Sharp Borders, No Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {services.map((s) => (
            <Link 
              key={s.slug} 
              href={`/services/${s.slug}`} 
              className="group relative p-12 border-r border-b border-gray-200 hover:bg-white transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-16">
                <div className="text-gray-400 group-hover:text-[tomato] transition-colors duration-300">
                  {s.icon}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4 tracking-tight leading-tight">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-[280px]">
                  {s.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <span>View Technical Specs</span>
                <ArrowRight size={14} className="text-[tomato]" />
              </div>
            </Link>
          ))}

          {/* Corporate CTA Block */}
          <div className="p-12 border-r border-b border-gray-200 bg-[#1a1a1a] text-white flex flex-col justify-between">
            <h3 className="text-3xl font-light leading-snug">
              Request <br/> <span className="text-[tomato]">Institutional</span> <br/> Audit
            </h3>
            <div className="mt-20">
              <p className="text-sm text-gray-400 mb-6">
                For organizations exceeding 100,000 document units, we provide specialized site surveys.
              </p>
              <Link 
                href="/contact" 
                className="inline-block border border-gray-700 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-[tomato] hover:text-[tomato] transition-colors"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}