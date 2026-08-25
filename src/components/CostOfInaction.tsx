import React from 'react';
import { RotateCcw, AlertTriangle, ArrowRight, ShieldAlert, Check } from 'lucide-react';

export const CostOfInaction: React.FC = () => {
  const repeatingTasks = [
    'Mencari dan mengunduh template acak dari internet lagi',
    'Menyusun pertanyaan audit 5W+1H dari lembar kosong lagi',
    'Copy-paste dokumen audit tahun lalu yang belum tentu relevan',
    'Merapikan format form checklist Word/Excel satu per satu',
    'Menyusun kalimat temuan ketidaksesuaian dari nol',
    'Mengejar auditee untuk analisis akar masalah & CAPA tanpa panduan terstruktur',
    'Merangkum laporan audit mutu ke manajemen secara manual dan melelahkan'
  ];

  return (
    <section id="cost-of-inaction" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Siklus yang Terus Berulang</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            Kalau Cara Kerjanya Tetap Sama, Siklus Audit Berikutnya Akan Mengulang Pekerjaan yang Sama
          </h2>
        </div>

        {/* Content Box */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800 text-red-400 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">
                Lingkaran Pengulangan Tanpa Sistem Kerja Standar:
              </h3>
              <p className="text-xs text-slate-400">
                Setiap kali penugasan audit internal datang, proses yang sama harus dimulai ulang dari awal:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {repeatingTasks.map((task, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-2.5 bg-slate-900/90 border border-slate-800/80 rounded-xl p-3 text-xs sm:text-sm text-slate-300"
              >
                <span className="w-5 h-5 rounded-full bg-red-950 text-red-400 border border-red-800 flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">
                  ✕
                </span>
                <span className="font-medium">{task}</span>
              </div>
            ))}
          </div>

          {/* Perspective Callout */}
          <div className="bg-gradient-to-r from-blue-950/90 to-slate-900 border border-blue-800/60 rounded-2xl p-5 sm:p-6 text-center">
            <p className="text-xs sm:text-sm text-blue-200 font-medium mb-1">
              Audit berikutnya akan tetap datang sesuai jadwal kalender mutu perusahaan Anda.
            </p>
            <p className="text-sm sm:text-lg font-black text-white leading-relaxed">
              Pertanyaannya: apakah Anda ingin kembali menghabiskan waktu membuat semuanya satu per satu, atau mulai memiliki sistem yang dapat digunakan kembali?
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
