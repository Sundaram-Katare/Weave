"use client";
import { signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { LogOut, Spool, SquareArrowOutUpLeftIcon, SquareArrowOutUpRight } from "lucide-react";

export default function Navbar() {
  const { data: session, status } = useSession()

  return (
    <>
      <div className="px-4 py-4 bg-transparent font-poppins text-black flex justify-between ">
        <div className="w-1/2">
          <h1 className="font-poppins text-3xl font-semibold flex gap-2 items-center">Weave <Spool /></h1>
        </div>

        <div className="flex justify-between w-1/2">
          <div className="flex flex-row space-x-6 font-poppins text-xl">
            <Link href={"/"}>Home</Link>
            <Link href={"/pages/faq"}>FAQ</Link>
            {/* <Link href={""}>Gallery</Link> */}
            <Link href={"/pages/pricing"}>Pricing</Link>
            <Link href={"/pages/auth/generator"}>Generate</Link>
          </div>

          <div>
            {!session ? (
              <Link href="/pages/signin" className="bg-[#082D8C] cursor-pointer text-white hover:bg-blue-400 hover:scale-105 text-lg flex gap-2 items-center font-regular px-2 py-1 rounded-2xl">
                Get Started
                <SquareArrowOutUpRight />
              </Link>
            ) : (
              <button
                onClick={() => signOut({ callbackUrl: '/pages/signin' })}
                className="text-lg cursor-pointer hover:bg-red-400 hover:scale-105 ml-4 bg-red-600 text-white px-2 py-1 rounded-xl flex gap-2 items-center"
              >
                Logout
                <LogOut />
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  )
}