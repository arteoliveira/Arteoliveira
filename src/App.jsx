import React, { useState } from 'react';
import { Palette, Sparkles, MessageCircle, Instagram, Send, Shield, Image as ImageIcon } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('galeria');

  const obras = [
    { id: 1, title: 'Retrato Realista a Grafite', categoria: 'Desenho', imagem: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Estudo de Expressão e Micro-texturas', categoria: 'Retrato', imagem: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Abstrato em Tela', categoria: 'Pintura', imagem: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80' }
  ];

  const whatsappNumber = "+238 5844254";

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      <header className="border-b border-stone-800 bg-stone-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-serif font-bold tracking-wider text-amber-400">ART OLIVEIRA</h1>
            <p className="text-xs text-stone-400 tracking-widest uppercase">Fine Art & Design</p>
          </div>
          <div className="flex gap-3">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20encomendar%20uma%20obra%20personalizada.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition"
            >
              <MessageCircle size={16} /> Encomendar
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center my-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-stone-100">
            Realismo, Emoção e Expressão Visual
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-base">
            Portfólio oficial de Art Oliveira. Especializado em retrato realista a grafite, pintura em tela e experimentação visual contemporânea.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('galeria')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'galeria' ? 'bg-amber-500 text-stone-950 font-semibold' : 'bg-stone-900 text-stone-400 hover:text-white'}`}
          >
            Galeria de Obras
          </button>
          <button 
            onClick={() => setActiveTab('sobre')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'sobre' ? 'bg-amber-500 text-stone-950 font-semibold' : 'bg-stone-900 text-stone-400 hover:text-white'}`}
          >
            Sobre o Artista
          </button>
        </div>

        {activeTab === 'galeria' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {obras.map((obra) => (
              <div key={obra.id} className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden group shadow-lg hover:border-amber-500/50 transition">
                <div className="h-64 overflow-hidden relative">
                  <img>
                    src={obra.imagem} 
                    alt={obra.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-stone-950/80 text-amber-400 text-xs px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {obra.categoria}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold mb-2">{obra.title}</h3>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Olá,%20tenho%20interesse%20na%20obra:%20${encodeURIComponent(obra.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-medium"
                  >
                    <MessageCircle size={15} /> Consultar Disponibilidade
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        
        {activeTab === 'sobre' && (
  <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl flex flex-col md:flex-row items-center gap-6">
    <img 
      src="https://i.postimg.cc/8PbbnpFF/IMG-4746.jpg" 
      alt="Art Oliveira" 
      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-amber-400 shadow-md"
    />
    <div>
      <h3 className="font-serif text-2xl font-bold mb-2 text-amber-400 text-center md:text-left">Art Oliveira</h3>
      <p className="text-stone-300 leading-relaxed text-sm md:text-base text-center md:text-left mb-4">
        Artista visual profissional focado em retrato realista de alta precisão com grafite, micro-texturas e experimentação figurativa.
      </p>
      <div className="flex gap-4 mt-6 justify-center md:justify-start">
        <a href="https://instagram.com/artoliveira_oficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
          <Instagram size={18} /> @artoliveira_oficial
        </a>
      </div>
    </div>
  </div>
)}

        <a href="https://instagram.com/artoliveira_oficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
          <Instagram size={18} /> @artoliveira_oficial
        </a>
      </div>
    </div>
  </div>
)}
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/artoliveira_oficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-stone-800 px-4 py-2 rounded-lg text-sm hover:bg-stone-700 transition">
                <Instagram size={18} /> @artoliveira_oficial
              </a>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-stone-800 mt-20 py-8 text-center text-xs text-stone-500">
        <p>&copy; 2026 Art Oliveira. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
