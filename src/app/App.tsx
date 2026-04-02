import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisionMission } from './components/VisionMission';
import { Programs } from './components/Programs';
import { Gallery } from './components/Gallery';
import { DonationReport } from './components/DonationReport';
import { DonationForm } from './components/DonationForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-sky-950 selection:bg-sky-100 selection:text-sky-900">
      <Toaster position="top-center" richColors />
      <Navbar />
      
      <main>
        <Hero />
        <VisionMission />
        <Programs />
        <Gallery />
        <DonationReport />
        <DonationForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
