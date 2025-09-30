"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-green-800 to-[#007B33] text-gray-100 pt-12 pb-6 px-6 md:px-20 lg:px-40">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>
            Phone:{" "}
            <a
              href="tel:08032317925"
              className="font-medium text-gray-100 hover:text[#960A0A] no-underline transition-colors"
            >
              08032317925
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:inquiries@abiacwc.com"
              className="font-medium text-gray-100 hover:text-[#960A0A] no-underline transition-colors"
            >
              inquiries@abiacwc.com
            </a>
          </p>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=No.6+Agagba+Street,+Off+Brass+Road,+Aba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-[#960A0A] no-underline transition-colors"
          >
            No. 6 Agagba Street <br />
            Off Brass Road, Aba
          </a>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">About</h3>
          <p>
            Abia Coordinated Wholesale Centre (ACWC) is dedicated to providing
            safe, certified, and regulated pharmaceutical distribution.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-600 mt-10 pt-4 text-center text-sm text-gray-200">
        <p>
          &copy; {new Date().getFullYear()} Abia CWC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}