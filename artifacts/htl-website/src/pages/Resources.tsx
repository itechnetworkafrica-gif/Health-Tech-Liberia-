import { Download, FileText, ExternalLink } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import hero3 from "../assets/hero_3.jpg";

const RESOURCES_SLIDES: HeroSlide[] = [
  {
    image: hero3,
    eyebrow: "Knowledge Hub",
    heading: "Resources & Toolkits",
    subtext: "Access our collection of training materials, toolkits, and policy documents.",
  }
];

export default function Resources() {
  const categories = [
    {
      title: "Training Manuals",
      desc: "Comprehensive guides used in our digital health and STEM education programs.",
      items: ["Digital Health Basics for Frontline Workers", "HerSTEM Mentorship Curriculum", "Mental Health Peer Support Guide"]
    },
    {
      title: "Policy Briefs",
      desc: "Advocacy documents aimed at influencing national health policies.",
      items: ["Integrating Digital Records in Rural Clinics", "Gender-Responsive Health Financing", "Climate Change Impacts on Public Health in Liberia"]
    },
    {
      title: "Community Toolkits",
      desc: "Resources designed for community leaders and volunteers.",
      items: ["Community Dialogue Facilitator Guide", "Green Entrepreneurship Starter Kit", "Adolescent Sexual Health FAQ"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSlider slides={RESOURCES_SLIDES} height="50dvh" />

      <section className="py-24 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-100">
              OPEN ACCESS
            </span>
            <h2 className="text-4xl font-heading font-black text-[#0A2D7A] mb-6">Tools & Materials</h2>
            <p className="text-xl text-gray-600">We believe knowledge should be shared. All materials developed by Health Tech Liberia are freely available for download and use by partners, educators, and community members.</p>
          </div>

          <div className="space-y-12">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-[#080C14] p-10 text-white relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-0 left-4 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none opacity-50">"</div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
                <div className="lg:w-2/3 p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cat.items.map((item, j) => (
                      <div key={j} className="border border-gray-200 rounded-2xl p-6 hover:border-[#0A3FAF]/30 transition-colors group cursor-pointer flex flex-col justify-between h-full bg-white shadow-sm hover:shadow-md">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center bg-gray-50 shrink-0">
                            <FileText className="w-6 h-6 text-gray-400 group-hover:text-[#0A3FAF] transition-colors" strokeWidth={1.5} />
                          </div>
                          <h4 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-[#0A3FAF] transition-colors mt-1">{item}</h4>
                        </div>
                        <button className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#0A3FAF] transition-colors mt-auto pt-4 border-t border-gray-100">
                          PDF Document <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
