import { Link } from "wouter";
import { Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight, Award } from "lucide-react";
import htlLogo from "@assets/1784331190411_1784331478727.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#0A2D7A] text-white pt-24 pb-8 border-t-[6px] border-primary relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M45.7,-76.4C58.9,-69.3,69.1,-55.3,77.7,-40.7C86.3,-26.1,93.4,-11.1,91.8,3.2C90.2,17.4,79.9,30.8,69.5,42.5C59.2,54.1,48.7,64,35.9,71.2C23.1,78.4,7.9,82.8,-6.8,84C-21.5,85.2,-36.5,83.1,-48.9,75.4C-61.4,67.7,-71.2,54.4,-78.9,39.8C-86.5,25.2,-91.9,9.4,-90.1,-5.5C-88.3,-20.3,-79.3,-34.2,-68.8,-45.5C-58.4,-56.8,-46.6,-65.4,-33.8,-72.4C-21,-79.4,-7.3,-83.7,4.5,-80.6C16.3,-77.4,32.6,-83.5,45.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block bg-white p-3 rounded-xl w-max shadow-lg">
              <img src={htlLogo} alt="Health Tech Liberia" className="h-16 w-auto" />
            </Link>
            <p className="text-blue-100/90 text-sm leading-relaxed pr-4">
              Transforming Health Through Technology, Research, and Advocacy. We are West Africa's leading digital health nonprofit empowering communities through innovative solutions.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/231776836689" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:scale-110 transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-white border-b-2 border-primary pb-2 w-max">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Programs", path: "/programs" },
                { label: "Featured Projects", path: "/projects" },
                { label: "Research", path: "/research" },
                { label: "News & Media", path: "/news" },
                { label: "Certificate Portal", path: "/certificates" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="text-blue-200/90 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-white border-b-2 border-primary pb-2 w-max">Our Focus</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Digital Health", path: "/programs/digital-health" },
                { label: "STEM Education", path: "/programs/stem-education" },
                { label: "Gender Equality", path: "/programs/gender-equality" },
                { label: "Mental Health", path: "/programs/mental-health" },
                { label: "Climate Health", path: "/programs/climate-health" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="text-blue-200/90 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-white border-b-2 border-primary pb-2 w-max">Contact Us</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-secondary">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center h-10">
                  <span className="text-white text-sm font-bold leading-tight">Email</span>
                  <a href="mailto:healthtechliberia@gmail.com" className="text-blue-200/90 text-sm hover:text-white transition-colors leading-tight">healthtechliberia@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center h-10">
                  <span className="text-white text-sm font-bold leading-tight">Phone / WhatsApp</span>
                  <a href="tel:+231776836689" className="text-blue-200/90 text-sm hover:text-white transition-colors leading-tight">+231 776 836 689</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-white text-sm font-bold leading-tight">Location</span>
                  <span className="text-blue-200/90 text-sm leading-tight mt-1">Monrovia, Liberia<br />West Africa</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-blue-200/80 text-sm text-center md:text-left font-medium">
              &copy; {new Date().getFullYear()} Health Tech Liberia. All rights reserved.
            </p>
            <span className="hidden md:inline text-white/20">·</span>
            <p className="text-blue-200/60 text-xs text-center">
              Built by{" "}
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
          <div className="flex items-center gap-6 text-sm text-blue-200/80 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
