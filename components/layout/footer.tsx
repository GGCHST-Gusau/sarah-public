import { MapPin, Mail, Phone } from "lucide-react";
import PageSection from "../shared/page-section";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "News & Events", href: "/news-events" },
  { label: "Contact", href: "/contact" },
];

const academicLinks = [
  { label: "Nursery", href: "/academics/nursery" },
  { label: "Primary", href: "/academics/primary" },
  { label: "Secondary", href: "/academics/secondary" },
  { label: "Islamiyya", href: "/academics/islamiyya" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },

  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark-blue text-white">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        {/* School Information */}
        <div>
          <a href="/" className="inline-block">
            <div className="text-xl font-bold">
              ALHAJA SARAH MEMORIAL ACADEMY
            </div>
          </a>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            Nurturing minds, building character, and inspiring purpose through
            quality education rooted in strong values.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-secondary-gold hover:text-secondary-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-gold">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-gold">
            Academics
          </h3>

          <ul className="mt-5 space-y-3">
            {academicLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-gold">
            Contact Us
          </h3>

          <ul className="mt-5 space-y-4">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary-gold" />
              <a
                href="tel:+2340000000000"
                className="text-sm text-white/65 transition hover:text-white"
              >
                +234 90 4742 3467
              </a>
            </li>

            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary-gold" />
              <a
                href="mailto:info@school.com"
                className="text-sm text-white/65 transition hover:text-white"
              >
                info@sarah.com
              </a>
            </li>

            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary-gold" />
              <span className="text-sm leading-6 text-white/65">
                Zannah road, gada biyu, Gusau,
                <br />
                City, State, Nigeria
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} School Name. All rights reserved.</p>

        <div className="flex gap-5">
          <a href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </a>

          <a href="/terms" className="transition hover:text-white">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
