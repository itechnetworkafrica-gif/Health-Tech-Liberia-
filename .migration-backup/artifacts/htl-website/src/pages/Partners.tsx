import { motion } from "framer-motion";
import { Handshake, ArrowRight, HeartPulse } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import { Link } from "wouter";
import hero1 from "../assets/hero_1.jpg";

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
      <HeroSlider slides={PARTNER_SLIDES} height="50dvh" />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-heading font-black text-gray-900 mb-6">Stronger Together</h2>
            <p className="text-xl text-gray-600">We proudly partner with local NGOs, international agencies, government bodies, and corporate sponsors who share our vision for a healthier Liberia.</p>
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-24 text-center border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-500 mb-12 uppercase tracking-widest">Past & Present Collaborators</h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {["Africa Poverty Impact Summit", "Africa Climate Week", "Ministry of Health Liberia", "Global Digital Health Network"].map((partner, i) => (
                <div key={i} className="bg-white border-2 border-gray-100 text-gray-800 font-bold px-8 py-6 rounded-2xl shadow-sm hover:shadow-md hover:border-primary transition-all text-lg">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A2D7A] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Become a Partner</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Whether you provide funding, technical expertise, or on-the-ground support, partnering with Health Tech Liberia means directly investing in the future of African healthcare.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-lg font-medium"><HeartPulse className="w-6 h-6 text-secondary" /> Corporate Sponsorships</li>
                <li className="flex items-center gap-3 text-lg font-medium"><HeartPulse className="w-6 h-6 text-secondary" /> Technical Implementation</li>
                <li className="flex items-center gap-3 text-lg font-medium"><HeartPulse className="w-6 h-6 text-secondary" /> Research Collaboration</li>
              </ul>
              <Link href="/contact" className="inline-flex bg-secondary text-[#0A2D7A] px-10 py-5 rounded-full font-black text-xl hover:bg-white transition-all shadow-xl items-center gap-3">
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-white/10 border border-white/20 p-12 rounded-[2rem] backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6">Partnership Benefits</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-secondary text-lg">Measurable Impact</h4>
                  <p className="text-blue-100">Receive detailed impact reports and data demonstrating the direct results of your collaboration.</p>
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Brand Visibility</h4>
                  <p className="text-blue-100">Recognition across our platforms, events, and the Health Tech Unleash Podcast (20K+ audience).</p>
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Community Connection</h4>
                  <p className="text-blue-100">Direct engagement with frontline workers, youth leaders, and grassroots initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}