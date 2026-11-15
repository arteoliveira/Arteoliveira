import React, { useState } from 'react';
import { Palette, Sparkles, MessageCircle, Instagram, Send, Shield, Image as ImageIcon } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('galeria');

  const obras = [
    { id: 1, title: 'Glitter (35,6x27,9 cm - 100h)', categoria: 'Grafite sobre Papel', imagem: 'https://i.postimg.cc/FKwkGjR6/IMG-5824.jpg' },
    { id: 2, title: 'Retrato Realista a Grafite', categoria: 'Desenho', imagem: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Estudo de Expressão e Micro-texturas', categoria: 'Retrato', imagem: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Abstrato em Tela', categoria: 'Pintura', imagem: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=800' }
  ];

  const whatsappNumber = "+2385844254";

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500/30">
      <header className="border-b border-stone-800 bg-stone-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-serif font-bold tracking-wider text-amber-400">ART OLIVEIRA</h1>
            <p className="text-xs text-stone-400 tracking-widest uppercase">Fine Art &amp; Portfólio</p>
          </div>
          <nav className="flex gap-2">
            <button
              onClick={() => setActiveTab('galeria')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'galeria'
                  ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
              }`}
            >
              Galeria de Obras
            </button>
            <button
              onClick={() => setActiveTab('sobre')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'sobre'
                  ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
              }`}
            >
              Sobre o Artista
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'galeria' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {obras.map((obra) => (
              <div key={obra.id} className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden group hover:border-amber-500/50 transition-all">
                <div className="aspect-square overflow-hidden bg-stone-800 relative">
                  <img
                    src={obra.imagem}
                    alt={obra.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-sm text-amber-400 text-xs px-3 py-1 rounded-full border border-stone-800">
                    {obra.categoria}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-stone-100 mb-3">{obra.title}</h3>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira, gostaria de saber mais sobre a obra: ${encodeURIComponent(obra.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-medium"
                  >
                    <MessageCircle size={16} /> Consultar disponibilidade
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
                <a
                  href="https://instagram.com/artoliveira_oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Instagram size={18} /> @artoliveira_oficial
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-stone-800 mt-20 py-8 text-center text-stone-500 text-sm">
        <p>&copy; 2026 Art Oliveira. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}