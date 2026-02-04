"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/navbar/Navbar.jsx";
import Image from "next/image.js";
import ShortIntro from "./shortIntro/ShortIntro.jsx";
import VisitUs from "./visitUs/VisitUs.jsx";
import OurMenu from "./ourMenu/OurMenu.jsx";
import Testimonials from "./testimonials/Testimonials.jsx"
import Footer from "../layout/footer/Footer.jsx"

export default function MainPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="fixed inset-0 pointer-events-none opacity-10">
        <div 
          className="absolute top-20 right-10 w-64 h-64 border-2 border-[#D97634] rounded-full"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute top-40 left-20 w-48 h-48 border-2 border-dashed border-[#D97634] rounded-full"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-40 left-40 w-56 h-56 border-2 border-[#D97634] rounded-full"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </div> */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-8 py-20 flex items-center justify-between max-w-7xl mx-auto">
        <motion.div
          className="flex-1 pr-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Authentic{" "}
            <span
              className="text-[#D97634]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Thakali
            </span>
            <br />
            Taste Awaits You
          </h1>

          <div className=" bg-linear-to-r from-transparent via-[#E9842C] to-transparent w-54 h-1 mb-8" />

          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <div className="flex gap-6 ">
            <motion.button
              className="px-8 py-3 bg-[#D97634] text-white font-semibold tracking-wide hover:bg-[#E88844] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              EXPLORE OUR MENU
            </motion.button>
            <motion.button
              className="px-8 py-3 border-2 border-[#D97634] text-[#D97634] font-semibold tracking-wide hover:bg-[#D97634] hover:text-white transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              OUR STORY
            </motion.button>
          </div>
        </motion.div>

        {/* Thali Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative">
            {/* Outer decorative circle */}
            <div
              className="hidden md:flex absolute inset-0 border-2 border-dashed border-[#D97634] rounded-full animate-spin-slow"
              style={{ animationDuration: "30s" }}
            />
            {/* Orange background circle */}
            <div className="w-120 h-120 rounded-full hidden md:flex items-center justify-center shadow-2xl">
              <div className="w-105 h-105 rounded-full bg-linear-to-br from-[#FF8C42] to-[#D97634] flex items-center justify-center shadow-2xl">
                <Image
                  src="/mainpageimg/thakali.png"
                  alt="Himalayan Thakali Logo"
                  width={380}
                  height={60}
                  priority
                />
              </div>
              {/* Inner white circle with thali */}
            </div>
          </div>
        </motion.div>
      </section>

      {/* short intro */}
      <ShortIntro />

      {/* visitUs section */}
      <VisitUs />

      {/* Our Menu */}
      <OurMenu/>

      {/* Testimonials */}
      <Testimonials/>

    <Footer/>
    </div>
  );
}
