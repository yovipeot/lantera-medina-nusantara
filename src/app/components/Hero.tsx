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
              <span className="text-sm font-semibold text-sky-700 uppercase tracking-wider">Bersama Untuk Masa Depan Mereka</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-sky-950 leading-tight mb-6">
              Berikan Senyuman, <br />
              <span className="text-sky-600 underline decoration-orange-300 underline-offset-8">Ubah Masa Depan</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Setiap anak berhak mendapatkan kasih sayang, pendidikan, dan kehidupan yang layak. Bergabunglah bersama kami untuk mewujudkan impian mereka.
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
                Dukung Program
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
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1617078913444-5bfe537fe74c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwcGxheWluZyUyMHNjaG9vbCUyMGluZG9uZXNpYXxlbnwxfHx8fDE3NzA2NDIyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Anak-anak bahagia"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-sky-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Heart className="text-emerald-600 fill-current" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-sky-950">Rp 2.4M+</p>
                  <p className="text-xs text-gray-500 font-medium">Dana Tersalurkan</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
