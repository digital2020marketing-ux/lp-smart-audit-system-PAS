import React from 'react';
import { Bot, CheckCircle2, Sparkles, ShoppingBag, Terminal, Shield, FileText, GitPullRequest, MessageSquareCode } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';
import imgCekList from '../assets/images/Cek-List-Audit-dan-Simulasi.jpg';
import imgPlor from '../assets/images/Generator-Laporan-Temuan-PLOR.jpg';
import imgCapa from '../assets/images/CAPA.jpg';
import imgIso19011 from '../assets/images/ISO-19011.jpg';

interface AiToolsSuiteProps {
  onCheckoutClick?: () => void;
}

export const AiToolsSuite: React.FC<AiToolsSuiteProps> = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('ai_suite_buy', 'AI Suite - Beli SMART Audit System Rp497.000');
  };

  return (
    <section id="ai-suite" className="py-14 sm:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Bot className="w-4 h-4 text-blue-400" />
            <span>CORE VALUE: AI Productivity Suite</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Bukan Sekadar Template. Anda Mendapatkan AI Co-Pilot untuk Pekerjaan Audit.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            AI yang telah disesuaikan dengan konteks ISO 9001 & ISO 19011 untuk mendampingi alur berpikir auditor internal dari awal hingga selesai.
          </p>
        </div>

        {/* 4 AI Tools Showcase */}
        <div className="space-y-10 sm:space-y-14">

          {/* AI TOOL #1: AI Checklist & 5W+1H Generator */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 border border-emerald-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  <span>AI TOOL #1</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  AI Checklist & 5W+1H Generator
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  Menghilangkan rasa bingung saat menentukan apa yang perlu ditanyakan dan bukti apa yang harus diperiksa pada setiap divisi.
                </p>

                <div className="space-y-2.5 bg-slate-950/80 rounded-2xl p-4 border border-slate-800 text-xs sm:text-sm mb-4">
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider block mb-0.5">Input yang Anda Masukkan:</span>
                    <p className="text-slate-200">Nama departemen, alur proses, klausul acuan, atau ruang lingkup audit.</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-emerald-400 font-bold uppercase text-[10px] tracking-wider block mb-0.5">Output yang Dihasilkan AI:</span>
                    <p className="text-slate-200">Draf checklist pertanyaan terbuka (open-ended), sudut pandang 5W+1H, nomor klausul relevan, dan rekomendasi bukti objektif.</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Benefit: Tidak lagi blank saat menentukan apa yang perlu ditanyakan.</span>
                </div>
              </div>

              {/* Real UI Screenshot Preview */}
              <div className="w-full lg:w-5/12">
                <div className="rounded-2xl overflow-hidden border border-emerald-500/40 bg-slate-950 p-2 shadow-2xl group">
                  <a 
                    href="https://smartbook.id/kumpulan-gambar/Cek-List-Audit-dan-Simulasi.jpg" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block"
                  >
                    <img 
                      src={imgCekList} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/Cek-List-Audit-dan-Simulasi.jpg";
                      }}
                      alt="Cek List Audit dan Simulasi" 
                      className="w-full h-auto rounded-xl object-cover group-hover:scale-[1.01] transition-transform duration-200"
                      loading="lazy"
                    />
                  </a>
                  <div className="mt-2 px-2 py-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span className="text-emerald-400 font-bold">AI_CHECKLIST_ENGINE</span>
                    <span className="text-slate-400">ISO 9001:2015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI TOOL #2: AI PLOR Formulator */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-blue-950 text-blue-300 border border-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  <span>AI TOOL #2</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  AI PLOR Formulator
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  Membantu merapikan catatan lapangan yang berantakan menjadi kalimat temuan ketidaksesuaian yang objektif, jelas, dan berstandar internasional.
                </p>

                <div className="space-y-2.5 bg-slate-950/80 rounded-2xl p-4 border border-slate-800 text-xs sm:text-sm mb-4">
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider block mb-0.5">Input yang Anda Masukkan:</span>
                    <p className="text-slate-200">Catatan kasar hasil temuan atau fakta temuan di lapangan.</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-blue-400 font-bold uppercase text-[10px] tracking-wider block mb-0.5">Output yang Dihasilkan AI:</span>
                    <p className="text-slate-200">Struktur temuan lengkap: <strong>Problem</strong> (Masalah), <strong>Location</strong> (Lokasi), <strong>Objective Evidence</strong> (Bukti Objektif), dan <strong>Requirement</strong> (Persyaratan Klausul).</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 bg-blue-950/60 px-3 py-1.5 rounded-xl border border-blue-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Benefit: Membantu menyusun struktur temuan tanpa takut diperdebatkan.</span>
                </div>
              </div>

              {/* Real UI Screenshot Preview */}
              <div className="w-full lg:w-5/12">
                <div className="rounded-2xl overflow-hidden border border-blue-500/40 bg-slate-950 p-2 shadow-2xl group">
                  <a 
                    href="https://smartbook.id/kumpulan-gambar/Generator-Laporan-Temuan-PLOR.jpg" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block"
                  >
                    <img 
                      src={imgPlor} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/Generator-Laporan-Temuan-PLOR.jpg";
                      }}
                      alt="Generator Laporan Temuan PLOR" 
                      className="w-full h-auto rounded-xl object-cover group-hover:scale-[1.01] transition-transform duration-200"
                      loading="lazy"
                    />
                  </a>
                  <div className="mt-2 px-2 py-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span className="text-blue-400 font-bold">AI_PLOR_FORMULATOR</span>
                    <span className="text-slate-400">ISO 19011</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI TOOL #3: AI CAPA / 5-Why Assistant */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-amber-950 text-amber-300 border border-amber-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  <span>AI TOOL #3</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  AI CAPA / 5-Why Assistant
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  Mengeksplorasi akar penyebab masalah secara mendalam agar tindakan korektif tidak hanya menambal gejala di permukaan.
                </p>

                <div className="space-y-2.5 bg-slate-950/80 rounded-2xl p-4 border border-slate-800 text-xs sm:text-sm mb-4">
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider block mb-0.5">Input yang Anda Masukkan:</span>
                    <p className="text-slate-200">Uraian masalah temuan atau ketidaksesuaian yang terjadi.</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-amber-400 font-bold uppercase text-[10px] tracking-wider block mb-0.5">Output yang Dihasilkan AI:</span>
                    <p className="text-slate-200">Eksplorasi pohon analisa <strong>5-Why</strong>, saran <strong>Correction</strong> (Koreksi langsung), <strong>Corrective Action</strong> (Tindakan Pencegahan Ulang), usulan <strong>PIC</strong>, dan jadwal <strong>Monitoring</strong>.</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-950/60 px-3 py-1.5 rounded-xl border border-amber-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Benefit: Membantu CAPA bergerak dari memperbaiki gejala menuju akar masalah.</span>
                </div>
              </div>

              {/* Real UI Screenshot Preview */}
              <div className="w-full lg:w-5/12">
                <div className="rounded-2xl overflow-hidden border border-amber-500/40 bg-slate-950 p-2 shadow-2xl group">
                  <a 
                    href="https://smartbook.id/kumpulan-gambar/CAPA%20.jpg" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block"
                  >
                    <img 
                      src={imgCapa} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/CAPA%20.jpg";
                      }}
                      alt="CAPA 5-Why Analysis Assistant" 
                      className="w-full h-auto rounded-xl object-cover group-hover:scale-[1.01] transition-transform duration-200"
                      loading="lazy"
                    />
                  </a>
                  <div className="mt-2 px-2 py-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span className="text-amber-400 font-bold">5_WHY_ROOT_CAUSE_ENGINE</span>
                    <span className="text-slate-400">CAPA Flow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI CO-PILOT: ISO 19011 Audit Co-Pilot Assistant */}
          <div className="bg-gradient-to-b from-slate-900 to-blue-950 border border-blue-800/80 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-purple-950 text-purple-300 border border-purple-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>AI CO-PILOT ASISTEN</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  ISO 19011 Audit Co-Pilot Assistant
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  Asisten diskusi interaktif untuk memecahkan keraguan saat menghadapi skenario audit lapangan, sampling data, maupun interpretasi klausul ISO 19011.
                </p>

                <div className="space-y-2.5 bg-slate-950/80 rounded-2xl p-4 border border-blue-900/60 text-xs sm:text-sm mb-4">
                  <span className="text-purple-400 font-bold uppercase text-[10px] tracking-wider block mb-0.5">Topik Diskusi & Pendampingan:</span>
                  <ul className="space-y-1 text-slate-200">
                    <li>• Persiapan & strategi pembukaan audit (opening meeting)</li>
                    <li>• Cara menangani auditee yang defensif atau menolak temuan</li>
                    <li>• Teknik sampling bukti objektif berbasis risiko proses</li>
                    <li>• Evaluasi derajat temuan (Major, Minor, atau Saran Perbaikan/OFI)</li>
                  </ul>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 bg-purple-950/60 px-3 py-1.5 rounded-xl border border-purple-800">
                  <Shield className="w-3.5 h-3.5 text-purple-400" />
                  <span>Co-Pilot pendamping diskusi — keputusan final tetap di tangan Anda sebagai auditor.</span>
                </div>
              </div>

              {/* Real UI Screenshot Preview */}
              <div className="w-full lg:w-5/12">
                <div className="rounded-2xl overflow-hidden border border-purple-500/40 bg-slate-950 p-2 shadow-2xl group">
                  <a 
                    href="https://smartbook.id/kumpulan-gambar/ISO-19011.jpg" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block"
                  >
                    <img 
                      src={imgIso19011} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://smartbook.id/kumpulan-gambar/ISO-19011.jpg";
                      }}
                      alt="ISO 19011 Co-Pilot Assistant" 
                      className="w-full h-auto rounded-xl object-cover group-hover:scale-[1.01] transition-transform duration-200"
                      loading="lazy"
                    />
                  </a>
                  <div className="mt-2 px-2 py-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span className="text-purple-400 font-bold">ISO_19011_COPILOT</span>
                    <span className="text-slate-400">Direct Chat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA #2: After AI Suite */}
        <div className="mt-12 text-center max-w-md mx-auto">
          <a
            id="ai-suite-buy-cta"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 shrink-0" />
            <span>DAPATKAN SMART AUDIT SYSTEM — Rp497.000</span>
          </a>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan
          </p>
        </div>

      </div>
    </section>
  );
};
