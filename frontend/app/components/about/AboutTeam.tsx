import Link from 'next/link';

// TeamThatCares: Displays the team image on the left and a framed card with title, description, and solid orange action button on the right
export default function TeamThatCares() {
  return (
    <section className="relative px-6 md:px-16 py-14 bg-white border-t border-orange-100/40 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Team Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-orange-100/60 max-w-lg w-full">
            <img 
              src="/team-working.jpg" 
              alt="Circle One Team Working Together" 
              className="w-full h-auto object-cover rounded-xl shadow-inner"
            />
          </div>
        </div>

        {/* Right Column: Framed Card with Title, Description & Solid Orange Action Button */}
        <div className="w-full md:w-1/2">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100/60 text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A202C] mb-4">
              A Team That Cares
            </h3>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our team is made up of passionate individuals who believe in using technology to make a positive impact. We work closely with our clients to understand their needs and deliver solutions that truly matter.
            </p>

            {/* Action Button wrapped with Next.js Link (Solid Orange Style) */}
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full transition shadow-sm text-sm"
            >
              Join Our Journey 
              <span className="text-lg leading-none">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}