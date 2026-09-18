import Link from 'next/link';
// Hero section with entrance animation and text content
export default function Hero() {
  return (
    <section className="bg-[#FFFBF5] pt-6 pb-12 md:py-16 px-6 relative overflow-hidden">
      {/* Page load entrance animation styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pageLoadFlip {
          0% {
            opacity: 0;
            transform: translateY(20px) rotateX(15deg) rotateY(-10deg) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) rotateY(0deg) scale(1);
          }
        }
        .animate-page-load-flip {
          animation: pageLoadFlip 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Column: Heading & Buttons */}
        <div className="flex-1 text-left md:pr-6">
          <span className="text-[#FF6600] font-semibold text-xs tracking-wider uppercase bg-[#FFE8D6] px-3 py-1 rounded-full inline-block">
            Smart Solutions For A Better Tomorrow
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A202C] mt-5 leading-tight">
            Technology That Moves <br/>Your <span className="text-[#FF6600]">Business Forward</span>
          </h1>
          <p className="text-[#4A5568] text-base md:text-lg mt-4 max-w-xl">
            Circle One delivers innovative software solutions to simplify operations, enhance productivity, and drive growth across industries.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-8 flex items-center gap-4">
            <Link 
              href="/products" 
              className="bg-[#FF6600] hover:bg-[#E65C00] text-white font-semibold px-6 py-2.5 rounded-full shadow-sm transition text-sm inline-block text-center"
            >
              Explore Our Products &rarr;
            </Link>
            <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded-full transition text-sm shadow-sm">
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Column: Hero Image with Entrance Animation */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 w-full [perspective:1000px]">
          <div className="bg-white p-3 md:p-4 rounded-3xl shadow-xl border border-orange-100/50 max-w-2xl w-full flex items-center justify-center relative animate-page-load-flip">
            <img 
              src="/pos.jpg" 
              alt="Circle One POS Terminal and Tablet" 
              className="w-full h-auto object-contain relative z-10 drop-shadow-md rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}