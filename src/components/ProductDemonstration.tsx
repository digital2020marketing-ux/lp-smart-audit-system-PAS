import React, { useState } from 'react';
import { Play, Sparkles, Check, ArrowRight, MessageSquare, FileText, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';

export const ProductDemonstration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'demo1' | 'demo2' | 'demo3'>('demo1');

  return (
    <section id="demonstrasi" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            <span>SHOW, DON'T TELL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-3">
            Lihat Bagaimana SMART Audit SYSTEM Membantu Pekerjaan Auditor
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            Bukan sekadar klaim. Lihat bagaimana sistem memproses input nyata menjadi draf kerja audit yang presisi.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('demo1')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'demo1'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>DEMO 1: Membuat Pertanyaan</span>
          </button>

          <button
            onClick={() => setActiveTab('demo2')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'demo2'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>DEMO 2: Merumuskan Temuan (PLOR)</span>
          </button>

          <button
            onClick={() => setActiveTab('demo3')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'demo3'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>DEMO 3: Eksplorasi 5-Why & CAPA</span>
          </button>
        </div>

        {/* Demo Content Display */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl">

          {/* DEMO 1: Pertanyaan Audit */}
          {activeTab === 'demo1' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  SKENARIO KASUS #1
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Menyiapkan Pertanyaan Wawancara & Bukti Objektif Departemen Purchasing
                </h3>
              </div>

              {/* Input Box */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>Input Sederhana Auditor:</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs sm:text-sm text-emerald-400">
                  “Audit purchasing — kontrol dan evaluasi supplier (Klausul 8.4)”
                </div>
              </div>

              {/* Output Box */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-5 border border-emerald-900/50 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase mb-3">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Output AI Generator (Starting Point Siap Pakai):</span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                  <div>
                    <span className="font-bold text-white block mb-1">📌 Pertanyaan Open-Ended (5W+1H):</span>
                    <ul className="space-y-1.5 pl-2 text-slate-300">
                      <li>• <em>“Bagaimana kriteria yang ditetapkan organisasi saat menyeleksi supplier baru sebelum masuk Approved Vendor List?”</em></li>
                      <li>• <em>“Kapan terakhir kali evaluasi kinerja berkala dilakukan terhadap pemasok bahan baku utama?”</em></li>
                      <li>• <em>“Apa tindakan yang diambil jika supplier mendapat skor mutu di bawah standar batas kelulusan?”</em></li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="font-bold text-white block mb-1">🔍 Bukti Objektif yang Perlu Diverifikasi di Lapangan:</span>
                    <ul className="space-y-1 pl-2 text-slate-300">
                      <li>✓ Daftar Rekanan Terpilih (Approved Vendor List) edisi termutakhir.</li>
                      <li>✓ Formulir Rekaman Evaluasi Kinerja Supplier tahunan/semesteran.</li>
                      <li>✓ Sample PO pembelian acak vs bukti verifikasi kesesuaian spesifikasi barang.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DEMO 2: Formulasi Temuan PLOR */}
          {activeTab === 'demo2' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  SKENARIO KASUS #2
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Mengubah Catatan Kasar Menjadi Struktur Temuan PLOR Standar Internasional
                </h3>
              </div>

              {/* BEFORE */}
              <div className="bg-red-950/40 rounded-2xl p-4 border border-red-900/60">
                <div className="flex items-center gap-2 text-xs font-bold text-red-300 uppercase mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span>BEFORE — Catatan Kasar Lapangan (Raw Note):</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-red-900/40 font-mono text-xs sm:text-sm text-red-200">
                  “Alat ukur caliper di meja inspeksi line 2 stiker kalibrasinya sudah lewat/expired.”
                </div>
              </div>

              {/* AFTER */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-5 border border-blue-800/60 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase mb-3">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>AFTER — Formulasi AI PLOR (Jelas, Objektif, Tidak Menimbulkan Debat):</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-blue-400 font-bold text-[11px] block uppercase">Problem (Pernyataan Masalah):</span>
                    <p className="text-slate-200 mt-1">Penggunaan peralatan pemantauan dan pengukuran yang masa validitas kalibrasinya telah terlampaui.</p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-blue-400 font-bold text-[11px] block uppercase">Location (Lokasi Temuan):</span>
                    <p className="text-slate-200 mt-1">Area Produksi Line 2 — Meja QC Final Dimension Inspection.</p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-blue-400 font-bold text-[11px] block uppercase">Objective Evidence (Bukti Objektif):</span>
                    <p className="text-slate-200 mt-1">Digital Caliper ID QC-CAL-09 dengan label kalibrasi valid s/d 15 Jan 2026 sedang aktif digunakan pada 20 Feb 2026.</p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-blue-400 font-bold text-[11px] block uppercase">Requirement (Persyaratan Acuan):</span>
                    <p className="text-slate-200 mt-1">ISO 9001:2015 Klausul 7.1.5.2 — Mampu Telusur Pengukuran (Measurement Traceability).</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DEMO 3: 5-Why & CAPA */}
          {activeTab === 'demo3' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  SKENARIO KASUS #3
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Eksplorasi Pohon Akar Masalah 5-Why dan Rencana Tindakan Korektif (CAPA)
                </h3>
              </div>

              {/* 5-Why Exploration */}
              <div className="bg-slate-900/90 rounded-2xl p-4 sm:p-5 border border-slate-800">
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-3">
                  🌳 Eksplorasi 5-Why Root Cause Analysis:
                </span>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">Why 1:</span>
                    <span>Mengapa alat expired tetap dipakai? Operator tidak memeriksa tanggal stiker sebelum mulai kerja.</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">Why 2:</span>
                    <span>Mengapa tidak memeriksa stiker? Tidak ada lembar checklist pre-flight harian di meja inspeksi.</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">Why 3:</span>
                    <span>Mengapa belum ada checklist? Instruksi Kerja QC belum diperbarui sejak penambahan instrumen baru.</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">Why 4:</span>
                    <span>Mengapa belum diperbarui? Belum ada sistem tagging warna berkala untuk memudahkan visual check.</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">Why 5:</span>
                    <span><strong>Akar Masalah (Root Cause):</strong> Manajemen kalibrasi belum terintegrasi ke dalam sistem kontrol visual shift harian.</span>
                  </div>
                </div>
              </div>

              {/* CAPA Plan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                  <span className="text-emerald-400 font-bold text-xs block uppercase mb-1">Correction (Tindakan Segera):</span>
                  <p className="text-slate-300">Karantina alat QC-CAL-09, kirim ke lab kalibrasi, dan lakukan verifikasi ulang sampel produk hari ini.</p>
                </div>
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                  <span className="text-emerald-400 font-bold text-xs block uppercase mb-1">Corrective Action (Pencegahan Ulang):</span>
                  <p className="text-slate-300">Implementasikan logbook harian verifikasi alat ukur dan stempel tagging warna stiker kalibrasi per kuartal.</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
