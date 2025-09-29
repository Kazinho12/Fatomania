// Banco de dados de artigos sobre mistérios
const articles = [
    {
        id: 1,
        title: "O Triângulo das Bermudas: Novo Caso Documentado",
        author: "Dr. Helena Paranormal",
        excerpt: "Piloto comercial relata experiência sobrenatural ao sobrevoar a região mais misteriosa do planeta...",
        category: "paranormal",
        mysteryLevel: "🔥 Extremo",
        date: "15/01/2024",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        content: "<p>Um piloto experiente da American Airlines relatou uma experiência inexplicável ao sobrevoar o Triângulo das Bermudas na última semana. Durante o voo de rotina entre Miami e Nassau, instrumentos começaram a falhar misteriosamente.</p><p>Segundo o comandante James Mitchell, com 20 anos de experiência, todos os equipamentos eletrônicos da aeronave apresentaram falhas simultâneas por exatos 11 minutos. 'Era como se estivéssemos em uma bolha onde as leis da física não se aplicavam', relatou o piloto.</p><p>O mais perturbador foi o avistamento de luzes não identificadas que acompanharam a aeronave durante todo o episódio. As luzes formavam padrões geométricos impossíveis e se moviam com velocidades que desafiam nossa compreensão atual da aeronáutica.</p>",
        likes: 666,
        comments: [
            { author: "Investigador X", date: "16/01/2024", text: "Mais uma evidência de que há forças além da nossa compreensão naquela região." },
            { author: "Cético Racional", date: "17/01/2024", text: "Pode ter sido interferência eletromagnética natural. Não vamos aos extremos." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 2,
        title: "Avistamento OVNI em Massa no Chile",
        author: "Prof. Carlos Ufólogo",
        excerpt: "Mais de 200 testemunhas relatam objeto não identificado com tecnologia impossível sobre Santiago...",
        category: "ovni",
        mysteryLevel: "🔥 Extremo",
        date: "22/01/2024",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800",
        content: "<p>Na noite de 20 de janeiro, centenas de moradores de Santiago presenciaram um fenômeno que desafia qualquer explicação convencional. Um objeto de formato triangular, do tamanho de um estádio de futebol, permaneceu suspenso silenciosamente sobre a cidade por mais de 3 horas.</p><p>O que tornou este avistamento único foram as características tecnológicas observadas: o objeto mantinha uma altitude constante sem qualquer sistema de propulsão visível, não emitia som algum e apresentava um campo energético que interferia em dispositivos eletrônicos em um raio de 5 quilômetros.</p><p>Militares chilenos confirmaram a detecção em radar, mas se recusaram a comentar sobre a natureza do objeto. Vídeos gravados por dezenas de testemunhas mostram manobras que violam as leis conhecidas da aerodinâmica, incluindo mudanças de direção instantâneas a velocidades impossíveis.</p>",
        likes: 892,
        comments: [
            { author: "Testemunha Ocular", date: "23/01/2024", text: "Eu estava lá! Foi real e absolutamente aterrorizante. Nunca vi nada parecido." },
            { author: "Analista Militar", date: "24/01/2024", text: "Se os militares detectaram, por que não explicam? O silêncio oficial é suspeito." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 3,
        title: "A Lenda do Chupacabra: Evidências Recentes",
        author: "Dra. Maria Criptozoóloga",
        excerpt: "Nova expedição encontra evidências físicas da criatura lendária em Porto Rico...",
        category: "lendas",
        mysteryLevel: "⚡ Alto",
        date: "05/01/2024",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        content: "<p>Uma expedição científica liderada pela renomada criptozoóloga Dra. Maria Santos descobriu evidências físicas que podem finalmente provar a existência do lendário Chupacabra. As descobertas foram feitas em uma região remota de Porto Rico, conhecida pelos avistamentos da criatura.</p><p>Entre as evidências encontradas estão: pegadas com características únicas que não correspondem a nenhum animal conhecido, pelos com composição genética anômala e marcas de dentes em ossos que sugerem uma mandíbula com força sobre-humana.</p><p>Análises laboratoriais preliminares dos pelos coletados revelaram uma estrutura celular nunca vista antes na natureza. O DNA extraído não corresponde a nenhuma espécie catalogada, apresentando sequências genéticas que parecem ser uma fusão impossível entre características reptilianas e mamíferas.</p>",
        likes: 534,
        comments: [
            { author: "Morador Local", date: "06/01/2024", text: "Minha família vê essa criatura há gerações. Finalmente alguém levou a sério!" },
            { author: "Geneticista", date: "07/01/2024", text: "Preciso ver essas análises de DNA. Se for verdade, revoluciona a biologia." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 4,
        title: "Conspiração MK-Ultra: Documentos Desclassificados",
        author: "Investigador Anonymous",
        excerpt: "CIA libera documentos secretos sobre experimentos de controle mental realizados nos anos 70...",
        category: "conspiracoes",
        mysteryLevel: "🔥 Extremo",
        date: "28/12/2023",
        image: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2f6?w=800",
        content: "<p>Documentos recentemente desclassificados da CIA revelam detalhes chocantes sobre o projeto MK-Ultra, programa secreto de controle mental que operou entre 1953 e 1973. As revelações superam as teorias mais perturbadoras já especuladas.</p><p>Os experimentos incluíam uso de drogas psicoativas em indivíduos sem consentimento, técnicas de tortura psicológica e tentativas de programação mental através de hipnose e privação sensorial. Milhares de pessoas foram utilizadas como cobaias, incluindo pacientes psiquiátricos e prisioneiros.</p><p>O mais perturbador é a evidência de que algumas técnicas desenvolvidas ainda são utilizadas hoje em interrogatórios e operações de inteligência. Famílias de vítimas estão processando o governo americano, exigindo reparações pelos danos causados.</p>",
        likes: 1247,
        comments: [
            { author: "Filho de Vítima", date: "29/12/2023", text: "Meu pai nunca foi o mesmo depois dos 'tratamentos'. Agora entendo o porquê." },
            { author: "Ex-Agente", date: "30/12/2023", text: "Isso é apenas a ponta do iceberg. Há muito mais que não foi revelado." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 5,
        title: "O Mistério das Pirâmides de Gizé",
        author: "Arqueólogo Dr. Hassan",
        excerpt: "Scanner 3D revela câmara secreta nunca vista na Grande Pirâmide...",
        category: "historicos",
        mysteryLevel: "⚡ Alto",
        date: "10/01/2024",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb2?w=800",
        content: "<p>Uma descoberta revolucionária na Grande Pirâmide de Gizé pode reescrever nossa compreensão sobre a civilização egípcia antiga. Utilizando tecnologia de muografia cósmica, cientistas identificaram uma câmara oculta com dimensões impressionantes.</p><p>A câmara recém-descoberta possui 30 metros de comprimento e está localizada acima da Grande Galeria. O que intriga os pesquisadores é sua posição estratégica e o fato de nunca ter sido violada por saqueadores ao longo de 4.500 anos.</p><p>Análises preliminares sugerem que a câmara pode conter artefatos ou conhecimentos preservados pelos antigos construtores. A precisão matemática da construção continua desafiando nossa compreensão sobre as capacidades tecnológicas do Egito antigo.</p>",
        likes: 789,
        comments: [
            { author: "Egiptólogo", date: "11/01/2024", text: "Esta descoberta pode revelar segredos milenares sobre os faraós." },
            { author: "Entusiasta", date: "12/01/2024", text: "Será que encontraram tecnologia avançada perdida?" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 6,
        title: "Combustão Humana Espontânea: Caso Investigado",
        author: "Forense Dr. Patricia",
        excerpt: "Corpo humano se incendeia sem fonte de ignição externa em caso documentado pela polícia...",
        category: "cientificos",
        mysteryLevel: "⚡ Alto",
        date: "18/01/2024",
        image: "https://images.unsplash.com/photo-1594736797933-d0a628c5bf25?w=800",
        content: "<p>Um caso extraordinário de combustão humana espontânea foi documentado pela polícia de Londres, desafiando todas as explicações científicas convencionais. A vítima, John Thompson de 67 anos, foi encontrada completamente incinerada em sua poltrona, enquanto o resto da sala permaneceu intacto.</p><p>O que torna este caso único é a ausência total de qualquer fonte de ignição externa. Investigadores forenses confirmaram que não havia cigarros, fósforos, velas ou equipamentos elétricos nas proximidades. A temperatura necessária para consumir um corpo humano completamente excede 1.600°C.</p><p>Mais intrigante ainda é o fato de que objetos inflamáveis a poucos centímetros do corpo não foram afetados pelo fogo. Jornais, cortinas e móveis de madeira permaneceram completamente intactos, como se o fogo tivesse se limitado exclusivamente ao corpo da vítima.</p>",
        likes: 678,
        comments: [
            { author: "Bombeiro", date: "19/01/2024", text: "Em 30 anos de carreira, nunca vi algo assim. Desafia toda lógica." },
            { author: "Cientista", date: "20/01/2024", text: "Deve haver uma explicação racional. Talvez gases corporais?" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 7,
        title: "Nazca: Novas Linhas Descobertas por IA",
        author: "Arqueóloga Dra. Sofia",
        excerpt: "Inteligência artificial revela 168 novas geoglifos no deserto peruano com padrões impossíveis...",
        category: "lugares",
        mysteryLevel: "🔥 Extremo",
        date: "12/01/2024",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        content: "<p>Uma descoberta revolucionária nas planícies de Nazca, no Peru, está mudando nossa compreensão sobre esta civilização misteriosa. Usando inteligência artificial para analisar imagens de satélite, pesquisadores identificaram 168 novos geoglifos nunca antes catalogados.</p><p>Os novos desenhos incluem figuras humanoides com características anatômicas impossíveis, animais que não existem na fauna local e padrões geométricos que demonstram conhecimento matemático avançado. Alguns geoglifos chegam a ter 200 metros de comprimento.</p><p>O mais intrigante é que várias figuras parecem representar seres com capacetes ou vestimentas tecnológicas, além de objetos que se assemelham a máquinas voadoras. A precisão das linhas, visíveis apenas do alto, continua sendo um enigma para arqueólogos.</p>",
        likes: 945,
        comments: [
            { author: "Piloto Comercial", date: "13/01/2024", text: "Sobrevoei Nazca várias vezes. É impossível criar isso sem visão aérea." },
            { author: "Matemático", date: "14/01/2024", text: "A precisão geométrica dessas figuras é impressionante para a época." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 8,
        title: "Profecias de Nostradamus: Previsão de 2024",
        author: "Estudioso Prof. Michel",
        excerpt: "Análise revela que quatrena 324 pode ter previsto eventos atuais com precisão assustadora...",
        category: "profecias",
        mysteryLevel: "⚡ Alto",
        date: "08/01/2024",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        content: "<p>Estudiosos das profecias de Nostradamus descobriram correlações perturbadoras entre a quatrena 324 e eventos que estão ocorrendo em 2024. O texto do século XVI parece descrever com precisão inquietante fenômenos tecnológicos e sociais atuais.</p><p>A quatrena menciona 'máquinas pensantes que falarão como humanos' e 'o conhecimento do mundo nas mãos de todos', referências que podem aludir à inteligência artificial e à internet. Mais específico ainda é a menção a 'luzes no céu que confundirão os sábios'.</p><p>O mais impressionante é a datação: Nostradamus usa um sistema numerológico complexo que, quando decodificado, aponta especificamente para o ano 2024. Especialistas em suas obras afirmam que esta precisão temporal é extremamente rara em suas profecias.</p>",
        likes: 1156,
        comments: [
            { author: "Numerólogo", date: "09/01/2024", text: "Os cálculos conferem. É assustadora a precisão da datação." },
            { author: "Historiador", date: "10/01/2024", text: "Cuidado com interpretações forçadas. Profecias são ambíguas por natureza." }
        ],
        isLiked: false,
        isFavorited: false
    }
];

// Estado da aplicação
let currentArticles = [...articles];
let selectedArticle = null;

// Elementos DOM
const articlesGrid = document.getElementById('articlesGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const loading = document.getElementById('loading');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('articleModal');
const mysticParticles = document.getElementById('mysticParticles');

// Mapeamento de categorias
const categoryMap = {
    'paranormal': '👻 Paranormal',
    'ovni': '🛸 OVNIs e Aliens',
    'lendas': '🐉 Lendas e Mitos',
    'conspiracoes': '🕵️ Conspirações',
    'historicos': '🏛️ Mistérios Históricos',
    'cientificos': '🧪 Fenômenos Científicos',
    'lugares': '🗺️ Lugares Misteriosos',
    'profecias': '📜 Profecias e Previsões'
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    createMysticParticles();
    loadArticles();
    setupEventListeners();
    console.log('🔮 MISTICMANIA loaded successfully');
});

// Criar partículas místicas
function createMysticParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Propriedades aleatórias
        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            --duration: ${duration}s;
            animation-delay: ${delay}s;
            background: ${Math.random() > 0.5 ? 'var(--roxo)' : 'var(--azul)'};
        `;
        
        mysticParticles.appendChild(particle);
    }
}

function setupEventListeners() {
    searchInput.addEventListener('input', filterArticles);
    categoryFilter.addEventListener('change', filterArticles);
    
    // Fechar modal ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}

function loadArticles() {
    showLoading();
    
    // Simular carregamento
    setTimeout(() => {
        hideLoading();
        renderArticles(currentArticles);
    }, 1000);
}

function renderArticles(articlesToRender) {
    articlesGrid.innerHTML = '';
    
    if (articlesToRender.length === 0) {
        showNoResults();
        return;
    }
    
    hideNoResults();
    
    articlesToRender.forEach((article, index) => {
        const articleCard = createArticleCard(article);
        articleCard.style.animationDelay = `${index * 0.1}s`;
        articlesGrid.appendChild(articleCard);
    });
}

function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card fade-in';
    
    const categoryName = categoryMap[article.category] || article.category;
    
    card.innerHTML = `
        <div class="article-image" style="background-image: url('${article.image}')">
            <div class="mystery-level">${article.mysteryLevel}</div>
            <div class="article-category">${categoryName}</div>
        </div>
        <div class="article-content">
            <h3 class="article-title">${article.title}</h3>
            <span class="article-author">👤 ${article.author}</span>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-meta">
                <div class="article-date">
                    <i class="fas fa-calendar-alt"></i>
                    ${formatDate(article.date)}
                </div>
                <div class="article-actions">
                    <button class="action-btn ${article.isLiked ? 'liked' : ''}" onclick="toggleLike(${article.id})">
                        <i class="fas fa-heart"></i> ${article.likes}
                    </button>
                    <button class="action-btn ${article.isFavorited ? 'favorited' : ''}" onclick="toggleFavorite(${article.id})">
                        <i class="fas fa-bookmark"></i>
                    </button>
                    <button class="action-btn" onclick="shareArticle(${article.id})">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
            <button class="read-more" onclick="openModal(${article.id})">
                🔮 Revelar Mistério
            </button>
        </div>
    `;
    
    return card;
}

function formatDate(dateString) {
    if (dateString.includes('/')) {
        const [day, month, year] = dateString.split('/');
        return new Date(year, month - 1, day).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function filterArticles() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    currentArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm) ||
                            article.excerpt.toLowerCase().includes(searchTerm) ||
                            article.author.toLowerCase().includes(searchTerm);
        
        const matchesCategory = selectedCategory === '' || article.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    renderArticles(currentArticles);
}

function toggleLike(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article) {
        if (article.isLiked) {
            article.likes--;
            article.isLiked = false;
        } else {
            article.likes++;
            article.isLiked = true;
        }
        filterArticles(); // Re-render para atualizar
    }
}

function toggleFavorite(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article) {
        article.isFavorited = !article.isFavorited;
        filterArticles(); // Re-render para atualizar
        
        // Feedback visual
        if (article.isFavorited) {
            showToast('🔮 Mistério adicionado aos favoritos!');
        } else {
            showToast('❌ Mistério removido dos favoritos');
        }
    }
}

function shareArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article) {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.excerpt,
                url: window.location.href
            });
        } else {
            // Fallback para copy
            navigator.clipboard.writeText(`${article.title} - ${window.location.href}`);
            showToast('🔗 Link copiado para a área de transferência!');
        }
    }
}

function openModal(articleId) {
    selectedArticle = articles.find(a => a.id === articleId);
    if (selectedArticle) {
        document.getElementById('modalTitle').textContent = selectedArticle.title;
        document.getElementById('modalAuthor').textContent = `👤 ${selectedArticle.author}`;
        document.getElementById('modalDate').textContent = `📅 ${formatDate(selectedArticle.date)}`;
        document.getElementById('modalImage').style.backgroundImage = `url('${selectedArticle.image}')`;
        document.getElementById('modalText').innerHTML = selectedArticle.content;
        
        // Carregar comentários
        loadComments();
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    selectedArticle = null;
}

function loadComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    
    selectedArticle.comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.style.cssText = `
            background: rgba(10, 4, 60, 0.5);
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            border-left: 3px solid var(--roxo);
        `;
        commentDiv.innerHTML = `
            <div style="color: var(--azul); font-weight: 600; margin-bottom: 5px;">
                👤 ${comment.author} - 📅 ${comment.date}
            </div>
            <div style="color: var(--texto);">${comment.text}</div>
        `;
        commentsList.appendChild(commentDiv);
    });
}

function submitComment() {
    const commentText = document.getElementById('commentText').value.trim();
    if (commentText && selectedArticle) {
        const newComment = {
            author: 'Investigador Anônimo',
            date: new Date().toLocaleDateString('pt-BR'),
            text: commentText
        };
        
        selectedArticle.comments.push(newComment);
        document.getElementById('commentText').value = '';
        loadComments();
        
        showToast('🔮 Teoria publicada com sucesso!');
    }
}

function showLoading() {
    loading.style.display = 'block';
    articlesGrid.style.display = 'none';
    noResults.style.display = 'none';
}

function hideLoading() {
    loading.style.display = 'none';
    articlesGrid.style.display = 'grid';
}

function showNoResults() {
    noResults.style.display = 'block';
    articlesGrid.style.display = 'none';
}

function hideNoResults() {
    noResults.style.display = 'none';
}

function showToast(message) {
    // Criar toast temporário
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--roxo), var(--misterio));
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 10000;
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(106, 0, 255, 0.3);
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Adicionar estilos de animação para toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);