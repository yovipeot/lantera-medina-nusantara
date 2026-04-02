import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Gallery = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?w=800&q=80',
      title: 'Edukasi Luar Ruangan',
      size: 'md:col-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?w=800&q=80',
      title: 'Makan Siang Bersama',
      size: ''
    },
    {
      src: 'https://images.unsplash.com/photo-1617078913444-5bfe537fe74c?w=800&q=80',
      title: 'Kegembiraan Belajar',
      size: ''
    },
    {
      src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&q=80',
      title: 'Wajah Masa Depan',
      size: 'md:col-span-2'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Galeri Dokumentasi</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-sky-950">Dampak Nyata Dari Dukungan Anda</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative group overflow-hidden rounded-[32px] h-80 ${img.size}`}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-bold text-xl">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
