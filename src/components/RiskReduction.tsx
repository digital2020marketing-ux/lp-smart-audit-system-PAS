import React from 'react';
import { ShieldCheck, Zap, FileCheck, Headphones, MessageCircle, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';

export const RiskReduction: React.FC = () => {
  const handleSupportClick = () => {
    trackWhatsAppClick('risk_reduction_support', 'Risk Reduction - Hubungi Support');
  };

  const handleCtaClick = () => {
    trackCheckoutClick('guarantee_risk_cta', 'Risk Guarantee - Ambil Promo Bebas Risiko');
  };

  const assurances = [
    {
      title: 'Akses Digital Instan',
      desc: 'Setelah pembayaran terverifikasi otomatis oleh sistem, Anda langsung mendapatkan kredensial dan link akses ke dashboard web SMART Audit SYSTEM.',
      icon: Zap
    },
    {
      title: '100% File Asli & Editable',
      desc: 'Seluruh 7 worksheet (Word & Excel) dapat diunduh ke komputer Anda, bebas diedit, dan dapat dimasukkan logo atau format perusahaan tanpa terkunci password.',
      icon: FileCheck
    },
    {
      title: 'Dukungan Tim Support WhatsApp',
      desc: 'Jika Anda mengalami kendala saat login atau membutuhkan bantuan teknis akses, tim support kami siap membantu melalui jalur WhatsApp resmi.',
      icon: Headphones
    },
    {
      title: 'Tanpa Biaya Tersembunyi',
      desc: 'Harga promo Rp497.000 adalah pembayaran final sekali bayar untuk akses seumur hidup. Tidak ada biaya langganan bulanan maupun pemotongan otomatis.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="garansi" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main 100% Guarantee Callout Card */}
        <div className="mb-12 bg-gradient-to-b from-slate-850 to-slate-950 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-9 shadow-2xl shadow-emerald-950/30">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="shrink-0 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-2">
                <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                100% Bebas Risiko
              </span>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>JAMINAN RESMI & TANPA RISIKO</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug mb-3">
                Garansi uang kembali jika produk <span className="text-emerald-400">SMART Audit SYSTEM</span> ini tidak bermanfaat bagi aktifitas audit anda.
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Kami sangat yakin dengan efektivitas seluruh worksheet, modul, dan AI Prompt Generator ini. Jika Anda merasa sistem ini tidak memberikan manfaat nyata pada alur kerja audit Anda, tim kami siap memproses pengembalian dana 100% tanpa kesulitan.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs sm:text-sm py-3 px-5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  <span>DAPATKAN AKSES SEKARANG (BEBAS RISIKO)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Sub-Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Standar Kepastian & Keamanan Akses Anda
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xl mx-auto">
            Proses aktivasi dan pemakaian sistem Anda dirancang transparan, aman, dan tanpa biaya tambahan.
          </p>
        </div>

        {/* 4 Assurances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
          {assurances.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Link */}
        <div className="text-center">
          <a
            href={getWhatsAppUrl('risk_reduction_support')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSupportClick}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 underline"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ada pertanyaan sebelum aktivasi? Hubungi CS kami di WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
