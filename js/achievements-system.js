
/**
 * SISTEMA DE CONQUISTAS - FATOMANIA
 * Gerencia conquistas baseadas em atividades dos usuários
 */

// Definição de todas as conquistas disponíveis
const ACHIEVEMENTS = {
    // 🎮 QUIZZES
    first_quiz: {
        id: 'first_quiz',
        name: 'Iniciante Curioso',
        description: 'Complete seu primeiro quiz',
        icon: '🎯',
        xp: 50,
        category: 'quiz',
        condition: (stats) => stats.quizzes >= 1
    },
    quizzes_10: {
        id: 'quizzes_10',
        name: 'Pensador',
        description: 'Complete 10 quizzes',
        icon: '🧠',
        xp: 100,
        category: 'quiz',
        condition: (stats) => stats.quizzes >= 10
    },
    quizzes_25: {
        id: 'quizzes_25',
        name: 'Estudioso',
        description: 'Complete 25 quizzes',
        icon: '🎓',
        xp: 250,
        category: 'quiz',
        condition: (stats) => stats.quizzes >= 25
    },
    quizzes_50: {
        id: 'quizzes_50',
        name: 'Mestre dos Quizzes',
        description: 'Complete 50 quizzes',
        icon: '💎',
        xp: 500,
        category: 'quiz',
        condition: (stats) => stats.quizzes >= 50
    },
    perfect_quiz: {
        id: 'perfect_quiz',
        name: 'Perfeccionista',
        description: 'Acerte 100% em um quiz',
        icon: '⭐',
        xp: 150,
        category: 'quiz',
        condition: (stats) => stats.perfectQuizzes >= 1
    },

    // 👀 EXPLORAÇÃO
    visit_all: {
        id: 'visit_all',
        name: 'Explorador',
        description: 'Visite todas as 13 seções',
        icon: '🗺️',
        xp: 250,
        category: 'exploration',
        condition: (stats) => stats.sectionsVisited >= 13
    },
    articles_50: {
        id: 'articles_50',
        name: 'Curioso',
        description: 'Leia 50 artigos',
        icon: '🔍',
        xp: 200,
        category: 'exploration',
        condition: (stats) => stats.articlesRead >= 50
    },
    articles_100: {
        id: 'articles_100',
        name: 'Leitor Ávido',
        description: 'Leia 100 artigos',
        icon: '📖',
        xp: 500,
        category: 'exploration',
        condition: (stats) => stats.articlesRead >= 100
    },

    // 💬 INTERAÇÃO SOCIAL
    first_comment: {
        id: 'first_comment',
        name: 'Primeira Voz',
        description: 'Faça seu primeiro comentário',
        icon: '💭',
        xp: 50,
        category: 'social',
        condition: (stats) => stats.comments >= 1
    },
    comments_25: {
        id: 'comments_25',
        name: 'Comunicativo',
        description: 'Publique 25 comentários',
        icon: '🗣️',
        xp: 150,
        category: 'social',
        condition: (stats) => stats.comments >= 25
    },
    likes_50: {
        id: 'likes_50',
        name: 'Apreciador',
        description: 'Curta 50 artigos',
        icon: '❤️',
        xp: 100,
        category: 'social',
        condition: (stats) => stats.likes >= 50
    },

    // 📅 PRESENÇA E SEQUÊNCIA
    first_login: {
        id: 'first_login',
        name: 'Bem-vindo!',
        description: 'Faça seu primeiro login',
        icon: '🎉',
        xp: 25,
        category: 'presence',
        condition: (stats) => stats.totalLogins >= 1
    },
    streak_7: {
        id: 'streak_7',
        name: 'Uma Semana Forte',
        description: '7 dias de login consecutivo',
        icon: '📆',
        xp: 100,
        category: 'presence',
        condition: (stats) => stats.loginStreak >= 7
    },
    streak_30: {
        id: 'streak_30',
        name: 'Sequência de Fogo',
        description: '30 dias consecutivos',
        icon: '🔥',
        xp: 500,
        category: 'presence',
        condition: (stats) => stats.loginStreak >= 30
    },
    streak_90: {
        id: 'streak_90',
        name: 'Disciplinado',
        description: '90 dias consecutivos',
        icon: '💪',
        xp: 1500,
        category: 'presence',
        condition: (stats) => stats.loginStreak >= 90
    },

    // 📊 PONTOS XP
    xp_100: {
        id: 'xp_100',
        name: 'Crescendo',
        description: 'Alcance 100 pontos',
        icon: '🌱',
        xp: 50,
        category: 'xp',
        condition: (stats) => stats.totalXP >= 100
    },
    xp_500: {
        id: 'xp_500',
        name: 'Decolando',
        description: 'Alcance 500 pontos',
        icon: '🚀',
        xp: 100,
        category: 'xp',
        condition: (stats) => stats.totalXP >= 500
    },
    xp_1000: {
        id: 'xp_1000',
        name: 'Estrela em Ascensão',
        description: 'Alcance 1.000 pontos',
        icon: '⭐',
        xp: 250,
        category: 'xp',
        condition: (stats) => stats.totalXP >= 1000
    }
};

