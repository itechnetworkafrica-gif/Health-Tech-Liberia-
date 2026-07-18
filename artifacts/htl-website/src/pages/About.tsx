import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Linkedin } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";

import teamWilmot from "@assets/1784333782085_1784333815122.jpg";
import teamBoakai from "@assets/1784333629096_1784333815217.jpg";
import teamMakessa from "@assets/1784333552163_1784333815255.jpg";
import orgGroup from "@assets/1784333574982_1784333815299.jpg";
import orgTeam3 from "@assets/1784333542402_1784333815340.jpg";

const ABOUT_SLIDES: HeroSlide[] = [
  {
    image: orgGroup,
    eyebrow: "Our Identity",
    heading: "About Health Tech Liberia",
    subtext: "We are a passionate team dedicated to redefining health access and equity through innovation.",
  },
  {
    image: orgTeam3,
    eyebrow: "Our Approach",
    heading: "Bridging Health & Technology",
    subtext: "Empowering communities with digital tools, education, and steadfast advocacy.",
  }
];

const MILESTONES = [
  { year: "2019", title: "Foundation", desc: "HTL was established to address the critical digital divide in Liberia's health sector." },
  { year: "2021", title: "First Cohort", desc: "Launched the Green Health Mentorship Program, reaching 100 adolescent girls." },
  { year: "2023", title: "Digital Literacy", desc: "Initiated training for frontline healthcare workers across rural clinics." },
  { year: "2024", title: "National Impact", desc: "Podcast reached 20K+ listeners, expanding advocacy nationwide." }
];

export default function About() {
  const values = [
    { title: "Innovation", desc: "We leverage technology to solve pressing healthcare challenges." },
    { title: "Empowerment", desc: "We build capacity in youth, women, and health workers." },
    { title: "Equity", desc: "We advocate for accessible health services for all." },
    { title: "Sustainability", desc: "We promote climate-conscious health interventions." },
    { title: "Community", desc: "We co-create solutions with the people we serve." },
    { title: "Integrity", desc: "We operate with transparency and accountability." }
  ];

  const team = [
    { name: "Makessa Bility", role: "Founder", img: teamMakessa, bio: "A visionary health advocate driving digital transformation across Liberia's healthcare system.", position: "object-top", initial: "MB" },
    { name: "Wilmot Kerkulah", role: "Admin & CTO", img: teamWilmot, bio: "Tech strategist building the digital backbone of HTL's operations and innovation pipeline.", position: "object-cover object-center", initial: "WK" },
    { name: "Boakai Kamara", role: "Co-Founder", img: teamBoakai, bio: "Community mobilizer and strategic leader amplifying HTL's impact across Liberia.", position: "object-top", initial: "BK" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSlider slides={ABOUT_SLIDES} height="70dvh" />

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A2D7A] text-white p-12 rounded-[2rem] shadow-xl relative overflow-hidden"
            >
              <Target className="w-32 h-32 absolute -right-6 -top-6 opacity-10" />
              <h2 className="text-3xl font-heading font-black mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#C9972D]" />
                </div>
                Our Mission
              </h2>
              <p className="text-xl text-blue-50 leading-relaxed">
                To empower communities and health systems through innovative digital solutions, comprehensive research, and steadfast advocacy for holistic well-being.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F4F7FF] border-2 border-blue-100 p-12 rounded-[2rem] shadow-xl relative overflow-hidden group hover:border-[#0A3FAF]/30 transition-colors"
            >
              <Eye className="w-32 h-32 absolute -right-6 -top-6 text-[#0A3FAF]/10 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-heading font-black text-[#0A2D7A] mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#0A3FAF]" />
                </div>
                Our Vision
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed relative z-10">
                A Liberia where accessible, tech-enabled, and equitable healthcare drives sustainable community prosperity and resilience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Stats Section */}
      <section className="bg-[#080C14] text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 left-8 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none mb-6">"</div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 leading-tight">
                Driving sustainable health impact from the ground up.
              </h2>
              <div className="border-t border-white/20 pt-8 mt-8 flex items-center gap-4">
                <span className="text-white font-bold">Established 2019 · 300+ beneficiaries · 9 program areas</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0A2D7A] rounded-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, #0A3FAF 0%, transparent 60%), radial-gradient(circle at 80% 20%, #7C3AED 0%, transparent 40%)'}} />
                <div className="relative z-10">
                  <div className="text-6xl md:text-7xl font-heading font-black mb-2">98%</div>
                  <div className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-6">Project Success Rate</div>
                  <div className="border-t border-white/20 my-6" />
                  <div className="text-6xl md:text-7xl font-heading font-black mb-2">20K</div>
                  <div className="text-blue-200 font-semibold text-sm uppercase tracking-widest">Podcast Audience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-100">
              THE JOURNEY
            </span>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-gray-900">Our Story</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {MILESTONES.map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mb-12 relative"
              >
                {i !== MILESTONES.length - 1 && (
                  <div className="hidden md:block absolute left-[88px] top-16 bottom-[-48px] w-0.5 bg-gray-200"></div>
                )}
                <div className="w-full md:w-auto flex items-center md:items-start gap-4 shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-white border-2 border-[#0A3FAF] flex items-center justify-center shrink-0 z-10 shadow-lg">
                    <span className="text-2xl font-black text-[#0A2D7A]">{milestone.year}</span>
                  </div>
                  <h4 className="text-2xl font-bold md:hidden">{milestone.title}</h4>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex-grow relative top-2">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 hidden md:block">{milestone.title}</h4>
                  <p className="text-lg text-gray-600">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              GUIDING PRINCIPLES
            </span>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-gray-900">Core Values</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div 
                key={i}
                className="bg-white border border-gray-100 p-8 rounded-[2rem] hover:border-[#0A3FAF]/30 hover:shadow-xl transition-all h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-[#F4F7FF] text-[#0A3FAF] rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-lg flex-grow">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Floating on Dark) */}
      <section className="bg-[#080C14] text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 left-8 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none mb-6">"</div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              LEADERSHIP
            </span>
            <h3 className="text-4xl md:text-5xl font-heading font-black">Meet Our Team</h3>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col group h-full"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className={`w-full h-full ${member.position} group-hover:scale-105 transition-transform duration-700`}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="p-8 relative flex-grow bg-white">
                  <p className="text-gray-700 text-lg leading-relaxed relative z-10">{member.bio}</p>
                </div>
                <div className="bg-gradient-to-r from-[#0A3FAF] to-[#7C3AED] px-8 py-5 flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {member.initial}
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">{member.name}</div>
                    <div className="text-white/70 text-xs uppercase tracking-widest">{member.role}</div>
                  </div>
                  <a href="#" className="ml-auto w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#0A2D7A] transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
