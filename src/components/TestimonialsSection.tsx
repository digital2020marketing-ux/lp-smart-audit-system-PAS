import React, { useState } from 'react';
import { CheckCircle2, ShoppingBag, X, ChevronLeft, ChevronRight, MessageSquare, Star, ZoomIn } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';
import imgTesti1 from '../assets/images/testi1.png';
import imgTesti2 from '../assets/images/testi2.png';
import imgTesti3 from '../assets/images/testi3.png';
import imgTesti4 from '../assets/images/testi4.png';
import imgTesti5 from '../assets/images/testi5.png';
import imgTesti6 from '../assets/images/testi6.png';
import imgTestiWa1 from '../assets/images/testi-wa-1.png';
import imgTestiWa2 from '../assets/images/testi-wa-2.png';
import imgTestiWa3 from '../assets/images/testi-wa-3.png';
import imgTestiWa4 from '../assets/images/testi-wa-4.png';

interface TestimonialsSectionProps {
  onCheckoutClick?: () => void;
}

interface TestimonialItem {
  id: number;
  category: 'review' | 'chat';
  role: string;
  before?: string;
  after?: string;
  highlight: string;
  image: string;
  fallbackUrl?: string;
}

const ALL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    category: 'review',
    role: 'Auditor Internal — Manufaktur',
    before: 'Menyusun checklist & pertanyaan manual dari file kosong butuh waktu berhari-hari.',
    after: 'Proses menyiapkan starting point pertanyaan 5W+1H dan bukti objektif jadi jauh lebih cepat dan terarah.',
    highlight: '“Persiapan checklist jauh lebih cepat dan terstruktur”',
    image: imgTesti1,
    fallbackUrl: '/images/testi1.png',
  },
  {
    id: 2,
    category: 'review',
    role: 'Tim Mutu & Pengendali Dokumen',
    before: 'Sering ragu menentukan alur pertanyaan saat ditugaskan audit departemen lain.',
    after: 'Mendapat panduan pertanyaan spesifik per klausul sehingga jauh lebih percaya diri saat wawancara lapangan.',
    highlight: '“Tidak lagi bingung menentukan starting point pertanyaan”',
    image: imgTesti2,
    fallbackUrl: '/images/testi2.png',
  },
  {
    id: 3,
    category: 'review',
    role: 'Koordinator Audit Internal / MR',
    before: 'Catatan temuan auditor lapangan sering tidak standar dan sulit dirapikan ke laporan.',
    after: 'Formulasi PLOR dan 5-Why CAPA langsung tertata rapi, konsisten, dan siap diserahkan ke auditee.',
    highlight: '“Formulasi temuan PLOR & administrasi audit jauh lebih mudah”',
    image: imgTesti3,
    fallbackUrl: '/images/testi3.png',
  },
  {
    id: 4,
    category: 'review',
    role: 'Lead Auditor — Industri Jasa & Logistik',
    before: 'Menganalisis akar penyebab CAPA sering mentok hanya di perbaikan sementara (koreksi).',
    after: 'Bantuan AI 5-Why eksploratif membantu menemukan akar sistemik dan corrective action yang tepat.',
    highlight: '“Analisis CAPA & 5-Why lebih mendalam dan tuntas”',
    image: imgTesti4,
    fallbackUrl: '/images/testi4.png',
  },
  {
    id: 5,
    category: 'review',
    role: 'Quality Assurance Supervisor',
    before: 'Format formulir audit antar auditor tidak seragam dan sering tercecer.',
    after: '7 Worksheet Word & Excel siap pakai membuat dokumentasi seluruh siklus audit sangat rapi.',
    highlight: '“Dokumen kerja & worksheet langsung siap pakai”',
    image: imgTesti5,
    fallbackUrl: '/images/testi5.png',
  },
  {
    id: 6,
    category: 'review',
    role: 'Auditor Mutu Internal Perguruan Tinggi / Korporat',
    before: 'Sulit mendalami klausul baru dan interpretasi standar saat jadwal audit mendadak.',
    after: 'Modul komprehensif, podcast audio dan AI Co-pilot ISO 19011 menjadi pegangan cepat 24/7.',
    highlight: '“Ekosistem belajar dan instrumen kerja paling lengkap”',
    image: imgTesti6,
    fallbackUrl: '/images/testi6.png',
  },
  {
    id: 7,
    category: 'chat',
    role: 'Pengguna SMART Audit SYSTEM',
    highlight: '“Checklistnya detail banget, sangat membantu saat audit!”',
    image: imgTestiWa1,
    fallbackUrl: '/images/testi-wa-1.png',
  },
  {
    id: 8,
    category: 'chat',
    role: 'Pengguna SMART Audit SYSTEM',
    highlight: '“Formulasi PLOR bikin laporan audit cepat selesai”',
    image: imgTestiWa2,
    fallbackUrl: '/images/testi-wa-2.png',
  },
  {
    id: 9,
    category: 'chat',
    role: 'Pengguna SMART Audit SYSTEM',
    highlight: '“Worksheet Excel & Modulnya sangat aplikatif”',
    image: imgTestiWa3,
    fallbackUrl: '/images/testi-wa-3.png',
  },
  {
    id: 10,
    category: 'chat',
    role: 'Pengguna SMART Audit SYSTEM',
    highlight: '“Sangat worth it untuk bekal audit internal tahun ini”',
    image: imgTestiWa4,
    fallbackUrl: '/images/testi-wa-4.png',
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'review' | 'chat'>('all');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredItems = ALL_TESTIMONIALS.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const handleCtaClick = () => {
    trackCheckoutClick('social_proof_buy', 'Social Proof - Dapatkan SMART Audit System Rp497.000');
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % filteredItems.length);
    }
  };

  return (
    <section id="testimoni" className="py-14 sm:py-20 bg-slate-100/90 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* (13) HEADLINE */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>BUKTI & VALIDASI PENGGUNA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            Apa Kata Pengguna Setelah Mencoba Workflow SMART Audit SYSTEM?
          </h2>
          
          <p className="text-sm sm:text-base text-gray-700 font-medium max-w-2xl mx-auto">
            Berikut tanggapan dan tangkapan layar asli dari para praktisi mutu & auditor internal yang telah menggunakan SMART Audit SYSTEM.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              Semua Bukti ({ALL_TESTIMONIALS.length})
            </button>
            <button
              onClick={() => setActiveTab('review')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'review'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              Ulasan Praktisi (6)
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'chat'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              Chat WhatsApp (4)
            </button>
          </div>
        </div>

        {/* (15) IMAGE TESTIMONI GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(index)}
              className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden cursor-pointer hover:-translate-y-1 flex flex-col justify-between p-4 group"
            >
              {/* Persona Tag */}
              <div className="mb-2.5">
                <span className="text-[11px] font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md block text-center truncate">
                  👤 {item.role}
                </span>
              </div>

              {/* Chat / Review Screenshot Box */}
              <div className="bg-slate-900/5 rounded-xl p-2 border border-slate-200/80 overflow-hidden flex items-center justify-center min-h-[220px] mb-3 relative group-hover:border-blue-300">
                <img
                  src={item.image}
                  onError={(e) => {
                    if (item.fallbackUrl) {
                      (e.currentTarget as HTMLImageElement).src = item.fallbackUrl;
                    }
                  }}
                  referrerPolicy="no-referrer"
                  alt={item.highlight}
                  className="w-full h-auto max-h-[260px] object-contain rounded-lg block group-hover:scale-[1.02] transition-transform duration-200"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-slate-900/80 text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <ZoomIn className="w-3.5 h-3.5" /> Perbesar
                  </span>
                </div>
              </div>

              {/* Context Breakdown */}
              <div className="space-y-2 text-left pt-2 border-t border-gray-100">
                {item.before && (
                  <div className="text-xs text-gray-500 leading-tight">
                    <span className="font-bold text-gray-700">Sebelum:</span> {item.before}
                  </div>
                )}
                {item.after && (
                  <div className="text-xs text-emerald-800 bg-emerald-50/80 p-2 rounded-lg leading-tight border border-emerald-200/60 font-medium">
                    <span className="font-bold text-emerald-950">Setelah:</span> {item.after}
                  </div>
                )}
                {!item.before && (
                  <div className="text-xs text-slate-800 bg-blue-50/80 p-2 rounded-lg leading-tight border border-blue-200/60 font-semibold">
                    {item.highlight}
                  </div>
                )}
                <div className="text-center pt-1">
                  <span className="text-[10px] text-blue-800 font-bold hover:underline flex items-center justify-center gap-1">
                    <ZoomIn className="w-3 h-3" /> Klik untuk perbesar gambar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA in Social Proof */}
        <div className="text-center max-w-md mx-auto">
          <a
            id="social-proof-buy-cta"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 shrink-0" />
            <span>DAPATKAN SMART AUDIT SYSTEM — Rp497.000</span>
          </a>
          <p className="text-xs text-gray-500 mt-2 font-medium">
            Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan
          </p>
        </div>

      </div>

      {/* Lightbox Modal for Full Resolution Viewing */}
      {selectedIdx !== null && filteredItems[selectedIdx] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedIdx(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
              <span className="text-xs sm:text-sm font-bold text-slate-200 truncate pr-4">
                {filteredItems[selectedIdx].highlight} — {filteredItems[selectedIdx].role}
              </span>
              <button
                onClick={() => setSelectedIdx(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Tutup preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: High-Res Image */}
            <div className="flex-1 overflow-auto p-2 sm:p-4 bg-slate-950 flex items-center justify-center">
              <img
                src={filteredItems[selectedIdx].image}
                onError={(e) => {
                  if (filteredItems[selectedIdx].fallbackUrl) {
                    (e.currentTarget as HTMLImageElement).src = filteredItems[selectedIdx].fallbackUrl!;
                  }
                }}
                referrerPolicy="no-referrer"
                alt={filteredItems[selectedIdx].highlight}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer with Controls */}
            <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-white text-xs">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <span className="text-slate-400 font-mono">
                {selectedIdx + 1} / {filteredItems.length}
              </span>

              <button
                onClick={handleNext}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
