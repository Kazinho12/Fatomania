/**
 * SISTEMA MESTRE DE INTERAÇÕES - FATOMANIA
 * Gerencia todas as interações de usuário: likes, comentários, favoritos, compartilhamento e visualizações
 */

/**
 * Incrementar visualizações de artigo
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
 * Incrementar contador de jogadas (para quizzes e labs)
 */
export async function incrementPlays(collectionName, itemId) {
    try {
        const itemRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, itemId);
        await window.firebaseDB.updateDoc(itemRef, {
            plays: window.firebaseDB.increment(1)
        });
        return true;
    } catch (error) {
        console.error('Erro ao incrementar jogadas:', error);
        return false;
    }
}

/**
 * Toggle Like (curtir/descurtir)
 */
export async function toggleLike(collectionName, articleId) {
    try {
        const user = window.firebaseAuth.auth.currentUser;
        if (!user) {
            showNotification('Faça login para curtir', 'warning');
            return null;
        }

        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) {
            showNotification('Artigo não encontrado', 'error');
            return null;
        }
        
        const articleData = articleSnap.data();
        const likedBy = articleData.likedBy || [];
        const isLiked = likedBy.includes(user.uid);
        
        if (isLiked) {
            // Remove like
            await window.firebaseDB.updateDoc(articleRef, {
                likes: window.firebaseDB.increment(-1),
                likedBy: window.firebaseDB.arrayRemove(user.uid)
            });
            showNotification('Curtida removida', 'info');
            return { liked: false, likes: (articleData.likes || 1) - 1 };
        } else {
            // Adiciona like
            await window.firebaseDB.updateDoc(articleRef, {
                likes: window.firebaseDB.increment(1),
                likedBy: window.firebaseDB.arrayUnion(user.uid)
            });
            
            // Incrementar contador de likes e verificar conquistas
            try {
                const { incrementActivityCounter, calculateUserStats, checkAndUnlockAchievements, showAchievementPopup } = await import('/js/achievements-system.js');
                await incrementActivityCounter(user.uid, 'like');
                
                const stats = await calculateUserStats(user.uid);
                if (stats) {
                    const newAchievements = await checkAndUnlockAchievements(user.uid, stats);
                    for (const achievement of newAchievements) {
                        setTimeout(() => showAchievementPopup(achievement), 500);
                    }
                }
            } catch (e) {
                console.warn('Erro ao verificar conquistas:', e);
            }
            
            showNotification('Artigo curtido!', 'success');
            return { liked: true, likes: (articleData.likes || 0) + 1 };
        }
    } catch (error) {
        console.error('Erro ao gerenciar like:', error);
        showNotification('Erro ao curtir artigo', 'error');
        return null;
    }
}

/**
 * Verificar se usuário curtiu
 */
export async function checkIfLiked(collectionName, articleId) {
    try {
        const user = window.firebaseAuth.auth.currentUser;
        if (!user) return false;

        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) return false;
        
        const likedBy = articleSnap.data().likedBy || [];
        return likedBy.includes(user.uid);
    } catch (error) {
        console.error('Erro ao verificar like:', error);
        return false;
    }
}

/**
 * Toggle Favorito
 */
export async function toggleFavorite(collectionName, articleId, articleTitle) {
    try {
        const user = window.firebaseAuth.auth.currentUser;
        if (!user) {
            showNotification('Faça login para favoritar', 'warning');
            return null;
        }

        const userRef = window.firebaseDB.doc(window.firebaseDB.db, 'users', user.uid);
        const userSnap = await window.firebaseDB.getDoc(userRef);
        
        let userData = {};
        if (userSnap.exists()) {
            userData = userSnap.data();
        }
        
        const favorites = userData.favorites || [];
        const favoriteItem = {
            id: articleId,
            collection: collectionName,
            title: articleTitle,
            addedAt: new Date().toISOString()
        };
        
        const isFavorited = favorites.some(fav => fav.id === articleId && fav.collection === collectionName);
        
        if (isFavorited) {
            // Remove dos favoritos
            const updatedFavorites = favorites.filter(fav => !(fav.id === articleId && fav.collection === collectionName));
            await window.firebaseDB.updateDoc(userRef, {
                favorites: updatedFavorites
            });
            showNotification('Removido dos favoritos', 'info');
            return { favorited: false };
        } else {
            // Adiciona aos favoritos
            const updatedFavorites = [...favorites, favoriteItem];
            
            if (userSnap.exists()) {
                await window.firebaseDB.updateDoc(userRef, {
                    favorites: updatedFavorites
                });
            } else {
                await window.firebaseDB.setDoc(userRef, {
                    favorites: updatedFavorites,
                    email: user.email,
                    displayName: user.displayName || user.email.split('@')[0],
                    createdAt: new Date().toISOString()
                });
            }
            
            showNotification('Adicionado aos favoritos!', 'success');
            return { favorited: true };
        }
    } catch (error) {
        console.error('Erro ao favoritar:', error);
        showNotification('Erro ao gerenciar favorito', 'error');
        return null;
    }
}

