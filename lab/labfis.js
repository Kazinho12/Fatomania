// Inicialização das partículas físicas
document.addEventListener('DOMContentLoaded', () => {
    createPhysicsParticles();
    console.log('⚛️ Laboratório de Física inicializado');
});

// Criar partículas físicas animadas
function createPhysicsParticles() {
    const particlesContainer = document.getElementById('physicsParticles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'atom-particle';
        
        // Propriedades aleatórias para cada partícula
        const size = Math.random() * 6 + 4;
        const x = Math.random() * 100;
        const duration = Math.random() * 15 + 20;
        const delay = Math.random() * 5;
        
        // Cores aleatórias baseadas no tema da física
        const colors = ['#6a00ff', '#8b5cf6', '#a855f7', '#c084fc'];
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

// Dados das seções do laboratório
const sections = {
    mechanics: {
        title: '🚀 Simulações de Movimento e Forças',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #6a00ff; margin-bottom: 20px;">Laboratório de Mecânica Clássica</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🎯 Movimento Retilíneo Uniformemente Variado</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Equação: s = s₀ + v₀t + ½at²</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Velocidade inicial (m/s)" id="v0" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Aceleração (m/s²)" id="acceleration" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Tempo (s)" id="time" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculateMRUV()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Posição</button>
                    <div id="mruv-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">⚖️ Segunda Lei de Newton</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">F = ma (Força = massa × aceleração)</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Massa (kg)" id="mass" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Aceleração (m/s²)" id="acc-newton" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculateNewton()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Força</button>
                    <div id="newton-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🎪 Movimento Circular Uniforme</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Velocidade Angular: ω = 2π/T</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Raio (m)" id="radius" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Período (s)" id="period" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculateCircular()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Velocidade</button>
                    <div id="circular-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>
            </div>
        `
    },
    electricity: {
        title: '⚡ Experimentos com Eletricidade',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #6a00ff; margin-bottom: 20px;">Laboratório de Eletromagnetismo</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">⚡ Lei de Ohm</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">V = R × I (Tensão = Resistência × Corrente)</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Resistência (Ω)" id="resistance" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Corrente (A)" id="current" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculateOhm()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Tensão</button>
                    <div id="ohm-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🔋 Potência Elétrica</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">P = V × I (Potência = Tensão × Corrente)</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Tensão (V)" id="voltage-power" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Corrente (A)" id="current-power" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculatePower()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Potência</button>
                    <div id="power-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🧲 Campo Magnético</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">F = q × v × B (Força sobre carga em movimento)</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Carga (C)" id="charge" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Velocidade (m/s)" id="velocity" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Campo Magnético (T)" id="magnetic-field" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculateMagneticForce()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Força</button>
                    <div id="magnetic-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>
            </div>
        `
    },
    optics: {
        title: '👁️ Ótica e Ondas',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #6a00ff; margin-bottom: 20px;">Laboratório de Ótica</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌊 Equação das Ondas</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">v = λ × f (Velocidade = Comprimento de onda × Frequência)</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Comprimento de onda (m)" id="wavelength" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Frequência (Hz)" id="frequency" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculateWaveSpeed()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Velocidade</button>
                    <div id="wave-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🔍 Lei de Snell (Refração)</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">n₁ × sin(θ₁) = n₂ × sin(θ₂)</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Índice refração 1" id="n1" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Ângulo incidência (°)" id="angle1" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Índice refração 2" id="n2" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculateSnell()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Refração</button>
                    <div id="snell-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🎨 Energia do Fóton</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">E = h × f (Energia = Constante de Planck × Frequência)</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Frequência (Hz)" id="photon-freq" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculatePhotonEnergy()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Energia</button>
                    <div id="photon-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>
            </div>
        `
    },
    quantum: {
        title: '⚛️ Física Moderna e Quântica',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #6a00ff; margin-bottom: 20px;">Laboratório Quântico</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">⚛️ Energia de Ionização do Hidrogênio</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">E = -13.6 eV / n² (Modelo de Bohr)</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Número quântico n" id="quantum-n" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculateHydrogenEnergy()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Energia</button>
                    <div id="hydrogen-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌊 Comprimento de Onda de de Broglie</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">λ = h / (m × v)</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Massa (kg)" id="de-broglie-mass" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Velocidade (m/s)" id="de-broglie-vel" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculateDeBroglie()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular λ de Broglie</button>
                    <div id="debroglie-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">⏰ Dilatação do Tempo (Relatividade)</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Δt' = Δt / √(1 - v²/c²)</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <input type="number" placeholder="Tempo próprio (s)" id="proper-time" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                        <input type="number" placeholder="Velocidade (m/s)" id="relativistic-vel" style="padding: 8px; border-radius: 5px; border: 1px solid #6a00ff; background: #0f0c29; color: white;">
                    </div>
                    <button onclick="calculateTimeDilation()" style="background: #6a00ff; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Calcular Dilatação</button>
                    <div id="time-dilation-result" style="margin-top: 15px; color: #00ffaa;"></div>
                </div>
            </div>
        `
    }
};

// Função para abrir seções
function openSection(sectionKey) {
    const section = sections[sectionKey];
    if (!section) return;

    const modal = document.getElementById('sectionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    modalTitle.textContent = section.title;
    modalContent.innerHTML = section.content;
    modal.style.display = 'flex';
}

// Função para fechar modal
function closeModal() {
    const modal = document.getElementById('sectionModal');
    modal.style.display = 'none';
}

// Função para iniciar simulações
function startSimulation(type) {
    const notifications = {
        pendulum: '🎯 Simulação de Pêndulo iniciada! Observe o movimento harmônico simples.',
        projectile: '🏹 Simulação de Projétil ativada! Analise a trajetória parabólica.',
        waves: '🌊 Simulação de Ondas em execução! Veja a propagação ondulatória.',
        collision: '💥 Simulação de Colisões ativa! Estude a conservação do momentum.'
    };
    
    showNotification(notifications[type] || 'Simulação iniciada!');
}

// Função para mostrar notificações
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--fundo-card);
        color: var(--texto);
        padding: 15px 20px;
        border-radius: 10px;
        border-left: 4px solid var(--physics-primary);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-atom" style="color: var(--physics-primary);"></i>
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

// FUNÇÕES DE CÁLCULO FÍSICO

// Movimento Retilíneo Uniformemente Variado
function calculateMRUV() {
    const v0 = parseFloat(document.getElementById('v0').value) || 0;
    const a = parseFloat(document.getElementById('acceleration').value) || 0;
    const t = parseFloat(document.getElementById('time').value) || 0;
    
    const s = v0 * t + 0.5 * a * Math.pow(t, 2);
    const vf = v0 + a * t;
    
    document.getElementById('mruv-result').innerHTML = `
        <strong>Resultados:</strong><br>
        📍 Posição: ${s.toFixed(2)} metros<br>
        🏃 Velocidade final: ${vf.toFixed(2)} m/s
    `;
}

// Segunda Lei de Newton
function calculateNewton() {
    const mass = parseFloat(document.getElementById('mass').value) || 0;
    const acc = parseFloat(document.getElementById('acc-newton').value) || 0;
    
    const force = mass * acc;
    
    document.getElementById('newton-result').innerHTML = `
        <strong>Força resultante:</strong> ${force.toFixed(2)} N
    `;
}

// Movimento Circular Uniforme
function calculateCircular() {
    const radius = parseFloat(document.getElementById('radius').value) || 0;
    const period = parseFloat(document.getElementById('period').value) || 0;
    
    if (period === 0) {
        document.getElementById('circular-result').innerHTML = '⚠️ Período não pode ser zero!';
        return;
    }
    
    const omega = 2 * Math.PI / period;
    const velocity = omega * radius;
    
    document.getElementById('circular-result').innerHTML = `
        <strong>Resultados:</strong><br>
        🔄 Velocidade angular: ${omega.toFixed(4)} rad/s<br>
        🏃 Velocidade linear: ${velocity.toFixed(2)} m/s
    `;
}

// Lei de Ohm
function calculateOhm() {
    const resistance = parseFloat(document.getElementById('resistance').value) || 0;
    const current = parseFloat(document.getElementById('current').value) || 0;
    
    const voltage = resistance * current;
    
    document.getElementById('ohm-result').innerHTML = `
        <strong>Tensão:</strong> ${voltage.toFixed(2)} V
    `;
}

// Potência Elétrica
function calculatePower() {
    const voltage = parseFloat(document.getElementById('voltage-power').value) || 0;
    const current = parseFloat(document.getElementById('current-power').value) || 0;
    
    const power = voltage * current;
    
    document.getElementById('power-result').innerHTML = `
        <strong>Potência:</strong> ${power.toFixed(2)} W
    `;
}

// Força Magnética
function calculateMagneticForce() {
    const charge = parseFloat(document.getElementById('charge').value) || 0;
    const velocity = parseFloat(document.getElementById('velocity').value) || 0;
    const field = parseFloat(document.getElementById('magnetic-field').value) || 0;
    
    const force = charge * velocity * field;
    
    document.getElementById('magnetic-result').innerHTML = `
        <strong>Força magnética:</strong> ${force.toFixed(6)} N
    `;
}

// Velocidade das Ondas
function calculateWaveSpeed() {
    const wavelength = parseFloat(document.getElementById('wavelength').value) || 0;
    const frequency = parseFloat(document.getElementById('frequency').value) || 0;
    
    const speed = wavelength * frequency;
    
    document.getElementById('wave-result').innerHTML = `
        <strong>Velocidade da onda:</strong> ${speed.toFixed(2)} m/s
    `;
}

// Lei de Snell
function calculateSnell() {
    const n1 = parseFloat(document.getElementById('n1').value) || 0;
    const angle1 = parseFloat(document.getElementById('angle1').value) || 0;
    const n2 = parseFloat(document.getElementById('n2').value) || 0;
    
    const angle1Rad = angle1 * Math.PI / 180;
    const sin2 = (n1 * Math.sin(angle1Rad)) / n2;
    
    if (Math.abs(sin2) > 1) {
        document.getElementById('snell-result').innerHTML = '⚠️ Reflexão total interna!';
        return;
    }
    
    const angle2 = Math.asin(sin2) * 180 / Math.PI;
    
    document.getElementById('snell-result').innerHTML = `
        <strong>Ângulo de refração:</strong> ${angle2.toFixed(2)}°
    `;
}

// Energia do Fóton
function calculatePhotonEnergy() {
    const frequency = parseFloat(document.getElementById('photon-freq').value) || 0;
    const h = 6.626e-34; // Constante de Planck
    
    const energy = h * frequency;
    
    document.getElementById('photon-result').innerHTML = `
        <strong>Energia do fóton:</strong> ${energy.toExponential(3)} J
    `;
}

// Energia do Hidrogênio (Modelo de Bohr)
function calculateHydrogenEnergy() {
    const n = parseFloat(document.getElementById('quantum-n').value) || 1;
    
    if (n < 1) {
        document.getElementById('hydrogen-result').innerHTML = '⚠️ n deve ser ≥ 1!';
        return;
    }
    
    const energy = -13.6 / Math.pow(n, 2);
    
    document.getElementById('hydrogen-result').innerHTML = `
        <strong>Energia do nível n=${n}:</strong> ${energy.toFixed(3)} eV
    `;
}

// Comprimento de Onda de de Broglie
function calculateDeBroglie() {
    const mass = parseFloat(document.getElementById('de-broglie-mass').value) || 0;
    const velocity = parseFloat(document.getElementById('de-broglie-vel').value) || 0;
    const h = 6.626e-34; // Constante de Planck
    
    if (mass === 0 || velocity === 0) {
        document.getElementById('debroglie-result').innerHTML = '⚠️ Massa e velocidade devem ser > 0!';
        return;
    }
    
    const wavelength = h / (mass * velocity);
    
    document.getElementById('debroglie-result').innerHTML = `
        <strong>Comprimento de onda de de Broglie:</strong> ${wavelength.toExponential(3)} m
    `;
}

// Dilatação do Tempo (Relatividade)
function calculateTimeDilation() {
    const properTime = parseFloat(document.getElementById('proper-time').value) || 0;
    const velocity = parseFloat(document.getElementById('relativistic-vel').value) || 0;
    const c = 299792458; // Velocidade da luz
    
    if (velocity >= c) {
        document.getElementById('time-dilation-result').innerHTML = '⚠️ Velocidade deve ser < c!';
        return;
    }
    
    const gamma = 1 / Math.sqrt(1 - Math.pow(velocity / c, 2));
    const dilatedTime = properTime * gamma;
    
    document.getElementById('time-dilation-result').innerHTML = `
        <strong>Resultados:</strong><br>
        ⏰ Tempo dilatado: ${dilatedTime.toFixed(6)} s<br>
        📊 Fator γ: ${gamma.toFixed(6)}
    `;
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('sectionModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Simular atividade do laboratório
setInterval(() => {
    const activities = [
        '⚛️ Experimento quântico detectou nova partícula',
        '⚡ Campo magnético de 0.5T estabilizado',
        '🌊 Interferência construtiva observada',
        '🚀 Aceleração gravitacional medida: 9.81 m/s²'
    ];
    
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    // Chance de 20% de mostrar notificação
    if (Math.random() < 0.2) {
        showNotification(randomActivity);
    }
}, 8000); // A cada 8 segundos