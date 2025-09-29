"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Wholecenter() {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText =
  "KCH-AQUA Pharmaceutical Investments Limited is an indigenous pharmaceutical investment company, specializing in pharmaceutical products distribution and management; design; construction and equipment of manufacturing plants.";
    
  const fullText =
  "KCH-AQUA Pharmaceutical Investments Limited is an indigenous pharmaceutical investment company, specializing in pharmaceutical products distribution and management; design; construction and equipment of manufacturing plants. At KCHAqua Consortium, we are committed to transforming the healthcare landscape in Abia State by developing a world-class pharmaceutical hub that meets international standards. Our vision is to create a structured and regulated environment that promotes innovation, collaboration, and excellence in the pharmaceutical industry. Through our partnership with the Abia State Government, we aim to improve public health outcomes, stimulate economic growth, and enhance the overall quality of life for the people of Abia State.";

  return ( 
    <section className="relative bg-[#6C545433] overflow-hidden px-6 md:px-16 py-12">
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
        {/* Top row: Image (left) + Heading (right) */}
        <div className="flex flex-col md:flex-row max-w-5xl md:items-center justify-center gap-10">
          {/* Image with zoom-in animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -80 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <Image
              src="/about.jpg"
              alt="Pharmacist"
              width={400}
              height={420}
              className="rounded-[40px] object-cover shadow-lg"
            />
          </motion.div>

          {/* Heading with slide + fade animation */}
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-montserrat font-extrabold text-[40px] md:text-[60px] leading-tight tracking-normal text-left"
          >
            About <br />
            KCH-AQUA <br />
            Pharmaceutical <br />
            Investments <br />
            Limited
          </motion.h2>
        </div>

        {/* Bottom row: Paragraph + Button */}
        <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center md:text-left max-w-4xl md:mx-20"
    >
      <p className="text-gray-700 mb-6">
        {isExpanded ? fullText : shortText}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#007B33] hover:bg-green-800 active:bg-green-800 active:scale-95 transition-transform cursor-pointer text-white px-6 py-2 rounded-md font-medium"
      >
        {isExpanded ? "Show less" : "Read more..."}
      </button>
    </motion.div>
      </div>
    </section>
  );
}
