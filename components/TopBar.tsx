"use client";

import { Mail, Phone, User, ShieldCheck, MessageCircle } from "lucide-react";
import Link from "next/link";

type Props = {
  setActiveForm: (value: string | null) => void;
};

export default function TopBar({ setActiveForm }: Props) {
  return (
    <div className="w-full bg-[#191970] text-white py-2 px-4 sm:px-6 lg:px-10 border-b border-white/5">

      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">

        {/* CONTACT INFO */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm">

          {/* Email */}
          <a
            href="mailto:omxinfo@omx.in"
            className="flex items-center gap-2 font-medium hover:text-[tomato] transition"
          >
            <Mail size={14} className="hidden sm:block text-[tomato]" />
            <span>omxinfo@omx.in</span>
          </a>

          {/* Phone */}
          <div className="flex items-center gap-2 font-medium">
            <Phone size={14} className="hidden sm:block text-[tomato]" />
            <span>011 - 45970627 / 45970672</span>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-3">

          {/* Enquiry */}
          <button
            onClick={() => setActiveForm("enquiry")}
            className="flex items-center gap-1 sm:gap-2 border border-white/30 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium 
            hover:bg-white hover:text-black transition-all duration-300"
          >
            <MessageCircle size={14} className="hidden sm:block" />
            <span>Enquire Now</span>
          </button>

          {/* Meeting */}
          <button
            onClick={() => setActiveForm("meeting")}
            className="flex items-center gap-1 sm:gap-2 border border-white/30 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium 
            hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>Meeting Request</span>
          </button>

          {/* Employee Login */}
          <Link
            href="/emplogin"
            className="flex items-center gap-1 sm:gap-2 border border-white/30 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium 
            hover:bg-white hover:text-black transition-all duration-300"
          >
            <User size={14} className="hidden sm:block" />
            <span>Employee Login</span>
          </Link>

          {/* Client Login */}
          <Link
            href="/login"
            className="flex items-center gap-1 sm:gap-2 border border-white/30 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium 
            hover:bg-white hover:text-black transition-all duration-300"
          >
            <ShieldCheck size={14} className="hidden sm:block" />
            <span>Client Login</span>
          </Link>

        </div>

      </div>
    </div>
  );
}