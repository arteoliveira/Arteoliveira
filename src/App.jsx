import React, { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  X,
  Maximize2,
  Clock,
  Ruler,
  Palette,
  Award,
  Sparkles,
  ArrowUpRight,
  DollarSign,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('galeria');
  const [selectedObra, setSelectedObra] = useState(null);

  // Apenas a tua obra "Glitter" na galeria de arte
  const obras = [
    {
      id: 1,
      title: 'Glitter',
      categoria: 'Grafite / Lápis',
      tecnica: 'Grafite sobre papel de alta gramagem',
      dimensoes: '35,6 x 27,9 cm',
      tempo: '100 horas de execução',
      ano: '2026',
      status: 'Disponível',
      imagem: 'https://i.postimg.cc/FKwkGjR6/IMG-5824.jpg',
      descricao:
        'Um estudo aprofundado sobre luz, reflexos e micro-texturas na pele. Executado ao longo de 100 horas de trabalho minucioso a grafite, capturando o brilho e a intensidade do olhar com realismo fotográfico.'
    }
  ];

  // Tabela de preços e estilos de tatuagem personalizados
  const precosTatuagem = [
    {
      id: 1,
      estilo: 'Fine Line / Minimalista',
      tamanho: 'Pequeno (até 5-10 cm)',
      precoCVE: '3.500$00 - 6.000$00',
      precoEUR: '30€ - 55€',
      detalhes: 'Ideal para braços, pulsos ou tornozelos. Traço extremamente limpo e preciso.'
    },
    {
      id: 2,
      estilo: 'Black and Gray / Sombra',
      tamanho: 'Médio (10-20 cm)',
      precoCVE: '8.000$00 - 15.000$00',
      precoEUR: '70€ - 135€',
      detalhes: 'Inclui sombreamento suave, rastelado e contraste profundo.'
    },
    {
      id: 3,
      estilo: 'Realismo / Peças Grandes',
      tamanho: 'Grande / Projeto Personalizado',
      precoCVE: 'Sob Consulta',
      precoEUR: 'Sob Consulta',
      detalhes: 'Retratos, braços completos (sleeves) ou costas. Requer avaliação prévia.'
    }
  ];

  const whatsappNumber = '+2385844254';

  return (
    <div className="min-h-screen bg-black text-stone-100 font-sans selection:bg-amber-500/40">
      {/* Navegação Superior */}
      <header className="border-b border-amber-500/20 bg-black/90 backdrop-blur-md sticky top-0 z-40 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-serif font-extrabold tracking-widest text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              ART OLIVEIRA
            </h1>
            <p className="text-[11px] text-amber-500/80 tracking-[0.25em] uppercase mt-0.5 font-medium">
              Fine Art • Tattoos &amp; Pintura
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-2 bg-stone-900/90 p-1.5 rounded-full border border-amber-500/30">
            <button
              onClick={() => setActiveTab('galeria')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'galeria'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                  : 'text-stone-300 hover:text-amber-400'
              }`}
            >
              Galeria de Obras
            </button>
            <button
              onClick={() => setActiveTab('tatuagem')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'tatuagem'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                  : 'text-stone-300 hover:text-amber-400'
              }`}
            >
              Tatuagens &amp; Preços
            </button>
            <button
              onClick={() => setActiveTab('sobre')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'sobre'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                  : 'text-stone-300 hover:text-amber-400'
              }`}
            >
              Sobre o Artista
            </button>
          </nav>
        </div>
      </header>

      {/* Banner / Hero Section */}
      <section className="relative overflow-hidden border-b border-amber-500/20 bg-gradient-to-b from-stone-900 via-black to-black">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/40 mb-6 shadow-inner">
            <Sparkles size={14} /> Artista Visual &amp; Tatuador • Cabo Verde
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
            Onde o realismo e a precisão ganham <span className="text-amber-400 italic drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]">vida na tela e na pele</span>.
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto mt-5 text-sm sm:text-base leading-relaxed">
            Desenhos hiper-realistas a grafite, pinturas a óleo e tatuagens exclusivas com orçamento personalizado.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab('galeria')}
              className="px-7 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm transition-all shadow-xl shadow-amber-500/30 hover:scale-105"
            >
              Ver Galeria
            </button>
            <button
              onClick={() => setActiveTab('tatuagem')}
              className="px-7 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/40 font-semibold text-sm transition-all shadow-lg hover:border-amber-400"
            >
              Ver Preços &amp; Tattoos
            </button>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* SECÇÃO: GALERIA DE OBRAS */}
        {activeTab === 'galeria' && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 border-b border-stone-800 pb-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">Obras em Destaque</h3>
                <p className="text-xs text-amber-400/80 mt-1">
                  Clica na obra para ver a ficha técnica completa, dimensões e tempo de execução
                </p>
              </div>
            </div>

            {/* Grelha de Obras (Apenas a obra Glitter) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {obras.map((obra) => (
                <div
                  key={obra.id}
                  onClick={() => setSelectedObra(obra)}
                  className="bg-stone-900/90 border border-stone-800 rounded-2xl overflow-hidden group hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="aspect-[4/5] overflow-hidden bg-stone-950 relative">
                      <img
                        src={obra.imagem}
                        alt={obra.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      <span className="absolute top-3 left-3 bg-black/90 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30 shadow-lg">
                        {obra.categoria}
                      </span>

                      <span className="absolute top-3 right-3 bg-black/90 backdrop-blur-md text-amber-400 p-2 rounded-full border border-amber-500/30 opacity-90 group-hover:opacity-100 transition-all">
                        <Maximize2 size={15} />
                      </span>

                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-xs text-amber-400 font-semibold tracking-wider">{obra.dimensoes}</p>
                        <h4 className="font-serif text-xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">{obra.title}</h4>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-stone-300 text-sm line-clamp-2 leading-relaxed">
                        {obra.descricao}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-stone-800/80">
                    <span className="text-xs text-stone-400 flex items-center gap-1.5">
                      <Clock size={13} className="text-amber-400" /> {obra.tempo}
                    </span>
                    <span className="text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Ver detalhes <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECÇÃO: TATUAGENS & PREÇOS */}
        {activeTab === 'tatuagem' && (
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">Custom Tattoo Studio</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Tabela de Preços &amp; Orçamentos
              </h3>
              <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
                Consulta os valores base indicativos para os diferentes estilos de tatuagem. Podes enviar a tua ideia diretamente para fechar orçamento.
              </p>
            </div>

            {/* Tabela de Preços */}
            <div className="bg-stone-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <DollarSign className="text-amber-400" size={20} /> Estimativa de Valores
                </h4>
                <span className="text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  CVE / EUR
                </span>
              </div>

              <div className="divide-y divide-stone-800">
                {precosTatuagem.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-stone-800/40 transition-colors">
                    <div>
                      <h5 className="font-serif text-lg font-bold text-white">{item.estilo}</h5>
                      <p className="text-xs text-amber-400/90 font-medium mt-0.5">{item.tamanho}</p>
                      <p className="text-stone-400 text-sm mt-1">{item.detalhes}</p>
                    </div>
                    <div className="text-left md:text-right shrink-0">
                      <div className="text-amber-400 font-bold text-base">{item.precoCVE}</div>
                      <div className="text-xs text-stone-400">{item.precoEUR}</div>
                      <a
                        href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Gostaria de pedir um orçamento para uma tatuagem de estilo: ${encodeURIComponent(item.estilo)} (${encodeURIComponent(item.tamanho)}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold transition-all shadow-md"
                      >
                        <MessageCircle size={13} /> Orçamento via WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Informação adicional de segurança e higiene */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
                <ShieldCheck className="text-amber-400 mb-3" size={24} />
                <h4 className="font-serif text-base font-bold text-white">Higiene &amp; Segurança</h4>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Material esterilizado, agulhas descartáveis de uso único e ambiente totalmente higienizado para garantir a máxima segurança.
                </p>
              </div>

              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
                <Sparkles className="text-amber-400 mb-3" size={24} />
                <h4 className="font-serif text-base font-bold text-white">Stencils Exclusivos</h4>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Desenho prévio de stencils em linha e ponto (dotwork) adaptados exatamente ao formato do corpo do cliente.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECÇÃO: SOBRE O ARTISTA */}
        {activeTab === 'sobre' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-stone-900 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative shrink-0">
                <img
                  src="https://i.postimg.cc/8PbbnpFF/IMG-4746.jpg"
                  alt="Art Oliveira"
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover border-2 border-amber-400 shadow-2xl"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-[11px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                  Artista Visual &amp; Tatuador
                </span>
              </div>

              <div className="text-center md:text-left relative z-10">
                <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
                  Biografia &amp; Percurso
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  Art Oliveira
                </h3>
                <p className="text-amber-500/80 text-sm mt-1 font-medium">
                  Cabo Verde • Realismo, Pintura &amp; Custom Tattoos
                </p>

                <div className="space-y-4 text-stone-300 leading-relaxed text-sm sm:text-base mt-5">
                  <p>
                    <strong className="text-white">Art Oliveira</strong> é um artista visual cabo-verdiano especializado em <strong className="text-amber-400 font-semibold">desenho realista a lápis</strong>, <strong className="text-amber-400 font-semibold">pintura a óleo</strong> e <strong className="text-amber-400 font-semibold">tatuagens personalizadas</strong>. Cada trabalho reflete uma busca constante pela perfeição técnica e expressão profunda.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-7 justify-center md:justify-start">
                  <a
                    href="https://instagram.com/artoliveira_oficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-800 text-amber-400 border border-amber-500/40 text-sm font-bold transition-all shadow-md"
                  >
                    <Instagram size={17} /> @artoliveira_oficial
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Vi o teu perfil no site e gostaria de falar contigo.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black text-sm font-bold transition-all shadow-lg shadow-amber-500/20"
                  >
                    <MessageCircle size={17} /> Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* JANELA MODAL DE DETALHES DA OBRA */}
      {selectedObra && (
        <div
          onClick={() => setSelectedObra(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-stone-900 border border-amber-500/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 relative my-8"
          >
            <button
              onClick={() => setSelectedObra(null)}
              className="absolute top-4 right-4 z-10 bg-black hover:bg-amber-400 text-amber-400 hover:text-black p-2.5 rounded-full border border-amber-500/40 transition-colors shadow-lg"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="bg-black flex items-center justify-center p-4 sm:p-6 border-b md:border-b-0 md:border-r border-stone-800">
              <img
                src={selectedObra.imagem}
                alt={selectedObra.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {selectedObra.categoria}
                  </span>
                  <span className="bg-stone-950 text-amber-400 border border-amber-500/30 text-xs px-3 py-1 rounded-full font-medium">
                    {selectedObra.status}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mt-4">
                  {selectedObra.title}
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed mt-4">
                  {selectedObra.descricao}
                </p>

                <div className="mt-6 space-y-3 border-t border-stone-800 pt-5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 flex items-center gap-2">
                      <Palette size={16} className="text-amber-400" /> Técnica
                    </span>
                    <span className="text-white font-medium text-right">{selectedObra.tecnica}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 flex items-center gap-2">
                      <Ruler size={16} className="text-amber-400" /> Dimensões
                    </span>
                    <span className="text-white font-medium">{selectedObra.dimensoes}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 flex items-center gap-2">
                      <Clock size={16} className="text-amber-400" /> Dedicação
                    </span>
                    <span className="text-white font-medium">{selectedObra.tempo}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-800">
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Gostaria de saber mais detalhes ou adquirir a obra "${encodeURIComponent(selectedObra.title)}" (${encodeURIComponent(selectedObra.tecnica)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 hover:scale-[1.02]"
                >
                  <MessageCircle size={18} /> Consultar ou Adquirir Obra
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rodapé */}
      <footer className="border-t border-amber-500/20 mt-20 py-10 text-center text-stone-500 text-sm bg-black">
        <p className="font-serif text-amber-400 font-bold tracking-wider text-base">ART OLIVEIRA</p>
        <p className="text-xs text-stone-400 mt-1">
          Arte Realista a Lápis, Pintura &amp; Tattoos • Cabo Verde
        </p>
        <p className="text-xs text-stone-600 mt-4">
          &copy; 2026 Art Oliveira. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}