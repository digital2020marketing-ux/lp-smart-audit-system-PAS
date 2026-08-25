import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { PAYMENT_METHODS } from '../constants';

interface PaymentMethodsDisplayProps {
  theme?: 'dark' | 'light';
  title?: string;
}

export const PaymentMethodsDisplay: React.FC<PaymentMethodsDisplayProps> = ({ 
  theme = 'dark',
  title = 'Metode Pembayaran Resmi & Terverifikasi Otomatis:'
}) => {
  const isDark = theme === 'dark';

  const renderBadge = (id: string, name: string) => {
    switch (id) {
      case 'dana':
        return (
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#118eea] text-white font-black text-xs shadow-xs">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>DANA</span>
          </div>
        );
      case 'gopay':
        return (
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#00aed6] text-white font-black text-xs shadow-xs">
            <span>go<strong className="text-white font-black">pay</strong></span>
          </div>
        );
      case 'ovo':
        return (
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#4c2a86] text-white font-black text-xs border border-purple-400/40 shadow-xs">
            <span>OVO</span>
          </div>
        );
      case 'qris':
        return (
          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-600 text-white font-black text-xs shadow-xs tracking-tight">
            <span>QRIS</span>
          </div>
        );
      case 'shopeepay':
        return (
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#ee4d2d] text-white font-black text-xs shadow-xs">
            <span className="text-[10px] font-bold">ShopeePay</span>
          </div>
        );
      case 'bjb_va':
        return (
          <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-black border ${
            isDark ? 'bg-slate-800 text-blue-300 border-blue-600/40' : 'bg-white text-blue-900 border-blue-200'
          }`}>
            <span className="text-yellow-500 font-bold">◆</span>
            <span>Bank BJB VA</span>
          </div>
        );
      case 'bni_va':
        return (
          <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-black border ${
            isDark ? 'bg-slate-800 text-orange-400 border-orange-500/40' : 'bg-white text-[#f15a24] border-orange-200'
          }`}>
            <span>BNI VA</span>
          </div>
        );
      case 'bri_va':
        return (
          <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-black border ${
            isDark ? 'bg-slate-800 text-blue-400 border-blue-500/40' : 'bg-white text-blue-900 border-blue-200'
          }`}>
            <span>BRI VA</span>
          </div>
        );
      case 'bsi_va':
        return (
          <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-black border ${
            isDark ? 'bg-slate-800 text-teal-300 border-teal-500/40' : 'bg-white text-[#00a39d] border-teal-200'
          }`}>
            <span>BSI VA</span>
            <span className="text-emerald-400">★</span>
          </div>
        );
      case 'mandiri_va':
        return (
          <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-black border ${
            isDark ? 'bg-slate-800 text-amber-300 border-amber-500/40' : 'bg-white text-amber-900 border-amber-200'
          }`}>
            <span>Mandiri VA</span>
          </div>
        );
      default:
        return (
          <div className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-white font-bold text-xs">
            {name}
          </div>
        );
    }
  };

  return (
    <div className={`w-full rounded-2xl p-4 sm:p-5 border transition-all mt-4 text-left ${
      isDark 
        ? 'bg-slate-950/90 border-slate-800 text-slate-200' 
        : 'bg-white border-gray-200 shadow-sm text-gray-800'
    }`}>
      {/* Title */}
      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-dashed border-gray-700/50">
        <span className="text-xs sm:text-sm font-black flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{title}</span>
        </span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
          isDark ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
        }`}>
          Aktivasi Instan 24/7
        </span>
      </div>

      {/* Grid of 10 payment badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5">
        {PAYMENT_METHODS.map((method) => (
          <div key={method.id} className="flex items-center justify-center">
            {renderBadge(method.id, method.name)}
          </div>
        ))}
      </div>

      {/* Footer reassurance */}
      <div className="mt-3.5 pt-2.5 border-t border-gray-700/40 flex flex-wrap items-center justify-between gap-2 text-[11px] opacity-80">
        <span className="flex items-center gap-1">
          <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Enkripsi 256-Bit SSL Payment Gateway</span>
        </span>
        <span>Notifikasi & Kredensial via WA/Email</span>
      </div>
    </div>
  );
};
