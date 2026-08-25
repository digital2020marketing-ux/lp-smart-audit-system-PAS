import React from 'react';
import { CheckCircle2, UserCheck, ShieldCheck, FileCheck, Layers, Bot } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const points = [
    {
      title: 'Baru ditunjuk menjadi Auditor Internal ISO 9001',
      desc: 'Membutuhkan panduan terstruktur agar percaya diri memimpin opening meeting, mewawancarai auditee, dan mengumpulkan bukti.',
      icon: UserCheck
    },
    {
      title: 'Bekerja di bidang QA, QC, QMS, ISO, HSE, atau Document Control',
      desc: 'Ingin meng-upgrade kompetensi audit internal organisasi dengan standar terbaru dan teknik terkini.',
      icon: ShieldCheck
    },
    {
      title: 'Ingin merapikan tata kelola dan administrasi audit',
      desc: 'Memiliki arsip checklist, formulir PTKP, dan laporan ringkasan yang terstandar rapi untuk audit eksternal / sertifikasi.',
      icon: FileCheck
    },
    {
      title: 'Tidak ingin terus-menerus membuat checklist dan laporan dari nol',
      desc: 'Menghemat waktu berjam-jam dengan template worksheet siap pakai yang tinggal disesuaikan dengan kebutuhan.',
      icon: Layers
    },
    {
      title: 'Ingin memanfaatkan kecerdasan buatan (AI) sebagai asisten kerja audit',
      desc: 'Meningkatkan produktivitas kerja audit dengan bantuan prompt AI spesialis klausul ISO 9001.',
      icon: Bot
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
            Target Pengguna
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            SMART Audit SYSTEM Cocok untuk Anda yang:
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Dirancang praktis untuk profesional mutu yang mengutamakan ketepatan, kecepatan, dan akurasi.
          </p>
        </div>

        {/* Audience List Cards */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50/60 transition-colors border border-transparent hover:border-blue-100"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0 mt-0.5 border border-green-200">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
