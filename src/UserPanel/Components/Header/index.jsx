import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaStore } from 'react-icons/fa';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-white text-black flex justify-between items-center px-4 py-2 text-xs md:text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaEnvelope className="mr-1" />
            <span>info@company.com</span>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-1" />
            <span>010-020-0340</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center py-4 px-4 md:px-8 relative bg-black">
        {/* Logo */}
        <div className="text-[#CDC2A5] text-3xl md:text-4xl font-bold">
          <FaStore />
        </div>

        {/* Navigation (Hidden on mobile) */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 right-0 w-full bg-black md:bg-transparent md:static md:flex md:space-x-30 text-lg transition-transform duration-300 ease-in-out md:block`}
        >
          <div className="hidden md:flex items-center justify-center w-full">
            <a href="#" className="block px-8 py-2 text-[#CDC2A5] hover:text-white">
              Home
            </a>
            <a href="#" className="block px-8 py-2 text-[#CDC2A5] hover:text-white">
              About
            </a>
            <a href="#" className="block px-8 py-2 text-[#CDC2A5] hover:text-white">
              Shop
            </a>
            <a href="#" className="block px-8 py-2 text-[#CDC2A5] hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        {/* Icons and Toggle Menu */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Hamburger Menu Icon (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-2xl text-[#CDC2A5] hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
          <FiSearch className="text-xl text-[#CDC2A5] hover:text-white cursor-pointer" />
          <div className="relative">
            <FiShoppingCart className="text-xl text-[#CDC2A5] hover:text-white cursor-pointer" />
          </div>
          <div className="relative">
            <FiUser className="text-xl text-[#CDC2A5] hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding in from right) */}
      {isMenuOpen && (
        <nav className="fixed right-0 top-0 w-3/4 h-full bg-black text-[#CDC2A5] flex flex-col items-start py-10 px-8 z-20 transform translate-x-0 transition-transform duration-300 ease-in-out md:hidden">
          <a href="#" className="block mb-4 text-[#CDC2A5] hover:text-white">
            Home
          </a>
          <a href="#" className="block mb-4 text-[#CDC2A5] hover:text-white">
            About
          </a>
          <a href="#" className="block mb-4 text-[#CDC2A5] hover:text-white">
            Shop
          </a>
          <a href="#" className="block mb-4 text-[#CDC2A5] hover:text-white">
            Contact
          </a>
        </nav>
      )}

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
