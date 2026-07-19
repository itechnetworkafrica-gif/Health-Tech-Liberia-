import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, MapPin, X, CheckCircle2, TrendingUp, Users, Target, Share2, ExternalLink, ChevronRight } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import proj1 from "../assets/project_1.jpg";
import proj2 from "../assets/project_2.jpg";
import proj3 from "../assets/project_3.jpg";
import SEO from "@/components/SEO";

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
  status: "Completed" | "Ongoing" | "Active";
  loc: string;
  desc: string;
  img: string;
  impact: string;
  metric: string;
  metricLabel: string;
  outcomes: string[];
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Green Health Mentorship Program",
    category: "Youth Empowerment",
    status: "Completed",
    loc: "Zorzor & Monrovia",
    desc: "Empowered 300+ adolescent girls across Zorzor and Monrovia. The curriculum integrated leadership skills, sexual and reproductive health education, green entrepreneurship, plastic recycling, and menstrual hygiene management.",
    img: proj1,
    impact: "Adolescent girls empowered across two districts with life-changing skills and peer networks.",
    metric: "300+",
    metricLabel: "Girls Empowered",
    outcomes: [
      "Leadership and life-skills training delivered to 300+ girls",
      "Reproductive health and menstrual hygiene education integrated",
      "Green entrepreneurship and plastic recycling modules introduced",
      "Peer support networks built that continue beyond the program",
    ],
    tags: ["Youth", "Gender", "Reproductive Health", "Green"],
  },
  {
    title: "Digital Health Literacy for Healthcare Workers",
    category: "Digital Health",
    status: "Ongoing",
    loc: "Rural Clinics",
    desc: "Trained 150 frontline healthcare workers in utilizing digital patient records and health information systems, significantly reducing medical errors and improving patient care coordination.",
    img: proj2,
    impact: "Frontline workers equipped with digital tools, measurably reducing medical errors at rural clinics.",
    metric: "150+",
    metricLabel: "Workers Trained",
    outcomes: [
      "150 health workers trained in digital patient record systems",
      "Medical errors measurably reduced at participating clinics",
      "Inter-clinic coordination and care handoffs improved",
      "Ongoing refresher sessions keep workers current",
    ],
    tags: ["Digital Health", "Training", "Rural Health"],
  },
  {
    title: "Mental Health Seminar for Youth",
    category: "Mental Health",
    status: "Completed",
    loc: "Montserrado",
    desc: "Engaged 175 young people in intensive peer support training and school campaigns, coinciding with World Mental Health Day to reduce stigma and build community resilience.",
    img: proj3,
    impact: "Young people trained as peer counselors, with lasting stigma-reduction campaigns in schools.",
    metric: "175",
    metricLabel: "Youth Engaged",
    outcomes: [
      "175 youth trained as peer mental health counselors",
      "School-based stigma-reduction campaigns conducted",
      "Open forums held on World Mental Health Day",
      "Sustainable peer support circles established in schools",
    ],
    tags: ["Mental Health", "Youth", "Awareness"],
  },
  {
    title: "Kick Malaria Out Campaign",
    category: "Community Health",
    status: "Completed",
    loc: "Mount Barclay",
    desc: "A creative fundraiser involving key holders that successfully raised funds to provide mosquito nets and essential supplies to 45 pregnant women in the Mount Barclay community.",
    img: proj1,
    impact: "Pregnant women protected from malaria with nets and essential maternal health supplies.",
    metric: "45",
    metricLabel: "Women Protected",
    outcomes: [
      "Funds raised through community-led creative fundraising",
      "Mosquito nets distributed to 45 pregnant women",
      "Essential maternal health items supplied",
      "Community awareness on malaria prevention raised",
    ],
    tags: ["Malaria", "Maternal Health", "Community"],
  },
  {
    title: "Health Tech Unleash Podcast",
    category: "Media & Advocacy",
    status: "Active",
    loc: "National (Digital)",
    desc: "Our flagship media initiative reaching an audience of over 20,000 listeners. The podcast explores the intersection of digital health, research, and innovation in the African context.",
    img: proj2,
    impact: "A national platform amplifying health innovation voices across Liberia and the African diaspora.",
    metric: "20K+",
    metricLabel: "Listeners",
    outcomes: [
      "Grew to 20,000+ regular listeners nationally",
      "Health experts, researchers, and community voices featured",
      "Digital health, research, and African innovation covered",
      "Platform for advocacy and policy dialogue established",
    ],
    tags: ["Media", "Podcast", "Digital Health", "Advocacy"],
  },
];

