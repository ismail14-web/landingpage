import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { id: 1, name: 'Alice D.', handle: '@alice_d', text: 'Je l\'utilise tous les jours pour aller au bureau. Le meilleur achat de l\'année sans aucun doute.', rating: 5 },
  { id: 2, name: 'Thomas R.', handle: '@thomas_r', text: 'La qualité est exceptionnelle. Je l\'ai emmené en voyage pendant 3 semaines et il n\'a pas bougé.', rating: 5 },
  { id: 3, name: 'Camille B.', handle: '@camille_b', text: 'Le design est magnifique, tout le monde me demande où je l\'ai acheté. Je recommande à 100%.', rating: 5 },
  { id: 4, name: 'Hugo M.', handle: '@hugo_m', text: 'Super pratique avec toutes ses poches. Exactement ce qu\'il me fallait pour mes déplacements professionnels.', rating: 5 },
  { id: 5, name: 'Sophie L.', handle: '@sophie_l', text: 'Service client au top et produit parfait. Une belle découverte pour moi qui cherchait quelque chose de durable.', rating: 5 },
];

export function CustomerReviews() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 tracking-tight text-gray-900">
          RECOMMANDÉ PAR NOS CLIENTS
        </h2>
        <p className="text-center text-gray-500 mb-16 text-lg max-w-2xl mx-auto font-medium">
          Rejoignez des milliers de clients satisfaits qui ont déjà transformé leur quotidien.
        </p>
        
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white min-w-[280px] w-[320px] md:min-w-[340px] flex-shrink-0 snap-center p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-gray-700 italic flex-grow text-lg mb-8 leading-relaxed font-medium">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 text-red-700 rounded-full flex items-center justify-center font-bold text-lg shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-400 font-medium">{review.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
