import React from 'react';
import { 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  ShoppingBag, 
  CheckCircle2,
  Zap,
  Clock
} from 'lucide-react';
import { CHECKOUT_URL, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';

interface WhatsAppCheckoutProps {
  onWhatsAppClick?: () => void;
}

export const WhatsAppCheckout: React.FC<WhatsAppCheckoutProps> = ({ onWhatsAppClick }) => {
  const handleDirectCheckout = () => {
    trackCheckoutClick('checkout_section_main', 'Form Checkout - Keranjang Resmi');
    if (onWhatsAppClick) {
      onWhatsAppClick();
    }
  };

  const handleAskWhatsApp = () => {
    trackWhatsAppClick('checkout_qa_direct', 'Form Checkout - Tanya via WhatsApp');
  };

  return (
    <section id="checkout" className="py-14 sm:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t border-gray-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            PEMESANAN RESMI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
            Amankan Akses <span className="text-blue-900">SMART Audit SYSTEM</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-base">
            Dapatkan 9 modul lengkap, 7 worksheet editable, dan 3 AI tools dalam satu kali akses seumur hidup.
          </p>
        </div>

        {/* Simplified Clean Checkout Card */}
        <div className="bg-white rounded-3xl border-2 border-red-500/80 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          {/* Top Accent Strip */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-rose-600 to-red-600" />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Price & Benefits */}
            <div className="md:col-span-7 space-y-4">
              <div className="bg-slate-950 text-white rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-inner">
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-emerald-400 font-black tracking-wider uppercase block">HARGA PROMO RESMI</span>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      Rp497.000
                      <span className="text-xs sm:text-sm text-slate-400 font-normal line-through ml-2">Rp1.297.000</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-800 shrink-0">
                    Diskon Promo
                  </span>
                </div>
                <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Sekali bayar • Akses instan seumur hidup tanpa biaya langganan</span>
                </div>
              </div>

              {/* Package Points */}
              <div className="space-y-2 text-xs sm:text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>9 Modul Lengkap</strong> Audit Mutu Internal ISO 9001 & ISO 19011</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>7 Worksheet Editable</strong> Excel & Word (Bebas Proteksi / Kunci)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>3 AI Tools Interaktif</strong> (Generator 5W+1H, PLOR & 5-Why)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>ISO 19011:2026 Assistant</strong> & Evaluasi Pre/Post Test</span>
                </div>
              </div>
            </div>

            {/* Right: Direct Actions */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-3 bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-200">
              
              {/* Primary Direct Cart CTA */}
              <a
                id="direct-checkout-btn"
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectCheckout}
                className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-4 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/40 border-2 border-red-400/50 animate-vibrate-pulse cursor-pointer text-center"
              >
                <ShoppingBag className="w-5 h-5 shrink-0 animate-bounce" />
                <span>PESAN SEKARANG</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              {/* Secondary Simple WhatsApp Consultation CTA */}
              <a
                id="wa-simple-ask-btn"
                href={getWhatsAppUrl('checkout_simple_ask')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAskWhatsApp}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20 cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Tanya Tim via WhatsApp</span>
              </a>

              {/* Guarantees */}
              <div className="pt-2 flex items-center justify-center gap-3 text-[11px] font-semibold text-gray-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Aman
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Cepat
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-blue-600" /> Sekali Bayar
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

