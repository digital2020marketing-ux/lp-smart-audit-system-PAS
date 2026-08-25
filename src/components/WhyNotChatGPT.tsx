import React from 'react';
import { HelpCircle, Check, X, Sparkles, Workflow, Terminal, FileSpreadsheet } from 'lucide-react';

export const WhyNotChatGPT: React.FC = () => {
  return (
    <section id="kenapa-bukan-chatgpt" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            <span>PERTANYAAN LOGIS & JUJUR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            “Kalau AI, Kenapa Tidak Pakai ChatGPT Biasa Saja?”
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl mx-auto">
            Bisa saja menggunakan AI umum (general-purpose AI). Namun mari kita lihat apa yang sebenarnya terjadi saat Anda mencoba menggunakannya untuk pekerjaan audit:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Kolom 1: ChatGPT Biasa */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                <span className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                  🤖
                </span>
                <div>
                  <h3 className="text-base font-black text-slate-800">
                    ChatGPT / Chatbot Umum
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    AI Serbaguna Tanpa Konteks Khusus Audit
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-normal">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Harus merancang prompt panjang dan rumit sendiri setiap kali ingin bertanya.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Struktur output sering kali terlalu umum dan tidak mengikuti format standar ISO 19011/PLOR.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Tidak terhubung dengan format worksheet Word & Excel operasional instansi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Tidak memiliki modul panduan dan alur tahapan audit dari persiapan sampai RTM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Harus copy-paste bolak-balik antar jendela aplikasi yang memakan waktu.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Kolom 2: SMART Audit SYSTEM */}
          <div className="bg-blue-50/70 rounded-3xl p-6 sm:p-7 border-2 border-blue-500/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-200">
                <span className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs">
                  ⚡
                </span>
                <div>
                  <h3 className="text-base font-black text-blue-950">
                    SMART Audit SYSTEM
                  </h3>
                  <span className="text-xs text-blue-800 font-medium">
                    Specialized AI + Integrated Audit Workflow
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-blue-950 font-semibold">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Prompting:</strong> Cukup masukkan departemen, proses, atau catatan lapangan ringkas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Struktur Audit Terstandar:</strong> Format 5W+1H, PLOR, dan 5-Why yang langsung relevan dengan ISO 9001.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>7 Worksheet Siap Pakai:</strong> Dokumen Word & Excel editable tanpa proteksi password.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Knowledge Lengkap:</strong> 9 Modul pembelajaran, podcast audio, slide, dan mind map audit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Satu Dashboard Terpadu:</strong> Akses instan di browser tanpa ribet instalasi.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Summary Value Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 text-center border border-slate-800 shadow-md">
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            Nilai pembeda SMART Audit SYSTEM bukan pada kecerdasan buatan semata, melainkan pada:
          </p>
          <p className="text-sm sm:text-base font-black text-emerald-400 mt-1">
            Spesialisasi Audit + Kemudahan Pakai (No Prompting) + Ekosistem Worksheet & Modul Terpadu.
          </p>
        </div>

      </div>
    </section>
  );
};
