import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurMenu() {
  return (
    <div>
      {/* Our Menu Divider */}
      <div className="flex items-center justify-center gap-4 py-8 px-8">
        <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent w-80" />
        <div className="flex items-center gap-2 text-[#D97634] text-sm tracking-widest">
          <span className="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" />
                <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5M16 4h2a2 2 0 0 1 1.73 1M8 18h1" />
                <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
              </g>
            </svg>
          </span>
          <span>OUR MENU</span>
        </div>
        <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent w-80" />
      </div>

      {/* Dishes We Offer Section */}
      <section className="px-8 py-10 max-w-7xl mx-auto">
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

          <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Veg / Chicken Thali",
                description:
                  "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gundruk",
                price: "Rs. 450/ 550",
                image: "/thakali-plates/thakali.png",
              },
              {
                title: "Veg / Chicken Thali",
                description:
                  "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gundruk",
                price: "Rs. 500",
                image: "/thakali-plates/p4.png",
              },
              {
                title: "Veg / Chicken Thali",
                description:
                  "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gundruk",
                price: "Rs. 450/ 550",
                image: "/thakali-plates/thakali.png",
              },
              {
                title: "Veg / Chicken Thali",
                description:
                  "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gundruk",
                price: "Rs. 500",
                image: "/thakali-plates/p4.png",
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
                  <div className="w-full  aspect-square rounded-full bg-[#2A2A2A] mb-6 overflow-hidden border-4 border-transparent group-hover:border-[#D97634] transition-all duration-300">
                    {dish.image ? (
                      <Image
                        src={dish.image}
                        alt={dish.title}
                        width={300}
                        height={300}
                        className="w-full h-full border object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
                        Image Coming Soon
                      </div>
                    )}
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
    </div>
  );
}
