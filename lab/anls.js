// Estado da análise molecular
let analysisState = {
    currentTechnique: 'ir',
    currentSample: null,
    isAnalyzing: false,
    progress: 0,
    results: null
};

// Base de dados de compostos para análise
const compounds = {
    ethanol: {
        name: 'Etanol',
        formula: 'C₂H₅OH',
        molecularWeight: 46.07,
        cas: '64-17-5',
        structure: 'CH₃CH₂OH',
        ir: {
            peaks: [
                { frequency: 3230, intensity: 'forte', assignment: 'O-H estiramento' },
                { frequency: 2980, intensity: 'forte', assignment: 'C-H estiramento alifático' },
                { frequency: 1460, intensity: 'média', assignment: 'C-H deformação' },
                { frequency: 1050, intensity: 'forte', assignment: 'C-O estiramento' },
                { frequency: 880, intensity: 'média', assignment: 'C-C estiramento' }
            ],
            interpretation: 'Espectro característico de álcool primário com grupo OH livre e cadeia etílica.'
        },
        nmr: {
            h1: [
                { shift: 1.25, multiplicity: 't', integration: 3, assignment: 'CH₃' },
                { shift: 3.72, multiplicity: 'q', integration: 2, assignment: 'CH₂' },
                { shift: 2.61, multiplicity: 's', integration: 1, assignment: 'OH' }
            ],
            c13: [
                { shift: 18.1, assignment: 'CH₃' },
                { shift: 58.2, assignment: 'CH₂' }
            ]
        },
        ms: {
            molecularIon: 46,
            baseIon: 31,
            fragments: [
                { mz: 46, intensity: 15, assignment: 'M⁺• (íon molecular)' },
                { mz: 31, intensity: 100, assignment: 'CH₂OH⁺ (base)' },
                { mz: 29, intensity: 45, assignment: 'CHO⁺' },
                { mz: 15, intensity: 25, assignment: 'CH₃⁺' }
            ]
        }
    },
    benzene: {
        name: 'Benzeno',
        formula: 'C₆H₆',
        molecularWeight: 78.11,
        cas: '71-43-2',
        structure: 'Anel aromático',
        ir: {
            peaks: [
                { frequency: 3030, intensity: 'média', assignment: 'C-H estiramento aromático' },
                { frequency: 1600, intensity: 'forte', assignment: 'C=C estiramento aromático' },
                { frequency: 1500, intensity: 'forte', assignment: 'C=C estiramento aromático' },
                { frequency: 1460, intensity: 'média', assignment: 'C-H deformação no plano' },
                { frequency: 675, intensity: 'forte', assignment: 'C-H deformação fora do plano' }
            ],
            interpretation: 'Espectro típico de composto aromático monossubstituído com alta simetria.'
        },
        nmr: {
            h1: [
                { shift: 7.37, multiplicity: 's', integration: 6, assignment: 'H aromáticos' }
            ],
            c13: [
                { shift: 128.4, assignment: 'C aromáticos' }
            ]
        },
        ms: {
            molecularIon: 78,
            baseIon: 78,
            fragments: [
                { mz: 78, intensity: 100, assignment: 'M⁺• (íon molecular/base)' },
                { mz: 77, intensity: 20, assignment: 'M-H⁺' },
                { mz: 52, intensity: 15, assignment: 'C₄H₄⁺•' },
                { mz: 51, intensity: 25, assignment: 'C₄H₃⁺' }
            ]
        }
    },
    acetone: {
        name: 'Acetona',
        formula: 'C₃H₆O',
        molecularWeight: 58.08,
        cas: '67-64-1',
        structure: 'CH₃COCH₃',
        ir: {
            peaks: [
                { frequency: 2970, intensity: 'forte', assignment: 'C-H estiramento alifático' },
                { frequency: 1715, intensity: 'muito forte', assignment: 'C=O estiramento cetona' },
                { frequency: 1435, intensity: 'média', assignment: 'C-H deformação' },
                { frequency: 1365, intensity: 'forte', assignment: 'C-H deformação simétrica' },
                { frequency: 1230, intensity: 'forte', assignment: 'C-C estiramento' }
            ],
            interpretation: 'Espectro característico de cetona simétrica com banda carbonila intensa.'
        },
        nmr: {
            h1: [
                { shift: 2.17, multiplicity: 's', integration: 6, assignment: 'CH₃ (2x)' }
            ],
            c13: [
                { shift: 29.8, assignment: 'CH₃' },
                { shift: 206.7, assignment: 'C=O' }
            ]
        },
        ms: {
            molecularIon: 58,
            baseIon: 43,
            fragments: [
                { mz: 58, intensity: 25, assignment: 'M⁺• (íon molecular)' },
                { mz: 43, intensity: 100, assignment: 'CH₃CO⁺ (acetil, base)' },
                { mz: 15, intensity: 45, assignment: 'CH₃⁺' }
            ]
        }
    },
    caffeine: {
        name: 'Cafeína',
        formula: 'C₈H₁₀N₄O₂',
        molecularWeight: 194.19,
        cas: '58-08-2',
        structure: 'Purina metilada',
        ir: {
            peaks: [
                { frequency: 2955, intensity: 'média', assignment: 'C-H estiramento alifático' },
                { frequency: 1700, intensity: 'forte', assignment: 'C=O estiramento amida' },
                { frequency: 1655, intensity: 'forte', assignment: 'C=O estiramento amida' },
                { frequency: 1600, intensity: 'média', assignment: 'C=N estiramento' },
                { frequency: 1550, intensity: 'forte', assignment: 'C=C aromático' },
                { frequency: 1240, intensity: 'forte', assignment: 'C-N estiramento' }
            ],
            interpretation: 'Espectro complexo de alcaloide purínico com múltiplas carbonilas.'
        },
        nmr: {
            h1: [
                { shift: 7.52, multiplicity: 's', integration: 1, assignment: 'H-8 imidazol' },
                { shift: 4.01, multiplicity: 's', integration: 3, assignment: 'N-CH₃' },
                { shift: 3.56, multiplicity: 's', integration: 3, assignment: 'N-CH₃' },
                { shift: 3.39, multiplicity: 's', integration: 3, assignment: 'N-CH₃' }
            ],
            c13: [
                { shift: 155.4, assignment: 'C=O' },
                { shift: 151.7, assignment: 'C=O' },
                { shift: 148.8, assignment: 'C aromático' },
                { shift: 141.9, assignment: 'CH aromático' },
                { shift: 33.5, assignment: 'N-CH₃' },
                { shift: 29.8, assignment: 'N-CH₃' },
                { shift: 27.9, assignment: 'N-CH₃' }
            ]
        },
        ms: {
            molecularIon: 194,
            baseIon: 194,
            fragments: [
                { mz: 194, intensity: 100, assignment: 'M⁺• (íon molecular/base)' },
                { mz: 109, intensity: 45, assignment: 'M-C₃H₅N₂O⁺' },
                { mz: 82, intensity: 25, assignment: 'Fragmento purínico' },
                { mz: 67, intensity: 15, assignment: 'C₄H₅N⁺' }
            ]
        }
    },
    aspirin: {
        name: 'Aspirina (Ácido Acetilsalicílico)',
        formula: 'C₉H₈O₄',
        molecularWeight: 180.16,
        cas: '50-78-2',
        structure: 'Derivado salicílico acetilado',
        ir: {
            peaks: [
                { frequency: 3200, intensity: 'larga', assignment: 'O-H estiramento (COOH)' },
                { frequency: 1760, intensity: 'forte', assignment: 'C=O estiramento éster' },
                { frequency: 1680, intensity: 'forte', assignment: 'C=O estiramento ácido' },
                { frequency: 1600, intensity: 'forte', assignment: 'C=C aromático' },
                { frequency: 1480, intensity: 'média', assignment: 'C=C aromático' },
                { frequency: 1200, intensity: 'forte', assignment: 'C-O estiramento éster' }
            ],
            interpretation: 'Espectro mostrando grupos funcionais éster e ácido carboxílico em anel aromático.'
        },
        nmr: {
            h1: [
                { shift: 11.1, multiplicity: 's', integration: 1, assignment: 'COOH' },
                { shift: 8.09, multiplicity: 'd', integration: 1, assignment: 'H aromático orto' },
                { shift: 7.65, multiplicity: 't', integration: 1, assignment: 'H aromático meta' },
                { shift: 7.38, multiplicity: 't', integration: 1, assignment: 'H aromático meta' },
                { shift: 7.20, multiplicity: 'd', integration: 1, assignment: 'H aromático orto' },
                { shift: 2.32, multiplicity: 's', integration: 3, assignment: 'CH₃CO' }
            ],
            c13: [
                { shift: 169.8, assignment: 'C=O éster' },
                { shift: 169.3, assignment: 'COOH' },
                { shift: 150.2, assignment: 'C aromático' },
                { shift: 135.8, assignment: 'CH aromático' },
                { shift: 131.4, assignment: 'CH aromático' },
                { shift: 126.0, assignment: 'CH aromático' },
                { shift: 123.8, assignment: 'CH aromático' },
                { shift: 122.5, assignment: 'C aromático' },
                { shift: 21.1, assignment: 'CH₃' }
            ]
        },
        ms: {
            molecularIon: 180,
            baseIon: 138,
            fragments: [
                { mz: 180, intensity: 40, assignment: 'M⁺• (íon molecular)' },
                { mz: 138, intensity: 100, assignment: 'M-CH₂CO⁺ (base)' },
                { mz: 120, intensity: 25, assignment: 'M-CH₃COOH⁺' },
                { mz: 92, intensity: 15, assignment: 'C₆H₄O⁺' }
            ]
        }
    },
    glucose: {
        name: 'Glicose',
        formula: 'C₆H₁₂O₆',
        molecularWeight: 180.16,
        cas: '50-99-7',
        structure: 'Monossacarídeo hexose',
        ir: {
            peaks: [
                { frequency: 3400, intensity: 'muito larga', assignment: 'O-H estiramento (múltiplos)' },
                { frequency: 2930, intensity: 'média', assignment: 'C-H estiramento alifático' },
                { frequency: 1420, intensity: 'média', assignment: 'C-H deformação' },
                { frequency: 1150, intensity: 'forte', assignment: 'C-O estiramento (múltiplos)' },
                { frequency: 1080, intensity: 'forte', assignment: 'C-O estiramento' },
                { frequency: 1040, intensity: 'forte', assignment: 'C-O estiramento' }
            ],
            interpretation: 'Espectro típico de carboidrato com múltiplas hidroxilas e ligações C-O.'
        },
        nmr: {
            h1: [
                { shift: 5.23, multiplicity: 'd', integration: 1, assignment: 'H-1 (α-anômero)' },
                { shift: 4.65, multiplicity: 'd', integration: 1, assignment: 'H-1 (β-anômero)' },
                { shift: 3.90, multiplicity: 'm', integration: 1, assignment: 'H-6a' },
                { shift: 3.73, multiplicity: 'm', integration: 1, assignment: 'H-6b' },
                { shift: 3.50, multiplicity: 'm', integration: 4, assignment: 'H-2,3,4,5' }
            ],
            c13: [
                { shift: 96.8, assignment: 'C-1 (β)' },
                { shift: 92.9, assignment: 'C-1 (α)' },
                { shift: 77.0, assignment: 'C-3' },
                { shift: 76.7, assignment: 'C-5' },
                { shift: 74.0, assignment: 'C-2' },
                { shift: 70.6, assignment: 'C-4' },
                { shift: 61.7, assignment: 'C-6' }
            ]
        },
        ms: {
            molecularIon: 180,
            baseIon: 60,
            fragments: [
                { mz: 180, intensity: 5, assignment: 'M⁺• (íon molecular)' },
                { mz: 162, intensity: 15, assignment: 'M-H₂O⁺' },
                { mz: 144, intensity: 25, assignment: 'M-2H₂O⁺' },
                { mz: 60, intensity: 100, assignment: 'C₂H₄O₂⁺• (base)' },
                { mz: 73, intensity: 45, assignment: 'C₃H₅O₂⁺' }
            ]
        }
    }
};

