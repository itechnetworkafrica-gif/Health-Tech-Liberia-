import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Activity, Microscope, Users, Heart, Leaf, Globe, Shield, ShieldAlert, Megaphone } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import hero1 from "../assets/hero_1.jpg";

const PROGRAM_SLIDES: HeroSlide[] = [
  {
    image: hero1,
    eyebrow: "Holistic Health",
    heading: "Our Core Programs",
    subtext: "We take a comprehensive approach to community health through 9 integrated focus areas.",
  }
];

const PROGRAMS = [
  { icon: Activity, title: "Digital Health & Innovation", slug: "digital-health", desc: "Equipping health workers with digital tools and improving health information systems." },
  { icon: Microscope, title: "STEM Education & Research", slug: "stem-education", desc: "Empowering youth in STEM fields through mentorship and practical learning." },
  { icon: Users, title: "Gender Equality & Women's Empowerment", slug: "gender-equality", desc: "Fostering female leadership and addressing gender-based disparities in health." },
  { icon: Heart, title: "Mental Health & Well-being", slug: "mental-health", desc: "Promoting psychological well-being, peer support, and reducing stigma." },
  { icon: Leaf, title: "Climate & Environmental Health", slug: "climate-health", desc: "Tackling the climate-health nexus and promoting green entrepreneurship." },
  { icon: Globe, title: "Health Financing & Accessibility", slug: "health-financing", desc: "Advocating for universal health coverage and sustainable healthcare funding." },
  { icon: Shield, title: "Sexual & Reproductive Health", slug: "sexual-reproductive-health", desc: "Providing education, resources, and advocacy for adolescent reproductive health." },
  { icon: ShieldAlert, title: "Peace & Community Engagement", slug: "peace-community", desc: "Building resilient communities through dialogue, education, and mutual support." },
  { icon: Megaphone, title: "Advocacy", slug: "advocacy", desc: "Driving policy changes for better health outcomes and community well-being." },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider slides={PROGRAM_SLIDES} height="60dvh" />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.div 
                  key={program.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <div className="p-10 flex-grow flex flex-col">
                    <div className="w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-black text-gray-900 mb-4 leading-tight">{program.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">{program.desc}</p>
                    <Link href={`/programs/${program.slug}`} className="inline-flex items-center text-primary font-bold tracking-wider uppercase text-sm group-hover:gap-3 transition-all">
                      Explore Area <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}