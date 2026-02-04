import React from 'react'
import {motion} from "framer-motion";
const VisitUs = () => {
  return (
    <div>
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

    </div>
  )
}

export default VisitUs
