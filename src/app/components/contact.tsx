"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send message. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

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
          We&apos;d love to hear from you! Fill out the form below and we&apos;ll
          get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#007B33] hover:bg-green-800 active:bg-green-800 active:scale-95 transition-transform text-white px-6 py-3 rounded-md font-medium w-full disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}