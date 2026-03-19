import Image from 'next/image';
import { Target, Eye, ShieldCheck, ArrowDownRight, Award, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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
  ];
  return (
    <div className="bg-white text-[#1a1a1a]">
      
      <section className="relative pt-20 pb-0 overflow-hidden w-full">
        <div className="relative w-full h-[80vh] min-h-[500px] group overflow-hidden bg-gray-100">
          {/* Image fills full width, height reduced to 60% of viewport */}
          <Image 
            src="/images/placeholder_1.jpeg" 
            alt="OMX Industrial Infrastructure" 
            fill 
            className="object-cover transition-all duration-[2000ms] group-hover:scale-105"
            priority
          />
          
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Content Over Image */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center">
            <div className="max-w-[1440px] mx-auto w-full px-8 md:px-20">
              <div className="grid lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-10 bg-[tomato]"></div>
                    <span className="text-[tomato] text-[10px] font-black uppercase tracking-[0.5em]">Institutional Legacy</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.85] m-0 text-white">
                    ARCHITECTURE OF <br/>
                    <span className="font-medium italic text-[tomato]">RELIABILITY.</span>
                  </h1>
                </div>
                <div className="lg:col-span-4 lg:pb-4">
                  <div className="p-6 border-l border-white/30 backdrop-blur-sm bg-black/20">
                    <p className="text-lg text-gray-200 font-medium leading-snug">
                      Established in 2004, OMX Info Management stands as the premier Record Management authority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Float Badge - Scaled Down */}
          <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-6 border border-gray-100 z-30 hidden md:block">
             <p className="text-3xl font-bold tracking-tighter text-[#1a1a1a]">3000Cr+</p>
          </div>
        </div>
      </section>

      <section className="relative z-40 w-full bg-white border-b border-gray-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full divide-x divide-gray-100">
           {[
             { label: "Founded", val: "2004", icon: <Award size={18}/> },
             { label: "Offices", val: "750+", icon: <Globe size={18}/> },
             { label: "TAT", val: "3 Min", icon: <Zap size={18}/> },
             { label: "Lost Doc", val: "0%", icon: <ShieldCheck size={18}/> },
           ].map((stat, i) => (
             <div key={i} className="py-10 px-6 flex flex-col items-center justify-center group hover:bg-gray-50 transition-all duration-500 cursor-default text-[#1a1a1a]">
                <div className="text-[tomato] mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                <p className="text-3xl md:text-4xl font-bold tracking-tighter group-hover:text-[tomato] transition-colors">
                  {stat.val}
                </p>
             </div>
           ))}
        </div>
      </section>

      <section className="py-40 bg-[#fcfcfc]">
        <div className="max-w-[1440px] mx-auto px-8 grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative aspect-[4/5] bg-gray-200 border border-gray-100 overflow-hidden shadow-sm group">
            <Image 
              src="/images/placeholder_2.jpeg" 
              alt="Archives" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
            <div className="absolute bottom-12 left-12 text-white z-10">
              <p className="text-xs font-mono uppercase tracking-[0.3em] opacity-70 mb-2">Corporate Mantra</p>
              <h3 className="text-3xl font-light italic">"Managing Information with <br/> Safer Smarter Solutions."</h3>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-6xl font-light tracking-tighter leading-none">A Story of <br/><span className="font-medium">Strategic Expansion.</span></h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed">
              <p>
                OMX Info Management operates as an <strong>ISO 9001:2015 Certified</strong> entity, 
                leveraging the immense infrastructure of the <strong>3000 Crore OM Group</strong>. 
                Our journey began with a single vision: to redefine document security in India.
              </p>
              <p>
                Today, we manage Banking Records and Pharmaceutical data with clinical 
                precision. Our proprietary DMS Software ensures that while your records are physically 
                stored in Tier-4 vaults, they are digitally at your fingertips.
              </p>
            </div>
            <div className="pt-8">
               <Link href="/services" className="flex items-center gap-4 group">
                  <span className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 group-hover:text-[tomato] group-hover:border-[tomato] transition-all">Explore Infrastructure</span>
                  <ArrowDownRight size={20} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      </section>

     <section className="py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid md:grid-cols-3 border-t border-l border-gray-200">
             {[
               { title: "Our Vision", icon: <Eye size={40} />, text: "Providing best-in-class Record Management within reach of every Industry through technical excellence." },
               { title: "Our Mission", icon: <Target size={40} />, text: "To manage information with skill, expertise, and compassion, ensuring documents are stored with safer, cheaper solutions." },
               { title: "Quality Policy", icon: <ShieldCheck size={40} />, text: "Committed to 100% timely delivery, continuous automation, and improving document care lifecycle." },
             ].map((box, i) => (
               <div key={i} 
                className={`p-16 border-r border-b border-gray-200 transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl relative z-10 
                ${i === 2 ? 'bg-[#1a1a1a] text-white hover:bg-black' : 'bg-white hover:bg-gray-50'}`}
               >
                 <div className="text-[tomato] mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {box.icon}
                 </div>
                 <h3 className="text-4xl font-light mb-6 tracking-tight">
                    {box.title.split(' ')[0]} <span className="font-medium italic">{box.title.split(' ')[1]}</span>
                 </h3>
                 <p className={`text-sm leading-relaxed ${i === 2 ? 'text-gray-400' : 'text-gray-500'}`}>
                    {box.text}
                 </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-40 max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-xs font-black text-[tomato] uppercase tracking-[0.5em] mb-6 underline decoration-2 underline-offset-8">Values</h2>
            <h3 className="text-5xl font-light tracking-tighter leading-none">The OMX <br/><span className="font-medium">Foundations.</span></h3>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {[
              { t: "Service Over Profit", d: "Document care is treated as a strategic responsibility, not just a business transaction." },
              { t: "Transparency", d: "Ethical approach in dealing with sensitive information at every operational level." },
              { t: "Team Orientation", d: "Recognizing and rewarding employee motivation to maintain high-security standards." },
              { t: "Customer Asset", d: "Treating each customer as our greatest asset, as if they were our only one." }
            ].map((v, i) => (
              <div key={i} className="space-y-4">
                <span className="text-[10px] font-mono text-gray-300 font-bold uppercase tracking-widest">Protocol 0{i+1}</span>
                <h4 className="text-xl font-bold">{v.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 pb-32">
        <div className="max-w-[1440px] mx-auto bg-[#1a1a1a] p-20 md:p-32 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[tomato]/5 -skew-x-12 translate-x-1/4" />
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.85]">
              TRUST YOUR <br/>
              <span className="font-medium italic text-[tomato]">LEGACY</span> TO US.
            </h2>
            <div className="pt-8 flex flex-col md:flex-row gap-8">
              <Link href="/contact" className="bg-[tomato] text-white px-12 py-6 text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                Schedule Site Audit
              </Link>
              <div className="flex flex-col justify-center border-l border-gray-700 pl-8">
                 <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Part of the OM Group Network</p>
                 <p className="text-sm font-bold text-gray-300 underline decoration-[tomato]">View Group Alliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white overflow-hidden border-t border-gray-100">
    <div className="max-w-[1440px] mx-auto px-8 mb-16">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-[2px] w-12 bg-[tomato]"></div>
        <span className="text-[tomato] text-[10px] font-black uppercase tracking-[0.4em]">Strategic Partners</span>
      </div>
      <h2 className="text-4xl font-light tracking-tighter text-[#1a1a1a]">
        Trusted by <span className="font-medium italic">Global Institutions.</span>
      </h2>
    </div>

    {/* The Carousel Container */}
    <div className="relative flex overflow-hidden group">
      <div className="flex animate-marquee whitespace-nowrap py-12">
        {/* Doubled array for seamless loop */}
        {[...clientData, ...clientData].map((client, index) => (
          <div 
            key={index} 
            className="mx-16 flex flex-col items-center justify-center min-w-[180px] group/item transition-all duration-500"
          >
            {/* Image is now full opacity/color by default */}
            <div className="relative w-40 h-20 transition-all duration-500 transform group-hover/item:scale-125 group-hover/item:-translate-y-2">
              <Image 
                src={client.logo} 
                alt={client.name} 
                fill 
                className="object-contain filter-none drop-shadow-sm group-hover/item:drop-shadow-xl" 
              />
            </div>
            {/* Optional name label that only appears on hover for a cleaner look */}
            {/* <p className="text-[9px] font-mono text-[tomato] uppercase tracking-[0.3em] mt-4 opacity-0 group-hover/item:opacity-100 transition-all duration-300">
              {index}
            </p> */}
          </div>
        ))}
      </div>

      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
    </div>
  </section>
    </div>
  );
}