import { motion } from "framer-motion";
import { Handshake, ArrowRight, HeartPulse } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import { Link } from "wouter";
import hero1 from "../assets/hero_1.jpg";
import SEO from "@/components/SEO";

const PARTNER_SLIDES: HeroSlide[] = [
  {
    image: hero1,
    eyebrow: "Collaboration",
    heading: "Our Partners",
    subtext: "Achieving sustainable health impact requires collective action. Meet the organizations powering our work.",
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
      title="Our Partners"
      description="Meet the organizations and institutions partnering with Health Tech Liberia to advance digital health, research, and community wellness in West Africa."
      canonical="/partners"
      keywords="Health Tech Liberia partners, health partnership Liberia, digital health collaboration Africa"
      />
      <HeroSlider slides={PARTNER_SLIDES} height="50dvh" />

      <section className="py-24 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-100">
              NETWORK
            </span>
            <h2 className="text-4xl font-heading font-black text-[#0A2D7A] mb-6">Stronger Together</h2>
            <p className="text-xl text-gray-600">We proudly partner with local NGOs, international agencies, government bodies, and corporate sponsors who share our vision for a healthier Liberia.</p>
          </div>

          <div className="bg-white rounded-2xl p-12 md:p-24 text-center border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-400 mb-12 uppercase tracking-widest">Past & Present Collaborators</h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {["Africa Poverty Impact Summit", "Africa Climate Week", "Ministry of Health Liberia", "Global Digital Health Network"].map((partner, i) => (
                <div key={i} className="bg-white border border-gray-200 text-gray-800 font-bold px-8 py-6 rounded-2xl shadow-sm hover:shadow-md hover:border-[#0A3FAF]/30 transition-all text-lg">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080C14] text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 left-8 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none mb-6">"</div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                GET INVOLVED
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">Become a Partner</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Whether you provide funding, technical expertise, or on-the-ground support, partnering with Health Tech Liberia means directly investing in the future of African healthcare.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-lg font-medium"><div className="w-2 h-2 rounded-full bg-[#C9972D]"></div> Corporate Sponsorships</li>
                <li className="flex items-center gap-3 text-lg font-medium"><div className="w-2 h-2 rounded-full bg-[#C9972D]"></div> Technical Implementation</li>
                <li className="flex items-center gap-3 text-lg font-medium"><div className="w-2 h-2 rounded-full bg-[#C9972D]"></div> Research Collaboration</li>
              </ul>
              <Link href="/contact" className="inline-flex bg-[#0A3FAF] text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-[#0A2D7A] transition-all shadow-xl items-center gap-3">
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="bg-[#0A2D7A] p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, #0A3FAF 0%, transparent 60%), radial-gradient(circle at 80% 20%, #7C3AED 0%, transparent 40%)'}} />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-white">Partnership Benefits</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-[#C9972D] text-lg mb-2">Measurable Impact</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">Receive detailed impact reports and data demonstrating the direct results of your collaboration.</p>
                  </div>
                  <div className="border-t border-white/10" />
                  <div>
                    <h4 className="font-bold text-[#C9972D] text-lg mb-2">Brand Visibility</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">Recognition across our platforms, events, and the Health Tech Unleash Podcast (20K+ audience).</p>
                  </div>
                  <div className="border-t border-white/10" />
                  <div>
                    <h4 className="font-bold text-[#C9972D] text-lg mb-2">Community Connection</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">Direct engagement with frontline workers, youth leaders, and grassroots initiatives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
