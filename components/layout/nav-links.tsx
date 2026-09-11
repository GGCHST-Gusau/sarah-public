import { NAV_LINKS } from "@/constants/nav-links";
import NavLink from "./nav-link";

const NavLinks = () => {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <NavLink key={link.name} href={link.href} label={link.name} />
      ))}
    </>
  );
};

export default NavLinks;
