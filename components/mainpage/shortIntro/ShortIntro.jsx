import React from 'react'
import { motion } from "framer-motion";

const ShortIntro = () => {
  return (
    <div>
      
      {/* Short Intro Divider */}
      <div className="flex items-center justify-center gap-4 pt-20 px-8">
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
      <section className="relative px-8 py-5  max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative corner brackets */}
          <div className="relative border-l-4 border-[#E9842C] pl-12 mb-8">
            <div className="hidden sm:flex absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#E9842C]" />
          </div>

          <h2 className="text-3xl sm:text-4xl  font-bold text-center mb-12">
            About Himalayan Thakali
          </h2>

          <p className="text-gray-300 sm:px-8 lg:px-0 text-justify leading-relaxed max-w-4xl  mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="relative border-r-4 border-[#E9842C] pr-12 mt-8 flex justify-end">
            <div className="hidden sm:flex absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#E9842C]" />
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default ShortIntro
