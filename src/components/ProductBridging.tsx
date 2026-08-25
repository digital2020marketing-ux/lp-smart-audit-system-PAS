import React, { useState } from 'react';
import { Bot, FileSpreadsheet, Sparkles, CheckCircle2, ArrowRight, ArrowDown, Layers, FileText, Activity, Workflow, Shield, X, ZoomIn } from 'lucide-react';
import imgAiSuite from '../assets/images/5-AI-TOOLS-dan-SIMULASI.jpg';
import imgWorksheets from '../assets/images/worksheet-dan-formulir-AMI.jpg';
import imgDashboard from '../assets/images/gambar-dashbord-SAS.jpg';
import imgChecklist from '../assets/images/Cek-List-Audit-dan-Simulasi.jpg';
import imgPlor from '../assets/images/Generator-Laporan-Temuan-PLOR.jpg';
import imgCapa from '../assets/images/CAPA.jpg';
import imgIso19011 from '../assets/images/ISO-19011.jpg';

interface ProductBridgingProps {
  onSeeOfferClick?: () => void;
}

export const ProductBridging: React.FC<ProductBridgingProps> = ({ onSeeOfferClick }) => {
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);

  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSeeOfferClick) {
      onSeeOfferClick();
    } else {
      const el = document.getElementById('penawaran') || document.getElementById('checkout');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sistem-kerja" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* (8) HEADLINE */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold text-blue-400 bg-blue-950/90 border border-blue-800 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            SATU EKOSISTEM KERJA TERPADU
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3.5 mb-4 leading-tight">
            Bagaimana Kalau Semua Starting Point Pekerjaan Itu Ada dalam Satu Sistem?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            Bukan sekadar kumpulan teori, melainkan instrumen kerja aktif yang dirancang langsung untuk mempermudah eksekusi audit harian Anda.
          </p>
        </div>

        {/* (9) IMAGE MOCKUP: Composite visual (Dashboard + AI Tools + Worksheet) */}
        <div className="mb-12 bg-slate-950/80 border border-slate-800 rounded-3xl p-4 sm:p-7 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
            
            {/* Dashboard / AI Tools View */}
            <div className="space-y-3">
              <div 
                onClick={() => setZoomImage({ src: imgAiSuite, title: 'AI Productivity Suite — 5 AI Tools & Simulasi' })}
                className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 group shadow-lg cursor-pointer"
              >
                <div className="px-3 py-1.5 bg-slate-900 text-[11px] text-slate-300 font-mono flex items-center justify-between border-b border-slate-800">
                  <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                    <Bot className="w-3.5 h-3.5" /> AI Productivity Suite
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded">Prompting-Free</span>
                </div>
                <div className="relative">
                  <img 
                    src={imgAiSuite} 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/5-AI-TOOLS-dan-SIMULASI.jpg';
                    }}
                    alt="AI Productivity Suite SMART Audit SYSTEM" 
                    className="w-full h-auto object-cover block group-hover:scale-[1.01] transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5" /> Klik untuk perbesar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Worksheets Word & Excel View */}
            <div className="space-y-3">
              <div 
                onClick={() => setZoomImage({ src: imgWorksheets, title: '7 Worksheet Word & Excel Audit Mutu Internal' })}
                className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 group shadow-lg cursor-pointer"
              >
                <div className="px-3 py-1.5 bg-slate-900 text-[11px] text-slate-300 font-mono flex items-center justify-between border-b border-slate-800">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <FileSpreadsheet className="w-3.5 h-3.5" /> 7 Worksheet Word & Excel
                  </span>
                  <span className="text-[10px] text-blue-300 bg-blue-950 px-2 py-0.5 rounded">100% Editable</span>
                </div>
                <div className="relative">
                  <img 
                    src={imgWorksheets} 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/worksheet-dan-formulir-AMI.jpg';
                    }}
                    alt="Worksheet dan Formulir AMI Word & Excel" 
                    className="w-full h-auto object-cover block group-hover:scale-[1.01] transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5" /> Klik untuk perbesar
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Calon customer callout */}
          <div className="mt-5 p-3 sm:p-4 bg-blue-950/60 border border-blue-500/30 rounded-2xl text-center">
            <p className="text-xs sm:text-sm text-blue-200 font-semibold">
              💡 <span className="font-extrabold text-white">“Oh, ini sistem kerja operasional, bukan cuma ebook teori.”</span>
            </p>
          </div>
        </div>

        {/* (10) FEATURE — BENEFIT — MEANING */}
        <div className="space-y-6 mb-12">
          
          {/* Main Definition Lead */}
          <div className="p-5 sm:p-6 bg-slate-950 border-l-4 border-blue-500 rounded-r-2xl text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
            <strong className="text-white font-bold">SMART Audit SYSTEM</strong> adalah <span className="text-blue-300 font-semibold">AI-Assisted Workflow</span> untuk auditor internal ISO 9001 & ISO 19011 yang menggabungkan AI Productivity Suite, worksheet operasional, dan knowledge system dalam satu dashboard terintegrasi.
          </div>

          {/* Feature-Benefit-Meaning Blocks with Clickable Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Feature 1 */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-blue-400 font-extrabold text-sm sm:text-base mb-2">
                  <Bot className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>AI Checklist & 5W+1H Generator</span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 mb-3.5 leading-relaxed">
                  Membantu menyiapkan starting point pertanyaan dan rekomendasi bukti objektif per klausul.
                </p>

                {/* Visual Image Preview */}
                <div 
                  onClick={() => setZoomImage({ src: imgChecklist, title: 'AI Checklist & 5W+1H Generator' })}
                  className="mb-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md group cursor-pointer relative"
                >
                  <img 
                    src={imgChecklist} 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/Cek-List-Audit-dan-Simulasi.jpg';
                    }}
                    alt="AI Checklist & 5W+1H Generator Preview" 
                    className="w-full h-auto max-h-48 object-cover object-top block group-hover:scale-[1.02] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> Perbesar
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-950/50 border border-blue-800/60 rounded-xl text-xs font-bold text-emerald-300">
                👉 sehingga Anda tidak perlu selalu menyusun checklist dari halaman kosong.
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-blue-400 font-extrabold text-sm sm:text-base mb-2">
                  <FileText className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>AI PLOR Formulator</span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 mb-3.5 leading-relaxed">
                  Membantu merapikan catatan lapangan menjadi struktur temuan baku PLOR.
                </p>

                {/* Visual Image Preview */}
                <div 
                  onClick={() => setZoomImage({ src: imgPlor, title: 'AI PLOR Formulator — Problem, Location, Objective Evidence, Requirement' })}
                  className="mb-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md group cursor-pointer relative"
                >
                  <img 
                    src={imgPlor} 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/Generator-Laporan-Temuan-PLOR.jpg';
                    }}
                    alt="AI PLOR Formulator Preview" 
                    className="w-full h-auto max-h-48 object-cover object-top block group-hover:scale-[1.02] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> Perbesar
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-950/50 border border-blue-800/60 rounded-xl text-xs font-bold text-emerald-300">
                👉 sehingga proses formulasi temuan menjadi lebih terstruktur dan objektif.
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-blue-400 font-extrabold text-sm sm:text-base mb-2">
                  <Activity className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>AI CAPA / 5-Why Assistant</span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 mb-3.5 leading-relaxed">
                  Membantu mengeksplorasi akar masalah mendalam dan tindakan pencegahan berulang.
                </p>

                {/* Visual Image Preview */}
                <div 
                  onClick={() => setZoomImage({ src: imgCapa, title: 'AI CAPA & 5-Why Root Cause Assistant' })}
                  className="mb-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md group cursor-pointer relative"
                >
                  <img 
                    src={imgCapa} 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/CAPA.jpg';
                    }}
                    alt="AI CAPA / 5-Why Assistant Preview" 
                    className="w-full h-auto max-h-48 object-cover object-top block group-hover:scale-[1.02] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> Perbesar
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-950/50 border border-blue-800/60 rounded-xl text-xs font-bold text-emerald-300">
                👉 sehingga analisis tidak berhenti pada gejala permukaan saja.
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-blue-400 font-extrabold text-sm sm:text-base mb-2">
                  <Shield className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>ISO 19011 Co-Pilot Assistant</span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 mb-3.5 leading-relaxed">
                  Panduan prinsip audit, sampling, etika auditor, dan manajemen program audit.
                </p>

                {/* Visual Image Preview */}
                <div 
                  onClick={() => setZoomImage({ src: imgIso19011, title: 'ISO 19011 Co-Pilot Assistant' })}
                  className="mb-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md group cursor-pointer relative"
                >
                  <img 
                    src={imgIso19011} 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/ISO-19011.jpg';
                    }}
                    alt="ISO 19011 Co-Pilot Assistant Preview" 
                    className="w-full h-auto max-h-48 object-cover object-top block group-hover:scale-[1.02] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> Perbesar
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-950/50 border border-blue-800/60 rounded-xl text-xs font-bold text-emerald-300">
                👉 sehingga pelaksanaan audit selalu patuh pada kaidah panduan audit ISO 19011.
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-slate-700 transition-colors flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center gap-2.5 text-blue-400 font-extrabold text-sm sm:text-base mb-2">
                  <FileSpreadsheet className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>7 Worksheet Word & Excel Editable (100% Siap Pakai)</span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 mb-3.5 leading-relaxed">
                  Menyediakan dokumen kerja audit operasional: Program Audit, Audit Plan, Jadwal, Checklist, PTKP, CAPA Tracker, hingga Laporan Ringkasan.
                </p>

                {/* Visual Image Preview */}
                <div 
                  onClick={() => setZoomImage({ src: imgWorksheets, title: '7 Worksheet Word & Excel Editable' })}
                  className="mb-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md group cursor-pointer relative"
                >
                  <img 
                    src={imgWorksheets} 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/worksheet-dan-formulir-AMI.jpg';
                    }}
                    alt="7 Worksheet Word & Excel Editable Preview" 
                    className="w-full h-auto max-h-48 object-cover object-top block group-hover:scale-[1.01] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> Perbesar
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-950/50 border border-blue-800/60 rounded-xl text-xs font-bold text-emerald-300">
                👉 sehingga administrasi audit lebih konsisten dan rapi dari satu siklus ke siklus berikutnya.
              </div>
            </div>

          </div>

          {/* (NEW) MINI DEMONSTRATION WORKFLOW BLOCK */}
          <div className="mt-10 sm:mt-12 bg-gradient-to-b from-slate-950 to-slate-900/90 border border-blue-900/60 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2.5 mb-2 text-blue-400">
              <Workflow className="w-5 h-5" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">Simulasi Workflow Nyata</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-white mb-2">
              Contoh Alur 1 Pekerjaan Audit dengan SMART Audit SYSTEM
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Lihat bagaimana setiap instrumen saling terhubung memandu Anda dari awal persiapan hingga pelaporan temuan:
            </p>

            <div className="space-y-3 sm:space-y-3.5">
              {/* Step 1 */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 sm:p-4 flex items-start gap-3.5">
                <span className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/50 text-blue-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Input Awal:</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Masukkan: Departemen Purchasing + ruang lingkup proses</div>
                </div>
              </div>

              <div className="flex justify-center text-blue-400 my-0.5">
                <ArrowDown className="w-4 h-4 opacity-75" />
              </div>

              {/* Step 2 */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 sm:p-4 flex items-start gap-3.5">
                <span className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/50 text-blue-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <div className="text-xs font-semibold text-blue-400">AI Checklist & 5W+1H Generator membantu menyiapkan:</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Starting point pertanyaan 5W+1H + rekomendasi objective evidence</div>
                </div>
              </div>

              <div className="flex justify-center text-blue-400 my-0.5">
                <ArrowDown className="w-4 h-4 opacity-75" />
              </div>

              {/* Step 3 */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 sm:p-4 flex items-start gap-3.5">
                <span className="w-7 h-7 rounded-lg bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <div className="text-xs font-semibold text-emerald-400">Pelaksanaan Audit:</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Anda turun audit ke lapangan dan mencatat fakta objektif</div>
                </div>
              </div>

              <div className="flex justify-center text-blue-400 my-0.5">
                <ArrowDown className="w-4 h-4 opacity-75" />
              </div>

              {/* Step 4 */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 sm:p-4 flex items-start gap-3.5">
                <span className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/50 text-blue-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Formulasi Catatan:</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Masukkan catatan kasar ke AI PLOR Formulator</div>
                </div>
              </div>

              <div className="flex justify-center text-blue-400 my-0.5">
                <ArrowDown className="w-4 h-4 opacity-75" />
              </div>

              {/* Step 5 */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 sm:p-4 flex items-start gap-3.5">
                <span className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/50 text-blue-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <div className="text-xs font-semibold text-blue-400">Output Terstruktur:</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Dapatkan draft struktur standar: <span className="text-amber-300">Problem → Location → Objective Evidence → Requirement</span></div>
                </div>
              </div>

              <div className="flex justify-center text-blue-400 my-0.5">
                <ArrowDown className="w-4 h-4 opacity-75" />
              </div>

              {/* Step 6 */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 sm:p-4 flex items-start gap-3.5">
                <span className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/50 text-blue-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">6</span>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Tindak Lanjut Temuan:</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Temuan diteruskan ke AI CAPA / 5-Why Assistant</div>
                </div>
              </div>

              <div className="flex justify-center text-blue-400 my-0.5">
                <ArrowDown className="w-4 h-4 opacity-75" />
              </div>

              {/* Step 7 */}
              <div className="bg-emerald-950/40 border border-emerald-800/80 rounded-xl p-3.5 sm:p-4 flex items-start gap-3.5">
                <span className="w-7 h-7 rounded-lg bg-emerald-600 text-slate-950 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">✓</span>
                <div>
                  <div className="text-xs font-semibold text-emerald-400">Hasil Akhir:</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Eksplorasi root cause → correction → corrective action → monitoring plan siap pakai di Formulir Excel</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* (11) BUTTON: LIHAT SEMUA YANG SAYA DAPATKAN */}
        <div className="text-center max-w-md mx-auto">
          <a
            id="product-bridging-btn"
            href="#penawaran"
            onClick={handleScrollToOffer}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
          >
            <span>LIHAT SEMUA YANG SAYA DAPATKAN</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setZoomImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
              <span className="text-xs sm:text-sm font-bold text-slate-200 truncate pr-4">
                {zoomImage.title}
              </span>
              <button
                onClick={() => setZoomImage(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-2 sm:p-4 bg-slate-950 flex items-center justify-center">
              <img 
                src={zoomImage.src} 
                alt={zoomImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
