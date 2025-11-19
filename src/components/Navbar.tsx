"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
     <div className="px-4 py-4 bg-transparent font-poppins text-black flex justify-between ">
       <div className="w-1/2">
         <h1>Name</h1>
       </div>

      <div className="flex justify-between w-1/2">
         <div className="flex flex-row space-x-6 font-poppins text-xl">
          <Link href={"/"} className="text-[#D9AC57]">Home</Link>
          <Link href={"/pages/faq"}>FAQ</Link>
          <Link href={""}>Gallery</Link>
          <Link href={"/pages/pricing"}>Pricing</Link>
          <Link href={"/pages/auth/generator"}>Contact</Link>
       </div>

       <div>
         <button className="bg-[#082D8C] text-white text-xl font-regular px-2 py-1 rounded-2xl ">
            Get Started
         </button>
       </div>

      </div>
     </div>
    </>
    )
}