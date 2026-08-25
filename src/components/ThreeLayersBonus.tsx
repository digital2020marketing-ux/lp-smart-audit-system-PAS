import React, { useState } from 'react';
import { Gift, BookOpen, Headphones, HelpCircle, CheckCircle2, Sparkles, X, ZoomIn } from 'lucide-react';
import imgModules from '../assets/images/9-modul.jpg';
import imgPodcast from '../assets/images/podcast-audio-ulasan-mendalam.jpg';
import imgEvaluation from '../assets/images/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg';

export const ThreeLayersBonus: React.FC = () => {
  const [zoomBonus, setZoomBonus] = useState<{ src: string; title: string; fallback: string } | null>(null);

  return (
    <section id="bonus-khusus" className="py-14 sm:py-20 bg-slate-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-4 h-4 text-amber-700" />
            <span>AKSES TAMBAHAN SPESIAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            BONUS KHUSUS DALAM SMART AUDIT SYSTEM
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl mx-auto">
            Dirancang melengkapi workflow utama agar pemahaman dan implementasi Anda semakin kokoh dari segala sisi.
          </p>
        </div>

        {/* 3 Bonus Layers Cards */}
        <div className="space-y-8 sm:space-y-10">
          
          {/* BONUS 1: Knowledge Layer */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              
              <div className="w-full md:w-5/12">
                <div 
                  onClick={() => setZoomBonus({ src: imgModules, title: '9 Modul Pembelajaran Audit Internal (ISO 9001 & ISO 19011)', fallback: '/images/9-modul.jpg' })}
                  className="rounded-2xl overflow-hidden border border-gray-200 shadow-xs bg-slate-100 cursor-pointer group relative"
                >
                  <img 
                    src={imgModules} 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/9-modul.jpg';
                    }}
                    alt="9 Modul Pembelajaran Audit Internal" 
                    className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5" /> Perbesar
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-7/12 text-left space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                  <span>BONUS 1</span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 leading-snug">
                  9 Modul Pembelajaran Audit Internal (ISO 9001 & ISO 19011)
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Materi pembelajaran komprehensif untuk membantu memahami alur audit, klausul 4 sampai 10, formulasi temuan, dan tindak lanjut CAPA.
                </p>

                <div className="p-3.5 bg-blue-50 border-l-4 border-blue-900 rounded-r-xl">
                  <span className="text-xs sm:text-sm font-bold text-blue-950">
                    “Knowledge Layer — ketika Anda ingin memahami alasan di balik workflow yang sedang digunakan.”
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* BONUS 2: Learning Layer */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              
              <div className="w-full md:w-5/12">
                <div 
                  onClick={() => setZoomBonus({ src: imgPodcast, title: 'Podcast Audio Ulasan Audit 9 Seri', fallback: '/images/podcast-audio-ulasan-mendalam.jpg' })}
                  className="rounded-2xl overflow-hidden border border-gray-200 shadow-xs bg-slate-100 cursor-pointer group relative"
                >
                  <img 
                    src={imgPodcast} 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/podcast-audio-ulasan-mendalam.jpg';
                    }}
                    alt="Podcast Audio Ulasan Audit 9 Seri" 
                    className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5" /> Perbesar
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-7/12 text-left space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  <Headphones className="w-3.5 h-3.5 text-purple-700" />
                  <span>BONUS 2</span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 leading-snug">
                  Podcast Audio Ulasan Audit (9 Seri • 180+ Menit)
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Pelajari kembali konsep dan studi kasus audit saat perjalanan, istirahat, atau di luar meja kerja secara fleksibel melalui pemutar audio digital.
                </p>

                <div className="p-3.5 bg-purple-50 border-l-4 border-purple-800 rounded-r-xl">
                  <span className="text-xs sm:text-sm font-bold text-purple-950">
                    “Learning Layer — agar materi tidak hanya berhenti di file PDF.”
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* BONUS 3: Review Layer */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              
              <div className="w-full md:w-5/12">
                <div 
                  onClick={() => setZoomBonus({ src: imgEvaluation, title: 'Pre-Test & Post-Test + AI Asisten AMI', fallback: '/images/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg' })}
                  className="rounded-2xl overflow-hidden border border-gray-200 shadow-xs bg-slate-100 cursor-pointer group relative"
                >
                  <img 
                    src={imgEvaluation} 
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg';
                    }}
                    alt="Pre-Test & Post-Test plus AI Asisten AMI" 
                    className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5" /> Perbesar
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-7/12 text-left space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>BONUS 3</span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 leading-snug">
                  Pre-Test & Post-Test + AI Asisten AMI
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Gunakan simulasi evaluasi untuk mengukur pemahaman dan AI Asisten untuk mendiskusikan isi modul maupun contoh kasus audit secara interaktif 24/7.
                </p>

                <div className="p-3.5 bg-emerald-50 border-l-4 border-emerald-700 rounded-r-xl">
                  <span className="text-xs sm:text-sm font-bold text-emerald-950">
                    “Review Layer — untuk membantu memperkuat pemahaman sebelum diaplikasikan.”
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {zoomBonus && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setZoomBonus(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
              <span className="text-xs sm:text-sm font-bold text-slate-200 truncate pr-4">
                {zoomBonus.title}
              </span>
              <button
                onClick={() => setZoomBonus(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-2 sm:p-4 bg-slate-950 flex items-center justify-center">
              <img 
                src={zoomBonus.src} 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = zoomBonus.fallback;
                }}
                alt={zoomBonus.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
