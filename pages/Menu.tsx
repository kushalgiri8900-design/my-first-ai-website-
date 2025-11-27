import React from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const MenuSection: React.FC<{ title: string; items: MenuItem[] }> = ({ title, items }) => (
  <div className="mb-16">
    <h3 className="text-3xl font-serif font-bold text-stone-900 mb-10 border-b-2 border-[#D74F36] pb-2 inline-block">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
      {items.map((item, idx) => (
        <div key={idx} className="group w-full">
          <div className="flex justify-between items-end mb-1">
            <h4 className="text-xl font-bold text-stone-900 group-hover:text-[#D74F36] transition-colors whitespace-nowrap pr-2">{item.name}</h4>
            <div className="flex-grow border-b-2 border-dotted border-stone-300 mb-1.5 mx-2"></div>
            <span className="text-xl font-medium text-stone-800 whitespace-nowrap pl-2">{item.price}</span>
          </div>
          <p className="text-stone-500 text-sm leading-relaxed italic">{item.description}</p>
          {item.dietary && (
            <div className="mt-2 flex gap-2">
              {item.dietary.map(d => (
                <span key={d} className="text-[10px] uppercase tracking-wider font-bold text-stone-400 border border-stone-200 px-1.5 py-0.5 rounded-sm">{d}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Menu: React.FC = () => {
  const antipasti = MENU_ITEMS.filter(i => i.category === 'antipasti');
  const pasta = MENU_ITEMS.filter(i => i.category === 'pasta');
  const pizza = MENU_ITEMS.filter(i => i.category === 'pizza');
  const mains = MENU_ITEMS.filter(i => i.category === 'mains');
  const dessert = MENU_ITEMS.filter(i => i.category === 'dessert');

  return (
    <div className="bg-[#f9f8f6] min-h-screen pb-20">
      <div className="bg-white py-20 shadow-sm mb-12 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-2 bg-[#D74F36]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#D74F36] font-bold tracking-widest text-xs uppercase mb-4 block">Seasonal & Fresh</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-stone-900">Our Menu</h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto font-light">
            We change parts of the menu seasonally. Below is a sample of our core offerings — pasta and pizza are available daily.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-16 shadow-xl rounded-sm border-t-4 border-[#D74F36]">
        <MenuSection title="Antipasti & Small Plates" items={antipasti} />
        <MenuSection title="Handmade Pasta" items={pasta} />
        <MenuSection title="Wood-Fired Pizza" items={pizza} />
        <MenuSection title="Entrees & Mains" items={mains} />
        <MenuSection title="Desserts" items={dessert} />

        <div className="mt-16 pt-12 border-t border-stone-200 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Beverage Highlights</h3>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">Curated wine list (by the glass & bottle), Aperitivi & classic cocktails, Local draft beers & non-alcoholic house sodas.</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 border-2 border-[#D74F36] text-[#D74F36] font-bold rounded-full hover:bg-[#D74F36] hover:text-white transition-colors uppercase tracking-wider text-sm">
              Download Full PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;