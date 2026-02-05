"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LEFT_MENU = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/aboutus" },
  { label: "MENU", path: "/menu" },
  { label: "GALLERY", path: "/gallery" },
];

const RIGHT_MENU = [
  { label: "CAREER", path: "/career" },
  { label: "SERVICES", path: "/services" },
  { label: "BLOGS", path: "/blogs" },
  { label: "CONTACT US", path: "/contact-us" },
];

const ALL_MENU = [...LEFT_MENU, ...RIGHT_MENU];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [shrink, setShrink] = useState(false);

  const { scrollY } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    let last = scrollY.get();

    return scrollY.on("change", (y) => {
      setHidden(y > last && y > 120);
      setShrink(y > 80);
      last = y;
    });
  }, [scrollY]);

  return (
    <motion.nav
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md pt-3"
    >
      {/* Desktop */}
      <div className="hidden lg:flex px-8 items-center justify-center">
        <div className="flex items-center  text-white  gap-15 text-sm tracking-wider">
          {LEFT_MENU.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              path={item.path}
              pathname={pathname}
            />
          ))}

          <img
            src="/logo/himalayan-thakalil-logo.png"
            className={`transition-all duration-300 ${
              shrink ? "w-23" : "w-28"
            }`}
          />

          {RIGHT_MENU.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              path={item.path}
              pathname={pathname}
            />
          ))}
        </div>
      </div>

      <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent flex-1 mt-3 hidden lg:flex" />

      {/* Mobile */}
      <div className="lg:hidden px-4 flex justify-between items-center ">
        <img
          src="/logo/himalayan-thakalil-logo.png"
          className="w-24"
        />
        <button onClick={() => setOpen(!open)} className="text-white">☰</button>
      </div>

      <div className="h-px bg-linear-to-r from-transparent  via-[#D97634] to-transparent flex-1 mt-3 lg:hidden" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="inline-flex flex-col px-6 py-6 text-white gap-5">
              {ALL_MENU.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  path={item.path}
                  pathname={pathname}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavItem = ({ label, path, pathname, onClick }) => {
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      onClick={onClick}
      className={`relative group transition ${
        isActive ? "text-[#D97634]" : ""
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-[#D97634] transition-all ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

export default Navbar;
