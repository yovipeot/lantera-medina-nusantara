import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-sky-50/50 rounded-l-[100px]" />
      <div className="absolute top-20 left-10 -z-10 w-20 h-20 bg-orange-100 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 -z-10 w-32 h-32 bg-emerald-100 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-sky-100 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-sm font-semibold text-sky-700 uppercase tracking-wider">Mari Jadi Jalan Kebaikan</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-sky-950 leading-tight mb-6">
              Hadiahkan harapan untuk 
              <span className="text-sky-600 underline decoration-orange-300 underline-offset-8"> Yatim dan Dhu'afa</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Yayasan Lantera Medina Nusantara menghadirkan program sosial, pendidikan, pangan, qurban dan wakaf agar bantuan yang dititipkan benar-benar menjadi nyata bagi mereka yang membutuhkan. Mari bergabung dan jadikan setiap donasi sebagai jalan kebaikan yang berkelanjutan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#donate"
                className="flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-orange-200 hover:-translate-y-1 active:scale-95"
              >
                <Heart className="w-5 h-5 fill-current" />
                Donasi Sekarang
              </a>
              <a
                href="#about"
                className="flex items-center justify-center gap-2 bg-white hover:bg-sky-50 text-sky-700 border border-sky-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 active:scale-95"
              >
                Lihat Program
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-sky-100">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${i === 1 ? '1540555700478-4be289fbecee' : i === 2 ? '1507003211169-0a1dd7228f2d' : i === 3 ? '1531123897727-8f129e1688ce' : '1554151228-14d9def656e4'}?w=100&h=100&fit=crop`}
                      alt={`Relawan ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-bold text-sky-800">1,200+</span> relawan telah bergabung
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative border border-amber-100 rounded-3xl p-8 bg-amber-100/70"
          >
            <div className="space-y-6">
              {/* Info Header */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full">
                <span className="text-sm font-bold text-amber-900 uppercase tracking-wider">Tentang Yayasan</span>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-sky-950 leading-tight mb-8">
                Gerakan kecil Anda bisa menjadi cahaya besar bagi sesama.
              </h2>

              {/* 4 Boxes Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                >
                  <p className="text-4xl font-extrabold text-emerald-600 mb-2">7 Program</p>
                  <p className="text-sm text-gray-600">Program kemanusiaan yang sudah berjalan.</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                >
                  <p className="text-4xl font-extrabold text-emerald-600 mb-2">2021</p>
                  <h4 className="text-xl font-bold text-sky-900 mb-2">Tahun Legalitas</h4>
                  <p className="text-sm text-gray-600">Yayasan terdaftar resmi.</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                >
                  <h4 className="text-2xl font-bold text-emerald-600 mb-2">Nasional</h4>
                  <p className="text-sm text-gray-600">Semangat berbagi hingga pelosok negeri.</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                >
                  <h4 className="text-2xl font-bold text-emerald-600 mb-2">Amanah</h4>
                  <p className="text-sm text-gray-600">Berlandaskan kepedulian dan kebermanfaatan.</p>
                </motion.div>
              </div>

              {/* Program Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['Khitanan Massal', 'Senyum Yatim', 'Santri Berdaya', 'Qurban Berbagi', 'Wakaf Quran', 'Jumat Berbagi'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-white-100 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
