// Estado da aplicação
let currentNews = [];
let currentPage = 1;
let currentFilters = {
    country: 'mozambique',
    category: 'all',
    search: '',
    trending: false,
    breaking: false
};
let savedArticles = JSON.parse(localStorage.getItem('newsmania-saved')) || [];
let isLoading = false;

// Base de notícias com foco em Moçambique e PALOPS
const newsDatabase = [
    // Notícias de Moçambique (principais)
    {
        id: 1,
        title: "Moçambique Inaugura Nova Central Solar de 40MW em Tete",
        content: "O Governo de Moçambique inaugurou hoje uma nova central solar fotovoltaica de 40 megawatts na província de Tete, marcando um passo importante na diversificação da matriz energética do país. O projeto, financiado através de uma parceria público-privada, irá fornecer energia limpa para mais de 50.000 residências na região. Esta infraestrutura faz parte do plano nacional de expansão das energias renováveis até 2030, que visa aumentar a participação das fontes limpas para 30% da matriz energética nacional. O ministro da Energia destacou que este é apenas o primeiro de vários projetos similares planeados para as próximas décadas.",
        excerpt: "Nova central solar de 40MW inaugurada em Tete promete energia limpa para 50.000 residências, fortalecendo matriz energética moçambicana.",
        author: "Manuel Santos",
        source: "Notícias de Moçambique",
        category: "science",
        country: "mozambique",
        imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
        publishedAt: new Date(Date.now() - 1800000),
        trending: true,
        breaking: false,
        url: "https://noticias.co.mz/energia-solar-tete"
    },
    {
        id: 2,
        title: "Universidade Eduardo Mondlane Desenvolve Vacina contra Malária",
        content: "Investigadores da Universidade Eduardo Mondlane, em parceria com o Centro de Investigação em Saúde de Manhiça (CISM), anunciaram hoje resultados promissores de uma nova vacina contra a malária. Os ensaios clínicos da fase II demonstraram uma eficácia de 67% na prevenção da doença em crianças menores de 5 anos. O estudo envolveu 2.400 participantes distribuídos pelas províncias de Maputo, Gaza e Inhambane, representando um marco histórico na investigação médica moçambicana. A vacina utiliza uma nova tecnologia de mRNA adaptada especificamente para as variantes do parasita da malária prevalentes na região austral de África.",
        excerpt: "UEM desenvolve vacina contra malária com 67% de eficácia em ensaios clínicos com crianças menores de 5 anos.",
        author: "Dr. Carla Manjate",
        source: "Jornal O País",
        category: "health",
        country: "mozambique",
        imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800",
        publishedAt: new Date(Date.now() - 3600000),
        trending: true,
        breaking: true,
        url: "https://opais.co.mz/vacina-malaria"
    },
    {
        id: 3,
        title: "Porto de Maputo Bate Recorde de Movimentação de Carga",
        content: "O Porto de Maputo registou um novo recorde histórico na movimentação de carga no primeiro semestre de 2024, com um total de 28,5 milhões de toneladas. Este crescimento de 15% em relação ao mesmo período do ano anterior deve-se principalmente ao aumento das exportações de carvão mineral da província de Tete e produtos agrícolas das regiões centro e norte do país. O porto continua a ser uma das principais portas de entrada e saída de mercadorias da região austral de África, servindo também os países vizinhos como Zimbabué, Malawi e Zâmbia.",
        excerpt: "Porto de Maputo registra recorde histórico com 28,5 milhões de toneladas de carga movimentadas no primeiro semestre.",
        author: "João Sitoe",
        source: "Canal de Moçambique",
        category: "economy",
        country: "mozambique",
        imageUrl: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2c?w=800",
        publishedAt: new Date(Date.now() - 7200000),
        trending: false,
        breaking: false,
        url: "https://canalmoz.co.mz/porto-maputo-recorde"
    },
    {
        id: 4,
        title: "Descoberta de Gás Natural em Cabo Delgado Atrai Investimento Internacional",
        content: "A província de Cabo Delgado continua a atrair investimento internacional após novas descobertas de reservas de gás natural. A empresa Total E&P anunciou um investimento adicional de 2 bilhões de dólares americanos no projeto Mozambique LNG, prevendo o início da produção comercial para 2026. Este projeto deverá gerar mais de 15.000 empregos diretos e indiretos na região, contribuindo significativamente para o desenvolvimento económico da província.",
        excerpt: "Total E&P investe mais 2 bilhões de dólares em Cabo Delgado, prevendo produção de gás natural para 2026.",
        author: "Ana Macuácua",
        source: "Mozambique Insights",
        category: "economy",
        country: "mozambique",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        publishedAt: new Date(Date.now() - 10800000),
        trending: true,
        breaking: false,
        url: "https://mozambiqueinsights.com/gas-cabo-delgado"
    },
    {
        id: 5,
        title: "Maputo Recebe Primeiro Sistema de Metro Ligeiro da África Austral",
        content: "A capital moçambicana inaugurou o primeiro sistema de metro ligeiro da região austral de África, conectando o centro da cidade aos subúrbios de Matola e Marracuene. O projeto, financiado pela União Europeia e pelo Banco Mundial, custou 850 milhões de dólares e prevê transportar 200.000 passageiros diariamente. O sistema utiliza tecnologia limpa e contribuirá significativamente para a redução do tráfego urbano e das emissões de carbono na capital.",
        excerpt: "Maputo inaugura primeiro metro ligeiro da África Austral, conectando centro da cidade aos subúrbios de Matola e Marracuene.",
        author: "Carlos Tembe",
        source: "Domingo",
        category: "technology",
        country: "mozambique",
        imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800",
        publishedAt: new Date(Date.now() - 14400000),
        trending: false,
        breaking: false,
        url: "https://domingo.co.mz/metro-maputo"
    },

    // Notícias de Angola
    {
        id: 6,
        title: "Angola Descobre Reservas de Lítio em Kwanza Sul",
        content: "O Ministério dos Recursos Minerais de Angola anunciou a descoberta de significativas reservas de lítio na província do Kwanza Sul. As estimativas preliminares indicam reservas de aproximadamente 9 milhões de toneladas, posicionando Angola como potencial fornecedor mundial deste mineral estratégico para a indústria de baterias. O projeto de exploração, desenvolvido em parceria com empresas chinesas, deverá criar 3.000 empregos diretos e contribuir para a diversificação da economia angolana.",
        excerpt: "Angola descobre reservas de 9 milhões de toneladas de lítio em Kwanza Sul, abrindo oportunidades na indústria global de baterias.",
        author: "Maria Fernandes",
        source: "Jornal de Angola",
        category: "science",
        country: "angola",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        publishedAt: new Date(Date.now() - 5400000),
        trending: true,
        breaking: false,
        url: "https://jornaldeangola.ao/litio-kwanza-sul"
    },
    {
        id: 7,
        title: "Luanda Lança Programa de Mobilidade Urbana Sustentável",
        content: "A Administração Provincial de Luanda apresentou um ambicioso programa de mobilidade urbana sustentável que incluirá a construção de 150 km de ciclovias, renovação da frota de autocarros urbanos e implementação de um sistema de partilha de bicicletas elétricas. O programa, orçado em 300 milhões de dólares, visa reduzir o congestionamento de tráfego e melhorar a qualidade do ar na capital angolana.",
        excerpt: "Luanda investe 300 milhões de dólares em mobilidade sustentável com ciclovias, novos autocarros e bicicletas elétricas.",
        author: "Pedro Cassoma",
        source: "O País Angola",
        category: "environment",
        country: "angola",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
        publishedAt: new Date(Date.now() - 18000000),
        trending: false,
        breaking: false,
        url: "https://opais.ao/mobilidade-luanda"
    },

    // Notícias de Cabo Verde
    {
        id: 8,
        title: "Cabo Verde Torna-se Hub Tecnológico do Atlântico",
        content: "O arquipélago de Cabo Verde posiciona-se como hub tecnológico do Atlântico com a inauguração do primeiro centro de dados submarinos da África Ocidental. O projeto, resultado de uma parceria entre o governo cabo-verdiano e empresas portuguesas e brasileiras, aproveitará as correntes oceânicas para refrigeração natural dos servidores, reduzindo os custos energéticos em 40%. O centro atenderá toda a região da África Ocidental e parte da América do Sul.",
        excerpt: "Cabo Verde inaugura primeiro centro de dados submarinos da África Ocidental, aproveitando correntes oceânicas para refrigeração.",
        author: "Amilcar Cabral Jr.",
        source: "A Semana CV",
        category: "technology",
        country: "cape-verde",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
        publishedAt: new Date(Date.now() - 21600000),
        trending: true,
        breaking: false,
        url: "https://asemana.cv/hub-tecnologico"
    },

    // Notícias da Guiné-Bissau
    {
        id: 9,
        title: "Guiné-Bissau Preserva 80% da Biodiversidade Original",
        content: "Um estudo internacional divulgado hoje revelou que a Guiné-Bissau conseguiu preservar 80% da sua biodiversidade original, tornando-se um modelo de conservação para a África Ocidental. O Parque Nacional das Ilhas Orango abriga a maior população de hipopótamos marinhos do mundo, enquanto o Parque Nacional de Cantanhez protege os últimos chimpanzés da região. O país implementou políticas pioneiras de eco-turismo sustentável que geram renda para as comunidades locais.",
        excerpt: "Guiné-Bissau preserva 80% da biodiversidade original, tornando-se modelo de conservação na África Ocidental.",
        author: "Fatumata Djaló",
        source: "No Pintcha",
        category: "environment",
        country: "guinea-bissau",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
        publishedAt: new Date(Date.now() - 25200000),
        trending: false,
        breaking: false,
        url: "https://nopintcha.com/biodiversidade"
    },

    // Notícias de São Tomé e Príncipe
    {
        id: 10,
        title: "São Tomé Produz Chocolate Premium Reconhecido Mundialmente",
        content: "O cacau de São Tomé e Príncipe conquistou o prémio de 'Melhor Chocolate do Mundo' na International Chocolate Awards 2024, realizada em Londres. As plantações sustentáveis da ilha, que preservam variedades raras de cacau Trinitário, produzem apenas 3.000 toneladas anuais, mas de qualidade excecional. O reconhecimento internacional aumentou o valor das exportações em 150%, beneficiando diretamente mais de 2.000 famílias de pequenos produtores.",
        excerpt: "Cacau de São Tomé conquista prémio de 'Melhor Chocolate do Mundo', aumentando exportações em 150%.",
        author: "Albertino Bragança",
        source: "Téla Nón",
        category: "economy",
        country: "sao-tome",
        imageUrl: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=800",
        publishedAt: new Date(Date.now() - 28800000),
        trending: true,
        breaking: false,
        url: "https://telanon.info/chocolate-premio"
    },

    // Notícias do Timor-Leste
    {
        id: 11,
        title: "Timor-Leste Desenvolve Café Especial de Altitude",
        content: "Os cafés de altitude de Timor-Leste estão a ganhar reconhecimento internacional pela sua qualidade excepcional. Cultivados nas montanhas de Ermera a mais de 1.200 metros de altitude, os grãos de café timorenses apresentam características únicas de sabor e aroma. Uma cooperativa de 500 produtores locais assinou contratos de exportação com torrefadores especializados do Japão, Austrália e Portugal, triplicando o valor das suas vendas.",
        excerpt: "Café de altitude de Timor-Leste ganha mercado internacional, triplicando valor das vendas para produtores locais.",
        author: "Maria Auxiliadora",
        source: "Suara Timor Lorosae",
        category: "economy",
        country: "east-timor",
        imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800",
        publishedAt: new Date(Date.now() - 32400000),
        trending: false,
        breaking: false,
        url: "https://suaratimorlorosae.com/cafe-altitude"
    },

    // Notícias da China (relacionadas com PALOPS)
    {
        id: 12,
        title: "China Investe US$ 2 Bilhões em Infraestrutura Ferroviária nos PALOPS",
        content: "O Banco de Desenvolvimento da China anunciou um pacote de investimento de US$ 2 bilhões para modernização da infraestrutura ferroviária nos países de língua portuguesa em África. O programa abrange a construção de 1.200 km de novas linhas férreas e a reabilitação de sistemas existentes em Angola, Moçambique e Guiné-Bissau, fortalecendo a conectividade regional e o comércio bilateral. O projeto prevê a criação de 25.000 empregos diretos e a transferência de tecnologia ferroviária chinesa para técnicos africanos.",
        excerpt: "China anuncia investimento de US$ 2 bilhões em infraestrutura ferroviária nos PALOPS, incluindo 1.200 km de novas linhas.",
        author: "Li Wei",
        source: "China Daily Africa",
        category: "economy",
        country: "china",
        imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800",
        publishedAt: new Date(Date.now() - 36000000),
        trending: true,
        breaking: false,
        url: "https://chinadaily.com.cn/africa-railways"
    },
    {
        id: 13,
        title: "Universidades Chinesas Oferecem 500 Bolsas para Estudantes dos PALOPS",
        content: "O Ministério da Educação da China anunciou a disponibilização de 500 bolsas de estudo integrais para estudantes dos países PALOPS em áreas estratégicas como engenharia, medicina, tecnologia da informação e agricultura sustentável. O programa, que faz parte da Iniciativa do Cinturão e Rota, incluirá também estágios em empresas chinesas e programas de intercâmbio cultural. As candidaturas já estão abertas através dos consulados chineses nos respetivos países.",
        excerpt: "China oferece 500 bolsas integrais para estudantes dos PALOPS em engenharia, medicina e tecnologia.",
        author: "Wang Xiaoli",
        source: "Xinhua Portuguese",
        category: "science",
        country: "china",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        publishedAt: new Date(Date.now() - 39600000),
        trending: false,
        breaking: false,
        url: "https://portuguese.xinhuanet.com/bolsas-palops"
    },

    // Notícias da Coreia do Sul (relacionadas com PALOPS)
    {
        id: 14,
        title: "Coreia do Sul Lança Programa de Digitalização para PALOPS",
        content: "O governo sul-coreano apresentou um programa de 300 milhões de dólares para digitalização dos serviços públicos nos países PALOPS. A iniciativa incluirá a implementação de sistemas de governo eletrónico, digitalização de registos civis e criação de plataformas de e-commerce para pequenos produtores. Samsung e LG lideram o consórcio tecnológico que fornecerá equipamentos e formação técnica. O programa começará por Cabo Verde e Moçambique como projetos piloto.",
        excerpt: "Coreia do Sul investe 300 milhões em digitalização dos PALOPS, começando por Cabo Verde e Moçambique.",
        author: "Park Jin-su",
        source: "Korea Herald Africa",
        category: "technology",
        country: "south-korea",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
        publishedAt: new Date(Date.now() - 43200000),
        trending: true,
        breaking: false,
        url: "https://koreaherald.com/africa-digital"
    },
    {
        id: 15,
        title: "K-pop e Cultura Coreana Ganham Popularidade em Moçambique",
        content: "O fenómeno do K-pop está a conquistar jovens moçambicanos, com grupos de dança formados em Maputo, Beira e Nampula. O Centro Cultural Coreano em Maputo registou um aumento de 400% nas inscrições para aulas de coreano e workshops de cultura pop. Três jovens moçambicanos foram selecionados para participar num programa de intercâmbio cultural em Seul, onde aprofundarão conhecimentos em música, dança e produção audiovisual.",
        excerpt: "K-pop conquista jovens moçambicanos, com aumento de 400% nas inscrições para aulas de coreano em Maputo.",
        author: "Kim So-young",
        source: "Yonhap Português",
        category: "entertainment",
        country: "south-korea",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
        publishedAt: new Date(Date.now() - 46800000),
        trending: false,
        breaking: false,
        url: "https://yonhapnews.co.kr/mozambique-kpop"
    },

    // Notícias do Brasil (cooperação com PALOPS)
    {
        id: 16,
        title: "Brasil e PALOPS Assinam Acordo de Cooperação em Energias Renováveis",
        content: "O Brasil assinou um memorando de entendimento com os países PALOPS para cooperação em energias renováveis, partilhando tecnologia brasileira em energia solar, eólica e biomassa. O acordo prevê a instalação de 500 MW de capacidade renovável distribuída pelos países africanos de língua portuguesa até 2027. A Petrobras e empresas brasileiras do setor energético liderarão os projetos, com financiamento do BNDES.",
        excerpt: "Brasil e PALOPS assinam cooperação em energias renováveis, prevendo 500 MW de capacidade até 2027.",
        author: "Roberto Silva",
        source: "Agência Brasil",
        category: "science",
        country: "brazil",
        imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800",
        publishedAt: new Date(Date.now() - 50400000),
        trending: false,
        breaking: false,
        url: "https://agenciabrasil.ebc.com.br/palops-energia"
    },

    // Notícias de Portugal (cooperação com PALOPS)
    {
        id: 17,
        title: "Portugal Cria Fundo de 100 Milhões para Startups dos PALOPS",
        content: "O governo português anunciou a criação de um fundo de investimento de 100 milhões de euros dedicado exclusivamente a startups dos países PALOPS. O fundo, gerido pela Portugal Ventures em parceria com investidores privados, focará em empresas de tecnologia, agro-tech e fintech que demonstrem potencial de escalabilidade regional. As primeiras candidaturas serão aceites a partir de janeiro de 2025, com eventos de pitch planeados para Luanda, Maputo e Praia.",
        excerpt: "Portugal cria fundo de 100 milhões de euros para startups dos PALOPS, focando em tecnologia e fintech.",
        author: "Ana Mendes",
        source: "Público",
        category: "economy",
        country: "portugal",
        imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800",
        publishedAt: new Date(Date.now() - 54000000),
        trending: true,
        breaking: false,
        url: "https://publico.pt/fundo-startups-palops"
    },

    // Notícias Globais/Internacionais
    {
        id: 18,
        title: "CPLP Aprova Estratégia Digital Comum para 2030",
        content: "Os países da Comunidade dos Países de Língua Portuguesa (CPLP) aprovaram uma estratégia digital comum que visa harmonizar políticas de telecomunicações, cibersegurança e governo eletrónico até 2030. A estratégia incluirá a criação de um certificado digital CPLP, facilitando transações comerciais e mobilidade entre os países membros. O projeto receberá apoio técnico da União Europeia e financiamento de organismos multilaterais de desenvolvimento.",
        excerpt: "CPLP aprova estratégia digital comum até 2030, incluindo certificado digital para facilitar comércio entre países membros.",
        author: "Múltiplos correspondentes",
        source: "CPLP News",
        category: "politics",
        country: "global",
        imageUrl: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=800",
        publishedAt: new Date(Date.now() - 57600000),
        trending: false,
        breaking: true,
        url: "https://cplp.org/estrategia-digital-2030"
    }
];

