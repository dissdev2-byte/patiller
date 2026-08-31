import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { StockSection } from './components/StockSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track scroll position to highlight active navbar section
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'sobre', 'estoque', 'endereco'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-[#081A33] text-[#081A33] flex flex-col font-sans selection:bg-[#FF4F87] selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Differentials / Features Section */}
        <Features />

        {/* 3. About Us Section (Sobre a PATILLER) */}
        <About />

        {/* 4. Stock & Catalog Section (Nosso Estoque) */}
        <StockSection />

        {/* 5. Instagram Community Section (Acompanhe a PATILLER) */}
        <InstagramSection />

        {/* 6. Location & Address Section (Onde Estamos) */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
