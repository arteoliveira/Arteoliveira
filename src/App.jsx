import React, { useState, useEffect, useRef } from 'react';
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
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('galeria');
  const [selectedObra, setSelectedObra] = useState(null);
  const [selectedTattoo, setSelectedTattoo] = useState(null);

  // Estado de zoom e deslocamento por toque / pinça nos modais
  const [obraZoom, setObraZoom] = useState(1);
  const [obraPan, setObraPan] = useState({ x: 0, y: 0 });
  const [tattooZoom, setTattooZoom] = useState(1);
  const [tattooPan, setTattooPan] = useState({ x: 0, y: 0 });

  const pinchStartRef = useRef({
    distance: 0,
    zoom: 1,
    lastX: 0,
    lastY: 0,
    isPanning: false,
    lastTap: 0
  });

  // Referência do carrossel horizontal das obras
  const obrasCarouselRef = useRef(null);
  const [activeObraIndex, setActiveObraIndex] = useState(0);

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

  // Fechar modais com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedObra(null);
        setSelectedTattoo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // LINKS DE IMAGENS DE FUNDO POR SECÇÃO (Resolução máxima para manter nitidez)
  const imagemFundoGaleria = 'https://i.postimg.cc/SKW9M778/IMG-5989.jpg';
  const imagemFundoTatuagens = 'https://i.postimg.cc/6WbZG3Cq/8B366592-4B4D-4F55-8F5C-919944812B78.jpg';
  const imagemFundoPintura = ''; // Podes colocar aqui o link da foto de pintura quando quiseres
  const imagemSobreArtista = 'https://i.postimg.cc/8PbbnpFF/IMG-4746.jpg';

  // REDES SOCIAIS E CONTACTOS
  const whatsappNumber = '+2385844254';
  const instagramArteHandle = 'artoliveira_oficial';
  const instagramTattooHandle = 'olv_tattooart';

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
    },
    {
      id: 2,
      title: '',
      categoria: 'Grafite / Lápis',
      tecnica: 'Grafite sobre papel de alta gramagem',
      dimensoes: '35,6 x 27,9 cm',
      tempo: '',
      ano: '2026',
      status: 'Disponível',
      imagem: 'https://i.postimg.cc/qRFQmxYb/IMG-3380.jpg',
      descricao: ''
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

  // Navegar no carrossel horizontal das obras
  const scrollToObra = (index) => {
    const clamped = Math.max(0, Math.min(obras.length - 1, index));
    setActiveObraIndex(clamped);
    const el = obrasCarouselRef.current;
    if (!el) return;
    const child = el.children[clamped];
    if (child) {
      el.scrollTo({
        left: child.offsetLeft - el.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleObrasScroll = () => {
    const el = obrasCarouselRef.current;
    if (!el || el.children.length === 0) return;
    const scrollCenter = el.scrollLeft + el.clientWidth / 2;
    let closestIdx = 0;
    let closestDist = Infinity;
    Array.from(el.children).forEach((child, idx) => {
      const childCenter = child.offsetLeft - el.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(scrollCenter - childCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = idx;
      }
    });
    setActiveObraIndex(closestIdx);
  };

  // Funções auxiliares de toque (pinça com dois dedos + arrastar + duplo toque)
  const getTouchDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  };

  const criarGestosZoom = (zoom, setZoom, pan, setPan) => ({
    onTouchStart: (e) => {
      if (e.touches.length === 2) {
        pinchStartRef.current.distance = getTouchDistance(e.touches);
        pinchStartRef.current.zoom = zoom;
        pinchStartRef.current.isPanning = false;
      } else if (e.touches.length === 1) {
        const now = Date.now();
        if (now - pinchStartRef.current.lastTap < 280) {
          if (zoom > 1) {
            setZoom(1);
            setPan({ x: 0, y: 0 });
          } else {
            setZoom(2);
          }
        }
        pinchStartRef.current.lastTap = now;
        if (zoom > 1) {
          pinchStartRef.current.isPanning = true;
          pinchStartRef.current.lastX = e.touches[0].clientX - pan.x;
          pinchStartRef.current.lastY = e.touches[0].clientY - pan.y;
        }
      }
    },
    onTouchMove: (e) => {
      if (e.touches.length === 2 && pinchStartRef.current.distance > 0) {
        e.preventDefault();
        const dist = getTouchDistance(e.touches);
        const scale = (dist / pinchStartRef.current.distance) * pinchStartRef.current.zoom;
        const clamped = Math.min(4, Math.max(1, Number(scale.toFixed(2))));
        setZoom(clamped);
        if (clamped === 1) {
          setPan({ x: 0, y: 0 });
        }
      } else if (e.touches.length === 1 && pinchStartRef.current.isPanning && zoom > 1) {
        e.preventDefault();
        setPan({
          x: e.touches[0].clientX - pinchStartRef.current.lastX,
          y: e.touches[0].clientY - pinchStartRef.current.lastY
        });
      }
    },
    onTouchEnd: () => {
      pinchStartRef.current.distance = 0;
      pinchStartRef.current.isPanning = false;
    },
    onDoubleClick: () => {
      if (zoom > 1) {
        setZoom(1);
        setPan({ x: 0, y: 0 });
      } else {
        setZoom(2);
      }
    }
  });

  const obraTouchHandlers = criarGestosZoom(obraZoom, setObraZoom, obraPan, setObraPan);
  const tattooTouchHandlers = criarGestosZoom(tattooZoom, setTattooZoom, tattooPan, setTattooPan);

  const abrirModalObra = (obra) => {
    setSelectedObra(obra);
    setObraZoom(1);
    setObraPan({ x: 0, y: 0 });
  };

  const abrirModalTatuagem = (tattoo) => {
    setSelectedTattoo(tattoo);
    setTattooZoom(1);
    setTattooPan({ x: 0, y: 0 });
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqAtiva = respostasRapidas.find((item) => item.id === selectedFaqId) || respostasRapidas[0];

  const fundoAtual =
    activeTab === 'sobre'
      ? imagemSobreArtista
      : activeTab === 'tatuagem'
      ? imagemFundoTatuagens
      : activeTab === 'vendas'
      ? imagemFundoPintura || imagemFundoGaleria
      : imagemFundoGaleria;

  return (
    <div
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="min-h-screen bg-black text-stone-100 selection:bg-amber-500/40 relative"
    >
      {/* ANIMAÇÕES NÍTIDAS (SEM DESFOQUE / SEM EFEITO TURVO) */}
      <style>{`
        @keyframes sectionSpotlight {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cardEntranceSharp {
          0% {
            opacity: 0;
            transform: translateY(32px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bgCrispEntrance {
          0% {
            opacity: 0.45;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes goldSweep {
          0% {
            transform: translateX(-120%) skewX(-20deg);
            opacity: 0;
          }
          45% {
            opacity: 0.45;
          }
          100% {
            transform: translateX(220%) skewX(-20deg);
            opacity: 0;
          }
        }

        @keyframes goldLineExpand {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .animate-section-stage {
          animation: sectionSpotlight 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-stagger-1 {
          opacity: 0;
          animation: sectionSpotlight 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
        }

        .animate-stagger-2 {
          opacity: 0;
          animation: sectionSpotlight 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.18s forwards;
        }

        .animate-stagger-3 {
          opacity: 0;
          animation: sectionSpotlight 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.26s forwards;
        }

        .animate-stagger-4 {
          opacity: 0;
          animation: sectionSpotlight 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.34s forwards;
        }

        .animate-art-card {
          opacity: 0;
          animation: cardEntranceSharp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-bg-crisp {
          animation: bgCrispEntrance 0.6s ease-out forwards;
        }

        .animate-gold-sweep {
          animation: goldSweep 1.25s ease-out 0.2s forwards;
        }

        .animate-gold-line {
          transform-origin: left center;
          animation: goldLineExpand 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.12s forwards;
        }
      `}</style>

      {/* IMAGEM DE FUNDO NÍTIDA E SEM ESTICAMENTO ARTIFICIAL */}
      {activeTab === 'sobre' ? (
        <div key="bg-sobre" className="fixed inset-0 z-0 pointer-events-none bg-black">
          <img
            src={imagemSobreArtista}
            alt="Art Oliveira"
            style={{ objectPosition: '50% 8%' }}
            className="animate-bg-crisp w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85" />
        </div>
      ) : activeTab === 'tatuagem' ? (
        <div key="bg-tatuagem" className="fixed inset-0 z-0 pointer-events-none bg-black flex items-center justify-center">
          <img
            src={imagemFundoTatuagens}
            alt="Fundo Tatuagens Art Oliveira"
            className="animate-bg-crisp w-full h-full object-contain opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />
        </div>
      ) : (
        <div key={`bg-${activeTab}`} className="fixed inset-0 z-0 pointer-events-none bg-black">
          <img
            src={fundoAtual}
            alt={`Fundo ${activeTab} Art Oliveira`}
            className="animate-bg-crisp w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/75" />
        </div>
      )}

      {/* CONTEÚDO PRINCIPAL SOBRE O FUNDO */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navegação Superior */}
        <header className="border-b border-amber-500/20 bg-black/30 backdrop-blur-[2px] sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div
              onClick={() => handleTabChange('galeria')}
              className="text-center sm:text-left cursor-pointer group"
            >
              <h1
                style={{ fontFamily: "'Cinzel', serif" }}
                className="text-xl sm:text-3xl font-extrabold tracking-[0.2em] text-amber-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] group-hover:text-amber-300 transition-colors"
              >
                ART OLIVEIRA
              </h1>
              <p className="text-[10px] text-amber-200 tracking-[0.28em] uppercase mt-0.5 font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
                Uma visão artística entre o papel e a pele
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full border border-amber-500/35 bg-black/45 backdrop-blur-[2px] shadow-lg">
              <button
                onClick={() => handleTabChange('galeria')}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === 'galeria'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                    : 'text-stone-100 hover:text-amber-400 hover:bg-black/30'
                }`}
              >
                Galeria
              </button>
              <button
                onClick={() => handleTabChange('vendas')}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === 'vendas'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                    : 'text-stone-100 hover:text-amber-400 hover:bg-black/30'
                }`}
              >
                Encomendas &amp; Vendas
              </button>
              <button
                onClick={() => handleTabChange('tatuagem')}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === 'tatuagem'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                    : 'text-stone-100 hover:text-amber-400 hover:bg-black/30'
                }`}
              >
                Tatuagens
              </button>
              <button
                onClick={() => handleTabChange('sobre')}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === 'sobre'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 font-bold scale-105'
                    : 'text-stone-100 hover:text-amber-400 hover:bg-black/30'
                }`}
              >
                Sobre
              </button>
            </nav>
          </div>
        </header>

        {/* Banner / Hero Section */}
        {activeTab !== 'tatuagem' && activeTab !== 'sobre' && (
          <section
            key={`hero-${activeTab}`}
            className="animate-section-stage relative overflow-hidden border-b border-amber-500/20"
          >
            <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 text-center relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-black/65 text-amber-400 border border-amber-500/50 mb-4 tracking-wider uppercase shadow-md">
                <Sparkles size={14} /> Artista Visual &amp; Tatuador • Cabo Verde
              </span>
              <h2
                style={{ fontFamily: "'Cinzel', serif" }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
              >
                Uma visão artística entre{' '}
                <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
                  o papel e a pele
                </span>
              </h2>
              <p className="text-stone-100 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                Desenhos realistas, pintura acrílica sobre diferentes superfícies e tatuagens realistas blackwork.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <button
                  onClick={() => handleTabChange('vendas')}
                  className="px-7 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm transition-all shadow-xl shadow-amber-500/30 hover:scale-105"
                >
                  Encomendas &amp; Preçário
                </button>
                <button
                  onClick={() => handleTabChange('tatuagem')}
                  className="px-7 py-3 rounded-full bg-black/75 hover:bg-stone-900 text-amber-400 border border-amber-500/50 font-semibold text-sm transition-all shadow-lg hover:border-amber-400"
                >
                  Tatuagens &amp; Agendamento
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Conteúdo Principal */}
        <main className="max-w-6xl w-full mx-auto px-4 py-8 sm:py-10 flex-1 flex flex-col">
          {/* SECÇÃO: GALERIA DE OBRAS (ARRASTAR PARA O LADO) */}
          {activeTab === 'galeria' && (
            <div key="sec-galeria" className="animate-section-stage">
              <div className="animate-stagger-1 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 pb-5 relative">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400 drop-shadow">
                    Exposição Digital
                  </span>
                  <h3
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-2xl sm:text-3xl font-bold text-white tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mt-1"
                  >
                    Obras em Destaque
                  </h3>
                  <p className="text-xs text-amber-200 mt-1 font-medium drop-shadow">
                    Arrasta para o lado para ver as obras • Clica para ampliar e sair facilmente
                  </p>
                </div>

                {/* Botões de navegação lateral */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollToObra(activeObraIndex - 1)}
                    disabled={activeObraIndex === 0}
                    className="p-2.5 rounded-full bg-black/80 hover:bg-stone-900 disabled:opacity-35 text-amber-400 border border-amber-500/40 transition-colors"
                    aria-label="Obra anterior"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="text-xs font-bold text-amber-300 px-2">
                    {activeObraIndex + 1} / {obras.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollToObra(activeObraIndex + 1)}
                    disabled={activeObraIndex >= obras.length - 1}
                    className="p-2.5 rounded-full bg-black/80 hover:bg-stone-900 disabled:opacity-35 text-amber-400 border border-amber-500/40 transition-colors"
                    aria-label="Próxima obra"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="animate-gold-line absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber-400/70 via-amber-500/20 to-transparent" />
              </div>

              {/* Faixa horizontal deslizável (ocupa menos espaço vertical) */}
              <div
                ref={obrasCarouselRef}
                onScroll={handleObrasScroll}
                className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-3"
              >
                {obras.map((obra, index) => (
                  <div
                    key={obra.id}
                    onClick={() => abrirModalObra(obra)}
                    style={{ animationDelay: `${index * 120 + 100}ms` }}
                    className="animate-art-card snap-center shrink-0 w-[82vw] sm:w-[360px] md:w-[380px] bg-black/75 border border-amber-500/35 rounded-2xl overflow-hidden group hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-2xl"
                  >
                    <div>
                      <div className="aspect-[4/5] overflow-hidden bg-stone-950 relative">
                        <img
                          src={obra.imagem}
                          alt={obra.title || 'Desenho Realista'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="animate-gold-sweep pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-amber-300/25 to-transparent" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        <span className="absolute top-3 left-3 bg-black/85 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30 shadow-lg">
                          {obra.categoria}
                        </span>

                        <span className="absolute top-3 right-3 bg-black/85 text-amber-400 p-2 rounded-full border border-amber-500/30">
                          <Maximize2 size={15} />
                        </span>

                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-xs text-amber-400 font-semibold tracking-wider">
                            {obra.dimensoes}
                          </p>
                          {obra.title && (
                            <h4
                              style={{ fontFamily: "'Cinzel', serif" }}
                              className="text-2xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors"
                            >
                              {obra.title}
                            </h4>
                          )}
                        </div>
                      </div>

                      {obra.descricao && (
                        <div className="p-4">
                          <p className="text-stone-200 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light">
                            {obra.descricao}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="px-4 pb-4 pt-3 flex items-center justify-between border-t border-amber-500/20">
                      <span className="text-xs text-stone-300 flex items-center gap-1.5 font-medium">
                        {obra.tempo ? (
                          <>
                            <Clock size={13} className="text-amber-400" /> {obra.tempo}
                          </>
                        ) : (
                          <>
                            <Ruler size={13} className="text-amber-400" /> {obra.dimensoes}
                          </>
                        )}
                      </span>
                      <span className="text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Ver &amp; Zoom <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicadores de pontos abaixo do carrossel */}
              <div className="flex justify-center items-center gap-2 mt-4">
                {obras.map((obra, idx) => (
                  <button
                    key={obra.id}
                    type="button"
                    onClick={() => scrollToObra(idx)}
                    aria-label={`Ir para obra ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      activeObraIndex === idx ? 'w-7 bg-amber-400' : 'w-2 bg-stone-600 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* SECÇÃO: ENCOMENDAS & VENDAS DE ARTE */}
          {activeTab === 'vendas' && (
            <div key="sec-vendas" className="animate-section-stage max-w-4xl mx-auto space-y-10">
              <div className="animate-stagger-1 text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 drop-shadow">
                  Encomendas &amp; Vendas
                </span>
                <h3
                  style={{ fontFamily: "'Cinzel', serif" }}
                  className="text-3xl sm:text-4xl font-extrabold text-white mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
                >
                  Trabalhos Realistas &amp; Diferentes Estilos
                </h3>
                <p className="text-stone-100 text-sm sm:text-base mt-3 leading-relaxed font-medium drop-shadow">
                  Trabalhos realistas e em diferentes estilos para explorar a arte, incluindo pintura acrílica sobre diferentes superfícies e encomendas personalizadas.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {opcoesVendas.map((opcao, idx) => (
                  <div
                    key={opcao.id}
                    style={{ animationDelay: `${idx * 150 + 140}ms` }}
                    className="animate-art-card bg-black/80 border border-amber-500/40 hover:border-amber-400 transition-all rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
                  >
                    <div className="animate-gold-sweep pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                      <div className="space-y-3 flex-1">
                        <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/30">
                          <ShoppingBag size={13} /> {opcao.sub}
                        </span>
                        <h4
                          style={{ fontFamily: "'Cinzel', serif" }}
                          className="text-2xl font-bold text-white"
                        >
                          {opcao.titulo}
                        </h4>
                        <p className="text-stone-200 text-sm leading-relaxed font-light">
                          {opcao.descricao}
                        </p>

                        <div className="pt-2 space-y-2">
                          {opcao.formatos.map((fmt, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-stone-200">
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
              <div className="animate-stagger-3 bg-black/80 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
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
                  <div className="bg-black/75 border border-amber-500/25 rounded-2xl p-5 space-y-3">
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

                  <div className="bg-black/75 border border-amber-500/25 rounded-2xl p-5 space-y-3">
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

          {/* SECÇÃO: TATUAGENS REALISTAS BLACKWORK */}
          {activeTab === 'tatuagem' && (
            <div key="sec-tatuagens" className="animate-section-stage max-w-5xl mx-auto space-y-14">
              <div>
                <div className="animate-stagger-1 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 pb-5 relative">
                  <div className="text-center sm:text-left">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 drop-shadow">
                      Portfólio na Pele
                    </span>
                    <h3
                      style={{ fontFamily: "'Cinzel', serif" }}
                      className="text-2xl sm:text-4xl font-extrabold text-white mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
                    >
                      Tatuagens Realistas Blackwork
                    </h3>
                    <p className="text-stone-100 text-xs sm:text-sm mt-1.5 font-medium drop-shadow">
                      Clica na tatuagem para fazer zoom com os dedos e fechar facilmente
                    </p>
                  </div>

                  <a
                    href={`https://instagram.com/${instagramTattooHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/75 hover:bg-stone-900 text-amber-400 border border-amber-500/40 text-xs sm:text-sm font-bold transition-all shadow-lg shrink-0"
                  >
                    <Instagram size={16} /> @{instagramTattooHandle}
                  </a>

                  <div className="animate-gold-line absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber-400/70 via-amber-500/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                  {tatuagensRealizadas.map((tattoo, index) => (
                    <div
                      key={tattoo.id}
                      onClick={() => abrirModalTatuagem(tattoo)}
                      style={{ animationDelay: `${index * 150 + 120}ms` }}
                      className="animate-art-card bg-black/80 border border-amber-500/35 rounded-2xl overflow-hidden group hover:border-amber-400 transition-all duration-300 cursor-pointer shadow-2xl flex flex-col justify-between"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-stone-950 relative">
                        <img
                          src={tattoo.imagem}
                          alt={tattoo.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="animate-gold-sweep pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-amber-300/25 to-transparent" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        <span className="absolute top-3 left-3 bg-black/85 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                          {tattoo.estilo}
                        </span>

                        <span className="absolute top-3 right-3 bg-black/85 text-amber-400 p-2 rounded-full border border-amber-500/30 flex items-center gap-1 text-xs font-bold">
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

              {/* RESPOSTAS RÁPIDAS */}
              <div className="animate-stagger-2 bg-black/80 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
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
                          : 'bg-black/75 text-stone-200 border-amber-500/30 hover:border-amber-400'
                      }`}
                    >
                      {item.pergunta}
                    </button>
                  ))}
                </div>

                <div className="bg-black/75 border border-amber-500/25 rounded-2xl p-4 sm:p-5 text-sm text-stone-200 leading-relaxed">
                  <p className="font-semibold text-amber-400 mb-1">{faqAtiva.pergunta}</p>
                  <p className="font-light">{faqAtiva.resposta}</p>
                </div>
              </div>

              {/* FORMULÁRIO DE AGENDAMENTO DE TATTOO */}
              <div className="animate-stagger-3 bg-black/80 border border-amber-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
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
                      className="w-full rounded-xl bg-black/75 border border-amber-500/30 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:border-amber-400"
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
                      className="w-full rounded-xl bg-black/75 border border-amber-500/30 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:border-amber-400"
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
                      className="w-full rounded-xl bg-black/75 border border-amber-500/30 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:border-amber-400"
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
                      className="w-full rounded-xl bg-black/75 border border-amber-500/30 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:border-amber-400"
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
                      className="w-full rounded-xl bg-black/75 border border-amber-500/30 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:border-amber-400"
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
              <div className="animate-stagger-4 space-y-8 pt-6 border-t border-amber-500/20">
                <div className="text-center max-w-2xl mx-auto">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 drop-shadow">
                    Orçamentos Personalizados
                  </span>
                  <h3
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-2xl sm:text-3xl font-extrabold text-white mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
                  >
                    Como é Elaborado o Teu Orçamento
                  </h3>
                  <p className="text-stone-100 text-sm mt-2 leading-relaxed font-light drop-shadow">
                    Cada orçamento é calculado de acordo com a tua ideia, tamanho e zona do corpo.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {etapasOrcamento.map((etapa) => (
                    <div
                      key={etapa.passo}
                      className="bg-black/80 border border-amber-500/30 hover:border-amber-400 transition-all rounded-3xl p-6 sm:p-7 shadow-xl relative overflow-hidden"
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="bg-black/80 border border-amber-500/30 rounded-2xl p-5">
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

                  <div className="bg-black/80 border border-amber-500/30 rounded-2xl p-5">
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

                  <div className="bg-black/80 border border-amber-500/30 rounded-2xl p-5">
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
            <div
              key="sec-sobre"
              className="animate-section-stage flex-1 flex flex-col justify-end max-w-3xl w-full mx-auto pt-24 sm:pt-40 pb-2"
            >
              <div className="animate-stagger-2 bg-black/55 border border-amber-500/35 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-3 relative overflow-hidden">
                <div className="animate-gold-sweep pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

                <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold drop-shadow">
                    Biografia &amp; Percurso
                  </span>
                  <span className="bg-amber-400 text-black text-[11px] font-extrabold px-3 py-0.5 rounded-full shadow-md">
                    Artista Visual &amp; Tatuador • Cabo Verde
                  </span>
                </div>

                <div className="relative z-10">
                  <h3
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                  >
                    Art Oliveira
                  </h3>
                  <p className="text-amber-300 text-xs sm:text-sm font-medium mt-0.5 drop-shadow">
                    Uma visão artística entre o papel e a pele
                  </p>
                </div>

                <div className="space-y-1.5 text-stone-100 leading-relaxed text-xs sm:text-sm font-light relative z-10 drop-shadow">
                  <p>
                    <strong className="text-white font-semibold">Art Oliveira</strong> trabalha com{' '}
                    <strong className="text-amber-300 font-medium">desenhos realistas</strong>,{' '}
                    <strong className="text-amber-300 font-medium">pintura acrílica sobre diferentes superfícies</strong> e{' '}
                    <strong className="text-amber-300 font-medium">tatuagens realistas blackwork</strong>.
                  </p>
                  <p>
                    Trabalhos realistas e em diferentes estilos para explorar a arte tanto no papel e nas superfícies físicas como na pele.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1.5 relative z-10">
                  <a
                    href={`https://instagram.com/${instagramArteHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/75 hover:bg-stone-900 text-amber-400 border border-amber-500/40 text-xs font-bold transition-all shadow-md"
                  >
                    <Instagram size={15} /> Arte: @{instagramArteHandle}
                  </a>
                  <a
                    href={`https://instagram.com/${instagramTattooHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/75 hover:bg-stone-900 text-amber-400 border border-amber-500/40 text-xs font-bold transition-all shadow-md"
                  >
                    <Instagram size={15} /> Tatuagens: @{instagramTattooHandle}
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Visitei o teu portfólio e gostaria de falar contigo.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold transition-all shadow-lg shadow-amber-500/20"
                  >
                    <MessageCircle size={15} /> Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* MODAL DE ZOOM COM OS DEDOS PARA TATUAGENS (SAÍDA FÁCIL) */}
        {selectedTattoo && (
          <div
            onClick={() => setSelectedTattoo(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="animate-section-stage bg-stone-950 border border-amber-500/50 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col relative my-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-black border-b border-stone-800 relative z-30">
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
                    type="button"
                    onClick={() => {
                      setTattooZoom((z) => {
                        const next = Math.max(1, Number((z - 0.5).toFixed(1)));
                        if (next === 1) setTattooPan({ x: 0, y: 0 });
                        return next;
                      });
                    }}
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
                    type="button"
                    onClick={() => setTattooZoom((z) => Math.min(4, Number((z + 0.5).toFixed(1))))}
                    disabled={tattooZoom >= 4}
                    className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-amber-400 border border-amber-500/30 transition-colors"
                    title="Aumentar Zoom"
                  >
                    <ZoomIn size={18} />
                  </button>
                  {tattooZoom > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setTattooZoom(1);
                        setTattooPan({ x: 0, y: 0 });
                      }}
                      className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 transition-colors"
                      title="Repor Tamanho Original"
                    >
                      <RotateCcw size={16} />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedTattoo(null)}
                    className="ml-2 px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs inline-flex items-center gap-1.5 transition-colors shadow-lg"
                    aria-label="Sair"
                  >
                    <X size={16} /> Sair
                  </button>
                </div>
              </div>

              <div
                {...tattooTouchHandlers}
                style={{ touchAction: 'none' }}
                className="bg-black overflow-hidden h-[62vh] flex items-center justify-center p-4 select-none"
              >
                <img
                  src={selectedTattoo.imagem}
                  alt={selectedTattoo.titulo}
                  style={{
                    transform: `translate3d(${tattooPan.x}px, ${tattooPan.y}px, 0) scale(${tattooZoom})`,
                    transformOrigin: 'center center'
                  }}
                  className="max-h-[58vh] w-auto object-contain rounded-lg transition-transform duration-100"
                />
              </div>

              <div className="p-4 sm:px-6 bg-black border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-30">
                <p className="text-stone-300 text-xs sm:text-sm font-light text-center sm:text-left">
                  {selectedTattoo.descricao}{' '}
                  <span className="text-amber-400">
                    (Pinça com 2 dedos ou duplo toque para zoom)
                  </span>
                </p>
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelectedTattoo(null)}
                    className="px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs sm:text-sm transition-colors border border-stone-600"
                  >
                    Fechar
                  </button>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Vi a tatuagem "${encodeURIComponent(selectedTattoo.titulo)}" no teu site e gostaria de pedir um orçamento semelhante.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap"
                  >
                    <MessageCircle size={16} /> Pedir Orçamento
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE DETALHES E ZOOM COM OS DEDOS PARA DESENHOS / OBRAS (SAÍDA FÁCIL) */}
        {selectedObra && (
          <div
            onClick={() => setSelectedObra(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="animate-section-stage bg-stone-950 border border-amber-500/50 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 relative my-4"
            >
              <button
                type="button"
                onClick={() => setSelectedObra(null)}
                className="absolute top-4 right-4 z-40 bg-amber-400 hover:bg-amber-300 text-black px-4 py-2 rounded-full font-extrabold text-xs inline-flex items-center gap-1.5 transition-colors shadow-xl"
                aria-label="Sair"
              >
                <X size={16} /> Sair
              </button>

              <div className="bg-black flex flex-col justify-between p-4 sm:p-5 border-b md:border-b-0 md:border-r border-stone-800">
                <div className="flex items-center gap-2 mb-2 pr-20">
                  <button
                    type="button"
                    onClick={() => {
                      setObraZoom((z) => {
                        const next = Math.max(1, Number((z - 0.5).toFixed(1)));
                        if (next === 1) setObraPan({ x: 0, y: 0 });
                        return next;
                      });
                    }}
                    disabled={obraZoom <= 1}
                    className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-amber-400 border border-amber-500/30"
                    title="Reduzir Zoom"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className="text-xs font-bold text-amber-400 min-w-[44px] text-center">
                    {Math.round(obraZoom * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setObraZoom((z) => Math.min(4, Number((z + 0.5).toFixed(1))))}
                    disabled={obraZoom >= 4}
                    className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-amber-400 border border-amber-500/30"
                    title="Aumentar Zoom"
                  >
                    <ZoomIn size={16} />
                  </button>
                  {obraZoom > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setObraZoom(1);
                        setObraPan({ x: 0, y: 0 });
                      }}
                      className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700"
                      title="Repor"
                    >
                      <RotateCcw size={15} />
                    </button>
                  )}
                </div>

                <div
                  {...obraTouchHandlers}
                  style={{ touchAction: 'none' }}
                  className="flex-1 min-h-[320px] max-h-[58vh] overflow-hidden flex items-center justify-center select-none"
                >
                  <img
                    src={selectedObra.imagem}
                    alt={selectedObra.title || 'Desenho Realista'}
                    style={{
                      transform: `translate3d(${obraPan.x}px, ${obraPan.y}px, 0) scale(${obraZoom})`,
                      transformOrigin: 'center center'
                    }}
                    className="max-h-[54vh] w-auto object-contain rounded-xl shadow-2xl transition-transform duration-100"
                  />
                </div>

                <p className="text-[11px] text-amber-300/90 text-center mt-2">
                  Pinça com 2 dedos ou duplo toque para ampliar • Clica em Sair para fechar
                </p>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 flex-wrap pr-20">
                    <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {selectedObra.categoria}
                    </span>
                    <span className="bg-black text-amber-400 border border-amber-500/40 text-xs px-3 py-1 rounded-full font-medium">
                      {selectedObra.status}
                    </span>
                  </div>

                  {selectedObra.title && (
                    <h3
                      style={{ fontFamily: "'Cinzel', serif" }}
                      className="text-2xl sm:text-3xl font-extrabold text-white mt-4"
                    >
                      {selectedObra.title}
                    </h3>
                  )}

                  {selectedObra.descricao && (
                    <p className="text-stone-300 text-sm leading-relaxed mt-4 font-light">
                      {selectedObra.descricao}
                    </p>
                  )}

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

                    {selectedObra.tempo && (
                      <div className="flex items-center justify-between">
                        <span className="text-stone-400 flex items-center gap-2">
                          <Clock size={16} className="text-amber-400" /> Dedicação
                        </span>
                        <span className="text-white font-medium">{selectedObra.tempo}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Olá Art Oliveira! Gostaria de saber mais detalhes ou adquirir ${
                      selectedObra.title
                        ? `a obra "${encodeURIComponent(selectedObra.title)}"`
                        : 'este desenho realista'
                    } (${encodeURIComponent(selectedObra.tecnica)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 hover:scale-[1.02]"
                  >
                    <MessageCircle size={18} /> Consultar ou Adquirir
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedObra(null)}
                    className="py-3.5 px-5 rounded-full bg-stone-800 hover:bg-stone-700 text-white border border-stone-600 font-bold text-sm transition-colors"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rodapé */}
        <footer className="border-t border-amber-500/30 mt-16 py-10 text-center text-stone-400 text-sm bg-black/80">
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
