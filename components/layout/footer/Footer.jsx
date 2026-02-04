import React from "react";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <>
            <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent flex-1" />

      <footer className="bg-[#1c1c1c] text-gray-300 ">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center space-y-10">
          {/* Availability */}
          <div className="space-y-2">
            <p className="text-xs tracking-widest text-gray-400">
              NOW AVAILABLE ON
            </p>
            <div className="flex justify-center gap-10 text-sm">
              <span>Pathao Foods</span>
              {/* <span className="text-orange-500">·</span> */}
              <span>Foodmandu</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm tracking-widest">
            {[
              "HOME",
              "ABOUT US",
              "MENU",
              "CSR",
              "GALLERY",
              "SERVICES",
              "BLOGS",
              "CONTACT US",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="space-y-3">
            <p className="text-xs tracking-widest text-gray-400">FOLLOW US</p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-orange-500 transition-colors"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-orange-500 transition-colors"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-400 space-y-2">
            <p>
              © {new Date().getFullYear()} Himalayan Thakali. All Rights
              Reserved |{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Terms of Services
              </a>{" "}
              |{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Privacy Policy
              </a>
            </p>

            <p className="flex justify-center items-center gap-2">
              Powered By
            </p>
            <div className="flex justify-center">
                <img src="/logo/GR8-Nepal-Private-Limited-Logo.webp" alt="gr8.com.np" className="h-8 w-12" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
