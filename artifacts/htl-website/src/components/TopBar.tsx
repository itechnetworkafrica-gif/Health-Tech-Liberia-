import React, { useState, useEffect } from 'react';
import { Mail, Phone, Facebook, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-300" />
                <a href="mailto:healthtechliberia@gmail.com" className="hover:text-blue-200 transition-colors">
                  healthtechliberia@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-300" />
                <a href="tel:+231888762857" className="hover:text-blue-200 transition-colors">
                  +231 888 762 857
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
              <span className="md:hidden font-medium opacity-80 mr-auto">Health Tech Liberia</span>
              <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}