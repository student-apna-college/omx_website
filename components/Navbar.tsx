"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Database,
  Zap,
  Trash2,
  Shield,
  Menu,
  X,
  ContactRound,
  MapPin,
  HardDrive,
  Building2,
  FileText,
  Mail,
} from "lucide-react";
import Image from "next/image";

const serviceLinks = [
  {
    slug: "records-management",
    title: "Records Management",
    icon: <Database size={16} />,
  },
  {
    slug: "scanning-digitization",
    title: "Scanning & Digitization",
    icon: <Zap size={16} />,
  },
  {
    slug: "digital-document-storage-dms-services",
    title: "Digital Document Storage DMS Services",
    icon: <Zap size={16} />,
  },
  {
    slug: "secure-shredding",
    title: "Secure Shredding",
    icon: <Trash2 size={16} />,
  },
  {
    slug: "data-security-compliance-solutions",
    title: "Data Security & Compliance Solutions",
    icon: <Shield size={16} />,
  },
  {
    slug: "record-management-infra-solution",
    title: "Record Management Infra Solution",
    icon: <Building2 size={16} />,
  },
  {
    slug: "filling-binding-indexing",
    title: "Filling Binding & Indexing",
    icon: <FileText size={16} />,
  },
  {
    slug: "mail-room-services",
    title: "Mail Room Services",
    icon: <Mail size={16} />,
  },
  {
    slug: "record-information-management",
    title: "Record Information Management",
    icon: <Database size={16} />,
  },
  {
    slug: "data-entry",
    title: "Data Entry",
    icon: <HardDrive size={16} />,
  },
];

const contactUsLinks = [
  {
    slug: "contact",
    title: "Contact Us",
    icon: <ContactRound size={16} />,
  },
  {
    slug: "branch-locations",
    title: "Branch Locations",
    icon: <MapPin size={16} />,
  },
];

