import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Heart, Activity, Users,
  Microscope, Leaf, Globe, ShieldAlert, Shield,
  Megaphone, Quote, ChevronRight, MapPin, Calendar
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
  { quote: "The Green Health Mentorship changed my life. I learned how to turn waste into resources and gained the confidence to speak about my reproductive health.", name: "Sarah T.", role: "Mentorship Participant, Zorzor", initial: "S" },
  { quote: "Thanks to HTL's training, our clinic now uses digital records efficiently — reducing errors and saving crucial time for every patient we serve.", name: "Emmanuel K.", role: "Frontline Health Worker, Rural Clinic", initial: "E" },
  { quote: "The mental health seminar gave me a safe space to share my struggles. Now I am a peer counselor helping other youth in my community.", name: "Grace M.", role: "Youth Participant, Montserrado", initial: "G" }
];

const NEWS = [
  { title: "HTL Launches Digital Health Literacy Campaign in Rural Clinics", date: "Oct 15, 2024", cat: "Initiative", excerpt: "Over 150 health workers gathered to learn modern digital charting methods that are already improving patient outcomes across the country." },
  { title: "Empowering 100+ Girls: The Next Phase of Green Health Mentorship", date: "Sep 28, 2024", cat: "Program Update", excerpt: "The latest cohort in Zorzor focuses on climate-smart reproductive health education and community leadership skills." },
  { title: "World Mental Health Day: Reaching Youth Across Montserrado", date: "Oct 10, 2024", cat: "Events", excerpt: "A day dedicated to dismantling stigma, creating safe spaces, and training a new generation of peer counselors." },
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    let start = Date.now();
    const duration = 5000;
    
    const timer = setInterval(() => {
      let elapsed = Date.now() - start;
      if (elapsed >= duration) {
        start = Date.now();
        elapsed = 0;
      }
      setProgress((elapsed / duration) * 100);
    }, 16);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-white">
      {/* SECTION 1: Fullscreen Hero Slider */}
      <div className="relative">
        <HeroSlider slides={HOME_SLIDES} height="100dvh" />
        <div 
          className="absolute bottom-0 left-0 h-1 bg-[#C9972D] z-30" 
          style={{ width: `${progress}%` }} 
        />
      </div>

      {/* SECTION 2: Impact Numbers */}
      <section className="py-20 bg-white relative overflow-hidden">
        <svg className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] opacity-5 pointer-events-none blur-3xl" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#0A3FAF" />
        </svg>
        <svg className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] opacity-5 pointer-events-none blur-3xl" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#C9972D" />
        </svg>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12">
            {STATS.map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center px-4 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                {i !== 0 && (
                  <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-200"></div>
                )}
                <div className="text-5xl md:text-6xl font-heading font-black text-[#0A2D7A] mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Mission Statement */}
      <section className="py-28 md:py-36 bg-[#0A2D7A] relative overflow-hidden">
        <svg className="absolute -top-24 -right-24 w-[400px] h-[400px] opacity-20 pointer-events-none blur-3xl" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#0A3FAF" />
        </svg>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="w-32 h-32 text-[#C9972D] opacity-20 absolute -top-8 -left-8" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-[3px] bg-[#C9972D]"></div>
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#C9972D]">OUR MANDATE</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold italic leading-tight text-white mb-10">
                  "Revolutionizing healthcare delivery in Liberia by leveraging technology, research, and innovation."
                </h3>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-[1px] bg-white/20"></div>
                  <span className="text-[#C9972D] font-medium tracking-wide">Health Tech Liberia, est. 2020</span>
                </div>
                <Link href="/about" className="inline-flex items-center gap-2 border border-white text-white px-8 py-3.5 rounded hover:bg-white hover:text-[#0A2D7A] transition-all font-bold hover:-translate-y-0.5">
                  Learn About HTL <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C9972D]/40 rounded-2xl pointer-events-none z-0"></div>
              <div className="relative z-10 h-[280px] md:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl bg-[#0A2D7A]">
                <img src={orgTeam3} alt="HTL Team" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 9 Core Program Areas */}
      <section className="py-28 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C9972D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4"
            >
              WHAT WE DO
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0A2D7A] mb-6"
            >
              9 Core Areas of Focus
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-gray-600"
            >
              Comprehensive, interconnected interventions designed to address the full determinants of health in Liberia and West Africa.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program, i) => {
              const Icon = program.icon;
              return (
                <Link key={program.slug} href={`/programs/${program.slug}`} className="block h-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0A3FAF]/30 transition-all h-full flex flex-col group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#F4F7FF] flex items-center justify-center text-[#0A3FAF] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-8 h-[2px] bg-[#C9972D] my-4"></div>
                    <h4 className="text-xl font-heading font-bold text-gray-900 mb-2">{program.title}</h4>
                    <p className="text-gray-500 text-sm mb-6 flex-grow">{program.desc}</p>
                    <div className="text-sm font-bold text-[#0A3FAF] flex items-center group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: Featured Projects */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-[#C9972D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">IMPACT IN ACTION</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0A2D7A]">Featured Projects</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/projects" className="text-[#0A3FAF] font-bold hover:underline hover:text-[#0A2D7A] transition-colors flex items-center">
                View All Projects <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group bg-white h-full"
              >
                <div className="h-56 md:h-64 relative overflow-hidden shrink-0">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-[#C9972D] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                    {p.badge}
                  </div>
                </div>
                <div className="p-7 flex-grow flex flex-col">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <MapPin className="w-3.5 h-3.5" /> {p.loc}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">{p.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{p.desc}</p>
                  <Link href="/projects" className="text-sm font-bold text-[#0A3FAF] mt-4 flex items-center group-hover:text-[#0A2D7A] transition-colors">
                    Read More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Testimonials */}
      <section className="py-28 bg-[#0A2D7A] text-white relative">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center relative z-10">
          <Quote className="w-20 h-20 text-[#C9972D] opacity-20 mx-auto mb-10" />
          
          <div className="min-h-[260px] md:min-h-[180px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl md:text-3xl font-heading italic leading-relaxed text-blue-50 mb-10">
                  "{TESTIMONIALS[activeTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#C9972D] flex items-center justify-center text-white font-bold text-lg">
                    {TESTIMONIALS[activeTestimonial].initial}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">{TESTIMONIALS[activeTestimonial].name}</div>
                    <div className="text-blue-300 text-sm">{TESTIMONIALS[activeTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  activeTestimonial === i ? "w-10 bg-[#C9972D]" : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Latest News */}
      <section className="py-28 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-[#C9972D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">STAY INFORMED</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0A2D7A]">Latest from HTL</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/news" className="text-[#0A3FAF] font-bold hover:underline hover:text-[#0A2D7A] transition-colors flex items-center">
                View All News <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.map((n, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col h-full"
              >
                <div className="h-2 w-full bg-gradient-to-r from-[#0A3FAF] to-[#C9972D]"></div>
                <div className="p-7 flex flex-col flex-grow">
                  <div className="self-start bg-[#F4F7FF] text-[#0A3FAF] text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3">
                    {n.cat}
                  </div>
                  <div className="text-gray-400 text-xs mb-4 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {n.date}
                  </div>
                  <h4 className="text-lg font-heading font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#0A3FAF] transition-colors">
                    {n.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{n.excerpt}</p>
                  <Link href="/news" className="mt-5 text-sm font-bold text-[#0A3FAF] flex items-center group-hover:text-[#0A2D7A] transition-colors">
                    Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Newsletter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center border border-gray-100 rounded-3xl p-10 md:p-16 shadow-sm bg-[#F4F7FF]"
          >
            <h2 className="text-[#C9972D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">STAY CONNECTED</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-[#0A2D7A] mb-4">Join Our Newsletter</h3>
            <p className="text-gray-500 text-base mb-8">Get updates on our programs, research, and impact delivered to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow rounded-xl border border-gray-200 px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0A3FAF] text-gray-700 bg-white"
                required
              />
              <button 
                type="submit" 
                className="bg-[#0A3FAF] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#0A2D7A] transition-colors whitespace-nowrap hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
            <div className="text-xs text-gray-400 font-medium">
              Join 1,200+ supporters · No spam · Unsubscribe anytime
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
