"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 md:px-20 lg:px-40">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Phone: <span className="font-medium">08032317925</span></p>
          <p>Email: <span className="font-medium">inquiries@abiacwc.com</span></p>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
          <p>No. 6 Agagba Street</p>
          <p>Off Brass Road, Aba</p>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">About</h3>
          <p>
            Abia Coordinated Wholesale Centre (ABCWC) is dedicated to providing 
            safe, certified, and regulated pharmaceutical distribution.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Abia CWC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}