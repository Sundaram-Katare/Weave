"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Letters() {
  const { data: session } = useSession();
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not authenticated

  useEffect(() => {
    const getLetters = async () => {
      try {
        const res = await fetch("/api/getLetters", { cache: "no-store" });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();
        console.log("Letters data:", data);

        // API returns letters array directly, not nested
        setLetters(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching letters:", error);
        setLetters([]);
      } finally {
        setLoading(false);
      }
    };

    getLetters();
  }, []);

  return (
    <div className="min-h-screen w-full p-6 md:p-12 font-poppins bg-gradient-to-br from-white via-gray-100 to-gray-200">

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10"
      >
        Your Saved Letters
      </motion.h1>

      {/* LOADER */}
      {loading && (
        <div className="flex flex-col justify-center items-center py-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full"
          />
          <p className="mt-4 text-gray-600 text-sm">Fetching your letters...</p>
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && letters.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col justify-center items-center py-20"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
            className="w-28 opacity-80"
            alt="no data"
          />
          <p className="text-gray-700 mt-4 text-lg font-medium">
            No letters found
          </p>
        </motion.div>
      )}

      {/* LETTER GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {letters.map((letter, index) => (
          <motion.div
            key={letter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white shadow-lg border border-gray-200 backdrop-blur-sm hover:shadow-xl transition hover:-translate-y-1"
          >
            <h2 className="font-bold text-xl text-gray-800 mb-2">
              {"Cover Letter - " + (index + 1)}
            </h2>

            <p className="text-sm text-gray-700 mb-1">
              <strong>Tone:</strong> {letter.tone}
            </p>

            {letter.resumeText && (
              <details className="mt-3">
                <summary className="cursor-pointer text-blue-600 text-sm mb-2">
                  View Resume
                </summary>
                <p className="text-xs text-gray-600 bg-gray-100 p-2 rounded-md break-words">
                  {letter.resumeText.substring(0, 200)}...
                </p>
              </details>
            )}

            {letter.jobDescription && (
              <details className="mt-3">
                <summary className="cursor-pointer text-blue-600 text-sm mb-2">
                  View Job Description
                </summary>
                <p className="text-xs text-gray-600 bg-gray-100 p-2 rounded-md max-h-32 overflow-y-auto">
                  {letter.jobDescription}
                </p>
              </details>
            )}

            <div className="mt-4 bg-gray-50 p-3 rounded-md max-h-40 overflow-y-auto border border-gray-200">
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {letter.content}
              </p>
            </div>

            <div className="mt-4 text-xs text-gray-500 space-y-1">
              <p>📅 Created: {new Date(letter.createdAt).toLocaleDateString()}</p>
              <p>🔄 Updated: {new Date(letter.updatedAt).toLocaleDateString()}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}