import Image from "next/image";
import { ShieldCheck, Award, Zap, Globe } from "lucide-react";
import ImageSlider from "@/components/About/ImageSlider";
import ClientCarousel from "@/components/About/ClientCarousel";

export default function AboutPage() {

  const images = [
    "/images/wahrehouse1.png",
    "/images/wahrehouse.png",
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
    { name: "Vodafone", logo: "/logo/client8.jpg" },
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

  return (
    <div className="bg-gradient-to-b from-[#f8fbff] via-[#f1f6ff] to-[#f8fbff] text-[#0f172a]">

      {/* HERO */}
      <section className="relative  overflow-hidden">
        <div className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] max-h-[800px] min-h-[420px]">

          <Image 
            src="/images/aboutuspage.jpeg"
            alt="OMX Industrial Infrastructure"
            fill
            priority
            className="object-cover object-[center_20%] lg:object-[center_30%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20">

              <div className="text-white max-w-3xl space-y-4 md:space-y-6">

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                  Transforming Document Storage
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-gray-300">
                  Smarter document management solutions designed to simplify storage,
                  improve access, and protect critical data
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>

{/* STATS */}
<section className="py-16">
  <div className="max-w-[1200px] mx-auto px-6">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        { label: "Founded", val: "2004", icon: <Award size={20}/>, bg: "from-blue-100 to-blue-50", iconBg: "bg-blue-200 text-blue-700" },
        { label: "Our-Reach", val: "750+", icon: <Globe size={20}/>, bg: "from-purple-100 to-purple-50", iconBg: "bg-purple-200 text-purple-700" },
        { label: "TAT", val: "3 Min", icon: <Zap size={20}/>, bg: "from-yellow-100 to-yellow-50", iconBg: "bg-yellow-200 text-yellow-700" },
        { label: "Lost Doc", val: "0%", icon: <ShieldCheck size={20}/>, bg: "from-green-100 to-green-50", iconBg: "bg-green-200 text-green-700" },
      ].map((stat, i) => (

        <div
          key={i}
          className={`group rounded-2xl p-6 text-center bg-gradient-to-br ${stat.bg} shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
        >

          {/* Icon */}
          <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${stat.iconBg} group-hover:scale-110 transition`}>
            {stat.icon}
          </div>

          {/* Value */}
          <p className="text-2xl md:text-3xl font-bold text-[#0f172a]">
            {stat.val}
          </p>

          {/* Label */}
          <p className="text-sm text-gray-600 mt-1">
            {stat.label}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>

      {/* STORY */}
      <section className="py-12 md:py-10 bg-transparent">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          <div className="relative h-[300px] sm:h-[350px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
            <ImageSlider images={images} />
          </div>

          <div className="space-y-6">

            <h2 className="text-3xl md:text-5xl font-light">
              A Story of <span className="font-semibold text-[#000033]">Strategic Expansion</span>
            </h2>

            <p className="text-gray-600">
              OMX Info Management operates as an ISO certified entity backed by OM Group
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[#000033]">
                Offers Records & Information Management Services
              </h3>

              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Helps manage and secure your business information</li>
                <li>Over two decades of expertise in Record Management and Digitization</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[#000033]">
                Our Philosophy
              </h3>

              <p className=" text-gray-700">
                "Managing Information with Safer Smarter Solutions"
              </p>

              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Believes business data is valuable only if accessible when needed</li>
                <li>Thinks "beyond the box" for managing all record formats</li>
                <li>Focuses on compliance and risk management</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

     {/* ABOUT */}
{/* ABOUT */}
<section className="py-14 md:py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-[1200px] mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
        About OMX Info Management Ltd
      </h2>
      <p className="mt-4 text-slate-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
        OMX Info Management Limited is a trusted leader in Records & Information Management, delivering safest, scalable, 
        and technology-driven solutions to businesses across India.
      </p>
    </div>

    {/* MAIN CARD */}
    <div className="bg-white rounded-3xl p-6 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] space-y-6">

      {/* INTRO */}
      <p className="text-slate-600 leading-relaxed">
        Incorporated on 16 December 2004, OMX Info Management Limited is a Public Limited Company registered with the 
        Registrar of Companies, Delhi. As part of the OM Group (Approx. ₹3000 Crore), and backed by OM Logistics Ltd. 
        with a strong nationwide presence, OMX offers comprehensive Records & Information Management Services.
      </p>

      <p className="text-slate-600 leading-relaxed">
        We specialize in document storage, scanning, digitization, and cloud-based Document Management System (DMS) solutions. 
        Our services are designed to help organizations manage and secure one of their most valuable assets — business information — 
        ensuring accessibility, compliance, and operational efficiency.
      </p>

      <p className="text-slate-600 leading-relaxed">
        With ISO 9001:2015 certification and over two decades of expertise, OMX has developed state-of-the-art infrastructure, 
        proprietary DMS software, and skilled in-house manpower to deliver reliable and high-quality services to clients across industries.
      </p>

      {/* PHILOSOPHY */}
      <div className="bg-orange-300 p-6 rounded-xl">
        <h3 className="font-semibold text-slate-800 mb-2">Our Approach</h3>
        <p className="text-black-600 text-sm leading-relaxed">
          At OMX, we believe that business data is only valuable when it is Safest and faster, accessible, and well-managed. 
          We think beyond traditional storage, enabling organizations to manage records across all formats while 
          meeting compliance and risk management requirements efficiently.
        </p>
      </div>

      {/* INFRA + FEATURES */}
      <div className="grid md:grid-cols-2 gap-6 pt-2">
        <div className="bg-green-300 p-5 rounded-xl">
          <h3 className="font-semibold text-slate-800 mb-2">Safest and Smarter Infrastructure</h3>
          <p className="text-black-600 text-sm">
            Own RCC buildings across India with protection against fire, flood, cyclone, theft, and other risks.
          </p>
        </div>

        <div className="bg-blue-300 p-5 rounded-xl">
          <h3 className="font-semibold text-black-800 mb-2">Advanced DMS Software</h3>
          <p className="text-black-600 text-sm">
            Safest document access, inventory tracking, retrieval requests, and cloud/server-based storage systems.
          </p>
        </div>

        <div className="bg-purple-300 p-5 rounded-xl">
          <h3 className="font-semibold text-black-800 mb-2">Pan India Operations</h3>
          <p className="text-black-600 text-sm">
            Strong nationwide network supported by OM Logistics infrastructure and dedicated teams.
          </p>
        </div>

        <div className="bg-[#6a994e] p-5 rounded-xl">
          <h3 className="font-semibold text-slate-800 mb-2">Data Security & Compliance</h3>
          <p className="text-black-600 text-sm">
            Enterprise-grade security systems ensuring confidentiality, compliance, and risk management.
          </p>
        </div>
      </div>

      {/* INDUSTRIES */}
      <div className="pt-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Industries We Serve
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Banking, Hospitals, Pharmaceuticals, Insurance, Legal & Confidential Records, Automobiles, Energy, Media & Entertainment, 
          Telecom, FMCG, Logistics, Airlines, Real Estate, Educational Institutions, and many more sectors across multiple departments 
          including Finance, HR, Operations, Marketing, and Administration.
        </p>
      </div>

      {/* SERVICES */}
      <div className="pt-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">
          Our Key Services
        </h3>

        <div className="grid md:grid-cols-2 gap-4 text-slate-600 text-sm">
          <p>• Record Management</p>
          <p>• Scanning & Digitization Services</p>
          <p>• Digital Document Storage (DMS)</p>
          <p>• Data Security & Compliance Solutions</p>
          <p>• Safest Shredding & Destruction Services</p>
          <p>• Data Entry & Indexing</p>
          <p>• Filing, Binding & Indexing</p>
          <p>• Mail Room Management</p>
          <p>• Cloud Storage & Information Management</p>
        </div>
      </div>

      {/* EXTRA VALUE */}
      <div className="pt-6">
        <p className="text-slate-600 text-sm leading-relaxed">
          Our scanning and digitization services help businesses convert physical records into accurate, searchable digital formats, 
          improving accessibility, reducing storage costs, and ensuring complete confidentiality. 
          We cater to enterprises of all sizes, delivering customized solutions tailored to their operational needs.
        </p>
      </div>

      {/* MISSION */}
      <div className="pt-6 border-t text-center">
        <p className="text-slate-900 font-medium text-lg">
          “Strongly Focused on TAT & Commitments”
        </p>
        <p className="text-slate-500 text-sm mt-2">
          Delivering innovation, reliability, and excellence in information management.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CLIENTS */}
      <section className="py-10 md:py-4 bg-transparent">
        <div className="max-w-[1400px] mx-auto px-6 mb-6">
          <h2 className="text-3xl md:text-4xl">
            Global Trust <span className="text-[#000033] font-semibold">Proven Reliability</span>
          </h2>
        </div>

        <ClientCarousel clientData={clientData} />
      </section>

    </div>
  );
}