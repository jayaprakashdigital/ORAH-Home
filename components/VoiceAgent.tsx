
import React from 'react';

const capabilities = [
  { title: "Sentiment Analysis", desc: "Recognizes frustration or excitement and adjusts tone in real-time.", icon: "🎭" },
  { title: "Interruption Handling", desc: "Listens while speaking. Pauses naturally when the user speaks over.", icon: "👂" },
  { title: "Regional Fluency", desc: "Native-level accents for 50+ languages, avoiding the 'AI accent'.", icon: "🌍" },
  { title: "Contextual Memory", desc: "Recalls previous touchpoints to build rapport and continuity.", icon: "🧠" }
];

const VoiceAgent: React.FC = () => {
  const ctaLink = "https://orahv8.bolt.host/login";

  return (
    <section className="py-20 md:py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Neural Voice Core
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
              The End of <br />"Press 1 for Sales."
            </h2>
            <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed max-w-xl">
              ORAH isn't a chatbot. It's a highly sophisticated voice agent that sounds, thinks, and negotiates like your top 1% salesperson.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {capabilities.map((cap, i) => (
                <div key={i} className="group">
                  <div className="text-2xl mb-4">{cap.icon}</div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-white mb-2">{cap.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{cap.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href={ctaLink}
                className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl shadow-white/5"
              >
                Try Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-900 rounded-[3rem] p-1 border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="bg-slate-950 rounded-[2.8rem] aspect-square flex flex-col items-center justify-center p-12 text-center relative">
                
                {/* Visual Audio Waveform Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="w-64 h-64 border border-blue-500/50 rounded-full animate-ping" />
                  <div className="absolute w-48 h-48 border border-blue-400/30 rounded-full animate-pulse" />
                </div>

                <div className="relative z-10">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                    <svg className="w-10 h-10 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-2">Hear the Difference</h3>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">Sample Outreach Recording</p>
                  
                  <div className="flex gap-1 justify-center items-end h-12">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1 bg-blue-500 rounded-full animate-voice-bar" 
                        style={{ 
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s` 
                        }} 
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
                   <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Low Latency Core</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes voice-bar {
          0%, 100% { height: 20%; opacity: 0.3; }
          50% { height: 100%; opacity: 1; }
        }
        .animate-voice-bar {
          animation: voice-bar 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default VoiceAgent;
