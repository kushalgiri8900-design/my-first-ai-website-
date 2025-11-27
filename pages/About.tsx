import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { TEAM } from '../constants';

const About: React.FC = () => {
  const sourcingData = [
    { name: 'Local Farms', value: 65 },
    { name: 'Imported (Italy)', value: 25 },
    { name: 'House Grown', value: 10 },
  ];
  const COLORS = ['#D74F36', '#292524', '#78716c'];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-stone-900 text-white py-32 relative overflow-hidden">
         <img src="https://picsum.photos/1920/600?random=3" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Kitchen background" />
         <div className="relative max-w-7xl mx-auto px-4 text-center">
           <h1 className="text-6xl font-serif font-bold mb-6">Our Story</h1>
           <p className="text-xl max-w-3xl mx-auto text-stone-200 leading-relaxed font-light">
             Bottega began with a simple idea: bring honest, seasonal Italian cooking to the neighborhood. 
             Our kitchen blends tradition with careful technique so each plate is simple, bright, and satisfying.
           </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Philosophy & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-center">
          <div>
            <span className="text-[#D74F36] font-bold tracking-widest text-xs uppercase mb-2 block">Our Philosophy</span>
            <h2 className="text-4xl font-serif font-bold mb-8 text-stone-900">Seasonal ingredients, slow technique, zero shortcuts.</h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                We source local produce, make pasta by hand every morning, and build pizzas in a high-heat stone oven.
              </p>
              <p>
                We believe in sustainability, composting, minimal-waste menu practices, and responsibly sourced seafood.
              </p>
            </div>
          </div>
          <div className="bg-[#fdfdfc] p-10 rounded-2xl shadow-lg border border-stone-100">
             <h3 className="text-center font-serif font-bold text-xl mb-6">Sourcing Breakdown</h3>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sourcingData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sourcingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36}/>
                  </PieChart>
                </ResponsiveContainer>
             </div>
             <p className="text-center text-xs text-stone-500 mt-4">We prioritize local partnerships whenever possible.</p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900">Meet The Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col sm:flex-row gap-8 items-center bg-[#fdfdfc] p-8 rounded-xl hover:shadow-lg transition-all border border-stone-100">
                <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-white" />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-stone-900 mb-1">{member.name}</h3>
                  <p className="text-[#D74F36] font-bold text-sm tracking-wide uppercase mb-4">{member.role}</p>
                  <p className="text-stone-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community */}
        <div className="bg-[#D74F36]/5 rounded-3xl p-16 text-center border border-[#D74F36]/10">
           <h2 className="text-3xl font-serif font-bold mb-6 text-stone-900">Community & Sustainability</h2>
           <p className="text-stone-700 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
             We are proud to partner with local farms and suppliers to support our regional ecosystem. 
             From minimal-waste menu practices to composting, we are committed to leaving a smaller footprint.
           </p>
           <button className="text-[#D74F36] font-bold border-b-2 border-[#D74F36] hover:text-[#B7372C] hover:border-[#B7372C] transition-colors uppercase tracking-widest text-sm pb-1">
             Join our newsletter for updates
           </button>
        </div>

      </div>
    </div>
  );
};

export default About;