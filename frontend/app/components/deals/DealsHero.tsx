import Link from 'next/link';

// DealsHero: Displays page title, breadcrumb, tagline, and deal illustration graphic with hover helper
export default function DealsHero() {
  return (
    <section className="relative px-15 py-5 md:py-6 bg-[#FFFBF5] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Column: Breadcrumb, Heading, and Tagline */}
        <div className="w-full md:w-1/2 text-left pl-2 md:pl-4">
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-[#FF6600] transition">Home</Link>
            <span>&gt;</span>
            <span className="text-[#FF6600] font-medium">Deals</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1A202C] leading-tight">
            Exclusive <span className="text-[#FF6600]">Deals</span>
          </h1>
          
          <p className="text-[#4A5568] text-sm md:text-base mt-3 max-w-lg leading-relaxed">
            Get the best offers on our software solutions. Limited time offers to help you grow your business.
          </p>
        </div>

        {/* Right Column: Image Container with Placeholder & Hover Effect */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          {/* Background gradient blob matching your theme */}
          <div className="absolute -inset-16 md:-inset-24 bg-gradient-to-tr from-orange-200/90 via-orange-100/50 to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl pointer-events-none -z-0"></div>

          {/* Graphic Container */}
          <div className="relative z-10 w-full max-w-md px-4 py-2 flex flex-col items-center justify-center">
            <div className="bg-gray-50 border border-gray-200/80 rounded-3xl p-4 shadow-sm flex items-center justify-center w-full min-h-[260px] md:min-h-[280px] relative overflow-hidden group">
              
              <img 
                src="/pos.jpg" 
                alt="Exclusive deals illustration" 
                className="w-full h-auto object-cover rounded-2xl shadow-md"
              />

              {/* Optional helper text if image is missing */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="bg-white/90 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full shadow">
                  Add your image here
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}