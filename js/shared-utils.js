
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
export function openArticle(articleId, articles) {
    const article = articles.find(a => a.id === articleId);
    if (!article) return;
    
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
    
    if (modalTitle) modalTitle.textContent = article.title;
    if (modalImage) {
        modalImage.style.backgroundImage = `url('${article.imageUrl || '/icon/fatomania.png'}')`;
        modalImage.style.display = 'block';
    }
    if (modalMeta) {
        modalMeta.innerHTML = `
            <span><i class="fas fa-user"></i> ${article.author}</span>
            <span><i class="fas fa-calendar"></i> ${formatDate(article.createdAt)}</span>
            <span><i class="fas fa-eye"></i> ${article.views || 0}</span>
        `;
    }
    if (modalContent) modalContent.textContent = article.content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
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

// Tornar funções globalmente disponíveis
window.openArticle = openArticle;
window.closeArticleModal = closeArticleModal;
window.formatDate = formatDate;
window.showMessage = showMessage;
window.showProgress = showProgress;
window.hideProgress = hideProgress;
window.showImagePreview = showImagePreview;
