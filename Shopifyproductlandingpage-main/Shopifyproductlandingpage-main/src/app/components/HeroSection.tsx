import React from 'react';

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center bg-gray-100 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1762933108125-9fe581c43e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwYmFja3BhY2slMjB0cmF2ZWx8ZW58MXx8fHwxNzczNjg1Mjc2fDA&ixlib=rb-4.1.0&q=80&w=2000"
        alt="Person travelling with backpack"
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight uppercase tracking-tight">
          BANNIÈRE BÉNÉFICE PRINCIPAL
        </h1>
        <p className="text-xl md:text-3xl font-semibold text-red-500 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full inline-block">
          Vendez un résultat.. pas votre produit
        </p>
        <p className="text-lg text-gray-200 mt-4 max-w-2xl font-medium">
          Transformez votre quotidien. Plus d'organisation, moins de stress. Profitez de chaque instant sans vous soucier de vos affaires.
        </p>
        <button className="mt-8 bg-red-600 hover:bg-red-700 transition text-white text-lg font-bold py-4 px-12 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-105 active:scale-95 duration-200 uppercase tracking-widest">
          Découvrir l'offre
        </button>
      </div>
    </section>
  );
}
