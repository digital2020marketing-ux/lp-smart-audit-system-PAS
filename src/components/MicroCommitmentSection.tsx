import React from 'react';
import { Zap, MessageCircle, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { getWhatsAppUrl, trackWhatsAppClick } from '../constants';

export const MicroCommitmentSection: React.FC = () => {
  const handleCtaClick = () => {
    trackWhatsAppClick('wa_micro', 'Direct Buy Section - Ambil Akses Sekarang');
  };

  return (
    <section id="ambil-akses" className="py-14 sm:py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden border-t border-b border-blue-800">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1 rounded-full text-xs font-extrabold text-emerald-300 mb-3">
          <Zap className="w-3.5 h-3.5 text-amber-300" />
          <span>Akses Instan & Langsung Pakai</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
          Siap Jalankan Audit Lebih Cepat, Rapi & Percaya Diri?
        </h2>

        <p className="text-blue-100 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
          Dapatkan akses ke seluruh 9 modul, 7 worksheet Word/Excel, dan 3 AI Audit Assistant sekarang hanya <strong className="text-emerald-300 font-extrabold">Rp497.000</strong> (sekali bayar seumur hidup).
        </p>

        <div className="flex flex-col items-center gap-2">
          <a
            id="micro-wa-cta"
            href={getWhatsAppUrl('wa_micro', 'Halo Admin, saya ingin membeli Paket Lengkap SMART Audit SYSTEM seharga Rp497.000. Mohon info nomor rekening pembayarannya.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-10 py-3.5 sm:py-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-lg transition-all shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/40"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>BELI SMART AUDIT SYSTEM (RP497.000)</span>
            <ArrowRight className="w-4 h-4 shrink-0 hidden sm:inline" />
          </a>

          <div className="flex items-center gap-2 text-xs text-blue-200 font-medium mt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sekali Bayar Seumur Hidup • Verifikasi Pembayaran Cepat</span>
          </div>
        </div>

      </div>
    </section>
  );
};