const industrySolutions = [
  { slug: "finance-banking", title: "Finance & Banking" },
  { slug: "insurance", title: "Insurance" },
  {
    slug: "healthcare-pharmaceuticals-medical-records",
    title: "Healthcare & Pharmaceuticals",
  },
  { slug: "legal-laws-confidential-records", title: "Legal Records" },
  { slug: "auto-industries-automobiles", title: "Automobiles" },
  { slug: "energy-sector-oil-gas-solar", title: "Energy Sector" },
  { slug: "media-entertainment", title: "Media & Entertainment" },
  { slug: "audit-ca-firms", title: "Audit & CA Firms" },
  { slug: "education-training", title: "Education" },
  { slug: "telecom", title: "Telecom" },
  { slug: "fmcg-industrial-records", title: "FMCG" },
  { slug: "public-sector-ngo", title: "Public Sector" },
  { slug: "small-medium-enterprises", title: "SMES" },
  { slug: "research-records", title: "Research" },
  { slug: "logistics-airway-bills", title: "Logistics" },
  { slug: "real-estate-infrastructure", title: "Real Estate" },
  { slug: "airlines", title: "Airlines" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // FIX: DESKTOP DROPDOWN STATE
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  const pathname = usePathname();

  const isActive = (path: any) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  // FIX: MOBILE BODY SCROLL
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // FIX: TABLET / TOUCH DEVICE SUPPORT
 const toggleDesktopDropdown = (menu: string) => {
  if (window.innerWidth < 1280) {
    setDesktopDropdown(desktopDropdown === menu ? null : menu);
  }
};

  return (
    <nav className="w-full sticky top-0 z-50 bg-white">
      {/* HEADER */}
      <div className="relative z-50 flex justify-between items-center bg-white/95 backdrop-blur-md px-4 sm:px-6 md:px-8 lg:px-12 py-3 shadow-md">

        {/* LOGO */}
        <Link
          href="/"
          className="relative w-[140px] h-[45px] sm:w-[180px] sm:h-[60px] md:w-[210px] md:h-[70px] lg:w-[240px] lg:h-[80px] flex-shrink-0"
        >
          <Image
            src="/images/omx info.png"
            alt="logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* MOBILE BUTTON */}
        <button
  className="lg:hidden fixed top-5 right-4 text-[#000033] p-1 z-[2000]"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-5 lg:gap-7 xl:gap-10 items-center text-[#000033] text-sm lg:text-[15px] font-medium">

          {/* HOME */}
          <div className="relative">
            <Link
              href="/"
              className={`hover:text-blue-600 transition ${
                isActive("/") ? "text-blue-600" : ""
              }`}
            >
              Home
            </Link>

            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0"
              }`}
            />
          </div>

          {/* ABOUT */}
          <div className="relative">
            <Link
              href="/about"
              className={`hover:text-blue-600 transition ${
                isActive("/about") ? "text-blue-600" : ""
              }`}
            >
              About
            </Link>

            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                isActive("/about") ? "w-full" : "w-0"
              }`}
            />
          </div>

          {/* SERVICES */}
          <div
            className="relative group"
            onMouseEnter={() =>
              window.innerWidth >= 1024 &&
              setDesktopDropdown("services")
            }
            onMouseLeave={() =>
              window.innerWidth >= 1024 &&
              setDesktopDropdown(null)
            }
          >
            <div
              className="flex items-center gap-1 py-4 cursor-pointer relative"
              onClick={() => toggleDesktopDropdown("services")}
            >
              <Link
                href="/services"
                className={`hover:text-blue-600 transition ${
                  isActive("/services") ? "text-blue-600" : ""
                }`}
              >
                Services
              </Link>

              <ChevronDown
                size={15}
                className={`transition duration-300 ${
                  desktopDropdown === "services" ? "rotate-180" : ""
                }`}
              />

              <span
                className={`absolute left-0 bottom-2 h-[2px] bg-blue-600 transition-all duration-300 ${
                  isActive("/services") ? "w-full" : "w-0"
                }`}
              />
            </div>

            {/* DROPDOWN */}
            <div
              className={`absolute top-full right-0 mt-2 w-[260px] bg-white rounded-xl shadow-2xl py-3 border transition-all duration-300 z-50 ${
                desktopDropdown === "services"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {serviceLinks.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-3 px-4 py-1 text-sm hover:bg-blue-50 text-gray-700 transition"
                >
                  {s.icon}
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* INDUSTRY */}
          <div
            className="relative group"
            onMouseEnter={() =>
              window.innerWidth >= 1024 &&
              setDesktopDropdown("industry")
            }
            onMouseLeave={() =>
              window.innerWidth >= 1024 &&
              setDesktopDropdown(null)
            }
          >
            <div
              className="flex items-center gap-1 py-4 cursor-pointer relative"
              onClick={() => toggleDesktopDropdown("industry")}
            >
              <Link
                href="/industries"
                 onClick={() => setIsMobileMenuOpen(false)}
                
                className={`hover:text-blue-600 transition ${
                  isActive("/industries") ? "text-blue-600" : ""
                }`}
              >
                Industry we serve
              </Link>

              <ChevronDown
                size={15}
                className={`transition duration-300 ${
                  desktopDropdown === "industry" ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`absolute top-full right-0 mt-2 w-[300px] max-h-[420px] overflow-y-auto bg-white rounded-xl shadow-2xl p-3 border transition-all duration-300 z-50 ${
                desktopDropdown === "industry"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {industrySolutions.map((item) => (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className="block px-3 py-2 rounded-md hover:bg-blue-50 text-gray-700 text-sm transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* CAREERS */}
          <div className="relative">
            <Link
              href="/careers"
              className={`hover:text-blue-600 transition ${
                isActive("/careers") ? "text-blue-600" : ""
              }`}
            >
              Careers
            </Link>

            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                isActive("/careers") ? "w-full" : "w-0"
              }`}
            />
          </div>

          {/* TEAM */}
          <div className="relative">
            <Link
              href="/about/core-team"
              className={`hover:text-blue-600 transition ${
                isActive("/about/core-team") ? "text-blue-600" : ""
              }`}
            >
              Our Team
            </Link>

            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                isActive("/about/core-team") ? "w-full" : "w-0"
              }`}
            />
          </div>

          {/* CONTACT */}
          <div
            className="relative group"
            onMouseEnter={() =>
              window.innerWidth >= 1024 &&
              setDesktopDropdown("contact")
            }
            onMouseLeave={() =>
              window.innerWidth >= 1024 &&
              setDesktopDropdown(null)
            }
          >
            <div
              className="flex items-center gap-1 py-4 cursor-pointer relative"
              onClick={() => toggleDesktopDropdown("contact")}
            >
              <Link
                href="/contact"
                className={`hover:text-blue-600 transition ${
                  isActive("/contact") ? "text-blue-600" : ""
                }`}
              >
                Contact
              </Link>

              <ChevronDown
                size={15}
                className={`transition duration-300 ${
                  desktopDropdown === "contact" ? "rotate-180" : ""
                }`}
              />

              <span
                className={`absolute left-0 bottom-2 h-[2px] bg-blue-600 transition-all duration-300 ${
                  isActive("/contact") ? "w-full" : "w-0"
                }`}
              />
            </div>

            <div
              className={`absolute top-full right-0 mt-2 w-[240px] bg-white rounded-xl shadow-2xl p-3 border transition-all duration-300 z-50 ${
                desktopDropdown === "contact"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {contactUsLinks.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-blue-50 text-gray-700 transition"
                >
                  {s.icon}
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[180px] sm:top-[180px] md:top-[180px] left-0 w-full h-[calc(100vh-72px)] bg-white z-[40] lg:hidden transition-all duration-300 overflow-y-auto ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-5 py-6 gap-2 text-[15px] text-[#000033]">

          {/* HOME */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-3 border-b ${
              isActive("/") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Home
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-3 border-b ${
              isActive("/about") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            About
          </Link>

          {/* SERVICES */}
          <div className="border-b py-3">
            <div className="flex justify-between items-center">
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)} 
                className={
                  isActive("/services")
                    ? "text-blue-600 font-semibold"
                    : ""
                }
              >
                Services
              </Link>

              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "services" ? null : "services"
                  )
                }
              >
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openDropdown === "services"
                  ? "max-h-[700px] mt-4"
                  : "max-h-0"
              }`}
            >
              <div className="pl-3 flex flex-col gap-1 text-gray-600 text-sm">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* INDUSTRY */}
          <div className="border-b py-3">
            <div className="flex justify-between items-center">
  <Link
    href="/industries"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Industry We Serve
  </Link>

  <button
    onClick={() =>
      setOpenDropdown(
        openDropdown === "industry" ? null : "industry"
      )
    }
  >
    <ChevronDown
      className={`transition-transform duration-300 ${
        openDropdown === "industry" ? "rotate-180" : ""
      }`}
    />
  </button>
</div>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openDropdown === "industry"
                  ? "max-h-[400px] mt-4"
                  : "max-h-0"
              }`}
            >
              <div className="pl-3 flex flex-col gap-1 text-gray-600 text-sm overflow-y-auto max-h-[300px]">
                {industrySolutions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/industries/${item.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="border-b py-3">
            <div className="flex justify-between items-center">
              <Link
                href="/contact"
                 onClick={() => setIsMobileMenuOpen(false)} 
                className={
                  isActive("/contact")
                    ? "text-blue-600 font-semibold"
                    : ""
                }
              >
                Contact
              </Link>

              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "contact" ? null : "contact"
                  )
                }
              >
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openDropdown === "contact" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openDropdown === "contact"
                  ? "max-h-[200px] mt-4"
                  : "max-h-0"
              }`}
            >
              <div className="pl-3 flex flex-col gap-1 text-gray-600 text-sm">
                {contactUsLinks.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CAREERS */}
          <Link
            href="/careers"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-3 border-b ${
              isActive("/careers") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Careers
          </Link>

          {/* TEAM */}
          <Link
            href="/about/core-team"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-3 border-b ${
              isActive("/about/core-team")
                ? "text-blue-600 font-semibold"
                : ""
            }`}
          >
            Our Team
          </Link>
        </div>
      </div>
    </nav>
  );
}