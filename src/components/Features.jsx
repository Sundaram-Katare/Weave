'use client' // if using App Router

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  { 
    title: "Smart Resume Parsing", 
    description: "Automatically extracts your skills, experience, and achievements from your resume.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135692.png"
  },
  { 
    title: "Job Description Analyzer", 
    description: "Understands key role requirements to tailor your cover letter effectively.",
    img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-essay-clipart-man-with-glasses-and-glasses-holding-papers-with-some-vector-png-image_6813468.png"
  },
  { 
    title: "AI-Generated Cover Letters", 
    description: "Creates personalized, professional cover letters in seconds.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/071/143/545/small/ai-light-bulb-with-connected-nodes-symbolizing-innovation-and-neural-network-3d-illustration-png.png"
  },
  { 
    title: "Multiple Tone Options", 
    description: "Choose from Formal, Confident, or Friendly tones based on the job style.",
    
  },
  { 
    title: "1-Click PDF Download", 
    description: "Export clean, formatted PDFs ready to submit in your job applications."
  },
  { 
    title: "Save & Manage Letters", 
    description: "Store all your generated cover letters in a personal dashboard."
  },
];


export default function FeaturesPage() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-screen max-w-screen bg-blue-200/20 text-black font-poppins flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute w-full h-full flex flex-col items-center justify-center text-center px-6"
        >
          <img src={features[index].img} alt={features[index].title} className="mb-4 w-48 h-48 object-cover rounded-full" />
          <h1 className="text-4xl font-bold mb-4">{features[index].title}</h1>
          <p className="text-lg text-[#D9AC57]">{features[index].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}