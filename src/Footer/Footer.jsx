import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">MyApp</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              MyApp is a modern web platform providing high quality solutions
              with performance, security and scalability in mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sky-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-sky-400 cursor-pointer transition">
                Help Center
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition">
                Terms & Conditions
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition">
                FAQs
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition cursor-pointer">
                🌐
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition cursor-pointer">
                🐦
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition cursor-pointer">
                📸
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 transition cursor-pointer">
                💼
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Made with ❤️ by MyApp Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
