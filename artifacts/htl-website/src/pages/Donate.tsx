import { useState } from "react";
import {
  Heart,
  Building2,
  Smartphone,
  Copy,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  Loader2,
  CircleCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// ---------------------------------------------------------------------------
// Stripe initialisation (publishable key from env)
// ---------------------------------------------------------------------------
const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as
  | string
  | undefined;

const stripePromise = STRIPE_KEY ? loadStripe(STRIPE_KEY) : null;

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------
const PRESET_AMOUNTS = ["25", "50", "100", "250"] as const;

const IMPACT: Record<string, string> = {
  "25": "Provides a menstrual hygiene kit for one adolescent girl for an entire year.",
  "50": "Funds digital literacy training materials for one frontline healthcare worker.",
  "100":
    "Supports a community dialogue session on reproductive health reaching 50+ people.",
  "250":
    "Sponsors a young woman through the comprehensive HerSTEM Research Fellowship.",
};

type PaymentTab = "card" | "bank" | "mobile";

// ---------------------------------------------------------------------------
// Utility – copy button
// ---------------------------------------------------------------------------
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
      className="ml-2 p-1.5 rounded-lg text-gray-400 hover:text-[#0A3FAF] hover:bg-blue-50 transition-all"
      title="Copy"
      type="button"
    >
      {copied ? (
        <CheckCircle className="w-4 h-4 text-emerald-500" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Stripe card form (must be a child of <Elements>)
// ---------------------------------------------------------------------------
function CardDonationForm({ amountUsd }: { amountUsd: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements || amountUsd <= 0) return;

    setLoading(true);
    setError(null);

    try {
      // 1. Ask the server to create a PaymentIntent
      const res = await fetch("/api/donate/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amountCents: Math.round(amountUsd * 100) }),
      });

      const data = (await res.json()) as {
        clientSecret?: string;
        error?: string;
      };

      if (!res.ok || !data.clientSecret) {
        throw new Error(data.error ?? "Server error. Please try again.");
      }

      // 2. Confirm the payment client-side
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card field not ready.");

      const { error: stripeError } = await stripe.confirmCardPayment(
        data.clientSecret,
        { payment_method: { card: cardElement } },
      );

      if (stripeError) throw new Error(stripeError.message);

      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10 px-4"
      >
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
          <CircleCheck className="w-9 h-9 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-2">
          Thank you for your generosity!
        </h3>
        <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
          Your donation of{" "}
          <span className="font-bold text-[#0A3FAF]">${amountUsd}</span> has
          been received. A receipt will be sent to your email.
        </p>
        <p className="mt-6 text-sm text-gray-400">
          Questions? Email{" "}
          <a
            href="mailto:healthtechliberia@gmail.com"
            className="text-[#0A3FAF] hover:underline"
          >
            healthtechliberia@gmail.com
          </a>
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Card element */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Card Details
        </label>
        <div
          className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 focus-within:border-[#0A3FAF] focus-within:bg-white transition-all"
          style={{ padding: "14px 16px", minHeight: "52px" }}
        >
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#1a202c",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSmoothing: "antialiased",
                  "::placeholder": { color: "#a0aec0" },
                },
                invalid: { color: "#e53e3e", iconColor: "#e53e3e" },
              },
              hidePostalCode: false,
            }}
            onChange={(e) => setCardComplete(e.complete)}
          />
        </div>
      </div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={!stripe || !cardComplete || loading || amountUsd <= 0}
        className="w-full bg-[#0A3FAF] text-white py-4 rounded-xl font-black text-base hover:bg-[#0A2D7A] transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing…
          </>
        ) : (
          <>
            <Heart className="w-5 h-5 fill-current" />
            Donate ${amountUsd > 0 ? amountUsd : "—"} Now
          </>
        )}
      </button>

      {/* Trust note */}
      <div className="flex items-center gap-2 justify-center text-xs text-gray-400">
        <ShieldCheck className="w-4 h-4" />
        <span>Secured by Stripe · 256-bit SSL encryption</span>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Detail row used inside bank / mobile panels
