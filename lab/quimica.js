        // Dados dos elementos da tabela periódica
        const periodicElements = [
            { number: 1, symbol: 'H', name: 'Hidrogênio', category: 'nonmetal', row: 1, col: 1 },
            { number: 2, symbol: 'He', name: 'Hélio', category: 'noble-gas', row: 1, col: 18 },
            { number: 3, symbol: 'Li', name: 'Lítio', category: 'alkali-metal', row: 2, col: 1 },
            { number: 4, symbol: 'Be', name: 'Berílio', category: 'alkaline-earth', row: 2, col: 2 },
            { number: 5, symbol: 'B', name: 'Boro', category: 'metalloid', row: 2, col: 13 },
            { number: 6, symbol: 'C', name: 'Carbono', category: 'nonmetal', row: 2, col: 14 },
            { number: 7, symbol: 'N', name: 'Nitrogênio', category: 'nonmetal', row: 2, col: 15 },
            { number: 8, symbol: 'O', name: 'Oxigênio', category: 'nonmetal', row: 2, col: 16 },
            { number: 9, symbol: 'F', name: 'Flúor', category: 'halogen', row: 2, col: 17 },
            { number: 10, symbol: 'Ne', name: 'Neônio', category: 'noble-gas', row: 2, col: 18 },
            { number: 11, symbol: 'Na', name: 'Sódio', category: 'alkali-metal', row: 3, col: 1 },
            { number: 12, symbol: 'Mg', name: 'Magnésio', category: 'alkaline-earth', row: 3, col: 2 },
            { number: 13, symbol: 'Al', name: 'Alumínio', category: 'post-transition', row: 3, col: 13 },
            { number: 14, symbol: 'Si', name: 'Silício', category: 'metalloid', row: 3, col: 14 },
            { number: 15, symbol: 'P', name: 'Fósforo', category: 'nonmetal', row: 3, col: 15 },
            { number: 16, symbol: 'S', name: 'Enxofre', category: 'nonmetal', row: 3, col: 16 },
            { number: 17, symbol: 'Cl', name: 'Cloro', category: 'halogen', row: 3, col: 17 },
            { number: 18, symbol: 'Ar', name: 'Argônio', category: 'noble-gas', row: 3, col: 18 },
            { number: 19, symbol: 'K', name: 'Potássio', category: 'alkali-metal', row: 4, col: 1 },
            { number: 20, symbol: 'Ca', name: 'Cálcio', category: 'alkaline-earth', row: 4, col: 2 },
            { number: 26, symbol: 'Fe', name: 'Ferro', category: 'transition-metal', row: 4, col: 8 },
            { number: 29, symbol: 'Cu', name: 'Cobre', category: 'transition-metal', row: 4, col: 11 },
            { number: 47, symbol: 'Ag', name: 'Prata', category: 'transition-metal', row: 5, col: 11 },
            { number: 79, symbol: 'Au', name: 'Ouro', category: 'transition-metal', row: 6, col: 11 },
            { number: 80, symbol: 'Hg', name: 'Mercúrio', category: 'transition-metal', row: 6, col: 12 },
            { number: 82, symbol: 'Pb', name: 'Chumbo', category: 'post-transition', row: 6, col: 14 }
        ];

        // Dados dos reagentes
        const reagentsData = [
            { element: "H2O", name: "Água (H₂O)", color: "#6495ED", category: "neutral", icon: "fa-tint" },
            { element: "HCl", name: "Ácido Clorídrico (HCl)", color: "#F0F8FF", category: "acid", icon: "fa-skull-crossbones" },
            { element: "NaOH", name: "Hidróxido de Sódio (NaOH)", color: "#FFFF00", category: "base", icon: "fa-fire" },
            { element: "Na", name: "Sódio (Na)", color: "#FFD700", category: "metal", icon: "fa-bolt" },
            { element: "Cl2", name: "Cloro (Cl₂)", color: "#7FFFD4", category: "gas", icon: "fa-wind" },
            { element: "H2", name: "Hidrogênio (H₂)", color: "#E6E6FA", category: "gas", icon: "fa-cloud" },
            { element: "CuSO4", name: "Sulfato de Cobre (CuSO₄)", color: "#00BFFF", category: "salt", icon: "fa-vial" },
            { element: "AgNO3", name: "Nitrato de Prata (AgNO₃)", color: "#FFFFFF", category: "salt", icon: "fa-vial" },
            { element: "CH3COOH", name: "Ácido Acético (CH₃COOH)", color: "#F5DEB3", category: "acid", icon: "fa-wine-bottle" },
            { element: "NaHCO3", name: "Bicarbonato de Sódio (NaHCO₃)", color: "#F5F5DC", category: "salt", icon: "fa-vial" },
            { element: "CaO", name: "Óxido de Cálcio (CaO)", color: "#D3D3D3", category: "oxide", icon: "fa-fire" },
            { element: "H2O2", name: "Peróxido de Hidrogênio (H₂O₂)", color: "#ADD8E6", category: "oxide", icon: "fa-vial" },
            { element: "KI", name: "Iodeto de Potássio (KI)", color: "#E6E6FA", category: "salt", icon: "fa-vial" },
            { element: "Fe", name: "Ferro (Fe)", color: "#B87333", category: "metal", icon: "fa-bolt" },
            { element: "Cu", name: "Cobre (Cu)", color: "#B87333", category: "metal", icon: "fa-bolt" },
            { element: "H2SO4", name: "Ácido Sulfúrico (H₂SO₄)", color: "#F0F8FF", category: "acid", icon: "fa-skull-crossbones" },
            { element: "KOH", name: "Hidróxido de Potássio (KOH)", color: "#FFFF00", category: "base", icon: "fa-fire" },
            { element: "NH3", name: "Amônia (NH₃)", color: "#E6E6FA", category: "base", icon: "fa-wind" },
            { element: "NaCl", name: "Cloreto de Sódio (NaCl)", color: "#FFFFFF", category: "salt", icon: "fa-mortar-pestle" },
            { element: "C6H12O6", name: "Glicose (C₆H₁₂O₆)", color: "#F5F5DC", category: "organic", icon: "fa-wine-bottle" },
            { element: "C2H5OH", name: "Etanol (C₂H₅OH)", color: "#F5DEB3", category: "organic", icon: "fa-wine-bottle" }
        ];

        // Reações químicas definidas
        const chemicalReactions = {
            "Na+H2O": {
                products: ["NaOH", "H2"],
                color: "#FFD700",
                type: "danger",
                equation: "2Na + 2H₂O → 2NaOH + H₂",
                description: "Reação violenta! Formação de hidróxido de sódio e gás hidrogênio.",
                temperature: 85,
                ph: 13.0,
                effects: ["explosion", "smoke"]
            },
            "HCl+NaOH": {
                products: ["NaCl", "H2O"],
                color: "#FFFFFF",
                type: "success",
                equation: "HCl + NaOH → NaCl + H₂O",
                description: "Neutralização ácido-base. Formação de sal e água.",
                temperature: 45,
                ph: 7.0,
                effects: ["bubble"]
            },
            "CuSO4+Fe": {
                products: ["FeSO4", "Cu"],
                color: "#B87333",
                type: "success",
                equation: "CuSO₄ + Fe → FeSO₄ + Cu",
                description: "Reação de deslocamento. O ferro desloca o cobre.",
                temperature: 35,
                ph: 6.5,
                effects: ["spark"]
            },
            "AgNO3+NaCl": {
                products: ["AgCl", "NaNO3"],
                color: "#FFFFFF",
                type: "neutral",
                equation: "AgNO₃ + NaCl → AgCl + NaNO₃",
                description: "Precipitação de cloreto de prata.",
                temperature: 25,
                ph: 7.0,
                effects: ["bubble"]
            },
            "CH3COOH+NaHCO3": {
                products: ["CH3COONa", "H2O", "CO2"],
                color: "#F5F5DC",
                type: "success",
                equation: "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂",
                description: "Reação ácido-base com liberação de CO₂.",
                temperature: 30,
                ph: 8.0,
                effects: ["bubble", "smoke"]
            },
            "H2O2+KI": {
                products: ["H2O", "O2", "I2"],
                color: "#FFD700",
                type: "warning",
                equation: "2H₂O₂ + 2KI → 2H₂O + O₂ + I₂",
                description: "Decomposição catalítica do peróxido com liberação de oxigênio.",
                temperature: 40,
                ph: 7.5,
                effects: ["bubble", "smoke"]
            }
        };

        // Estado da aplicação
        let currentReagents = [];
        let currentTemperature = 25;
        let currentPH = 7.0;
        let isHeating = false;
        let reactionHistory = JSON.parse(localStorage.getItem('labmania-history')) || [];

        // Elementos DOM
        const flask = document.getElementById('flask');
        const liquid = document.getElementById('liquid');
        const mixBtn = document.getElementById('mixBtn');
        const clearBtn = document.getElementById('clearBtn');
        const reactionResult = document.getElementById('reactionResult');
        const reactionsLog = document.getElementById('reactionsLog');
        const tempIndicator = document.getElementById('tempIndicator');
        const phIndicator = document.getElementById('phIndicator');
        const bunsenBurner = document.getElementById('bunsenBurner');
        const searchInput = document.getElementById('searchReagents');
        const reagentsGrid = document.getElementById('reagentsGrid');
        const periodicTable = document.getElementById('periodicTable');

        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
        });

        function initializeApp() {
            loadReagents();
            loadPeriodicTable();
            setupEventListeners();
            loadReactionHistory();
            updateFlask();
        }

        function loadReagents() {
            reagentsGrid.innerHTML = '';
            reagentsData.forEach(reagent => {
                const reagentEl = createReagentElement(reagent);
                reagentsGrid.appendChild(reagentEl);
            });
        }

        function createReagentElement(reagent) {
            const div = document.createElement('div');
            div.className = 'reagent';
            div.draggable = true;
            div.dataset.element = reagent.element;
            div.dataset.color = reagent.color;
            div.dataset.category = reagent.category;
            
            div.innerHTML = `
                <div>
                    <i class="fas ${reagent.icon}"></i> 
                    ${reagent.name}
                </div>
                <span class="reagent-category">${getCategoryName(reagent.category)}</span>
            `;
            
            // Event listeners para drag and drop
            div.addEventListener('dragstart', handleDragStart);
            div.addEventListener('dragend', handleDragEnd);
            
            return div;
        }

  function getCategoryName(category) {
    const names = {
        'acid': 'Ácido',
        'base': 'Base',
        'metal': 'Metal',
        'salt': 'Sal',
        'gas': 'Gás',
        'oxide': 'Óxido',
        'organic': 'Orgânico',
        'neutral': 'Neutro',
        'halogen': 'Halogênio'
    };
    return names[category] || category;
}
        function loadPeriodicTable() {
            periodicTable.innerHTML = '';
            const grid = Array(7).fill().map(() => Array(18).fill(null));
            
            periodicElements.forEach(element => {
                grid[element.row - 1][element.col - 1] = element;
            });
            
            grid.forEach((row, rowIndex) => {
                row.forEach((element, colIndex) => {
                    const div = document.createElement('div');
                    
                    if (element) {
                        div.className = 'periodic-element';
                        div.innerHTML = `
                            <div class="number">${element.number}</div>
                            <div class="symbol">${element.symbol}</div>
                        `;
                        div.title = element.name;
                        div.addEventListener('click', () => addElementToFlask(element.symbol));
                    } else {
                        div.style.visibility = 'hidden';
                    }
                    
                    periodicTable.appendChild(div);
                });
            });
        }

        function setupEventListeners() {
            // Drag and drop
            flask.addEventListener('dragover', handleDragOver);
            flask.addEventListener('drop', handleDrop);
            
            // Botões
            mixBtn.addEventListener('click', performReaction);
            clearBtn.addEventListener('click', clearFlask);
            document.getElementById('clearLogBtn').addEventListener('click', clearReactionLog);
            
            // Busca
            searchInput.addEventListener('input', filterReagents);
            
            // Filtros de categoria
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.addEventListener('click', () => filterByCategory(btn.dataset.category));
            });
            
            // Equipamentos
            document.querySelectorAll('.equipment-btn').forEach(btn => {
                btn.addEventListener('click', () => toggleEquipment(btn.dataset.equipment));
            });
            
            // Log entries
            reactionsLog.addEventListener('click', (e) => {
                const logEntry = e.target.closest('.log-entry');
                if (logEntry && !logEntry.classList.contains('welcome-message')) {
                    toggleLogEntry(logEntry);
                }
            });
        }

        function handleDragStart(e) {
            e.dataTransfer.setData('text/plain', e.target.dataset.element);
            e.target.classList.add('dragging');
        }

        function handleDragEnd(e) {
            e.target.classList.remove('dragging');
        }

        function handleDragOver(e) {
            e.preventDefault();
            flask.classList.add('highlight');
        }

        function handleDrop(e) {
            e.preventDefault();
            flask.classList.remove('highlight');
            
            const element = e.dataTransfer.getData('text/plain');
            addElementToFlask(element);
        }

        function addElementToFlask(element) {
            if (!currentReagents.includes(element)) {
                currentReagents.push(element);
                updateFlask();
                hideWelcomeMessage();
                
                // Habilita o botão de misturar se há pelo menos 2 reagentes
                if (currentReagents.length >= 2) {
                    mixBtn.disabled = false;
                } else {
                    mixBtn.disabled = true;
                }
            }
        }

        function updateFlask() {
            if (currentReagents.length === 0) {
                liquid.style.height = '0';
                liquid.style.backgroundColor = 'transparent';
                mixBtn.disabled = true;
                return;
            }
            
            // Calcula altura baseada no número de reagentes
            const height = Math.min(20 + (currentReagents.length * 15), 80);
            liquid.style.height = height + '%';
            
            // Mistura cores dos reagentes
            const colors = currentReagents.map(element => {
                const reagent = reagentsData.find(r => r.element === element);
                return reagent ? reagent.color : '#FFFFFF';
            });
            
            liquid.style.backgroundColor = mixColors(colors);
        }

        function mixColors(colors) {
            if (colors.length === 1) return colors[0];
            
            // Conversão simples de cores hex para mistura
            let r = 0, g = 0, b = 0;
            colors.forEach(color => {
                const hex = color.replace('#', '');
                r += parseInt(hex.substr(0, 2), 16);
                g += parseInt(hex.substr(2, 2), 16);
                b += parseInt(hex.substr(4, 2), 16);
            });
            
            r = Math.floor(r / colors.length);
            g = Math.floor(g / colors.length);
            b = Math.floor(b / colors.length);
            
            return `rgb(${r}, ${g}, ${b})`;
        }

        function performReaction() {
            if (currentReagents.length < 2) return;
            
            // Tenta encontrar uma reação
            const reaction = findReaction(currentReagents);
            
            if (reaction) {
                executeReaction(reaction);
            } else {
                executeGenericReaction();
            }
        }

        function findReaction(reagents) {
            const sortedReagents = reagents.sort().join('+');
            return chemicalReactions[sortedReagents] || null;
        }

        function executeReaction(reaction) {
            // Atualiza temperatura e pH
            currentTemperature = reaction.temperature;
            currentPH = reaction.ph;
            updateIndicators();
            
            // Atualiza cor da solução
            liquid.style.backgroundColor = reaction.color;
            
            // Adiciona efeitos visuais
            addVisualEffects(reaction.effects);
            
            // Mostra resultado
            showReactionResult(reaction);
            
            // Adiciona ao histórico
            addToHistory(reaction);
            
            // Limpa reagentes após a reação
            setTimeout(() => {
                currentReagents = [];
                updateFlask();
                hideReactionResult();
            }, 3000);
        }

        function executeGenericReaction() {
            const reaction = {
                equation: currentReagents.join(' + ') + ' → ?',
                description: 'Mistura complexa. Não foi possível determinar os produtos.',
                type: 'neutral',
                temperature: 25 + Math.random() * 10,
                ph: 6 + Math.random() * 2
            };
            
            currentTemperature = reaction.temperature;
            currentPH = reaction.ph;
            updateIndicators();
            
            addVisualEffects(['bubble']);
            showReactionResult(reaction);
            addToHistory(reaction);
            
            setTimeout(() => {
                currentReagents = [];
                updateFlask();
                hideReactionResult();
            }, 3000);
        }

        function addVisualEffects(effects) {
            effects.forEach(effect => {
                switch(effect) {
                    case 'bubble':
                        createBubbles();
                        break;
                    case 'explosion':
                        createExplosion();
                        break;
                    case 'smoke':
                        createSmoke();
                        break;
                    case 'spark':
                        createSparks();
                        break;
                }
            });
        }

        function createBubbles() {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const bubble = document.createElement('div');
                    bubble.className = 'bubble';
                    bubble.style.width = bubble.style.height = (Math.random() * 10 + 5) + 'px';
                    bubble.style.left = (Math.random() * 80 + 10) + '%';
                    bubble.style.bottom = '10%';
                    flask.appendChild(bubble);
                    
                    setTimeout(() => bubble.remove(), 1000);
                }, i * 200);
            }
        }

        function createExplosion() {
            flask.classList.add('shake');
            createSparks();
            createSmoke();
            setTimeout(() => flask.classList.remove('shake'), 500);
        }

        function createSmoke() {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const smoke = document.createElement('div');
                    smoke.className = 'smoke';
                    smoke.style.width = smoke.style.height = (Math.random() * 20 + 10) + 'px';
                    smoke.style.left = (Math.random() * 60 + 20) + '%';
                    smoke.style.top = '10%';
                    flask.appendChild(smoke);
                    
                    setTimeout(() => smoke.remove(), 2000);
                }, i * 300);
            }
        }

        function createSparks() {
            for (let i = 0; i < 8; i++) {
                const spark = document.createElement('div');
                spark.className = 'spark';
                spark.style.left = '50%';
                spark.style.top = '50%';
                spark.style.setProperty('--tx', (Math.random() * 100 - 50) + 'px');
                spark.style.setProperty('--ty', (Math.random() * 100 - 50) + 'px');
                spark.style.setProperty('--c', ['#ff6b35', '#f7931e', '#ffd700'][Math.floor(Math.random() * 3)]);
                flask.appendChild(spark);
                
                setTimeout(() => spark.remove(), 500);
            }
        }

        function showReactionResult(reaction) {
            reactionResult.className = `reaction-result visible ${reaction.type}`;
            reactionResult.innerHTML = `
                <strong>${reaction.equation}</strong><br>
                <small>${reaction.description}</small>
            `;
        }

        function hideReactionResult() {
            reactionResult.classList.remove('visible');
        }

        function updateIndicators() {
            tempIndicator.innerHTML = `<i class="fas fa-temperature-high"></i> ${Math.round(currentTemperature)}°C`;
            phIndicator.innerHTML = `<i class="fas fa-vial"></i> pH: ${currentPH.toFixed(1)}`;
        }

        function addToHistory(reaction) {
            const entry = {
                timestamp: new Date().toLocaleString('pt-BR'),
                reagents: [...currentReagents],
                equation: reaction.equation,
                description: reaction.description,
                type: reaction.type,
                temperature: currentTemperature,
                ph: currentPH
            };
            
            reactionHistory.unshift(entry);
            reactionHistory = reactionHistory.slice(0, 50); // Mantém apenas 50 entradas
            
            localStorage.setItem('labmania-history', JSON.stringify(reactionHistory));
            updateReactionLog();
        }

        function updateReactionLog() {
            const welcomeMsg = reactionsLog.querySelector('.welcome-message');
            reactionsLog.innerHTML = '';
            
            if (reactionHistory.length === 0) {
                reactionsLog.appendChild(welcomeMsg);
                return;
            }
            
            reactionHistory.forEach(entry => {
                const logEntry = createLogEntry(entry);
                reactionsLog.appendChild(logEntry);
            });
        }

        function createLogEntry(entry) {
            const div = document.createElement('div');
            div.className = `log-entry ${entry.type}`;
            
            div.innerHTML = `
                <i class="fas fa-flask"></i>
                <strong>${entry.equation}</strong>
                <br><small>${entry.timestamp}</small>
                <div class="elements">
                    <strong>Reagentes:</strong> ${entry.reagents.join(', ')}<br>
                    <strong>Temperatura:</strong> ${Math.round(entry.temperature)}°C<br>
                    <strong>pH:</strong> ${entry.ph.toFixed(1)}<br>
                    <strong>Descrição:</strong> ${entry.description}
                </div>
            `;
            
            return div;
        }

        function toggleLogEntry(entry) {
            entry.classList.toggle('expanded');
        }

        function loadReactionHistory() {
            updateReactionLog();
        }

        function clearFlask() {
            currentReagents = [];
            currentTemperature = 25;
            currentPH = 7.0;
            updateFlask();
            updateIndicators();
            hideReactionResult();
            mixBtn.disabled = true;
        }

        function clearReactionLog() {
            reactionHistory = [];
            localStorage.removeItem('labmania-history');
            updateReactionLog();
        }

        function hideWelcomeMessage() {
            const welcomeMsg = reactionsLog.querySelector('.welcome-message');
            if (welcomeMsg && !welcomeMsg.classList.contains('fade-out')) {
                welcomeMsg.classList.add('fade-out');
                setTimeout(() => {
                    if (welcomeMsg.parentNode) {
                        welcomeMsg.remove();
                    }
                }, 500);
            }
        }

        function filterReagents() {
            const searchTerm = searchInput.value.toLowerCase();
            const reagents = reagentsGrid.querySelectorAll('.reagent');
            
            reagents.forEach(reagent => {
                const text = reagent.textContent.toLowerCase();
                reagent.style.display = text.includes(searchTerm) ? 'flex' : 'none';
            });
        }

        function filterByCategory(category) {
            // Atualiza botões ativos
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`[data-category="${category}"]`).classList.add('active');
            
            // Mostra/esconde elementos
            if (category === 'table') {
                reagentsGrid.style.display = 'none';
                periodicTable.style.display = 'grid';
            } else {
                periodicTable.style.display = 'none';
                reagentsGrid.style.display = 'block';
                
                const reagents = reagentsGrid.querySelectorAll('.reagent');
                reagents.forEach(reagent => {
                    if (category === 'all' || reagent.dataset.category === category) {
                        reagent.style.display = 'flex';
                    } else {
                        reagent.style.display = 'none';
                    }
                });
            }
        }

        function toggleEquipment(equipment) {
            // Atualiza botões ativos
            document.querySelectorAll('.equipment-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`[data-equipment="${equipment}"]`).classList.add('active');
            
            // Liga/desliga equipamento
            if (equipment === 'bunsen') {
                bunsenBurner.classList.add('active');
                isHeating = true;
                // Simula aquecimento gradual
                const heatInterval = setInterval(() => {
                    if (isHeating && currentTemperature < 100) {
                        currentTemperature += 2;
                        updateIndicators();
                    } else {
                        clearInterval(heatInterval);
                    }
                }, 500);
            } else {
                bunsenBurner.classList.remove('active');
                isHeating = false;
                // Resfriamento gradual
                const coolInterval = setInterval(() => {
                    if (!isHeating && currentTemperature > 25) {
                        currentTemperature -= 1;
                        updateIndicators();
                    } else {
                        clearInterval(coolInterval);
                    }
                }, 1000);
            }
        }