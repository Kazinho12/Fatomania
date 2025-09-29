// Banco de dados de artigos ecológicos e sustentáveis
const articles = [
    {
        id: 1,
        title: "Painéis Solares Orgânicos Atingem 95% de Eficiência",
        author: "Dra. Green Energy",
        excerpt: "Nova tecnologia de células solares feitas com materiais orgânicos revoluciona a energia renovável com custos 80% menores...",
        category: "renewable-energy",
        date: "25/01/2024",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Pesquisadores da Universidade de Cambridge desenvolveram painéis solares orgânicos que alcançaram eficiência de 95% na conversão de luz solar em energia elétrica, superando significativamente os painéis de silício tradicionais.</p><p>A tecnologia utiliza polímeros orgânicos especiais que podem ser impressos em superfícies flexíveis, reduzindo drasticamente os custos de produção e instalação. Os novos painéis são também completamente recicláveis e biodegradáveis.</p><p>Testes de campo demonstraram que os painéis mantêm alta eficiência mesmo em condições de baixa luminosidade, tornando-os ideais para regiões com menor incidência solar. A comercialização está prevista para 2025, com previsão de reduzir o custo da energia solar em 80%.</p>",
        likes: 1247,
        comments: [
            { author: "Engenheiro Solar", date: "26/01/2024", text: "Incrível! Isso pode democratizar o acesso à energia solar em todo o mundo." },
            { author: "Sustentável Tech", date: "27/01/2024", text: "Painéis biodegradáveis são o futuro da energia limpa!" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 2,
        title: "Bactérias Modificadas Transformam Plástico em Combustível Limpo",
        author: "Prof. Bio Solutions",
        excerpt: "Microorganismos geneticamente modificados conseguem decompor resíduos plásticos e produzir biocombustível em apenas 72 horas...",
        category: "waste-management",
        date: "20/01/2024",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma equipe internacional de biotecnólogos desenvolveu bactérias geneticamente modificadas capazes de degradar plásticos PET e produzir biocombustível renovável como subproduto do processo de decomposição.</p><p>O processo ocorre em apenas 72 horas, tempo muito inferior aos métodos convencionais de reciclagem. As bactérias conseguem processar garrafas plásticas, embalagens e outros resíduos de PET, transformando-os em etanol de alta pureza.</p><p>Testes piloto em uma instalação no Japão processaram 5 toneladas de resíduos plásticos por dia, produzindo 3.000 litros de biocombustível. A tecnologia não gera subprodutos tóxicos e o processo é carbon-neutro, representando uma solução dupla para gestão de resíduos e produção de energia limpa.</p>",
        likes: 892,
        comments: [
            { author: "Ecologista Marinho", date: "21/01/2024", text: "Finalmente uma solução real para o problema do plástico nos oceanos!" },
            { author: "Dr. Biotecnologia", date: "22/01/2024", text: "A engenharia genética aplicada à sustentabilidade tem potencial imenso." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 3,
        title: "Floresta Urbana Vertical Remove 40 Toneladas de CO₂ por Ano",
        author: "Arq. Verde Sustentável",
        excerpt: "Edifício residencial de 25 andares incorpora sistema de floresta vertical que purifica o ar e reduz temperatura urbana...",
        category: "green-technology",
        date: "18/01/2024",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>O primeiro edifício com floresta vertical do Brasil foi inaugurado em São Paulo, incorporando mais de 20.000 plantas em sua fachada que funcionam como um sistema natural de purificação do ar urbano.</p><p>A estrutura consegue remover 40 toneladas de CO₂ da atmosfera anualmente, equivalente ao plantio de 400 árvores adultas. O sistema também reduz a temperatura interna em até 5°C, diminuindo significativamente o uso de ar condicionado.</p><p>As plantas são irrigadas através de um sistema de captação e reuso de água da chuva, e o edifício produz 30% de sua própria energia através de painéis solares integrados. O projeto serve como modelo para futuras construções sustentáveis em centros urbanos densamente povoados.</p>",
        likes: 634,
        comments: [
            { author: "Urbanista Verde", date: "19/01/2024", text: "Projetos assim são essenciais para combater as ilhas de calor urbanas." },
            { author: "Arquiteta Sustentável", date: "20/01/2024", text: "A integração entre arquitetura e natureza é lindamente executada aqui." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 4,
        title: "Agricultura Vertical Usa 95% Menos Água que Cultivo Tradicional",
        author: "Eng. Agro Inovação",
        excerpt: "Sistema hidropônico vertical produz 10 vezes mais alimentos por metro quadrado com economia extrema de recursos...",
        category: "sustainable-agriculture",
        date: "15/01/2024",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma fazenda vertical automatizada em Singapura demonstrou que é possível produzir alimentos frescos usando 95% menos água e 99% menos terra em comparação com a agricultura tradicional, mantendo a mesma qualidade nutricional.</p><p>O sistema utiliza LED especializados que fornecem o espectro de luz ideal para cada tipo de cultivo, permitindo crescimento 3 vezes mais rápido. A fazenda produz 1.000 kg de vegetais folhosos por dia em uma área de apenas 1.000 m².</p><p>Sensores IoT monitoram constantemente pH, umidade, temperatura e nutrientes, otimizando automaticamente as condições de crescimento. A instalação é completamente livre de pesticidas e herbicidas, produzindo alimentos orgânicos certificados em ambiente controlado urbano.</p>",
        likes: 756,
        comments: [
            { author: "Nutricionista Orgânico", date: "16/01/2024", text: "Alimentos frescos produzidos localmente nas cidades são o futuro da alimentação sustentável." },
            { author: "Farmer Tech", date: "17/01/2024", text: "A eficiência no uso da água é impressionante. Isso pode revolucionar a agricultura em regiões áridas." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 5,
        title: "Coral Artificial Restaura Biodiversidade Marinha em 6 Meses",
        author: "Bióloga Marinha Coral",
        excerpt: "Estruturas de coral impresso em 3D com materiais sustentáveis aceleram recuperação de recifes degradados...",
        category: "biodiversity",
        date: "12/01/2024",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Cientistas marinhos desenvolveram estruturas de coral artificial impressas em 3D usando carbonato de cálcio sustentável que aceleram dramaticamente a recuperação de recifes de coral degradados.</p><p>Os corais artificiais são projetados com microporos específicos que favorecem o crescimento de corais naturais e fornecem habitat imediato para peixes e outros organismos marinhos. Em apenas 6 meses, um recife artificial de 100 m² atraiu mais de 50 espécies diferentes.</p><p>O material é 100% biodegradável e tem pH neutro, não causando impacto negativo no ecossistema marinho. Projetos piloto na Grande Barreira de Coral australiana mostraram taxa de colonização 5 vezes superior aos métodos tradicionais de restauração.</p>",
        likes: 428,
        comments: [
            { author: "Mergulhador Científico", date: "13/01/2024", text: "Ver a vida marinha retornando tão rapidamente é emocionante!" },
            { author: "Conservacionista Oceânico", date: "14/01/2024", text: "Tecnologia como essa pode salvar nossos recifes de coral." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 6,
        title: "Filtro Atmosférico Gigante Captura 1000 Toneladas de CO₂ Diariamente",
        author: "Dr. Clean Air Technology",
        excerpt: "Maior instalação de captura direta de carbono do mundo entra em operação na Islândia usando energia geotérmica...",
        category: "climate-change",
        date: "10/01/2024",
        image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>A maior instalação de captura direta de carbono do mundo iniciou operações na Islândia, conseguindo extrair 1000 toneladas de CO₂ da atmosfera diariamente usando exclusivamente energia geotérmica renovável.</p><p>O sistema utiliza ventiladores massivos para aspirar ar atmosférico através de filtros químicos especiais que capturam especificamente moléculas de CO₂. O carbono capturado é então mineralizado em rochas basálticas subterrâneas, armazenando-o permanentemente.</p><p>A instalação funciona 24 horas por dia e consegue processar o equivalente às emissões de 200.000 carros por ano. O projeto demonstra a viabilidade técnica e econômica da captura direta de carbono em escala industrial, oferecendo esperança real no combate às mudanças climáticas.</p>",
        likes: 1089,
        comments: [
            { author: "Climatologista Global", date: "11/01/2024", text: "Precisamos de centenas dessas instalações para fazer diferença real no clima." },
            { author: "Engenheiro Ambiental", date: "12/01/2024", text: "A combinação com energia geotérmica torna o processo verdadeiramente sustentável." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 7,
        title: "Asfalto Fotocatalítico Purifica Ar de Cidade Inteira",
        author: "Eng. Civil Inovador",
        excerpt: "Pavimentação especial com dióxido de titânio decompõe poluentes atmosféricos através da luz solar...",
        category: "pollution-control",
        date: "08/01/2024",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>A cidade de Milão implementou 100 km de asfalto fotocatalítico que utiliza dióxido de titânio para decompor poluentes atmosféricos automaticamente quando exposto à luz solar, melhorando significativamente a qualidade do ar urbano.</p><p>O pavimento especial consegue neutralizar óxidos de nitrogênio (NOx), compostos orgânicos voláteis e material particulado fino, efetivamente 'comendo' a poluição do ar. Cada quilômetro de asfalto equivale ao poder de purificação de 80 árvores adultas.</p><p>Medições após 6 meses de implementação mostraram redução de 40% nos níveis de NOx nas áreas cobertas. O asfalto mantém sua capacidade de purificação por mais de 10 anos e não requer manutenção especial, representando uma solução passiva e duradoura para poluição urbana.</p>",
        likes: 673,
        comments: [
            { author: "Prefeito Verde", date: "09/01/2024", text: "Infraestrutura que combate poluição enquanto serve seu propósito principal é genial." },
            { author: "Químico Ambiental", date: "10/01/2024", text: "A fotocatálise aplicada em escala urbana tem potencial transformador." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 8,
        title: "Abelhas Robóticas Polinizam Plantações Ameaçadas",
        author: "Prof. Robotic Nature",
        excerpt: "Enxame de micro-robôs autônomos realiza polinização artificial em cultivos afetados pelo declínio das abelhas...",
        category: "conservation",
        date: "05/01/2024",
        image: "https://images.unsplash.com/photo-1558642084-fd906c8bf4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Pesquisadores de Harvard desenvolveram abelhas robóticas do tamanho de uma moeda que conseguem realizar polinização artificial eficiente em plantações comerciais, oferecendo uma solução tecnológica para o declínio global das populações de abelhas.</p><p>Os micro-robôs voam autonomamente usando IA para identificar flores que precisam de polinização, coletam e depositam pólen com precisão usando pequenos pincéis eletrostáticos. Cada robô pode polinizar até 1000 flores por dia.</p><p>Testes em campos de amêndoas na Califórnia demonstraram eficiência de polinização equivalente às abelhas naturais. Os robôs são alimentados por energia solar e operam em enxames coordenados de 100 unidades, cobrindo áreas de até 50 hectares por dia sem interferir na vida selvagem existente.</p>",
        likes: 534,
        comments: [
            { author: "Apicultor Preocupado", date: "06/01/2024", text: "Embora a tecnologia seja impressionante, precisamos salvar as abelhas reais também." },
            { author: "Agricultor Sustentável", date: "07/01/2024", text: "Uma solução de emergência necessária enquanto trabalhamos na recuperação dos polinizadores naturais." }
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
    'renewable-energy': 'Energia Renovável',
    'waste-management': 'Gestão de Resíduos',
    'biodiversity': 'Biodiversidade',
    'climate-change': 'Mudanças Climáticas',
    'sustainable-agriculture': 'Agricultura Sustentável',
    'green-technology': 'Tecnologia Verde',
    'conservation': 'Conservação',
    'pollution-control': 'Controle de Poluição'
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
                Ler Solução Completa
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
        showNotification('Solução curtida!');
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
        author: "Eco Defensor",
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