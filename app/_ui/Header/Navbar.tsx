"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import SubList from "./SubList";

// Define types for navigation links and sub-services
interface SubService {
  attributes: any;
  id: string;
  name: string;
  slug: string;
  nestedServices?: SubService[];
}
interface NavigationLink {
  id: string;
  label: string;
  url: string;
  subLinks?: {
    sub_subServices: {
      data: SubService[];
    };
  } | null;
}

type NavbarProps = {
  navigationLinks: NavigationLink[];
  serviceSubLinks: any;
};

export default function Navbar({
  navigationLinks,
  serviceSubLinks,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentPath = usePathname();
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);
  const handleMobileBar = () => {
    setIsOpen(!isOpen);
    closeDropdown();
  };

  return (
    <nav className='navbar'>
      <div onClick={handleMobileBar}>
        {isOpen ? (
          <IoClose className='relative z-30 text-[3rem] sm:hidden text-white' />
        ) : (
          <FaBarsStaggered className='birgger-icon text-3xl text-[--black_color] sm:hidden' />
        )}
      </div>

      <ul className={`flex gap-12 ${isOpen ? "activeList" : ""}`}>
        {navigationLinks.map((link) =>
          link.label.toUpperCase() !== "SERVICES" ? (
            <li
              key={link.id}
              className={clsx("", {
                "active relative cursor-pointer":
                  (link.url === "/" && currentPath === "/") ||
                  (link.url !== "/" && currentPath.startsWith(link.url)),
              })}
              onClick={handleMobileBar}>
              <Link
                href={link.url}
                className={clsx(`text-xl font-[600]`, {
                  "font-bold":
                    (link.url === "/" && currentPath === "/") ||
                    (link.url !== "/" && currentPath.startsWith(link.url)),
                })}>
                {link.label}
              </Link>
            </li>
          ) : (
            <li
              key={link.id}
              className={clsx(
                "relative cursor-pointer flex md:block flex-col items-center",
                {
                  "active relative cursor-pointer": /services\/.+/.test(
                    currentPath
                  ),
                }
              )}
              onClick={toggleDropdown}>
              <span className={`text-xl font-[600]`}>{link.label}</span>
              <SubList
                isDropdownOpen={isDropdownOpen}
                closeDropdown={closeDropdown}
                serviceSubLinks={serviceSubLinks}
                handleMobileBar={handleMobileBar}
              />
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
