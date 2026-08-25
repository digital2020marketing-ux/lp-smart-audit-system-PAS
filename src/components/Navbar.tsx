import React, { useState, useEffect } from 'react';
import { TrendingUp, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { CHECKOUT_URL, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';

interface NavbarProps {
  onCheckoutClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCtaClick = () => {
    trackCheckoutClick('nav_cta', 'Navbar - Ambil SMART Audit System Rp497.000');
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/80 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform font-bold text-lg">
              ⚡
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-gray-900">
                SMART<span className="text-blue-900">Audit</span>
              </span>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider -mt-1 hidden sm:block">
                SYSTEM ISO 9001 & ISO 19011
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-gray-600">
            <a href="#manfaat" className="hover:text-blue-900 transition-colors">Manfaat</a>
            <a href="#sistem-kerja" className="hover:text-blue-900 transition-colors">Sistem Kerja</a>
            <a href="#bonus-khusus" className="hover:text-blue-900 transition-colors">3 Bonus</a>
            <a href="#testimoni" className="hover:text-blue-900 transition-colors">Testimoni</a>
            <a href="#penawaran" className="hover:text-blue-900 transition-colors">Paket & Akses</a>
            <a href="#keraguan" className="hover:text-blue-900 transition-colors">Tanya Jawab</a>
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <a
              id="nav-cta-btn"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavCtaClick}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-95 text-white px-4 md:px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all shadow-md shadow-red-600/30 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>DAPATKAN AKSES (Rp497.000)</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-gray-200 bg-white rounded-2xl shadow-xl px-4 space-y-2.5">
            <a
              href="#manfaat"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              Manfaat Utama
            </a>
            <a
              href="#sistem-kerja"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              Sistem Kerja (AI & Dokumen)
            </a>
            <a
              href="#bonus-khusus"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              3 Bonus Eksklusif
            </a>
            <a
              href="#testimoni"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              Testimoni Pengguna
            </a>
            <a
              href="#penawaran"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              Paket & Penawaran
            </a>
            <a
              href="#keraguan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              Tanya Jawab (FAQ)
            </a>
            <div className="pt-2 space-y-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavCtaClick();
                }}
                className="w-full text-center flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 text-white py-3 rounded-xl font-bold text-sm shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>DAPATKAN SMART AUDIT SYSTEM</span>
              </a>
              <a
                href={getWhatsAppUrl('nav_mobile_ask')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackWhatsAppClick('nav_mobile_ask', 'Navbar Mobile - Tanya via WA');
                }}
                className="w-full text-center flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tanya Tim via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
