import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, X, ArrowRight, Monitor, FlaskConical, Scale, Brain,
  Leaf, Banknote, HeartPulse, Users, Megaphone, FileText,
  FolderOpen, BookOpen, Newspaper, Calendar, Award, Heart,
  MapPin, Sparkles, ChevronRight,
} from "lucide-react";

// ─── Search index ──────────────────────────────────────────────────────────────
const SEARCH_INDEX = [
  // Pages
  { id: "home", title: "Home", excerpt: "Transforming health through technology, research, and advocacy in Liberia.", path: "/", category: "Pages", Icon: FileText, tags: ["home", "health tech liberia", "htl"] },
  { id: "about", title: "About Us", excerpt: "Learn who we are, our mission, our team, and what drives us forward.", path: "/about", category: "Pages", Icon: FileText, tags: ["about", "mission", "team", "who we are", "vision"] },
  { id: "projects", title: "Our Projects", excerpt: "High-impact initiatives transforming health outcomes across Liberia and West Africa.", path: "/projects", category: "Pages", Icon: FolderOpen, tags: ["projects", "initiatives", "impact", "case study"] },
  { id: "research", title: "Research", excerpt: "Evidence-based health research driving policy and practice change in Liberia.", path: "/research", category: "Pages", Icon: BookOpen, tags: ["research", "evidence", "policy", "studies"] },
  { id: "news", title: "News & Media", excerpt: "Latest news, press releases, and media coverage of our work.", path: "/news", category: "Pages", Icon: Newspaper, tags: ["news", "media", "press", "updates"] },
  { id: "events", title: "Events", excerpt: "Upcoming workshops, seminars, conferences and community events.", path: "/events", category: "Pages", Icon: Calendar, tags: ["events", "workshop", "seminar", "conference"] },
  { id: "resources", title: "Resources", excerpt: "Health resources, guides, toolkits and educational materials.", path: "/resources", category: "Pages", Icon: BookOpen, tags: ["resources", "guides", "toolkits", "materials", "downloads"] },
  { id: "partners", title: "Partners", excerpt: "Our network of local and global partners committed to health transformation.", path: "/partners", category: "Pages", Icon: Users, tags: ["partners", "collaborators", "sponsors", "network"] },
  { id: "contact", title: "Contact Us", excerpt: "Get in touch with the Health Tech Liberia team.", path: "/contact", category: "Pages", Icon: FileText, tags: ["contact", "email", "phone", "reach out"] },
  { id: "get-involved", title: "Get Involved", excerpt: "Volunteer, partner, or collaborate with us to expand our impact.", path: "/get-involved", category: "Pages", Icon: Heart, tags: ["volunteer", "get involved", "partner", "join"] },
  { id: "donate", title: "Donate", excerpt: "Support our mission by making a donation to Health Tech Liberia.", path: "/donate", category: "Pages", Icon: Heart, tags: ["donate", "support", "fund", "give", "contribution"] },
  { id: "certificates", title: "Certificate Portal", excerpt: "Verify or download program completion certificates.", path: "/certificates", category: "Pages", Icon: Award, tags: ["certificate", "portal", "verify", "completion"] },

  // Programs
  { id: "digital-health", title: "Digital Health & Innovation", excerpt: "Leveraging technology to modernize healthcare delivery and digital health systems.", path: "/programs/digital-health", category: "Programs", Icon: Monitor, tags: ["digital health", "innovation", "technology", "ehr", "telemedicine"] },
  { id: "stem", title: "STEM Education & Research", excerpt: "Empowering the next generation with science, technology, engineering, and math skills.", path: "/programs/stem-education", category: "Programs", Icon: FlaskConical, tags: ["stem", "education", "science", "technology", "engineering", "math", "youth"] },
  { id: "gender", title: "Gender Equality", excerpt: "Advancing gender equity in health access, leadership, and outcomes.", path: "/programs/gender-equality", category: "Programs", Icon: Scale, tags: ["gender", "equality", "women", "girls", "equity"] },
  { id: "mental-health", title: "Mental Health", excerpt: "Reducing stigma and increasing access to mental health support across Liberia.", path: "/programs/mental-health", category: "Programs", Icon: Brain, tags: ["mental health", "wellbeing", "counseling", "stigma", "psychology"] },
  { id: "climate", title: "Climate & Environmental Health", excerpt: "Addressing the health impacts of climate change and environmental degradation.", path: "/programs/climate-health", category: "Programs", Icon: Leaf, tags: ["climate", "environment", "green", "sustainability", "pollution"] },
  { id: "health-financing", title: "Health Financing", excerpt: "Creating sustainable funding models for equitable healthcare access.", path: "/programs/health-financing", category: "Programs", Icon: Banknote, tags: ["financing", "funding", "insurance", "economics", "universal health"] },
  { id: "srh", title: "Sexual & Reproductive Health", excerpt: "Promoting comprehensive sexual and reproductive health education and services.", path: "/programs/sexual-reproductive-health", category: "Programs", Icon: HeartPulse, tags: ["sexual health", "reproductive", "family planning", "maternal", "srh"] },
  { id: "peace", title: "Peace & Community Engagement", excerpt: "Building community resilience and peaceful coexistence through health engagement.", path: "/programs/peace-community", category: "Programs", Icon: Users, tags: ["peace", "community", "engagement", "resilience", "social cohesion"] },
  { id: "advocacy", title: "Advocacy", excerpt: "Championing health policy reform and amplifying community voices.", path: "/programs/advocacy", category: "Programs", Icon: Megaphone, tags: ["advocacy", "policy", "reform", "rights", "awareness"] },

  // Projects
  { id: "green-health", title: "Green Health Mentorship Program", excerpt: "Empowered 300+ adolescent girls in Zorzor and Monrovia with reproductive health, leadership, and green entrepreneurship.", path: "/projects", category: "Projects", Icon: FolderOpen, tags: ["mentorship", "girls", "adolescent", "zorzor", "green", "reproductive", "300"] },
  { id: "digital-literacy", title: "Digital Health Literacy", excerpt: "Trained 150 frontline healthcare workers in digital patient records across rural clinics.", path: "/projects", category: "Projects", Icon: FolderOpen, tags: ["digital literacy", "healthcare workers", "training", "rural", "records", "150"] },
  { id: "mental-youth", title: "Mental Health Seminar for Youth", excerpt: "Engaged 175 young people in peer support training and school-based mental health campaigns.", path: "/projects", category: "Projects", Icon: FolderOpen, tags: ["mental health", "youth", "seminar", "peer support", "school", "175"] },
  { id: "malaria", title: "Kick Malaria Out Campaign", excerpt: "Raised funds to provide mosquito nets and supplies to 45 pregnant women in Mount Barclay.", path: "/projects", category: "Projects", Icon: FolderOpen, tags: ["malaria", "mosquito nets", "pregnant women", "fundraiser", "mount barclay"] },
  { id: "podcast", title: "Health Tech Unleash Podcast", excerpt: "Flagship media initiative reaching 20,000+ listeners exploring digital health and African innovation.", path: "/projects", category: "Projects", Icon: FolderOpen, tags: ["podcast", "media", "20000", "listeners", "digital health", "radio"] },
];

