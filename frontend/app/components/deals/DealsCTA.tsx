import Link from 'next/link';

// DealsCTA: Horizontal light cream banner for enterprise custom deals with a contact button
export default function DealsCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="bg-[#FFFBF5] border border-orange-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        
        {/* Left: Icon, Title & Subtitle */}
        <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
          {/* Small Icon Badge */}
          <div className="w-12 h-12 rounded-full bg-[#FFE8D6] flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1A202C] tracking-tight">
              Custom Deals for Enterprises
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Looking for a customized package? Contact us for special enterprise pricing.
            </p>
          </div>
        </div>

        {/* Right: Orange Contact Button */}
        <div className="shrink-0 w-full md:w-auto">
          <Link 
            href="/contact" 
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF6600] text-white font-semibold text-sm transition-all duration-200 hover:bg-[#E65C00] shadow-md shadow-orange-500/20"
          >
            <span>Contact Us</span>
            <span className="transition-transform duration-200 hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}