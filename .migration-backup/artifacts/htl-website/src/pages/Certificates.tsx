import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Award, Download, CheckCircle2, XCircle,
  Calendar, User, BookOpen, Shield, RefreshCw,
  FileText, ExternalLink, ChevronRight,
} from "lucide-react";

// ── Mock certificate data ─────────────────────────────────────────────────────
interface Certificate {
  id: string;
  participantName: string;
  program: string;
  course: string;
  issueDate: string;
  expiryDate: string | null;
  status: "valid" | "expired";
  grade: string;
  duration: string;
  facilitator: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "HTL-2024-001",
    participantName: "Fatima Kollie",
    program: "Digital Health & Innovation",
    course: "Foundations of Digital Health Systems",
    issueDate: "March 15, 2024",
    expiryDate: null,
    status: "valid",
    grade: "Distinction",
    duration: "40 hours",
    facilitator: "Makessa Bility",
  },
  {
    id: "HTL-2024-002",
    participantName: "Emmanuel Toe",
    program: "STEM Education & Research",
    course: "Health Data Analysis with Python",
    issueDate: "April 22, 2024",
    expiryDate: null,
    status: "valid",
    grade: "Merit",
    duration: "60 hours",
    facilitator: "Wilmot Kpoto",
  },
  {
    id: "HTL-2024-003",
    participantName: "Martha Sumo",
    program: "Mental Health",
    course: "Community Mental Health First Aid",
    issueDate: "June 10, 2024",
    expiryDate: null,
    status: "valid",
    grade: "Pass",
    duration: "20 hours",
    facilitator: "Boakai Konneh",
  },
  {
    id: "HTL-2024-004",
    participantName: "David Tarr",
    program: "Gender Equality",
    course: "Gender-Responsive Health Programming",
    issueDate: "July 5, 2024",
    expiryDate: null,
    status: "valid",
    grade: "Distinction",
    duration: "30 hours",
    facilitator: "Makessa Bility",
  },
  {
    id: "HTL-2024-005",
    participantName: "Agnes Nimely",
    program: "Climate & Environmental Health",
    course: "Climate Change and Public Health",
    issueDate: "August 18, 2024",
    expiryDate: null,
    status: "valid",
    grade: "Merit",
    duration: "25 hours",
    facilitator: "Wilmot Kpoto",
  },
  {
    id: "HTL-2023-001",
    participantName: "James Kpargoi",
    program: "Advocacy",
    course: "Health Policy Advocacy Fundamentals",
    issueDate: "November 12, 2023",
    expiryDate: "November 12, 2025",
    status: "valid",
    grade: "Pass",
    duration: "35 hours",
    facilitator: "Boakai Konneh",
  },
  {
    id: "HTL-2023-002",
    participantName: "Korpu Sayeh",
    program: "Health Financing",
    course: "Community Health Financing Strategies",
    issueDate: "September 3, 2023",
    expiryDate: "September 3, 2024",
    status: "expired",
    grade: "Merit",
    duration: "45 hours",
    facilitator: "Makessa Bility",
  },
];

const gradeColors: Record<string, string> = {
  Distinction: "bg-amber-50 text-amber-700 border-amber-200",
  Merit:       "bg-blue-50 text-blue-700 border-blue-200",
  Pass:        "bg-emerald-50 text-emerald-700 border-emerald-200",
};

