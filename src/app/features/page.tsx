'use client' // if using App Router

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  { title: 'Fast Performance', description: 'Optimized for speed and responsiveness.', img: "https://cdn.pixabay.com/photo/2020/10/23/09/31/man-5678220_1280.png" },
  { title: 'Beautiful UI', description: 'Crafted with modern design principles.' },
  { title: 'Secure Architecture', description: 'Built with security-first mindset.' },
  { title: 'Scalable Backend', description: 'Handles growth with ease.' },
  { title: 'Smart Analytics', description: 'Insights that drive decisions.' },
  { title: 'Seamless Integration', description: 'Connects with your favorite tools.' },
]

export default function FeaturesPage() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-screen w-full bg-blue-200/20 text-black font-poppins flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute w-full h-full flex flex-col items-center justify-center text-center px-6"
        >
          <img src={features[index].img} alt={features[index].title} className="mb-4 w-32 h-32 object-cover rounded-full" />
          <h1 className="text-4xl font-bold mb-4">{features[index].title}</h1>
          <p className="text-lg text-[#D9AC57]">{features[index].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}