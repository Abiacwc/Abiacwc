"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Nav from "./nav";

export default function Home() {
  return (
    <main className="text-white relative overflow-hidden">
      {/* Navbar and hero page */}
      <main className="relative bg-[url('/herobg.jpg')] bg-hero min-h-screen text-white h-screen bg-cover bg-center">
        <Nav />

        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image src="/herobg.jpg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#029A41]/70 via-[#013A19]/75 to-[#001C0C]/85"></div>
        </div>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-16 md:py-20">
          {/* Pills Image with animation */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-[200px] h-[200px] sm:w-[300px] top-[700px] left-[-25px] sm:h-[300px] sm:top-[700px] sm:left-[-25%] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] md:top-[60%] md:left-[-14%] overflow-hidden"
          >
            <Image src="/drugs.png" alt="Pills" fill className="object-contain" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-extrabold leading-tight drop-shadow-lg justify-center items-center tracking-tight"
          >
            Abia Coordinated <br />
            Wholesale Center <br /> (CWC)
          </motion.h1>
        </section>
      </main>

      {/* Bottom Section */}
      <section className="relative flex flex-col items-center md:items-end justify-end text-center md:text-right md:px-20 lg:px-80 px-1 py-6">
        {/* Background watermark logos */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/nafdac.png'), url('/Pharmacist.png')",
            backgroundRepeat: "repeat, repeat",
            backgroundSize: "100px, 100px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />

        {/* Top row logos */}
        <div className="flex flex-wrap gap-2 lg:gap-6 md:gap-6 sm:gap-2 mt-10 sm:mx-4 justify-center sm:justify-end md:justify-end ml-20">
          <Image
            src="/nafdac.png"
            alt="NAFDAC"
            width={120}
            height={120}
            className="rounded-full w-[70px] h-[70px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]"
          />
          <Image
            src="/Pharmacist.png"
            alt="PCN"
            width={120}
            height={120}
            className="rounded-full justify-end items-end w-[70px] h-[70px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]"
          />
        </div>

        {/* Bottom row - responsive fix */}
        <div className="flex sm:flex-row md:flex-row justify-end md:justify-end items-center ml-20 mt-6 gap-2 lg:gap-6 md:gap-6 sm:gap-2">
          <Image
            src="/verify.png"
            alt="Location Approved"
            width={100}
            height={100}
            className="w-[50px] h-[50px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
          />
          <h1 className="text-[#151515] font-semibold text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-tight tracking-tight text-center sm:text-left">
            Location <br />
            Approved <br />
            Centres
          </h1>
        </div>
      </section>
    </main>
  );
}
