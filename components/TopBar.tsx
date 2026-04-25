"use client";

import { Mail, Phone, User, ShieldCheck ,MessageCircle } from 'lucide-react';
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
          
          {/* Enquiry Button */}
          <button
  onClick={() => setActiveForm("enquiry")}
  className="flex items-center gap-1.5 border border-white/30 text-white px-3 py-1.5 rounded-full text-1xl md:text-sm font-medium 
  hover:bg-white hover:text-black hover:shadow-md transition-all duration-300 backdrop-blur-md"
>
  <MessageCircle size={14} />
  <span>Enquire Now</span>
</button>

          <button
  onClick={() => setActiveForm("meeting")}
  className="flex items-center gap-1.5 border border-white/30 text-white px-3 py-1.5 rounded-full text-1xl md:text-sm font-medium 
  hover:bg-white hover:text-black hover:shadow-md transition-all duration-300 backdrop-blur-md"
>
  <span>Meeting Request</span>
</button>

        <Link
  href="/emplogin"
  className="flex items-center gap-1.5 border border-white/30 text-white px-3 py-1.5 rounded-full text-1xl  md:text-sm font-medium 
  hover:bg-white hover:text-black hover:shadow-md transition-all duration-300 backdrop-blur-md"
>
  <User size={14} />
  <span>Employee Login</span>
</Link>

         <Link
  href="/login"
  className="flex items-center gap-1.5 border border-white/30 text-white px-3 py-1.5 rounded-full text-1xl md:text-sm font-medium 
  hover:bg-white hover:text-black hover:shadow-md transition-all duration-300 backdrop-blur-md"
>
  <ShieldCheck size={14} />
  <span>Client Login</span>
</Link>

        </div>

      </div>
    </div>
  );
}













