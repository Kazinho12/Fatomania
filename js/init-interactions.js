/**
 * INICIALIZADOR DE INTERAÇÕES - FATOMANIA
 * Carrega e inicializa todos os módulos de interatividade
 */

// Importar todos os módulos necessários
import '/firebase-config.js';
import { initErrorLogger } from '/js/error-logger.js';
import { 
    incrementViews,
    incrementPlays,
    toggleLike,
    checkIfLiked,
    toggleFavorite,
    checkIfFavorited,
    addComment,
    loadComments,
    shareArticle,
    getUserFavorites,
    renderLikeButton,
    renderFavoriteButton,
    renderCommentsSection,
    renderComments
} from '/js/interactions-master.js';

import {
    openFavoritesModal,
    closeFavoritesModal
} from '/js/favorites-modal.js';

import {
    openArticle,
    closeArticleModal,
    formatDate,
    showPopupNotification
} from '/js/shared-utils.js';

import '/js/achievements-system.js';

// Garantir que todas as funções estejam disponíveis globalmente
if (!window.incrementViews) window.incrementViews = incrementViews;
if (!window.incrementPlays) window.incrementPlays = incrementPlays;
if (!window.toggleLike) window.toggleLike = toggleLike;
if (!window.checkIfLiked) window.checkIfLiked = checkIfLiked;
if (!window.toggleFavorite) window.toggleFavorite = toggleFavorite;
if (!window.checkIfFavorited) window.checkIfFavorited = checkIfFavorited;
if (!window.addComment) window.addComment = addComment;
if (!window.loadComments) window.loadComments = loadComments;
if (!window.shareArticle) window.shareArticle = shareArticle;
if (!window.getUserFavorites) window.getUserFavorites = getUserFavorites;
if (!window.renderLikeButton) window.renderLikeButton = renderLikeButton;
if (!window.renderFavoriteButton) window.renderFavoriteButton = renderFavoriteButton;
if (!window.renderCommentsSection) window.renderCommentsSection = renderCommentsSection;
if (!window.renderComments) window.renderComments = renderComments;
if (!window.openFavoritesModal) window.openFavoritesModal = openFavoritesModal;
if (!window.closeFavoritesModal) window.closeFavoritesModal = closeFavoritesModal;
if (!window.openArticle) window.openArticle = openArticle;
if (!window.closeArticleModal) window.closeArticleModal = closeArticleModal;
if (!window.formatDate) window.formatDate = formatDate;
if (!window.showPopupNotification) window.showPopupNotification = showPopupNotification;

/**
 * Função unificada para abrir artigos com todas as interações
 */
window.openArticleWithInteractions = async function(articleId, collectionName) {
    try {
        console.log(`📖 Abrindo artigo: ${articleId} da coleção: ${collectionName}`);

        // Incrementa visualizações
        await incrementViews(collectionName, articleId);

        // Usa a função openArticle do shared-utils que já tem toda a lógica
        await openArticle(articleId, collectionName);

    } catch (error) {
        console.error('Erro ao abrir artigo:', error);
        if (window.showPopupNotification) {
            window.showPopupNotification('Erro ao abrir artigo', 'error');
        }
    }
};

/**
 * Handler para botão de favoritos (abrir modal)
 */
window.openFavoritesFromButton = function() {
    openFavoritesModal();
};

/**
 * Renderizar botões de interação para um artigo
 */
window.renderInteractionButtons = async function(articleId, collectionName, articleTitle) {
    const user = window.firebaseAuth?.auth?.currentUser;
    if (!user) {
        return `
            <div class="interaction-buttons" style="display: flex; gap: 0.5rem; align-items: center;">
                <span style="color: rgba(255, 255, 255, 0.5); font-size: 0.9rem;">
                    Faça login para interagir
                </span>
            </div>
        `;
    }

    try {
        // Buscar informações do artigo
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);

        if (!articleSnap.exists()) {
            return '';
        }

        const articleData = articleSnap.data();
        const isLiked = await checkIfLiked(collectionName, articleId);
        const isFavorited = await checkIfFavorited(collectionName, articleId);

        return `
            <div class="interaction-buttons" style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                ${renderLikeButton(collectionName, articleId, articleData.likes || 0, isLiked)}
                ${renderFavoriteButton(collectionName, articleId, articleTitle, isFavorited)}
                <button 
                    onclick="window.shareArticle('${articleTitle.replace(/'/g, "\\'")}', window.location.href)"
                    class="interaction-btn"
                    style="background: rgba(255, 255, 255, 0.1); 
                           border: 2px solid rgba(255, 255, 255, 0.3); 
                           color: white; 
                           padding: 0.5rem 1rem; 
                           border-radius: 20px; 
                           cursor: pointer; 
                           display: inline-flex; 
                           align-items: center; 
                           gap: 0.5rem; 
                           transition: all 0.3s; 
                           font-weight: 600;"
                >
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
        `;
    } catch (error) {
        console.error('Erro ao renderizar botões:', error);
        return '';
    }
};

console.log('✅ Sistema de interações inicializado com sucesso!');