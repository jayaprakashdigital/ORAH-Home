
import React from 'react';

const steps = [
  { 
    title: "Omnichannel Sync", 
    desc: "ORAH connects to Meta, Google, and your website. Leads are ingested 24/7 the micro-second they arrive.",
    icon: "📡",
    label: "Step 01"
  },
  { 
    title: "Instant Voice Outreach", 
    desc: "Within 60 seconds, ORAH initiates a human-like call in the lead's preferred language to confirm interest.",
    icon: "⚡",
    label: "Step 02"
  },
  { 
    title: "Deep Qualification", 
    desc: "Our engine analyzes 15+ intent signals (budget, possession, location) and scores the lead automatically.",
    icon: "🛡️",
    label: "Step 03"
  },
  { 
    title: "Autonomous Closing", 
    desc: "Site visits are booked directly into your CRM. Your team walks in to a day full of qualified appointments.",
    icon: "🏆",
    label: "Step 04"
  }
];

const avatars = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
];

const Process: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-slate-50 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.25em] mb-4">The Methodology</div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-tight px-4">From Lead to Handshake.</h2>
          <p className="text-slate-500 font-medium px-6">A fully autonomous pipeline designed to eliminate speed-to-lead friction forever.</p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-2 relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8 md:mb-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500 border border-slate-100 shadow-inner">
                      {step.icon}
                    </div>
                    <span className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                      {step.label}
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 md:mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>

                  <div className="mt-8 md:mt-10 pt-6 border-t border-slate-50 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                     <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Automation Verified</span>
                  </div>
                </div>
                
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-5 translate-x-0 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
           <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 md:px-8 py-3 md:py-4 bg-white rounded-3xl md:rounded-full border border-slate-200 shadow-xl shadow-slate-100">
              <div className="flex -space-x-2 md:-space-x-3">
                 {avatars.map((url, i) => (
                   <img 
                    key={i} 
                    src={url} 
                    alt="Customer Avatar"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover bg-slate-200" 
                   />
                 ))}
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-500 tracking-tight">
                Join <span className="text-slate-900 font-black">250+</span> Forward-Thinking Real Estate Teams Scaling with ORAH
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
