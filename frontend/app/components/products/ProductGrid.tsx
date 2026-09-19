import Link from 'next/link';

// ProductGrid: Displays product cards
export default function ProductGrid() {
  const products = [
    {
      title: "POS Systems",
      desc: "Streamline your sales, inventory and customer management with our powerful POS solutions.",
      image: "/pos.jpg",
      link: "/products/pos-systems",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "LMS Systems",
      desc: "Digital learning solutions for schools, institutes and corporate training.",
      image: "/lms-product.png",
      link: "/products/lms-systems",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      title: "Automobile Systems",
      desc: "Complete vehicle management solutions for service centers, dealerships and fleet operators.",
      image: "/auto-product.png",
      link: "/products/automobile-systems",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
  ];

  return (
    <section className="px-6 py-1 max-w-7xl mx-auto">

       {/* Product cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-left">
        {products.map((item, index) => (
          <div 
            key={index}
            className="bg-[#FFFBF5] border border-orange-100 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
          >
            {/* Orange Gradient Background Blob */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-200/40 rounded-full blur-2xl pointer-events-none transition-all duration-300 group-hover:bg-orange-300/60"></div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-[#FFE8D6] flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            {/* Title and description */}
            <h3 className="text-xl font-bold text-[#1A202C] relative z-10">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed relative z-10 min-h-[40px]">
              {item.desc}
            </p>

            {/* Image */}
            <div className="my-8 flex justify-center relative z-10">
              <img 
                src={item.image} 
                alt={item.title} 
                className="max-h-40 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Learn More link */}
            <div className="relative z-10 pt-2">
              <Link 
                href={item.link} 
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-200 bg-white text-[#FF6600] font-semibold text-sm transition-all duration-200 hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] shadow-sm"
              >
                <span>Learn More</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}