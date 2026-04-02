import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                <Heart className="text-white w-6 h-6 fill-current" />
              </div>
              <div className="leading-tight">
                <span className="text-xl font-bold block">Lantera</span>
                <span className="text-sm font-medium text-sky-400 block tracking-wide">Medina Nusantara</span>
              </div>
            </div>
            <p className="text-sky-200/70 leading-relaxed">
              Kami adalah organisasi nirlaba yang mendedikasikan diri untuk masa depan anak-anak Indonesia yang lebih baik melalui pendidikan dan kesehatan.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-sky-900 flex items-center justify-center hover:bg-orange-400 transition-colors group">
                  <Icon className="w-5 h-5 text-sky-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-sky-800 pb-2 inline-block">Menu Cepat</h4>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Program Kerja', 'Donasi', 'Laporan Transparansi', 'Blog & Berita'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sky-200/70 hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight className="w-4 h-4 text-sky-600 group-hover:text-sky-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-sky-800 pb-2 inline-block">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start text-sky-200/70">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                <span>Jl. Kenari No. 123, Jakarta Selatan, Indonesia 12345</span>
              </li>
              <li className="flex gap-4 items-center text-sky-200/70">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <span>+62 21 555 1234</span>
              </li>
              <li className="flex gap-4 items-center text-sky-200/70">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <span>info@pedulianak.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-sky-800 pb-2 inline-block">Newsletter</h4>
            <p className="text-sky-200/70 text-sm mb-6">Dapatkan update terbaru mengenai program dan dokumentasi kegiatan kami.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="w-full bg-sky-900 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-sky-400 outline-none placeholder:text-sky-700"
              />
              <button className="w-full bg-sky-600 hover:bg-sky-500 py-3 rounded-xl font-bold transition-colors">
                Berlangganan
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-sky-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sky-200/50">
          <p>© 2026 Yayasan Peduli Anak. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sky-200 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-sky-200 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
