"use client";
import { useState, useEffect } from "react";

export default function StatsSection() {
  // Counter states
  const [clients, setClients] = useState(0);
  const [products, setProducts] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    // Animate Clients from 0 to 200
    let clientTimer = setInterval(() => {
      setClients((prev) => {
        if (prev < 200) return prev + 5;
        clearInterval(clientTimer);
        return 200;
      });
    }, 30);

    // Animate Products from 0 to 3
    let productTimer = setInterval(() => {
      setProducts((prev) => {
        if (prev < 3) return prev + 1;
        clearInterval(productTimer);
        return 3;
      });
    }, 400);

    // Animate Satisfaction from 0 to 99
    let satisfactionTimer = setInterval(() => {
      setSatisfaction((prev) => {
        if (prev < 99) return prev + 2;
        clearInterval(satisfactionTimer);
        return 99;
      });
    }, 30);

    return () => {
      clearInterval(clientTimer);
      clearInterval(productTimer);
      clearInterval(satisfactionTimer);
    };
  }, []);

  const stats = [
    {
      value: `${clients}+`,
      label: "Happy Clients",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      value: `${products}`,
      label: "Core Products",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      value: `${satisfaction}%`,
      label: "Client Satisfaction",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      value: "24/7",
      label: "Support",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-8 px-6 border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center gap-4">

            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-[#FFF3EC] flex items-center justify-center shrink-0">
              {item.icon}
            </div>

            {/* Value & Label */}
            <div>
              <h4 className="text-2xl md:text-3xl font-extrabold text-[#1A202C]">{item.value}</h4>
              <p className="text-gray-500 text-sm mt-0.5">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}