/**
 * Verificar se está favoritado
 */
export async function checkIfFavorited(collectionName, articleId) {
    try {
        const user = window.firebaseAuth.auth.currentUser;
        if (!user) return false;

        const userRef = window.firebaseDB.doc(window.firebaseDB.db, 'users', user.uid);
        const userSnap = await window.firebaseDB.getDoc(userRef);
        
        if (!userSnap.exists()) return false;
        
        const favorites = userSnap.data().favorites || [];
        return favorites.some(fav => fav.id === articleId && fav.collection === collectionName);
    } catch (error) {
        console.error('Erro ao verificar favorito:', error);
        return false;
    }
}

/**
 * Adicionar comentário
 */
export async function addComment(collectionName, articleId, commentText) {
    try {
        const user = window.firebaseAuth.auth.currentUser;
        if (!user) {
            showNotification('Faça login para comentar', 'warning');
            return null;
        }

        if (!commentText || commentText.trim().length === 0) {
            showNotification('Digite um comentário', 'warning');
            return null;
        }

        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) {
            showNotification('Artigo não encontrado', 'error');
            return null;
        }

        const comment = {
            id: Date.now().toString(),
            userId: user.uid,
            userName: user.displayName || user.email.split('@')[0],
            userAvatar: user.photoURL || null,
            text: commentText.trim(),
            createdAt: new Date().toISOString(),
            likes: 0
        };

        await window.firebaseDB.updateDoc(articleRef, {
            comments: window.firebaseDB.arrayUnion(comment)
        });

        // Incrementar contador de comentários e verificar conquistas
        try {
            const { incrementActivityCounter, calculateUserStats, checkAndUnlockAchievements, showAchievementPopup } = await import('/js/achievements-system.js');
            await incrementActivityCounter(user.uid, 'comment');
            
            const stats = await calculateUserStats(user.uid);
            if (stats) {
                const newAchievements = await checkAndUnlockAchievements(user.uid, stats);
                for (const achievement of newAchievements) {
                    setTimeout(() => showAchievementPopup(achievement), 500);
                }
            }
        } catch (e) {
            console.warn('Erro ao verificar conquistas:', e);
        }

        showNotification('Comentário adicionado!', 'success');
        return comment;
    } catch (error) {
        console.error('Erro ao adicionar comentário:', error);
        showNotification('Erro ao publicar comentário', 'error');
        return null;
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
        
        return articleSnap.data().comments || [];
    } catch (error) {
        console.error('Erro ao carregar comentários:', error);
        return [];
    }
}

/**
 * Compartilhar artigo
 */
export async function shareArticle(articleTitle, articleUrl) {
    try {
        const fullUrl = articleUrl || window.location.href;
        
        if (navigator.share) {
            await navigator.share({
                title: articleTitle,
                text: `Confira: ${articleTitle}`,
                url: fullUrl
            });
            showNotification('Artigo compartilhado!', 'success');
        } else {
            await navigator.clipboard.writeText(fullUrl);
            showNotification('Link copiado!', 'success');
        }
    } catch (error) {
        if (error.name !== 'AbortError') {
            console.error('Erro ao compartilhar:', error);
            showNotification('Erro ao compartilhar', 'error');
        }
    }
}

/**
 * Obter favoritos do usuário
 */
export async function getUserFavorites() {
    try {
        const user = window.firebaseAuth.auth.currentUser;
        if (!user) return [];

        const userRef = window.firebaseDB.doc(window.firebaseDB.db, 'users', user.uid);
        const userSnap = await window.firebaseDB.getDoc(userRef);
        
        if (!userSnap.exists()) return [];
        
        return userSnap.data().favorites || [];
    } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
        return [];
    }
}

