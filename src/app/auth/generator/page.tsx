"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Tokens from "@/src/components/Tokens";

export default function Generator() {
  const { data: session } = useSession();
  const [resume, setResume] = useState<File | null>(null);
  const [jd, setJd] = useState("");
  const [tone, setTone] = useState("formal");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [tokensRemaining, setTokensRemaining] = useState(0);
  const [loader, setLoader] = useState(false);

  if (!session) {
    redirect("/signin");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resume || !jd || !tone) {
      alert("Please fill in all the details");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("jd", jd);
      formData.append("tone", tone);

      const res = await fetch("/api/generator", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(`Error: ${data.error}`);
        return;
      }

      setCoverLetter(data.coverLetter);
      setTokensRemaining(data.tokensRemaining);
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to generate cover letter");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 md:px-16 py-10 min-h-screen font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-7xl mx-auto"
      >

        {/* LEFT – FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-white rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Generate your cover letter
          </h2>

          <Tokens />

          <form onSubmit={handleSubmit}>

            {/* JD */}
            <div className="mb-6 mt-6">
              <label className="block text-lg font-semibold mb-1">
                Job Description Content
              </label>
              <p className="text-sm text-gray-600 mb-2">
                Paste the job description here (max 1000 words)
              </p>

              <textarea
                rows={8}
                maxLength={8000}
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Enter job description..."
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400"
              />

              <p className="text-xs text-gray-500 mt-1 text-right">
                {jd.length}/1000 words
              </p>
            </div>

            {/* Resume Upload */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-1">
                Upload Resume
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setResume(e.target.files ? e.target.files[0] : null)
                }
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
              />

            </div>

            {/* Tone */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-1">
                Select Tone
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
              >
                <option value="formal">Formal</option>
                <option value="friendly">Friendly</option>
                <option value="enthusiastic">Enthusiastic</option>
                <option value="professional">Professional</option>
              </select>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              onClick={() => setLoader(true)}
              className="w-full bg-[#F0B246] cursor-pointer text-white py-3 rounded-md font-semibold shadow hover:opacity-90 transition"
            >
              {loading ? "Generating..." : "Generate"}
            </motion.button>

            {tokensRemaining > 0 && (
              <p className="text-sm text-green-600 mt-2">
                Tokens remaining: {tokensRemaining}
              </p>
            )}
          </form>
        </motion.div>

        {/* RIGHT – OUTPUT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-gray-100 rounded-2xl shadow-lg flex flex-col items-center justify-center"
        >
          {coverLetter ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full"
            >
              <h3 className="text-xl font-semibold mb-4">Your Cover Letter</h3>

              <div className="bg-white p-4 rounded-md max-h-96 overflow-y-auto shadow">
                <p className="text-sm whitespace-pre-wrap">{coverLetter}</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {loader ? (
                <div>
                  <div className="flex items-center justify-center">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src="/images/generateImg.gif"
                    className="h-40 mb-4"
                    alt="waiting"
                  />
                </>
              )}
              <h2 className="text-lg text-gray-700">Your results will appear here</h2>
            </motion.div>
          )}
        </motion.div>

      </motion.div>
    </div>
  );
}
