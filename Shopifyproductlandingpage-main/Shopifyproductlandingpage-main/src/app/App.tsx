import React from 'react';
import { TrustBar } from './components/TrustBar';
import { HeroSection } from './components/HeroSection';
import { AsSeenOn } from './components/AsSeenOn';
import { BenefitsSection } from './components/BenefitsSection';
import { UgcVideos } from './components/UgcVideos';
import { CustomerReviews } from './components/CustomerReviews';
import { ProductBuySection } from './components/ProductBuySection';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TrustBar />
      <HeroSection />
      <AsSeenOn />
      <BenefitsSection />
      <UgcVideos />
      <CustomerReviews />
      <ProductBuySection />
      
      <footer className="bg-gray-950 text-gray-400 py-12 text-center text-sm">
        <p>&copy; 2026 Nom de votre marque. Tous droits réservés.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition">Mentions légales</a>
          <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
          <a href="#" className="hover:text-white transition">CGV</a>
        </div>
      </footer>
    </div>
  );
}
