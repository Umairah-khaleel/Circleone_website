"use client";

import React from 'react';
import Link from 'next/link';

interface DealsGridProps {
  activeCategory: string;
}

export default function DealsGrid({ activeCategory = "all" }: DealsGridProps) {
  const deals = [
    {
      id: "pos",
      title: "POS Starter Pack",
      desc: "Perfect for small businesses. Get started with our POS system at a special price.",
      discount: "20% OFF",
      currentPrice: "LKR 120,000",
      originalPrice: "LKR 150,000",
      link: "/deals",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "lms",
      title: "LMS Pro Package",
      desc: "Ideal for schools & institutes. Unlock premium features at a discounted rate.",
      discount: "30% OFF",
      currentPrice: "LKR 175,000",
      originalPrice: "LKR 250,000",
      link: "/deals",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      id: "automobile",
      title: "Automobile Suite",
      desc: "Complete solution for garages and dealerships with advanced management tools.",
      discount: "15% OFF",
      currentPrice: "LKR 255,000",
      originalPrice: "LKR 300,000",
      link: "/deals",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
  ];

  // Filter deals 
  const filteredDeals = activeCategory === "all" 
    ? deals 
    : deals.filter((item) => item.id === activeCategory);

  return (
    <section className="px-8 py- 1 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 text-left">
        {filteredDeals.map((item, index) => (
          <div 
            key={index}
            className="bg-[#FFFBF5] border border-orange-100 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-200/40 rounded-full blur-2xl pointer-events-none transition-all duration-300 group-hover:bg-orange-300/60"></div>

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#FFE8D6] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <span className="bg-[#FF6600] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                {item.discount}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#1A202C] relative z-10">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed relative z-10 min-h-[40px]">
              {item.desc}
            </p>

            <div className="my-6 relative z-10 flex items-baseline gap-3">
              <span className="text-lg font-black text-[#1A202C]">{item.currentPrice}</span>
              <span className="text-sm text-gray-400 line-through font-medium">{item.originalPrice}</span>
            </div>

            <div className="relative z-10 pt-2">
              <Link 
                href={item.link} 
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FF6600] text-white font-semibold text-sm transition-all duration-200 hover:bg-[#E65C00] shadow-md shadow-orange-500/20"
              >
                <span>View Deal</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}