// Elementos DOM
const heroNews = document.getElementById('heroNews');
const newsGrid = document.getElementById('newsGrid');
const trendingNews = document.getElementById('trendingNews');
const loadingIndicator = document.getElementById('loadingIndicator');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const countryFilter = document.getElementById('countryFilter');
const refreshBtn = document.getElementById('refreshBtn');
const newsModal = document.getElementById('newsModal');
const closeModal = document.getElementById('closeModal');
const toast = document.getElementById('toast');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadNews();
    loadTrendingNews();
    updateFiltersFromState();
}

function setupEventListeners() {
    // Botões principais
    searchBtn.addEventListener('click', performSearch);
    refreshBtn.addEventListener('click', refreshNews);
    loadMoreBtn.addEventListener('click', loadMoreNews);
    
    // Filtros
    categoryFilter.addEventListener('change', handleCategoryChange);
    countryFilter.addEventListener('change', handleCountryChange);
    
    // Busca
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Modal
    closeModal.addEventListener('click', closeNewsModal);
    newsModal.addEventListener('click', function(e) {
        if (e.target === newsModal) {
            closeNewsModal();
        }
    });
    
    // Escape para fechar modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && newsModal.classList.contains('active')) {
            closeNewsModal();
        }
    });
}

function updateFiltersFromState() {
    countryFilter.value = currentFilters.country;
    categoryFilter.value = currentFilters.category;
    searchInput.value = currentFilters.search;
}

