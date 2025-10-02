
// Utilitários compartilhados para evitar duplicação de código
import { uploadArticleImage, uploadNewsImage, uploadQuizImage, uploadProfileImage } from '/js/upload-utils.js';

/**
 * Formatar data para PT-BR (função unificada)
 */
export function formatDate(date) {
    if (!date) return new Date().toLocaleDateString('pt-BR');
    
    try {
        let dateObj;
        
        if (date.seconds) {
            dateObj = new Date(date.seconds * 1000);
        } else if (typeof date === 'string') {
            dateObj = new Date(date);
        } else if (date instanceof Date) {
            dateObj = date;
        } else {
            dateObj = new Date();
        }
        
        if (isNaN(dateObj.getTime())) {
            return new Date().toLocaleDateString('pt-BR');
        }
        
        return dateObj.toLocaleDateString('pt-BR');
    } catch (error) {
        console.error('Erro ao formatar data:', error);
        return new Date().toLocaleDateString('pt-BR');
    }
}

/**
 * Exibir mensagem de status
 */
export function showMessage(message, type = 'info') {
    const messageDiv = document.getElementById('message');
    if (!messageDiv) return;
    
    messageDiv.innerHTML = `<div class="message ${type}">${message}</div>`;
    
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.innerHTML = '';
        }, 3000);
    }
}

/**
 * Sistema de notificações popup moderno
 */
