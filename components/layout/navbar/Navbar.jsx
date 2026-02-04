import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LEFT_MENU = ["HOME", "ABOUT US", "MENU", "GALLERY"];
const RIGHT_MENU = ["CAREER", "SERVICES", "BLOGS", "CONTACT US"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 ">
      {/* ================= Desktop ================= */}
      <div className="hidden lg:flex px-8 py-3 items-center justify-center">
        <motion.div
          className="flex items-center gap-12 text-sm tracking-wider"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* LEFT MENU */}
          {LEFT_MENU.map((item) => (
            <NavItem key={item} label={item} />
          ))}

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-12"
          >
            <img
              src="/logo/himalayan-thakalil-logo.png"
              alt="Himalayan Thakali Logo"
              className="w-40 h-20"
              // priority
            />
          </motion.div>

          {/* RIGHT MENU */}
          {RIGHT_MENU.map((item) => (
            <NavItem key={item} label={item} />
          ))}
        </motion.div>
      </div>
      <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent flex-1 mt-3 hidden lg:flex" />

      {/* ================= Mobile ================= */}
      <div className="lg:hidden px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <img
          src="/logo/himalayan-thakalil-logo.png"
          alt="Himalayan Thakali Logo"
          className="w-40 h-20"
          // priority
        />

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="text-white text-2xl"
        >
          ☰
        </button>
      </div>
      <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent flex-1 mt-3 lg:hidden " />

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-[#2A2A2A]"
          >
            <div className="flex flex-col px-6 py-6 gap-5 text-sm tracking-wider">
              {[...LEFT_MENU, ...RIGHT_MENU].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#D97634] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavItem = ({ label }) => (
  <a
    href={`#${label.toLowerCase().replace(" ", "-")}`}
    className="hover:text-[#D97634] transition-colors duration-300 relative group"
  >
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D97634] group-hover:w-full transition-all duration-300" />
  </a>
);

export default Navbar;
