import { useParams } from "wouter";
import { CheckCircle, Activity, Microscope, Users, Heart, Leaf, Globe, Shield, ShieldAlert, Megaphone, ArrowRight } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import { Link } from "wouter";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import hero1 from "../assets/hero_1.jpg";

const PROGRAM_DATA: Record<string, any> = {
  "digital-health": {
    title: "Digital Health & Innovation",
    icon: Activity,
    desc: "Bridging the digital divide in Liberia's healthcare system by equipping frontline workers with essential digital tools and data management skills.",
    objectives: [
      "Train healthcare workers in electronic patient record management",
      "Reduce medical errors through digital literacy",
      "Promote telemedicine and digital health solutions in rural areas"
    ],
    activities: "We conduct hands-on training workshops, provide tablets and software access to partner clinics, and host hackathons to develop local health tech solutions.",
    impact: "Trained over 150 frontline workers in 2024, deploying digital record systems in 5 rural clinics.",
  },
  "stem-education": {
    title: "STEM Education & Research",
    icon: Microscope,
    desc: "Fostering the next generation of scientific leaders by expanding access to STEM education, particularly for girls and marginalized youth.",
    objectives: [
      "Increase female participation in STEM fields",
      "Provide practical laboratory and coding experiences",
      "Support student-led health tech research projects"
    ],
    activities: "HerSTEM Research Fellowship, coding bootcamps, science fairs, and school partnerships.",
    impact: "Over 200 students enrolled in our after-school STEM programs, with a 60% female participation rate.",
  },
  "gender-equality": {
    title: "Gender Equality & Women's Empowerment",
    icon: Users,
    desc: "Dismantling systemic barriers that prevent women from achieving optimal health and leadership roles in their communities.",
    objectives: [
      "Cultivate young female leaders",
      "Address gender-based violence as a public health crisis",
      "Promote economic independence through skills training"
    ],
    activities: "Leadership mentorship programs, community dialogues, and entrepreneurship grants for young women.",
    impact: "300+ adolescent girls graduated from our mentorship cohorts.",
  },
  "mental-health": {
    title: "Mental Health & Well-being",
    icon: Heart,
    desc: "Destigmatizing mental health issues and building community-based support systems for psychological well-being.",
    objectives: [
      "Raise awareness about mental health conditions",
      "Train peer counselors in schools and communities",
      "Provide Mental Health First Aid training"
    ],
    activities: "World Mental Health Day seminars, school campaigns, and the establishment of safe-space peer support groups.",
    impact: "Reached 175 young people through intensive mental health seminars in 2024.",
  },
  "climate-health": {
    title: "Climate & Environmental Health",
    icon: Leaf,
    desc: "Addressing the urgent health impacts of climate change and promoting sustainable environmental practices.",
    objectives: [
      "Educate communities on the climate-health nexus",
      "Promote plastic recycling and waste management",
      "Support green entrepreneurship"
    ],
    activities: "Beach cleanups, climate awareness campaigns, and the Green Health Mentorship Program integrating recycling education.",
    impact: "Removed 2 tons of plastic waste from local beaches and trained 50 youth in green business models.",
  },
  "health-financing": {
    title: "Health Financing & Accessibility",
    icon: Globe,
    desc: "Advocating for sustainable healthcare funding and reducing out-of-pocket costs for vulnerable populations.",
    objectives: [
      "Promote universal health coverage policies",
      "Educate communities on health insurance options",
      "Support grassroots health funds"
    ],
    activities: "Policy advocacy briefs, community savings group formations, and dialogue with local governments.",
    impact: "Established 3 community health savings groups serving 150 families.",
  },
  "sexual-reproductive-health": {
    title: "Sexual & Reproductive Health",
    icon: Shield,
    desc: "Empowering adolescents and women with the knowledge and resources to make informed choices about their reproductive health.",
    objectives: [
      "Provide comprehensive sex education",
      "Improve access to menstrual hygiene products",
      "Reduce teenage pregnancy rates"
    ],
    activities: "School outreach programs, distribution of sanitary pads, and maternal health support like the Kick Malaria Out Campaign.",
    impact: "Provided menstrual hygiene kits to 500 girls and mosquito nets to 45 pregnant women.",
  },
  "peace-community": {
    title: "Peace & Community Engagement",
    icon: ShieldAlert,
    desc: "Recognizing that peace is a prerequisite for health, we build cohesive, resilient communities through active engagement.",
    objectives: [
      "Resolve community conflicts through dialogue",
      "Engage youth in civic responsibilities",
      "Build trust between communities and health systems"
    ],
    activities: "Town hall meetings, youth sports tournaments for peace, and community health volunteer networks.",
    impact: "Hosted 5 community dialogues reaching over 1,000 residents.",
  },
  "advocacy": {
    title: "Advocacy",
    icon: Megaphone,
    desc: "Driving systemic change by amplifying community voices and pushing for evidence-based health policies.",
    objectives: [
      "Influence national health policies",
      "Amplify marginalized voices in health discourse",
      "Publish research and policy briefs"
    ],
    activities: "The Health Tech Unleash Podcast, media campaigns, and participation in summits like Africa Climate Week.",
    impact: "Our podcast reaches an audience of 20,000+, sparking national conversations on digital health.",
  }
};

