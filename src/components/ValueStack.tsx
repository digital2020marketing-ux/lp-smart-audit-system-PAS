import React from 'react';
import { Layers, CheckCircle2, ShoppingBag, ArrowRight, Bot, FileSpreadsheet, BookOpen, Headphones, ShieldCheck, Sparkles, TrendingUp, Clock } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';

interface ValueStackProps {
  onCheckoutClick?: () => void;
}

export const ValueStack: React.FC<ValueStackProps> = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('value_stack_buy', 'Value Stack - Beli SMART Audit System Rp497.000');
  };

  return (
    <section id="penawaran" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>RINCIAN NILAI PRODUK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-3">
            Yang Anda Dapatkan di SMART Audit SYSTEM
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            Seluruh paket AI tools, lembar kerja operasional, dan materi pembelajaran disatukan dalam satu harga terjangkau.
          </p>
        </div>

        {/* Value Stack Breakdown Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl">
          
          {/* Group 1: CORE VALUE (AI Productivity Suite) */}
          <div className="mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-wider">
                <Bot className="w-4 h-4" />
                <span>1. CORE VALUE: AI Productivity Suite & Co-Pilot</span>
              </div>
              <span className="text-xs text-slate-400 font-mono font-bold">Termasuk</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>AI Checklist & 5W+1H Generator:</strong> Draf pertanyaan audit open-ended seketika.</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>AI PLOR Formulator:</strong> Struktur temuan Problem, Location, Evidence, Requirement.</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>AI CAPA / 5-Why Assistant:</strong> Eksplorasi akar masalah & rencana perbaikan.</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>ISO 19011 Co-Pilot Assistant:</strong> Rekan diskusi interaktif skenario audit.</span>
              </div>
            </div>
          </div>

          {/* Group 2: IMPLEMENTATION SYSTEM (7 Worksheets) */}
          <div className="mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-wider">
                <FileSpreadsheet className="w-4 h-4" />
                <span>2. IMPLEMENTATION SYSTEM: 7 Worksheet Word & Excel Editable</span>
              </div>
              <span className="text-xs text-slate-400 font-mono font-bold">Termasuk</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="text-blue-400 font-bold">•</span>
                <span>Program Audit Tahunan (Word & Excel)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="text-blue-400 font-bold">•</span>
                <span>Jadwal & Audit Plan Rinci (Word & Excel)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="text-blue-400 font-bold">•</span>
                <span>Checklist Audit Mutu Internal (Word & Excel)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="text-blue-400 font-bold">•</span>
                <span>Formulir Temuan PTKP & CAPA (Word & Excel)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="text-blue-400 font-bold">•</span>
                <span>Laporan Ringkasan Hasil Audit (Word .docx)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="text-blue-400 font-bold">•</span>
                <span>Surat Pemberitahuan & Presensi Meeting</span>
              </div>
            </div>
          </div>

          {/* Group 3: KNOWLEDGE & SUPPORTING ASSETS */}
          <div className="mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-amber-400 font-black text-xs uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>3. KNOWLEDGE SYSTEM & SUPPORTING ASSETS</span>
              </div>
              <span className="text-xs text-slate-400 font-mono font-bold">Termasuk</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="text-amber-400 font-bold">•</span>
                <span>9 Modul Pembelajaran Audit ISO 9001 & ISO 19011</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="text-amber-400 font-bold">•</span>
                <span>AI Asisten AMI (Tanya Jawab & Penjelas Modul 24/7)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="text-amber-400 font-bold">•</span>
                <span>Podcast Audio Ulasan Mendalam per Modul</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="text-amber-400 font-bold">•</span>
                <span>Slide Presentasi & Mind Map Alur Audit</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80 sm:col-span-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Simulasi Evaluasi Pre-Test & Post-Test Pemahaman</span>
              </div>
            </div>
          </div>

          {/* Price Anchor Section */}
          <div className="bg-gradient-to-b from-slate-900 to-blue-950 p-6 sm:p-8 rounded-2xl border border-blue-900 text-center">
            <div className="text-slate-400 line-through text-sm sm:text-base font-bold mb-1">
              TOTAL NILAI KESELURUHAN: Rp1.297.000
            </div>
            
            <div className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight my-2">
              Rp497.000
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-300 mb-5">
              <span className="bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800">
                ✓ Fase Promo Aktif
              </span>
              <span className="bg-slate-800 text-white px-3 py-1 rounded-full">
                ✓ Sekali Bayar Seumur Hidup
              </span>
              <span className="bg-slate-800 text-white px-3 py-1 rounded-full">
                ✓ Tanpa Biaya Bulanan
              </span>
            </div>

            {/* Micro Tier Info */}
            <div className="max-w-md mx-auto bg-slate-950/80 rounded-xl p-3 border border-slate-800 text-[11px] text-slate-400 text-left mb-6 space-y-1.5">
              <div className="flex items-center justify-between text-slate-300 font-bold border-b border-slate-800 pb-1 text-[10.5px]">
                <span className="text-amber-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> FASE KENAIKAN HARGA:
                </span>
                <span className="text-emerald-400">Hemat Rp800.000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-emerald-300 font-bold">• Fase Promo Saat Ini:</span>
                <span className="text-white font-extrabold">Rp497.000</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>• Fase 1 (Berikutnya):</span>
                <span>Rp797.000</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>• Fase 2 (Lanjutan):</span>
                <span>Rp997.000</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>• Fase Normal:</span>
                <span>Rp1.297.000</span>
              </div>
            </div>

            {/* CTA #4 */}
            <div className="max-w-md mx-auto">
              <a
                id="value-stack-buy-cta"
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 shrink-0" />
                <span>DAPATKAN SMART AUDIT SYSTEM — Rp497.000</span>
              </a>

              {/* High-Impact Guarantee Notice */}
              <div className="mt-3 p-3 bg-emerald-950/60 border border-emerald-500/30 rounded-xl flex items-center justify-center gap-2 text-left shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <p className="text-[11px] sm:text-xs font-semibold text-emerald-300">
                  <span className="font-bold text-white">Garansi 100%:</span> Garansi uang kembali jika produk SMART Audit SYSTEM ini tidak bermanfaat bagi aktifitas audit anda.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
