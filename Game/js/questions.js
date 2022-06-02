// creating an array and passing the number, questions, options, and answers
let listQuestions = [
  {
    numb: 1,
    question: "A demanda é muito importante para qualquer organização, pois possibilita o planejamento e o dimensionamento de todas as etapas envolvidas na cadeia de suprimentos.",
    problem: "O que demonstra um bom planejamento de demanda?",
    answer: "O volume máximo de produtos ou serviços que uma empresa pode comercializar",
    options: [
      "O volume mínimo apenas de produtos que sua empresa comercializa",
      "O volume mínimo de produtos e serviços que sua empresa comercializa",
      "O volume médio de produtos e serviços de comercio da sua empresa",
      "O volume máximo de produtos ou serviços que uma empresa pode comercializar"
    ]
  },
  {
    numb: 2,
    question: "A sazonalidade afeta o estoque e caixa de várias empresas.",
    problem: "Qual alternativa descreve o que é Sazonalidade?",
    answer: "Estados eventuais que vendem mais de determinada mercadoria",
    options: [
      "O volume de compras em estoque no final do mês",
      "Produtos que são vendidos em épocas especificas durante o ano",
      "Periodos eventuais que vendem mais de determinada mercadoria",
      "Produtos que são vendidos em qualquer época do ano"
    ]
  },
  {
    numb: 3,
    question: "Existem elementos principais nos modelos de analises de demanda.",
    problem: "Abaixo marque a opção que os descrevam:",
    answer: "Tendencia, nível, sazonal e alectória.",
    options: [
      "Tendencia, nível, sazonal e alectória.",
      "Inflação, Tendencia, aleatório e concorrência.",
      "Concorrência, Nível, sazonal e tendencia.",
      "Aleatória, concorrência, nível e sazonal."
    ]
  },
  {
    numb: 4,
    question: "Sabe-se que a produção anda lado a lado com a Demanda e é importante que aja um equilíbrio entre elas.",
    problem: "Quando a produção se torna drasticamente maior que a demanda, pode ocorrer:",
    answer: "Um aumento de estoque.",
    options: [
      "Um aumento de estoque.",
      "Um aumento de preço sob a mercadoria.",
      "Um nível baixo de estoque.",
      "Aumento de ativos no caixa."
    ]
  },
  {
    numb: 5,
    question: "Suponha-se que a demanda esteja maior que a produção.",
    problem: "O que não é provável acontecer?",
    answer: "Aumento da oferta que causa uma queda no preço da mercadoria.",
    options: [
      "Um aumento no tempo de atendimento referente a pedido de clientes.",
      "Um nível mais baixo de estoque.",
      "Aumento da oferta que causa uma queda no preço da mercadoria.",
      "Um problema no planejamento de estoque e produção."
    ]
  },
  {
    numb: 6,
    question: "A ruptura de estoque é um fator negativo para empresas, gerando situações desagradáveis.",
    problem: "Assinale a alternativa que se refere ao que pode acontecer em casos de ruptura:",
    answer: "Perda de vendas para a concorrência, por não ter o produto desejável pelo cliente.",
    options: [
      "Perda de vendas para a concorrência, por não ter o produto desejável pelo cliente.",
      "Gera mais economia por ter menos produtos estocados.",
      "Aumento de ativos no caixa.",
      "Melhorias no espaço."
    ]
  },
  {
    numb: 7,
    question: "Quais das alternativas é uma causa de ruptura?",
    problem: "Marque a alternativa correta:",
    answer: "Analise de dados ineficiente.",
    options: [
      "Reposição eficiente de estoque.",
      "Analise de dados ineficiente.",
      "Conhecer seus clientes.",
      "Entregas rápidas dos fornecedores."
    ]
  },
  {
    numb: 8,
    question: "Caso queira um caixa cheio, é primordial que exista uma previsão útil referente a demandas.",
    problem: "Assinale a alternativa que corresponde a alguns de fatores convenientes:",
    answer: "Tempo de reabastecimento, Demanda passada e ter preços planejados.",
    options: [
      "Demanda passada e intuição sobre o reabastecimento.",
      "Demanda passada, estado da economia e marketing digital.",
      "Propaganda, descontos não planejados sob preços e estado da economia.",
      "Tempo de reabastecimento, Demanda passada e ter preços planejados."
    ]
  },
  {
    numb: 9,
    question: "Sobre a ruptura de estoque.",
    problem: "Marque a alternativa que mostre uma das consequências:",
    answer: "inibição de vendas.",
    options: [
      "má organização.",
      "inibição de vendas.",
      "maior número de vendas.",
      "lucratividade."
    ]
  },
  {
    numb: 10,
    question: "João é responsável pelo setor de vendas de um supermercado e sente a dor quando falta ou sobra de alguma mercadoria.",
    problem: "Por que João tem essa dor?",
    answer: "Pois a inibição de vendas pode surgir pela falta e o excesso de produtos.",
    options: [
      "Pois um estoque bem gerenciado diminui as vendas.",
      "Pois a inibição de vendas pode surgir pela falta e o excesso de produtos.",
      "Pois João não confia em seu colaborador que gerencia o estoque.",
      "Pois João precisa que sobre produtos para que resulte em um caixa maior."
    ]
  },
  {
    numb: 11,
    question: "Sabemos que o período que mais são vendidos acondicionados são nos meses de dezembro, janeiro e fevereiro, caso o fornecedor tenha falta de insumos e só consiga entregar as peças depois do prazo.",
    problem: "O que ocasiona:",
    answer: "Aumento da oferta que causa uma queda no preço da mercadoria.",
    options: [
      "Aumento de procura em concorrentes.",
      "Aumento de ativos no caixa.",
      "Lucratividade.",
      "Diminuição de procura em concorrente."
    ]
  },
  {
    numb: 12,
    question: "O período com maior quantidade de itens vendidos em uma papelaria é no tempo de volta as aulas.",
    problem: "Quais das alternativas se aplicam as análises antes da tomada de decisão?",
    answer: "Analisar períodos passados e formar cálculos específicos e complexos.",
    options: [
      "Comprar sempre  a mais para não faltar.",
      "Comrpsr sempre menos  para não sobrar.",
      "Analisar as quantidades no ano anterior e comprar igual.",
      "Analisar períodos passados e formar cálculos específicos e complexos."
    ]
  },
  {
    numb: 13,
    question: "Qual produto é vendido em sazonalidade?",
    problem: "Marque a correta:",
    answer: "Ovos de pascoa.",
    options: [
      "Ovos de pascoa.",
      "Camisas.",
      "Calçados.",
      "Autopeças."
    ]
  },
  {
    numb: 14,
    question: "Qual desses produtos não é vendido em sazonalidade?",
    problem: "Marque a correta:",
    answer: "Calçados.",
    options: [
      "Calçados.",
      "Itens natalinos.",
      "Ovos de páscoa.",
      "Decoração junina."
    ]
  },
  {
    numb: 15,
    question: "I-Previsão assertiva se torna necessária para estoques grandes, II-O homem é totalmente capaz de prever rupturas grandes, III-Manualidades prologam processos.",
    problem: "Quais são verdadeiras?",
    answer: "I e III",
    options: [
      "I e III",
      "II e III",
      "I, II e III",
      "Nenhuma das alternativas."
    ]
  },
  {
    numb: 16,
    question: "I-Itens Natalinos são vendidos em sazonalidade, II–Estoque está ligado a venda, III-Falta de estoque gera inibição das vendas.",
    problem: "Quais são verdadeiras?",
    answer: "I,II e III",
    options: [
      "I,II e III",
      "I",
      "II e III",
      "I e II"
    ]
  },
  {
    numb: 17,
    question: "A falta de mercadoria afeta o processo de vendas?",
    problem: "Marque a correta:",
    answer: "Sim, pois o vendedor não pode vender aquilo que não tem.",
    options: [
      "Sim, pois são muitos produtos para poucas vendas",
      "Não, pois são setores distintos.",
      "Sim, pois o vendedor não pode vender aquilo que não tem.",
      "Não, pois o caixa precisa de passivos."
    ]
  },
  {
    numb: 18,
    question: "Bruno acabou comprando uma mercadoria fora do período sazonal e teve que vender mais barato.",
    problem: "Qual a desvantagem que isso causa para o negócio?",
    answer: "Desperdício e Prejuízo.",
    options: [
      "Desperdício e Prejuízo.",
      "Maior economia.",
      "Lucratividade.",
      "Geram promoções vantajosas."
    ]
  },
  {
    numb: 19,
    question: "Sobre os resultados de uma boa gestão de estoque. Quais benefícios são trazidos?",
    problem: "Marque a correta:",
    answer: "Melhoria nas vendas e entrega mais rápida.",
    options: [
      "Melhoria nas vendas e entrega mais rápida.",
      "Menor variedade de produtos e mais passivos no caixa.",
      "Melhor imagem com a concorrência e menos ativos no caixa.",
      "Melhor variedade de produtos e mais dividas."
    ]
  },
  {
    numb: 20,
    question: "Quais as melhorias que a tecnologia e a boa gestão trazem?",
    problem: "Marque a correta:",
    answer: "Processo automático e assertivo.",
    options: [
      "Processo automático e assertivo.",
      "Processo mais lento e menos manual.",
      "Processo automático e pouco eficiente.",
      "Ineficiente e manual."
    ]
  },
  {
    numb: 21,
    question: "Messias tem um estoque físico e vende também em plataformas digitais. Certa vez, ele vendeu em sua loja física e online do mesmo produto, o que ocasionou a falta do produto e um desconforto para o cliente.",
    problem: "Como poderia ser solucionado?",
    answer: "Ter uma integração de ponta que se comunique com ambos.",
    options: [
      "Ter uma integração de ponta que se comunique com ambos.",
      "Sempre deixar sobrando mercadorias.",
      "Eliminar as vendas online.",
      "Eliminar vendas na loja física."
    ]
  },
  {
    numb: 22,
    question: "Sobre os clientes.",
    problem: "Marque a correta:",
    answer: "Quer soluções eficientes e entregas rápidas.",
    options: [
      "Quer soluções eficientes e entregas rápidas.",
      "Está cada vez menos exigente",
      "Tem menos acesso as informações.",
      "É mais paciente."
    ]
  },
  {
    numb: 23,
    question: "Sobre o conceito que compreende uma noção ampliada da gestão de materiais, englobando os processos de compra, transporte, armazenagem e conservação e controle de estoque.",
    problem: "Marque a correta:",
    answer: "Logística.",
    options: [
      "A Produção enxuta.",
      "Just in time.",
      "Logística.",
      "Kanban."
    ]
  },
  {
    numb: 24,
    question: "Quais são os processos englobados pela logística.",
    problem: "Marque a correta:",
    answer: "Processos de compra, transporte, armazenagem e conservação e controle de estoque.",
    options: [
      "Processos de compra, transporte, armazenagem e conservação e controle de estoque.",
      "Processos de suprimento, precificação, customização, embalagem e acondicionamento.",
      "Processos de produção, empilhamento, movimentação e dimensionamento de pedidos.",
      "Processos de planejamento, classificação, layout, posição e previsão de vendas."
    ]
  },
  {
    numb: 25,
    question: "A cadeia de suprimentos que trata dos fornecedores diretos e clientes distribuidores é denominada cadeia?",
    problem: "Marque a correta:",
    answer: "Imediata.",
    options: [
      "Total.",
      "Imediata.",
      "De abastecimento.",
      "Interna."
    ]
  },
  {
    numb: 26,
    question: "De forma geral, a atividade empresarial cria quatro tipos de valor em produtos ou serviços: FORMA, TEMPO, LUGAR e POSSE.",
    problem: "Quais são criados e controlados pela logística/cadeia de suprimentos?",
    answer: "Tempo e Lugar.",
    options: [
      "Forma e Tempo.",
      "Lugar e Posse.",
      "Tempo e Posse.",
      "Tempo e Lugar."
    ]
  },
  {
    numb: 27,
    question: "As atividades de compras envolvem a aquisição de matérias-primas, suprimentos e componentes para o conjunto da organização. NÃO refere-se a atividade de compras.",
    problem: "Marque a correta:",
    answer: "Avaliar o desempenho da fabricação.",
    options: [
      "Selecionar e qualificar fornecedores.",
      "Avaliar o desempenho de fornecedores",
      "Negociar contratos.",
      "Avaliar o desempenho da fabricação."
    ]
  },
  {
    numb: 28,
    question: "A atividade que corresponde ao gerenciamento da cadeia de suprimentos de uma organização no nível estratégico da organização é:",
    problem: "Marque a correta:",
    answer: "Análises e decisões sobre a cadeia de suprimento.",
    options: [
      "Planejamento do transporte dos suprimentos entre as instalações.",
      "Planejamento da produção, demanda e desenvolvimento da cadeia de suprimento.",
      "Análises e decisões sobre a cadeia de suprimento.",
      "Gerenciamento do sistema de transporte."
    ]
  },
  {
    numb: 29,
    question: "_______ é a integração dos processos do negócio, desde os fornecedores até o consumidor final, que assegure os suprimentos de produtos, serviços e informações, de tal forma que acrescente valor ao cliente.",
    problem: "Preencha a lacuna:",
    answer: "Gestão do Estoque da Cadeia de Suprimentos.",
    options: [
      "Administração de Materiais.",
      "Gestão do Estoque da Cadeia de Suprimentos.",
      "Gerenciamento de estoque.",
      "Compras."
    ]
  },
  {
    numb: 30,
    question: "No fluxo de materiais ao longo da cadeia de suprimentos, a tendência de ocorrer um efeito de multiplicação da demanda, à medida que os pedidos vão sendo passados dos varejistas para os atacadistas e destes para os fabricantes, é conhecida como efeito:",
    problem: "Marque a correta:",
    answer: "Forrester.",
    options: [
      "Forrester.",
      "Elástico.",
      "Alavancagem.",
      "Carregamento."
    ]
  }
];