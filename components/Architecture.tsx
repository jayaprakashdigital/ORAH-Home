
import React from 'react';

const layers = [
  {
    name: "Voice Synthesis Engine",
    tech: "Neural Prosody Models",
    desc: "Proprietary low-latency voice models designed to handle multi-accent dialects without robotic artifacts.",
    icon: "🔊"
  },
  {
    name: "Intent Processing Layer",
    tech: "Custom Real Estate LLM",
    desc: "Trained on millions of hours of sales conversations to identify high-intent buyer patterns automatically.",
    icon: "🧠"
  },
  {
    name: "Integration Layer",
    tech: "RESTful Sync Engine",
    desc: "Deep bidirectional integration with Salesforce, Hubspot, and ERPs to ensure CRM data is never stale.",
    icon: "🔌"
  }
];

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-32 bg-slate-900 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Engineering First</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
            The ORAH Stack. <br />Designed for Speed.
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            We built our own infrastructure from the ground up to achieve sub-400ms latency—the threshold for human-like conversational fluidity.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line decor */}
          <div className="absolute top-0 bottom-0 left-8 md:left-12 w-px bg-white/10" />

          <div className="space-y-16">
            {layers.map((layer, idx) => (
              <div key={idx} className="relative pl-24 md:pl-32 group">
                <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-slate-800 rounded-3xl border border-white/10 flex items-center justify-center text-3xl md:text-4xl shadow-2xl group-hover:bg-blue-600 transition-colors duration-500 z-10">
                  {layer.icon}
                </div>
                
                <div className="max-w-xl">
                  <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4">
                    {layer.tech}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{layer.name}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Mockup Component */}
          <div className="mt-24 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-xl font-bold mb-4">Distributed Edge Architecture</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Our voice nodes are distributed across Mumbai, London, and San Francisco to ensure consistent quality regardless of where your caller is located.
                  </p>
                  <div className="flex gap-4">
                     <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-xl text-[10px] font-black uppercase tracking-widest border border-green-500/20">Active Node: IND-01</div>
                     <div className="px-4 py-2 bg-white/5 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5">Auto-Failover ON</div>
                  </div>
                </div>
                <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 font-mono text-xs text-blue-400">
                   <div className="flex gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                   </div>
                   <div className="space-y-1">
                      <div><span className="text-slate-600">{"//"} ORAH Handshake Protocol</span></div>
                      <div>{"const handshake = await orah.initiateCall({"}</div>
                      <div className="pl-4">{"leadId: 'LX-482',"}</div>
                      <div className="pl-4">{"preferredLang: 'HI',"}</div>
                      <div className="pl-4">{"maxLatency: 400"}</div>
                      <div>{"});"}</div>
                      <div className="mt-4"><span className="text-green-500">{"OK: Call session established in 242ms"}</span></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
