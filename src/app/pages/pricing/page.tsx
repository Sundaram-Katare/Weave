"use client"
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/src/components/Navbar";
import { Check } from "lucide-react";

export default function Pricing() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="relative min-h-screen flex flex-col mx-16">
                <div className="flex items-center justify-center h-full w-full absolute">
                    <AnimatePresence>
                        {showSplash ?
                        (
                            <motion.div className="p-16 flex space-x-8 jsutify-center items-center text-center">
                               <motion.img 
                               className="rounded-full h-56"
                               initial={{ opacity: 0, scale:0.5 }}
                               animate={{ opacity: 1, scale: 1 }}
                               transition={{ duration: 1, ease: "easeOut" }}
                               src={"https://user-gen-media-assets.s3.amazonaws.com/seedream_images/b3d8ea56-3533-4a1e-826e-4a556241e22c.png"} 
                               />

                              <motion.h1 
                              initial={{ opacity: 0, x: -60 }}
                              animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                              exit={{ opacity: 0, rotate: -10}}  
                              className="font-cursive text-5xl font-semibold">Tailor AI</motion.h1>
                            </motion.div>
                        )

                        : (
                        <div className="flex items-center justify-center h-full w-full absolute mt-6">
                            <motion.div 
                             className="flex flex-col p-8 my-6 bg-gray-200/40 rounded-2xl items-center space-y-10 justify-center font-poppins"
                             initial={{ opacity: 0, scale: 1.6 }}
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 1, ease: "easeInOut" }}
                            >
                               <h1 className="text-5xl font-medium">Pricing and Plans</h1>
                               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quos optio amet la</p>

                               <div className="grid grid-cols-2 gap-20">
                                 
                                <div className="p-4 border shadow-md shadow-black rounded-lg flex flex-col space-y-10">
                                    <h4 className="text-2xl font-medium">Free</h4>

                                    <h2 className="text-6xl font-semibold">$0</h2>

                                    <div>
                                        <p className="font-semibold mb-2">Includes</p>
                                        <ul className="space-y-2">
                                            <li className="flex gap-2"><Check color="green"/> 5 Generations</li>
                                            <li className="flex gap-2" ><Check color="green"/> Upload Resume</li>
                                            <li className="flex gap-2"><Check color="green"/> Paste JD</li>
                                            <li className="flex gap-2"><Check color="green"/> Save Cover Letter</li>
                                            <li className="flex gap-2"><Check color="green"/> Standard-speech</li>
                                        </ul>
                                    </div>
                                 </div>

                                  <div className="p-4 border shadow-md shadow-black bg-gray-800 text-gray-100 rounded-lg flex flex-col space-y-10">
                                    <h4 className="text-2xl font-medium">Pro</h4>

                                    <h2 className="text-6xl font-semibold">$12</h2>

                                    <div>
                                        <p className="font-semibold mb-2">Includes</p>
                                        <ul className="space-y-2">
                                            <li className="flex gap-2"><Check color="green"/> 5 Generations</li>
                                            <li className="flex gap-2" ><Check color="green"/> Upload Resume</li>
                                            <li className="flex gap-2"><Check color="green"/> Paste JD</li>
                                            <li className="flex gap-2"><Check color="green"/> Save Cover Letter</li>
                                            <li className="flex gap-2"><Check color="green"/> Standard-speech</li>
                                        </ul>
                                    </div>
                                 </div>
                               </div>
                            </motion.div>
                        </div>
                    )}
                    </AnimatePresence>

                </div>
            </div>
        </>
    )
}