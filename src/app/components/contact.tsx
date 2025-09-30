"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 px-4 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Contact Us
        </motion.h2>

        <p className="text-gray-600 mt-2">
          We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back
          to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
        ></textarea>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 active:bg-green-800 active:scale-95 transition-transform text-white px-6 py-3 rounded-md font-medium w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}