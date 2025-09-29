// Banco de dados de artigos sobre história
const articles = [
    {
        id: 1,
        title: "Descoberta Revolucionária em Pompéia",
        author: "Dr. Marcus Archaeologist",
        excerpt: "Arqueólogos descobrem villa intacta com afrescos únicos que revelam aspectos inéditos da vida romana...",
        category: "arqueologia",
        historicalPeriod: "🏛️ Antiga",
        date: "15/01/2024",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb2?w=800",
        content: "<p>Uma descoberta extraordinária em Pompéia está reescrevendo nossa compreensão sobre a vida cotidiana no Império Romano. Arqueólogos da Universidade de Nápoles desenterraram uma villa perfeitamente preservada, com afrescos que retratam cenas jamais documentadas na arte romana.</p><p>A casa, pertencente a um rico comerciante chamado Marcus Lucretius Fronto, contém o que pode ser o primeiro 'manual de negócios' da antiguidade pintado em suas paredes. Os afrescos mostram detalhadamente rotas comerciais, técnicas de negociação e até mesmo contratos comerciais ilustrados.</p><p>O que mais impressiona os pesquisadores é a preservação excepcional dos pigmentos. Cores que desapareceram de outras obras pompeianas permanecem vibrantes aqui, oferecendo uma janela colorida para o mundo romano. Entre as descobertas mais notáveis está um afresco que parece retratar o próprio Vesúvio em erupção, pintado ironicamente antes da erupção fatal de 79 d.C.</p>",
        likes: 1247,
        comments: [
            { author: "História Lover", date: "16/01/2024", text: "Incrível como Pompéia continua revelando segredos após 2000 anos!" },
            { author: "Roman Scholar", date: "17/01/2024", text: "Esses afrescos vão mudar nossa compreensão do comércio romano." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 2,
        title: "Tumba de Faraó Desconhecido Encontrada no Egito",
        author: "Dra. Nefertiti Explorer",
        excerpt: "Escavações no Vale dos Reis revelam tumba intocada de faraó da 18ª dinastia com tesouros únicos...",
        category: "antiga",
        historicalPeriod: "🏺 Egípcia",
        date: "22/01/2024",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73fb2?w=800",
        content: "<p>No Vale dos Reis, arqueólogos fizeram a descoberta mais significativa desde a tumba de Tutancâmon: uma tumba real completamente intacta pertencente a um faraó até então desconhecido da 18ª dinastia. O faraó, cujo nome hieroglífico se lê como 'Ankh-ef-en-Sekhmet', governou por apenas três anos entre 1400-1397 a.C.</p><p>A tumba, localizada através de tecnologia de radar penetrante, contém mais de 3.000 artefatos, incluindo o que pode ser o sarcófago de ouro mais elaborado já descoberto. As paredes são cobertas por hieróglifos que narram uma história fascinante sobre reformas religiosas que precederam as de Akhenaton.</p><p>Entre os tesouros mais notáveis estão amuletos feitos de meteóritos, evidenciando o conhecimento astronômico avançado dos egípcios, e papiros médicos que descrevem cirurgias cerebrais surpreendentemente sofisticadas. A descoberta promete revolucionar nossa compreensão sobre a transição religiosa no Novo Reino.</p>",
        likes: 2156,
        comments: [
            { author: "Egyptology Fan", date: "23/01/2024", text: "Outro faraó perdido encontrado! O Egito nunca para de nos surpreender." },
            { author: "Ancient Mysteries", date: "24/01/2024", text: "Cirurgias cerebrais no antigo Egito? Isso é revolucionário!" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 3,
        title: "Manuscritos Secretos dos Templários Decifrados",
        author: "Prof. Medieval Chronicles",
        excerpt: "Pesquisadores finalmente decodificam textos em código que revelam rituais e conhecimentos ocultos da ordem...",
        category: "medieval",
        historicalPeriod: "⚔️ Medieval",
        date: "05/01/2024",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
        content: "<p>Após décadas de tentativas, linguistas da Universidade de Cambridge conseguiram decifrar uma coleção de manuscritos templários escritos em um código complexo que permaneceu indecifrado por 700 anos. Os documentos, encontrados em uma biblioteca monastica em Portugal, revelam aspectos inéditos dos rituais e conhecimentos secretos da Ordem dos Templários.</p><p>Os manuscritos descrevem práticas de alquimia avançada, incluindo fórmulas para criar 'fogo grego' melhorado e técnicas de metalurgia que antecipavam descobertas da Era Moderna. Mais intrigante ainda são as referências a 'guardiões do conhecimento oriental', sugerindo conexões profundas com estudiosos islâmicos e bizantinos.</p><p>Um dos documentos mais fascinantes é um mapa detalhado mostrando rotas marítimas para as Américas, datado de 1291 - dois séculos antes de Colombo. Se autêntico, este mapa revolucionaria nossa compreensão sobre o conhecimento geográfico medieval e as possíveis viagens pré-colombianas dos Templários.</p>",
        likes: 1876,
        comments: [
            { author: "Medieval Scholar", date: "06/01/2024", text: "Os Templários sabiam das Américas antes de Colombo? Isso muda tudo!" },
            { author: "Cryptography Expert", date: "07/01/2024", text: "Que código complexo! A criptografia medieval era mais avançada do que imaginávamos." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 4,
        title: "Cidade Maia Perdida Revelada por Tecnologia LiDAR",
        author: "Dr. Maya Civilization",
        excerpt: "Escaneamento laser revela metrópole maia oculta na selva com arquitetura nunca vista antes...",
        category: "civilizacoes",
        historicalPeriod: "🌿 Pré-Colombiana",
        date: "28/12/2023",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
        content: "<p>Uma expedição internacional usando tecnologia LiDAR descobriu uma cidade maia completamente desconhecida na selva de Guatemala, com arquitetura e layout urbano únicos que desafiam teorias estabelecidas sobre o planejamento urbano maia. A cidade, temporariamente chamada de 'Yax Muul' (Primeira Colina Verde), cobria uma área de 650 quilômetros quadrados.</p><p>O que torna esta descoberta extraordinária é a presença de estruturas circulares massivas - um design arquitetônico raramente visto na civilização maia. Essas construções parecem ter função astronômica, alinhadas precisamente com constelações específicas e eventos celestes como eclipses solares.</p><p>Escavações preliminares revelaram um sistema hidráulico incrivelmente sofisticado, com aquedutos, reservatórios e até mesmo o que parece ser uma antiga estação de tratamento de água. Hieróglifos nas estruturas centrais sugerem que Yax Muul era um centro de conhecimento astronômico e matemático, possivelmente a 'universidade' do mundo maia clássico.</p>",
        likes: 1534,
        comments: [
            { author: "Maya Enthusiast", date: "29/12/2023", text: "Estruturas circulares maias? Isso é completamente inédito!" },
            { author: "LiDAR Specialist", date: "30/12/2023", text: "A tecnologia LiDAR está revolucionando a arqueologia. Quantas cidades ainda estão escondidas?" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 5,
        title: "Diário de Leonardo da Vinci Revela Projeto Secreto",
        author: "Prof. Renaissance Master",
        excerpt: "Páginas inéditas dos cadernos de Leonardo descrevem máquina voadora funcional construída em segredo...",
        category: "moderna",
        historicalPeriod: "🎨 Renascimento",
        date: "10/01/2024",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        content: "<p>Pesquisadores da Biblioteca Ambrosiana em Milão descobriram páginas perdidas dos cadernos de Leonardo da Vinci que descrevem não apenas o projeto, mas a construção real de uma máquina voadora. As páginas, encontradas dentro da encadernação de outro manuscrito, incluem desenhos detalhados e anotações sobre testes de voo bem-sucedidos.</p><p>O mais surpreendente é que Leonardo não apenas projetou, mas efetivamente construiu e testou seu 'ornithoptero' em 1505, cerca de 400 anos antes do primeiro voo dos irmãos Wright. Os desenhos mostram modificações técnicas importantes em relação aos projetos conhecidos, incluindo um sistema de controle de direção que antecipa princípios da aviação moderna.</p><p>As anotações, escritas em sua característica escrita espelhada, descrevem três voos teste realizados secretamente nas colinas próximas a Milão. Leonardo registra problemas com controle e pouso, mas confirma que a máquina 'abraçou os ventos como um pássaro'. Esta descoberta pode obrigar uma revisão completa da história da aviação.</p>",
        likes: 2234,
        comments: [
            { author: "Leonardo Scholar", date: "11/01/2024", text: "Leonardo realmente voou antes dos Wright? A história da aviação precisa ser reescrita!" },
            { author: "Engineering History", date: "12/01/2024", text: "Os desenhos são incrivelmente detalhados. Leonardo era mesmo um gênio além do seu tempo." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 6,
        title: "Bunker Nazista Secreto Descoberto na Antártica",
        author: "Dr. War Historian",
        excerpt: "Expedição científica encontra instalação militar abandonada com documentos que reescrevem história da Segunda Guerra...",
        category: "contemporanea",
        historicalPeriod: "🌐 Século XX",
        date: "18/01/2024",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        content: "<p>Uma expedição científica internacional na Antártica descobriu uma instalação militar nazista perfeitamente preservada pelo gelo, contendo documentos e equipamentos que sugerem operações alemãs muito mais extensas no continente do que se conhecia anteriormente. A base, codinome 'Pinguin Station', operou entre 1942 e 1945.</p><p>Entre os achados mais significativos estão protótipos de submarinos especialmente adaptados para navegação no gelo, mapas detalhados de rotas antárticas e, mais intrigante, documentos referenciando 'experimentos atmosféricos' e 'projeto Aurora Boreal artificial'. Os equipamentos encontrados incluem geradores de alta frequência de função desconhecida.</p><p>Documentos decifrados revelam que a base era parte de um programa chamado 'Ahnenerbe-SS Antarktica', focado em pesquisa científica militar avançada. Correspondências entre a base e Berlim mencionam 'sucessos nos testes de controle climático' e 'progresso na manipulação ionosférica', sugerindo que os nazistas estavam experimentando com formas primitivas de manipulação meteorológica.</p>",
        likes: 1923,
        comments: [
            { author: "WWII Researcher", date: "19/01/2024", text: "Controle climático nazista? Isso parece ficção científica, mas as evidências são reais." },
            { author: "Antarctic Explorer", date: "20/01/2024", text: "A Antártica ainda guarda muitos segredos da Segunda Guerra Mundial." }
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
    'antiga': 'História Antiga',
    'medieval': 'Idade Média',
    'moderna': 'Idade Moderna',
    'contemporanea': 'Idade Contemporânea',
    'arqueologia': 'Arqueologia',
    'civilizacoes': 'Civilizações',
    'guerras': 'Guerras e Conflitos',
    'descobrimentos': 'Descobrimentos'
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    createHistoryParticles();
    loadArticles();
    setupEventListeners();
});

function createHistoryParticles() {
    const container = document.getElementById('historyParticles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'scroll-particle';
        
        // Propriedades aleatórias
        const size = Math.random() * 8 + 8;
        const x = Math.random() * 100;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            --duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
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
            <div class="historical-period">${article.historicalPeriod}</div>
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
                Ler Crônica Completa
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
        const matchesSearch = 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.author.toLowerCase().includes(searchTerm) ||
            article.content.toLowerCase().includes(searchTerm);
        
        const matchesCategory = selectedCategory === '' || article.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    renderArticles(currentArticles);
}

function toggleLike(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article) {
        article.isLiked = !article.isLiked;
        article.likes += article.isLiked ? 1 : -1;
        
        // Atualizar visual
        const likeBtn = event.target.closest('.action-btn');
        likeBtn.classList.toggle('liked');
        likeBtn.innerHTML = `<i class="fas fa-heart"></i> ${article.likes}`;
        
        // Atualizar array atual se filtrado
        const currentIndex = currentArticles.findIndex(a => a.id === articleId);
        if (currentIndex !== -1) {
            currentArticles[currentIndex] = article;
        }
    }
}

function toggleFavorite(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article) {
        article.isFavorited = !article.isFavorited;
        
        // Atualizar visual
        const favBtn = event.target.closest('.action-btn');
        favBtn.classList.toggle('favorited');
        
        // Feedback visual
        showAlert(
            article.isFavorited ? 'Artigo adicionado aos favoritos!' : 'Artigo removido dos favoritos!',
            'success'
        );
        
        // Atualizar array atual se filtrado
        const currentIndex = currentArticles.findIndex(a => a.id === articleId);
        if (currentIndex !== -1) {
            currentArticles[currentIndex] = article;
        }
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
        // Fallback para browsers sem Web Share API
        navigator.clipboard.writeText(window.location.href)
            .then(() => showAlert('Link copiado para área de transferência!', 'success'))
            .catch(() => showAlert('Erro ao copiar link', 'error'));
    }
}

function openModal(articleId) {
    selectedArticle = articles.find(a => a.id === articleId);
    if (selectedArticle) {
        // Preencher conteúdo do modal
        document.getElementById('modalTitle').textContent = selectedArticle.title;
        document.getElementById('modalAuthor').textContent = `Por ${selectedArticle.author}`;
        document.getElementById('modalDate').textContent = formatDate(selectedArticle.date);
        document.getElementById('modalImage').style.backgroundImage = `url('${selectedArticle.image}')`;
        document.getElementById('modalText').innerHTML = selectedArticle.content;
        
        // Carregar comentários
        loadComments();
        
        // Mostrar modal
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
    if (selectedArticle && selectedArticle.comments) {
        commentsList.innerHTML = selectedArticle.comments.map(comment => `
            <div class="comment">
                <div class="comment-header">
                    <strong>${comment.author}</strong>
                    <span class="comment-date">${comment.date}</span>
                </div>
                <p class="comment-text">${comment.text}</p>
            </div>
        `).join('');
    } else {
        commentsList.innerHTML = '<p class="no-comments">Seja o primeiro a comentar!</p>';
    }
}

function submitComment() {
    const commentText = document.getElementById('commentText').value.trim();
    if (commentText && selectedArticle) {
        const newComment = {
            author: 'Usuário Anônimo', // Em uma aplicação real, viria do sistema de auth
            date: new Date().toLocaleDateString('pt-BR'),
            text: commentText
        };
        
        if (!selectedArticle.comments) {
            selectedArticle.comments = [];
        }
        
        selectedArticle.comments.push(newComment);
        
        // Recarregar comentários
        loadComments();
        
        // Limpar campo
        document.getElementById('commentText').value = '';
        
        showAlert('Comentário adicionado com sucesso!', 'success');
    }
}

function showLoading() {
    loading.style.display = 'block';
    articlesGrid.style.display = 'none';
}

function hideLoading() {
    loading.style.display = 'none';
    articlesGrid.style.display = 'grid';
}

function showNoResults() {
    noResults.style.display = 'block';
}

function hideNoResults() {
    noResults.style.display = 'none';
}

function showAlert(message, type) {
    // Criar elemento de alerta
    const alert = document.createElement('div');
    alert.className = `alert ${type}`;
    alert.textContent = message;
    
    // Adicionar ao DOM
    document.body.appendChild(alert);
    
    // Mostrar
    setTimeout(() => alert.classList.add('show'), 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => document.body.removeChild(alert), 300);
    }, 3000);
}

// Adicionar estilos para comentários e alertas
const additionalStyles = `
.comment {
    background: rgba(106, 76, 147, 0.1);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
    border-left: 3px solid var(--destaque);
}

.comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.comment-header strong {
    color: var(--destaque);
}

.comment-date {
    color: var(--texto-secundario);
    font-size: 0.9rem;
}

.comment-text {
    line-height: 1.6;
    margin: 0;
}

.no-comments {
    text-align: center;
    color: var(--texto-secundario);
    font-style: italic;
    padding: 20px;
}

.alert {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
}

.alert.show {
    transform: translateX(0);
}

.alert.success {
    background: var(--destaque);
    box-shadow: 0 4px 15px rgba(106, 76, 147, 0.3);
}

.alert.error {
    background: var(--erro);
    box-shadow: 0 4px 15px rgba(255, 71, 87, 0.3);
}
`;

// Adicionar estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);