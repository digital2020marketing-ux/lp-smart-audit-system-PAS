import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import { FAQS } from '../data/auditContent';
import { CHECKOUT_URL, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  const handleFaqBuyClick = () => {
    trackCheckoutClick('faq_buy', 'FAQ Section - Pesan Sekarang Keranjang');
  };

  const handleFaqAskClick = () => {
    trackWhatsAppClick('faq_ask', 'FAQ Section - Tanya via WA');
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3.5 py-1.5 rounded-full inline-block">
            Tanya Jawab
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Jawaban jelas seputar penggunaan, format dokumen, dan akses SMART Audit SYSTEM.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 mb-10">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-4 sm:px-6 py-4 font-bold text-gray-900 hover:bg-gray-50/80 focus:outline-none flex justify-between items-center gap-3 cursor-pointer"
                >
                  <span className="text-xs sm:text-sm md:text-base flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Dual Action */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 text-center shadow-xs">
          <h3 className="text-base sm:text-xl font-black text-gray-900 mb-1.5">
            Masih Memiliki Pertanyaan yang Belum Terjawab?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-md mx-auto">
            Tim konsultan kami siap membantu Anda menjawab pertanyaan atau mendampingi proses pemesanan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              id="faq-buy-cta"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFaqBuyClick}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-xl font-black text-xs sm:text-sm transition-all shadow-md shadow-red-600/30 animate-vibrate-pulse cursor-pointer text-center"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>PESAN SEKARANG VIA KERANJANG</span>
            </a>

            <a
              id="faq-ask-cta"
              href={getWhatsAppUrl('faq_ask')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFaqAskClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20 cursor-pointer text-center"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>TANYA VIA WHATSAPP</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