export default function ProgramDetail() {
  const { slug } = useParams();
  const data = slug ? PROGRAM_DATA[slug] : null;

  if (!data) {
    return <div className="min-h-screen pt-40 text-center text-2xl font-bold">Program not found</div>;
  }

  const Icon = data.icon;
  
  const SLIDES: HeroSlide[] = [
    {
      image: hero1,
      eyebrow: "Program Area",
      heading: data.title,
      subtext: data.desc,
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      <HeroSlider slides={SLIDES} height="60dvh" />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mb-8">Program Overview</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-16">
                {data.desc} We believe that addressing this core area is fundamental to achieving Health Tech Liberia's overarching mission of building resilient, tech-enabled health systems.
              </p>

              <h3 className="text-3xl font-heading font-black text-gray-900 mb-8">Key Objectives</h3>
              <ul className="space-y-6 mb-16">
                {data.objectives.map((obj: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-accent rounded-full p-1 mt-1">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                    </div>
                    <span className="text-xl text-gray-700 font-medium">{obj}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-3xl font-heading font-black text-gray-900 mb-8">Current Activities</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-16">
                {data.activities}
              </p>

              <div className="bg-gradient-to-br from-[#0A2D7A] to-primary rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10">
                  <Icon className="w-64 h-64 -mb-16 -mr-16" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4 relative z-10">Measurable Impact</h3>
                <p className="font-bold text-2xl relative z-10 leading-relaxed">{data.impact}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-3xl border border-gray-100 p-10 shadow-sm">
                <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-heading font-black mb-4">Support This Program</h3>
                <p className="text-gray-600 text-lg mb-8">Your contribution directly funds the activities and expansion of this critical program area.</p>
                <Link href="/donate" className="w-full bg-[#0A2D7A] text-white py-4 rounded-xl font-bold text-lg hover:bg-primary transition-colors flex justify-center items-center gap-2">
                  Donate Now <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="bg-white rounded-3xl border border-gray-100 p-10 shadow-sm">
                <h3 className="text-2xl font-heading font-black mb-6">FAQ</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-bold">Who benefits from this?</AccordionTrigger>
                    <AccordionContent className="text-base text-gray-600">
                      Our programs primarily target youth, women, and healthcare workers in both urban and rural communities across Liberia.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-bold">How can I volunteer?</AccordionTrigger>
                    <AccordionContent className="text-base text-gray-600">
                      Visit our Get Involved page to fill out a volunteer application. We welcome both local volunteers and international experts.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}