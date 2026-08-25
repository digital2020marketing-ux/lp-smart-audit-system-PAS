import React from 'react';
import { CheckCircle2, Clock, FileSearch, Scale, HelpCircle, FileSpreadsheet } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Lebih cepat mendapatkan starting point pertanyaan audit',
      description: 'Tidak perlu menatap checklist kosong sambil berpikir harus bertanya apa.',
      badge: 'Efisiensi Persiapan'
    },
    {
      icon: FileSearch,
      title: 'Lebih jelas menentukan bukti objektif yang perlu diverifikasi',
      description: 'Gunakan rekomendasi evidence sebagai titik awal observasi dan pemeriksaan lapangan.',
      badge: 'Akurasi Bukti'
    },
    {
      icon: Scale,
      title: 'Lebih mudah merapikan catatan menjadi struktur temuan',
      description: 'Catatan lapangan dapat dibantu disusun ke format PLOR: Problem, Location, Objective Evidence, Requirement.',
      badge: 'Format PLOR Baku'
    },
    {
      icon: HelpCircle,
      title: 'Analisis CAPA menjadi lebih terarah',
      description: 'Eksplorasi 5-Why membantu Anda melihat kemungkinan akar penyebab sebelum menetapkan tindakan korektif.',
      badge: 'Akar Masalah Nyata'
    },
    {
      icon: FileSpreadsheet,
      title: 'Administrasi audit lebih konsisten dari satu siklus ke siklus berikutnya',
      description: 'Program audit, audit plan, checklist, PTKP/CAPA hingga laporan ringkasan tersedia dalam format kerja yang dapat digunakan kembali.',
      badge: 'Standar Kerja Rapi'
    }
  ];

  return (
    <section id="manfaat" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* (6) HEADLINE */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            TRANSFORMASI CARA KERJA AUDIT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3.5 mb-4 leading-tight">
            Yang Akan Anda Dapatkan Saat Pekerjaan Audit Tidak Lagi Dimulai dari Nol
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Ketika memiliki fondasi dan starting point terstruktur, energi Anda beralih pada esensi mutu dan interaksi bernilai tinggi.
          </p>
        </div>

        {/* (7) 5 FUTURE BENEFITS LIST / CARDS */}
        <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-slate-100/80 border border-slate-200/90 hover:border-blue-300 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex items-start gap-4 shadow-xs"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-extrabold text-gray-900 leading-snug">
                      ✓ {b.title}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-bold text-blue-900 bg-blue-100/80 px-2.5 py-0.5 rounded-full">
                      {b.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future State Payoff Callout */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/80 rounded-2xl p-6 sm:p-8 text-center text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-blue-100 max-w-2xl mx-auto">
            &ldquo;Jadi ketika jadwal audit datang, Anda tidak lagi sibuk memikirkan format dan merangkai pertanyaan dari nol—Anda bisa lebih fokus pada <span className="text-emerald-400 font-extrabold underline decoration-emerald-500/50 underline-offset-4">wawancara, observasi, bukti objektif, dan judgement audit</span>.&rdquo;
          </p>
          <div className="mt-3 text-xs sm:text-sm text-slate-400 font-medium">
            Fokus Anda kembali ke esensi utama seorang auditor: verifikasi kepatuhan dan perbaikan mutu berkelanjutan.
          </div>
        </div>

      </div>
    </section>
  );
};
