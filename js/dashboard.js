// Usar Firebase config compartilhado
const { auth, signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail } = window.firebaseAuth;
const { db, collection, getDocs, doc, getDoc, setDoc, updateDoc, addDoc, query, where, orderBy, limit, serverTimestamp, arrayUnion, arrayRemove } = window.firebaseDB;
const { storage, ref, uploadBytes, getDownloadURL, deleteObject } = window.firebaseStorage;

// Variáveis globais
let currentUser = null;
let userProfile = null;
let newsData = [];

// Dados das seções
const sectionsData = [
    {
        id: "quizmania",
        title: "QUIZMANIA",
        description: "Teste seus conhecimentos científicos com nossos quizzes interativos e desafie seus amigos!",
        icon: "fas fa-question-circle",
        tag: "#Quiz",
        stats: ["120 Quizzes", "5.2k Jogadores"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
        color: "#ff6b6b",
        url: "/mania/quizmania-modern.html"
    },
    {
        id: "sciencemania",
        title: "SCIENCEMANIA",
        description: "As últimas descobertas e avanços científicos que estão moldando o futuro da humanidade.",
        icon: "fas fa-flask",
        tag: "#Ciência",
        stats: ["45 Artigos", "Atualizado Hoje"],
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "#4ecdc4",
        url: "/mania/sciencemania-modern.html"
    },
    {
        id: "newsmania",
        title: "NEWSMANIA",
        description: "Notícias globais com análises científicas sobre eventos importantes ao redor do mundo.",
        icon: "fas fa-globe",
        tag: "#Notícias",
        stats: ["78 Países", "12 Categorias"],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "#ffbe0b",
        url: "/mania/newsmania-modern.html"
    },
    {
        id: "misticmania",
        title: "MISTICMANIA",
        description: "Explore mistérios inexplicados, fenômenos paranormais e descobertas que desafiam a ciência convencional.",
        icon: "fas fa-magic",
        tag: "#Mistérios",
        stats: ["89 Mistérios", "Fenômenos Inexplicados"],
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "#9d4edd",
        url: "/mania/misticmania-modern.html"
    },
    {
        id: "labmania",
        title: "LABMANIA",
        description: "Laboratório virtual com experimentos científicos interativos para você explorar em casa.",
        icon: "fas fa-microscope",
        tag: "#Experimentos",
        stats: ["32 Experimentos", "3 Níveis"],
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "#f72585",
        url: "/mania/labmania-modern.html"
    },
    {
        id: "techmania",
        title: "TECHMANIA",
        description: "As inovações tecnológicas mais recentes e como elas estão transformando nosso futuro.",
        icon: "fas fa-robot",
        tag: "#Tecnologia",
        stats: ["45 Inovações", "Atualizações Semanais"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "#4895ef",
        url: "/mania/techmania-modern.html"
    },
    {
        id: "spacemania",
        title: "SPACEMANIA",
        description: "Explore o cosmos com as últimas descobertas astronômicas e missões espaciais em andamento.",
        icon: "fas fa-rocket",
        tag: "#Espaço",
        stats: ["120 Exoplanetas", "15 Missões"],
        image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=1180&q=80",
        color: "#7209b7",
        url: "/mania/spacemania-modern.html"
    },
    {
        id: "ecomania",
        title: "ECOMANIA",
        description: "Sustentabilidade e ecologia: descubra como proteger nosso planeta com soluções científicas.",
        icon: "fas fa-leaf",
        tag: "#Ecologia",
        stats: ["30 Soluções", "15 Projetos"],
        image: "https://images.unsplash.com/photo-14666611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "#2a9d8f",
        url: "/mania/ecomania-modern.html"
    },
    {
        id: "sportmania",
        title: "SPORTMANIA",
        description: "Ciência por trás dos esportes: biomecânica, nutrição e tecnologia no mundo esportivo.",
        icon: "fas fa-running",
        tag: "#Esportes",
        stats: ["25 Esportes", "Análises"],
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
        color: "#e63946",
        url: "/mania/sportmania-modern.html"
    },
    {
        id: "medmania",
        title: "MEDMANIA",
        description: "Avanços médicos, saúde preventiva e descobertas na área da medicina e bem-estar.",
        icon: "fas fa-heartbeat",
        tag: "#Medicina",
        stats: ["18 Especialidades", "Novos Tratamentos"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "#f8edeb",
        url: "/mania/medmania-modern.html"
    },
    {
        id: "gamesmania",
        title: "GAMESMANIA",
        description: "Tecnologia por trás dos jogos, desenvolvimento e a ciência da diversão digital.",
        icon: "fas fa-gamepad",
        tag: "#Jogos",
        stats: ["IA em Jogos", "Realidade Virtual"],
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "#ff9f1c",
        url: "/mania/gamesmania-modern.html"
    },
    {
        id: "artmania",
        title: "ARTMANIA",
        description: "Arte digital, criatividade tecnológica e a revolução dos NFTs no mundo artístico contemporâneo.",
        icon: "fas fa-palette",
        tag: "#Arte",
        stats: ["200 Obras", "15k Artistas"],
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "#00b4d8",
        url: "/mania/artmania-modern.html"
    },
    {
        id: "historymania",
        title: "HISTORYMANIA",
        description: "Grandes eventos históricos com análises científicas e contextos pouco conhecidos.",
        icon: "fas fa-landmark",
        tag: "#História",
        stats: ["35 Períodos", "Civilizações"],
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "#6a4c93",
        url: "/mania/historymania-modern.html"
    }
];

// Variáveis de controle
let currentHighlightIndex = 0;
let highlightInterval;
let avatarAnimationInterval;

// Elementos DOM
const elements = {
    userAvatar: document.getElementById('userAvatar'),
    userName: document.getElementById('loggedUsername'),

    sectionsGrid: document.getElementById('sectionsGrid'),
    featuredTitle: document.getElementById('featuredTitle'),
    featuredDescription: document.getElementById('featuredDescription'),
    featuredTag: document.getElementById('featuredTag'),
    featuredImage: document.getElementById('featuredImage'),
    featuredButton: document.getElementById('featuredButton'),
    searchIcon: document.getElementById('searchIcon'),
    searchInput: document.getElementById('searchInput'),
    profileModal: document.getElementById('profile-modal'),
    profileClose: document.getElementById('profile-close'),
    profileName: document.getElementById('profile-name'),
    profileEmail: document.getElementById('profile-email'),
    profileAvatar: document.getElementById('profile-avatar'),
    profileProfession: document.getElementById('profile-profession'),
    profileFavorite: document.getElementById('profile-favorite'),
    profileJoined: document.getElementById('profile-joined'),

    profileView: document.getElementById('profile-view'),
    editForm: document.getElementById('edit-form'),
    editProfile: document.getElementById('edit-profile'),
    editName: document.getElementById('edit-name'),
    editProfession: document.getElementById('edit-profession'),
    editFavorite: document.getElementById('edit-favorite'),
    cancelEdit: document.getElementById('cancel-edit'),
    saveEdit: document.getElementById('save-edit'),
    uploadBtn: document.getElementById('upload-profile-btn'),
    profilePhotoInput: document.getElementById('profile-photo-input'),
    searchModal: document.getElementById('search-modal'),
    searchClose: document.getElementById('search-close'),
    searchModalInput: document.getElementById('search-modal-input'),
    searchResults: document.getElementById('search-results'),
    detailModal: document.getElementById('detailModal'),
    modalClose: document.getElementById('modalClose'),
    modalTitle: document.getElementById('modalTitle'),
    modalTag: document.getElementById('modalTag'),
    modalAuthor: document.getElementById('modalAuthor'),
    modalDate: document.getElementById('modalDate'),
    modalContent: document.getElementById('modalContent')
};

// Função para aguardar autenticação com timeout melhorado
async function waitForAuth(timeout = 10000) {
    return new Promise((resolve) => {
        let resolved = false;

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!resolved) {
                resolved = true;
                unsubscribe();
                resolve(user);
            }
        });

        setTimeout(() => {
            if (!resolved) {
                resolved = true;
                unsubscribe();
                resolve(null);
            }
        }, timeout);
    });
}

