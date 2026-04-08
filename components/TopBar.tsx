"use client";

import { Mail, Phone, User, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

type Props = {
  setActiveForm: (value: string | null) => void;
};

export default function TopBar({ setActiveForm }: Props) {
  return (
    <div className="w-full bg-[#191970] text-white py-2 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="mailto:omxinfo@omx.in" className="flex items-center gap-2 text-[10px] font-bold tracking-widest hover:text-[tomato] transition-colors">
            <Mail size={12} className="text-[tomato]" />
            omxinfo@omx.in
          </a>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <Phone size={12} className="text-[tomato]" />
            <span>011 - 45970627 / 45970672</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          
          {/* ✅ Enquiry Button */}
          <button
            onClick={() => setActiveForm("enquiry")}
            className="bg-green-500 hover:bg-green-600 text-white text-[12px] animate-pulse font-black cursor-pointer px-4 py-2 rounded-md shadow-md transition-all"
          >
            Enquire Now
          </button>

          {/* ✅ Meeting Button */}
          <button
            onClick={() => setActiveForm("meeting")}
            className="bg-blue-500 hover:bg-blue-600 text-white text-[12px] animate-pulse font-black cursor-pointer px-4 py-2 rounded-md shadow-md transition-all"
          >
            Meeting Request
          </button>

          {/* Normal Links (same rahenge) */}
          <Link href="/employee-login" className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black text-[12px] font-black px-4 py-2 rounded-md shadow-md transition-all">
            <User size={12} />
            Employee Login
          </Link>

          <Link href="/login" className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-[12px] font-black px-4 py-2 rounded-md shadow-md transition-all">
            <ShieldCheck size={12} />
            Client Login
          </Link>

        </div>

      </div>
    </div>
  );
}