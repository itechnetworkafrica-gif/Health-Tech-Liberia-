import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using the Health Tech Liberia website (healthtechliberia.org or any associated domain), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.",
  },
  {
    title: "Use of the Website",
    body: "You may use this website for lawful purposes only. You agree not to use the site to distribute malware, attempt to gain unauthorised access to any part of the site or its servers, or engage in any activity that disrupts or interferes with our services. We reserve the right to restrict or terminate access to users who violate these terms.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this website — including text, images, graphics, logos, and video — is the property of Health Tech Liberia or its content contributors and is protected by applicable copyright and intellectual property laws. You may share or reference our content with proper attribution but may not reproduce it commercially without written permission.",
  },
  {
    title: "No Professional Advice",
    body: "The information on this website is provided for general informational and educational purposes only. It does not constitute medical, legal, financial, or professional advice. Always seek the guidance of a qualified professional with questions you may have regarding health or other matters.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may include links to external websites operated by third parties. These links are provided for your convenience. Health Tech Liberia has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.",
  },
  {
    title: "Disclaimer of Warranties",
    body: "This website is provided on an 'as-is' and 'as-available' basis without warranties of any kind, either express or implied. Health Tech Liberia does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Health Tech Liberia shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or its content.",
  },
  {
    title: "Changes to These Terms",
    body: "We reserve the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site after any changes constitutes acceptance of the new terms.",
  },
  {
    title: "Governing Law",
    body: "These Terms shall be governed by and construed in accordance with the laws of the Republic of Liberia. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Monrovia, Liberia.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions about these Terms of Service, please contact us at healthtechliberia@gmail.com or by phone at +231 776 836 689.",
  },
];

export default function Terms() {
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
              <FileText className="w-7 h-7 text-[#C9972D]" />
            </div>
            <span className="text-[#C9972D] font-bold text-xs uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">Terms of Service</h1>
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
            These Terms of Service govern your use of the Health Tech Liberia website and services. Please read them carefully before using the site.
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
