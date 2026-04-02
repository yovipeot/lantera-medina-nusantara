import React, { useState } from 'react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { Heart, Wallet, CreditCard, Landmark, Check } from 'lucide-react';

export const DonationForm = () => {
  const [amount, setAmount] = useState('100.000');
  const [frequency, setFrequency] = useState('Sekali');
  const [method, setMethod] = useState('Transfer');

  const amounts = ['50.000', '100.000', '250.000', '500.000'];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Terima kasih! Instruksi pembayaran telah dikirim ke email Anda.');
  };

  return (
    <section id="donate" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-100 rounded-full blur-[100px] -ml-32" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-100 rounded-full blur-[100px] -mr-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-sky-600 p-12 text-white flex flex-col justify-between">
            <div>
              <Heart className="w-12 h-12 mb-8 fill-white/20" />
              <h3 className="text-3xl font-bold mb-6">Jadilah Bagian Dari Perubahan</h3>
              <p className="text-sky-100 leading-relaxed mb-8">
                Donasi Anda membantu kami menyediakan makanan, sekolah, dan tempat tinggal yang aman bagi mereka.
              </p>
              
              <ul className="space-y-4">
                {['100% Penyaluran Amanah', 'Laporan Real-time', 'Bisa Berhenti Kapan Saja'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12 p-4 bg-sky-700/50 rounded-2xl border border-sky-500/30">
              <p className="text-xs italic opacity-80">
                "Sedikit bagi kita, segalanya bagi mereka."
              </p>
            </div>
          </div>

          <div className="md:w-7/12 p-8 md:p-12">
            <form onSubmit={handleDonate} className="space-y-8">
              {/* Frequency */}
              <div className="flex p-1 bg-gray-50 rounded-2xl border border-gray-100">
                {['Sekali', 'Rutin Tiap Bulan'].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFrequency(f)}
                    className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                      frequency === f 
                        ? 'bg-white text-sky-600 shadow-sm' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Amount Selection */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-sky-950 uppercase tracking-wider">Pilih Nominal</label>
                <div className="grid grid-cols-2 gap-3">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setAmount(a)}
                      className={`py-4 rounded-2xl border-2 font-bold transition-all ${
                        amount === a
                          ? 'border-orange-400 bg-orange-50 text-orange-600'
                          : 'border-gray-100 hover:border-gray-200 text-gray-600'
                      }`}
                    >
                      Rp {a}
                    </button>
                  ))}
                </div>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">Rp</div>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-sky-400 focus:bg-white outline-none transition-all font-bold text-sky-900"
                    placeholder="Nominal lainnya"
                  />
                </div>
              </div>

              {/* Method Selection */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-sky-950 uppercase tracking-wider">Metode Pembayaran</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'Transfer', icon: <Landmark size={20} /> },
                    { id: 'E-Wallet', icon: <Wallet size={20} /> },
                    { id: 'Card', icon: <CreditCard size={20} /> },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMethod(m.id)}
                      className={`flex flex-col items-center justify-center py-4 rounded-2xl border-2 transition-all gap-2 ${
                        method === m.id
                          ? 'border-sky-400 bg-sky-50 text-sky-600'
                          : 'border-gray-100 hover:border-gray-200 text-gray-500'
                      }`}
                    >
                      {m.icon}
                      <span className="text-xs font-bold">{m.id}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-orange-400 hover:bg-orange-500 text-white rounded-[24px] font-bold text-lg shadow-lg shadow-orange-100 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
              >
                Lanjutkan Pembayaran
                <Heart className="w-5 h-5 fill-current" />
              </button>
              
              <p className="text-center text-xs text-gray-400">
                Donasi Anda dilindungi oleh sistem keamanan terenkripsi dan diaudit secara berkala.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
