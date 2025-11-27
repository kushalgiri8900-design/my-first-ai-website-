import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Reservations: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-stone-50">
        <CheckCircle className="w-24 h-24 text-[#D74F36] mb-8" />
        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Request Received!</h2>
        <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
          Thank you for your request. We will confirm your table shortly via email.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-[#D74F36] font-bold hover:text-[#B7372C] transition-colors uppercase tracking-wide border-b-2 border-[#D74F36]"
        >
          Make another reservation
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Book a Table</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Reservations recommended for dinner and weekends. Walk-ins welcome when space permits. 
            For parties larger than 8, please contact us directly at <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#D74F36] font-bold hover:text-[#B7372C]">{BUSINESS_INFO.phone}</a>.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden md:flex">
          {/* Decorative Side */}
          <div className="hidden md:block md:w-5/12 relative bg-stone-900">
            <img 
              src="https://picsum.photos/600/900?random=6" 
              alt="Dining atmosphere" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="font-serif text-3xl font-bold mb-4">Dining Hours</h3>
              <p className="text-stone-200 text-lg leading-relaxed">{BUSINESS_INFO.hours}</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-16 md:w-7/12">
             <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-stone-800 font-bold mb-2 flex items-center text-sm uppercase tracking-wide">
                      <Calendar className="w-4 h-4 mr-2 text-[#D74F36]" /> Date
                    </label>
                    <input type="date" required className="w-full p-3 border-b-2 border-stone-200 focus:border-[#D74F36] outline-none bg-transparent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-stone-800 font-bold mb-2 flex items-center text-sm uppercase tracking-wide">
                      <Clock className="w-4 h-4 mr-2 text-[#D74F36]" /> Time
                    </label>
                    <select required className="w-full p-3 border-b-2 border-stone-200 focus:border-[#D74F36] outline-none bg-transparent transition-colors">
                      <option>5:00 PM</option>
                      <option>5:30 PM</option>
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                      <option>8:30 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                   <label className="block text-stone-800 font-bold mb-2 flex items-center text-sm uppercase tracking-wide">
                      <Users className="w-4 h-4 mr-2 text-[#D74F36]" /> Party Size
                    </label>
                   <select required className="w-full p-3 border-b-2 border-stone-200 focus:border-[#D74F36] outline-none bg-transparent transition-colors">
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} People</option>)}
                   </select>
                </div>

                <div className="pt-4 space-y-6">
                   <input type="text" placeholder="Full Name" required className="w-full p-3 border-b-2 border-stone-200 focus:border-[#D74F36] outline-none bg-transparent transition-colors placeholder-stone-400" />
                   <input type="email" placeholder="Email Address" required className="w-full p-3 border-b-2 border-stone-200 focus:border-[#D74F36] outline-none bg-transparent transition-colors placeholder-stone-400" />
                   <input type="tel" placeholder="Phone Number" required className="w-full p-3 border-b-2 border-stone-200 focus:border-[#D74F36] outline-none bg-transparent transition-colors placeholder-stone-400" />
                   <textarea placeholder="Special Requests (Allergies, Occasions)" rows={3} className="w-full p-3 border-b-2 border-stone-200 focus:border-[#D74F36] outline-none bg-transparent transition-colors placeholder-stone-400 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#D74F36] hover:bg-[#B7372C] text-white font-bold text-lg py-4 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-4">
                  Confirm Reservation
                </button>
             </form>
          </div>
        </div>
        
        <div className="text-center mt-12 text-sm text-stone-400">
           <p>Powered by OpenTable (Placeholder)</p>
        </div>
      </div>
    </div>
  );
};

export default Reservations;