import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { 
  ArrowRight, Heart, Activity, Users, 
  Microscope, Leaf, Globe, ShieldAlert, Shield, 
  Megaphone, Quote, ChevronRight
} from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";

import hero1 from "../assets/hero_1.jpg";
import hero2 from "../assets/hero_2.jpg";
import hero3 from "../assets/hero_3.jpg";
import hero4 from "../assets/hero_4.jpg";
import aboutImg from "../assets/about_who_we_are.jpg";
import proj1 from "../assets/project_1.jpg";
import proj2 from "../assets/project_2.jpg";
import proj3 from "../assets/project_3.jpg";

const HOME_SLIDES: HeroSlide[] = [
  {
    image: hero1,
    eyebrow: "Our Mission",
    heading: "Transforming Healthcare in Liberia",
    subtext: "Bridging the gap between accessible healthcare and digital innovation to empower communities.",
    ctas: [
      { label: "Learn More", href: "/about", variant: "primary" },
      { label: "Donate Now", href: "/donate", variant: "outline" }
    ]
  },
  {
    image: hero2,
    eyebrow: "Impact Focus",
    heading: "Empowering Girls Through Green Health",
    subtext: "Over 300 girls in Zorzor & Monrovia trained in reproductive health and green entrepreneurship.",
    ctas: [{ label: "View Project", href: "/projects", variant: "primary" }]
  },
  {
    image: hero3,
    eyebrow: "Capacity Building",
    heading: "Digital Health Literacy for Workers",
    subtext: "Equipping 150+ frontline health workers with digital tools to reduce errors and improve care.",
    ctas: [{ label: "Our Programs", href: "/programs", variant: "primary" }]
  },
  {
    image: hero4,
    eyebrow: "Community Support",
    heading: "Building Mentally Resilient Communities",
    subtext: "Reaching 175+ youth with intensive mental health support and peer counseling training.",
    ctas: [{ label: "Get Involved", href: "/get-involved", variant: "primary" }]
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
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: Hero Slider */}
      <HeroSlider slides={HOME_SLIDES} height="100dvh" />

      {/* SECTION 2: Impact Counter Strip */}
      <section className="relative z-20 -mt-20 container mx-auto px-4 md:px-6">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {STATS.map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center px-2 pt-4 md:pt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-heading font-black text-primary mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Mission Statement */}
      <section className="py-24 mt-12 bg-[#0A2D7A] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Quote className="w-24 h-24 text-secondary/30 absolute -top-10 -left-10" />
              <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight relative z-10">
                "Revolutionizing healthcare delivery in Liberia by leveraging technology, research, and innovation."
              </h2>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-16 h-1 bg-secondary"></div>
                <span className="font-bold text-secondary tracking-widest uppercase text-sm">Our Core Mandate</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <img src={aboutImg} alt="HTL impact" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Program Areas */}
      <section className="py-32 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-black tracking-widest uppercase text-sm mb-4">Holistic Approach</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">Our 9 Core Focus Areas</h3>
            <p className="text-gray-600 text-lg md:text-xl">Comprehensive interventions designed to address the interconnected determinants of health in West Africa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, i) => {
              const Icon = program.icon;
              return (
                <Link key={program.slug} href={`/programs/${program.slug}`}>
                  <motion.div 
                    className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300 ease-out"></div>
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4 relative z-10 group-hover:text-white transition-colors duration-300">{program.title}</h4>
                    <p className="text-gray-600 text-lg mb-8 flex-grow relative z-10 group-hover:text-white/90 transition-colors duration-300">{program.desc}</p>
                    <div className="flex items-center text-primary font-bold tracking-wide uppercase text-sm group-hover:gap-3 transition-all relative z-10 group-hover:text-white">
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
              <h2 className="text-primary font-black tracking-widest uppercase text-sm mb-4">Our Impact in Action</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-gray-900">Featured Projects</h3>
            </div>
            <Link href="/projects" className="flex items-center text-primary font-bold hover:text-[#0A2D7A] transition-colors border-b-2 border-primary/30 hover:border-primary pb-1">
              View all projects <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: proj1,
                badge: "Mentorship",
                title: "Green Health Mentorship",
                loc: "Zorzor & Monrovia",
                desc: "Empowering 300+ adolescent girls with leadership skills and reproductive health knowledge."
              },
              {
                img: proj2,
                badge: "Digital Health",
                title: "Digital Health Literacy",
                loc: "Rural Clinics",
                desc: "Training 150 frontline workers to utilize digital patient records effectively."
              },
              {
                img: proj3,
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
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col"
              >
                <div className="h-64 bg-slate-100 relative overflow-hidden">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={p.title} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                    {p.badge}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-primary text-sm font-bold mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4" /> {p.loc}
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4">{p.title}</h4>
                  <p className="text-gray-600 mb-8 flex-grow">{p.desc}</p>
                  <Link href="/projects" className="text-[#0A2D7A] font-bold flex items-center group-hover:text-primary transition-colors">
                    Read More <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: About Strip */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-8">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Health Tech Liberia is a registered nonprofit organization dedicated to transforming the healthcare landscape through technology, research, innovation, and advocacy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We envision a Liberia where accessible, tech-enabled, and equitable healthcare drives sustainable community prosperity.
              </p>
              <ul className="space-y-4 mb-10">
                {["Data-driven community interventions", "Youth and women empowerment", "Sustainable climate-health solutions"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="font-bold text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex bg-[#0A2D7A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary transition-all shadow-lg hover:-translate-y-1">
                About HTL
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-[2rem] overflow-hidden"
            >
              <img src={aboutImg} alt="HTL Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Testimonials Slider */}
      <section className="py-32 bg-[#0A2D7A] text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Quote className="w-16 h-16 text-secondary mx-auto mb-10 opacity-50" />
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-12 italic leading-relaxed">
            "The Green Health Mentorship changed my life. I learned how to turn plastic waste into resources and gained the confidence to speak about my reproductive health."
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-xl font-bold">S</div>
            <div className="text-left">
              <div className="font-bold text-lg">Sarah T.</div>
              <div className="text-blue-200">Mentorship Participant, Zorzor</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Latest News */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-black tracking-widest uppercase text-sm mb-4">Stay Informed</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-gray-900">Latest from HTL</h3>
            </div>
            <Link href="/news" className="flex items-center text-primary font-bold hover:text-[#0A2D7A] transition-colors border-b-2 border-primary/30 hover:border-primary pb-1">
              View all news <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "HTL Launches Digital Health Literacy Campaign in Rural Clinics",
                date: "Oct 15, 2024",
                cat: "Initiative",
                img: proj2,
              },
              {
                title: "Empowering 100+ Girls: The Next Phase of Green Health Mentorship",
                date: "Sep 28, 2024",
                cat: "Program Update",
                img: proj1,
              },
              {
                title: "World Mental Health Day: Reaching Youth Across Montserrado",
                date: "Oct 10, 2024",
                cat: "Events",
                img: proj3,
              }
            ].map((n, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
              >
                <div className="h-56 bg-slate-100 overflow-hidden relative">
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-accent px-3 py-1 rounded-full">{n.cat}</span>
                    <span className="text-sm font-medium text-gray-500">{n.date}</span>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-gray-900 mb-4 line-clamp-2">{n.title}</h4>
                  <Link href="/news" className="text-[#0A2D7A] font-bold flex items-center group-hover:text-primary transition-colors">
                    Read Article <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Donation CTA */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#0A2D7A] to-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMmgydjJoMnYtMmgydjJoMnYtMmgydjJoMnYtMmgydjJoMnYtMmgydjJoMnYtMmgydjJoMnYtMmgtdjJoLTIyWiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-white">
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight">Support Health Innovation in Liberia</h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 font-medium">
                Your contribution directly funds technology access, health education, and empowerment programs for communities that need it most.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["$25", "$50", "$100", "$250"].map((amt, i) => (
                  <Link key={i} href="/donate" className="w-24 h-16 md:w-32 md:h-20 bg-white/10 hover:bg-white hover:text-[#0A2D7A] border-2 border-white/30 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold transition-all backdrop-blur-sm">
                    {amt}
                  </Link>
                ))}
              </div>

              <Link href="/donate" className="inline-flex bg-secondary text-[#0A2D7A] px-10 py-5 rounded-full font-black text-xl hover:bg-white transition-all shadow-xl hover:-translate-y-1 items-center gap-3">
                <Heart className="w-6 h-6 fill-[#0A2D7A]" /> Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Newsletter */}
      <section className="py-24 bg-accent text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-3xl font-heading font-bold text-[#0A2D7A] mb-4">Stay Connected</h3>
          <p className="text-gray-600 mb-8 text-lg">Subscribe to our newsletter for updates on our impact and upcoming events.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg bg-white"
              required
            />
            <button type="button" className="bg-[#0A2D7A] text-white px-8 py-4 rounded-xl font-bold hover:bg-primary transition-colors text-lg whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}