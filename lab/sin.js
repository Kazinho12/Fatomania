// Estado do laboratório de síntese
let synthesisState = {
    stations: {
        1: { reagent: null, filled: false },
        2: { reagent: null, filled: false },
        3: { reagent: null, filled: false }
    },
    temperature: 25,
    heating: false,
    synthesisType: 'organic',
    progress: 0,
    products: []
};

// Base de dados de reagentes por categoria
const reagents = {
    organic: [
        {
            id: 'ethanol',
            name: 'Etanol',
            formula: 'C₂H₅OH',
            purity: '99.5%',
            type: 'alcohol',
            reactivity: 'moderate',
            color: '#E8F5E8'
        },
        {
            id: 'acetic_acid',
            name: 'Ácido Acético',
            formula: 'CH₃COOH',
            purity: '98%',
            type: 'acid',
            reactivity: 'high',
            color: '#FFE8E8'
        },
        {
            id: 'benzene',
            name: 'Benzeno',
            formula: 'C₆H₆',
            purity: '99%',
            type: 'aromatic',
            reactivity: 'low',
            color: '#E8E8FF'
        },
        {
            id: 'methanol',
            name: 'Metanol',
            formula: 'CH₃OH',
            purity: '99.8%',
            type: 'alcohol',
            reactivity: 'high',
            color: '#E8F5E8'
        },
        {
            id: 'acetone',
            name: 'Acetona',
            formula: 'CH₃COCH₃',
            purity: '99.5%',
            type: 'ketone',
            reactivity: 'moderate',
            color: '#FFFFE8'
        },
        {
            id: 'toluene',
            name: 'Tolueno',
            formula: 'C₇H₈',
            purity: '99.7%',
            type: 'aromatic',
            reactivity: 'low',
            color: '#E8E8FF'
        },
        {
            id: 'phenol',
            name: 'Fenol',
            formula: 'C₆H₅OH',
            purity: '99%',
            type: 'phenol',
            reactivity: 'moderate',
            color: '#FFE8F5'
        },
        {
            id: 'formaldehyde',
            name: 'Formaldeído',
            formula: 'CH₂O',
            purity: '37%',
            type: 'aldehyde',
            reactivity: 'very_high',
            color: '#E8FFE8'
        }
    ],
    inorganic: [
        {
            id: 'h2so4',
            name: 'Ácido Sulfúrico',
            formula: 'H₂SO₄',
            purity: '98%',
            type: 'strong_acid',
            reactivity: 'very_high',
            color: '#FFE8E8'
        },
        {
            id: 'naoh',
            name: 'Hidróxido de Sódio',
            formula: 'NaOH',
            purity: '99%',
            type: 'strong_base',
            reactivity: 'very_high',
            color: '#E8E8FF'
        },
        {
            id: 'nacl',
            name: 'Cloreto de Sódio',
            formula: 'NaCl',
            purity: '99.9%',
            type: 'salt',
            reactivity: 'low',
            color: '#F8F8F8'
        },
        {
            id: 'caco3',
            name: 'Carbonato de Cálcio',
            formula: 'CaCO₃',
            purity: '99.5%',
            type: 'carbonate',
            reactivity: 'moderate',
            color: '#FFFACD'
        },
        {
            id: 'agno3',
            name: 'Nitrato de Prata',
            formula: 'AgNO₃',
            purity: '99.8%',
            type: 'metal_salt',
            reactivity: 'high',
            color: '#F0F8FF'
        },
        {
            id: 'fecl3',
            name: 'Cloreto Férrico',
            formula: 'FeCl₃',
            purity: '97%',
            type: 'metal_salt',
            reactivity: 'high',
            color: '#DEB887'
        },
        {
            id: 'nh3',
            name: 'Amônia',
            formula: 'NH₃',
            purity: '25%',
            type: 'base',
            reactivity: 'high',
            color: '#E0FFFF'
        },
        {
            id: 'hcl',
            name: 'Ácido Clorídrico',
            formula: 'HCl',
            purity: '37%',
            type: 'strong_acid',
            reactivity: 'very_high',
            color: '#FFE4E1'
        }
    ],
    purification: [
        {
            id: 'activated_carbon',
            name: 'Carvão Ativado',
            formula: 'C',
            purity: '99%',
            type: 'adsorbent',
            reactivity: 'inert',
            color: '#2F2F2F'
        },
        {
            id: 'silica_gel',
            name: 'Sílica Gel',
            formula: 'SiO₂',
            purity: '99.5%',
            type: 'desiccant',
            reactivity: 'inert',
            color: '#E6E6FA'
        },
        {
            id: 'alumina',
            name: 'Alumina',
            formula: 'Al₂O₃',
            purity: '99.9%',
            type: 'adsorbent',
            reactivity: 'inert',
            color: '#F0F8FF'
        },
        {
            id: 'diatomaceous_earth',
            name: 'Terra Diatomácea',
            formula: 'SiO₂·nH₂O',
            purity: '95%',
            type: 'filter_aid',
            reactivity: 'inert',
            color: '#FFF8DC'
        }
    ],
    analysis: [
        {
            id: 'ph_indicator',
            name: 'Indicador Universal',
            formula: 'Mistura',
            purity: '100%',
            type: 'indicator',
            reactivity: 'inert',
            color: '#FF69B4'
        },
        {
            id: 'ninhydrin',
            name: 'Ninidrina',
            formula: 'C₉H₆O₄',
            purity: '99%',
            type: 'test_reagent',
            reactivity: 'moderate',
            color: '#DDA0DD'
        },
        {
            id: 'benedicts',
            name: 'Reagente de Benedict',
            formula: 'CuSO₄ + Citrato',
            purity: '100%',
            type: 'test_reagent',
            reactivity: 'moderate',
            color: '#4169E1'
        }
    ]
};

