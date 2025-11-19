"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center mx-8 md:mx-16">
                <div className="min-w-xl lg:min-w-6xl max-w-6xl bg-blue-200/20 p-16 rounded-2xl font-poppins text-2xl">
                <h1 className="font-bold text-3xl font-poppins text-center my-4">FAQs</h1>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg md:text-lg md:text-2xl cursor-pointer">What is Tailor AI?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 font-light text-black text-sm p-2 md:text-lg md:p-4 rounded-lg mb-2">
                                <p className="font-light">
                                    Tailor AI is an AI-powered tool that generates personalized cover 
                                    letters using your resume and the job description you provide. It 
                                    helps you apply faster with professional, tailored letters.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg md:text-2xl cursor-pointer">How does it generate a cover letter?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 font-light">
                                <p className="font-light">
                                   Simply upload your resume and paste the job description. Tailor AI analyzes 
                                   both and creates a custom cover letter that aligns your skills with the job 
                                   requirements.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg md:text-2xl cursor-pointer">Is Tailor AI free to use?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 font-light text-black text-sm p-2 md:text-lg md:p-4 rounded-lg mb-2">
                                <p className="font-light">
                                    Yes! We offer a Free plan with limited monthly generations. For 
                                    unlimited letters and premium features, you can upgrade to the Pro plan.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                         <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg md:text-2xl cursor-pointer">Will my data be safe?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 font-light text-black text-sm p-2 md:text-lg md:p-4 rounded-lg mb-2">
                                <p className="font-light">
                                    Absolutely. Your resume, job descriptions, and generated letters 
                                    are securely stored and never shared with third parties.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                         <AccordionItem value="item-5">
                            <AccordionTrigger className="text-lg md:text-2xl cursor-pointer">Product Information</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 font-light text-black text-sm p-2 md:text-lg md:p-4 rounded-lg mb-2">
                                <p className="font-light">
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                         <AccordionItem value="item-6">
                            <AccordionTrigger className="text-lg md:text-2xl cursor-pointer">What file types do you support for resumes?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 font-light text-black text-sm p-2 md:text-lg md:p-4 rounded-lg mb-2">
                                <p className="font-light">
                                    We currently support PDF format. More formats (DOCX, TXT) will be 
                                    added in future updates.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>
        </>
    )
}
