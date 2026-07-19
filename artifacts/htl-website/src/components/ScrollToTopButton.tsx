import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top of page"
          /**
           * Stacking order (bottom → top), right-6 (24px) from edge:
           *   WhatsApp:    bottom-6  (24px) — 56×56px button
           *   ScrollToTop: bottom-[5.75rem] (92px = 56+12+24) — 44×44px button
           *
           * On mobile the cookie banner may appear; it sits at the bottom-centre
           * so it doesn't collide with the right-aligned FABs.
           */
          className="fixed bottom-[5.75rem] right-6 z-50
                     w-11 h-11 rounded-full
                     bg-[#0A2D7A] text-white
                     shadow-[0_4px_14px_rgba(10,45,122,0.5)]
                     flex items-center justify-center
                     hover:bg-[#0c3db5] hover:shadow-[0_6px_20px_rgba(10,45,122,0.6)]
                     hover:-translate-y-0.5
                     active:scale-95
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                     focus-visible:ring-offset-2 focus-visible:ring-offset-black
                     transition-all duration-200"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
