"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      title: "Completely Free Education",
      description:
        "Free tuition, hostels, meals, laptops, uniforms, internet, and constant electricity. No financial barriers to quality education.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Royal Mentorship",
      description:
        "Learn directly from Oba Adedokun Abolarin, who actively teaches and mentors students. Leadership by example from a traditional ruler.",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      title: "Holistic Development",
      description:
        "Comprehensive education focusing on academics, character, and personal growth. Modern facilities and resources for well-rounded development.",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20"
      style={{ background: "var(--gradient-purple)" }}
    >
      <div className="container-custom text-white">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            The Abolarin College Difference
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience education redefined through service, accessibility, and
            excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="glass-card rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={reason.icon}
                  />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">{reason.title}</h3>
              <p className="opacity-90">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
