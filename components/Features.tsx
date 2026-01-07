
import React from 'react';

const translations: any = {
  EN: {
    headline: "Superhuman Sales Infrastructure.",
    desc: "We've distilled a decade of sales expertise into a voice-first AI engine designed for high-velocity conversion.",
    architectureBtn: "Tech Stack"
  },
  HI: {
    headline: "सुपरह्यूमन सेल्स इंफ्रास्ट्रक्चर।",
    desc: "हमने सेल्स अनुभव को वॉयस-फर्स्ट एआई इंजन में उतारा है।",
    architectureBtn: "तकनीक देखें"
  }
};

interface FeaturesProps {
  lang: string;
}

const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const t = translations[lang] || translations.EN;

  return (
    <section id="features" className="py-16 md:py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[9px] font-black uppercase tracking-widest mb-4">
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
              {t.headline}
            </h2>
            <p className="text-base text-slate-500 font-medium leading-relaxed">
              {t.desc}
            </p>
          </div>
          <button 
            onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-slate-400 hover:border-slate-400 transition-all text-[10px] uppercase tracking-widest flex items-center gap-2"
          >
            {t.architectureBtn}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group border border-slate-800 shadow-xl">
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
               <div>
                 <h3 className="text-2xl font-bold mb-3 tracking-tight">Zero Accent Friction.</h3>
                 <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                   Speaks 50+ languages with native-level prosody. Your leads feel understood, not processed by a robot.
                 </p>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['Hindi', 'English', 'Spanish', 'Arabic', 'Tamil'].map(langTag => (
                   <span key={langTag} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-white/10">{langTag}</span>
                 ))}
                 <span className="px-3 py-1 bg-blue-600 rounded-lg text-[9px] font-bold uppercase tracking-widest">+42 More</span>
               </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
             <div>
               <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
               <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight italic">"Ready to Book"</h3>
               <p className="text-slate-500 text-xs leading-relaxed">
                 Qualify leads on 15+ custom parameters before your team wakes up.
               </p>
             </div>
             <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm mt-4">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 w-[94%]" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
