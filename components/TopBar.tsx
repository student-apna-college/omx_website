import { Mail, Phone, User, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white py-2 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="mailto:omxinfo@omx.in" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[tomato] transition-colors">
            <Mail size={12} className="text-[tomato]" />
            omxinfo@omx.in
          </a>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <Phone size={12} className="text-[tomato]" />
            <span>011 - 45970627 / 45970672</span>
          </div>
        </div>

        {/* Login Actions */}
        <div className="flex items-center gap-4">
          <Link href="/employee-login" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md transition-all">
            <User size={12} />
            Employee Login
          </Link>
          <Link href="/login" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] bg-[tomato] px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all">
            <ShieldCheck size={12} />
            Client Login
          </Link>
        </div>
      </div>
    </div>
  );
}