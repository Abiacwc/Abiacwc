"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Wholecenter() {
  const fullText = `
At KCHAqua Consortium, we are committed to transforming the healthcare landscape in Abia State by developing a world-class pharmaceutical hub that meets international standards.
Our vision is to create a structured and regulated environment that promotes innovation, collaboration, and excellence in the pharmaceutical industry. Through our partnership with the Abia State Government, we aim to improve public health outcomes, stimulate economic growth, and enhance the overall quality of life for the people of Abia State.

We are introducing a new and innovative approach to pharmaceutical development, one that prioritizes safety, quality, and efficiency.
We are working closely with the Abia State Government, stakeholders, and industry experts to ensure the success of the project.
We are committed to delivering a world-class pharmaceutical hub that meets international standards and exceed expectations.
Join us in our mission to transform healthcare in Abia State. Learn more about our project, partnership opportunities, and how you can be a part of this exciting journey @ abiacwc.com
`;

  return (
    <section className="relative bg-[#6C545433] overflow-hidden px-6 md:px-16 py-12">
      {/* Watermark Background */}
      <div className="absolute inset-0 opacity-10" />

      <div className="relative z-10 flex flex-col gap-10 max-w-6xl mx-auto">
        {/* Top row: Image (left) + Heading (right) */}
        <div className="flex flex-col md:flex-row md:items-stretch justify-center gap-10">
          {/* Image with zoom-in animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -80 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex md:flex-1 justify-center md:justify-start"
          >
            <div className="w-full h-[500px] md:h-[650px] relative rounded-[40px] overflow-hidden shadow-lg">
              <Image
                src="/about.jpg"
                alt="Pharmacist"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Heading with slide + fade animation */}
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-montserrat font-extrabold text-[40px] md:text-6xl leading-tight tracking-normal text-left md:flex-1 flex items-center"
          >
            Revolutionizing the<br />
            Pharmaceutical Industry <br />
            through Innovation, <br />
            Collaboration, and Excellence
          </motion.h2>
        </div>

        {/* Bottom row: Paragraph only */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left md:flex-1"
        >
          <p className="text-gray-700 mb-6 whitespace-pre-line">
            {fullText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}