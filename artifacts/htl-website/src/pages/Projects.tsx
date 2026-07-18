import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Globe, MapPin, ChevronRight } from "lucide-react";
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

const PROJECTS = [
  {
    title: "Green Health Mentorship Program",
    category: "Completed Cohorts",
    loc: "Zorzor & Monrovia",
    desc: "Empowered 300+ adolescent girls across Zorzor and Monrovia. The curriculum integrated leadership skills, sexual and reproductive health education, green entrepreneurship, plastic recycling, and menstrual hygiene management.",
    img: proj1,
  },
  {
    title: "Digital Health Literacy for Healthcare Workers",
    category: "Ongoing Initiative",
    loc: "Rural Clinics",
    desc: "Trained 150 frontline healthcare workers in utilizing digital patient records and health information systems, significantly reducing medical errors and improving patient care coordination.",
    img: proj2,
  },
  {
    title: "Mental Health Seminar for Youth",
    category: "Completed Event",
    loc: "Montserrado",
    desc: "Engaged 175 young people in intensive peer support training and school campaigns, coinciding with World Mental Health Day to reduce stigma and build community resilience.",
    img: proj3,
  },
  {
    title: "Kick Malaria Out Campaign",
    category: "Completed Initiative",
    loc: "Mount Barclay",
    desc: "A creative fundraiser involving key holders that successfully raised funds to provide mosquito nets and essential supplies to 45 pregnant women in the Mount Barclay community.",
    img: proj1, // using fallback valid image
  },
  {
    title: "Health Tech Unleash Podcast",
    category: "Active Media",
    loc: "National (Digital)",
    desc: "Our flagship media initiative reaching an audience of over 20,000 listeners. The podcast explores the intersection of digital health, research, and innovation in the African context.",
    img: proj2, // using fallback valid image
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
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
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <span className="border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full self-start">{p.category}</span>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {p.loc}</p>
                  <h3 className="text-xl font-heading font-bold text-gray-900 leading-tight group-hover:text-[#0A3FAF] transition-colors flex-grow">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{p.desc}</p>
                  <Link href="#" className="text-xs font-bold uppercase tracking-widest text-gray-800 flex items-center gap-1 hover:text-[#0A3FAF] transition-colors mt-auto">
                    READ CASE STUDY <span className="text-lg leading-none">↗</span>
                  </Link>
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
