import React, { useState, useEffect } from 'react';
import { Mail, Phone, Facebook, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-3 h-3">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-3 h-3">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-3 h-3">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0A2D7A" />
    </svg>
  );
}

const SOCIAL = [
  { label: "Facebook",    href: "https://www.facebook.com/profile.php?id=100087475826014",  Icon: () => <Facebook className="w-3 h-3" /> },
  { label: "LinkedIn",    href: "https://www.linkedin.com/showcase/health-tech-liberia-htl/", Icon: () => <Linkedin className="w-3 h-3" /> },
  { label: "Instagram",   href: "https://instagram.com/healthtechliberia/",                  Icon: IconInstagram },
  { label: "X (Twitter)", href: "https://x.com/healthtechliberia/",                          Icon: IconX },
  { label: "YouTube",     href: "https://youtube.com/@health-techlib?si=JFjpHVa895wiNNsX",  Icon: IconYouTube },
];

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="bg-[#0A2D7A] text-white py-2 text-xs relative z-[60]"
        >
          <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
            {/* Contact info — desktop only */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-300" />
                <a href="mailto:healthtechliberia@gmail.com" className="hover:text-blue-200 transition-colors">
                  healthtechliberia@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-300" />
                <a href="tel:+231776836689" className="hover:text-blue-200 transition-colors">
                  +231 776 836 689
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">
              <span className="md:hidden font-medium opacity-80 mr-auto">Health Tech Liberia</span>
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A2D7A] transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