function getCountryFlag(country) {
    const flags = {
        'mozambique': '🇲🇿',
        'angola': '🇦🇴',
        'cape-verde': '🇨🇻',
        'guinea-bissau': '🇬🇼',
        'sao-tome': '🇸🇹',
        'east-timor': '🇹🇱',
        'china': '🇨🇳',
        'south-korea': '🇰🇷',
        'brazil': '🇧🇷',
        'portugal': '🇵🇹',
        'global': '🌍'
    };
    return flags[country] || '🌍';
}

function getCountryName(country) {
    const names = {
        'mozambique': 'Moçambique',
        'angola': 'Angola',
        'cape-verde': 'Cabo Verde',
        'guinea-bissau': 'Guiné-Bissau',
        'sao-tome': 'São Tomé e Príncipe',
        'east-timor': 'Timor-Leste',
        'china': 'China',
        'south-korea': 'Coreia do Sul',
        'brazil': 'Brasil',
        'portugal': 'Portugal',
        'global': 'Global'
    };
    return names[country] || country;
}

function getCategoryName(category) {
    const names = {
        'science': 'Ciência',
        'technology': 'Tecnologia',
        'health': 'Saúde',
        'economy': 'Economia',
        'politics': 'Política',
        'sports': 'Esportes',
        'environment': 'Ambiente',
        'entertainment': 'Entretenimento'
    };
    return names[category] || category;
}

