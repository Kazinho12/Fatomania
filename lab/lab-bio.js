// Inicialização das partículas biológicas
document.addEventListener('DOMContentLoaded', () => {
    createBioParticles();
    console.log('🧬 Laboratório de Biologia inicializado');
});

// Criar partículas biológicas animadas (células)
function createBioParticles() {
    const particlesContainer = document.getElementById('bioParticles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'cell-particle';
        
        // Propriedades aleatórias para cada partícula
        const size = Math.random() * 15 + 8;
        const x = Math.random() * 100;
        const duration = Math.random() * 20 + 25;
        const delay = Math.random() * 5;
        
        // Cores aleatórias baseadas no tema biológico
        const colors = ['#00ffaa', '#00d4aa', '#4fc3f7', '#26a69a', '#81c784'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${color}, transparent);
            border: 2px solid ${color};
            --duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Dados das seções do laboratório
const sections = {
    microscopy: {
        title: '🔬 Microscopia Virtual',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #00ffaa; margin-bottom: 20px;">Simulador de Microscópio</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🦠 Células Bacterianas</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <button onclick="viewCell('bacteria')" style="background: #00ffaa; color: #0f0c29; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">E. coli</button>
                        <button onclick="viewCell('streptococcus')" style="background: #00d4aa; color: #0f0c29; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Streptococcus</button>
                        <button onclick="viewCell('bacillus')" style="background: #4fc3f7; color: #0f0c29; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Bacillus</button>
                    </div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🧬 Células Eucarióticas</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <button onclick="viewCell('animal')" style="background: #00ffaa; color: #0f0c29; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Célula Animal</button>
                        <button onclick="viewCell('plant')" style="background: #00d4aa; color: #0f0c29; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Célula Vegetal</button>
                        <button onclick="viewCell('fungi')" style="background: #4fc3f7; color: #0f0c29; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Célula Fúngica</button>
                    </div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🩸 Tecidos e Orgãos</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <button onclick="viewTissue('epithelial')" style="background: #00ffaa; color: #0f0c29; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Epitélio</button>
                        <button onclick="viewTissue('muscle')" style="background: #00d4aa; color: #0f0c29; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Músculo</button>
                        <button onclick="viewTissue('nerve')" style="background: #4fc3f7; color: #0f0c29; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Nervo</button>
                    </div>
                </div>

                <div id="microscopy-result" style="margin-top: 20px; padding: 15px; background: #0f0c29; border-radius: 10px; border: 2px solid #00ffaa;">
                    <p style="color: #00ffaa; font-weight: bold;">Selecione uma amostra para visualizar no microscópio virtual</p>
                </div>
            </div>
        `
    },
    dna: {
        title: '🧬 Análise de DNA',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #00ffaa; margin-bottom: 20px;">Laboratório de Genética Molecular</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🔬 Estrutura do DNA</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Explore a estrutura tridimensional da dupla hélice</p>
                    <button onclick="analyzeDNA('structure')" style="background: #00ffaa; color: #0f0c29; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold;">Visualizar Estrutura 3D</button>
                    <div id="dna-structure-result" style="margin-top: 15px; color: #00d4aa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🔄 Replicação do DNA</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Simule o processo de replicação semiconservativa</p>
                    <button onclick="simulateReplication()" style="background: #00d4aa; color: #0f0c29; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold;">Iniciar Replicação</button>
                    <div id="replication-result" style="margin-top: 15px; color: #4fc3f7;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">📝 Transcrição e Tradução</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Do DNA ao RNA mensageiro até as proteínas</p>
                    <button onclick="transcribeTranslate()" style="background: #4fc3f7; color: #0f0c29; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold;">Síntese Proteica</button>
                    <div id="transcription-result" style="margin-top: 15px; color: #26a69a;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">⚠️ Mutações Genéticas</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Tipos de mutações e seus efeitos</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px;">
                        <button onclick="simulateMutation('substitution')" style="background: #ff6b6b; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Substituição</button>
                        <button onclick="simulateMutation('insertion')" style="background: #feca57; color: #0f0c29; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Inserção</button>
                        <button onclick="simulateMutation('deletion')" style="background: #ff9ff3; color: #0f0c29; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Deleção</button>
                    </div>
                    <div id="mutation-result" style="margin-top: 15px; color: #ff6b6b;"></div>
                </div>
            </div>
        `
    },
    ecosystem: {
        title: '🌿 Ecossistemas Interativos',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #00ffaa; margin-bottom: 20px;">Simulador de Ecossistemas</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌍 Biomas Mundiais</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <button onclick="exploreBiome('rainforest')" style="background: #27ae60; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Floresta Tropical</button>
                        <button onclick="exploreBiome('savanna')" style="background: #f39c12; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Savana</button>
                        <button onclick="exploreBiome('ocean')" style="background: #3498db; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Oceano</button>
                        <button onclick="exploreBiome('desert')" style="background: #e67e22; color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: bold;">Deserto</button>
                    </div>
                    <div id="biome-result" style="margin-top: 20px; color: #00ffaa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🔗 Cadeias Alimentares</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Construa cadeias alimentares complexas</p>
                    <button onclick="buildFoodChain()" style="background: #00ffaa; color: #0f0c29; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold;">Criar Cadeia Alimentar</button>
                    <div id="food-chain-result" style="margin-top: 15px; color: #00d4aa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">♻️ Ciclos Biogeoquímicos</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px;">
                        <button onclick="simulateCycle('water')" style="background: #3498db; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Água</button>
                        <button onclick="simulateCycle('carbon')" style="background: #2c3e50; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Carbono</button>
                        <button onclick="simulateCycle('nitrogen')" style="background: #9b59b6; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Nitrogênio</button>
                        <button onclick="simulateCycle('phosphorus')" style="background: #e74c3c; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Fósforo</button>
                    </div>
                    <div id="cycle-result" style="margin-top: 15px; color: #4fc3f7;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌱 Relações Ecológicas</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Explore as interações entre organismos</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px;">
                        <button onclick="showRelation('mutualism')" style="background: #00ffaa; color: #0f0c29; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Mutualismo</button>
                        <button onclick="showRelation('predation')" style="background: #e74c3c; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Predação</button>
                        <button onclick="showRelation('competition')" style="background: #f39c12; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Competição</button>
                        <button onclick="showRelation('parasitism')" style="background: #9b59b6; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Parasitismo</button>
                    </div>
                    <div id="relation-result" style="margin-top: 15px; color: #26a69a;"></div>
                </div>
            </div>
        `
    },
    evolution: {
        title: '🧬 Evolução e Genética',
        content: `
            <div style="padding: 20px;">
                <h3 style="color: #00ffaa; margin-bottom: 20px;">Simulador Evolutivo</h3>
                
                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🦋 Seleção Natural</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Simule a evolução de populações sob pressão seletiva</p>
                    <button onclick="simulateSelection()" style="background: #00ffaa; color: #0f0c29; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold;">Iniciar Seleção Natural</button>
                    <div id="selection-result" style="margin-top: 15px; color: #00d4aa;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🧬 Deriva Genética</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Observe mudanças aleatórias na frequência alélica</p>
                    <button onclick="simulateDrift()" style="background: #4fc3f7; color: #0f0c29; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold;">Simular Deriva</button>
                    <div id="drift-result" style="margin-top: 15px; color: #4fc3f7;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌳 Especiação</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Mecanismos de formação de novas espécies</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;">
                        <button onclick="simulateSpeciation('allopatric')" style="background: #27ae60; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Alopátrica</button>
                        <button onclick="simulateSpeciation('sympatric')" style="background: #8e44ad; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Simpátrica</button>
                        <button onclick="simulateSpeciation('parapatric')" style="background: #16a085; color: white; border: none; padding: 10px; border-radius: 15px; cursor: pointer; font-weight: bold;">Parapátrica</button>
                    </div>
                    <div id="speciation-result" style="margin-top: 15px; color: #26a69a;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🌿 Árvore Filogenética</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Explore as relações evolutivas entre espécies</p>
                    <button onclick="buildPhylogeny()" style="background: #e67e22; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold;">Construir Filogenia</button>
                    <div id="phylogeny-result" style="margin-top: 15px; color: #e67e22;"></div>
                </div>

                <div style="background: #16213e; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffffff; margin-bottom: 15px;">🧪 Genética de Populações</h4>
                    <p style="color: #cccccc; margin-bottom: 15px;">Aplicar o princípio de Hardy-Weinberg</p>
                    <button onclick="calculateHardyWeinberg()" style="background: #f39c12; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: bold;">Calcular Frequências</button>
                    <div id="hardy-weinberg-result" style="margin-top: 15px; color: #f39c12;"></div>
                </div>
            </div>
        `
    }
};

// Funções das seções
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

function closeModal() {
    document.getElementById('sectionModal').style.display = 'none';
}

// Função para mudar zoom do microscópio
function changeZoom(level) {
    const cellImage = document.querySelector('.cell-image');
    const description = document.querySelector('.microscope-viewer p');
    
    switch(level) {
        case '100x':
            cellImage.style.backgroundSize = '40px 40px, 20px 20px';
            description.textContent = 'Amostra atual: Visão geral das células (100x)';
            break;
        case '400x':
            cellImage.style.backgroundSize = '25px 25px, 12px 12px';
            description.textContent = 'Amostra atual: Detalhes celulares visíveis (400x)';
            break;
        case '1000x':
            cellImage.style.backgroundSize = '15px 15px, 8px 8px';
            description.textContent = 'Amostra atual: Organelas celulares detalhadas (1000x)';
            break;
    }
}

// Funções de microscopia
function viewCell(type) {
    const result = document.getElementById('microscopy-result');
    const descriptions = {
        bacteria: '🦠 Células bacterianas (procarióticas) - sem núcleo definido, parede celular rígida',
        streptococcus: '🔗 Streptococcus - bactérias em cadeia, causadoras de infecções',
        bacillus: '📏 Bacillus - bactérias em forma de bastonete, algumas formam esporos',
        animal: '🐾 Célula animal - núcleo, mitocôndrias, sem parede celular',
        plant: '🌱 Célula vegetal - cloroplastos, parede celular, vacúolo central',
        fungi: '🍄 Célula fúngica - parede celular de quitina, sem cloroplastos'
    };
    
    result.innerHTML = `<p style="color: #00ffaa; font-weight: bold;">Observando: ${descriptions[type]}</p>`;
}

function viewTissue(type) {
    const result = document.getElementById('microscopy-result');
    const descriptions = {
        epithelial: '🧱 Tecido epitelial - células justapostas, função de revestimento',
        muscle: '💪 Tecido muscular - células alongadas, capacidade contrátil',
        nerve: '⚡ Tecido nervoso - neurônios e células da glia, transmissão de impulsos'
    };
    
    result.innerHTML = `<p style="color: #00ffaa; font-weight: bold;">Analisando: ${descriptions[type]}</p>`;
}

// Funções de DNA
function analyzeDNA(type) {
    const result = document.getElementById('dna-structure-result');
    result.innerHTML = `
        <p style="font-weight: bold;">🧬 Estrutura 3D do DNA visualizada!</p>
        <p>Dupla hélice antiparalela com ligações de hidrogênio entre bases complementares</p>
        <p>A-T: 2 ligações | G-C: 3 ligações</p>
    `;
}

function simulateReplication() {
    const result = document.getElementById('replication-result');
    result.innerHTML = `
        <p style="font-weight: bold;">🔄 Replicação em andamento...</p>
        <p>1. Desenrolamento da dupla hélice</p>
        <p>2. DNA polimerase sintetiza fitas complementares</p>
        <p>3. Duas moléculas idênticas formadas!</p>
    `;
}

function transcribeTranslate() {
    const result = document.getElementById('transcription-result');
    result.innerHTML = `
        <p style="font-weight: bold;">📝 Processo de síntese proteica:</p>
        <p>DNA → RNA mensageiro (transcrição)</p>
        <p>mRNA → Proteína (tradução)</p>
        <p>Códon AUG = Metionina (início)</p>
    `;
}

function simulateMutation(type) {
    const result = document.getElementById('mutation-result');
    const mutations = {
        substitution: 'Uma base é substituída por outra (ex: A→T)',
        insertion: 'Uma ou mais bases são inseridas na sequência',
        deletion: 'Uma ou mais bases são removidas da sequência'
    };
    
    result.innerHTML = `<p style="font-weight: bold;">⚠️ Mutação ${type}: ${mutations[type]}</p>`;
}

// Funções de ecossistemas
function exploreBiome(type) {
    const result = document.getElementById('biome-result');
    const biomes = {
        rainforest: '🌳 Alta biodiversidade, clima quente e úmido, múltiplos estratos',
        savanna: '🦁 Gramíneas com árvores esparsas, duas estações bem definidas',
        ocean: '🐋 Maior bioma do planeta, diferentes zonas de profundidade',
        desert: '🌵 Baixa precipitação, adaptações para conservar água'
    };
    
    result.innerHTML = `<p style="font-weight: bold;">Explorando: ${biomes[type]}</p>`;
}

function buildFoodChain() {
    const result = document.getElementById('food-chain-result');
    result.innerHTML = `
        <p style="font-weight: bold;">🔗 Cadeia alimentar construída:</p>
        <p>Produtor (🌱) → Consumidor Primário (🐰) → Consumidor Secundário (🦊) → Decompositor (🍄)</p>
    `;
}

function simulateCycle(type) {
    const result = document.getElementById('cycle-result');
    const cycles = {
        water: 'Evaporação → Condensação → Precipitação → Infiltração',
        carbon: 'Fotossíntese ↔ Respiração, Combustão → Atmosfera',
        nitrogen: 'Fixação → Nitrificação → Assimilação → Desnitrificação',
        phosphorus: 'Rochas → Solo → Plantas → Animais → Decomposição'
    };
    
    result.innerHTML = `<p style="font-weight: bold;">♻️ Ciclo do ${type}: ${cycles[type]}</p>`;
}

function showRelation(type) {
    const result = document.getElementById('relation-result');
    const relations = {
        mutualism: '🤝 Ambos organismos se beneficiam (ex: flores e abelhas)',
        predation: '🦁 Um organismo consome outro para obter energia',
        competition: '⚔️ Organismos disputam recursos limitados',
        parasitism: '🦠 Um organismo se beneficia prejudicando outro'
    };
    
    result.innerHTML = `<p style="font-weight: bold;">${relations[type]}</p>`;
}

// Funções de evolução
function simulateSelection() {
    const result = document.getElementById('selection-result');
    result.innerHTML = `
        <p style="font-weight: bold;">🦋 Seleção natural em ação:</p>
        <p>Indivíduos com características vantajosas sobrevivem e reproduzem mais</p>
        <p>Frequência alélica da população muda ao longo das gerações</p>
    `;
}

function simulateDrift() {
    const result = document.getElementById('drift-result');
    result.innerHTML = `
        <p style="font-weight: bold;">🎲 Deriva genética simulada:</p>
        <p>Mudanças aleatórias na frequência alélica</p>
        <p>Efeito mais pronunciado em populações pequenas</p>
    `;
}

function simulateSpeciation(type) {
    const result = document.getElementById('speciation-result');
    const speciation = {
        allopatric: 'Isolamento geográfico → divergência → nova espécie',
        sympatric: 'Isolamento reprodutivo na mesma área geográfica',
        parapatric: 'Especiação em zonas de contato com fluxo gênico limitado'
    };
    
    result.innerHTML = `<p style="font-weight: bold;">🌳 Especiação ${type}: ${speciation[type]}</p>`;
}

function buildPhylogeny() {
    const result = document.getElementById('phylogeny-result');
    result.innerHTML = `
        <p style="font-weight: bold;">🌿 Árvore filogenética:</p>
        <p>🦠 Bactérias → 🧬 Eucariotos → 🍄 Fungos → 🌱 Plantas → 🐾 Animais</p>
        <p>Baseada em similaridades genéticas e morfológicas</p>
    `;
}

function calculateHardyWeinberg() {
    const result = document.getElementById('hardy-weinberg-result');
    result.innerHTML = `
        <p style="font-weight: bold;">🧪 Equilíbrio de Hardy-Weinberg:</p>
        <p>p² + 2pq + q² = 1</p>
        <p>Frequências alélicas constantes sob condições ideais</p>
    `;
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('sectionModal');
    if (event.target === modal) {
        closeModal();
    }
}