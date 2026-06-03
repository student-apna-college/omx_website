import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Zap,
  Globe,
  Database,
  Globe2,
  Building2,
  ArrowRight,
} from "lucide-react";

import ImageSlider from "@/components/About/ImageSlider";
import ClientCarousel from "@/components/About/ClientCarousel";
import Link from "next/link";

export default function AboutPage() {
  const images = [
    "/images/wahrehouse1.png",
    "/images/Noidawharehouse1.png",
    "/images/wharehoues3.jpeg",
  ];

  const clientData = [
    { name: "World Health Organization", logo: "/logo/client1.jpg" },
    { name: "Yatharth", logo: "/logo/yatharth.png" },
    { name: "European Union", logo: "/logo/client2.jpg" },
    { name: "ICICI Bank Credit Cards", logo: "/logo/client3.jpg" },
    { name: "ICICI Bank", logo: "/logo/client4.jpg" },
    { name: "Easy Bill", logo: "/logo/client5.jpg" },
    { name: "PNB Housing", logo: "/logo/client6.jpg" },
    { name: "Panasonic", logo: "/logo/client7.jpg" },
    { name: "Vodafone", logo: "/logo/vi.jpeg" },
    { name: "MAX Healthcare", logo: "/logo/client9.jpg" },
    { name: "Altus Group", logo: "/logo/client10.jpg" },
    { name: "Deepali Design and Exhibits", logo: "/logo/client11.jpg" },
    { name: "Catalyst Clinical Services", logo: "/logo/client12.jpg" },
    { name: "Sumiriko Imperial", logo: "/logo/client13.jpg" },
    { name: "Fortis Hospital", logo: "/logo/client14.jpg" },
    { name: "IBS Hospital", logo: "/logo/client16.jpg" },
    { name: "FARO", logo: "/logo/client17.png" },
    { name: "MotherHood", logo: "/logo/motherhood.png" },
    { name: "Motherland", logo: "/logo/motherland.png" },
    { name: "pristyncare", logo: "/logo/pristyn care.png" },
    { name: "ambikasteel", logo: "/logo/abmikasteel.png" },
    { name: "ArtSana", logo: "/logo/artsana-logo.png" },
    { name: "BatikAirWays", logo: "/logo/batikairways.png" },
    { name: "Oncology", logo: "/logo/oncology.png" },
    { name: "Rohde", logo: "/logo/rohde.jpg" },
    { name: "Stella Industries", logo: "/logo/stella industries.png" },
    { name: "surya", logo: "/logo/surya.jpg" },
  ];

  const stats = [
    {
      label: "Incorporated",
      val: "2004",
      icon: <Award size={22} />,
      color: "from-blue-500/10 to-blue-500/5",
      iconBg: "bg-blue-100 text-blue-700",
    },

    {
      label: "Our Reach",
      val: "750+",
      icon: <Globe size={22} />,
      color: "from-purple-500/10 to-purple-500/5",
      iconBg: "bg-purple-100 text-purple-700",
    },

    {
      label: "TAT",
      val: "3 Min",
      icon: <Zap size={22} />,
      color: "from-orange-500/10 to-orange-500/5",
      iconBg: "bg-orange-100 text-orange-700",
    },

    {
      label: "Lost Doc",
      val: "0%",
      icon: <ShieldCheck size={22} />,
      color: "from-emerald-500/10 to-emerald-500/5",
      iconBg: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8fbff] via-white to-[#f5f9ff] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative">

        <div className="relative w-full min-h-[90vh] sm:min-h-[80vh] md:min-h-[90vh] overflow-hidden">

          <Image
            src="/images/aboutuspage.jpeg"
            alt="OMX About"
            fill
            priority
            className="
              object-cover
              object-[center_20%]
              sm:object-center
              scale-100
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#062b57]/95 via-[#08519c]/55 z-10 "></div>

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full z-10"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 z-20 flex items-center">

            <div className="max-w-[1300px] mx-auto px-6 w-full">

              <div className="max-w-3xl text-white">

                <p className="uppercase tracking-[0.3em] text-blue-200 text-xs sm:text-sm mb-5 font-semibold">
                  OMX INFO MANAGEMENT
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-light leading-tight">

                  Transforming
                  <span className="block  text-white">
                    Document Storage
                  </span>

                </h1>

                <p className="mt-6 text-base sm:text-lg text-blue-50 max-w-2xl leading-relaxed">
                  Smarter document management solutions designed to simplify
                  storage, improve accessibility, and protect critical business
                  information with enterprise-grade infrastructure.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                <Link href="/services">
                  <button className="px-7 py-3 rounded-full bg-white text-[#08306b] font-semibold hover:scale-105 transition duration-300 shadow-xl">
                    Explore Services
                  </button>
                  </Link>

                  <button className="px-7 py-3 rounded-full border border-white/30 backdrop-blur-md text-white hover:bg-white/10 transition duration-300">
                    Learn More
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}
      <section className="relative -mt-16 z-30 pb-10">

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            {stats.map((stat, i) => (

              <div
                key={i}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-white/40
                  bg-gradient-to-br ${stat.color}
                  backdrop-blur-xl
                  p-6
                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-500
                `}
              >

                <div className="absolute inset-0 bg-white/70"></div>

                <div className="relative z-10 text-center">

                  <div
                    className={`
                      w-14 h-14 mx-auto mb-4 rounded-2xl
                      flex items-center justify-center
                      shadow-md
                      ${stat.iconBg}
                    `}
                  >
                    {stat.icon}
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    {stat.val}
                  </h3>

                  <p className="mt-2 text-slate-600 font-medium">
                    {stat.label}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= STORY ================= */}
      <section className="py-8 md:py-8">

        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="relative">

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200/40 blur-3xl rounded-full"></div>

            <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white/50">

              <div className="h-[300px] sm:h-[380px] md:h-[500px]">
                <ImageSlider images={images} />
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <p className="uppercase tracking-[0.25em] text-blue-600 text-xs font-semibold mb-4">
              OUR STORY
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight text-slate-900">

              A Story of
              <span className="block font-semibold text-[#1574AD]">
                Strategic Expansion
              </span>

            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              OMX Info Management operates as an ISO-certified organization
              backed by OM Group, delivering advanced records management,
              digitization, and information security solutions.
            </p>

            <div className="mt-8 space-y-5">

              {[
                "Over two decades of expertise in Record Management & Digitization",
                "Advanced infrastructure with secure document handling",
                "Nationwide operational reach powered by OM Logistics",
                "Focused on compliance, confidentiality & accessibility",
              ].map((item, i) => (

                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition"
                >

                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>

                  <p className="text-slate-700">{item}</p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-8 md:py-0">

        <div className="max-w-[1280px] mx-auto px-6">

          {/* HEADER */}
          <div className="text-center max-w-4xl mx-auto mb-16">

            <p className="uppercase tracking-[0.25em] text-blue-600 text-xs font-semibold mb-4">
              ABOUT OMX
            </p>

            <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight">

              Building the Future of
              <span className="block font-semibold text-[#1574AD]">
                Information Management
              </span>

            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Trusted records & information management solutions designed for
              enterprises that demand security, scalability, compliance, and
              operational efficiency.
            </p>

          </div>

          {/* MAIN CARD */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/70 backdrop-blur-xl p-8 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/40 blur-3xl rounded-full"></div>

            <div className="relative z-10 space-y-8">

              <p className="text-slate-600 leading-relaxed text-lg">
                Incorporated on <span className="font-extrabold text-blue-900">16 December 2004</span>, OMX Info Management Limited is a Public Limited Company registered with the Registrar of Companies, Delhi. As part of the OM Group<span className="font-extrabold text-blue-900">(Approx. ₹3000 Crore)</span> , and backed by OM Logistics Ltd. with a strong nationwide presence, OMX offers comprehensive Records & Information Management Services

                We specialize in document storage, scanning, digitization, and cloud-based Document Management System (DMS) solutions. Our services are designed to help organizations manage and secure one of their most valuable assets — business information — ensuring accessibility, compliance, and operational efficiency.

                With <span className="font-extrabold text-blue-900">ISO 9001:2015</span> certification and over two decades of expertise, OMX has developed state-of-the-art infrastructure, proprietary DMS software, and skilled in-house manpower to deliver reliable and high-quality services to clients across industries.
              </p>

              {/* PHILOSOPHY */}
              <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100/40 p-8 md:p-10">

                <div className="flex items-center gap-4 mb-6">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-sm">
                    <ShieldCheck size={24} />
                  </div>

                  <div>

                    <p className="uppercase tracking-[0.25em] text-blue-500 text-xs font-semibold">
                      OUR PHILOSOPHY
                    </p>

                    <h3 className="text-3xl font-semibold text-slate-900">
                      Our Approach
                    </h3>

                  </div>

                </div>

                <p className="text-slate-600 text-lg leading-relaxed">
                  At OMX, we believe business information becomes truly valuable
                  when it is secure, accessible, and intelligently managed. We
                  go beyond traditional storage systems to deliver modern
                  information management solutions focused on compliance,
                  operational efficiency, and scalability.
                </p>

              </div>

              {/* FEATURES */}
              <div className="grid md:grid-cols-2 gap-6">

                {[
                  {
                    title: "Safest Infrastructure",
                    desc: "RCC buildings with fire, flood & theft protection systems.",
                    icon: <Building2 size={22} />,
                    color: "blue",
                  },

                  {
                    title: "Advanced DMS Software",
                    desc: "Cloud-enabled document retrieval and inventory tracking.",
                    icon: <Database size={22} />,
                    color: "purple",
                  },

                  {
                    title: "Pan India Operations",
                    desc: "Strong nationwide network powered by OM Logistics.",
                    icon: <Globe2 size={22} />,
                    color: "emerald",
                  },

                  {
                    title: "Data Security",
                    desc: "Enterprise-grade compliance and confidentiality systems.",
                    icon: <ShieldCheck size={22} />,
                    color: "orange",
                  },
                ].map((item, i) => (

                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                  >

                    <div className="flex items-start gap-4">

                      <div
                        className={`
                          w-14 h-14 rounded-2xl shrink-0
                          flex items-center justify-center shadow-sm
                          ${
                            item.color === "blue"
                              ? "bg-blue-100 text-blue-700"
                              : item.color === "purple"
                              ? "bg-purple-100 text-purple-700"
                              : item.color === "emerald"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-orange-100 text-orange-700"
                          }
                        `}
                      >
                        {item.icon}
                      </div>

                      <div>

                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {item.title}
                        </h3>

                        <p className="text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">

                <div>

                  <h3 className="text-2xl font-semibold text-slate-900">
                    Strongly Focused on TAT & Commitments
                  </h3>

                  <p className="text-slate-500 mt-2">
                    Delivering innovation, reliability, and excellence in
                    information management.
                  </p>

                </div>

                <Link href="/services">
  <button className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1574AD] text-white hover:scale-105 transition duration-300 shadow-xl">
    
    Explore Services

    <ArrowRight
      size={18}
      className="group-hover:translate-x-1 transition"
    />
    
  </button>
</Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CLIENTS ================= */}
      <section className="py-10 md:py-16">

        <div className="max-w-[1280px] mx-auto px-6 mb-10">

          <p className="uppercase tracking-[0.25em] text-blue-600 text-xs font-semibold mb-4">
            OUR CLIENTS
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-slate-900">

            Global Trust
            <span className="font-semibold text-[#1574AD]">
              {" "}Proven Reliability
            </span>

          </h2>

        </div>

        <ClientCarousel clientData={clientData} />

      </section>

    </div>
  );
}

















