import Link from 'next/link';

// ProductsHero: Displays page title, breadcrumb and tagline
export default function ProductsHero() {
  return (
    <section className="relative px-15 py-5 md:py-6 bg-[#FFFBF5] overflow-hidden">

      {/* Injects custom CSS keyframes to animate the text reveal and underline drawing */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. Keyframe for drawing the orange underline stroke */
        @keyframes drawLine {
          0% {
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        /* 2. Keyframe for sliding/wiping the text from left to right */
        @keyframes writeReveal {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }

        /* Utility classes assigned to the elements below */
        .animate-draw-line {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawLine 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
        }
        .animate-write-text {
          animation: writeReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
      `}} />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Column: Breadcrumb and Title */}
        <div className="w-full md:w-1/2 text-left pl-2 md:pl-4">
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-[#FF6600] transition">Home</Link>
            <span>&gt;</span>
            <span className="text-[#FF6600] font-medium">Products</span>
          </div>

          <h1 className="text-6xl md:text-6xl font-extrabold tracking-tight text-[#1A202C] leading-tight">
            Our <span className="text-[#FF6600]">Products</span>
          </h1>
          <p className="text-[#4A5568] text-sm md:text-base mt-3 max-w-lg leading-relaxed">
            Innovative solutions built to help your business grow, streamline operations, and drive productivity.
          </p>
        </div>

        {/* Right Column: Curving SVG text */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="absolute -inset-16 md:-inset-24 bg-gradient-to-tr from-orange-200/90 via-orange-100/50 to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl pointer-events-none -z-0"></div>

          <div className="relative z-10 w-full max-w-sm px-4 py-2 flex flex-col items-center">
            <div className="w-full animate-write-text opacity-0">
              <svg viewBox="0 0 340 110" className="w-full h-auto overflow-visible">
                <path id="curvePath1" d="M 20,40 Q 170,10 320,45" fill="transparent" />
                <path id="curvePath2" d="M 20,78 Q 170,48 320,83" fill="transparent" />
                
                <text className="font-serif italic text-xl md:text-2xl fill-[#1A202C] tracking-wide font-medium">
                  <textPath href="#curvePath1" startOffset="50%" textAnchor="middle">
                    One Partner,
                  </textPath>
                </text>
                
                <text className="font-serif italic text-xl md:text-2xl fill-[#1A202C] tracking-wide font-medium">
                  <textPath href="#curvePath2" startOffset="50%" textAnchor="middle">
                    Multiple Possibilities
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Orange underline */}
            <svg viewBox="0 0 300 20" className="w-48 h-4 overflow-visible -mt-2">
              <path 
                d="M 10,12 Q 150,2 290,14" 
                fill="transparent" 
                stroke="#FF6600" 
                strokeWidth="3" 
                strokeLinecap="round" 
                opacity="0.9"
                className="animate-draw-line"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}