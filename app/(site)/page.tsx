import HeroSection from "@/components/Home/HeroCarousel";
import TechnicalSection from "@/components/Home/AnimatedSection";
import IndustryTicker from "@/components/Home/IndustryTicker";
import ShowcaseSection from "@/components/Home/ShowcaseSection";
import Accordian from "@/components/Home/Accordian";

export default function Home() {
  const slides = [
    {
      title: "Secure Document Management Solutions",
      sub: "OMX Info Management Ltd provides professional document management services including scanning, storage, shredding, and digital record management. We help businesses keep their important files safe, organized, and easy to access using modern technology and secure storage facilities. Our goal is to provide reliable solutions that improve efficiency and reduce paperwork.",
      img: "/images/placeholder_1.png",
      accent: "OMX INFO MANAGEMENT LTD",
    },
    {
      title: "Warehouse & Record Storage Facility",
      sub: "We offer secure warehouse and record storage services designed for companies that need safe space for important documents and files. Our storage facility includes proper security systems, fire protection, and organized record management to ensure complete safety. With our professional storage solutions, businesses can store records for long periods without worrying about damage or loss.",
      img: "/images/placeholder_2.jpeg",
      accent: "OMX INFO MANAGEMENT LTD",
    },
    {
      title: "Scanning, Shredding & DMS Software",
      sub: "Our company provides high-quality document scanning, secure shredding, and advanced DMS software to help organizations manage records digitally. We help businesses move from paper files to digital systems safely and quickly. Our services improve document security, reduce storage space, and make file searching fast and easy.",
      img: "/images/wharhouse2.png",
      accent: "OMX INFO MANAGEMENT LTD",
    },
  ];

  const industries = [
    "Banking","Insurance","Hospitals","Telecom","Pharma","Real Estate",
    "Airlines","FMCG","Logistics"
  ];

  return (
    <div className="bg-white text-[#1a1a1a] selection:bg-[tomato] selection:text-white">
      <HeroSection slides={slides} />
      <TechnicalSection />
      <ShowcaseSection />
      <IndustryTicker industries={industries} />
      <Accordian />
    </div>
  );
}