import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f5f7fa] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-[#189ab4]">Trumpinvestltd.com</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-[#1f2937] hover:text-[#189ab4]">Home</a>
          <a href="#About" className="text-[#1f2937] hover:text-[#189ab4]">About</a>
          <a href="#Services" className="text-[#1f2937] hover:text-[#189ab4]">Services</a>
          <a href="#Contact" className="text-[#1f2937] hover:text-[#189ab4]">Contact</a>
      
        </nav>

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-[#05445e]">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Fullscreen Mobile Nav (Slide from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#f5f7fa] transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-[#05445e]">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center h-full space-y-6 text-lg font-semibold">
          <a href="/" className="text-[#1f2937] hover:text-[#189ab4]" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#About" className="text-[#1f2937] hover:text-[#189ab4]" onClick={() => setIsOpen(false)}>About</a>
          <a href="#Services" className="text-[#1f2937] hover:text-[#189ab4]" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#Contact" className="text-[#1f2937] hover:text-[#189ab4]" onClick={() => setIsOpen(false)}>Contact</a>
   
        </div>
      </div>
    </header>
  );
}

export default Header;
