import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const Programs = () => {
  const programs = [
    {
      title: 'Khitanan Massal untuk Yatim & Dhu\'afa',
      category: 'Khitan',
      status: 'Berjalan',
      desc: 'Program khitanan massal ini ditujukan untuk membantu anak-anak yatim dan dhu\'afa agar mendapatkan layanan kesehatan yang layak, aman dan membahagiakan.',
      image: 'https://pro.kutaitimurkab.go.id/wp-content/uploads/2023/12/IMG-20231230-WA0067-1024x682.jpg',
      formUrl: 'https://bit.ly/LembarKomitmenTabunganSedekahQurban',
      progress: 75,
    },
    {
      title: 'Program Senyum Yatim',
      category: 'Peduli Yatim',
      status: 'Berjalan',
      desc: 'Program ini berupa pemberian beasiswa dan santunan yatim agar mereka tetap memiliki semnangat belajar, dukungan biaya pendidikan dan perhatian yang layak.',
      image: 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/new_artikel/ODE3MTE3MjA2MTY0Mzg.jpg',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfExampleDapurGizi/viewform',
      progress: 40,
    },
    {
      title: 'Program Santri Berdaya Yatim dan Dhu\'afa',
      category: 'Pendidikan',
      status: 'Selesai',
      desc: 'Program pembinaan dan pemberdayaan ini ditujukan untuk membantu yatim dan dhu\'fa tumbuh menjadi generasi yang berilmu, mandiri dan berakhlak baik.',
      image: 'https://sulut.baznas.go.id/_next/image?url=https%3A%2F%2Fbucket-api.baznas.go.id%2Fbucket-api%2Ffile%3Fbucket%3Dbzn-fdr-smb-p5739641%26file%3Dattachments%2Fberita%2F1772548918082175244_928-6SzVA0Vm%2Cjpeg&w=1920&q=75',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfExampleBeasiswaHarapan/viewform',
      progress: 100,
    },
        {
      title: 'Penuntasan Kemiskinan Dhu\'afa',
      category: 'Sosial Ekonomi',
      status: 'Berjalan',
      desc: 'Program ini berfokus pada pelatihan, bantuan kebutuhan pokok, serta pemberian sembako guna meringankan beban hidup dan membuka peluang kehidupan yang lebih layak.',
      image: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/399e/live/db5c22d0-6c99-11f0-8dbd-f3d32ebd3327.jpg.webp',
      formUrl: 'https://bit.ly/LembarKomitmenTabunganSedekahQurban',
      progress: 75,
    },
    {
      title: 'Program Qurban Berbagi ke Pelosok Negeri',
      category: 'Qurban Berbagi',
      status: 'Berjalan',
      desc: 'Melalui program ini, hewan qurban disalurkan ke wilayah yang membutuhkan agar lebih banyak masyarakat dapat merasakan kebahagiaan idul Adha.',
      image: 'https://pict.sindonews.com/dyn/732/pena/news/2021/07/18/170/486342/cegah-kerumunan-pengelola-tak-bagikan-daging-kurban-di-masjid-al-azhara-jjq.jpg',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfExampleDapurGizi/viewform',
      progress: 40,
    },
    {
      title: 'Wakaf Qur\'an',
      category: 'Wakaf',
      status: 'Berjalan',
      desc: 'Program wakaf Al-Qur\'an dihadirkan untuk mendukung kebutuhan ibadah dan pembelajaran Al-Qur\'an bagi masyarakat, santri dan penerima manfaat lainnya.',
      image: 'https://alhilal.or.id/wp-content/uploads/2024/12/Wakaf-Quran-Iqra-dan-Buku-Buku-Islam-Telah-Diterima-Saudara-Muslim-di-Papua-1.jpg',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfExampleBeasiswaHarapan/viewform',
      progress: 100,
    },
    {
      title: 'Jum\'at Berbagi',
      category: 'Berbagi',
      status: 'Berjalan',
      desc: 'Jum\'at Berbagi merupakan program rutin untuk menyalurkan makanan, bantuan sederhana dan kepedulian kepada mereka yang membutuhkan.',
      image: 'https://www.instagram.com/p/Cc87FY5vRV7/?img_index=3',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfExampleBeasiswaHarapan/viewform',
      progress: 100,
    },
  ];

  return (
    <section id="programs" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-2 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Program Unggulan</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-sky-950">
              Program Nyata yang <span className="text-orange-500">Mengubah Bantuan</span> Menjadi Manfaat
            </h3>
          </div>

          {/* <button className="text-sky-600 font-bold flex items-center gap-2 group">
            Lihat Semua Program
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button> */}
        </div>

        <p className="text-gray-600 text-lg mb-8">
          Setiap program Yayasan Lantera Medina Nusantara dirancang untuk menjawab kebutuhan yang nyata di tengah masyarakat. Mulai dari pendidikan, kesehatan, kebutuhan pokok hingga ibadah, seluruh program diarahkan untuk menghadirkan harapan baru bagi yatim dan dhu'afa. Dengan transparansi dan akuntabilitas, kami memastikan setiap dukungan yang diberikan benar-benar menjadi manfaat yang dirasakan langsung oleh mereka yang membutuhkan. Mari bersama-sama mewujudkan perubahan positif melalui program-program kami yang penuh kepedulian dan kebermanfaatan.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <button
                type="button"
                onClick={() => window.open(p.formUrl, '_blank', 'noopener,noreferrer')}
                className="relative h-64 overflow-hidden cursor-pointer text-left"
              >
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
              </button>
              
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
