import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Instagram,
  X,
  Maximize2,
  Clock,
  Ruler,
  Palette,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  PenTool,
  Layers,
  Send,
  ShoppingBag,
  CheckCircle,
  Tag,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Calendar,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('galeria');
  const [selectedObra, setSelectedObra] = useState(null);
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [tattooZoom, setTattooZoom] = useState(1);

  // Assistente de respostas rápidas (FAQ interativo)
  const [selectedFaqId, setSelectedFaqId] = useState('blackwork');

  // Formulário de agendamento de tattoo
  const [bookingForm, setBookingForm] = useState({
    nome: '',
    ideia: '',
    tamanho: '',
    zona: '',
    dataPreferida: ''
  });

  // Carrega automaticamente as fontes artísticas sofisticadas (Cinzel + Montserrat)
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // LINK DA ARTE DE FUNDO
  const imagemFundoSite = 'https://i.postimg.cc/XNKJRMq8/IMG-5861.jpg';

  // Galeria de Obras (Desenhos & Pinturas)
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
        'Um estudo aprofundado sobre luz, reflexos e micro-texturas na pele. Executado ao longo de 100 horas de trabalho minucioso a grafite, capturando o brilho e a intensidade do olhar com realismo.'
    }
  ];

  // PORTFÓLIO DE TATUAGENS REALIZADAS
  const tatuagensRealizadas = [
    {
      id: 1,
      titulo: 'Realismo Blackwork • Projeto 01',
      estilo: 'Realismo Blackwork',
      local: 'Projeto Realizado',
      imagem: 'https://i.postimg.cc/FHhQk55d/IMG-5299.jpg',
      descricao: 'Trabalho focado em contraste, transições de sombra e definição de detalhes na pele.'
    }
  ];

  // Respostas automáticas rápidas
  const respostasRapidas = [
    {
      id: 'blackwork',
      pergunta: 'Como funciona o orçamento de tatuagem realista blackwork?',
      resposta:
        'Cada orçamento é avaliado de acordo com a tua ideia, o tamanho aproximado, a zona do corpo e o nível de detalhe. Podes usar o formulário abaixo para enviar tudo organizado para o WhatsApp.'
    },
    {
      id: 'telas',
      pergunta: 'Como são avaliados os quadros em tela?',
      resposta:
        'Na aba Encomendas & Vendas tens a tabela de referência em tela: até 90 cm de altura (20.000$ a 75.000$) e acima de 90 cm de altura (35.000$ a 90.000$), variando conforme o número de pessoas.'
    },
    {
      id: 'grafite',
      pergunta: 'Qual é o formato dos desenhos realistas a grafite?',
      resposta:
        'O formato padrão dos desenhos realistas a grafite sobre papel de alta gramagem é 35,6 x 27,9 cm, podendo também ser conversadas encomendas e diferentes estilos para explorar a arte.'
    },
    {
      id: 'acrilico',
      pergunta: 'Trabalhas com pintura acrílica?',
      resposta:
        'Sim! Faço pintura acrílica sobre diferentes superfícies, adaptando os trabalhos realistas e diferentes estilos ao suporte e à ideia pretendida.'
    }
  ];

  // Tabela oficial de preços para telas (Price List)
  const priceListTela = {
    ate90cm: [
      { qtd: '1 PESSOA NA TELA', valor: '20.000$' },
      { qtd: '2 PESSOAS', valor: '30.000$' },
      { qtd: '3 PESSOAS', valor: '40.000$' },
      { qtd: '4 PESSOAS', valor: '60.000$' },
      { qtd: '5 PESSOAS', valor: '75.000$' }
    ],
    acima90cm: [
      { qtd: '1 PESSOA NA TELA', valor: '35.000$' },
      { qtd: '2 PESSOAS', valor: '45.000$' },
      { qtd: '3 PESSOAS', valor: '55.000$' },
      { qtd: '4 PESSOAS', valor: '75.000$' },
      { qtd: '5 PESSOAS', valor: '90.000$' }
    ]
  };

  // Opções de Encomendas & Vendas de Arte
  const opcoesVendas = [
    {
      id: 'acrilico-superficies',
      titulo: 'Pintura Acrílica sobre Diferentes Superfícies',
      sub: 'Telas & Suportes Diversos',
      descricao:
        'Trabalhos realistas e em diferentes estilos para explorar a arte, feitos com pintura acrílica sobre diferentes superfícies de acordo com a ideia ou espaço pretendido.',
      formatos: [
        { nome: 'Telas e Suportes Variados', ref: 'Adaptação ao formato e estética do projeto' },
        { nome: 'Encomendas Personalizadas', ref: 'Avaliação conforme altura da obra e número de pessoas' }
      ]
    },
    {
      id: 'retratos-grafite',
      titulo: 'Desenhos Realistas a Grafite',
      sub: 'Retratos & Estudos',
      descricao:
        'Trabalhos realistas e em diferentes estilos para explorar a arte, desenvolvidos à mão com foco na expressão, luz e sombra.',
      formatos: [
        { nome: 'Formato 35,6 x 27,9 cm', ref: 'Formato oficial dos desenhos realistas a grafite sobre papel de alta gramagem' },
        { nome: 'Sob Encomenda', ref: 'Retratos personalizados a partir de fotografia em alta definição' }
      ]
    }
  ];

  // Etapas de elaboração do orçamento de tatuagem
  const etapasOrcamento = [
    {
      passo: '01',
      titulo: 'A Tua Ideia & Referências',
      descricao:
        'Envia referências ou conta a tua ideia de tatuagem realista blackwork. Partimos do conceito que queres ver na pele.'
    },
    {
      passo: '02',
      titulo: 'Tamanho & Zona do Corpo',
      descricao:
        'O orçamento considera o tamanho aproximado e a zona do corpo onde a tatuagem realista blackwork vai ser aplicada.'
    },
    {
      passo: '03',
      titulo: 'Composição & Detalhe Blackwork',
      descricao:
        'Definimos o nível de contraste, sombra, textura e composição para o resultado encaixar de forma natural e equilibrada.'
    },
    {
      passo: '04',
      titulo: 'Proposta & Agendamento',
      descricao:
        'Com os detalhes alinhados, apresento o orçamento e combinamos o desenho preparatório e a marcação da sessão.'
    }
  ];

  const whatsappNumber = '+2385844254';

  const abrirModalTatuagem = (tattoo) => {
    setSelectedTattoo(tattoo);
    setTattooZoom(1);
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const mensagem = [
      'Olá Art Oliveira! Novo pedido de agendamento de tatuagem pelo site:',
      `• Nome: ${bookingForm.nome || 'Não informado'}`,
      `• Ideia / Estilo: ${bookingForm.ideia || 'Tatuagem realista blackwork'}`,
      `• Tamanho aproximado: ${bookingForm.tamanho || 'A definir'}`,
      `• Zona do corpo: ${bookingForm.zona || 'A definir'}`,
      `• Data / Dia preferido: ${bookingForm.dataPreferida || 'A combinar'}`
    ].join('\n');

    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const faqAtiva = respostasRapidas.find((item) => item.id === selectedFaqId) || respostasRapidas[0];

  return (
    <div
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="min-h-screen bg-black text-stone-100 selection:bg-amber-500/40 relative"
    >
      {/* IMAGEM DE FUNDO VISÍVEL E EQUILIBRADA */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={imagemFundoSite}
          alt="Arte de Fundo Art Oliveira"
          className="w-full h-full object-cover opacity-50 scale-100"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
      </div>

      {/* CONTEÚDO PRINCIPAL SOBRE O FUNDO */}
      <div className="relative z-10">
        {/* Navegação Superior */}
        <header className="border-b border-amber-500/30 bg-black/85 backdrop-blur-md sticky top-0 z-40 shadow-2xl">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <h1
                style={{ fontFamily: "'Cinzel', serif" }}
                className="text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.35)]"
              >
                ART OLIVEIRA
              </h1>
              <p className="text-[10px] text-amber-400/90 tracking-[0.3em] uppercase mt-0.5 font-medium">
                Uma visão artística entre o papel e a pele
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-2 bg-black/80 p-1.5 rounded-full border border-amber-500/40 shadow-lg">
              <button
                onClick={() => setActiveTab('galeria')}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'galeria'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                    : 'text-stone-200 hover:text-amber-400'
                }`}
              >
                Galeria
              </button>
              <button
                onClick={() => setActiveTab('vendas')}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'vendas'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                    : 'text-stone-200 hover:text-amber-400'
                }`}
              >
                Encomendas &amp; Vendas
              </button>
              <button
                onClick={() => setActiveTab('tatuagem')}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'tatuagem'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                    : 'text-stone-200 hover:text-amber-400'
                }`}
              >
                Tatuagens
              </button>
              <button
                onClick={() => setActiveTab('sobre')}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'sobre'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                    : 'text-stone-200 hover:text-amber-400'
                }`}
              >
                Sobre
              </button>
            </nav>
          </div>
        </header>

        {/* Banner / Hero Section */}
        <section className="relative overflow-hidden border-b border-amber-500/20">
          <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-black/80 text-amber-400 border border-amber-500/50 mb-6 backdrop-blur-md tracking-wider uppercase shadow-md">
              <Sparkles size={14} /> Artista Visual &amp; Tatuador • Cabo Verde
            </span>
            <h2
              style={{ fontFamily: "'Cinzel', serif" }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            >
              Uma visão artística entre{' '}
              <span className="text-amber-400 drop-shadow-[0_0_25px_rgba(251,191,36,0.6)]">
                o papel e a pele
              </span>
            </h2>
            <p className="text-stone-100 max-w-2xl mx-auto mt-5 text-sm sm:text-base leading-relaxed font-medium drop-shadow">
              Desenhos realistas, pintura acrílica sobre diferentes superfícies e tatuagens realistas blackwork.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('vendas')}
                className="px-7 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm transition-all shadow-xl shadow-amber-500/30 hover:scale-105"
              >
                Encomendas &amp; Preçário
              </button>
              <button
                onClick={() => setActiveTab('tatuagem')}
                className="px-7 py-3 rounded-full bg-black/90 hover:bg-stone-900 text-amber-400 border border-amber-500/50 font-semibold text-sm transition-all shadow-lg hover:border-amber-400 backdrop-blur-md"
              >
                Tatuagens &amp; Agendamento
              </button>
            </div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* SECÇÃO: GALERIA DE OBRAS */}
          {activeTab === 'galeria' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 border-b border-amber-500/20 pb-6">
                <div>
                  <h3
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-2xl sm:text-3xl font-bold text-white tracking-wide drop-shadow"
                  >
                    Obras em Destaque
                  </h3>
                  <p className="text-xs text-amber-300 mt-1 font-medium">
                    Clica na obra para ampliar e consultar a ficha técnica completa
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {obras.map((obra) => (
                  <div
                    key={obra.id}
                    onClick={() => setSelectedObra(obra)}
                    className="bg-black/85 backdrop-blur-md border border-amber-500/30 rounded-2xl overflow-hidden group hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-2xl"
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
                          <p className="text-xs text-amber-400 font-semibold tracking-wider">
                            {obra.dimensoes}
                          </p>
                          <h4
                            style={{ fontFamily: "'Cinzel', serif" }}
                            className="text-2xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors"
                          >
                            {obra.title}
                          </h4>
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="text-stone-200 text-sm line-clamp-2 leading-relaxed font-light">
                          {obra.descricao}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-amber-500/20">
                      <span className="text-xs text-stone-300 flex items-center gap-1.5 font-medium">
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

          {/* SECÇÃO: ENCOMENDAS & VENDAS DE ARTE */}
          {activeTab === 'vendas' && (
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                  Encomendas &amp; Vendas
                </span>
                <h3
                  style={{ fontFamily: "'Cinzel', serif" }}
                  className="text-3xl sm:text-4xl font-extrabold text-white mt-2 drop-shadow"
                >
                  Trabalhos Realistas &amp; Diferentes Estilos
                </h3>
                <p className="text-stone-200 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                  Trabalhos realistas e em diferentes estilos para explorar a arte, incluindo pintura acrílica sobre diferentes superfícies e encomendas personalizadas.
                </p>
              </div>

              {/* Cartões de Encomendas */}
              <div className="grid grid-cols-1 gap-6">
                {opcoesVendas.map((opcao) => (
                  <div
                    key={opcao.id}
                    className="bg-black/90 backdrop-blur-md border border-amber-500/40 hover:border-amber-400 transition-all rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="space-y-3 flex-1">
                        <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                          <ShoppingBag size={13} /> {opcao.sub}
                        </span>
                        <h4
                          style={{ fontFamily: "'Cinzel', serif" }}
                          className="text-2xl font-bold text-white"
                        >
                          {opcao.titulo}
                        </h4>
                        <p className="text-stone-300 text-sm leading-relaxed font-light">
                          {opcao.descricao}
                        </p>

                        <div className="pt-2 space-y-2">
                          {opcao.formatos.map((fmt, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-stone-200">
                              <CheckCircle size={14} className="text-amber-400 shrink-0" />
                              <strong className="text-stone-100">{fmt.nome}:</strong> {fmt.ref}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="shrink-0 w-full md:w-auto text-center">
                        <a
                          href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Gostaria de falar sobre: ${encodeURIComponent(opcao.titulo)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full md:w-auto px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm transition-all shadow-xl shadow-amber-500/30 inline-flex items-center justify-center gap-2 hover:scale-105"
                        >
                          <MessageCircle size={18} /> Falar no WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PREÇÁRIO DE REFERÊNCIA PARA QUADROS (PRICE LIST) */}
              <div className="bg-black/90 backdrop-blur-md border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="border-b border-amber-500/20 pb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                    <Tag size={14} /> Price List • Avaliação de Quadros
                  </span>
                  <h4
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-2xl font-bold text-white mt-1"
                  >
                    Tabela de Referência em Tela
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-1 font-light">
                    Referência de valores para quadros na tela conforme a altura e o número de pessoas retratadas.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Até 90cm */}
                  <div className="bg-stone-950/80 border border-amber-500/25 rounded-2xl p-5 space-y-3">
                    <h5
                      style={{ fontFamily: "'Cinzel', serif" }}
                      className="text-base font-bold text-amber-400 tracking-wide border-b border-stone-800 pb-2"
                    >
                      ATÉ 90CM DE ALTURA
                    </h5>
                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {priceListTela.ate90cm.map((item, i) => (
                        <li key={i} className="flex items-center justify-between text-stone-200">
                          <span>{item.qtd}</span>
                          <span className="font-bold text-amber-400">{item.valor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Acima de 90cm */}
                  <div className="bg-stone-950/80 border border-amber-500/25 rounded-2xl p-5 space-y-3">
                    <h5
                      style={{ fontFamily: "'Cinzel', serif" }}
                      className="text-base font-bold text-amber-400 tracking-wide border-b border-stone-800 pb-2"
                    >
                      ACIMA DE 90 CM DE ALTURA
                    </h5>
                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {priceListTela.acima90cm.map((item, i) => (
                        <li key={i} className="flex items-center justify-between text-stone-200">
                          <span>{item.qtd}</span>
                          <span className="font-bold text-amber-400">{item.valor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECÇÃO: TATUAGENS REALISTAS BLACKWORK + GALERIA COM ZOOM + AGENDAMENTO */}
          {activeTab === 'tatuagem' && (
            <div className="max-w-5xl mx-auto space-y-14">
              {/* GALERIA DE TATUAGENS REALIZADAS */}
              <div>
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                    Portfólio na Pele
                  </span>
                  <h3
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-3xl sm:text-4xl font-extrabold text-white mt-2 drop-shadow"
                  >
                    Tatuagens Realistas Blackwork
                  </h3>
                  <p className="text-stone-200 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                    Explora alguns dos trabalhos realizados. Clica em qualquer tatuagem para abrir em alta definição e fazer zoom nos detalhes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                  {tatuagensRealizadas.map((tattoo) => (
                    <div
                      key={tattoo.id}
                      onClick={() => abrirModalTatuagem(tattoo)}
                      className="bg-black/85 backdrop-blur-md border border-amber-500/30 rounded-2xl overflow-hidden group hover:border-amber-400 transition-all duration-300 cursor-pointer shadow-2xl flex flex-col justify-between"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-stone-950 relative">
                        <img
                          src={tattoo.imagem}
                          alt={tattoo.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        <span className="absolute top-3 left-3 bg-black/90 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                          {tattoo.estilo}
                        </span>

                        <span className="absolute top-3 right-3 bg-black/90 backdrop-blur-md text-amber-400 p-2 rounded-full border border-amber-500/30 flex items-center gap-1 text-xs font-bold">
                          <ZoomIn size={15} />
                        </span>

                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-xs text-amber-400 font-semibold">{tattoo.local}</p>
                          <h4
                            style={{ fontFamily: "'Cinzel', serif" }}
                            className="text-lg font-bold text-white mt-0.5 group-hover:text-amber-300 transition-colors"
                          >
                            {tattoo.titulo}
                          </h4>
                        </div>
                      </div>

                      <div className="p-4 flex items-center justify-between border-t border-amber-500/20">
                        <span className="text-xs text-stone-300 font-light line-clamp-1">
                          {tattoo.descricao}
                        </span>
                        <span className="text-xs font-bold text-amber-400 shrink-0 ml-2 inline-flex items-center gap-1">
                          Ampliar <ZoomIn size={13} />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RESPOSTAS RÁPIDAS (INFORMAÇÕES AUTOMÁTICAS) */}
              <div className="bg-black/90 backdrop-blur-md border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
                <div className="flex items-center gap-2 text-amber-400">
                  <HelpCircle size={20} />
                  <h4
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-xl font-bold text-white"
                  >
                    Informações Rápidas
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {respostasRapidas.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedFaqId(item.id)}
                      className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all border ${
                        selectedFaqId === item.id
                          ? 'bg-amber-400 text-black border-amber-400'
                          : 'bg-stone-950 text-stone-200 border-amber-500/30 hover:border-amber-400'
                      }`}
                    >
                      {item.pergunta}
                    </button>
                  ))}
                </div>

                <div className="bg-stone-950/90 border border-amber-500/25 rounded-2xl p-4 sm:p-5 text-sm text-stone-200 leading-relaxed">
                  <p className="font-semibold text-amber-400 mb-1">{faqAtiva.pergunta}</p>
                  <p className="font-light">{faqAtiva.resposta}</p>
                </div>
              </div>

              {/* FORMULÁRIO DE AGENDAMENTO DE TATTOO */}
              <div className="bg-black/90 backdrop-blur-md border border-amber-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                    <Calendar size={14} /> Agendamento de Sessão
                  </span>
                  <h4
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-2xl sm:text-3xl font-bold text-white mt-1"
                  >
                    Agendar Tatuagem Realista Blackwork
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-1 font-light">
                    Preenche os detalhes abaixo e envia direto para o teu WhatsApp para teres todas as informações e dias organizados no telemóvel.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-amber-300 mb-1.5">
                      Teu Nome
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={bookingForm.nome}
                      onChange={handleBookingChange}
                      placeholder="Ex: João Silva"
                      className="w-full rounded-xl bg-stone-950 border border-amber-500/30 px-4 py-3 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-300 mb-1.5">
                      Dia / Data Preferida
                    </label>
                    <input
                      type="text"
                      name="dataPreferida"
                      value={bookingForm.dataPreferida}
                      onChange={handleBookingChange}
                      placeholder="Ex: Próxima sexta ou 15/12"
                      className="w-full rounded-xl bg-stone-950 border border-amber-500/30 px-4 py-3 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-300 mb-1.5">
                      Tamanho Aproximado
                    </label>
                    <input
                      type="text"
                      name="tamanho"
                      value={bookingForm.tamanho}
                      onChange={handleBookingChange}
                      placeholder="Ex: 15 cm"
                      className="w-full rounded-xl bg-stone-950 border border-amber-500/30 px-4 py-3 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-300 mb-1.5">
                      Zona do Corpo
                    </label>
                    <input
                      type="text"
                      name="zona"
                      value={bookingForm.zona}
                      onChange={handleBookingChange}
                      placeholder="Ex: Antebraço, peito, costas"
                      className="w-full rounded-xl bg-stone-950 border border-amber-500/30 px-4 py-3 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-amber-300 mb-1.5">
                      Ideia / Estilo da Tatuagem
                    </label>
                    <textarea
                      name="ideia"
                      rows={3}
                      value={bookingForm.ideia}
                      onChange={handleBookingChange}
                      placeholder="Descreve a tua ideia de tatuagem realista blackwork..."
                      className="w-full rounded-xl bg-stone-950 border border-amber-500/30 px-4 py-3 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm transition-all shadow-xl shadow-amber-500/30 inline-flex items-center justify-center gap-2 hover:scale-[1.02]"
                    >
                      <Send size={17} /> Enviar Agendamento para o WhatsApp
                    </button>
                  </div>
                </form>
              </div>

              {/* COMO É ELABORADO O ORÇAMENTO */}
              <div className="space-y-8 pt-6 border-t border-amber-500/20">
                <div className="text-center max-w-2xl mx-auto">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
                    Orçamentos Personalizados
                  </span>
                  <h3
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-2xl sm:text-3xl font-extrabold text-white mt-2 drop-shadow"
                  >
                    Como é Elaborado o Teu Orçamento
                  </h3>
                  <p className="text-stone-200 text-sm mt-2 leading-relaxed font-light">
                    Cada orçamento é calculado de acordo com a tua ideia, tamanho e zona do corpo.
                  </p>
                </div>

                {/* 4 Passos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {etapasOrcamento.map((etapa) => (
                    <div
                      key={etapa.passo}
                      className="bg-black/85 backdrop-blur-md border border-amber-500/30 hover:border-amber-400 transition-all rounded-3xl p-6 sm:p-7 shadow-xl relative overflow-hidden"
                    >
                      <span
                        style={{ fontFamily: "'Cinzel', serif" }}
                        className="text-4xl font-extrabold text-amber-500/25 absolute top-5 right-6 select-none"
                      >
                        {etapa.passo}
                      </span>
                      <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-400/20 text-amber-400 border border-amber-500/40 text-xs font-bold mb-4">
                        {etapa.passo}
                      </div>
                      <h4
                        style={{ fontFamily: "'Cinzel', serif" }}
                        className="text-lg font-bold text-white"
                      >
                        {etapa.titulo}
                      </h4>
                      <p className="text-stone-200 text-sm mt-2 leading-relaxed font-light">
                        {etapa.descricao}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Garantias */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="bg-black/85 backdrop-blur-md border border-amber-500/30 rounded-2xl p-5">
                    <PenTool className="text-amber-400 mb-3" size={22} />
                    <h4
                      style={{ fontFamily: "'Cinzel', serif" }}
                      className="text-sm font-bold text-white"
                    >
                      Realismo Blackwork
                    </h4>
                    <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">
                      Construção de imagem em preto e contraste adaptada a cada cliente.
                    </p>
                  </div>

                  <div className="bg-black/85 backdrop-blur-md border border-amber-500/30 rounded-2xl p-5">
                    <Layers className="text-amber-400 mb-3" size={22} />
                    <h4
                      style={{ fontFamily: "'Cinzel', serif" }}
                      className="text-sm font-bold text-white"
                    >
                      Diferentes Estilos
                    </h4>
                    <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">
                      Trabalhos realistas e em diferentes estilos para explorar a arte na pele.
                    </p>
                  </div>

                  <div className="bg-black/85 backdrop-blur-md border border-amber-500/30 rounded-2xl p-5">
                    <ShieldCheck className="text-amber-400 mb-3" size={22} />
                    <h4
                      style={{ fontFamily: "'Cinzel', serif" }}
                      className="text-sm font-bold text-white"
                    >
                      Higiene &amp; Cuidados
                    </h4>
                    <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light">
                      Material descartável e orientação completa durante a cicatrização.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECÇÃO: SOBRE O ARTISTA */}
          {activeTab === 'sobre' && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-black/85 backdrop-blur-md border border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

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
                  <h3
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-3xl sm:text-4xl font-extrabold text-white mt-1 drop-shadow"
                  >
                    Art Oliveira
                  </h3>
                  <p className="text-amber-400 text-sm mt-1 font-medium">
                    Uma visão artística entre o papel e a pele • Cabo Verde
                  </p>

                  <div className="space-y-4 text-stone-200 leading-relaxed text-sm sm:text-base mt-5 font-light">
                    <p>
                      <strong className="text-white font-semibold">Art Oliveira</strong> trabalha com{' '}
                      <strong className="text-amber-400 font-medium">desenhos realistas</strong>,{' '}
                      <strong className="text-amber-400 font-medium">pintura acrílica sobre diferentes superfícies</strong> e{' '}
                      <strong className="text-amber-400 font-medium">tatuagens realistas blackwork</strong>.
                    </p>
                    <p>
                      A proposta é explorar trabalhos realistas e diferentes estilos para expressar a arte tanto no papel e nas superfícies físicas como na pele.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-7 justify-center md:justify-start">
                    <a
                      href="https://instagram.com/artoliveira_oficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-stone-900 text-amber-400 border border-amber-500/40 text-sm font-bold transition-all shadow-md"
                    >
                      <Instagram size={17} /> @artoliveira_oficial
                    </a>
                    <a
                      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Visitei o teu portfólio e gostaria de falar contigo.`}
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

        {/* MODAL DE ZOOM ALTA DEFINIÇÃO PARA TATUAGENS */}
        {selectedTattoo && (
          <div
            onClick={() => setSelectedTattoo(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-stone-950 border border-amber-500/50 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col relative my-4"
            >
              {/* Barra Superior de Controlo de Zoom */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-black border-b border-stone-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">
                    {selectedTattoo.estilo} • {selectedTattoo.local}
                  </span>
                  <h3
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-lg sm:text-xl font-bold text-white"
                  >
                    {selectedTattoo.titulo}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTattooZoom((z) => Math.max(1, Number((z - 0.5).toFixed(1))))}
                    disabled={tattooZoom <= 1}
                    className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-amber-400 border border-amber-500/30 transition-colors"
                    title="Reduzir Zoom"
                  >
                    <ZoomOut size={18} />
                  </button>
                  <span className="text-xs font-bold text-amber-400 min-w-[46px] text-center">
                    {Math.round(tattooZoom * 100)}%
                  </span>
                  <button
                    onClick={() => setTattooZoom((z) => Math.min(3, Number((z + 0.5).toFixed(1))))}
                    disabled={tattooZoom >= 3}
                    className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-amber-400 border border-amber-500/30 transition-colors"
                    title="Aumentar Zoom"
                  >
                    <ZoomIn size={18} />
                  </button>
                  {tattooZoom > 1 && (
                    <button
                      onClick={() => setTattooZoom(1)}
                      className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 transition-colors"
                      title="Repor Tamanho Original"
                    >
                      <RotateCcw size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedTattoo(null)}
                    className="ml-2 p-2 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold transition-colors"
                    aria-label="Fechar"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Área da Imagem com Scroll e Zoom */}
              <div className="bg-black overflow-auto max-h-[72vh] flex items-center justify-center p-4">
                <img
                  src={selectedTattoo.imagem}
                  alt={selectedTattoo.titulo}
                  style={{
                    transform: `scale(${tattooZoom})`,
                    transformOrigin: 'center center'
                  }}
                  onClick={() => setTattooZoom((z) => (z === 1 ? 2 : 1))}
                  className="max-h-[68vh] w-auto object-contain rounded-lg transition-transform duration-200 cursor-zoom-in select-none"
                />
              </div>

              {/* Rodapé do Modal da Tatuagem */}
              <div className="p-4 sm:px-6 bg-black border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-stone-300 text-xs sm:text-sm font-light text-center sm:text-left">
                  {selectedTattoo.descricao}{' '}
                  <span className="text-amber-400/80">(Clica na foto ou nos botões + / - para fazer zoom)</span>
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Vi a tatuagem "${encodeURIComponent(selectedTattoo.titulo)}" no teu site e gostaria de pedir um orçamento semelhante.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle size={16} /> Pedir Orçamento Semelhante
                </a>
              </div>
            </div>
          </div>
        )}

        {/* JANELA MODAL DE DETALHES DA OBRA */}
        {selectedObra && (
          <div
            onClick={() => setSelectedObra(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-stone-900 border border-amber-500/50 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 relative my-8"
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
                    <span className="bg-black text-amber-400 border border-amber-500/40 text-xs px-3 py-1 rounded-full font-medium">
                      {selectedObra.status}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-2xl sm:text-3xl font-extrabold text-white mt-4"
                  >
                    {selectedObra.title}
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed mt-4 font-light">
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
        <footer className="border-t border-amber-500/30 mt-20 py-10 text-center text-stone-400 text-sm bg-black/90 backdrop-blur-md">
          <p
            style={{ fontFamily: "'Cinzel', serif" }}
            className="text-amber-400 font-bold tracking-[0.2em] text-base drop-shadow"
          >
            ART OLIVEIRA
          </p>
          <p className="text-xs text-stone-300 mt-1">
            Uma visão artística entre o papel e a pele • Cabo Verde
          </p>
          <p className="text-xs text-stone-500 mt-4">
            &copy; 2026 Art Oliveira. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
