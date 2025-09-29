// Banco de dados de artigos de ciência esportiva
const articles = [
    {
        id: 1,
        title: "Biomecânica da Corrida: Como a Pisada Afeta a Performance",
        author: "Dr. Carlos Biomec",
        excerpt: "Estudo revela como diferentes padrões de pisada influenciam a eficiência energética e prevenção de lesões em corredores...",
        category: "biomechanics",
        date: "28/01/2024",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma pesquisa inovadora com 500 corredores profissionais revelou que o padrão de pisada tem impacto direto na eficiência energética e na incidência de lesões. Utilizando análise 3D de movimento e sensores de pressão, os pesquisadores identificaram três tipos principais de pisada e suas implicações.</p><p>Corredores com pisada de antepé demonstraram 12% mais eficiência energética, mas maior risco de lesões no tendão de Aquiles. Já os corredores com pisada de calcanhar mostraram menor impacto articular, porém com maior gasto energético.</p><p>O estudo desenvolveu um protocolo personalizado de treinamento baseado no padrão biomecânico individual, resultando em melhoria de 15% na performance e redução de 40% nas lesões entre os participantes do grupo experimental.</p>",
        likes: 934,
        comments: [
            { author: "Runner Pro", date: "29/01/2024", text: "Finalmente dados científicos sobre pisada! Isso vai mudar meu treinamento." },
            { author: "Fisioterapeuta Sports", date: "30/01/2024", text: "Excelente pesquisa. Usarei esses dados na reabilitação dos meus atletas." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 2,
        title: "Nutrição Periodizada: Estratégias Alimentares para Diferentes Fases do Treinamento",
        author: "Dra. Ana Nutritiva",
        excerpt: "Protocolo nutricional personalizado por fase de treinamento aumenta performance atlética em 23% e acelera recuperação...",
        category: "nutrition",
        date: "25/01/2024",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Pesquisadores desenvolveram um protocolo de nutrição periodizada que ajusta macronutrientes, timing e suplementação conforme as diferentes fases do treinamento esportivo. O estudo acompanhou 200 atletas por 12 meses.</p><p>Na fase de volume alto, a dieta enfatizou carboidratos complexos (8-10g/kg) e proteínas (2,2g/kg). Durante períodos de intensidade, reduziu-se carboidratos para 5-6g/kg e aumentou-se gorduras saudáveis para 35% das calorias totais.</p><p>Os resultados mostraram 23% de melhoria na performance, 30% de redução no tempo de recuperação e 18% menos inflamação sistêmica. A abordagem personalizada considerou também fatores genéticos relacionados ao metabolismo de cada atleta.</p>",
        likes: 756,
        comments: [
            { author: "Nutricionista Esportiva", date: "26/01/2024", text: "Protocolo revolucionário! Vou implementar com meus atletas de elite." },
            { author: "Atleta Olímpico", date: "27/01/2024", text: "Nutrição periodizada fez toda diferença na minha preparação para os Jogos." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 3,
        title: "Wearables Inteligentes: Como Sensores Revolucionam o Monitoramento Atlético",
        author: "Eng. Tech Esportivo",
        excerpt: "Dispositivos vestíveis com IA predizem lesões com 89% de precisão e otimizam cargas de treinamento em tempo real...",
        category: "technology",
        date: "22/01/2024",
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma nova geração de dispositivos vestíveis equipados com inteligência artificial está transformando o monitoramento de atletas. Os sensores coletam mais de 100 parâmetros fisiológicos por segundo, incluindo variabilidade cardíaca, biomarcadores de estresse e padrões de movimento.</p><p>O sistema de IA desenvolvido consegue prever lesões musculares com 89% de precisão até 72 horas antes dos primeiros sintomas, analisando micro-alterações nos padrões de movimento e respostas fisiológicas.</p><p>Em testes com equipes profissionais, a tecnologia reduziu lesões em 65% e otimizou cargas de treinamento, resultando em melhoria média de 18% na performance. Os dispositivos também monitoram qualidade do sono, hidratação e níveis de estresse psicológico.</p>",
        likes: 1124,
        comments: [
            { author: "Preparador Físico", date: "23/01/2024", text: "Tecnologia impressionante! A prevenção de lesões é o futuro do esporte." },
            { author: "Data Scientist Sports", date: "24/01/2024", text: "Os algoritmos de ML estão cada vez mais precisos na análise de performance." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 4,
        title: "Psicologia da Performance: Técnicas de Visualização Mental Aumentam Rendimento",
        author: "Psic. Mental Performance",
        excerpt: "Protocolo de visualização mental estruturada melhora performance atlética em 21% e reduz ansiedade pré-competição...",
        category: "psychology",
        date: "20/01/2024",
        image: "https://images.unsplash.com/photo-1506629905589-4b9c83808804?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Um estudo controlado com 150 atletas de alto rendimento demonstrou que técnicas estruturadas de visualização mental podem melhorar significativamente a performance esportiva. O protocolo combinou neurociência aplicada com psicologia esportiva.</p><p>Os atletas passaram por 8 semanas de treinamento mental, incluindo visualização de movimentos técnicos, situações competitivas e gestão de estresse. Exames de ressonância magnética mostraram aumento da atividade em áreas cerebrais relacionadas ao controle motor.</p><p>Os resultados revelaram 21% de melhoria na performance, 35% de redução na ansiedade pré-competição e 28% de aumento na confiança atlética. A técnica mostrou-se especialmente eficaz em esportes de precisão como tiro esportivo e golfe.</p>",
        likes: 643,
        comments: [
            { author: "Psicólogo Esportivo", date: "21/01/2024", text: "A mente é realmente o diferencial no esporte de alto nível!" },
            { author: "Treinador Olímpico", date: "22/01/2024", text: "Implementei essas técnicas e os resultados são visíveis na competição." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 5,
        title: "Crioterapia vs Termoterapia: Qual Método de Recuperação é Mais Eficaz?",
        author: "Dr. Recovery Science",
        excerpt: "Estudo comparativo revela que alternância entre frio e calor acelera recuperação muscular em 45% comparado a métodos isolados...",
        category: "recovery",
        date: "18/01/2024",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma pesquisa comparativa analisou três protocolos de recuperação pós-exercício: crioterapia (2-4°C), termoterapia (38-42°C) e terapia de contraste (alternância frio-calor). O estudo envolveu 180 atletas durante 6 meses.</p><p>A crioterapia reduziu inflamação em 30% mas limitou a síntese proteica. A termoterapia aumentou fluxo sanguíneo em 40% mas prolongou o estado inflamatório. A terapia de contraste combinou os benefícios de ambos os métodos.</p><p>O protocolo de contraste (3 min frio + 1 min calor, repetido 4x) acelera a recuperação muscular em 45%, reduz dor em 35% e melhora a disponibilidade para o próximo treino em 50%. O método é especialmente eficaz para esportes de alta intensidade.</p>",
        likes: 892,
        comments: [
            { author: "Fisioterapeuta Elite", date: "19/01/2024", text: "Terapia de contraste é game changer! Uso com todos meus atletas agora." },
            { author: "Atleta Profissional", date: "20/01/2024", text: "Sinto diferença real na recuperação usando esse protocolo." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 6,
        title: "Equipamentos Inteligentes: Tênis com Sensores Ajustam Amortecimento em Tempo Real",
        author: "Eng. Inovação Esportiva",
        excerpt: "Calçados esportivos com tecnologia adaptativa reduzem impacto articular em 32% e melhoram economia de corrida...",
        category: "equipment",
        date: "15/01/2024",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Engenheiros desenvolveram tênis inteligentes com sistema de amortecimento adaptativo que ajusta automaticamente a rigidez da entressola baseado no tipo de superfície, velocidade e padrão de pisada do corredor.</p><p>O calçado incorpora sensores de pressão, acelerômetros e giroscópios que coletam dados a 1000Hz. Um microprocessador analisa os dados e ajusta o sistema pneumático de amortecimento em milissegundos.</p><p>Testes com 100 corredores mostraram 32% de redução no impacto articular, 15% de melhoria na economia de corrida e 28% menos fadiga muscular. O sistema também se adapta automaticamente para subidas, descidas e diferentes tipos de terreno.</p>",
        likes: 567,
        comments: [
            { author: "Runner Tech", date: "16/01/2024", text: "O futuro da corrida chegou! Quando estará disponível comercialmente?" },
            { author: "Biomecânico Esportivo", date: "17/01/2024", text: "Tecnologia impressionante para prevenção de lesões por overuse." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 7,
        title: "Treinamento de Força com Realidade Virtual: Engajamento e Performance",
        author: "Prof. VR Sports",
        excerpt: "Ambiente virtual interativo aumenta motivação em 40% e melhora técnica de levantamento através de feedback visual imersivo...",
        category: "training",
        date: "12/01/2024",
        image: "https://images.unsplash.com/photo-1593476087123-36d1de271f08?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Pesquisadores criaram um sistema de treinamento de força usando realidade virtual que combina feedback biomecânico em tempo real com elementos de gamificação para maximizar o engajamento e melhorar a técnica de movimento.</p><p>O sistema utiliza câmeras 3D e sensores IMU para capturar movimento corporal, projetando o atleta em ambientes virtuais diversos - desde academias futuristas até cenários de competição olímpica.</p><p>Após 8 semanas de treinamento, os atletas no grupo VR mostraram 40% mais motivação, 25% melhor aderência ao treinamento e 18% de melhoria na técnica de levantamento comparado ao grupo controle. O feedback visual imediato corrigiu padrões incorretos de movimento automaticamente.</p>",
        likes: 734,
        comments: [
            { author: "Personal Trainer VR", date: "13/01/2024", text: "VR no fitness é revolucionário! Meus clientes amam treinar assim." },
            { author: "Desenvolvedor Games", date: "14/01/2024", text: "A gamificação do treinamento tem potencial enorme para engajamento." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 8,
        title: "Análise Genética Personaliza Treinamento Atlético Individual",
        author: "Dr. Genomic Sports",
        excerpt: "Teste genético identifica predisposições atléticas e otimiza programas de treinamento baseados no perfil molecular...",
        category: "performance",
        date: "10/01/2024",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Um estudo pioneiro utilizou análise genômica para personalizar programas de treinamento atlético baseados no perfil genético individual. Foram analisados 47 genes relacionados à performance esportiva em 300 atletas.</p><p>O teste identifica variações nos genes ACTN3 (fibras musculares rápidas), ACE (capacidade aeróbica), EPOR (produção de eritropoietina) e outros 44 marcadores relacionados à recuperação, metabolismo e risco de lesões.</p><p>Atletas com treinamento personalizado geneticamente mostraram 27% mais melhoria na performance específica, 35% menos lesões e 42% melhor resposta adaptativa ao treinamento. O protocolo considera também fatores epigenéticos modificáveis pelo estilo de vida.</p>",
        likes: 445,
        comments: [
            { author: "Geneticista Esportivo", date: "11/01/2024", text: "A medicina esportiva personalizada é o futuro do alto rendimento!" },
            { author: "Técnico Nacional", date: "12/01/2024", text: "Usar genética para otimizar talentos jovens pode revolucionar o esporte." }
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
    'biomechanics': 'Biomecânica',
    'nutrition': 'Nutrição Esportiva',
    'technology': 'Tecnologia Esportiva',
    'performance': 'Performance',
    'recovery': 'Recuperação',
    'psychology': 'Psicologia Esportiva',
    'equipment': 'Equipamentos',
    'training': 'Treinamento'
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
                Ler Pesquisa Completa
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
        showNotification('Pesquisa curtida!');
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
        author: "Atleta Cientista",
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