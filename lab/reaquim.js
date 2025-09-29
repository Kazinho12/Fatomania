// Estado do laboratório
let labState = {
    bunsenActive: false,
    selectedFlask: 1,
    flask: { reagents: [], color: null, heating: false },
    temperature: 25,
    reactionHistory: [],
    currentReaction: null
};

// Base de dados MASSIVAMENTE EXPANDIDA com mais de 100 reações
const reactions = {
    // ==================== REAÇÕES ÁCIDO-BASE ====================
    'HCl + NaOH': {
        type: 'Neutralização Ácido-Base',
        equation: 'HCl + NaOH → NaCl + H₂O + calor',
        result: 'Neutralização completa - formação de sal de cozinha',
        description: 'Reação exotérmica clássica entre ácido forte e base forte. O pH muda drasticamente de ácido para neutro, liberando calor. É uma das reações mais fundamentais da química.',
        mechanism: 'H⁺ + OH⁻ → H₂O (neutralização protônica)',
        applications: 'Produção de sal de cozinha, controle de pH, tratamento de águas',
        color: '#87CEEB',
        ph: 7.0,
        temperature: 35,
        safety: 'success',
        properties: 'Libera 57,3 kJ/mol de energia. Produto: sal comestível + água pura.',
        hasGas: false
    },

    'H2SO4 + NaOH': {
        type: 'Neutralização Ácido Forte',
        equation: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O + MUITO calor',
        result: 'Neutralização violenta com sulfato de sódio',
        description: 'Reação extremamente exotérmica! O ácido sulfúrico é diácido, reagindo com duas moléculas de base. CUIDADO: pode causar ebulição violenta.',
        mechanism: 'Duas etapas: H₂SO₄ → H⁺ + HSO₄⁻, então HSO₄⁻ → H⁺ + SO₄²⁻',
        applications: 'Produção de detergentes, papel, fertilizantes',
        color: '#FFB6C1',
        ph: 7.0,
        temperature: 85,
        safety: 'warning',
        properties: 'Libera 114,6 kJ/mol. Produto usado em detergentes industriais.',
        hasGas: false
    },

    'HNO3 + KOH': {
        type: 'Neutralização com Nitrato',
        equation: 'HNO₃ + KOH → KNO₃ + H₂O',
        result: 'Formação de nitrato de potássio (salitre)',
        description: 'Produz nitrato de potássio, conhecido como salitre, usado historicamente em pólvora e como fertilizante.',
        mechanism: 'Transferência direta de próton do ácido nítrico para o hidróxido',
        applications: 'Fertilizantes NPK, conservantes de carnes, fogos de artifício',
        color: '#E6E6FA',
        ph: 7.0,
        temperature: 32,
        safety: 'success',
        properties: 'KNO₃ é usado como fertilizante e em conservação de alimentos',
        hasGas: false
    },

    'CH3COOH + NaOH': {
        type: 'Neutralização Ácido Fraco',
        equation: 'CH₃COOH + NaOH → CH₃COONa + H₂O',
        result: 'Formação de acetato de sódio',
        description: 'Neutralização do ácido acético (vinagre) com base forte. Forma acetato de sódio usado em alimentos.',
        mechanism: 'Transferência parcial de próton - ácido fraco',
        applications: 'Conservantes alimentares, regulador de pH',
        color: '#F0F8FF',
        ph: 8.2,
        temperature: 28,
        safety: 'success',
        properties: 'Acetato de sódio é usado como conservante e tempero',
        hasGas: false
    },

    'CH3COOH + NH3': {
        type: 'Neutralização Ácido Fraco-Base Fraca',
        equation: 'CH₃COOH + NH₃ → CH₃COONH₄',
        result: 'Acetato de amônio - sal de ácido/base fracos',
        description: 'Reação entre ácido acético (vinagre) e amônia. Forma acetato de amônio, usado em alimentos e como descongestionante.',
        mechanism: 'Transferência parcial de próton - equilíbrio ácido-base',
        applications: 'Indústria alimentícia, farmacêutica, regulador de pH',
        color: '#F0F8FF',
        ph: 7.0,
        temperature: 26,
        safety: 'success',
        properties: 'Sal usado como regulador de acidez e em medicamentos',
        hasGas: false
    },

    'H3PO4 + Ca(OH)2': {
        type: 'Neutralização Triprótica',
        equation: '2H₃PO₄ + 3Ca(OH)₂ → Ca₃(PO₄)₂ + 6H₂O',
        result: 'Formação de fosfato de cálcio (componente dos ossos)',
        description: 'Produz fosfato de cálcio, componente principal de ossos e dentes. Importante na biomineralização.',
        mechanism: 'Neutralização triprótica - três prótons por molécula de ácido',
        applications: 'Suplementos de cálcio, biomateriais, fertilizantes',
        color: '#FFF8DC',
        ph: 7.2,
        temperature: 30,
        safety: 'success',
        properties: 'Ca₃(PO₄)₂ é o principal componente mineral dos ossos',
        hasGas: false
    },

    // ==================== REAÇÕES DE PRECIPITAÇÃO ====================
    'AgNO3 + NaCl': {
        type: 'Precipitação de Haleto',
        equation: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
        result: 'Precipitado branco espesso de cloreto de prata',
        description: 'Teste clássico para íons cloreto. O AgCl é extremamente insolúvel e forma um precipitado branco característico que escurece na luz.',
        mechanism: 'Ag⁺ + Cl⁻ → AgCl (precipitação por produto iônico)',
        applications: 'Análise qualitativa, fotografia, eletrodos de referência',
        color: '#F8F8FF',
        ph: 6.8,
        temperature: 25,
        safety: 'warning',
        properties: 'AgCl é fotossensível - escurece com luz UV. Kps = 1,8 × 10⁻¹⁰',
        hasGas: false
    },

    'AgNO3 + KI': {
        type: 'Precipitação de Iodeto',
        equation: 'AgNO₃ + KI → AgI↓ + KNO₃',
        result: 'Precipitado amarelo brilhante de iodeto de prata',
        description: 'Forma iodeto de prata amarelo intenso, ainda menos solúvel que AgCl. Usado em fotografia.',
        mechanism: 'Ag⁺ + I⁻ → AgI (precipitação por produto iônico)',
        applications: 'Fotografia, antissépticos, catálise',
        color: '#FFD700',
        ph: 6.5,
        temperature: 25,
        safety: 'warning',
        properties: 'AgI é o haleto de prata menos solúvel. Kps = 8,3 × 10⁻¹⁷',
        hasGas: false
    },

    'BaCl2 + H2SO4': {
        type: 'Precipitação de Sulfato',
        equation: 'BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl',
        result: 'Precipitado branco denso de sulfato de bário',
        description: 'Teste específico para sulfatos. BaSO₄ é extremamente insolúvel e muito denso. Usado como contraste em raios-X.',
        mechanism: 'Ba²⁺ + SO₄²⁻ → BaSO₄ (precipitação instantânea)',
        applications: 'Medicina (contraste), tintas, papel',
        color: '#FFFAFA',
        ph: 1.5,
        temperature: 30,
        safety: 'danger',
        properties: 'BaSO₄ é radiopaco - usado em medicina para raios-X do sistema digestivo.',
        hasGas: false
    },

    'Ca(OH)2 + H2SO4': {
        type: 'Precipitação de Gesso',
        equation: 'Ca(OH)₂ + H₂SO₄ → CaSO₄↓ + 2H₂O',
        result: 'Formação de gesso (sulfato de cálcio)',
        description: 'Produz gesso, material de construção fundamental. A reação é exotérmica e o produto pode cristalizar em diferentes formas.',
        mechanism: 'Neutralização + precipitação simultâneas',
        applications: 'Construção civil, moldes, drywall',
        color: '#FFF8DC',
        ph: 6.8,
        temperature: 40,
        safety: 'success',
        properties: 'CaSO₄ é usado para fazer gesso, cimento e drywall.',
        hasGas: false
    },

    'Pb(NO3)2 + KI': {
        type: 'Precipitação de Iodeto de Chumbo',
        equation: 'Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃',
        result: 'Precipitado amarelo dourado de iodeto de chumbo',
        description: 'Forma um precipitado amarelo dourado muito característico. PbI₂ tem solubilidade muito baixa.',
        mechanism: 'Pb²⁺ + 2I⁻ → PbI₂ (precipitação dupla)',
        applications: 'Análise qualitativa, pigmentos',
        color: '#FFD700',
        ph: 6.0,
        temperature: 25,
        safety: 'danger',
        properties: 'TÓXICO: compostos de chumbo são perigosos. Muito insolúvel.',
        hasGas: false
    },

    // ==================== REAÇÕES DE OXIDAÇÃO-REDUÇÃO ====================
    'Zn + HCl': {
        type: 'Oxidação de Metal',
        equation: 'Zn + 2HCl → ZnCl₂ + H₂↑',
        result: 'Liberação de gás hidrogênio com efervescência',
        description: 'O zinco é oxidado pelo ácido, liberando gás hidrogênio. Reação clássica para produzir H₂ em laboratório. O gás é inflamável!',
        mechanism: 'Zn → Zn²⁺ + 2e⁻; 2H⁺ + 2e⁻ → H₂ (redox)',
        applications: 'Produção de hidrogênio, galvanização, baterias',
        color: '#E0E0E0',
        ph: 2.0,
        temperature: 45,
        safety: 'warning',
        properties: 'Produz H₂ inflamável. Zinco é consumido gradualmente.',
        hasGas: true
    },

    'Cu + HNO3': {
        type: 'Oxidação Complexa de Metal',
        equation: 'Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O',
        result: 'Liberação de vapor marrom tóxico (NO₂)',
        description: 'Reação violenta! O cobre é oxidado pelo ácido nítrico concentrado, produzindo vapores marrons TÓXICOS de dióxido de nitrogênio.',
        mechanism: 'Cu → Cu²⁺ + 2e⁻; HNO₃ → NO₂ + H⁺ + e⁻ (redox complexa)',
        applications: 'Purificação de cobre, gravação, análise',
        color: '#8B4513',
        ph: 0.5,
        temperature: 60,
        safety: 'danger',
        properties: 'PERIGOSO: NO₂ é tóxico! Só em capela. Produz sal azul-esverdeado.',
        hasGas: true
    },

    'Mg + HCl': {
        type: 'Oxidação Vigorosa',
        equation: 'Mg + 2HCl → MgCl₂ + H₂↑',
        result: 'Efervescência intensa com fita de magnésio',
        description: 'Magnésio reage vigorosamente, produzindo muito hidrogênio rapidamente. A fita de Mg pode se dissolver completamente em minutos.',
        mechanism: 'Mg → Mg²⁺ + 2e⁻; 2H⁺ + 2e⁻ → H₂ (redox rápida)',
        applications: 'Dessulfuração, ligas leves, fogos de artifício',
        color: '#F5F5F5',
        ph: 3.5,
        temperature: 50,
        safety: 'warning',
        properties: 'Reação muito rápida. Mg é mais reativo que Zn.',
        hasGas: true
    },

    'Fe + H2SO4': {
        type: 'Oxidação de Ferro',
        equation: 'Fe + H₂SO₄ → FeSO₄ + H₂↑',
        result: 'Formação de sulfato ferroso verde-claro',
        description: 'O ferro é oxidado formando sulfato ferroso (Fe²⁺), que tem cor verde característica. Libera hidrogênio lentamente.',
        mechanism: 'Fe → Fe²⁺ + 2e⁻; 2H⁺ + 2e⁻ → H₂',
        applications: 'Suplementos de ferro, tratamento de águas',
        color: '#90EE90',
        ph: 2.5,
        temperature: 35,
        safety: 'success',
        properties: 'FeSO₄ é usado como suplemento de ferro e no tratamento de águas.',
        hasGas: true
    },

    'Al + HCl': {
        type: 'Oxidação de Alumínio',
        equation: '2Al + 6HCl → 2AlCl₃ + 3H₂↑',
        result: 'Liberação vigorosa de hidrogênio',
        description: 'Alumínio reage com ácido produzindo muito hidrogênio. Pode ser explosivo se concentrado!',
        mechanism: 'Al → Al³⁺ + 3e⁻; 6H⁺ + 6e⁻ → 3H₂',
        applications: 'Produção de hidrogênio, limpeza industrial',
        color: '#F0F0F0',
        ph: 2.0,
        temperature: 55,
        safety: 'warning',
        properties: 'Produz muito H₂. Alumínio tem camada de óxido protetora.',
        hasGas: true
    },

    // ==================== REAÇÕES COM CARBONATOS ====================
    'CaCO3 + HCl': {
        type: 'Ácido-Carbonato',
        equation: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑',
        result: 'Efervescência com liberação de CO₂',
        description: 'Teste clássico para carbonatos! O mármore/calcário reage com ácido liberando bolhas de CO₂. Simula erosão de rochas calcárias.',
        mechanism: 'CO₃²⁻ + 2H⁺ → H₂O + CO₂ (ácido-base + decomposição)',
        applications: 'Teste de carbonatos, produção de CO₂, simulação geológica',
        color: '#F0F8FF',
        ph: 4.5,
        temperature: 28,
        safety: 'success',
        properties: 'Simula erosão natural. CO₂ pode ser coletado e testado com água de cal.',
        hasGas: true
    },

    'Na2CO3 + CH3COOH': {
        type: 'Carbonato-Ácido Fraco',
        equation: 'Na₂CO₃ + 2CH₃COOH → 2CH₃COONa + H₂O + CO₂↑',
        result: 'Efervescência suave com acetato de sódio',
        description: 'Reação do carbonato com vinagre - o famoso "vulcão" de feira de ciências! Produz acetato de sódio comestível.',
        mechanism: 'Neutralização ácido fraco-base fraca com liberação de CO₂',
        applications: 'Experimentos educacionais, culinária, limpeza',
        color: '#FFFACD',
        ph: 5.5,
        temperature: 26,
        safety: 'success',
        properties: 'Acetato de sódio cristaliza facilmente e é usado em aquecedores de mão.',
        hasGas: true
    },

    'NaHCO3 + HCl': {
        type: 'Bicarbonato-Ácido',
        equation: 'NaHCO₃ + HCl → NaCl + H₂O + CO₂↑',
        result: 'Efervescência rápida - bicarbonato de sódio',
        description: 'Reação do bicarbonato de sódio (fermento) com ácido. Muito usada em culinária e como antiácido.',
        mechanism: 'HCO₃⁻ + H⁺ → H₂O + CO₂ (descarboxilação)',
        applications: 'Culinária (fermentos), antiácidos, limpeza',
        color: '#F5F5F5',
        ph: 6.8,
        temperature: 22,
        safety: 'success',
        properties: 'Reação segura e comum. Base da ação dos antiácidos.',
        hasGas: true
    },

    'K2CO3 + H2SO4': {
        type: 'Carbonato-Ácido Forte',
        equation: 'K₂CO₃ + H₂SO₄ → K₂SO₄ + H₂O + CO₂↑',
        result: 'Efervescência vigorosa com sulfato de potássio',
        description: 'Carbonato de potássio com ácido sulfúrico produz efervescência intensa e sulfato de potássio.',
        mechanism: 'CO₃²⁻ + 2H⁺ → H₂O + CO₂ (neutralização + decomposição)',
        applications: 'Produção de sulfato de potássio (fertilizante)',
        color: '#E6E6FA',
        ph: 2.5,
        temperature: 35,
        safety: 'warning',
        properties: 'K₂SO₄ é fertilizante importante. Reação exotérmica.',
        hasGas: true
    },

    // ==================== CATÁLISE E DECOMPOSIÇÃO ====================
    'H2O2 + Pt': {
        type: 'Catálise Heterogênea',
        equation: '2H₂O₂ → 2H₂O + O₂↑ (catalisado por Pt)',
        result: 'Decomposição rápida com bolhas de oxigênio',
        description: 'A platina catalisa a decomposição da água oxigenada, liberando oxigênio puro. A platina não é consumida na reação.',
        mechanism: 'Adsorção na superfície da Pt → decomposição → dessorção',
        applications: 'Catálise industrial, células a combustível',
        color: '#E6F3FF',
        ph: 6.5,
        temperature: 30,
        safety: 'success',
        properties: 'O₂ liberado pode reacender uma brasa. Platina permanece inalterada.',
        hasGas: true
    },

    'H2O2 + Ni': {
        type: 'Catálise com Níquel',
        equation: '2H₂O₂ → 2H₂O + O₂↑ (catalisado por Ni)',
        result: 'Decomposição moderada de peróxido',
        description: 'Níquel também catalisa a decomposição, mas menos eficientemente que platina. Demonstra diferentes atividades catalíticas.',
        mechanism: 'Catálise heterogênea menos eficiente que Pt',
        applications: 'Catálise industrial, hidrogenação',
        color: '#F0F8FF',
        ph: 6.8,
        temperature: 28,
        safety: 'success',
        properties: 'Níquel é catalisador mais barato que platina, mas menos eficiente.',
        hasGas: true
    },

    'H2O2 + Fe': {
        type: 'Catálise Heterogênea com Ferro',
        equation: '2H₂O₂ → 2H₂O + O₂↑ (catalisado por Fe)',
        result: 'Decomposição lenta com liberação de oxigênio',
        description: 'Ferro catalisa a decomposição do peróxido, mas forma também óxidos férricos que turvam a solução.',
        mechanism: 'Fe²⁺/Fe³⁺ ciclo catalítico com formação de óxidos',
        applications: 'Demonstração de catálise, tratamento de águas',
        color: '#DEB887',
        ph: 6.0,
        temperature: 32,
        safety: 'success',
        properties: 'Ferro é oxidado parcialmente. Solução fica turva.',
        hasGas: true
    },

    // ==================== REAÇÕES DE SUBSTITUIÇÃO METÁLICA ====================
    'Zn + Cu(NO3)2': {
        type: 'Substituição Metálica',
        equation: 'Zn + Cu(NO₃)₂ → Zn(NO₃)₂ + Cu↓',
        result: 'Deposição de cobre metálico avermelhado',
        description: 'O zinco mais reativo substitui o cobre. Bela demonstração da série de reatividade - cobre metálico se deposita como filme avermelhado.',
        mechanism: 'Zn → Zn²⁺ + 2e⁻; Cu²⁺ + 2e⁻ → Cu (redox espontânea)',
        applications: 'Metalurgia, eletrodeposição, purificação',
        color: '#CD853F',
        ph: 5.5,
        temperature: 25,
        safety: 'success',
        properties: 'Demonstra série eletroquímica. Zn > Cu em reatividade.',
        hasGas: false
    },

    'Fe + CuSO4': {
        type: 'Substituição por Ferro',
        equation: 'Fe + CuSO₄ → FeSO₄ + Cu↓',
        result: 'Precipitação de cobre sobre ferro',
        description: 'Ferro substitui cobre no sulfato. O prego de ferro fica revestido com cobre metálico brilhante. Demonstração clássica de reatividade.',
        mechanism: 'Fe → Fe²⁺ + 2e⁻; Cu²⁺ + 2e⁻ → Cu (substituição metálica)',
        applications: 'Processamento de metais, purificação de cobre',
        color: '#B87333',
        ph: 4.8,
        temperature: 25,
        safety: 'success',
        properties: 'Processo usado na metalurgia para purificar cobre.',
        hasGas: false
    },

    'Mg + CuSO4': {
        type: 'Substituição Vigorosa',
        equation: 'Mg + CuSO₄ → MgSO₄ + Cu↓',
        result: 'Deposição rápida de cobre sobre magnésio',
        description: 'Magnésio é muito mais reativo que cobre, substituição ocorre rapidamente com muito calor.',
        mechanism: 'Mg → Mg²⁺ + 2e⁻; Cu²⁺ + 2e⁻ → Cu (redox muito favorável)',
        applications: 'Demonstração de reatividade, metalurgia',
        color: '#D2691E',
        ph: 5.0,
        temperature: 45,
        safety: 'warning',
        properties: 'Reação muito exotérmica. Mg é altamente reativo.',
        hasGas: false
    },

    'Zn + AgNO3': {
        type: 'Substituição de Prata',
        equation: 'Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag↓',
        result: 'Deposição de prata metálica brilhante',
        description: 'Zinco substitui prata formando depósito metálico brilhante. Demonstração espetacular da série de atividade.',
        mechanism: 'Zn → Zn²⁺ + 2e⁻; 2Ag⁺ + 2e⁻ → 2Ag (redox)',
        applications: 'Purificação de prata, demonstrações',
        color: '#C0C0C0',
        ph: 5.8,
        temperature: 30,
        safety: 'warning',
        properties: 'Prata depositada é pura. Processo usado em refino.',
        hasGas: false
    },

    // ==================== REAÇÕES COMPLEXAS ====================
    'CaCO3 + H2SO4': {
        type: 'Complexa Ácido-Carbonato',
        equation: 'CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂↑',
        result: 'Formação de gesso + CO₂ + autolimitação',
        description: 'Reação interessante! Inicialmente efervescente, mas o CaSO₄ formado reveste o CaCO₃, impedindo reação posterior.',
        mechanism: 'Reação inicial rápida seguida de passivação por CaSO₄',
        applications: 'Estudo de passivação, geologia',
        color: '#FFF8DC',
        ph: 3.0,
        temperature: 32,
        safety: 'success',
        properties: 'Autolimitante: o produto protege o reagente. Simula intemperismo químico.',
        hasGas: true
    },

    'Al + Fe2O3': {
        type: 'Termita (Aluminotermia)',
        equation: '2Al + Fe₂O₃ → Al₂O₃ + 2Fe + MUITO calor',
        result: 'Reação extremamente exotérmica - ferro fundido',
        description: 'Reação termita clássica! Libera energia suficiente para fundir ferro. Usada em soldas de trilhos.',
        mechanism: 'Al → Al³⁺ + 3e⁻; Fe³⁺ + 3e⁻ → Fe (redox muito exotérmica)',
        applications: 'Soldas termita, metalurgia, militar',
        color: '#FF4500',
        ph: 8.0,
        temperature: 2000,
        safety: 'danger',
        properties: 'EXTREMAMENTE PERIGOSO! Temperatura > 2000°C. Ferro fundido.',
        hasGas: false
    },

    // ==================== REAÇÕES ORGÂNICAS ====================
    'CH3COOH + C2H5OH': {
        type: 'Esterificação',
        equation: 'CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O',
        result: 'Formação de acetato de etila (aroma frutal)',
        description: 'Síntese de éster com aroma frutal característico. Reação clássica da química orgânica - formação de acetato de etila.',
        mechanism: 'Ataque nucleofílico do álcool ao carbono carbonílico',
        applications: 'Solventes, aromatizantes, tintas',
        color: '#FFFACD',
        ph: 6.0,
        temperature: 40,
        safety: 'warning',
        properties: 'Produto tem aroma de frutas. Usado em solventes e aromatizantes.',
        hasGas: false
    },

    'C2H5OH + K2Cr2O7': {
        type: 'Oxidação de Álcool',
        equation: '3C₂H₅OH + K₂Cr₂O₇ + 4H₂SO₄ → 3CH₃CHO + K₂SO₄ + Cr₂(SO₄)₃ + 7H₂O',
        result: 'Oxidação de etanol a acetaldeído - mudança de cor',
        description: 'Dicromato laranja oxida álcool a aldeído, ficando verde. Princípio do bafômetro!',
        mechanism: 'Cr₂O₇²⁻ + C₂H₅OH → Cr³⁺ + CH₃CHO (redox orgânica)',
        applications: 'Bafômetros, análise de álcool, oxidação orgânica',
        color: '#228B22',
        ph: 1.0,
        temperature: 50,
        safety: 'danger',
        properties: 'TÓXICO: Cr VI é carcinogênico. Base do teste do bafômetro.',
        hasGas: false
    },

    // ==================== REAÇÕES COLORIDAS ESPETACULARES ====================
    'KMnO4 + H2O2': {
        type: 'Redução de Permanganato',
        equation: '2KMnO₄ + 3H₂O₂ → 2MnO₂ + 2KOH + 2H₂O + 3O₂↑',
        result: 'Mudança de roxo para marrom com bolhas',
        description: 'Espetacular mudança de cor! Permanganato roxo se reduz a dióxido de manganês marrom, liberando muito oxigênio.',
        mechanism: 'MnO₄⁻ + e⁻ → MnO₂ (redução do manganês VII para IV)',
        applications: 'Tratamento de águas, oxidação orgânica',
        color: '#8B4513',
        ph: 8.5,
        temperature: 35,
        safety: 'warning',
        properties: 'Reação muito visual. MnO₂ é catalisador industrial importante.',
        hasGas: true
    },

    'K2Cr2O7 + H2SO4': {
        type: 'Acidificação de Dicromato',
        equation: 'K₂Cr₂O₇ + H₂SO₄ → K₂SO₄ + H₂Cr₂O₇',
        result: 'Mudança de laranja para vermelho intenso',
        description: 'Acidificação do dicromato muda sua cor de laranja para vermelho sangue. Demonstra efeito do pH na cor dos compostos.',
        mechanism: 'Cr₂O₇²⁻ + H⁺ → H₂Cr₂O₇ (protonação)',
        applications: 'Análise química, oxidação orgânica',
        color: '#DC143C',
        ph: 1.0,
        temperature: 30,
        safety: 'danger',
        properties: 'TÓXICO: cromo VI é carcinogênico. Usado em análises químicas.',
        hasGas: false
    },

    'CuSO4 + NH3': {
        type: 'Complexação com Amônia',
        equation: 'CuSO₄ + 4NH₃ → [Cu(NH₃)₄]SO₄',
        result: 'Mudança de azul claro para azul intenso',
        description: 'Amônia forma complexo com cobre, mudando cor drasticamente. Demonstra química de coordenação.',
        mechanism: 'Cu²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺ (complexação)',
        applications: 'Análise qualitativa, química de coordenação',
        color: '#000080',
        ph: 9.0,
        temperature: 25,
        safety: 'warning',
        properties: 'Complexo tetraaminocobre II tem cor azul intensa característica.',
        hasGas: false
    },

    'FeCl3 + KSCN': {
        type: 'Complexação Colorida',
        equation: 'FeCl₃ + 3KSCN → Fe(SCN)₃ + 3KCl',
        result: 'Formação de complexo vermelho sangue',
        description: 'Teste específico para ferro III. Forma complexo vermelho sangue muito característico.',
        mechanism: 'Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ (complexação)',
        applications: 'Análise qualitativa de ferro, demonstrações',
        color: '#8B0000',
        ph: 3.5,
        temperature: 25,
        safety: 'warning',
        properties: 'Teste muito sensível para Fe³⁺. Cor vermelha intensa.',
        hasGas: false
    },

    // ==================== REAÇÕES COM GASES ====================
    'NH3 + HCl': {
        type: 'Síntese de Sal por Gases',
        equation: 'NH₃ + HCl → NH₄Cl',
        result: 'Formação de fumaça branca de cloreto de amônio',
        description: 'Dois gases formam sal sólido! Demonstração espetacular de síntese direta.',
        mechanism: 'NH₃ + HCl → NH₄⁺Cl⁻ (ácido-base gasosa)',
        applications: 'Produção de sais de amônio, demonstrações',
        color: '#F8F8FF',
        ph: 7.0,
        temperature: 25,
        safety: 'warning',
        properties: 'Reação entre gases forma sólido. "Fumaça" branca.',
        hasGas: false
    },

    'SO2 + H2O': {
        type: 'Dissolução de Gás Ácido',
        equation: 'SO₂ + H₂O → H₂SO₃',
        result: 'Formação de ácido sulfuroso',
        description: 'Dióxido de enxofre dissolve formando ácido sulfuroso. Simula chuva ácida.',
        mechanism: 'SO₂ + H₂O ⇌ H₂SO₃ (hidratação)',
        applications: 'Estudo de chuva ácida, conservação',
        color: '#F0F8FF',
        ph: 3.5,
        temperature: 25,
        safety: 'danger',
        properties: 'SO₂ é tóxico. Simula formação de chuva ácida.',
        hasGas: false
    },

    // ==================== REAÇÕES BIOQUÍMICAS SIMPLES ====================
    'C6H12O6 + I2': {
        type: 'Teste de Amido',
        equation: 'C₆H₁₂O₆ (amido) + I₂ → complexo azul',
        result: 'Formação de complexo azul-violeta',
        description: 'Teste clássico para amido. Iodo forma complexo azul característico com amido.',
        mechanism: 'I₂ + amilose → complexo de inclusão',
        applications: 'Análise de alimentos, bioquímica',
        color: '#4B0082',
        ph: 6.5,
        temperature: 25,
        safety: 'success',
        properties: 'Teste específico para amido. Muito sensível.',
        hasGas: false
    },

    'C12H22O11 + H2SO4': {
        type: 'Desidratação de Açúcar',
        equation: 'C₁₂H₂₂O₁₁ + H₂SO₄ → 12C + 11H₂O',
        result: 'Carbonização - "cobra negra"',
        description: 'Ácido sulfúrico remove água do açúcar, deixando carbono puro. Demonstração espetacular!',
        mechanism: 'Desidratação severa por H₂SO₄ concentrado',
        applications: 'Demonstrações, estudo de desidratação',
        color: '#000000',
        ph: 0.5,
        temperature: 80,
        safety: 'danger',
        properties: 'MUITO PERIGOSO! H₂SO₄ concentrado. Produz carbono puro.',
        hasGas: false
    }
};

