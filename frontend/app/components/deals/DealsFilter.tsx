"use client"; // Required for interactivity

import React from "react";

interface DealsFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function DealsFilter({
  activeCategory,
  onSelectCategory,
}: DealsFilterProps) {
  const categories = [
    { id: "all", label: "All Deals" },
    { id: "pos", label: "POS Systems" },
    { id: "lms", label: "LMS Systems" },
    { id: "automobile", label: "Automobile Systems" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-10">
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 shadow-sm ${
                isActive
                  ? "bg-orange-500 text-white font-bold shadow-orange-500/25"
                  : "bg-gray-100 text-gray-700 font-bold hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}