import React from 'react';
import { HelpCircle, CheckCircle2, ShieldCheck, Sparkles, ShoppingBag, ArrowRight, Bot, Compass, Check } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';

export const ObjectionHandling: React.FC = () => {
  const handleFinalCtaClick = () => {
    trackCheckoutClick('final_closing_cta', 'Final Objection Closing - Dapatkan Akses Sekarang');
  };

  return (
    <section id="keraguan" className="py-14 sm:py-20 bg-slate-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800" />
            <span>JAWABAN TERBUKA & TRANSPARAN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            “Sebelum Memutuskan, Mungkin Ini yang Masih Mengganjal…”
          </h2>
        </div>

        {/* 3 Main Objections Accordion / Cards */}
        <div className="space-y-6 mb-14">
          
          {/* Objection 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm">
            <div className="flex items-start gap-3.5 mb-4">
              <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-900 font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                “Saya Belum Hafal Semua Klausul ISO. Apa Saya Bisa Menggunakan Sistem Ini?”
              </h3>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              <p>
                SMART Audit SYSTEM tidak meminta AI mengambil keputusan audit untuk Anda.
              </p>
              <p>
                AI digunakan sebagai <strong>starting point</strong> untuk membantu memetakan pertanyaan, klausul terkait, dan rekomendasi bukti objektif.
              </p>
              <p>
                Anda tetap melakukan review, observasi, wawancara, verifikasi evidence, dan menentukan hasil audit final.
              </p>
              <div className="p-4 bg-blue-50 border-l-4 border-blue-900 rounded-r-xl font-semibold text-blue-950">
                <p><strong>Tujuannya bukan menggantikan kompetensi auditor.</strong></p>
                <p className="mt-1 text-xs sm:text-sm text-blue-900">
                  Tujuannya agar Anda tidak selalu memulai pekerjaan dari halaman kosong.
                </p>
              </div>
            </div>
          </div>

          {/* Objection 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm">
            <div className="flex items-start gap-3.5 mb-4">
              <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-900 font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                “Kalau Berbasis AI, Kenapa Tidak Pakai ChatGPT Biasa Saja?”
              </h3>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              <p>
                Bisa. General-purpose AI dapat digunakan untuk membantu pekerjaan audit.
              </p>
              <p>
                Tetapi Anda masih perlu membangun sendiri: <em>prompt, konteks, struktur pertanyaan, format PLOR, alur CAPA, worksheet, dan workflow kerjanya.</em>
              </p>
              
              <div className="my-4 p-4 sm:p-5 bg-slate-900 text-white rounded-2xl text-center border border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  PENDEKATAN SPESIFIK SMART AUDIT SYSTEM
                </div>
                <div className="text-sm sm:text-lg font-black text-emerald-400">
                  Specialized AI + Audit Workflow + Working Documents + Knowledge System
                </div>
              </div>

              <p className="font-semibold text-gray-900">
                <strong>Jadi value-nya bukan sekadar memiliki AI.</strong>
              </p>
              <p>
                Value-nya adalah AI yang sudah ditempatkan dalam alur kerja audit yang dapat digunakan berulang kali.
              </p>
            </div>
          </div>

          {/* Objection 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm">
            <div className="flex items-start gap-3.5 mb-4">
              <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-900 font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                “Kalau Output AI Tetap Harus Saya Review, Memangnya Apa yang Lebih Mudah?”
              </h3>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              <p>
                Yang dikurangi bukan tanggung jawab profesional auditor.
              </p>
              
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-emerald-950 font-bold text-base sm:text-lg text-center">
                Yang dikurangi adalah: <span className="text-emerald-700 underline">Blank Page → Draft Awal.</span>
              </div>

              <p>
                Anda tetap memegang keputusan final. Tetapi Anda tidak harus selalu menghabiskan waktu untuk:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-medium pl-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Memikirkan pertanyaan dari nol</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Menentukan starting point evidence dari nol</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Merangkai struktur temuan dari nol</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Membuka analisis 5-Why dari nol</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Menyiapkan format administrasi audit satu per satu</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Vision & Final Close Box */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 text-center shadow-2xl border border-blue-900 mb-12">
          
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 bg-blue-950 border border-blue-800 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Masa Depan Aktivitas Audit Anda</span>
          </span>

          <h3 className="text-xl sm:text-3xl font-black text-white mb-4 leading-tight">
            Bayangkan Siklus Audit Berikutnya…
          </h3>

          <div className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 font-normal mb-6">
            <p>
              Ketika penugasan audit datang, Anda tidak lagi harus mencari template acak, menatap checklist kosong, atau membangun alur yang sama dari awal.
            </p>
            <div className="p-4 bg-slate-950/90 rounded-2xl border border-blue-900/60 my-3 text-center">
              <p className="text-sm sm:text-base text-slate-300 mb-1 font-semibold">
                Audit berikutnya tetap akan datang. Bedanya:
              </p>
              <p className="text-base sm:text-lg font-black text-white">
                Apakah Anda akan kembali memulai dari file kosong — atau sudah memiliki sistem kerja yang siap digunakan kembali?
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-slate-950/80 rounded-2xl border border-slate-800 max-w-xl mx-auto text-left space-y-2 mb-8">
            <div className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white">Investasi Rp497.000 Sekali Bayar</strong> akan terasa sangat kecil ketika dibandingkan dengan pekerjaan berulang yang harus kembali dilakukan pada setiap siklus audit.
            </div>
            <div className="pt-2 border-t border-slate-800 text-xs sm:text-sm text-emerald-300 font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bukan untuk menggantikan Anda sebagai auditor. Tetapi untuk membantu Anda bekerja dengan sistem yang lebih terstruktur.</span>
            </div>
          </div>

          {/* FINAL CTA BOX */}
          <div className="max-w-md mx-auto space-y-3">
            <h4 className="text-base sm:text-xl font-black text-white leading-tight">
              Mulai Siklus Audit Berikutnya Tanpa Harus Memulai Semuanya dari Nol
            </h4>

            <a
              id="final-closing-btn"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFinalCtaClick}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>DAPATKAN AKSES SEKARANG — Rp497.000</span>
            </a>

            <p className="text-xs text-slate-400 font-medium">
              Sekali bayar • Lifetime Access • Tanpa biaya bulanan
            </p>

            <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/30 rounded-xl flex items-center justify-center gap-2 text-left">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[11px] text-emerald-200 font-medium">
                <strong className="text-white font-bold">Garansi Uang Kembali:</strong> Bebas risiko jika tidak memberi manfaat.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