// Base de dados de sínteses possíveis
const syntheses = {
    // Sínteses orgânicas
    'ethanol + acetic_acid': {
        product: 'Acetato de Etila',
        formula: 'CH₃COOC₂H₅',
        yield: '85%',
        temperature: 140,
        time: 120,
        difficulty: 'medium',
        type: 'esterification',
        description: 'Esterificação de Fischer para produzir acetato de etila, um solvente comum.',
        properties: 'Líquido incolor com odor frutal característico. Usado como solvente em tintas e vernizes.',
        safety: 'success'
    },
    'methanol + acetic_acid': {
        product: 'Acetato de Metila',
        formula: 'CH₃COOCH₃',
        yield: '90%',
        temperature: 120,
        time: 100,
        difficulty: 'easy',
        type: 'esterification',
        description: 'Síntese de acetato de metila através de esterificação catalisada.',
        properties: 'Éster volátil usado na indústria de plásticos e como solvente.',
        safety: 'success'
    },
    'benzene + toluene': {
        product: 'Mistura Aromática',
        formula: 'C₆H₆ + C₇H₈',
        yield: '95%',
        temperature: 80,
        time: 60,
        difficulty: 'easy',
        type: 'mixing',
        description: 'Mistura de hidrocarbonetos aromáticos para estudos de solubilidade.',
        properties: 'Mistura líquida para estudos de propriedades aromáticas.',
        safety: 'warning'
    },
    'phenol + formaldehyde': {
        product: 'Resina Fenólica',
        formula: '(C₆H₄OH-CH₂)n',
        yield: '75%',
        temperature: 180,
        time: 180,
        difficulty: 'hard',
        type: 'polymerization',
        description: 'Síntese de resina fenol-formaldeído (baquelite) - primeiro plástico sintético.',
        properties: 'Polímero termofixo com excelente resistência térmica e química.',
        safety: 'warning'
    },

    // Sínteses inorgânicas
    'naoh + hcl': {
        product: 'Cloreto de Sódio',
        formula: 'NaCl + H₂O',
        yield: '99%',
        temperature: 25,
        time: 30,
        difficulty: 'easy',
        type: 'neutralization',
        description: 'Neutralização ácido-base clássica produzindo sal de cozinha.',
        properties: 'Sal cristalino branco, essencial para a vida e amplamente usado na indústria.',
        safety: 'success'
    },
    'caco3 + h2so4': {
        product: 'Sulfato de Cálcio',
        formula: 'CaSO₄ + CO₂ + H₂O',
        yield: '85%',
        temperature: 60,
        time: 90,
        difficulty: 'medium',
        type: 'acid_carbonate',
        description: 'Reação de carbonato com ácido produzindo gesso e liberando CO₂.',
        properties: 'Gesso (CaSO₄·2H₂O) usado na construção civil e medicina.',
        safety: 'warning'
    },
    'agno3 + nacl': {
        product: 'Cloreto de Prata',
        formula: 'AgCl + NaNO₃',
        yield: '98%',
        temperature: 25,
        time: 15,
        difficulty: 'easy',
        type: 'precipitation',
        description: 'Precipitação de haleto de prata, reação clássica da química analítica.',
        properties: 'Precipitado branco fotossensível usado em fotografia.',
        safety: 'warning'
    },
    'fecl3 + nh3': {
        product: 'Hidróxido Férrico',
        formula: 'Fe(OH)₃ + NH₄Cl',
        yield: '80%',
        temperature: 40,
        time: 60,
        difficulty: 'medium',
        type: 'precipitation',
        description: 'Precipitação de hidróxido metálico em meio básico.',
        properties: 'Precipitado marrom-avermelhado usado em tratamento de águas.',
        safety: 'success'
    },

    // Purificação
    'activated_carbon + organic_mixture': {
        product: 'Produto Purificado',
        formula: 'Componente Puro',
        yield: '92%',
        temperature: 25,
        time: 45,
        difficulty: 'easy',
        type: 'adsorption',
        description: 'Purificação por adsorção em carvão ativado removendo impurezas orgânicas.',
        properties: 'Produto com pureza aumentada através de adsorção seletiva.',
        safety: 'success'
    },
    'silica_gel + water_mixture': {
        product: 'Produto Seco',
        formula: 'Componente Anidro',
        yield: '98%',
        temperature: 25,
        time: 30,
        difficulty: 'easy',
        type: 'desiccation',
        description: 'Remoção de umidade usando sílica gel como agente dessecante.',
        properties: 'Produto completamente desidratado com maior estabilidade.',
        safety: 'success'
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('🧪 Simulador de Síntese de Compostos carregado');
    setupDragAndDrop();
    loadReagents('organic');
    setupControls();
    updateSynthesisButton();
});

