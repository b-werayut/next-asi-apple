"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className="" >
          <Image
            src={"/assets/logo/asi-logo.png"}
            alt="user img"
            width={60}
            height={60}
            priority
          />
          </div>
          {/* <span className="text-xl font-bold">ASI Connex</span> */}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-black items-center space-x-8">
          <a
            href="#about"
            className="text-sm font-medium hover:text-gray-400 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm font-medium hover:text-gray-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium hover:text-gray-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-gray-400 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-600 transition-colors"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#about"
              className="block text-black text-sm font-medium hover:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block text-black text-sm font-medium hover:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block text-black text-sm font-medium hover:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="block text-black text-sm font-medium hover:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium hover:text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
