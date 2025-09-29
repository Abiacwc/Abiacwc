"use client";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <motion.section
      className="flex flex-col mx-4 md:mx-40 my-16 md:flex-row items-center justify-between bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50, scale: 0.1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Right Side - Image (first on mobile) */}
      <motion.div
        className="order-1 md:order-2 md:w-1/2 w-full h-[260px] md:h-[340px] overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/newsteller.jpg"
          alt="Newsletter"
          width={500}
          height={400}
          className="w-full h-full object-cover transform hover:scale-110 transition duration-700"
        />
      </motion.div>

      {/* Left Side - Text + Input */}
      <motion.div
        className="order-2 md:order-1 flex flex-col justify-center items-start p-8 md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug text-gray-900">
          NEWSLETTER <br /> SUBSCRIPTION
        </h2>

        <div className="flex w-full max-w-md shadow-md">
          <input
            type="email"
            placeholder="subscribe@gmail.com"
            className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-[#960A0A] hover:bg-red-800 px-5 flex items-center justify-center rounded-r-md active:scale-95 transition-transform">
            <GoArrowUpRight className="text-white text-xl" />
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}