"use client"
import React from "react";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";

export default function Hero() {
    return (
        <>
            <div className="relative overflow-hidden h-screen mx-16">
                <div className="absolute inset-0 bg-blue-200/20 clip-diagonal z-0 rounded-2xl" />

                <div className="h-full flex justify-center items-center  relative">
                    <div className="mx-1 grid grid-cols-2 gap-20 bg-transparent p-4">
                        <div className="flex justify-start items-start font-semibold font-poppins flex-col space-y-2 text-6xl">
                            <motion.div
                             className="space-y-2"
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             transition={{ duration: 1, animation: "wipe"}}

                            >
                                <h1>Get a Job-specific</h1>
                                <motion.h1>tailored <span className="text-[#D9AC57] font-bold ">Cover Letter</span></motion.h1>
                                <h1>in <span className="text-[#D9AC57] font-bold ">60</span> seconds</h1>
                            </motion.div>

                            <div className="h-full relative top-40">
                                <button className="bg-[#D9AC57] text-xl text-black cursor-pointer hover:bg-[#D9AC57]/40 top-20 px-2 py-2 rounded-xl"
                                        onClick={() => redirect('/pages/auth/generator')}
                                >Get Cover Letter Now</button>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img src="/images/heroImg2.png" className="h-130 w-200" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}