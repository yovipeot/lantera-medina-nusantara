import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import LogoLantera from '../../assets/LogoLantera.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Program', href: '#programs' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Laporan', href: '#report' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div>
              <img src={LogoLantera} alt="Lantera" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <span className="text-xl font-bold text-sky-900 block leading-tight">Lantera</span>
              <span className="text-sm font-medium text-sky-600 block leading-tight tracking-wide">Medina Nusantara</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-sky-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Donasi Sekarang
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-600 font-medium px-4 py-2 hover:bg-sky-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#donate"
            className="block bg-orange-400 text-white text-center px-4 py-3 rounded-xl font-semibold mx-4"
            onClick={() => setIsOpen(false)}
          >
            Donasi Sekarang
          </a>
        </div>
      )}
    </nav>
  );
};
