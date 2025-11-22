"use client";

import { signOut } from "next-auth/react";
import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  LogOut,
  Menu,
  X,
  Spool,
  SquareArrowOutUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 font-poppins text-black bg-transparent relative z-50">

      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-semibold flex gap-2 items-center cursor-pointer"
            onClick={() => window.location.href = '/'}
        >
          Weave <Spool />
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-xl">
          <Link href="/" className="hover:scale-105 transition-all duration-200 ease">Home</Link>
          <Link href="/pages/faq" className="hover:scale-105 transition-all duration-200 ease">FAQ</Link>
          <Link href="/pages/pricing" className="hover:scale-105 transition-all duration-200 ease">Pricing</Link>
          <Link href={'/pages/gallery'} className="hover:scale-105 transition-all duration-200 ease">Gallery</Link>
          <Link href="/pages/auth/generator" className="hover:scale-105 transition-all duration-200 ease">Generate</Link>

          {/* Buttons */}
          {!session ? (
            <Link
              href="/pages/signin"
              className="bg-[#082D8C] cursor-pointer text-white hover:bg-blue-400 transition-all hover:scale-105 text-lg flex gap-2 items-center px-3 py-1 rounded-2xl"
            >
              Get Started
              <SquareArrowOutUpRight size={20} />
            </Link>
          ) : (
            <button
              onClick={() => signOut({ callbackUrl: "/pages/signin" })}
              className="bg-red-600 hover:bg-red-400 hover:scale-105 transition-all text-white flex gap-2 items-center px-3 py-1 rounded-xl text-lg"
            >
              Logout
              <LogOut size={20} />
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden block"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-lg rounded-xl mt-4 px-6 py-4 flex flex-col gap-4 text-lg"
          >
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/pages/faq" onClick={() => setOpen(false)}>
              FAQ
            </Link>

            <Link href="/pages/pricing" onClick={() => setOpen(false)}>
              Pricing
            </Link>

            <Link href="/pages/auth/generator" onClick={() => setOpen(false)}>
              Generate
            </Link>

            {!session ? (
              <Link
                href="/pages/signin"
                onClick={() => setOpen(false)}
                className="bg-[#082D8C] cursor-pointer text-white hover:bg-blue-400 transition-all hover:scale-105 text-lg flex gap-2 items-center px-3 py-2 rounded-xl"
              >
                Get Started
                <SquareArrowOutUpRight size={20} />
              </Link>
            ) : (
              <button
                onClick={() => {
                  setOpen(false);
                  signOut({ callbackUrl: "/pages/signin" });
                }}
                className="bg-red-600 hover:bg-red-400 hover:scale-105 transition-all text-white flex gap-2 items-center px-3 py-2 rounded-xl text-lg"
              >
                Logout
                <LogOut size={20} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
