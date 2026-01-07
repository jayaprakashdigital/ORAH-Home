
import React from 'react';

const segments = [
  { title: "Real Estate", icon: "🏢", benefit: "Automate inventory sales and site visit scheduling instantly." },
  { title: "Healthcare", icon: "🏥", benefit: "Pre-qualify patient inquiries and manage appointment bookings." },
  { title: "Education", icon: "🎓", benefit: "Nurture student enrollments and qualify leads for admissions." },
  { title: "Automotive", icon: "🚗", benefit: "Convert test-drive requests into showroom visits automatically." },
  { title: "Financial Services", icon: "💰", benefit: "Securely qualify loan applications and wealth prospects." },
  { title: "SaaS & Tech", icon: "💻", benefit: "Schedule product demos and qualify high-intent trials 24/7." },
  { title: "Retail & E-comm", icon: "🛍️", benefit: "Handle bulk order inquiries and VIP support with zero wait." },
  { title: "Hospitality", icon: "✈️", benefit: "Manage booking requests and itinerary inquiries seamlessly." }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-blue-600 font-black text-[9px] uppercase tracking-[0.25em] mb-4">Cross-Industry Platform</div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Engineered for Your Growth.</h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed">
            Industry-specific automation for high-stakes interactions. ORAH is built to convert conversations into revenue across every sector.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((segment, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform shadow-inner">{segment.icon}</div>
              <h3 className="text-sm font-black text-slate-900 mb-1 tracking-tight">{segment.title}</h3>
              <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{segment.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
