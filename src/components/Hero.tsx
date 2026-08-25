import React from 'react';
import { ShoppingBag, ShieldCheck, MessageCircle, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';
import imgDashboard from '../assets/images/gambar-dashbord-SAS.jpg';

interface HeroProps {
  onCheckoutClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleHeroBuyClick = () => {
    trackCheckoutClick('hero_buy', 'Hero - Dapatkan SMART Audit System Rp497.000');
  };

  const handleHeroAskClick = () => {
    trackWhatsAppClick('hero_ask', 'Hero - Tanya Tim via WA');
  };

  return (
    <header className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 hero-pattern border-b border-gray-200/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-blue-100/50 rounded-full -z-10 pointer-events-none blur-2xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-xs text-left">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>AI-Assisted Workflow untuk Auditor Internal ISO 9001 & ISO 19011</span>
        </div>

        {/* (1) HEADLINE */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight">
          Audit Internal Sudah Dekat, Tapi Checklist & Pertanyaannya Masih Belum Siap?
        </h1>

        {/* (2) SUB-HEADLINE */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
          Siapkan starting point pertanyaan audit, panduan bukti objektif, formulasi temuan PLOR hingga analisis CAPA dalam satu workflow — <strong className="text-gray-900 font-bold">tanpa harus memulai semuanya dari file kosong.</strong>
        </p>

        {/* (3) GAMBAR VISUALISASI: Screenshot/dashboard SMART Audit SYSTEM */}
        <div className="mb-8 sm:mb-10 relative max-w-3xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 border border-slate-300 shadow-2xl overflow-hidden">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              {/* Browser bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-900 border-b border-slate-800 text-left">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[10px] sm:text-xs text-slate-400 font-mono tracking-tight truncate max-w-[200px] sm:max-w-none">
                  app.smartauditsystem.com/dashboard
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
                  ALL-IN-ONE DASHBOARD
                </span>
              </div>

              {/* Dashboard image display */}
              <div className="relative bg-slate-950">
                <img 
                  src={imgDashboard} 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "/images/gambar-dashbord-SAS.jpg";
                    }
                  }}
                  alt="Dashboard SMART Audit SYSTEM — AI Checklist, AI PLOR, AI CAPA, Worksheet, Modul" 
                  className="w-full h-auto object-cover block"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Badge / Label Kecil */}
          <div className="mt-3 inline-flex items-center gap-2 bg-blue-900 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
            <span>⚡ “1 Workflow dari Persiapan → Temuan → CAPA → Pelaporan”</span>
          </div>
        </div>

        {/* (4) AGITATE */}
        <div className="bg-white/95 border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-10 text-left max-w-2xl mx-auto shadow-sm">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 leading-snug">
            Karena kalau cara kerjanya masih sama, siklus audit berikutnya akan mengulang pekerjaan yang sama lagi:
          </h2>
          
          <ul className="space-y-2.5 text-sm sm:text-base text-gray-700 mb-6 font-medium">
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span>Mencari template lagi.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span>Menyusun pertanyaan dari nol lagi.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span>Bingung menentukan bukti objektif lagi.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span>Merapikan catatan temuan lagi.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span>Mengejar CAPA lagi.</span>
            </li>
          </ul>

          <div className="p-4 bg-red-50/80 border-l-4 border-red-600 rounded-r-xl">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Dan saat jadwal audit berikutnya datang…</p>
            <p className="text-sm sm:text-base font-black text-red-900">
              Anda kembali memulai dari halaman kosong.
            </p>
          </div>
        </div>

        {/* (5) BUTTON & GUARANTEE */}
        <div className="space-y-3 max-w-md mx-auto">
          <a
            id="hero-buy-cta"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleHeroBuyClick}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 shrink-0" />
            <span>DAPATKAN SMART AUDIT SYSTEM</span>
          </a>

          {/* Microcopy */}
          <p className="text-xs text-gray-600 font-semibold">
            Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan
          </p>

          {/* Guarantee pill */}
          <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center justify-center gap-2 text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-[11.5px] text-emerald-950 font-bold">
              <strong className="text-emerald-700 uppercase">Jaminan Kepuasan:</strong> Garansi uang kembali jika tidak bermanfaat.
            </span>
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl('hero_ask')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleHeroAskClick}
              className="text-xs text-blue-900 hover:text-blue-950 font-bold underline inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              Tanya Tim via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};
