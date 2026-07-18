import { motion } from "framer-motion";
import { Mic, PlayCircle, Calendar } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import { Link } from "wouter";
import hero4 from "../assets/hero_4.jpg";

const NEWS_SLIDES: HeroSlide[] = [
  {
    image: hero4,
    eyebrow: "Stay Updated",
    heading: "News & Media",
    subtext: "Read the latest updates, press releases, and listen to the Health Tech Unleash Podcast.",
  }
];

export default function News() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider slides={NEWS_SLIDES} height="50dvh" />

      {/* Podcast Highlight */}
      <section className="bg-[#080C14] text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 left-8 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none mb-6">"</div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                FEATURED PODCAST
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-white leading-tight">Health Tech Unleash</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-10">
                Join our flagship podcast reaching over 20,000 listeners. We explore the intersection of digital health, research, and innovation in the African context, featuring expert guests and community voices.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#C9972D] text-white px-8 py-4 rounded-full font-black flex items-center gap-2 hover:bg-white hover:text-[#0A2D7A] transition-colors">
                  <PlayCircle className="w-6 h-6" /> Listen Latest Episode
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0A2D7A] rounded-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, #0A3FAF 0%, transparent 60%), radial-gradient(circle at 80% 20%, #7C3AED 0%, transparent 40%)'}} />
                <div className="aspect-square bg-white/10 rounded-2xl mb-8 flex items-center justify-center relative z-10 border border-white/20 shadow-inner backdrop-blur-sm">
                   <Mic className="w-32 h-32 text-[#C9972D] opacity-80" strokeWidth={1.5} />
                   <h3 className="absolute text-4xl font-heading font-black text-white text-center">HEALTH TECH<br/><span className="text-[#C9972D]">UNLEASH</span></h3>
                </div>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <div className="text-sm font-bold text-[#C9972D] mb-1 uppercase tracking-widest">Episode 42</div>
                    <div className="font-bold text-xl">The Future of AI in Rural Clinics</div>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#0A2D7A] cursor-pointer hover:scale-110 transition-transform shrink-0">
                    <PlayCircle className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-100">
              LATEST ARTICLES
            </span>
            <h2 className="text-4xl font-heading font-black text-[#0A2D7A]">Press & Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img src={hero4} alt="news" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <span className="border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full self-start">Press Release</span>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Oct 1, 2024</p>
                  <h3 className="text-xl font-heading font-bold text-gray-900 leading-tight group-hover:text-[#0A3FAF] transition-colors flex-grow">
                    Health Tech Liberia Expands Digital Literacy Program to 5 New Counties
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">With new funding secured from international partners, HTL is set to expand its core frontline worker training program...</p>
                  <Link href="#" className="text-xs font-bold uppercase tracking-widest text-gray-800 flex items-center gap-1 hover:text-[#0A3FAF] transition-colors mt-4">
                    READ MORE <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
