import { useState } from "react";
import { Heart, ShieldCheck, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const formSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  isRecurring: z.boolean().default(false),
});

export default function Donate() {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<string>("50");
  const [isCustom, setIsCustom] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { amount: "50", name: "", email: "", isRecurring: false },
  });

  function handleAmountSelect(amt: string) {
    setSelectedAmount(amt);
    setIsCustom(false);
    form.setValue("amount", amt);
  }

  function handleCustomSelect() {
    setSelectedAmount("");
    setIsCustom(true);
    form.setValue("amount", "");
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Processing Donation",
      description: "Redirecting to secure payment gateway...",
    });
    // Visual only
  }

  const impactMessages: Record<string, string> = {
    "25": "Provides a menstrual hygiene kit for one adolescent girl for an entire year.",
    "50": "Funds digital literacy training materials for one frontline healthcare worker.",
    "100": "Supports a community dialogue session on reproductive health reaching 50+ people.",
    "250": "Sponsors a young woman through the comprehensive HerSTEM Research Fellowship."
  };

  const currentImpact = isCustom ? "Your generous custom amount fuels our ongoing mission to transform healthcare." : (impactMessages[selectedAmount] || "Thank you for supporting our mission.");

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 fill-current" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">Empower Health Innovation</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Your support directly funds technology access, health education, and empowerment programs in Liberia.</p>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            
            {/* Impact Sidebar */}
            <div className="w-full md:w-2/5 bg-[#0A2D7A] text-white p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                 <ShieldCheck className="w-64 h-64 -mt-16 -mr-16" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-heading font-black mb-6 text-secondary">Your Impact</h3>
                <motion.p 
                  key={selectedAmount}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-medium leading-relaxed"
                >
                  {currentImpact}
                </motion.p>
              </div>
              <div className="relative z-10 mt-12 bg-white/10 p-6 rounded-2xl backdrop-blur-md">
                <p className="text-sm text-blue-100 italic">"Health Tech Liberia ensures that 100% of public donations go directly toward program execution and community resources."</p>
              </div>
            </div>

            {/* Donation Form */}
            <div className="w-full md:w-3/5 p-12 lg:p-16">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  
                  {/* Recurring Toggle */}
                  <div className="flex justify-center bg-slate-100 p-2 rounded-2xl mb-8">
                    <button 
                      type="button"
                      onClick={() => form.setValue("isRecurring", false)}
                      className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${!form.watch("isRecurring") ? 'bg-white shadow text-[#0A2D7A]' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                      Give Once
                    </button>
                    <button 
                      type="button"
                      onClick={() => form.setValue("isRecurring", true)}
                      className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${form.watch("isRecurring") ? 'bg-white shadow text-[#0A2D7A]' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                      Monthly
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Select Amount</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {["25", "50", "100", "250"].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => handleAmountSelect(amt)}
                          className={`py-4 rounded-xl font-black text-xl border-2 transition-all ${
                            selectedAmount === amt 
                              ? 'border-primary bg-primary text-white shadow-lg transform -translate-y-1' 
                              : 'border-gray-200 text-gray-600 hover:border-primary/50 hover:bg-slate-50'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    
                    <button
                      type="button"
                      onClick={handleCustomSelect}
                      className={`w-full py-4 rounded-xl font-bold border-2 transition-all ${
                        isCustom
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-gray-200 text-gray-500 hover:border-primary/50 hover:bg-slate-50'
                      }`}
                    >
                      Enter Custom Amount
                    </button>
                  </div>

                  {isCustom && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                      <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-2xl text-gray-400">$</span>
                                <Input type="number" placeholder="Enter amount" className="pl-12 bg-slate-50 py-8 text-2xl font-black rounded-xl border-2 focus-visible:ring-primary" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-100">
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

                  <button type="submit" className="w-full bg-primary text-white py-6 rounded-2xl font-black text-2xl hover:bg-[#0A2D7A] transition-all flex items-center justify-center gap-3 mt-8 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    <Heart className="w-6 h-6 fill-current" /> Donate ${form.watch("amount") || "0"} {form.watch("isRecurring") && "/ month"}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                    <Lock className="w-4 h-4" /> Secure encrypted payment processing
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}