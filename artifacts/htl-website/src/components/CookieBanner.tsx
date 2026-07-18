import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck, BarChart2 } from "lucide-react";

const COOKIE_KEY = "htl_cookie_consent";

type Consent = "all" | "essential" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(COOKIE_KEY) as Consent;
    if (stored) setConsent(stored);
  }, []);

  const accept = (choice: "all" | "essential") => {
    localStorage.setItem(COOKIE_KEY, choice);
    setConsent(choice);
  };

  if (!mounted || consent !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        role="dialog"
        aria-label="Cookie consent"
      >
        <div className="max-w-4xl mx-auto bg-[#080C14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Main banner */}
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#C9972D]/20 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-[#C9972D]" />
              </div>
              <div className="flex-grow">
                <h3 className="font-heading font-bold text-white text-lg mb-1">
                  We use cookies
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Health Tech Liberia uses essential cookies to keep the site working, and optional analytics cookies to understand how visitors use our site so we can improve it. We never sell your data.{" "}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-[#C9972D] hover:underline font-medium"
                  >
                    {showDetails ? "Hide details" : "Learn more"}
                  </button>
                </p>
              </div>
              <button
                onClick={() => accept("essential")}
                aria-label="Close and accept essential only"
                className="text-white/40 hover:text-white transition-colors shrink-0 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Expandable details */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 pt-1">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">Essential cookies</p>
                        <p className="text-white/50 text-xs leading-relaxed">
                          Required for navigation, forms, and security. Always active — cannot be disabled.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3">
                      <BarChart2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">Analytics cookies</p>
                        <p className="text-white/50 text-xs leading-relaxed">
                          Help us understand which pages are visited so we can improve your experience. No personal data is sold.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                onClick={() => accept("essential")}
                className="px-6 py-3 rounded-xl border border-white/20 text-white/80 font-semibold text-sm hover:bg-white/10 transition-colors order-2 sm:order-1"
              >
                Essential only
              </button>
              <button
                onClick={() => accept("all")}
                className="px-6 py-3 rounded-xl bg-[#C9972D] text-white font-bold text-sm hover:bg-[#b5862a] transition-colors order-1 sm:order-2"
              >
                Accept all cookies
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
