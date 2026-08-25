import React from 'react';
import { ListChecks, FilePenLine, Target, Check, ArrowRight, Bot, Sparkles, ShoppingBag } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';
import imgChecklist from '../assets/images/Cek-List-Audit-dan-Simulasi.jpg';
import imgPlor from '../assets/images/Generator-Laporan-Temuan-PLOR.jpg';
import imgCapa from '../assets/images/CAPA.jpg';
import imgIsoCopilot from '../assets/images/ISO-19011.jpg';

interface AiToolsShowcaseProps {
  onCheckoutClick?: () => void;
}

export const AiToolsShowcase: React.FC<AiToolsShowcaseProps> = () => {
  const handleAiToolsBuyClick = () => {
    trackCheckoutClick('ai_tools_cta', 'AI Tools Section - Beli SMART Audit System');
  };
  return (
    <section id="ai-tools" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Suite & Co-Pilot
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            3 AI Tools + ISO 19011:2026 Co-Pilot Assistant
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Kombinasi lengkap 3 alat bantu otomatisasi audit internal serta asisten AI interaktif khusus pedoman audit sistem manajemen ISO 19011:2026.
          </p>
        </div>

        {/* 3 AI Tools Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          
          {/* Card 1: AI CHECKLIST */}
          <div className="bg-gray-800/90 hover:bg-gray-800 rounded-3xl border border-gray-700/80 p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/20 group">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-2xl overflow-hidden mb-5 border border-blue-500/40 bg-slate-950 shadow-lg group-hover:border-blue-400 transition-all">
                <img
                  src={imgChecklist}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "/images/Cek-List-Audit-dan-Simulasi.jpg";
                    }
                  }}
                  alt="AI Checklist & Simulasi Audit Mutu Internal"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-900/40 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/30 shrink-0">
                  <ListChecks className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight leading-tight">AI CHECKLIST</h3>
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                    Tahap: Persiapan Audit
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed">
                Hasilkan daftar pertanyaan audit terstruktur (open-ended), referensi klausul ISO 9001 yang tepat, dan panduan bukti objektif yang wajib diperiksa.
              </p>
              
              <div className="border-t border-gray-700/60 pt-4 mb-4">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Output yang Didapat:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Checklist Audit Per Departemen</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Pertanyaan Audit Mendalam (5W1H)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Klausul Terkait ISO 9001</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Rekomendasi Bukti Objektif</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-700/40">
              <span className="text-[11px] text-blue-300 font-semibold bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/20">
                ⚡ Generate dalam 15 Detik
              </span>
            </div>
          </div>

          {/* Card 2: AI PLOR */}
          <div className="bg-gray-800/90 hover:bg-gray-800 rounded-3xl border border-gray-700/80 p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-900/20 group">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-2xl overflow-hidden mb-5 border border-amber-500/40 bg-slate-950 shadow-lg group-hover:border-amber-400 transition-all">
                <img
                  src={imgPlor}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "/images/Generator-Laporan-Temuan-PLOR.jpg";
                    }
                  }}
                  alt="AI PLOR Finding Generator"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-900/40 rounded-xl flex items-center justify-center text-amber-400 border border-amber-500/30 shrink-0">
                  <FilePenLine className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight leading-tight">AI PLOR</h3>
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Tahap: Temuan & Pelaporan
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed">
                Tulis catatan lapangan apa adanya, AI PLOR akan memformat temuan menjadi rumusan standar internasional yang objektif, jelas, dan tidak memicu perdebatan.
              </p>

              <div className="border-t border-gray-700/60 pt-4 mb-4">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Struktur Temuan PLOR:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-red-400 shrink-0" />
                    <span><strong>P</strong>roblem (Ketidaksesuaian)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>L</strong>ocation (Lokasi/Unit Kerja)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>O</strong>bjective Evidence (Fakta Bukti)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span><strong>R</strong>equirement (Klausul SMM)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-700/40">
              <span className="text-[11px] text-amber-300 font-semibold bg-amber-900/30 px-3 py-1 rounded-full border border-amber-500/20">
                📝 Standar ISO 19011 Internasional
              </span>
            </div>
          </div>

          {/* Card 3: AI CAPA */}
          <div className="bg-gray-800/90 hover:bg-gray-800 rounded-3xl border border-gray-700/80 p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-green-500/50 hover:shadow-xl hover:shadow-green-900/20 group">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-2xl overflow-hidden mb-5 border border-green-500/40 bg-slate-950 shadow-lg group-hover:border-green-400 transition-all">
                <img
                  src={imgCapa}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "/images/CAPA.jpg";
                    }
                  }}
                  alt="AI CAPA 5-Why Engine"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-900/40 rounded-xl flex items-center justify-center text-green-400 border border-green-500/30 shrink-0">
                  <Target className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight leading-tight">AI CAPA</h3>
                  <p className="text-green-400 text-xs font-bold uppercase tracking-wider">
                    Tahap: Tindak Lanjut Perbaikan
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed">
                Membantu memandu auditee merumuskan akar masalah (Root Cause 5-Why), tindakan koreksi segera, dan tindakan pencegahan agar temuan tidak terulang.
              </p>

              <div className="border-t border-gray-700/60 pt-4 mb-4">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Komponen CAPA:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Analisis Akar Masalah (5-Why)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Koreksi Langsung (Correction)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Tindakan Korektif (Corrective Action)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span>PIC, Deadline & Monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-700/40">
              <span className="text-[11px] text-green-300 font-semibold bg-green-900/30 px-3 py-1 rounded-full border border-green-500/20">
                🎯 Cegah Ketidaksesuaian Berulang
              </span>
            </div>
          </div>

        </div>

        {/* Highlight Showcase: ISO 19011 Audit Assistant */}
        <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 mb-12 relative overflow-hidden">
          
          {/* Top Assistant Identity */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8">
            
            {/* Emblem Avatar */}
            <div className="relative mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-400 p-1 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-teal-900/60 flex items-center justify-center">
                    <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-teal-300" />
                  </div>
                  {/* Subtle decorative chart badge */}
                  <div className="absolute bottom-1 right-1 bg-amber-400 rounded-full p-0.5 text-[8px] text-slate-950 font-black">
                    ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Assistant Name */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
              ISO 19011:2026 Audit Assistant
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl font-medium mb-6">
              Co-pilot profesional untuk auditor dan praktisi sistem manajemen berbasis <strong className="text-gray-900 font-bold">ISO 19011:2026</strong>. Membantu perencanaan, pelaksanaan, evaluasi bukti, temuan, pelaporan, kompetensi auditor, serta panduan audit terkini.
            </p>

            {/* ISO 19011 Screenshot Preview */}
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden border-2 border-teal-500/30 shadow-xl bg-slate-950">
              <img 
                src={imgIsoCopilot}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.failed) {
                    target.dataset.failed = 'true';
                    target.src = "/images/ISO-19011.jpg";
                  }
                }}
                alt="ISO 19011:2026 Audit Assistant Co-Pilot Preview" 
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            id="ai-tools-cta"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleAiToolsBuyClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-base sm:text-lg transition-all shadow-2xl shadow-red-600/50 border-2 border-red-400/40 animate-vibrate-pulse cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 shrink-0 animate-bounce" />
            <span>PESAN SEKARANG VIA KERANJANG — RP497.000</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </a>
          <p className="text-gray-400 text-xs mt-3">
            Termasuk 3 AI Tools + ISO 19011:2026 Audit Assistant dengan Akses Seumur Hidup
          </p>
        </div>
      </div>
    </section>
  );
};