/**
 * Renderizar botão de like
 */
export function renderLikeButton(collectionName, articleId, initialLikes = 0, initialLiked = false) {
    return `
        <button 
            id="likeBtn-${articleId}" 
            onclick="window.handleLikeClick('${collectionName}', '${articleId}')" 
            class="interaction-btn ${initialLiked ? 'liked' : ''}"
            style="background: ${initialLiked ? 'linear-gradient(45deg, #ff006e, #ff3d00)' : 'rgba(255, 255, 255, 0.1)'}; 
                   border: 2px solid ${initialLiked ? '#ff006e' : 'rgba(255, 255, 255, 0.3)'}; 
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
            <i class="fas fa-heart"></i>
            <span id="likeCount-${articleId}">${initialLikes || 0}</span>
        </button>
    `;
}

/**
 * Renderizar botão de favorito
 */
export function renderFavoriteButton(collectionName, articleId, articleTitle, initialFavorited = false) {
    return `
        <button 
            id="favBtn-${articleId}" 
            onclick="window.handleFavoriteClick('${collectionName}', '${articleId}', '${articleTitle}')" 
            class="interaction-btn ${initialFavorited ? 'favorited' : ''}"
            style="background: ${initialFavorited ? 'linear-gradient(45deg, #ffd700, #ff8c00)' : 'rgba(255, 255, 255, 0.1)'}; 
                   border: 2px solid ${initialFavorited ? '#ffd700' : 'rgba(255, 255, 255, 0.3)'}; 
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
            <i class="fas fa-bookmark"></i>
        </button>
    `;
}

/**
 * Renderizar seção de comentários
 */
export function renderCommentsSection(collectionName, articleId) {
    const user = window.firebaseAuth.auth.currentUser;
    if (!user) {
        return `
            <div class="comments-section" style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid rgba(0, 247, 255, 0.2);">
                <h3 style="color: var(--azul, #00f7ff); margin-bottom: 1rem;">
                    <i class="fas fa-comments"></i> Comentários
                </h3>
                <p style="text-align: center; padding: 2rem; color: rgba(255, 255, 255, 0.6);">
                    Faça login para comentar
                </p>
            </div>
        `;
    }

    const userName = user.displayName || user.email.split('@')[0];
    
    return `
        <div class="comments-section" style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid rgba(0, 247, 255, 0.2);">
            <h3 style="color: var(--azul, #00f7ff); margin-bottom: 1rem;">
                <i class="fas fa-comments"></i> Comentários
            </h3>
            
            <div class="comment-form" style="margin-bottom: 2rem;">
                <textarea 
                    id="commentText-${articleId}" 
                    placeholder="Compartilhe sua opinião..." 
                    style="width: 100%; min-height: 100px; padding: 1rem; border-radius: 10px; border: 2px solid rgba(0, 247, 255, 0.3); background: rgba(0, 0, 0, 0.3); color: white; font-family: inherit; resize: vertical;"
                ></textarea>
                <button 
                    onclick="window.handleCommentSubmit('${collectionName}', '${articleId}')" 
                    style="margin-top: 1rem; background: linear-gradient(45deg, var(--verde, #00ffaa), var(--azul, #00f7ff)); border: none; color: white; padding: 0.8rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600; transition: all 0.3s;"
                >
                    <i class="fas fa-paper-plane"></i> Enviar Comentário
                </button>
            </div>
            
            <div id="commentsList-${articleId}" class="comments-list">
                <div style="text-align: center; padding: 2rem; color: var(--azul, #00f7ff);">
                    <i class="fas fa-spinner fa-spin"></i> Carregando comentários...
                </div>
            </div>
        </div>
    `;
}

/**
 * Renderizar lista de comentários
 */
