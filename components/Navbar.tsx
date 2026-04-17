"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Database,
  Zap,
  Trash2,
  Shield,
  Menu,
  X,
  ContactRound,
  MapPin
} from "lucide-react";
import Image from "next/image";

const serviceLinks = [
  { slug: "records-management", title: "Records Management", icon: <Database size={16} /> },
  { slug: "scanning-digitization", title: "Scanning & Digitization", icon: <Zap size={16} /> },
  { slug: "secure-shredding", title: "Secure Shredding", icon: <Trash2 size={16} /> },
  { slug: "data-security", title: "Data Security", icon: <Shield size={16} /> },
];

const contactUsLinks = [
  { slug: "contact", title: "Contact Us", icon: <ContactRound size={16} /> },
  { slug: "branch-locations", title: "Branch Locations", icon: <MapPin size={16} /> }
];

const industrySolutions = [
  { slug: "finance-banking", title: "Finance & Banking" },
  { slug: "insurance", title: "Insurance" },
  { slug: "healthcare-pharmaceuticals-medical-records", title: "Healthcare & Pharmaceuticals" },
  { slug: "legal-laws-confidential-records", title: "Legal Records" },
  { slug: "auto-industries-automobiles", title: "Automobiles" },
  { slug: "energy-sector-oil-gas-solar", title: "Energy Sector" },
  { slug: "media-entertainment", title: "Media & Entertainment" },
  { slug: "audit-ca-firms", title: "Audit & CA Firms" },
  { slug: "education-training", title: "Education" },
  { slug: "telecom", title: "Telecom" },
  { slug: "fmcg-industrial-records", title: "FMCG" },
  { slug: "public-sector-ngo", title: "Public Sector" },
  { slug: "small-medium-enterprises", title: "SMEs" },
  { slug: "research-records", title: "Research" },
  { slug: "logistics-airway-bills", title: "Logistics" },
  { slug: "real-estate-infrastructure", title: "Real Estate" },
  { slug: "airlines", title: "Airlines" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full relative z-[9999]">

      {/* HEADER */}
      <div className="flex justify-between items-center bg-white/90 backdrop-blur-md px-4 md:px-12 py-3 md:py-4 shadow-md">

        {/* LOGO */}
        <Link href="/" className="relative w-[130px] h-[45px] sm:w-[160px] sm:h-[55px] md:w-[240px] md:h-[80px]">
          <Image src="/images/omx info.png" alt="logo" fill className="object-contain" priority />
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-[#000033]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 lg:gap-10 items-center text-[#000033] text-sm lg:text-base">

          <Link href="/" className="hover:text-blue-600 transition">Home</Link>

          <Link href="/about" className="hover:text-blue-600 transition">About</Link>

          {/* SERVICES */}
          <div className="relative group">
            <div className="flex items-center gap-1 py-4 cursor-pointer">
              <Link href="/services">Services</Link>
              <ChevronDown size={14} className="group-hover:rotate-180 transition" />
            </div>

            <div className="absolute top-full right-0 mt-2 w-[260px] bg-white rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              {serviceLinks.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="flex gap-2 p-2 hover:bg-gray-100 text-gray-700">
                  {s.icon} {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* INDUSTRY */}
          <div className="relative group">
            <div className="flex items-center gap-1 py-4 cursor-pointer">
              <p>Industry We serve</p>
              <ChevronDown size={14} className="group-hover:rotate-180 transition" />
            </div>

            <div className="absolute top-full right-0 mt-2 w-[280px] max-h-[400px] overflow-y-auto bg-white rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              {industrySolutions.map((item) => (
                <Link key={item.slug} href={`/industries/${item.slug}`} className="block p-2 hover:bg-gray-100 text-gray-700 text-sm">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/careers" className="hover:text-blue-600 transition">Careers</Link>

          {/* CONTACT */}
          <div className="relative group">
            <div className="flex items-center gap-1 py-4 cursor-pointer">
              <Link href="/contact">Contact</Link>
              <ChevronDown size={14} className="group-hover:rotate-180 transition" />
            </div>

            <div className="absolute top-full right-0 mt-2 w-[240px] bg-white rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              {contactUsLinks.map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className="flex gap-2 p-2 hover:bg-gray-100 text-gray-700">
                  {s.icon} {s.title}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
      }`}>

        <div className="flex flex-col px-6 py-4 gap-4 text-base">

          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

          {/* SERVICES */}
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 py-4 cursor-pointer">
  <Link href="/services">Services</Link>
  <ChevronDown size={14} className="group-hover:rotate-180 transition" />
</div>
              <button onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}>
                <ChevronDown className={`transition ${openDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {openDropdown === "services" && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                {serviceLinks.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setIsMobileMenuOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* INDUSTRY */}
          <div>
            <div className="flex justify-between items-center">
              <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)}>Industry We Serve</Link>
              <button onClick={() => setOpenDropdown(openDropdown === "industry" ? null : "industry")}>
                <ChevronDown className={`transition ${openDropdown === "industry" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {openDropdown === "industry" && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600 max-h-[200px] overflow-y-auto">
                {industrySolutions.map((item) => (
                  <Link key={item.slug} href={`/industries/${item.slug}`} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CONTACT */}
          <div>
            <div className="flex justify-between items-center">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <button onClick={() => setOpenDropdown(openDropdown === "contact" ? null : "contact")}>
                <ChevronDown className={`transition ${openDropdown === "contact" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {openDropdown === "contact" && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                {contactUsLinks.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} onClick={() => setIsMobileMenuOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>

        </div>
      </div>

    </nav>
  );
}