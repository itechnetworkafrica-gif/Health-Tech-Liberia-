import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import { Send, Users, Laptop, Heart, ArrowRight } from "lucide-react";
import hero2 from "../assets/hero_2.jpg";

const GET_INVOLVED_SLIDES: HeroSlide[] = [
  {
    image: hero2,
    eyebrow: "Take Action",
    heading: "Get Involved",
    subtext: "Join our network of volunteers, mentors, and advocates driving change in Liberia.",
  }
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(2, "Please select an area of interest"),
  message: z.string().min(10, "Please tell us briefly why you want to join"),
});

export default function GetInvolved() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", role: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Application Received!",
      description: "Thank you for your interest. Our team will contact you soon.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSlider slides={GET_INVOLVED_SLIDES} height="50dvh" />

      <section className="py-24 bg-[#F4F7FF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-100">
              CONTRIBUTE
            </span>
            <h2 className="text-4xl font-heading font-black text-[#0A2D7A] mb-6">Ways to Contribute</h2>
            <p className="text-xl text-gray-600">Your time and expertise can make a profound difference. We offer various pathways for individuals to support our mission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Users, title: "Volunteer On-Ground", desc: "Assist with community outreach, event organization, and health campaigns in Liberia." },
              { icon: Laptop, title: "Digital Mentorship", desc: "Mentor youth in STEM or support our digital health training programs remotely." },
              { icon: Heart, title: "Fundraising Advocate", desc: "Help us raise crucial funds by organizing campaigns like Kick Malaria Out in your community." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-blue-100 p-8 flex flex-col gap-6 hover:shadow-xl hover:border-[#0A3FAF]/30 transition-all group">
                <div className="w-16 h-16 rounded-xl border-2 border-[#0A3FAF]/20 flex items-center justify-center text-[#0A3FAF]">
                  <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{item.desc}</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A3FAF] flex items-center justify-center text-white hover:bg-[#0A2D7A] transition-colors shrink-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 max-w-5xl mx-auto flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 bg-[#080C14] text-white p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-4 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none opacity-50">"</div>
              <div className="relative z-10">
                <h3 className="text-4xl font-heading font-black mb-6 text-white">Join Our Team</h3>
                <p className="text-lg text-gray-400">Fill out this form to express your interest in volunteering or mentoring with Health Tech Liberia.</p>
              </div>
            </div>
            
            <div className="w-full lg:w-3/5 p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-gray-700">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-gray-50 border-gray-200 py-6 px-4 rounded-xl focus-visible:ring-[#0A3FAF]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" className="bg-gray-50 border-gray-200 py-6 px-4 rounded-xl focus-visible:ring-[#0A3FAF]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-gray-700">Area of Interest</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3FAF]"
                            {...field}
                          >
                            <option value="">Select an option</option>
                            <option value="on-ground">On-Ground Volunteer</option>
                            <option value="digital">Digital Mentor</option>
                            <option value="advocate">Fundraising Advocate</option>
                            <option value="other">Other / General</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-gray-700">Why do you want to join?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your background and motivation..." 
                            className="bg-gray-50 border-gray-200 min-h-[150px] resize-none rounded-xl p-4 focus-visible:ring-[#0A3FAF]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button type="submit" className="w-full bg-[#0A3FAF] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#0A2D7A] transition-colors flex items-center justify-center gap-2 mt-4 hover:-translate-y-0.5">
                    <Send className="w-5 h-5" /> Submit Application
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
