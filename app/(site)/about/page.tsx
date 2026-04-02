import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowDownRight, Award, Zap, Globe } from "lucide-react";
import ImageSlider from "@/components/About/ImageSlider";
import ClientCarousel from "@/components/About/ClientCarousel";

export default function AboutPage() {

  const images = [
    "/images/wahrehouse1.png",
    "/images/wahrehouse.png",
    "/images/placeholder_3.jpeg",
  ];

  const clientData = [
    { name: "World Health Organization", logo: "/logo/client1.jpg" },
    { name: "European Union", logo: "/logo/client2.jpg" },
    { name: "ICICI Bank Credit Cards", logo: "/logo/client3.jpg" },
    { name: "ICICI Bank", logo: "/logo/client4.jpg" },
    { name: "Easy Bill", logo: "/logo/client5.jpg" },
    { name: "PNB Housing", logo: "/logo/client6.jpg" },
    { name: "Panasonic", logo: "/logo/client7.jpg" },
    { name: "Idea", logo: "/logo/client8.jpg" },
    { name: "MAX Healthcare", logo: "/logo/client9.jpg" },
    { name: "Altus Group", logo: "/logo/client10.jpg" },
    { name: "Deepali Design and Exhibits", logo: "/logo/client11.jpg" },
    { name: "Catalyst Clinical Services", logo: "/logo/client12.jpg" },
    { name: "Tokai Imperial", logo: "/logo/client13.jpg" },
    { name: "Fortis Hospital", logo: "/logo/client14.jpg" },
    { name: "IBS Hospital", logo: "/logo/client16.jpg" },
    { name: "FARO", logo: "/logo/client17.png" },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white text-[#0f172a]">

      {/* HERO */}
      <section className="relative pt-16 md:pt-20 overflow-hidden">
        <div className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] min-h-[420px]">

          <Image 
            src="/images/abou.jpeg"
            alt="OMX Industrial Infrastructure"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20">

              <div className="text-white max-w-3xl space-y-6">

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light">
                  Transforming <span className="font-semibold">document storage</span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-gray-300">
                  Secure, scalable document management solutions designed to simplify storage,
                  improve access, and protect critical data.
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto px-6">

          {[
            { label: "Founded", val: "2004", icon: <Award size={18}/> },
            { label: "Offices", val: "750+", icon: <Globe size={18}/> },
            { label: "TAT", val: "3 Min", icon: <Zap size={18}/> },
            { label: "Lost Doc", val: "0%", icon: <ShieldCheck size={18}/> },
          ].map((stat, i) => (

            <div key={i} className="bg-blue-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="text-[rgb(0,104,83)] mb-2 flex justify-center">{stat.icon}</div>
              <p className="text-2xl font-bold">{stat.val}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>

          ))}

        </div>
      </section>

      {/* IMAGE + TEXT */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <ImageSlider images={images} />
          </div>

          <div className="space-y-8">

            <h2 className="text-3xl md:text-5xl font-light">
              A Story of <span className="font-semibold text-[rgb(0,104,83)]">Strategic Expansion</span>
            </h2>

            <p className="text-gray-600">
              OMX Info Management operates as an ISO certified entity backed by OM Group.
            </p>

            <Link href="/services" className="inline-flex items-center gap-3 group">
              <span className="text-sm font-bold uppercase border-b-2 border-[rgb(0,104,83)] pb-1">
                Explore Infrastructure
              </span>
              <ArrowDownRight size={20} />
            </Link>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-32 bg-blue-50">
        <div className="max-w-[1100px] mx-auto px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            About OMX Info Management Ltd
          </h2>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl text-gray-600 space-y-4">
            <p>Established in 2004, OMX Info Management Ltd is a leader in document storage.</p>
            <p>We provide secure scanning, storage, and DMS solutions.</p>
            <p> Established in 2004, OMX Info Management Ltd is one of the leading record management and document storage service providers in India. The company was founded with a clear vision to redefine document security, record storage, and digital document management by providing safe, reliable, and technology-driven solutions for businesses across different industries. </p> <p> OMX Info Management Ltd is an <strong>ISO 9001:2015 certified</strong> company and operates with the strong infrastructure support of the OM Group, a trusted business group with a turnover of more than <strong>3000 Crore</strong>. </p>
          <p> We specialize in secure document storage, warehouse record management, document scanning, secure shredding services, and advanced DMS (Document Management System) software. </p> <p> Our storage facilities are designed with high-level security systems, fire protection, controlled environment, and proper tracking methods to ensure complete safety of important records. </p> <p> Our company manages highly confidential records for industries such as banking, finance, pharmaceutical, corporate, and institutional sectors where accuracy and safety are critical. </p>
          <p> With our advanced DMS software, clients can access records digitally while physical files remain stored safely inside secure <strong>Tier-4 level storage vaults</strong>. </p> <p className="font-semibold text-[#1a1a1a]"> At OMX Info Management Ltd, our mission is to provide modern, secure, and efficient document management solutions that help organizations protect their data and move towards a smart digital record system with confidence. </p>
          </div>

        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl">
            Trusted by <span className="text-[rgb(0,104,83)] font-semibold">Global Institutions</span>
          </h2>
        </div>

        <ClientCarousel clientData={clientData} />
      </section>

    </div>
  );
}