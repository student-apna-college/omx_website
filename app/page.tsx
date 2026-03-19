"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Shield, Archive, Search, CheckCircle, 
  Activity, Globe, Lock, Clock, ChevronLeft, ChevronRight 
} from 'lucide-react';
import IndustryTicker from '@/components/IndustryTicker';
import { motion } from "framer-motion";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Secure Document Management Solutions",
      sub: "OMX Infor Management Ltd provides professional document management services including scanning, storage, shredding, and digital record management. We help businesses keep their important files safe, organized, and easy to access using modern technology and secure storage facilities. Our goal is to provide reliable solutions that improve efficiency and reduce paperwork.",
      img: "/images/placeholder_1.png",
      accent: "OMX INFO MANAGEMENT LTD"
    },
    {
      title: "Warehouse & Record Storage Facility",
      sub: "We offer secure warehouse and record storage services designed for companies that need safe space for important documents and files. Our storage facility includes proper security systems, fire protection, and organized record management to ensure complete safety. With our professional storage solutions, businesses can store records for long periods without worrying about damage or loss.",
      img: "/images/placeholder_2.jpeg",
      accent: "OMX INFO MANAGEMENT LTD"
    },
    {
      title: "Scanning, Shredding & DMS Software",
      sub: "Our company provides high-quality document scanning, secure shredding, and advanced DMS software to help organizations manage records digitally. We help businesses move from paper files to digital systems safely and quickly. Our services improve document security, reduce storage space, and make file searching fast and easy.",
      img: "/images/placeholder_3.jpeg",
      accent: "OMX INFO MANAGEMENT LTD"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const industries = ["Banking", "Insurance", "Hospitals", "Telecom", "Pharma", "Real Estate", "Airlines", "FMCG", "Logistics"];

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-[#1a1a1a] selection:bg-[tomato] selection:text-white">
      
      {/* 1. HERO CAROUSEL SECTION */}
      <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#1a1a1a]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center">
              <div className="max-w-4xl space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-12 bg-[tomato]"></span>
                  <span className="text-[tomato] text-xs font-bold uppercase tracking-[0.4em]">
                    {slide.accent}
                  </span>
                </div>
                <h1 className="text-1xl md:text-8xl font-light text-white leading-none tracking-tighter">
                  {slide.title.split(' ').map((word, i) => (
                    <span key={i} className={i === 1 ? "font-medium" : ""}>{word} </span>
                  ))}
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  {slide.sub}
                </p>
                <div className="pt-8 flex gap-4">
                  <Link href="/services" className="bg-[tomato] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Our Services
                  </Link>
                  <Link href="/contact" className="border border-white/30 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <div className="absolute bottom-12 right-12 z-30 flex gap-4">
          <button onClick={prevSlide} className="p-4 border border-white/20 text-white hover:bg-[tomato] transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-4 border border-white/20 text-white hover:bg-[tomato] transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* 2. CORE PERFORMANCE METRICS */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 divide-x divide-gray-100">
          {[
            { label: "Strong Business Group", val: "3000Cr", icon: <Shield size={20} /> },
            { label: "Fast Record Access", val: "03 Mins", icon: <Clock size={20} /> },
            { label: "Tier-4 Security Storage", val: "Tier 4", icon: <Lock size={20} /> },
            { label: "Nationwide Network", val: "750+ Hubs", icon: <Globe size={20} /> },
          ].map((stat, i) => (
            <div key={i} className="p-12 group hover:bg-gray-50 transition-all">
              <div className="text-[tomato] mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-4xl font-medium tracking-tighter">{stat.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DETAILED COMPANY PHILOSOPHY */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-[tomato] uppercase tracking-[0.4em]">Document Scanning Services</h2>
              <h3 className="text-2.5xl font-light leading-tight tracking-tight">
               OMX Info Management Ltd provides reliable document scanning services for companies that want to convert physical records into digital format. We use advanced scanning machines and proper indexing systems to ensure every document is clear, secure, and easy to find.   <span className="font-medium italic">. Digital records help businesses save office space, improve work speed, and protect files from damage.</span>
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-[tomato] pl-8">
              Our trained team carefully handles all documents to maintain privacy and accuracy. Whether you have old files, office records, legal papers, or daily documents.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="font-bold">Accountability</h4>
                <p className="text-sm text-gray-500">Full expert management at local levels across India.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold">Expertise</h4>
                <p className="text-sm text-gray-500">Quality assurance at every level of the document lifecycle.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square bg-gray-100 border border-gray-200 shadow-2xl overflow-hidden">
            <Image src="/images/abc.png" alt="OMX Warehouse Infrastructure" fill className="object-cover" />
            <div className="absolute top-0 right-0 bg-white p-8 border-l border-b border-gray-200">
               <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Facility Est.</p>
               <p className="text-2xl font-bold">2004</p>
            </div>
          </div>
        </div>
      </section>



      {/* 3. DETAILED COMPANY PHILOSOPHY */}
<section className="py-32 px-6 overflow-hidden">
  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">


    {/* IMAGE LEFT */}
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.4 }}
      className="relative aspect-square bg-gray-100 border border-gray-200 shadow-2xl overflow-hidden"
    >
      <Image
        src="/images/wharehouse.png"
        alt="OMX Warehouse Infrastructure"
        fill
        className="object-cover"
      />

      <div className="absolute top-0 right-0 bg-white p-8 border-l border-b border-gray-200">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
          Facility Est.
        </p>
        <p className="text-2xl font-bold">2004</p>
      </div>
    </motion.div>



    {/* TEXT RIGHT */}
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.4 }}
      className="space-y-12"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-black text-[tomato] uppercase tracking-[0.4em]">
          Secure Record Storage Facility
        </h2>

        <h3 className="text-2.5xl font-light leading-tight tracking-tight">
          We provide secure and well-managed record storage facilities for businesses that need safe space for their important files and documents. Our warehouse is designed with strong security, fire safety systems, and proper storage arrangements to keep records protected for long periods.
          <span className="font-medium italic"> . Each file is stored with proper labelling and tracking so it can be found quickly whenever required.</span>
        </h3>
      </div>

      <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-[tomato] pl-8">
        Our storage service helps companies free their office space while keeping documents safe and organized. With OMX Infor Management Ltd, clients get reliable storage solutions with full safety, confidentiality, and professional record management support.
      </p>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <h4 className="font-bold">Accountability</h4>
          <p className="text-sm text-gray-500">
            Full expert management at local levels across India.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold">Expertise</h4>
          <p className="text-sm text-gray-500">
            Quality assurance at every level of the document lifecycle.
          </p>
        </div>
      </div>
    </motion.div>


  </div>
</section>

     {/* 4. TECHNICAL SERVICES PREVIEW */}
<section className="py-32 bg-[#fcfcfc] border-y border-gray-100">
  <div className="max-w-[1400px] mx-auto px-6">

    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">

      <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-none">
        Technical <span className="font-medium">Capabilities</span>
      </h2>

      <Link
        href="/services"
        className="text-[tomato] font-bold text-xs uppercase tracking-[0.25em] border-b-2 border-[tomato] pb-2 hover:tracking-[0.35em] transition-all duration-300"
      >
        View All Services
      </Link>

    </div>


    <div className="grid md:grid-cols-3 border-t border-l border-gray-200">

      {[
        {
          title: "Record Management",
          desc: "Physical vaulting with O'NEIL world-leader software partnership.",
          slug: "records-management",
        },
        {
          title: "Scanning & Digitization",
          desc: "High-speed conversion into accurate, searchable digital formats.",
          slug: "scanning-digitization",
        },
        {
          title: "Secure Destruction",
          desc: "Compliance-driven shredding with official certificates.",
          slug: "secure-shredding",
        },
      ].map((s, i) => (
        <div
          key={i}
          className="p-12 border-r border-b border-gray-200 bg-transparent
          hover:bg-white
          hover:shadow-xl
          transition-all duration-300
          group
          relative"
        >

          <h4
            className="text-2xl font-medium mb-6 tracking-tight
            group-hover:text-[tomato]
            transition-colors duration-300"
          >
            {s.title}
          </h4>

          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
            {s.desc}
          </p>

          <Link
            href={`/services/${s.slug}`}
            className="
            inline-flex items-center gap-2
            text-xs font-bold uppercase tracking-widest
            opacity-0 translate-y-3
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
            "
          >
            Read Specs
            <ArrowRight size={14} className="text-[tomato]" />
          </Link>

        </div>
      ))}
    </div>
  </div>
</section>

      {/* 5. TRUSTED SECTORS & CLIENTS */}
     <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[25px] font-black text-[tomato] uppercase tracking-[0.5em]">
              Institutional Reach
            </h2>
          </div>
          
          {/* Passing data from Server to Client */}
          <IndustryTicker industries={industries} />

        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="px-6 pb-20">
  <div className="max-w-[1400px] mx-auto bg-[#1a1a1a] p-16 md:p-24 text-white relative overflow-hidden">

    {/* Background Image */}
    <div className="absolute inset-0 opacity-20">
      <img
        src="/images/careers.png"
        alt="bg"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Color overlay (optional dark effect) */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Right shape */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[tomato]/10 skew-x-12 translate-x-1/2" />

    {/* Content */}
    <div className="relative z-10 space-y-8">
      <h2 className="text-4xl md:text-6xl font-light tracking-tight max-w-3xl leading-none">
        Ready to <span className="font-medium italic">Audit Your Information</span> Assets?
      </h2>

      <p className="text-gray-400 text-lg max-w-xl">
        Connect with our consultants to build a compliant and efficient document lifecycle strategy.
      </p>

      <Link
        href="/contact"
        className="inline-block bg-[tomato] text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
      >
        Start Conversation
      </Link>
    </div>

  </div>
</section>
    </div>
  );
}