// Técnicas analíticas disponíveis
const techniques = {
    ir: {
        name: 'Espectroscopia no Infravermelho',
        description: 'Análise de vibrações moleculares',
        xLabel: 'Número de onda (cm⁻¹)',
        yLabel: 'Transmitância (%)',
        range: { min: 4000, max: 500 }
    },
    nmr: {
        name: 'Ressonância Magnética Nuclear',
        description: 'Análise estrutural por RMN',
        xLabel: 'Deslocamento químico (ppm)',
        yLabel: 'Intensidade',
        range: { min: 12, max: 0 }
    },
    ms: {
        name: 'Espectrometria de Massa',
        description: 'Análise de fragmentação molecular',
        xLabel: 'm/z',
        yLabel: 'Intensidade relativa (%)',
        range: { min: 0, max: 300 }
    },
    gc: {
        name: 'Cromatografia Gasosa',
        description: 'Separação e identificação',
        xLabel: 'Tempo de retenção (min)',
        yLabel: 'Intensidade',
        range: { min: 0, max: 20 }
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔬 Simulador de Análise Molecular carregado');
    setupEventListeners();
    updateTechniqueDisplay();
});

// Configurar event listeners
function setupEventListeners() {
    // Seleção de técnicas
    document.querySelectorAll('.technique-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.technique-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            analysisState.currentTechnique = item.dataset.technique;
            updateTechniqueDisplay();
        });
    });

    // Seleção de amostras
    document.querySelectorAll('.sample-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectSample(btn.dataset.sample);
        });
    });

    // Upload de arquivo
    document.getElementById('fileInput').addEventListener('change', handleFileUpload);
}

