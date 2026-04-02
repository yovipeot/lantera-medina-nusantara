import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ShieldCheck, Info } from 'lucide-react';

export const DonationReport = () => {
  const data = [
    { name: 'Pendidikan', value: 45, color: '#38bdf8' },
    { name: 'Kesehatan', value: 30, color: '#10b981' },
    { name: 'Operasional', value: 15, color: '#f59e0b' },
    { name: 'Lain-lain', value: 10, color: '#94a3b8' },
  ];

  return (
    <section id="report" className="py-24 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-sky-100 mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-bold text-sky-800 uppercase">Transparansi Dana</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-sky-950 mb-6">
              Amanah & Bertanggung Jawab Atas Setiap Rupiah
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Kami berkomitmen untuk menyalurkan donasi Anda secara transparan. Laporan audit tahunan tersedia untuk publik guna menjaga kepercayaan para donatur.
            </p>

            <div className="space-y-6">
              {data.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-sky-950">{item.name}</span>
                      <span className="text-sm font-bold text-sky-600">{item.value}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full" 
                        style={{ width: `${item.value}%`, backgroundColor: item.color }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-white rounded-2xl border border-sky-100 flex gap-4 items-start">
              <Info className="w-6 h-6 text-sky-400 shrink-0" />
              <p className="text-sm text-gray-500 italic">
                Data di atas adalah ringkasan penggunaan dana periode 2024-2025. Laporan lengkap dapat diunduh melalui portal transparansi kami.
              </p>
            </div>
          </div>

          <div className="h-[400px] w-full bg-white rounded-[40px] shadow-sm border border-sky-100 flex flex-col items-center justify-center p-8">
            <h4 className="text-lg font-bold text-sky-900 mb-4">Alokasi Donasi</h4>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-sky-950">Rp 4.2M</p>
              <p className="text-sm text-gray-500 font-medium">Total Dana Tersalurkan (2025)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