// Verifica autenticação e conectividade
async function checkAuthState() {
    // Verifica conectividade com Firebase - função removida pois não está definida
    console.log('🔥 Verificando autenticação...');

    const user = await waitForAuth();
    if (user) {
        currentUser = user;
        await loadUserProfile(user);
        await updateUserUI(user);
        loadContent();
        startAvatarAnimation();
    } else {
        showAuthRequiredMessage();
    }
}


// Mostra mensagem de autenticação obrigatória
function showAuthRequiredMessage() {
    const authMessage = document.createElement('div');
    authMessage.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, var(--fundo) 0%, var(--fundo-card) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        color: white;
        text-align: center;
        font-family: 'Rajdhani', sans-serif;
    `;

    authMessage.innerHTML = `
        <div>
            <h1 style="font-family: 'Orbitron', sans-serif; font-size: 2.5rem; margin-bottom: 1rem; background: linear-gradient(45deg, #00f7ff, #6a00ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                FATOMANIA HUB
            </h1>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #cccccc;">
                Acesso restrito a membros autenticados
            </p>
            <button onclick="window.location.href='index.html'" style="
                background: linear-gradient(45deg, #00f7ff, #00ffaa);
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 25px;
                font-size: 1.1rem;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: inherit;
            ">
                <i class="fas fa-sign-in-alt"></i> Fazer Login
            </button>
        </div>
    `;

    document.body.appendChild(authMessage);
}

// Carrega perfil do usuário
async function loadUserProfile(user) {
    try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
            userProfile = { id: user.uid, ...userDoc.data() };
        } else {
            userProfile = {
                id: user.uid,
                name: user.displayName || user.email.split('@')[0],
                email: user.email,
                profession: "Não informado",
                favoriteSection: "sciencemania",
                joinedDate: new Date().toISOString(),
                photoURL: user.photoURL || null
            };

            await setDoc(doc(db, "users", user.uid), userProfile);
        }
    } catch (error) {
        console.error('Erro ao carregar perfil:', error);
    }
}

// Atualiza UI do usuário
async function updateUserUI(user) {
    if (elements.userName) {
        elements.userName.textContent = userProfile.name || user.displayName || user.email.split('@')[0];
    }

    // Atualiza avatar principal
    if (elements.userAvatar) {
        updateAvatarDisplay(elements.userAvatar, userProfile, user);
    }
}

// Função para atualizar display do avatar
function updateAvatarDisplay(avatarElement, profile, user) {
    if (!avatarElement) return;

    const photoURL = profile?.photoURL || user?.photoURL;

    if (photoURL && photoURL.trim() !== '') {
        // Mostra imagem do perfil com melhor tratamento de erro
        const initials = getInitials(profile, user);
        avatarElement.innerHTML = `
            <img src="${photoURL}" 
                 alt="Avatar" 
                 style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" 
                 onerror="
                     console.log('Erro ao carregar imagem do avatar:', this.src);
                     this.parentElement.innerHTML='${initials}';
                     this.parentElement.style.background='linear-gradient(45deg, var(--azul), var(--roxo))';
                     this.parentElement.style.display='flex';
                     this.parentElement.style.alignItems='center';
                     this.parentElement.style.justifyContent='center';
                     this.parentElement.style.color='white';
                     this.parentElement.style.fontSize='1.2rem';
                 "
                 onload="console.log('Avatar carregado com sucesso:', this.src);">
        `;
    } else {
        // Mostra iniciais
        const initials = getInitials(profile, user);
        avatarElement.innerHTML = initials;
        avatarElement.style.background = 'linear-gradient(45deg, var(--azul), var(--roxo))';
        avatarElement.style.display = 'flex';
        avatarElement.style.alignItems = 'center';
        avatarElement.style.justifyContent = 'center';
        avatarElement.style.color = 'white';
        avatarElement.style.fontSize = '1.2rem';
    }
}

// Função auxiliar para obter iniciais
function getInitials(profile, user) {
    const name = profile?.name || user?.displayName || user?.email || 'U';
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}

// Carrega conteúdo principal
async function loadContent() {
    try {
        console.log('🔄 Carregando conteúdo...');

        // Carrega notícias da base de dados
        newsData = await loadNewsFromDatabase();

        // Renderiza seções primeiro
        renderSections(sectionsData);

        // Inicia carrossel de destaques
        startHighlightCarousel();

        // Configura event listeners
        setupEventListeners();

        console.log('✅ Conteúdo carregado');
        console.log('📊 Seções:', sectionsData.length);
        console.log('📰 Notícias:', newsData.length);
    } catch (error) {
        console.error('❌ Erro ao carregar conteúdo:', error);
        renderSections(sectionsData);
        setupEventListeners();
    }
}

// Função para carregar notícias da base de dados
async function loadNewsFromDatabase() {
    try {
        console.log('🔄 Carregando notícias da base de dados...');

        const newsQuery = query(
            collection(db, "news"),
            orderBy("createdAt", "desc"),
            limit(10)
        );

        const querySnapshot = await getDocs(newsQuery);
        const databaseNews = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            databaseNews.push({
                id: doc.id,
                ...data,
                likes: data.likes || 0,
                comments: data.comments || [],
                likedBy: data.likedBy || []
            });
        });

        if (databaseNews.length === 0) {
            console.log('📝 Criando notícias de exemplo...');
            const sampleNews = await createSampleNews();
            return sampleNews;
        }

        console.log('✅ Notícias carregadas:', databaseNews.length);
        return databaseNews;

    } catch (error) {
        console.error('❌ Erro ao carregar notícias:', error);
        return getStaticHighlights();
    }
}

// Criar notícias de exemplo na base de dados
async function createSampleNews() {
    const sampleData = [
        {
            title: "IA Revolucionária Desenvolvida em Moçambique",
            description: "Estudantes da Universidade Eduardo Mondlane desenvolvem sistema de IA para previsão climática.",
            tag: "MOÇAMBIQUE",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            author: "Dr. Maria Santos",
            date: "15 Jan 2024",
            content: `
                <h3>Revolução Tecnológica em Moçambique</h3>
                <p>Uma descoberta revolucionária está sendo desenvolvida na Universidade Eduardo Mondlane, onde estudantes criaram um sistema de inteligência artificial capaz de prever mudanças climáticas com precisão impressionante.</p>

                <h4>Principais Características do Sistema:</h4>
                <ul>
                    <li>Análise de dados meteorológicos em tempo real</li>
                    <li>Previsões precisas até 30 dias</li>
                    <li>Interface adaptada para agricultores locais</li>
                    <li>Integração com dados de satélites internacionais</li>
                </ul>

                <h4>Impacto para Moçambique:</h4>
                <p>Este sistema promete revolucionar a agricultura moçambicana, permitindo que os agricultores planejem melhor suas atividades e reduzam perdas causadas por eventos climáticos extremos.</p>

                <blockquote style="background: rgba(0,247,255,0.1); border-left: 4px solid var(--azul); padding: 1rem; margin: 1.5rem 0; border-radius: 5px;">
                    "Esta tecnologia representa um marco para a ciência moçambicana e demonstra o potencial dos nossos jovens investigadores." - Prof. João Mazula, Reitor da UEM
                </blockquote>
            `,
            section: "techmania",
            createdAt: new Date(),
            likes: 0,
            comments: [],
            likedBy: []
        },
        {
            title: "Descoberta Arqueológica na Ilha de Moçambique",
            description: "Arqueólogos descobrem artefatos únicos que revelam novos aspectos da história de Moçambique.",
            tag: "MOÇAMBIQUE",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            author: "Prof. Ana Sithole",
            date: "10 Fev 2024",
            content: `
                <h3>Tesouro Histórico Revelado</h3>
                <p>Uma equipe de arqueólogos moçambicanos e internacionais fez uma descoberta extraordinária na histórica Ilha de Moçambique, revelando artefatos que reescrevem partes da nossa compreensão sobre o comércio marítimo no Oceano Índico.</p>

                <h4>Descobertas Principais:</h4>
                <ul>
                    <li>Cerâmicas chinesas do século XIV</li>
                    <li>Instrumentos de navegação árabes</li>
                    <li>Moedas de várias civilizações</li>
                    <li>Evidências de rotas comerciais desconhecidas</li>
                </ul>

                <h4>Significado Histórico:</h4>
                <p>Estas descobertas confirmam que a Ilha de Moçambique foi um importante centro comercial muito antes da chegada dos portugueses, conectando África, Ásia e o Médio Oriente numa rede comercial sofisticada.</p>

                <p>Os artefatos estão sendo estudados no Museu Nacional de História Natural de Maputo e estarão em breve em exposição para o público.</p>
            `,
            section: "historymania",
            createdAt: new Date(Date.now() - 86400000),
            likes: 0,
            comments: [],
            likedBy: []
        },
        {
            title: "Breakthrough em Física Quântica Abre Novas Possibilidades",
            description: "Pesquisadores demonstram teletransporte quântico em temperatura ambiente, revolucionando a computação.",
            tag: "CIÊNCIA",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            author: "Dr. Elena Quantum",
            date: "08 Mar 2024",
            content: `
                <h3>Revolução na Física Quântica</h3>
                <p>Um avanço extraordinário na física quântica promete transformar nossa compreensão da computação e comunicação. Pela primeira vez na história, cientistas conseguiram demonstrar teletransporte quântico estável em temperatura ambiente.</p>

                <h4>O que isso significa:</h4>
                <ul>
                    <li>Computadores quânticos mais acessíveis</li>
                    <li>Comunicação ultra-segura</li>
                    <li>Processamento de dados revolucionário</li>
                    <li>Avanços em inteligência artificial</li>
                </ul>

                <p>Esta descoberta pode tornar a tecnologia quântica viável para uso comercial dentro dos próximos 10 anos.</p>
            `,
            section: "sciencemania",
            createdAt: new Date(Date.now() - 172800000),
            likes: 0,
            comments: [],
            likedBy: []
        }
    ];

    try {
        const createdNews = [];
        for (const news of sampleData) {
            const docRef = await addDoc(collection(db, "news"), {
                ...news,
                createdAt: serverTimestamp()
            });
            createdNews.push({ id: docRef.id, ...news });
        }
        console.log('✅ Notícias de exemplo criadas:', createdNews.length);
        return createdNews;
    } catch (error) {
        console.error('Erro ao criar notícias de exemplo:', error);
        return getStaticHighlights();
    }
}

// Dados estáticos de fallback
function getStaticHighlights() {
    return [
        {
            id: "static1",
            title: "Bem-vindo ao FATOMANIA HUB",
            description: "Explore o mundo da ciência, tecnologia e descobertas fascinantes. Conecte-se com a base de dados para aceder a conteúdo dinâmico.",
            tag: "SISTEMA",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            author: "Sistema FATOMANIA",
            date: "Hoje",
            content: `
                <h3>Sistema FATOMANIA HUB</h3>
                <p>Bem-vindo à plataforma mais avançada de ciência e tecnologia em língua portuguesa!</p>
                <p>Conecte-se à base de dados para aceder a conteúdo dinâmico e interativo.</p>
            `,
            section: "sistema",
            likes: 0,
            comments: [],
            likedBy: []
        }
    ];
}

// Renderiza seções
function renderSections(sections = sectionsData) {
    if (!elements.sectionsGrid) {
        console.error('sectionsGrid element not found');
        return;
    }

    const sectionsHTML = sections.map(section => `
        <div class="section-card" 
             data-section="${section.id}" 
             style="--section-color: ${section.color}"
             onclick="navigateToSection('${section.url}', event)">
            <div class="section-image" style="background-image: url('${section.image}')"></div>
            <div class="section-content">
                <div class="section-header">
                    <div class="section-icon">
                        <i class="${section.icon}"></i>
                    </div>
                    <div class="section-tag">${section.tag}</div>
                </div>
                <h3 class="section-title">${section.title}</h3>
                <p class="section-description">${section.description}</p>
                <div class="section-stats">
                    ${section.stats.map(stat => `<span class="stat">${stat}</span>`).join('')}
                </div>
            </div>
            <div class="section-overlay">
                <button class="explore-btn">
                    <i class="fas fa-rocket"></i>
                    Explorar
                </button>
            </div>
        </div>
    `).join('');

    elements.sectionsGrid.innerHTML = sectionsHTML;

    setTimeout(() => {
        const cards = elements.sectionsGrid.querySelectorAll('.section-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, 100);
}

// Navegação para seções
function navigateToSection(url, event = null) {
    try {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        const targetElement = event ? event.currentTarget : null;
        if (targetElement) {
            targetElement.style.transform = 'scale(0.95)';
        }

        showNotification(`Navegando para ${url}`, 'info');

        setTimeout(() => {
            if (targetElement) {
                targetElement.style.transform = '';
            }
            window.location.href = url;
        }, 150);

    } catch (error) {
        console.error('Erro ao navegar:', error);
        window.location.href = url;
    }
}

// Carrossel de destaques
function startHighlightCarousel() {
    if (newsData.length === 0) {
        newsData = getStaticHighlights();
    }

    updateHighlight();

    if (highlightInterval) clearInterval(highlightInterval);

    highlightInterval = setInterval(() => {
        currentHighlightIndex = (currentHighlightIndex + 1) % newsData.length;
        updateHighlight();
    }, 6000);
}

// Atualiza destaque atual
function updateHighlight() {
    const highlight = newsData[currentHighlightIndex] || newsData[0];
    if (!highlight) return;

    if (elements.featuredTitle) {
        elements.featuredTitle.textContent = highlight.title;
    }

    if (elements.featuredDescription) {
        elements.featuredDescription.textContent = highlight.description;
    }

    if (elements.featuredTag) {
        elements.featuredTag.textContent = highlight.tag;

        if (highlight.tag === 'MOÇAMBIQUE') {
            elements.featuredTag.style.background = 'linear-gradient(135deg, #00ff55, #00cc44)';
            elements.featuredTag.style.boxShadow = '0 4px 15px rgba(0, 255, 85, 0.3)';
        } else {
            elements.featuredTag.style.background = '';
            elements.featuredTag.style.boxShadow = '';
        }
    }

    if (elements.featuredImage) {
        elements.featuredImage.style.backgroundImage = `url('${highlight.image}')`;
    }

    if (elements.featuredButton) {
        elements.featuredButton.onclick = () => openArticleModal(highlight);
        elements.featuredButton.innerHTML = '<i class="fas fa-eye"></i> Ver Mais';
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Avatar - abre dropdown do usuário
    if (elements.userAvatar) {
        elements.userAvatar.addEventListener('click', toggleUserDropdown);
    }

    // Ícone de pesquisa - abre modal de pesquisa
    if (elements.searchIcon) {
        elements.searchIcon.addEventListener('click', openSearchModal);
    }

    // Input de pesquisa do header
    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', handleHeaderSearch);
        elements.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                openSearchModal();
                if (elements.searchModalInput) {
                    elements.searchModalInput.value = elements.searchInput.value;
                    handleSearch({ target: elements.searchModalInput });
                }
            }
        });
    }

    // Modal de perfil
    if (elements.profileClose) {
        elements.profileClose.addEventListener('click', closeProfileModal);
    }

    if (elements.editProfile) {
        elements.editProfile.addEventListener('click', toggleEditMode);
    }

    if (elements.cancelEdit) {
        elements.cancelEdit.addEventListener('click', () => toggleEditMode(false));
    }

    if (elements.saveEdit) {
        elements.saveEdit.addEventListener('click', saveProfile);
    }

    if (elements.uploadBtn) {
        elements.uploadBtn.addEventListener('click', () => {
            const uploadBtnText = document.getElementById('upload-btn-text');
            if (uploadBtnText) {
                uploadBtnText.textContent = 'Selecionar...';
            }
            elements.profilePhotoInput?.click();
        });
    }

    if (elements.profilePhotoInput) {
        elements.profilePhotoInput.addEventListener('change', handlePhotoUpload);
    }

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    // Modal de pesquisa
    if (elements.searchClose) {
        elements.searchClose.addEventListener('click', closeSearchModal);
    }

    if (elements.searchModalInput) {
        elements.searchModalInput.addEventListener('input', handleSearch);
    }

    // Modal de artigos
    if (elements.modalClose) {
        elements.modalClose.addEventListener('click', closeArticleModal);
    }

    // Fechar modais clicando fora
    [elements.profileModal, elements.searchModal, elements.detailModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeAllModals();
                }
            });
        }
    });

    // ESC para fechar modais
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
            closeUserDropdown();
        }
    });

    // Fechar dropdown clicando fora
    document.addEventListener('click', (e) => {
        const userSection = document.querySelector('.user-section');
        if (userSection && !userSection.contains(e.target)) {
            closeUserDropdown();
        }
    });
}

// Toggle user dropdown
function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
    }
}

function closeUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.style.display = 'none';
    }
}

// Modal de perfil
function openProfileModal() {
    closeUserDropdown();

    const profileModal = document.getElementById('profile-modal');
    if (!profileModal || !userProfile) {
        console.error('Profile modal ou userProfile não encontrado');
        return;
    }

    // Atualiza dados do perfil
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profileProfession = document.getElementById('profile-profession');
    const profileFavorite = document.getElementById('profile-favorite');
    const profileJoined = document.getElementById('profile-joined');
    const profileAvatar = document.getElementById('profile-avatar');

    if (profileName) profileName.textContent = userProfile.name || 'Nome não definido';
    if (profileEmail) profileEmail.textContent = userProfile.email || 'Email não definido';
    if (profileProfession) profileProfession.textContent = `Profissão: ${userProfile.profession || 'Não informado'}`;

    if (profileFavorite) {
        const favoriteSection = sectionsData.find(s => s.id === userProfile.favoriteSection);
        profileFavorite.textContent = `Seção Favorita: ${favoriteSection ? favoriteSection.title : 'Não definida'}`;
    }

    if (profileJoined) {
        const joinedDate = userProfile.joinedDate ? new Date(userProfile.joinedDate).toLocaleDateString('pt-BR') : 'Data não disponível';
        profileJoined.textContent = `Membro desde: ${joinedDate}`;
    }

    // Atualiza avatar do modal
    if (profileAvatar) {
        updateAvatarDisplay(profileAvatar, userProfile, currentUser);
    }

    profileModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProfileModal() {
    const profileModal = document.getElementById('profile-modal');
    if (profileModal) {
        profileModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        toggleEditMode(false);
    }
}

// Toggle modo de edição
function toggleEditMode(enable = null) {
    const profileView = document.getElementById('profile-view');
    const editForm = document.getElementById('edit-form');
    const editName = document.getElementById('edit-name');
    const editProfession = document.getElementById('edit-profession');
    const editFavorite = document.getElementById('edit-favorite');

    const isEditing = editForm?.style.display === 'block' || editForm?.style.display === 'flex';
    const shouldEdit = enable !== null ? enable : !isEditing;

    if (shouldEdit) {
        if (profileView) profileView.style.display = 'none';
        if (editForm) editForm.style.display = 'block';

        if (editName) editName.value = userProfile.name || '';
        if (editProfession) editProfession.value = userProfile.profession || '';
        if (editFavorite) editFavorite.value = userProfile.favoriteSection || '';
    } else {
        if (profileView) profileView.style.display = 'block';
        if (editForm) editForm.style.display = 'none';
    }
}

// Salva perfil
async function saveProfile() {
    try {
        const editName = document.getElementById('edit-name');
        const editProfession = document.getElementById('edit-profession');
        const editFavorite = document.getElementById('edit-favorite');

        const updatedProfile = {
            name: editName?.value || userProfile.name,
            profession: editProfession?.value || userProfile.profession,
            favoriteSection: editFavorite?.value || userProfile.favoriteSection
        };

        await updateDoc(doc(db, "users", userProfile.id), updatedProfile);

        Object.assign(userProfile, updatedProfile);
        await updateUserUI(currentUser);
        toggleEditMode(false);

        setTimeout(() => {
            openProfileModal();
        }, 100);

        showNotification('Perfil atualizado com sucesso!', 'success');

    } catch (error) {
        console.error('Erro ao salvar perfil:', error);
        showNotification('Erro ao salvar perfil. Tente novamente.', 'error');
    }
}

// Upload de foto CORRIGIDO
async function handlePhotoUpload(event) {
    const file = event.target.files?.[0];
    if (!file || !currentUser) {
        console.log('Arquivo ou usuário não encontrado');
        showNotification('Selecione um arquivo válido', 'error');
        return;
    }

    // Validação do arquivo
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

    if (file.size > maxSize) {
        showNotification('Arquivo muito grande. Máximo 5MB.', 'error');
        return;
    }

    if (!allowedTypes.includes(file.type)) {
        showNotification('Tipo de arquivo não suportado. Use JPG, PNG, GIF ou WebP.', 'error');
        return;
    }

    try {
        showNotification('Fazendo upload da foto...', 'info');

        // Converter imagem para base64 como alternativa ao Firebase Storage
        const base64Image = await convertImageToBase64(file);

        // Verificar se userProfile existe
        if (!userProfile || !userProfile.id) {
            throw new Error('Perfil do usuário não encontrado');
        }

        // Atualiza na base de dados com a imagem em base64
        const userDocRef = doc(db, "users", userProfile.id);
        await updateDoc(userDocRef, {
            photoURL: base64Image,
            updatedAt: new Date().toISOString()
        });

        console.log('✅ Perfil atualizado na base de dados');

        // Atualiza perfil local
        userProfile.photoURL = base64Image;

        // Atualiza TODOS os avatares imediatamente
        if (elements.userAvatar) {
            updateAvatarDisplay(elements.userAvatar, userProfile, currentUser);
        }

        const profileAvatar = document.getElementById('profile-avatar');
        if (profileAvatar) {
            updateAvatarDisplay(profileAvatar, userProfile, currentUser);
        }

        console.log('✅ Avatar atualizado em todos os locais');
        showNotification('Foto atualizada com sucesso!', 'success');

        // Limpa o input para permitir upload da mesma imagem novamente
        event.target.value = '';

    } catch (error) {
        console.error('❌ Erro detalhado no upload:', error);

        let errorMessage = 'Erro ao fazer upload da foto.';

        if (error.code === 'storage/unauthorized') {
            errorMessage = 'Sem permissão para upload. Tente novamente.';
        } else if (error.code === 'storage/canceled') {
            errorMessage = 'Upload cancelado.';
        } else if (error.code === 'permission-denied') {
            errorMessage = 'Permissão negada. Tente fazer login novamente.';
        } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            errorMessage = 'Problema de conexão. Verifique sua internet e tente novamente.';
        } else if (error.message.includes('Perfil do usuário não encontrado')) {
            errorMessage = 'Sessão expirada. Faça login novamente.';
        }

        showNotification(errorMessage, 'error');

        // Limpa o input em caso de erro
        event.target.value = '';
    }
}

// Função auxiliar para converter imagem em base64
function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Redimensionar a imagem para otimizar o armazenamento
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Define tamanho máximo
                const maxSize = 200;
                let { width, height } = img;

                // Redimensiona mantendo proporção
                if (width > height) {
                    if (width > maxSize) {
                        height = height * (maxSize / width);
                        width = maxSize;
                    }
                } else {
                    if (height > maxSize) {
                        width = width * (maxSize / height);
                        height = maxSize;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                // Desenha a imagem redimensionada
                ctx.drawImage(img, 0, 0, width, height);

                // Converte para base64 com qualidade otimizada
                const base64 = canvas.toDataURL('image/jpeg', 0.8);
                resolve(base64);
            };

            img.onerror = () => reject(new Error('Erro ao processar imagem'));
            img.src = e.target.result;
        };

        reader.onerror = () => reject(new Error('Erro ao ler arquivo'));
        reader.readAsDataURL(file);
    });
}

// Pesquisa do header
function handleHeaderSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query.length > 2) {
        elements.searchIcon.title = 'Clique para pesquisar ou pressione Enter';
        elements.searchIcon.style.color = 'var(--verde)';
    } else {
        elements.searchIcon.title = '';
        elements.searchIcon.style.color = 'var(--azul)';
    }
}

// Modal de pesquisa
function openSearchModal() {
    if (elements.searchModal) {
        elements.searchModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        if (elements.searchModalInput) {
            elements.searchModalInput.focus();
        }
    }
}

function closeSearchModal() {
    if (elements.searchModal) {
        elements.searchModal.style.display = 'none';
        document.body.style.overflow = 'auto';

        if (elements.searchModalInput) {
            elements.searchModalInput.value = '';
        }

        if (elements.searchInput) {
            elements.searchInput.value = '';
            elements.searchIcon.style.color = 'var(--azul)';
        }

        showDefaultSearchResults();
    }
}

// Pesquisa
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query === '') {
        showDefaultSearchResults();
        return;
    }

    const allItems = [
        ...sectionsData.map(section => ({
            type: 'section',
            title: section.title,
            description: section.description,
            tag: section.tag,
            url: section.url,
            ...section
        })),
        ...newsData.map(news => ({
            type: 'news',
            title: news.title,
            description: news.description,
            tag: news.tag,
            ...news
        }))
    ];

    const results = allItems.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query)
    );

    displaySearchResults(results);
}

function showDefaultSearchResults() {
    if (elements.searchResults) {
        elements.searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Digite algo para começar a pesquisar...</p>
            </div>
        `;
    }
}

