import React from 'react';
import { 
  CheckCircle2, 
  Gift, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Infinity, 
  ArrowRight, 
  Sparkles, 
  MessageCircle, 
  Info, 
  FileSpreadsheet, 
  Layers, 
  Bot, 
  BookOpen, 
  FileText,
  HelpCircle,
  ShoppingBag,
  Headphones,
  ListChecks,
  FilePenLine,
  Target,
  Award,
  TrendingUp,
  Clock,
  AlertCircle
} from 'lucide-react';
import { CHECKOUT_URL, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';
import img9Modul from '../assets/images/9-modul-dan-audio.jpg';
import imgPodcast from '../assets/images/podcast-audio-ulasan-mendalam.jpg';
import imgWorksheet from '../assets/images/worksheet-dan-formulir-AMI.jpg';
import imgIsoCopilot from '../assets/images/ISO-19011.jpg';
import img5AiTools from '../assets/images/5-AI-TOOLS-dan-SIMULASI.jpg';
import imgChecklist from '../assets/images/Cek-List-Audit-dan-Simulasi.jpg';
import imgPlor from '../assets/images/Generator-Laporan-Temuan-PLOR.jpg';
import imgCapa from '../assets/images/CAPA.jpg';
import imgEvaluasi from '../assets/images/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg';

interface PricingOfferProps {
  onCheckoutClick?: () => void;
}

export const PricingOffer: React.FC<PricingOfferProps> = () => {
  const handleOfferBuyClick = () => {
    trackCheckoutClick('offer_buy', 'Pricing Box - Beli SMART Audit System Rp497.000');
  };

  const handleOfferAskClick = () => {
    trackWhatsAppClick('offer_ask', 'Pricing Box - Tanya Tim via WA');
  };

  return (
    <section id="penawaran" className="py-14 sm:py-20 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Struktur Paket Terintegrasi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center leading-tight tracking-tight text-white">
            Bukan Sekadar Kumpulan File — Ini Satu Sistem Kerja Auditor Internal
          </h2>
          <p className="text-slate-300 mt-3 text-xs sm:text-base max-w-2xl mx-auto">
            Semua komponen saling terhubung untuk membuat audit internal Anda berjalan rapi dan percaya diri dari persiapan hingga tindak lanjut.
          </p>
        </div>

        {/* Visual Showcase: 9 Modul, Podcast Audio, 7 Worksheet AMI, 5 AI Tools, AI CAPA & Evaluasi Pre/Post Test */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 max-w-6xl mx-auto">
          {/* Card 1: 9 Modul Panduan Praktis */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-blue-900/30 via-slate-800/60 to-slate-900 border border-blue-500/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-blue-400 hover:shadow-blue-900/20 transition-all">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-xl overflow-hidden mb-4 border border-blue-500/30 shadow-md bg-slate-950">
                <img
                  src={img9Modul}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "/images/9-modul.jpg";
                    }
                  }}
                  alt="9 Modul Panduan Praktis ISO 19011"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full border border-blue-400/30">
                  9 Modul Lengkap
                </span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 block mb-1">Materi Pembelajaran</span>
                <h4 className="text-sm sm:text-base font-black text-white mb-2">9 Modul Panduan Praktis ISO 19011</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Panduan komprehensif mulai dari persiapan, penyusunan jadwal, teknik wawancara, formulasi temuan, hingga penutupan audit.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-blue-300 font-semibold">
              <span>Ebook + Ringkasan PDF</span>
              <span>100% Praktis</span>
            </div>
          </div>

          {/* Card 2: Podcast Audio Ulasan Mendalam */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-purple-900/30 via-slate-800/60 to-slate-900 border border-purple-500/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-purple-400 hover:shadow-purple-900/20 transition-all">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-xl overflow-hidden mb-4 border border-purple-500/30 shadow-md bg-slate-950">
                <img
                  src={imgPodcast}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "/images/podcast-audio-ulasan-mendalam.jpg";
                    }
                  }}
                  alt="Podcast Audio Ulasan Mendalam"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <Headphones className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full border border-purple-400/30">
                  Audio Podcast
                </span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 block mb-1">Multimedia Audio</span>
                <h4 className="text-sm sm:text-base font-black text-white mb-2">Podcast Audio Ulasan Mendalam</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Belajar di perjalanan dengan penjelasan audio santai namun berbobot mengenai studi kasus dan psikologi audit lapangan.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-purple-300 font-semibold">
              <span>Bisa Diputar Kapan Saja</span>
              <span>Audio HD</span>
            </div>
          </div>

          {/* Card 3: Worksheet & Formulir AMI */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-indigo-900/30 via-slate-800/60 to-slate-900 border border-indigo-500/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-indigo-400 hover:shadow-indigo-900/20 transition-all">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-xl overflow-hidden mb-4 border border-indigo-500/30 shadow-md bg-slate-950">
                <img
                  src={imgWorksheet}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "/images/worksheet-dan-formulir-AMI.jpg";
                    }
                  }}
                  alt="7 Worksheet & Formulir Standar AMI"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full border border-indigo-400/30">
                  7 Template Siap Pakai
                </span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 block mb-1">Dokumen Kerja</span>
                <h4 className="text-sm sm:text-base font-black text-white mb-2">7 Worksheet & Form Standar AMI</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Program audit tahunan, matriks jadwal, checklist per departemen, form PLOR, log CAPA, dan template laporan manajemen.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-indigo-300 font-semibold">
              <span>Format .XLSX & .DOCX</span>
              <span>Edit Bebas</span>
            </div>
          </div>

          {/* Card 4: ISO 19011 Audit Assistant */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-teal-900/30 via-slate-800/60 to-slate-900 border border-teal-500/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-teal-400 hover:shadow-teal-900/20 transition-all">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-xl overflow-hidden mb-4 border border-teal-500/30 shadow-md bg-slate-950">
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
                  alt="ISO 19011:2026 Co-Pilot Assistant"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-full border border-teal-400/30">
                  Co-Pilot AI 24/7
                </span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400 block mb-1">Asisten Interaktif</span>
                <h4 className="text-sm sm:text-base font-black text-white mb-2">ISO 19011:2026 Co-Pilot Assistant</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Asisten Co-Pilot interaktif khusus pedoman audit sistem manajemen berbasis ISO 19011:2026 untuk memandu perencanaan, pelaksanaan, dan pelaporan.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-teal-300 font-semibold">
              <span>Fokus ISO 19011:2026</span>
              <span>Akses Interaktif</span>
            </div>
          </div>

          {/* Card 5: 5 AI Tools & Simulasi */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-cyan-900/30 via-slate-800/60 to-slate-900 border border-cyan-500/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-cyan-400 hover:shadow-cyan-900/20 transition-all">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-xl overflow-hidden mb-4 border border-cyan-500/30 shadow-md bg-slate-950">
                <img
                  src={img5AiTools}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "/images/5-AI-TOOLS-dan-SIMULASI.jpg";
                    }
                  }}
                  alt="5 AI Tools & Simulasi Kasus"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-400/30">
                  Full AI Suite
                </span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block mb-1">Otomatisasi Lengkap</span>
                <h4 className="text-sm sm:text-base font-black text-white mb-2">5 AI Tools & Simulasi Kasus</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ekosistem AI untuk mempercepat pembuatan checklist, perumusan temuan PLOR, formulasi CAPA, dan simulasi skenario lapangan.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-cyan-300 font-semibold">
              <span>Selesai dalam Detik</span>
              <span>Akurasi Tinggi</span>
            </div>
          </div>

          {/* Card 6: AI Checklist Audit & Pertanyaan */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-blue-900/30 via-slate-800/60 to-slate-900 border border-blue-500/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-blue-400 hover:shadow-blue-900/20 transition-all">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-xl overflow-hidden mb-4 border border-blue-500/30 shadow-md bg-slate-950">
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
                  alt="AI Checklist & Pertanyaan 5W+1H"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <ListChecks className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full border border-blue-400/30">
                  Persiapan Audit
                </span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 block mb-1">Generator Checklist</span>
                <h4 className="text-sm sm:text-base font-black text-white mb-2">AI Checklist & Pertanyaan 5W+1H</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Hasilkan daftar pertanyaan audit mendalam, daftar klausul relevan, dan rekomendasi bukti objektif yang wajib diverifikasi.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-blue-300 font-semibold">
              <span>Per Semua Departemen</span>
              <span>Open-Ended</span>
            </div>
          </div>

          {/* Card 7: AI PLOR Generator */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-amber-900/30 via-slate-800/60 to-slate-900 border border-amber-500/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-amber-400 hover:shadow-amber-900/20 transition-all">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-xl overflow-hidden mb-4 border border-amber-500/30 shadow-md bg-slate-950">
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
                  alt="AI Generator Temuan PLOR"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <FilePenLine className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-400/30">
                  Formulasi Temuan
                </span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">Standar ISO 19011</span>
                <h4 className="text-sm sm:text-base font-black text-white mb-2">AI Generator Temuan PLOR</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ubah catatan kasar lapangan menjadi rumusan temuan Problem, Location, Objective Evidence, dan Requirement yang objektif.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-amber-300 font-semibold">
              <span>Bebas Debat & Opini</span>
              <span>Bukti Kuat</span>
            </div>
          </div>

          {/* Card 8: AI Tools CAPA */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-green-900/30 via-slate-800/60 to-slate-900 border border-green-500/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-green-400 hover:shadow-green-900/20 transition-all">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-xl overflow-hidden mb-4 border border-green-500/30 shadow-md bg-slate-950">
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
                  alt="AI Tools CAPA Assistant"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-400/30 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-green-500/20 text-green-300 px-2.5 py-1 rounded-full border border-green-400/30">
                  Tindak Lanjut
                </span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-green-400 block mb-1">Akar Masalah 5-Why</span>
                <h4 className="text-sm sm:text-base font-black text-white mb-2">AI Tools CAPA Assistant</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pandu auditee menyusun analisis akar masalah, tindakan perbaikan segera (koreksi), dan rencana pencegahan jangka panjang.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-green-300 font-semibold">
              <span>Cegah Temuan Berulang</span>
              <span>Template Rapi</span>
            </div>
          </div>

          {/* Card 9: Evaluasi Pre Test dan Post Test */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-emerald-900/30 via-slate-800/60 to-slate-900 border border-emerald-500/40 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-emerald-400 hover:shadow-emerald-900/20 transition-all">
            <div>
              {/* Product Preview Image */}
              <div className="rounded-xl overflow-hidden mb-4 border border-emerald-500/30 shadow-md bg-slate-950">
                <img
                  src={imgEvaluasi}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      target.src = "/images/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg";
                    }
                  }}
                  alt="Evaluasi Pre-Test & Post-Test"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-400/30">
                  Uji Kompetensi
                </span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block mb-1">Evaluasi Mandiri</span>
                <h4 className="text-sm sm:text-base font-black text-white mb-2">Evaluasi Pre-Test & Post-Test</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ukur dan validasi peningkatan pemahaman auditor internal sebelum dan sesudah mempelajari modul SMART Audit SYSTEM.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-emerald-300 font-semibold">
              <span>Bank Soal & Kunci</span>
              <span>Sertifikat Mandiri</span>
            </div>
          </div>
        </div>

        {/* 3 VISUAL BOXES OFFER STACK */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          
          {/* BOX A: SISTEM KERJA AUDITOR */}
          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-xl relative group hover:border-blue-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 block mb-1">
                  BOX A: FONDASI UTAMA
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  SISTEM KERJA AUDITOR
                </h3>
                <p className="text-xs text-slate-400 mt-1 italic">
                  Fondasi untuk menjalankan audit lebih terstruktur.
                </p>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">9 Modul Audit Mutu Internal</strong>
                    <span className="text-slate-400 text-xs">Memahami proses audit dari persiapan sampai tindak lanjut.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">7 Worksheet & Formulir Editable</strong>
                    <span className="text-slate-400 text-xs">Program audit, plan, checklist, PTKP, laporan (Word & Excel).</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">Dashboard Terintegrasi</strong>
                    <span className="text-slate-400 text-xs">Semua materi dan tools dapat diakses dari satu tempat.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-blue-300 font-bold">
              ✓ Akses Seumur Hidup
            </div>
          </div>

          {/* BOX B: AI PRODUCTIVITY TOOLS */}
          <div className="bg-slate-950/90 rounded-3xl border-2 border-emerald-500/80 p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative group hover:border-emerald-400 transition-all">
            <div className="absolute -top-3 right-6 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              AI Co-Pilot 24/7
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-1">
                  BOX B: PERCEPATAN KERJA
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  AI PRODUCTIVITY TOOLS
                </h3>
                <p className="text-xs text-slate-400 mt-1 italic">
                  Kurangi waktu yang habis untuk blank-page problem.
                </p>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">AI Checklist Generator</strong>
                    <span className="text-slate-400 text-xs">Merumuskan draf pertanyaan berdasarkan klausul & proses.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">AI PLOR Formulator</strong>
                    <span className="text-slate-400 text-xs">Menyusun formulasi temuan baku standar internasional.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">AI CAPA Advisor</strong>
                    <span className="text-slate-400 text-xs">Eksplorasi akar masalah (5-Why) & tindakan perbaikan.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">ISO 19011:2026 Assistant</strong>
                    <span className="text-slate-400 text-xs">Konsultasi skenario audit mutu internal berbasis ISO 19011:2026 24/7.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-emerald-900/60 text-[11px] text-emerald-300 font-bold">
              ✓ Unlimited Prompt Usage
            </div>
          </div>

          {/* BOX C: SUPPORTING ASSETS */}
          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-xl relative group hover:border-purple-500/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-950 border border-purple-800/80 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 block mb-1">
                  BOX C: MULTIMEDIA & UPDATE
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  SUPPORTING ASSETS
                </h3>
                <p className="text-xs text-slate-400 mt-1 italic">
                  Belajar, bekerja, & refresh materi dalam satu sistem.
                </p>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">Audio Podcast Pembelajaran</strong>
                    <span className="text-slate-400 text-xs">Belajar fleksibel saat mobilitas atau santai.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">Slide Presentasi (PDF)</strong>
                    <span className="text-slate-400 text-xs">Siap pakai untuk training & sosialisasi tim internal.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">Mind Map & Infografis Per Bab</strong>
                    <span className="text-slate-400 text-xs">Ringkasan visual klausul & alur kerja praktis.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold block">Update Materi ISO Berkala</strong>
                    <span className="text-slate-400 text-xs">Pembaruan saat versi standar ISO 9001 disesuaikan.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-purple-300 font-bold">
              ✓ Format Digital Siap Pakai
            </div>
          </div>

        </div>

        {/* VALUE ANCHOR & PRICING CARD */}
        <div className="bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl max-w-2xl mx-auto border border-gray-100">
          
          {/* Card Top Banner */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3.5 px-6 text-center text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>PENAWARAN PROMO RESMI — SEKALI BAYAR UNTUK AKSES SEUMUR HIDUP</span>
          </div>

          <div className="p-6 sm:p-9">
            
            {/* Value Anchor Explanation */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-6 text-left">
              <h4 className="font-extrabold text-sm sm:text-base text-gray-900 mb-1 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-900" />
                Kalau Semua Ini Anda Siapkan Sendiri…
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                Berapa banyak waktu dan energi yang dibutuhkan untuk mencari referensi, membuat format checklist, merapikan audit plan, menyusun formulir PTKP, membuat laporan, dan merancang pertanyaan audit satu per satu dari nol?
              </p>
              <p className="text-xs sm:text-sm text-blue-950 font-bold mt-2">
                SMART Audit SYSTEM menyatukan seluruh alur kerja tersebut dalam satu akses siap pakai.
              </p>
            </div>

            {/* Total Value Summary */}
            <div className="border-b border-gray-100 pb-5 mb-5 text-left text-xs sm:text-sm space-y-2">
              <p className="font-bold text-gray-800">Total Komponen yang Anda Dapatkan:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-gray-600 text-xs">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Sistem Kerja (9 Modul & 7 Form)</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 3 AI Tools + Co-Pilot ISO 19011:2026</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Audio, Slide & Mind Map</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Evaluasi Pre-Test & Post-Test</span>
              </div>
            </div>

            {/* Price display */}
            <div className="text-center mb-6">
              <p className="text-gray-400 line-through text-sm sm:text-base font-bold mb-0.5">
                Total Nilai: Rp1.297.000
              </p>
              <div className="text-3xl sm:text-5xl font-black text-emerald-600 tracking-tight">
                Rp497.000
              </div>
              <div className="inline-block bg-emerald-50 border border-emerald-300 text-emerald-900 font-extrabold mt-2 text-xs py-1 px-4 rounded-full shadow-xs">
                Fase Promo Saat Ini • Sekali Bayar Seumur Hidup
              </div>
              <p className="text-xs text-gray-600 mt-2 font-medium">
                Investasi cerdas untuk memiliki sistem yang dapat digunakan kembali pada setiap siklus audit berikutnya.
              </p>
            </div>

            {/* Phased Price Increase Ladder (Tahapan Kenaikan Harga) */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 mb-6 border border-slate-800 text-left shadow-lg">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-amber-400" /> TAHAPAN FASE KENAIKAN HARGA
                </span>
                <span className="text-[10px] bg-red-600/90 text-white font-bold px-2.5 py-0.5 rounded-full">
                  Amankan Segera
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {/* 1. Fase Promo (Current) */}
                <div className="bg-emerald-950/90 border-2 border-emerald-500 rounded-xl p-3 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <div>
                      <div className="font-black text-white text-xs sm:text-sm flex items-center gap-1.5">
                        <span>Fase Promo (Aktif Sekarang)</span>
                      </div>
                      <div className="text-[11px] text-emerald-300 font-medium">Early-Bird Full Access 9 Modul + AI Suite</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm sm:text-base font-black text-emerald-400">Rp497.000</div>
                    <span className="text-[10px] text-emerald-200 bg-emerald-900 border border-emerald-700/60 px-1.5 py-0.2 rounded font-bold">
                      Harga Terbaik
                    </span>
                  </div>
                </div>

                {/* 2. Fase 1 */}
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-2.5 flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 font-bold text-[11px] flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <div className="font-bold text-slate-300 text-xs">Fase 1 (Tahap Berikutnya)</div>
                      <div className="text-[10.5px] text-slate-500">Penyesuaian kuota promo perdana</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-bold text-slate-300">Rp797.000</div>
                    <span className="text-[9.5px] text-amber-400/80 font-medium">Segera Berlaku</span>
                  </div>
                </div>

                {/* 3. Fase 2 */}
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-2.5 flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 font-bold text-[11px] flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <div className="font-bold text-slate-300 text-xs">Fase 2 (Pembaruan Materi)</div>
                      <div className="text-[10.5px] text-slate-500">Integrasi modul update lanjutan</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-bold text-slate-300">Rp997.000</div>
                    <span className="text-[9.5px] text-slate-500 font-medium">Tahap 2</span>
                  </div>
                </div>

                {/* 4. Fase Normal */}
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-2.5 flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 font-bold text-[11px] flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div>
                      <div className="font-bold text-slate-300 text-xs">Fase Harga Normal</div>
                      <div className="text-[10.5px] text-slate-500">Harga resmi reguler pasca promo</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-bold text-slate-300">Rp1.297.000</div>
                    <span className="text-[9.5px] text-slate-500 font-medium">Harga Normal</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-amber-300 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Sebentar lagi naik ke Rp797.000
                </span>
                <span className="text-emerald-400 font-black">Hemat Rp800.000 Hari Ini</span>
              </div>
            </div>

            {/* DIRECT CTA BUTTON */}
            <div className="space-y-3">
              {/* Primary CTA */}
              <a
                id="pricing-box-buy-cta"
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOfferBuyClick}
                className="block w-full bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-lg py-4.5 text-center transition-all shadow-2xl shadow-red-600/50 hover:shadow-red-600/60 border-2 border-red-400/50 animate-vibrate-pulse cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
                  <span className="tracking-wide">PESAN SEKARANG VIA KERANJANG — RP497.000</span>
                  <ArrowRight className="w-5 h-5 hidden sm:inline" />
                </span>
              </a>
            </div>

            {/* Subtext with WhatsApp Question Link */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-gray-500 font-medium mt-3.5">
              <span>✓ Sekali bayar seumur hidup</span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <a
                href={getWhatsAppUrl('offer_ask')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOfferAskClick}
                className="text-emerald-700 hover:text-emerald-800 font-bold underline inline-flex items-center gap-1 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Punya Pertanyaan? Tanya Tim via WA
              </a>
            </div>

            {/* Micro trust indicators */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-bold text-gray-500 pt-4 border-t border-gray-100">
              <span className="flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Transaksi Aman
              </span>
              <span className="flex items-center justify-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> Akses Cepat
              </span>
              <span className="flex items-center justify-center gap-1">
                <Globe className="w-3.5 h-3.5 text-blue-600" /> Semua Browser
              </span>
              <span className="flex items-center justify-center gap-1">
                <Infinity className="w-3.5 h-3.5 text-purple-600" /> Tanpa Biaya Bulanan
              </span>
            </div>

          </div>
        </div>

        {/* RISK REVERSAL INFO BOX */}
        <div className="mt-8 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-7 max-w-2xl mx-auto text-left shadow-xl">
          <div className="flex items-center gap-2 text-blue-400 font-extrabold text-sm sm:text-base mb-3">
            <Info className="w-4 h-4" />
            <span>Masih Ragu Sebelum Membeli? Ini yang Perlu Anda Ketahui:</span>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300 mb-5">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Bisa dibuka melalui web browser di HP, tablet, maupun laptop.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Tidak memerlukan instalasi software atau aplikasi khusus.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Worksheet Word & Excel 100% editable tanpa proteksi password.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Sekali bayar seumur hidup tanpa biaya langganan bulanan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Akses dashboard diberikan langsung setelah konfirmasi WhatsApp.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>AI berfungsi sebagai alat bantu—keputusan audit tetap diverifikasi auditor.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};
