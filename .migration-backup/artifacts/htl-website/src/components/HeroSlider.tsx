import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export interface HeroSlide {
  image: string;
  eyebrow?: string;
  heading: string;
  subtext?: string;
  ctas?: { label: string; href: string; variant: 'primary' | 'outline' }[];
}

interface HeroSliderProps {
  slides: HeroSlide[];
  height?: string;
}

export default function HeroSlider({ slides, height = "100vh" }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered, slides.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div 
      className="relative w-full overflow-hidden bg-slate-900 group"
      style={{ height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].heading}
            className="w-full h-full object-cover"
          />
          {/* Dark Navy Overlay */}
          <div className="absolute inset-0 bg-[#0A2D7A]/65 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2D7A]/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {slides[currentIndex].eyebrow && (
                <div className="text-secondary font-bold tracking-widest uppercase text-sm md:text-base mb-4 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-secondary hidden md:block"></span>
                  {slides[currentIndex].eyebrow}
                </div>
              )}
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg">
                {slides[currentIndex].heading}
              </h1>
              
              {slides[currentIndex].subtext && (
                <p className="text-lg md:text-2xl text-blue-50 font-medium mb-10 max-w-2xl drop-shadow-md">
                  {slides[currentIndex].subtext}
                </p>
              )}
              
              {slides[currentIndex].ctas && slides[currentIndex].ctas.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {slides[currentIndex].ctas.map((cta, i) => (
                    <Link
                      key={i}
                      href={cta.href}
                      className={`px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 ${
                        cta.variant === 'primary'
                          ? 'bg-primary text-white shadow-xl hover:shadow-primary/30 hover:bg-primary/90'
                          : 'bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-[#0A2D7A]'
                      }`}
                    >
                      {cta.label}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all z-20 border border-white/20"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all z-20 border border-white/20"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all rounded-full ${
                  currentIndex === i ? "w-10 h-3 bg-secondary" : "w-3 h-3 bg-white/50 hover:bg-white"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}