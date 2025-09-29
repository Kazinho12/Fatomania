// Inicialização do laboratório de astronomia
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createSpaceParticles();
    console.log('🚀 Laboratório de Astronomia inicializado');
});

// Criar estrelas de fundo
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        
        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            --duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        starsContainer.appendChild(star);
    }
}

// Criar partículas espaciais
function createSpaceParticles() {
    const particlesContainer = document.getElementById('spaceParticles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';
        
        const size = Math.random() * 8 + 4;
        const x = Math.random() * 100;
        const duration = Math.random() * 20 + 25;
        const delay = Math.random() * 8;
        
        const colors = ['#f72585', '#e91e63', '#c2185b', '#7209b7'];
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
    solar: {
        title: '☀️ Simulador do Sistema Solar',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #f72585; margin-bottom: 20px;">Sistema Solar Interativo</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🪐 Planetas do Sistema Solar</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <div style="background: #f72585; padding: 15px; border-radius: 10px; text-align: center; cursor: pointer;" onclick="showPlanetInfo('mercury')">
                            <div style="font-size: 2rem;">☿️</div>
                            <div style="font-weight: bold;">Mercúrio</div>
                            <div style="font-size: 0.8rem;">Planeta mais próximo do Sol</div>
                        </div>
                        <div style="background: #e91e63; padding: 15px; border-radius: 10px; text-align: center; cursor: pointer;" onclick="showPlanetInfo('venus')">
                            <div style="font-size: 2rem;">♀️</div>
                            <div style="font-weight: bold;">Vênus</div>
                            <div style="font-size: 0.8rem;">Planeta mais quente</div>
                        </div>
                        <div style="background: #c2185b; padding: 15px; border-radius: 10px; text-align: center; cursor: pointer;" onclick="showPlanetInfo('earth')">
                            <div style="font-size: 2rem;">🌍</div>
                            <div style="font-weight: bold;">Terra</div>
                            <div style="font-size: 0.8rem;">Nosso planeta azul</div>
                        </div>
                        <div style="background: #7209b7; padding: 15px; border-radius: 10px; text-align: center; cursor: pointer;" onclick="showPlanetInfo('mars')">
                            <div style="font-size: 2rem;">♂️</div>
                            <div style="font-weight: bold;">Marte</div>
                            <div style="font-size: 0.8rem;">Planeta vermelho</div>
                        </div>
                    </div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌌 Características Orbitais</h4>
                    <button onclick="simulateOrbit('earth')" style="background: #f72585; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; margin: 5px;">Órbita da Terra</button>
                    <button onclick="simulateOrbit('mars')" style="background: #e91e63; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; margin: 5px;">Órbita de Marte</button>
                    <button onclick="simulateOrbit('all')" style="background: #7209b7; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; margin: 5px;">Todos os Planetas</button>
                    <div id="orbit-info" style="margin-top: 15px; color: #cccccc;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🛰️ Exploração Espacial</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Descubra as missões que exploraram nosso sistema solar</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <span style="background: #f72585; padding: 5px 15px; border-radius: 15px; font-size: 0.9rem;">Voyager 1 & 2</span>
                        <span style="background: #e91e63; padding: 5px 15px; border-radius: 15px; font-size: 0.9rem;">Cassini-Huygens</span>
                        <span style="background: #c2185b; padding: 5px 15px; border-radius: 15px; font-size: 0.9rem;">New Horizons</span>
                        <span style="background: #7209b7; padding: 5px 15px; border-radius: 15px; font-size: 0.9rem;">Parker Solar Probe</span>
                    </div>
                </div>
            </div>
        `
    },
    telescope: {
        title: '🔭 Telescópio Virtual',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #f72585; margin-bottom: 20px;">Observatório Virtual</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌌 Catálogo Messier</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        <div style="background: #f72585; padding: 15px; border-radius: 10px; cursor: pointer;" onclick="observeObject('M31')">
                            <div style="font-weight: bold;">M31 - Andrômeda</div>
                            <div style="font-size: 0.9rem; opacity: 0.8;">Galáxia Espiral</div>
                            <div style="font-size: 0.8rem;">Distância: 2,5 milhões anos-luz</div>
                        </div>
                        <div style="background: #e91e63; padding: 15px; border-radius: 10px; cursor: pointer;" onclick="observeObject('M42')">
                            <div style="font-weight: bold;">M42 - Órion</div>
                            <div style="font-size: 0.9rem; opacity: 0.8;">Nebulosa de Emissão</div>
                            <div style="font-size: 0.8rem;">Distância: 1.344 anos-luz</div>
                        </div>
                        <div style="background: #c2185b; padding: 15px; border-radius: 10px; cursor: pointer;" onclick="observeObject('M13')">
                            <div style="font-weight: bold;">M13 - Hércules</div>
                            <div style="font-size: 0.9rem; opacity: 0.8;">Aglomerado Globular</div>
                            <div style="font-size: 0.8rem;">Distância: 25.100 anos-luz</div>
                        </div>
                    </div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">📡 Controles do Telescópio</h4>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px; flex-wrap: wrap;">
                        <button onclick="adjustSettings('focus')" style="background: #f72585; color: white; border: none; padding: 8px 16px; border-radius: 15px; cursor: pointer;">Ajustar Foco</button>
                        <button onclick="adjustSettings('exposure')" style="background: #e91e63; color: white; border: none; padding: 8px 16px; border-radius: 15px; cursor: pointer;">Tempo de Exposição</button>
                        <button onclick="adjustSettings('filter')" style="background: #c2185b; color: white; border: none; padding: 8px 16px; border-radius: 15px; cursor: pointer;">Filtro Espectral</button>
                    </div>
                    <div id="telescope-status" style="color: #cccccc; font-size: 0.9rem;">Status: Pronto para observação</div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">📊 Dados de Observação</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;">
                        <div style="text-align: center;">
                            <div style="color: #f72585; font-size: 1.5rem; font-weight: bold;">2.4m</div>
                            <div style="color: #cccccc; font-size: 0.9rem;">Diâmetro do Espelho</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: #e91e63; font-size: 1.5rem; font-weight: bold;">30x</div>
                            <div style="color: #cccccc; font-size: 0.9rem;">Magnificação Má<div style="text-align: center;">
                            <div style="color: #c2185b; font-size: 1.5rem; font-weight: bold;">15.2</div>
                            <div style="color: #cccccc; font-size: 0.9rem;">Magnitude Limite</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    missions: {
        title: '🚀 Missões Espaciais',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #f72585; margin-bottom: 20px;">Centro de Controle de Missões</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🛰️ Missões Ativas</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                        <div style="background: linear-gradient(135deg, #f72585, #e91e63); padding: 15px; border-radius: 10px;">
                            <div style="font-weight: bold; margin-bottom: 10px;">Voyager 1</div>
                            <div style="font-size: 0.9rem; margin-bottom: 5px;">Status: Ativa no Espaço Interestelar</div>
                            <div style="font-size: 0.8rem; opacity: 0.8;">Distância: 155+ UA do Sol</div>
                            <div style="font-size: 0.8rem; opacity: 0.8;">Lançamento: 5 de setembro de 1977</div>
                        </div>
                        <div style="background: linear-gradient(135deg, #e91e63, #c2185b); padding: 15px; border-radius: 10px;">
                            <div style="font-weight: bold; margin-bottom: 10px;">Perseverance</div>
                            <div style="font-size: 0.9rem; margin-bottom: 5px;">Status: Operacional em Marte</div>
                            <div style="font-size: 0.8rem; opacity: 0.8;">Local: Cratera Jazero</div>
                            <div style="font-size: 0.8rem; opacity: 0.8;">Missão: Busca por vida microscópica</div>
                        </div>
                        <div style="background: linear-gradient(135deg, #c2185b, #7209b7); padding: 15px; border-radius: 10px;">
                            <div style="font-weight: bold; margin-bottom: 10px;">James Webb</div>
                            <div style="font-size: 0.9rem; margin-bottom: 5px;">Status: Observando o Universo</div>
                            <div style="font-size: 0.8rem; opacity: 0.8;">Local: Ponto Lagrange L2</div>
                            <div style="font-size: 0.8rem; opacity: 0.8;">Descobertas: Galáxias primordiais</div>
                        </div>
                    </div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🎯 Planejamento de Trajetórias</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Simule trajetórias interplanetárias usando a mecânica orbital</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px; flex-wrap: wrap;">
                        <button onclick="planTrajectory('mars')" style="background: #f72585; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Terra → Marte</button>
                        <button onclick="planTrajectory('jupiter')" style="background: #e91e63; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Terra → Júpiter</button>
                        <button onclick="planTrajectory('custom')" style="background: #7209b7; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Trajetória Personalizada</button>
                    </div>
                    <div id="trajectory-result" style="color: #cccccc;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">📡 Comunicação Espacial</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <div style="text-align: center; padding: 10px;">
                            <div style="color: #f72585; font-size: 1.2rem; font-weight: bold;">22 min</div>
                            <div style="color: #cccccc; font-size: 0.8rem;">Sinal para Marte</div>
                        </div>
                        <div style="text-align: center; padding: 10px;">
                            <div style="color: #e91e63; font-size: 1.2rem; font-weight: bold;">43 min</div>
                            <div style="color: #cccccc; font-size: 0.8rem;">Sinal para Júpiter</div>
                        </div>
                        <div style="text-align: center; padding: 10px;">
                            <div style="color: #c2185b; font-size: 1.2rem; font-weight: bold;">22h</div>
                            <div style="color: #cccccc; font-size: 0.8rem;">Sinal para Voyager 1</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    astrophysics: {
        title: '⚛️ Astrofísica Avançada',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #f72585; margin-bottom: 20px;">Centro de Astrofísica Teórica</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌟 Evolução Estelar</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        <div style="background: #f72585; padding: 15px; border-radius: 10px; text-align: center; cursor: pointer;" onclick="studyStellarPhase('main-sequence')">
                            <div style="font-size: 2rem;">⭐</div>
                            <div style="font-weight: bold;">Sequência Principal</div>
                            <div style="font-size: 0.8rem;">Fusão de Hidrogênio</div>
                        </div>
                        <div style="background: #e91e63; padding: 15px; border-radius: 10px; text-align: center; cursor: pointer;" onclick="studyStellarPhase('red-giant')">
                            <div style="font-size: 2rem;">🔴</div>
                            <div style="font-weight: bold;">Gigante Vermelha</div>
                            <div style="font-size: 0.8rem;">Expansão Estelar</div>
                        </div>
                        <div style="background: #c2185b; padding: 15px; border-radius: 10px; text-align: center; cursor: pointer;" onclick="studyStellarPhase('supernova')">
                            <div style="font-size: 2rem;">💥</div>
                            <div style="font-weight: bold;">Supernova</div>
                            <div style="font-size: 0.8rem;">Explosão Estelar</div>
                        </div>
                        <div style="background: #7209b7; padding: 15px; border-radius: 10px; text-align: center; cursor: pointer;" onclick="studyStellarPhase('black-hole')">
                            <div style="font-size: 2rem;">🕳️</div>
                            <div style="font-weight: bold;">Buraco Negro</div>
                            <div style="font-size: 0.8rem;">Singularidade</div>
                        </div>
                    </div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌊 Ondas Gravitacionais</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Detecte e analise ondas gravitacionais de eventos cósmicos</p>
                    <button onclick="detectGravWaves('merger')" style="background: #f72585; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; margin: 5px;">Fusão de Buracos Negros</button>
                    <button onclick="detectGravWaves('neutron')" style="background: #e91e63; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; margin: 5px;">Colisão de Estrelas de Nêutrons</button>
                    <div id="gravwave-data" style="margin-top: 15px; color: #cccccc;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌌 Cosmologia</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
                        <div style="text-align: center;">
                            <div style="color: #f72585; font-size: 1.5rem; font-weight: bold;">13.8 Ga</div>
                            <div style="color: #cccccc; font-size: 0.9rem;">Idade do Universo</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: #e91e63; font-size: 1.5rem; font-weight: bold;">68%</div>
                            <div style="color: #cccccc; font-size: 0.9rem;">Energia Escura</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: #c2185b; font-size: 1.5rem; font-weight: bold;">27%</div>
                            <div style="color: #cccccc; font-size: 0.9rem;">Matéria Escura</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="color: #7209b7; font-size: 1.5rem; font-weight: bold;">5%</div>
                            <div style="color: #cccccc; font-size: 0.9rem;">Matéria Ordinária</div>
                        </div>
                    </div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🔬 Física de Partículas Cósmicas</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Explore raios cósmicos e partículas de alta energia</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <span style="background: #f72585; padding: 5px 15px; border-radius: 15px; font-size: 0.9rem;">Prótons</span>
                        <span style="background: #e91e63; padding: 5px 15px; border-radius: 15px; font-size: 0.9rem;">Neutrinos</span>
                        <span style="background: #c2185b; padding: 5px 15px; border-radius: 15px; font-size: 0.9rem;">Muons</span>
                        <span style="background: #7209b7; padding: 5px 15px; border-radius: 15px; font-size: 0.9rem;">Raios Gamma</span>
                    </div>
                </div>
            </div>
        `
    }
};

// Abrir seção em modal
function openSection(sectionName) {
    const modal = document.getElementById('sectionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (sections[sectionName]) {
        modalTitle.textContent = sections[sectionName].title;
        modalContent.innerHTML = sections[sectionName].content;
        modal.style.display = 'flex';
    }
}

// Fechar modal
function closeModal() {
    const modal = document.getElementById('sectionModal');
    modal.style.display = 'none';
}

// Funções específicas das simulações
function showPlanetInfo(planet) {
    const info = {
        mercury: 'Mercúrio: Menor planeta, sem atmosfera, temperaturas extremas (-170°C a 427°C)',
        venus: 'Vênus: Atmosfera densa de CO₂, efeito estufa extremo, 462°C na superfície',
        earth: 'Terra: Único planeta conhecido com vida, 71% de água, atmosfera rica em N₂ e O₂',
        mars: 'Marte: Planeta vermelho, calotas polares de gelo, possível vida microscópica no passado'
    };
    
    const infoDiv = document.getElementById('orbit-info') || document.createElement('div');
    infoDiv.innerHTML = `<div style="background: #f72585; padding: 10px; border-radius: 10px; margin-top: 10px;">${info[planet]}</div>`;
}

function simulateOrbit(planet) {
    const messages = {
        earth: 'Simulando órbita terrestre: 365,25 dias, distância média de 149,6 milhões de km do Sol',
        mars: 'Simulando órbita marciana: 687 dias terrestres, órbita elíptica mais excêntrica',
        all: 'Simulando todos os planetas: observe as diferentes velocidades orbitais e distâncias'
    };
    
    const infoDiv = document.getElementById('orbit-info');
    if (infoDiv) {
        infoDiv.innerHTML = `<div style="background: #00ffaa; color: #000; padding: 10px; border-radius: 10px;">${messages[planet]}</div>`;
    }
}

function observeObject(object) {
    const observations = {
        M31: 'Observando Galáxia de Andrômeda: Nossa vizinha galáxica mais próxima, visível a olho nu',
        M42: 'Observando Nebulosa de Órion: Berçário estelar ativo, formação de novas estrelas',
        M13: 'Observando Aglomerado de Hércules: 300.000 estrelas antigas em formação esférica'
    };
    
    alert(`🔭 ${observations[object]}`);
}

function adjustSettings(setting) {
    const settings = {
        focus: 'Foco ajustado para observação de objetos distantes',
        exposure: 'Tempo de exposição configurado para 30 segundos',
        filter: 'Filtro H-alpha selecionado para nebulosas de emissão'
    };
    
    const statusDiv = document.getElementById('telescope-status');
    if (statusDiv) {
        statusDiv.innerHTML = `Status: ${settings[setting]}`;
    }
}

function planTrajectory(destination) {
    const trajectories = {
        mars: 'Janela de lançamento ideal: a cada 26 meses. Tempo de viagem: 6-9 meses usando trajetória de Hohmann',
        jupiter: 'Aproveitando assistência gravitacional. Tempo de viagem: 13-18 meses dependendo da trajetória',
        custom: 'Digite os parâmetros orbitais para calcular trajetória personalizada'
    };
    
    const resultDiv = document.getElementById('trajectory-result');
    if (resultDiv) {
        resultDiv.innerHTML = `<div style="background: #f72585; padding: 10px; border-radius: 10px; margin-top: 10px;">${trajectories[destination]}</div>`;
    }
}

function studyStellarPhase(phase) {
    const phases = {
        'main-sequence': 'Fase mais longa da vida estelar. A estrela converte hidrogênio em hélio no núcleo',
        'red-giant': 'Estrela se expande enormemente quando o hidrogênio do núcleo se esgota',
        'supernova': 'Explosão violenta que pode superar o brilho de uma galáxia inteira',
        'black-hole': 'Região do espaço-tempo onde a gravidade é tão forte que nem a luz escapa'
    };
    
    alert(`🌟 ${phases[phase]}`);
}

function detectGravWaves(event) {
    const events = {
        merger: 'Detectada onda gravitacional de fusão de buracos negros! Frequência: 35-250 Hz',
        neutron: 'Kilonova detectada! Colisão criou elementos pesados como ouro e platina'
    };
    
    const dataDiv = document.getElementById('gravwave-data');
    if (dataDiv) {
        dataDiv.innerHTML = `<div style="background: #00ffaa; color: #000; padding: 10px; border-radius: 10px;">${events[event]}</div>`;
    }
}

function changeView(viewType) {
    const nebulaView = document.querySelector('.nebula-view');
    if (!nebulaView) return;
    
    const views = {
        nebula: 'radial-gradient(circle at 30% 30%, rgba(247, 37, 133, 0.6) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(114, 9, 183, 0.4) 0%, transparent 50%)',
        galaxy: 'radial-gradient(ellipse at 50% 50%, rgba(247, 37, 133, 0.8) 0%, rgba(114, 9, 183, 0.3) 30%, transparent 70%)',
        planet: 'radial-gradient(circle at 40% 40%, rgba(33, 150, 243, 0.8) 0%, rgba(76, 175, 80, 0.5) 50%, transparent 100%)'
    };
    
    nebulaView.style.background = views[viewType];
    
    const descriptions = {
        nebula: 'Nebulosa de Órion (M42)',
        galaxy: 'Galáxia de Andrômeda (M31)', 
        planet: 'Júpiter e suas luas'
    };
    
    const description = document.querySelector('.telescope-viewer p:last-child');
    if (description) {
        description.textContent = `Observação atual: ${descriptions[viewType]}`;
    }
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('sectionModal');
    if (event.target === modal) {
        closeModal();
    }
};