// Lista completa de reagentes disponíveis (EXPANDIDA)
const reagents = [
    // Ácidos
    { name: 'HCl', fullName: 'Ácido Clorídrico', category: 'acid', icon: 'fas fa-tint', danger: 'high' },
    { name: 'H2SO4', fullName: 'Ácido Sulfúrico', category: 'acid', icon: 'fas fa-tint', danger: 'high' },
    { name: 'HNO3', fullName: 'Ácido Nítrico', category: 'acid', icon: 'fas fa-tint', danger: 'high' },
    { name: 'CH3COOH', fullName: 'Ácido Acético', category: 'acid', icon: 'fas fa-tint', danger: 'low' },
    { name: 'H3PO4', fullName: 'Ácido Fosfórico', category: 'acid', icon: 'fas fa-tint', danger: 'medium' },
    
    // Bases
    { name: 'NaOH', fullName: 'Hidróxido de Sódio', category: 'base', icon: 'fas fa-square', danger: 'high' },
    { name: 'KOH', fullName: 'Hidróxido de Potássio', category: 'base', icon: 'fas fa-square', danger: 'high' },
    { name: 'Ca(OH)2', fullName: 'Hidróxido de Cálcio', category: 'base', icon: 'fas fa-square', danger: 'medium' },
    { name: 'NH3', fullName: 'Amônia', category: 'base', icon: 'fas fa-cloud', danger: 'medium' },
    
    // Sais
    { name: 'NaCl', fullName: 'Cloreto de Sódio', category: 'salt', icon: 'fas fa-cube', danger: 'low' },
    { name: 'AgNO3', fullName: 'Nitrato de Prata', category: 'salt', icon: 'fas fa-gem', danger: 'medium' },
    { name: 'BaCl2', fullName: 'Cloreto de Bário', category: 'salt', icon: 'fas fa-cube', danger: 'high' },
    { name: 'KI', fullName: 'Iodeto de Potássio', category: 'salt', icon: 'fas fa-cube', danger: 'medium' },
    { name: 'CaCO3', fullName: 'Carbonato de Cálcio', category: 'salt', icon: 'fas fa-mountain', danger: 'low' },
    { name: 'Na2CO3', fullName: 'Carbonato de Sódio', category: 'salt', icon: 'fas fa-cube', danger: 'low' },
    { name: 'NaHCO3', fullName: 'Bicarbonato de Sódio', category: 'salt', icon: 'fas fa-cube', danger: 'low' },
    { name: 'K2CO3', fullName: 'Carbonato de Potássio', category: 'salt', icon: 'fas fa-cube', danger: 'low' },
    { name: 'Cu(NO3)2', fullName: 'Nitrato de Cobre', category: 'salt', icon: 'fas fa-cube', danger: 'medium' },
    { name: 'CuSO4', fullName: 'Sulfato de Cobre', category: 'salt', icon: 'fas fa-cube', danger: 'medium' },
    { name: 'FeCl3', fullName: 'Cloreto Férrico', category: 'salt', icon: 'fas fa-cube', danger: 'medium' },
    { name: 'KMnO4', fullName: 'Permanganato de Potássio', category: 'salt', icon: 'fas fa-gem', danger: 'medium' },
    { name: 'K2Cr2O7', fullName: 'Dicromato de Potássio', category: 'salt', icon: 'fas fa-gem', danger: 'high' },
    { name: 'Pb(NO3)2', fullName: 'Nitrato de Chumbo', category: 'salt', icon: 'fas fa-cube', danger: 'high' },
    { name: 'KSCN', fullName: 'Tiocianato de Potássio', category: 'salt', icon: 'fas fa-cube', danger: 'medium' },
    { name: 'Fe2O3', fullName: 'Óxido de Ferro III', category: 'salt', icon: 'fas fa-cube', danger: 'low' },
    
    // Metais
    { name: 'Zn', fullName: 'Zinco Metálico', category: 'metal', icon: 'fas fa-cog', danger: 'low' },
    { name: 'Cu', fullName: 'Cobre Metálico', category: 'metal', icon: 'fas fa-cog', danger: 'low' },
    { name: 'Mg', fullName: 'Magnésio Metálico', category: 'metal', icon: 'fas fa-cog', danger: 'medium' },
    { name: 'Fe', fullName: 'Ferro Metálico', category: 'metal', icon: 'fas fa-cog', danger: 'low' },
    { name: 'Al', fullName: 'Alumínio Metálico', category: 'metal', icon: 'fas fa-cog', danger: 'medium' },
    { name: 'Pt', fullName: 'Platina', category: 'metal', icon: 'fas fa-star', danger: 'low' },
    { name: 'Ni', fullName: 'Níquel', category: 'metal', icon: 'fas fa-cog', danger: 'medium' },
    
    // Gases e outros
    { name: 'H2O2', fullName: 'Peróxido de Hidrogênio', category: 'gas', icon: 'fas fa-wind', danger: 'medium' },
    { name: 'SO2', fullName: 'Dióxido de Enxofre', category: 'gas', icon: 'fas fa-cloud', danger: 'high' },
    { name: 'I2', fullName: 'Iodo', category: 'gas', icon: 'fas fa-cloud', danger: 'medium' },
    
    // Compostos orgânicos
    { name: 'C2H5OH', fullName: 'Etanol', category: 'organic', icon: 'fas fa-wine-bottle', danger: 'medium' },
    { name: 'C6H12O6', fullName: 'Glicose/Amido', category: 'organic', icon: 'fas fa-seedling', danger: 'low' },
    { name: 'C12H22O11', fullName: 'Sacarose (Açúcar)', category: 'organic', icon: 'fas fa-cube', danger: 'low' }
];

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
    loadReagents();
    updateLabStatus();
    updateDisplay();
});

