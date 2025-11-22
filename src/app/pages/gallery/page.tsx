"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Weave helped me generate a job-ready cover letter within seconds. It perfectly matched my skills to the role!",
    name: "Aarav Mehta",
    role: "Software Engineer",
    img: "/images/testi1.png",
  },
  {
    id: 2,
    text: "The best tool for creating personalized cover letters. Fast, smart, and incredibly accurate.",
    name: "Priya Sharma",
    role: "Product Designer",
    img: "/images/testi2.png",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);

  const item = testimonials[index];

  return (
    <section className="w-full flex flex-col items-center px-4 md:px-10 py-20 font-poppins">

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">
        What Our Users Say
      </h1>

      {/* Card Container */}
      <div className="relative w-full max-w-4xl">

        {/* Layered Background Cards */}
        <div className="absolute inset-0 translate-y-6 md:translate-y-8 bg-yellow-400 rounded-3xl shadow-xl scale-90" />
        <div className="absolute inset-0 translate-y-3 md:translate-y-5 bg-[#d2d2d2] rounded-3xl shadow-xl scale-95" />

        {/* Main Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 bg-black text-white rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-2xl"
          >
            {/* Text Section */}
            <div>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                {item.text}
              </p>
              <p className="text-sm md:text-base text-gray-300">
                {item.name}, {item.role}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <Image
                src={item.img}
                alt={item.name}
                width={350}
                height={350}
                className="rounded-xl object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={prev}
          className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow-md"
        >
          <ArrowLeft size={28} />
        </button>

        <button
          onClick={next}
          className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow-md"
        >
          <ArrowRight size={28} />
        </button>
      </div>
    </section>
  );
}
