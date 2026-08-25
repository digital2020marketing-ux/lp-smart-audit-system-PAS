import React from 'react';
import { Bot, FileSpreadsheet, BookOpen, Layers, Headphones, Award, Sparkles, MessageSquareText } from 'lucide-react';
import { WORKSHEETS } from '../data/auditContent';
import img5AiTools from '../assets/images/5-AI-TOOLS-dan-SIMULASI.jpg';
import imgWorksheet from '../assets/images/worksheet-dan-formulir-AMI.jpg';
import img9Modul from '../assets/images/9-modul.jpg';
import imgPodcast from '../assets/images/podcast-audio-ulasan-mendalam.jpg';
import imgPrePostTest from '../assets/images/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg';

export const CompleteEcosystem: React.FC = () => {
  return (
    <section id="ekosistem" className="py-14 sm:py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 text-blue-800" />
            <span>ARSITEKTUR LENGKAP SISTEM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            AI-nya Powerful. Tapi Anda Tidak Dibiarkan Bekerja Sendiri.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl mx-auto">
            Sinergi 3 pilar yang menyatukan kecerdasan AI, kelengkapan lembar kerja operasional, dan materi pembelajaran komprehensif.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="space-y-10">

          {/* PILAR A: AI PRODUCTIVITY SUITE */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-widest text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full uppercase border border-emerald-800">
                    CORE VALUE (MESIN UTAMA)
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                    A. AI Productivity Suite & Co-Pilot
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
              Mesin asisten pintar yang mempercepat perumusan pertanyaan 5W+1H, merapikan catatan lapangan ke format PLOR, dan memandu analisis akar masalah 5-Why.
            </p>

            {/* Visual Image Banner for AI Suite */}
            <div className="mb-6 rounded-2xl overflow-hidden border border-slate-700/80 shadow-lg group bg-slate-950">
              <a 
                href="https://smartbook.id/kumpulan-gambar/5-AI-TOOLS-dan%20-SIMULASI.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src={img5AiTools} 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/5-AI-TOOLS-dan%20-SIMULASI.jpg";
                  }}
                  alt="5 AI Tools dan Simulasi SMART Audit System" 
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300" 
                  loading="lazy"
                />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-emerald-400 block mb-1">1. AI Checklist & 5W+1H Generator</span>
                <p className="text-slate-300 text-xs">Membuat draf checklist open-ended per divisi dan klausul seketika.</p>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-blue-400 block mb-1">2. AI PLOR Formulator</span>
                <p className="text-slate-300 text-xs">Merapikan catatan lapangan jadi format Problem, Location, Objective Evidence, Requirement.</p>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-amber-400 block mb-1">3. AI CAPA / 5-Why Assistant</span>
                <p className="text-slate-300 text-xs">Mengeksplorasi cabang akar masalah 5-Why serta rencana tindakan perbaikan.</p>
              </div>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold text-purple-400 block mb-1">4. ISO 19011 Co-Pilot Assistant</span>
                <p className="text-slate-300 text-xs">Rekan diskusi skenario lapangan, teknik sampling, dan audit review.</p>
              </div>
            </div>
          </div>

          {/* PILAR B: AUDITOR WORK SYSTEM (7 WORKSHEETS) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md">
            <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-widest text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase border border-blue-200">
                    IMPLEMENTATION TOOLS (ALAT KERJA OPERASIONAL)
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mt-1">
                    B. 7 Worksheet Word & Excel Editable
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-center mb-6">
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed font-normal">
                  Seluruh format lembar kerja siap pakai dalam format <strong>Word (.docx)</strong> dan <strong>Excel (.xlsx)</strong> tanpa proteksi password. Siap diisi logo instansi dan disesuaikan dengan kebutuhan proses Anda.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-semibold">
                  {WORKSHEETS.map((ws, i) => (
                    <div key={ws.id} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-900 font-black flex items-center justify-center shrink-0 text-[10px]">
                        0{i + 1}
                      </span>
                      <div>
                        <span className="font-bold text-gray-900 block leading-tight">{ws.name}</span>
                        <span className="text-[10px] text-gray-500 font-normal">{ws.format}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Preview Image */}
              <div className="w-full lg:w-5/12">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 p-2 shadow-lg group">
                  <a 
                    href="https://smartbook.id/kumpulan-gambar/worksheet-dan-formulir-AMI.jpg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src={imgWorksheet} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/worksheet-dan-formulir-AMI.jpg";
                      }}
                      alt="Worksheet dan Formulir AMI Word & Excel" 
                      className="w-full h-auto rounded-xl object-cover group-hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </a>
                  <div className="mt-2 px-2 py-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>100% Bebas Password</span>
                    <span className="text-emerald-400 font-bold">Word (.docx) & Excel (.xlsx)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILAR C: KNOWLEDGE SYSTEM */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md">
            <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-widest text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full uppercase border border-slate-200">
                    KNOWLEDGE SYSTEM (PANDUAN & PEMBELAJARAN)
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mt-1">
                    C. 9 Modul Pembelajaran + AI Asisten AMI + Podcast Audio + Pre/Post Test
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed font-normal">
              Panduan lengkap berstandar ISO 19011 & ISO 9001:2015 (plus outlook 2026) didampingi <strong className="text-blue-900 font-bold">AI Asisten AMI</strong> untuk menjelaskan isi setiap modul, mengupas maksud klausul, dan menjawab pertanyaan studi kasus audit Anda.
            </p>

            {/* Highlighted Banner: AI Asisten AMI */}
            <div className="mb-6 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-4 sm:p-5 border border-blue-500/30 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 shrink-0 shadow-inner">
                  <MessageSquareText className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-black text-white">AI Asisten AMI (Penjelas Modul & Konsultasi Klausul)</span>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9.5px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Interaktif
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tanya jawab langsung dengan asisten AI pintar yang siap menguraikan konsep sulit di 9 modul, memberikan contoh bukti objektif, serta panduan implementasi di lapangan.
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-1.5 text-[11px] font-bold text-blue-300 bg-blue-900/50 px-3 py-1.5 rounded-xl border border-blue-700/50">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Asisten Belajar 24/7</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {/* Card 1: 9 Modul Audit Lengkap */}
              <div className="rounded-2xl overflow-hidden border border-blue-200 bg-slate-950 text-white p-3 flex flex-col justify-between shadow-md group hover:border-blue-400 transition-all">
                <div>
                  <div className="rounded-xl overflow-hidden mb-3 border border-slate-800">
                    <img 
                      src={img9Modul} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/9-modul.jpg";
                      }}
                      alt="9 Modul Pembelajaran Audit Internal" 
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      9 MODUL UTAMA
                    </span>
                    <BookOpen className="w-4 h-4 text-blue-300" />
                  </div>
                  <h4 className="text-sm font-black text-white leading-snug mb-1">
                    9 E-Book Modul Panduan
                  </h4>
                  <p className="text-[11px] text-blue-200/80 leading-tight">
                    Prinsip ISO 19011, Klausul ISO 9001, Formulasi PLOR & Root Cause CAPA + Didampingi AI Asisten AMI.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-blue-300">
                  <span>Format: PDF Full Color</span>
                  <span className="font-bold text-white">Lengkap + AI Asisten</span>
                </div>
              </div>

              {/* Card 2: Podcast Audio Ulasan */}
              <div className="rounded-2xl overflow-hidden border border-emerald-200 bg-slate-950 text-white p-3 flex flex-col justify-between shadow-md group hover:border-emerald-400 transition-all">
                <div>
                  <div className="rounded-xl overflow-hidden mb-3 border border-slate-800">
                    <img 
                      src={imgPodcast} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/podcast-audio-ulasan-mendalam.jpg";
                      }}
                      alt="Podcast Audio Ulasan Mendalam" 
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      AUDIO PODCAST
                    </span>
                    <Headphones className="w-4 h-4 text-emerald-300" />
                  </div>
                  <h4 className="text-sm font-black text-white leading-snug mb-1">
                    Podcast Audio Ulasan
                  </h4>
                  <p className="text-[11px] text-emerald-200/80 leading-tight">
                    Dengarkan ulasan studi kasus saat santai atau dalam perjalanan.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-emerald-300">
                  <span>9 Seri Audio MP3</span>
                  <span className="font-bold text-white">180+ Menit</span>
                </div>
              </div>

              {/* Card 3: Evaluasi Pre-Test & Post-Test */}
              <div className="rounded-2xl overflow-hidden border border-amber-200 bg-slate-950 text-white p-3 flex flex-col justify-between shadow-md group hover:border-amber-400 transition-all">
                <div>
                  <div className="rounded-xl overflow-hidden mb-3 border border-slate-800">
                    <img 
                      src={imgPrePostTest} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg";
                      }}
                      alt="Evaluasi Pre Test dan Post Test" 
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="bg-amber-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      EVALUASI KOMPETENSI
                    </span>
                    <Award className="w-4 h-4 text-amber-300" />
                  </div>
                  <h4 className="text-sm font-black text-white leading-snug mb-1">
                    Simulasi Pre & Post Test
                  </h4>
                  <p className="text-[11px] text-amber-200/80 leading-tight">
                    Ukur pemahaman standar audit sebelum dan sesudah mempelajari materi.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-amber-300">
                  <span>Bank Soal + Kunci</span>
                  <span className="font-bold text-white">40+ Soal Evaluasi</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Ecosystem Box */}
        <div className="mt-8 bg-blue-950 text-white rounded-2xl p-6 text-center border border-blue-900 shadow-md">
          <p className="text-xs sm:text-sm text-blue-200 font-medium mb-1">
            Kesimpulan Ekosistem:
          </p>
          <p className="text-base sm:text-lg font-black text-white leading-relaxed">
            “Jadi Anda tidak hanya mendapat AI. Anda mendapatkan AI + knowledge + working documents + workflow dalam satu sistem terpadu.”
          </p>
        </div>

      </div>
    </section>
  );
};
