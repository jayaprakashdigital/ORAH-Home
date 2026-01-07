
import React, { useState, useEffect } from 'react';

const translations: any = {
  EN: {
    badge: "24/7 AI Sales Engine",
    headline: "Stop Losing Leads After Business Hours.",
    subheadline: "ORAH captures, qualifies, and schedules leads while your team sleeps. Turn midnight inquiries into morning revenue across any industry.",
    ctaPrimary: "Try Demo",
    ctaSecondary: "See the Tech"
  },
  HI: {
    badge: "24/7 एआई सेल्स इंजन",
    headline: "ऑफिस ऑवर्स के बाद लीड खोना बंद करें।",
    subheadline: "जब आपकी सेल्स टीम सोती है, ORAH तुरंत लीड कैप्चर और क्वालिफाई करता है। आधी रात की पूछताछ को रेवेन्यू में बदलें।",
    ctaPrimary: "डेमो आजमाएं",
    ctaSecondary: "तकनीक देखें"
  }
};

interface HeroProps {
  lang: string;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [activeStep, setActiveStep] = useState(0);
  const t = translations[lang] || translations.EN;
  
  const activities = [
    { label: "New Lead", detail: "2:45 AM • Global Source", icon: "✨", transcript: "Hi, I need info on the new product line..." },
    { label: "ORAH Call", detail: "Instant Response • 2:46 AM", icon: "📞", transcript: "Hello! I'm ORAH. I can help you with those details immediately..." },
    { label: "Qualify", detail: "Intent: High • Budget: Verified", icon: "🧠", transcript: "Perfect. I've noted your requirements and budget..." },
    { label: "Booked", detail: "CRM Sync • 2:48 AM", icon: "📅", transcript: "Great! I've scheduled your meeting for tomorrow at 10 AM." }
  ];

  const ctaLink = "https://orahv8.bolt.host/login";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % activities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[60%] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-10%] w-[50%] h-[50%] bg-slate-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {t.badge}
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.95]">
              {t.headline.split('After').map((part: string, i: number) => i === 0 ? part : <span key={i} className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-500 italic">After {part}</span>)}
            </h1>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">
              {t.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href={ctaLink} 
                className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-black hover:shadow-2xl transition-all active:scale-95 text-center"
              >
                {t.ctaPrimary}
              </a>
              <button 
                onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-white border-2 border-slate-100 text-slate-900 px-8 py-4 rounded-xl text-base font-bold hover:border-slate-900 transition-all text-center"
              >
                {t.ctaSecondary}
              </button>
            </div>
          </div>

          <div className="relative group px-2 sm:px-0 hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-slate-50 rounded-[2rem] blur-xl opacity-50 -z-10" />
            <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-2xl overflow-hidden p-2">
               <div className="bg-slate-950 rounded-[1.2rem] aspect-video overflow-hidden flex flex-col border border-white/5">
                  <div className="p-8 flex flex-col h-full justify-between bg-gradient-to-b from-slate-900 to-slate-950">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                         <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Active Outreach Agent</span>
                       </div>
                       <div className="text-white/20 text-[8px] font-mono tracking-tighter">NODE: SG-42</div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl border border-white/10">
                          {activities[activeStep].icon}
                        </div>
                        <div>
                          <div className="text-white font-bold text-base tracking-tight">{activities[activeStep].label}</div>
                          <div className="text-slate-500 text-[9px] font-bold uppercase tracking-wider">{activities[activeStep].detail}</div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-5 border border-white/10 min-h-[100px] flex items-center relative overflow-hidden">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                         <p className="text-white text-sm font-medium italic leading-relaxed pl-2">
                           "{activities[activeStep].transcript}"
                         </p>
                      </div>
                    </div>

                    <div className="flex gap-1 items-end h-8 overflow-hidden">
                       {[...Array(32)].map((_, i) => (
                         <div key={i} className="flex-1 bg-blue-500/20 rounded-full animate-wave" style={{ height: `${Math.random() * 80 + 20}%`, animationDelay: `${i * 0.05}s` }} />
                       ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); opacity: 0.2; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        .animate-wave {
          animation: wave 1.2s ease-in-out infinite;
          transform-origin: bottom;
        }
      `}</style>
    </section>
  );
};

export default Hero;
