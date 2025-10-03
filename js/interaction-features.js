// Funcionalidades interativas compartilhadas para todas as páginas mania
// Curtir, comentar, favoritar, compartilhar e visualizações

/**
 * Adicionar ou remover curtida em um artigo
 */
export async function toggleLike(articleId, collectionName) {
    try {
        const user = window.firebaseAuth.auth.currentUser;
        if (!user) {
            showNotification('Faça login para curtir artigos', 'warning');
            return;
        }

        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) {
            showNotification('Artigo não encontrado', 'error');
            return;
        }

        const articleData = articleSnap.data();
        const likedBy = articleData.likedBy || [];
        const hasLiked = likedBy.includes(user.uid);

        if (hasLiked) {
            // Remove curtida
            await window.firebaseDB.updateDoc(articleRef, {
                likes: window.firebaseDB.increment(-1),
                likedBy: likedBy.filter(id => id !== user.uid)
            });
            showNotification('Curtida removida', 'info');
            return false;
        } else {
            // Adiciona curtida
            await window.firebaseDB.updateDoc(articleRef, {
                likes: window.firebaseDB.increment(1),
                likedBy: [...likedBy, user.uid]
            });
            showNotification('Artigo curtido!', 'success');
            return true;
        }
    } catch (error) {
        console.error('Erro ao curtir artigo:', error);
        showNotification('Erro ao curtir artigo', 'error');
        return null;
    }
}

/**
 * Adicionar comentário a um artigo
 */
export async function addComment(articleId, collectionName, commentText) {
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

        const articleData = articleSnap.data();
        const comments = articleData.comments || [];
        
        const newComment = {
            id: Date.now().toString(),
            userId: user.uid,
            userName: user.displayName || user.email.split('@')[0],
            userAvatar: user.photoURL || null,
            text: commentText.trim(),
            createdAt: new Date().toISOString(),
            likes: 0
        };

        await window.firebaseDB.updateDoc(articleRef, {
            comments: [...comments, newComment]
        });

        showNotification('Comentário adicionado!', 'success');
        return newComment;
    } catch (error) {
        console.error('Erro ao adicionar comentário:', error);
        showNotification('Erro ao adicionar comentário', 'error');
        return null;
    }
}

/**
 * Adicionar ou remover artigo dos favoritos
 */
export async function toggleFavorite(articleId, collectionName) {
    try {
        const user = window.firebaseAuth.auth.currentUser;
        if (!user) {
            showNotification('Faça login para favoritar', 'warning');
            return;
        }

        const userRef = window.firebaseDB.doc(window.firebaseDB.db, 'users', user.uid);
        const userSnap = await window.firebaseDB.getDoc(userRef);
        
        let userData = userSnap.exists() ? userSnap.data() : {};
        const favorites = userData.favorites || [];
        const favoriteKey = `${collectionName}:${articleId}`;
        const hasFavorited = favorites.includes(favoriteKey);

        if (hasFavorited) {
            // Remove dos favoritos
            await window.firebaseDB.updateDoc(userRef, {
                favorites: favorites.filter(fav => fav !== favoriteKey)
            });
            showNotification('Removido dos favoritos', 'info');
            return false;
        } else {
            // Adiciona aos favoritos
            await window.firebaseDB.updateDoc(userRef, {
                favorites: [...favorites, favoriteKey]
            });
            showNotification('Adicionado aos favoritos!', 'success');
            return true;
        }
    } catch (error) {
        console.error('Erro ao favoritar:', error);
        showNotification('Erro ao favoritar artigo', 'error');
        return null;
    }
}

/**
 * Compartilhar artigo
 */
export async function shareArticle(articleTitle, articleUrl) {
    try {
        if (navigator.share) {
            // Usa Web Share API se disponível
            await navigator.share({
                title: articleTitle,
                text: `Confira este artigo incrível: ${articleTitle}`,
                url: articleUrl || window.location.href
            });
            showNotification('Artigo compartilhado!', 'success');
        } else {
            // Fallback: copia link para clipboard
            const fullUrl = articleUrl || window.location.href;
            await navigator.clipboard.writeText(fullUrl);
            showNotification('Link copiado para área de transferência!', 'success');
        }
    } catch (error) {
        console.error('Erro ao compartilhar:', error);
        if (error.name !== 'AbortError') {
            showNotification('Erro ao compartilhar artigo', 'error');
        }
    }
}

/**
 * Verificar se usuário curtiu o artigo
 */
export async function checkIfLiked(articleId, collectionName) {
    try {
        const user = window.firebaseAuth.auth.currentUser;
        if (!user) return false;

        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) return false;

        const articleData = articleSnap.data();
        const likedBy = articleData.likedBy || [];
        return likedBy.includes(user.uid);
    } catch (error) {
        console.error('Erro ao verificar curtida:', error);
        return false;
    }
}

/**
 * Verificar se artigo está nos favoritos
 */
export async function checkIfFavorited(articleId, collectionName) {
    try {
        const user = window.firebaseAuth.auth.currentUser;
        if (!user) return false;

        const userRef = window.firebaseDB.doc(window.firebaseDB.db, 'users', user.uid);
        const userSnap = await window.firebaseDB.getDoc(userRef);
        
        if (!userSnap.exists()) return false;

        const userData = userSnap.data();
        const favorites = userData.favorites || [];
        const favoriteKey = `${collectionName}:${articleId}`;
        return favorites.includes(favoriteKey);
    } catch (error) {
        console.error('Erro ao verificar favorito:', error);
        return false;
    }
}

/**
 * Carregar comentários de um artigo
 */
export async function loadComments(articleId, collectionName) {
    try {
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) return [];

        const articleData = articleSnap.data();
        return articleData.comments || [];
    } catch (error) {
        console.error('Erro ao carregar comentários:', error);
        return [];
    }
}

/**
 * Exibir notificação
 */
function showNotification(message, type = 'info') {
    // Cria container de notificações se não existir
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

    // Cria notificação
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

    // Adiciona animação CSS
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    container.appendChild(notification);

    // Remove após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);

    // Remove ao clicar
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
}