function displaySearchResults(results) {
    if (!elements.searchResults) return;

    if (results.length === 0) {
        elements.searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search-minus"></i>
                <p>Nenhum resultado encontrado.</p>
            </div>
        `;
        return;
    }

    const resultsHTML = results.map(result => `
        <div class="search-result-item" onclick="handleSearchResultClick('${result.type}', '${result.id || result.url}')">
            <h4 class="search-result-title">${result.title}</h4>
            <p class="search-result-description">${result.description}</p>
            <span class="search-result-tag">${result.tag}</span>
        </div>
    `).join('');

    elements.searchResults.innerHTML = resultsHTML;
}

// Clique em resultado de pesquisa
function handleSearchResultClick(type, identifier) {
    closeSearchModal();

    if (type === 'section') {
        const section = sectionsData.find(s => s.url === identifier);
        if (section) {
            navigateToSection(section.url);
        }
    } else if (type === 'news') {
        const news = newsData.find(n => n.id === identifier);
        if (news) {
            openArticleModal(news);
        }
    }
}

// Modal de artigos COMPLETO COM COMENTÁRIOS
function openArticleModal(article) {
    if (!elements.detailModal || !article) return;

    if (elements.modalTitle) elements.modalTitle.textContent = article.title;
    if (elements.modalTag) {
        elements.modalTag.textContent = article.tag;

        if (article.tag === 'MOÇAMBIQUE') {
            elements.modalTag.style.background = 'linear-gradient(135deg, #00ff55, #00cc44)';
        } else {
            elements.modalTag.style.background = '';
        }
    }
    if (elements.modalAuthor) elements.modalAuthor.textContent = article.author || '';
    if (elements.modalDate) elements.modalDate.textContent = article.date || '';
    if (elements.modalContent) {
        elements.modalContent.innerHTML = article.content || article.description;

        // Adiciona seção de comentários
        addCommentsSection(article);
    }

    // Atualiza botões de interação
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    const shareBtn = document.getElementById('shareBtn');

    if (likeBtn && likeCount) {
        likeCount.textContent = article.likes || 0;
        const isLiked = article.likedBy?.includes(currentUser?.uid);
        likeBtn.style.color = isLiked ? '#ff6b6b' : 'var(--texto)';

        likeBtn.onclick = () => toggleLike(article.id);
    }

    if (shareBtn) {
        shareBtn.onclick = () => shareArticle(article);
    }

    elements.detailModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Adiciona seção de comentários ao modal
function addCommentsSection(article) {
    const commentsHTML = `
        <div class="comments-section" style="margin-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem;">
            <h4 style="margin-bottom: 1rem; color: var(--azul);">
                <i class="fas fa-comments"></i> Comentários (${(article.comments || []).length})
            </h4>

            <div class="add-comment" style="margin-bottom: 1rem;">
                <textarea id="commentInput" placeholder="Escreva seu comentário..." style="
                    width: 100%;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid var(--azul);
                    border-radius: 10px;
                    padding: 0.75rem;
                    color: var(--texto);
                    font-family: inherit;
                    resize: vertical;
                    min-height: 80px;
                "></textarea>
                <button onclick="addComment('${article.id}')" style="
                    background: linear-gradient(45deg, var(--azul), var(--verde));
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 25px;
                    margin-top: 0.5rem;
                    cursor: pointer;
                    font-family: inherit;
                ">
                    <i class="fas fa-paper-plane"></i> Comentar
                </button>
            </div>

            <div class="comments-list" id="commentsList">
                ${renderComments(article.comments || [])}
            </div>
        </div>
    `;

    if (elements.modalContent) {
        elements.modalContent.innerHTML += commentsHTML;
    }
}

// Renderiza lista de comentários
function renderComments(comments) {
    if (comments.length === 0) {
        return '<p style="color: var(--texto-secundario); text-align: center; padding: 1rem;">Ainda não há comentários. Seja o primeiro!</p>';
    }

    return comments.map(comment => `
        <div class="comment-item" style="
            background: rgba(255,255,255,0.05);
            border-radius: 10px;
            padding: 1rem;
            margin-bottom: 1rem;
            border-left: 3px solid var(--azul);
        ">
            <div class="comment-header" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <div class="comment-avatar" style="
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, var(--azul), var(--roxo));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    color: white;
                ">${comment.authorName ? comment.authorName.charAt(0).toUpperCase() : 'U'}</div>
                <strong style="color: var(--azul);">${comment.authorName || 'Usuário'}</strong>
                <span style="color: var(--texto-secundario); font-size: 0.8rem;">
                    ${comment.createdAt ? new Date(comment.createdAt.seconds * 1000).toLocaleDateString('pt-BR') : 'Agora'}
                </span>
            </div>
            <p style="color: var(--texto); line-height: 1.5;">${comment.content}</p>
        </div>
    `).join('');
}

// Adiciona comentário
async function addComment(articleId) {
    const commentInput = document.getElementById('commentInput');
    if (!commentInput || !currentUser || !userProfile) {
        showNotification('Faça login para comentar', 'error');
        return;
    }

    const content = commentInput.value.trim();
    if (!content) {
        showNotification('Digite um comentário válido', 'error');
        return;
    }

    try {
        const newComment = {
            content: content,
            authorId: currentUser.uid,
            authorName: userProfile.name || currentUser.displayName || 'Usuário',
            createdAt: serverTimestamp()
        };

        // Atualiza na base de dados
        const articleRef = doc(db, "news", articleId); // Corrigido para "news"
        await updateDoc(articleRef, {
            comments: arrayUnion(newComment)
        });

        // Atualiza dados locais
        const newsIndex = newsData.findIndex(n => n.id === articleId);
        if (newsIndex !== -1) {
            if (!newsData[newsIndex].comments) newsData[newsIndex].comments = [];
            newsData[newsIndex].comments.push({
                ...newComment,
                createdAt: { seconds: Date.now() / 1000 }
            });
        }

        // Limpa input e atualiza UI
        commentInput.value = '';

        // Re-renderiza comentários
        const commentsList = document.getElementById('commentsList');
        if (commentsList) {
            const article = newsData.find(n => n.id === articleId);
            commentsList.innerHTML = renderComments(article?.comments || []);
        }

        // Atualiza contador
        const commentsSection = document.querySelector('.comments-section h4');
        if (commentsSection && newsData[newsIndex]) {
            commentsSection.innerHTML = `<i class="fas fa-comments"></i> Comentários (${newsData[newsIndex].comments.length})`;
        }

        showNotification('Comentário adicionado!', 'success');

    } catch (error) {
        console.error('Erro ao adicionar comentário:', error);
        showNotification('Erro ao adicionar comentário', 'error');
    }
}

// Toggle like functionality CORRIGIDO
async function toggleLike(articleId) {
    if (!currentUser) {
        showNotification('Faça login para curtir artigos', 'error');
        return;
    }

    try {
        // Tenta primeiro na coleção "homenews", depois em "news"
        let articleRef = doc(db, "news", articleId); // Corrigido para "news"
        let articleDoc = await getDoc(articleRef);

        // Se não encontrar em "news", tenta em "homenews" (fallback para posts antigos, se houver)
        if (!articleDoc.exists()) {
            articleRef = doc(db, "homenews", articleId);
            articleDoc = await getDoc(articleRef);
        }

        if (!articleDoc.exists()) {
            showNotification('Artigo não encontrado', 'error');
            return;
        }

        const data = articleDoc.data();
        const likedBy = data.likedBy || [];
        const isLiked = likedBy.includes(currentUser.uid);

        let newLikedBy, newLikes;

        if (isLiked) {
            newLikedBy = likedBy.filter(uid => uid !== currentUser.uid);
            newLikes = Math.max(0, (data.likes || 0) - 1);
        } else {
            newLikedBy = [...likedBy, currentUser.uid];
            newLikes = (data.likes || 0) + 1;
        }

        // Atualiza na base de dados
        await updateDoc(articleRef, {
            likes: newLikes,
            likedBy: newLikedBy
        });

        // Atualiza UI imediatamente
        const likeBtn = document.getElementById('likeBtn');
        const likeCount = document.getElementById('likeCount');

        if (likeCount) likeCount.textContent = newLikes;
        if (likeBtn) likeBtn.style.color = !isLiked ? '#ff6b6b' : 'var(--texto)';

        // Atualiza dados locais
        const newsIndex = newsData.findIndex(n => n.id === articleId);
        if (newsIndex !== -1) {
            newsData[newsIndex].likes = newLikes;
            newsData[newsIndex].likedBy = newLikedBy;
        }

        showNotification(isLiked ? 'Curtida removida' : 'Artigo curtido!', 'success');

    } catch (error) {
        console.error('Erro ao curtir artigo:', error);
        showNotification('Erro ao curtir artigo', 'error');
    }
}

// Share article functionality
function shareArticle(article) {
    if (navigator.share) {
        navigator.share({
            title: article.title,
            text: article.description,
            url: window.location.href
        });
    } else {
        const shareText = `${article.title} - ${article.description}\n\n${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Link copiado para a área de transferência!', 'success');
        });
    }
}

