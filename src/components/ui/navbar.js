"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1C3434]/90 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span
                className={` font-bold text-xl glow-text ${scrolled ? "text-[#F4F1EA] " : "text-[#1C3434]"} `}
              >
                TechServe
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.div key={item.href}>
                  <Link href={item.href}>
                    <motion.div
                      className="relative overflow-hidden rounded-lg"
                      initial="initial"
                      whileHover="hover"
                    >
                      <motion.span
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-100 inline-block relative z-10 ${
                          scrolled
                            ? pathname === item.href
                              ? "text-red-500 text-bold"
                              : "text-blue-500"

                            : pathname === item.href
                              ? "text-yellow-500 text-bold"
                              : "text-darkGreenTextColor"
                        }`}
                        // ${scrolled ? ""text-white" " : "text-darkGreenTextColor"} `
                        

                        variants={{
                          hover: { color: "#FFFFFF" },
                        }}
                      >
                        {item.label}
                      </motion.span>
                      <motion.div
                        className={`absolute inset-0 ${scrolled ? "bg-darkBeige " : "bg-darkGreenTextColor"} `}
                        initial={{ width: pathname === item.href ? "100%" : 0 }}
                        animate={{ width: pathname === item.href ? "100%" : 0 }}
                        variants={{
                          hover: { width: "100%" },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200    
                ${scrolled ? "text-[#0bdb57]" : "text-[#432422]"}
                `}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-800/90 backdrop-blur-sm`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                className="relative overflow-hidden rounded-md"
                whileHover="hover"
              >
                <motion.span
                  className={`block px-3 py-2 text-base font-medium z-10 relative ${
                    pathname === item.href ? "text-white" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gray-700"
                  initial={{ width: pathname === item.href ? "100%" : 0 }}
                  animate={{ width: pathname === item.href ? "100%" : 0 }}
                  variants={{
                    hover: {
                      width: "100%",
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                  }}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