// ─── Fuzzy score ────────────────────────────────────────────────────────────────
function score(item: typeof SEARCH_INDEX[0], query: string): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  const titleL = item.title.toLowerCase();
  const excerptL = item.excerpt.toLowerCase();
  const tagsStr = item.tags.join(" ");

  if (titleL === q) return 100;
  if (titleL.startsWith(q)) return 90;
  if (titleL.includes(q)) return 80;
  if (tagsStr.includes(q)) return 70;
  if (excerptL.includes(q)) return 60;

  // partial word match
  const words = q.split(/\s+/);
  const matched = words.filter(w => titleL.includes(w) || tagsStr.includes(w) || excerptL.includes(w));
  if (matched.length === words.length) return 55;
  if (matched.length > 0) return 30 + (matched.length / words.length) * 20;

  return 0;
}

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-[#C9972D]/20 text-[#9A6B0A] rounded px-0.5 not-italic font-semibold">{part}</mark> : part
  );
}

const CATEGORY_ORDER = ["Programs", "Projects", "Pages"];

const QUICK_LINKS = [
  { label: "About Us", path: "/about", Icon: FileText },
  { label: "Donate", path: "/donate", Icon: Heart },
  { label: "Get Involved", path: "/get-involved", Icon: Users },
  { label: "Events", path: "/events", Icon: Calendar },
];

