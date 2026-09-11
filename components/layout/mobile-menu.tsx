"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  FiHome,
  FiInfo,
  FiHelpCircle,
  FiPhone,
  FiMail,
  FiMapPin,
  FiChevronRight,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Logo from "../shared/logo";
import { NAV_LINKS } from "@/constants/nav-links";
import { CONTACT_DETAILS } from "@/constants/contacts";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const getLinkIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "home":
        return <FiHome className="size-5" />;
      case "about us":
        return <FiInfo className="size-5" />;
      case "programs":
        return <FaGraduationCap className="size-5" />;
      case "faqs":
        return <FiHelpCircle className="size-5" />;
      default:
        return <FiChevronRight className="size-5" />;
    }
  };

  const getPhone = () => {
    const phone = CONTACT_DETAILS.find((c) => c.label === "Phone")?.values[0];
    return phone || "08136625135";
  };

  const getEmail = () => {
    const email = CONTACT_DETAILS.find((c) => c.label === "Email")?.values[0];
    return email || "sarahacademy@gmail.com";
  };

  const getLocation = () => {
    const loc = CONTACT_DETAILS.find((c) => c.label === "Location")?.values[0];
    return loc || "Gusau, Zamfara State";
  };

  return (
    <>
      {/* Backdrop overlay with blur */}
      <div
        className={`fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xs z-40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-75 sm:w-90 md:w-115 bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 shadow-2xl z-50 lg:hidden flex flex-col p-6 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header inside drawer */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-900">
          <Link href="/" onClick={onClose}>
            <Logo />
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <IoClose size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-8 space-y-2 overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                  active
                    ? "bg-primary-blue/10 dark:bg-primary-blue/20 text-primary-blue dark:text-primary-bg-primary-blue font-semibold shadow-xs"
                    : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-1.5 rounded-lg transition-colors duration-200 ${
                      active
                        ? "bg-primary-blue/20 dark:bg-primary-blue/30 text-primary-blue dark:text-primary-bg-primary-blue"
                        : "bg-neutral-100 dark:bg-neutral-900 text-neutral-500 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 dark:text-neutral-400"
                    }`}
                  >
                    {getLinkIcon(link.name)}
                  </div>
                  <span>{link.name}</span>
                </div>
                <FiChevronRight
                  size={16}
                  className={`transition-transform duration-200 ${
                    active
                      ? "translate-x-0.5 opacity-100"
                      : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA and Contact Info Section */}
        <div className="pt-6 border-t border-neutral-100 dark:border-neutral-900 space-y-6">
          <Link
            href="/apply"
            onClick={onClose}
            className="flex items-center justify-center w-full rounded-2xl bg-linear-to-r from-[#013e7a] to-[#2a83dd] hover:from-[#013970] hover:to-[#013e7a] font-semibold text-center py-4 text-white transition-all shadow-md active:scale-98"
          >
            Apply Now
          </Link>

          {/* Quick Contact Info */}
          <div className="space-y-3.5 text-xs text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2.5">
              <FiPhone className="size-4 text-primary-blue shrink-0" />
              <a href={`tel:${getPhone()}`} className="hover:underline">
                {getPhone()}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <FiMail className="size-4 text-primary-blue shrink-0" />
              <a
                href={`mailto:${getEmail()}`}
                className="hover:underline truncate"
              >
                {getEmail()}
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <FiMapPin className="size-4 text-primary-blue shrink-0 mt-0.5" />
              <span className="leading-normal">{getLocation()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
