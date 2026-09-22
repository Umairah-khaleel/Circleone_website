import Link from 'next/link';

// AboutHero: Displays the main heading, tagline, description, and office image for the About Us page
export default function AboutHero() {
  return (
    <section className="relative px-6 md:px-12 py-10 md:py-6 bg-[#FFFBF5] overflow-hidden">
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

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Column: Heading, Subtitle & Description */}
        <div className="flex-1 text-left md:pr-6 md:-mt-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A202C] leading-tight">
            About <span className="text-[#FF6600]">Circle One</span>
          </h1>

          <p className="text-gray-500 font-medium text-sm md:text-base mt-2">
            People. Technology. Progress.
          </p>

          <p className="text-[#4A5568] text-base md:text-lg mt-4 max-w-xl leading-relaxed">
            We are a software solutions company dedicated to helping businesses grow through innovation. Our focus is on delivering reliable, user-friendly and scalable systems that create real value for our clients.
          </p>
        </div>

        {/* Right Column: Office Image with Entrance Animation */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative [perspective:1000px]">
          <div className="bg-white p-2 rounded-xl shadow-md border border-orange-100/50 max-w-md md:max-w-lg w-full flex items-center justify-center relative animate-page-load-flip">
            <img 
              src="/pos.jpg" 
              alt="Circle One Office Logo" 
              className="w-full h-auto object-contain relative z-10 drop-shadow-md rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}