// Atualizar display da técnica selecionada
function updateTechniqueDisplay() {
    const technique = techniques[analysisState.currentTechnique];
    document.getElementById('techniqueTitle').textContent = technique.name;
    
    // Resetar display do espectro
    const spectrumDisplay = document.getElementById('spectrumDisplay');
    spectrumDisplay.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-chart-area"></i>
            <h3>Selecione uma amostra para análise</h3>
            <p>${technique.description}</p>
        </div>
    `;
    
    // Resetar resultados
    document.getElementById('resultsContent').innerHTML = `
        <div class="empty-state">
            <i class="fas fa-flask"></i>
            <h3>Aguardando análise</h3>
            <p>Os resultados aparecerão aqui após a análise</p>
        </div>
    `;
    
    analysisState.currentSample = null;
    document.getElementById('analyzeBtn').disabled = true;
}

// Selecionar amostra
function selectSample(sampleId) {
    if (!compounds[sampleId]) {
        console.error(`Composto ${sampleId} não encontrado`);
        return;
    }
    
    analysisState.currentSample = sampleId;
    
    // Atualizar interface
    document.querySelectorAll('.sample-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-sample="${sampleId}"]`).classList.add('active');
    
    // Atualizar input de amostra
    const sampleInput = document.getElementById('sampleInput');
    sampleInput.classList.add('has-sample');
    
    const compound = compounds[sampleId];
    sampleInput.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px;">
            <div style="background: var(--chemistry-primary); padding: 15px; border-radius: 50%; color: white;">
                <i class="fas fa-flask" style="font-size: 1.5rem;"></i>
            </div>
            <div>
                <h3 style="color: var(--chemistry-primary); margin-bottom: 5px;">${compound.name}</h3>
                <p style="color: var(--texto-secundario); margin-bottom: 5px;">Fórmula: ${compound.formula}</p>
                <p style="color: var(--texto-secundario);">Massa Molecular: ${compound.molecularWeight} g/mol</p>
            </div>
        </div>
    `;
    
    // Habilitar botão de análise
    document.getElementById('analyzeBtn').disabled = false;
    
    console.log(`✅ Amostra selecionada: ${compound.name}`);
    showNotification(`Amostra carregada: ${compound.name}`, 'success');
}

// Gerenciar upload de arquivo
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    console.log(`📁 Arquivo carregado: ${file.name}`);
    showNotification(`Arquivo carregado: ${file.name}`, 'success');
    
    // Simular carregamento de arquivo
    analysisState.currentSample = 'custom';
    document.getElementById('analyzeBtn').disabled = false;
    
    const sampleInput = document.getElementById('sampleInput');
    sampleInput.classList.add('has-sample');
    sampleInput.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px;">
            <div style="background: var(--chemistry-blue); padding: 15px; border-radius: 50%; color: white;">
                <i class="fas fa-file-upload" style="font-size: 1.5rem;"></i>
            </div>
            <div>
                <h3 style="color: var(--chemistry-blue); margin-bottom: 5px;">Arquivo Personalizado</h3>
                <p style="color: var(--texto-secundario); margin-bottom: 5px;">Nome: ${file.name}</p>
                <p style="color: var(--texto-secundario);">Tamanho: ${(file.size / 1024).toFixed(1)} KB</p>
            </div>
        </div>
    `;
}

