import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-storage.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD8Mx4XldG5eXsVat2FyqqlEt4EnUvrQ80",
    authDomain: "fatomania-de805.firebaseapp.com",
    projectId: "fatomania-de805",
    storageBucket: "fatomania-de805.appspot.com",
    messagingSenderId: "274835802694",
    appId: "1:274835802694:web:f97de5be2cdcf5043c9847",
    measurementId: "G-B610GPX286"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// User data
let currentUser = null;
let userData = {};

// DOM Elements
const elements = {
    profilePicture: document.getElementById('profilePicture'),
    profileName: document.getElementById('profileName'),
    profileUsername: document.getElementById('profileUsername'),
    profileEmail: document.getElementById('profileEmail'),
    totalQuizzes: document.getElementById('totalQuizzes'),
    totalArticles: document.getElementById('totalArticles'),
    totalPoints: document.getElementById('totalPoints'),
    memberDays: document.getElementById('memberDays'),
    levelBadge: document.getElementById('levelBadge'),
    levelNumber: document.getElementById('levelNumber'),
    progressBar: document.getElementById('progressBar'),
    currentXP: document.getElementById('currentXP'),
    progressPercent: document.getElementById('progressPercent'),
    nextLevelXP: document.getElementById('nextLevelXP'),
    memberSince: document.getElementById('memberSince'),
    lastAccess: document.getElementById('lastAccess'),
    currentStreak: document.getElementById('currentStreak'),
    achievementsCount: document.getElementById('achievementsCount'),
    favoriteSection: document.getElementById('favoriteSection'),
    bestScore: document.getElementById('bestScore')
};

// Initialize profile
function initProfile() {
    // Mostrar loading inicial
    showLoadingState();
    
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log('Usuário autenticado:', user.email);
            currentUser = user;
            await loadUserData();
            updateProfileUI();
        } else {
            console.log('Usuário não autenticado, redirecionando...');
            // Redirecionar para login após um delay para ver a mensagem
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        }
    });
}

// Show loading state
function showLoadingState() {
    Object.values(elements).forEach(el => {
        if (el && el.textContent !== undefined) {
            el.innerHTML = '<div class="loading"></div>';
        }
    });
}

// Load user data from Firestore
async function loadUserData() {
    try {
        console.log('Carregando dados do usuário...');
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
            console.log('Dados encontrados no Firestore');
            userData = userDoc.data();
            
            // Garantir que todos os campos existam
            userData = {
                level: userData.level || 1,
                xp: userData.xp || 0,
                quizzes: userData.quizzes || 0,
                articles: userData.articles || 0,
                points: userData.points || 0,
                logins: userData.logins || 1,
                streak: userData.streak || 0,
                achievements: userData.achievements || [],
                favoriteSection: userData.favoriteSection || "Explorando...",
                bestScore: userData.bestScore || 0,
                sectionsVisited: userData.sectionsVisited || [],
                favorites: userData.favorites || [],
                createdAt: userData.createdAt || new Date(),
                lastAccess: userData.lastAccess || new Date(),
                displayName: userData.displayName || currentUser.displayName,
                photoURL: userData.photoURL || currentUser.photoURL,
                ...userData
            };
        } else {
            console.log('Criando novo perfil de usuário');
            // Criar dados padrão para novo usuário
            userData = {
                level: 1,
                xp: 0,
                quizzes: 0,
                articles: 0,
                points: 0,
                logins: 1,
                streak: 0,
                achievements: [],
                favoriteSection: "Explorando...",
                bestScore: 0,
                sectionsVisited: [],
                favorites: [],
                createdAt: new Date(),
                lastAccess: new Date(),
                displayName: currentUser.displayName || currentUser.email.split('@')[0],
                photoURL: currentUser.photoURL || null,
                email: currentUser.email
            };
            
            // Salvar no Firestore
            await setDoc(userDocRef, userData);
            console.log('Novo perfil criado');
        }
        
        // Atualizar último acesso
        const now = new Date();
        await updateDoc(userDocRef, {
            lastAccess: now
        });
        userData.lastAccess = now;
        
        console.log('Dados do usuário carregados:', userData);
        
    } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        
        // Dados de fallback em caso de erro
        userData = {
            level: 1,
            xp: 0,
            quizzes: 0,
            articles: 0,
            points: 0,
            logins: 1,
            streak: 0,
            achievements: [],
            favoriteSection: "Erro ao carregar",
            bestScore: 0,
            sectionsVisited: [],
            favorites: [],
            createdAt: new Date(),
            lastAccess: new Date(),
            displayName: currentUser?.displayName || currentUser?.email?.split('@')[0] || "Usuário",
            photoURL: currentUser?.photoURL || null,
            email: currentUser?.email || "email@exemplo.com"
        };
    }
}

// Update profile UI
function updateProfileUI() {
    try {
        console.log('Atualizando interface do usuário...');
        
        // Informações básicas
        if (elements.profileName) {
            elements.profileName.textContent = userData.displayName || currentUser.displayName || currentUser.email.split('@')[0];
        }
        
        if (elements.profileUsername) {
            elements.profileUsername.textContent = `@${(currentUser.email || '').split('@')[0]}`;
        }
        
        if (elements.profileEmail) {
            elements.profileEmail.textContent = currentUser.email || 'email@exemplo.com';
        }
        
        // Foto do perfil
        updateProfilePicture();
        
        // Estatísticas
        if (elements.totalQuizzes) {
            elements.totalQuizzes.textContent = userData.quizzes || 0;
        }
        
        if (elements.totalArticles) {
            elements.totalArticles.textContent = userData.articles || 0;
        }
        
        if (elements.totalPoints) {
            elements.totalPoints.textContent = userData.points || 0;
        }
        
        // Calcular dias como membro
        const createdAt = userData.createdAt?.toDate ? userData.createdAt.toDate() : new Date(userData.createdAt);
        const daysSince = Math.floor((new Date() - createdAt) / (1000 * 60 * 60 * 24));
        if (elements.memberDays) {
            elements.memberDays.textContent = Math.max(daysSince, 0);
        }
        
        // Nível e progresso
        const level = userData.level || 1;
        const xp = userData.xp || 0;
        const x