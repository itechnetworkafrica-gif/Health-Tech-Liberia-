import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu, X, ChevronDown, Heart,
  Monitor, FlaskConical, Scale, Brain, Leaf,
  Banknote, HeartPulse, Users, Megaphone,
  Award, GraduationCap, LogIn, LogOut, User,
} from "lucide-react";
import htlLogo from "@assets/1784331190411_1784331478727.jpg";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";
import { useAuth } from "@/contexts/AuthContext";

const PROGRAMS = [
  { name: "Digital Health & Innovation", slug: "digital-health", Icon: Monitor },
  { name: "STEM Education & Research", slug: "stem-education", Icon: FlaskConical },
  { name: "Gender Equality", slug: "gender-equality", Icon: Scale },
  { name: "Mental Health", slug: "mental-health", Icon: Brain },
  { name: "Climate & Environmental Health", slug: "climate-health", Icon: Leaf },
  { name: "Health Financing", slug: "health-financing", Icon: Banknote },
  { name: "Sexual & Reproductive Health", slug: "sexual-reproductive-health", Icon: HeartPulse },
  { name: "Peace & Community Engagement", slug: "peace-community", Icon: Users },
  { name: "Advocacy", slug: "advocacy", Icon: Megaphone },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordions, setMobileAccordions] = useState<Record<string, boolean>>({});
  const [location] = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const navLinkClass = (path: string) => {
    const isActive = location === path || (path !== '/' && location.startsWith(path));
    return `text-sm font-semibold transition-all relative py-2 ${
      isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
    } ${isScrolled ? '' : 'lg:text-gray-800 lg:hover:text-primary'}`;
  };

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "";

  return (
    <>
      <TopBar />
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-md py-3"
            : "top-[36px] bg-white/90 backdrop-blur-md shadow-sm py-4 lg:bg-white/80"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              <img
                src={htlLogo}
                alt="Health Tech Liberia Logo"
                className="h-12 w-auto rounded-lg shadow-sm bg-white transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-heading font-black text-xl leading-tight text-[#0A2D7A] tracking-tight">
                  HEALTH TECH
                </span>
                <span className="font-heading font-bold text-sm leading-none text-primary tracking-widest uppercase">
                  LIBERIA
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              <Link href="/" className={navLinkClass("/")}>Home</Link>
              <Link href="/about" className={navLinkClass("/about")}>About</Link>

              {/* Programs Mega Dropdown */}
              <div
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveDropdown('programs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-1 cursor-pointer border-none bg-transparent ${navLinkClass("/programs")}`}>
                  Programs <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'programs' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[750px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                          <h3 className="font-heading font-bold text-lg text-[#0A2D7A]">Our Core Focus Areas</h3>
                          <Link href="/programs" className="text-primary text-sm font-bold flex items-center hover:underline">
                            View All <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                          {PROGRAMS.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/programs/${p.slug}`}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link"
                            >
                              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5 group-hover/link:bg-primary group-hover/link:text-white transition-colors text-[#0A3FAF]">
                                <p.Icon className="w-4 h-4" strokeWidth={1.75} />
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 text-sm group-hover/link:text-primary transition-colors leading-tight mb-1">{p.name}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/projects" className={navLinkClass("/projects")}>Projects</Link>
              <Link href="/research" className={navLinkClass("/research")}>Research</Link>

              {/* E-Learning link */}
              <Link href="/elearning" className={`flex items-center gap-1.5 ${navLinkClass("/elearning")}`}>
                <GraduationCap className="w-4 h-4" /> E-Learning
              </Link>

              {/* More Dropdown */}
              <div
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveDropdown('more')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-1 cursor-pointer border-none bg-transparent ${navLinkClass("/events")}`}>
                  More <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'more' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'more' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-4 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-3 flex flex-col gap-1">
                        <Link href="/events" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors">Events</Link>
                        <Link href="/news" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors">News & Media</Link>
                        <Link href="/resources" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors">Resources</Link>
                        <Link href="/partners" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors">Partners</Link>
                        <div className="h-px bg-gray-100 my-1 mx-2"></div>
                        <Link href="/contact" className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors">Contact</Link>
                        <div className="h-px bg-gray-100 my-1 mx-2"></div>
                        <Link href="/certificates" className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#C9972D] hover:bg-amber-50 rounded-xl transition-colors">
                          <Award className="w-4 h-4" /> Certificate Portal
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <Link href="/get-involved" className="text-sm font-bold text-primary hover:text-[#0A2D7A] transition-colors uppercase tracking-wider">
                  Get Involved
                </Link>

                {/* Auth section */}
                {user ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown('user')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-2 bg-[#0A3FAF]/10 hover:bg-[#0A3FAF]/20 text-[#0A3FAF] px-3 py-2 rounded-full font-bold text-sm transition-all">
                      <div className="w-6 h-6 rounded-full bg-[#0A3FAF] text-white flex items-center justify-center text-xs font-black">
                        {initials}
                      </div>
                      <span className="max-w-[80px] truncate">{user.name.split(" ")[0]}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'user' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="px-4 py-3 border-b border-gray-100">
                            <p className="font-bold text-gray-900 text-sm truncate">{user.name}</p>
                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                          </div>
                          <div className="p-2">
                            <Link href="/elearning" className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors">
                              <GraduationCap className="w-4 h-4" /> My Courses
                            </Link>
                            <button
                              onClick={logout}
                              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                            >
                              <LogOut className="w-4 h-4" /> Sign Out
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center gap-1.5 bg-[#0A3FAF] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#0A2D7A] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <LogIn className="w-4 h-4" /> Login
                  </Link>
                )}

                <Link href="/donate" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#0A2D7A] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  <Heart className="w-4 h-4 fill-white/20" /> Donate
                </Link>
              </div>
            </nav>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 lg:hidden">
              {user ? (
                <div className="w-8 h-8 rounded-full bg-[#0A3FAF] text-white flex items-center justify-center text-xs font-black">
                  {initials}
                </div>
              ) : (
                <Link href="/login" className="bg-[#0A3FAF] text-white px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-md">
                  <LogIn className="w-3.5 h-3.5" /> Login
                </Link>
              )}
              <Link href="/donate" className="bg-primary text-white px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-md">
                <Heart className="w-3.5 h-3.5" /> Donate
              </Link>
              <button
                className="p-2 text-[#0A2D7A] bg-slate-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100dvh" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto"
            >
              <div className="p-6 flex flex-col gap-2 pb-32">
                {/* User info if logged in */}
                {user && (
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#0A3FAF] text-white flex items-center justify-center text-sm font-black shrink-0">
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                  </div>
                )}

                <Link href="/" className="text-xl font-heading font-bold text-gray-900 p-4 border-b border-gray-100 hover:bg-slate-50 rounded-xl">Home</Link>
                <Link href="/about" className="text-xl font-heading font-bold text-gray-900 p-4 border-b border-gray-100 hover:bg-slate-50 rounded-xl">About</Link>

                <div className="border-b border-gray-100 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleMobileAccordion('programs')}
                    className="w-full text-left text-xl font-heading font-bold text-gray-900 p-4 flex justify-between items-center hover:bg-slate-50"
                  >
                    Programs <ChevronDown className={`w-5 h-5 transition-transform ${mobileAccordions['programs'] ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAccordions['programs'] && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden bg-slate-50"
                      >
                        <div className="p-4 flex flex-col gap-3 pl-8">
                          <Link href="/programs" className="text-primary font-bold py-2">All Programs</Link>
                          {PROGRAMS.map((p) => (
                            <Link key={p.slug} href={`/programs/${p.slug}`} className="text-gray-700 font-medium py-2 flex items-center gap-3">
                              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-[#0A3FAF]">
                                <p.Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                              </div>
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/projects" className="text-xl font-heading font-bold text-gray-900 p-4 border-b border-gray-100 hover:bg-slate-50 rounded-xl">Projects</Link>
                <Link href="/research" className="text-xl font-heading font-bold text-gray-900 p-4 border-b border-gray-100 hover:bg-slate-50 rounded-xl">Research</Link>

                {/* E-Learning in mobile menu */}
                <Link href="/elearning" className="text-xl font-heading font-bold text-[#0A3FAF] p-4 border-b border-primary/20 hover:bg-primary/5 rounded-xl flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" /> E-Learning
                </Link>

                <div className="border-b border-gray-100 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleMobileAccordion('more')}
                    className="w-full text-left text-xl font-heading font-bold text-gray-900 p-4 flex justify-between items-center hover:bg-slate-50"
                  >
                    More <ChevronDown className={`w-5 h-5 transition-transform ${mobileAccordions['more'] ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAccordions['more'] && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden bg-slate-50"
                      >
                        <div className="p-4 flex flex-col gap-4 pl-8">
                          <Link href="/events" className="text-gray-700 font-medium">Events</Link>
                          <Link href="/news" className="text-gray-700 font-medium">News & Media</Link>
                          <Link href="/resources" className="text-gray-700 font-medium">Resources</Link>
                          <Link href="/partners" className="text-gray-700 font-medium">Partners</Link>
                          <Link href="/contact" className="text-gray-700 font-medium">Contact</Link>
                          <Link href="/certificates" className="text-[#C9972D] font-bold flex items-center gap-2">
                            <Award className="w-4 h-4" /> Certificate Portal
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/get-involved" className="text-xl font-heading font-bold text-primary p-4 border-b border-primary/20 hover:bg-primary/5 rounded-xl">Get Involved</Link>

                <div className="mt-4 flex flex-col gap-3">
                  {user ? (
                    <button
                      onClick={logout}
                      className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg text-red-500 border border-red-200 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-5 h-5" /> Sign Out
                    </button>
                  ) : (
                    <>
                      <Link href="/register" className="bg-[#0A3FAF] text-white text-center py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg">
                        <User className="w-5 h-5" /> Create Account
                      </Link>
                      <Link href="/login" className="border-2 border-[#0A3FAF] text-[#0A3FAF] text-center py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                        <LogIn className="w-5 h-5" /> Sign In
                      </Link>
                    </>
                  )}
                  <Link href="/donate" className="bg-primary text-white text-center py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg">
                    <Heart className="w-5 h-5 fill-white/20" /> Make a Donation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
