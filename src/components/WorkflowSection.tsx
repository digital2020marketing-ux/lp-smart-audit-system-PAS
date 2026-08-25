import React from 'react';
import { Calendar, MessageSquare, Search, FileEdit, CheckSquare, FileSpreadsheet, ShieldAlert, ArrowRight } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      step: '1',
      phase: 'PERSIAPAN',
      title: 'Persiapan & Perencanaan',
      desc: 'Gunakan modul pembelajaran, worksheet program tahunan & audit plan, serta AI Checklist untuk memetakan ruang lingkup divisi yang akan diaudit.',
      icon: Calendar,
      tools: 'Modul 01-04 + Worksheet 01-03 + AI Checklist'
    },
    {
      step: '2',
      phase: 'PERTANYAAN',
      title: 'Starting Point Pertanyaan 5W+1H',
      desc: 'Dapatkan draf pertanyaan wawancara open-ended dan daftar rekomendasi bukti objektif yang relevan dengan klausul spesifik proses.',
      icon: MessageSquare,
      tools: 'AI Checklist & 5W+1H Generator'
    },
    {
      step: '3',
      phase: 'PELAKSANAAN',
      title: 'Pelaksanaan Lapangan',
      desc: 'Gunakan daftar pertanyaan dan panduan sampling sebagai pedoman wawancara, observasi area kerja, dan verifikasi dokumen dengan percaya diri.',
      icon: Search,
      tools: 'Worksheet 04 (Checklist Excel/Word)'
    },
    {
      step: '4',
      phase: 'FORMULASI',
      title: 'Formulasi Temuan PLOR',
      desc: 'Masukkan catatan kasar lapangan Anda, lalu biarkan AI PLOR merapikannya menjadi struktur temuan objektif (Problem, Location, Objective Evidence, Requirement).',
      icon: FileEdit,
      tools: 'AI PLOR Formulator + Worksheet 06'
    },
    {
      step: '5',
      phase: 'TINDAK LANJUT',
      title: 'Analisis Akar Masalah & CAPA',
      desc: 'Gunakan AI CAPA untuk mengeksplorasi cabang 5-Why, menetapkan tindakan koreksi, tindakan korektif, penanggung jawab (PIC), dan jadwal pemantauan.',
      icon: CheckSquare,
      tools: 'AI CAPA / 5-Why Assistant'
    },
    {
      step: '6',
      phase: 'PELAPORAN',
      title: 'Pelaporan & Penutupan',
      desc: 'Gunakan template laporan ringkasan audit untuk merangkum hasil keseluruhan bagi Top Management dan Rapat Tinjauan Manajemen (RTM).',
      icon: FileSpreadsheet,
      tools: 'Worksheet 07 (Audit Summary Report Word)'
    }
  ];

  return (
    <section id="cara-kerja" className="py-14 sm:py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold text-blue-900 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Mekanisme & Alur Kerja
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-3 leading-tight">
            Kenalkan SMART Audit SYSTEM
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 font-bold max-w-2xl mx-auto">
            AI-Assisted Audit Workflow yang membantu pekerjaan auditor dari persiapan sampai follow-up.
          </p>
        </div>

        {/* 6-Step Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/90 shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-900 text-white flex items-center justify-center font-black text-xs">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {item.phase}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                  <span className="text-emerald-600 font-bold">Tools:</span>
                  <span className="truncate">{item.tools}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Boundary Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-amber-900 text-xs sm:text-sm max-w-3xl mx-auto shadow-xs">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium">
            <strong className="font-bold text-amber-950">Catatan Profesional:</strong> AI membantu mempercepat proses berpikir dan dokumentasi draf. Verifikasi bukti di lapangan serta keputusan audit final tetap sepenuhnya menjadi kewenangan auditor.
          </p>
        </div>

      </div>
    </section>
  );
};
