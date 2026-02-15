import React from "react";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const FACEBOOK_URL =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ||
  "https://www.facebook.com/Himalayan.Thakali.Midbaneshwor";
const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  "https://www.instagram.com/himalayanthakali?fbclid=IwY2xjawP-drVleHRuA2FlbQIxMABicmlkETF4b2pHRU1pa1NXaUtEUFpyc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvwKxT5e5tfu0ztMKIUQWKssLWSS9nbGDp_5JNzt0fnITrzHsRDlY1NhAkOc_aem_CqAfsv-xMiyP5KSPzkjp5w";

const Footer = () => {
  return (
    <>
      <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#D97634] to-transparent" />

      <footer className="bg-[#1c1c1c] text-gray-300">
        <div className="mx-auto max-w-7xl space-y-10 px-6 py-14 text-center">
          <div className="space-y-2">
            <p className="text-xs tracking-widest text-gray-400">
              NOW AVAILABLE ON
            </p>
            <div className="flex justify-center gap-10 text-sm">
              <a
                href="https://food.pathao.com/restaurants/guydenzs/himalayan-thakali"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order Himalayan Thakali from Pathao Foods"
              >
                <span>Pathao Foods</span>
              </a>

              <a
                href="https://foodmandu.com/Restaurant/Details/2484"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order Himalayan Thakali from Foodmandu"
              >
                <span>Foodmandu</span>
              </a>
            </div>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm tracking-widest"
            aria-label="Footer navigation"
          >
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
              &copy; {new Date().getFullYear()} Himalayan Thakali. All Rights
              Reserved
            </p>
            <p className="text-[#E9842C]">
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
              {" | "}
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </p>
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