const STATUS_STYLE = {
  Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Ongoing: "bg-blue-50 text-blue-700 border-blue-200",
  Active: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Projects"
        description="Discover Health Tech Liberia's impactful projects advancing digital health, research, and community wellness across Liberia and West Africa."
        canonical="/projects"
        keywords="Health Tech Liberia projects, health projects Liberia, digital health initiatives Africa"
      />

      {/* ── Full-page Case Study Overlay ───────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            {/* Dark scrim */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

            {/* Content card — centered with vertical scroll */}
            <div className="relative min-h-full flex items-start justify-center p-4 md:p-8 py-8">
              <motion.article
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close case study"
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* ── Hero image ───────────────────────────────────────────── */}
                <div className="relative aspect-[16/7] overflow-hidden">
                  <img
                    src={selected.img}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060E22] via-[#060E22]/50 to-transparent" />

                  {/* Hero text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#C9972D] bg-[#C9972D]/15 border border-[#C9972D]/30 px-3 py-1 rounded-full">
                        {selected.category}
                      </span>
                      <span className={`text-[0.65rem] font-black uppercase tracking-[0.12em] px-3 py-1 rounded-full border ${STATUS_STYLE[selected.status]}`}>
                        {selected.status}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-black text-white leading-tight">
                      {selected.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="w-4 h-4 text-white/60 shrink-0" />
                      <span className="text-white/70 text-sm font-medium">{selected.loc}</span>
                    </div>
                  </div>
                </div>

                {/* ── Body ─────────────────────────────────────────────────── */}
                <div className="p-6 md:p-8 flex flex-col gap-8">

                  {/* Impact metric card */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 bg-gradient-to-br from-[#0A2D7A] to-[#0A3FAF] rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-black text-white leading-none">{selected.metric}</span>
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-blue-200 mt-1">{selected.metricLabel}</span>
                    </div>
                    <div className="col-span-2 bg-[#F4F7FF] rounded-2xl p-4 flex items-center">
                      <p className="text-[#0A2D7A] text-sm font-semibold leading-relaxed">
                        {selected.impact}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                      <Target className="w-3.5 h-3.5" /> Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{selected.desc}</p>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5" /> Key Outcomes
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {selected.outcomes.map((o, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.06 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{o}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold text-[#0A3FAF] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-gray-100">
                    <Link
                      href="/get-involved"
                      onClick={() => setSelected(null)}
                      className="flex-1 py-3.5 rounded-2xl bg-[#0A2D7A] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#0A3FAF] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <Users className="w-4 h-4" /> Get Involved
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setSelected(null)}
                      className="flex-1 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" /> Partner With Us
                    </Link>
                  </div>

                </div>
              </motion.article>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <HeroSlider slides={PROJECT_SLIDES} height="60dvh" />

      {/* ── Projects grid ────────────────────────────────────────────────────── */}
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
                onClick={() => setSelected(p)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === "Enter" && setSelected(p)}
                aria-label={`Open case study: ${p.title}`}
              >
                <div className="aspect-video overflow-hidden bg-gray-100 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute top-3 right-3 text-[0.65rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${STATUS_STYLE[p.status]}`}>
                    {p.status}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">{p.category}</span>
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {p.loc}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 leading-tight group-hover:text-[#0A3FAF] transition-colors flex-grow">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{p.desc}</p>
                  {/* Metric pill */}
                  <div className="flex items-center gap-3 py-3 border-t border-gray-100 mt-auto">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-[#0A2D7A]">{p.metric}</span>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{p.metricLabel}</span>
                    </div>
                    <button
                      className="ml-auto text-xs font-bold uppercase tracking-widest text-gray-800 flex items-center gap-1 hover:text-[#0A3FAF] transition-colors"
                      onClick={e => { e.stopPropagation(); setSelected(p); }}
                    >
                      Case Study <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#080C14] text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 left-8 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none">"</div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <span className="inline-block bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-10">
            COLLABORATE
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-8">Have a project idea?</h2>
          <p className="text-xl text-blue-100 mb-10">We are always looking for partners and collaborators to expand our impact across Liberia.</p>
          <Link
            href="/contact"
            className="inline-flex bg-[#C9972D] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-[#0A2D7A] transition-all shadow-xl hover:-translate-y-1 items-center gap-3"
          >
            Partner With Us <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
