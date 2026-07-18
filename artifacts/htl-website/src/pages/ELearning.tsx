import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BookOpen, Award, Clock, ChevronRight, Search,
  Monitor, Activity, Database, Shield, Cpu, Globe,
  Smartphone, BarChart2, Lightbulb, ClipboardList,
  TrendingUp, Users, FileText, Leaf, DollarSign,
  CheckCircle, Star, GraduationCap, ArrowRight,
} from "lucide-react";

// ── Course data ────────────────────────────────────────────────────────────────
const CATEGORIES = ["All", "Digital Health", "Data & Analytics", "Leadership", "Community Health", "Research"];

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  icon: React.ElementType;
  color: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: "Introduction to Digital Health",
    description: "Discover how digital technologies are reshaping healthcare delivery and public health outcomes across Africa and beyond.",
    category: "Digital Health",
    difficulty: "Beginner",
    duration: "4 weeks",
    lessons: 5,
    icon: Monitor,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "Digital Health Fundamentals",
    description: "Build a solid foundation in digital health concepts, frameworks, and the global landscape of health technology solutions.",
    category: "Digital Health",
    difficulty: "Beginner",
    duration: "5 weeks",
    lessons: 5,
    icon: Activity,
    color: "from-sky-500 to-sky-700",
  },
  {
    id: 3,
    title: "Health Information Systems (HIS)",
    description: "Learn to design, implement, and manage health information systems that strengthen national and facility-level data flows.",
    category: "Digital Health",
    difficulty: "Intermediate",
    duration: "6 weeks",
    lessons: 5,
    icon: Database,
    color: "from-indigo-500 to-indigo-700",
  },
  {
    id: 4,
    title: "Electronic Medical Records (EMR/EHR)",
    description: "Master electronic medical record systems: architecture, standards, interoperability, and best practices for clinical environments.",
    category: "Digital Health",
    difficulty: "Intermediate",
    duration: "6 weeks",
    lessons: 5,
    icon: FileText,
    color: "from-violet-500 to-violet-700",
  },
  {
    id: 5,
    title: "Telemedicine & Telehealth",
    description: "Explore remote care delivery models, telehealth platforms, regulatory considerations, and real-world implementation strategies.",
    category: "Digital Health",
    difficulty: "Intermediate",
    duration: "5 weeks",
    lessons: 5,
    icon: Globe,
    color: "from-cyan-500 to-cyan-700",
  },
  {
    id: 6,
    title: "Artificial Intelligence in Healthcare",
    description: "Understand how AI, machine learning, and predictive analytics are transforming diagnostics, treatment, and health administration.",
    category: "Data & Analytics",
    difficulty: "Advanced",
    duration: "7 weeks",
    lessons: 5,
    icon: Cpu,
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 7,
    title: "Health Data Management & Analytics",
    description: "Develop practical skills in collecting, cleaning, analyzing, and visualizing health data to drive evidence-based decisions.",
    category: "Data & Analytics",
    difficulty: "Intermediate",
    duration: "6 weeks",
    lessons: 5,
    icon: BarChart2,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 8,
    title: "Health Data Privacy & Cybersecurity",
    description: "Protect patient data and health systems by applying cybersecurity frameworks, data governance standards, and privacy laws.",
    category: "Data & Analytics",
    difficulty: "Advanced",
    duration: "6 weeks",
    lessons: 5,
    icon: Shield,
    color: "from-red-500 to-rose-700",
  },
  {
    id: 9,
    title: "Digital Health Leadership",
    description: "Equip yourself with strategic, managerial, and leadership skills to champion digital transformation in health organizations.",
    category: "Leadership",
    difficulty: "Advanced",
    duration: "6 weeks",
    lessons: 5,
    icon: Star,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 10,
    title: "Community Health & Digital Innovation",
    description: "Apply digital tools to community health challenges — from mobile data collection to community dashboards and SMS campaigns.",
    category: "Community Health",
    difficulty: "Beginner",
    duration: "5 weeks",
    lessons: 5,
    icon: Users,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 11,
    title: "Mobile Health (mHealth)",
    description: "Design and deploy mobile health interventions — apps, SMS platforms, and USSD solutions for low-resource settings.",
    category: "Digital Health",
    difficulty: "Intermediate",
    duration: "5 weeks",
    lessons: 5,
    icon: Smartphone,
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 12,
    title: "Public Health Informatics",
    description: "Bridge public health practice and information science to improve disease surveillance, outbreak response, and population health.",
    category: "Data & Analytics",
    difficulty: "Intermediate",
    duration: "6 weeks",
    lessons: 5,
    icon: Activity,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 13,
    title: "Health Technology Entrepreneurship",
    description: "Build and launch health technology ventures — business models, product development, funding, and market entry in African markets.",
    category: "Leadership",
    difficulty: "Intermediate",
    duration: "7 weeks",
    lessons: 5,
    icon: Lightbulb,
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: 14,
    title: "Project Management for Health Programs",
    description: "Apply project management principles and tools to plan, execute, monitor, and close health technology projects on time and on budget.",
    category: "Leadership",
    difficulty: "Intermediate",
    duration: "6 weeks",
    lessons: 5,
    icon: ClipboardList,
    color: "from-slate-500 to-slate-700",
  },
  {
    id: 15,
    title: "Monitoring, Evaluation & Learning (MEL)",
    description: "Design robust MEL frameworks for digital health programs — indicators, data collection, reporting, and adaptive learning cycles.",
    category: "Research",
    difficulty: "Intermediate",
    duration: "6 weeks",
    lessons: 5,
    icon: TrendingUp,
    color: "from-green-500 to-emerald-700",
  },
  {
    id: 16,
    title: "Digital Skills for Healthcare Professionals",
    description: "Practical digital literacy for clinicians and health workers — electronic tools, communication platforms, and data entry systems.",
    category: "Community Health",
    difficulty: "Beginner",
    duration: "4 weeks",
    lessons: 5,
    icon: Monitor,
    color: "from-sky-400 to-blue-600",
  },
  {
    id: 17,
    title: "Digital Literacy for Community Health Workers",
    description: "Empower CHWs with essential digital skills — smartphones, apps, data reporting, and staying safe online in field settings.",
    category: "Community Health",
    difficulty: "Beginner",
    duration: "3 weeks",
    lessons: 5,
    icon: GraduationCap,
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 18,
    title: "Health Research Methods & Data Collection",
    description: "Master quantitative and qualitative research methods, survey design, ethical principles, and digital tools for health research.",
    category: "Research",
    difficulty: "Intermediate",
    duration: "7 weeks",
    lessons: 5,
    icon: BookOpen,
    color: "from-fuchsia-500 to-purple-700",
  },
  {
    id: 19,
    title: "Climate Change, Technology & Public Health",
    description: "Examine the intersection of climate change and health — digital surveillance, early warning systems, and green health solutions.",
    category: "Community Health",
    difficulty: "Beginner",
    duration: "5 weeks",
    lessons: 5,
    icon: Leaf,
    color: "from-green-400 to-teal-600",
  },
  {
    id: 20,
    title: "Grant Writing, Proposal Development & Fundraising",
    description: "Secure funding for health tech initiatives — craft compelling proposals, navigate donor landscapes, and manage grant reporting.",
    category: "Leadership",
    difficulty: "Intermediate",
    duration: "5 weeks",
    lessons: 5,
    icon: DollarSign,
    color: "from-lime-500 to-green-600",
  },
];

