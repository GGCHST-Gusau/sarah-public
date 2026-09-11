"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: Props) => {
  const path = usePathname();

  const active = path === href;

  return (
    <Link
      href={href}
      className={`font-medium tracking-wide hover:text-primary-blue ${
        active ? "border-b-2 text-primary-blue border-primary-blue" : ""
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
