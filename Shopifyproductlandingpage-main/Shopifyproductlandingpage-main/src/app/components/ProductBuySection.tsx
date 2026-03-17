import React, { useState } from 'react';
import { ShieldCheck, Truck, RefreshCw, Star, Info } from 'lucide-react';

export function ProductBuySection() {
  const [selectedBundle, setSelectedBundle] = useState(1);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Product Images */}
          <div className="flex flex-col gap-6 sticky top-10">
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1622560481979-f5b0174242a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMG1vZGVybiUyMGJsYWNrJTIwYmFja3BhY2t8ZW58MXx8fHwxNzczNzU3MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Product" 
                className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white min-w-[80px] w-20 h-20 rounded-xl p-1 cursor-pointer border-2 hover:border-red-500 transition-colors border-transparent shadow-sm flex-shrink-0 snap-start">
                  <img 
                    src="https://images.unsplash.com/photo-1622560481979-f5b0174242a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMG1vZGVybiUyMGJsYWNrJTIwYmFja3BhY2t8ZW58MXx8fHwxNzczNzU3MTEzfDA&ixlib=rb-4.1.0&q=80&w=300"
                    alt={`Thumbnail ${i}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Buy Information */}
          <div className="flex flex-col gap-10 lg:py-6">
            
            {/* Title & Reviews */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-sm font-bold tracking-widest text-red-600 uppercase">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span>En stock, expédié en 24h</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-none">
                Le Sac à Dos Quotidien Ultime
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="currentColor" strokeWidth={0} />)}
                </div>
                <span className="text-sm font-bold text-gray-500 underline decoration-dashed underline-offset-4 cursor-pointer hover:text-gray-900 transition-colors">4.9/5 (2 405 avis)</span>
              </div>
            </div>

            {/* Price & FOMO */}
            <div className="bg-gradient-to-r from-red-50 to-white border border-red-100 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-red-500 uppercase tracking-widest mb-1">Offre Spéciale</p>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-black text-gray-900">89€</span>
                  <span className="text-xl font-bold text-gray-400 line-through mb-1">129€</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide flex items-center gap-1 justify-end"><Info size={14} /> Fini dans</p>
                <div className="flex gap-2 text-xl font-black text-red-600 mt-2 font-mono">
                  <span className="bg-white px-2 py-1 rounded shadow-sm">02</span>:
                  <span className="bg-white px-2 py-1 rounded shadow-sm">14</span>:
                  <span className="bg-white px-2 py-1 rounded shadow-sm">59</span>
                </div>
              </div>
            </div>

            {/* Bundle Options */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Choisissez votre pack :</h3>
              <div className="flex flex-col gap-4">
                {[
                  { id: 1, title: '1x Sac à Dos', desc: 'L\'essentiel pour commencer.', price: '89€', tag: '' },
                  { id: 2, title: '2x Sacs à Dos', desc: 'Pour vous et un proche.', price: '149€', tag: 'ÉCONOMISEZ 29€' },
                ].map((bundle) => (
                  <label 
                    key={bundle.id} 
                    className={`relative flex items-center justify-between p-6 border-2 rounded-2xl cursor-pointer transition-all ${selectedBundle === bundle.id ? 'border-gray-900 bg-gray-900 shadow-xl scale-[1.02]' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'}`}
                    onClick={() => setSelectedBundle(bundle.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selectedBundle === bundle.id ? 'border-white' : 'border-gray-300'}`}>
                        {selectedBundle === bundle.id && <div className="w-3 h-3 bg-white rounded-full"></div>}
                      </div>
                      <div>
                        <p className={`font-bold text-lg ${selectedBundle === bundle.id ? 'text-white' : 'text-gray-900'}`}>{bundle.title}</p>
                        <p className={`text-sm mt-1 font-medium ${selectedBundle === bundle.id ? 'text-gray-300' : 'text-gray-500'}`}>{bundle.desc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-black text-xl ${selectedBundle === bundle.id ? 'text-white' : 'text-gray-900'}`}>{bundle.price}</p>
                      {bundle.tag && (
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm mt-2 inline-block ${selectedBundle === bundle.id ? 'bg-red-500 text-white' : 'bg-green-100 text-green-800'}`}>
                          {bundle.tag}
                        </span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-6 rounded-2xl shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest flex flex-col items-center justify-center">
              <span>Ajouter au panier - 89€</span>
              <span className="text-xs font-medium text-red-200 mt-1 normal-case tracking-normal">Paiement 100% sécurisé</span>
            </button>

            {/* TRUST PAIEMENT & Icons */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="flex flex-col items-center text-center gap-3 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 group-hover:text-red-500 group-hover:scale-110 transition-all border border-gray-100">
                  <ShieldCheck size={24} strokeWidth={2.5} />
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Paiement Sécurisé</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 group-hover:text-red-500 group-hover:scale-110 transition-all border border-gray-100">
                  <Truck size={24} strokeWidth={2.5} />
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Livraison Rapide</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 group-hover:text-red-500 group-hover:scale-110 transition-all border border-gray-100">
                  <RefreshCw size={24} strokeWidth={2.5} />
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Retours 30 Jours</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
