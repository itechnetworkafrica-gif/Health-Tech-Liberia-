import { Link } from "wouter";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import htlLogo from "@assets/1784331190411_1784331478727.jpg";

// ── Custom SVG social icons ──────────────────────────────────────────────────
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/health-tech-liberia", Icon: IconLinkedin },
  { label: "Facebook",  href: "https://www.facebook.com/healthtechliberia", Icon: IconFacebook },
  { label: "Instagram", href: "https://www.instagram.com/healthtechliberia", Icon: IconInstagram },
  { label: "X",         href: "https://x.com/htliberia", Icon: IconX },
  { label: "TikTok",    href: "https://www.tiktok.com/@healthtechliberia", Icon: IconTikTok },
  { label: "YouTube",   href: "https://www.youtube.com/@healthtechliberia", Icon: IconYouTube },
  { label: "WhatsApp",  href: "https://wa.me/231776836689", Icon: IconWhatsApp },
];

const QUICK_LINKS = [
  { label: "Home",              path: "/" },
  { label: "About Us",          path: "/about" },
  { label: "Our Programs",      path: "/programs" },
  { label: "Featured Projects", path: "/projects" },
  { label: "Research",          path: "/research" },
  { label: "News & Media",      path: "/news" },
  { label: "Get Involved",      path: "/get-involved" },
  { label: "Donate",            path: "/donate" },
  { label: "Certificate Portal",path: "/certificates" },
  { label: "Contact Us",        path: "/contact" },
];

const FOCUS_LINKS = [
  { label: "Digital Health",        path: "/programs/digital-health" },
  { label: "STEM Education",        path: "/programs/stem-education" },
  { label: "Gender Equality",       path: "/programs/gender-equality" },
  { label: "Mental Health",         path: "/programs/mental-health" },
  { label: "Climate Health",        path: "/programs/climate-health" },
  { label: "Health Financing",      path: "/programs/health-financing" },
  { label: "Reproductive Health",   path: "/programs/sexual-reproductive-health" },
  { label: "Peace & Community",     path: "/programs/peace-community" },
  { label: "Advocacy",              path: "/programs/advocacy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#06101F] text-white pt-20 pb-8 border-t-4 border-[#0A3FAF]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Top section: brand + follow us */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-14 border-b border-white/10">

          {/* Logo + tagline + social */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Link href="/" className="inline-block bg-white p-3 rounded-xl w-max shadow-lg">
              <img src={htlLogo} alt="Health Tech Liberia" className="h-14 w-auto" />
            </Link>

            <p className="text-gray-300 text-base leading-relaxed font-medium">
              Transforming Health Through Technology, Research, and Advocacy in West Africa.
            </p>

            {/* Follow us */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
                Follow us
              </p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-[#06101F] transition-all duration-200"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links + Focus */}
          <div className="grid grid-cols-2 gap-10 md:gap-16">
            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-base uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-3">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#4A7DFF]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Focus */}
            <div>
              <h3 className="font-heading font-bold text-base uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-3">
                Our Focus
              </h3>
              <ul className="flex flex-col gap-2.5">
                {FOCUS_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#4A7DFF]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-base uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-3">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#4A7DFF]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:healthtechliberia@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                    healthtechliberia@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#4A7DFF]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Phone / WhatsApp</p>
                  <a href="tel:+231776836689" className="text-gray-300 text-sm hover:text-white transition-colors">
                    +231 776 836 689
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#4A7DFF]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Location</p>
                  <span className="text-gray-300 text-sm">Monrovia, Liberia<br />West Africa</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#4A7DFF]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Website</p>
                  <span className="text-gray-300 text-sm">healthtech-liberia.org</span>
                  <p className="text-gray-600 text-xs mt-0.5">(coming soon)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Health Tech Liberia. All rights reserved.
            </p>
            <span className="hidden md:inline text-white/10">·</span>
            <p className="text-gray-600 text-xs text-center">
              Built by{" "}
              <span className="text-[#C9972D] font-semibold">iTech Network Africa</span>
              {" | "}
              <a
                href="https://gotecx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9972D] hover:text-white transition-colors font-semibold"
              >
                Gotecx
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