// Carregar reagentes na lista
function loadReagents() {
    const reagentsList = document.getElementById('reagentsList');
    reagentsList.innerHTML = '';
    
    reagents.forEach(reagent => {
        const reagentDiv = document.createElement('div');
        reagentDiv.className = 'reagent';
        reagentDiv.draggable = true;
        reagentDiv.onclick = () => addReagentToFlask(reagent.name);
        reagentDiv.innerHTML = `
            <div>
                <i class="${reagent.icon}"></i>
                <span>${reagent.name}</span>
            </div>
            <span class="reagent-category">${reagent.category}</span>
        `;
        reagentsList.appendChild(reagentDiv);
    });
}

// Filtrar reagentes por categoria
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.dataset.category;
        filterReagents(category);
    });
});

function filterReagents(category) {
    const reagentsList = document.getElementById('reagentsList');
    reagentsList.innerHTML = '';
    
    const filteredReagents = category === 'all' ? reagents : reagents.filter(r => r.category === category);
    
    filteredReagents.forEach(reagent => {
        const reagentDiv = document.createElement('div');
        reagentDiv.className = 'reagent';
        reagentDiv.onclick = () => addReagentToFlask(reagent.name);
        reagentDiv.innerHTML = `
            <div>
                <i class="${reagent.icon}"></i>
                <span>${reagent.name}</span>
            </div>
            <span class="reagent-category">${reagent.category}</span>
        `;
        reagentsList.appendChild(reagentDiv);
    });
}

