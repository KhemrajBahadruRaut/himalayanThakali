"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";

export default function HimalayantThakaliAbout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white overflow-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap");

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes drawCircle {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-in {
          animation: fadeInUp 1s ease-out forwards;
        }

        .delay-1 {
          animation-delay: 0.1s;
        }
        .delay-2 {
          animation-delay: 0.3s;
        }
        .delay-3 {
          animation-delay: 0.5s;
        }
        .delay-4 {
          animation-delay: 0.7s;
        }
        .delay-5 {
          animation-delay: 0.9s;
        }

        .decorative-circle {
          animation: float 6s ease-in-out infinite;
        }

        .dashed-circle {
          stroke-dasharray: 4 4;
        }

        .quote-mark {
          font-family: "Cormorant Garamond", serif;
          font-size: 4rem;
          line-height: 1;
          color: #d97634;
        }
      `}</style>

      {/* Decorative Background Elements */}
      <Navbar />

      <div className="hidden sm:flex">
        <div className="absolute top-40 flex justify-center items-center right-60 w-28 h-28 border-2 decorative-circle border-dashed  border-[#E9842C26] rounded-full">
          <div className="w-22 h-22 border-2  border-dashed border-[#E9842C26] bg-[#E9842C0D] rounded-full" />
        </div>
        <div className="absolute top-100 flex justify-center items-center right-200 w-28 h-28 border-2 decorative-circle border-dashed  border-[#E9842C26] rounded-full">
          <div className="w-22 h-22 border-2  border-dashed border-[#E9842C26] bg-[#E9842C0D] rounded-full" />
        </div>
      </div>
      <div className="inset-0 pointer-events-none overflow-hidden hidden sm:flex">
        <div className="absolute top-120 right-0 w-64 h-64 ">
          <svg viewBox="0 0 200 200" className="decorative-circle">
            <circle
              cx="100"
              cy="100"
              r="100"
              fill="none"
              stroke="#E9842C4D"
              strokeWidth="0.5"
              className="dashed-circle"
            />
            <circle
              className="dashed-circle"
              cx="100"
              cy="100"
              r="90"
              fill="#E9842C0D"
              stroke="#E9842C4D"
              strokeOpacity="100"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div className="absolute top-80 -left-30 w-64 h-64 ">
          <svg viewBox="0 0 200 200" className="decorative-circle">
            <circle
              cx="100"
              cy="100"
              r="100"
              fill="none"
              stroke="#E9842C4D"
              strokeWidth="0.5"
              className="dashed-circle"
            />
            <circle
              className="dashed-circle"
              cx="100"
              cy="100"
              r="90"
              fill="#E9842C0D"
              stroke="#E9842C4D"
              strokeOpacity="100"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-30">
        {/* Header Section */}
        <header
          className={`text-center mb-10 opacity-0 ${isVisible ? "animate-in" : ""}`}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px  md:w-56 bg-linear-to-r from-transparent to-[#D97634]" />
            <span
              className="text-[#D97634] text-sm tracking-[0.3em] font-light"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              ✧ OUR STORY ✧
            </span>
            <div className="h-px  md:w-56 bg-linear-to-l from-transparent to-[#D97634]" />
          </div>

          <h1
            className="text-3xl md:text-5xl mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
          >
            About Himalayan{" "}
            <span className="text-[#D97634] " style={{ fontWeight: 400 }}>
              Thakali
            </span>
          </h1>
        </header>

        {/* Intro Paragraphs */}
        <div
          className={`max-w-3xl mx-auto mb-24 opacity-0 ${isVisible ? "animate-in delay-1" : ""}`}
        >
          <p
            className="text-gray-300 leading-relaxed mb-6 text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <p
            className="text-gray-300 leading-relaxed mb-6 text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p
            className="text-gray-300 leading-relaxed text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat, nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        {/* Profile Section */}
        <div
          className={`sm:flex  gap-16 items-center max-w-5xl mx-auto mb-20 opacity-0 ${isVisible ? "animate-in delay-2" : ""}`}
        >
          {/* Profile Image */}
          <div className="relative flex justify-center ">
            <div className="relative">
              <div className="absolute inset-0 -m-6">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    fill="none"
                    stroke="#D97634"
                    strokeWidth="1"
                    className="dashed-circle"
                    strokeDasharray="8 8"
                  />
                </svg>
              </div>
              <div className="relative w-54 sm:w-64 h-54 sm:h-64 rounded-full overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Profile Image</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="relative  px-8 md:px-10">
            <div className="quote-mark absolute top-15 -left-4 md:-left-2 transform -scale-x-100  -scale-y-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#D97634"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                  d="M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448"
                />
              </svg>
            </div>
            <div className="relative pt-5 sm:pt-2">
              <h3
                className="text-2xl mb-4 text-center"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 400,
                }}
              >
                Lorem ipsum dolor
              </h3>
              <p
                className="text-center text-[#D97634]/70 text-sm mb-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Lorem ipsum
              </p>
              <p
                className="text-gray-300 leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div className="quote-mark absolute -bottom-4 right-0 md:-right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#D97634"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                  d="M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15c-2.886-.234-3.729-2.013-3.729-3.464c0-1.967 1.51-3.512 3.374-3.465c1.775-.047 3.817 1.311 4.039 4.448"
                />
              </svg>
            </div>
          </div>
        </div>

        {/*2nd Section */}
        <div
          className={`hidden sm:flex  gap-16 items-center max-w-5xl mx-auto mb-20 opacity-0 ${isVisible ? "animate-in delay-2" : ""}`}
        >
          {/* Quote */}
          <div className="relative  px-8 md:px-10">
            <div className="relative pt-5 sm:pt-2">
              <p
                className="text-gray-300 leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
          {/* Profile Image */}
          <div className="relative flex justify-center ">
            <div className="relative">
              <div className="absolute inset-0 -m-6">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    fill="none"
                    stroke="#D97634"
                    strokeWidth="1"
                    className="dashed-circle"
                    strokeDasharray="8 8"
                  />
                </svg>
              </div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Profile Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd section mobile view */}
        <div
          className={`sm:hidden gap-16 items-center max-w-5xl mx-auto mb-20 opacity-0 ${isVisible ? "animate-in delay-2" : ""}`}
        >
          {/* Profile Image */}
          <div className="relative flex justify-center ">
            <div className="relative">
              <div className="absolute inset-0 -m-6">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    fill="none"
                    stroke="#D97634"
                    strokeWidth="1"
                    className="dashed-circle"
                    strokeDasharray="8 8"
                  />
                </svg>
              </div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Profile Image</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="relative  px-8 md:px-10">
            <div className="relative pt-5 sm:pt-2">
              <p
                className="text-gray-300 leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
        </div>

        {/*3rd Section */}
        <div
          className={`sm:flex  gap-16 items-center max-w-5xl mx-auto mb-20 opacity-0 ${isVisible ? "animate-in delay-2" : ""}`}
        >
          {/* Profile Image */}
          <div className="relative flex justify-center ">
            <div className="relative">
              <div className="absolute inset-0 -m-6">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    fill="none"
                    stroke="#D97634"
                    strokeWidth="1"
                    className="dashed-circle"
                    strokeDasharray="8 8"
                  />
                </svg>
              </div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Profile Image</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="relative  px-8 md:px-10">
            <div className="relative pt-5 sm:pt-2">
              <p
                className="text-gray-300 leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
