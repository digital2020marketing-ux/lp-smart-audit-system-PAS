import React from 'react';
import { TrendingUp, Lock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 sm:py-14 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-sm">
            <TrendingUp className="w-4 h-4 text-blue-200" />
          </div>
          <span className="font-black text-2xl tracking-tight text-white">
            SMART<span className="text-blue-400">Audit</span> <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">SYSTEM</span>
          </span>
        </div>

        <p className="text-gray-300 text-sm font-semibold mb-1">
          Satu Sistem Kerja Auditor Internal ISO 9001 & ISO 19011
        </p>
        <p className="text-xs text-gray-500 max-w-lg mx-auto mb-8">
          Membantu persiapan checklist, pertanyaan audit, formulasi temuan PLOR, CAPA hingga laporan ringkasan dalam satu alur terstruktur.
        </p>

        <div className="border-t border-gray-800/80 pt-6 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>© 2026 SMART Audit SYSTEM. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Transaksi Digital Terverifikasi
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Lock className="w-3.5 h-3.5 text-blue-400" /> 100% Akses Terproteksi
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
