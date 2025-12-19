"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: "100%",
      label: "Free Tuition",
      gradient: "from-teal-500 to-teal-300",
    },
    {
      value: "Free",
      label: "Hostels & Meals",
      gradient: "from-purple-500 to-purple-300",
    },
    {
      value: "Free",
      label: "Laptops & Uniforms",
      gradient: "from-teal-500 to-teal-300",
    },
    {
      value: "24/7",
      label: "Electricity & Internet",
      gradient: "from-purple-500 to-purple-300",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4">Education Without Barriers</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            At Abolarin College, we believe education should be accessible to
            all. Founded by Oba Adedokun Abolarin, the traditional ruler of
            Oke-Ila, Osun State, our college breaks down financial barriers to
            provide world-class education—completely free.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center p-6 rounded-xl bg-gradient-to-br ${stat.gradient} card-hover`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="heading-lg text-white mb-2">{stat.value}</div>
              <p className="text-white/90 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 rounded-2xl border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-white card-hover"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="heading-sm mb-4 text-teal-800">Our Mission</h3>
            <p className="text-neutral-700 leading-relaxed">
              To provide comprehensive, barrier-free education that empowers
              students to reach their full potential. Through free tuition,
              resources, and dedicated mentorship, we ensure every student has
              access to quality learning regardless of financial background.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white card-hover"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="heading-sm mb-4 text-purple-800">
              Leadership Through Service
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Founded on the principle that "true royalty is about service, not
              status," Oba Adedokun Abolarin actively teaches and mentors
              students. His hands-on approach exemplifies leadership by example,
              shaping the next generation of servant leaders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
