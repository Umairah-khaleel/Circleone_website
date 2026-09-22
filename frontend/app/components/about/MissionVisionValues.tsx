"use client";

import { useState, useEffect } from 'react';

// MissionVisionValues: Displays mission, vision, and values cards with horizontal icon layout, soft cream card styling, and typing animation
export default function MissionVisionValues() {
  const missionText = "To empower businesses with innovative technology solutions.";
  const visionText = "To be a trusted partner in digital transformation across industries.";
  const valuesText = "Innovation, integrity, customer focus, and continuous improvement.";

  const [displayedMission, setDisplayedMission] = useState("");
  const [displayedVision, setDisplayedVision] = useState("");
  const [displayedValues, setDisplayedValues] = useState("");

  const [stage, setStage] = useState(0); // 0: mission, 1: vision, 2: values, 3: done

  // Sequential typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (stage === 0) {
      if (displayedMission.length < missionText.length) {
        timeout = setTimeout(() => {
          setDisplayedMission(missionText.slice(0, displayedMission.length + 1));
        }, 30);
      } else {
        timeout = setTimeout(() => setStage(1), 400); // pause before next
      }
    } else if (stage === 1) {
      if (displayedVision.length < visionText.length) {
        timeout = setTimeout(() => {
          setDisplayedVision(visionText.slice(0, displayedVision.length + 1));
        }, 30);
      } else {
        timeout = setTimeout(() => setStage(2), 400); // pause before next
      }
    } else if (stage === 2) {
      if (displayedValues.length < valuesText.length) {
        timeout = setTimeout(() => {
          setDisplayedValues(valuesText.slice(0, displayedValues.length + 1));
        }, 30);
      } else {
        timeout = setTimeout(() => setStage(3), 400); // writing complete, stop cursor
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedMission, displayedVision, displayedValues, stage]);

  return (
    <section className="relative px-6 md:px-16 py-12 bg-white border-t border-orange-100/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Mission Card */}
        <div className="bg-[#FFFBF5] p-6 rounded-3xl shadow-sm border border-orange-100/50 flex items-center gap-5 transition hover:shadow-md">
          <div className="w-14 h-14 rounded-full bg-[#FF6600] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
            {/* Mission Icon */}
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-extrabold text-[#1A202C] mb-1">Our Mission</h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed min-h-[40px]">
              {displayedMission}
              {stage === 0 && <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-[#FF6600] animate-pulse"></span>}
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-[#FFFBF5] p-6 rounded-3xl shadow-sm border border-orange-100/50 flex items-center gap-5 transition hover:shadow-md">
          <div className="w-14 h-14 rounded-full bg-[#FF6600] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
            {/* Vision Icon */}
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-extrabold text-[#1A202C] mb-1">Our Vision</h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed min-h-[40px]">
              {displayedVision}
              {stage === 1 && <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-[#FF6600] animate-pulse"></span>}
            </p>
          </div>
        </div>

        {/* Values Card */}
        <div className="bg-[#FFFBF5] p-6 rounded-3xl shadow-sm border border-orange-100/50 flex items-center gap-5 transition hover:shadow-md">
          <div className="w-14 h-14 rounded-full bg-[#FF6600] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
            {/* Values Icon */}
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-extrabold text-[#1A202C] mb-1">Our Values</h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed min-h-[40px]">
              {displayedValues}
              {stage === 2 && <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-[#FF6600] animate-pulse"></span>}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}