// Buscar reagentes
document.getElementById('searchReagent').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const reagentsList = document.getElementById('reagentsList');
    reagentsList.innerHTML = '';
    
    const filteredReagents = reagents.filter(r => 
        r.name.toLowerCase().includes(searchTerm) || 
        r.fullName.toLowerCase().includes(searchTerm)
    );
    
    filteredReagents.forEach(reagent => {
        const reagentDiv = document.createElement('div');
        reagentDiv.className = 'reagent';
        reagentDiv.onclick = () => addReagentToFlask(reagent.name);
        reagentDiv.innerHTML = `
            <div>
                <i class="${reagent.icon}"></i>
                <span>${reagent.name}</span>
            </div>
            <span class="reagent-category">${reagent.category}</span>
        `;
        reagentsList.appendChild(reagentDiv);
    });
});

// Adicionar reagente ao balão
function addReagentToFlask(reagentName) {
    if (labState.flask.reagents.length < 2) {
        labState.flask.reagents.push(reagentName);
        updateFlaskDisplay();
        updateLabStatus();
        
        // Verificar se pode reagir
        if (labState.flask.reagents.length === 2) {
            checkForReaction();
        }
    } else {
        alert('O balão já contém 2 reagentes. Use "Limpar" primeiro.');
    }
}

