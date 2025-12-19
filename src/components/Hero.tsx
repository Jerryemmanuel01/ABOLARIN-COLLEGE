"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with lighter overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="ABOLARIN COLLEGE Campus"
          fill
          className="object-cover"
          priority
        />
        {/* Lighter gradient for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/75 via-primary-800/65 to-primary-900/80" />
      </div>

      {/* Enhanced Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center text-white py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Premium content box with glassmorphism */}
          <motion.div
            className="backdrop-blur-md bg-primary-900/30 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-6 px-6 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-400/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-teal-300 font-semibold text-sm md:text-base">
                🎓 Founded by Oba Adedokun Abolarin
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="heading-xl mb-6 text-white"
              style={{
                textShadow:
                  "0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ABOLARIN COLLEGE
            </motion.h1>

            {/* Tagline with gradient */}
            <motion.p
              className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-500 via-purple-500 to-teal-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Where Education is Truly Free for All
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white leading-relaxed"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience world-class education with free tuition, hostels,
              meals, laptops, uniforms, and more. True royalty is about service,
              not status.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="#programs"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50"
              >
                <span className="relative z-10">Explore Programs</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#0a2647] hover:scale-105 hover:shadow-2xl"
              >
                Apply Now
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/70 text-sm">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
