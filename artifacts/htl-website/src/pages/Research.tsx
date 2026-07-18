import { motion } from "framer-motion";
import { Download, FileText, Search } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import hero1 from "../assets/hero_1.jpg";

const RESEARCH_SLIDES: HeroSlide[] = [
  {
    image: hero1,
    eyebrow: "Data-Driven Impact",
    heading: "Research & Publications",
    subtext: "Advancing health equity through evidence-based research and data collection in West Africa.",
  }
];

const PUBLICATIONS = [
  { title: "Digital Health Readiness in Rural Liberia", year: "2024", type: "Research Report" },
  { title: "Assessing the Impact of Green Health Mentorship on Adolescent Girls", year: "2023", type: "Impact Assessment" },
  { title: "Mental Health Stigma Among Urban Youth", year: "2023", type: "Policy Brief" },
];

export default function Research() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider slides={RESEARCH_SLIDES} height="50dvh" />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-heading font-black text-gray-900 mb-6">Our Research Approach</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At Health Tech Liberia, we believe that effective health interventions must be rooted in solid evidence. We conduct primary research, needs assessments, and program evaluations to ensure our work is impactful and sustainable.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                By publishing our findings, we aim to contribute to the broader discourse on digital health and health equity in developing nations, influencing policy and guiding future investments.
              </p>
            </div>
            <div className="bg-accent p-12 rounded-[2rem] border border-blue-100">
              <Search className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Research Focus Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg text-gray-700 font-medium"><div className="w-2 h-2 bg-primary rounded-full"></div> Digital Health Infrastructure</li>
                <li className="flex items-center gap-3 text-lg text-gray-700 font-medium"><div className="w-2 h-2 bg-primary rounded-full"></div> Gender Disparities in Healthcare Access</li>
                <li className="flex items-center gap-3 text-lg text-gray-700 font-medium"><div className="w-2 h-2 bg-primary rounded-full"></div> Climate Change and Public Health</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-black text-gray-900 mb-10">Recent Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PUBLICATIONS.map((pub, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-primary/30 hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-accent text-primary rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold bg-slate-100 text-gray-600 px-3 py-1 rounded-full">{pub.year}</span>
                </div>
                <div className="text-primary font-bold text-xs uppercase tracking-widest mb-3">{pub.type}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex-grow">{pub.title}</h3>
                <button className="flex items-center justify-center w-full py-4 bg-slate-50 text-gray-900 font-bold rounded-xl group-hover:bg-primary group-hover:text-white transition-colors gap-2">
                  <Download className="w-5 h-5" /> Download PDF
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}