"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/navbar/Navbar.jsx";
import Image from "next/image.js";
import ShortIntro from "./shortIntro/ShortIntro.jsx"
import VisitUs from "./visitUs/VisitUs.jsx"

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
<ShortIntro/>

  {/* visitUs section */}
  <VisitUs/>
      {/* Our Menu Divider */}
      <div className="flex items-center justify-center gap-4 py-8 px-8">
        <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent flex-1" />
        <div className="flex items-center gap-2 text-[#D97634] text-sm tracking-widest">
          <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5M16 4h2a2 2 0 0 1 1.73 1M8 18h1"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></g></svg></span>
          <span>OUR MENU</span>
        </div>
        <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent flex-1" />
      </div>

      {/* Dishes We Offer Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-6">
            Dishes We Offer
          </h2>
          <p className="text-gray-400 text-center leading-relaxed max-w-2xl mx-auto mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <div className="grid grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Veg / Chicken Thali",
                description:
                  "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gundruk",
                price: "Rs. 450/ 550",
                image: null,
              },
              {
                title: "Veg / Chicken Thali",
                description:
                  "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gundruk",
                price: "Rs. 500",
                image: null,
              },
              {
                title: "Veg / Chicken Thali",
                description:
                  "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gundruk",
                price: "Rs. 450/ 550",
                image: null,
              },
              {
                title: "Veg / Chicken Thali",
                description:
                  "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gundruk",
                price: "Rs. 500",
                image: null,
              },
            ].map((dish, i) => (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Image placeholder - user will add their own images */}
                <div className="w-full aspect-square rounded-full bg-[#2A2A2A] mb-6 overflow-hidden border-4 border-transparent group-hover:border-[#D97634] transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    {/* This is where the user's thali image will go */}
                    <span className="text-sm">Add Thali Image</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{dish.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-15">
                  {dish.description}
                </p>
                <p className="text-white font-semibold">{dish.price}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              className="px-10 py-4 bg-[#D97634] text-white font-semibold tracking-wide hover:bg-[#E88844] transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              VIEW FULL MENU
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Divider */}
      <div className="flex items-center justify-center gap-4 py-8 px-8">
        <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent w-80" />
        <div className="flex items-center gap-2 text-[#D97634] text-sm tracking-widest">
          <span className="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              viewBox="0 0 28 24"
            >
              <path
                fill="currentColor"
                d="m14 2l-.128-.001c-2.098 0-4.102.399-5.942 1.124l.11-.038a11.3 11.3 0 0 0-4.4 2.922l-.007.007A5.88 5.88 0 0 0 2 9.994v.005a5.68 5.68 0 0 0 1.131 3.351l-.011-.015a9.6 9.6 0 0 0 3.096 2.719l.049.025l1.36.782l-.426 1.498A11.2 11.2 0 0 1 6.077 21.1l.029-.054a15.5 15.5 0 0 0 4.313-2.686l-.017.014l.672-.594l.89.094a17 17 0 0 0 2.028.125h.004l.128.001c2.098 0 4.102-.399 5.942-1.124l-.11.038a11.3 11.3 0 0 0 4.4-2.922l.007-.007c1.009-1.025 1.632-2.432 1.632-3.984s-.623-2.96-1.633-3.985l.001.001a11.25 11.25 0 0 0-4.329-2.904l-.078-.025c-1.73-.687-3.735-1.086-5.833-1.086l-.132.001h.007zm14 8a7.76 7.76 0 0 1-1.884 5.033l.009-.01a12.7 12.7 0 0 1-5.008 3.611l-.086.03c-2.023.846-4.374 1.337-6.839 1.337L13.99 20H14q-1.2-.003-2.363-.134l.097.009a17 17 0 0 1-7.069 3.756l-.118.026c-.503.145-1.107.266-1.726.339l-.055.005h-.08a.62.62 0 0 1-.422-.164a.8.8 0 0 1-.249-.424l-.001-.005v-.016a.2.2 0 0 1-.027-.102q0-.05.021-.091l-.001.001a.4.4 0 0 0 .031-.159v-.002q-.008-.031.07-.149l.094-.141l.11-.133l.125-.141q.11-.125.484-.539l.539-.594q.164-.18.484-.617c.174-.231.343-.493.491-.767l.017-.033q.187-.359.422-.922c.137-.317.276-.712.39-1.117l.017-.07a11.6 11.6 0 0 1-3.844-3.405l-.024-.035A7.52 7.52 0 0 1-.001 9.999v-.002a7.76 7.76 0 0 1 1.884-5.033l-.009.01a12.7 12.7 0 0 1 5.008-3.611l.086-.03C8.991.487 11.342-.004 13.807-.004l.202.001h-.01l.192-.001c2.465 0 4.816.491 6.959 1.381l-.12-.044a12.7 12.7 0 0 1 5.078 3.622l.015.018a7.75 7.75 0 0 1 1.875 5.021v.003z"
              />
            </svg>
          </span>
          <span>Testimonials</span>
        </div>
        <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent w-80" />
      </div>

      {/* Guest Experiences Section */}
      <section className="px-8 py-20 max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-6">
            Guest Experiences
          </h2>
          <p className="text-gray-400 text-center leading-relaxed max-w-2xl mx-auto mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="relative">
            {/* Large opening quote */}
            <div className="absolute -left-8 -top-8 text-[#D97634] text-8xl opacity-50 leading-none">
              "
            </div>

            {/* Testimonial Card */}
            <motion.div
              className="border-2 border-[#D97634] rounded-lg p-12 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-center leading-relaxed text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#D97634] flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">Lorem Ipsum dolor</p>
                  <p className="text-[#D97634] text-sm">Lorem Ipsum</p>
                </div>
              </div>
            </motion.div>

            {/* Large closing quote */}
            <div className="absolute -right-8 -bottom-8 text-[#D97634] text-8xl opacity-50 leading-none">
              "
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <div className="w-3 h-3 rounded-full bg-[#D97634]" />
            <div className="w-3 h-3 rounded-full bg-gray-600" />
            <div className="w-3 h-3 rounded-full bg-gray-600" />
            <div className="w-3 h-3 rounded-full bg-gray-600" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
