import { motion } from "framer-motion";
import { Mic, PlayCircle } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
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
      <section className="py-24 bg-[#0A2D7A] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-secondary font-bold text-sm tracking-widest uppercase mb-6">
                <Mic className="w-4 h-4" /> Featured Podcast
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Health Tech Unleash</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-10">
                Join our flagship podcast reaching over 20,000 listeners. We explore the intersection of digital health, research, and innovation in the African context, featuring expert guests and community voices.
              </p>
              <div className="flex gap-4">
                <button className="bg-secondary text-[#0A2D7A] px-8 py-4 rounded-full font-black flex items-center gap-2 hover:bg-white transition-colors">
                  <PlayCircle className="w-6 h-6" /> Listen Latest Episode
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-[#0A2D7A] border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-5"></div>
              <div className="aspect-square bg-[#0A2D7A] rounded-2xl mb-8 flex items-center justify-center relative z-10 border border-white/20 shadow-inner">
                 <Mic className="w-32 h-32 text-secondary opacity-50" />
                 <h3 className="absolute text-4xl font-heading font-black text-white text-center">HEALTH TECH<br/><span className="text-secondary">UNLEASH</span></h3>
              </div>
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <div className="text-sm font-bold text-secondary mb-1">Episode 42</div>
                  <div className="font-bold text-lg">The Future of AI in Rural Clinics</div>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0A2D7A] cursor-pointer hover:scale-110 transition-transform">
                  <PlayCircle className="w-8 h-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-heading font-black text-gray-900 mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl border border-gray-100 p-8 hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="text-sm font-bold text-primary mb-4">Press Release</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Health Tech Liberia Expands Digital Literacy Program to 5 New Counties</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">With new funding secured from international partners, HTL is set to expand its core frontline worker training program...</p>
                <div className="text-sm font-medium text-gray-500">October 1, 2024</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}