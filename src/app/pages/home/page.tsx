"use client"
import Navbar from "../../../components/Navbar";
import Hero from "../../../components/Hero";
import HowItWorks from "../../../components/HowItWorks";
import Features from "../../../components/Features";
import Footer from "../../../components/Footer";

import { AnimatePresence, m, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "@/src/components/Modal";


export default function Home() {
    const [showSplash, setShowSplash] = useState(true);
    const [modal, showModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 6000);
        return () => clearTimeout(timer);

        showModal(true);
    }, []);

    return (
        <>
            <div className="h-screen ">
                {
                    modal && (
                        <Modal />
                    )
                }
                <AnimatePresence>
                    {showSplash ? (
                        <motion.div className="p-16 flex space-x-8 justify-center items-center text-center">
                            <motion.img
                                className="rounded-full h-56"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                src={"/images/homeGif.gif"}
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