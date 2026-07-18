import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

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
    <div className="min-h-screen bg-[#F4F7FF]">
      <PageHeader 
        title="Contact Us" 
        description="We'd love to hear from you. Reach out with questions or partnership inquiries."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            <div>
              <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-100">
                GET IN TOUCH
              </span>
              <h2 className="text-4xl font-heading font-black text-[#0A2D7A] mb-12">Reach Out</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group hover:border-[#0A3FAF]/30 transition-colors">
                  <div className="w-16 h-16 rounded-xl border-2 border-[#0A3FAF]/20 flex items-center justify-center text-[#0A3FAF] shrink-0">
                    <Mail className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col justify-center h-16">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:healthtechliberia@gmail.com" className="text-gray-500 text-sm hover:text-[#0A3FAF] transition-colors">
                      healthtechliberia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group hover:border-[#0A3FAF]/30 transition-colors">
                  <div className="w-16 h-16 rounded-xl border-2 border-[#0A3FAF]/20 flex items-center justify-center text-[#0A3FAF] shrink-0">
                    <Phone className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col justify-center h-16">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Call / WhatsApp</h3>
                    <a href="tel:+231776836689" className="text-gray-500 text-sm hover:text-[#0A3FAF] transition-colors">
                      +231 776 836 689
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group hover:border-[#0A3FAF]/30 transition-colors">
                  <div className="w-16 h-16 rounded-xl border-2 border-[#0A3FAF]/20 flex items-center justify-center text-[#0A3FAF] shrink-0">
                    <MapPin className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Office Location</h3>
                    <p className="text-gray-500 text-sm">
                      Monrovia, Liberia<br />
                      West Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-heading font-black mb-8 text-[#0A2D7A]">
                Send a Message
              </h3>
              
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
                            <Input placeholder="Jane Doe" className="bg-gray-50 border-gray-200 py-6 rounded-xl focus-visible:ring-[#0A3FAF]" {...field} />
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
                            <Input placeholder="jane@example.com" type="email" className="bg-gray-50 border-gray-200 py-6 rounded-xl focus-visible:ring-[#0A3FAF]" {...field} />
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
                        <FormLabel className="font-bold text-gray-700">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" className="bg-gray-50 border-gray-200 py-6 rounded-xl focus-visible:ring-[#0A3FAF]" {...field} />
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
                        <FormLabel className="font-bold text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your message here..." 
                            className="bg-gray-50 border-gray-200 min-h-[180px] resize-none rounded-xl p-4 focus-visible:ring-[#0A3FAF]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button type="submit" className="w-full bg-[#0A3FAF] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#0A2D7A] transition-all flex items-center justify-center gap-2 mt-4 hover:-translate-y-0.5">
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
