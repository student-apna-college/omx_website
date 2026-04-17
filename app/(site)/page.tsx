import HeroSection from "@/components/Home/HeroCarousel";
import TechnicalSection from "@/components/Home/AnimatedSection";
import IndustryTicker from "@/components/Home/IndustryTicker";
import ShowcaseSection from "@/components/Home/ShowcaseSection";
import Accordian from "@/components/Home/Accordian";
import ClientCarousel from "@/components/About/ClientCarousel";
import RotatingWheel from "@/components/Home/RotatingWheel";

export default function Home() {

  const slides = [
    {
      title: "Eco Friendly Shredding Services",
      sub: "OMX Info Management Ltd.provides Eco-friendly shredding solutions ensuring secure document destruction, protecting sensitive information, supporting compliance standards, and promoting sustainable recycling practices for businesses.",
      img: "/industry/fmcg1.png",
      accent: "OMX INFO MANAGEMENT LTD",
    },
    {
      title: "Next-Gen Document Storage Facility",
      sub: "We offer Next-generation document storage facility offering secure, scalable solutions for efficient record management, quick access, data protection, and seamless integration with modern business operations.",
      img: "/images/wharehouse4.jpeg",
      accent: "OMX INFO MANAGEMENT LTD",
    },
    {
      title: "Document Management System & Smart Scanning Solutions ",
      sub: "Advanced document scanning and DMS solutions enabling Safest storage, quick retrieval, improved accuracy, workflow automation, and seamless digital transformation for businesses.",
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
    { name: "Yatharth", logo: "/logo/yatharth.png" },
,
  ];


  return (
  <div className="bg-gradient-to-b from-white via-blue-50 to-white text-[#0f172a]">

    {/* HERO */}
    <HeroSection slides={slides} />

    {/* TECH */}
    <TechnicalSection />

    {/* SHOWCASE */}
    <ShowcaseSection />

   

    {/* FAQ */}
    
      <Accordian />

    

    {/* CLIENTS */}
    <section className="py-12 md:py-16 bg-white">

  <div className="max-w-[1400px] mx-auto px-6 mb-6">
    <h2 className="text-3xl md:text-4xl">
      Global Trust <span className="text-[#000033] font-semibold">Proven Reliability</span>
    </h2>
  </div>

  <ClientCarousel clientData={clientData} />
     {/* INDUSTRY */}
    <IndustryTicker industries={industries} />

</section>
  </div>
);}