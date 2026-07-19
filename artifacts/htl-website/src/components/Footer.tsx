import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, Phone, MapPin, ShieldCheck, Lock } from "lucide-react";

// ── Social icon SVGs ──────────────────────────────────────────────────────────

function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const SOCIAL = [
  { label: "LinkedIn",    href: "https://www.linkedin.com/company/health-tech-liberia", Icon: IconLinkedin },
  { label: "Facebook",    href: "https://www.facebook.com/healthtechliberia",           Icon: IconFacebook },
  { label: "Instagram",   href: "https://www.instagram.com/healthtechliberia",          Icon: IconInstagram },
  { label: "X (Twitter)", href: "https://x.com/htliberia",                              Icon: IconX },
  { label: "YouTube",     href: "https://www.youtube.com/@healthtechliberia",           Icon: IconYouTube },
];

const ACCORDIONS = [
  {
    title: "About Us",
    links: [
      { label: "Who We Are",   path: "/about" },
      { label: "Our Mission",  path: "/about#mission" },
      { label: "Our Team",     path: "/about#team" },
      { label: "Get Involved", path: "/get-involved" },
      { label: "Partners",     path: "/partners" },
    ],
  },
  {
    title: "Our Programs",
    links: [
      { label: "Digital Health & Innovation",       path: "/programs/digital-health" },
      { label: "STEM Education & Research",         path: "/programs/stem-education" },
      { label: "Gender Equality",                   path: "/programs/gender-equality" },
      { label: "Mental Health",                     path: "/programs/mental-health" },
      { label: "Climate & Environmental Health",    path: "/programs/climate-health" },
      { label: "Health Financing",                  path: "/programs/health-financing" },
      { label: "Sexual & Reproductive Health",      path: "/programs/sexual-reproductive-health" },
      { label: "Peace & Community Engagement",      path: "/programs/peace-community" },
      { label: "Advocacy",                          path: "/programs/advocacy" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home",               path: "/" },
      { label: "Projects",           path: "/projects" },
      { label: "Research",           path: "/research" },
      { label: "News & Media",       path: "/news" },
      { label: "Events",             path: "/events" },
      { label: "Resources",          path: "/resources" },
      { label: "Certificate Portal", path: "/certificates" },
      { label: "Donate",             path: "/donate" },
    ],
  },
];

// ── Accordion row with smooth animation ──────────────────────────────────────

function AccordionRow({
  title,
  links,
}: {
  title: string;
  links: { label: string; path: string }[];
}) {
  const [open, setOpen] = useState(false);
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="border-b border-white/15">
      <button
        aria-expanded={open}
        aria-controls={`footer-panel-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 px-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
      >
        <span className="text-white font-semibold text-base tracking-wide">
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="shrink-0 text-white/70"
        >
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`footer-panel-${id}`}
            role="region"
            aria-label={title}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 flex flex-col gap-3.5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main footer ───────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-black text-white" role="contentinfo">

      {/* ── Top: tagline + social ── */}
      <div className="px-6 pt-16 pb-12">
        <p className="text-white font-bold text-2xl leading-snug max-w-xs mb-12">
          Transforming Health Through Technology, Research, and Advocacy in Liberia.
        </p>

        <p className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
          Follow us
        </p>
        <div className="flex items-center gap-3" role="list" aria-label="Social media links">
          {SOCIAL.map(({ label, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${label}`}
              role="listitem"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>

      {/* ── Separator ── */}
      <div className="border-t border-white/15" />

      {/* ── Contact info (always visible) ── */}
      <div className="px-6 py-8 flex flex-col gap-4">
        <p className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-1">
          Contact Us
        </p>
        <a
          href="mailto:healthtechliberia@gmail.com"
          className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus-visible:underline"
          aria-label="Email Health Tech Liberia"
        >
          <Mail className="w-4 h-4 text-[#C9972D] shrink-0" aria-hidden="true" />
          healthtechliberia@gmail.com
        </a>
        <a
          href="tel:+231776836689"
          className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus-visible:underline"
          aria-label="Call Health Tech Liberia"
        >
          <Phone className="w-4 h-4 text-[#C9972D] shrink-0" aria-hidden="true" />
          +231 776 836 689
        </a>
        <a
          href="https://maps.google.com/?q=Monrovia,+Liberia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus-visible:underline"
          aria-label="View location on Google Maps"
        >
          <MapPin className="w-4 h-4 text-[#C9972D] shrink-0" aria-hidden="true" />
          Monrovia, Liberia
        </a>
      </div>

      {/* ── Separator ── */}
      <div className="border-t border-white/15" />

      {/* ── Accordion nav sections ── */}
      <div>
        {ACCORDIONS.map((section) => (
          <AccordionRow key={section.title} title={section.title} links={section.links} />
        ))}
      </div>

      {/* ── Trust bar ── */}
      <div className="border-t border-white/15 px-6 py-7">
        <div className="flex flex-col gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
            <span className="text-gray-400 text-xs">
              Registered Non-Governmental Organization · Republic of Liberia
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
            <span className="text-gray-400 text-xs">SSL Secured · Your data is protected</span>
          </div>
        </div>

        <nav aria-label="Legal links">
          <ul className="flex flex-wrap gap-x-5 gap-y-2" role="list">
            {[
              { label: "Privacy Policy",        path: "/privacy" },
              { label: "Terms of Service",       path: "/terms" },
              { label: "Cookie Policy",          path: "/privacy#cookies" },
              { label: "Donation Transparency",  path: "/donate#transparency" },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link
                  href={path}
                  className="text-gray-500 hover:text-white text-xs transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-white/15 px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-xs text-center md:text-left leading-relaxed">
          &copy; {new Date().getFullYear()} Health Tech Liberia. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs text-center leading-relaxed">
          Built by{" "}
          <span className="text-[#C9972D] font-semibold">iTech Network Africa</span>
          {" · "}
          <a
            href="https://gotecx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9972D] hover:text-white transition-colors duration-200 font-semibold focus:outline-none focus-visible:underline"
          >
            Gotecx
          </a>
        </p>
      </div>

    </footer>
  );
}
