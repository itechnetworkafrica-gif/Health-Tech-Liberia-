import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import { Send, Users, Laptop, Heart } from "lucide-react";
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
    <div className="min-h-screen bg-slate-50">
      <HeroSlider slides={GET_INVOLVED_SLIDES} height="50dvh" />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-heading font-black text-gray-900 mb-6">Ways to Contribute</h2>
            <p className="text-xl text-gray-600">Your time and expertise can make a profound difference. We offer various pathways for individuals to support our mission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-primary transition-colors">
              <div className="w-20 h-20 bg-accent text-primary rounded-full flex items-center justify-center mb-6">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Volunteer On-Ground</h3>
              <p className="text-gray-600">Assist with community outreach, event organization, and health campaigns in Liberia.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-primary transition-colors">
              <div className="w-20 h-20 bg-accent text-primary rounded-full flex items-center justify-center mb-6">
                <Laptop className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Mentorship</h3>
              <p className="text-gray-600">Mentor youth in STEM or support our digital health training programs remotely.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center hover:border-primary transition-colors">
              <div className="w-20 h-20 bg-accent text-primary rounded-full flex items-center justify-center mb-6">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fundraising Advocate</h3>
              <p className="text-gray-600">Help us raise crucial funds by organizing campaigns like Kick Malaria Out in your community.</p>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 bg-[#0A2D7A] text-white p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-10"></div>
              <h3 className="text-4xl font-heading font-black mb-6 relative z-10">Join Our Team</h3>
              <p className="text-lg text-blue-100 relative z-10">Fill out this form to express your interest in volunteering or mentoring with Health Tech Liberia.</p>
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
                          <FormLabel className="font-bold">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-slate-50 py-6 px-4 rounded-xl" {...field} />
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
                          <FormLabel className="font-bold">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" className="bg-slate-50 py-6 px-4 rounded-xl" {...field} />
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
                        <FormLabel className="font-bold">Area of Interest</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-14 w-full rounded-xl border border-input bg-slate-50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        <FormLabel className="font-bold">Why do you want to join?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your background and motivation..." 
                            className="bg-slate-50 min-h-[150px] resize-none rounded-xl p-4" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button type="submit" className="w-full bg-primary text-white py-5 rounded-xl font-black text-lg hover:bg-[#0A2D7A] transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg hover:-translate-y-1">
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