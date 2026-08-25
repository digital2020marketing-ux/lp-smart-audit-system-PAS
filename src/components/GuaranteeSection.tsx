import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';

export const GuaranteeSection: React.FC = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('guarantee_cta_btn', 'Guarantee Section - Beli Tanpa Risiko');
  };

  return (
    <section className="py-14 sm:py-18 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-y border-slate-800 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950/95 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-950/40 overflow-hidden">
          
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            
            {/* Guarantee Badge / Seal */}
            <div className="shrink-0 flex flex-col items-center justify-center text-center">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-900/30 border-2 border-emerald-400/50 flex items-center justify-center shadow-xl shadow-emerald-500/20">
                  <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 text-emerald-400 drop-shadow" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-black text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md">
                  100% Guaranteed
                </div>
              </div>
            </div>

            {/* Content Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GARANSI RESMI TANPA RISIKO</span>
              </div>

              {/* Exact User Statement in Highlighted Typography */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug mb-3 tracking-tight">
                Garansi uang kembali jika produk <span className="text-emerald-400 underline decoration-emerald-500/60 decoration-wavy underline-offset-4">SMART Audit SYSTEM</span> ini tidak bermanfaat bagi aktifitas audit anda.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                Kami sangat yakin dengan efektivitas dan kepraktisan materi, worksheet, serta AI Prompt Generator di dalamnya. Jika setelah mengakses dan mempraktikkannya Anda merasa tidak mendapatkan manfaat nyata untuk audit Anda, hubungi tim kami dan kami kembalikan investasi Anda 100% tanpa syarat berbelit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Klaim mudah & langsung diproses</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Investasi aman & 100% bebas risiko</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-98 text-white font-black text-sm sm:text-base py-3.5 px-7 rounded-xl shadow-xl shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  <span>AMBIL PROMO RP497.000 — 100% BEBAS RISIKO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