// ─── Component ─────────────────────────────────────────────────────────────────
interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setQuery("");
      setActiveCategory(null);
    }
  }, [open]);

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (!open) onClose(); // trigger open via parent
      }
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const results = query.trim()
    ? SEARCH_INDEX
        .map(item => ({ item, s: score(item, query) }))
        .filter(({ s }) => s > 0)
        .sort((a, b) => b.s - a.s)
        .map(({ item }) => item)
    : [];

  const filtered = activeCategory ? results.filter(r => r.category === activeCategory) : results;

  const grouped = CATEGORY_ORDER.reduce<Record<string, typeof SEARCH_INDEX>>((acc, cat) => {
    const items = filtered.filter(r => r.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  const hasResults = filtered.length > 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[5vh] left-1/2 -translate-x-1/2 z-[201] w-full max-w-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[82vh]">

              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A2D7A] to-[#0A3FAF] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4.5 h-4.5 text-white" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search programs, projects, pages…"
                  className="flex-1 text-[1rem] font-medium text-gray-900 placeholder:text-gray-400 bg-transparent outline-none"
                  autoComplete="off"
                  spellCheck={false}
                />
                <div className="flex items-center gap-2">
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <kbd className="hidden sm:flex items-center gap-1 bg-gray-100 text-gray-400 text-[0.65rem] font-mono px-2 py-1 rounded-lg">
                    <span className="text-[0.75rem]">⌘</span>K
                  </kbd>
                  <button
                    onClick={onClose}
                    className="sm:hidden w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors rounded-lg hover:bg-gray-100"
                    aria-label="Close search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Category filter pills (only when results exist) */}
              {query && hasResults && (
                <div className="flex items-center gap-2 px-5 py-2.5 border-b border-gray-50 overflow-x-auto scrollbar-none">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      activeCategory === null
                        ? "bg-[#0A2D7A] text-white shadow-sm"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    All ({results.length})
                  </button>
                  {CATEGORY_ORDER.filter(c => results.some(r => r.category === c)).map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                      className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                        activeCategory === cat
                          ? "bg-[#0A2D7A] text-white shadow-sm"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {cat} ({results.filter(r => r.category === cat).length})
                    </button>
                  ))}
                </div>
              )}

              {/* Scrollable results */}
              <div className="flex-1 overflow-y-auto overscroll-contain">

                {/* Empty state — no query */}
                {!query && (
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Quick Links</p>
                    <div className="grid grid-cols-2 gap-2">
                      {QUICK_LINKS.map(({ label, path, Icon }) => (
                        <Link
                          key={path}
                          href={path}
                          onClick={onClose}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 border border-gray-100 transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0A3FAF] group-hover:bg-[#0A2D7A] group-hover:text-white transition-colors shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0A2D7A]">{label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-300 ml-auto group-hover:text-[#0A2D7A] group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-5">
                      Start typing to search all programs, projects, and pages
                    </p>
                  </div>
                )}

                {/* No results */}
                {query && !hasResults && (
                  <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                      <Search className="w-7 h-7 text-gray-300" />
                    </div>
                    <p className="text-gray-700 font-bold text-lg mb-1">No results for "{query}"</p>
                    <p className="text-gray-400 text-sm">Try searching for "digital health", "malaria", "mentorship", or a page name.</p>
                  </div>
                )}

                {/* Results grouped by category */}
                {query && hasResults && (
                  <div className="p-3 flex flex-col gap-4">
                    {Object.entries(grouped).map(([cat, items]) => (
                      <div key={cat}>
                        <p className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-gray-400 px-2 mb-1.5">{cat}</p>
                        <div className="flex flex-col gap-0.5">
                          {items.map(item => (
                            <Link
                              key={item.id}
                              href={item.path}
                              onClick={onClose}
                              className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-all group"
                            >
                              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-[#0A3FAF] group-hover:bg-[#0A2D7A] group-hover:text-white transition-colors shrink-0 mt-0.5">
                                <item.Icon className="w-4.5 h-4.5" strokeWidth={1.75} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-900 group-hover:text-[#0A2D7A] leading-tight mb-0.5">
                                  {highlight(item.title, query)}
                                </p>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-1">
                                  {highlight(item.excerpt, query)}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-300 shrink-0 mt-1 group-hover:text-[#0A2D7A] group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer bar */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50/60">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-[0.7rem] text-gray-400">
                    <kbd className="bg-white border border-gray-200 rounded px-1.5 py-0.5 text-[0.65rem] font-mono shadow-sm">↵</kbd>
                    to select
                  </span>
                  <span className="flex items-center gap-1.5 text-[0.7rem] text-gray-400">
                    <kbd className="bg-white border border-gray-200 rounded px-1.5 py-0.5 text-[0.65rem] font-mono shadow-sm">Esc</kbd>
                    to close
                  </span>
                </div>
                <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">
                  {filtered.length > 0 ? `${filtered.length} result${filtered.length > 1 ? "s" : ""}` : "AI Search"}
                </span>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
