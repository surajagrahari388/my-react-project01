import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition 
     ${
       isActive
         ? "text-sky-400 border-b-2 border-sky-400"
         : "text-gray-300 hover:text-white hover:bg-slate-800"
     }`;

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="text-xl font-bold text-white tracking-wide">
            MyApp
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/services" className={linkClasses}>
              Services
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-800 px-4 pb-4 space-y-2">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/services" className={linkClasses}>
            Services
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
