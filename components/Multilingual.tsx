
import React from 'react';

// Define the interface for Multilingual component props to fix assignment error in App.tsx
interface MultilingualProps {
  lang: string;
}

const Multilingual: React.FC<MultilingualProps> = ({ lang }) => {
  const languages = [
    { name: 'Hindi', native: 'नमस्ते' },
    { name: 'Arabic', native: 'أهلاً' },
    { name: 'Spanish', native: 'Hola' },
    { name: 'Marathi', native: 'नमस्कार' },
    { name: 'Telugu', native: 'నమస్కారం' },
    { name: 'English', native: 'Hello' },
    { name: 'French', native: 'Bonjour' },
    { name: 'German', native: 'Guten Tag' }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Text in background */}
      <div className="absolute top-1/2 left-0 w-full whitespace-nowrap opacity-[0.02] text-[20vw] font-black -translate-y-1/2 pointer-events-none uppercase tracking-tighter">
        GLOBAL SCALE • GLOBAL SCALE • GLOBAL SCALE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {/* Renamed local map variable to 'langItem' to avoid shadowing 'lang' prop */}
               {languages.map((langItem, idx) => (
                 <div key={idx} className="aspect-square bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col items-center justify-center group hover:bg-slate-900 transition-all duration-500 hover:scale-105 shadow-sm">
                   <div className="text-xl font-black text-slate-900 group-hover:text-white mb-2 transition-colors">{langItem.native}</div>
                   <div className="text-[10px] font-black text-slate-400 group-hover:text-slate-500 uppercase tracking-widest transition-colors">{langItem.name}</div>
                 </div>
               ))}
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">
              Global Deployment
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              Scale Without <br />Language Barriers.
            </h2>
            <p className="text-xl text-slate-500 font-medium mb-10 leading-relaxed">
              ORAH captures and qualifies leads in their native tongue. Our proprietary LLM-Voice engine understands 50+ dialects with human-like accuracy and local nuances.
            </p>
            
            <ul className="space-y-4">
               {[
                 "Nuanced accent recognition for 20+ Indian dialects",
                 "Zero-latency translation for real-time CRM updates",
                 "Culturally sensitive negotiation patterns"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-4 text-slate-700 font-bold tracking-tight">
                    <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px]">✓</div>
                    {item}
                 </li>
               ))}
            </ul>

            <div className="mt-12 flex items-center gap-8">
               <div>
                  <div className="text-3xl font-black text-slate-900">50+</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Languages</div>
               </div>
               <div className="h-10 w-px bg-slate-200" />
               <div>
                  <div className="text-3xl font-black text-slate-900">0.4s</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Response Latency</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multilingual;