// Iniciar análise
function startAnalysis() {
    if (!analysisState.currentSample) {
        showNotification('⚠️ Selecione uma amostra primeiro!', 'warning');
        return;
    }
    
    if (analysisState.isAnalyzing) {
        showNotification('⚠️ Análise já em andamento!', 'warning');
        return;
    }
    
    analysisState.isAnalyzing = true;
    analysisState.progress = 0;
    
    // Atualizar interface
    document.getElementById('analyzeBtn').disabled = true;
    document.getElementById('analyzeBtn').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analisando...';
    
    console.log(`🔬 Iniciando análise ${analysisState.currentTechnique} da amostra ${analysisState.currentSample}`);
    
    // Simular progresso da análise
    const progressInterval = setInterval(() => {
        analysisState.progress += Math.random() * 15 + 5;
        
        if (analysisState.progress >= 100) {
            analysisState.progress = 100;
            clearInterval(progressInterval);
            completeAnalysis();
        }
        
        updateProgressBar();
    }, 200);
    
    // Mostrar espectro simulado
    setTimeout(() => {
        generateSpectrum();
    }, 500);
}

// Atualizar barra de progresso
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${analysisState.progress}%`;
}

// Gerar espectro simulado
function generateSpectrum() {
    const spectrumDisplay = document.getElementById('spectrumDisplay');
    const technique = techniques[analysisState.currentTechnique];
    
    // Limpar display anterior
    spectrumDisplay.innerHTML = '';
    
    // Adicionar grid de fundo
    const grid = document.createElement('div');
    grid.className = 'spectrum-grid';
    spectrumDisplay.appendChild(grid);
    
    // Adicionar labels dos eixos
    const labels = document.createElement('div');
    labels.className = 'spectrum-labels';
    labels.innerHTML = `
        <span>${technique.range.min}</span>
        <span style="position: absolute; left: 50%; transform: translateX(-50%);">${technique.xLabel}</span>
        <span>${technique.range.max}</span>
    `;
    spectrumDisplay.appendChild(labels);
    
    // Gerar picos se houver dados do composto
    if (analysisState.currentSample !== 'custom' && compounds[analysisState.currentSample]) {
        const compound = compounds[analysisState.currentSample];
        generateSpectrumPeaks(spectrumDisplay, compound, analysisState.currentTechnique);
    } else {
        // Gerar espectro genérico para arquivos personalizados
        generateGenericSpectrum(spectrumDisplay);
    }
}

// Gerar picos do espectro baseados nos dados do composto
function generateSpectrumPeaks(container, compound, technique) {
    const data = compound[technique];
    if (!data) return;
    
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    if (technique === 'ir') {
        data.peaks.forEach((peak, index) => {
            setTimeout(() => {
                const line = document.createElement('div');
                line.className = 'spectrum-line';
                
                // Posição baseada na frequência (4000-500 cm⁻¹)
                const position = ((4000 - peak.frequency) / 3500) * containerWidth;
                
                // Altura baseada na intensidade
                const intensityMap = { 'muito forte': 80, 'forte': 60, 'média': 40, 'fraca': 20, 'larga': 70 };
                const height = (intensityMap[peak.intensity] || 40) + Math.random() * 20;
                
                line.style.left = `${position}px`;
                line.style.bottom = '10px';
                line.style.width = '3px';
                line.style.height = `${height}%`;
                line.style.setProperty('--line-height', `${height}%`);
                
                // Adicionar tooltip
                line.title = `${peak.frequency} cm⁻¹ - ${peak.assignment} (${peak.intensity})`;
                
                container.appendChild(line);
            }, index * 100);
        });
    } else if (technique === 'ms') {
        data.fragments.forEach((fragment, index) => {
            setTimeout(() => {
                const line = document.createElement('div');
                line.className = 'spectrum-line';
                
                // Posição baseada em m/z
                const position = (fragment.mz / 300) * containerWidth;
                const height = fragment.intensity;
                
                line.style.left = `${position}px`;
                line.style.bottom = '10px';
                line.style.width = '2px';
                line.style.height = `${height}%`;
                line.style.setProperty('--line-height', `${height}%`);
                
                line.title = `m/z ${fragment.mz} - ${fragment.assignment} (${fragment.intensity}%)`;
                
                container.appendChild(line);
            }, index * 150);
        });
    } else if (technique === 'nmr') {
        data.h1.forEach((signal, index) => {
            setTimeout(() => {
                const line = document.createElement('div');
                line.className = 'spectrum-line';
                
                // Posição baseada no deslocamento químico (12-0 ppm)
                const position = ((12 - signal.shift) / 12) * containerWidth;
                const height = signal.integration * 15 + 20;
                
                line.style.left = `${position}px`;
                line.style.bottom = '10px';
                line.style.width = '4px';
                line.style.height = `${height}%`;
                line.style.setProperty('--line-height', `${height}%`);
                
                line.title = `${signal.shift} ppm - ${signal.assignment} (${signal.multiplicity}, ${signal.integration}H)`;
                
                container.appendChild(line);
            }, index * 200);
        });
    }
}

// Gerar espectro genérico
function generateGenericSpectrum(container) {
    const containerWidth = container.clientWidth;
    const numPeaks = Math.floor(Math.random() * 8) + 5;
    
    for (let i = 0; i < numPeaks; i++) {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = 'spectrum-line';
            
            const position = Math.random() * containerWidth;
            const height = Math.random() * 70 + 20;
            
            line.style.left = `${position}px`;
            line.style.bottom = '10px';
            line.style.width = '3px';
            line.style.height = `${height}%`;
            line.style.setProperty('--line-height', `${height}%`);
            
            line.title = 'Pico não identificado';
            
            container.appendChild(line);
        }, i * 150);
    }
}

// Completar análise
function completeAnalysis() {
    analysisState.isAnalyzing = false;
    
    // Restaurar botão
    document.getElementById('analyzeBtn').disabled = false;
    document.getElementById('analyzeBtn').innerHTML = '<i class="fas fa-play"></i> Iniciar Análise';
    
    // Gerar resultados
    generateResults();
    
    console.log('✅ Análise concluída');
    showNotification('✅ Análise concluída com sucesso!', 'success');
}

// Gerar resultados da análise
function generateResults() {
    const resultsContent = document.getElementById('resultsContent');
    
    if (analysisState.currentSample === 'custom') {
        // Resultados genéricos para arquivo personalizado
        resultsContent.innerHTML = `
            <div class="result-section">
                <div class="result-title">🔍 Análise Estrutural</div>
                <div class="compound-identified">
                    <div class="compound-name">Composto Desconhecido</div>
                    <div class="compound-formula">Estrutura a ser determinada</div>
                    <div class="confidence-score">Confiança: Em análise</div>
                </div>
                <p style="color: var(--texto-secundario); margin-top: 10px;">
                    Arquivo personalizado carregado. Análise detalhada requer dados espectrais adicionais.
                </p>
            </div>
            
            <div class="result-section">
                <div class="result-title">📊 Dados Espectrais</div>
                <p style="color: var(--texto-secundario);">
                    Processamento automático em andamento. Consulte um especialista para interpretação completa.
                </p>
            </div>
        `;
        return;
    }
    
    const compound = compounds[analysisState.currentSample];
    const technique = analysisState.currentTechnique;
    const data = compound[technique];
    
    if (!data) {
        resultsContent.innerHTML = `
            <div class="result-section">
                <div class="result-title">⚠️ Dados Indisponíveis</div>
                <p style="color: var(--texto-secundario);">
                    Dados de ${techniques[technique].name} não disponíveis para este composto.
                </p>
            </div>
        `;
        return;
    }
    
    let resultsHTML = `
        <div class="result-section">
            <div class="result-title">🎯 Composto Identificado</div>
            <div class="compound-identified">
                <div class="compound-name">${compound.name}</div>
                <div class="compound-formula">${compound.formula}</div>
                <div class="confidence-score">Confiança: 98.5%</div>
            </div>
            <div style="margin-top: 10px;">
                <strong>Massa Molecular:</strong> ${compound.molecularWeight} g/mol<br>
                <strong>CAS:</strong> ${compound.cas}<br>
                <strong>Estrutura:</strong> ${compound.structure}
            </div>
        </div>
    `;
    
    // Adicionar dados específicos da técnica
    if (technique === 'ir') {
        resultsHTML += `
            <div class="result-section">
                <div class="result-title">📡 Bandas de Absorção IR</div>
                <div class="peak-list">
                    ${data.peaks.map(peak => `
                        <div class="peak-item">
                            <span class="peak-frequency">${peak.frequency} cm⁻¹</span>
                            <span class="peak-assignment">${peak.assignment} (${peak.intensity})</span>
                        </div>
                    `).join('')}
                </div>
                <p style="color: var(--texto-secundario); margin-top: 10px; font-style: italic;">
                    <strong>Interpretação:</strong> ${data.interpretation}
                </p>
            </div>
        `;
    } else if (technique === 'nmr') {
        resultsHTML += `
            <div class="result-section">
                <div class="result-title">🧲 Sinais RMN ¹H</div>
                <div class="peak-list">
                    ${data.h1.map(signal => `
                        <div class="peak-item">
                            <span class="peak-frequency">${signal.shift} ppm</span>
                            <span class="peak-assignment">${signal.assignment} (${signal.multiplicity}, ${signal.integration}H)</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="result-section">
                <div class="result-title">🧲 Sinais RMN ¹³C</div>
                <div class="peak-list">
                    ${data.c13.map(signal => `
                        <div class="peak-item">
                            <span class="peak-frequency">${signal.shift} ppm</span>
                            <span class="peak-assignment">${signal.assignment}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (technique === 'ms') {
        resultsHTML += `
            <div class="result-section">
                <div class="result-title">⚛️ Padrão de Fragmentação</div>
                <div style="margin-bottom: 10px;">
                    <strong>Íon Molecular:</strong> m/z ${data.molecularIon}<br>
                    <strong>Pico Base:</strong> m/z ${data.baseIon}
                </div>
                <div class="peak-list">
                    ${data.fragments.map(frag => `
                        <div class="peak-item">
                            <span class="peak-frequency">m/z ${frag.mz}</span>
                            <span class="peak-assignment">${frag.assignment} (${frag.intensity}%)</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Estrutura molecular
    resultsHTML += `
        <div class="result-section">
            <div class="result-title">🧬 Estrutura Molecular</div>
            <div class="molecular-structure">
                <div class="structure-placeholder">
                    <div style="text-align: center;">
                        <i class="fas fa-project-diagram" style="font-size: 3rem; color: var(--chemistry-primary); margin-bottom: 10px;"></i>
                        <div>Visualização 3D</div>
                        <div style="font-size: 0.8rem; margin-top: 5px;">${compound.formula}</div>
                    </div>
                </div>
                <p style="margin-top: 10px; color: var(--texto-secundario);">
                    Modelo molecular interativo disponível em versão completa
                </p>
            </div>
        </div>
    `;
    
    // Opções de exportação
    resultsHTML += `
        <div class="result-section">
            <div class="result-title">💾 Exportar Resultados</div>
            <div class="export-options">
                <button class="export-btn" onclick="exportResults('pdf')">
                    <i class="fas fa-file-pdf"></i> PDF
                </button>
                <button class="export-btn" onclick="exportResults('csv')">
                    <i class="fas fa-table"></i> CSV
                </button>
                <button class="export-btn" onclick="exportResults('json')">
                    <i class="fas fa-code"></i> JSON
                </button>
            </div>
        </div>
    `;
    
    resultsContent.innerHTML = resultsHTML;
}

// Calibrar instrumento
function calibrateInstrument() {
    console.log('🔧 Calibrando instrumento...');
    showNotification('🔧 Instrumento calibrado com sucesso!', 'success');
    
    // Simular calibração
    const technique = techniques[analysisState.currentTechnique];
    const calibrationTime = 2000;
    
    document.querySelector('.calibrate-btn').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Calibrando...';
    document.querySelector('.calibrate-btn').disabled = true;
    
    setTimeout(() => {
        document.querySelector('.calibrate-btn').innerHTML = '<i class="fas fa-cog"></i> Calibrar';
        document.querySelector('.calibrate-btn').disabled = false;
        showNotification(`${technique.name} calibrado e pronto para uso!`, 'success');
    }, calibrationTime);
}

// Resetar análise
function resetAnalysis() {
    analysisState.currentSample = null;
    analysisState.isAnalyzing = false;
    analysisState.progress = 0;
    
    // Resetar interface
    document.getElementById('sampleInput').classList.remove('has-sample');
    document.getElementById('sampleInput').innerHTML = `
        <div class="sample-upload">
            <i class="fas fa-upload" style="font-size: 2rem; color: rgba(247, 37, 133, 0.5);"></i>
            <p style="margin: 10px 0; color: var(--texto-secundario);">
                Carregue uma amostra ou selecione um composto de exemplo
            </p>
            <label for="fileInput" class="upload-btn">
                <i class="fas fa-file-upload"></i> Carregar Amostra
            </label>
            <input type="file" id="fileInput" accept=".mol,.sdf,.pdb">
        </div>

        <div class="sample-selector">
            <button class="sample-btn" data-sample="ethanol">Etanol</button>
            <button class="sample-btn" data-sample="benzene">Benzeno</button>
            <button class="sample-btn" data-sample="acetone">Acetona</button>
            <button class="sample-btn" data-sample="caffeine">Cafeína</button>
            <button class="sample-btn" data-sample="aspirin">Aspirina</button>
            <button class="sample-btn" data-sample="glucose">Glicose</button>
        </div>
    `;
    
    document.querySelectorAll('.sample-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.addEventListener('click', () => {
            selectSample(btn.dataset.sample);
        });
    });
    
    // Resetar file input
    document.getElementById('fileInput').addEventListener('change', handleFileUpload);
    
    updateTechniqueDisplay();
    updateProgressBar();
    
    console.log('🔄 Análise resetada');
    showNotification('🔄 Sistema resetado', 'neutral');
}

// Exportar resultados
function exportResults(format) {
    if (!analysisState.currentSample) {
        showNotification('⚠️ Nenhum resultado para exportar!', 'warning');
        return;
    }
    
    console.log(`📤 Exportando resultados em formato ${format.toUpperCase()}`);
    
    const technique = techniques[analysisState.currentTechnique];
    const compound = compounds[analysisState.currentSample] || { name: 'Composto Desconhecido' };
    
    // Simular exportação
    showNotification(`📤 Exportando ${technique.name} - ${compound.name} (${format.toUpperCase()})...`, 'info');
    
    setTimeout(() => {
        showNotification(`✅ Arquivo ${format.toUpperCase()} exportado com sucesso!`, 'success');
    }, 1500);
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    // Remover notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--fundo-card);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            border-left: 4px solid var(--chemistry-primary);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            max-width: 400px;
            animation: slideIn 0.3s ease;
        ">
            ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 3000);
}

// Adicionar estilos de animação para notificações
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

console.log('🧪 Sistema de Análise Molecular carregado e pronto para uso!');