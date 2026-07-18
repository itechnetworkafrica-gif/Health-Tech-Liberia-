import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Globe, CheckCircle2 } from "lucide-react";
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
    color: "bg-green-100 text-green-700",
    loc: "Zorzor & Monrovia",
    desc: "Empowered 300+ adolescent girls across Zorzor and Monrovia. The curriculum integrated leadership skills, sexual and reproductive health education, green entrepreneurship, plastic recycling, and menstrual hygiene management.",
    img: proj1,
  },
  {
    title: "Digital Health Literacy for Healthcare Workers",
    category: "Ongoing Initiative",
    color: "bg-blue-100 text-blue-700",
    loc: "Rural Clinics",
    desc: "Trained 150 frontline healthcare workers in utilizing digital patient records and health information systems, significantly reducing medical errors and improving patient care coordination.",
    img: proj2,
  },
  {
    title: "Mental Health Seminar for Youth",
    category: "Completed Event",
    color: "bg-purple-100 text-purple-700",
    loc: "Montserrado",
    desc: "Engaged 175 young people in intensive peer support training and school campaigns, coinciding with World Mental Health Day to reduce stigma and build community resilience.",
    img: proj3,
  },
  {
    title: "Kick Malaria Out Campaign",
    category: "Completed Initiative",
    color: "bg-orange-100 text-orange-700",
    loc: "Mount Barclay",
    desc: "A creative fundraiser involving key holders that successfully raised funds to provide mosquito nets and essential supplies to 45 pregnant women in the Mount Barclay community.",
    img: null,
  },
  {
    title: "Health Tech Unleash Podcast",
    category: "Active Media",
    color: "bg-red-100 text-red-700",
    loc: "National (Digital)",
    desc: "Our flagship media initiative reaching an audience of over 20,000 listeners. The podcast explores the intersection of digital health, research, and innovation in the African context.",
    img: null,
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider slides={PROJECT_SLIDES} height="60dvh" />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group flex flex-col"
              >
                <div className="h-72 bg-slate-100 relative overflow-hidden">
                  {project.img ? (
                    <img 
                      src={project.img} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      alt={project.title}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0A2D7A] flex items-center justify-center">
                      <h3 className="text-4xl font-heading font-black text-white/20 px-8 text-center">{project.title}</h3>
                    </div>
                  )}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur shadow-sm text-gray-900 text-xs font-black uppercase tracking-wider py-2 px-5 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="text-primary font-bold mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4" /> {project.loc}
                  </div>
                  <h3 className="text-3xl font-heading font-black text-gray-900 mb-6">{project.title}</h3>
                  <p className="text-gray-600 text-lg mb-10 flex-grow leading-relaxed">{project.desc}</p>
                  <Link href="#" className="inline-flex items-center justify-center bg-accent text-primary font-bold py-4 px-6 rounded-xl hover:bg-primary hover:text-white transition-colors">
                    Read Case Study <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A2D7A] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-8">Have a project idea?</h2>
          <p className="text-xl text-blue-100 mb-10">We are always looking for partners and collaborators to expand our impact across Liberia.</p>
          <Link href="/contact" className="inline-flex bg-secondary text-[#0A2D7A] px-10 py-5 rounded-full font-black text-xl hover:bg-white transition-all shadow-xl hover:-translate-y-1 items-center gap-3">
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
}