export function showPopupNotification(message, type = 'info', duration = 3000) {
    const container = document.getElementById('notifications-container') || createNotificationContainer();
    
    const notification = document.createElement('div');
    notification.className = `popup-notification ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="fas ${icons[type] || icons.info}"></i>
        <span>${message}</span>
        <button class="close-notification" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(notification);
    
    // Anima entrada
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove automaticamente
    if (duration > 0) {
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }
    
    return notification;
}

function createNotificationContainer() {
    const container = document.createElement('div');
    container.id = 'notifications-container';
    container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 400px;
    `;
    
    // Adiciona estilos globais se não existirem
    if (!document.getElementById('popup-notification-styles')) {
        const style = document.createElement('style');
        style.id = 'popup-notification-styles';
        style.textContent = `
            /* Estilos para botão de curtida */
            .like-button {
                background: rgba(255, 255, 255, 0.1);
                border: 2px solid rgba(255, 255, 255, 0.2);
                border-radius: 25px;
                padding: 0.5rem 1rem;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                font-weight: 600;
            }
            
            .like-button:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: scale(1.05);
            }
            
            .like-button.liked {
                background: linear-gradient(45deg, #ff006e, #ff4081);
                border-color: #ff006e;
            }
            
            .like-button.liked i {
                animation: heartBeat 0.3s;
            }
            
            @keyframes heartBeat {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
            
            /* Estilos para comentários */
            .comment-form textarea:focus {
                outline: none;
                border-color: var(--destaque, #00f7ff);
                box-shadow: 0 0 20px rgba(0, 247, 255, 0.3);
            }
            
            .comment-form button:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 20px rgba(0, 247, 255, 0.4);
            }
            
            .comments-list::-webkit-scrollbar {
                width: 8px;
            }
            
            .comments-list::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.2);
                border-radius: 10px;
            }
            
            .comments-list::-webkit-scrollbar-thumb {
                background: var(--destaque, #00f7ff);
                border-radius: 10px;
            }
            .popup-notification {
                background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
                border: 2px solid var(--azul, #00f7ff);
                border-radius: 15px;
                padding: 1rem 1.5rem;
                color: white;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                gap: 1rem;
                transform: translateX(450px);
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
            }
            
            .popup-notification.show {
                transform: translateX(0);
            }
            
            .popup-notification.success {
                border-color: var(--verde, #00ffaa);
            }
            
            .popup-notification.error {
                border-color: var(--rosa, #ff006e);
            }
            
            .popup-notification.warning {
                border-color: var(--dourado, #ffd700);
            }
            
            .popup-notification i:first-child {
                font-size: 1.5rem;
            }
            
            .popup-notification.success i:first-child {
                color: var(--verde, #00ffaa);
            }
            
            .popup-notification.error i:first-child {
                color: var(--rosa, #ff006e);
            }
            
            .popup-notification.warning i:first-child {
                color: var(--dourado, #ffd700);
            }
            
            .popup-notification.info i:first-child {
                color: var(--azul, #00f7ff);
            }
            
            .popup-notification span {
                flex: 1;
                font-weight: 600;
            }
            
            .close-notification {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 1.2rem;
                opacity: 0.7;
                transition: opacity 0.3s;
            }
            
            .close-notification:hover {
                opacity: 1;
            }
            
            @media (max-width: 768px) {
                .popup-notification {
                    max-width: calc(100vw - 40px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(container);
    return container;
}

// Torna a função global
window.showPopupNotification = showPopupNotification;

/**
 * Mostrar barra de progresso
 */
export function showProgress(progress, text = 'Carregando...') {
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    if (progressContainer && progressBar && progressText) {
        progressContainer.style.display = 'block';
        progressBar.style.width = `${progress}%`;
        progressText.textContent = text;
        
        if (progress >= 100) {
            setTimeout(() => {
                progressContainer.style.display = 'none';
            }, 1000);
        }
    }
}

/**
 * Ocultar barra de progresso
 */
export function hideProgress() {
    const progressContainer = document.getElementById('progressContainer');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }
}

/**
 * Mostrar preview de imagem
 */
export function showImagePreview(file, previewId = 'imagePreview') {
    const preview = document.getElementById(previewId);
    if (!preview) return;
    
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';
    }
}

/**
 * Validar formulário comum
 */
export function validateForm(formData) {
    const errors = [];
    
    if (!formData.title || formData.title.trim().length < 5) {
        errors.push('Título deve ter pelo menos 5 caracteres');
    }
    
    if (!formData.category) {
        errors.push('Selecione uma categoria');
    }
    
    if (!formData.summary || formData.summary.trim().length < 20) {
        errors.push('Resumo deve ter pelo menos 20 caracteres');
    }
    
    if (!formData.content || formData.content.trim().length < 50) {
        errors.push('Conteúdo deve ter pelo menos 50 caracteres');
    }
    
    return errors;
}

/**
 * Abrir modal de artigo (função unificada)
 */
export async function openArticle(articleId, collectionName = 'news-articles') {
    try {
        // Incrementa visualizações
        if (window.incrementViews) {
            await window.incrementViews(collectionName, articleId);
        }
        
        // Busca artigo
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) {
            console.error('Artigo não encontrado');
            return;
        }
        
        const article = { id: articleSnap.id, ...articleSnap.data() };
        
        // Criar modal se não existir
        let modal = document.getElementById('articleModal');
        if (!modal) {
            modal = createArticleModal();
            document.body.appendChild(modal);
        }
        
        // Preencher dados do modal
        const modalTitle = modal.querySelector('.modal-title');
        const modalImage = modal.querySelector('.modal-image');
        const modalMeta = modal.querySelector('.modal-meta');
        const modalContent = modal.querySelector('.modal-content-text');
        const modalBody = modal.querySelector('.modal-body');
        
        if (modalTitle) modalTitle.textContent = article.title;
        if (modalImage) {
            modalImage.style.backgroundImage = `url('${article.imageUrl || '/icon/fatomania.png'}')`;
            modalImage.style.display = 'block';
        }
        
        // Meta com botão de like
        if (modalMeta) {
            const user = window.firebaseAuth?.auth?.currentUser;
            const userId = user?.uid || 'anonymous';
            
            // Verifica se usuário já curtiu
            let isLiked = false;
            if (window.checkIfLiked) {
                isLiked = await window.checkIfLiked(collectionName, articleId, userId);
            }
            
            modalMeta.innerHTML = `
                <span><i class="fas fa-user"></i> ${article.author || 'Anônimo'}</span>
                <span><i class="fas fa-calendar"></i> ${formatDate(article.createdAt)}</span>
                <span><i class="fas fa-eye"></i> ${(article.views || 0) + 1} visualizações</span>
                ${window.renderLikeButton ? window.renderLikeButton(collectionName, articleId, userId, article.likes || 0, isLiked) : ''}
            `;
        }
        
        if (modalContent) {
            modalContent.textContent = article.content || article.summary || '';
        }
        
        // Adiciona seção de comentários
        if (modalBody && window.renderCommentsSection) {
            const user = window.firebaseAuth?.auth?.currentUser;
            const userId = user?.uid || 'anonymous';
            const userName = user?.displayName || user?.email?.split('@')[0] || 'Visitante';
            
            // Remove seção de comentários antiga se existir
            const oldComments = modalBody.querySelector('.comments-section');
            if (oldComments) oldComments.remove();
            
            modalBody.insertAdjacentHTML('beforeend', window.renderCommentsSection(collectionName, articleId, userId, userName));
            
            // Carrega comentários
            if (window.loadComments && window.renderComments) {
                const comments = await window.loadComments(collectionName, articleId);
                window.renderComments(comments, `commentsList-${articleId}`);
            }
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
    } catch (error) {
        console.error('Erro ao abrir artigo:', error);
        window.showPopupNotification?.('Erro ao abrir artigo', 'error');
    }
}

/**
 * Criar modal de artigo padrão
 */
function createArticleModal() {
    const modal = document.createElement('div');
    modal.id = 'articleModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeArticleModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-image"></div>
            <div class="modal-body">
                <h2 class="modal-title"></h2>
                <div class="modal-meta"></div>
                <div class="modal-content-text"></div>
            </div>
        </div>
    `;
    return modal;
}

/**
 * Fechar modal de artigo
 */
export function closeArticleModal() {
    const modal = document.getElementById('articleModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/**
 * Upload de imagem baseado no tipo
 */
export async function uploadImageByType(file, type, progressCallback) {
    switch (type) {
        case 'article':
            return await uploadArticleImage(file, progressCallback);
        case 'news':
            return await uploadNewsImage(file, progressCallback);
        case 'quiz':
            return await uploadQuizImage(file, progressCallback);
        case 'profile':
            return await uploadProfileImage(file, progressCallback);
        default:
            return await uploadArticleImage(file, progressCallback);
    }
}

/**
 * Incrementar visualizações de um artigo
 */
export async function incrementViews(collectionName, articleId) {
    try {
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        await window.firebaseDB.updateDoc(articleRef, {
            views: window.firebaseDB.increment(1)
        });
        return true;
    } catch (error) {
        console.error('Erro ao incrementar visualizações:', error);
        return false;
    }
}

/**
 * Alternar curtida em um artigo
 */
export async function toggleLike(collectionName, articleId, userId) {
    try {
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) return false;
        
        const article = articleSnap.data();
        const likedBy = article.likedBy || [];
        const likes = article.likes || 0;
        
        if (likedBy.includes(userId)) {
            // Remove curtida
            await window.firebaseDB.updateDoc(articleRef, {
                likes: Math.max(0, likes - 1),
                likedBy: likedBy.filter(id => id !== userId)
            });
            return false; // não curtido
        } else {
            // Adiciona curtida
            await window.firebaseDB.updateDoc(articleRef, {
                likes: likes + 1,
                likedBy: [...likedBy, userId]
            });
            return true; // curtido
        }
    } catch (error) {
        console.error('Erro ao alternar curtida:', error);
        return false;
    }
}

/**
 * Verificar se usuário curtiu o artigo
 */
export async function checkIfLiked(collectionName, articleId, userId) {
    try {
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) return false;
        
        const article = articleSnap.data();
        const likedBy = article.likedBy || [];
        
        return likedBy.includes(userId);
    } catch (error) {
        console.error('Erro ao verificar curtida:', error);
        return false;
    }
}

/**
 * Adicionar comentário
 */
export async function addComment(collectionName, articleId, userId, userName, commentText) {
    try {
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) return false;
        
        const article = articleSnap.data();
        const comments = article.comments || [];
        
        const newComment = {
            id: Date.now().toString(),
            userId,
            userName,
            text: commentText,
            createdAt: new Date().toISOString(),
            likes: 0
        };
        
        await window.firebaseDB.updateDoc(articleRef, {
            comments: [...comments, newComment]
        });
        
        return newComment;
    } catch (error) {
        console.error('Erro ao adicionar comentário:', error);
        return false;
    }
}

