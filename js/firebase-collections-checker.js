
// Firebase Collections Checker - Verifica e corrige estruturas de coleções

const REQUIRED_COLLECTIONS = [
    'news-articles',
    'dynamic-news',
    'history-articles', 
    'science-articles',
    'tech-articles',
    'space-articles',
    'eco-articles',
    'sports-articles',
    'med-articles',
    'games-articles',
    'art-articles',
    'mystic-articles',
    'lab-articles',
    'quizzes',
    'users',
    'quiz-results',
    'quiz-scores',
    'comments',
    'notifications'
];

/**
 * Verifica e cria coleções necessárias
 */
export async function checkAndCreateCollections() {
    console.log('🔍 Verificando coleções do Firebase...');
    
    const results = {
        existing: [],
        created: [],
        errors: []
    };

    for (const collectionName of REQUIRED_COLLECTIONS) {
        try {
            const collectionRef = window.firebaseDB.collection(window.firebaseDB.db, collectionName);
            
            // Tenta ler a coleção
            const snapshot = await window.firebaseDB.getDocs(
                window.firebaseDB.query(collectionRef, window.firebaseDB.limit(1))
            );

            if (snapshot.empty) {
                console.log(`📝 Coleção '${collectionName}' vazia, criando documento inicial...`);
                await createInitialDocument(collectionName);
                results.created.push(collectionName);
            } else {
                console.log(`✅ Coleção '${collectionName}' existe e tem dados`);
                results.existing.push(collectionName);
            }

        } catch (error) {
            if (error.code === 'failed-precondition' || error.code === 'permission-denied') {
                console.log(`⚠️ Inicializando coleção '${collectionName}'...`);
                try {
                    await createInitialDocument(collectionName);
                    results.created.push(collectionName);
                } catch (createError) {
                    console.error(`❌ Erro ao criar '${collectionName}':`, createError);
                    results.errors.push({ collection: collectionName, error: createError.message });
                }
            } else {
                console.error(`❌ Erro ao verificar '${collectionName}':`, error);
                results.errors.push({ collection: collectionName, error: error.message });
            }
        }
    }

    console.log('📊 Resultado da verificação:', results);
    return results;
}

/**
 * Cria documento inicial em uma coleção
 */
async function createInitialDocument(collectionName) {
    const initDoc = {
        _initialized: true,
        _type: 'system_init',
        createdAt: new Date(),
        collection: collectionName
    };

    await window.firebaseDB.addDoc(
        window.firebaseDB.collection(window.firebaseDB.db, collectionName),
        initDoc
    );

    console.log(`✅ Documento inicial criado em '${collectionName}'`);
}

/**
 * Cria exemplos de artigos para uma categoria
 */
export async function createSampleArticles(category, count = 2) {
    console.log(`📝 Criando artigos de exemplo para ${category}...`);
    
    const articles = [];
    const collectionName = `${category}-articles`;

    for (let i = 0; i < count; i++) {
        const article = {
            title: `Exemplo de Artigo ${i + 1} - ${category.toUpperCase()}`,
            summary: `Este é um artigo de exemplo criado automaticamente para a categoria ${category}.`,
            content: `Conteúdo completo do artigo de exemplo. Este artigo foi criado pelo sistema para demonstrar a estrutura e funcionalidade da plataforma FATOMANIA.`,
            author: 'Sistema FATOMANIA',
            category: category,
            imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
            status: 'published',
            createdAt: new Date(),
            views: 0,
            likes: 0,
            comments: [],
            tags: [category, 'exemplo', 'sistema']
        };

        try {
            const docRef = await window.firebaseDB.addDoc(
                window.firebaseDB.collection(window.firebaseDB.db, collectionName),
                article
            );
            articles.push({ id: docRef.id, ...article });
        } catch (error) {
            console.error(`Erro ao criar artigo em ${collectionName}:`, error);
        }
    }

    return articles;
}

/**
 * Verifica conectividade com Firebase
 */
export async function checkFirebaseConnection() {
    try {
        console.log('🔥 Testando conexão com Firebase...');
        
        const user = window.firebaseAuth?.auth?.currentUser;
        console.log('👤 Usuário atual:', user?.email || 'Não autenticado');
        
        const testQuery = window.firebaseDB.query(
            window.firebaseDB.collection(window.firebaseDB.db, 'users'),
            window.firebaseDB.limit(1)
        );
        await window.firebaseDB.getDocs(testQuery);
        console.log('✅ Firestore conectado');
        
        return { auth: !!user, firestore: true };
        
    } catch (error) {
        console.error('❌ Erro na conexão Firebase:', error);
        return { auth: false, firestore: false, error: error.message };
    }
}

/**
 * Query segura com fallback para consultas sem índice
 */
export async function safeQuery(collectionName, filters = {}) {
    try {
        let query = window.firebaseDB.collection(window.firebaseDB.db, collectionName);
        
        // Tenta query com ordenação e filtros
        if (filters.where) {
            const [field, operator, value] = filters.where;
            query = window.firebaseDB.query(query, window.firebaseDB.where(field, operator, value));
        }
        
        if (filters.orderBy) {
            query = window.firebaseDB.query(query, window.firebaseDB.orderBy(filters.orderBy, filters.direction || 'desc'));
        }
        
        if (filters.limit) {
            query = window.firebaseDB.query(query, window.firebaseDB.limit(filters.limit));
        }
        
        const snapshot = await window.firebaseDB.getDocs(query);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
    } catch (error) {
        if (error.code === 'failed-precondition') {
            console.warn(`⚠️ Índice não encontrado para ${collectionName}, usando query simples`);
            
            // Fallback: query simples
            const simpleQuery = window.firebaseDB.collection(window.firebaseDB.db, collectionName);
            const snapshot = await window.firebaseDB.getDocs(
                filters.limit ? window.firebaseDB.query(simpleQuery, window.firebaseDB.limit(filters.limit)) : simpleQuery
            );
            
            let results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            
            // Filtra e ordena no cliente
            if (filters.where) {
                const [field, operator, value] = filters.where;
                results = results.filter(doc => {
                    if (operator === '==') return doc[field] === value;
                    if (operator === '!=') return doc[field] !== value;
                    if (operator === '>') return doc[field] > value;
                    if (operator === '<') return doc[field] < value;
                    if (operator === '>=') return doc[field] >= value;
                    if (operator === '<=') return doc[field] <= value;
                    return true;
                });
            }
            
            if (filters.orderBy) {
                results.sort((a, b) => {
                    const aVal = a[filters.orderBy];
                    const bVal = b[filters.orderBy];
                    const direction = filters.direction === 'asc' ? 1 : -1;
                    
                    if (aVal?.seconds && bVal?.seconds) {
                        return (bVal.seconds - aVal.seconds) * direction;
                    }
                    return (bVal - aVal) * direction;
                });
            }
            
            return results;
        }
        
        throw error;
    }
}

// Exporta funções globalmente
window.checkAndCreateCollections = checkAndCreateCollections;
window.createSampleArticles = createSampleArticles;
window.checkFirebaseConnection = checkFirebaseConnection;
window.safeQuery = safeQuery;
