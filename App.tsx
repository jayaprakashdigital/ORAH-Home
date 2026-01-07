
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Process from './components/Process';
import VoiceAgent from './components/VoiceAgent';
import Multilingual from './components/Multilingual';
import ROI from './components/ROI';
import TargetAudience from './components/TargetAudience';
import Security from './components/Security';
import Architecture from './components/Architecture';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const Modal = ({ title, content, onClose }: { title: string; content: React.ReactNode; onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
    <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <h2 className="text-xl font-black tracking-tight text-slate-900">{title}</h2>
        <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400 hover:text-slate-900">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div className="p-8 overflow-y-auto custom-scrollbar prose prose-slate prose-sm max-w-none text-slate-600">
        {content}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [language, setLanguage] = useState('EN');
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-900 selection:text-white bg-white">
      <Header currentLang={language} onLangChange={setLanguage} />
      <main className="flex-grow">
        <Hero lang={language} />
        <Stats />
        <Features lang={language} />
        <Process />
        <VoiceAgent />
        <TargetAudience />
        <Architecture />
        <Multilingual lang={language} />
        <ROI />
        <Security />
        
        {/* Final CTA Section for high conversion */}
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
              Stop Losing Leads <br className="hidden md:block" /> After Business Hours.
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Join the elite teams across Real Estate, Healthcare, and SaaS who have eliminated speed-to-lead friction.
            </p>
            <a 
              href="https://orahv8.bolt.host/login" 
              className="inline-block bg-white text-slate-950 px-10 py-5 rounded-2xl text-lg font-black hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/5"
            >
              Try Demo
            </a>
          </div>
        </section>
      </main>
      <Footer onShowPrivacy={() => setShowPrivacy(true)} onShowTerms={() => setShowTerms(true)} />
      <ChatWidget />

      {showPrivacy && (
        <Modal 
          title="Privacy Policy" 
          onClose={() => setShowPrivacy(false)}
          content={
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Effective: October 2024</p>
              <section>
                <h4 className="font-bold text-slate-900">1. Data Ownership</h4>
                <p>You own your data. ORAH acts as a processor. We do not sell lead data to third parties. All lead information captured via ORAH belongs exclusively to your organization.</p>
              </section>
              <section>
                <h4 className="font-bold text-slate-900">2. Encryption & Security</h4>
                <p>All data is encrypted using AES-256 bit protocols during transit and at rest. We utilize automated PII scrubbing to ensure sensitive caller details are protected.</p>
              </section>
              <section>
                <h4 className="font-bold text-slate-900">3. Compliance</h4>
                <p>ORAH is built to align with GDPR, HIPAA, and SOC2 standards, ensuring that your automated outreach remains legal and secure across all jurisdictions.</p>
              </section>
            </div>
          }
        />
      )}

      {showTerms && (
        <Modal 
          title="Terms of Service" 
          onClose={() => setShowTerms(false)}
          content={
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Effective: October 2024</p>
              <section>
                <h4 className="font-bold text-slate-900">1. Service Scope</h4>
                <p>ORAH provides an AI-powered voice outreach and lead qualification platform. Users are responsible for ensuring their use of the platform complies with local telemarketing laws (e.g., TCPA/DNC regulations).</p>
              </section>
              <section>
                <h4 className="font-bold text-slate-900">2. Fair Usage</h4>
                <p>Subscription tiers are based on usage volume. ORAH reserves the right to throttle or limit access if usage patterns suggest abuse or non-human lead spamming.</p>
              </section>
              <section>
                <h4 className="font-bold text-slate-900">3. Liability</h4>
                <p>While we guarantee 99.9% uptime, ORAH is not liable for indirect losses or revenue impact resulting from third-party lead source outages (e.g., Meta/Google ads API changes).</p>
              </section>
            </div>
          }
        />
      )}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </div>
  );
};

export default App;
