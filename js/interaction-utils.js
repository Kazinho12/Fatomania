
// Sistema de Interações - Views, Likes e Comments

/**
 * Incrementa visualizações de um artigo
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
 * Gerencia curtida/descurtida de artigo
 */
export async function toggleLike(collectionName, articleId, userId) {
    try {
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) {
            throw new Error('Artigo não encontrado');
        }
        
        const articleData = articleSnap.data();
        const likedBy = articleData.likedBy || [];
        
        if (likedBy.includes(userId)) {
            // Remove like
            await window.firebaseDB.updateDoc(articleRef, {
                likes: window.firebaseDB.increment(-1),
                likedBy: window.firebaseDB.arrayRemove(userId)
            });
            return { liked: false, likes: (articleData.likes || 0) - 1 };
        } else {
            // Adiciona like
            await window.firebaseDB.updateDoc(articleRef, {
                likes: window.firebaseDB.increment(1),
                likedBy: window.firebaseDB.arrayUnion(userId)
            });
            return { liked: true, likes: (articleData.likes || 0) + 1 };
        }
    } catch (error) {
        console.error('Erro ao gerenciar like:', error);
        throw error;
    }
}

/**
 * Verifica se usuário curtiu artigo
 */
export async function checkIfLiked(collectionName, articleId, userId) {
    try {
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        const articleSnap = await window.firebaseDB.getDoc(articleRef);
        
        if (!articleSnap.exists()) return false;
        
        const likedBy = articleSnap.data().likedBy || [];
        return likedBy.includes(userId);
    } catch (error) {
        console.error('Erro ao verificar like:', error);
        return false;
    }
}

/**
 * Adiciona comentário a um artigo
 */
export async function addComment(collectionName, articleId, commentData) {
    try {
        const comment = {
            ...commentData,
            createdAt: new Date(),
            likes: 0,
            replies: []
        };
        
        const articleRef = window.firebaseDB.doc(window.firebaseDB.db, collectionName, articleId);
        await window.firebaseDB.updateDoc(articleRef, {
            comments: window.firebaseDB.arrayUnion(comment)
        });
        
        return comment;
    } catch (error) {
        console.error('Erro ao adicionar comentário:', error);
        throw error;
    }
}

/**
 * Carrega comentários de um artigo
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
 * Renderiza seção de comentários no modal
 */
export function renderCommentsSection(collectionName, articleId, userId, userName) {
    return `
        <div class="comments-section" style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid rgba(0, 247, 255, 0.2);">
            <h3 style="color: var(--azul, #00f7ff); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-comments"></i> Comentários
            </h3>
            
            <div class="comment-form" style="margin-bottom: 2rem;">
                <textarea 
                    id="commentText-${articleId}" 
                    placeholder="Compartilhe sua opinião..." 
                    style="width: 100%; min-height: 100px; padding: 1rem; border-radius: 10px; border: 2px solid rgba(0, 247, 255, 0.3); background: rgba(0, 0, 0, 0.3); color: white; font-family: inherit; resize: vertical;"
                ></textarea>
                <button 
                    onclick="submitComment('${collectionName}', '${articleId}', '${userId}', '${userName}')" 
                    style="margin-top: 1rem; background: linear-gradient(45deg, var(--verde, #00ffaa), var(--azul, #00f7ff)); border: none; color: white; padding: 0.8rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600; transition: all 0.3s;"
                    onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(0, 255, 170, 0.3)'"
                    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
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
 * Renderiza lista de comentários
 */
export function renderComments(comments, listElementId) {
    const listElement = document.getElementById(listElementId);
    if (!listElement) return;
    
    if (comments.length === 0) {
        listElement.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: rgba(255, 255, 255, 0.5);">
                <i class="fas fa-comment-slash" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                <p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>
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
 * Formata data do comentário
 */
function formatCommentDate(date) {
    if (!date) return 'Agora';
    
    const commentDate = date.seconds ? new Date(date.seconds * 1000) : new Date(date);
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
 * Renderiza botão de like
 */
export function renderLikeButton(collectionName, articleId, userId, initialLikes = 0, initialLiked = false) {
    return `
        <button 
            id="likeBtn-${articleId}" 
            onclick="handleLike('${collectionName}', '${articleId}', '${userId}')" 
            style="background: ${initialLiked ? 'linear-gradient(45deg, #ff006e, #ff3d00)' : 'rgba(255, 255, 255, 0.1)'}; border: 2px solid ${initialLiked ? '#ff006e' : 'rgba(255, 255, 255, 0.3)'}; color: white; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem; transition: all 0.3s; font-weight: 600;"
            onmouseover="if(!this.classList.contains('liked')) { this.style.borderColor='var(--rosa, #ff006e)'; this.style.background='rgba(255, 0, 110, 0.2)'; }"
            onmouseout="if(!this.classList.contains('liked')) { this.style.borderColor='rgba(255, 255, 255, 0.3)'; this.style.background='rgba(255, 255, 255, 0.1)'; }"
            class="${initialLiked ? 'liked' : ''}"
        >
            <i class="fas fa-heart"></i>
            <span id="likeCount-${articleId}">${initialLikes || 0}</span>
        </button>
    `;
}

// Funções globais
window.submitComment = async function(collectionName, articleId, userId, userName) {
    const textArea = document.getElementById(`commentText-${articleId}`);
    const commentText = textArea?.value?.trim();
    
    if (!commentText) {
        window.showPopupNotification('Digite um comentário', 'warning');
        return;
    }
    
    try {
        const comment = await addComment(collectionName, articleId, {
            text: commentText,
            userId,
            userName
        });
        
        textArea.value = '';
        
        // Recarrega comentários
        const comments = await loadComments(collectionName, articleId);
        renderComments(comments, `commentsList-${articleId}`);
        
        window.showPopupNotification('Comentário publicado!', 'success');
    } catch (error) {
        console.error('Erro ao enviar comentário:', error);
        window.showPopupNotification('Erro ao publicar comentário', 'error');
    }
};

window.handleLike = async function(collectionName, articleId, userId) {
    try {
        const result = await toggleLike(collectionName, articleId, userId);
        
        const likeBtn = document.getElementById(`likeBtn-${articleId}`);
        const likeCount = document.getElementById(`likeCount-${articleId}`);
        
        if (likeBtn && likeCount) {
            likeCount.textContent = result.likes;
            
            if (result.liked) {
                likeBtn.classList.add('liked');
                likeBtn.style.background = 'linear-gradient(45deg, #ff006e, #ff3d00)';
                likeBtn.style.borderColor = '#ff006e';
                window.showPopupNotification('Curtido!', 'success', 1500);
            } else {
                likeBtn.classList.remove('liked');
                likeBtn.style.background = 'rgba(255, 255, 255, 0.1)';
                likeBtn.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                window.showPopupNotification('Curtida removida', 'info', 1500);
            }
        }
    } catch (error) {
        console.error('Erro ao curtir:', error);
        window.showPopupNotification('Erro ao curtir artigo', 'error');
    }
};

// Exporta funções
window.incrementViews = incrementViews;
window.toggleLike = toggleLike;
window.checkIfLiked = checkIfLiked;
window.addComment = addComment;
window.loadComments = loadComments;
window.renderCommentsSection = renderCommentsSection;
window.renderComments = renderComments;
window.renderLikeButton = renderLikeButton;
