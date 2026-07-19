import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  Lock,
  ExternalLink,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Social icons
// ─────────────────────────────────────────────────────────────────────────────

function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px]">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px]">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-[18px] h-[18px]">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px]">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/health-tech-liberia", Icon: IconLinkedin },
  { label: "Facebook",  href: "https://www.facebook.com/healthtechliberia",            Icon: IconFacebook },
  { label: "Instagram", href: "https://www.instagram.com/healthtechliberia",           Icon: IconInstagram },
  { label: "X (Twitter)", href: "https://x.com/htliberia",                            Icon: IconX },
  { label: "YouTube",   href: "https://www.youtube.com/@healthtechliberia",            Icon: IconYouTube },
];

const ABOUT_LINKS = [
  { label: "Who We Are",   path: "/about" },
  { label: "Our Mission",  path: "/about#mission" },
  { label: "Our Team",     path: "/about#team" },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Partners",     path: "/partners" },
];

const PROGRAM_LINKS = [
  { label: "Digital Health & Innovation",    path: "/programs/digital-health" },
  { label: "STEM Education & Research",      path: "/programs/stem-education" },
  { label: "Gender Equality",                path: "/programs/gender-equality" },
  { label: "Mental Health",                  path: "/programs/mental-health" },
  { label: "Climate & Environmental Health", path: "/programs/climate-health" },
  { label: "Health Financing",               path: "/programs/health-financing" },
  { label: "Sexual & Reproductive Health",   path: "/programs/sexual-reproductive-health" },
  { label: "Peace & Community Engagement",   path: "/programs/peace-community" },
  { label: "Advocacy",                       path: "/programs/advocacy" },
];

const QUICK_LINKS = [
  { label: "Home",               path: "/" },
  { label: "Projects",           path: "/projects" },
  { label: "Research",           path: "/research" },
  { label: "News & Media",       path: "/news" },
  { label: "Events",             path: "/events" },
  { label: "Resources",          path: "/resources" },
  { label: "Certificate Portal", path: "/certificates" },
  { label: "Donate",             path: "/donate" },
];

