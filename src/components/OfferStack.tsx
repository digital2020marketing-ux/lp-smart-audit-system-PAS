import React from 'react';
import { Layers, CheckCircle2, ShoppingBag, ShieldCheck, TrendingUp, Lock, Bot, FileSpreadsheet, BookOpen, Headphones, HelpCircle } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';
import imgDashboard from '../assets/images/gambar-dashbord-SAS.jpg';
import img9Modul from '../assets/images/9-modul.jpg';
import imgWorksheets from '../assets/images/worksheet-dan-formulir-AMI.jpg';

export const OfferStack: React.FC = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('offer_stack_buy', 'Offer Stack - Dapatkan SMART Audit System Rp497.000');
  };

  return (
    <section id="penawaran" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* (16) HEADLINE */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>PENAWARAN LENGKAP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            Semua yang Anda Butuhkan untuk Membangun Workflow Audit yang Lebih Terstruktur
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            Satu paket terintegrasi yang menggabungkan AI productivity tools, dokumen kerja operasional, dan knowledge base.
          </p>
        </div>

        {/* (17) IMAGE ALL MOCKUP: System Ecosystem Visual */}
        <div className="mb-12 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
              SMART AUDIT SYSTEM ECOSYSTEM
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* 1. Dashboard & AI */}
            <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 flex flex-col justify-between">
              <div className="rounded-xl overflow-hidden mb-2.5 border border-slate-800 bg-slate-950">
                <img 
                  src={imgDashboard} 
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/gambar-dashbord-SAS.jpg';
                  }}
                  alt="Dashboard SMART Audit SYSTEM" 
                  className="w-full h-32 sm:h-36 object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                  <Bot className="w-3.5 h-3.5 text-blue-400" />
                  <span>AI Productivity Suite</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  AI Checklist, AI PLOR, AI CAPA & ISO 19011 Co-Pilot
                </p>
              </div>
            </div>

            {/* 2. 7 Worksheets */}
            <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 flex flex-col justify-between">
              <div className="rounded-xl overflow-hidden mb-2.5 border border-slate-800 bg-slate-950">
                <img 
                  src={imgWorksheets} 
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/worksheet-dan-formulir-AMI.jpg';
                  }}
                  alt="7 Worksheet Word & Excel" 
                  className="w-full h-32 sm:h-36 object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                  <span>7 Worksheet Editable</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Program, Plan, Checklist, Form Temuan & Laporan
                </p>
              </div>
            </div>

            {/* 3. 9 Modul Pembelajaran */}
            <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 flex flex-col justify-between">
              <div className="rounded-xl overflow-hidden mb-2.5 border border-slate-800 bg-slate-950">
                <img 
                  src={img9Modul} 
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/9-modul.jpg';
                  }}
                  alt="9 Modul Pembelajaran Audit Internal" 
                  className="w-full h-32 sm:h-36 object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>9 Modul Pembelajaran</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Klausul 4-10, PLOR, CAPA & Alur Audit
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* (18) VALUE STACK & (19) OFFERING */}
        <div className="bg-slate-950 border-2 border-red-500/80 rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl">
          
          <div className="mb-6 pb-6 border-b border-slate-800">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2 text-center sm:text-left">
              SMART Audit SYSTEM Lifetime Access
            </h3>
            
            {/* What am I buying statement */}
            <div className="p-3.5 bg-blue-950/60 border border-blue-800/80 rounded-xl mb-4 text-xs sm:text-sm font-semibold text-blue-200">
              💡 <span className="text-white font-bold">Sekali aktivasi</span>, Anda mendapatkan sistem kerja digital yang bisa digunakan kembali setiap kali siklus audit internal datang.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AI Checklist & 5W+1H Generator</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AI PLOR Formulator</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AI CAPA / 5-Why Assistant</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 19011 Co-Pilot Assistant</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>7 Worksheet Word & Excel Editable</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>9 Modul Pembelajaran</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AI Asisten AMI</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>9 Seri Podcast Audio</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pre-Test & Post-Test</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Slide Presentasi & Mind Map</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <span className="text-slate-400 font-bold text-sm tracking-wider">
                TOTAL NILAI PAKET: <span className="line-through text-slate-400">Rp1.297.000</span>
              </span>
            </div>
          </div>

          {/* (19) OFFERING & (20) SCARCITY */}
          <div className="text-center space-y-4">
            <div>
              <span className="text-slate-400 line-through text-base font-bold block mb-1">
                Rp1.297.000
              </span>
              <div className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                Hari Ini Rp497.000
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-2">
                Sekali bayar untuk akses seumur hidup. Tanpa biaya langganan bulanan.
              </p>
            </div>

            {/* (20) SCARCITY (Credible Tier Structure) */}
            <div className="max-w-md mx-auto bg-slate-900 rounded-2xl p-4 border border-slate-800 text-left text-xs space-y-2">
              <div className="flex items-center justify-between text-amber-300 font-bold border-b border-slate-800 pb-1.5">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" /> JADWAL STRUKTUR FASE PENJUALAN:
                </span>
                <span className="text-emerald-400">Hemat Rp800.000</span>
              </div>
              
              <div className="flex items-center justify-between font-bold text-emerald-300 bg-emerald-950/60 p-2 rounded-lg border border-emerald-800/80">
                <span>• FASE PROMO SAAT INI:</span>
                <span className="text-white text-sm">Rp497.000</span>
              </div>

              <div className="flex items-center justify-between text-slate-400 px-2 py-0.5">
                <span>• Fase berikutnya:</span>
                <span className="font-semibold">Rp797.000</span>
              </div>

              <div className="flex items-center justify-between text-slate-400 px-2 py-0.5">
                <span>• Fase selanjutnya:</span>
                <span className="font-semibold">Rp997.000</span>
              </div>

              <div className="flex items-center justify-between text-slate-500 px-2 py-0.5">
                <span>• Harga normal:</span>
                <span className="font-semibold">Rp1.297.000</span>
              </div>

              <p className="text-[10.5px] text-slate-400 italic pt-1 border-t border-slate-800">
                *“Harga akan mengikuti fase penjualan berikutnya.”
              </p>
            </div>

            {/* (21) CALL TO ACTION */}
            <div className="max-w-md mx-auto pt-2 space-y-3">
              <a
                id="offer-stack-cta-btn"
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 shrink-0" />
                <span>DAPATKAN SMART AUDIT SYSTEM — Rp497.000</span>
              </a>

              <p className="text-xs text-slate-400 font-semibold">
                Sekali Bayar • Lifetime Access • Tanpa Biaya Bulanan
              </p>

              {/* Jaminan Kepuasan */}
              <div className="p-3 bg-emerald-950/70 border border-emerald-500/40 rounded-xl flex items-center justify-center gap-2 text-left shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <p className="text-[11px] sm:text-xs text-emerald-200 leading-tight">
                  <strong className="text-white font-bold">Jaminan Kepuasan:</strong> Garansi uang kembali jika SMART Audit SYSTEM tidak memberikan manfaat pada aktivitas audit Anda.
                </p>
              </div>

              {/* Payment Methods */}
              <div className="pt-2">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-left text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-300">Tersedia Pembayaran Otomatis:</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">Verifikasi Instan</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-200">
                    <span className="bg-slate-800 px-2 py-1 rounded">QRIS (Semua Bank & eWallet)</span>
                    <span className="bg-slate-800 px-2 py-1 rounded">BCA / Mandiri / BNI / BRI VA</span>
                    <span className="bg-slate-800 px-2 py-1 rounded">GoPay / OVO / Dana / ShopeePay</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
