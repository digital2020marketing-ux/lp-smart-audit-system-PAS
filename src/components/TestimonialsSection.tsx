import React from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';
import { SMARTBOOK_IMAGES } from '../imageConstants';
import imgTesti1 from '../assets/images/testi1.png';
import imgTesti2 from '../assets/images/testi2.png';
import imgTesti3 from '../assets/images/testi3.png';
import imgTesti4 from '../assets/images/testi4.png';
import imgTesti5 from '../assets/images/testi5.png';
import imgTesti6 from '../assets/images/testi6.png';

interface TestimonialsSectionProps {
  onCheckoutClick?: () => void;
}

interface TestimonialItem {
  id: number;
  title: string;
  image: string;
  fallbackUrl: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    title: 'Testimoni 1',
    image: imgTesti1,
    fallbackUrl: SMARTBOOK_IMAGES.testi1.local,
  },
  {
    id: 2,
    title: 'Testimoni 2',
    image: imgTesti2,
    fallbackUrl: SMARTBOOK_IMAGES.testi2.local,
  },
  {
    id: 3,
    title: 'Testimoni 3',
    image: imgTesti3,
    fallbackUrl: SMARTBOOK_IMAGES.testi3.local,
  },
  {
    id: 4,
    title: 'Testimoni 4',
    image: imgTesti4,
    fallbackUrl: SMARTBOOK_IMAGES.testi4.local,
  },
  {
    id: 5,
    title: 'Testimoni 5',
    image: imgTesti5,
    fallbackUrl: SMARTBOOK_IMAGES.testi5.local,
  },
  {
    id: 6,
    title: 'Testimoni 6',
    image: imgTesti6,
    fallbackUrl: SMARTBOOK_IMAGES.testi6.local,
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('social_proof_buy', 'Social Proof - Dapatkan SMART Audit System Rp497.000');
  };

  return (
    <section id="testimoni" className="py-14 sm:py-20 bg-slate-100/90 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* HEADLINE */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>BUKTI & VALIDASI PENGGUNA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            Apa Kata Pengguna Setelah Mencoba Workflow SMART Audit SYSTEM?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-medium max-w-2xl mx-auto">
            Berikut tangkapan layar asli testimoni dari para pengguna SMART Audit SYSTEM.
          </p>
        </div>

        {/* CLEAN TESTIMONIAL IMAGE GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative overflow-hidden bg-slate-900/5 flex items-center justify-center p-3">
                <img
                  src={item.image}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.dataset.failed && item.fallbackUrl) {
                      target.dataset.failed = 'true';
                      target.src = item.fallbackUrl;
                    }
                  }}
                  referrerPolicy="no-referrer"
                  alt={item.title}
                  className="w-full h-auto max-h-[360px] object-contain rounded-xl block shadow-sm"
                  loading="lazy"
                />
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
    </section>
  );
};
