"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "AI Generated Cover Letter",
    img: "/gallery/sample1.png",
  },
  {
    id: 2,
    title: "Resume Parsing Preview",
    img: "/gallery/sample2.png",
  },
  {
    id: 3,
    title: "Job Description Analyzer",
    img: "/gallery/sample3.png",
  },
  {
    id: 4,
    title: "Tone Selection",
    img: "/gallery/sample4.png",
  },
  {
    id: 5,
    title: "Saved Letters Dashboard",
    img: "/gallery/sample5.png",
  },
  {
    id: 6,
    title: "PDF Download Preview",
    img: "/gallery/sample6.png",
  },
];

export default function GallerySection() {
  return (
    <section className="px-6 md:px-20 py-20 bg-white font-poppins">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Gallery
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          A quick look at what Tailor AI can generate for you.
        </p>
      </motion.div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-[#fafafa]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: item.id * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={350}
                className="object-cover w-full h-64"
              />
            </motion.div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
