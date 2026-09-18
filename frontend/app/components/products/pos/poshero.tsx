import Link from 'next/link';

// POSHero: Displays the breadcrumb, title, description, action buttons, and POS terminal preview for POS Systems
export default function POSHero() {
  return (
    <section className="relative px-15 py-5 md:py-6 bg-[#FFFBF5] overflow-hidden">
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

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Column: Breadcrumb, Heading, Subtitle & Buttons */}
        <div className="flex-1 text-left md:pr-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-1">
            <Link href="/" className="hover:text-[#FF6600] transition">Home</Link>
            <span>&gt;</span>
            <Link href="/products" className="hover:text-[#FF6600] transition">Products</Link>
            <span>&gt;</span>
            <span className="text-[#FF6600] font-medium">POS Systems</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A202C] leading-tight">
            POS <span className="text-[#FF6600]">Systems</span>
          </h1>

          <p className="text-[#4A5568] text-base md:text-lg mt-4 max-w-xl">
            A complete point of sale solution to manage your business easily and efficiently.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-8 flex items-center gap-4">
            <button className="bg-[#FF6600] hover:bg-[#E65C00] text-white font-semibold px-6 py-2.5 rounded-full shadow-sm transition text-sm">
              Request a Demo
            </button>
            <button className="bg-white border border-orange-200 hover:border-orange-300 text-gray-700 font-semibold px-6 py-2.5 rounded-full transition text-sm shadow-sm">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right Column: Hero Image with Entrance Animation */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative [perspective:1000px]">
          <div className="bg-white p-2 rounded-xl shadow-md border border-orange-100/50 max-w-md md:max-w-lg w-full flex items-center justify-center relative animate-page-load-flip">
            <img 
              src="/pos.jpg" 
              alt="Circle One POS Systems Terminal Dashboard" 
              className="w-full h-auto object-contain relative z-10 drop-shadow-md rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}