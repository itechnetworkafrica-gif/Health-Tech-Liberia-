import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { ChevronDown, Mail, Phone, MapPin, Lock, ExternalLink, Shield } from "lucide-react";

// ── Brand palette ──────────────────────────────────────────────────────────────
// bg: #060E22   primary blue: #0A2D7A   gold: #C9972D

// ── Social SVGs ───────────────────────────────────────────────────────────────
function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const SOCIAL = [
  {
    label: "Follow Health Tech Liberia on LinkedIn",
    href: "https://www.linkedin.com/company/health-tech-liberia",
    Icon: IconLinkedin,
    color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
  },
  {
    label: "Follow Health Tech Liberia on Facebook",
    href: "https://www.facebook.com/healthtechliberia",
    Icon: IconFacebook,
    color: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  },
  {
    label: "Follow Health Tech Liberia on Instagram",
    href: "https://www.instagram.com/healthtechliberia",
    Icon: IconInstagram,
    color: "hover:bg-[#E1306C] hover:border-[#E1306C]",
  },
  {
    label: "Follow Health Tech Liberia on X (Twitter)",
    href: "https://x.com/htliberia",
    Icon: IconX,
    color: "hover:bg-white/15 hover:border-white/50",
  },
];

const CONTACT_ITEMS = [
  {
    Icon: Mail,
    label: "Send us an email",
    text: "healthtechliberia@gmail.com",
    href: "mailto:healthtechliberia@gmail.com",
  },
  {
    Icon: Phone,
    label: "Call us",
    text: "+231 776 836 689",
    href: "tel:+231776836689",
  },
  {
    Icon: MapPin,
    label: "Find us in Monrovia, Liberia",
    text: "Monrovia, Liberia",
    href: "https://maps.google.com/?q=Monrovia,+Liberia",
  },
];

