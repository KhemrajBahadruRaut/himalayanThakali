import React from "react";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const FACEBOOK_URL = process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/";
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/";

const Footer = () => {
  return (
    <>
      <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#D97634] to-transparent" />

      <footer className="bg-[#1c1c1c] text-gray-300">
        <div className="mx-auto max-w-7xl space-y-10 px-6 py-14 text-center">
          <div className="space-y-2">
            <p className="text-xs tracking-widest text-gray-400">NOW AVAILABLE ON</p>
            <div className="flex justify-center gap-10 text-sm">
              <span>Pathao Foods</span>
              <span>Foodmandu</span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm tracking-widest" aria-label="Footer navigation">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/aboutus" },
              { name: "MENU", path: "/menu" },
              { name: "GALLERY", path: "/gallery" },
              { name: "BLOGS", path: "/blogs" },
              { name: "CONTACT US", path: "/contact-us" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="transition-colors hover:text-orange-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="space-y-3">
            <p className="text-xs tracking-widest text-gray-400">FOLLOW US</p>
            <div className="flex justify-center gap-6">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="transition-colors hover:text-orange-500"
              >
                <Facebook size={22} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="transition-colors hover:text-orange-500"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          <div className="space-y-2 text-xs text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Himalayan Thakali. All Rights Reserved
            </p>
            <p className="text-gray-500">Terms of Service | Privacy Policy</p>

            <p className="flex items-center justify-center gap-2">Powered By</p>
            <div className="flex justify-center">
              <a
                href="https://gr8.com.np"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Powered by GR8 Nepal"
              >
                <Image
                  src="/logo/GR8-Nepal-Private-Limited-Logo.webp"
                  alt="GR8 Nepal Private Limited"
                  width={48}
                  height={32}
                  className="h-8 w-12"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
