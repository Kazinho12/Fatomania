/**
 * MODAL DE FAVORITOS - FATOMANIA
 * Exibe lista completa de artigos favoritados pelo usuário
 */

/**
 * Criar e abrir modal de favoritos
 */
export async function openFavoritesModal() {
    const user = window.firebaseAuth.auth.currentUser;
    
    if (!user) {
        if (window.showPopupNotification) {
            window.showPopupNotification('Faça login para ver seus favoritos', 'warning');
        }
        return;
    }

    // Criar modal se não existir
    let modal = document.getElementById('favoritesModal');
    if (!modal) {
        modal = createFavoritesModal();
        document.body.appendChild(modal);
    }

    // Mostrar loading
    const favoritesContainer = modal.querySelector('.favorites-container');
    favoritesContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem;">
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: var(--azul, #00f7ff);"></i>
            <p style="margin-top: 1rem;">Carregando favoritos...</p>
        </div>
    `;

    // Abrir modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Carregar favoritos
    try {
        const favorites = await window.getUserFavorites();
        
        if (favorites.length === 0) {
            favoritesContainer.innerHTML = `
                <div style="text-align: center; padding: 3rem;">
                    <i class="fas fa-bookmark" style="font-size: 4rem; color: var(--azul, #00f7ff); opacity: 0.3;"></i>
                    <h3 style="margin-top: 1rem; color: var(--azul, #00f7ff);">Nenhum favorito ainda</h3>
                    <p style="color: rgba(255, 255, 255, 0.6); margin-top: 0.5rem;">
                        Comece a favoritar artigos para vê-los aqui
                    </p>
                </div>
            `;
            return;
        }

        // Buscar detalhes dos artigos favoritados
        const favoriteArticles = await Promise.all(
            favorites.map(async (fav) => {
                try {
                    const articleRef = window.firebaseDB.doc(window.firebaseDB.db, fav.collection, fav.id);
                    const articleSnap = await window.firebaseDB.getDoc(articleRef);
                    
                    if (articleSnap.exists()) {
                        return {
                            ...fav,
                            ...articleSnap.data(),
                            exists: true
                        };
                    }
                    return { ...fav, exists: false };
                } catch (error) {
                    console.error('Erro ao carregar favorito:', error);
                    return { ...fav, exists: false };
                }
            })
        );

        // Renderizar favoritos
        renderFavorites(favoriteArticles, favoritesContainer);

    } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
        favoritesContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: #ff3d00;"></i>
                <p style="margin-top: 1rem;">Erro ao carregar favoritos</p>
            </div>
        `;
    }
}

/**
 * Criar estrutura do modal
 */
