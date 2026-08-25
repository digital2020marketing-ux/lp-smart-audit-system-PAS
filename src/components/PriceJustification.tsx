import React from 'react';
import { DollarSign, Clock, Users, ArrowRight, ShieldCheck } from 'lucide-react';

export const PriceJustification: React.FC = () => {
  return (
    <section id="justifikasi-harga" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <DollarSign className="w-3.5 h-3.5 text-emerald-700" />
            <span>PERBANDINGAN LOGIKA NILAI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            Mengapa Investasi Ini Sangat Masuk Akal?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-xl mx-auto">
            Mari bandingkan biaya alternatif yang biasa dikeluarkan dalam menyiapkan audit mutu internal:
          </p>
        </div>

        {/* 3 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Card 1: Training Konvensional */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full uppercase">
                Opsi 1: Pelatihan / Workshop
              </span>
              <h3 className="text-base font-bold text-gray-900 mt-2 mb-1">
                Rp2.000.000 – Rp5.000.000+
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Biaya kelas pelatihan public training. Selesai seminar 2 hari, Anda tetap harus pulang ke kantor dan merancang dokumen serta pertanyaan dari lembar kosong sendiri.
              </p>
            </div>
          </div>

          {/* Card 2: Konsultan Eksternal */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full uppercase">
                Opsi 2: Jasa Konsultan Mutu
              </span>
              <h3 className="text-base font-bold text-gray-900 mt-2 mb-1">
                Rp15.000.000 – Rp30.000.000+
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Menyewa konsultan untuk mendampingi audit internal. Biayanya sangat mahal dan setiap siklus audit baru Anda tetap bergantung pada pihak luar.
              </p>
            </div>
          </div>

          {/* Card 3: Waktu Kerja Terbuang */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full uppercase">
                Opsi 3: Jam Kerja Manual & Lembur
              </span>
              <h3 className="text-base font-bold text-gray-900 mt-2 mb-1">
                Puluhan Jam Setiap Siklus
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Waktu kerja produktif Anda habis berhari-hari hanya untuk mencari template acak, merapikan form Word/Excel, dan mengetik ulang dokumen yang sama.
              </p>
            </div>
          </div>

        </div>

        {/* Conclusion Box */}
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 text-center border border-emerald-800 shadow-xl max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PILIHAN CERDAS & EFISIEN</span>
          </div>
          <p className="text-base sm:text-xl font-black text-white leading-relaxed">
            “Dengan Rp497.000 (sekali bayar), Anda memiliki sistem kerja terintegrasi yang dapat digunakan kembali di setiap siklus audit perusahaan Anda.”
          </p>
          <p className="text-xs sm:text-sm text-emerald-200/80 mt-2 font-medium">
            Hemat waktu berharga Anda, tingkatkan kualitas persiapan, dan jalankan audit dengan lebih percaya diri.
          </p>
        </div>

      </div>
    </section>
  );
};