// Configuração dos controles
function setupControls() {
    // Seletor de tipo de síntese
    const typeButtons = document.querySelectorAll('.synthesis-type-btn');
    typeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            typeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            synthesisState.synthesisType = btn.dataset.type;
            loadReagents(btn.dataset.type);
        });
    });

    // Controle de temperatura
    const tempSlider = document.getElementById('temperatureSlider');
    const tempDisplay = document.getElementById('temperatureDisplay');
    
    tempSlider.addEventListener('input', (e) => {
        synthesisState.temperature = parseInt(e.target.value);
        tempDisplay.textContent = `${synthesisState.temperature}°C`;
        
        // Mudança de cor baseada na temperatura
        if (synthesisState.temperature < 50) {
            tempDisplay.style.color = '#4fc3f7';
            tempDisplay.style.borderColor = '#4fc3f7';
        } else if (synthesisState.temperature < 150) {
            tempDisplay.style.color = '#ffc107';
            tempDisplay.style.borderColor = '#ffc107';
        } else {
            tempDisplay.style.color = '#ff4500';
            tempDisplay.style.borderColor = '#ff4500';
        }
    });
}

// Carregar reagentes por categoria
function loadReagents(category) {
    const reagentList = document.getElementById('reagentList');
    reagentList.innerHTML = '';
    
    const categoryReagents = reagents[category] || [];
    
    categoryReagents.forEach(reagent => {
        const reagentElement = createReagentElement(reagent);
        reagentList.appendChild(reagentElement);
    });
    
    if (categoryReagents.length === 0) {
        reagentList.innerHTML = `
            <p style="color: #aaa; text-align: center; margin-top: 50px;">
                <i class="fas fa-info-circle"></i><br>
                Nenhum reagente disponível nesta categoria.
            </p>
        `;
    }
}

function createReagentElement(reagent) {
    const div = document.createElement('div');
    div.className = 'reagent-item';
    div.draggable = true;
    div.dataset.reagent = reagent.id;
    
    div.innerHTML = `
        <div class="reagent-info">
            <div class="reagent-name">${reagent.name}</div>
            <div class="reagent-formula">${reagent.formula}</div>
        </div>
        <div class="reagent-purity">${reagent.purity}</div>
    `;
    
    // Cor de fundo baseada no tipo
    div.style.background = `linear-gradient(135deg, ${reagent.color}, rgba(247, 37, 133, 0.1))`;
    
    setupReagentDrag(div);
    return div;
}

// Sistema de Drag and Drop
function setupDragAndDrop() {
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('dragend', handleDragEnd);
}

function setupReagentDrag(element) {
    element.addEventListener('dragstart', handleDragStart);
    element.addEventListener('dragend', handleDragEnd);
}

