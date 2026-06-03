import Link from "next/link";
import Image from "next/image";
import {
  Banknote,
  Shield,
  HeartPulse,
  Scale,
  Car,
  Fuel,
  Film,
  Calculator,
  GraduationCap,
  Wifi,
  ShoppingCart,
  Landmark,
  Factory,
  FlaskConical,
  Truck,
  Home,
  Plane,
  ArrowRight,
} from "lucide-react";

/* SEO META (Next.js App Router) */
export const metadata = {
  title: "Industries We Serve | Document Management Solutions",
  description:
    "Explore industries we serve including banking, healthcare, logistics, and more with secure document management solutions.",
  keywords: [
    "DMS",
    "Document Management",
    "Industries",
    "Banking",
    "Healthcare",
  ],
};

export default function IndustriesSection() {
  const industries = [
    {
      slug: "finance-banking",
      title: "Finance & Banking",
      icon: <Banknote size={22} />,
      desc: "Secure financial records and compliance-driven document management",
      img: "/industry/finance.jpg",
    },

    {
      slug: "insurance",
      title: "Insurance",
      icon: <Shield size={22} />,
      desc: "Policy digitization and claims document lifecycle management",
      img: "/industry/insurance1.jpg",
    },

    {
      slug: "healthcare-pharmaceuticals-medical-records",
      title: "Healthcare",
      icon: <HeartPulse size={22} />,
      desc: "Medical records digitization with privacy and compliance",
      img: "/industry/medical.jpg",
    },

    {
      slug: "legal-laws-confidential-records",
      title: "Legal Records",
      icon: <Scale size={22} />,
      desc: "Confidential legal file storage and structured indexing",
      img: "/industry/legallow.jpg",
    },

    {
      slug: "auto-industries-automobiles",
      title: "Automobiles",
      icon: <Car size={22} />,
      desc: "Dealer and manufacturing records digitization solutions",
      img: "/industry/autoindu.jpg",
    },

    {
      slug: "energy-sector-oil-gas-solar",
      title: "Energy Sector",
      icon: <Fuel size={22} />,
      desc: "Secure handling of energy compliance records",
      img: "/industry/energypower.jpg",
    },

    {
      slug: "media-entertainment",
      title: "Media & Entertainment",
      icon: <Film size={22} />,
      desc: "Archive and manage digital media assets efficiently",
      img: "/industry/mediaentertain.jpg",
    },

    {
      slug: "audit-ca-firms",
      title: "Audit & CA Firms",
      icon: <Calculator size={22} />,
      desc: "Organized financial records for audits and compliance",
      img: "/industry/audit1.jpg",
    },

    {
      slug: "education-training",
      title: "Education",
      icon: <GraduationCap size={22} />,
      desc: "Student records and institutional data digitization",
      img: "/industry/education.jpg",
    },

    {
      slug: "telecom",
      title: "Telecom",
      icon: <Wifi size={22} />,
      desc: "High-volume customer data processing",
      img: "/industry/telecome1.jpg",
    },

    {
      slug: "fmcg-industrial-records",
      title: "FMCG",
      icon: <ShoppingCart size={22} />,
      desc: "Supply chain and distribution document management",
      img: "/industry/fmcg.jpg",
    },

    {
      slug: "public-sector-ngo",
      title: "Public Sector",
      icon: <Landmark size={22} />,
      desc: "Government records digitization and secure storage",
      img: "/industry/public1.jpeg",
    },

    {
      slug: "small-medium-enterprises",
      title: "SMEs",
      icon: <Factory size={22} />,
      desc: "Affordable document solutions for businesses",
      img: "/industry/small1.jpg",
    },

    {
      slug: "research-records",
      title: "Research",
      icon: <FlaskConical size={22} />,
      desc: "Research data organization",
      img: "/industry/research.png",
    },

    {
      slug: "logistics-airway-bills",
      title: "Logistics",
      icon: <Truck size={22} />,
      desc: "Airway bills and logistics tracking",
      img: "/industry/plane.jpg",
    },

    {
      slug: "real-estate-infrastructure",
      title: "Real Estate",
      icon: <Home size={22} />,
      desc: "Property document digitization",
      img: "/industry/realestat.jpg",
    },

    {
      slug: "airlines",
      title: "Airlines",
      icon: <Plane size={22} />,
      desc: "Aviation records management systems",
      img: "/industry/airline1.jpg",
    },
  ];

  return (
    <div className="mt-20 sm:mt-24 md:mt-0 w-full bg-gradient-to-b from-[#f8fbff] via-white to-[#f5f9ff]">

      {/* ================= HERO BANNER ================= */}
      <section
        className="relative w-full
        h-[280px] sm:h-[340px] md:h-[480px] lg:h-[620px]
        overflow-hidden"
      >

        {/* IMAGE */}
        <Image
          src="/industry/industry3.jpeg"
          alt="Industry Banner"
          fill
          priority
          className="object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062b57]/25 via-[#08519c]/25   " />

        {/* CONTENT */}
        <div className="absolute inset-0 z-20 flex items-center">

          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">

            <div className="max-w-3xl text-white">

              <div className="flex items-center gap-3 mb-6">

                <div className="h-[2px] w-12 bg-blue-300"></div>

                <span className="uppercase tracking-[0.3em] text-xs font-semibold text-white">
                  Enterprise Solutions
                </span>

              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                Industries{" "}
                <span className="font-semibold text-white">
                  We Serve
                </span>
              </h1>

              <p className="mt-6 text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl">
                Secure document management, digitization, and enterprise
                information solutions designed for modern industries across
                India.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= INTRO CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">

        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* LEFT */}
          <div className="lg:col-span-7">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-12 h-[2px] bg-[#021B3A]"></div>

              <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#1574AD]">
                Trusted Across Industries
              </p>

            </div>

            <h2 className="text-3xl md:text-5xl font-light leading-tight text-slate-900">
              Scalable Information Management
              <span className="block font-semibold text-[#1574AD]">
                For Every Sector
              </span>
            </h2>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">

            <p className="text-slate-600 leading-relaxed text-base md:text-lg border-l-4 border-[#1574AD] pl-6">
              OMX Info Management Limited provides advanced records
              management, scanning, digitization, document storage, and
              compliance-focused DMS solutions for Banking, Healthcare,
              Telecom, FMCG, Airlines, Logistics, Real Estate, Government,
              and multiple enterprise sectors.
            </p>

          </div>

        </div>

      </section>

      {/* ================= INDUSTRY GRID ================= */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {industries.map((s, i) => (

            <Link
              key={s.slug}
              href={`/industries/${s.slug}`}
              className="group relative overflow-hidden rounded-3xl h-[320px]
              border border-slate-200/60
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              md:hover:-translate-y-2
              md:hover:shadow-[0_25px_60px_rgba(2,27,58,0.18)]
              transition-all duration-500"
            >

              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition duration-700"
                style={{ backgroundImage: `url(${s.img})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* TOP GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/20 via-transparent to-transparent" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/20 shadow-lg">
                  {s.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
                  {s.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-white leading-relaxed line-clamp-2">
                  {s.desc}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 mt-5 text-sm font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                  <span>Explore Industry</span>
                  <ArrowRight size={15} />
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </div>
  );
}