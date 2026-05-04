
import Link from "next/link";
import Image from "next/image";
import {
  Banknote, Shield, HeartPulse, Scale, Car, Fuel, Film, Calculator,
  GraduationCap, Wifi, ShoppingCart, Landmark, Factory, FlaskConical,
  Truck, Home, Plane, ArrowRight
} from "lucide-react";

/* SEO META (Next.js App Router) */
export const metadata = {
  title: "Industries We Serve | Document Management Solutions",
  description:
    "Explore industries we serve including banking, healthcare, logistics, and more with secure document management solutions.",
  keywords: ["DMS", "Document Management", "Industries", "Banking", "Healthcare"],
};

export default function IndustriesSection() {

  const industries = [
    { slug: "finance-banking", title: "Finance & Banking", icon: <Banknote size={22} />, desc: "Secure financial records and compliance-driven document management", img: "/industry/finance.jpg" },
    { slug: "insurance", title: "Insurance", icon: <Shield size={22} />, desc: "Policy digitization and claims document lifecycle management", img: "/industry/insurance1.jpg" },
    { slug: "healthcare-pharmaceuticals-medical-records", title: "Healthcare", icon: <HeartPulse size={22} />, desc: "Medical records digitization with privacy and compliance", img: "/industry/medical.jpg" },
    { slug: "legal-laws-confidential-records", title: "Legal Records", icon: <Scale size={22} />, desc: "Confidential legal file storage and structured indexing", img: "/industry/legallow.jpg" },
    { slug: "auto-industries-automobiles", title: "Automobiles", icon: <Car size={22} />, desc: "Dealer and manufacturing records digitization solutions", img: "/industry/autoindu.jpg" },
    { slug: "energy-sector-oil-gas-solar", title: "Energy Sector", icon: <Fuel size={22} />, desc: "Secure handling of energy compliance records", img: "/industry/energypower.jpg" },
    { slug: "media-entertainment", title: "Media & Entertainment", icon: <Film size={22} />, desc: "Archive and manage digital media assets efficiently", img: "/industry/mediaentertain.jpg" },
    { slug: "audit-ca-firms", title: "Audit & CA Firms", icon: <Calculator size={22} />, desc: "Organized financial records for audits and compliance", img: "/industry/audit1.jpg" },
    { slug: "education-training", title: "Education", icon: <GraduationCap size={22} />, desc: "Student records and institutional data digitization", img: "/industry/education.jpg" },
    { slug: "telecom", title: "Telecom", icon: <Wifi size={22} />, desc: "High-volume customer data processing", img: "/industry/telecome1.jpg" },
    { slug: "fmcg-industrial-records", title: "FMCG", icon: <ShoppingCart size={22} />, desc: "Supply chain and distribution document management", img: "/industry/fmcg.jpg" },
    { slug: "public-sector-ngo", title: "Public Sector", icon: <Landmark size={22} />, desc: "Government records digitization and secure storage", img: "/industry/public1.jpeg" },
    { slug: "small-medium-enterprises", title: "SMEs", icon: <Factory size={22} />, desc: "Affordable document solutions for businesses", img: "/industry/small1.jpg" },
    { slug: "research-records", title: "Research", icon: <FlaskConical size={22} />, desc: "Research data organization", img: "/industry/research.png" },
    { slug: "logistics-airway-bills", title: "Logistics", icon: <Truck size={22} />, desc: "Airway bills and logistics tracking", img: "/industry/plane.jpg" },
    { slug: "real-estate-infrastructure", title: "Real Estate", icon: <Home size={22} />, desc: "Property document digitization", img: "/industry/realestat.jpg" },
    { slug: "airlines", title: "Airlines", icon: <Plane size={22} />, desc: "Aviation records management systems", img: "/industry/airline1.jpg" },
  ];

  return (
    <div className="w-full">

     {/* ================= INDUSTRY BANNER ================= */}
      <div className="relative w-full h-[400px] sm:h-[280px] md:h-[500px] lg:h-[550px] overflow-hidden mt-20 sm:mt-0 md:mt-15 lg:mt-0">

        <Image
          src="/industry/industry.jpeg"
          alt="Industry Banner"
          fill
          className="object-fit object-[center_30%]"
          priority
        />
      </div>


      {/* ================= CORE CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 py-10  ">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">
        Industries <span className="text-blue-900">We Serve</span>
        </h1>

        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-full">
         OMX Info Management Limited offers solutions pertaining to Records Management & Digitization Services  to Banking, Hospitals, Pharmaceuticals, Medical Records, Financial Institution, Insurance, CAs, Legal & Laws Confidential Records, Automobiles, Energy Sector, Media & Entertainment, Educational Institute, Telecom, FMCG, Logistics, Airlines, Real Estate and various Industries, for their various departments like Finance, HR, Logistics, Marketing, MRD, Operations, Admin etc. etc..
        </p>

        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
            Large Scale Digitization Success
          </h2>
          <div className="w-20 h-1 bg-blue-600 mt-3 rounded-full"></div>
        </div>

      </div>

     
      {/* ================= INDUSTRY GRID ================= */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 mt-10 mb-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

          {industries.map((s) => (
            <Link
              key={s.slug}
              href={`/industries/${s.slug}`}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden h-[240px] sm:h-[260px] md:h-[280px] flex"
            >

              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700"
                style={{ backgroundImage: `url(${s.img})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition" />

              {/* CONTENT */}
              <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col justify-end text-white w-full">

                <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 sm:mb-3 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur">
                  {s.icon}
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-white-300 mb-2 sm:mb-3 line-clamp-2">
                  {s.desc}
                </p>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                  Explore <ArrowRight size={14} />
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}