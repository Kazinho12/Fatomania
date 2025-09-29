// Banco de dados de artigos astronômicos
const articles = [
    {
        id: 1,
        title: "Telescópio James Webb Detecta Atmosfera em Exoplaneta Rochoso",
        author: "Dr. Maria Stellar",
        excerpt: "Primeira detecção de atmosfera em planeta rochoso fora do sistema solar pode indicar condições habitáveis...",
        category: "telescopes",
        date: "20/01/2024",
        image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>O Telescópio Espacial James Webb fez uma descoberta histórica ao detectar a primeira atmosfera em um exoplaneta rochoso do tamanho da Terra. O planeta 55 Cancri e, localizado a 41 anos-luz de distância, possui uma atmosfera rica em dióxido de carbono com possíveis traços de vapor d'água.</p><p>Esta descoberta marca um marco na busca por mundos habitáveis, pois anteriormente acreditava-se que planetas tão próximos de suas estrelas não poderiam manter atmosferas devido à intensa radiação estelar.</p><p>Os dados espectrais revelam uma composição atmosférica complexa que sugere processos geológicos ativos, incluindo possível vulcanismo. A equipe internacional de pesquisadores planeja observações de acompanhamento para mapear a distribuição de temperatura e composição química da atmosfera.</p>",
        likes: 847,
        comments: [
            { author: "Dr. Carlos Cosmos", date: "21/01/2024", text: "Descoberta revolucionária! Isso muda completamente nossa compreensão sobre exoplanetas rochosos." },
            { author: "Astrofísica Luna", date: "22/01/2024", text: "As implicações para astrobiologia são enormes. Mal posso esperar pelos próximos dados!" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 2,
        title: "Nova Missão da NASA Encontra Gelo de Água em Asteróide Bennu",
        author: "Prof. Samuel Orbit",
        excerpt: "Amostras da missão OSIRIS-REx revelam abundante gelo de água e compostos orgânicos em asteróide primitivo...",
        category: "missions",
        date: "15/01/2024",
        image: "https://images.unsplash.com/photo-1596496181848-3091d4878b24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>A análise preliminar das amostras coletadas pelo OSIRIS-REx do asteróide Bennu revelou descobertas surpreendentes sobre a origem da água na Terra. O material contém cerca de 4,7% de água em peso, principalmente na forma de minerais hidratados.</p><p>Além da água, as amostras contêm uma rica variedade de compostos orgânicos, incluindo aminoácidos essenciais para a vida. Estes achados suportam a teoria de que asteróides como Bennu podem ter sido responsáveis por entregar água e os blocos de construção da vida à Terra primitiva.</p><p>A missão coletou 250 gramas de material, muito mais do que o esperado, fornecendo material suficiente para décadas de pesquisa futura. Os cientistas estão particularmente interessados em estudar a distribuição espacial dos compostos orgânicos dentro das amostras.</p>",
        likes: 623,
        comments: [
            { author: "Geóloga Espacial Ana", date: "16/01/2024", text: "Fantástico! Essas amostras são uma janela para o sistema solar primitivo." },
            { author: "Dr. Roberto Mineral", date: "17/01/2024", text: "A quantidade de compostos orgânicos é impressionante. Isso reforça as teorias sobre panspermia." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 3,
        title: "Buraco Negro Supermassivo Desperta Após 26.000 Anos",
        author: "Dra. Elena Quasar",
        excerpt: "Sagittarius A*, o buraco negro no centro da nossa galáxia, mostra atividade inédita em observações recentes...",
        category: "blackholes",
        date: "10/01/2024",
        image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Observações coordenadas de múltiplos telescópios revelaram que Sagittarius A* (Sgr A*), o buraco negro supermassivo no centro da Via Láctea, está passando por um período de atividade sem precedentes nos últimos 26.000 anos.</p><p>O Event Horizon Telescope detectou jatos de plasma sendo ejetados do disco de acreção a velocidades próximas à da luz. Esta atividade coincide com o aproximar de uma nuvem de gás massiva que está sendo destruída pela intensa gravidade do buraco negro.</p><p>A radiação de raios-X emitida aumentou em 400% nas últimas semanas, criando um laboratório natural único para estudar os processos físicos extremos nas proximidades de um buraco negro. Os dados estão ajudando a refinar nossa compreensão da relatividade geral em campos gravitacionais extremos.</p>",
        likes: 1205,
        comments: [
            { author: "Físico Teórico Max", date: "11/01/2024", text: "Eventos como este são raríssimos! Uma oportunidade única para testar a relatividade geral." },
            { author: "Astrofísica Gamma", date: "12/01/2024", text: "Os dados de raios-X são espetaculares. Isso vai gerar papers por anos!" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 4,
        title: "Descoberto Sistema de Múltiplas Luas em Exoplaneta Gigante",
        author: "Dr. Jonathan Satellite",
        excerpt: "Primeira confirmação de sistema de luas ao redor de exoplaneta revela complexidade orbital semelhante a Júpiter...",
        category: "planets",
        date: "05/01/2024",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Usando dados do telescópio Kepler e observações de seguimento terrestres, astrônomos confirmaram a existência de pelo menos três luas orbitando o exoplaneta Kepler-1708b, localizado a 5.500 anos-luz da Terra.</p><p>O planeta gigante gasoso, cerca de quatro vezes maior que Júpiter, hospeda um sistema de luas que inclui uma com aproximadamente o tamanho de Marte e duas menores comparáveis a nossa própria Lua. A descoberta foi possível através da análise de variações periódicas no brilho estelar que indicam trânsitos múltiplos.</p><p>Esta descoberta tem implicações significativas para a habitabilidade de exoluas, especialmente considerando que algumas dessas luas podem estar na zona habitável da estrela. O sistema também fornece insights sobre a formação planetária e migração orbital em sistemas extrasolares.</p>",
        likes: 789,
        comments: [
            { author: "Planetólogo Digital", date: "06/01/2024", text: "Sistemas de luas em exoplanetas abrem possibilidades incríveis para habitabilidade!" },
            { author: "Dra. Orbital Mechanics", date: "07/01/2024", text: "A estabilidade dinâmica desse sistema deve ser fascinante de modelar." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 5,
        title: "Radiotelesópio Detecta Sinais Misteriosos de Galáxia Distante",
        author: "Prof. Alexander Radio",
        excerpt: "Padrões repetitivos de ondas de rádio sugerem fenômeno astrofísico desconhecido a 12 bilhões de anos-luz...",
        category: "galaxies",
        date: "28/12/2023",
        image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>O Very Large Array (VLA) no Novo México detectou uma série de rajadas rápidas de rádio (FRBs) com padrões temporais extremamente precisos vindos da galáxia FRB-2024A, uma das fontes mais distantes já identificadas.</p><p>Os sinais mostram uma periodicidade de exatamente 16 dias, 2 horas e 13 minutos, uma precisão que desafia explicações astrofísicas convencionais. A fonte está localizada em uma região de intensa formação estelar, sugerindo possível conexão com estrelas de nêutrons jovens ou magnetares.</p><p>Uma equipe internacional está conduzindo observações coordenadas usando múltiplos telescópios para triangular a origem exata dos sinais. As características espectrais únicas sugerem um mecanismo de emissão nunca antes observado, possivelmente envolvendo campos magnéticos extremamente intensos.</p>",
        likes: 456,
        comments: [
            { author: "SETI Researcher", date: "29/12/2023", text: "A precisão temporal é intrigante. Definitivamente vale investigação detalhada." },
            { author: "Radioastrônomo Beta", date: "30/12/2023", text: "FRBs continuam nos surpreendendo. Este padrão é único na literatura." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 6,
        title: "Missão Europa Clipper Confirma Oceano Subsuperficial em Europa",
        author: "Dra. Isabella Ocean",
        excerpt: "Dados da sonda orbital confirmam oceano global sob a crosta gelada de Europa com duas vezes mais água que os oceanos terrestres...",
        category: "solar-system",
        date: "12/01/2024",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>A missão Europa Clipper da NASA forneceu evidências definitivas de um oceano global sob a superfície gelada de Europa, uma das luas de Júpiter. O oceano contém aproximadamente duas vezes mais água do que todos os oceanos da Terra combinados.</p><p>Medições gravitacionais e magnéticas revelaram que o oceano tem profundidade estimada entre 60-150 quilômetros, mantido líquido pelo aquecimento tidal causado pela gravidade de Júpiter. A descoberta de plumas de vapor d'água emanando da superfície confirma conexão direta entre o oceano e o espaço.</p><p>Análises espectrais das plumas detectaram compostos orgânicos complexos, incluindo possíveis aminoácidos. A presença de sal nas plumas sugere interação entre a água oceânica e o núcleo rochoso da lua, criando condições potencialmente favoráveis à vida microbiana.</p>",
        likes: 932,
        comments: [
            { author: "Astrobiólogo Prime", date: "13/01/2024", text: "Europa se torna cada vez mais promissora para astrobiologia! Precisamos de uma missão de perfuração." },
            { author: "Geologa Planetária", date: "14/01/2024", text: "As interações água-rocha são cruciais para habitabilidade. Descoberta fantástica!" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 7,
        title: "Primeira Detecção de Vida Microbiana em Meteorito Marciano",
        author: "Dr. Marcus Martian",
        excerpt: "Análise avançada de meteorito ALH84001 revela biosignaturas definitivas de vida primitiva em Marte...",
        category: "astrobiology",
        date: "25/01/2024",
        image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma análise revolucionária usando espectrometria de massa de íons secundários de alta resolução identificou inequívocas biosignaturas no meteorito marciano ALH84001, coletado na Antártica em 1984.</p><p>A equipe descobriu estruturas microscópicas de magnetita com características que só podem ser produzidas por processos biológicos, similares às encontradas em bactérias magnetotáticas terrestres. Isótopos de carbono e enxofre mostram assinaturas consistentes com atividade metabólica microbiana.</p><p>A datação radiométrica indica que essas biosignaturas se formaram há aproximadamente 3,6 bilhões de anos, quando Marte tinha um clima mais quente e úmido. Esta descoberta representa a primeira evidência direta de vida passada em Marte, revolucionando nossa compreensão da distribuição da vida no sistema solar.</p>",
        likes: 1543,
        comments: [
            { author: "Exobióloga Stellar", date: "26/01/2024", text: "Finalmente! Esta é a prova que a comunidade científica esperava há décadas." },
            { author: "Geólogo Marciano", date: "27/01/2024", text: "As implicações são enormes. Marte realmente teve vida! Agora precisamos encontrar vida atual." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 8,
        title: "Matéria Escura Detectada em Colisão de Aglomerados Galácticos",
        author: "Prof. Diana Cosmos",
        excerpt: "Observações do Hubble e Chandra revelam separação clara entre matéria normal e escura em colisão cósmica...",
        category: "cosmology",
        date: "18/01/2024",
        image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma colaboração internacional usando os telescópios Hubble e Chandra documentou a mais clara evidência da matéria escura através da observação da colisão entre os aglomerados galácticos 1E 0657-558, conhecidos como Bullet Cluster.</p><p>As observações revelam uma separação nítida entre a matéria normal (visível através de raios-X) e a matéria escura (detectada através de lentes gravitacionais). Durante a colisão, a matéria normal interagiu e foi desacelerada, enquanto a matéria escura passou através sem interação.</p><p>Esta observação fornece evidência direta da existência da matéria escura como uma forma de matéria que interage gravitacionalmente mas não eletromagneticamente. Os dados também impõem restrições importantes em teorias de gravidade modificada, favorecendo modelos que incluem matéria escura como partículas fundamentais.</p>",
        likes: 678,
        comments: [
            { author: "Cosmólogo Teórico", date: "19/01/2024", text: "Bullet Cluster continua sendo nosso melhor laboratório para estudar matéria escura!" },
            { author: "Física de Partículas", date: "20/01/2024", text: "Estes dados são cruciais para limitar modelos de matéria escura. Excelente trabalho!" }
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
    'planets': 'Planetas e Exoplanetas',
    'galaxies': 'Galáxias e Nebulosas',
    'missions': 'Missões Espaciais',
    'telescopes': 'Telescópios e Observatórios',
    'blackholes': 'Buracos Negros',
    'solar-system': 'Sistema Solar',
    'cosmology': 'Cosmologia',
    'astrobiology': 'Astrobiologia'
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
                Ler Descoberta Completa
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
        showNotification('Descoberta curtida!');
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
        author: "Explorador Espacial",
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