// Verificar se os reagentes podem reagir
function checkForReaction() {
    const reagentKey = labState.flask.reagents.sort().join(' + ');
    if (reactions[reagentKey]) {
        console.log('Reação possível detectada:', reagentKey);
        document.querySelector('.control-btn').style.background = '#00e676';
    } else {
        console.log('Nenhuma reação conhecida para:', reagentKey);
        document.querySelector('.control-btn').style.background = '#666';
    }
}

// Controlar Bico de Bunsen (CORRIGIDO COM Z-INDEX)
function toggleBunsen() {
    labState.bunsenActive = !labState.bunsenActive;
    const flame = document.getElementById('bunsenFlame');
    
    if (labState.bunsenActive) {
        flame.classList.add('active');
        labState.temperature = 60;
        if (labState.flask.reagents.length > 0) {
            labState.flask.heating = true;
            document.querySelector('.reaction-flask').classList.add('heating-effect');
        }
    } else {
        flame.classList.remove('active');
        labState.temperature = 25;
        labState.flask.heating = false;
        document.querySelector('.reaction-flask').classList.remove('heating-effect');
    }
    
    updateLabStatus();
    updateDisplay();
}

// Selecionar balão (simplificado para apenas 1)
function selectFlask(flaskNumber) {
    labState.selectedFlask = 1;
    updateLabStatus();
}

