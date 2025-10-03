// Firebase configuration and initialization
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    updateProfile,
    sendPasswordResetEmail
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { 
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    onSnapshot,
    serverTimestamp,
    increment,
    arrayRemove,
    arrayUnion
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { 
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8Mx4XldG5eXsVat2FyqqlEt4EnUvrQ80",
    authDomain: "fatomania-de805.firebaseapp.com",
    projectId: "fatomania-de805",
    storageBucket: "fatomania-de805.appspot.com",
    messagingSenderId: "274835802694",
    appId: "1:274835802694:web:f97de5be2cdcf5043c9847",
    measurementId: "G-B610GPX286"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.addScope('email');
googleProvider.addScope('profile');

// Export Firebase functions
window.firebaseAuth = {
    auth,
    googleProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    updateProfile,
    sendPasswordResetEmail
};

window.firebaseDB = {
    db,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    onSnapshot,
    serverTimestamp,
    increment,
    arrayRemove,
    arrayUnion
};

window.firebaseStorage = {
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
};

// Função para verificar auth com timeout
async function waitForAuth(timeout = 5000) {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe();
            resolve(user);
        });
        
        setTimeout(() => {
            unsubscribe();
            resolve(null);
        }, timeout);
    });
}

// Middleware para páginas protegidas
async function requireAuth(redirectTo = '/logsin.html') {
    const user = await waitForAuth();
    if (!user) {
        localStorage.setItem('redirectAfterLogin', window.location.pathname);
        window.location.href = redirectTo;
        return false;
    }
    return user;
}

// Export functions globally
window.requireAuth = requireAuth;
window.waitForAuth = waitForAuth;

// Auth state listener with improved redirect logic
let authStateProcessed = false;
onAuthStateChanged(auth, (user) => {
    // Evita múltiplos processamentos do mesmo estado
    if (authStateProcessed) return;
    
    const currentPath = window.location.pathname;
    console.log('Auth state changed. User:', user?.email, 'Path:', currentPath);
    
    if (user) {
        console.log('User is signed in:', user.email);
        
        // Páginas de login onde devemos redirecionar para dashboard
        const loginPages = ['/', '/index.html', '/logsin.html'];
        const isOnLoginPage = loginPages.includes(currentPath) || 
                             currentPath.endsWith('index.html') || 
                             currentPath.endsWith('logsin.html');
        
        if (isOnLoginPage) {
            // Verifica se há um redirecionamento pendente
            const redirectPath = localStorage.getItem('redirectAfterLogin');
            if (redirectPath && redirectPath !== currentPath) {
                localStorage.removeItem('redirectAfterLogin');
                console.log('Redirecting to saved path:', redirectPath);
                window.location.replace(redirectPath);
            } else {
                console.log('Redirecting to dashboard...');
                window.location.replace('/dashboard.html');
            }
            authStateProcessed = true;
        }
    } else {
        console.log('User is signed out');
        
        // Páginas protegidas que requerem autenticação
        const protectedPatterns = ['/dashboard', '/submit-', '/admin-panel'];
        const isProtectedPage = protectedPatterns.some(pattern => currentPath.includes(pattern));
        
        if (isProtectedPage) {
            console.log('Protected page accessed without auth, saving path and redirecting...');
            localStorage.setItem('redirectAfterLogin', currentPath);
            window.location.replace('/logsin.html');
            authStateProcessed = true;
        }
    }
});
