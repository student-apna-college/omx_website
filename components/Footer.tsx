import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { name: "Records Management", href: "/services/records-management" },
  { name: "Digitization", href: "/services/scanning-digitization" },
  { name: "Secure Shredding", href: "/services/secure-shredding" },
  { name: "Data Entry", href: "/services/data-entry" },
];

export default function Footer() {
  return (
    <footer className="bg-[#000033] text-white border-t border-white/5 pt-12 pb-6">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">

          {/* BRAND */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="relative h-25  w-52 block">
              <Image
                src="/images/omx info.png"
                alt="OMX Logo"
                fill
                className="object-contain object-left brightness-0 invert"
                priority
              />
            </Link>

            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              An <span className="text-white font-medium">ISO 9001:2015 Certified</span> entity within the OM Group network.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/omx-info-management-ltd---india/" },
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/omx_info_management_ltd?igsh=ZG5wMnFpNWo5eWl1" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-white hover:border-white transition"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* NAV */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em]">
              Navigation
            </h4>

            <ul className="space-y-3">
              {["Services", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm font-semibold  tracking-widest text-white hover:text-white transition flex items-center gap-2 group"
                  >
                    {item}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em]">
              Solutions
            </h4>

            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold  tracking-widest text-white hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em]">
              HQ Interface
            </h4>

            <p className="text-sm text-white/80 leading-relaxed">
              130 Transport Centre, Punjabi Bagh, New Delhi - 110035
            </p>

            <div className="pt-3 border-t border-white/10">
              <p className="text-xs text-white/60">Email</p>
              <a
                href="mailto:omxinfo@omx.in"
                className="text-white font-semibold hover:text-white transition"
              >
                omxinfo@omx.in
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/60 uppercase tracking-widest text-center md:text-left">
            © 2026 OMX INFO MANAGEMENT LTD
          </p>

          <p className="text-xs text-white/60 uppercase tracking-widest">
            OM Group Alliance
          </p>
        </div>
      </div>
    </footer>
  );
}