import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Variáveis globais
let currentUser = null;
let selectedImageFile = null;

// Elementos DOM
const elements = {
    form: document.getElementById('newsForm'),
    title: document.getElementById('title'),
    description: document.getElementById('description'),
    tag: document.getElementById('tag'),
    author: document.getElementById('author'),
    section: document.getElementById('section'),
    content: document.getElementById('content'),
    submitBtn: document.getElementById('submitBtn'),
    imagePreview: document.getElementById('imagePreview'),
    fileInput: document.getElementById('fileInput')
};

// Verifica autenticação
function checkAuthState() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = user;
            console.log('Usuário autenticado:', user.email);
        } else {
            console.log('Usuário não autenticado, redirecionando...');
            showNotification('Acesso negado. Faça login primeiro.', 'error');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        }
    });
}

// Auto-resize do textarea
function autoResizeTextarea() {
    if (elements.content) {
        elements.content.style.height = 'auto';
        elements.content.style.height = elements.content.scrollHeight + 'px';
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Upload de imagem
    if (elements.fileInput) {
        elements.fileInput.addEventListener('change', handleImageUpload);
    }

    // Submissão do formulário
    if (elements.form) {
        elements.form.addEventListener('submit', handleSubmit);
    }

    // Auto-resize do textarea de conteúdo
    if (elements.content) {
        autoResizeTextarea(); // Aplica o resize inicial
        elements.content.addEventListener('input', autoResizeTextarea);
    }

    // Eventos para os botões de upload (opcional)
    document.getElementById('dropboxBtn')?.addEventListener('click', () => {
        alert('Integração com Dropbox seria implementada aqui');
    });
    
    document.getElementById('driveBtn')?.addEventListener('click', () => {
        alert('Integração com Google Drive seria implementada aqui');
    });
}

// Manipula upload de imagem
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Verifica se é uma imagem
    if (!file.type.match('image.*')) {
        showNotification('Por favor, selecione um arquivo de imagem válido.', 'error');
        return;
    }

    // Limita o tamanho do arquivo (5MB)
    if (file.size > 5 * 1024 * 1024) {
        showNotification('A imagem deve ter menos de 5MB.', 'error');
        return;
    }

    selectedImageFile = file;

    // Mostra preview da imagem
    const reader = new FileReader();
    reader.onload = function(e) {
        elements.imagePreview.style.backgroundImage = `url(${e.target.result})`;
        elements.imagePreview.innerHTML = '';
    };
    reader.readAsDataURL(file);
}

// Submissão do formulário
async function handleSubmit(event) {
    event.preventDefault();
    
    if (!currentUser) {
        showNotification('Você precisa estar logado para enviar notícias.', 'error');
        return;
    }

    // Validação dos campos
    if (!validateForm()) {
        return;
    }

    // Desabilita botão durante envio
    elements.submitBtn.disabled = true;
    elements.submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    try {
        let imageUrl = '';
        
        // Se uma imagem foi selecionada, faz upload para o Firebase Storage
        if (selectedImageFile) {
            try {
                showNotification('Enviando imagem...', 'info');
                
                // Cria uma referência para o arquivo no Storage
                const storageRef = ref(storage, `news-images/${Date.now()}_${selectedImageFile.name}`);
                
                // Faz upload do arquivo
                const snapshot = await uploadBytes(storageRef, selectedImageFile);
                
                // Obtém a URL de download
                imageUrl = await getDownloadURL(snapshot.ref);
                
                showNotification('Imagem enviada com sucesso!', 'success');
            } catch (error) {
                console.error('Erro ao enviar imagem:', error);
                showNotification('Erro ao enviar imagem. Usando imagem padrão.', 'warning');
                imageUrl = 'https://via.placeholder.com/1170x780';
            }
        } else {
            showNotification('Nenhuma imagem selecionada. Usando imagem padrão.', 'warning');
            imageUrl = 'https://via.placeholder.com/1170x780';
        }

        // Prepara dados da notícia
        const newsData = {
            title: elements.title.value.trim(),
            description: elements.description.value.trim(),
            tag: elements.tag.value,
            author: elements.author.value.trim(),
            section: elements.section.value,
            image: imageUrl,
            content: formatContent(elements.content.value.trim()),
            createdAt: serverTimestamp(),
            publishedBy: currentUser.uid,
            publisherEmail: currentUser.email,
            date: new Date().toLocaleDateString('pt-BR'),
            likes: 0,
            comments: [],
            likedBy: [],
            status: 'published'
        };

        console.log('Dados da notícia preparados:', newsData);

        // Tenta adicionar à coleção "homenews"
        try {
            const docRef = await addDoc(collection(db, "homenews"), newsData);
            console.log('Documento criado com ID:', docRef.id);
            showNotification('Notícia publicada com sucesso!', 'success');
            
            // Limpa formulário após sucesso
            setTimeout(() => {
                elements.form.reset();
                elements.imagePreview.style.backgroundImage = '';
                elements.imagePreview.innerHTML = '<i class="fas fa-image"></i>';
                selectedImageFile = null;
                window.location.href = 'dashboard.html';
            }, 2000);
            
        } catch (error) {
            console.error('Erro ao criar documento:', error);
            showNotification('Erro ao publicar notícia. Tente novamente.', 'error');
            throw error;
        }

    } catch (error) {
        console.error('Erro no processo de envio:', error);
    } finally {
        // Reabilita botão
        elements.submitBtn.disabled = false;
        elements.submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Publicar Notícia';
    }
}

// Validação do formulário
function validateForm() {
    const requiredFields = [
        { element: elements.title, name: 'Título' },
        { element: elements.description, name: 'Descrição' },
        { element: elements.tag, name: 'Tag' },
        { element: elements.author, name: 'Autor' },
        { element: elements.section, name: 'Seção' },
        { element: elements.content, name: 'Conteúdo' }
    ];

    for (const field of requiredFields) {
        if (!field.element.value.trim()) {
            showNotification(`O campo "${field.name}" é obrigatório.`, 'error');
            field.element.focus();
            return false;
        }
    }

    // Validação da imagem
    if (!selectedImageFile) {
        showNotification('Por favor, selecione uma imagem.', 'error');
        return false;
    }

    // Validação do tamanho do conteúdo
    if (elements.content.value.trim().length < 50) {
        showNotification('O conteúdo deve ter pelo menos 50 caracteres.', 'error');
        elements.content.focus();
        return false;
    }

    return true;
}

// Formata conteúdo com HTML básico
function formatContent(content) {
    // Se já contém tags HTML, retorna como está
    if (content.includes('<') && content.includes('>')) {
        return content;
    }

    // Converte quebras de linha em parágrafos
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map(paragraph => {
        const trimmed = paragraph.trim();
        if (trimmed) {
            return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
        }
        return '';
    }).join('\n');
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    // Remove notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Mostra notificação
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Remove notificação após 4 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Pré-preenchimento de campos (opcional)
function prefillAuthorField() {
    if (currentUser && elements.author && elements.author.value === '') {
        // Tenta usar o nome do usuário ou email como autor padrão
        const defaultAuthor = currentUser.displayName || currentUser.email.split('@')[0];
        elements.author.value = defaultAuthor;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando página de submissão de notícias...');
    
    checkAuthState();
    setupEventListeners();
    
    // Aguarda um pouco para preencher o autor
    setTimeout(prefillAuthorField, 1000);
});

// Adiciona logs para debug
console.log('Firebase config:', firebaseConfig);