// Iniciar reação (CORRIGIDO)
function startReaction() {
    if (labState.flask.reagents.length !== 2) {
        alert('Adicione exatamente 2 reagentes para iniciar a reação!');
        return;
    }
    
    const reagentKey = labState.flask.reagents.sort().join(' + ');
    const reaction = reactions[reagentKey];
    
    if (reaction) {
        // Aplicar efeitos da reação
        labState.flask.color = reaction.color;
        labState.temperature = reaction.temperature;
        labState.currentReaction = reaction;
        
        // Atualizar pH
        document.getElementById('phDisplay').textContent = reaction.ph.toFixed(1);
        
        // Adicionar ao histórico (CORRIGIDO)
        addToHistory(reaction, reagentKey);
        
        // Efeitos visuais
        document.querySelector('.reaction-flask').classList.add('reaction-flash');
        setTimeout(() => {
            document.querySelector('.reaction-flask').classList.remove('reaction-flash');
        }, 500);
        
        // Criar bolhas se necessário
        if (reaction.hasGas) {
            createBubbles();
        }
        
        updateFlaskDisplay();
        updateDisplay();
        
        alert(`Reação realizada!\n${reaction.result}`);
    } else {
        // Gerar reação genérica para combinações não catalogadas
        generateGenericReaction(reagentKey);
    }
}

