import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const beforePoints = [
    'Mencari template dokumen acak di internet setiap kali penugasan audit datang',
    'Membuat daftar pertanyaan checklist dari lembar kosong satu per satu',
    'Copy-paste pertanyaan audit lama yang sering kali tidak relevan dengan proses terkini',
    'Bingung menentukan bukti objektif (objective evidence) spesifik apa yang harus diverifikasi',
    'Merangkai kalimat temuan dari nol dan cemas diperdebatkan oleh auditee',
    'Membuat analisis CAPA manual yang sering hanya menambal gejala di permukaan',
    'Format formulir berbeda-beda antar divisi sehingga rekaman audit tidak rapi',
    'Administrasi dokumen audit melelahkan dan menyita waktu berhari-hari'
  ];

  const afterPoints = [
    '7 Worksheet Word & Excel standar siap pakai dan 100% editable tanpa password',
    'AI memberikan starting point draf pertanyaan 5W+1H dan rekomendasi bukti objektif',
    'Pertanyaan audit relevan dengan alur proses spesifik (Purchasing, HRD, Produksi, QA, dll.)',
    'Panduan verifikasi bukti objektif jelas untuk setiap klausul persyaratan',
    'Struktur temuan PLOR (Problem, Location, Objective Evidence, Requirement) siap pakai',
    'Eksplorasi akar masalah 5-Why dan rencana perbaikan CAPA lebih terarah dan mendalam',
    'Format dokumen seragam, profesional, dan siap dipresentasikan ke Top Management',
    'Seluruh modul, worksheet, dan AI tools terpusat dalam satu dashboard browser'
  ];

  return (
    <section id="sebelum-sesudah" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold text-blue-900 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Transformasi Kerja Nyata
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-3 leading-tight">
            Dari Audit Manual yang Serba Mulai Ulang → Menjadi Workflow yang Dapat Digunakan Berulang
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-xl mx-auto">
            Perbandingan jelas antara proses audit konvensional tanpa sistem standar dengan alur kerja SMART Audit SYSTEM.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Column 1: SEBELUM */}
          <div className="bg-red-50/50 rounded-3xl p-6 sm:p-7 border border-red-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-red-200">
                <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-black text-xs">
                  ✕
                </span>
                <div>
                  <h3 className="text-base font-black text-red-950 uppercase tracking-wide">
                    SEBELUM
                  </h3>
                  <span className="text-xs text-red-800 font-medium">
                    Audit Manual & Serba Mulai dari Lembar Kosong
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {beforePoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-red-950/90 leading-relaxed font-medium">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: DENGAN SMART AUDIT SYSTEM */}
          <div className="bg-emerald-50/60 rounded-3xl p-6 sm:p-7 border-2 border-emerald-500/80 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-bold text-[10px] px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              SISTEM STANDAR
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-emerald-200">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs">
                  ✓
                </span>
                <div>
                  <h3 className="text-base font-black text-emerald-950 uppercase tracking-wide">
                    DENGAN SMART AUDIT SYSTEM
                  </h3>
                  <span className="text-xs text-emerald-800 font-medium">
                    AI-Assisted Workflow & Dokumen Terintegrasi
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {afterPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 leading-relaxed font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
