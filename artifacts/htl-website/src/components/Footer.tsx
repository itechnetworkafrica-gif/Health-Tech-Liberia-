import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

// ── Social icon SVGs ─────────────────────────────────────────────────────────
function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000" />
    </svg>
  );
}

const SOCIAL = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/health-tech-liberia", Icon: IconLinkedin },
  { label: "Facebook",  href: "https://www.facebook.com/healthtechliberia",            Icon: IconFacebook },
  { label: "Instagram", href: "https://www.instagram.com/healthtechliberia",           Icon: IconInstagram },
  { label: "X",         href: "https://x.com/htliberia",                               Icon: IconX },
  { label: "YouTube",   href: "https://www.youtube.com/@healthtechliberia",            Icon: IconYouTube },
];

const SECTIONS = [
  {
    title: "About Us",
    links: [
      { label: "Who We Are",    path: "/about" },
      { label: "Our Mission",   path: "/about#mission" },
      { label: "Our Team",      path: "/about#team" },
      { label: "Get Involved",  path: "/get-involved" },
      { label: "Partners",      path: "/partners" },
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
  {
    title: "Contact Us",
    links: [
      { label: "healthtechliberia@gmail.com", path: "mailto:healthtechliberia@gmail.com" },
      { label: "+231 776 836 689",            path: "tel:+231776836689" },
      { label: "Monrovia, Liberia",           path: "#" },
      { label: "healthtech-liberia.org",      path: "#" },
    ],
  },
];

function AccordionRow({ title, links }: { title: string; links: { label: string; path: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-6 text-left"
      >
        <span className="text-white font-semibold text-base tracking-wide">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-white shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-6 pb-5 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* ── Top: tagline + follow us ── */}
      <div className="px-6 pt-14 pb-10">
        <p className="text-white font-bold text-2xl leading-snug max-w-xs mb-10">
          Transforming Health Through Technology, Research, and Advocacy in Liberia.
        </p>

        <p className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
          Follow us
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* ── Full-width white separator ── */}
      <div className="border-t border-white/20" />

      {/* ── Accordion sections ── */}
      <div>
        {SECTIONS.map((section) => (
          <AccordionRow key={section.title} title={section.title} links={section.links} />
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/20 px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-gray-500 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} Health Tech Liberia. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs text-center">
          Built by{" "}
          <span className="text-[#C9972D] font-semibold">iTech Network Africa</span>
          {" · "}
          <a
            href="https://gotecx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9972D] hover:text-white transition-colors font-semibold"
          >
            Gotecx
          </a>
        </p>
        <div className="flex items-center gap-5 text-xs text-gray-500">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
}
