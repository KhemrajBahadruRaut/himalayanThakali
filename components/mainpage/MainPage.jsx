"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/navbar/Navbar.jsx";
import Image from "next/image.js";

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

      {/* Short Intro Divider */}
      <div className="flex items-center justify-center gap-4 py-2 px-8">
        <div className="h-px  bg-linear-to-r from-transparent via-[#E9842C] to-transparent w-80" />
        <div className="flex items-center gap-2 text-[#E9842C] text-sm tracking-widest">
          <span className="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15-.723l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064zm0-3.852"
              />
            </svg>
          </span>
          <span>SHORT INTRO</span>
          {/* <span className="text-xl">✦</span> */}
        </div>
        <div className="h-px bg-linear-to-r from-transparent via-[#E9842C] to-transparent w-80" />
      </div>

      {/* About Section */}
      <section className="relative px-8 py-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative corner brackets */}
          <div className="relative border-l-4 border-[#D97634] pl-12 mb-8">
            <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#D97634]" />
          </div>

          <h2 className="text-4xl font-bold text-center mb-12">
            About Himalayan Thakali
          </h2>

          <p className="text-gray-300 text-center leading-relaxed max-w-4xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="relative border-r-4 border-[#D97634] pr-12 mt-8 flex justify-end">
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#D97634]" />
          </div>
        </motion.div>
      </section>

      {/* Visit Us Divider */}
      <div className="flex items-center justify-center gap-4 py-8 px-8">
        <div className="h-px bg-linear-to-r from-transparent via-[#E9842C] to-transparent w-80" />
        <div className="flex items-center gap-2 text-[#D97634] text-sm tracking-widest">
          <span className="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M8 14.5C10.5 11 12.5 8 12.5 6a4.5 4.5 0 1 0-9 0c0 2 2 5 4.5 8.5Z" />
                <path d="M10 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
              </g>
            </svg>
          </span>
          <span>VISIT US</span>
        </div>
        <div className="h-px bg-linear-to-r from-transparent via-[#E9842C] to-transparent w-80" />
      </div>

      {/* Contact Cards */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {/* Visit Us Card */}
          <motion.div
            className="bg-[#2A2A2A] p-12 text-center hover:bg-[#333333] transition-all duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#D97634]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-[#D97634] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="currentColor"
                      d="m25 42.5l-.8-.9C23.7 41.1 12 27.3 12 19c0-7.2 5.8-13 13-13s13 5.8 13 13c0 8.3-11.7 22.1-12.2 22.7zM25 8c-6.1 0-11 4.9-11 11c0 6.4 8.4 17.2 11 20.4c2.6-3.2 11-14 11-20.4c0-6.1-4.9-11-11-11"
                    />
                    <path
                      fill="currentColor"
                      d="M25 24c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3"
                    />
                  </svg>
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">Visit Us</h3>
              <p className="text-[#D97634] font-semibold mb-4">
                Mid Baneshwor, Kathmandu
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Nestled in the heart of Kathmandu's most vibrant cultural
                district
              </p>
            </div>
          </motion.div>

          {/* Opening Hours Card */}
          <motion.div
            className="bg-[#2A2A2A] p-12 text-center hover:bg-[#333333] transition-all duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#D97634]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-[#D97634] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21m-.93 4.186c.385 0 .697.313.697.698v4.884h4.884a.698.698 0 0 1 0 1.395H9.07a.7.7 0 0 1-.698-.698V6.28c0-.386.312-.699.698-.699"
                    />
                  </svg>
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">Opening Hours</h3>
              <p className="text-[#D97634] font-semibold mb-4">
                10:00 AM - 10:00 PM
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We welcome you to experience our culinary artistry throughout
                the day
              </p>
            </div>
          </motion.div>

          {/* Contact Us Card */}
          <motion.div
            className="bg-[#2A2A2A] p-12 text-center hover:bg-[#333333] transition-all duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#D97634]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-[#D97634] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"
                    />
                  </svg>
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-[#D97634] font-semibold mb-2">
                +977 0000000000
              </p>
              <p className="text-[#D97634] font-semibold mb-4">
                +977 0000000000
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                You can contact us directly for any queries
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
