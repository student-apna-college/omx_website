import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
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
    <footer className="bg-[#1574AD] backdrop-blur-xl text-white border-t border-white/[0.08] pt-14 pb-6 overflow-hidden">

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-5 space-y-6">

            {/* LOGO */}
            <Link
              href="/"
              className="relative h-[90px] w-[190px] block"
            >
              <Image
                src="/images/companylogo.png"
                alt="OMX Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </Link>

            {/* DESCRIPTION */}
            <p className="text-sm text-white leading-relaxed max-w-md">
              An{" "}
              <span className="text-white font-semibold">
                ISO 9001:2015 Certified
              </span>{" "}
              entity within the OM Group network delivering secure,
              scalable, and enterprise-grade information management
              solutions across India.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">

              <Link
                href="https://www.linkedin.com/company/omx-info-management-ltd---india/"
                target="_blank"
                className="
                  h-11 w-11 rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  flex items-center justify-center
                  text-white/80
                  hover:text-white
                  hover:bg-red-500/50
                  hover:border-red-500/50
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Linkedin size={18} />
              </Link>

              <Link
                href="https://www.instagram.com/omx_info_management_ltd?igsh=ZG5wMnFpNWo5eWl1"
                target="_blank"
                className="
                  h-11 w-11 rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  flex items-center justify-center
                  text-white/80
                  hover:text-white
                  hover:bg-red-500/50
                  hover:border-red-500/50
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Instagram size={18} />
              </Link>

            </div>

          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="lg:col-span-2 space-y-5">

            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Navigation
            </h4>

            <ul className="space-y-4">

              {["Services", "Careers", "Contact"].map((item) => (

                <li key={item}>

                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="
                      text-sm
                      font-medium
                      tracking-[0.18em]
                      text-white
                      hover:text-white
                      hover:translate-x-1
                      transition-all
                      duration-300
                      flex items-center gap-2 group
                    "
                  >
                    {item}

                    <ArrowUpRight
                      size={13}
                      className="
                        opacity-0
                        -translate-x-1
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                        duration-300
                      "
                    />

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= SERVICES ================= */}
          <div className="lg:col-span-2 space-y-5">

            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Solutions
            </h4>

            <ul className="space-y-4">

              {services.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="
                      text-sm
                      font-medium
                      tracking-[0.18em]
                      text-white
                      hover:text-white
                      hover:translate-x-1
                      transition-all
                      duration-300
                      inline-block
                    "
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= CONTACT ================= */}
          <div className="lg:col-span-3 space-y-5">

            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              HQ Interface
            </h4>

            <p className="text-sm text-white leading-relaxed">
              130 Transport Centre, Punjabi Bagh,
              New Delhi - 110035
            </p>

            <div className="pt-4 border-t border-white">

              <p className="text-xs uppercase tracking-[0.2em] text-white mb-2">
                Email
              </p>

              <a
                href="mailto:omxinfo@omx.in"
                className="
                  text-white
                  font-medium
                  hover:text-blue-300
                  transition-all
                  duration-300
                "
              >
                omxinfo@omx.in
              </a>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[10px] text-white uppercase tracking-[0.25em] text-center md:text-left">
            © 2026 OMX INFO MANAGEMENT LTD
          </p>

          <p className="text-[10px] text-white uppercase tracking-[0.25em]">
            OM Group Alliance
          </p>

        </div>

      </div>

    </footer>
  );
}