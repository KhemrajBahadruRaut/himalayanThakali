'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HimalayantThakaliAbout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap');
        
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
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

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.5s; }
        .delay-4 { animation-delay: 0.7s; }
        .delay-5 { animation-delay: 0.9s; }

        .decorative-circle {
          animation: float 6s ease-in-out infinite;
        }

        .dashed-circle {
          stroke-dasharray: 10 10;
          animation: drawCircle 3s ease-out forwards;
        }

        .quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem;
          line-height: 1;
          color: #d4a574;
          opacity: 0.5;
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="decorative-circle">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#d4a574" strokeWidth="1" className="dashed-circle" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#d4a574" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-20 w-48 h-48 opacity-10" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 200 200" className="decorative-circle">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#d4a574" strokeWidth="1" className="dashed-circle" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <header className={`text-center mb-20 opacity-0 ${isVisible ? 'animate-in' : ''}`}>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4a574]" />
            <span className="text-[#d4a574] text-sm tracking-[0.3em] font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ✧ OUR STORY ✧
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4a574]" />
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
            About Himalayan <span className="text-[#d4a574] italic" style={{ fontWeight: 400 }}>Thakali</span>
          </h1>
        </header>

        {/* Intro Paragraphs */}
        <div className={`max-w-3xl mx-auto mb-24 opacity-0 ${isVisible ? 'animate-in delay-1' : ''}`}>
          <p className="text-gray-300 leading-relaxed mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.95rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.95rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <p className="text-blue-400 hover:text-blue-300 transition-colors leading-relaxed text-center cursor-pointer" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.95rem' }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat, 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Profile Section */}
        <div className={`grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto mb-32 opacity-0 ${isVisible ? 'animate-in delay-2' : ''}`}>
          {/* Profile Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -m-4">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <circle cx="150" cy="150" r="140" fill="none" stroke="#d4a574" strokeWidth="1" className="dashed-circle" strokeDasharray="8 8" />
                </svg>
              </div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-[#d4a574]/30">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Profile Image</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="relative px-8 md:px-0">
            <div className="quote-mark absolute -top-4 -left-2 md:-left-8">"</div>
            <div className="relative">
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: '#d4a574' }}>
                Lorem ipsum dolor
              </h3>
              <p className="text-[#d4a574]/70 text-sm mb-6 italic" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Lorem ipsum
              </p>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.9rem' }}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="quote-mark absolute -bottom-4 right-0 md:-right-8 rotate-180">"</div>
          </div>
        </div>

        {/* Bottom Text Block */}
        <div className={`max-w-2xl ml-auto mb-24 opacity-0 ${isVisible ? 'animate-in delay-3' : ''}`}>
          <p className="text-gray-300 leading-relaxed mb-6 text-right" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.9rem' }}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <p className="text-gray-300 leading-relaxed text-right" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.9rem' }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Logo Sections */}
        <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">
          {/* First Logo */}
          <div className={`flex flex-col items-center md:items-end text-center md:text-right opacity-0 ${isVisible ? 'animate-in delay-4' : ''}`}>
            <div className="relative mb-8">
              <svg viewBox="0 0 200 200" className="w-48 h-48">
                <circle cx="100" cy="100" r="95" fill="none" stroke="#d4a574" strokeWidth="1" className="dashed-circle" strokeDasharray="6 6" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold tracking-wider mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    HIMALAYAN
                  </div>
                  <div className="text-3xl text-[#d4a574] italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                    THAKALI
                  </div>
                  <div className="mt-2">
                    <svg viewBox="0 0 100 30" className="w-20 mx-auto">
                      <path d="M10,25 L20,5 L30,20 L40,10 L50,25 L60,15 L70,22 L80,8 L90,20" fill="none" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.9rem' }}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Second Logo */}
          <div className={`flex flex-col items-center md:items-start text-center md:text-left opacity-0 ${isVisible ? 'animate-in delay-5' : ''}`}>
            <div className="relative mb-8">
              <svg viewBox="0 0 200 200" className="w-48 h-48">
                <circle cx="100" cy="100" r="95" fill="none" stroke="#d4a574" strokeWidth="1" className="dashed-circle" strokeDasharray="6 6" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold tracking-wider mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    HIMALAYAN
                  </div>
                  <div className="text-3xl text-[#d4a574] italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                    THAKALI
                  </div>
                  <div className="mt-2">
                    <svg viewBox="0 0 100 30" className="w-20 mx-auto">
                      <path d="M10,25 L20,5 L30,20 L40,10 L50,25 L60,15 L70,22 L80,8 L90,20" fill="none" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.9rem' }}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}