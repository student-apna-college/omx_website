"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Database,
  Zap,
  Trash2,
  HardDrive,
  Shield,
  Menu,
  X,
  ArrowRight,
  ContactRound,
  MapPin
} from 'lucide-react';
import Image from 'next/image';

const serviceLinks = [
  { slug: "records-management", title: "Records Management", icon: <Database size={16} /> },
  { slug: "scanning-digitization", title: "Scanning & Digitization", icon: <Zap size={16} /> },
  { slug: "secure-shredding", title: "Secure Shredding", icon: <Trash2 size={16} /> },
  { slug: "media-storage", title: "Media Storage", icon: <HardDrive size={16} /> },
  { slug: "data-security", title: "Data Security", icon: <Shield size={16} /> },
];

const contactUsLinks = [
  { slug: "contact", title: "Contact Us", icon: <ContactRound size={16} /> },
  { slug: "branch-locations", title: "Branch Locations", icon: <MapPin size={16} /> }
];

// ⭐ INDUSTRY SOLUTIONS (same structure, just typo fixed)
const industrySolutions = [
  { slug: "finance-banking", title: "Finance & Banking", icon: <ContactRound size={16} /> },
  { slug: "insurance", title: "Insurence", icon: <MapPin size={16} /> },
  { slug: "healthcare-pharmaceuticals-medical-records", title: "HealthCare & Pharmaceuticals-Medical Records", icon: <ContactRound size={16} /> },
  { slug: "legal-laws-confidential-records", title: "Legal Laws Confidential Records", icon: <MapPin size={16} /> },
  { slug: "auto-industries-automobiles", title: "Auto Industries Automobiles", icon: <ContactRound size={16} /> },
  { slug: "energy-sector-oil-gas-solar", title: "Energy Sector Oil Gas Solar", icon: <MapPin size={16} /> },
  { slug: "media-entertainment", title: "Media Entertainment", icon: <ContactRound size={16} /> },
  { slug: "audit-ca-firms", title: "Audit CA Firms", icon: <MapPin size={16} /> },
  { slug: "education-training", title: "Education Training", icon: <ContactRound size={16} /> },
  { slug: "telecom", title: "Telecom", icon: <MapPin size={16} /> },
  { slug: "fmcg-industrial-records", title: "FMCG Industrial Records", icon: <ContactRound size={16} /> }, // ⭐ FIX
  { slug: "public-sector-ngo", title: "Public Sector NGO", icon: <MapPin size={16} /> },
  { slug: "small-medium-enterprises", title: "Small Medium Enterprises", icon: <ContactRound size={16} /> },
  { slug: "research-records", title: "Research Records", icon: <MapPin size={16} /> },
  { slug: "logistics-airway-bills", title: "Logistics Airway Bills", icon: <ContactRound size={16} /> },
  { slug: "real-estate-infrastructure", title: "Real Estate Infrastructure", icon: <MapPin size={16} /> },
  { slug: "airlines", title: "Airlines", icon: <ContactRound size={16} /> },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full relative z-[9999]">

      {/* HEADER */}
      <div className="flex justify-between items-center bg-white px-4 md:px-12 py-3 md:py-4 shadow-md">

        {/* LOGO */}
        <Link href="/" className="relative h-10 w-32 sm:h-12 sm:w-40 md:h-24 md:w-72">
          <Image src="/images/omx info.png" alt="logo" fill className="object-contain" />
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-[#000033]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 items-center text-[#000033] text-sm">

          <Link href="/">Home</Link>

          {/* ABOUT */}
          <div className="relative group">
            <div className="flex items-center gap-1 py-4 cursor-pointer">
              <Link href="/about">About</Link>
              <ChevronDown size={14} className="group-hover:rotate-180 transition" />
            </div>

            <div className="absolute top-full left-0 mt-2 w-[200px] bg-white rounded-lg shadow-lg p-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all">
              <Link href="/about/core-team" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                Core Team
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div className="relative group">
            <div className="flex items-center gap-1 py-4 cursor-pointer">
              <Link href="/services">Services</Link>
              <ChevronDown size={14} className="group-hover:rotate-180 transition" />
            </div>

            <div className="absolute top-full right-0 mt-2 w-[300px] bg-white rounded-lg shadow-lg p-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all">
              {serviceLinks.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="flex gap-3 p-2 hover:bg-gray-100 text-gray-700">
                  {s.icon} {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* ⭐ NEW: INDUSTRY SOLUTIONS */}
          <div className="relative group">
            <div className="flex items-center gap-1 py-4 cursor-pointer">
              <span>Industry We Serve</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition" />
            </div>

            <div className="absolute top-full right-0 mt-2 w-[320px] max-h-[400px] overflow-y-auto bg-white rounded-lg shadow-lg p-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all">
              {industrySolutions.map((item) => (
                <Link
                  key={item.slug}
                  href={`/industry/${item.slug}`}
                  className="flex gap-3 p-2 hover:bg-gray-100 text-gray-700 text-sm"
                >
                  {item.icon} {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/careers">Careers</Link>

          {/* CONTACT */}
          <div className="relative group">
            <div className="flex items-center gap-1 py-4 cursor-pointer">
              <span>Contact</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition" />
            </div>

            <div className="absolute top-full right-0 mt-2 w-[300px] bg-white rounded-lg shadow-lg p-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all">
              {contactUsLinks.map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className="flex gap-3 p-2 hover:bg-gray-100 text-gray-700">
                  {s.icon} {s.title}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white z-[9999] md:hidden transition-transform duration-500 ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>

        <div className="flex flex-col h-full pt-20 px-5 gap-5 overflow-y-auto">

          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

          {/* SERVICES */}
          <div className="border-b pb-4">
            <p className="text-gray-400 text-xs mb-2 ">Services</p>
            {serviceLinks.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setIsMobileMenuOpen(false)}>
                {s.title}
              </Link>
            ))}
          </div>

          {/* ⭐ NEW: INDUSTRY MOBILE */}
          <div className="border-b pb-4">
            <p className="text-gray-400 text-xs mb-2">Industry We Serve</p>
            {industrySolutions.map((item) => (
              <Link
                key={item.slug}
                href={`/industry/${item.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </nav>
  );
}