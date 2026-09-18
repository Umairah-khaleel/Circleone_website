import Link from 'next/link';

// CTA Section: Horizontal orange banner with action button
export default function CTASection() {
  return (
    <section className="bg-[#FF6600] py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Title & Subtitle */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Let's Build a Smarter Tomorrow
          </h2>
          <p className="text-orange-100 text-sm md:text-base mt-1">
            Partner with Circle One and take your business to the next level.
          </p>
        </div>

        {/* Right: White Button */}
        <div>
          <Link 
              href="/contact" 
              className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded-full transition text-sm shadow-sm inline-block text-center"
            >
              Contact Us
            </Link>
        </div>
      </div>
    </section>
  );
}