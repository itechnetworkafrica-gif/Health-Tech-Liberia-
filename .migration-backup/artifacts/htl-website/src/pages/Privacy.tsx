import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We may collect personal information you voluntarily provide — such as your name and email address — when you sign up for our newsletter, contact us through our website, or engage with our programs. We also collect non-personally-identifiable information such as browser type, pages visited, and time spent on the site through standard web analytics tools.",
  },
  {
    title: "How We Use Your Information",
    body: "Information you provide is used solely to respond to your inquiries, send program updates or newsletters you have opted into, and improve our services. We do not use your data for commercial advertising or sell it to any third party.",
  },
  {
    title: "Data Sharing & Disclosure",
    body: "Health Tech Liberia does not sell, trade, or rent your personal information to third parties. We may share aggregated, non-personally-identifiable data for reporting or research purposes. We may disclose information if required by law or to protect the safety of our users or the public.",
  },
  {
    title: "Cookies",
    body: "Our website uses essential cookies to keep core features working, and optional analytics cookies to understand how visitors interact with our site. You can manage your cookie preferences via the consent banner displayed on your first visit. Declining optional cookies will not affect your ability to use the site.",
  },
  {
    title: "Data Security",
    body: "We take reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights",
    body: "You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, please contact us at healthtechliberia@gmail.com. We will respond to your request within 30 days.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. The date at the top of this page will reflect the most recent revision. Continued use of our website after changes are posted constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions or concerns about this Privacy Policy, please reach out to us at healthtechliberia@gmail.com or call +231 776 836 689.",
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0A2D7A] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-8 text-[160px] font-serif leading-none bg-gradient-to-b from-[#0A3FAF] to-[#7C3AED] bg-clip-text text-transparent select-none">
          "
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Shield className="w-7 h-7 text-[#C9972D]" />
            </div>
            <span className="text-[#C9972D] font-bold text-xs uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">Privacy Policy</h1>
          <p className="text-blue-200 text-lg">
            Last updated: July 2026
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-600 text-lg leading-relaxed mb-12 border-l-4 border-[#0A3FAF] pl-6"
          >
            Health Tech Liberia ("HTL", "we", "our", or "us") is committed to protecting your privacy. This Policy explains what information we collect, how we use it, and the choices available to you when you visit our website or interact with our services.
          </motion.p>

          <div className="flex flex-col gap-10">
            {SECTIONS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <h2 className="text-xl font-heading font-bold text-[#0A2D7A] mb-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#F4F7FF] text-[#0A3FAF] flex items-center justify-center text-xs font-black shrink-0">
                    {i + 1}
                  </span>
                  {s.title}
                </h2>
                <p className="text-gray-600 leading-relaxed pl-10">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
