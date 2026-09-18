// LMSShowcase: Displays a side-by-side layout with an image placeholder on the left and a checklist card with a Get Started button on the right
export default function LMSShowcase() {
  const items = [
    "Schools & Universities",
    "Training Institutes",
    "Corporate Training",
    "Skill Development",
    "And More...",
  ];

  return (
    <section className="bg-white py-7 px-6">
      {/* Sequential entrance animation and hover effects */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes showcaseFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-showcase {
          animation: showcaseFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-showcase">
        {/* Left Column: Image Container with Placeholder */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-4 shadow-sm flex items-center justify-center min-h-[320px] md:min-h-[380px] relative overflow-hidden group">
          <img 
            src="/placeholder-learning.jpg" 
            alt="Student learning on laptop" 
            className="w-full h-auto object-cover rounded-2xl shadow-md"
          />
          {/* helper text if image is missing */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="bg-white/90 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full shadow">
              Add your image here
            </span>
          </div>
        </div>

        {/* Right Column: White Container with Checklist and CTA */}
        <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A202C] mb-6">
              Designed for Modern Learning
            </h3>

            <ul className="space-y-4">
              {items.map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Orange Tick Icon */}
                  <div className="w-6 h-6 rounded-full bg-[#FFE8D6] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started Button */}
          <div className="mt-8">
            <button className="bg-[#FF6600] hover:bg-[#E65C00] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm flex items-center gap-2">
              Get Started &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}