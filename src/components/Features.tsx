'use client' // if using App Router

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Brain, ChartSpline, FileText, Save, SquareStack } from 'lucide-react';

const features = [
  { 
    title: "Smart Resume Parsing", 
    description: "Automatically extracts your skills, experience, and achievements from your resume.",
    img: <Brain className="mb-4 w-48 h-48 object-cover rounded-full" /> // resume with scanning/parsing style icon [web:1]
  },
  { 
    title: "Job Description Analyzer", 
    description: "Understands key role requirements to tailor your cover letter effectively.",
    img: <ChartSpline className="mb-4 w-48 h-48 object-cover rounded-full" /> // document with magnifying glass / analysis icon [web:1]
  },
  { 
    title: "AI-Generated Cover Letters", 
    description: "Creates personalized, professional cover letters in seconds.",
    img: <Bot className="mb-4 w-48 h-48 object-cover rounded-full"/> // AI/brain + document style icon [web:1]
  },
  { 
    title: "Multiple Tone Options", 
    description: "Choose from Formal, Confident, or Friendly tones based on the job style.",
    img: <SquareStack className="mb-4 w-48 h-48 object-cover rounded-full" /> // slider/settings style tone icon [web:13]
  },
  { 
    title: "Save & Manage Letters", 
    description: "Store all your generated cover letters in a personal dashboard.",
    img: <Save className="mb-4 w-48 h-48 object-cover rounded-full" /> // folder/dashboard/documents management icon [web:1]
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
    <div className="h-screen max-w-screen bg-white text-black font-poppins flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute w-full h-full flex flex-col items-center justify-center text-center px-6"
        >
          {/* <img src={features[index].img} alt={features[index].title} className="mb-4 w-48 h-48 object-cover rounded-full" /> */}
          {features[index].img}
          <h1 className="text-4xl font-bold mb-4">{features[index].title}</h1>
          <p className="text-lg text-[#D9AC57]">{features[index].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}