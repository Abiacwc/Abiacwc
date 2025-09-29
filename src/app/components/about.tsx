"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";


export default function AboutAbiaCentre() {

const [isExpanded, setIsExpanded] = useState(false);

  const shortText =
    "Abia Coordinated Wholesale Centre (ABCWC) is a modern pharmaceutical and medical consumables centre to provide a centralized structure that will ensure that medicines were only sourced from certified manufacturers or importers with built-in systems for quality control and regulatory oversights.";
    
  const fullText =
    "Abia Coordinated Wholesale Centre (ABCWC) is a modern pharmaceutical and medical consumables centre to provide a centralized structure that will ensure that medicines were only sourced from certified manufacturers or importers with built-in systems for quality control and regulatory oversights. We are introducing a new and innovative approach to pharmaceutical development, one that prioritizes safety, quality, and efficiency. We are working closely with the Abia State Government, stakeholders, and industry experts to ensure the success of the project. We are committed to delivering a world-class pharmaceutical hub that meets international standards and exceed expectations. Join us in our mission to transform healthcare in Abia State. Learn more about our project, partnership opportunities, and how you can be a part of this exciting journey.";



  return (
    <section className="relative bg-[#6C545433]  overflow-hidden px-6 md:px-16 py-12">
      {/* Watermark Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/nafdac.png'), url('/Pharmacist.png')",
          backgroundRepeat: "repeat, repeat",
          backgroundSize: "200px, 200px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      />

      <div className="relative z-10 flex flex-col gap-10 max-w-6xl mx-auto">
        {/* Top row: Heading (left) + Image (right) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Heading with animation */}
          <motion.h2
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-montserrat font-extrabold text-[40px] md:text-[60px] leading-tight tracking-normal text-center md:text-right"
          >
            About ABIA <br />
            Coordinated <br />
            Wholesale <br />
            Centre
          </motion.h2>

          {/* Image with zoom effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center md:justify-start"
          >
            <Image
              src="/wholecenter.jpg"
              alt="Pharmacist"
              width={450}
              height={380}
              className="rounded-xl object-cover shadow-lg"
            />
          </motion.div>
        </div>

        {/* Bottom row: Paragraph + Button */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center md:text-right max-w-4xl mx-auto md:mx-0"
    >
      <p className="text-gray-700 mb-6">
        {isExpanded ? fullText : shortText}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#007B33] hover:bg-green-800 text-white px-6 py-2 rounded-md active:scale-95 transition-transform cursor-pointer font-medium"
      >
        {isExpanded ? "Show less" : "Read more..."}
      </button>
    </motion.div>

        <hr className="border-t-8 border-black w-[90%] mx-auto mt-4" />
      </div>
    </section>
  );
}
