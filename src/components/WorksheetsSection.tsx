import React from 'react';
import { CheckCircle2, Presentation, Network, Image as ImageIcon, Sparkles } from 'lucide-react';
import imgWorksheet from '../assets/images/worksheet-dan-formulir-AMI.jpg';

export const WorksheetsSection: React.FC = () => {
  return (
    <section id="worksheet" className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
            Dokumen & Instrumen Siap Pakai
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Tidak Perlu Memulai Audit dari File Kosong
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            7 Lembar kerja (Worksheet) dan Formulir standar AMI berbasis ISO 9001 yang siap diedit dalam format Word dan Excel.
          </p>
        </div>

        {/* Hero Visual Mockup */}
        <div className="max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-slate-900">
          <img
            src={imgWorksheet}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/worksheet-dan-formulir-AMI.jpg";
            }}
            alt="Worksheet dan Formulir Audit Mutu Internal Standar ISO 9001"
            className="w-full h-auto object-cover block hover:scale-[1.01] transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* 3 Categories Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: PERSIAPAN */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <h3 className="font-extrabold text-blue-900 tracking-wider text-sm">
                  1. PERSIAPAN AUDIT
                </h3>
                <span className="text-[11px] bg-blue-50 text-blue-800 font-bold px-2 py-0.5 rounded">
                  3 Formulir
                </span>
              </div>
              <ul className="space-y-3.5 text-gray-700 text-sm font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Program Audit Tahunan</strong>
                    <p className="text-xs text-gray-500">Jadwal siklus audit 1 tahun seluruh proses.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Jadwal Audit (Audit Plan)</strong>
                    <p className="text-xs text-gray-500">Rincian jam, auditor, auditee, dan lingkup.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Surat Pemberitahuan Audit</strong>
                    <p className="text-xs text-gray-500">Format surat dinas resmi ke departemen.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
              Format: DOCX & XLSX
            </div>
          </div>

          {/* Card 2: PELAKSANAAN */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <h3 className="font-extrabold text-blue-900 tracking-wider text-sm">
                  2. PELAKSANAAN AUDIT
                </h3>
                <span className="text-[11px] bg-blue-50 text-blue-800 font-bold px-2 py-0.5 rounded">
                  2 Formulir
                </span>
              </div>
              <ul className="space-y-3.5 text-gray-700 text-sm font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Checklist Audit Mutu</strong>
                    <p className="text-xs text-gray-500">Panduan pertanyaan per klausul & proses.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Daftar Hadir Meeting</strong>
                    <p className="text-xs text-gray-500">Presensi Opening & Closing Meeting resmi.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
              Format: DOCX & XLSX
            </div>
          </div>

          {/* Card 3: TEMUAN & PELAPORAN */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <h3 className="font-extrabold text-blue-900 tracking-wider text-sm">
                  3. TEMUAN & LAPORAN
                </h3>
                <span className="text-[11px] bg-blue-50 text-blue-800 font-bold px-2 py-0.5 rounded">
                  2 Formulir
                </span>
              </div>
              <ul className="space-y-3.5 text-gray-700 text-sm font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Lembar PTKP (CAPA Form)</strong>
                    <p className="text-xs text-gray-500">Pencatatan temuan & verifikasi perbaikan.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Laporan Ringkasan Audit</strong>
                    <p className="text-xs text-gray-500">Format executive summary untuk Top Management.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
              Format: DOCX & XLSX
            </div>
          </div>

        </div>

        {/* Visual Learning Toolkit: Slide Presentasi, Mind Map & Infografis */}
        <div className="bg-white rounded-3xl border-2 border-blue-200 p-6 sm:p-8 shadow-md">
          <div className="flex items-center gap-2 text-xs font-black tracking-wider text-blue-900 uppercase mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Bonus Media Visual & Pembelajaran Praktis</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
            Lengkap dengan Slide Presentasi, Mind Map & Infografis Per Bab
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-6 max-w-3xl">
            Materi visual terstruktur untuk pelatihan tim, sosialisasi internal audit, serta rangkuman cepat klausul ISO 9001.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {/* 1. Slide Presentasi */}
            <div className="bg-blue-50/60 p-4 sm:p-5 rounded-2xl border border-blue-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center mb-3 shadow-sm">
                  <Presentation className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900 mb-1">
                  Slide Presentasi Pelatihan (PDF)
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Slide presentasi terstruktur yang dirancang khusus untuk materi pelatihan internal auditor, opening/closing meeting, dan sosialisasi standar ISO 9001.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-blue-200/60 text-[11px] font-bold text-blue-900">
                Format: PDF (Siap Digunakan untuk Pelatihan)
              </div>
            </div>

            {/* 2. Mind Map */}
            <div className="bg-amber-50/60 p-4 sm:p-5 rounded-2xl border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-3 shadow-sm">
                  <Network className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900 mb-1">
                  Mind Map Alur Audit (PDF)
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Pemetaan visual alur logika audit ISO 9001, relasi antar klausul, dan siklus Plan-Do-Check-Act (PDCA) agar konsep audit mudah dipahami sekilas.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-amber-200/60 text-[11px] font-bold text-amber-800">
                Format: PDF High-Resolution
              </div>
            </div>

            {/* 3. Infografis Per Bab */}
            <div className="bg-emerald-50/60 p-4 sm:p-5 rounded-2xl border border-emerald-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-sm">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900 mb-1">
                  Infografis Ringkasan Per Bab (PDF)
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Rangkuman visual poin kunci setiap bab materi dan klausul audit dalam format ringkas, praktis sebagai panduan cepat saat pelaksanaan audit.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-emerald-200/60 text-[11px] font-bold text-emerald-800">
                Format: PDF Infografis HD
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mt-8">
          Gunakan dokumen dan materi visual ini untuk mempercepat administrasi audit dan meningkatkan kompetensi tim secara efisien.
        </p>

      </div>
    </section>
  );
};

