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
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('galeria');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedObra, setSelectedObra] = useState(null);

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
    },
    {
      id: 2,
      title: 'Retrato Realista a Grafite',
      categoria: 'Grafite / Lápis',
      tecnica: 'Lápis de grafite e carvão sobre papel',
      dimensoes: '42 x 29,7 cm (A3)',
      tempo: '65 horas de execução',
      ano: '2026',
      status: 'Disponível',
      imagem: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800',
      descricao:
        'Exploração da anatomia facial, contrastes dramáticos de luz e sombra e expressão humana autêntica através do traço realista.'
    },
    {
      id: 3,
      title: 'Estudo de Expressão e Micro-texturas',
      categoria: 'Grafite / Lápis',
      tecnica: 'Grafite sobre papel Fabriano',
      dimensoes: '30 x 40 cm',
      tempo: '80 horas de execução',
      ano: '2026',
      status: 'Coleção Privada',
      imagem: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800',
      descricao:
        'Obra centrada na emoção silenciosa e nos detalhes quase impercetíveis da pele e do olhar, elevando o desenho a lápis a uma experiência sensorial.'
    },
    {
      id: 4,
      title: 'Composição Cromática em Tela',
      categoria: 'Pintura a Óleo',
      tecnica: 'Óleo sobre tela esticada',
      dimensoes: '80 x 60 cm',
      tempo: 'Pintura em camadas',
      ano: '2026',
      status: 'Disponível',
      imagem: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=800',
      descricao:
        'Trabalho pictórico a óleo que combina profundidade cromática, pinceladas expressivas e equilíbrio entre o figurativo e o contemporâneo.'
    }
  ];

  const whatsappNumber = '+2385844254';

  const categorias = ['Todas', 'Grafite / Lápis', 'Pintura a Óleo'];

  const obrasFiltradas =
    selectedCategory === 'Todas'
      ? obras
      : obras.filter((obra) => obra.categoria === selectedCategory);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500/30">
      {/* Navegação Superior */}
      <header className="border-b border-stone-800/80 bg-stone-950/85 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-serif font-bold tracking-widest text-amber-400">
              ART OLIVEIRA
            </h1>
            <p className="text-[11px] text-stone-400 tracking-[0.2em] uppercase mt-0.5">
              Arte Realista • Lápis &amp; Pintura a Óleo
            </p>
          </div>

          <nav className="flex gap-2 bg-stone-900/90 p-1.5 rounded-full border border-stone-800">
            <button
              onClick={() => setActiveTab('galeria')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'galeria'
                  ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 font-semibold'
                  : 'text-stone-400 hover:text-stone-100'
              }`}
            >
              Galeria de Obras
            </button>
            <button
              onClick={() => setActiveTab('sobre')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'sobre'
                  ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 font-semibold'
                  : 'text-stone-400 hover:text-stone-100'
              }`}
            >
              Sobre o Artista
            </button>
          </nav>
        </div>
      </header>

      {/* Banner / Hero Section */}
      <section className="relative overflow-hidden border-b border-stone-900 bg-gradient-to-b from-stone-900/60 via-stone-950 to-stone-950">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-5">
            <Sparkles size={14} /> Portfólio Oficial • Cabo Verde
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-100 max-w-3xl mx-auto leading-tight">
            Onde cada traço a lápis e cada camada a óleo ganham{' '}
            <span className="text-amber-400 italic">alma e realidade</span>.
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Retratos hiper-realistas a grafite, pinturas a óleo sobre tela e obras exclusivas criadas com rigor técnico e sensibilidade humana.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <button
              onClick={() => setActiveTab('galeria')}
              className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20"
            >
              Explorar Obras
            </button>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Visitei o teu portfólio e gostaria de falar sobre uma encomenda personalizada.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-medium text-sm transition-all inline-flex items-center gap-2"
            >
              <MessageCircle size={16} className="text-amber-400" /> Encomendar Obra
            </a>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {activeTab === 'galeria' && (
          <div>
            {/* Barra de Filtros */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-100">Coleção Selecionada</h3>
                <p className="text-xs text-stone-400 mt-1">
                  Clica em qualquer obra para ampliar e ver a ficha técnica completa
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      selectedCategory === cat
                        ? 'bg-amber-500/15 border-amber-500 text-amber-400'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grelha de Obras */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {obrasFiltradas.map((obra) => (
                <div
                  key={obra.id}
                  onClick={() => setSelectedObra(obra)}
                  className="bg-stone-900/90 border border-stone-800 rounded-2xl overflow-hidden group hover:border-amber-500/60 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="aspect-[4/5] overflow-hidden bg-stone-800 relative">
                      <img
                        src={obra.imagem}
                        alt={obra.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                      <span className="absolute top-3 left-3 bg-stone-950/85 backdrop-blur-md text-amber-400 text-xs font-medium px-3 py-1 rounded-full border border-stone-800">
                        {obra.categoria}
                      </span>

                      <span className="absolute top-3 right-3 bg-stone-950/85 backdrop-blur-md text-stone-200 p-2 rounded-full border border-stone-800 opacity-80 group-hover:opacity-100 group-hover:border-amber-400/50 transition-all">
                        <Maximize2 size={15} className="text-amber-400" />
                      </span>

                      <div className="absolute bottom-3 left-4 right-4">
                        <p className="text-xs text-amber-400/90 font-medium">{obra.dimensoes}</p>
                        <h4 className="font-serif text-xl font-bold text-white mt-0.5">{obra.title}</h4>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-stone-400 text-sm line-clamp-2 leading-relaxed">
                        {obra.descricao}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-stone-800/60">
                    <span className="text-xs text-stone-400 flex items-center gap-1.5">
                      <Clock size={13} className="text-amber-400" /> {obra.tempo}
                    </span>
                    <span className="text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Abrir obra <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sobre' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Cartão Principal do Artista */}
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative shrink-0">
                <img
                  src="https://i.postimg.cc/8PbbnpFF/IMG-4746.jpg"
                  alt="Art Oliveira"
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover border-2 border-amber-400 shadow-xl"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                  Artista Visual
                </span>
              </div>

              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
                  Biografia &amp; Visão Artística
                </p>
                <h3 className="font-serif text-3xl font-bold text-stone-100 mt-1">
                  Art Oliveira
                </h3>
                <p className="text-stone-400 text-sm mt-1">
                  Cabo Verde • Especialista em Realismo a Grafite &amp; Pintura a Óleo
                </p>

                <div className="space-y-4 text-stone-300 leading-relaxed text-sm sm:text-base mt-5">
                  <p>
                    <strong className="text-stone-100">Art Oliveira</strong> é um artista visual cabo-verdiano dedicado ao <strong className="text-amber-400 font-medium">desenho realista de alta precisão a lápis</strong> e à <strong className="text-amber-400 font-medium">pintura a óleo sobre tela</strong>. O seu trabalho nasce da obsessão pelo detalhe — desde as micro-texturas da pele e o brilho do olhar até à profundidade emocional de cada retrato.
                  </p>
                  <p>
                    Com dezenas de horas investidas em cada obra, alia o rigor técnico do grafite e do carvão à riqueza cromática da pintura a óleo e de murais de grande escala, transformando memórias, rostos e histórias em peças intemporais.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-7 justify-center md:justify-start">
                  <a
                    href="https://instagram.com/artoliveira_oficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-amber-400 border border-stone-700 text-sm font-medium transition-all"
                  >
                    <Instagram size={17} /> @artoliveira_oficial
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Vi o teu perfil no site e gostaria de falar contigo.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 text-sm font-semibold transition-all"
                  >
                    <MessageCircle size={17} /> Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Pilares do Trabalho */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-stone-900/70 border border-stone-800 rounded-2xl p-6">
                <Palette className="text-amber-400 mb-3" size={24} />
                <h4 className="font-serif text-lg font-bold text-stone-100">Técnicas Dominadas</h4>
                <p className="text-stone-400 text-sm mt-2 leading-relaxed">
                  Grafite hiper-realista sobre papel de algodão, pintura a óleo sobre tela, retratos personalizados e arte mural.
                </p>
              </div>

              <div className="bg-stone-900/70 border border-stone-800 rounded-2xl p-6">
                <Award className="text-amber-400 mb-3" size={24} />
                <h4 className="font-serif text-lg font-bold text-stone-100">Exposições &amp; Percurso</h4>
                <p className="text-stone-400 text-sm mt-2 leading-relaxed">
                  Presença em exposições em Cabo Verde, Portugal e Luxemburgo, incluindo a Bienal de Jovens Criadores da CPLP.
                </p>
              </div>

              <div className="bg-stone-900/70 border border-stone-800 rounded-2xl p-6">
                <Sparkles className="text-amber-400 mb-3" size={24} />
                <h4 className="font-serif text-lg font-bold text-stone-100">Encomendas Sob Medida</h4>
                <p className="text-stone-400 text-sm mt-2 leading-relaxed">
                  Criação de retratos exclusivos a partir de fotografias, com acompanhamento detalhado desde o esboço até à entrega.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* JANELA MODAL DE DETALHES DA OBRA (Ao clicar na foto) */}
      {selectedObra && (
        <div
          onClick={() => setSelectedObra(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-stone-900 border border-stone-700 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 relative my-8"
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedObra(null)}
              className="absolute top-4 right-4 z-10 bg-stone-950/80 hover:bg-amber-500 text-stone-200 hover:text-stone-950 p-2 rounded-full border border-stone-700 transition-colors"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Imagem Ampliada */}
            <div className="bg-stone-950 flex items-center justify-center p-4 sm:p-6">
              <img
                src={selectedObra.imagem}
                alt={selectedObra.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Ficha Técnica Completa */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedObra.categoria}
                  </span>
                  <span className="bg-stone-800 text-stone-300 text-xs px-3 py-1 rounded-full">
                    {selectedObra.status}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 mt-4">
                  {selectedObra.title}
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed mt-4">
                  {selectedObra.descricao}
                </p>

                {/* Especificações */}
                <div className="mt-6 space-y-3 border-t border-stone-800 pt-5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 flex items-center gap-2">
                      <Palette size={16} className="text-amber-400" /> Técnica
                    </span>
                    <span className="text-stone-100 font-medium text-right">{selectedObra.tecnica}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 flex items-center gap-2">
                      <Ruler size={16} className="text-amber-400" /> Dimensões
                    </span>
                    <span className="text-stone-100 font-medium">{selectedObra.dimensoes}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 flex items-center gap-2">
                      <Clock size={16} className="text-amber-400" /> Dedicação
                    </span>
                    <span className="text-stone-100 font-medium">{selectedObra.tempo}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-800">
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Gostaria de saber mais detalhes ou adquirir a obra "${encodeURIComponent(selectedObra.title)}" (${encodeURIComponent(selectedObra.tecnica)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <MessageCircle size={18} /> Consultar ou Adquirir Obra
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rodapé */}
      <footer className="border-t border-stone-900 mt-20 py-10 text-center text-stone-500 text-sm">
        <p className="font-serif text-stone-300 font-semibold tracking-wider">ART OLIVEIRA</p>
        <p className="text-xs text-stone-500 mt-1">
          Arte Realista a Lápis &amp; Pintura a Óleo • Cabo Verde
        </p>
        <p className="text-xs text-stone-600 mt-4">
          &copy; 2026 Art Oliveira. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}