function handleDragStart(e) {
    if (e.target.classList.contains('reagent-item')) {
        e.target.classList.add('dragging');
        e.dataTransfer.setData('text/plain', e.target.dataset.reagent);
        console.log(`🧪 Arrastando reagente: ${e.target.dataset.reagent}`);
    }
}

function handleDragEnd(e) {
    if (e.target.classList.contains('reagent-item')) {
        e.target.classList.remove('dragging');
    }
}

function allowDrop(e) {
    e.preventDefault();
}

function dropReagent(e, stationNumber) {
    e.preventDefault();
    const reagentId = e.dataTransfer.getData('text/plain');
    
    if (!reagentId) return;
    
    // Verificar se a estação já está ocupada
    if (synthesisState.stations[stationNumber].filled) {
        showNotification('⚠️ Estação já ocupada! Limpe primeiro.', 'warning');
        return;
    }
    
    addReagentToStation(reagentId, stationNumber);
}

function addReagentToStation(reagentId, stationNumber) {
    // Encontrar o reagente
    const reagent = findReagentById(reagentId);
    if (!reagent) return;
    
    // Atualizar estado
    synthesisState.stations[stationNumber] = {
        reagent: reagent,
        filled: true
    };
    
    // Atualizar visual da estação
    updateStationVisual(stationNumber, reagent);
    updateSynthesisButton();
    
    console.log(`✅ ${reagent.name} adicionado à estação ${stationNumber}`);
    showNotification(`${reagent.name} adicionado à estação ${stationNumber}`, 'success');
}

function findReagentById(id) {
    for (let category in reagents) {
        const found = reagents[category].find(r => r.id === id);
        if (found) return found;
    }
    return null;
}

