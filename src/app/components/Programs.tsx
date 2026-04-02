import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const Programs = () => {
  const programs = [
    {
      title: 'Sekolah Pelangi',
      category: 'Pendidikan',
      status: 'Berjalan',
      desc: 'Program renovasi sekolah dan penyediaan alat tulis di pelosok nusantara.',
      image: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB0ZWFjaGluZyUyMGtpZHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzcwNjQyMjA3fDA',
      progress: 75,
    },
    {
      title: 'Dapur Gizi',
      category: 'Kesehatan',
      status: 'Berjalan',
      desc: 'Penyediaan 1000 paket makanan bergizi setiap minggu untuk anak-anak prasejahtera.',
      image: 'https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwY2hpbGRyZW4lMjBlYXRpbmclMjB0ZWFjaGluZyUyMGtpZHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzcwNjQyMjA3fDA',
      progress: 40,
    },
    {
      title: 'Beasiswa Harapan',
      category: 'Pendidikan',
      status: 'Selesai',
      desc: 'Penyaluran dana pendidikan untuk 500 anak yatim piatu agar tetap bisa sekolah.',
      image: 'https://images.unsplash.com/photo-1617078913444-5bfe537fe74c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwcGxheWluZyUyMHNjaG9vbCUyMGluZG9uZXNpYXxlbnwxfHx8fDE3NzA2NDIyMTF8MA',
      progress: 100,
    },
  ];

  return (
    <section id="programs" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Program Unggulan</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-sky-950">
              Bersama Menjangkau <span className="text-orange-500">Lebih Banyak</span> Senyum
            </h3>
          </div>
          <button className="text-sky-600 font-bold flex items-center gap-2 group">
            Lihat Semua Program
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                  <span className="text-xs font-bold text-sky-800 uppercase">{p.category}</span>
                </div>
                <div className={`absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-sm ${p.status === 'Berjalan' ? 'bg-emerald-50 text-emerald-700' : 'bg-sky-50 text-sky-700'}`}>
                  {p.status === 'Berjalan' ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                  <span className="text-xs font-bold">{p.status}</span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-2xl font-bold text-sky-900 mb-3">{p.title}</h4>
                <p className="text-gray-600 mb-6 flex-grow">{p.desc}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-bold text-sky-900">
                    <span>Progres Dana</span>
                    <span>{p.progress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-orange-400 rounded-full transition-all duration-1000" 
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
