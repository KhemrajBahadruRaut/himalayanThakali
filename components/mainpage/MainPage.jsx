"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/navbar/Navbar.jsx";
import Image from "next/image.js";
import ShortIntro from "./shortIntro/ShortIntro.jsx";
import VisitUs from "./visitUs/VisitUs.jsx";
import OurMenu from "./ourMenu/OurMenu.jsx";
import Testimonials from "./testimonials/Testimonials.jsx";
import Footer from "../layout/footer/Footer.jsx";

export default function MainPage() {

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className=" inset-0 pointer-events-none hidden sm:flex ">
        <div
          className="absolute top-20 right-45 w-20 h-20 border-2 border-dashed border-[#E9842C26] rounded-full"
        />

        <div
          className="absolute top-20 flex justify-center items-center right-170 w-28 h-28 border-2 border-dashed  border-[#E9842C26] rounded-full"
        >
          <div
            className="w-22 h-22 border-2  border-dashed border-[#E9842C26] bg-[#E9842C0D] rounded-full"
          />
        </div>

        <div
          className="absolute top-60 flex justify-center items-center right-180 w-12 h-12 border-2 border-dashed  border-[#E9842C26] rounded-full"
        >
          <div
            className="w-10 h-10 border-2  border-dashed border-[#E9842C26] bg-[#E9842C0D] rounded-full"
          />
        </div>
        <div
          className="absolute top-140 flex justify-center items-center right-180 w-12 h-12 border-2 border-dashed  border-[#E9842C26] rounded-full"
        />

        <div
          className="absolute top-170 flex justify-center items-center right-40 w-28 h-28 border-2 border-dashed  border-[#E9842C26] rounded-full"
        >
          <div
            className="w-20 h-20 border-2  border-dashed border-[#E9842C26] bg-[#E9842C0D] rounded-full"
          />
        </div>
      </div>
      <Navbar />

      <section className="relative px-6 py-12 md:px-8 pt-30 md:pt-33 flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12 overflow-hidden">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Authentic{" "}
            <span
              className="text-[#E9842C]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Thakali
            </span>
            <br />
            Taste Awaits You
          </h1>

          {/* Decorative Line - Centered on mobile, left-aligned on desktop */}
          <div className="mx-auto lg:mx-0 bg-linear-to-r from-transparent via-[#E9842C] to-transparent w-48 h-1 mb-8" />

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            Experience the heritage of the Himalayas through our traditional
            Thakali flavors, crafted with locally sourced ingredients and
            time-honored recipes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6">
            <motion.button
              className="px-8 py-4 bg-[#E9842C] text-black rounded font-semibold tracking-wide shadow-lg"
              whileHover={{ y: -3, backgroundColor: "#E88844" }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE OUR MENU
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-[#D97634] rounded text-[#D97634] font-semibold tracking-wide"
              whileHover={{ y: -3, backgroundColor: "#E9842C", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
            >
              OUR STORY
            </motion.button>
          </div>
        </motion.div>

        {/* Thali Image Container */}
        <motion.div
          className="flex-1 flex justify-center items-center relative w-full max-w-75 md:max-w-125 lg:max-w-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Outer decorative dashed circle - Hidden on very small screens for cleanliness */}
            <div
              className="absolute inset-0 border-3 border-dashed border-[#E9842C]/60 rounded-full animate-spin-slow"
              style={{ animationDuration: "45s" }}
            />

            {/* Orange background circle - Scales based on parent width */}
            <div className="w-[88%] h-[88%] rounded-full bg-linear-to-br from-[#E9842C] to-[#D97634] flex items-center justify-center shadow-2xl overflow-hidden p-6">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/mainpageimg/thakali.png"
                  alt="Himalayan Thakali Thali"
                  width={470}
                  height={470}
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500  "
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* short intro */}
      <ShortIntro />

      {/* visitUs section */}
      <VisitUs />

      {/* Our Menu */}
      <OurMenu />

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </div>
  );
}
