import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Star, Heart, Activity, Users,
  Microscope, Leaf, Globe, ShieldAlert, Shield,
  Megaphone, MapPin, Calendar, CheckCircle
} from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";

import orgGroup   from "@assets/1784333574982_1784333815299.jpg";
import orgTeam3   from "@assets/1784333542402_1784333815340.jpg";
import orgEvent1  from "@assets/1784333534721_1784333815375.jpg";
import orgEvent2  from "@assets/1784333518590_1784333815409.jpg";

const HOME_SLIDES: HeroSlide[] = [
  {
    image: orgGroup,
    eyebrow: "Health Tech Liberia",
    heading: "Transforming Healthcare Through Technology",
    subtext: "Bridging the gap between accessible healthcare and digital innovation to empower communities across Liberia.",
    ctas: [
      { label: "Our Programs", href: "/programs", variant: "primary" },
      { label: "Get Involved", href: "/get-involved", variant: "outline" }
    ]
  },
  {
    image: orgTeam3,
    eyebrow: "Our Impact",
    heading: "300+ Girls Empowered Across Liberia",
    subtext: "The Green Health Mentorship is transforming lives in Zorzor and Monrovia through education and advocacy.",
    ctas: [{ label: "View Our Work", href: "/projects", variant: "primary" }]
  },
  {
    image: orgEvent1,
    eyebrow: "Digital Health",
    heading: "Equipping the Next Wave of Health Workers",
    subtext: "150+ frontline workers trained with modern digital health tools to improve care quality and reduce errors.",
    ctas: [{ label: "Explore Programs", href: "/programs", variant: "primary" }]
  },
  {
    image: orgEvent2,
    eyebrow: "Community First",
    heading: "From Monrovia to the Countryside",
    subtext: "Reaching every corner of Liberia through research, advocacy, and grassroots community engagement.",
    ctas: [
      { label: "About HTL", href: "/about", variant: "primary" },
      { label: "Contact Us", href: "/contact", variant: "outline" }
    ]
  }
];

const STATS = [
  { value: 300, suffix: "+", label: "Girls Empowered" },
  { value: 150, suffix: "+", label: "Health Workers Trained" },
  { value: 175, suffix: "+", label: "Youth Reached" },
  { value: 20, suffix: ",000+", label: "Podcast Audience" },
  { value: 9,  suffix: "",   label: "Program Areas" },
  { value: 6,  suffix: "+",  label: "Partner Countries" },
];

const PROGRAMS = [
  { icon: Activity,    title: "Digital Health & Innovation",     slug: "digital-health",            desc: "Equipping health workers with digital tools to reduce errors and improve care." },
  { icon: Microscope,  title: "STEM Education & Research",       slug: "stem-education",            desc: "Empowering Liberian youth in science, technology, engineering, and mathematics." },
  { icon: Users,       title: "Gender Equality",                 slug: "gender-equality",           desc: "Fostering women's leadership and equal access to health opportunities." },
  { icon: Heart,       title: "Mental Health",                   slug: "mental-health",             desc: "Promoting community well-being through counseling and peer support networks." },
  { icon: Leaf,        title: "Climate & Environmental Health",  slug: "climate-health",            desc: "Tackling the intersecting crises of climate change and public health." },
  { icon: Globe,       title: "Health Financing",                slug: "health-financing",          desc: "Expanding access to affordable, sustainable healthcare financing models." },
  { icon: Shield,      title: "Sexual & Reproductive Health",    slug: "sexual-reproductive-health",desc: "Providing education, advocacy, and resources for reproductive well-being." },
  { icon: ShieldAlert, title: "Peace & Community Engagement",    slug: "peace-community",           desc: "Building resilient, peaceful communities through grassroots engagement." },
  { icon: Megaphone,   title: "Advocacy & Policy",               slug: "advocacy",                  desc: "Driving systemic change through policy advocacy at local and national levels." },
];

const PROJECTS = [
  { img: orgGroup,  badge: "Mentorship",    title: "Green Health Mentorship Program",    loc: "Zorzor & Monrovia",  desc: "Empowering 300+ adolescent girls with leadership skills, reproductive health knowledge, and green entrepreneurship." },
  { img: orgEvent1, badge: "Digital Health",title: "Digital Health Literacy Initiative", loc: "Rural Clinics",       desc: "Training 150 frontline health workers to use digital patient records, reducing medical errors and saving lives." },
  { img: orgEvent2, badge: "Community",     title: "Mental Health & Wellbeing Seminar",  loc: "Montserrado County",  desc: "Engaging 175 youth in intensive peer support training and stigma-reduction campaigns across the county." },
];

