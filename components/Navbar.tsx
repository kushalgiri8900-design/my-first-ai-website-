import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path ? "text-[#D74F36]" : "text-stone-700 hover:text-[#D74F36]";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100 h-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-stone-900 tracking-tighter" onClick={closeMenu}>
              BOTTEGA
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive(link.path)}`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="px-5 py-2 text-sm font-bold text-white bg-[#D74F36] hover:bg-[#B7372C] rounded-full transition-colors duration-200 shadow-md"
            >
              RESERVE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <a href={`tel:${BUSINESS_INFO.phone}`} className="mr-4 text-stone-600">
               <Phone size={20} />
             </a>
            <button
              onClick={toggleMenu}
              className="text-stone-600 hover:text-[#D74F36] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={closeMenu}
              className="block w-full text-center mt-4 px-5 py-3 text-base font-bold text-white bg-[#D74F36] rounded-lg shadow-sm"
            >
              Book a Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;