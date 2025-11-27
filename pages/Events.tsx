import React from 'react';
import { Mail } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src="https://picsum.photos/1920/1080?random=4" 
          alt="Private dining table setting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">Private Dining</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <span className="text-[#D74F36] font-bold tracking-widest text-xs uppercase block">Gather Together</span>
            <h2 className="text-4xl font-serif font-bold text-stone-900">Host your event at Bottega</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Intimate dinners, rehearsal dinners, corporate lunches — we offer customizable family-style menus, set pricing per head, and full service with staff.
            </p>
            <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-[#D74F36]">
              <h4 className="font-bold text-stone-900 mb-2">Capacity & Details</h4>
              <ul className="space-y-2 text-stone-600">
                <li>• Capacity: Up to 45 guests</li>
                <li>• Full restaurant buyout available</li>
                <li>• Customizable prix fixe menus</li>
                <li>• Sommelier wine pairings</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl border border-stone-100">
            <h3 className="text-2xl font-serif font-bold mb-6 text-stone-900 flex items-center">
              <Mail className="mr-3 text-[#D74F36]" /> Inquire Now
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                  <input type="text" className="w-full p-2 border border-stone-300 rounded focus:ring-[#D74F36] focus:border-[#D74F36]" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                   <input type="email" className="w-full p-2 border border-stone-300 rounded focus:ring-[#D74F36] focus:border-[#D74F36]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Date</label>
                  <input type="date" className="w-full p-2 border border-stone-300 rounded focus:ring-[#D74F36] focus:border-[#D74F36]" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-stone-700 mb-1">Guest Count</label>
                   <input type="number" className="w-full p-2 border border-stone-300 rounded focus:ring-[#D74F36] focus:border-[#D74F36]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Event Type / Details</label>
                <textarea rows={4} className="w-full p-2 border border-stone-300 rounded focus:ring-[#D74F36] focus:border-[#D74F36]"></textarea>
              </div>
              <button className="w-full bg-[#D74F36] hover:bg-[#B7372C] text-white font-bold py-3 rounded transition-colors uppercase tracking-wide text-sm">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;