import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/5 pt-32 pb-12">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          
          {/* Brand Block */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="relative h-16 w-56 block">
              <Image
                src="/images/omx info.png"
                alt="OMX Logo"
                fill
                className="object-contain object-left brightness-0 invert" // Makes logo white for dark footer
                priority
              />
            </Link>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
              An <span className="text-white font-medium">ISO 9001:2015 Certified</span> entity within the 3000Cr OM Group network. We architect the secure lifecycle of India's most critical information assets.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              {[
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[tomato] hover:border-[tomato] transition-all duration-500"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Navigation</h4>
            <ul className="space-y-4">
              {['Our Story', 'Services', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all text-[tomato]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Access */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Solutions</h4>
            <ul className="space-y-4">
              {['Records Management', 'Digitization', 'Secure Shredding', 'Cloud DMS'].map((item) => (
                <li key={item} className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">HQ Interface</h4>
            <div className="space-y-6">
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest leading-loose">
                130 Transport Centre,<br />
                Punjabi Bagh, New Delhi<br />
                PIN: 110035, INDIA
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-[tomato] font-mono text-xs tracking-tighter italic">Primary Registry:</p>
                <p className="text-xl font-bold text-white mt-1">omxinfo@omx.in</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              © 2026 OMX INFO MANAGEMENT LTD. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[10px] font-mono text-[tomato] uppercase tracking-[0.2em] italic">
              Part of the 3000Cr OM Group Alliance
            </p>
          </div>
          
          <div className="flex gap-10 text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Audit</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}