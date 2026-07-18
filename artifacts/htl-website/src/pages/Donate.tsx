import { useState } from "react";
import { Heart, Building2, Smartphone, Copy, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const impactMessages: Record<string, string> = {
  "25": "Provides a menstrual hygiene kit for one adolescent girl for an entire year.",
  "50": "Funds digital literacy training materials for one frontline healthcare worker.",
  "100": "Supports a community dialogue session on reproductive health reaching 50+ people.",
  "250": "Sponsors a young woman through the comprehensive HerSTEM Research Fellowship.",
};

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <button
      onClick={handleCopy}
      className="ml-2 text-gray-400 hover:text-[#0A3FAF] transition-colors"
      title="Copy"
    >
      {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<string>("50");
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const currentImpact = isCustom
    ? "Your generous custom amount fuels our ongoing mission to transform healthcare."
    : impactMessages[selectedAmount] || "Thank you for supporting our mission.";

  const displayAmount = isCustom ? customAmount || "0" : selectedAmount;

  return (
    <div className="min-h-screen bg-[#F4F7FF] pt-32 pb-24">
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          <div className="text-center mb-12">
            <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-100">
              SUPPORT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0A2D7A] mb-6">Empower Health Innovation</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Your support directly funds technology access, health education, and empowerment programs in Liberia.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">

            {/* Impact Sidebar */}
            <div className="w-full md:w-2/5 bg-[#080C14] text-white p-12 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-8 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none opacity-50">"</div>
              <div className="relative z-10 flex-grow flex flex-col justify-center">
                <h3 className="text-3xl font-heading font-black mb-6 text-white">Your Impact</h3>
                <motion.p
                  key={selectedAmount + String(isCustom)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  {currentImpact}
                </motion.p>
              </div>
              <div className="relative z-10 mt-12 bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-sm text-gray-400 italic leading-relaxed">"Health Tech Liberia ensures that 100% of public donations go directly toward program execution and community resources."</p>
              </div>
            </div>

            {/* Donation Panel */}
            <div className="w-full md:w-3/5 p-12 lg:p-16 flex flex-col gap-8">

              {/* Amount Selector */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Select Amount (USD)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {["25", "50", "100", "250"].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => { setSelectedAmount(amt); setIsCustom(false); }}
                      className={`py-4 rounded-xl font-black text-xl border-2 transition-all ${
                        !isCustom && selectedAmount === amt
                          ? "border-[#0A3FAF] bg-[#0A3FAF] text-white"
                          : "border-gray-200 text-gray-600 hover:border-[#0A3FAF]/50 hover:bg-gray-50"
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => { setIsCustom(true); setSelectedAmount(""); }}
                  className={`w-full py-4 rounded-xl font-bold border-2 transition-all ${
                    isCustom
                      ? "border-[#0A3FAF] bg-[#F4F7FF] text-[#0A3FAF]"
                      : "border-gray-200 text-gray-500 hover:border-[#0A3FAF]/50 hover:bg-gray-50"
                  }`}
                >
                  Enter Custom Amount
                </button>
                {isCustom && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4">
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-2xl text-gray-400">$</span>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-12 pr-6 py-5 text-2xl font-black rounded-xl border-2 border-gray-200 focus:border-[#0A3FAF] focus:outline-none bg-gray-50"
                      />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Payment Instructions */}
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900">Send Your Donation of <span className="text-[#0A3FAF]">${displayAmount}</span> via:</h3>

                {/* Bank Transfer */}
                <div className="rounded-2xl border-2 border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-3 bg-[#0A3FAF] px-6 py-4">
                    <Building2 className="w-5 h-5 text-white" />
                    <span className="font-bold text-white text-base">Bank Transfer</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Bank Name</p>
                        <p className="font-bold text-gray-900">UBA Liberia Limited</p>
                      </div>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Account Name</p>
                        <p className="font-bold text-gray-900">Wilmot Kerkulah</p>
                      </div>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Account Number</p>
                        <p className="font-bold text-gray-900 font-mono tracking-widest">53060500310591</p>
                      </div>
                      <CopyButton value="53060500310591" />
                    </div>
                  </div>
                </div>

                {/* Mobile Money */}
                <div className="rounded-2xl border-2 border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-3 bg-green-600 px-6 py-4">
                    <Smartphone className="w-5 h-5 text-white" />
                    <span className="font-bold text-white text-base">Mobile Money</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Account Name</p>
                        <p className="font-bold text-gray-900">Wilmot Kerkulah</p>
                      </div>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Mobile Money Number</p>
                        <p className="font-bold text-gray-900 font-mono tracking-widest">+231 776 836 689</p>
                      </div>
                      <CopyButton value="+231776836689" />
                    </div>
                  </div>
                </div>

                {/* After-transfer note */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-4">
                  <ShieldCheck className="w-5 h-5 text-[#0A3FAF] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    After sending, please email <a href="mailto:healthtechliberia@gmail.com" className="text-[#0A3FAF] font-semibold hover:underline">healthtechliberia@gmail.com</a> with your name, amount, and payment reference so we can acknowledge your generous gift.
                  </p>
                </div>

                <a
                  href="mailto:healthtechliberia@gmail.com?subject=Donation Confirmation"
                  className="w-full bg-[#0A3FAF] text-white py-5 rounded-xl font-black text-lg hover:bg-[#0A2D7A] transition-all flex items-center justify-center gap-3 hover:-translate-y-0.5 shadow-lg"
                >
                  <Heart className="w-5 h-5 fill-current" /> Confirm My Donation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
