"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Acceuil" },
    { href: "/about", label: "A Propo" },
    { href: "/blog", label: "Blog" },
    { href: "/shop", label: "Boutique" },
    { href: "/job", label: "Job" },
  ];

  return (
    <nav
      className={`flex justify-center p-8 absolute top-0 w-full text-white z-50 transition-colors duration-300 ${
        isOpen ? "bg-black" : ""
      }`}
    >
      <div className="flex justify-between max-w-7xl mx-auto w-full items-center">
        <div className="flex items-center w-[100px] gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="bg-gray-400 rounded-full w-16 h-16"
          />
          <h4 className="font-bold leading-[120%]">GIC UBUNTU</h4>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4">
          {navLinks.map((link) => {
            {
              /* color #0F6935 when the current path and the link href match, making sure not to match the root path with other paths */
            }
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-bold ${isActive ? "text-[#0F6935]" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-95 md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
