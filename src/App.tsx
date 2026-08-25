import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BenefitsSection } from './components/BenefitsSection';
import { ProductBridging } from './components/ProductBridging';
import { ThreeLayersBonus } from './components/ThreeLayersBonus';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferStack } from './components/OfferStack';
import { ObjectionHandling } from './components/ObjectionHandling';
import { FaqSection } from './components/FaqSection';
import { LicenseNotice } from './components/LicenseNotice';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PurchaseNotification } from './components/PurchaseNotification';

export default function App() {
  const handleCheckoutScroll = () => {
    const checkoutElem = document.getElementById('penawaran') || document.getElementById('checkout');
    if (checkoutElem) {
      checkoutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col selection:bg-blue-900 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar onCheckoutClick={handleCheckoutScroll} />

      {/* Main Content: 7 Strategic Sections per Framework */}
      <main className="flex-1">
        {/* SECTION 1 — PROBLEM SET UP */}
        <Hero onCheckoutClick={handleCheckoutScroll} />

        {/* SECTION 2 — PRESENT BENEFIT */}
        <BenefitsSection />

        {/* SECTION 3 — PRODUCT BRIDGING */}
        <ProductBridging onSeeOfferClick={handleCheckoutScroll} />

        {/* SECTION 4 — 3 LAYERS BONUS */}
        <ThreeLayersBonus />

        {/* SECTION 5 — SOCIAL PROOF */}
        <TestimonialsSection onCheckoutClick={handleCheckoutScroll} />

        {/* SECTION 6 — OFFER STACK */}
        <OfferStack />

        {/* SECTION 7 — HANDLING OBJECTION & FINAL CLOSING */}
        <ObjectionHandling />

        {/* Comprehensive FAQ Section */}
        <FaqSection />

        {/* Pengumuman Lisensi & Akad Penggunaan */}
        <LicenseNotice />
      </main>

      {/* Footer & Floating WhatsApp Support Widget & Purchase Popup */}
      <Footer />
      <FloatingWhatsApp />
      <PurchaseNotification />
    </div>
  );
}