const difficultyColor: Record<string, string> = {
  Beginner:     "bg-emerald-50 text-emerald-700 border-emerald-200",
  Intermediate: "bg-blue-50 text-blue-700 border-blue-200",
  Advanced:     "bg-purple-50 text-purple-700 border-purple-200",
};

// ── Course Card ────────────────────────────────────────────────────────────────
function CourseCard({ course, index }: { course: Course; index: number }) {
  const Icon = course.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.06 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl border border-blue-100 overflow-hidden flex flex-col hover:shadow-xl hover:border-[#0A3FAF]/30 transition-all group"
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-br ${course.color} p-6 flex items-center justify-between`}>
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
        <span className={`text-xs font-bold px-3 py-1.5 rounded-full border bg-white/90 ${difficultyColor[course.difficulty]}`}>
          {course.difficulty}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0A3FAF]/70">{course.category}</span>
        <h3 className="font-heading font-bold text-gray-900 text-lg leading-snug group-hover:text-[#0A3FAF] transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-grow">{course.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 pt-3 border-t border-gray-100 text-xs text-gray-400 font-medium">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
          <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> {course.lessons} Lessons</span>
          <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> Certificate</span>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6">
        <Link
          href="/get-involved"
          className="w-full bg-[#0A3FAF] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0A2D7A] transition-all text-sm"
        >
          Enroll Now <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function ELearning() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = COURSES.filter((c) => {
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#080C14] text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 70% 40%, #0A3FAF, transparent 55%), radial-gradient(circle at 15% 80%, #1e3a8a, transparent 45%)" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M45.7,-76.4C58.9,-69.3,69.1,-55.3,77.7,-40.7C86.3,-26.1,93.4,-11.1,91.8,3.2C90.2,17.4,79.9,30.8,69.5,42.5C59.2,54.1,48.7,64,35.9,71.2C23.1,78.4,7.9,82.8,-6.8,84C-21.5,85.2,-36.5,83.1,-48.9,75.4C-61.4,67.7,-71.2,54.4,-78.9,39.8C-86.5,25.2,-91.9,9.4,-90.1,-5.5C-88.3,-20.3,-79.3,-34.2,-68.8,-45.5C-58.4,-56.8,-46.6,-65.4,-33.8,-72.4C-21,-79.4,-7.3,-83.7,4.5,-80.6C16.3,-77.4,32.6,-83.5,45.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              HTL E-LEARNING PLATFORM
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-5 leading-[1.1] max-w-3xl">
              Learn Digital Health.<br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Earn Your Certificate.
              </span>
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl leading-relaxed mb-10">
              20 professionally designed courses in digital health, data analytics, leadership, and community health — built for Africa's next generation of health technology leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#courses" className="bg-[#0A3FAF] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg">
                Browse Courses <ChevronRight className="w-5 h-5" />
              </a>
              <Link href="/certificates" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                Verify a Certificate <Award className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A2D7A] text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20", label: "Professional Courses" },
              { value: "100", label: "Lessons Total" },
              { value: "Free", label: "Enrollment" },
              { value: "$5", label: "Certificate Download" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-heading font-black text-white mb-1">{stat.value}</p>
                <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-white border border-blue-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-[#0A2D7A]">
              From Enrolment to Certificate
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, step: "01", title: "Create Account", desc: "Register free and set up your learner profile in minutes." },
              { icon: BookOpen, step: "02", title: "Enroll in a Course", desc: "Choose from 20 digital health courses and start Lesson 1." },
              { icon: GraduationCap, step: "03", title: "Complete & Pass Exam", desc: "Work through 5 lessons, then pass the final assessment (70%)." },
              { icon: Award, step: "04", title: "Download Certificate", desc: "Pay $5 to unlock and download your signed certificate." },
            ].map(({ icon: Icon, step, title, desc }) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Number(step) * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-blue-100 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A3FAF] flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[#C9972D] text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center">
                    {step}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-base">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE CATALOG ────────────────────────────────────────────────────── */}
      <section id="courses" className="py-20 bg-white scroll-mt-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-[#0A3FAF] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              COURSE CATALOG
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-[#0A2D7A] mb-3">
              20 Professional Courses
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Each course includes 5 text-based lessons, a final assessment, and a signed certificate from Health Tech Liberia.
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-4xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses…"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#0A3FAF] text-gray-900 placeholder:text-gray-400 bg-white shadow-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                    activeCategory === cat
                      ? "bg-[#0A3FAF] text-white border-[#0A3FAF] shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#0A3FAF] hover:text-[#0A3FAF]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="text-sm text-gray-400 font-medium mb-6 max-w-4xl mx-auto">
            Showing {filtered.length} of {COURSES.length} courses
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-gray-200 rounded-2xl">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-semibold">No courses match your search.</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} className="mt-4 text-[#0A3FAF] font-semibold hover:underline text-sm">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── WHAT YOU GET ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-white border border-blue-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                WHAT YOU GET
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-[#0A2D7A] mb-6">
                A Premium Learning Experience
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { title: "5 Expert-Written Lessons", desc: "Each course includes detailed, text-based lessons with case studies, key takeaways, and reflection questions." },
                  { title: "Final Assessment", desc: "20 multiple-choice questions. Score 70% or above to pass. You get 2 attempts." },
                  { title: "Official Certificate", desc: "Signed by Makessa Bility, Founder & Executive Director of Health Tech Liberia." },
                  { title: "Online Verification", desc: "Every certificate has a unique ID and QR code for instant online verification." },
                  { title: "Learn at Your Own Pace", desc: "Your progress is saved automatically. Pick up exactly where you left off, anytime." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0A3FAF] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0A2D7A] to-[#0A3FAF] rounded-3xl p-8 text-white flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 pb-6 border-b border-white/20">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Award className="w-9 h-9 text-[#C9972D]" />
                </div>
                <div>
                  <p className="font-heading font-black text-xl">Certificate of Completion</p>
                  <p className="text-blue-200 text-sm">Health Tech Liberia · Edu Team</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  "Unique Certificate ID & QR Code",
                  "Verification URL & Digital Badge",
                  "Signed by Makessa Bility",
                  "Permanent record in our database",
                  "Downloadable after $5 fee",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/certificates" className="mt-2 border border-white/30 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm">
                Verify a Certificate <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#080C14] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 60% 50%, #0A3FAF, transparent 55%)" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
          <span className="inline-block bg-white/10 text-white/60 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            GET STARTED TODAY
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-5">
            Ready to advance your digital health career?
          </h2>
          <p className="text-blue-200 text-lg mb-10 leading-relaxed">
            Join hundreds of health professionals across West Africa who are building the skills to lead the digital health transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="bg-[#0A3FAF] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg">
              Enroll for Free <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
