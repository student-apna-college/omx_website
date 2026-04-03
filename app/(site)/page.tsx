import HeroSection from "@/components/Home/HeroCarousel";
import TechnicalSection from "@/components/Home/AnimatedSection";
import IndustryTicker from "@/components/Home/IndustryTicker";
import ShowcaseSection from "@/components/Home/ShowcaseSection";
import Accordian from "@/components/Home/Accordian";
import ClientCarousel from "@/components/About/ClientCarousel";

export default function Home() {

  const slides = [
    {
      title: "Trusted Document Management Solutions",
      sub: "OMX Info Management Ltd provides professional document management services including scanning, storage, shredding, and digital record management.",
      img: "/images/shradding.png",
      accent: "OMX INFO MANAGEMENT LTD",
    },
    {
      title: "Warehouse & Record Storage Facility",
      sub: "We offer Trusted warehouse and record storage services designed for companies that need safe space for important documents.",
      img: "/images/placeholder6.jpeg",
      accent: "OMX INFO MANAGEMENT LTD",
    },
    {
      title: "Scanning, Shredding & DMS Software",
      sub: "High-quality document scanning,Confidential Document Storage shredding, and advanced DMS software to help organizations manage records digitally.",
      img: "/images/wharhouse2.png",
      accent: "OMX INFO MANAGEMENT LTD",
    },
  ];

  const industries = [
    "Banking","Insurance","Hospitals","Telecom","Pharma",
    "Real Estate","Airlines","FMCG","Logistics"
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
    { name: "MotherHood", logo: "/logo/motherhood.png" },
    { name: "Motherland", logo: "/logo/motherland.png" },
    { name: "pristyncare", logo: "/logo/pristyn care.png" },
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
      

      {/* CLIENTS */}
            <section className="py-20 md:py-32 bg-white">
              <div className="max-w-[1400px] mx-auto px-6 mb-12">
                <h2 className="text-3xl md:text-4xl">
                  Global Trust <span className="text-[rgb(0,104,83)] font-semibold">Proven Reliability</span>
                </h2>
              </div>
      
              <ClientCarousel clientData={clientData} />
            </section>
    </div>
  );
}