function createFavoritesModal() {
    const modal = document.createElement('div');
    modal.id = 'favoritesModal';
    modal.className = 'modal';
    modal.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10000;
        overflow-y: auto;
    `;

    modal.innerHTML = `
        <div class="favorites-modal-content" style="
            max-width: 1000px;
            margin: 2rem auto;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            border-radius: 20px;
            padding: 2rem;
            position: relative;
            box-shadow: 0 10px 40px rgba(0, 247, 255, 0.3);
        ">
            <button class="modal-close" onclick="closeFavoritesModal()" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: rgba(255, 255, 255, 0.1);
                border: 2px solid rgba(255, 255, 255, 0.3);
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s;
            ">
                <i class="fas fa-times"></i>
            </button>

            <h2 style="
                font-family: 'Orbitron', sans-serif;
                color: var(--azul, #00f7ff);
                margin-bottom: 2rem;
                font-size: 2rem;
                display: flex;
                align-items: center;
                gap: 1rem;
            ">
                <i class="fas fa-bookmark"></i>
                Meus Favoritos
            </h2>

            <div class="favorites-container"></div>
        </div>
    `;

    // Fechar ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeFavoritesModal();
        }
    });

    return modal;
}

/**
 * Renderizar lista de favoritos
 */
function renderFavorites(favorites, container) {
    const validFavorites = favorites.filter(fav => fav.exists);
    
    if (validFavorites.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <i class="fas fa-trash" style="font-size: 3rem; color: rgba(255, 255, 255, 0.3);"></i>
                <p style="margin-top: 1rem;">Alguns favoritos foram removidos</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="favorites-grid" style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        ">
            ${validFavorites.map(fav => `
                <div class="favorite-card" style="
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 15px;
                    overflow: hidden;
                    border: 2px solid rgba(0, 247, 255, 0.2);
                    transition: all 0.3s;
                    cursor: pointer;
                " 
                onmouseover="this.style.borderColor='var(--azul, #00f7ff)'; this.style.transform='translateY(-5px)'"
                onmouseout="this.style.borderColor='rgba(0, 247, 255, 0.2)'; this.style.transform='translateY(0)'"
                onclick="openArticleFromFavorite('${fav.collection}', '${fav.id}')">
                    ${fav.imageUrl ? `
                        <div style="
                            height: 180px;
                            background-image: url('${fav.imageUrl}');
                            background-size: cover;
                            background-position: center;
                        "></div>
                    ` : `
                        <div style="
                            height: 180px;
                            background: linear-gradient(135deg, var(--roxo, #6a00ff), var(--azul, #00f7ff));
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        ">
                            <i class="fas fa-image" style="font-size: 3rem; color: rgba(255, 255, 255, 0.3);"></i>
                        </div>
                    `}
                    
                    <div style="padding: 1.5rem;">
                        <h3 style="
                            color: var(--azul, #00f7ff);
                            margin-bottom: 0.5rem;
                            font-size: 1.2rem;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                        ">${fav.title}</h3>
                        
                        <p style="
                            color: rgba(255, 255, 255, 0.7);
                            font-size: 0.9rem;
                            margin-bottom: 1rem;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                        ">${fav.summary || fav.excerpt || fav.content?.substring(0, 100) || 'Sem descrição'}</p>
                        
                        <div style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            font-size: 0.85rem;
                            color: rgba(255, 255, 255, 0.5);
                        ">
                            <span>
                                <i class="fas fa-heart"></i> ${fav.likes || 0}
                            </span>
                            <button 
                                onclick="event.stopPropagation(); removeFavorite('${fav.collection}', '${fav.id}')"
                                style="
                                    background: rgba(255, 61, 0, 0.2);
                                    border: 1px solid #ff3d00;
                                    color: #ff3d00;
                                    padding: 0.3rem 0.8rem;
                                    border-radius: 15px;
                                    cursor: pointer;
                                    transition: all 0.3s;
                                "
                                onmouseover="this.style.background='#ff3d00'; this.style.color='white'"
                                onmouseout="this.style.background='rgba(255, 61, 0, 0.2)'; this.style.color='#ff3d00'"
                            >
                                <i class="fas fa-trash"></i> Remover
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

/**
 * Fechar modal de favoritos
 */
export function closeFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/**
 * Abrir artigo a partir do favorito
 */
window.openArticleFromFavorite = async function(collectionName, articleId) {
    closeFavoritesModal();
    
    // Aguarda um momento para fechar o modal antes de abrir o artigo
    setTimeout(async () => {
        if (window.openArticle) {
            await window.openArticle(articleId, collectionName);
        } else {
            console.error('Função openArticle não disponível');
        }
    }, 300);
};

/**
 * Remover favorito
 */
window.removeFavorite = async function(collectionName, articleId) {
    if (window.toggleFavorite) {
        const result = await window.toggleFavorite(collectionName, articleId, '');
        if (result && !result.favorited) {
            // Reabrir modal para atualizar lista
            setTimeout(() => {
                openFavoritesModal();
            }, 500);
        }
    }
};

// Adicionar CSS do modal ao documento
const style = document.createElement('style');
style.textContent = `
    #favoritesModal.active {
        display: block !important;
    }

    .modal-close:hover {
        background: rgba(255, 255, 255, 0.2) !important;
        border-color: #ff3d00 !important;
        color: #ff3d00 !important;
        transform: rotate(90deg);
    }

    @media (max-width: 768px) {
        .favorites-grid {
            grid-template-columns: 1fr !important;
        }

        .favorites-modal-content {
            margin: 1rem !important;
            padding: 1.5rem !important;
        }
    }
`;
document.head.appendChild(style);

// Exportar funções globalmente
window.openFavoritesModal = openFavoritesModal;
window.closeFavoritesModal = closeFavoritesModal;
