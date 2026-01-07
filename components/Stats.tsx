
import React from 'react';

const stats = [
  { label: 'Avg Speed to Lead', value: '1.2s', trend: '-98%' },
  { label: 'Qualification Rate', value: '94%', trend: '+12%' },
  { label: 'Impacted Revenue', value: '₹18Cr', trend: '+220%' },
  { label: 'System Uptime', value: '99.9%', trend: 'Stable' },
];

const Stats: React.FC = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 shadow-inner">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 group hover:bg-slate-50 transition-colors">
              <div className="text-[9px] md:text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 md:mb-3">{stat.label}</div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <div className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter group-hover:scale-105 transition-transform origin-left whitespace-nowrap">{stat.value}</div>
                <div className={`text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded w-fit ${
                  stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 
                  stat.trend.startsWith('-') ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'
                }`}>
                  {stat.trend}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