/**
 * Verificar e desbloquear conquistas
 */
export async function checkAndUnlockAchievements(userId, userStats) {
    try {
        const userRef = window.firebaseDB.doc(window.firebaseDB.db, 'users', userId);
        const userSnap = await window.firebaseDB.getDoc(userRef);
        
        if (!userSnap.exists()) return [];

        const userData = userSnap.data();
        const unlockedAchievements = userData.achievements || [];
        const newlyUnlocked = [];

        // Verificar cada conquista
        for (const [key, achievement] of Object.entries(ACHIEVEMENTS)) {
            // Pular se já desbloqueada
            if (unlockedAchievements.some(a => a.id === achievement.id)) continue;

            // Verificar condição
            if (achievement.condition(userStats)) {
                const unlockedAchievement = {
                    ...achievement,
                    unlockedAt: new Date().toISOString()
                };

                newlyUnlocked.push(unlockedAchievement);

                // Adicionar XP
                await window.firebaseDB.updateDoc(userRef, {
                    achievements: window.firebaseDB.arrayUnion(unlockedAchievement),
                    totalXP: window.firebaseDB.increment(achievement.xp)
                });

                console.log(`🏆 Conquista desbloqueada: ${achievement.name} (+${achievement.xp} XP)`);
            }
        }

        return newlyUnlocked;
    } catch (error) {
        console.error('Erro ao verificar conquistas:', error);
        return [];
    }
}

/**
 * Calcular estatísticas do usuário
 */
export async function calculateUserStats(userId) {
    try {
        const userRef = window.firebaseDB.doc(window.firebaseDB.db, 'users', userId);
        const userSnap = await window.firebaseDB.getDoc(userRef);
        
        if (!userSnap.exists()) return null;

        const userData = userSnap.data();

        // Contar quizzes
        const quizResultsQuery = window.firebaseDB.query(
            window.firebaseDB.collection(window.firebaseDB.db, 'quiz-results'),
            window.firebaseDB.where('userId', '==', userId)
        );
        const quizResults = await window.firebaseDB.getDocs(quizResultsQuery);
        
        let quizzes = 0;
        let perfectQuizzes = 0;
        quizResults.forEach(doc => {
            quizzes++;
            const data = doc.data();
            if (data.score === 100) perfectQuizzes++;
        });

        // Contar artigos lidos (views)
        const articlesRead = userData.articlesRead || 0;

        // Contar comentários
        const comments = userData.totalComments || 0;

        // Contar likes
        const likes = userData.totalLikes || 0;

        // Seções visitadas
        const sectionsVisited = (userData.sectionsVisited || []).length;

        // Login streak
        const loginStreak = userData.loginStreak || 0;
        const totalLogins = userData.totalLogins || 0;

        // Total XP
        const totalXP = userData.totalXP || 0;

        return {
            quizzes,
            perfectQuizzes,
            articlesRead,
            comments,
            likes,
            sectionsVisited,
            loginStreak,
            totalLogins,
            totalXP
        };
    } catch (error) {
        console.error('Erro ao calcular estatísticas:', error);
        return null;
    }
}

/**
 * Atualizar sequência de login (streak)
 */
export async function updateLoginStreak(userId) {
    try {
        const userRef = window.firebaseDB.doc(window.firebaseDB.db, 'users', userId);
        const userSnap = await window.firebaseDB.getDoc(userRef);
        
        if (!userSnap.exists()) return 0;

        const userData = userSnap.data();
        const lastLogin = userData.lastLogin?.toDate ? userData.lastLogin.toDate() : new Date(userData.lastLogin || Date.now());
        const now = new Date();

        // Resetar horas para comparação de dias
        const lastLoginDate = new Date(lastLogin.getFullYear(), lastLogin.getMonth(), lastLogin.getDate());
        const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        
        const daysDiff = Math.floor((todayDate - lastLoginDate) / (1000 * 60 * 60 * 24));

        let newStreak = userData.loginStreak || 0;

        if (daysDiff === 0) {
            // Mesmo dia, não atualiza streak
            return newStreak;
        } else if (daysDiff === 1) {
            // Dia consecutivo, incrementa
            newStreak += 1;
        } else {
            // Quebrou a sequência, reseta
            newStreak = 1;
        }

        // Atualizar no Firebase
        await window.firebaseDB.updateDoc(userRef, {
            loginStreak: newStreak,
            lastLogin: window.firebaseDB.serverTimestamp(),
            totalLogins: window.firebaseDB.increment(1)
        });

        console.log(`🔥 Login streak: ${newStreak} dias`);
        return newStreak;

    } catch (error) {
        console.error('Erro ao atualizar streak:', error);
        return 0;
    }
}

