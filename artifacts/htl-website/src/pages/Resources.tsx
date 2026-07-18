import { Download, FileText, ExternalLink } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import hero3 from "../assets/hero_3.jpg";

// Placeholder download URLs — update each href with the real Google Drive / Dropbox / S3 link when ready
const RESOURCE_CATEGORIES = [
  {
    title: "Training Manuals",
    desc: "Comprehensive guides used in our digital health and STEM education programs.",
    items: [
      {
        name: "Digital Health Basics for Frontline Workers",
        type: "PDF · 2.4 MB",
        // TODO: replace with real hosted file URL
        href: "https://drive.google.com/file/d/PLACEHOLDER_DIGITAL_HEALTH_BASICS/view",
      },
      {
        name: "HerSTEM Mentorship Curriculum",
        type: "PDF · 1.8 MB",
        href: "https://drive.google.com/file/d/PLACEHOLDER_HERSTEM_CURRICULUM/view",
      },
      {
        name: "Mental Health Peer Support Guide",
        type: "PDF · 1.2 MB",
        href: "https://drive.google.com/file/d/PLACEHOLDER_MENTAL_HEALTH_GUIDE/view",
      },
    ],
  },
  {
    title: "Policy Briefs",
    desc: "Advocacy documents aimed at influencing national health policies.",
    items: [
      {
        name: "Integrating Digital Records in Rural Clinics",
        type: "PDF · 0.8 MB",
        href: "https://drive.google.com/file/d/PLACEHOLDER_DIGITAL_RECORDS_BRIEF/view",
      },
      {
        name: "Gender-Responsive Health Financing",
        type: "PDF · 1.1 MB",
        href: "https://drive.google.com/file/d/PLACEHOLDER_GENDER_FINANCING_BRIEF/view",
      },
      {
        name: "Climate Change Impacts on Public Health in Liberia",
        type: "PDF · 1.4 MB",
        href: "https://drive.google.com/file/d/PLACEHOLDER_CLIMATE_HEALTH_BRIEF/view",
      },
    ],
  },
  {
    title: "Community Toolkits",
    desc: "Resources designed for community leaders and volunteers.",
    items: [
      {
        name: "Community Dialogue Facilitator Guide",
        type: "PDF · 2.0 MB",
        href: "https://drive.google.com/file/d/PLACEHOLDER_DIALOGUE_GUIDE/view",
      },
      {
        name: "Green Entrepreneurship Starter Kit",
        type: "PDF · 1.6 MB",
        href: "https://drive.google.com/file/d/PLACEHOLDER_GREEN_ENTREPRENEUR/view",
      },
      {
        name: "Adolescent Sexual Health FAQ",
        type: "PDF · 0.9 MB",
        href: "https://drive.google.com/file/d/PLACEHOLDER_SEXUAL_HEALTH_FAQ/view",
      },
    ],
  },
];

const RESOURCES_SLIDES: HeroSlide[] = [
  {
    image: hero3,
    eyebrow: "Knowledge Hub",
    heading: "Resources & Toolkits",
    subtext: "Access our collection of training materials, toolkits, and policy documents.",
  },
];

export default function Resources() {
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
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe knowledge should be shared. All materials developed by Health Tech Liberia are freely
              available for download and use by partners, educators, and community members.
            </p>
          </div>

          <div className="space-y-10">
            {RESOURCE_CATEGORIES.map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col lg:flex-row"
              >
                {/* Category header panel */}
                <div className="lg:w-72 shrink-0 bg-[#080C14] p-10 text-white relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-0 left-4 text-[140px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none opacity-40 pointer-events-none">"</div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#0A3FAF]/30 border border-[#0A3FAF]/40 flex items-center justify-center mb-5">
                      <FileText className="w-5 h-5 text-blue-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{cat.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
                  </div>
                </div>

                {/* Items grid */}
                <div className="flex-grow p-8 md:p-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {cat.items.map((item, j) => (
                      <div
                        key={j}
                        className="group border border-gray-200 rounded-2xl p-5 hover:border-[#0A3FAF]/40 hover:shadow-md transition-all bg-white flex flex-col gap-4"
                      >
                        {/* Icon + title */}
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl border border-gray-100 bg-[#F4F7FF] flex items-center justify-center shrink-0 group-hover:bg-[#0A3FAF] group-hover:border-[#0A3FAF] transition-colors">
                            <FileText
                              className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                              strokeWidth={1.5}
                            />
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-[#0A2D7A] transition-colors mt-0.5 flex-grow">
                            {item.name}
                          </h4>
                        </div>

                        {/* Type tag + download CTA */}
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                          <span className="text-gray-400 text-[11px] font-medium">{item.type}</span>
                          <div className="flex items-center gap-2">
                            {/* Open in browser */}
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Open"
                              className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0A3FAF] hover:border-[#0A3FAF]/40 transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                            {/* Download */}
                            <a
                              href={item.href}
                              download
                              title="Download"
                              className="flex items-center gap-1.5 bg-[#0A3FAF] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-[#0A2D7A] transition-colors"
                            >
                              <Download className="w-3.5 h-3.5" /> Download
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-gray-400 text-sm mt-12 leading-relaxed">
            Can't find what you need?{" "}
            <a href="/contact" className="text-[#0A3FAF] font-semibold hover:underline">
              Contact us
            </a>{" "}
            and we'll be happy to help.
          </p>
        </div>
      </section>
    </div>
  );
}
