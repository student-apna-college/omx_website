import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowDownRight, Award, Zap, Globe } from 'lucide-react';
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
    <div className="bg-white text-[#1a1a1a]">

      {/* HERO SECTION */}
<section className="relative pt-16 md:pt-20 pb-0 overflow-hidden w-full">
  <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] min-h-[400px] bg-gray-100">

    {/* Responsive Image */}
    <Image 
      src="/images/abou.jpeg"
      alt="OMX Industrial Infrastructure"
      fill
      sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 100vw,
             100vw"
      className="object-cover object-center"
      priority
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 z-10" />

    {/* Content */}
    <div className="absolute inset-0 z-20 flex items-center">
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-20">
        
       <div className="text-white max-w-4xl">

  <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-light leading-tight tracking-tight">
    Transforming document storage
  </h1>

  <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed">
    We provide secure and scalable document management solutions designed to simplify record storage, improve accessibility, and protect sensitive information. Using modern technology and reliable infrastructure, we help businesses manage documents efficiently, reduce risk, and enhance productivity while supporting long-term growth in a digital-first environment.
  </p>

</div>

      </div>
    </div>

  </div>
</section>

      {/* STATS SECTION */}
      <section className="relative z-40 w-full bg-white border-b border-gray-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {[
            { label: "Founded", val: "2004", icon: <Award size={18}/> },
            { label: "Offices", val: "750+", icon: <Globe size={18}/> },
            { label: "TAT", val: "3 Min", icon: <Zap size={18}/> },
            { label: "Lost Doc", val: "0%", icon: <ShieldCheck size={18}/> },
          ].map((stat, i) => (
            <div key={i} className="py-10 px-6 flex flex-col items-center">
              <div className="text-[tomato] mb-3">{stat.icon}</div>
              <p className="text-3xl font-bold">{stat.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE SLIDER + RIGHT TEXT */}
      <section className="py-40 bg-[#fcfcfc]">
        <div className="max-w-[1440px] mx-auto px-8 grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative aspect-[4/5] bg-gray-200 border overflow-hidden">
            <ImageSlider images={images} />
          </div>

          <div className="space-y-12">
            <h2 className="text-6xl font-light tracking-tighter leading-none">
              A Story of <span className="font-medium">Strategic Expansion.</span>
            </h2>
            <p className="text-gray-500 text-lg">
              OMX Info Management operates as an <strong>ISO 9001:2015 Certified</strong> entity, leveraging the immense infrastructure of the <strong>OM Group</strong>.
            </p>
            <Link href="/services" className="flex items-center gap-4 group">
              <span className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 group-hover:text-[tomato] group-hover:border-[tomato] transition-all">
                Explore Infrastructure
              </span>
              <ArrowDownRight size={20} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT CARD SECTION */}
      <section className="py-32 bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
              About OMX Info Management Ltd
            </h2>
            <p className="text-gray-500 max-w-[900px] mx-auto text-sm sm:text-base md:text-lg">
              Established in 2004, OMX Info Management Ltd is one of the leading record management and document storage service providers in India.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white shadow-xl rounded-xl p-8 md:p-12 space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              Established in 2004, OMX Info Management Ltd is one of the leading record management and document storage service providers in India. The company was founded with a clear vision to redefine document security, record storage, and digital document management by providing safe, reliable, and technology-driven solutions for businesses across different industries.
            </p>

            <p>
              OMX Info Management Ltd is an <strong>ISO 9001:2015 certified</strong> company and operates with the strong infrastructure support of the OM Group, a trusted business group with a turnover of more than <strong>3000 Crore</strong>.
            </p>

            <p>
              We specialize in secure document storage, warehouse record management, document scanning, secure shredding services, and advanced DMS (Document Management System) software.
            </p>

            <p>
              Our storage facilities are designed with high-level security systems, fire protection, controlled environment, and proper tracking methods to ensure complete safety of important records.
            </p>

            <p>
              Our company manages highly confidential records for industries such as banking, finance, pharmaceutical, corporate, and institutional sectors where accuracy and safety are critical.
            </p>

            <p>
              With our advanced DMS software, clients can access records digitally while physical files remain stored safely inside secure <strong>Tier-4 level storage vaults</strong>.
            </p>

            <p className="font-semibold text-[#1a1a1a]">
              At OMX Info Management Ltd, our mission is to provide modern, secure, and efficient document management solutions that help organizations protect their data and move towards a smart digital record system with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENTS CAROUSEL */}
      <section className="py-32 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-8 mb-16">
          <h2 className="text-4xl font-light text-[#1a1a1a]">
            Trusted by <span className="font-medium italic">Global Institutions.</span>
          </h2>
        </div>
        <ClientCarousel clientData={clientData} />
      </section>

    </div>
  );
}