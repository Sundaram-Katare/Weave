"use client";

import { motion } from "framer-motion";
import { Spool } from "lucide-react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-0 bg-gradient-to-b from-gray-100 to-white border-t border-gray-300 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 md:px-12 py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-1 text-gray-800">
              Weave<span className="text-[#F0B246]"><Spool /></span>
            </h2>
            <p className="text-gray-600 mt-3 text-sm">
              Create hyper-personalized cover letters 10X faster  
              using our smart AI generator.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#F0B246] cursor-pointer">Home</li>
              <li className="hover:text-[#F0B246] cursor-pointer">Generator</li>
              <li className="hover:text-[#F0B246] cursor-pointer">Saved Letters</li>
              <li className="hover:text-[#F0B246] cursor-pointer">Pricing</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#F0B246] cursor-pointer">Docs</li>
              <li className="hover:text-[#F0B246] cursor-pointer">How It Works</li>
              <li className="hover:text-[#F0B246] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#F0B246] cursor-pointer">Terms of Service</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>

            <div className="flex items-center gap-4 mt-2">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-700 hover:text-[#F0B246] text-xl"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-700 hover:text-[#F0B246] text-xl"
              >
                <FaTwitter />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-700 hover:text-[#F0B246] text-xl"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-700 hover:text-[#F0B246] text-xl"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-16 border-t border-gray-300 pt-6"
        >
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} NucleusAI. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