/**
 * Carregar comentários
 */
export async function loadComments(collectionName, articleId) {
    try {
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) return [];
        
        const article = articleSnap.data();
        return article.comments || [];
    } catch (error) {
        console.error('Erro ao carregar comentários:', error);
        return [];
    }
}

/**
 * Renderizar botão de curtida
 */
export function renderLikeButton(collectionName, articleId, userId, likes, isLiked) {
    const heartIcon = isLiked ? 'fas fa-heart' : 'far fa-heart';
    const likeClass = isLiked ? 'liked' : '';
    
    return `
        <button class="like-button ${likeClass}" onclick="handleLikeClick('${collectionName}', '${articleId}', '${userId}')">
            <i class="${heartIcon}"></i> 
            <span class="like-count">${likes}</span>
        </button>
    `;
}

/**
 * Manipular clique em curtida
 */
window.handleLikeClick = async function(collectionName, articleId, userId) {
    const isLiked = await toggleLike(collectionName, articleId, userId);
    
    // Atualizar UI
    const likeButton = event.target.closest('.like-button');
    const likeCount = likeButton.querySelector('.like-count');
    const heartIcon = likeButton.querySelector('i');
    
    if (isLiked) {
        likeButton.classList.add('liked');
        heartIcon.className = 'fas fa-heart';
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        showPopupNotification('Artigo curtido!', 'success', 2000);
    } else {
        likeButton.classList.remove('liked');
        heartIcon.className = 'far fa-heart';
        likeCount.textContent = Math.max(0, parseInt(likeCount.textContent) - 1);
        showPopupNotification('Curtida removida', 'info', 2000);
    }
};

