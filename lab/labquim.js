// Inicialização das partículas químicas
document.addEventListener('DOMContentLoaded', () => {
    createChemistryParticles();
    setupSectionNavigation();
    console.log('🧪 Laboratório de Química inicializado com navegação funcional');
});

// Criar partículas químicas animadas
function createChemistryParticles() {
    const particlesContainer = document.getElementById('chemistryParticles');
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'molecule-particle';
        
        // Propriedades aleatórias para cada partícula
        const size = Math.random() * 10 + 6;
        const x = Math.random() * 100;
        const duration = Math.random() * 12 + 18;
        const delay = Math.random() * 5;
        
        // Cores aleatórias baseadas no tema da química
        const colors = ['#f72585', '#e91e63', '#ff006e', '#c77dff'];
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

// Configurar navegação das seções
function setupSectionNavigation() {
    // Adicionar event listeners para todos os botões de seção
    const sectionButtons = document.querySelectorAll('.section-button');
    
    sectionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Adicionar efeito visual de clique
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                if (button.contains(ripple)) {
                    button.removeChild(ripple);
                }
            }, 600);
        });
    });
    
    // Adicionar efeitos de hover nos cards
    const sectionCards = document.querySelectorAll('.section-card');
    
    sectionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Efeito de partículas no hover
            createHoverParticles(card);
        });
        
        card.addEventListener('click', (e) => {
            const button = card.querySelector('.section-button');
            if (button && !e.target.closest('.section-button')) {
                // Se clicou no card mas não no botão, simular clique no botão
                button.click();
            }
        });
    });
}

// Criar partículas no hover dos cards
function createHoverParticles(card) {
    const particleCount = 5;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: #f72585;
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: hoverParticle 1s ease-out forwards;
            z-index: 10;
        `;
        
        card.appendChild(particle);
        
        setTimeout(() => {
            if (card.contains(particle)) {
                card.removeChild(particle);
            }
        }, 1000);
    }
}

// Funções de navegação para compatibilidade com versões anteriores
function navigateToSection(sectionId) {
    const sectionUrls = {
        'reactions': '/lab/reaquim.html',
        'periodic': '/lab/periotab.html',
        'synthesis': '/lab/sin.html',
        'analysis': '/lab/anls.html'
    };
    
    const url = sectionUrls[sectionId];
    if (url) {
        // Efeito de transição antes de navegar
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    const colors = {
        'info': '#4fc3f7',
        'success': '#00e676',
        'warning': '#ffc107',
        'error': '#ff3d00'
    };
    
    notification.style.background = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Adicionar estilos para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes hoverParticle {
        0% {
            transform: scale(0) translateY(0);
            opacity: 1;
        }
        100% {
            transform: scale(1) translateY(-20px);
            opacity: 0;
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
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
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Função para pré-carregar páginas (otimização)
function preloadPages() {
    const pages = [
        'reacoes-quimicas.html',
        'tabela-periodica-3d.html',
        'sintese-compostos.html',
        'analise-molecular.html'
    ];
    
    pages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
    });
}

// Executar pré-carregamento após um delay
setTimeout(preloadPages, 2000);

// Log de inicialização
console.log(`
🧪 LABMANIA - Laboratório de Química
═══════════════════════════════════════
✅ Sistema de navegação ativo
✅ Partículas químicas animadas
✅ Efeitos visuais carregados
✅ Pré-carregamento de páginas
═══════════════════════════════════════
🚀 Laboratório pronto para uso!
`);