function getCategoryIcon(category) {
    const icons = {
        'science': 'fa-flask',
        'technology': 'fa-microchip',
        'health': 'fa-heartbeat',
        'economy': 'fa-chart-line',
        'politics': 'fa-landmark',
        'sports': 'fa-futbol',
        'environment': 'fa-leaf',
        'entertainment': 'fa-music'
    };
    return icons[category] || 'fa-newspaper';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Agora mesmo';
    if (diffInHours < 24) return `${diffInHours}h atrás`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d atrás`;
    return date.toLocaleDateString('pt-BR', { 
        day: 'numeric', 
        month: 'short',
        year: 'numeric'
    });
}

async function loadNews(reset = true) {
    if (isLoading) return;
    
    isLoading = true;
    showLoading(true);
    
    if (reset) {
        currentPage = 1;
        newsGrid.innerHTML = '';
    }
    
    try {
        // Simular delay de carregamento
        await new Promise(resolve => setTimeout(resolve, 800));
        
        let filteredNews = filterNews(newsDatabase);
        
        // Paginação
        const itemsPerPage = 6;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedNews = filteredNews.slice(startIndex, endIndex);
        
        if (reset) {
            currentNews = paginatedNews;
        } else {
            currentNews = [...currentNews, ...paginatedNews];
        }
        
        renderNews(paginatedNews, reset);
        
        if (paginatedNews.length > 0 && reset) {
            updateHeroNews(paginatedNews[0]);
        }
        
        // Atualizar botão de carregar mais
        const hasMore = endIndex < filteredNews.length;
        loadMoreBtn.style.display = hasMore ? 'block' : 'none';
        
    } catch (error) {
        console.error('Erro ao carregar notícias:', error);
        showToast('Erro ao carregar notícias. Tente novamente.', 'error');
    }
    
    isLoading = false;
    showLoading(false);
}

function filterNews(news) {
    let filtered = [...news];
    
    // Filtro por país
    if (currentFilters.country && currentFilters.country !== 'all') {
        filtered = filtered.filter(article => article.country === currentFilters.country);
    }
    
    // Filtro por categoria
    if (currentFilters.category && currentFilters.category !== 'all') {
        filtered = filtered.filter(article => article.category === currentFilters.category);
    }
    
    // Filtro por busca
    if (currentFilters.search) {
        const searchTerm = currentFilters.search.toLowerCase();
        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(searchTerm) ||
            article.content.toLowerCase().includes(searchTerm) ||
            article.author.toLowerCase().includes(searchTerm) ||
            article.source.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filtro por trending
    if (currentFilters.trending) {
        filtered = filtered.filter(article => article.trending);
    }
    
    // Filtro por breaking
    if (currentFilters.breaking) {
        filtered = filtered.filter(article => article.breaking);
    }
    
    // Ordenar por data (mais recentes primeiro)
    filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    return filtered;
}

function renderNews(articles, reset = false) {
    if (reset) {
        newsGrid.innerHTML = '';
    }
    
    articles.forEach((article, index) => {
        const newsCard = createNewsCard(article);
        newsGrid.appendChild(newsCard);
        
        // Animação escalonada
        setTimeout(() => {
            newsCard.classList.add('fade-in');
        }, index * 100);
    });
}

function createNewsCard(article) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.setAttribute('data-id', article.id);
    
    const imageUrl = article.imageUrl;
    const category = getCategoryName(article.category);
    const categoryIcon = getCategoryIcon(article.category);
    const publishedDate = formatDate(article.publishedAt);
    const countryFlag = getCountryFlag(article.country);
    const countryName = getCountryName(article.country);
    const isSaved = savedArticles.includes(article.id);
    
    card.innerHTML = `
        <div class="news-image" style="background-image: url('${imageUrl}')">
            <span class="news-category">
                <i class="fas ${categoryIcon}"></i> ${category}
            </span>
            ${article.trending ? '<span class="trending-badge"><i class="fas fa-fire"></i> TRENDING</span>' : ''}
            ${article.breaking ? '<span class="breaking-badge"><i class="fas fa-bolt"></i> BREAKING</span>' : ''}
            <span class="country-flag">${countryFlag} ${countryName}</span>
            <div class="news-actions">
                <button onclick="toggleSaveArticle(${article.id})" class="${isSaved ? 'saved' : ''}" title="${isSaved ? 'Remover dos salvos' : 'Salvar artigo'}">
                    <i class="fas fa-bookmark"></i>
                </button>
                <button onclick="shareArticle(${article.id})" title="Compartilhar">
                    <i class="fas fa-share"></i>
                </button>
            </div>
        </div>
        <div class="news-content">
            <h3 class="news-title">${article.title}</h3>
            <p class="news-description">${article.excerpt}</p>
            <div class="news-meta">
                <div>
                    <span class="news-source">${article.source}</span>
                    <br>
                    <span style="color: #aaa; font-size: 0.8rem;">Por ${article.author}</span>
                </div>
                <span class="news-date">
                    <i class="fas fa-clock"></i>
                    ${publishedDate}
                </span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        // Não abrir modal se clicou nos botões de ação
        if (!e.target.closest('.news-actions')) {
            openNewsModal(article);
        }
    });
    
    return card;
}

