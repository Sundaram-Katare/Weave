"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/src/components/Footer";

export default function FAQ() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center px-6 py-16 md:px-16 bg-gradient-to-b from-white to-blue-50/20">
        
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-[#082D8C]">
            FAQs
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mt-2">
            Everything you need to know about Weave.
          </p>
        </motion.div>

        {/* FAQ Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-6 md:p-12 border border-gray-200"
        >
          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">

            {/* Item 1 */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg md:text-xl font-semibold">
                What is Weave?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Weave is an AI-powered tool that generates personalized cover letters 
                using your resume and the job description you provide. It helps you apply 
                faster with professional, tailored letters.
              </AccordionContent>
            </AccordionItem>

            {/* Item 2 */}
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg md:text-xl font-semibold">
                How does it generate a cover letter?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Simply upload your resume and paste the job description. Weave analyzes 
                both and creates a custom cover letter that aligns your skills with the job 
                requirements.
              </AccordionContent>
            </AccordionItem>

            {/* Item 3 */}
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg md:text-xl font-semibold">
                Is Weave free to use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Yes! We offer a Free plan with limited monthly generations. For unlimited 
                letters and premium features, you can upgrade to the Pro plan.
              </AccordionContent>
            </AccordionItem>

            {/* Item 4 */}
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg md:text-xl font-semibold">
                Will my data be safe?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Absolutely. Your resume, job descriptions, and generated letters are securely 
                stored and never shared with third parties.
              </AccordionContent>
            </AccordionItem>

            {/* Item 5 */}
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg md:text-xl font-semibold">
                Product Information
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Our flagship product combines powerful AI technology with a simple interface. 
                It ensures accurate letter generation, clean formatting, and a seamless user experience.
              </AccordionContent>
            </AccordionItem>

            {/* Item 6 */}
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg md:text-xl font-semibold">
                What file types do you support for resumes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm md:text-lg leading-relaxed">
                We currently support PDF format. DOCX and TXT support will be added in future updates.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </motion.div>

        <div className="w-full mt-16">
          <Footer />
        </div>

      </div>
    </>
  );
}
