import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { siteContent } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      {/* Gradient separator — more elegant than a flat border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <div className="mx-auto w-[min(1200px,92vw)] py-16">
        <div className="grid gap-10 md:grid-cols-[1.7fr_1fr_1fr]">

          {/* Brand identity */}
          <div>
            <Link to="/" className="inline-block font-display text-xl font-semibold tracking-tight text-white transition-opacity hover:opacity-80">
              {siteContent.brand}
            </Link>
            <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-azure/80">
              Growth Systems Agency
            </p>
            <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-white/45">
              We build websites, ads, and social systems that work together to turn traffic into revenue.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/30">Navigation</p>
            <nav className="mt-5 flex flex-col gap-3">
              <Link to="/" className="link-hover w-fit text-sm text-white/55 transition-colors duration-200 hover:text-white">Home</Link>
              {siteContent.navLinks.map((link) => (
                <Link key={link.href} to={link.href} className="link-hover w-fit text-sm text-white/55 transition-colors duration-200 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/30">Contact</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              <a href="mailto:skylinemediagroup01@gmail.com" className="link-hover w-fit transition-colors duration-200 hover:text-white">
                skylinemediagroup01@gmail.com
              </a>
              <Link to="/contact" className="link-hover w-fit transition-colors duration-200 hover:text-white">
                Book a Strategy Call
              </Link>
              <div className="mt-1 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/skylinemedia.group?igsh=MWVha2RydHQyaXBzZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors duration-200 hover:text-white"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@skylinemedia.group?_r=1&_t=ZS-963XtHZfOdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="transition-colors duration-200 hover:text-white"
                >
                  <FaTiktok size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-white/[0.07] pt-7 sm:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {siteContent.brand}. All rights reserved.
          </p>
          <p className="text-xs italic text-white/20">
            Built for conversion. Designed for growth.
          </p>
        </div>
      </div>
    </footer>
  );
}