function updateHeroNews(article) {
    if (!article) return;
    
    const imageUrl = article.imageUrl;
    const category = getCategoryName(article.category);
    const publishedDate = formatDate(article.publishedAt);
    const countryFlag = getCountryFlag(article.country);
    const countryName = getCountryName(article.country);
    
    heroNews.innerHTML = `
        <div class="hero-image" style="background-image: url('${imageUrl}')"></div>
        <div class="hero-content">
            <span class="hero-category">${countryFlag} ${category}</span>
            <h1 class="hero-title">${article.title}</h1>
            <p class="hero-excerpt">${article.excerpt}</p>
            <div class="hero-meta">
                <span class="hero-source">${article.source}</span>
                <span class="hero-date">${publishedDate}</span>
            </div>
        </div>
    `;
    
    heroNews.addEventListener('click', () => openNewsModal(article));
}

async function loadTrendingNews() {
    try {
        // Filtrar notícias trending de todos os países
        const trendingArticles = newsDatabase
            .filter(article => article.trending)
            .slice(0, 6);
        
        trendingNews.innerHTML = '';
        
        trendingArticles.forEach((article, index) => {
            const trendingCard = createTrendingCard(article);
            trendingNews.appendChild(trendingCard);
            
            setTimeout(() => {
                trendingCard.classList.add('fade-in');
            }, index * 150);
        });
        
    } catch (error) {
        console.error('Erro ao carregar notícias em destaque:', error);
    }
}

