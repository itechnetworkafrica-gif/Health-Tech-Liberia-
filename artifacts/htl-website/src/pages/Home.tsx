import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Heart, Activity, Users, 
  Microscope, Leaf, Globe, ShieldAlert, Shield, 
  Megaphone, Quote, ChevronRight, ChevronDown
} from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";

import orgGroup from "@assets/1784333574982_1784333815299.jpg";
import orgTeam3 from "@assets/1784333542402_1784333815340.jpg";
import orgEvent1 from "@assets/1784333534721_1784333815375.jpg";
import orgEvent2 from "@assets/1784333518590_1784333815409.jpg";
import teamMakessa from "@assets/1784333552163_1784333815255.jpg";
import teamWilmot from "@assets/1784333782085_1784333815122.jpg";
import teamBoakai from "@assets/1784333629096_1784333815217.jpg";

const HOME_SLIDES: HeroSlide[] = [
  {
    image: orgGroup,
    eyebrow: "Transforming Liberia",
    heading: "Healthcare Through Technology & Innovation",
    subtext: "Building Africa's next generation of health-tech leaders",
    ctas: [
      { label: "Our Programs", href: "/programs", variant: "primary" },
      { label: "Donate Now", href: "/donate", variant: "outline" }
    ]
  },
  {
    image: orgTeam3,
    eyebrow: "Our Impact",
    heading: "300+ Girls Empowered Across Liberia",
    subtext: "The Green Health Mentorship is changing lives in Zorzor and Monrovia",
    ctas: [{ label: "See Our Work", href: "/projects", variant: "primary" }]
  },
  {
    image: orgEvent1,
    eyebrow: "Digital Health",
    heading: "Training the Next Wave of Digital Health Workers",
    subtext: "150+ frontline workers equipped with modern digital health tools",
    ctas: [{ label: "View Programs", href: "/programs", variant: "primary" }]
  },
  {
    image: orgEvent2,
    eyebrow: "Community First",
    heading: "From Monrovia to the Countryside — We Are There",
    subtext: "Reaching every corner of Liberia through advocacy, research, and community engagement",
    ctas: [
      { label: "Get Involved", href: "/get-involved", variant: "primary" },
      { label: "Contact Us", href: "/contact", variant: "outline" }
    ]
  }
];

const STATS = [
  { value: 300, suffix: "+", label: "Girls Empowered" },
  { value: 150, suffix: "+", label: "Health Workers Trained" },
  { value: 175, suffix: "+", label: "Youth Reached" },
  { value: 20, suffix: ",000+", label: "Podcast Audience" },
  { value: 9, suffix: "", label: "Program Areas" },
  { value: 6, suffix: "+", label: "Partner Countries" },
];

const PROGRAMS = [
  { icon: Activity, title: "Digital Health & Innovation", slug: "digital-health", desc: "Equipping health workers with digital tools." },
  { icon: Microscope, title: "STEM Education & Research", slug: "stem-education", desc: "Empowering youth in STEM fields." },
  { icon: Users, title: "Gender Equality", slug: "gender-equality", desc: "Fostering women's leadership." },
  { icon: Heart, title: "Mental Health", slug: "mental-health", desc: "Promoting well-being and support." },
  { icon: Leaf, title: "Climate & Environmental Health", slug: "climate-health", desc: "Tackling the climate-health nexus." },
  { icon: Globe, title: "Health Financing", slug: "health-financing", desc: "Making healthcare accessible." },
  { icon: Shield, title: "Sexual & Reproductive Health", slug: "sexual-reproductive-health", desc: "Education and advocacy." },
  { icon: ShieldAlert, title: "Peace & Community", slug: "peace-community", desc: "Building resilient communities." },
  { icon: Megaphone, title: "Advocacy", slug: "advocacy", desc: "Policy change for better health." },
];

