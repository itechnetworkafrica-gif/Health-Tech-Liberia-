import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Linkedin } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";

import aboutHero1 from "../assets/about_hero_1.jpg";
import aboutHero2 from "../assets/about_hero_2.jpg";
import teamMakessa from "../assets/team_makessa.jpg";
import teamWilmot from "../assets/team_wilmot.jpg";
import teamBoakai from "../assets/team_boakai.jpg";

const ABOUT_SLIDES: HeroSlide[] = [
  {
    image: aboutHero1,
    eyebrow: "Our Identity",
    heading: "About Health Tech Liberia",
    subtext: "We are a passionate team dedicated to redefining health access and equity through innovation.",
  },
  {
    image: aboutHero2,
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
    { name: "Makessa Bility", role: "Founder", img: teamMakessa, bio: "Passionate about health equity and empowering women in tech." },
    { name: "Wilmot Kerkulah", role: "Admin & CTO", img: teamWilmot, bio: "Driving digital innovation and robust technical infrastructure." },
    { name: "Boakai Kamara", role: "Co-Founder", img: teamBoakai, bio: "Championing community engagement and strategic partnerships." },
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
                  <Target className="w-6 h-6 text-secondary" />
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
              className="bg-white border-2 border-gray-100 p-12 rounded-[2rem] shadow-xl relative overflow-hidden group hover:border-primary/20 transition-colors"
            >
              <Eye className="w-32 h-32 absolute -right-6 -top-6 text-accent group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-heading font-black text-[#0A2D7A] mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
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

      {/* Our Story Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-black tracking-widest uppercase text-sm mb-4">The Journey</h2>
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
                  <div className="w-24 h-24 rounded-2xl bg-white border-2 border-primary flex items-center justify-center shrink-0 z-10 shadow-lg">
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
            <h2 className="text-primary font-black tracking-widest uppercase text-sm mb-4">Guiding Principles</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-gray-900">Core Values</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div 
                key={i}
                className="bg-accent/50 p-8 rounded-[2rem] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-white text-primary rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#0A2D7A] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-secondary font-black tracking-widest uppercase text-sm mb-4">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black">Meet Our Team</h3>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-white/5 relative shadow-xl">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2D7A] via-transparent to-transparent opacity-60"></div>
                  <a href="#" className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0A2D7A] hover:bg-secondary hover:scale-110 transition-all shadow-lg">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-3xl font-heading font-bold text-white mb-2">{member.name}</h3>
                <p className="text-secondary font-bold text-lg mb-4">{member.role}</p>
                <p className="text-blue-100 text-lg">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}