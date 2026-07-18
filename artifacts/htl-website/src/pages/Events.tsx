import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import hero2 from "../assets/hero_2.jpg";

const EVENTS_SLIDES: HeroSlide[] = [
  {
    image: hero2,
    eyebrow: "Join Us",
    heading: "Upcoming Events",
    subtext: "Participate in our workshops, seminars, and community dialogues.",
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider slides={EVENTS_SLIDES} height="50dvh" />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-black text-gray-900 mb-6">Be Part of the Change</h2>
            <p className="text-xl text-gray-600">We host regular events to build capacity, raise awareness, and foster community engagement. Check back often for new opportunities to get involved.</p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 rounded-[2rem] border border-gray-200 p-12 text-center text-gray-500">
              <Calendar className="w-16 h-16 mx-auto mb-6 opacity-20" />
              <h3 className="text-2xl font-bold mb-2">No Upcoming Events</h3>
              <p className="text-lg">We are currently planning our next series of events. Please subscribe to our newsletter to stay updated.</p>
            </div>
            
            {/* Example Event Layout - hidden when empty */}
            {/*
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden flex flex-col md:flex-row group">
              <div className="md:w-1/3 bg-accent p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                <div className="text-primary font-black text-6xl mb-2">15</div>
                <div className="text-gray-900 font-bold text-2xl uppercase tracking-widest">Oct</div>
                <div className="text-gray-500 mt-2 font-medium">2024</div>
              </div>
              <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-slate-100 px-3 py-1 rounded-full"><Clock className="w-4 h-4" /> 9:00 AM - 4:00 PM</span>
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-slate-100 px-3 py-1 rounded-full"><MapPin className="w-4 h-4" /> Monrovia City Hall</span>
                </div>
                <h3 className="text-3xl font-heading font-black text-gray-900 mb-4">Digital Health Summit 2024</h3>
                <p className="text-gray-600 text-lg mb-8">A gathering of healthcare professionals and tech innovators to discuss the future of digital health records in rural Liberia.</p>
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0A2D7A] transition-colors w-max flex items-center gap-2">
                  Register Now <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    </div>
  );
}