function CountUp({ end, suffix }: { end: number, suffix: string }) {
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
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [end, inView]);

  return <span ref={ref}>{Math.floor(count)}{suffix}</span>;
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "The Green Health Mentorship changed my life. I learned how to turn plastic waste into resources and gained the confidence to speak about my reproductive health.",
      name: "Sarah T.",
      role: "Mentorship Participant, Zorzor",
      initial: "S"
    },
    {
      quote: "Thanks to HTL's training, our clinic now uses digital records efficiently, reducing errors and saving crucial time for patient care.",
      name: "Emmanuel K.",
      role: "Frontline Health Worker, Rural Clinic",
      initial: "E"
    },
    {
      quote: "The mental health seminar gave me a safe space to share my struggles. Now, I am a peer counselor helping other youth in my community.",
      name: "Grace M.",
      role: "Youth Participant, Montserrado",
      initial: "G"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: Fullscreen Hero Slider */}
      <div className="relative">
        <HeroSlider slides={HOME_SLIDES} height="100dvh" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <ChevronDown className="w-10 h-10 text-white opacity-70" />
        </div>
      </div>

      {/* SECTION 2: Impact Stats Strip */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-x-0 lg:divide-x divide-gray-200">
            {STATS.map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-heading font-black text-[#0A3FAF] mb-3 drop-shadow-sm">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Featured Video/Image Mission Strip */}
      <section className="py-24 bg-[#0A2D7A] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Quote className="w-24 h-24 text-secondary/30 absolute -top-10 -left-10" />
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight relative z-10 mb-8">
                "Revolutionizing healthcare delivery in Liberia by leveraging technology, research, and innovation."
              </h2>
              <Link href="/about" className="inline-flex bg-secondary text-[#0A2D7A] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl hover:-translate-y-1 items-center gap-3">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] lg:h-[600px] w-full"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] transform rotate-3 scale-105"></div>
              <div className="absolute inset-0 border-4 border-secondary/50 rounded-[3rem] transform -rotate-3 scale-105"></div>
              
              <div className="absolute -right-16 -top-16 w-64 h-64 text-secondary/10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow" style={{ animationDuration: '40s' }}>
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                </svg>
              </div>

              <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#0A2D7A]">
                <img src={orgTeam3} alt="HTL impact" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Program Areas */}
      <section className="py-32 bg-[#f8faff] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#0A3FAF] font-black tracking-widest uppercase text-sm mb-4">Holistic Approach</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">Our 9 Core Focus Areas</h3>
            <p className="text-gray-600 text-lg md:text-xl">Comprehensive interventions designed to address the interconnected determinants of health in West Africa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, i) => {
              const Icon = program.icon;
              return (
                <Link key={program.slug} href={`/programs/${program.slug}`}>
                  <motion.div 
                    className="group bg-white rounded-3xl p-8 shadow-sm border-l-4 border-transparent hover:border-[#0A3FAF] hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="absolute inset-0 bg-[#0A2D7A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                    
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A3FAF] mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors duration-500 relative z-10">
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div className="relative z-10 flex items-center gap-4 mb-4">
                      <h4 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-white transition-colors duration-500">{program.title}</h4>
                    </div>
                    
                    <div className="w-8 h-[2px] bg-gray-200 mb-4 group-hover:bg-white/30 transition-colors duration-500 relative z-10"></div>
                    
                    <p className="text-gray-600 text-lg mb-8 flex-grow relative z-10 group-hover:text-blue-100 transition-colors duration-500">{program.desc}</p>
                    
                    <div className="flex items-center text-[#0A3FAF] font-bold tracking-wide uppercase text-sm group-hover:gap-3 transition-all relative z-10 group-hover:text-secondary">
                      Explore Area <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: Featured Projects */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#0A3FAF] font-black tracking-widest uppercase text-sm mb-4">Our Impact in Action</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-gray-900">Featured Projects</h3>
            </div>
            <Link href="/projects" className="flex items-center text-[#0A3FAF] font-bold hover:text-[#0A2D7A] transition-colors border-b-2 border-[#0A3FAF]/30 hover:border-[#0A3FAF] pb-1">
              View all projects <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: orgGroup,
                badge: "Mentorship",
                title: "Green Health Mentorship",
                loc: "Zorzor & Monrovia",
                desc: "Empowering 300+ adolescent girls with leadership skills and reproductive health knowledge."
              },
              {
                img: orgEvent1,
                badge: "Digital Health",
                title: "Digital Health Literacy",
                loc: "Rural Clinics",
                desc: "Training 150 frontline workers to utilize digital patient records effectively."
              },
              {
                img: orgEvent2,
                badge: "Community",
                title: "Mental Health Seminar",
                loc: "Montserrado",
                desc: "Engaging 175 youth in intensive peer support and stigma reduction campaigns."
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group flex flex-col h-[550px]"
              >
                <div className="h-64 relative overflow-hidden shrink-0">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={p.title} />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-[#0A2D7A] text-xs font-bold uppercase tracking-wider py-2 px-5 rounded-full shadow-sm">
                    {p.badge}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col bg-white">
                  <div className="text-[#0A3FAF] text-sm font-bold mb-3 flex items-center gap-2 uppercase tracking-wide">
                    <Globe className="w-4 h-4" /> {p.loc}
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4 line-clamp-2">{p.title}</h4>
                  <p className="text-gray-600 mb-8 flex-grow line-clamp-3">{p.desc}</p>
                  <Link href="/projects" className="text-[#0A2D7A] font-bold flex items-center group-hover:text-[#0A3FAF] transition-colors mt-auto">
                    Read More <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Meet the Founders */}
      <section className="py-32 bg-[#0A2D7A] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-secondary font-black tracking-widest uppercase text-sm mb-4">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-white">Meet Our Founders</h3>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Makessa Bility", role: "Founder", img: teamMakessa, bio: "A visionary health advocate driving digital transformation across Liberia's healthcare system.", position: "object-top" },
              { name: "Wilmot Kerkulah", role: "Admin & CTO", img: teamWilmot, bio: "Tech strategist building the digital backbone of HTL's operations and innovation pipeline.", position: "object-cover object-center" },
              { name: "Boakai Kamara", role: "Co-Founder", img: teamBoakai, bio: "Community mobilizer and strategic leader amplifying HTL's impact across Liberia.", position: "object-top" },
            ].map((member, i) => (
              <motion.div 
                key={i} 
                className="group relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-slate-900 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className={`absolute inset-0 w-full h-full ${member.position} group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2D7A] via-[#0A2D7A]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-heading font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-secondary font-bold text-lg mb-4">{member.role}</p>
                  <p className="text-blue-100/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Testimonials Slider */}
      <section className="py-32 bg-[#0A2D7A] text-white text-center border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative min-h-[400px] flex flex-col justify-center">
          <Quote className="w-20 h-20 text-[#0A3FAF] mx-auto mb-12" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-12 italic leading-relaxed text-blue-50">
                "{testimonials[activeTestimonial].quote}"
              </h3>
              <div className="flex items-center justify-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#0A3FAF] flex items-center justify-center text-2xl font-black shadow-lg">
                  {testimonials[activeTestimonial].initial}
                </div>
                <div className="text-left">
                  <div className="font-bold text-xl">{testimonials[activeTestimonial].name}</div>
                  <div className="text-blue-200">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`transition-all rounded-full ${
                  activeTestimonial === i ? "w-12 h-2 bg-secondary" : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Latest News */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#0A3FAF] font-black tracking-widest uppercase text-sm mb-4">Stay Informed</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-gray-900">Latest from HTL</h3>
            </div>
            <Link href="/news" className="flex items-center text-[#0A3FAF] font-bold hover:text-[#0A2D7A] transition-colors border-b-2 border-[#0A3FAF]/30 hover:border-[#0A3FAF] pb-1">
              View all news <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "HTL Launches Digital Health Literacy Campaign in Rural Clinics",
                date: "Oct 15, 2024",
                cat: "Initiative",
                excerpt: "Over 150 health workers gathered to learn modern digital charting methods to improve patient outcomes."
              },
              {
                title: "Empowering 100+ Girls: The Next Phase of Green Health Mentorship",
                date: "Sep 28, 2024",
                cat: "Program Update",
                excerpt: "The latest cohort in Zorzor focuses on climate-smart reproductive health and community leadership."
              },
              {
                title: "World Mental Health Day: Reaching Youth Across Montserrado",
                date: "Oct 10, 2024",
                cat: "Events",
                excerpt: "A day dedicated to dismantling stigma, creating safe spaces, and training peer counselors."
              }
            ].map((n, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group flex flex-col hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-[#0A3FAF] to-[#4E8EF7] relative overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
                  <Megaphone className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white text-[#0A2D7A] text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-sm">
                    {n.cat}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-sm font-bold text-[#0A3FAF] mb-3">{n.date}</span>
                  <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4 line-clamp-3">{n.title}</h4>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{n.excerpt}</p>
                  <Link href="/news" className="text-[#0A2D7A] font-bold flex items-center group-hover:text-[#0A3FAF] transition-colors mt-auto">
                    Read Article <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Donation CTA */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-r from-[#0A3FAF] to-[#4E8EF7]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMmgydjJoMnYtMmgydjJoMnYtMmgydjJoMnYtMmgydjJoMnYtMmgydjJoMnYtMmgtdjJoLTIyWiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight text-white">Support Health Innovation in Liberia</h2>
          <p className="text-xl md:text-2xl text-blue-50 mb-16 font-medium max-w-3xl mx-auto">
            Your contribution directly funds technology access, health education, and empowerment programs for communities that need it most.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-4xl mx-auto">
            {[
              { amt: "$25", impact: "provides health literacy training for one worker" },
              { amt: "$50", impact: "sponsors a girl in the Green Health Mentorship" },
              { amt: "$100", impact: "funds community mental health outreach" },
              { amt: "$250", impact: "equips a rural clinic with digital health tools" },
              { amt: "Custom", impact: "supports our core mission" }
            ].map((tier, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <Link href="/donate" className="w-24 h-16 md:w-32 md:h-20 bg-white/10 hover:bg-white hover:text-[#0A2D7A] border-2 border-white/30 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold transition-all backdrop-blur-sm text-white">
                  {tier.amt}
                </Link>
                <span className="text-xs font-medium text-blue-100 max-w-[120px] text-center leading-tight">
                  {tier.impact}
                </span>
              </div>
            ))}
          </div>

          <Link href="/donate" className="inline-flex bg-white text-[#0A3FAF] px-12 py-5 rounded-full font-black text-xl hover:bg-secondary hover:text-[#0A2D7A] transition-all shadow-xl hover:-translate-y-1 items-center gap-3 mt-6">
            <Heart className="w-6 h-6 fill-current" /> Donate Now
          </Link>
        </div>
      </section>

      {/* SECTION 10: Newsletter */}
      <section className="py-24 bg-[#EAF3FF] text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-heading font-black text-[#0A2D7A] mb-4">Stay Connected with HTL</h3>
          <p className="text-gray-600 mb-10 text-lg">Subscribe to our newsletter for updates on our impact and upcoming events.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-xl border-2 border-blue-100 focus:outline-none focus:ring-4 focus:ring-[#0A3FAF]/20 focus:border-[#0A3FAF] text-lg bg-white transition-all shadow-sm"
              required
            />
            <button type="button" className="bg-[#0A3FAF] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#0A2D7A] transition-colors text-lg whitespace-nowrap shadow-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