/**
 * Incrementar contador de atividade
 */
export async function incrementActivityCounter(userId, activity) {
    try {
        const userRef = window.firebaseDB.doc(window.firebaseDB.db, 'users', userId);
        
        const updates = {};
        
        switch(activity) {
            case 'article-read':
                updates.articlesRead = window.firebaseDB.increment(1);
                break;
            case 'comment':
                updates.totalComments = window.firebaseDB.increment(1);
                break;
            case 'like':
                updates.totalLikes = window.firebaseDB.increment(1);
                break;
            case 'quiz':
                updates.totalQuizzes = window.firebaseDB.increment(1);
                break;
        }

        if (Object.keys(updates).length > 0) {
            await window.firebaseDB.updateDoc(userRef, updates);
        }

    } catch (error) {
        console.error('Erro ao incrementar contador:', error);
    }
}

/**
 * Adicionar seção visitada
 */
export async function addVisitedSection(userId, sectionId) {
    try {
        const userRef = window.firebaseDB.doc(window.firebaseDB.db, 'users', userId);
        const userSnap = await window.firebaseDB.getDoc(userRef);
        
        if (!userSnap.exists()) return;

        const sectionsVisited = userSnap.data().sectionsVisited || [];
        
        if (!sectionsVisited.includes(sectionId)) {
            await window.firebaseDB.updateDoc(userRef, {
                sectionsVisited: window.firebaseDB.arrayUnion(sectionId)
            });
        }
    } catch (error) {
        console.error('Erro ao adicionar seção visitada:', error);
    }
}

/**
 * Mostrar popup de conquista
 */
export function showAchievementPopup(achievement) {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: 3px solid gold;
        border-radius: 20px;
        padding: 2rem;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        text-align: center;
        color: white;
        font-family: 'Rajdhani', sans-serif;
        animation: achievementPopIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        max-width: 400px;
    `;

    popup.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem; animation: achievementBounce 1s infinite;">${achievement.icon}</div>
        <h2 style="margin: 0 0 0.5rem 0; font-family: 'Orbitron', sans-serif; font-size: 1.8rem;">🏆 Conquista Desbloqueada!</h2>
        <h3 style="margin: 0 0 1rem 0; color: gold; font-size: 1.5rem;">${achievement.name}</h3>
        <p style="margin: 0 0 1rem 0; opacity: 0.9;">${achievement.description}</p>
        <div style="background: rgba(255, 255, 255, 0.2); border-radius: 15px; padding: 0.75rem; margin-bottom: 1rem;">
            <span style="font-weight: bold; font-size: 1.3rem;">+${achievement.xp} XP</span>
        </div>
        <button onclick="this.parentElement.remove()" style="background: rgba(255, 255, 255, 0.3); border: 2px solid white; color: white; padding: 0.75rem 2rem; border-radius: 25px; cursor: pointer; font-weight: bold; font-size: 1.1rem; transition: all 0.3s;">
            Continuar
        </button>
    `;

    // Adicionar estilos de animação
    if (!document.getElementById('achievement-styles')) {
        const style = document.createElement('style');
        style.id = 'achievement-styles';
        style.textContent = `
            @keyframes achievementPopIn {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            @keyframes achievementBounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(popup);

    // Auto-remover após 10 segundos
    setTimeout(() => {
        if (document.body.contains(popup)) {
            popup.style.animation = 'achievementPopIn 0.3s reverse';
            setTimeout(() => popup.remove(), 300);
        }
    }, 10000);

    // Som de conquista (opcional)
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDGH0fPTgjMGHm7A7+OZRQ0PVq3n77FYGQpDm9/ww3AiBDaM0/LSfjEGIXTE8uGVRw0RW7Dp8LJZHQ1Emtr0xnMjBTeP1PPUgzQGJHnI8t+UR0kPVa');
        audio.volume = 0.3;
        audio.play().catch(() => {});
    } catch (e) {}
}

// Exportar funções globalmente
window.checkAndUnlockAchievements = checkAndUnlockAchievements;
window.calculateUserStats = calculateUserStats;
window.updateLoginStreak = updateLoginStreak;
window.incrementActivityCounter = incrementActivityCounter;
window.addVisitedSection = addVisitedSection;
window.showAchievementPopup = showAchievementPopup;

export { ACHIEVEMENTS };
