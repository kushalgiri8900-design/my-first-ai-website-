import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BUSINESS_INFO, FAQS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-stone-900 mb-6">Contact & Location</h1>
          <p className="text-lg text-stone-600">We look forward to welcoming you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Info Card */}
          <div className="bg-white p-10 rounded-xl shadow-lg space-y-8 border border-stone-100">
            <div className="flex items-start">
              <MapPin className="text-[#D74F36] w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                <p className="text-stone-600">{BUSINESS_INFO.address}</p>
                <p className="text-sm text-stone-500 mt-2">Parking: Street parking + nearby garage.</p>
                <p className="text-sm text-stone-500">Accessibility: Wheelchair accessible.</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="text-[#D74F36] w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                <p className="text-stone-600">{BUSINESS_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="text-[#D74F36] w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                <p className="text-stone-600">{BUSINESS_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="text-[#D74F36] w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                <p className="text-stone-600">{BUSINESS_INFO.hours}</p>
              </div>
            </div>
            
            <div className="pt-6 mt-6 border-t border-stone-100 flex gap-4">
                <button className="flex-1 bg-[#D74F36] text-white font-bold py-3 rounded-lg hover:bg-[#B7372C] transition-colors">Call Us</button>
                <button className="flex-1 bg-white border border-stone-300 text-stone-800 font-bold py-3 rounded-lg hover:bg-stone-50 transition-colors">Get Directions</button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-stone-200 rounded-xl overflow-hidden shadow-lg h-full min-h-[450px] relative group">
             {/* Using an image to simulate a map for this demo */}
             <img 
              src="https://picsum.photos/800/600?random=5" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-white/90 backdrop-blur px-6 py-3 rounded-full text-stone-900 font-bold shadow-lg flex items-center">
                    <MapPin className="text-[#D74F36] w-5 h-5 mr-2" />
                    Google Maps Embed Placeholder
                </span>
             </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-24">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-stone-100 group cursor-pointer">
                <summary className="font-bold text-lg text-stone-900 list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-[#D74F36] text-xl transition-transform group-open:rotate-180">+</span>
                </summary>
                <p className="text-stone-600 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;