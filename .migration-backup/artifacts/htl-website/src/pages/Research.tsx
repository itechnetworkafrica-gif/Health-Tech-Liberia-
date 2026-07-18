import { motion } from "framer-motion";
import { Download, FileText, Search, ExternalLink, Calendar, BookOpen } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import hero1 from "../assets/hero_1.jpg";

const RESEARCH_SLIDES: HeroSlide[] = [
  {
    image: hero1,
    eyebrow: "Data-Driven Impact",
    heading: "Research & Publications",
    subtext: "Advancing health equity through evidence-based research and data collection in West Africa.",
  },
];

// Placeholder download URLs — update each href with the real hosted file link when ready
const PUBLICATIONS = [
  {
    title: "Digital Health Readiness in Rural Liberia",
    year: "2024",
    type: "Research Report",
    authors: "Bility, M. · Kpoto, W.",
    abstract:
      "An assessment of digital infrastructure gaps, frontline worker capacity, and patient readiness across 12 rural counties in Liberia.",
    pages: "42 pages",
    // TODO: replace with real Google Drive / institutional repository URL
    href: "https://drive.google.com/file/d/PLACEHOLDER_DIGITAL_HEALTH_READINESS/view",
  },
  {
    title: "Assessing the Impact of Green Health Mentorship on Adolescent Girls",
    year: "2023",
    type: "Impact Assessment",
    authors: "Konneh, B. · Bility, M.",
    abstract:
      "A mixed-methods evaluation of the Green Health Mentorship program outcomes across Zorzor and Monrovia, covering 300+ participants.",
    pages: "28 pages",
    href: "https://drive.google.com/file/d/PLACEHOLDER_GREEN_HEALTH_IMPACT/view",
  },
  {
    title: "Mental Health Stigma Among Urban Youth",
    year: "2023",
    type: "Policy Brief",
    authors: "HTL Research Team",
    abstract:
      "Evidence-based policy recommendations to reduce mental health stigma and expand youth-friendly counselling services in urban Liberia.",
    pages: "18 pages",
    href: "https://drive.google.com/file/d/PLACEHOLDER_MENTAL_HEALTH_STIGMA/view",
  },
];

const typeColors: Record<string, string> = {
  "Research Report":  "bg-blue-50 text-blue-700 border-blue-200",
  "Impact Assessment": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Policy Brief":      "bg-amber-50 text-amber-700 border-amber-200",
};

export default function Research() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider slides={RESEARCH_SLIDES} height="50dvh" />

      {/* Research approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                METHODOLOGY
              </span>
              <h2 className="text-4xl font-heading font-black text-gray-900 mb-6">Our Research Approach</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At Health Tech Liberia, we believe that effective health interventions must be rooted in solid
                evidence. We conduct primary research, needs assessments, and program evaluations to ensure our
                work is impactful and sustainable.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                By publishing our findings openly, we aim to contribute to the broader discourse on digital health
                and health equity in developing nations, influencing policy and guiding future investments.
              </p>
            </div>
            <div className="bg-[#F4F7FF] p-12 rounded-[2rem] border border-blue-100">
              <Search className="w-14 h-14 text-[#0A3FAF] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-heading font-bold mb-5 text-gray-900">Research Focus Areas</h3>
              <ul className="space-y-4">
                {[
                  "Digital Health Infrastructure",
                  "Gender Disparities in Healthcare Access",
                  "Climate Change and Public Health",
                  "Youth Mental Health & Wellbeing",
                  "Health Financing in Low-Resource Settings",
                ].map((area) => (
                  <li key={area} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-[#0A3FAF] rounded-full shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Publications */}
          <div className="mb-12">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              LATEST INSIGHTS
            </span>
            <h2 className="text-3xl font-heading font-black text-gray-900">Recent Publications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {PUBLICATIONS.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#0A3FAF]/30 hover:shadow-xl transition-all group flex flex-col h-full"
              >
                {/* Top stripe */}
                <div className="h-1 w-full bg-gradient-to-r from-[#0A3FAF] to-[#7C3AED]" />

                <div className="p-7 flex flex-col gap-4 flex-grow">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 bg-[#F4F7FF] text-[#0A3FAF] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#0A3FAF] group-hover:text-white transition-colors">
                      <FileText className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shrink-0 ${typeColors[pub.type] ?? "bg-gray-50 text-gray-600 border-gray-200"}`}>
                      {pub.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-gray-400 text-xs font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {pub.year}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {pub.pages}</span>
                  </div>

                  {/* Title & abstract */}
                  <h3 className="text-lg font-heading font-bold text-gray-900 leading-snug group-hover:text-[#0A2D7A] transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{pub.abstract}</p>

                  {/* Authors */}
                  <p className="text-xs text-gray-400 font-medium border-t border-gray-100 pt-3">
                    <span className="text-gray-500 font-semibold">Authors:</span> {pub.authors}
                  </p>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-1">
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#F4F7FF] text-[#0A2D7A] font-bold rounded-xl hover:bg-[#0A3FAF] hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" /> View
                    </a>
                    <a
                      href={pub.href}
                      download
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0A2D7A] text-white font-bold rounded-xl hover:bg-[#0A3FAF] transition-colors text-sm"
                    >
                      <Download className="w-4 h-4" /> Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Collaborate CTA */}
          <div className="mt-20 bg-[#080C14] rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #0A3FAF, transparent 60%), radial-gradient(circle at 80% 30%, #7C3AED, transparent 50%)" }} />
            <div className="relative z-10 max-w-xl mx-auto">
              <h3 className="text-3xl font-heading font-bold mb-4">Collaborate with Us</h3>
              <p className="text-blue-200 leading-relaxed mb-8">
                Are you a researcher, academic institution, or health professional interested in partnering on evidence-based health research in Liberia? We'd love to hear from you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C9972D] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0A2D7A] transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
