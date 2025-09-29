// Banco de dados de artigos tecnológicos
const articles = [
    {
        id: 1,
        title: "Novo Processador Quântico Quebra Recordes",
        author: "Dr. Marina Santos",
        excerpt: "Chip quântico de 1000 qubits alcança supremacia quântica em computação científica...",
        category: "quantum",
        date: "15/01/2024",
        image: "https://pixabay.com/get/gb1fb22274527f6c7380eb28fc0be9ec3d3fa9206da33585d9bc2b87e5107d1d5b251e37d3b8ba1c6758d9ee8795204373990f204099750d2f08e28bc8b1b8d7d_1280.jpg",
        content: "<p>Pesquisadores da TechQuantum anunciaram o desenvolvimento de um processador quântico revolucionário com 1000 qubits estáveis, superando todos os recordes anteriores. Este avanço representa um marco crucial na corrida pela supremacia quântica.</p><p>O novo chip utiliza tecnologia de qubits supercondutores em uma arquitetura inovadora que reduz significativamente a taxa de erro quântico. Nos testes preliminares, o processador conseguiu manter a coerência quântica por mais de 100 microssegundos, um feito impressionante para sistemas desta escala.</p><p>As aplicações práticas incluem simulação molecular para descoberta de medicamentos, otimização de redes logísticas complexas e criptografia avançada. A empresa prevê que esta tecnologia estará disponível comercialmente dentro de 3 anos.</p>",
        likes: 342,
        comments: [
            { author: "Prof. Carlos Lima", date: "16/01/2024", text: "Incrível! Isso pode revolucionar a pesquisa farmacêutica." },
            { author: "Ana Tech", date: "17/01/2024", text: "Quando poderemos ver aplicações práticas desta tecnologia?" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 2,
        title: "IA Médica Diagnostica Câncer com 99% de Precisão",
        author: "Dra. Elena Rodriguez",
        excerpt: "Sistema de inteligência artificial supera especialistas humanos no diagnóstico precoce de múltiplos tipos de câncer...",
        category: "ai",
        date: "22/01/2024",
        image: "https://pixabay.com/get/g7a0e4c6d4b3b397135683f7d32de1d795aa10c1c2f64e6738634e77f8a3926107dd2e9d6298bb894ccfc58d2351cbe2035869497ab1688d06495b7be31dc408c_1280.jpg",
        content: "<p>A startup MedAI apresentou resultados extraordinários de seu sistema de diagnóstico por inteligência artificial, que alcançou 99% de precisão na detecção precoce de câncer em exames de imagem. O sistema, treinado com mais de 10 milhões de exames médicos, supera consistentemente especialistas humanos.</p><p>A tecnologia utiliza redes neurais convolucionais avançadas e processamento de imagem em tempo real para identificar padrões sutis que frequentemente passam despercebidos pelo olho humano. O sistema é capaz de detectar 15 tipos diferentes de câncer em estágios iniciais.</p><p>Testes clínicos em 50 hospitais ao redor do mundo confirmaram a eficácia do sistema, que reduziu falsos negativos em 85% comparado aos métodos tradicionais. A FDA já iniciou o processo de aprovação para uso comercial.</p>",
        likes: 567,
        comments: [
            { author: "Dr. Roberto Silva", date: "23/01/2024", text: "Como médico, vejo isso como uma ferramenta invaluável para salvar vidas." },
            { author: "Patricia Alves", date: "24/01/2024", text: "Minha família tem histórico de câncer. Quando esta tecnologia estará disponível?" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 3,
        title: "Robô Humanóide Trabalha em Linha de Produção",
        author: "Prof. Takeshi Yamamoto",
        excerpt: "Primeiro robô totalmente autônomo opera 24/7 em fábrica automotiva com precisão sobre-humana...",
        category: "robotics",
        date: "05/01/2024",
        image: "https://pixabay.com/get/gda025ef2f0972b6c48cbe245793697c766287b98ffcdc9488839b499df45b06de69e19676d7b591b4b3d9006df84e151eb979eac9ec31014676c21b0d1bc5b42_1280.jpg",
        content: "<p>A Toyota revelou seu mais avançado robô humanóide, capaz de executar tarefas complexas de montagem automotiva com precisão superior aos trabalhadores humanos. O robô Atlas-Pro opera continuamente há 6 meses sem necessidade de manutenção.</p><p>Equipado com visão computacional de última geração e braços articulados com 12 graus de liberdade, o robô pode adaptar-se a diferentes tarefas sem reprogramação. Sensores táteis avançados permitem manipulação delicada de componentes sensíveis.</p><p>A produtividade aumentou 40% na linha onde o robô opera, com zero defeitos registrados. A empresa planeja expandir a tecnologia para outras fábricas, potencialmente revolucionando a manufatura global.</p>",
        likes: 423,
        comments: [
            { author: "José Oliveira", date: "06/01/2024", text: "Impressionante, mas e o impacto nos empregos humanos?" },
            { author: "Eng. Maria Costa", date: "07/01/2024", text: "A precisão desta tecnologia é realmente notável." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 4,
        title: "Edição Genética Cura Doença Hereditária Rara",
        author: "Dr. Jennifer Chen",
        excerpt: "CRISPR-Cas9 modificado permite correção genética in vivo pela primeira vez em humanos...",
        category: "biotech",
        date: "28/12/2023",
        image: "https://pixabay.com/get/g4b0ef0975052c33de340f5309855f36ac55da84206d0156e7a303385efdeb66ee7c9d248aabdf40811816c1cd1f4b624444f0e1abec24a08798892ea8fb4cc60_1280.jpg",
        content: "<p>Pesquisadores da Universidade Stanford conseguiram curar completamente uma forma rara de distrofia muscular usando uma versão aprimorada da tecnologia CRISPR-Cas9. O tratamento, aplicado em 12 pacientes, mostrou eficácia de 100% sem efeitos colaterais.</p><p>A inovação está na capacidade de editar genes diretamente no corpo do paciente, eliminando a necessidade de procedimentos invasivos. O sistema modificado utiliza nanopartículas lipídicas para entregar o complexo CRISPR especificamente às células musculares afetadas.</p><p>Os pacientes tratados recuperaram função muscular normal em apenas 6 meses. Este sucesso abre caminho para tratamento de milhares de doenças genéticas raras, oferecendo esperança para milhões de famílias.</p>",
        likes: 789,
        comments: [
            { author: "Dra. Fernanda Rocha", date: "29/12/2023", text: "Revolução na medicina! Que avanço extraordinário." },
            { author: "Carlos Eduardo", date: "30/12/2023", text: "Finalmente uma cura real para doenças genéticas." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 5,
        title: "Blockchain Verde Reduz Consumo Energético em 99%",
        author: "Alex Thompson",
        excerpt: "Nova arquitetura blockchain elimina mineração tradicional e funciona com energia renovável...",
        category: "blockchain",
        date: "10/01/2024",
        image: "https://pixabay.com/get/g15413e0d199f7a3becc7edca619e54751f98a6a7c60b2f7c7b3a48b481031b784f91c215eea584459c48d706ce9d06b96abbf4a1486326180474e36afc4d52a3_1280.jpg",
        content: "<p>A startup EcoChain desenvolveu uma arquitetura blockchain revolucionária que elimina a necessidade de mineração tradicional, reduzindo o consumo energético em 99% comparado ao Bitcoin. A rede GreenLedger já processa 100.000 transações por segundo.</p><p>O sistema utiliza um consenso híbrido baseado em Proof-of-Stake sustentável, onde validadores são selecionados com base em sua contribuição para energia renovável. Smart contracts executam automaticamente quando critérios ambientais são atendidos.</p><p>Grandes corporações já adotaram a tecnologia para rastreamento de carbono e certificação de sustentabilidade. A rede é alimentada 100% por energia solar e eólica, estabelecendo novo padrão para blockchain ecológico.</p>",
        likes: 234,
        comments: [
            { author: "Verde Silva", date: "11/01/2024", text: "Finalmente uma blockchain verdadeiramente sustentável!" },
            { author: "Tech Sustentável", date: "12/01/2024", text: "Isso pode mudar completamente a percepção sobre criptomoedas." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 6,
        title: "Óculos AR Projetam Hologramas Realistas",
        author: "Sarah Kim",
        excerpt: "Dispositivo compacto cria hologramas 3D indistinguíveis da realidade usando tecnologia de campo de luz...",
        category: "vr",
        date: "18/01/2024",
        image: "https://pixabay.com/get/g8de0eb493d3a670652e9c8be62952af219e790437ee26d9278ac0a887a5512e5e974f2e76e097c954bf97d63e635b363bac40e99cc2ac551e69c0bd23c6e80c6_1280.jpg",
        content: "<p>A Meta apresentou seus óculos de realidade aumentada de próxima geração, capazes de projetar hologramas fotorrealistas diretamente no campo de visão do usuário. Os protótipos pesam apenas 45 gramas e oferecem 8 horas de autonomia.</p><p>A tecnologia revolucionária utiliza microprojetores de campo de luz que criam ilusões ópticas perfeitas, fazendo objetos virtuais parecerem sólidos e tridimensionais. O sistema de rastreamento ocular permite interação natural com elementos holográficos.</p><p>Demonstrações incluíram reuniões virtuais onde participantes remotos apareciam como se estivessem fisicamente presentes, e aplicações educacionais onde estudantes manipulam modelos moleculares complexos no ar. O lançamento comercial está previsto para 2025.</p>",
        likes: 456,
        comments: [
            { author: "Gamer Pro", date: "19/01/2024", text: "O futuro dos jogos chegou! Mal posso esperar." },
            { author: "Prof. Digital", date: "20/01/2024", text: "As possibilidades educacionais são infinitas." }
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
    'ai': 'Inteligência Artificial',
    'robotics': 'Robótica',
    'quantum': 'Computação Quântica',
    'biotech': 'Biotecnologia',
    'blockchain': 'Blockchain',
    'iot': 'Internet das Coisas',
    'vr': 'Realidade Virtual/AR',
    'space': 'Tecnologia Espacial'
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
    setupEventListeners();
});

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
                Ler Artigo Completo
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
                            article.author.toLowerCase().includes(searchTerm) ||
                            article.excerpt.toLowerCase().includes(searchTerm) ||
                            article.content.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !selectedCategory || article.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    renderArticles(currentArticles);
}

function toggleLike(articleId) {
    const article = articles.find(a => a.id === articleId);
    const button = event.target.closest('.action-btn');
    
    if (article.isLiked) {
        article.likes--;
        article.isLiked = false;
        button.classList.remove('liked');
        showNotification('Like removido');
    } else {
        article.likes++;
        article.isLiked = true;
        button.classList.add('liked');
        button.classList.add('pulse');
        setTimeout(() => button.classList.remove('pulse'), 500);
        showNotification('Artigo curtido!');
    }
    
    button.innerHTML = `<i class="fas fa-heart"></i> ${article.likes}`;
}

function toggleFavorite(articleId) {
    const article = articles.find(a => a.id === articleId);
    const button = event.target.closest('.action-btn');
    
    if (article.isFavorited) {
        article.isFavorited = false;
        button.classList.remove('favorited');
        showNotification('Removido dos favoritos');
    } else {
        article.isFavorited = true;
        button.classList.add('favorited');
        button.classList.add('pulse');
        setTimeout(() => button.classList.remove('pulse'), 500);
        showNotification('Adicionado aos favoritos');
    }
}

function shareArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    
    if (navigator.share) {
        navigator.share({
            title: article.title,
            text: article.excerpt,
            url: window.location.href
        }).catch(err => {
            copyToClipboard(window.location.href);
            showNotification('Link copiado para a área de transferência');
        });
    } else {
        copyToClipboard(window.location.href);
        showNotification('Link copiado para a área de transferência');
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(err => {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

function openModal(articleId) {
    selectedArticle = articles.find(a => a.id === articleId);
    if (!selectedArticle) return;
    
    document.getElementById('modalTitle').textContent = selectedArticle.title;
    document.getElementById('modalAuthor').textContent = `Por ${selectedArticle.author}`;
    document.getElementById('modalDate').textContent = formatDate(selectedArticle.date);
    document.getElementById('modalImage').style.backgroundImage = `url('${selectedArticle.image}')`;
    document.getElementById('modalText').innerHTML = selectedArticle.content;
    
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
    
    if (selectedArticle.comments && selectedArticle.comments.length > 0) {
        selectedArticle.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <div class="comment-author">${comment.author}</div>
                <div class="comment-date">${formatDate(comment.date)}</div>
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
        author: "Usuário Anônimo",
        date: new Date().toLocaleDateString('pt-BR'),
        text: commentText
    };
    
    selectedArticle.comments.push(newComment);
    loadComments();
    
    document.getElementById('commentText').value = '';
    showNotification('Comentário publicado com sucesso!');
}

function showLoading() {
    loading.style.display = 'block';
}

function hideLoading() {
    loading.style.display = 'none';
}

function showNoResults() {
    noResults.style.display = 'block';
}

function hideNoResults() {
    noResults.style.display = 'none';
}

function showNotification(message) {
    // Remove notificação existente se houver
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}