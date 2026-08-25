import React from 'react';
import { AlertCircle, HelpCircle, FileSearch, Scale, RefreshCw, FileText, ArrowDown } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Checklist Belum Siap',
      desc: 'Audit tinggal beberapa hari tetapi Anda masih sibuk mencari format template atau copy-paste dokumen dari siklus audit tahun lalu yang belum tentu relevan.',
      icon: FileText,
      tag: 'Persiapan Terburu-buru'
    },
    {
      num: '02',
      title: 'Bingung Membuat Pertanyaan',
      desc: 'Pertanyaan audit terasa terlalu kaku, tidak mendalam, dan akhirnya hanya menghasilkan jawaban singkat “Ya” atau “Tidak” dari auditee.',
      icon: HelpCircle,
      tag: 'Kualitas Wawancara'
    },
    {
      num: '03',
      title: 'Tidak Yakin Bukti Apa yang Harus Dicari',
      desc: 'Sudah memiliki daftar pertanyaan, tetapi masih ragu objective evidence (rekaman, log, data pendukung) spesifik apa yang harus diverifikasi saat inspeksi.',
      icon: FileSearch,
      tag: 'Verifikasi Lapangan'
    },
    {
      num: '04',
      title: 'Ragu Menulis Temuan',
      desc: 'Khawatir kalimat temuan terlalu subjektif, salah menentukan pasal/klausul acuan, atau justru memicu perdebatan panjang yang tidak perlu dengan auditee.',
      icon: Scale,
      tag: 'Formulasi Temuan'
    },
    {
      num: '05',
      title: 'CAPA Berhenti di Permukaan',
      desc: 'Root cause belum tergali sampai akar masalah sesungguhnya, sehingga tindakan korektif hanya mengobati gejala dan potensi ketidaksesuaian berulang tetap tinggi.',
      icon: RefreshCw,
      tag: 'Tindak Lanjut CAPA'
    },
    {
      num: '06',
      title: 'Administrasi Menghabiskan Waktu',
      desc: 'Program audit, audit plan, checklist, formulir ketidaksesuaian, lembar CAPA, hingga laporan audit harus dirancang satu per satu dari file kosong.',
      icon: AlertCircle,
      tag: 'Beban Dokumen'
    }
  ];

  return (
    <section id="problem-callout" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Tantangan Nyata Auditor
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-4 leading-tight">
            Pernah Mengalami Salah Satu Ini Saat Menyiapkan Audit?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Tuntutan audit mutu internal sering kali terasa berat bukan karena auditnya rumit, melainkan karena proses persiapannya serba manual.
          </p>
        </div>

        {/* 6 Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num}
                className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-blue-900 bg-blue-100/70 px-2.5 py-0.5 rounded-lg">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-200/60 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Realization Closing Box */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 text-center shadow-lg border border-blue-900 max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-blue-200 font-medium mb-2">
            Masalahnya bukan Anda tidak mampu menjadi auditor yang kompeten.
          </p>
          <p className="text-base sm:text-xl font-black text-white leading-relaxed">
            “Masalahnya, terlalu banyak pekerjaan audit masih harus dimulai dari halaman kosong.”
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800 px-3 py-1.5 rounded-full">
            <span>Ada alur kerja yang jauh lebih praktis</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </section>
  );
};
