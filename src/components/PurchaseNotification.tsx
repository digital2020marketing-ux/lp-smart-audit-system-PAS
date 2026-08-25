import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle2, X } from 'lucide-react';

// Daftar pembeli dengan nama yang disamarkan menggunakan bintang (hanya nama saja)
const BUYER_NAMES = [
  'Ahmad S***',
  'Budi P***',
  'Hendra W***',
  'Rina K***',
  'Dedi S***',
  'Fajar A***',
  'Wahyu P***',
  'Siti N***',
  'Dimas R***',
  'Agus T***',
  'Eko S***',
  'Yusuf M***',
  'Tri H***',
  'Rizky F***',
  'Nurul A***',
  'Bambang K***',
  'Dwi L***',
  'Hadi S***',
  'Indra P***',
  'Aris W***',
];

export const PurchaseNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [buyerName, setBuyerName] = useState('Ahmad S***');

  const triggerNotification = () => {
    const randomBuyer = BUYER_NAMES[Math.floor(Math.random() * BUYER_NAMES.length)];
    setBuyerName(randomBuyer);
    setVisible(true);

    // Otomatis sembunyikan setelah 6 detik
    setTimeout(() => {
      setVisible(false);
    }, 6000);
  };

  useEffect(() => {
    // Muncul pertama kali setelah 10 detik
    const initialTimer = setTimeout(() => {
      triggerNotification();
    }, 10000);

    // Muncul berkala setiap 5 menit (5 * 60 * 1000 ms)
    const interval = setInterval(() => {
      triggerNotification();
    }, 5 * 60 * 1000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <aside 
      aria-label="Notifikasi Pembelian"
      className="fixed bottom-16 sm:bottom-6 left-3 sm:left-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[300px] sm:max-w-xs"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-emerald-200/90 shadow-xl p-3 sm:p-3.5 flex items-center gap-3 relative overflow-hidden group">
        {/* Subtle accent bar on left */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-teal-600" />

        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600 shadow-xs">
          <ShoppingBag className="w-5 h-5" />
        </div>

        {/* Info (Hanya Nama Pembeli dan Keterangan Produk, Tanpa Keterangan Waktu) */}
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-xs font-bold text-gray-900 truncate">
              {buyerName}
            </span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          </div>
          <p className="text-[11px] text-gray-600 font-medium leading-tight truncate">
            Membeli <span className="font-bold text-slate-800">SMART Audit SYSTEM</span>
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Tutup notifikasi"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