// ---------------------------------------------------------------------------
function DetailRow({
  label,
  value,
  copyValue,
  mono = false,
}: {
  label: string;
  value: string;
  copyValue?: string;
  mono?: boolean;
}) {
  return (
    <div className="flex justify-between items-center py-3">
      <div>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p
          className={`font-bold text-gray-900 ${mono ? "font-mono tracking-widest" : ""}`}
        >
          {value}
        </p>
      </div>
      {copyValue && <CopyButton value={copyValue} />}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Donate page
// ---------------------------------------------------------------------------
export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<string>("50");
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [activeTab, setActiveTab] = useState<PaymentTab>("card");

  const displayAmount = isCustom ? customAmount || "0" : selectedAmount;
  const numericAmount = parseFloat(displayAmount) || 0;

  const currentImpact = isCustom
    ? "Your generous gift fuels our ongoing mission to transform healthcare in Liberia."
    : IMPACT[selectedAmount] ?? "Thank you for supporting our mission.";

  const tabs: { id: PaymentTab; label: string; icon: React.ReactNode }[] = [
    { id: "card", label: "Card", icon: <CreditCard className="w-4 h-4" /> },
    {
      id: "bank",
      label: "Bank Transfer",
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      id: "mobile",
      label: "Mobile Money",
      icon: <Smartphone className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EEF2FF] to-[#F8FAFF] pt-32 pb-24">
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          {/* Page header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-white text-[#0A3FAF] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6 border border-blue-100 shadow-sm">
              <Heart className="w-3.5 h-3.5 fill-current" />
              Make a Difference
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#0A2D7A] mb-5 leading-tight">
              Empower Health Innovation
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Your support directly funds technology access, health education,
              and empowerment programs transforming lives in Liberia.
            </p>
          </div>

          {/* Main card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/10 overflow-hidden border border-gray-100 flex flex-col md:flex-row">

            {/* ── Impact sidebar ── */}
            <div className="w-full md:w-[38%] bg-[#06101F] text-white p-10 flex flex-col relative overflow-hidden">
              {/* decorative quote mark */}
              <div
                className="absolute -top-6 left-4 text-[160px] font-serif leading-none select-none pointer-events-none"
                style={{ color: "rgba(10,63,175,0.35)" }}
              >
                "
              </div>

              <div className="relative z-10 flex-grow flex flex-col justify-center gap-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#4A7DFF] mb-3">
                    Your Impact
                  </p>
                  <motion.p
                    key={selectedAmount + String(isCustom)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl text-gray-200 leading-relaxed font-medium"
                  >
                    {currentImpact}
                  </motion.p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "100%", label: "Funds to programs" },
                    { value: "5+", label: "Counties reached" },
                    { value: "2,000+", label: "Lives impacted" },
                    { value: "2018", label: "Founded" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/5 rounded-2xl px-4 py-4 border border-white/8"
                    >
                      <p className="text-2xl font-black text-white mb-0.5">
                        {s.value}
                      </p>
                      <p className="text-xs text-gray-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-8 bg-white/5 p-5 rounded-2xl border border-white/8">
                <p className="text-sm text-gray-400 italic leading-relaxed">
                  "Health Tech Liberia ensures that 100% of public donations go
                  directly toward program execution and community resources."
                </p>
              </div>
            </div>

            {/* ── Donation panel ── */}
            <div className="w-full md:w-[62%] p-8 lg:p-12 flex flex-col gap-8">

              {/* Amount selector */}
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Select Amount (USD)
                </h3>
                <div className="grid grid-cols-4 gap-3 mb-3">
                  {PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setIsCustom(false);
                      }}
                      className={`py-3.5 rounded-xl font-black text-lg border-2 transition-all ${
                        !isCustom && selectedAmount === amt
                          ? "border-[#0A3FAF] bg-[#0A3FAF] text-white shadow-lg shadow-blue-900/20"
                          : "border-gray-200 text-gray-600 hover:border-[#0A3FAF]/40 hover:bg-slate-50"
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsCustom(true);
                    setSelectedAmount("");
                  }}
                  className={`w-full py-3.5 rounded-xl font-semibold border-2 transition-all text-sm ${
                    isCustom
                      ? "border-[#0A3FAF] bg-[#EEF2FF] text-[#0A3FAF]"
                      : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Enter Custom Amount
                </button>

                <AnimatePresence>
                  {isCustom && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 overflow-hidden"
                    >
                      <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-2xl text-gray-400 select-none">
                          $
                        </span>
                        <input
                          type="number"
                          min="1"
                          step="1"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full pl-11 pr-5 py-4 text-2xl font-black rounded-xl border-2 border-gray-200 focus:border-[#0A3FAF] focus:outline-none bg-gray-50 focus:bg-white transition-all"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Payment method tabs */}
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Payment Method
                </h3>

                {/* Tab bar */}
                <div className="flex rounded-xl bg-gray-100 p-1 mb-6 gap-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                        activeTab === tab.id
                          ? "bg-white text-[#0A3FAF] shadow-sm"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">

                  {/* ── Card tab ── */}
                  {activeTab === "card" && (
                    <motion.div
                      key="card"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                    >
                      {stripePromise ? (
                        <Elements stripe={stripePromise}>
                          <CardDonationForm amountUsd={numericAmount} />
                        </Elements>
                      ) : (
                        <div className="rounded-xl border-2 border-amber-200 bg-amber-50 px-5 py-6 text-center space-y-2">
                          <p className="font-semibold text-amber-800 text-sm">
                            Card payments are temporarily unavailable.
                          </p>
                          <p className="text-amber-700 text-xs leading-relaxed">
                            Please use Bank Transfer or Mobile Money below, or
                            email{" "}
                            <a
                              href="mailto:healthtechliberia@gmail.com"
                              className="underline font-medium"
                            >
                              healthtechliberia@gmail.com
                            </a>{" "}
                            to donate by card.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ── Bank Transfer tab ── */}
                  {activeTab === "bank" && (
                    <motion.div
                      key="bank"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-4"
                    >
                      <div className="rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
                        <div className="flex items-center gap-3 bg-[#0A3FAF] px-5 py-3.5">
                          <Building2 className="w-4 h-4 text-white" />
                          <span className="font-bold text-white text-sm">
                            UBA Liberia Limited
                          </span>
                        </div>
                        <div className="px-5 bg-white">
                          <DetailRow label="Account Name" value="Wilmot Kerkulah" />
                        </div>
                        <div className="px-5 bg-white">
                          <DetailRow
                            label="Account Number"
                            value="53060500310591"
                            copyValue="53060500310591"
                            mono
                          />
                        </div>
                        <div className="px-5 bg-white">
                          <DetailRow label="Currency" value="USD" />
                        </div>
                      </div>

                      <ConfirmNote displayAmount={displayAmount} />
                    </motion.div>
                  )}

                  {/* ── Mobile Money tab ── */}
                  {activeTab === "mobile" && (
                    <motion.div
                      key="mobile"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-4"
                    >
                      <div className="rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
                        <div className="flex items-center gap-3 bg-emerald-600 px-5 py-3.5">
                          <Smartphone className="w-4 h-4 text-white" />
                          <span className="font-bold text-white text-sm">
                            Mobile Money (Orange / Lonestar)
                          </span>
                        </div>
                        <div className="px-5 bg-white">
                          <DetailRow label="Account Name" value="Wilmot Kerkulah" />
                        </div>
                        <div className="px-5 bg-white">
                          <DetailRow
                            label="Mobile Money Number"
                            value="+231 776 836 689"
                            copyValue="+231776836689"
                            mono
                          />
                        </div>
                      </div>

                      <ConfirmNote displayAmount={displayAmount} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Bottom trust bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0A3FAF]" /> SSL Encrypted
            </span>
            <span className="hidden sm:block w-px h-4 bg-gray-200" />
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-rose-400 fill-current" /> 100% goes
              to programs
            </span>
            <span className="hidden sm:block w-px h-4 bg-gray-200" />
            <span>
              Questions?{" "}
              <a
                href="mailto:healthtechliberia@gmail.com"
                className="text-[#0A3FAF] hover:underline"
              >
                healthtechliberia@gmail.com
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Shared "confirm after transfer" note for bank / mobile tabs
// ---------------------------------------------------------------------------
function ConfirmNote({ displayAmount }: { displayAmount: string }) {
  return (
    <>
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3">
        <ShieldCheck className="w-5 h-5 text-[#0A3FAF] shrink-0 mt-0.5" />
        <p className="text-sm text-gray-600 leading-relaxed">
          After sending, please email{" "}
          <a
            href="mailto:healthtechliberia@gmail.com"
            className="text-[#0A3FAF] font-semibold hover:underline"
          >
            healthtechliberia@gmail.com
          </a>{" "}
          with your name, amount, and payment reference so we can acknowledge
          your gift.
        </p>
      </div>

      <a
        href={`mailto:healthtechliberia@gmail.com?subject=Donation Confirmation – $${displayAmount}&body=I have sent a donation of $${displayAmount}. My name is: [Your Name]. Payment reference: [Reference].`}
        className="w-full bg-[#0A3FAF] text-white py-4 rounded-xl font-black text-base hover:bg-[#0A2D7A] transition-all flex items-center justify-center gap-3 hover:-translate-y-0.5 shadow-lg shadow-blue-900/20"
      >
        <Heart className="w-5 h-5 fill-current" />
        Confirm My Donation
      </a>
    </>
  );
}
