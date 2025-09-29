// Banco de dados de artigos
const articles = [
    {
        id: 1,
        title: "Descoberta de Novo Estado da Matéria",
        author: "Dr. Carlos Silva",
        excerpt: "Pesquisadores identificam um novo estado da matéria que pode revolucionar a computação quântica...",
        category: "physics",
        date: "15/06/2023",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma equipe internacional de físicos anunciou a descoberta de um novo estado da matéria que exibe propriedades quânticas nunca antes observadas. O estado, chamado de 'supercondutor topológico quântico', foi identificado em experimentos com materiais bidimensionais a temperaturas extremamente baixas.</p><p>Esta descoberta pode ter implicações significativas para o desenvolvimento de computadores quânticos mais estáveis e eficientes. Os pesquisadores acreditam que esse novo estado da matéria pode permitir o armazenamento e processamento de informações quânticas com muito menos interferência do que os sistemas atuais.</p><p>O estudo, publicado na revista Nature Physics, envolveu colaboradores de dez países e mais de três anos de experimentos em instalações de pesquisa de ponta.</p>",
        likes: 124,
        comments: [],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 2,
        title: "Nova Terapia Genética para Câncer",
        author: "Dra. Ana Oliveira",
        excerpt: "Terapia genética experimental mostra resultados promissores no tratamento de tumores resistentes...",
        category: "medicine",
        date: "22/05/2023",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Pesquisadores do Instituto de Pesquisa Médica desenvolveram uma nova abordagem de terapia genética que demonstrou eficácia contra formas agressivas de câncer em ensaios clínicos preliminares. A técnica utiliza vírus modificados para entregar genes terapêuticos especificamente às células cancerígenas, evitando danos às células saudáveis.</p><p>Nos testes iniciais, a terapia mostrou uma taxa de resposta de 78% em pacientes com tumores que haviam se mostrado resistentes a tratamentos convencionais. Os efeitos colaterais foram mínimos, representando um avanço significativo em relação às terapias genéticas existentes.</p><p>Os resultados completos serão publicados na próxima edição do Journal of Medical Breakthroughs, mas os pesquisadores já estão planejando estudos de fase III para confirmar os achados.</p>",
        likes: 89,
        comments: [
            { author: "Dr. Roberto Santos", date: "23/05/2023", text: "Resultados impressionantes! Isso pode mudar o paradigma do tratamento oncológico." },
            { author: "Mariana Costa", date: "25/05/2023", text: "Minha mãe sofre de câncer metastático. Quando essa terapia estará disponível?" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 3,
        title: "Bactéria que Come Plástico",
        author: "Prof. Marcos Lima",
        excerpt: "Cientistas descobrem bactéria capaz de decompor plástico em apenas 48 horas...",
        category: "biology",
        date: "10/04/2023",
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma equipe de microbiologistas identificou uma nova espécie de bactéria com capacidade notável de decompor plásticos PET em tempo recorde. A bactéria, encontrada em um aterro sanitário no Japão, produz enzimas que quebram as ligações moleculares do plástico, transformando-o em substâncias biodegradáveis.</p><p>Em condições laboratoriais controladas, a bactéria conseguiu decompor uma folha de plástico de 1cm de espessura em apenas 48 horas - um processo que normalmente levaria séculos no ambiente natural. Os pesquisadores estão agora trabalhando para otimizar o processo e desenvolver aplicações em escala industrial.</p><p>Esta descoberta pode representar uma solução promissora para o crescente problema da poluição por plásticos, embora especialistas alertem que a redução no consumo ainda seja a estratégia mais eficaz.</p>",
        likes: 215,
        comments: [
            { author: "Carlos Eduardo", date: "11/04/2023", text: "Finalmente uma boa notícia para o meio ambiente! Quando começarão os testes em larga escala?" },
            { author: "Dra. Fernanda Rocha", date: "12/04/2023", text: "Precisamos estudar os subprodutos dessa decomposição para garantir que não sejam tóxicos." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 4,
        title: "Telescópio Encontra Exoplaneta Habitável",
        author: "Dra. Sofia Chen",
        excerpt: "Novo exoplaneta na zona habitável de sua estrela pode conter água líquida...",
        category: "astronomy",
        date: "03/03/2023",
        image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: "<p>O telescópio espacial James Webb fez uma descoberta emocionante: um exoplaneta localizado na zona habitável de sua estrela, com fortes evidências da presença de água em estado líquido. O planeta, denominado K2-18b, orbita uma estrela anã vermelha a 124 anos-luz da Terra.</p><p>Análises espectroscópicas revelaram a presença de vapor d'água em sua atmosfera, além de possíveis assinaturas químicas associadas a processos biológicos. Embora ainda não haja evidências diretas de vida, as condições parecem ser as mais promissoras já encontradas fora do nosso sistema solar.</p><p>A equipe de pesquisa planeja agora observações adicionais para buscar biomarcadores mais específicos, como oxigênio e metano em proporções que possam indicar atividade biológica.</p>",
        likes: 178,
        comments: [
            { author: "José Almeida", date: "04/03/2023", text: "Incrível pensar que podemos não estar sozinhos no universo!" },
            { author: "Prof. Ricardo Gomes", date: "05/03/2023", text: "Precisamos interpretar esses dados com cautela, mas sem dúvida é uma descoberta histórica." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 5,
        title: "Inteligência Artificial Diagnóstica",
        author: "Dr. Eduardo Tanaka",
        excerpt: "Sistema de IA supera médicos em diagnóstico de doenças raras...",
        category: "technology",
        date: "18/02/2023",
        image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Um novo sistema de inteligência artificial desenvolvido por pesquisadores do MIT demonstrou capacidade superior à de especialistas humanos no diagnóstico de doenças raras a partir de imagens médicas. O algoritmo, treinado em milhões de casos clínicos, conseguiu identificar padrões sutis que frequentemente passam despercebidos até mesmo por radiologistas experientes.</p><p>Em testes cegos, o sistema alcançou uma taxa de acerto de 94% no diagnóstico de 50 condições raras, comparado a 88% dos especialistas humanos. O mais impressionante é que o sistema foi capaz de fazer esses diagnósticos em segundos, enquanto os médicos levaram em média 15 minutos por caso.</p><p>Os desenvolvedores enfatizam que a tecnologia não pretende substituir os médicos, mas sim atuar como uma ferramenta de apoio à decisão clínica, especialmente em áreas com escassez de especialistas.</p>",
        likes: 156,
        comments: [
            { author: "Dra. Patrícia Lima", date: "19/02/2023", text: "Como médica, vejo isso como uma ferramenta valiosa, mas a relação médico-paciente é insubstituível." },
            { author: "Tiago Mendes", date: "20/02/2023", text: "Quais as implicações éticas do uso de IA na medicina? Precisamos de regulamentação." }
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
}

function loadArticles() {
    showLoading();
    
    // Simular carregamento
    setTimeout(() => {
        hideLoading();
        renderArticles(currentArticles);
    }, 500);
}

function renderArticles(articlesToRender) {
    articlesGrid.innerHTML = '';
    
    if (articlesToRender.length === 0) {
        showNoResults();
        return;
    }
    
    hideNoResults();
    
    articlesToRender.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });
}

function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card fade-in';
    
    card.innerHTML = `
        <div class="article-image" style="background-image: url('${article.image}')">
            <div class="article-category">${article.category}</div>
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
    // Verifica se a data está no formato DD/MM/AAAA
    if (dateString.includes('/')) {
        const [day, month, year] = dateString.split('/');
        return new Date(year, month - 1, day).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    // Caso esteja no formato AAAA-MM-DD
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
    } else {
        article.likes++;
        article.isLiked = true;
        button.classList.add('liked');
        button.classList.add('pulse');
        setTimeout(() => button.classList.remove('pulse'), 500);
    }
    
    button.innerHTML = `<i class="fas fa-heart"></i> ${article.likes}`;
}

function toggleFavorite(articleId) {
    const article = articles.find(a => a.id === articleId);
    const button = event.target.closest('.action-btn');
    
    if (article.isFavorited) {
        article.isFavorited = false;
        button.classList.remove('favorited');
        showNotification('Artigo removido dos favoritos');
    } else {
        article.isFavorited = true;
        button.classList.add('favorited');
        button.classList.add('pulse');
        setTimeout(() => button.classList.remove('pulse'), 500);
        showNotification('Artigo adicionado aos favoritos');
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
            console.error('Erro ao compartilhar:', err);
            // Fallback para navegadores que não suportam Web Share API
            navigator.clipboard.writeText(window.location.href)
                .then(() => showNotification('Link copiado para a área de transferência!'))
                .catch(err => showNotification('Não foi possível compartilhar o artigo.'));
        });
    } else {
        // Fallback para navegadores que não suportam Web Share API
        navigator.clipboard.writeText(window.location.href)
            .then(() => showNotification('Link copiado para a área de transferência!'))
            .catch(err => showNotification('Não foi possível compartilhar o artigo.'));
    }
}

function openModal(articleId) {
    selectedArticle = articles.find(a => a.id === articleId);
    
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
    document.getElementById('commentText').value = '';
}

function loadComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    
    if (selectedArticle.comments.length === 0) {
        commentsList.innerHTML = '<p style="color: #aaa; text-align: center;">Nenhum comentário ainda. Seja o primeiro a comentar!</p>';
        return;
    }
    
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

function submitComment() {
    const commentText = document.getElementById('commentText').value.trim();
    
    if (!commentText) {
        showNotification('Por favor, escreva um comentário antes de publicar.');
        return;
    }
    
    const newComment = {
        author: 'Usuário Anônimo', // Em um sistema real, seria o usuário logado
        date: new Date().toISOString().split('T')[0],
        text: commentText
    };
    
    selectedArticle.comments.push(newComment);
    loadComments();
    document.getElementById('commentText').value = '';
    showNotification('Comentário publicado com sucesso!');
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

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar estilos para notificações
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(to right, var(--destaque), #ffaa00);
        color: #222;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .fade-out {
        animation: slideOut 0.3s ease forwards;
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// Tornar funções acessíveis globalmente para os eventos onclick nos elementos HTML
window.toggleLike = toggleLike;
window.toggleFavorite = toggleFavorite;
window.shareArticle = shareArticle;
window.openModal = openModal;
window.submitComment = submitComment;