import React from 'react';
import { ShoppingBag, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, Lock } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';

export const FinalOffer: React.FC = () => {
  const handleCheckoutClick = () => {
    trackCheckoutClick('final_offer_checkout', 'Final Offer - Checkout OrderOnline Rp497.000');
  };

  return (
    <section id="checkout" className="py-14 sm:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-800 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>PENAWARAN TERAKHIR & AKSES INSTAN</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-3">
            Mulai Siklus Audit Anda dengan Sistem yang Lebih Terstruktur Hari Ini
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            Hentikan kebiasaan memulai audit dari file kosong. Dapatkan AI Co-Pilot, 7 worksheet Word/Excel, dan ekosistem panduan lengkap sekarang.
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="bg-slate-900 border-2 border-red-500/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-8">
          
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            
            {/* Left: Product Summary */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 bg-red-950 text-red-300 border border-red-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
                <span>PROMO KHUSUS HARI INI</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                SMART Audit SYSTEM — Lifetime Access
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Akses digital instan ke seluruh AI Productivity Suite (Checklist, PLOR, CAPA, ISO 19011 Co-Pilot) + 7 Worksheet Word & Excel + 9 Modul Pembelajaran + Podcast Audio.
              </p>

              {/* Inclusions checklist */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI Checklist & 5W+1H Generator (Prompting-Free)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI PLOR Formulator (Problem, Location, Evidence, Requirement)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI CAPA / 5-Why Assistant & ISO 19011 Co-Pilot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>7 Worksheet Word (.docx) & Excel (.xlsx) 100% Editable</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>9 Modul Audit Lengkap + Podcast Audio + Pre/Post-Test</span>
                </li>
              </ul>

              {/* Price Tag & Phased Alert */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs text-slate-400 line-through font-bold">
                    Rp1.297.000
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                    Rp497.000
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    (Sekali bayar • Tanpa langganan)
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[10.5px] text-amber-300">
                  <span>⚡ Fase Promo Aktif • Segera naik ke <strong>Rp797.000</strong> (Fase 1)</span>
                  <span className="text-slate-400">Normal: Rp1.297.000</span>
                </div>
              </div>
            </div>

            {/* Right: Direct Checkout Action Box */}
            <div className="w-full lg:w-5/12 bg-slate-950 p-6 sm:p-7 rounded-2xl border border-slate-800 text-center flex flex-col justify-center">
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider block mb-4">
                AKSES INSTAN & AKTIVASI CEPAT:
              </span>

              {/* Instant Online Checkout */}
              <div className="space-y-4">
                <a
                  id="final-offer-online-btn"
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCheckoutClick}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5 shrink-0" />
                  <span>AMBIL PROMO RP497.000 SEKARANG</span>
                </a>
                
                {/* Metode Pembayaran terlampir persis di bawah tombol Checkout */}
                <div className="p-4 bg-slate-900/95 rounded-2xl border border-slate-800 text-left shadow-lg">
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
                    <span className="text-xs font-black text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Metode Pembayaran:</span>
                    </span>
                    <span className="text-[10px] bg-emerald-950/80 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-800/80">
                      Otomatis & Terverifikasi
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-[#118eea] text-white font-black text-[8px] flex items-center justify-center shrink-0 shadow-xs">D</div>
                      <span className="font-bold text-slate-200 text-xs">Dana</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-[#00aed6] text-white font-black text-[7.5px] flex items-center justify-center shrink-0 shadow-xs">GP</div>
                      <span className="font-bold text-slate-200 text-xs">GoPay</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-[#4c2a86] border border-purple-400 text-white font-black text-[7.5px] flex items-center justify-center shrink-0 shadow-xs">OVO</div>
                      <span className="font-bold text-slate-200 text-xs">OVO</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <div className="px-1.5 py-0.5 rounded bg-red-600 text-white font-black text-[8px] tracking-tight shrink-0 shadow-xs">QRIS</div>
                      <span className="font-bold text-slate-200 text-xs">QRIS</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <div className="w-5 h-5 rounded-md bg-[#ee4d2d] text-white font-black text-[8.5px] flex items-center justify-center shrink-0 shadow-xs">S</div>
                      <span className="font-bold text-slate-200 text-xs">ShopeePay</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <span className="text-[10px] text-yellow-500 font-bold shrink-0">◆</span>
                      <span className="font-bold text-slate-200 text-[11px] truncate">Bank BJB VA</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <div className="px-1 py-0.5 rounded bg-orange-600 text-white font-black text-[7.5px] shrink-0">BNI</div>
                      <span className="font-bold text-slate-200 text-[11px] truncate">BNI VA</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <div className="px-1 py-0.5 rounded bg-blue-800 text-white font-black text-[7.5px] shrink-0">BRI</div>
                      <span className="font-bold text-slate-200 text-[11px] truncate">BRI VA</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <div className="px-1 py-0.5 rounded bg-teal-600 text-white font-black text-[7.5px] shrink-0">BSI</div>
                      <span className="font-bold text-slate-200 text-[11px] truncate">BSI VA</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <div className="px-1 py-0.5 rounded bg-amber-600 text-white font-black text-[7.5px] shrink-0">MDR</div>
                      <span className="font-bold text-slate-200 text-[11px] truncate">Mandiri VA</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center gap-1.5 text-[10.5px] text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Terhubung langsung ke sistem payment gateway terverifikasi.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Microcopy Guarantee note */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-300 font-medium text-center bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-3.5 max-w-2xl mx-auto shadow-md">
          <div className="flex items-center gap-2 text-emerald-400 font-bold shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="uppercase text-[11px] bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">Garansi 100%</span>
          </div>
          <span className="text-slate-200">
            Garansi uang kembali jika produk SMART Audit SYSTEM ini tidak bermanfaat bagi aktifitas audit anda.
          </span>
        </div>

      </div>
    </section>
  );
};
