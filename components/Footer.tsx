
import React from 'react';

interface FooterProps {
  onShowPrivacy: () => void;
  onShowTerms: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowPrivacy, onShowTerms }) => {
  const ctaLink = "https://orahv8.bolt.host/login";
  
  return (
    <footer className="bg-white pt-12 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">ORAH</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8">
            <button onClick={onShowPrivacy} className="text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-[0.2em] transition-colors">Privacy Policy</button>
            <button onClick={onShowTerms} className="text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-[0.2em] transition-colors">Terms of Service</button>
            <a href={ctaLink} className="text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-[0.2em] transition-colors">Try Demo</a>
          </nav>
        </div>
        
        <div className="text-center text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em] pt-8 border-t border-slate-50">
          &copy; {new Date().getFullYear()} ORAH Technologies Inc. Built for Growth.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
