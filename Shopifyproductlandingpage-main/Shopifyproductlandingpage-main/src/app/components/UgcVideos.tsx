import React from 'react';
import { Play } from 'lucide-react';

const ugcImages = [
  "https://images.unsplash.com/photo-1758274251796-2962562d7954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWlsaW5nJTIwY2FycnlpbmclMjBiYWd8ZW58MXx8fHwxNzczNzU3MTMwfDA&ixlib=rb-4.1.0&q=80&w=800",
  "https://images.unsplash.com/photo-1708339624717-09738b9af089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxraW5nJTIwb3V0c2lkZSUyMHdpdGglMjBiYWNrcGFja3xlbnwxfHx8fDE3NzM3NTcxMzB8MA&ixlib=rb-4.1.0&q=80&w=800",
  "https://images.unsplash.com/photo-1557275099-861f0a0f5f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwYmFja3BhY2slMjBjaXR5fGVufDF8fHx8MTc3Mzc1NzEzMHww&ixlib=rb-4.1.0&q=80&w=800",
  "https://images.unsplash.com/photo-1762933108125-9fe581c43e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwYmFja3BhY2slMjB0cmF2ZWx8ZW58MXx8fHwxNzczNjg1Mjc2fDA&ixlib=rb-4.1.0&q=80&w=800"
];

export function UgcVideos() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-12 tracking-tight">
          ILS L'ONT ADOPTÉ. ET VOUS ?
        </h2>
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {ugcImages.map((src, i) => (
            <div 
              key={i} 
              className="relative min-w-[280px] w-[280px] h-[450px] md:min-w-[320px] md:w-[320px] md:h-[500px] flex-shrink-0 snap-center rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`UGC video ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="text-white ml-1" fill="currentColor" size={28} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold shadow-md text-gray-900">
                  <span className="text-red-500">@utilisateur_{i+1}</span>
                  <p className="text-xs text-gray-600 mt-1">« C'est devenu mon indispensable pour tous les jours... »</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
