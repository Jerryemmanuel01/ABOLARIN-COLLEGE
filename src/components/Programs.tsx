"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      title: "Sciences",
      description:
        "Biology, Chemistry, Physics, and Mathematics programs with modern laboratory facilities",
      features: [
        "Advanced Lab Equipment",
        "Research Opportunities",
        "Expert Instructors",
      ],
      gradient: "from-purple-500 to-purple-700",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      title: "Arts & Humanities",
      description:
        "Literature, Languages, History, and Social Sciences fostering critical thinking",
      features: [
        "Critical Analysis Skills",
        "Creative Expression",
        "Cultural Studies",
      ],
      gradient: "from-teal-600 to-teal-800",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
    {
      title: "Technology",
      description:
        "Computer Science, IT, and Digital Media preparing students for the digital age",
      features: [
        "Modern Computing Labs",
        "Coding & Programming",
        "Digital Innovation",
      ],
      gradient: "from-purple-600 to-purple-800",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      title: "Business Studies",
      description:
        "Economics, Accounting, and Entrepreneurship developing future business leaders",
      features: [
        "Practical Business Skills",
        "Financial Literacy",
        "Leadership Training",
      ],
      gradient: "from-teal-500 to-teal-700",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  return (
    <section id="programs" ref={ref} className="py-20 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4">Academic Programs</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive programs designed to prepare students for successful
            careers and lifelong learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border-t-4 border-transparent"
              style={{
                borderTopColor: `var(--color-${
                  index % 2 === 0 ? "purple" : "teal"
                }-600)`,
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-6`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={program.icon}
                  />
                </svg>
              </div>
              <h3 className="heading-sm mb-3">{program.title}</h3>
              <p className="text-neutral-600 mb-4">{program.description}</p>
              <ul className="text-sm text-neutral-600 space-y-2">
                {program.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
