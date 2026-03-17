import React from 'react';

export function AsSeenOn() {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 relative inline-block">
          <span className="bg-gray-50 px-4 relative z-10">Vu Sur</span>
          <div className="absolute top-1/2 left-[-100px] right-[-100px] h-px bg-gray-300 -z-0"></div>
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
          <span className="font-serif text-3xl font-bold tracking-tighter text-black uppercase">VOGUE</span>
          <span className="font-serif text-2xl font-semibold tracking-tight text-black italic lowercase">marie claire</span>
          <span className="font-sans text-2xl font-black tracking-widest text-pink-600 uppercase">COSMOPOLITAN</span>
          <span className="font-serif text-3xl font-light tracking-[0.2em] text-black uppercase">ELLE</span>
        </div>
      </div>
    </section>
  );
}
