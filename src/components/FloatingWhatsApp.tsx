import React, { useState, useEffect } from 'react';
import { ArrowUp, ShoppingBag, MessageCircle } from 'lucide-react';
import { CHECKOUT_URL, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStickyCheckoutClick = () => {
    trackCheckoutClick('sticky_mobile_checkout', 'Sticky Mobile Bar - Pesan Sekarang');
  };

  const handleStickyAskClick = () => {
    trackWhatsAppClick('sticky_mobile_ask', 'Sticky Mobile Bar - Tanya via WA');
  };

  return (
    <>
      {/* Scroll To Top button bottom-right (Desktop & Mobile) */}
      {showScrollTop && (
        <div className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-40">
          <button
            onClick={scrollToTop}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-xs border border-gray-300 text-gray-700 shadow-md flex items-center justify-center hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      )}

      {/* Sticky Bottom Bar for Mobile Only: Dual CTA (Tanya WA + Pesan Sekarang) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 flex items-center gap-2 shadow-2xl safe-area-bottom">
        <a
          id="sticky-mobile-ask-btn"
          href={getWhatsAppUrl('sticky_mobile_ask')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleStickyAskClick}
          className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs px-3 py-2.5 rounded-xl border border-emerald-400/40 flex items-center justify-center gap-1.5 shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Tanya WA</span>
        </a>

        <a
          id="sticky-mobile-checkout-btn"
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleStickyCheckoutClick}
          className="flex-1 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 active:scale-95 text-white font-black text-xs py-2.5 px-3 rounded-xl shadow-lg shadow-red-600/30 border border-red-500/40 flex items-center justify-center gap-1.5 text-center truncate cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span className="truncate">PESAN SEKARANG (RP497.000)</span>
        </a>
      </div>
    </>
  );
};