const TESTIMONIALS = [
  { quote: "The Green Health Mentorship changed my life. I learned how to turn waste into resources and gained the confidence to speak about my reproductive health.", name: "Sarah T.", role: "Mentorship Participant, Zorzor", initial: "S", color: "from-[#0A3FAF] to-[#7C3AED]" },
  { quote: "Thanks to HTL's training, our clinic now uses digital records efficiently — reducing errors and saving crucial time for every patient we serve.", name: "Emmanuel K.", role: "Frontline Health Worker, Rural Clinic", initial: "E", color: "from-[#0A7A3A] to-[#0A3FAF]" },
  { quote: "The mental health seminar gave me a safe space to share my struggles. Now I am a peer counselor helping other youth in my community.", name: "Grace M.", role: "Youth Participant, Montserrado", initial: "G", color: "from-[#C9972D] to-[#0A3FAF]" }
];

const NEWS = [
  { title: "HTL Launches Digital Health Literacy Campaign in Rural Clinics", date: "Oct 15, 2024", cat: "Initiative", excerpt: "Over 150 health workers gathered to learn modern digital charting methods that are already improving patient outcomes across the country." },
  { title: "Empowering 100+ Girls: The Next Phase of Green Health Mentorship", date: "Sep 28, 2024", cat: "Program Update", excerpt: "The latest cohort in Zorzor focuses on climate-smart reproductive health education and community leadership skills." },
  { title: "World Mental Health Day: Reaching Youth Across Montserrado", date: "Oct 10, 2024", cat: "Events", excerpt: "A day dedicated to dismantling stigma, creating safe spaces, and training a new generation of peer counselors." },
];

