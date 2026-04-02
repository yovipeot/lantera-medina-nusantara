import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Target, Users } from 'lucide-react';

export const VisionMission = () => {
  const missions = [
    {
      title: 'Akses Pendidikan',
      desc: 'Memastikan setiap anak mendapatkan fasilitas belajar yang layak dan berkualitas.',
      icon: <Sparkles className="w-8 h-8 text-sky-500" />,
      bg: 'bg-sky-50',
    },
    {
      title: 'Kesehatan & Nutrisi',
      desc: 'Memberikan asupan gizi seimbang dan layanan kesehatan berkala bagi anak-anak.',
      icon: <Target className="w-8 h-8 text-emerald-500" />,
      bg: 'bg-emerald-50',
    },
    {
      title: 'Kesejahteraan Sosial',
      desc: 'Menciptakan lingkungan yang aman dan penuh kasih sayang untuk pertumbuhan mental.',
      icon: <Users className="w-8 h-8 text-orange-500" />,
      bg: 'bg-orange-50',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Visi & Misi Kami</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-sky-950 mb-6">
            Membangun Masa Depan yang Lebih Cerah, <br className="hidden md:block" /> Satu Anak pada Satu Waktu
          </h3>
          <p className="text-gray-600 text-lg">
            Kami percaya bahwa setiap anak adalah benih harapan yang harus kita jaga bersama. Yayasan Peduli Anak hadir sebagai jembatan kebaikan bagi mereka.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`${m.bg} p-8 rounded-[32px] border border-transparent hover:border-white hover:shadow-xl transition-all duration-300`}
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {m.icon}
              </div>
              <h4 className="text-xl font-bold text-sky-900 mb-4">{m.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-sky-900 rounded-[40px] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-800 rounded-full -mr-20 -mt-20 blur-3xl opacity-50" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-bold mb-6 italic font-serif leading-tight">
                "Visi kami adalah melihat dunia di mana tidak ada anak yang merasa sendirian dalam mengejar cita-citanya."
              </h4>
              <p className="text-sky-200 text-lg">
                — Yayasan Lantera Medina Nusantara
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="text-center px-8 py-6 border border-sky-700 rounded-3xl backdrop-blur-sm">
                <p className="text-5xl font-extrabold mb-2">10th</p>
                <p className="text-sky-300 font-medium">Tahun Mengabdi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
