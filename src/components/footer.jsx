// components/Footer.jsx
import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05445e] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#d4f1f4]">Trumpinvestltd</h2>
          <p className="text-sm leading-relaxed text-[#f0fafa]">
            Building trust through transparency. Your gateway to secure crypto and forex investments with real-time insights.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#d4f1f4]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#f0fafa]">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Investment Plans</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#d4f1f4]">Our Services</h3>
          <ul className="space-y-2 text-sm text-[#f0fafa]">
            <li>Crypto Trading</li>
            <li>Forex & Stocks</li>
            <li>Binary Options</li>
            <li>Commodities & CFDs</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#d4f1f4]">Stay Connected</h3>
          <div className="flex gap-4 mb-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-cyan-300" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-cyan-300" /></a>
            <a href="#"><Instagram className="w-5 h-5 hover:text-cyan-300" /></a>
            <a href="#"><Mail className="w-5 h-5 hover:text-cyan-300" /></a>
          </div>
          <p className="text-sm text-[#f0fafa]">support@trumpinvestltd.com</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-cyan-800 pt-4 text-center text-xs text-[#f0fafa]">
        © {new Date().getFullYear()} Trumpinvestltd. All rights reserved.
      </div>
    </footer>
  );
}
