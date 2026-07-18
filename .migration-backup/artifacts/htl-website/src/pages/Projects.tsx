import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Globe, MapPin, ChevronRight, X } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import proj1 from "../assets/project_1.jpg";
import proj2 from "../assets/project_2.jpg";
import proj3 from "../assets/project_3.jpg";

const PROJECT_SLIDES: HeroSlide[] = [
  {
    image: proj2,
    eyebrow: "Our Impact",
    heading: "Featured Projects",
    subtext: "Explore our high-impact initiatives that are tangibly transforming health outcomes in Liberia.",
  }
];

interface Project {
  title: string;
  category: string;
  loc: string;
  desc: string;
  img: string;
  impact: string;
  outcomes: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Green Health Mentorship Program",
    category: "Completed Cohorts",
    loc: "Zorzor & Monrovia",
    desc: "Empowered 300+ adolescent girls across Zorzor and Monrovia. The curriculum integrated leadership skills, sexual and reproductive health education, green entrepreneurship, plastic recycling, and menstrual hygiene management.",
    img: proj1,
    impact: "300+ adolescent girls empowered across two districts",
    outcomes: [
      "Delivered leadership and life-skills training to 300+ girls",
      "Integrated reproductive health and menstrual hygiene education",
      "Introduced green entrepreneurship and plastic recycling modules",
      "Built peer support networks that continue beyond the program",
    ],
  },
  {
    title: "Digital Health Literacy for Healthcare Workers",
    category: "Ongoing Initiative",
    loc: "Rural Clinics",
    desc: "Trained 150 frontline healthcare workers in utilizing digital patient records and health information systems, significantly reducing medical errors and improving patient care coordination.",
    img: proj2,
    impact: "150+ frontline workers trained across rural clinics",
    outcomes: [
      "Trained 150 health workers in digital patient record systems",
      "Measurably reduced medical errors at participating clinics",
      "Improved inter-clinic coordination and care handoffs",
      "Ongoing refresher sessions keep workers up to date",
    ],
  },
  {
    title: "Mental Health Seminar for Youth",
    category: "Completed Event",
    loc: "Montserrado",
    desc: "Engaged 175 young people in intensive peer support training and school campaigns, coinciding with World Mental Health Day to reduce stigma and build community resilience.",
    img: proj3,
    impact: "175 youth engaged in mental health awareness",
    outcomes: [
      "Trained 175 youth as peer mental health counselors",
      "Conducted school-based stigma-reduction campaigns",
      "Held open forums on World Mental Health Day",
      "Established sustainable peer support circles in schools",
    ],
  },
  {
    title: "Kick Malaria Out Campaign",
    category: "Completed Initiative",
    loc: "Mount Barclay",
    desc: "A creative fundraiser involving key holders that successfully raised funds to provide mosquito nets and essential supplies to 45 pregnant women in the Mount Barclay community.",
    img: proj1,
    impact: "45 pregnant women protected with mosquito nets",
    outcomes: [
      "Raised funds through community-led creative fundraising",
      "Distributed mosquito nets to 45 pregnant women",
      "Supplied essential maternal health items",
      "Raised community awareness about malaria prevention",
    ],
  },
  {
    title: "Health Tech Unleash Podcast",
    category: "Active Media",
    loc: "National (Digital)",
    desc: "Our flagship media initiative reaching an audience of over 20,000 listeners. The podcast explores the intersection of digital health, research, and innovation in the African context.",
    img: proj2,
    impact: "20,000+ listeners across Liberia and the diaspora",
    outcomes: [
      "Grew to 20,000+ regular listeners nationally",
      "Featured health experts, researchers, and community voices",
      "Covered digital health, research, and African innovation",
      "Serves as a platform for advocacy and policy dialogue",
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2D7A]/90 to-transparent flex flex-col justify-end p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C9972D] mb-2">{selected.category}</span>
                  <h2 className="text-2xl font-heading font-black text-white leading-tight">{selected.title}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-[#0A3FAF]" />
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{selected.loc}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{selected.desc}</p>
                <div className="bg-[#F4F7FF] rounded-2xl p-5 mb-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0A3FAF] mb-3">Key Impact</div>
                  <div className="text-lg font-bold text-gray-900 mb-4">{selected.impact}</div>
                  <ul className="space-y-2">
                    {selected.outcomes.map((o, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1 w-4 h-4 rounded-full bg-[#0A3FAF]/10 text-[#0A3FAF] flex items-center justify-center shrink-0 text-[10px] font-bold">{i + 1}</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-full py-3 rounded-full bg-[#0A2D7A] text-white font-bold hover:bg-[#0A3FAF] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <HeroSlider slides={PROJECT_SLIDES} height="60dvh" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              OUR INITIATIVES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0A2D7A]">
              Impact in Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col h-full cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <span className="border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full self-start">{p.category}</span>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {p.loc}</p>
                  <h3 className="text-xl font-heading font-bold text-gray-900 leading-tight group-hover:text-[#0A3FAF] transition-colors flex-grow">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{p.desc}</p>
                  <button
                    onClick={() => setSelected(p)}
                    className="text-xs font-bold uppercase tracking-widest text-gray-800 flex items-center gap-1 hover:text-[#0A3FAF] transition-colors mt-auto"
                  >
                    READ CASE STUDY <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080C14] text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 left-8 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none mb-6">"</div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <span className="inline-block bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-10">
            COLLABORATE
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-8">Have a project idea?</h2>
          <p className="text-xl text-blue-100 mb-10">We are always looking for partners and collaborators to expand our impact across Liberia.</p>
          <Link href="/contact" className="inline-flex bg-[#C9972D] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-[#0A2D7A] transition-all shadow-xl hover:-translate-y-1 items-center gap-3">
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
