"use client";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNav(false);
      } else {
        // scrolling up → show navbar
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 px-6 md:px-10 py-4 bg-transparent backdrop-blur-md transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold">LOGO</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base md:text-lg">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
          <li className="hover:text-gray-300 cursor-pointer">About Us</li>
          <li className="hover:text-gray-300 cursor-pointer">Facilities</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-[#960A0A] text-white px-6 py-2 rounded-lg shadow-md active:scale-95 transition-transform">
          Purchase
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-base">
          <a className="hover:text-gray-300 cursor-pointer">Home</a>
          <a className="hover:text-gray-300 cursor-pointer">Contact Us</a>
          <a className="hover:text-gray-300 cursor-pointer">About Us</a>
          <a className="hover:text-gray-300 cursor-pointer">Facilities</a>
          <button className="bg-[#960A0A] text-white px-6 py-2 rounded-lg shadow-md active:scale-95 transition-transform w-fit">
            Purchase
          </button>
        </div>
      )}
    </nav>
  );
}