import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChefHat, Flame, Heart, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=1" 
            alt="Interior at Bottega with chef plating" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight">
            Modern Italian. <br/>
            <span className="text-[#D74F36]">Neighborhood Heart.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-100 font-light max-w-2xl mx-auto">
            Handmade pasta, wood-fired pizza, seasonal small plates, and warm hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link 
              to="/reservations" 
              className="px-8 py-4 bg-[#D74F36] hover:bg-[#B7372C] text-white rounded-full font-bold tracking-wide transition-all transform hover:scale-105 shadow-lg"
            >
              Reserve a Table
            </Link>
            <Link 
              to="/menu" 
              className="px-8 py-4 bg-transparent hover:bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold tracking-wide transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D74F36] font-bold tracking-widest text-xs uppercase mb-2 block">The Experience</span>
            <h2 className="text-4xl font-serif font-bold text-stone-900">Why Bottega</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl bg-[#fdfdfc] border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#D74F36]/10 rounded-full flex items-center justify-center text-[#D74F36] mb-2">
                <ChefHat size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold">Handcrafted Pasta</h3>
              <p className="text-stone-600 leading-relaxed">
                Made fresh daily with local, seasonal ingredients using traditional methods.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl bg-[#fdfdfc] border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#D74F36]/10 rounded-full flex items-center justify-center text-[#D74F36] mb-2">
                <Flame size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold">Wood-Fired Pizza</h3>
              <p className="text-stone-600 leading-relaxed">
                Crispy, blistered dough baked in our high-temperature stone oven.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl bg-[#fdfdfc] border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#D74F36]/10 rounded-full flex items-center justify-center text-[#D74F36] mb-2">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold">Warm Hospitality</h3>
              <p className="text-stone-600 leading-relaxed">
                A welcoming neighborhood-focused dining experience where you feel at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offerings (Split Layout) */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
               <img 
                 src="https://picsum.photos/800/1000?random=2" 
                 alt="Chef plating food" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                 <p className="text-white font-serif text-3xl italic mb-2">"Best pasta in town"</p>
                 <div className="flex text-[#D74F36]">
                   {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                 </div>
                 <p className="text-stone-300 text-sm mt-2 font-bold tracking-wide">— LOCAL FOOD CRITIC</p>
               </div>
             </div>
             
             <div className="space-y-10">
               <div>
                 <span className="text-[#D74F36] font-bold tracking-widest text-xs uppercase mb-2 block">Offerings</span>
                 <h2 className="text-5xl font-serif font-bold text-stone-900 mb-6">Always Something Special</h2>
                 <p className="text-stone-600 text-lg leading-relaxed">
                   Whether it's a quick lunch express pasta or a long, lazy Sunday dinner, we have something for every occasion. Our menu evolves with the seasons.
                 </p>
               </div>

               <div className="space-y-8">
                 <div className="flex items-start">
                   <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md">
                     <Calendar className="text-[#D74F36]" size={28} />
                   </div>
                   <div className="ml-6">
                     <h4 className="text-xl font-bold text-stone-900 mb-1">Rotating Specials</h4>
                     <p className="text-stone-600">Lunch express pasta menus and weekend family pizza specials.</p>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md">
                     <Star className="text-[#D74F36]" size={28} />
                   </div>
                   <div className="ml-6">
                     <h4 className="text-xl font-bold text-stone-900 mb-1">Private Dining & Events</h4>
                     <p className="text-stone-600">Hosting an event? We accommodate up to 45 guests with custom menus.</p>
                     <Link to="/events" className="text-[#D74F36] font-bold text-sm mt-3 inline-flex items-center hover:underline uppercase tracking-wider">
                       Inquire Now <ArrowRight size={14} className="ml-1" />
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-16 text-stone-900">What Our Neighbors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-[#fcfbf9] p-10 rounded-xl relative border border-stone-100 hover:border-[#D74F36]/30 transition-colors">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#D74F36] text-white rounded-full flex items-center justify-center shadow-md">
                   <span className="text-2xl font-serif">"</span>
                </div>
                <p className="text-stone-700 italic mb-8 pt-4 leading-relaxed text-lg">{t.text}</p>
                <div className="flex flex-col items-center justify-center space-y-2">
                   <span className="font-bold text-stone-900 uppercase tracking-wide text-sm">{t.author}</span>
                   <div className="flex text-[#D74F36]">
                     {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-[#D74F36] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready for dinner?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <Link to="/reservations" className="bg-white text-[#D74F36] px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition-colors shadow-xl uppercase tracking-wider">
              Reserve a Table
            </Link>
            <span className="text-white/80 font-serif italic text-xl">or</span>
            <a href="tel:+14155550199" className="text-white border-b-2 border-white/40 hover:border-white pb-1 font-bold transition-all text-xl">
              Call Us (415) 555-0199
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;