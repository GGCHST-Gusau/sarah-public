"use client";

import { useState } from "react";
import Logo from "../shared/logo";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import ThemeSwitch from "../shared/theme-switch";
import NavLinks from "./nav-links";
import MobileMenu from "./mobile-menu";
import { Separator } from "../ui/separator";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between py-4 md:py-6 px-3 md:px-6 fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-4 xl:gap-6 max-lg:hidden">
            <NavLinks />
          </div>
          <Separator orientation="vertical" className="max-lg:hidden mx-1 xl" />
          <ThemeSwitch />
          <Separator orientation="vertical" className="max-md:hidden mx-1 xl" />
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-1 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors focus:outline-none"
            aria-label="Open menu"
          >
            <LuMenu size={32} />
          </button>
          <div className="max-lg:hidden">
            <Link
              href="/apply"
              className="flex items-center gap-2 group  hover:text-secondary-gold transition-colors"
            >
              Apply now
              <ArrowRight className="group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
