"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Adebayo Oluwaseun",
      class: "Class of 2023",
      quote:
        "ABOLARIN COLLEGE provided me with not just quality education, but also invaluable life skills. The teachers are dedicated and the facilities are excellent!",
      image: "/avatar1.png",
      hasImage: true,
    },
    {
      name: "Chidinma Nwosu",
      class: "Class of 2022",
      quote:
        "The holistic approach to education here shaped me into a well-rounded individual. I'm grateful for the opportunities and mentorship I received.",
      initials: "CN",
      hasImage: false,
    },
    {
      name: "Ibrahim Mohammed",
      class: "Class of 2023",
      quote:
        "From the modern labs to the supportive community, everything about ABOLARIN COLLEGE exceeded my expectations. Best decision I ever made!",
      initials: "IM",
      hasImage: false,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4">Student Testimonials</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Hear from our students about their experience at ABOLARIN COLLEGE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border-t-4"
              style={{
                borderTopColor:
                  index % 2 === 0
                    ? "var(--color-teal-500)"
                    : "var(--color-purple-500)",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex items-center mb-6">
                {testimonial.hasImage ? (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image!}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br ${
                      index % 2 === 0
                        ? "from-teal-500 to-teal-700"
                        : "from-purple-500 to-purple-700"
                    }`}
                  >
                    {testimonial.initials}
                  </div>
                )}
                <div className="ml-4">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-neutral-600 text-sm">
                    {testimonial.class}
                  </p>
                </div>
              </div>
              <p className="text-neutral-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
