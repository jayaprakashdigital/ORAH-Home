
import React from 'react';

const ROI: React.FC = () => {
  return (
    <section id="impact" className="py-16 md:py-20 bg-slate-900 scroll-mt-24 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[9px] mb-6">Business Impact</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
              Revenue Growth <br />Driven by AI.
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-10 font-medium leading-relaxed">
              Eliminate lead leakage. ORAH provides a transparent view of cost-per-qualified lead and total pipeline ROI in real time.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-blue-500 pl-6">
                <div className="text-3xl font-black text-white mb-1">94%</div>
                <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest">Efficiency Gain</div>
              </div>
              <div className="border-l-2 border-slate-700 pl-6">
                <div className="text-3xl font-black text-white mb-1">3.5x</div>
                <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest">Pipeline Velocity</div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="bg-slate-800/40 backdrop-blur-2xl rounded-3xl border border-white/5 p-8 md:p-10 shadow-2xl">
                <div className="space-y-8">
                   <div>
                      <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Impacted Revenue</div>
                      <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">₹18,04,21,000</div>
                   </div>

                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-[11px] font-bold">
                         <span className="text-slate-400">Target Efficiency</span>
                         <span className="text-white">98.2%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-500 w-[98.2%] shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                      <div>
                         <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest block mb-2">Cost/Lead</span>
                         <span className="text-xl font-bold text-white tracking-tight">₹24.50</span>
                      </div>
                      <div>
                         <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest block mb-2">Accuracy</span>
                         <span className="text-xl font-bold text-white tracking-tight">99.4%</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROI;
