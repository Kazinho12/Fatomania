// Inicialização das partículas científicas
document.addEventListener('DOMContentLoaded', () => {
        createScienceParticles();
        console.log('🔬 LABMANIA - Sistema de Laboratórios Científicos inicializado');
});

// Criar partículas científicas animadas
function createScienceParticles() {
        const particlesContainer = document.getElementById('scienceParticles');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'molecule-particle';
                
                // Propriedades aleatórias para cada partícula
                const size = Math.random() * 8 + 4;
                const x = Math.random() * 100;
                const duration = Math.random() * 10 + 15;
                const delay = Math.random() * 5;
                
                // Cores aleatórias baseadas no tema
                const colors = ['#6a00ff', '#f72585', '#00ffaa', '#ff00aa'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                particle.style.cssText = `
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            --duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
                
                particlesContainer.appendChild(particle);
        }
}

// Função para redirecionar para os laboratórios
function redirectToLab(labType) {
        // Animação de clique
        const clickedCard = event.currentTarget;
        clickedCard.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
                clickedCard.style.transform = '';
                
                // Redirecionar baseado no tipo de laboratório
                switch (labType) {
                        case 'physics':
                                window.location.href = '/lab/labfis.html';
                                break;
                        case 'chemistry':
                                window.location.href = '/lab/labquim.html';
                                break;
                        case 'biology':
                                window.location.href = '/lab/lab-bio.html';
                                break;
                        case 'astronomy':
                                window.location.href = '/lab/lab-astro.html';
                                break;
                        default:
                                console.error('Laboratório não encontrado:', labType);
                }
        }, 150);
}

// Animações de hover nos cards
document.querySelectorAll('.lab-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.lab-icon');
                icon.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.lab-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
        });
});

// Animações para os experimentos populares
document.querySelectorAll('.experiment-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.experiment-icon');
                icon.style.transform = 'scale(1.3) rotateY(360deg)';
                icon.style.transition = 'transform 0.6s ease';
        });
        
        card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.experiment-icon');
                icon.style.transform = 'scale(1) rotateY(0deg)';
        });
});

// Sistema de notificações para laboratórios
function showLabNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--fundo-card);
        color: var(--texto);
        padding: 15px 20px;
        border-radius: 10px;
        border-left: 4px solid var(--destaque);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
        
        notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-flask" style="color: var(--destaque);"></i>
            <span>${message}</span>
        </div>
    `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
                notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover após 3 segundos
        setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                        document.body.removeChild(notification);
                }, 300);
        }, 3000);
}

// Simular atividade dos laboratórios
setInterval(() => {
        const activities = [
                '🧪 Novo experimento iniciado no Lab de Química',
                '⚡ Simulação de campo magnético ativa na Física',
                '🔬 Análise microscópica em andamento na Biologia',
                '🌌 Observação de nebulosa detectada na Astronomia'
        ];
        
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        
        // Chance de 30% de mostrar notificação
        if (Math.random() < 0.3) {
                showLabNotification(randomActivity);
        }
}, 10000); // A cada 10 segundos

// Estatísticas dos laboratórios (simuladas)
const labStats = {
        physics: {
                experiments: 156,
                activeUsers: 234,
                completionRate: 87
        },
        chemistry: {
                experiments: 198,
                activeUsers: 189,
                completionRate: 92
        },
        biology: {
                experiments: 143,
                activeUsers: 267,
                completionRate: 89
        },
        astronomy: {
                experiments: 89,
                activeUsers: 145,
                completionRate: 94
        }
};

// Função para mostrar estatísticas (pode ser chamada para debug)
window.showLabStats = function() {
        console.table(labStats);
};

// Sistema de conquistas (placeholder)
const achievements = [
        { id: 1, name: 'Primeiro Experimento', description: 'Complete seu primeiro experimento', unlocked: false },
        { id: 2, name: 'Cientista Dedicado', description: 'Complete 10 experimentos', unlocked: false },
        { id: 3, name: 'Mestre dos Laboratórios', description: 'Visite todos os 4 laboratórios', unlocked: false },
        { id: 4, name: 'Descobridor', description: 'Encontre um resultado inesperado', unlocked: false }
];

// Função para desbloquear conquista
function unlockAchievement(achievementId) {
        const achievement = achievements.find(a => a.id === achievementId);
        if (achievement && !achievement.unlocked) {
                achievement.unlocked = true;
                showLabNotification(`🏆 Conquista desbloqueada: ${achievement.name}`, 'achievement');
        }
}

// Salvar progresso no localStorage
function saveProgress() {
        localStorage.setItem('labmania_progress', JSON.stringify({
                achievements: achievements,
                lastVisit: new Date().toISOString()
        }));
}

// Carregar progresso do localStorage
function loadProgress() {
        const saved = localStorage.getItem('labmania_progress');
        if (saved) {
                const progress = JSON.parse(saved);
                // Aplicar progresso carregado
                console.log('Progresso carregado:', progress);
        }
}

// Inicializar progresso
loadProgress();

// Salvar progresso quando a página for fechada
window.addEventListener('beforeunload', saveProgress);