function createTrendingCard(article) {
    const card = document.createElement('div');
    card.className = 'trending-card';
    
    const imageUrl = article.imageUrl;
    const countryFlag = getCountryFlag(article.country);
    
    card.innerHTML = `
        <div class="trending-image" style="background-image: url('${imageUrl}')"></div>
        <div class="trending-content">
            <h4 class="trending-title">${article.title}</h4>
            <span class="trending-source">${countryFlag} ${article.source}</span>
        </div>
    `;
    
    card.addEventListener('click', () => openNewsModal(article));
    
    return card;
}

function openNewsModal(article) {
    const modal = document.getElementById('newsModal');
    const modalImage = document.getElementById('modalImage');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalSource = document.getElementById('modalSource');
    const modalDate = document.getElementById('modalDate');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalDescription = document.getElementById('modalDescription');
    const externalBtn = document.getElementById('externalBtn');
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    
    // Preencher modal com dados do artigo
    modalImage.src = article.imageUrl;
    modalCategory.textContent = `${getCountryFlag(article.country)} ${getCategoryName(article.category)}`;
    modalTitle.textContent = article.title;
    modalSource.textContent = article.source;
    modalDate.textContent = formatDate(article.publishedAt);
    modalAuthor.textContent = `Por ${article.author}`;
    modalDescription.textContent = article.content;
    externalBtn.href = article.url;
    
    // Atualizar botão de bookmark
    const isSaved = savedArticles.includes(article.id);
    bookmarkBtn.innerHTML = `<i class="fas fa-bookmark"></i> ${isSaved ? 'Remover dos Salvos' : 'Salvar Artigo'}`;
    bookmarkBtn.onclick = () => toggleSaveArticle(article.id);
    
    // Configurar botão de compartilhar
    document.getElementById('shareBtn').onclick = () => shareArticle(article.id);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNewsModal() {
    const modal = document.getElementById('newsModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function toggleSaveArticle(articleId) {
    const index = savedArticles.indexOf(articleId);
    
    if (index > -1) {
        // Remover dos salvos
        savedArticles.splice(index, 1);
        showToast('Artigo removido dos salvos', 'info');
    } else {
        // Adicionar aos salvos
        savedArticles.push(articleId);
        showToast('Artigo salvo com sucesso!', 'success');
    }
    
    // Salvar no localStorage
    localStorage.setItem('newsmania-saved', JSON.stringify(savedArticles));
    
    // Atualizar interface
    updateSavedArticlesUI();
}

function updateSavedArticlesUI() {
    // Atualizar cards de notícias
    document.querySelectorAll('.news-card').forEach(card => {
        const articleId = parseInt(card.getAttribute('data-id'));
        const saveBtn = card.querySelector('.news-actions button');
        const isSaved = savedArticles.includes(articleId);
        
        if (saveBtn) {
            saveBtn.className = isSaved ? 'saved' : '';
            saveBtn.title = isSaved ? 'Remover dos salvos' : 'Salvar artigo';
        }
    });
    
    // Atualizar modal se estiver aberto
    if (newsModal.classList.contains('active')) {
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        const modalTitle = document.getElementById('modalTitle');
        const article = newsDatabase.find(a => a.title === modalTitle.textContent);
        
        if (article) {
            const isSaved = savedArticles.includes(article.id);
            bookmarkBtn.innerHTML = `<i class="fas fa-bookmark"></i> ${isSaved ? 'Remover dos Salvos' : 'Salvar Artigo'}`;
        }
    }
}

function shareArticle(articleId) {
    const article = newsDatabase.find(a => a.id === articleId);
    if (!article) return;
    
    if (navigator.share) {
        navigator.share({
            title: article.title,
            text: article.excerpt,
            url: article.url
        }).catch(err => console.log('Erro ao compartilhar:', err));
    } else {
        // Fallback para copiar link
        navigator.clipboard.writeText(article.url).then(() => {
            showToast('Link copiado para a área de transferência!', 'success');
        }).catch(() => {
            showToast('Não foi possível copiar o link', 'error');
        });
    }
}

function showSavedArticles() {
    if (savedArticles.length === 0) {
        showToast('Nenhum artigo salvo ainda', 'info');
        return;
    }
    
    const savedNews = newsDatabase.filter(article => savedArticles.includes(article.id));
    
    // Limpar filtros e mostrar apenas salvos
    currentFilters = {
        country: 'all',
        category: 'all',
        search: '',
        trending: false,
        breaking: false
    };
    
    updateFiltersFromState();
    newsGrid.innerHTML = '';
    renderNews(savedNews, true);
    
    if (savedNews.length > 0) {
        updateHeroNews(savedNews[0]);
    }
    
    loadMoreBtn.style.display = 'none';
    showToast(`Mostrando ${savedNews.length} artigos salvos`, 'info');
}

function performSearch() {
    currentFilters.search = searchInput.value.trim();
    currentFilters.trending = false;
    currentFilters.breaking = false;
    loadNews(true);
}

function handleCategoryChange() {
    currentFilters.category = categoryFilter.value;
    currentFilters.trending = false;
    currentFilters.breaking = false;
    loadNews(true);
}

function handleCountryChange() {
    currentFilters.country = countryFilter.value;
    currentFilters.trending = false;
    currentFilters.breaking = false;
    loadNews(true);
}

function filterByQuick(type) {
    // Remover active de todos os links de navegação
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    
    switch (type) {
        case 'trending':
            currentFilters.trending = true;
            currentFilters.breaking = false;
            event.target.classList.add('active');
            break;
        case 'breaking':
            currentFilters.breaking = true;
            currentFilters.trending = false;
            event.target.classList.add('active');
            break;
        case 'recent':
            currentFilters.trending = false;
            currentFilters.breaking = false;
            currentFilters.search = '';
            searchInput.value = '';
            event.target.classList.add('active');
            break;
    }
    
    loadNews(true);
}

function refreshNews() {
    // Animação do botão
    refreshBtn.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Atualizando...';
    refreshBtn.disabled = true;
    
    setTimeout(() => {
        loadNews(true);
        loadTrendingNews();
        
        refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Atualizar';
        refreshBtn.disabled = false;
        
        showToast('Notícias atualizadas!', 'success');
    }, 1000);
}

function loadMoreNews() {
    currentPage++;
    loadNews(false);
}

function showLoading(show) {
    if (show) {
        loadingIndicator.classList.add('active');
    } else {
        loadingIndicator.classList.remove('active');
    }
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastIcon = toast.querySelector('.toast-icon');
    const toastMessage = toast.querySelector('.toast-message');
    
    // Configurar ícone e cor baseado no tipo
    const configs = {
        'success': { icon: 'fa-check-circle', color: '#00e676' },
        'error': { icon: 'fa-exclamation-circle', color: '#ff3d00' },
        'info': { icon: 'fa-info-circle', color: '#ffbe0b' }
    };
    
    const config = configs[type] || configs.info;
    toastIcon.className = `toast-icon fas ${config.icon}`;
    toastIcon.style.color = config.color;
    toastMessage.textContent = message;
    
    // Mostrar toast
    toast.classList.add('active');
    
    // Esconder após 4 segundos
    setTimeout(() => {
        toast.classList.remove('active');
    }, 4000);
}

// Filtros rápidos para funcções globais
window.filterByQuick = filterByQuick;
window.showSavedArticles = showSavedArticles;
window.toggleSaveArticle = toggleSaveArticle;
window.shareArticle = shareArticle;