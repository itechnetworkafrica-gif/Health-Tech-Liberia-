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
    <div className="min-h-screen bg-slate-50">
      <HeroSlider slides={RESOURCES_SLIDES} height="50dvh" />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-heading font-black text-gray-900 mb-6">Open Access Resources</h2>
            <p className="text-xl text-gray-600">We believe knowledge should be shared. All materials developed by Health Tech Liberia are freely available for download and use by partners, educators, and community members.</p>
          </div>

          <div className="space-y-12">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-[#0A2D7A] p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                  <p className="text-blue-100">{cat.desc}</p>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.items.map((item, j) => (
                      <div key={j} className="border-2 border-gray-100 rounded-xl p-6 hover:border-primary transition-colors group cursor-pointer flex flex-col justify-between">
                        <div className="flex items-start gap-4 mb-6">
                          <FileText className="w-8 h-8 text-primary shrink-0" />
                          <h4 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">{item}</h4>
                        </div>
                        <button className="flex items-center justify-between w-full text-sm font-bold text-gray-500 group-hover:text-primary transition-colors">
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