const NAV_SECTIONS = [
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
      { label: "Digital Health & Innovation",    path: "/programs/digital-health" },
      { label: "STEM Education & Research",      path: "/programs/stem-education" },
      { label: "Gender Equality",                path: "/programs/gender-equality" },
      { label: "Mental Health",                  path: "/programs/mental-health" },
      { label: "Climate & Environmental Health", path: "/programs/climate-health" },
      { label: "Health Financing",               path: "/programs/health-financing" },
      { label: "Sexual & Reproductive Health",   path: "/programs/sexual-reproductive-health" },
      { label: "Peace & Community Engagement",   path: "/programs/peace-community" },
      { label: "Advocacy",                       path: "/programs/advocacy" },
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

const LEGAL_LINKS = [
  { label: "Privacy Policy",        path: "/privacy" },
  { label: "Terms of Service",      path: "/terms" },
  { label: "Cookie Policy",         path: "/privacy#cookies" },
  { label: "Donation Transparency", path: "/donate#transparency" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function Divider({ className = "" }: { className?: string }) {
  return <div className={`w-full h-px bg-white/[0.08] ${className}`} role="separator" />;
}

// ── Animated accordion (mobile only) ─────────────────────────────────────────
function AccordionSection({
  title,
  links,
}: {
  title: string;
  links: { label: string; path: string }[];
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const id = `footer-nav-${title.toLowerCase().replace(/\s+/g, "-")}`;

  // Measure real content height for smooth animation
  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [links]);

  return (
    <div className="border-b border-white/[0.08] last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between py-4 px-0 text-left
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9972D]
                   focus-visible:ring-offset-2 focus-visible:ring-offset-[#060E22] group"
      >
        <span className="text-white font-semibold text-[0.9375rem] tracking-wide
                         group-hover:text-[#C9972D] transition-colors duration-200">
          {title}
        </span>
        <span
          className={`flex items-center justify-center w-7 h-7 rounded-full border border-white/15
                      group-hover:border-[#C9972D]/50 transition-all duration-200 flex-shrink-0
                      ${open ? "bg-white/10" : ""}`}
          aria-hidden="true"
        >
          <ChevronDown
            className={`w-4 h-4 text-gray-400 group-hover:text-[#C9972D]
                        transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${open ? "rotate-180 text-[#C9972D]" : ""}`}
          />
        </span>
      </button>

      <div
        id={id}
        role="region"
        aria-label={`${title} navigation links`}
        style={{ maxHeight: open ? `${height}px` : "0px" }}
        className="overflow-hidden transition-[max-height] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        <div ref={contentRef}>
          <ul className="pb-5 flex flex-col gap-0.5" role="list">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.path}
                  className="block py-1.5 text-gray-400 hover:text-white text-sm leading-relaxed
                             transition-colors duration-150
                             focus:outline-none focus-visible:text-white focus-visible:underline
                             hover:translate-x-1 transform transition-transform duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ── Static nav column (desktop) ───────────────────────────────────────────────
function NavColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; path: string }[];
}) {
  return (
    <nav aria-label={`${title} links`}>
      <h3 className="text-white font-semibold text-[0.8125rem] tracking-[0.1em] uppercase
                     mb-5 pb-3 border-b border-white/10">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5" role="list">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.path}
              className="text-gray-400 hover:text-white text-sm leading-relaxed
                         transition-all duration-150 inline-block
                         hover:translate-x-1 transform
                         focus:outline-none focus-visible:text-white focus-visible:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ── Main Footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#060E22] text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ── Accent rule ──────────────────────────────────────────────────────── */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0A2D7A] via-[#C9972D] to-[#0A2D7A]" aria-hidden="true" />

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/*  MAIN CONTENT GRID                                                    */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1.4fr_1fr] gap-x-10 gap-y-12">

          {/* ── Column 1 : Brand + Contact + Social ────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Logo + tagline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0A2D7A] flex items-center justify-center
                                flex-shrink-0 ring-2 ring-white/10">
                  <span className="text-white font-black text-sm tracking-tight">HTL</span>
                </div>
                <div>
                  <p className="text-white font-bold text-[0.95rem] leading-tight">Health Tech Liberia</p>
                  <p className="text-[#C9972D] text-[0.65rem] font-semibold tracking-[0.08em] uppercase">
                    Nonprofit Organization
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-[0.9375rem] leading-[1.7] font-light max-w-xs">
                Transforming Health through Technology, Research, and Advocacy in&nbsp;Liberia.
              </p>
            </div>

            {/* Contact — always visible */}
            <address className="not-italic flex flex-col gap-3.5" aria-label="Contact information">
              {CONTACT_ITEMS.map(({ Icon, label, text, href }) => (
                <a
                  key={text}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3.5 group focus:outline-none
                             focus-visible:ring-2 focus-visible:ring-[#C9972D] focus-visible:ring-offset-1
                             focus-visible:ring-offset-[#060E22] rounded-sm w-fit"
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10
                               flex items-center justify-center
                               group-hover:bg-[#0A2D7A]/60 group-hover:border-[#0A2D7A]
                               transition-all duration-200"
                    aria-hidden="true"
                  >
                    <Icon className="w-[15px] h-[15px] text-[#C9972D]" aria-hidden="true" />
                  </span>
                  <span className="text-gray-400 text-[0.8125rem] leading-snug
                                   group-hover:text-white transition-colors duration-200">
                    {text}
                  </span>
                </a>
              ))}
            </address>

            {/* Social icons */}
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-gray-500 mb-4">
                Follow us
              </p>
              <div className="flex items-center gap-3" role="list" aria-label="Social media links">
                {SOCIAL.map(({ label, href, Icon, color }) => (
                  <div key={label} role="listitem">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-10 h-10 rounded-xl border border-white/15
                                  flex items-center justify-center text-white
                                  transition-all duration-200 ease-out
                                  ${color}
                                  hover:text-white hover:scale-110 hover:shadow-lg
                                  active:scale-95
                                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9972D]
                                  focus-visible:ring-offset-2 focus-visible:ring-offset-[#060E22]`}
                    >
                      <Icon />
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
          {/* ── End Column 1 ─────────────────────────────────────────────────── */}

          {/* ── Columns 2–4 : Nav — DESKTOP only (hidden on mobile) ─────────── */}
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="hidden lg:block">
              <NavColumn title={section.title} links={section.links} />
            </div>
          ))}

        </div>

        {/* ── Mobile accordion nav (hidden on desktop) ──────────────────────── */}
        <div className="lg:hidden mt-10 border-t border-white/[0.08]" aria-label="Footer navigation">
          {NAV_SECTIONS.map((section) => (
            <AccordionSection key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

      </div>
      {/* End main grid */}

      <Divider />

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/*  TRUST STRIP                                                          */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-wrap items-center justify-between gap-5">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {/* SSL */}
            <span
              className="inline-flex items-center gap-2 text-[0.7rem] font-medium
                         text-green-400 bg-green-500/10 border border-green-500/20
                         rounded-md px-3 py-1.5 leading-none"
              aria-label="This website uses SSL encryption"
            >
              <Lock className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
              SSL Secured
            </span>

            {/* Nonprofit */}
            <span
              className="inline-flex items-center gap-2 text-[0.7rem] font-medium
                         text-blue-300 bg-blue-500/10 border border-blue-500/20
                         rounded-md px-3 py-1.5 leading-none"
              aria-label="Registered nonprofit organization in Liberia"
            >
              <Shield className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
              Registered Nonprofit · Liberia
            </span>
          </div>

          {/* Legal nav */}
          <nav aria-label="Legal and policy links">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2" role="list">
              {LEGAL_LINKS.map(({ label, path }, i) => (
                <li key={label} className="flex items-center gap-5">
                  <Link
                    href={path}
                    className="text-[0.75rem] text-gray-500 hover:text-gray-200
                               transition-colors duration-150
                               focus:outline-none focus-visible:text-white focus-visible:underline"
                  >
                    {label}
                  </Link>
                  {i < LEGAL_LINKS.length - 1 && (
                    <span className="text-white/10 select-none" aria-hidden="true">·</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>

      <Divider />

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/*  BOTTOM BAR                                                           */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          {/* Copyright */}
          <p className="text-gray-500 text-[0.8125rem] leading-relaxed">
            &copy;&nbsp;{year}&nbsp;
            <span className="text-gray-400 font-medium">Health Tech Liberia</span>
            .&nbsp;All rights&nbsp;reserved.
          </p>

          {/* Built by */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-gray-600 text-[0.7rem] uppercase tracking-[0.1em] font-medium">
              Built by
            </span>
            <a
              href="https://itechnetworkafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit iTech Network Africa — Gotecx website (opens in new tab)"
              className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold
                         text-[#C9972D] hover:text-white transition-colors duration-200
                         focus:outline-none focus-visible:underline focus-visible:text-white
                         group"
            >
              <span>iTech Network Africa</span>
              <span className="text-white/20 font-normal" aria-hidden="true">|</span>
              <span>Gotecx</span>
              <ExternalLink
                className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