const WHO_WE_ARE_POINTS = [
  "Technology-driven healthcare solutions for Liberian communities",
  "Comprehensive research and evidence-based health advocacy",
  "Youth and women empowerment through STEM and mentorship",
  "Sustainable, community-led digital health programs",
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) { setCount(end); clearInterval(timer); }
        else setCount(start);
      }, 16);
      return () => clearInterval(timer);
    }
  }, [end, inView]);
  return <span ref={ref}>{Math.floor(count)}{suffix}</span>;
}

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = Date.now();
    const duration = 5000;
    const timer = setInterval(() => {
      let elapsed = Date.now() - start;
      if (elapsed >= duration) { start = Date.now(); elapsed = 0; }
      setProgress((elapsed / duration) * 100);
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-white">

      {/* ── HERO ── */}
      <div className="relative">
        <HeroSlider slides={HOME_SLIDES} height="100dvh" />
        <div className="absolute bottom-0 left-0 h-1 bg-[#C9972D] z-30" style={{ width: `${progress}%` }} />
      </div>

      {/* ── IMPACT NUMBERS ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              OUR IMPACT
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center px-4 relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                {i !== 0 && (
                  <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-gray-200" />
                )}
                <div className="text-4xl md:text-5xl font-heading font-bold text-[#0A2D7A] mb-1 tracking-tight">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE (split section) ── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image + floating badge */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img src={orgTeam3} alt="HTL Team" className="w-full h-full object-cover" />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#0A2D7A] text-white rounded-2xl px-7 py-5 shadow-2xl">
                <div className="text-3xl font-heading font-bold leading-none">Est. 2019</div>
                <div className="text-blue-300 text-xs uppercase tracking-widest mt-1">West Africa</div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-4 border-[#C9972D]/30 pointer-events-none" />
            </motion.div>

            {/* Right: text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                WHO WE ARE
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0A2D7A] leading-[1.1] mb-6">
                Liberia's Leading Digital Health Nonprofit
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Since 2019, Health Tech Liberia has been at the forefront of healthcare innovation — combining technology, research, and community engagement to build a healthier, more equitable Liberia.
              </p>
              <ul className="space-y-3 mb-10">
                {WHO_WE_ARE_POINTS.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#0A3FAF] mt-0.5 shrink-0" strokeWidth={2} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#0A2D7A] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#0A3FAF] transition-colors"
              >
                About HTL <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION / DARK STATEMENT ── */}
      <section className="bg-[#080C14] text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 left-6 text-[180px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none pointer-events-none">"</div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-[1.1]">
                Revolutionizing healthcare delivery in Liberia through technology, research, and innovation.
              </h2>
              <div className="border-t border-white/15 pt-7 flex items-center gap-4">
                <div className="flex gap-0.5 text-[#C9972D]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#C9972D]" strokeWidth={0} />)}
                </div>
                <span className="text-white/70 font-medium">Health Tech Liberia · est. 2019</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0A2D7A] rounded-2xl p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-25" style={{backgroundImage: 'radial-gradient(circle at 25% 50%, #0A3FAF 0%, transparent 55%), radial-gradient(circle at 80% 20%, #7C3AED 0%, transparent 40%)'}} />
                <div className="relative z-10 space-y-8">
                  <div>
                    <div className="text-6xl md:text-7xl font-heading font-bold mb-1 tracking-tight">300+</div>
                    <div className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Girls Empowered</div>
                  </div>
                  <div className="border-t border-white/20" />
                  <div>
                    <div className="text-6xl md:text-7xl font-heading font-bold mb-1 tracking-tight">150+</div>
                    <div className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Health Workers Trained</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-28 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-white border border-blue-100 text-gray-500 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              WHAT WE DO
            </span>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#0A2D7A]">
              9 Core Areas of Focus
            </h3>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Comprehensive, interconnected interventions designed to address the full determinants of health in Liberia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.055 }}
                  className="bg-white rounded-2xl border border-blue-100 p-7 flex flex-col gap-5 hover:shadow-lg hover:border-[#0A3FAF]/25 transition-all group h-full"
                >
                  <div className="w-14 h-14 rounded-xl border border-[#0A3FAF]/20 flex items-center justify-center text-[#0A3FAF] bg-[#F4F7FF] group-hover:bg-[#0A3FAF] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{program.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <Link href={`/programs/${program.slug}`} className="w-10 h-10 rounded-full bg-[#0A3FAF] flex items-center justify-center text-white hover:bg-[#0A2D7A] transition-colors shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="border border-gray-200 text-gray-400 text-[11px] px-3 py-1 rounded-full font-medium">{program.slug}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="inline-flex items-center gap-2 border border-[#0A3FAF] text-[#0A3FAF] px-7 py-3 rounded-full font-semibold hover:bg-[#0A3FAF] hover:text-white transition-all">
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                IMPACT IN ACTION
              </span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#0A2D7A]">Featured Projects</h3>
            </div>
            <Link href="/projects" className="text-[#0A3FAF] font-semibold hover:text-[#0A2D7A] transition-colors flex items-center gap-1 text-sm">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <span className="border border-gray-200 text-gray-500 text-[11px] px-3 py-1 rounded-full self-start font-medium">{p.badge}</span>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" /> {p.loc}
                  </p>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 leading-snug group-hover:text-[#0A3FAF] transition-colors flex-grow">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  <Link href="/projects" className="text-[11px] font-bold uppercase tracking-widest text-gray-700 flex items-center gap-1 hover:text-[#0A3FAF] transition-colors mt-1">
                    READ MORE <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#080C14] text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 left-6 text-[180px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none pointer-events-none">"</div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-white/60 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              VOICES OF IMPACT
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Stories from the Community</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col"
              >
                <div className="p-8 relative flex-grow">
                  <span className="absolute bottom-3 right-5 text-7xl text-gray-100 font-serif select-none leading-none">"</span>
                  <p className="text-gray-600 text-base leading-relaxed relative z-10">"{t.quote}"</p>
                </div>
                <div className={`bg-gradient-to-r ${t.color} px-7 py-5 flex items-center gap-4`}>
                  <div className="w-11 h-11 rounded-full bg-white/25 flex items-center justify-center text-white font-bold text-base shrink-0 border border-white/30">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/65 text-xs uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ── */}
      <section className="py-28 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-block bg-white border border-blue-100 text-gray-500 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                STAY INFORMED
              </span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#0A2D7A]">Latest from HTL</h3>
            </div>
            <Link href="/news" className="text-[#0A3FAF] font-semibold hover:text-[#0A2D7A] transition-colors flex items-center gap-1 text-sm">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {NEWS.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all group flex flex-col h-full"
              >
                {/* Top accent stripe */}
                <div className="h-1 w-full bg-gradient-to-r from-[#0A3FAF] to-[#7C3AED]" />
                <div className="p-7 flex flex-col gap-3 flex-grow">
                  <span className="border border-gray-200 text-gray-400 text-[11px] px-3 py-1 rounded-full self-start font-medium">{n.cat}</span>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> {n.date}
                  </p>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 leading-snug group-hover:text-[#0A3FAF] transition-colors">{n.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{n.excerpt}</p>
                  <Link href="/news" className="text-[11px] font-bold uppercase tracking-widest text-gray-700 flex items-center gap-1 hover:text-[#0A3FAF] transition-colors mt-2">
                    READ MORE <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section className="py-0 bg-[#0A2D7A]">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              STAY CONNECTED
            </span>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Join Our Newsletter</h3>
            <p className="text-blue-200 mb-10">Get updates on our programs, research, and impact delivered directly to your inbox.</p>

            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-white/40 text-white placeholder:text-white/40 backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="bg-[#C9972D] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#b5862a] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/40 text-xs mt-5">Join 1,200+ supporters · No spam · Unsubscribe anytime</p>
          </div>
        </div>
      </section>

    </div>
  );
}
