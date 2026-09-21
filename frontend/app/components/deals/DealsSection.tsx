"use client";

import React, { useState } from "react";
import DealsFilter from "./DealsFilter";
import DealsGrid from "./DealsGrid";

export default function DealsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <DealsFilter 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />
      <DealsGrid 
        activeCategory={activeCategory} 
      />
    </>
  );
}