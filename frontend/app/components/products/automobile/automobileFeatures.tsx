// AutomobileFeatures: Displays the 6 key features with sequential staggering animation, orange glow hover effect, and soft orange icon backdrops
export default function AutomobileFeatures() {
  const features = [
    {
      title: "Workshop Management",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Vehicle History",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Service Reminders",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Parts Inventory",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Invoicing & Billing",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6m-6-4h6m-9-4h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
        </svg>
      ),
    },
    {
      title: "Detailed Reports",
      icon: (
        <svg className="w-6 h-6 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-8 px-6">
      {/* Sequential entrance animation and orange glow hover styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sequentialFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-sequential {
          animation: sequentialFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A202C] mb-8 text-left">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 flex items-center gap-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,102,0,0.2)] hover:border-orange-200 hover:-translate-y-1 cursor-pointer animate-sequential"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Soft Orange Icon Container */}
              <div className="w-10 h-10 rounded-xl bg-[#FFE8D6] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              {/* Feature Title */}
              <div>
                <h3 className="font-semibold text-[#1A202C] text-base">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}