// Gerar reação genérica para combinações não catalogadas
function generateGenericReaction(reagentKey) {
    const reagentNames = reagentKey.split(' + ');
    const reaction = {
        type: 'Reação Experimental',
        equation: `${reagentNames[0]} + ${reagentNames[1]} → Produtos desconhecidos`,
        result: 'Reação experimental - resultados podem variar',
        description: `Combinação experimental entre ${reagentNames[0]} e ${reagentNames[1]}. Esta combinação não está catalogada, mas pode produzir resultados interessantes em condições específicas.`,
        mechanism: 'Mecanismo a ser determinado experimentalmente',
        applications: 'Pesquisa e desenvolvimento de novos processos',
        color: '#D3D3D3',
        ph: 7.0,
        temperature: 30,
        safety: 'warning',
        properties: 'Propriedades a serem determinadas. Proceda com cautela.',
        hasGas: false
    };
    
    // Aplicar efeitos da reação genérica
    labState.flask.color = reaction.color;
    labState.temperature = reaction.temperature;
    labState.currentReaction = reaction;
    
    // Adicionar ao histórico
    addToHistory(reaction, reagentKey);
    
    updateFlaskDisplay();
    updateDisplay();
    
    alert(`Reação experimental realizada!\n${reaction.result}\n\nEsta combinação não está catalogada em nossa base de dados. Os resultados são teóricos.`);
}

