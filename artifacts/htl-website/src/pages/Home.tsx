import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, Heart, Activity, Users,
  Microscope, Leaf, Globe, ShieldAlert, Shield,
  Megaphone, ChevronRight, MapPin, Calendar
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

  return (
    <div className="min-h-[100dvh] bg-white">
      <div className="relative">
        <HeroSlider slides={HOME_SLIDES} height="100dvh" />
        <div 
          className="absolute bottom-0 left-0 h-1 bg-[#C9972D] z-30" 
          style={{ width: `${progress}%` }} 
        />
      </div>

      {/* SECTION 2: Impact Numbers */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-10">
            OUR IMPACT
          </span>
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

      {/* SECTION 3: Mission Statement (Dark Stats Section) */}
      <section className="bg-[#080C14] text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 left-8 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none mb-6">"</div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 leading-tight">
                Revolutionizing healthcare delivery in Liberia by leveraging technology, research, and innovation.
              </h2>
              <div className="border-t border-white/20 pt-8 mt-8 flex items-center gap-4">
                <div className="flex text-[#C9972D]">★★★★★</div>
                <span className="text-white font-bold">Health Tech Liberia, est. 2019</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0A2D7A] rounded-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, #0A3FAF 0%, transparent 60%), radial-gradient(circle at 80% 20%, #7C3AED 0%, transparent 40%)'}} />
                <div className="relative z-10">
                  <div className="text-6xl md:text-7xl font-heading font-black mb-2">300+</div>
                  <div className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-6">Girls Empowered</div>
                  <div className="border-t border-white/20 my-6" />
                  <div className="text-6xl md:text-7xl font-heading font-black mb-2">150+</div>
                  <div className="text-blue-200 font-semibold text-sm uppercase tracking-widest">Health Workers Trained</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Programs */}
      <section className="py-28 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-100">
              WHAT WE DO
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0A2D7A] mb-6">
              9 Core Areas of Focus
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.div 
                  key={program.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white rounded-2xl border border-blue-100 p-8 flex flex-col gap-6 hover:shadow-xl hover:border-[#0A3FAF]/30 transition-all group h-full"
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

      {/* SECTION 5: Featured Projects */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                IMPACT IN ACTION
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0A2D7A]">Featured Projects</h3>
            </div>
            <Link href="/projects" className="text-[#0A3FAF] font-bold hover:underline hover:text-[#0A2D7A] transition-colors flex items-center">
              View All Projects <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <span className="border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full self-start">{p.badge}</span>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {p.loc}</p>
                  <h3 className="text-xl font-heading font-bold text-gray-900 leading-tight group-hover:text-[#0A3FAF] transition-colors flex-grow">{p.title}</h3>
                  <Link href="/projects" className="text-xs font-bold uppercase tracking-widest text-gray-800 flex items-center gap-1 hover:text-[#0A3FAF] transition-colors mt-2">
                    READ MORE <span className="text-lg leading-none">↗</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Testimonials */}
      <section className="bg-[#080C14] text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 left-8 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none mb-6">"</div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="inline-block bg-white/10 text-white/60 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-10">
            VOICES OF IMPACT
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-16">Stories from the Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col"
              >
                <div className="p-8 relative flex-grow">
                  <span className="absolute bottom-4 right-6 text-8xl text-gray-100 font-serif select-none leading-none">"</span>
                  <p className="text-gray-700 text-lg leading-relaxed relative z-10">"{t.quote}"</p>
                </div>
                <div className="bg-gradient-to-r from-[#0A3FAF] to-[#7C3AED] px-8 py-5 flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">{t.name}</div>
                    <div className="text-white/70 text-xs uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Latest News */}
      <section className="py-28 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-100">
                STAY INFORMED
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0A2D7A]">Latest from HTL</h3>
            </div>
            <Link href="/news" className="text-[#0A3FAF] font-bold hover:underline hover:text-[#0A2D7A] transition-colors flex items-center">
              View All News <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.map((n, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col h-full"
              >
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <span className="border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full self-start">{n.cat}</span>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {n.date}</p>
                  <h3 className="text-xl font-heading font-bold text-gray-900 leading-tight group-hover:text-[#0A3FAF] transition-colors">{n.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{n.excerpt}</p>
                  <Link href="/news" className="text-xs font-bold uppercase tracking-widest text-gray-800 flex items-center gap-1 hover:text-[#0A3FAF] transition-colors mt-2">
                    READ MORE <span className="text-lg leading-none">↗</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Newsletter */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto border border-gray-100 rounded-3xl p-10 md:p-16 shadow-sm bg-[#F4F7FF]"
          >
            <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-100">
              STAY CONNECTED
            </span>
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
