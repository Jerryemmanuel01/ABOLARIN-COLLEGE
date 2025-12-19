"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Facilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facilities = [
    {
      title: "Modern Library",
      description:
        "Extensive collection of books, digital resources, and quiet study spaces with high-speed internet access for comprehensive learning",
      image: "/complex.png",
      color: "teal",
    },
    {
      title: "Science Laboratories",
      description:
        "Fully equipped labs for Physics, Chemistry, and Biology with modern equipment for hands-on learning experiences",
      image: "/labImage.png",
      color: "purple",
    },
    {
      title: "Computer/ICT Lab",
      description:
        "State-of-the-art computer laboratory with free laptops for students, high-speed internet, and modern technology for digital literacy",
      image: "/computerlab.png",
      color: "teal",
    },
    {
      title: "Sports Complex",
      description:
        "Multi-purpose sports facilities including basketball courts, football field, and fitness center for physical development",
      image: "/sportsactivites.png",
      color: "purple",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4">World-Class Facilities</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            State-of-the-art infrastructure designed to enhance learning and
            student development
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              className="group relative overflow-hidden rounded-2xl shadow-xl card-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t from-${facility.color}-900/80 to-transparent`}
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className={`heading-sm mb-3 text-${facility.color}-800`}>
                  {facility.title}
                </h3>
                <p className="text-neutral-600">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