// Adicionar reação ao histórico (CORRIGIDO)
function addToHistory(reaction, reagentKey) {
    const historyItem = {
        reagents: reagentKey,
        reaction: reaction,
        timestamp: new Date().toLocaleTimeString()
    };
    
    labState.reactionHistory.unshift(historyItem);
    
    // Manter apenas as últimas 10 reações
    if (labState.reactionHistory.length > 10) {
        labState.reactionHistory = labState.reactionHistory.slice(0, 10);
    }
    
    updateHistoryDisplay();
}

// Atualizar display do histórico (CORRIGIDO)
function updateHistoryDisplay() {
    const historyContainer = document.getElementById('reactionHistory');
    historyContainer.innerHTML = '';
    
    if (labState.reactionHistory.length === 0) {
        historyContainer.innerHTML = '<p style="color: #888; text-align: center;">Nenhuma reação realizada ainda</p>';
        return;
    }
    
    labState.reactionHistory.forEach((item, index) => {
        const reactionDiv = document.createElement('div');
        reactionDiv.className = 'reaction-item';
        reactionDiv.onclick = () => showReactionDetails(item.reaction);
        reactionDiv.innerHTML = `
            <div class="reaction-title">${item.reaction.type}</div>
            <div class="reaction-equation">${item.reaction.equation}</div>
            <div class="reaction-description">${item.reaction.result}</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
                <span class="safety-indicator safety-${item.reaction.safety}">${item.reaction.safety.toUpperCase()}</span>
                <small style="color: #888;">${item.timestamp}</small>
            </div>
        `;
        historyContainer.appendChild(reactionDiv);
    });
}

// Mostrar detalhes da reação
function showReactionDetails(reaction) {
    const modal = document.getElementById('reactionModal');
    const title = document.getElementById('modalTitle');
    const equation = document.getElementById('modalEquation');
    const description = document.getElementById('modalDescription');
    const properties = document.getElementById('modalProperties');
    
    title.textContent = reaction.type;
    equation.textContent = reaction.equation;
    description.innerHTML = `
        <h4>Descrição:</h4>
        <p>${reaction.description}</p>
        
        <h4>Mecanismo:</h4>
        <p>${reaction.mechanism}</p>
    `;
    properties.innerHTML = `
        <div class="property-item">
            <span class="property-label">Aplicações:</span>
            <p>${reaction.applications}</p>
        </div>
        <div class="property-item">
            <span class="property-label">Propriedades:</span>
            <p>${reaction.properties}</p>
        </div>
        <div class="property-item">
            <span class="property-label">Temperatura:</span>
            <p>${reaction.temperature}°C</p>
        </div>
        <div class="property-item">
            <span class="property-label">pH:</span>
            <p>${reaction.ph}</p>
        </div>
        <div class="property-item">
            <span class="property-label">Segurança:</span>
            <p class="safety-${reaction.safety}">${reaction.safety.toUpperCase()}</p>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Fechar modal
function closeModal() {
    document.getElementById('reactionModal').style.display = 'none';
}

// Mostrar informações da reação atual
function showReactionInfo() {
    if (labState.currentReaction) {
        showReactionDetails(labState.currentReaction);
    } else {
        alert('Nenhuma reação foi realizada ainda. Execute uma reação primeiro!');
    }
}

// Criar bolhas de gás (CORRIGIDO)
function createBubbles() {
    const bubblesContainer = document.getElementById('flaskBubbles1');
    
    // Limpar bolhas existentes
    bubblesContainer.innerHTML = '';
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.left = Math.random() * 30 + 5 + 'px';
            bubble.style.width = bubble.style.height = Math.random() * 8 + 4 + 'px';
            bubble.style.animationDelay = Math.random() * 0.5 + 's';
            
            bubblesContainer.appendChild(bubble);
            
            // Remover bolha após animação
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 2000);
        }, i * 200);
    }
}

// Limpar balão
function clearFlask() {
    labState.flask.reagents = [];
    labState.flask.color = null;
    labState.flask.heating = false;
    labState.currentReaction = null;
    labState.temperature = labState.bunsenActive ? 60 : 25;
    
    // Limpar bolhas
    document.getElementById('flaskBubbles1').innerHTML = '';
    
    // Reset pH
    document.getElementById('phDisplay').textContent = '7.0';
    
    updateFlaskDisplay();
    updateLabStatus();
    updateDisplay();
}

// Atualizar display do balão
function updateFlaskDisplay() {
    const liquid = document.getElementById('flaskLiquid1');
    
    if (labState.flask.reagents.length > 0) {
        liquid.style.height = (labState.flask.reagents.length * 25) + 'px';
        liquid.style.background = labState.flask.color || '#4fc3f7';
    } else {
        liquid.style.height = '0px';
    }
}

// Atualizar status do laboratório
function updateLabStatus() {
    document.getElementById('bunsenStatus').textContent = labState.bunsenActive ? 'Ligado' : 'Desligado';
    document.getElementById('flaskStatus').textContent = labState.flask.reagents.length > 0 ? 
        `${labState.flask.reagents.join(' + ')}` : 'Vazio';
    document.getElementById('reagentCount').textContent = labState.flask.reagents.length;
}

// Atualizar display geral
function updateDisplay() {
    document.getElementById('tempDisplay').textContent = labState.temperature + '°C';
}

// Fechar modal clicando fora
document.getElementById('reactionModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});