/**
 * Renderizar seção de comentários
 */
export function renderCommentsSection(collectionName, articleId, userId, userName) {
    return `
        <div class="comments-section" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
            <h3 style="color: var(--destaque, #00f7ff); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-comments"></i> Comentários
            </h3>
            <div class="comment-form" style="margin-bottom: 2rem;">
                <textarea 
                    id="commentInput-${articleId}" 
                    placeholder="Compartilhe sua opinião..."
                    style="width: 100%; padding: 1rem; border-radius: 10px; border: 2px solid rgba(255, 255, 255, 0.2); background: rgba(0, 0, 0, 0.3); color: white; font-family: inherit; min-height: 100px; resize: vertical;"
                ></textarea>
                <button 
                    onclick="handleCommentSubmit('${collectionName}', '${articleId}', '${userId}', '${userName}')"
                    style="margin-top: 1rem; padding: 0.8rem 2rem; background: linear-gradient(45deg, var(--destaque, #00f7ff), var(--verde, #00ffaa)); border: none; border-radius: 10px; color: var(--fundo, #0f0c29); font-weight: 600; cursor: pointer; transition: all 0.3s;"
                >
                    <i class="fas fa-paper-plane"></i> Comentar
                </button>
            </div>
            <div id="commentsList-${articleId}" class="comments-list" style="max-height: 400px; overflow-y: auto;"></div>
        </div>
    `;
}

/**
 * Manipular envio de comentário
 */
window.handleCommentSubmit = async function(collectionName, articleId, userId, userName) {
    const commentInput = document.getElementById(`commentInput-${articleId}`);
    const commentText = commentInput.value.trim();
    
    if (!commentText) {
        showPopupNotification('Digite um comentário', 'warning', 2000);
        return;
    }
    
    const comment = await addComment(collectionName, articleId, userId, userName, commentText);
    
    if (comment) {
        commentInput.value = '';
        showPopupNotification('Comentário adicionado!', 'success', 2000);
        
        // Recarregar comentários
        const comments = await loadComments(collectionName, articleId);
        renderComments(comments, `commentsList-${articleId}`);
    } else {
        showPopupNotification('Erro ao adicionar comentário', 'error');
    }
};

/**
 * Renderizar lista de comentários
 */
export function renderComments(comments, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (comments.length === 0) {
        container.innerHTML = '<p style="color: rgba(255, 255, 255, 0.5); text-align: center; padding: 2rem;">Nenhum comentário ainda. Seja o primeiro!</p>';
        return;
    }
    
    container.innerHTML = comments.map(comment => `
        <div class="comment-item" style="background: rgba(0, 0, 0, 0.2); border-radius: 10px; padding: 1rem; margin-bottom: 1rem; border-left: 4px solid var(--destaque, #00f7ff);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="color: var(--destaque, #00f7ff);">
                    <i class="fas fa-user"></i> ${comment.userName}
                </strong>
                <small style="color: rgba(255, 255, 255, 0.5);">${formatDate(comment.createdAt)}</small>
            </div>
            <p style="color: white; line-height: 1.6;">${comment.text}</p>
        </div>
    `).join('');
}

// Tornar funções globalmente disponíveis
window.openArticle = openArticle;
window.closeArticleModal = closeArticleModal;
window.formatDate = formatDate;
window.showMessage = showMessage;
window.showProgress = showProgress;
window.hideProgress = hideProgress;
window.showImagePreview = showImagePreview;
window.incrementViews = incrementViews;
window.toggleLike = toggleLike;
window.checkIfLiked = checkIfLiked;
window.addComment = addComment;
window.loadComments = loadComments;
window.renderLikeButton = renderLikeButton;
window.renderCommentsSection = renderCommentsSection;
window.renderComments = renderComments;
