
import React from 'react';

const Security: React.FC = () => {
  return (
    <section id="security" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[9px] font-black uppercase tracking-widest mb-6">
              Engineering & Trust
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
              Enterprise Tech. <br className="hidden sm:block" />Instant Results.
            </h2>
            <p className="text-base text-slate-500 font-medium leading-relaxed mb-10">
              Your lead data is your most valuable asset. ORAH is built on a foundation of zero-trust architecture, high availability, and rigorous compliance. Secure. Fast. Built for Scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="text-xl mb-4">🔐</div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2">Data Integrity</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    AES-256 bit encryption at rest and in transit. Automated PII scrubbing for every voice transcript.
                  </p>
               </div>
               <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="text-xl mb-4">🔌</div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2">API First</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Native webhooks and RESTful APIs to sync ORAH with Salesforce, Hubspot, or custom legacy CRMs.
                  </p>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white overflow-hidden relative group shadow-2xl">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-10">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-[10px]">API</div>
                      <div className="h-px flex-1 bg-white/20" />
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center font-black text-[10px]">CRM</div>
                   </div>

                   <div className="space-y-6">
                      {[
                        { label: 'Uptime SLA', val: '99.99%', sub: 'Global Multi-region' },
                        { label: 'Latency (TTFT)', val: '< 350ms', sub: 'Real-time Voice' },
                        { label: 'Compliance', val: 'SOC2 Type II', sub: 'Enterprise Certified' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-end">
                           <div>
                              <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                              <div className="text-xl md:text-2xl font-black tracking-tight">{item.val}</div>
                           </div>
                           <div className="text-[9px] font-bold text-slate-600 italic">{item.sub}</div>
                        </div>
                      ))}
                   </div>

                   <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                      {['ISO 27001', 'GDPR', 'HIPAA READY', 'SOC2'].map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[8px] font-black uppercase tracking-widest text-slate-400 border border-white/10">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
