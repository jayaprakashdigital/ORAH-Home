
import React, { useState } from 'react';

interface HeaderProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const ctaLink = "https://orahv8.bolt.host/login";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div 
            className="flex items-center gap-2.5 cursor-pointer group shrink-0" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="w-8 h-8 md:w-9 md:h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg md:text-xl tracking-tighter">O</span>
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900">ORAH</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {[
              { name: 'Features', id: 'features' },
              { name: 'Process', id: 'how-it-works' },
              { name: 'Impact', id: 'impact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full">
              <span className="text-[9px] font-black text-slate-400">GLOBAL:</span>
              <select 
                className="bg-transparent text-[11px] font-bold text-slate-700 outline-none cursor-pointer"
                value={currentLang}
                onChange={(e) => onLangChange(e.target.value)}
              >
                <option value="EN">English</option>
                <option value="HI">Hindi (हिंदी)</option>
                <option value="ES">Spanish</option>
                <option value="AR">Arabic</option>
              </select>
            </div>

            <a 
              href={ctaLink}
              className="bg-slate-900 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-slate-200"
            >
              Try Demo
            </a>

            <button 
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute top-full left-0 right-0 py-6 px-4 shadow-xl flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
          {[
            { name: 'Features', id: 'features' },
            { name: 'Process', id: 'how-it-works' },
            { name: 'Impact', id: 'impact' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-lg font-bold text-slate-600 hover:text-slate-900 text-left"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Select Language</span>
              <select 
                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-sm font-bold text-slate-700"
                value={currentLang}
                onChange={(e) => onLangChange(e.target.value)}
              >
                <option value="EN">English</option>
                <option value="HI">Hindi (हिंदी)</option>
                <option value="ES">Spanish</option>
                <option value="AR">Arabic</option>
              </select>
            </div>
            <a 
              href={ctaLink}
              className="w-full bg-slate-900 text-white py-4 rounded-xl text-center font-bold text-lg"
            >
              Try Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
