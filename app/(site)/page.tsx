import HeroSection from "@/components/Home/HeroCarousel";
import TechnicalSection from "@/components/Home/AnimatedSection";
import IndustryTicker from "@/components/Home/IndustryTicker";
import ShowcaseSection from "@/components/Home/ShowcaseSection";
import Accordian from "@/components/Home/Accordian";

export default function Home() {

  const slides = [
    {
      title: "Safer Document Management Solutions",
      sub: "OMX Info Management Ltd provides professional document management services including scanning, storage, shredding, and digital record management.",
      img: "/images/shradding.png",
      accent: "OMX INFO MANAGEMENT LTD",
    },
    {
      title: "Warehouse & Record Storage Facility",
      sub: "We offer secure warehouse and record storage services designed for companies that need safe space for important documents.",
      img: "/images/placeholder_2.jpeg",
      accent: "OMX INFO MANAGEMENT LTD",
    },
    {
      title: "Scanning, Shredding & DMS Software",
      sub: "High-quality document scanning, secure shredding, and advanced DMS software to help organizations manage records digitally.",
      img: "/images/wharhouse2.png",
      accent: "OMX INFO MANAGEMENT LTD",
    },
  ];

  const industries = [
    "Banking","Insurance","Hospitals","Telecom","Pharma",
    "Real Estate","Airlines","FMCG","Logistics"
  ];

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white text-[#0f172a] selection:bg-[rgb(0,104,83)] selection:text-white">

      {/* HERO */}
      <HeroSection slides={slides} />

      {/* TECH SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <TechnicalSection />
      </section>

      {/* SHOWCASE */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <ShowcaseSection />
      </section>

      {/* INDUSTRY TICKER */}
      <section className="py-12 md:py-16 bg-white">
        <IndustryTicker industries={industries} />
      </section>

      {/* ACCORDION (FAQ) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <Accordian />
      </section>

    </div>
  );
}