import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

useEffect(() => {
  const stored = localStorage.getItem("loggedInUser");
  if (stored) {
    setUser(JSON.parse(stored));
  }
}, []);



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

        {/* Desktop Auth Buttons */}
        {user ? (
          <div className="text-sm font-semibold text-[#189ab4]">
            Welcome, {user.name || user.email}
          </div>
        ) : (
          <div className="hidden md:flex gap-4">
            <a href="/login" className="bg-teal-600 w-28 h-10 flex items-center justify-center text-white font-semibold rounded-md">log in</a>
            <a href="/signup" className="border w-28 h-10 flex items-center justify-center text-teal-600 font-semibold rounded-md">sign in</a>
          </div>
        )}

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-[#05445e]">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Fullscreen Mobile Nav */}
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

          {/* Mobile Auth Buttons */}
          {user ? (
            <p className="text-lg font-semibold text-[#189ab4] mt-6">Welcome, {user.name || user.email}</p>
          ) : (
            <div className="flex flex-col gap-4 mt-8 w-2/3">
              <a href="/login" className="bg-teal-600 py-2 text-white text-center rounded-md font-semibold">log in</a>
              <a href="/signup" className="border py-2 text-teal-600 text-center rounded-md font-semibold">sign in</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
