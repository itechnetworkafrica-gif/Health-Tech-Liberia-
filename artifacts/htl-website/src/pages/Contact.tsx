import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import HeroSlider, { HeroSlide } from "@/components/HeroSlider";
import hero1 from "../assets/hero_1.jpg";

const CONTACT_SLIDES: HeroSlide[] = [
  {
    image: hero1,
    eyebrow: "Reach Out",
    heading: "Contact Us",
    subtext: "We'd love to hear from you. Reach out with questions or partnership inquiries.",
  }
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSlider slides={CONTACT_SLIDES} height="40dvh" />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            <div>
              <h2 className="text-4xl font-heading font-black text-gray-900 mb-12">Get in Touch</h2>
              
              <div className="space-y-10 mb-12">
                <div className="flex items-start gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col justify-center h-16">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:healthtechliberia@gmail.com" className="text-gray-600 font-medium hover:text-primary transition-colors">
                      healthtechliberia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col justify-center h-16">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Call / WhatsApp</h3>
                    <a href="tel:+231888762857" className="text-gray-600 font-medium hover:text-primary transition-colors">
                      +231 888 762 857
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Office Location</h3>
                    <p className="text-gray-600 font-medium">
                      Monrovia, Liberia<br />
                      West Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-gray-100">
              <h3 className="text-3xl font-heading font-black mb-8 flex items-center gap-3 text-[#0A2D7A]">
                <MessageSquare className="w-8 h-8 text-secondary" /> Send a Message
              </h3>
              
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
                            <Input placeholder="Jane Doe" className="bg-slate-50 py-6 rounded-xl" {...field} />
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
                            <Input placeholder="jane@example.com" type="email" className="bg-slate-50 py-6 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" className="bg-slate-50 py-6 rounded-xl" {...field} />
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
                        <FormLabel className="font-bold">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your message here..." 
                            className="bg-slate-50 min-h-[180px] resize-none rounded-xl p-4" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button type="submit" className="w-full bg-[#0A2D7A] text-white py-5 rounded-xl font-black text-lg hover:bg-primary transition-all flex items-center justify-center gap-2 mt-4 shadow-lg hover:-translate-y-1">
                    <Send className="w-5 h-5" /> Send Message
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