import React from 'react'
import {motion} from "framer-motion"

const Testimonials = () => {
  return (
    <div>
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
      <section className="px-8 py-8 max-w-6xl mx-auto mb-20">
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
  )
}

export default Testimonials
