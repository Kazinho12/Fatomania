// Banco de dados de artigos médicos
const articles = [
    {
        id: 1,
        title: "Nova Terapia Genética Reverte Cegueira Hereditária",
        author: "Dra. Helena Oftalmologia",
        excerpt: "Tratamento inovador restaura visão em 95% dos pacientes com amaurose congênita de Leber usando edição genética CRISPR...",
        category: "genetics",
        date: "30/01/2024",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Pesquisadores da Universidade Johns Hopkins desenvolveram uma terapia genética revolucionária que conseguiu restaurar a visão em 95% dos pacientes com amaurose congênita de Leber, uma forma grave de cegueira hereditária que afeta crianças desde o nascimento.</p><p>O tratamento utiliza tecnologia CRISPR-Cas9 modificada para corrigir diretamente o gene CEP290 defeituoso nas células fotorreceptoras da retina. A terapia é administrada através de injeção subretiniana em procedimento ambulatorial de 30 minutos.</p><p>Nos ensaios clínicos com 50 pacientes, 47 recuperaram visão funcional suficiente para atividades diárias normais. Os resultados se mantiveram estáveis por 18 meses de acompanhamento, sem efeitos colaterais significativos. A FDA aprovou o tratamento para uso comercial.</p>",
        likes: 1523,
        comments: [
            { author: "Oftalmologista Clínico", date: "31/01/2024", text: "Revolucionário! Isso vai mudar a vida de milhares de famílias." },
            { author: "Mãe de Paciente", date: "01/02/2024", text: "Minha filha foi uma das participantes. Ver ela enxergar pela primeira vez foi mágico!" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 2,
        title: "Inteligência Artificial Detecta Infarto 40 Minutos Antes dos Sintomas",
        author: "Dr. Carlos Cardiotech",
        excerpt: "Sistema de IA analisa ECG em tempo real e identifica padrões pré-infarto com 94% de precisão, salvando vidas...",
        category: "cardiology",
        date: "28/01/2024",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma inteligência artificial desenvolvida pelo Hospital do Coração consegue detectar sinais precoces de infarto do miocárdio até 40 minutos antes dos primeiros sintomas clínicos aparecerem, analisando micro-alterações no eletrocardiograma.</p><p>O sistema foi treinado com mais de 2 milhões de ECGs e utiliza algoritmos de deep learning para identificar padrões sutis invisíveis ao olho humano. A IA consegue detectar isquemia silenciosa, arritmias malignas e outras anomalias cardiovasculares.</p><p>Em testes com 10.000 pacientes, o sistema preveniu 847 infartos, reduzindo a mortalidade cardiovascular em 73%. A tecnologia está sendo implementada em 200 hospitais no Brasil e já salvou mais de 3.000 vidas desde sua implementação.</p>",
        likes: 2156,
        comments: [
            { author: "Cardiologista ER", date: "29/01/2024", text: "Uso essa IA diariamente. A precisão é impressionante e já salvei vários pacientes." },
            { author: "Enfermeira UTI", date: "30/01/2024", text: "O sistema nos alerta antes mesmo do paciente sentir dor. Tecnologia salvadora!" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 3,
        title: "Imunoterapia Personalizada Elimina Tumores Metastáticos",
        author: "Onc. Marina Imunotech",
        excerpt: "Vacina contra câncer criada com células tumorais do próprio paciente alcança 87% de remissão completa em casos avançados...",
        category: "oncology",
        date: "25/01/2024",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Pesquisadores do Instituto Nacional do Câncer desenvolveram uma imunoterapia personalizada que utiliza células tumorais do próprio paciente para criar vacinas específicas, alcançando 87% de remissão completa em cânceres metastáticos avançados.</p><p>O processo extrai células tumorais através de biópsia, as modifica geneticamente para expressar antígenos específicos e as reintroduz como vacina terapêutica. O sistema imunológico aprende a reconhecer e destruir células cancerígenas com precisão.</p><p>Em ensaios com 200 pacientes em estágio IV (melanoma, pulmão e mama), 174 obtiveram remissão completa em 6 meses. A terapia não apresenta efeitos colaterais graves e pode ser combinada com outras modalidades. O tratamento custará 30% menos que quimioterapias convencionais.</p>",
        likes: 1834,
        comments: [
            { author: "Oncologista Clínico", date: "26/01/2024", text: "Acompanho vários pacientes usando esta terapia. Os resultados são extraordinários." },
            { author: "Sobrevivente Câncer", date: "27/01/2024", text: "Fui tratado com essa vacina. Hoje estou livre do câncer há 8 meses!" }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 4,
        title: "Estimulação Cerebral Profunda Trata Depressão Resistente",
        author: "Neurocir. Roberto DBS",
        excerpt: "Dispositivo implantável estimula área específica do cérebro e reverte depressão severa em 78% dos casos resistentes...",
        category: "neurology",
        date: "22/01/2024",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Um novo protocolo de estimulação cerebral profunda (DBS) direcionado à área subcalosa do cérebro conseguiu reverter casos de depressão severa resistente a medicamentos em 78% dos pacientes tratados em estudo multicêntrico internacional.</p><p>O dispositivo implantável, do tamanho de um marca-passo, envia pulsos elétricos precisos para regular a atividade neural em regiões relacionadas ao humor. O protocolo utiliza algoritmos de IA para personalizar a estimulação conforme a resposta individual.</p><p>Em 150 pacientes com depressão resistente há mais de 10 anos, 117 apresentaram melhoria significativa em 3 meses. Os escores de depressão reduziram em média 65%, com melhoria sustentada por 2 anos. A qualidade de vida e funcionamento social foram completamente restaurados na maioria dos casos.</p>",
        likes: 987,
        comments: [
            { author: "Psiquiatra Clínico", date: "23/01/2024", text: "Para casos extremos, essa tecnologia oferece esperança quando nada mais funciona." },
            { author: "Paciente DBS", date: "24/01/2024", text: "Tenho o implante há 1 ano. Minha vida mudou completamente, voltei a sentir alegria." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 5,
        title: "Teste Sanguíneo Detecta Alzheimer 20 Anos Antes dos Sintomas",
        author: "Geriatra Alzheimer Expert",
        excerpt: "Biomarcador plasmático identifica proteínas tau e beta-amiloide precocemente, permitindo intervenção preventiva...",
        category: "neurology",
        date: "20/01/2024",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Cientistas da Universidade de Stanford desenvolveram um teste sanguíneo que detecta biomarcadores de Alzheimer até 20 anos antes dos primeiros sintomas cognitivos aparecerem, revolucionando a medicina preventiva para demências.</p><p>O teste mede níveis plasmáticos de proteínas tau fosforilada e beta-amiloide, além de novos biomarcadores como neurofilamentos e GFAP. A combinação oferece 96% de precisão na detecção precoce de alterações neurodegenerativas.</p><p>Em estudo longitudinal com 5.000 participantes seguidos por 15 anos, o teste identificou corretamente 94% dos casos que desenvolveram Alzheimer. A detecção precoce permite iniciar tratamentos preventivos que podem retardar ou prevenir o desenvolvimento da doença em até 80% dos casos.</p>",
        likes: 1456,
        comments: [
            { author: "Neurologista Geriatra", date: "21/01/2024", text: "Teste revolucionário! Finalmente podemos agir antes da doença se instalar." },
            { author: "Familiar Paciente", date: "22/01/2024", text: "Minha mãe fez o teste. Detectou risco alto e já iniciamos tratamento preventivo." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 6,
        title: "Telemedicina com Realidade Aumentada Guia Cirurgias Remotas",
        author: "Cirur. TeleGuided",
        excerpt: "Sistema de RA permite que especialistas orientem cirurgias complexas à distância com precisão submilimétrica...",
        category: "telemedicine",
        date: "18/01/2024",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Uma plataforma de telemedicina com realidade aumentada está permitindo que cirurgiões especialistas orientem procedimentos complexos à distância, levando expertise médica de centros urbanos para regiões remotas com precisão submilimétrica.</p><p>O sistema utiliza câmeras 4K, sensores de profundidade e holografia digital para criar um ambiente cirúrgico virtual compartilhado. O especialista remoto pode visualizar o campo operatório em tempo real e orientar cada movimento do cirurgião local.</p><p>Em 200 cirurgias realizadas, incluindo neurocirurgias e procedimentos cardíacos, a taxa de sucesso foi de 98%, equivalente a cirurgias presenciais. O sistema reduziu a necessidade de transferências médicas em 85% e levou cuidados especializados para 50 cidades do interior brasileiro.</p>",
        likes: 723,
        comments: [
            { author: "Cirurgião Rural", date: "19/01/2024", text: "Essa tecnologia mudou minha prática. Consigo fazer cirurgias que antes eram impossíveis aqui." },
            { author: "Especialista Remoto", date: "20/01/2024", text: "Orientei 15 cirurgias assim. A qualidade da imagem e precisão são impressionantes." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 7,
        title: "Vacina Nasal Previne COVID-19 e Outras Viroses Respiratórias",
        author: "Imunol. Universal Vaccine",
        excerpt: "Imunizante intranasal oferece proteção ampla contra coronavírus, influenza e VSR com eficácia de 92%...",
        category: "immunology",
        date: "15/01/2024",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Pesquisadores desenvolveram uma vacina nasal universal que oferece proteção ampla contra COVID-19, influenza, vírus sincicial respiratório e outros patógenos respiratórios, com eficácia geral de 92% em ensaios clínicos.</p><p>A vacina utiliza nanopartículas lipídicas que apresentam múltiplos antígenos conservados entre diferentes vírus respiratórios. A administração nasal estimula imunidade mucosa local, criando uma barreira na porta de entrada dos patógenos.</p><p>Em estudos com 15.000 voluntários durante uma temporada completa de viroses respiratórias, a vacina reduziu infecções em 92%, hospitalizações em 87% e transmissão comunitária em 78%. Uma dose oferece proteção por 12 meses, simplificando programas de vacinação.</p>",
        likes: 2034,
        comments: [
            { author: "Infectologista Público", date: "16/01/2024", text: "Vacina game-changer! Vai simplificar muito nossos programas de imunização." },
            { author: "Epidemiologista", date: "17/01/2024", text: "A eficácia contra múltiplos vírus é impressionante. Pode prevenir futuras pandemias." }
        ],
        isLiked: false,
        isFavorited: false
    },
    {
        id: 8,
        title: "Aplicativo de Saúde Mental Reduz Ansiedade em 76% dos Usuários",
        author: "Psic. Digital Health",
        excerpt: "Plataforma com IA e terapia cognitivo-comportamental personalizada oferece tratamento acessível para ansiedade...",
        category: "mental-health",
        date: "12/01/2024",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        content: "<p>Um aplicativo de saúde mental baseado em inteligência artificial e terapia cognitivo-comportamental conseguiu reduzir significativamente os sintomas de ansiedade em 76% dos 50.000 usuários acompanhados durante 6 meses.</p><p>A plataforma utiliza processamento de linguagem natural para analisar padrões de pensamento do usuário e oferece exercícios personalizados, técnicas de respiração, meditação guiada e reestruturação cognitiva. Um chatbot terapêutico está disponível 24/7.</p><p>Os usuários relataram melhoria significativa nos escores de ansiedade (GAD-7) em média após 4 semanas de uso. O aplicativo também reduziu a necessidade de consultas presenciais em 45% e oferece suporte de psicólogos humanos quando necessário. O tratamento custa 90% menos que terapia tradicional.</p>",
        likes: 1267,
        comments: [
            { author: "Psicólogo Clínico", date: "13/01/2024", text: "Uso como complemento à terapia presencial. Os pacientes adoram a disponibilidade 24h." },
            { author: "Usuário App", date: "14/01/2024", text: "App mudou minha vida! Consigo controlar minha ansiedade melhor do que nunca." }
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
    'cardiology': 'Cardiologia',
    'oncology': 'Oncologia',
    'neurology': 'Neurologia',
    'genetics': 'Genética Médica',
    'immunology': 'Imunologia',
    'prevention': 'Medicina Preventiva',
    'mental-health': 'Saúde Mental',
    'telemedicine': 'Telemedicina'
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
        author: "Profissional de Saúde",
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