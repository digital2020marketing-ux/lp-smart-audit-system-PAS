import React from 'react';
import { UserCheck, Building2, MessageCircle, HeartHandshake, FileText, Ban, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, trackWhatsAppClick } from '../constants';

export const LicenseNotice: React.FC = () => {
  const handleCorporateWaClick = () => {
    trackWhatsAppClick('license_corporate_inquiry', 'Lisensi Instansi/Perusahaan');
  };

  const corporateWaUrl = getWhatsAppUrl(
    'license_corporate',
    'Assalamualaikum Admin, saya ingin pemesanan beberapa lisensi SMART Audit SYSTEM untuk instansi / perusahaan / organisasi kami. Mohon informasi diskon / harga khusus sesuai jumlah pengguna yang akan didaftarkan.'
  );

  return (
    <section id="lisensi" className="py-16 sm:py-20 bg-slate-950 text-white border-t border-slate-800/90 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
            Lisensi Personal & Akad Penggunaan SMART Audit SYSTEM
          </h2>
          <div className="inline-block bg-blue-900/70 border border-blue-400/50 text-blue-200 px-5 py-2 rounded-full text-xs sm:text-sm font-black tracking-wide shadow-md">
            1 Lisensi = 1 Orang Pengguna
          </div>
        </div>

        {/* Main Announcement Box */}
        <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl space-y-6">
          
          {/* Paragraph 1 */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-blue-950/50 border border-blue-800/50">
            <UserCheck className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              Hak akses <strong className="text-white">SMART Audit SYSTEM</strong> diberikan untuk <strong className="text-blue-300">1 (satu) orang pengguna/personal</strong> dan hanya diperuntukkan bagi penggunaan pribadi pemilik lisensi.
            </p>
          </div>

          {/* S & K Agreement Points */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mb-3.5 flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Dengan melakukan pembelian dan menggunakan SMART Audit SYSTEM, pengguna memahami dan menyepakati bahwa:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5">
                <Ban className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Hak akses tidak diperbolehkan untuk dibagikan (share)</strong> kepada teman, kolega, rekan kerja, atau pihak lain.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5">
                <Ban className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Akun, link akses, file, maupun materi</strong> di dalam SMART Audit SYSTEM tidak diperbolehkan untuk dijual atau diperjualbelikan kembali.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5">
                <Ban className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  Pengguna tidak diperkenankan menggandakan, menyebarluaskan, atau mendistribusikan isi SMART Audit SYSTEM untuk <strong className="text-white">kepentingan komersial tanpa izin</strong>.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Lisensi yang diberikan merupakan <strong className="text-white">hak penggunaan</strong>, bukan perpindahan hak kepemilikan atas sistem, materi, maupun konten di dalamnya.
                </span>
              </div>
            </div>
          </div>

          {/* Sub-section: Lisensi untuk Instansi / Perusahaan */}
          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/60 border border-blue-500/30">
            <div className="flex items-center gap-2.5 mb-3">
              <Building2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm sm:text-base font-bold text-white">
                Lisensi untuk Instansi/Perusahaan
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
              Apabila <strong className="text-white">instansi, perusahaan, lembaga, atau organisasi</strong> membutuhkan SMART Audit SYSTEM untuk digunakan oleh beberapa orang, silakan melakukan pembelian <strong className="text-blue-300">beberapa lisensi sesuai jumlah pengguna yang akan didaftarkan</strong>.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Untuk pembelian beberapa lisensi, silakan <strong className="text-emerald-400">hubungi Admin melalui WhatsApp</strong>. Kami menyediakan <strong className="text-amber-300 font-semibold">harga khusus/diskon</strong> yang akan disesuaikan dengan <strong className="text-white">jumlah lisensi atau jumlah pengguna yang didaftarkan</strong>.
            </p>

            <div className="p-3.5 bg-slate-950/90 rounded-xl border border-slate-800 text-xs text-slate-300 mb-4">
              Setiap pengguna tetap memperoleh <strong className="text-white">hak akses personal masing-masing</strong>, sesuai ketentuan: <strong className="text-blue-300">1 Lisensi = 1 Orang Pengguna.</strong>
            </div>

            <a
              href={corporateWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCorporateWaClick}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Admin untuk Pembelian Beberapa Lisensi</span>
            </a>
          </div>

          {/* Closing & Prayer */}
          <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 leading-relaxed space-y-1.5">
              <p>
                Ketentuan ini merupakan bagian dari <strong className="text-slate-200">akad pembelian dan penggunaan SMART Audit SYSTEM</strong>. Kami berharap seluruh pengguna dapat saling menjaga amanah dan menghormati hak penggunaan yang telah diberikan.
              </p>
              <p className="text-slate-200 font-medium italic">
                Semoga setiap ilmu, alat, dan manfaat yang diperoleh melalui SMART Audit SYSTEM menjadi jalan kemudahan, memberikan manfaat dalam pekerjaan, serta membawa keberkahan bagi kita semua. Aamiin.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
