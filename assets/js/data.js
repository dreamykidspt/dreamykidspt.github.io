/*
  DREAMY KIDS · CONFIGURAÇÃO CENTRAL
  ---------------------------------------------------------------
  Todos os preços, contactos e dados comerciais vivem aqui.
  Para alterar um preço, muda só o número. O site atualiza sozinho.

  Fonte dos valores: artes comerciais (packs, menus, entradas,
  cinema, extras). A apresentação de marketing em PDF tem valores
  e nomes diferentes; ver lista "pendentes" no fim.
*/
window.DK = {
  /* Mostrar o painel "Dados por confirmar" no canto do ecrã.
     Pôr false antes do lançamento oficial. */
  modoRevisao: false,

  contacto: {
    whatsapp: "351926506434", // +351 926 506 434 (confirmado pelo Whelisson em 2026-10-09)
    telefone: "",          // PENDENTE
    email: "",             // PENDENTE
    instagram: "",         // PENDENTE · ex. "dreamykids.pt" (sem @)
    morada: "Rua Natália Correia, n.º 29, Cave Direita, Vale Mourão, Rio de Mouro, Sintra", // confirmada pelo Whelisson em 2026-10-09; código postal por confirmar
    horario: ""            // PENDENTE · horário geral do espaço
  },

  site: {
    url: "https://dreamykids.pt/",
  },

  condicoes: {
    minimoCriancas: 10,
    duracaoFesta: "Aproximadamente 3 horas",
    idades: "",            // PENDENTE
    maximoCriancas: null   // PENDENTE
  },

  packs: [
    {
      id: "fun", nome: "Dreamy Fun", preco: 26, cor: "rosa",
      escolha: "1 experiência à escolha",
      opcoes: ["Spa", "Slime"],
      extra: null
    },
    {
      id: "glow", nome: "Dreamy Glow Party", preco: 32, cor: "glow",
      escolha: "1 experiência à escolha",
      opcoes: ["Spa", "Slime"],
      extra: null,
      incluiMais: { nome: "Glow Disco", texto: "Discoteca com luzes néon e muita dança" }
    },
    {
      id: "mix", nome: "Dreamy Mix", preco: 30, cor: "roxo",
      escolha: "2 experiências à escolha",
      opcoes: ["Spa", "Slime", "Art"],
      extra: null
    },
    {
      id: "vip", nome: "Dreamy VIP", preco: 40, cor: "azul",
      escolha: "3 experiências",
      opcoes: ["Spa", "Slime"],
      extra: "+ 1 à escolha: Dreamy Art ou Dreamy Print"
    },
    {
      id: "creator", nome: "Dreamy Creator", preco: 45, cor: "amarelo",
      escolha: "4 experiências",
      opcoes: ["Spa", "Slime", "Art", "Print"],
      extra: null,
      destaque: "O mais completo"
    }
  ],
  packsIncluiSempre: ["Gaming Zone", "Arena dos Desafios", "Make-up e penteados"],
  arenaPadrao: "Futebol, tiro ao alvo, basquetebol, matraquilhos, mesa de disco e muito mais",

  extras: [
    { id: "slime", nome: "Slime Extra", preco: 4, texto: "Mais um slime, com novas cores e acessórios." },
    { id: "art", nome: "Dreamy Art", preco: 5, texto: "Decora uma peça e leva para casa: escovas, óculos, caixas de jóias e mais." },
    { id: "print", nome: "Dreamy Print", preco: 6, texto: "Personaliza e leva para casa: bolsas, chapéus, óculos e outras peças." }
  ],

  entradas: [
    { id: "gaming", nome: "Gaming + Arena dos Desafios", duracao: "1h", preco: 12, texto: "Videojogos, futebol, tiro ao alvo, basquetebol, matraquilhos, mesa de disco e muito mais." },
    { id: "spa", nome: "Dreamy Spa & Make-up", duracao: "1h", preco: 18, texto: "Cuidados de rosto, relaxamento, maquilhagem, penteados e acessórios." },
    { id: "slime", nome: "Slime Experience", duracao: "1h", preco: 18, texto: "Cria e personaliza o teu próprio slime." },
    { id: "art", nome: "Dreamy Art", duracao: "1h", preco: 20, texto: "Decora uma peça e leva-a para casa." },
    { id: "print", nome: "Dreamy Print", duracao: "1h", preco: 20, texto: "Estampagem personalizada para levar para casa." },
    { id: "afternoon", nome: "Dreamy Afternoon", duracao: "2h", preco: 25, texto: "Gaming, Arena dos Desafios e 1 experiência à escolha." }
  ],

  cinema: {
    planos: [
      { id: "night", nome: "Cinema Night", preco: 25,
        inclui: ["Sessão de cinema", "Pizza", "Pipocas", "Sumos e água", "Gelado", "Gaming Zone"] },
      { id: "party", nome: "Cinema Party", preco: 30,
        inclui: ["Tudo o que tem o Cinema Night", "1 experiência antes do filme: Spa ou Slime"] }
    ],
    horario: [
      { dia: "Sexta", horas: "18h00 às 21h00" },
      { dia: "Sábado", horas: "17h00 às 20h00" },
      { dia: "Domingo", horas: "17h00 às 20h00" }
    ]
  },

  menuBolo: "Bolo de aniversário: +35 € por festa", // acrescento mostrado em todos os menus (valor por festa, confirmado pela cliente em 2026-11-07)
  menus: [
    { id: "dreamy", nome: "Menu Dreamy", lema: "Lanchinho delicioso", preco: 6, img: "assets/img/menu-dreamy.webp",
      inclui: ["Croissants com fiambre e queijo", "Batatas fritas", "Sumos", "Água", "Fruta", "Gomas", "Decoração de mesa"] },
    { id: "pizza", nome: "Menu Pizza", lema: "Sabores que fazem festa", preco: 8, img: "assets/img/menu-pizza.webp",
      inclui: ["Pizza", "Batatas fritas", "Sumos", "Água", "Salame", "Gomas", "Decoração de mesa"] }
  ],

  // Galeria desligada (2026-10-09): repetia as fotos das estações. Para reativar com fotos reais do espaço,
  // repor a secção <!-- 11 · GALERIA --> no index.html (ver histórico na nota do Obsidian).
  // escolha: o que vai na mensagem do WhatsApp ao clicar na imagem
  galeria: [
    { src: "assets/img/exp-slime.webp", legenda: "Slime Experience", escolha: "entrada:slime" },
    { src: "assets/img/cinema-sala.webp", legenda: "Sessão de cinema", escolha: "cinema:night" },
    { src: "assets/img/exp-art.webp", legenda: "Peças decoradas no Dreamy Art", escolha: "entrada:art" },
    { src: "assets/img/exp-gaming.webp", legenda: "Gaming Zone", escolha: "entrada:gaming" },
    { src: "assets/img/exp-spa-mesa.webp", legenda: "Dreamy Spa", escolha: "entrada:spa" },
    { src: "assets/img/exp-print.webp", legenda: "Criações do Dreamy Print", escolha: "entrada:print" },
    { src: "assets/img/exp-arena.webp", legenda: "Arena dos Desafios", escolha: "entrada:gaming" },
    { src: "assets/img/exp-makeup.webp", legenda: "Make-up e penteados", escolha: "entrada:spa" }
  ],
  galeriaIlustrativa: true, // pôr false quando as fotografias forem do espaço real

  pendentes: [
    "Telefone e e-mail de reservas (WhatsApp já definido)",
    "Código postal da morada (Rua Natália Correia, n.º 29, Rio de Mouro)",
    "Horário geral do espaço",
    "Idades recomendadas",
    "Número máximo de crianças por festa",
    "Regras de reserva, sinal e cancelamento",
    "Perfis oficiais nas redes sociais",
    "Preços: as artes (Fun 26 €, Mix 30 €, VIP 40 €, Creator 45 €) contradizem o PDF (Mix 26 €, VIP 30 €, All-In 40 €). O site usa as artes.",
    "Experiências individuais: artes (Spa 18 €, Slime 18 €, Art 20 €, Print 20 €, Gaming 12 €) contradizem o PDF (Spa 27 €, Slime 28 €, Decor 28 €, Print 28 €, Cinema 20 €, Play 20 €)",
    "Nomes: PDF usa Dreamy Decor, Dreamy Play, Dreamy Lime e Dreamy All-In; artes usam Dreamy Art e Dreamy Creator",
    "Horários do Cinema Night (sexta 18h00 às 21h00; sábado e domingo 17h00 às 20h00)",
    "Fotografias reais do espaço e das experiências (as atuais são ilustrativas)",
    "Imagem das crianças na hero: confirmar direitos de uso; não apresentar como clientes nem como o espaço real",
    "Logótipo em alta resolução, com fundo transparente e versão para fundo escuro"
  ]
};
