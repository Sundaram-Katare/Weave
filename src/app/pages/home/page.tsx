"use client"
import Navbar from "../../../components/Navbar";
import Hero from "../../../components/Hero";
import HowItWorks from "../../../components/HowItWorks";
import Features from "../../../components/Features";
import Footer from "../../../components/Footer";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function Home() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="h-screen ">
                <AnimatePresence>
                    {showSplash ? (
                        <motion.div className="p-16 flex space-x-8 justify-center items-center text-center">
                            <motion.img
                                className="rounded-full h-56"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                src={"https://payload.cargocollective.com/1/20/664790/13673182/18_08_Unraveled.gif"}
                            />
                        </motion.div>
                    ) : (<>
                        <Hero />
                        <HowItWorks />
                        <Features />
                        <Footer />
                    </>)}
                </AnimatePresence>
            </div>
        </>
    )
}