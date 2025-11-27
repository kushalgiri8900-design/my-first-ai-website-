import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-white tracking-tighter">BOTTEGA</h3>
            <p className="text-sm leading-relaxed text-stone-400">
              Modern Italian. Neighborhood Heart.<br/>
              Handcrafted pasta, wood-fired pizza, and seasonal plates.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" className="hover:text-[#D74F36] transition-colors"><Instagram size={22} /></a>
              <a href="#" className="hover:text-[#D74F36] transition-colors"><Facebook size={22} /></a>
              <a href="#" className="hover:text-[#D74F36] transition-colors"><Star size={22} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li>{BUSINESS_INFO.address}</li>
              <li><a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a></li>
              <li><a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">{BUSINESS_INFO.email}</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Hours</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li>Open Daily</li>
              <li>{BUSINESS_INFO.hours}</li>
              <li className="pt-2 text-[#D74F36] text-xs uppercase tracking-wide font-bold">Reservations recommended</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-white font-serif text-xl mb-6">Explore</h4>
             <ul className="space-y-4 text-sm text-stone-400">
               <li><Link to="/" className="hover:text-[#D74F36] transition-colors">Home</Link></li>
               <li><Link to="/menu" className="hover:text-[#D74F36] transition-colors">Menu</Link></li>
               <li><Link to="/reservations" className="hover:text-[#D74F36] transition-colors">Reservations</Link></li>
               <li><Link to="/events" className="hover:text-[#D74F36] transition-colors">Private Dining</Link></li>
               <li><Link to="/contact" className="hover:text-[#D74F36] transition-colors">Contact</Link></li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Bottega. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;