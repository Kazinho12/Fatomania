// Banco de dados de artigos sobre games
const articles = [
    {
        id: 1,
        title: "Cyberpunk 2077: A Redenção Finalmente Chegou",
        author: "Alex GameReviewer",
        excerpt: "Após anos de polêmica, o jogo da CD Projekt RED finalmente entrega a experiência prometida...",
        category: "reviews",
        gameRating: "⭐ 9.2",
        date: "15/01/2024",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        content: "<p>Três anos após seu lançamento controverso, Cyberpunk 2077 ressurge das cinzas como uma verdadeira obra-prima do RPG moderno. A versão 2.0 trouxe correções fundamentais que transformaram completamente a experiência de jogo.</p><p>Night City agora pulsa com vida verdadeira. A IA dos NPCs foi completamente reformulada, criando um mundo que realmente reage às suas ações. O sistema de combate, antes frustrante, agora oferece múltiplas abordagens táticas que fazem cada confronto sentir único.</p><p>A narrativa, sempre o ponto forte do jogo, brilha ainda mais com novos diálogos e cutscenes que aprofundam a relação entre V e Johnny Silverhand. Keanu Reeves entrega uma performance ainda mais intensa, consolidando Silverhand como um dos personagens mais memoráveis dos games.</p>",
        likes: 1284,
        comments: [
            { author: "CyberGamer2077", date: "16/01/2024", text: "Finalmente! Acabei de zerar pela segunda vez. O jogo que sempre deveria ter sido." },
            { author: "NightCityResident", date: "17/01/2024", text: "A transformação foi incrível. Vale cada centavo agora." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 2,
        title: "Baldur's Gate 3 Quebra Recordes no Steam",
        author: "Marina RPGMaster",
        excerpt: "O RPG da Larian Studios alcança 1 milhão de jogadores simultâneos, estabelecendo novo padrão...",
        category: "noticias",
        gameRating: "⭐ 9.8",
        date: "22/01/2024",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        content: "<p>Baldur's Gate 3 oficialmente se tornou o RPG mais jogado da história do Steam, superando todos os recordes anteriores. Com mais de 1 milhão de jogadores simultâneos no fim de semana, o jogo da Larian Studios prova que o gênero RPG clássico ainda tem muito a oferecer.</p><p>O sucesso massivo pode ser atribuído à profundidade sem precedentes do sistema de escolhas. Cada decisão, por menor que seja, tem consequências reais que se estendem por toda a campanha de 100+ horas. A liberdade de abordagem é absoluta - desde diplomacia até combate brutal.</p><p>A tecnologia de Motion Capture revolucionária criou mais de 17.000 variações de cutscenes, garantindo que cada playthrough seja genuinamente único. O multijogador cooperativo para 4 jogadores adiciona uma camada de caos criativo que mantém a experiência fresca por centenas de horas.</p>",
        likes: 2156,
        comments: [
            { author: "DungeonMaster", date: "23/01/2024", text: "Estou na minha terceira campanha e ainda descobrindo coisas novas!" },
            { author: "TavernKeeper", date: "24/01/2024", text: "Melhor RPG dos últimos 10 anos, sem dúvida." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 3,
        title: "The Legend of Zelda: Tears of the Kingdom - Análise",
        author: "Prof. Adventure Gaming",
        excerpt: "Nintendo eleva os padrões do mundo aberto com mecânicas de construção revolucionárias...",
        category: "reviews",
        gameRating: "⭐ 9.9",
        date: "05/01/2024",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb5892?w=800",
        content: "<p>Tears of the Kingdom não é apenas uma sequência - é uma evolução completa do conceito de mundo aberto. A Nintendo conseguiu o impossível: superou Breath of the Wild em todos os aspectos imagináveis.</p><p>O sistema de Ultrahand transforma cada jogador em um engenheiro criativo. A possibilidade de fundir qualquer objeto com qualquer outro cria possibilidades infinitas de resolução de puzzles. Vi jogadores construindo desde carros voadores até bases flutuantes complexas.</p><p>O mundo vertical tri-dimensional, com as Sky Islands e o Depths, triplica efetivamente o tamanho de Hyrule. Cada camada oferece desafios únicos e recompensas exclusivas. A sensação de descoberta permanece intacta mesmo após 200+ horas de jogo.</p><p>Link agora possui habilidades que o tornam mais versátil que qualquer protagonista anterior da série. Ascend, Recall e Fuse não são apenas mecânicas - são ferramentas de criatividade pura.</p>",
        likes: 3247,
        comments: [
            { author: "HyruleExplorer", date: "06/01/2024", text: "Construí um mecha gigante funcionando apenas com peças do jogo. Nintendo é genial!" },
            { author: "ZeldaVeteran", date: "07/01/2024", text: "30 anos jogando Zelda e nunca vi nada parecido. Obra-prima absoluta." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 4,
        title: "Starfield: Explorando a Galáxia Bethesda",
        author: "Dr. Space Explorer",
        excerpt: "O RPG espacial mais ambicioso já criado oferece 1000 planetas para explorar...",
        category: "reviews",
        gameRating: "⭐ 8.5",
        date: "28/12/2023",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800",
        content: "<p>Starfield representa a visão mais ambiciosa da Bethesda até hoje. Com mais de 1000 planetas espalhados por 100 sistemas estelares, o jogo oferece uma escala de exploração sem precedentes no gênero RPG.</p><p>O sistema de criação de naves espaciais é surpreendentemente profundo. Cada componente afeta não apenas a aparência, mas também a performance, capacidade de carga e eficiência de combustível. Passei 50+ horas apenas personalizando minha frota.</p><p>A narrativa principal, focada na busca pelos misteriosos Artifacts, combina ficção científica dura com elementos de mistério cósmico. As questões sobre o lugar da humanidade no universo são exploradas com maturidade impressionante.</p><p>O sistema de outposts permite construir bases funcionais em planetas distantes, criando redes de mineração e produção que alimentam suas aventuras espaciais. É Minecraft meets No Man's Sky meets Skyrim.</p>",
        likes: 1876,
        comments: [
            { author: "StarshipCaptain", date: "29/12/2023", text: "Construí uma frota de 20 naves especializadas. Cada uma tem sua função específica!" },
            { author: "CosmicWanderer", date: "30/12/2023", text: "A sensação de descobrir um planeta inexplorado nunca enjoa." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 5,
        title: "Hades 2: Early Access Revoluciona Roguelikes",
        author: "Indie Gaming Enthusiast",
        excerpt: "Supergiant Games retorna com uma sequência que expande perfeitamente a fórmula vencedora...",
        category: "indie",
        gameRating: "⭐ 9.4",
        date: "10/01/2024",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
        content: "<p>Hades 2 prova que algumas fórmulas são atemporais quando executadas com maestria. A Supergiant Games não apenas recriou a magia do original - eles a elevaram a novos patamares de excelência.</p><p>Melinoë, a nova protagonista, traz mecânicas de magia que transformam completamente o gameplay. O sistema de incantações permite estratégias impossíveis no primeiro jogo, desde invocação de familiares até manipulação temporal.</p><p>A trilha sonora de Darren Korb mais uma vez define novos padrões para áudio em jogos indie. Cada track se adapta dinamicamente ao combate, criando uma sinfonia épica personalizada para cada run.</p><p>O sistema de relacionamentos foi expandido dramaticamente. Agora você pode formar alianças complexas que afetam não apenas diálogos, mas também mecânicas de gameplay e até mesmo finais alternativos.</p>",
        likes: 987,
        comments: [
            { author: "RoguelikeMaster", date: "11/01/2024", text: "Já são 100 runs e cada uma ainda surpreende. Supergiant é incomparável." },
            { author: "IndieSupporter", date: "12/01/2024", text: "Este early access tem mais conteúdo que muitos jogos completos AAA." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 6,
        title: "Street Fighter 6: Revolução dos Fighting Games",
        author: "FGC Champion",
        excerpt: "Capcom entrega o fighting game mais acessível e competitivo da geração...",
        category: "esports",
        gameRating: "⭐ 9.3",
        date: "18/01/2024",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
        content: "<p>Street Fighter 6 conseguiu o equilíbrio perfeito entre acessibilidade para novatos e profundidade para veteranos. O sistema Drive revolutiona os fighting games modernos com mecânicas intuitivas mas estrategicamente complexas.</p><p>O modo World Tour oferece uma campanha single-player completa que funciona como tutorial estendido. Explorar Metro City enquanto treina com lendas como Ryu e Chun-Li torna o aprendizado orgânico e divertido.</p><p>Battle Hub transforma a experiência online em um MMO de fighting games. Avatares customizáveis, arcade virtual e torneios constantes criam uma comunidade vibrante que mantém o jogo vivo 24/7.</p><p>O rollback netcode é simplesmente perfeito. Partidas online sentem-se idênticas ao gameplay local, eliminando frustrações que plagaram gerações anteriores de fighting games.</p>",
        likes: 1567,
        comments: [
            { author: "FGCVeteran", date: "19/01/2024", text: "Melhor SF desde Third Strike. Capcom acertou em cheio!" },
            { author: "NewComer", date: "20/01/2024", text: "Primeiro fighting game que consigo jogar competitivamente. Muito bem feito!" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 7,
        title: "Elden Ring: Um Ano Depois da Revolução",
        author: "Souls Veteran",
        excerpt: "Analisamos como o soulslike da FromSoftware redefiniu os RPGs de mundo aberto...",
        category: "reviews",
        gameRating: "⭐ 9.7",
        date: "25/01/2024",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        content: "<p>Um ano após revolucionar os jogos RPG, Elden Ring permanece como o padrão-ouro do gênero soulslike. A fusão entre a narrativa críptica característica da FromSoftware e a liberdade de exploração criou uma experiência única.</p><p>The Lands Between oferece densidade de conteúdo impressionante. Cada catacumba, cada ruína, cada caverna esconde segredos que recompensam genuinamente a curiosidade do jogador. Não há conteúdo de preenchimento - tudo tem propósito.</p><p>O sistema de invocações Spirit Ash democratizou a experiência souls sem comprometer a integridade dos desafios. Jogadores podem escolher seu nível de dificuldade de forma orgânica, mantendo a satisfação das vitórias conquistadas.</p><p>A colaboração com George R.R. Martin resultou em worldbuilding de profundidade literária. Cada personagem, cada local tem histórias interconectadas que formam uma mitologia coesa e fascinante.</p>",
        likes: 2789,
        comments: [
            { author: "TarnishedWarrior", date: "26/01/2024", text: "Terceiro playthrough e ainda descobrindo easter eggs. Obra-prima atemporal." },
            { author: "LoreHunter", date: "27/01/2024", text: "A narrativa environmental storytelling é a melhor já criada nos games." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 8,
        title: "Guia Definitivo: Spider-Man 2 PS5",
        author: "Web-Slinger Pro",
        excerpt: "Domine as habilidades de Peter e Miles com nossas dicas avançadas de combate e exploração...",
        category: "guias",
        gameRating: "⭐ 9.1",
        date: "12/01/2024",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        content: "<p>Spider-Man 2 oferece o sistema de combate mais refinado da série, combinando as habilidades únicas de Peter Parker e Miles Morales em sequências cinematográficas espetaculares.</p><p><strong>Combos Avançados:</strong> Alterne entre personagens mid-combo para criar sequências devastadoras. O timing perfeito entre Web-Strike de Peter e Venom Blast de Miles pode eliminar grupos inteiros de inimigos.</p><p><strong>Exploração Eficiente:</strong> Use o Web-Wings em conjunto com pontos de ancoragem estratégicos para atravesar Manhattan em tempo recorde. Identifique correntes de ar ascendentes para voos prolongados sem tocar o chão.</p><p><strong>Builds Especializadas:</strong> Foque nas habilidades Symbiote de Peter para dano máximo ou desenvolva as habilidades Bio-Elétricas de Miles para controle de multidão. Cada abordagem oferece experiências completamente diferentes.</p>",
        likes: 856,
        comments: [
            { author: "SpideyFan", date: "13/01/2024", text: "Consegui platinar em 40 horas seguindo essas dicas. Muito obrigado!" },
            { author: "WebHead", date: "14/01/2024", text: "O combo do Symbiote Surge + Venom Blast é insano!" }
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

// Mapeamento de categorias
const categoryMap = {
    'reviews': 'Reviews',
    'noticias': 'Notícias',
    'lancamentos': 'Lançamentos',
    'guias': 'Guias e Dicas',
    'esports': 'E-Sports',
    'indie': 'Jogos Indie',
    'retro': 'Retrô Gaming',
    'hardware': 'Hardware'
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    createGamingParticles();
    loadArticles();
    setupEventListeners();
    console.log('🎮 GAMESMANIA loaded successfully!');
});

// Criar partículas gaming
function createGamingParticles() {
    const container = document.getElementById('gamingParticles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'pixel-particle';
        
        // Propriedades aleatórias
        const size = Math.random() * 6 + 4;
        const x = Math.random() * 100;
        const duration = Math.random() * 8 + 12;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            --duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        // Cores variadas para as partículas
        const colors = ['#ff073a', '#00ffff', '#ffd700', '#6a00ff'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(particle);
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
            <div class="article-category">${categoryName}</div>
            <div class="game-rating">${article.gameRating}</div>
        </div>
        <div class="article-content">
            <h3 class="article-title">${article.title}</h3>
            <span class="article-author">Por ${article.author}</span>
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
                🎮 Jogar Review
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
        
        const matchesCategory = !selectedCategory || article.category === selectedCategory;
        
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
        
        // Atualizar artigos filtrados
        currentArticles = currentArticles.map(a => 
            a.id === articleId ? article : a
        );
        
        renderArticles(currentArticles);
        
        // Efeito visual
        const button = event.target.closest('.action-btn');
        button.style.transform = 'scale(1.3)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    }
}

function toggleFavorite(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article) {
        article.isFavorited = !article.isFavorited;
        
        // Atualizar artigos filtrados
        currentArticles = currentArticles.map(a => 
            a.id === articleId ? article : a
        );
        
        renderArticles(currentArticles);
        
        // Feedback visual
        const button = event.target.closest('.action-btn');
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    }
}

function shareArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article && navigator.share) {
        navigator.share({
            title: article.title,
            text: article.excerpt,
            url: window.location.href
        });
    } else {
        // Fallback para navegadores sem Web Share API
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('🎮 Link copiado para o clipboard!');
        });
    }
}

function openModal(articleId) {
    selectedArticle = articles.find(a => a.id === articleId);
    if (!selectedArticle) return;
    
    document.getElementById('modalTitle').textContent = selectedArticle.title;
    document.getElementById('modalAuthor').textContent = `Por ${selectedArticle.author}`;
    document.getElementById('modalDate').textContent = formatDate(selectedArticle.date);
    document.getElementById('modalImage').style.backgroundImage = `url('${selectedArticle.image}')`;
    document.getElementById('modalText').innerHTML = selectedArticle.content;
    
    // Carregar comentários
    loadComments();
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    selectedArticle = null;
}

function loadComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    
    if (selectedArticle.comments) {
        selectedArticle.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.style.cssText = `
                background: rgba(10, 4, 60, 0.5);
                padding: 15px;
                border-radius: 10px;
                margin-bottom: 15px;
                border-left: 3px solid var(--gaming-red);
            `;
            
            commentElement.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <strong style="color: var(--gaming-electric);">${comment.author}</strong>
                    <span style="color: var(--texto-secundario); font-size: 0.9rem;">${comment.date}</span>
                </div>
                <p style="margin: 0; color: var(--texto);">${comment.text}</p>
            `;
            
            commentsList.appendChild(commentElement);
        });
    }
}

function submitComment() {
    const commentText = document.getElementById('commentText').value.trim();
    if (!commentText || !selectedArticle) return;
    
    const newComment = {
        author: 'Gamer Anônimo', // Em uma app real, seria o usuário logado
        date: new Date().toLocaleDateString('pt-BR'),
        text: commentText
    };
    
    selectedArticle.comments.push(newComment);
    loadComments();
    document.getElementById('commentText').value = '';
    
    // Feedback visual
    const submitBtn = document.querySelector('.comment-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✅ Comentário Publicado!';
    submitBtn.style.background = 'var(--gaming-gold)';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 2000);
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
    articlesGrid.style.display = 'grid';
}

// Efeitos especiais para interações
document.addEventListener('click', function(e) {
    if (e.target.closest('.action-btn') || e.target.closest('.read-more')) {
        createClickEffect(e.pageX, e.pageY);
    }
});

function createClickEffect(x, y) {
    const effect = document.createElement('div');
    effect.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 20px;
        height: 20px;
        background: var(--gaming-electric);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: clickPulse 0.6s ease-out forwards;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes clickPulse {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(effect);
    
    setTimeout(() => {
        document.body.removeChild(effect);
        document.head.removeChild(style);
    }, 600);
}