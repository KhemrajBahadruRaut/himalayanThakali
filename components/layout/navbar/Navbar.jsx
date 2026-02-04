import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const LEFT_MENU = ["HOME", "ABOUT US", "MENU", "GALLERY"];
const RIGHT_MENU = ["CAREER", "SERVICES", "BLOGS", "CONTACT US"];
const ALL_MENU = [...LEFT_MENU, ...RIGHT_MENU];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");
  const [shrink, setShrink] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    let last = scrollY.get();

    return scrollY.on("change", (y) => {
      setHidden(y > last && y > 120);
      setShrink(y > 80);
      last = y;
    });
  }, [scrollY]);

  // Scroll spy
  useEffect(() => {
    const handler = () => {
      ALL_MENU.forEach((item) => {
        const id = item.toLowerCase().replace(" ", "-");
        const el = document.getElementById(id);

        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md pt-3 "
    >
      {/* Desktop */}
      <div className="hidden lg:flex px-8 items-center justify-center">
        <div className="flex items-center gap-15 text-sm tracking-wider">

          {LEFT_MENU.map((item) => (
            <NavItem key={item} label={item} active={active} />
          ))}

          <img
            src="/logo/himalayan-thakalil-logo.png"
            className={`transition-all duration-300 ${
              shrink ? "w-23" : "w-28"
            }`}
          />

          {RIGHT_MENU.map((item) => (
            <NavItem key={item} label={item} active={active} />
          ))}
        </div>
      </div>
            <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent flex-1 mt-3 hidden lg:flex" />


      {/* Mobile */}
      <div className="lg:hidden px-4 flex justify-between items-center">
        <img src="/logo/himalayan-thakalil-logo.png" className="w-24" />

        <button onClick={() => setOpen(!open)}>☰</button>
      </div>
            <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent flex-1 mt-3 lg:hidden " />


      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {ALL_MENU.map((item) => (
                <NavItem
                  key={item}
                  label={item}
                  active={active}
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

const NavItem = ({ label, active, onClick }) => {
  const id = label.toLowerCase().replace(" ", "-");

  return (
    <a
      onClick={onClick}
      href={`#${id}`}
      className={`relative group transition ${
        active === id ? "text-[#D97634]" : ""
      }`}
    >
      {label}

      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-[#D97634] transition-all ${
          active === id ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
};

export default Navbar;
