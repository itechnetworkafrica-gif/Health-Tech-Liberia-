import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, Mail, Phone, MapPin, Lock, ExternalLink } from "lucide-react";

// ── Brand colors ──────────────────────────────────────────────────────────────
// primary blue: #0A2D7A   gold: #C9972D

// ── Social SVGs ───────────────────────────────────────────────────────────────
function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL = [
  { label: "Follow us on LinkedIn",  href: "https://www.linkedin.com/company/health-tech-liberia", Icon: IconLinkedin },
  { label: "Follow us on Facebook",  href: "https://www.facebook.com/healthtechliberia",            Icon: IconFacebook },
  { label: "Follow us on Instagram", href: "https://www.instagram.com/healthtechliberia",           Icon: IconInstagram },
  { label: "Follow us on X",         href: "https://x.com/htliberia",                               Icon: IconX },
];

const CONTACT_ITEMS = [
  { Icon: Mail,    label: "Email us",           text: "healthtechliberia@gmail.com", href: "mailto:healthtechliberia@gmail.com" },
  { Icon: Phone,   label: "Call us",            text: "+231 776 836 689",            href: "tel:+231776836689" },
  { Icon: MapPin,  label: "Our location",       text: "Monrovia, Liberia",           href: "#" },
];

const ACCORDION_SECTIONS = [
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
  { label: "Privacy Policy",         path: "/privacy" },
  { label: "Terms of Service",       path: "/terms" },
  { label: "Cookie Policy",          path: "/privacy#cookies" },
  { label: "Donation Transparency",  path: "/donate#transparency" },
];

// ── Full-width divider ─────────────────────────────────────────────────────────
function Divider() {
  return <div className="w-full h-px bg-white/10" role="separator" />;
}

// ── Accordion row ─────────────────────────────────────────────────────────────
function AccordionRow({
  title,
  links,
}: {
  title: string;
  links: { label: string; path: string }[];
}) {
  const [open, setOpen] = useState(false);
  const id = `footer-accordion-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div>
      <Divider />
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between py-[1.125rem] px-6 text-left
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-inset
                   group"
      >
        <span className="text-white font-semibold text-[0.9375rem] tracking-wide group-hover:text-gray-300 transition-colors duration-200">
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-white shrink-0 transition-transform duration-300 ease-out group-hover:text-gray-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={id}
        role="region"
        aria-label={title}
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 flex flex-col gap-[0.625rem]" role="list">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.path}
                className="text-gray-400 hover:text-white text-sm leading-relaxed
                           transition-colors duration-150 focus:outline-none
                           focus-visible:underline focus-visible:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Main footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060E22] text-white" role="contentinfo" aria-label="Site footer">

      {/* ── 1. Tagline + social ─────────────────────────────────────────────── */}
      <div className="px-6 pt-16 pb-12 max-w-xl">
        <p className="text-white font-bold text-[1.5rem] leading-[1.35] mb-10">
          Transforming Health Through Technology,&nbsp;Research, and Advocacy in&nbsp;Liberia.
        </p>

        <p className="text-gray-400 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-5">
          Follow us
        </p>
        <div className="flex items-center gap-4" role="list" aria-label="Social media links">
          {SOCIAL.map(({ label, href, Icon }) => (
            <div key={label} role="listitem">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center
                           text-white transition-all duration-200 ease-out
                           hover:bg-white hover:text-black hover:border-white hover:scale-105 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.15)]
                           active:scale-95
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#060E22]"
              >
                <Icon />
              </a>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* ── 2. Contact strip — always visible ──────────────────────────────── */}
      <address className="not-italic px-6 py-8 flex flex-col gap-4">
        {CONTACT_ITEMS.map(({ Icon, label, text, href }) => (
          <a
            key={text}
            href={href}
            aria-label={label}
            className="flex items-start gap-4 group focus:outline-none focus-visible:underline"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center
                             group-hover:border-white transition-colors duration-200">
              <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
            </span>
            <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-200 self-center">
              {text}
            </span>
          </a>
        ))}
      </address>

      {/* ── 3. Accordion nav sections ───────────────────────────────────────── */}
      <nav aria-label="Footer navigation">
        {ACCORDION_SECTIONS.map((section) => (
          <AccordionRow key={section.title} title={section.title} links={section.links} />
        ))}
        <Divider />
      </nav>

      {/* ── 4. Trust strip ──────────────────────────────────────────────────── */}
      <div className="px-6 py-7 flex flex-col gap-5">
        {/* SSL + Registration */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-[0.7rem] text-gray-500 border border-white/10 rounded px-2.5 py-1.5 leading-none">
            <Lock className="w-3 h-3 text-green-500" aria-hidden="true" />
            SSL Secured
          </span>
          <span className="text-[0.7rem] text-gray-600 leading-none">
            Registered Nonprofit · Liberia
          </span>
        </div>

        {/* Legal links */}
        <nav aria-label="Legal links">
          <ul className="flex flex-wrap gap-x-5 gap-y-2" role="list">
            {LEGAL_LINKS.map(({ label, path }) => (
              <li key={label}>
                <Link
                  href={path}
                  className="text-[0.75rem] text-gray-500 hover:text-white transition-colors duration-150
                             focus:outline-none focus-visible:underline focus-visible:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Divider />

      {/* ── 5. Bottom bar ───────────────────────────────────────────────────── */}
      <div className="px-6 py-8 flex flex-col gap-5">

        {/* Copyright */}
        <p className="text-gray-400 text-[0.8125rem] leading-relaxed">
          &copy; {year} Health Tech Liberia. All rights reserved.
        </p>

        {/* Built by — Gotecx under iTech domain */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-[0.75rem] uppercase tracking-[0.08em] font-medium">
            Designed &amp; Developed by
          </p>
          <a
            href="https://itechnetworkafrica.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit iTech Network Africa — Gotecx website"
            className="inline-flex items-center gap-2 text-[0.9rem] font-bold text-[#C9972D]
                       hover:text-white transition-colors duration-200 group
                       focus:outline-none focus-visible:underline focus-visible:text-white w-fit"
          >
            <span>iTech Network Africa</span>
            <span className="text-gray-600 font-normal text-[0.85rem]">|</span>
            <span>Gotecx</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
          </a>
          <p className="text-gray-600 text-[0.7rem]">
            itechnetworkafrica.com
          </p>
        </div>

      </div>

    </footer>
  );
}
