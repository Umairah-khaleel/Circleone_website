// AboutJourney: Displays the company's chronological timeline milestones from 2020 to 2025
export default function AboutJourney() {
  const milestones = [
    { year: "2020", text: "Founded Circle One" },
    { year: "2021", text: "Launched POS System" },
    { year: "2022", text: "Expanded to LMS" },
    { year: "2024", text: "Introduced Automobile Solutions" },
    { year: "2025", text: "Serving 200+ Clients" },
  ];

  return (
    <section className="relative px-6 md:px-16 py-3 bg-white border-t border-orange-100/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A202C] mb-12">
          Our Journey
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Horizontal Connecting Line */}
          <div className="absolute top-3 left-4 right-4 h-0.5 bg-[#FF6600]/30 hidden md:block z-0"></div>

          {/* Milestones Grid / Flex Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {milestones.map((item, index) => (
              <div key={index} className="flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-2">
                
                {/* Timeline Dot */}
                <div className="w-6 h-6 rounded-full bg-[#FF6600] border-4 border-[#FFFBF5] shadow-md flex-shrink-0"></div>
                
                {/* Milestone Details */}
                <div>
                  <h4 className="text-base font-extrabold text-[#1A202C]">{item.year}</h4>
                  <p className="text-gray-600 text-xs md:text-sm mt-1 leading-relaxed">{item.text}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}