function closeArticleModal() {
    if (elements.detailModal) {
        elements.detailModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Fecha todos os modais
function closeAllModals() {
    closeProfileModal();
    closeSearchModal();
    closeArticleModal();
}

// Logout
async function handleLogout() {
    try {
        await signOut(auth);
        window.location.href = 'logsin.html';
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        showNotification('Erro ao sair da conta.', 'error');
    }
}

// Animação do avatar
function startAvatarAnimation() {
    if (!elements.userAvatar) return;

    if (avatarAnimationInterval) clearInterval(avatarAnimationInterval);

    avatarAnimationInterval = setInterval(() => {
        if (elements.userAvatar) {
            elements.userAvatar.style.transform = 'scale(1.15)';
            setTimeout(() => {
                if (elements.userAvatar) {
                    elements.userAvatar.style.transform = 'scale(1)';
                }
            }, 300);
        }
    }, 8000);
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s ease;
        font-family: 'Rajdhani', sans-serif;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;

    const colors = {
        success: 'linear-gradient(45deg, #00ffaa, #00cc88)',
        error: 'linear-gradient(45deg, #ff6b6b, #ff5252)',
        info: 'linear-gradient(45deg, #00f7ff, #0099cc)'
    };

    notification.style.background = colors[type] || colors.info;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Funções globais
window.navigateToSection = navigateToSection;
window.handleSearchResultClick = handleSearchResultClick;
window.openProfileModal = openProfileModal;
window.closeProfileModal = closeProfileModal;
window.toggleEditMode = toggleEditMode;
window.saveProfile = saveProfile;
window.addComment = addComment;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando FATOMANIA HUB...');
    checkAuthState(); // Chamada corrigida para usar a nova função
});

// Cleanup
window.addEventListener('beforeunload', () => {
    if (highlightInterval) clearInterval(highlightInterval);
    if (avatarAnimationInterval) clearInterval(avatarAnimationInterval);
});

console.log('✅ Dashboard JavaScript carregado');