export function renderComments(comments, listElementId) {
    const listElement = document.getElementById(listElementId);
    if (!listElement) return;
    
    if (comments.length === 0) {
        listElement.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: rgba(255, 255, 255, 0.5);">
                <i class="fas fa-comment-slash" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                <p>Nenhum comentário ainda. Seja o primeiro!</p>
            </div>
        `;
        return;
    }
    
    listElement.innerHTML = comments.map(comment => `
        <div class="comment-item" style="background: rgba(0, 0, 0, 0.3); border-radius: 10px; padding: 1rem; margin-bottom: 1rem; border-left: 4px solid var(--azul, #00f7ff);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(45deg, var(--roxo, #6a00ff), var(--azul, #00f7ff)); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                    ${comment.userName ? comment.userName.charAt(0).toUpperCase() : 'U'}
                </div>
                <div>
                    <div style="font-weight: 600; color: var(--azul, #00f7ff);">${comment.userName || 'Usuário'}</div>
                    <div style="font-size: 0.8rem; opacity: 0.7;">${formatCommentDate(comment.createdAt)}</div>
                </div>
            </div>
            <div style="margin-left: 2.5rem; color: white;">${comment.text}</div>
        </div>
    `).join('');
}

/**
 * Formatar data do comentário
 */
function formatCommentDate(date) {
    if (!date) return 'Agora';
    
    const commentDate = typeof date === 'string' ? new Date(date) : new Date(date.seconds * 1000);
    const now = new Date();
    const diffMs = now - commentDate;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Agora';
    if (diffMins < 60) return `${diffMins}m atrás`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h atrás`;
    
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d atrás`;
    
    return commentDate.toLocaleDateString('pt-BR');
}

/**
 * Sistema de notificações
 */
function showNotification(message, type = 'info') {
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }

    const notification = document.createElement('div');
    notification.style.cssText = `
        background: ${type === 'success' ? 'linear-gradient(135deg, #00e676, #00c853)' : 
                     type === 'error' ? 'linear-gradient(135deg, #ff3d00, #dd2c00)' : 
                     type === 'warning' ? 'linear-gradient(135deg, #ffd700, #ffa500)' : 
                     'linear-gradient(135deg, #00f7ff, #0091ea)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        font-weight: 600;
        animation: slideIn 0.3s ease-out;
        cursor: pointer;
    `;
    notification.textContent = message;

    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(400px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    container.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);

    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
}

// Event Handlers Globais
window.handleLikeClick = async function(collectionName, articleId) {
    const result = await toggleLike(collectionName, articleId);
    if (result) {
        const likeBtn = document.getElementById(`likeBtn-${articleId}`);
        const likeCount = document.getElementById(`likeCount-${articleId}`);
        
        if (likeBtn && likeCount) {
            likeCount.textContent = result.likes;
            
            if (result.liked) {
                likeBtn.classList.add('liked');
                likeBtn.style.background = 'linear-gradient(45deg, #ff006e, #ff3d00)';
                likeBtn.style.borderColor = '#ff006e';
            } else {
                likeBtn.classList.remove('liked');
                likeBtn.style.background = 'rgba(255, 255, 255, 0.1)';
                likeBtn.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }
        }
    }
};

window.handleFavoriteClick = async function(collectionName, articleId, articleTitle) {
    const result = await toggleFavorite(collectionName, articleId, articleTitle);
    if (result) {
        const favBtn = document.getElementById(`favBtn-${articleId}`);
        
        if (favBtn) {
            if (result.favorited) {
                favBtn.classList.add('favorited');
                favBtn.style.background = 'linear-gradient(45deg, #ffd700, #ff8c00)';
                favBtn.style.borderColor = '#ffd700';
            } else {
                favBtn.classList.remove('favorited');
                favBtn.style.background = 'rgba(255, 255, 255, 0.1)';
                favBtn.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }
        }
    }
};

window.handleCommentSubmit = async function(collectionName, articleId) {
    const textArea = document.getElementById(`commentText-${articleId}`);
    const commentText = textArea?.value?.trim();
    
    if (!commentText) {
        showNotification('Digite um comentário', 'warning');
        return;
    }
    
    const comment = await addComment(collectionName, articleId, commentText);
    if (comment) {
        textArea.value = '';
        const comments = await loadComments(collectionName, articleId);
        renderComments(comments, `commentsList-${articleId}`);
    }
};

// Exportar funções globalmente
window.incrementViews = incrementViews;
window.incrementPlays = incrementPlays;
window.toggleLike = toggleLike;
window.checkIfLiked = checkIfLiked;
window.toggleFavorite = toggleFavorite;
window.checkIfFavorited = checkIfFavorited;
window.addComment = addComment;
window.loadComments = loadComments;
window.shareArticle = shareArticle;
window.getUserFavorites = getUserFavorites;
window.renderLikeButton = renderLikeButton;
window.renderFavoriteButton = renderFavoriteButton;
window.renderCommentsSection = renderCommentsSection;
window.renderComments = renderComments;