const TRUST_LINKS = [
  { label: "Privacy Policy",          path: "/privacy" },
  { label: "Terms of Service",        path: "/terms" },
  { label: "Cookie Policy",           path: "/privacy#cookies" },
  { label: "Donation Transparency",   path: "/donate#transparency" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Subcomponents
// ─────────────────────────────────────────────────────────────────────────────

/** Animated accordion used on mobile only */
function MobileAccordion({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `footer-panel-${id}`;
  const triggerId = `footer-trigger-${id}`;

  return (
    <div className="border-b border-white/10">
      <button
        id={triggerId}
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9972D] focus-visible:ring-offset-1 focus-visible:ring-offset-[#050d1a] rounded-sm"
      >
        <span className="text-white font-semibold text-[15px] tracking-wide group-hover:text-[#C9972D] transition-colors duration-200">
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-gray-400 group-hover:text-[#C9972D] transition-colors duration-200 shrink-0 ml-2"
        >
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <ul className="pb-5 flex flex-col gap-3" role="list">
              {children}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** A single nav link item */
function FooterLink({ label, path, external = false }: { label: string; path: string; external?: boolean }) {
  const cls =
    "text-gray-400 hover:text-white text-[14px] leading-relaxed transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:text-white flex items-center gap-1.5 group";

  if (external || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return (
      <li>
        <a href={path} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={cls}>
          <span className="group-hover:translate-x-0.5 transition-transform duration-200">{label}</span>
          {external && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity duration-200" aria-hidden="true" />}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={path} className={cls}>
        <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">{label}</span>
      </Link>
    </li>
  );
}

/** Desktop column with heading + links */
function DesktopColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <nav aria-label={title}>
      <h3 className="text-white font-semibold text-[13px] tracking-[0.12em] uppercase mb-6 pb-3 border-b border-white/10">
        {title}
      </h3>
      <ul className="flex flex-col gap-3.5" role="list">
        {children}
      </ul>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Footer
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060d1c] text-white" role="contentinfo" aria-label="Site footer">

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10">

        {/* Top row: brand + links grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1.5fr_1fr] gap-y-10 gap-x-10 xl:gap-x-16">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-6">
            {/* Logo mark */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1a3a8f] flex items-center justify-center font-black text-white text-lg leading-none select-none">
                  HTL
                </div>
                <span className="font-bold text-white text-[17px] leading-snug">
                  Health Tech<br />
                  <span className="text-[#C9972D]">Liberia</span>
                </span>
              </div>
              <p className="text-gray-300 text-[14px] leading-relaxed max-w-xs">
                Transforming health through technology, research, and advocacy — empowering communities across Liberia.
              </p>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-500 mb-3">
                Follow us
              </p>
              <div className="flex items-center gap-2.5" role="list" aria-label="Social media links">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    role="listitem"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.93 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#C9972D] hover:bg-[#C9972D]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9972D] transition-colors duration-200"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <address className="not-italic flex flex-col gap-3.5">
              <a
                href="mailto:healthtechliberia@gmail.com"
                className="flex items-start gap-3 text-[14px] text-gray-300 hover:text-white transition-colors duration-200 group focus:outline-none focus-visible:underline"
                aria-label="Email Health Tech Liberia"
              >
                <Mail className="w-4 h-4 text-[#C9972D] mt-0.5 shrink-0" aria-hidden="true" />
                <span className="group-hover:text-white transition-colors">healthtechliberia@gmail.com</span>
              </a>
              <a
                href="tel:+231776836689"
                className="flex items-start gap-3 text-[14px] text-gray-300 hover:text-white transition-colors duration-200 group focus:outline-none focus-visible:underline"
                aria-label="Call Health Tech Liberia"
              >
                <Phone className="w-4 h-4 text-[#C9972D] mt-0.5 shrink-0" aria-hidden="true" />
                <span className="group-hover:text-white transition-colors">+231 776 836 689</span>
              </a>
              <a
                href="https://maps.google.com/?q=Monrovia,+Liberia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[14px] text-gray-300 hover:text-white transition-colors duration-200 group focus:outline-none focus-visible:underline"
                aria-label="View our location in Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#C9972D] mt-0.5 shrink-0" aria-hidden="true" />
                <span className="group-hover:text-white transition-colors">Monrovia, Liberia</span>
              </a>
              <div className="flex items-start gap-3 text-[14px] text-gray-400">
                <Globe className="w-4 h-4 text-[#C9972D] mt-0.5 shrink-0" aria-hidden="true" />
                <span>healthtech-liberia.org</span>
              </div>
            </address>
          </div>

          {/* ── Desktop link columns ── */}
          <div className="hidden lg:block">
            <DesktopColumn title="About Us">
              {ABOUT_LINKS.map((l) => <FooterLink key={l.label} {...l} />)}
            </DesktopColumn>
          </div>

          <div className="hidden lg:block">
            <DesktopColumn title="Our Programs">
              {PROGRAM_LINKS.map((l) => <FooterLink key={l.label} {...l} />)}
            </DesktopColumn>
          </div>

          <div className="hidden lg:block">
            <DesktopColumn title="Quick Links">
              {QUICK_LINKS.map((l) => <FooterLink key={l.label} {...l} />)}
            </DesktopColumn>
          </div>
        </div>

        {/* ── Mobile accordions (hidden on lg+) ── */}
        <div className="lg:hidden mt-10 border-t border-white/10">
          <MobileAccordion title="About Us" id="about">
            {ABOUT_LINKS.map((l) => <FooterLink key={l.label} {...l} />)}
          </MobileAccordion>
          <MobileAccordion title="Our Programs" id="programs">
            {PROGRAM_LINKS.map((l) => <FooterLink key={l.label} {...l} />)}
          </MobileAccordion>
          <MobileAccordion title="Quick Links" id="quick">
            {QUICK_LINKS.map((l) => <FooterLink key={l.label} {...l} />)}
          </MobileAccordion>
        </div>
      </div>

      {/* ── Trust & transparency bar ──────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            {/* Left: trust signals */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span className="text-[13px] text-gray-400">
                  Registered Non-Governmental Organization · Republic of Liberia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span className="text-[13px] text-gray-400">SSL Secured · Your data is protected</span>
              </div>
            </div>

            {/* Right: policy links */}
            <nav aria-label="Legal and policy links">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2" role="list">
                {TRUST_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.path}
                      className="text-[13px] text-gray-500 hover:text-gray-200 transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* ── Bottom copyright bar ──────────────────────────────────────────── */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-[13px] text-gray-500">
              &copy; {year} Health Tech Liberia. All rights reserved.
            </p>
            <p className="text-[13px] text-gray-600">
              Built by{" "}
              <a
                href="#"
                className="text-[#C9972D] hover:text-white transition-colors duration-200 font-semibold focus:outline-none focus-visible:underline"
              >
                iTech Network Africa
              </a>
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
        </div>
      </div>

    </footer>
  );
}
