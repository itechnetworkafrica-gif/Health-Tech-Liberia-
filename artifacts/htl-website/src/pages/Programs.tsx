import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Activity, Microscope, Users, Heart, Leaf, Globe, Shield, ShieldAlert, Megaphone } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import hero1 from "../assets/hero_1.jpg";
import SEO from "@/components/SEO";

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
      <SEO
      title="Our Programs"
      description="Explore Health Tech Liberia's 9 integrated health programs spanning digital health, STEM education, mental health, gender equality, and more across Liberia."
      canonical="/programs"
      keywords="Health Tech Liberia programs, digital health programs Liberia, STEM education, gender equality health"
      />
      <HeroSlider slides={PROGRAM_SLIDES} height="60dvh" />

      <section className="py-24 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-white border border-blue-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0A2D7A]">
              9 Core Areas of Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.div 
                  key={program.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-blue-100 p-8 flex flex-col gap-6 hover:shadow-xl hover:border-[#0A3FAF]/30 transition-shadow group h-full cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl border-2 border-[#0A3FAF]/20 flex items-center justify-center text-[#0A3FAF]">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900">{program.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{program.desc}</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <Link href={`/programs/${program.slug}`} className="w-12 h-12 rounded-full bg-[#0A3FAF] flex items-center justify-center text-white hover:bg-[#0A2D7A] transition-colors shrink-0">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <span className="border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full whitespace-nowrap overflow-hidden text-ellipsis">{program.slug}</span>
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
