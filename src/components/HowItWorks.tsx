"use client"
import React from "react"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function HowItWorks() {
    return (
        <>
            <div className="font-poppins flex flex-col m-16 justify-center items-center p-4 space-y-5">
                <h1 className="font-semibold font-poppins text-4xl">How to use it?</h1>
                <p>You just need to follow 3 simple steps</p>

                <div className="grid-cols-1 space-y-10 md:space-y-0  md:grid grid-cols-3 md:gap-10 ">
                    <div className="flex flex-row justify-center items-center space-x-8">
                        <div className="flex flex-col gap-4 p-4 bg-blue-200/20 rounded-2xl justify-center items-center">
                            <motion.div className="bg-[#D9AC57] text-white text-4xl w-fit px-10 py-6 rounded-full font-bold font-poppins text-center hover:animate-spin">1</motion.div>
                            <h2 className="font-bold font-poppins text-xl text-[#082D8C]">Upload Resume</h2>
                            <p className="text-center">Upload your resume and our AI instantly reads your skills, experience, and keywords to personalize your cover letter</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center space-x-8">
                        <div className="flex flex-col gap-4 p-4 bg-blue-200/20 rounded-2xl justify-center items-center">
                            <motion.div className="bg-[#D9AC57] text-white text-4xl w-fit px-10 py-6 rounded-full font-bold font-poppins text-center hover:animate-spin">2</motion.div>
                            <h2 className="font-bold font-poppins text-xl text-[#082D8C]">Paste Job Description</h2>
                            <p className="text-center">Provide the job description, and the AI analyzes requirements to align your strengths with what the company is looking for.</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center space-x-8">
                        <div className="flex flex-col gap-4 p-4 bg-blue-200/20 rounded-2xl justify-center items-center">
                            <div className="bg-[#D9AC57] text-white text-4xl w-fit px-10 py-6 rounded-full font-bold font-poppins text-center hover:animate-spin">3</div>
                            <h2 className="font-bold font-poppins text-xl text-[#082D8C]">Generate Cover Letter</h2>
                            <p className="text-center">AI creates a professional, customized cover letter that matches your profile with the job—ready to edit, copy, or download.</p>
                        </div>
                    </div>
                </div>

                <img src="/images/how.png" alt="" />
            </div>
        </>
    )
}
