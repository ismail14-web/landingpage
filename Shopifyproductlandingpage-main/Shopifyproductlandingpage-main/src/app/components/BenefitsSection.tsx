import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefitsLeft = [
  { id: 1, title: 'BÉNÉFICE PRINCIPAL 1', desc: 'Une résistance à toute épreuve pour vos voyages.' },
  { id: 2, title: 'BÉNÉFICE SECONDAIRE 1', desc: 'Compartiments cachés pour votre sécurité.' },
  { id: 3, title: 'BÉNÉFICE TERTIAIRE 1', desc: 'Matériaux éco-responsables et durables.' },
];

const benefitsRight = [
  { id: 4, title: 'BÉNÉFICE PRINCIPAL 2', desc: 'Design ergonomique pour un confort maximal.' },
  { id: 5, title: 'BÉNÉFICE SECONDAIRE 2', desc: 'Poche zippée facile d\'accès sur l\'avant.' },
  { id: 6, title: 'BÉNÉFICE TERTIAIRE 2', desc: 'Sangles ajustables en un clin d\'œil.' },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Pourquoi le choisir ?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Découvrez tous les avantages qui font de notre produit l'indispensable de votre quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Column */}
          <div className="flex flex-col gap-10 lg:text-right">
            {benefitsLeft.map((benefit, i) => (
              <div key={benefit.id} className="group flex flex-col items-center lg:items-end p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 lg:ml-4 flex-shrink-0">
                  <CheckCircle2 size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 font-medium">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative group mx-auto w-full max-w-sm lg:max-w-full">
            <div className="absolute inset-0 bg-red-100 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1622560481979-f5b0174242a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMG1vZGVybiUyMGJsYWNrJTIwYmFja3BhY2t8ZW58MXx8fHwxNzczNzU3MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Central Product" 
              className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-white"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 lg:text-left">
            {benefitsRight.map((benefit, i) => (
              <div key={benefit.id} className="group flex flex-col items-center lg:items-start p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 lg:mr-4 flex-shrink-0">
                  <CheckCircle2 size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 font-medium">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