// ── Print-friendly certificate ────────────────────────────────────────────────
function CertificatePrintView({ cert }: { cert: Certificate }) {
  return (
    <div className="hidden print:block fixed inset-0 bg-white z-[9999] p-16 flex flex-col items-center justify-center">
      <div className="border-[8px] border-double border-[#0A2D7A] w-full max-w-3xl mx-auto p-12 text-center">
        <p className="text-[#0A2D7A] text-sm font-semibold uppercase tracking-widest mb-4">Health Tech Liberia</p>
        <h1 className="text-4xl font-heading font-bold text-[#0A2D7A] mb-2">Certificate of Completion</h1>
        <div className="h-0.5 w-24 bg-[#C9972D] mx-auto my-6" />
        <p className="text-gray-500 text-base mb-4">This certifies that</p>
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">{cert.participantName}</h2>
        <p className="text-gray-500 text-base mb-2">has successfully completed</p>
        <h3 className="text-xl font-heading font-semibold text-[#0A3FAF] mb-1">{cert.course}</h3>
        <p className="text-gray-400 text-sm mb-8">{cert.program} · {cert.duration}</p>
        <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
          <div className="text-left">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Issued by</p>
            <p className="font-bold text-gray-800">{cert.facilitator}</p>
            <p className="text-xs text-gray-500">Health Tech Liberia</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Certificate ID</p>
            <p className="font-mono font-bold text-gray-800">{cert.id}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Issue Date</p>
            <p className="font-bold text-gray-800">{cert.issueDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function Certificates() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [results, setResults] = useState<Certificate[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    const found = CERTIFICATES.filter(
      (c) =>
        c.id.toLowerCase().includes(q) ||
        c.participantName.toLowerCase().includes(q)
    );
    setResults(found);
    setSearched(true);
    setSelected(null);
  };

  const handleReset = () => {
    setQuery("");
    setSearched(false);
    setResults([]);
    setSelected(null);
  };

  const handleDownload = (cert: Certificate) => {
    // Trigger browser print dialog which prints only the certificate view
    window.print();
    void cert; // suppress unused warning
  };

  return (
    <div>
      {selected && <CertificatePrintView cert={selected} />}

      {/* ── HERO ── */}
      <section className="bg-[#080C14] text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-8 text-[220px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF]/30 to-transparent bg-clip-text text-transparent select-none pointer-events-none">"</div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #0A3FAF, transparent 60%), radial-gradient(circle at 20% 80%, #7C3AED, transparent 50%)" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <span className="inline-block bg-white/10 text-white/60 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            PARTICIPANT PORTAL
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-5 leading-[1.1]">
            Certificate Verification
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            Search, verify, and download your official Health Tech Liberia training certificates.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-[#F4F7FF] border-b border-blue-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Search, step: "01", title: "Search", desc: "Enter your full name or certificate ID number." },
              { icon: Shield, step: "02", title: "Verify", desc: "We confirm authenticity against our official records." },
              { icon: Download, step: "03", title: "Download", desc: "Print or save your verified certificate as a PDF." },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A3FAF] flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[#C9972D] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{step}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEARCH ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-50 text-[#0A3FAF] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              CERTIFICATE LOOKUP
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0A2D7A] mb-3">
              Find Your Certificate
            </h2>
            <p className="text-gray-500">
              Enter your full name exactly as it appears on your certificate, or paste your certificate ID (e.g. <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-sm">HTL-2024-001</span>).
            </p>
          </div>

          <form onSubmit={handleSearch} className="relative">
            <div className="flex gap-3 shadow-lg rounded-2xl border border-gray-200 bg-white p-2 focus-within:border-[#0A3FAF] transition-colors">
              <div className="flex items-center pl-3 text-gray-400 shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Your name or Certificate ID…"
                className="flex-grow py-3 px-2 text-gray-900 placeholder:text-gray-400 focus:outline-none text-base bg-transparent"
              />
              {query && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              )}
              <button
                type="submit"
                className="bg-[#0A3FAF] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#0A2D7A] transition-all shrink-0"
              >
                Search <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* ── RESULTS ── */}
          <AnimatePresence mode="wait">
            {searched && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8"
              >
                {results.length === 0 ? (
                  <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl bg-gray-50">
                    <XCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="font-heading font-bold text-gray-700 text-xl mb-2">No Certificate Found</h3>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
                      We couldn't find a matching certificate. Check the spelling of your name or your certificate ID and try again.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-6 text-[#0A3FAF] font-semibold flex items-center gap-2 mx-auto hover:underline"
                    >
                      <RefreshCw className="w-4 h-4" /> Try Again
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500 font-medium">
                      {results.length} certificate{results.length > 1 ? "s" : ""} found
                    </p>
                    {results.map((cert) => (
                      <motion.button
                        key={cert.id}
                        onClick={() => setSelected(cert === selected ? null : cert)}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`w-full text-left border rounded-2xl p-5 transition-all hover:shadow-md ${
                          selected?.id === cert.id
                            ? "border-[#0A3FAF] bg-blue-50/50 shadow-md"
                            : "border-gray-200 bg-white hover:border-blue-200"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex gap-4 items-start">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                              cert.status === "valid" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-400"
                            }`}>
                              {cert.status === "valid"
                                ? <CheckCircle2 className="w-6 h-6" />
                                : <XCircle className="w-6 h-6" />
                              }
                            </div>
                            <div>
                              <p className="font-heading font-bold text-gray-900 text-lg leading-tight">{cert.participantName}</p>
                              <p className="text-[#0A3FAF] text-sm font-semibold mt-0.5">{cert.course}</p>
                              <p className="text-gray-400 text-xs mt-1 font-mono">{cert.id}</p>
                            </div>
                          </div>
                          <div className="shrink-0 text-right">
                            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                              cert.status === "valid"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : "bg-red-50 text-red-500 border-red-200"
                            }`}>
                              {cert.status === "valid" ? "VERIFIED" : "EXPIRED"}
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CERTIFICATE DETAIL ── */}
      <AnimatePresence>
        {selected && (
          <motion.section
            key={selected.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-16 bg-[#F4F7FF] border-t border-blue-100"
          >
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
              {/* Verified Badge */}
              <div className={`flex items-center gap-3 mb-8 p-4 rounded-2xl border ${
                selected.status === "valid"
                  ? "bg-emerald-50 border-emerald-200"
                  : "bg-red-50 border-red-200"
              }`}>
                {selected.status === "valid"
                  ? <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                  : <XCircle className="w-7 h-7 text-red-500 shrink-0" />
                }
                <div>
                  <p className={`font-bold text-lg ${selected.status === "valid" ? "text-emerald-800" : "text-red-700"}`}>
                    {selected.status === "valid" ? "Certificate Verified" : "Certificate Expired"}
                  </p>
                  <p className={`text-sm ${selected.status === "valid" ? "text-emerald-600" : "text-red-500"}`}>
                    {selected.status === "valid"
                      ? "This certificate is authentic and was issued by Health Tech Liberia."
                      : "This certificate has passed its validity date. Please contact us for renewal."}
                  </p>
                </div>
              </div>

              {/* Certificate Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                {/* Header stripe */}
                <div className="bg-gradient-to-r from-[#0A2D7A] to-[#0A3FAF] p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #7C3AED, transparent 60%)" }} />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-blue-200 text-xs uppercase tracking-widest font-semibold mb-2">Certificate of Completion</p>
                      <h2 className="text-white font-heading font-bold text-2xl md:text-3xl leading-tight mb-1">
                        {selected.participantName}
                      </h2>
                      <p className="text-blue-200 text-sm">{selected.course}</p>
                    </div>
                    <div className="shrink-0 bg-white/10 border border-white/20 rounded-2xl p-4 flex flex-col items-center gap-1 backdrop-blur-sm">
                      <Award className="w-10 h-10 text-[#C9972D]" />
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${gradeColors[selected.grade]} border`}>
                        {selected.grade}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Detail Grid */}
                <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: FileText, label: "Certificate ID", value: selected.id, mono: true },
                    { icon: BookOpen, label: "Program Area", value: selected.program },
                    { icon: Calendar, label: "Issue Date", value: selected.issueDate },
                    { icon: Calendar, label: "Valid Until", value: selected.expiryDate ?? "No Expiry" },
                    { icon: User, label: "Facilitator", value: selected.facilitator },
                    { icon: BookOpen, label: "Training Duration", value: selected.duration },
                  ].map(({ icon: Icon, label, value, mono }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-[#0A3FAF]">
                        <Icon className="w-4 h-4" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-0.5">{label}</p>
                        <p className={`text-gray-900 font-semibold ${mono ? "font-mono" : ""}`}>{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="px-8 pb-8 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleDownload(selected)}
                    className="flex-1 bg-[#0A3FAF] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0A2D7A] transition-all shadow-lg"
                  >
                    <Download className="w-5 h-5" /> Download Certificate
                  </button>
                  <a
                    href={`mailto:healthtechliberia@gmail.com?subject=Certificate%20Inquiry%20-%20${selected.id}`}
                    className="flex-1 border border-gray-200 text-gray-700 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-[#0A3FAF] hover:text-[#0A3FAF] transition-all"
                  >
                    <ExternalLink className="w-5 h-5" /> Contact for Support
                  </a>
                </div>
              </div>

              <p className="text-center text-gray-400 text-xs mt-6 leading-relaxed">
                For certificate authenticity inquiries, email{" "}
                <a href="mailto:healthtechliberia@gmail.com" className="text-[#0A3FAF] hover:underline">
                  healthtechliberia@gmail.com
                </a>{" "}
                with the certificate ID.
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── CTA FOR NEW PARTICIPANTS ── */}
      <section className="py-24 bg-[#080C14] text-white relative overflow-hidden">
        <div className="absolute top-0 left-6 text-[180px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none pointer-events-none">"</div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
          <span className="inline-block bg-white/10 text-white/60 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            JOIN OUR TRAINING PROGRAMS
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
            Ready to earn your certificate?
          </h2>
          <p className="text-blue-200 text-lg mb-10 leading-relaxed">
            Enroll in one of our accredited training programs and join hundreds of health professionals advancing their skills with Health Tech Liberia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved"
              className="bg-[#0A3FAF] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg"
            >
              View Training Programs <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="border border-white/30 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
