"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Database, Zap, Trash2, HardDrive, Settings, Shield, Menu, X, ArrowRight, ContactRound, MapPin } from 'lucide-react';
import Image from 'next/image';

const serviceLinks = [
  { slug: "records-management", title: "Records Management", icon: <Database size={16} /> },
  { slug: "scanning-digitization", title: "Scanning & Digitization", icon: <Zap size={16} /> },
  { slug: "secure-shredding", title: "Secure Shredding", icon: <Trash2 size={16} /> },
  { slug: "media-storage", title: "Media Storage", icon: <HardDrive size={16} /> },
  { slug: "in-house-solutions", title: "In-House Solutions", icon: <Settings size={16} /> },
  { slug: "data-security", title: "Data Security", icon: <Shield size={16} /> },
];

const contactUsLinks = [
  { slug: "contact", title: "Contact Us", icon: <ContactRound size={16} /> },
  { slug: "branch-locations", title: "Branch Locations", icon: <MapPin size={16} /> }
];


export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Common typography class for brand consistency
  const navType = "text-sm font-bold uppercase tracking-[0.2em]";

  return (
    <nav className="w-full px-0 py-0">
      {/* MAIN DESKTOP BAR */}
      <div className="w-full flex justify-between items-center bg-white border-b border-gray-100 px-6 md:px-12 py-3 md:py-5 shadow-md relative z-[60]">
        
        <Link href="/" className="relative h-13 w-44 md:h-18 md:w-60 transition-all duration-300">
          <Image
            src="/images/omx info.png"
            alt="OMX Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden p-2 text-[#1a1a1a]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* DESKTOP LINKS */}
        <div className={`hidden md:flex gap-14 items-center ${navType} text-gray-500`}>
          <Link href="/" className="hover:text-[#111] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#111] transition-colors">About Us</Link>   
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className={`flex items-center gap-1 py-4 transition-colors cursor-pointer ${isDropdownOpen ? 'text-[tomato]' : 'hover:text-[#111]'}`}>
              <Link href="/services">Services</Link>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {isDropdownOpen && <div className="absolute top-full left-0 w-full h-10" />}

            <div className={`absolute top-full -right-10 mt-2 w-[340px] bg-white border border-gray-100 shadow-2xl rounded-xl p-5 transition-all duration-300 transform ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
              <div className="grid grid-cols-1 gap-2">
                {/* <p className="px-4 py-2 text-[10px] text-gray-400 font-mono tracking-[0.3em] border-b border-gray-50 mb-2 italic uppercase">// Core Infrastructure</p> */}
                {serviceLinks.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-5 px-4 py-3 rounded-lg hover:bg-gray-50 group transition-all" onClick={() => setIsDropdownOpen(false)}>
                    <div className="text-gray-400 group-hover:text-[tomato] transition-colors">{s.icon}</div>
                    <span className="text-xs font-bold text-gray-600 group-hover:text-[#111] transition-colors">{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/careers" className="hover:text-[#111] transition-colors">Careers</Link>
          <div 
            className="relative"
            onMouseEnter={() => setIsContactDropdownOpen(true)}
            onMouseLeave={() => setIsContactDropdownOpen(false)}
          >
            <div className={`flex items-center gap-1 py-4 transition-colors cursor-pointer ${isContactDropdownOpen ? 'text-[tomato]' : 'hover:text-[#111]'}`}>
              <p>Contact Us</p>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isContactDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {isContactDropdownOpen && <div className="absolute top-full left-0 w-full h-10" />}

            <div className={`absolute top-full -right-10 mt-2 w-[340px] bg-white border border-gray-100 shadow-2xl rounded-xl p-5 transition-all duration-300 transform ${isContactDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
              <div className="grid grid-cols-1 gap-2">
                {/* <p className="px-4 py-2 text-[10px] text-gray-400 font-mono tracking-[0.3em] border-b border-gray-50 mb-2 italic uppercase">// Core Infrastructure</p> */}
                {contactUsLinks.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} className="flex items-center gap-5 px-4 py-3 rounded-lg hover:bg-gray-50 group transition-all" onClick={() => setIsContactDropdownOpen(false)}>
                    <div className="text-gray-400 group-hover:text-[tomato] transition-colors">{s.icon}</div>
                    <span className="text-xs font-bold text-gray-600 group-hover:text-[#111] transition-colors">{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <Link href="/contact" className="bg-[tomato] text-white px-10 py-5 rounded-full text-xs font-black hover:bg-[#1a1a1a] transition-all ml-4">
            Contact Us
          </Link> */}
        </div>
      </div>

      {/* MOBILE FULL-SCREEN MENU */}
      <div 
        className={`fixed inset-0 h-screen w-full bg-white z-[50] transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className={`flex flex-col h-full pt-36 px-10 gap-10 ${navType} text-[#1a1a1a]`}>
          <Link 
            href="/about" 
            className="border-b border-gray-100 pb-6 flex justify-between items-center group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story <ArrowRight size={18} className="text-gray-300" />
          </Link>
          
          <Link 
            href="/services" 
            className="border-b border-gray-100 pb-6 flex justify-between items-center group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services <ArrowRight size={18} className="text-gray-300" />
          </Link>
          
          <Link 
            href="/careers" 
            className="border-b border-gray-100 pb-6 flex justify-between items-center group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Careers <ArrowRight size={18} className="text-gray-300" />
          </Link>
          
          <Link 
            href="/contact" 
            className="text-[tomato] pt-4 flex items-center gap-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us<div className="h-[2px] w-12 bg-[tomato]"></div>
          </Link>

          {/* Institutional Note at Bottom */}
          <div className="mt-auto pb-12">
            {/* <p className="text-[10px] font-mono text-gray-300 italic tracking-tighter">
              // OMX Info Management Limited <br/>
              // Institutional Grade Data Logistics
            </p> */}
          </div>
        </div>
      </div>
    </nav>
  );
}