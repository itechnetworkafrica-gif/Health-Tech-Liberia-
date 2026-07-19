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
          aria-label="Scroll to top"
          /* Stacked above the WhatsApp button (56px) + its bottom-6 (24px) + 12px gap = 92px.
             Use bottom-[5.75rem] (92px) so the two buttons never touch on any viewport. */
          className="fixed bottom-[5.75rem] right-6 z-50
                     w-11 h-11 rounded-full
                     bg-[#0A2D7A] text-white shadow-lg
                     flex items-center justify-center
                     hover:bg-[#0A3FAF] hover:shadow-xl hover:-translate-y-0.5
                     active:scale-95
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black
                     transition-all duration-200"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
