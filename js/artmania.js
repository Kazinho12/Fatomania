// Banco de dados de artigos sobre arte
const articles = [
    {
        id: 1,
        title: "Banksy Revela Nova Obra em Paris",
        author: "Sophie Critique",
        excerpt: "Artista misterioso deixa nova intervenção urbana questionando a gentrificação na capital francesa...",
        category: "contemporanea",
        artStyle: "🎨 Street Art",
        date: "15/01/2024",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        content: "<p>Uma nova obra do enigmático Banksy apareceu nos muros de Montmartre, causando furor na cena artística parisiense. A intervenção, que retrata uma criança jogando com casas de papel enquanto máquinas de demolição se aproximam ao fundo, é uma crítica direta aos processos de gentrificação que transformam bairros históricos.</p><p>A obra utiliza a técnica característica do stencil de Banksy, mas incorpora elementos tridimensionais inéditos. Pequenos objetos reais foram fixados na parede, criando uma instalação híbrida que desafia as fronteiras entre arte urbana e escultura contemporânea.</p><p>Críticos de arte apontam que esta pode ser a obra mais política do artista desde 'Girl with Balloon'. A localização estratégica, em frente a um complexo de apartamentos de luxo recém-construído, não é coincidência. Banksy mais uma vez usa sua arte como manifesto social, questionando quem tem direito à cidade e qual o preço do progresso urbano.</p>",
        likes: 892,
        comments: [
            { author: "Art Lover", date: "16/01/2024", text: "Banksy continua sendo a voz dos sem voz. Arte que transforma e questiona." },
            { author: "Urban Explorer", date: "17/01/2024", text: "Vi pessoalmente! A dimensão 3D da obra é revolucionária." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 2,
        title: "Exposição de Van Gogh Imersiva Chega ao Brasil",
        author: "Dr. Renaissance Cultural",
        excerpt: "Tecnologia de realidade virtual permite caminhar dentro das pinturas do mestre holandês...",
        category: "exposicoes",
        artStyle: "🌟 Imersiva",
        date: "22/01/2024",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
        content: "<p>A revolucionária exposição 'Van Gogh: The Immersive Experience' estreia em São Paulo, oferecendo uma jornada sensorial única através das obras-primas do pintor holandês. Utilizando tecnologia de projeção 360° e realidade virtual, visitantes podem literalmente caminhar dentro de 'A Noite Estrelada' e sentir as pinceladas vibrantes de Van Gogh.</p><p>A curadoria combina mais de 300 obras digitalizadas em alta resolução com trilha sonora original, criando uma sinfonia visual que transporta o público para o universo mental do artista. Sensores de movimento captam os gestos dos visitantes, permitindo interações que fazem as pinturas reagirem em tempo real.</p><p>O projeto, desenvolvido em parceria com o Museu Van Gogh de Amsterdã, representa um marco na democratização da arte. Através da tecnologia, obras que jamais deixariam seus museus de origem agora podem ser experienciadas de forma íntima e transformadora. É arte clássica reinventada para a era digital.</p>",
        likes: 1456,
        comments: [
            { author: "Tech Art Fan", date: "23/01/2024", text: "Incrível como a tecnologia pode aproximar a arte das pessoas!" },
            { author: "Van Gogh Lover", date: "24/01/2024", text: "Chorei dentro de 'Noite Estrelada'. Experiência transformadora." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 3,
        title: "AI Cria Pintura que Rivaliza com Monet",
        author: "Prof. Digital Arts",
        excerpt: "Inteligência artificial treinada com milhares de obras impressionistas produz masterpiece indistinguível...",
        category: "digital",
        artStyle: "🤖 AI Art",
        date: "05/01/2024",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        content: "<p>Uma inteligência artificial desenvolvida pela startup ArtGen conseguiu criar uma pintura impressionista que especialistas inicialmente atribuíram a Claude Monet. O algoritmo, treinado com mais de 50.000 obras do período impressionista, gerou 'Lírios d'Água Digitais' - uma obra que captura perfeitamente a luz, cor e técnica características do mestre francês.</p><p>O que torna este feito ainda mais impressionante é a capacidade da IA de não apenas imitar estilos, mas de criar composições originais que respeitam os princípios estéticos do impressionismo. A obra incorpora nuances de pincelada e uso de cor que levaram décadas para os artistas humanos dominarem.</p><p>Este desenvolvimento levanta questões fundamentais sobre a natureza da criatividade e autoria artística. Se uma máquina pode criar arte indistinguível da humana, o que isso significa para o futuro da expressão artística? Críticos se dividem entre fascínio e preocupação, enquanto colecionadores já disputam as primeiras 'masterpieces' digitais.</p>",
        likes: 734,
        comments: [
            { author: "Art Purist", date: "06/01/2024", text: "Arte sem alma humana não é arte. Apenas imitação sofisticada." },
            { author: "Future Artist", date: "07/01/2024", text: "A IA é apenas uma nova ferramenta, como pincel ou tinta. O artista é quem a programa." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 4,
        title: "Descoberta Arqueológica Revela Pinturas Rupestres Inéditas",
        author: "Dra. Ancient Arts",
        excerpt: "Caverna no Peru contém arte rupestre de 15.000 anos com técnicas nunca vistas...",
        category: "historia",
        artStyle: "🏛️ Prehistoric",
        date: "28/12/2023",
        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
        content: "<p>Arqueólogos descobriram em uma caverna remota do Peru pinturas rupestres que reescrevem nossa compreensão sobre a arte pré-histórica. As pinturas, datadas de aproximadamente 15.000 anos, apresentam técnicas de sombreado e perspectiva que só eram conhecidas em períodos muito posteriores da história da arte.</p><p>As imagens retratam não apenas animais da megafauna pleistocênica, mas também cenas complexas de rituais xamânicos e o que parecem ser mapas estelares primitivos. O uso de minerais para criar diferentes tonalidades demonstra um conhecimento químico surpreendente para o período.</p><p>A descoberta mais extraordinária é uma série de handprints sobrepostas que criam um efeito visual tridimensional nas irregularidades da rocha. Esta técnica, que utiliza as próprias características geológicas como parte da composição, sugere um nível de sofisticação artística anteriormente subestimado em nossos ancestores.</p>",
        likes: 567,
        comments: [
            { author: "Archaeology Buff", date: "29/12/2023", text: "Fascinante! Nossos ancestores eram muito mais sofisticados do que imaginávamos." },
            { author: "Cave Painter", date: "30/12/2023", text: "A arte sempre foi fundamental para a experiência humana." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 5,
        title: "Fotógrafo Captura Luz do Ártico Como Nunca Visto",
        author: "Elena Lens Master",
        excerpt: "Nova técnica fotográfica revela aurora boreal em espectro invisível ao olho humano...",
        category: "fotografia",
        artStyle: "🌌 Nature",
        date: "10/01/2024",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        content: "<p>O renomado fotógrafo de natureza Magnus Eriksson desenvolveu uma técnica revolucionária que captura a aurora boreal em comprimentos de onda invisíveis ao olho humano. Suas fotografias revelam estruturas e padrões na aurora que transformam nossa compreensão deste fenômeno natural.</p><p>Utilizando sensores customizados e filtros especiais, Eriksson consegue registrar a interação entre partículas solares e a magnetosfera terrestre em detalhes nunca antes documentados. As imagens resultantes parecem pinturas abstratas cósmicas, onde ciência e arte se fundem em perfeita harmonia.</p><p>A série 'Invisible Aurora' já está sendo considerada um marco na fotografia científica artística. Museus de ciência e galerias de arte disputam os direitos de exibição, reconhecendo que estas imagens transcendem categorias tradicionais e criam uma nova linguagem visual para fenômenos naturais.</p>",
        likes: 923,
        comments: [
            { author: "Aurora Hunter", date: "11/01/2024", text: "Simplesmente mágico! A natureza é a maior artista de todas." },
            { author: "Science Photo", date: "12/01/2024", text: "Técnica inovadora que abre novas possibilidades para a fotografia científica." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 6,
        title: "Esculturas de Gelo Gigantes Desafiam Mudanças Climáticas",
        author: "Marco Ice Sculptor",
        excerpt: "Artista cria instalações temporárias que derretem para conscientizar sobre aquecimento global...",
        category: "escultura",
        artStyle: "❄️ Environmental",
        date: "18/01/2024",
        image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
        content: "<p>O escultor islandês Björn Stefansson criou uma série de esculturas monumentais de gelo que servem como poderoso manifesto sobre as mudanças climáticas. Suas obras, instaladas em praças públicas de grandes cidades, são projetadas para derreter completamente em 72 horas, simbolizando a urgência da crise climática.</p><p>Cada escultura representa um ecossistema ameaçado: ursos polares, recifes de coral, geleiras. À medida que derretem, revelam estruturas internas feitas de materiais reciclados, transformando o processo de deterioração em parte integral da experiência artística.</p><p>O projeto 'Melting Point' utiliza gelo coletado de geleiras reais, transportado em contêineres refrigerados movidos a energia solar. Cada instalação é acompanhada de dados científicos em tempo real sobre temperatura global, criando uma conexão visceral entre arte, ciência e ativismo ambiental.</p>",
        likes: 1205,
        comments: [
            { author: "Climate Warrior", date: "19/01/2024", text: "Arte que educa e emociona. Precisamos de mais iniciativas assim." },
            { author: "Eco Artist", date: "20/01/2024", text: "Genial usar o próprio derretimento como parte da obra!" }
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
    'pintura': 'Pintura',
    'escultura': 'Escultura',
    'fotografia': 'Fotografia',
    'digital': 'Arte Digital',
    'exposicoes': 'Exposições',
    'museus': 'Museus',
    'historia': 'História da Arte',
    'contemporanea': 'Arte Contemporânea'
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    createArtParticles();
    loadArticles();
    setupEventListeners();
});

// Criar partículas artísticas
function createArtParticles() {
    const container = document.getElementById('artParticles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'brush-particle';
        
        // Propriedades aleatórias
        const size = Math.random() * 8 + 4;
        const x = Math.random() * 100;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 20;
        
        // Cores variadas para as partículas
        const colors = ['#00b4d8', '#ffd166', '#f77f00', '#06ffa5'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            --duration: ${duration}s;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            background: ${color};
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
    }, 800);
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
            <div class="art-style">${article.artStyle}</div>
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
                Explorar Obra
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
        const matchesSearch = !searchTerm || 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.author.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !selectedCategory || article.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    renderArticles(currentArticles);
}

function openModal(articleId) {
    selectedArticle = articles.find(article => article.id === articleId);
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
    document.getElementById('commentText').value = '';
}

function loadComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    
    if (selectedArticle.comments && selectedArticle.comments.length > 0) {
        selectedArticle.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <div class="comment-header">
                    <strong>${comment.author}</strong>
                    <span class="comment-date">${comment.date}</span>
                </div>
                <div class="comment-text">${comment.text}</div>
            `;
            commentsList.appendChild(commentElement);
        });
    }
}

function submitComment() {
    const commentText = document.getElementById('commentText').value.trim();
    if (!commentText || !selectedArticle) return;
    
    const newComment = {
        author: 'Você',
        date: new Date().toLocaleDateString('pt-BR'),
        text: commentText
    };
    
    selectedArticle.comments.push(newComment);
    loadComments();
    document.getElementById('commentText').value = '';
    
    // Adicionar feedback visual
    const submitBtn = document.querySelector('.comment-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Publicado!';
    submitBtn.style.background = 'linear-gradient(135deg, #06ffa5, #00b4d8)';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = 'linear-gradient(135deg, var(--destaque), var(--art-gold))';
    }, 2000);
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
        renderArticles(currentArticles);
    }
}

function toggleFavorite(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article) {
        article.isFavorited = !article.isFavorited;
        renderArticles(currentArticles);
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
        // Fallback para copiar link
        navigator.clipboard.writeText(window.location.href + '#article-' + articleId);
        
        // Feedback visual
        const shareBtn = event.target.closest('.action-btn');
        const originalHTML = shareBtn.innerHTML;
        shareBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        shareBtn.style.color = 'var(--art-teal)';
        
        setTimeout(() => {
            shareBtn.innerHTML = originalHTML;
            shareBtn.style.color = '';
        }, 2000);
    }
}

function showLoading() {
    loading.style.display = 'block';
    noResults.style.display = 'none';
    articlesGrid.style.display = 'none';
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