function updateStationVisual(stationNumber, reagent) {
    const station = document.querySelector(`.station-${stationNumber}`);
    station.classList.add('filled', 'active');
    
    station.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 0.9rem; font-weight: 600; color: white;">${reagent.name}</div>
            <div style="font-size: 0.7rem; color: rgba(255,255,255,0.8); font-family: monospace;">${reagent.formula}</div>
        </div>
    `;
    
    station.style.background = `linear-gradient(135deg, ${reagent.color}, rgba(247, 37, 133, 0.2))`;
}

function updateSynthesisButton() {
    const startBtn = document.getElementById('startSynthesis');
    const filledStations = Object.values(synthesisState.stations).filter(s => s.filled).length;
    
    if (filledStations >= 2) {
        startBtn.disabled = false;
        startBtn.style.background = 'var(--chemistry-primary)';
    } else {
        startBtn.disabled = true;
        startBtn.style.background = '#555';
    }
}

// Controle de aquecimento
function toggleHeating() {
    synthesisState.heating = !synthesisState.heating;
    const heatBtn = document.getElementById('heatBtn');
    const heatingElement = document.getElementById('heatingElement');
    
    if (synthesisState.heating) {
        heatBtn.classList.add('active');
        heatingElement.classList.add('active');
        synthesisState.temperature = Math.max(synthesisState.temperature, 80);
        document.getElementById('temperatureSlider').value = synthesisState.temperature;
        document.getElementById('temperatureDisplay').textContent = `${synthesisState.temperature}°C`;
        showNotification('🔥 Aquecimento ativado', 'warning');
    } else {
        heatBtn.classList.remove('active');
        heatingElement.classList.remove('active');
        showNotification('❄️ Aquecimento desativado', 'neutral');
    }
}

// Síntese principal
function startSynthesis() {
    const filledStations = Object.values(synthesisState.stations).filter(s => s.filled);
    
    if (filledStations.length < 2) {
        showNotification('⚠️ Adicione pelo menos 2 reagentes!', 'warning');
        return;
    }
    
    // Identificar reagentes
    const reagent1 = synthesisState.stations[1].reagent;
    const reagent2 = synthesisState.stations[2].reagent;
    const catalyst = synthesisState.stations[3].reagent;
    
    // Buscar síntese correspondente
    const synthesisKey1 = `${reagent1.id} + ${reagent2.id}`;
    const synthesisKey2 = `${reagent2.id} + ${reagent1.id}`;
    
    let synthesis = syntheses[synthesisKey1] || syntheses[synthesisKey2];
    
    if (!synthesis) {
        synthesis = generateExperimentalSynthesis(reagent1, reagent2, catalyst);
    }
    
    performSynthesis(synthesis, reagent1, reagent2, catalyst);
}

function generateExperimentalSynthesis(reagent1, reagent2, catalyst) {
    const randomYields = ['45%', '60%', '75%', '82%', '68%', '55%', '70%'];
    const randomTimes = [60, 90, 120, 150, 180, 240];
    const randomTemps = [25, 60, 80, 120, 150, 180];
    
    return {
        product: 'Produto Experimental',
        formula: `${reagent1.formula} + ${reagent2.formula} → ?`,
        yield: randomYields[Math.floor(Math.random() * randomYields.length)],
        temperature: randomTemps[Math.floor(Math.random() * randomTemps.length)],
        time: randomTimes[Math.floor(Math.random() * randomTimes.length)],
        difficulty: 'experimental',
        type: 'unknown',
        description: `Síntese experimental entre ${reagent1.name} e ${reagent2.name}. Resultados não documentados na literatura.`,
        properties: 'Propriedades desconhecidas. Análise adicional necessária para caracterização completa.',
        safety: Math.random() > 0.5 ? 'warning' : 'success'
    };
}

function performSynthesis(synthesis, reagent1, reagent2, catalyst) {
    console.log(`⚗️ Iniciando síntese: ${synthesis.product}`);
    
    // Animações visuais
    startSynthesisAnimation();
    
    // Simular progresso
    animateProgress(synthesis.time);
    
    // Resultado após o tempo
    setTimeout(() => {
        completeSynthesis(synthesis, reagent1, reagent2, catalyst);
    }, 3000); // 3 segundos para demonstração
}

function startSynthesisAnimation() {
    const liquid = document.getElementById('reactionLiquid');
    const bubbles = document.getElementById('reactionBubbles');
    
    // Animar líquido
    liquid.style.height = '60px';
    liquid.style.background = `linear-gradient(45deg, 
        var(--chemistry-primary), 
        var(--chemistry-secondary), 
        var(--chemistry-accent))`;
    
    // Criar bolhas
    createSynthesisBubbles(bubbles);
    
    // Mostrar aquecimento se ativo
    if (synthesisState.heating) {
        liquid.style.boxShadow = '0 0 20px rgba(255, 69, 0, 0.8)';
    }
}

function createSynthesisBubbles(container) {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.width = Math.random() * 10 + 5 + 'px';
            bubble.style.height = bubble.style.width;
            bubble.style.left = Math.random() * 100 + 'px';
            bubble.style.animationDelay = Math.random() * 1 + 's';
            bubble.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
            container.appendChild(bubble);
            
            setTimeout(() => {
                if (container.contains(bubble)) {
                    container.removeChild(bubble);
                }
            }, 3000);
        }, i * 300);
    }
}

function animateProgress(totalTime) {
    const progressBar = document.getElementById('progressBar');
    let progress = 0;
    const increment = 100 / 30; // 30 steps over 3 seconds
    
    const interval = setInterval(() => {
        progress += increment;
        progressBar.style.width = Math.min(progress, 100) + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 100);
}

function completeSynthesis(synthesis, reagent1, reagent2, catalyst) {
    // Adicionar produto à lista
    const product = {
        ...synthesis,
        timestamp: new Date().toLocaleTimeString(),
        reagents: [reagent1.name, reagent2.name],
        catalyst: catalyst ? catalyst.name : 'Nenhum',
        conditions: {
            temperature: synthesisState.temperature,
            heated: synthesisState.heating
        }
    };
    
    synthesisState.products.unshift(product);
    
    // Mostrar resultado
    showSynthesisResult(synthesis);
    
    // Atualizar lista de produtos
    updateProductsList();
    
    console.log(`✅ Síntese completa: ${synthesis.product}`);
}

function showSynthesisResult(synthesis) {
    const resultDiv = document.getElementById('synthesisResult');
    const titleEl = document.getElementById('resultTitle');
    const contentEl = document.getElementById('resultContent');
    
    titleEl.textContent = `Síntese Concluída: ${synthesis.product}`;
    contentEl.innerHTML = `
        <div style="margin-bottom: 15px;">
            <strong>Fórmula:</strong> ${synthesis.formula}<br>
            <strong>Rendimento:</strong> ${synthesis.yield}<br>
            <strong>Tipo:</strong> ${synthesis.type}<br>
            <strong>Dificuldade:</strong> ${synthesis.difficulty}
        </div>
        <div style="margin-bottom: 15px;">
            <strong>Descrição:</strong><br>
            ${synthesis.description}
        </div>
        <div>
            <strong>Propriedades:</strong><br>
            ${synthesis.properties}
        </div>
    `;
    
    resultDiv.className = `synthesis-result visible result-${synthesis.safety}`;
}

function updateProductsList() {
    const productsList = document.getElementById('productsList');
    
    if (synthesisState.products.length === 0) {
        productsList.innerHTML = `
            <p style="color: #aaa; text-align: center; margin-top: 50px;">
                <i class="fas fa-info-circle"></i><br>
                Nenhum produto sintetizado ainda.<br>
                Combine reagentes e inicie uma síntese!
            </p>
        `;
        return;
    }
    
    productsList.innerHTML = '';
    
    synthesisState.products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        
        productElement.innerHTML = `
            <div class="product-name">${product.product}</div>
            <div class="product-formula">${product.formula}</div>
            <div class="product-yield">Rendimento: ${product.yield}</div>
            <div style="font-size: 0.8rem; color: var(--texto-secundario); margin-top: 8px;">
                <strong>Reagentes:</strong> ${product.reagents.join(' + ')}<br>
                <strong>Catalisador:</strong> ${product.catalyst}<br>
                <strong>Temperatura:</strong> ${product.conditions.temperature}°C<br>
                <strong>Sintetizado em:</strong> ${product.timestamp}
            </div>
        `;
        
        productsList.appendChild(productElement);
    });
}

// Purificação
function purifyProduct() {
    if (synthesisState.products.length === 0) {
        showNotification('⚠️ Nenhum produto para purificar!', 'warning');
        return;
    }
    
    const lastProduct = synthesisState.products[0];
    const currentYield = parseFloat(lastProduct.yield);
    const purifiedYield = Math.min(currentYield + 5 + Math.random() * 10, 99);
    
    lastProduct.yield = purifiedYield.toFixed(1) + '%';
    lastProduct.product += ' (Purificado)';
    
    updateProductsList();
    showNotification(`🧹 Produto purificado! Novo rendimento: ${lastProduct.yield}`, 'success');
}

// Limpeza
function clearSynthesis() {
    // Resetar estações
    Object.keys(synthesisState.stations).forEach(stationNum => {
        synthesisState.stations[stationNum] = { reagent: null, filled: false };
        const station = document.querySelector(`.station-${stationNum}`);
        station.classList.remove('filled', 'active');
        station.innerHTML = `
            <i class="fas fa-plus-circle" style="font-size: 2rem; color: rgba(247, 37, 133, 0.5);"></i>
            <span style="font-size: 0.8rem; color: rgba(255, 255, 255, 0.7);">
                ${stationNum === '1' ? 'Reagente 1' : stationNum === '2' ? 'Reagente 2' : 'Catalisador'}
            </span>
        `;
        station.style.background = 'rgba(247, 37, 133, 0.05)';
    });
    
    // Limpar câmara de reação
    const liquid = document.getElementById('reactionLiquid');
    liquid.style.height = '0';
    liquid.style.background = 'var(--chemistry-blue)';
    liquid.style.boxShadow = 'none';
    
    // Resetar progresso
    document.getElementById('progressBar').style.width = '0';
    
    // Ocultar resultado
    const resultDiv = document.getElementById('synthesisResult');
    resultDiv.classList.remove('visible');
    
    // Desativar aquecimento
    synthesisState.heating = false;
    document.getElementById('heatBtn').classList.remove('active');
    document.getElementById('heatingElement').classList.remove('active');
    
    // Resetar temperatura
    synthesisState.temperature = 25;
    document.getElementById('temperatureSlider').value = 25;
    document.getElementById('temperatureDisplay').textContent = '25°C';
    
    updateSynthesisButton();
    showNotification('🧹 Laboratório limpo e pronto para nova síntese', 'success');
    
    console.log('🧹 Síntese limpa');
}

// Sistema de notificações
function showNotification(message, type) {
    // Remover notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const colors = {
        success: '#00e676',
        warning: '#ffc107',
        error: '#ff3d00',
        neutral: '#4fc3f7'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.9);
        color: ${colors[type] || colors.neutral};
        padding: 15px 20px;
        border-radius: 10px;
        border: 1px solid ${colors[type] || colors.neutral};
        z-index: 1000;
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Adicionar estilos de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);