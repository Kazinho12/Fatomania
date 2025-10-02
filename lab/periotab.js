// Base de dados COMPLETA dos 118 elementos químicos com grupos e valências
const elements = [
    // Período 1
    {
        number: 1, symbol: 'H', name: 'Hidrogênio', mass: 1.008, category: 'reactive-nonmetal',
        period: 1, group: 1, phase: 'Gás', meltingPoint: '-259.16°C', boilingPoint: '-252.87°C',
        density: '0.00009 g/cm³', atomicRadius: '53 pm', electronegativity: '2.20',
        ionizationEnergy: '1312 kJ/mol', electronConfig: '1s¹', discoveryDate: '1766',
        discoveredBy: 'Henry Cavendish', nameOrigin: 'Do grego "hydro" + "genes"',
        uses: ['Combustível de foguetes', 'Produção de amônia', 'Refinamento de petróleo'],
        funFacts: 'É o elemento mais abundante no universo, constituindo cerca de 75% de toda a matéria bariônica.',
        valences: ['+1', '-1']
    },
    {
        number: 2, symbol: 'He', name: 'Hélio', mass: 4.003, category: 'noble-gas',
        period: 1, group: 18, phase: 'Gás', meltingPoint: '-272.20°C', boilingPoint: '-268.93°C',
        density: '0.0001785 g/cm³', atomicRadius: '31 pm', electronegativity: 'Não definida',
        ionizationEnergy: '2372 kJ/mol', electronConfig: '1s²', discoveryDate: '1868',
        discoveredBy: 'Pierre Janssen', nameOrigin: 'Do grego "helios" (Sol)',
        uses: ['Balões', 'Criogenia', 'Soldagem', 'Respiração artificial'],
        funFacts: 'Foi descoberto no Sol antes de ser encontrado na Terra!',
        valences: ['0']
    },

    // Período 2
    {
        number: 3, symbol: 'Li', name: 'Lítio', mass: 6.94, category: 'alkali-metal',
        period: 2, group: 1, phase: 'Sólido', meltingPoint: '180.50°C', boilingPoint: '1342°C',
        density: '0.534 g/cm³', atomicRadius: '167 pm', electronegativity: '0.98',
        ionizationEnergy: '520 kJ/mol', electronConfig: '[He] 2s¹', discoveryDate: '1817',
        discoveredBy: 'Johan Arfwedson', nameOrigin: 'Do grego "lithos" (pedra)',
        uses: ['Baterias', 'Medicamentos', 'Ligas metálicas', 'Cerâmicas'],
        funFacts: 'É o metal mais leve que existe!',
        valences: ['+1']
    },
    {
        number: 4, symbol: 'Be', name: 'Berílio', mass: 9.012, category: 'alkaline-earth-metal',
        period: 2, group: 2, phase: 'Sólido', meltingPoint: '1287°C', boilingPoint: '2471°C',
        density: '1.85 g/cm³', atomicRadius: '112 pm', electronegativity: '1.57',
        ionizationEnergy: '899 kJ/mol', electronConfig: '[He] 2s²', discoveryDate: '1797',
        discoveredBy: 'Louis Vauquelin', nameOrigin: 'Do mineral berilo',
        uses: ['Ligas aeroespaciais', 'Instrumentos de precisão', 'Janelas de raios-X'],
        funFacts: 'Extremamente tóxico mas valioso. Usado em telescópios espaciais.',
        valences: ['+2']
    },
    {
        number: 5, symbol: 'B', name: 'Boro', mass: 10.81, category: 'metalloid',
        period: 2, group: 13, phase: 'Sólido', meltingPoint: '2077°C', boilingPoint: '4000°C',
        density: '2.34 g/cm³', atomicRadius: '87 pm', electronegativity: '2.04',
        ionizationEnergy: '801 kJ/mol', electronConfig: '[He] 2s² 2p¹', discoveryDate: '1808',
        discoveredBy: 'Humphry Davy', nameOrigin: 'Do árabe "buraq"',
        uses: ['Vidro borossilicato', 'Detergentes', 'Fertilizantes'],
        funFacts: 'O vidro Pyrex contém boro para resistir ao calor!',
        valences: ['+3']
    },
    {
        number: 6, symbol: 'C', name: 'Carbono', mass: 12.011, category: 'reactive-nonmetal',
        period: 2, group: 14, phase: 'Sólido', meltingPoint: '3550°C', boilingPoint: '4027°C',
        density: '2.267 g/cm³', atomicRadius: '67 pm', electronegativity: '2.55',
        ionizationEnergy: '1086 kJ/mol', electronConfig: '[He] 2s² 2p²', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde a antiguidade', nameOrigin: 'Do latim "carbo"',
        uses: ['Base da vida', 'Aço', 'Grafite', 'Diamantes', 'Nanotubos'],
        funFacts: 'Base de toda vida conhecida! Forma mais compostos que qualquer outro elemento.',
        valences: ['+4', '+2', '-4']
    },
    {
        number: 7, symbol: 'N', name: 'Nitrogênio', mass: 14.007, category: 'reactive-nonmetal',
        period: 2, group: 15, phase: 'Gás', meltingPoint: '-210.00°C', boilingPoint: '-195.79°C',
        density: '0.0012506 g/cm³', atomicRadius: '56 pm', electronegativity: '3.04',
        ionizationEnergy: '1402 kJ/mol', electronConfig: '[He] 2s² 2p³', discoveryDate: '1772',
        discoveredBy: 'Daniel Rutherford', nameOrigin: 'Do grego "nitron" + "genes"',
        uses: ['Fertilizantes', 'Explosivos', 'Atmosfera inerte', 'Proteínas'],
        funFacts: 'Compõe 78% da atmosfera terrestre!',
        valences: ['+5', '+4', '+3', '+2', '+1', '-1', '-2', '-3']
    },
    {
        number: 8, symbol: 'O', name: 'Oxigênio', mass: 15.999, category: 'reactive-nonmetal',
        period: 2, group: 16, phase: 'Gás', meltingPoint: '-218.79°C', boilingPoint: '-182.95°C',
        density: '0.001429 g/cm³', atomicRadius: '48 pm', electronegativity: '3.44',
        ionizationEnergy: '1314 kJ/mol', electronConfig: '[He] 2s² 2p⁴', discoveryDate: '1774',
        discoveredBy: 'Joseph Priestley', nameOrigin: 'Do grego "oxys" + "genes"',
        uses: ['Respiração', 'Combustão', 'Medicina', 'Soldagem'],
        funFacts: 'Essencial para quase toda vida na Terra!',
        valences: ['-2', '-1']
    },
    {
        number: 9, symbol: 'F', name: 'Flúor', mass: 18.998, category: 'halogen',
        period: 2, group: 17, phase: 'Gás', meltingPoint: '-219.67°C', boilingPoint: '-188.11°C',
        density: '0.001696 g/cm³', atomicRadius: '42 pm', electronegativity: '3.98',
        ionizationEnergy: '1681 kJ/mol', electronConfig: '[He] 2s² 2p⁵', discoveryDate: '1886',
        discoveredBy: 'Henri Moissan', nameOrigin: 'Do latim "fluere"',
        uses: ['Pasta de dente', 'Teflon', 'Refrigerantes', 'Anestésicos'],
        funFacts: 'É o elemento mais eletronegativo! Reage com praticamente tudo.',
        valences: ['-1']
    },
    {
        number: 10, symbol: 'Ne', name: 'Neônio', mass: 20.180, category: 'noble-gas',
        period: 2, group: 18, phase: 'Gás', meltingPoint: '-248.59°C', boilingPoint: '-246.08°C',
        density: '0.0009002 g/cm³', atomicRadius: '38 pm', electronegativity: 'Não definida',
        ionizationEnergy: '2081 kJ/mol', electronConfig: '[He] 2s² 2p⁶', discoveryDate: '1898',
        discoveredBy: 'William Ramsay', nameOrigin: 'Do grego "neos" (novo)',
        uses: ['Iluminação', 'Lasers', 'Criogenia'],
        funFacts: 'Usado em letreiros luminosos que brilham laranja-avermelhado!',
        valences: ['0']
    },

    // Período 3
    {
        number: 11, symbol: 'Na', name: 'Sódio', mass: 22.990, category: 'alkali-metal',
        period: 3, group: 1, phase: 'Sólido', meltingPoint: '97.79°C', boilingPoint: '883°C',
        density: '0.97 g/cm³', atomicRadius: '190 pm', electronegativity: '0.93',
        ionizationEnergy: '496 kJ/mol', electronConfig: '[Ne] 3s¹', discoveryDate: '1807',
        discoveredBy: 'Humphry Davy', nameOrigin: 'Do inglês "soda"',
        uses: ['Sal de cozinha', 'Sabões', 'Lâmpadas de vapor'],
        funFacts: 'Reage explosivamente com água!',
        valences: ['+1']
    },
    {
        number: 12, symbol: 'Mg', name: 'Magnésio', mass: 24.305, category: 'alkaline-earth-metal',
        period: 3, group: 2, phase: 'Sólido', meltingPoint: '650°C', boilingPoint: '1090°C',
        density: '1.74 g/cm³', atomicRadius: '145 pm', electronegativity: '1.31',
        ionizationEnergy: '738 kJ/mol', electronConfig: '[Ne] 3s²', discoveryDate: '1808',
        discoveredBy: 'Humphry Davy', nameOrigin: 'De Magnésia, Grécia',
        uses: ['Ligas leves', 'Fogos de artifício', 'Suplementos'],
        funFacts: 'Centro da molécula de clorofila!',
        valences: ['+2']
    },
    {
        number: 13, symbol: 'Al', name: 'Alumínio', mass: 26.982, category: 'post-transition-metal',
        period: 3, group: 13, phase: 'Sólido', meltingPoint: '660.32°C', boilingPoint: '2519°C',
        density: '2.70 g/cm³', atomicRadius: '118 pm', electronegativity: '1.61',
        ionizationEnergy: '578 kJ/mol', electronConfig: '[Ne] 3s² 3p¹', discoveryDate: '1825',
        discoveredBy: 'Hans Ørsted', nameOrigin: 'Do latim "alumen"',
        uses: ['Latas', 'Aviação', 'Construção', 'Cabos elétricos'],
        funFacts: 'Era mais caro que ouro no século XIX!',
        valences: ['+3']
    },
    {
        number: 14, symbol: 'Si', name: 'Silício', mass: 28.085, category: 'metalloid',
        period: 3, group: 14, phase: 'Sólido', meltingPoint: '1414°C', boilingPoint: '3265°C',
        density: '2.3296 g/cm³', atomicRadius: '111 pm', electronegativity: '1.90',
        ionizationEnergy: '787 kJ/mol', electronConfig: '[Ne] 3s² 3p²', discoveryDate: '1824',
        discoveredBy: 'Jöns Berzelius', nameOrigin: 'Do latim "silex"',
        uses: ['Microchips', 'Vidro', 'Painéis solares', 'Silicones'],
        funFacts: 'Base da revolução digital!',
        valences: ['+4', '-4']
    },
    {
        number: 15, symbol: 'P', name: 'Fósforo', mass: 30.974, category: 'reactive-nonmetal',
        period: 3, group: 15, phase: 'Sólido', meltingPoint: '44.15°C', boilingPoint: '280.5°C',
        density: '1.82 g/cm³', atomicRadius: '98 pm', electronegativity: '2.19',
        ionizationEnergy: '1012 kJ/mol', electronConfig: '[Ne] 3s² 3p³', discoveryDate: '1669',
        discoveredBy: 'Hennig Brand', nameOrigin: 'Do grego "phosphoros"',
        uses: ['Fertilizantes', 'Fósforos', 'Detergentes', 'DNA/RNA'],
        funFacts: 'Foi o primeiro elemento descoberto por um processo científico!',
        valences: ['+5', '+3', '-3']
    },
    {
        number: 16, symbol: 'S', name: 'Enxofre', mass: 32.06, category: 'reactive-nonmetal',
        period: 3, group: 16, phase: 'Sólido', meltingPoint: '115.21°C', boilingPoint: '444.61°C',
        density: '2.067 g/cm³', atomicRadius: '88 pm', electronegativity: '2.58',
        ionizationEnergy: '1000 kJ/mol', electronConfig: '[Ne] 3s² 3p⁴', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde a antiguidade', nameOrigin: 'Do latim "sulphurium"',
        uses: ['Ácido sulfúrico', 'Vulcanização da borracha', 'Fungicidas'],
        funFacts: 'Responsável pelo cheiro de ovos podres!',
        valences: ['+6', '+4', '+2', '-2']
    },
    {
        number: 17, symbol: 'Cl', name: 'Cloro', mass: 35.45, category: 'halogen',
        period: 3, group: 17, phase: 'Gás', meltingPoint: '-101.5°C', boilingPoint: '-34.04°C',
        density: '0.003214 g/cm³', atomicRadius: '79 pm', electronegativity: '3.16',
        ionizationEnergy: '1251 kJ/mol', electronConfig: '[Ne] 3s² 3p⁵', discoveryDate: '1774',
        discoveredBy: 'Carl Scheele', nameOrigin: 'Do grego "chloros" (verde)',
        uses: ['Desinfetante', 'PVC', 'Sal de cozinha', 'Branqueamento'],
        funFacts: 'Usado como arma química na Primeira Guerra Mundial!',
        valences: ['+7', '+5', '+3', '+1', '-1']
    },
    {
        number: 18, symbol: 'Ar', name: 'Argônio', mass: 39.948, category: 'noble-gas',
        period: 3, group: 18, phase: 'Gás', meltingPoint: '-189.35°C', boilingPoint: '-185.85°C',
        density: '0.0017837 g/cm³', atomicRadius: '71 pm', electronegativity: 'Não definida',
        ionizationEnergy: '1521 kJ/mol', electronConfig: '[Ne] 3s² 3p⁶', discoveryDate: '1894',
        discoveredBy: 'William Ramsay', nameOrigin: 'Do grego "argos" (inativo)',
        uses: ['Soldagem', 'Lâmpadas incandescentes', 'Preservação'],
        funFacts: 'Terceiro gás mais abundante na atmosfera!',
        valences: ['0']
    },

    // Período 4 (Elementos 19-36) - Adicionando dados de valência
    {
        number: 19, symbol: 'K', name: 'Potássio', mass: 39.098, category: 'alkali-metal',
        period: 4, group: 1, phase: 'Sólido', meltingPoint: '63.5°C', boilingPoint: '759°C',
        density: '0.89 g/cm³', atomicRadius: '243 pm', electronegativity: '0.82',
        ionizationEnergy: '419 kJ/mol', electronConfig: '[Ar] 4s¹', discoveryDate: '1807',
        discoveredBy: 'Humphry Davy', nameOrigin: 'Do inglês "potash"',
        uses: ['Fertilizantes', 'Sabões', 'Vidro', 'Regulação celular'],
        funFacts: 'Essencial para a contração muscular!',
        valences: ['+1']
    },
    {
        number: 20, symbol: 'Ca', name: 'Cálcio', mass: 40.078, category: 'alkaline-earth-metal',
        period: 4, group: 2, phase: 'Sólido', meltingPoint: '842°C', boilingPoint: '1484°C',
        density: '1.54 g/cm³', atomicRadius: '194 pm', electronegativity: '1.00',
        ionizationEnergy: '590 kJ/mol', electronConfig: '[Ar] 4s²', discoveryDate: '1808',
        discoveredBy: 'Humphry Davy', nameOrigin: 'Do latim "calx" (cal)',
        uses: ['Ossos e dentes', 'Cimento', 'Gesso', 'Aditivos alimentares'],
        funFacts: 'Elemento mais abundante no corpo humano!',
        valences: ['+2']
    },

    // Continuando com mais elementos incluindo metais de transição com múltiplas valências
    {
        number: 21, symbol: 'Sc', name: 'Escândio', mass: 44.956, category: 'transition-metal',
        period: 4, group: 3, phase: 'Sólido', meltingPoint: '1541°C', boilingPoint: '2836°C',
        density: '2.99 g/cm³', atomicRadius: '184 pm', electronegativity: '1.36',
        ionizationEnergy: '633 kJ/mol', electronConfig: '[Ar] 3d¹ 4s²', discoveryDate: '1879',
        discoveredBy: 'Lars Nilson', nameOrigin: 'Da Escandinávia',
        uses: ['Ligas de alumínio', 'Lâmpadas de alta intensidade'],
        funFacts: 'Primeiro metal de transição da tabela periódica!',
        valences: ['+3']
    },
    {
        number: 22, symbol: 'Ti', name: 'Titânio', mass: 47.867, category: 'transition-metal',
        period: 4, group: 4, phase: 'Sólido', meltingPoint: '1668°C', boilingPoint: '3287°C',
        density: '4.5 g/cm³', atomicRadius: '176 pm', electronegativity: '1.54',
        ionizationEnergy: '659 kJ/mol', electronConfig: '[Ar] 3d² 4s²', discoveryDate: '1791',
        discoveredBy: 'William Gregor', nameOrigin: 'Dos Titãs da mitologia grega',
        uses: ['Implantes médicos', 'Aeronáutica', 'Joias', 'Pigmentos'],
        funFacts: 'Forte como o aço, mas 45% mais leve!',
        valences: ['+4', '+2', '+3']
    },
    {
        number: 23, symbol: 'V', name: 'Vanádio', mass: 50.942, category: 'transition-metal',
        period: 4, group: 5, phase: 'Sólido', meltingPoint: '1910°C', boilingPoint: '3407°C',
        density: '6.0 g/cm³', atomicRadius: '171 pm', electronegativity: '1.63',
        ionizationEnergy: '651 kJ/mol', electronConfig: '[Ar] 3d³ 4s²', discoveryDate: '1801',
        discoveredBy: 'Andrés del Río', nameOrigin: 'Da deusa Vanadis',
        uses: ['Ligas de aço', 'Catalisadores', 'Cerâmicas'],
        funFacts: 'Usado para fortalecer o aço!',
        valences: ['+5', '+4', '+3', '+2']
    },
    {
        number: 24, symbol: 'Cr', name: 'Cromo', mass: 51.996, category: 'transition-metal',
        period: 4, group: 6, phase: 'Sólido', meltingPoint: '1907°C', boilingPoint: '2671°C',
        density: '7.15 g/cm³', atomicRadius: '166 pm', electronegativity: '1.66',
        ionizationEnergy: '653 kJ/mol', electronConfig: '[Ar] 3d⁵ 4s¹', discoveryDate: '1797',
        discoveredBy: 'Louis Vauquelin', nameOrigin: 'Do grego "chroma" (cor)',
        uses: ['Aço inoxidável', 'Cromagem', 'Pigmentos', 'Curtimento'],
        funFacts: 'Dá o brilho ao aço inoxidável!',
        valences: ['+6', '+3', '+2']
    },
    {
        number: 25, symbol: 'Mn', name: 'Manganês', mass: 54.938, category: 'transition-metal',
        period: 4, group: 7, phase: 'Sólido', meltingPoint: '1246°C', boilingPoint: '2061°C',
        density: '7.3 g/cm³', atomicRadius: '161 pm', electronegativity: '1.55',
        ionizationEnergy: '717 kJ/mol', electronConfig: '[Ar] 3d⁵ 4s²', discoveryDate: '1774',
        discoveredBy: 'Johan Gahn', nameOrigin: 'Do latim "magnes"',
        uses: ['Produção de aço', 'Baterias', 'Fertilizantes'],
        funFacts: 'Essencial para a fotossíntese!',
        valences: ['+7', '+6', '+4', '+2']
    },
    {
        number: 26, symbol: 'Fe', name: 'Ferro', mass: 55.845, category: 'transition-metal',
        period: 4, group: 8, phase: 'Sólido', meltingPoint: '1538°C', boilingPoint: '2862°C',
        density: '7.874 g/cm³', atomicRadius: '156 pm', electronegativity: '1.83',
        ionizationEnergy: '762 kJ/mol', electronConfig: '[Ar] 3d⁶ 4s²', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde a antiguidade', nameOrigin: 'Do latim "ferrum"',
        uses: ['Aço', 'Construção', 'Hemoglobina', 'Ímãs'],
        funFacts: 'Metal mais usado pela humanidade!',
        valences: ['+2', '+3', '+6']
    },
    {
        number: 27, symbol: 'Co', name: 'Cobalto', mass: 58.933, category: 'transition-metal',
        period: 4, group: 9, phase: 'Sólido', meltingPoint: '1495°C', boilingPoint: '2927°C',
        density: '8.86 g/cm³', atomicRadius: '152 pm', electronegativity: '1.88',
        ionizationEnergy: '760 kJ/mol', electronConfig: '[Ar] 3d⁷ 4s²', discoveryDate: '1735',
        discoveredBy: 'Georg Brandt', nameOrigin: 'Do alemão "kobold"',
        uses: ['Ímãs permanentes', 'Baterias', 'Pigmentos azuis'],
        funFacts: 'Centro da vitamina B12!',
        valences: ['+3', '+2']
    },
    {
        number: 28, symbol: 'Ni', name: 'Níquel', mass: 58.693, category: 'transition-metal',
        period: 4, group: 10, phase: 'Sólido', meltingPoint: '1455°C', boilingPoint: '2913°C',
        density: '8.912 g/cm³', atomicRadius: '149 pm', electronegativity: '1.91',
        ionizationEnergy: '737 kJ/mol', electronConfig: '[Ar] 3d⁸ 4s²', discoveryDate: '1751',
        discoveredBy: 'Axel Cronstedt', nameOrigin: 'Do alemão "kupfernickel"',
        uses: ['Moedas', 'Aço inoxidável', 'Baterias', 'Catalisadores'],
        funFacts: 'Abundante no núcleo da Terra!',
        valences: ['+3', '+2']
    },
    {
        number: 29, symbol: 'Cu', name: 'Cobre', mass: 63.546, category: 'transition-metal',
        period: 4, group: 11, phase: 'Sólido', meltingPoint: '1084.62°C', boilingPoint: '2562°C',
        density: '8.933 g/cm³', atomicRadius: '145 pm', electronegativity: '1.90',
        ionizationEnergy: '745 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s¹', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 9000 a.C.', nameOrigin: 'Do latim "cuprum"',
        uses: ['Fios elétricos', 'Encanamentos', 'Moedas', 'Ligas'],
        funFacts: 'Primeiro metal trabalhado pelo homem!',
        valences: ['+1', '+2']
    },
    {
        number: 30, symbol: 'Zn', name: 'Zinco', mass: 65.38, category: 'transition-metal',
        period: 4, group: 12, phase: 'Sólido', meltingPoint: '419.53°C', boilingPoint: '907°C',
        density: '7.134 g/cm³', atomicRadius: '142 pm', electronegativity: '1.65',
        ionizationEnergy: '906 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s²', discoveryDate: '1746',
        discoveredBy: 'Andreas Marggraf', nameOrigin: 'Do alemão "zink"',
        uses: ['Galvanização', 'Ligas', 'Suplementos', 'Pilhas'],
        funFacts: 'Essencial para o sistema imunológico!',
        valences: ['+2']
    },
    {
        number: 31, symbol: 'Ga', name: 'Gálio', mass: 69.723, category: 'post-transition-metal',
        period: 4, group: 13, phase: 'Sólido', meltingPoint: '29.76°C', boilingPoint: '2204°C',
        density: '5.91 g/cm³', atomicRadius: '136 pm', electronegativity: '1.81',
        ionizationEnergy: '579 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p¹', discoveryDate: '1875',
        discoveredBy: 'Paul Lecoq', nameOrigin: 'Do latim "Gallia" (França)',
        uses: ['Semicondutores', 'LEDs', 'Painéis solares'],
        funFacts: 'Derrete na sua mão (ponto de fusão 29°C)!',
        valences: ['+3']
    },
    {
        number: 32, symbol: 'Ge', name: 'Germânio', mass: 72.630, category: 'metalloid',
        period: 4, group: 14, phase: 'Sólido', meltingPoint: '938.25°C', boilingPoint: '2833°C',
        density: '5.323 g/cm³', atomicRadius: '125 pm', electronegativity: '2.01',
        ionizationEnergy: '762 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p²', discoveryDate: '1886',
        discoveredBy: 'Clemens Winkler', nameOrigin: 'Do latim "Germania"',
        uses: ['Fibras ópticas', 'Transistores', 'Células solares'],
        funFacts: 'Sua descoberta confirmou a tabela de Mendeleev!',
        valences: ['+4', '+2']
    },
    {
        number: 33, symbol: 'As', name: 'Arsênio', mass: 74.922, category: 'metalloid',
        period: 4, group: 15, phase: 'Sólido', meltingPoint: '817°C', boilingPoint: '614°C',
        density: '5.776 g/cm³', atomicRadius: '114 pm', electronegativity: '2.18',
        ionizationEnergy: '947 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p³', discoveryDate: '1250',
        discoveredBy: 'Albertus Magnus', nameOrigin: 'Do grego "arsenikon"',
        uses: ['Semicondutores', 'Pesticidas', 'Medicamentos'],
        funFacts: 'Famoso veneno, mas também usado em medicina!',
        valences: ['+5', '+3', '-3']
    },
    {
        number: 34, symbol: 'Se', name: 'Selênio', mass: 78.971, category: 'reactive-nonmetal',
        period: 4, group: 16, phase: 'Sólido', meltingPoint: '221°C', boilingPoint: '685°C',
        density: '4.809 g/cm³', atomicRadius: '103 pm', electronegativity: '2.55',
        ionizationEnergy: '941 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁴', discoveryDate: '1817',
        discoveredBy: 'Jöns Berzelius', nameOrigin: 'Do grego "selene" (lua)',
        uses: ['Fotocélulas', 'Suplementos', 'Shampoos anticaspa'],
        funFacts: 'Essencial em pequenas quantidades, tóxico em excesso!',
        valences: ['+6', '+4', '+2', '-2']
    },
    {
        number: 35, symbol: 'Br', name: 'Bromo', mass: 79.904, category: 'halogen',
        period: 4, group: 17, phase: 'Líquido', meltingPoint: '-7.2°C', boilingPoint: '58.8°C',
        density: '3.11 g/cm³', atomicRadius: '94 pm', electronegativity: '2.96',
        ionizationEnergy: '1140 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁵', discoveryDate: '1826',
        discoveredBy: 'Antoine Balard', nameOrigin: 'Do grego "bromos" (fedor)',
        uses: ['Retardantes de chama', 'Pesticidas', 'Medicamentos'],
        funFacts: 'Único elemento líquido não-metálico!',
        valences: ['+7', '+5', '+1', '-1']
    },
    {
        number: 36, symbol: 'Kr', name: 'Criptônio', mass: 83.798, category: 'noble-gas',
        period: 4, group: 18, phase: 'Gás', meltingPoint: '-157.36°C', boilingPoint: '-153.22°C',
        density: '0.003733 g/cm³', atomicRadius: '88 pm', electronegativity: '3.00',
        ionizationEnergy: '1351 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁶', discoveryDate: '1898',
        discoveredBy: 'William Ramsay', nameOrigin: 'Do grego "kryptos" (oculto)',
        uses: ['Lâmpadas de alta eficiência', 'Lasers', 'Isolamento térmico'],
        funFacts: 'Nome inspirou o planeta de origem do Super-Homem!',
        valences: ['0', '+2']
    },

    // Período 5
    {
        number: 37, symbol: 'Rb', name: 'Rubídio', mass: 85.468, category: 'alkali-metal',
        period: 5, group: 1, phase: 'Sólido', meltingPoint: '39.31°C', boilingPoint: '688°C',
        density: '1.53 g/cm³', atomicRadius: '265 pm', electronegativity: '0.82',
        ionizationEnergy: '403 kJ/mol', electronConfig: '[Kr] 5s¹', discoveryDate: '1861',
        discoveredBy: 'Robert Bunsen', nameOrigin: 'Do latim "rubidus" (vermelho)',
        uses: ['Relógios atômicos', 'Células fotoelétricas'],
        funFacts: 'Usado para definir o segundo!',
        valences: ['+1']
    },
    {
        number: 38, symbol: 'Sr', name: 'Estrôncio', mass: 87.62, category: 'alkaline-earth-metal',
        period: 5, group: 2, phase: 'Sólido', meltingPoint: '777°C', boilingPoint: '1382°C',
        density: '2.64 g/cm³', atomicRadius: '219 pm', electronegativity: '0.95',
        ionizationEnergy: '549 kJ/mol', electronConfig: '[Kr] 5s²', discoveryDate: '1790',
        discoveredBy: 'William Cruickshank', nameOrigin: 'De Strontian, Escócia',
        uses: ['Fogos de artifício', 'Pigmentos', 'Medicina nuclear'],
        funFacts: 'Produz chamas vermelhas brilhantes!',
        valences: ['+2']
    },
    {
        number: 39, symbol: 'Y', name: 'Ítrio', mass: 88.906, category: 'transition-metal',
        period: 5, group: 3, phase: 'Sólido', meltingPoint: '1526°C', boilingPoint: '3345°C',
        density: '4.47 g/cm³', atomicRadius: '212 pm', electronegativity: '1.22',
        ionizationEnergy: '600 kJ/mol', electronConfig: '[Kr] 4d¹ 5s²', discoveryDate: '1794',
        discoveredBy: 'Johan Gadolin', nameOrigin: 'De Ytterby, Suécia',
        uses: ['Supercondutores', 'LEDs', 'Lasers'],
        funFacts: 'Quatro elementos foram descobertos na mesma mina sueca!',
        valences: ['+3']
    },
    {
        number: 40, symbol: 'Zr', name: 'Zircônio', mass: 91.224, category: 'transition-metal',
        period: 5, group: 4, phase: 'Sólido', meltingPoint: '1855°C', boilingPoint: '4409°C',
        density: '6.52 g/cm³', atomicRadius: '206 pm', electronegativity: '1.33',
        ionizationEnergy: '640 kJ/mol', electronConfig: '[Kr] 4d² 5s²', discoveryDate: '1789',
        discoveredBy: 'Martin Klaproth', nameOrigin: 'Do árabe "zargun"',
        uses: ['Reatores nucleares', 'Implantes', 'Cerâmicas'],
        funFacts: 'Extremamente resistente à corrosão!',
        valences: ['+4']
    },
    {
        number: 41, symbol: 'Nb', name: 'Nióbio', mass: 92.906, category: 'transition-metal',
        period: 5, group: 5, phase: 'Sólido', meltingPoint: '2477°C', boilingPoint: '4744°C',
        density: '8.57 g/cm³', atomicRadius: '198 pm', electronegativity: '1.6',
        ionizationEnergy: '652 kJ/mol', electronConfig: '[Kr] 4d⁴ 5s¹', discoveryDate: '1801',
        discoveredBy: 'Charles Hatchett', nameOrigin: 'De Níobe, mitologia grega',
        uses: ['Supercondutores', 'Ligas especiais', 'Joias'],
        funFacts: 'Brasil possui 98% das reservas mundiais!',
        valences: ['+5']
    },
    {
        number: 42, symbol: 'Mo', name: 'Molibdênio', mass: 95.95, category: 'transition-metal',
        period: 5, group: 6, phase: 'Sólido', meltingPoint: '2623°C', boilingPoint: '4639°C',
        density: '10.2 g/cm³', atomicRadius: '190 pm', electronegativity: '2.16',
        ionizationEnergy: '684 kJ/mol', electronConfig: '[Kr] 4d⁵ 5s¹', discoveryDate: '1781',
        discoveredBy: 'Peter Woulfe', nameOrigin: 'Do grego "molybdos" (chumbo)',
        uses: ['Ligas de aço', 'Catalisadores', 'Lubrificantes'],
        funFacts: 'Essencial para enzimas!',
        valences: ['+6', '+5', '+4', '+3', '+2']
    },
    {
        number: 43, symbol: 'Tc', name: 'Tecnécio', mass: 98, category: 'transition-metal',
        period: 5, group: 7, phase: 'Sólido', meltingPoint: '2157°C', boilingPoint: '4265°C',
        density: '11 g/cm³', atomicRadius: '183 pm', electronegativity: '1.9',
        ionizationEnergy: '702 kJ/mol', electronConfig: '[Kr] 4d⁵ 5s²', discoveryDate: '1937',
        discoveredBy: 'Emilio Segrè', nameOrigin: 'Do grego "technetos" (artificial)',
        uses: ['Medicina nuclear', 'Diagnóstico médico'],
        funFacts: 'Primeiro elemento artificial!',
        valences: ['+7', '+5', '+4']
    },
    {
        number: 44, symbol: 'Ru', name: 'Rutênio', mass: 101.07, category: 'transition-metal',
        period: 5, group: 8, phase: 'Sólido', meltingPoint: '2334°C', boilingPoint: '4150°C',
        density: '12.1 g/cm³', atomicRadius: '178 pm', electronegativity: '2.2',
        ionizationEnergy: '710 kJ/mol', electronConfig: '[Kr] 4d⁷ 5s¹', discoveryDate: '1844',
        discoveredBy: 'Karl Klaus', nameOrigin: 'Do latim "Ruthenia" (Rússia)',
        uses: ['Catalisadores', 'Eletrônicos', 'Joias'],
        funFacts: 'Membro da família da platina!',
        valences: ['+4', '+3', '+2']
    },
    {
        number: 45, symbol: 'Rh', name: 'Ródio', mass: 102.91, category: 'transition-metal',
        period: 5, group: 9, phase: 'Sólido', meltingPoint: '1964°C', boilingPoint: '3695°C',
        density: '12.4 g/cm³', atomicRadius: '173 pm', electronegativity: '2.28',
        ionizationEnergy: '720 kJ/mol', electronConfig: '[Kr] 4d⁸ 5s¹', discoveryDate: '1803',
        discoveredBy: 'William Wollaston', nameOrigin: 'Do grego "rhodon" (rosa)',
        uses: ['Catalisadores automotivos', 'Joias', 'Espelhos'],
        funFacts: 'Metal mais caro do mundo!',
        valences: ['+4', '+3', '+2']
    },
    {
        number: 46, symbol: 'Pd', name: 'Paládio', mass: 106.42, category: 'transition-metal',
        period: 5, group: 10, phase: 'Sólido', meltingPoint: '1554.9°C', boilingPoint: '2963°C',
        density: '12.0 g/cm³', atomicRadius: '169 pm', electronegativity: '2.20',
        ionizationEnergy: '804 kJ/mol', electronConfig: '[Kr] 4d¹⁰', discoveryDate: '1803',
        discoveredBy: 'William Wollaston', nameOrigin: 'Do asteróide Pallas',
        uses: ['Catalisadores', 'Joias', 'Eletrônicos', 'Odontologia'],
        funFacts: 'Absorve até 900 vezes seu volume em hidrogênio!',
        valences: ['+4', '+2']
    },
    {
        number: 47, symbol: 'Ag', name: 'Prata', mass: 107.87, category: 'transition-metal',
        period: 5, group: 11, phase: 'Sólido', meltingPoint: '961.78°C', boilingPoint: '2162°C',
        density: '10.501 g/cm³', atomicRadius: '165 pm', electronegativity: '1.93',
        ionizationEnergy: '731 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s¹', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 4000 a.C.', nameOrigin: 'Do latim "argentum"',
        uses: ['Joias', 'Moedas', 'Eletrônicos', 'Antimicrobiano'],
        funFacts: 'Melhor condutor elétrico de todos os elementos!',
        valences: ['+1', '+2']
    },
    {
        number: 48, symbol: 'Cd', name: 'Cádmio', mass: 112.41, category: 'transition-metal',
        period: 5, group: 12, phase: 'Sólido', meltingPoint: '321.07°C', boilingPoint: '767°C',
        density: '8.69 g/cm³', atomicRadius: '161 pm', electronegativity: '1.69',
        ionizationEnergy: '868 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s²', discoveryDate: '1817',
        discoveredBy: 'Karl Hermann', nameOrigin: 'Do grego "kadmeia"',
        uses: ['Baterias', 'Pigmentos', 'Galvanização'],
        funFacts: 'Altamente tóxico, usado em baterias recarregáveis!',
        valences: ['+2']
    },
    {
        number: 49, symbol: 'In', name: 'Índio', mass: 114.82, category: 'post-transition-metal',
        period: 5, group: 13, phase: 'Sólido', meltingPoint: '156.60°C', boilingPoint: '2072°C',
        density: '7.31 g/cm³', atomicRadius: '156 pm', electronegativity: '1.78',
        ionizationEnergy: '558 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p¹', discoveryDate: '1863',
        discoveredBy: 'Ferdinand Reich', nameOrigin: 'Do índigo (cor)',
        uses: ['Telas touchscreen', 'LEDs', 'Soldas especiais'],
        funFacts: 'Essencial para telas de smartphones!',
        valences: ['+3']
    },
    {
        number: 50, symbol: 'Sn', name: 'Estanho', mass: 118.71, category: 'post-transition-metal',
        period: 5, group: 14, phase: 'Sólido', meltingPoint: '231.93°C', boilingPoint: '2602°C',
        density: '7.287 g/cm³', atomicRadius: '145 pm', electronegativity: '1.96',
        ionizationEnergy: '709 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p²', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 3500 a.C.', nameOrigin: 'Do latim "stannum"',
        uses: ['Soldas', 'Latas', 'Liga de bronze', 'Revestimentos'],
        funFacts: 'Era tão valioso quanto ouro na antiguidade!',
        valences: ['+4', '+2']
    },
    {
        number: 51, symbol: 'Sb', name: 'Antimônio', mass: 121.76, category: 'metalloid',
        period: 5, group: 15, phase: 'Sólido', meltingPoint: '630.63°C', boilingPoint: '1587°C',
        density: '6.685 g/cm³', atomicRadius: '133 pm', electronegativity: '2.05',
        ionizationEnergy: '834 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p³', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 3000 a.C.', nameOrigin: 'Do grego "anti-monos"',
        uses: ['Retardantes de chama', 'Ligas', 'Semicondutores'],
        funFacts: 'Usado como cosmético no antigo Egito!',
        valences: ['+5', '+3', '-3']
    },
    {
        number: 52, symbol: 'Te', name: 'Telúrio', mass: 127.60, category: 'metalloid',
        period: 5, group: 16, phase: 'Sólido', meltingPoint: '449.51°C', boilingPoint: '988°C',
        density: '6.232 g/cm³', atomicRadius: '123 pm', electronegativity: '2.1',
        ionizationEnergy: '869 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁴', discoveryDate: '1783',
        discoveredBy: 'Franz von Reichenstein', nameOrigin: 'Do latim "tellus" (terra)',
        uses: ['Ligas especiais', 'Células solares', 'Termoelétricos'],
        funFacts: 'Mais raro que ouro na crosta terrestre!',
        valences: ['+6', '+4', '+2', '-2']
    },
    {
        number: 53, symbol: 'I', name: 'Iodo', mass: 126.90, category: 'halogen',
        period: 5, group: 17, phase: 'Sólido', meltingPoint: '113.7°C', boilingPoint: '184.3°C',
        density: '4.93 g/cm³', atomicRadius: '115 pm', electronegativity: '2.66',
        ionizationEnergy: '1008 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁵', discoveryDate: '1811',
        discoveredBy: 'Bernard Courtois', nameOrigin: 'Do grego "iodes" (violeta)',
        uses: ['Desinfetante', 'Medicina', 'Sal iodado', 'Contrastes'],
        funFacts: 'Essencial para a tireoide!',
        valences: ['+7', '+5', '+1', '-1']
    },
    {
        number: 54, symbol: 'Xe', name: 'Xenônio', mass: 131.29, category: 'noble-gas',
        period: 5, group: 18, phase: 'Gás', meltingPoint: '-111.75°C', boilingPoint: '-108.099°C',
        density: '0.005887 g/cm³', atomicRadius: '108 pm', electronegativity: '2.6',
        ionizationEnergy: '1170 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁶', discoveryDate: '1898',
        discoveredBy: 'William Ramsay', nameOrigin: 'Do grego "xenos" (estranho)',
        uses: ['Anestésicos', 'Lâmpadas de alta intensidade', 'Propulsão espacial'],
        funFacts: 'Primeiro gás nobre a formar compostos químicos!',
        valences: ['0', '+2', '+4', '+6', '+8']
    },

    // Período 6
    {
        number: 55, symbol: 'Cs', name: 'Césio', mass: 132.91, category: 'alkali-metal',
        period: 6, group: 1, phase: 'Sólido', meltingPoint: '28.44°C', boilingPoint: '671°C',
        density: '1.93 g/cm³', atomicRadius: '298 pm', electronegativity: '0.79',
        ionizationEnergy: '376 kJ/mol', electronConfig: '[Xe] 6s¹', discoveryDate: '1860',
        discoveredBy: 'Robert Bunsen', nameOrigin: 'Do latim "caesius" (azul celeste)',
        uses: ['Relógios atômicos', 'Células fotoelétricas', 'Medicina'],
        funFacts: 'Metal mais reativo!',
        valences: ['+1']
    },
    {
        number: 56, symbol: 'Ba', name: 'Bário', mass: 137.33, category: 'alkaline-earth-metal',
        period: 6, group: 2, phase: 'Sólido', meltingPoint: '727°C', boilingPoint: '1845°C',
        density: '3.62 g/cm³', atomicRadius: '253 pm', electronegativity: '0.89',
        ionizationEnergy: '503 kJ/mol', electronConfig: '[Xe] 6s²', discoveryDate: '1808',
        discoveredBy: 'Humphry Davy', nameOrigin: 'Do grego "barys" (pesado)',
        uses: ['Contrastes médicos', 'Fogos de artifício', 'Vidros especiais'],
        funFacts: 'Produz chamas verdes em fogos de artifício!',
        valences: ['+2']
    },

    // Lantanídeos (57-71)
    {
        number: 57, symbol: 'La', name: 'Lantânio', mass: 138.905, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '920°C', boilingPoint: '3464°C',
        density: '6.145 g/cm³', atomicRadius: '187 pm', electronegativity: '1.10',
        ionizationEnergy: '538 kJ/mol', electronConfig: '[Xe] 5d¹ 6s²', discoveryDate: '1839',
        discoveredBy: 'Carl Gustaf Mosander', nameOrigin: 'Do grego "lanthanein"',
        uses: ['Ligas especiais', 'Catalisadores', 'Baterias'],
        funFacts: 'Primeiro dos lantanídeos, usado em lentes de câmera!',
        valences: ['+3']
    },
    {
        number: 58, symbol: 'Ce', name: 'Cério', mass: 140.116, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '798°C', boilingPoint: '3443°C',
        density: '6.770 g/cm³', atomicRadius: '181 pm', electronegativity: '1.12',
        ionizationEnergy: '534 kJ/mol', electronConfig: '[Xe] 4f¹ 5d¹ 6s²', discoveryDate: '1803',
        discoveredBy: 'Jöns Jakob Berzelius', nameOrigin: 'Do asteroide Ceres',
        uses: ['Catalisadores', 'Vidro', 'Polimento'],
        funFacts: 'Mais abundante das terras raras!',
        valences: ['+3', '+4']
    },
    {
        number: 59, symbol: 'Pr', name: 'Praseodímio', mass: 140.908, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '931°C', boilingPoint: '3520°C',
        density: '6.773 g/cm³', atomicRadius: '182 pm', electronegativity: '1.13',
        ionizationEnergy: '527 kJ/mol', electronConfig: '[Xe] 4f³ 6s²', discoveryDate: '1885',
        discoveredBy: 'Carl Auer von Welsbach', nameOrigin: 'Do grego "prasios didymos"',
        uses: ['Magnetos', 'Ligas', 'Vidros especiais'],
        funFacts: 'Produz cor verde característica em vidros!',
        valences: ['+3']
    },
    {
        number: 60, symbol: 'Nd', name: 'Neodímio', mass: 144.24, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1021°C', boilingPoint: '3074°C',
        density: '7.01 g/cm³', atomicRadius: '229 pm', electronegativity: '1.14',
        ionizationEnergy: '533 kJ/mol', electronConfig: '[Xe] 4f⁴ 6s²', discoveryDate: '1885',
        discoveredBy: 'Carl Auer von Welsbach', nameOrigin: 'Do grego "neos didymos"',
        uses: ['Ímãs permanentes', 'Lasers', 'Óculos especiais'],
        funFacts: 'Ímãs mais fortes conhecidos!',
        valences: ['+3']
    },
    {
        number: 61, symbol: 'Pm', name: 'Promécio', mass: 145, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1042°C', boilingPoint: '3000°C',
        density: '7.26 g/cm³', atomicRadius: '228 pm', electronegativity: '1.13',
        ionizationEnergy: '540 kJ/mol', electronConfig: '[Xe] 4f⁵ 6s²', discoveryDate: '1945',
        discoveredBy: 'Charles Coryell', nameOrigin: 'De Prometeu',
        uses: ['Baterias nucleares', 'Pesquisa científica'],
        funFacts: 'Não existe naturalmente na Terra!',
        valences: ['+3']
    },
    {
        number: 62, symbol: 'Sm', name: 'Samário', mass: 150.36, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1074°C', boilingPoint: '1794°C',
        density: '7.52 g/cm³', atomicRadius: '229 pm', electronegativity: '1.17',
        ionizationEnergy: '545 kJ/mol', electronConfig: '[Xe] 4f⁶ 6s²', discoveryDate: '1879',
        discoveredBy: 'Paul Lecoq', nameOrigin: 'Do mineral samarskita',
        uses: ['Ímãs permanentes', 'Absorção de nêutrons', 'Lasers'],
        funFacts: 'Crucial para energia nuclear!',
        valences: ['+3', '+2']
    },
    {
        number: 63, symbol: 'Eu', name: 'Európio', mass: 151.96, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '822°C', boilingPoint: '1529°C',
        density: '5.24 g/cm³', atomicRadius: '233 pm', electronegativity: '1.2',
        ionizationEnergy: '547 kJ/mol', electronConfig: '[Xe] 4f⁷ 6s²', discoveryDate: '1901',
        discoveredBy: 'Eugène Demarçay', nameOrigin: 'Da Europa',
        uses: ['Fósforos em TVs', 'LEDs', 'Detectores'],
        funFacts: 'Mais reativo dos lantanídeos!',
        valences: ['+3', '+2']
    },
    {
        number: 64, symbol: 'Gd', name: 'Gadolínio', mass: 157.25, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1313°C', boilingPoint: '3273°C',
        density: '7.90 g/cm³', atomicRadius: '237 pm', electronegativity: '1.2',
        ionizationEnergy: '593 kJ/mol', electronConfig: '[Xe] 4f⁷ 5d¹ 6s²', discoveryDate: '1880',
        discoveredBy: 'Jean de Marignac', nameOrigin: 'De Johan Gadolin',
        uses: ['Contraste em MRI', 'Absorção de nêutrons', 'Ímãs'],
        funFacts: 'Melhor absorvedor de nêutrons!',
        valences: ['+3']
    },
    {
        number: 65, symbol: 'Tb', name: 'Térbio', mass: 158.93, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1356°C', boilingPoint: '3230°C',
        density: '8.23 g/cm³', atomicRadius: '221 pm', electronegativity: '1.2',
        ionizationEnergy: '565 kJ/mol', electronConfig: '[Xe] 4f⁹ 6s²', discoveryDate: '1843',
        discoveredBy: 'Carl Mosander', nameOrigin: 'De Ytterby, Suécia',
        uses: ['Fósforos verdes', 'Lasers', 'Dispositivos magneto-ópticos'],
        funFacts: 'Produz luz verde intensa!',
        valences: ['+3']
    },
    {
        number: 66, symbol: 'Dy', name: 'Disprósio', mass: 162.50, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1412°C', boilingPoint: '2567°C',
        density: '8.55 g/cm³', atomicRadius: '229 pm', electronegativity: '1.22',
        ionizationEnergy: '573 kJ/mol', electronConfig: '[Xe] 4f¹⁰ 6s²', discoveryDate: '1886',
        discoveredBy: 'Paul Lecoq', nameOrigin: 'Do grego "dysprositos" (difícil)',
        uses: ['Ímãs de alta temperatura', 'Lasers', 'Dosímetros'],
        funFacts: 'Nome reflete a dificuldade de sua descoberta!',
        valences: ['+3']
    },
    {
        number: 67, symbol: 'Ho', name: 'Hólmio', mass: 164.93, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1474°C', boilingPoint: '2700°C',
        density: '8.80 g/cm³', atomicRadius: '216 pm', electronegativity: '1.23',
        ionizationEnergy: '581 kJ/mol', electronConfig: '[Xe] 4f¹¹ 6s²', discoveryDate: '1878',
        discoveredBy: 'Per Cleve', nameOrigin: 'Do latim "Holmia" (Estocolmo)',
        uses: ['Ímãs especiais', 'Lasers médicos', 'Calibração'],
        funFacts: 'Possui o maior momento magnético!',
        valences: ['+3']
    },
    {
        number: 68, symbol: 'Er', name: 'Érbio', mass: 167.26, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1529°C', boilingPoint: '2868°C',
        density: '9.07 g/cm³', atomicRadius: '235 pm', electronegativity: '1.24',
        ionizationEnergy: '589 kJ/mol', electronConfig: '[Xe] 4f¹² 6s²', discoveryDate: '1843',
        discoveredBy: 'Carl Mosander', nameOrigin: 'De Ytterby, Suécia',
        uses: ['Fibras ópticas', 'Lasers', 'Óculos de proteção'],
        funFacts: 'Essencial para internet via fibra óptica!',
        valences: ['+3']
    },
    {
        number: 69, symbol: 'Tm', name: 'Túlio', mass: 168.93, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1545°C', boilingPoint: '1950°C',
        density: '9.32 g/cm³', atomicRadius: '227 pm', electronegativity: '1.25',
        ionizationEnergy: '597 kJ/mol', electronConfig: '[Xe] 4f¹³ 6s²', discoveryDate: '1879',
        discoveredBy: 'Per Cleve', nameOrigin: 'Do latim "Thule"',
        uses: ['Lasers médicos', 'Raios-X portáteis', 'Pesquisa'],
        funFacts: 'Mais raro dos lantanídeos!',
        valences: ['+3', '+2']
    },
    {
        number: 70, symbol: 'Yb', name: 'Itérbio', mass: 173.05, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '824°C', boilingPoint: '1196°C',
        density: '6.90 g/cm³', atomicRadius: '242 pm', electronegativity: '1.1',
        ionizationEnergy: '603 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 6s²', discoveryDate: '1878',
        discoveredBy: 'Jean de Marignac', nameOrigin: 'De Ytterby, Suécia',
        uses: ['Ligas especiais', 'Lasers', 'Detectores'],
        funFacts: 'Quarto elemento descoberto em Ytterby!',
        valences: ['+3', '+2']
    },
    {
        number: 71, symbol: 'Lu', name: 'Lutécio', mass: 174.97, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1663°C', boilingPoint: '3402°C',
        density: '9.84 g/cm³', atomicRadius: '221 pm', electronegativity: '1.27',
        ionizationEnergy: '524 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹ 6s²', discoveryDate: '1907',
        discoveredBy: 'Georges Urbain', nameOrigin: 'Do latim "Lutetia" (Paris)',
        uses: ['Detectores PET', 'Catalisadores especiais'],
        funFacts: 'Último lantanídeo descoberto!',
        valences: ['+3']
    },

    // Continuação Período 6
    {
        number: 72, symbol: 'Hf', name: 'Háfnio', mass: 178.49, category: 'transition-metal',
        period: 6, group: 4, phase: 'Sólido', meltingPoint: '2233°C', boilingPoint: '4603°C',
        density: '13.3 g/cm³', atomicRadius: '208 pm', electronegativity: '1.3',
        ionizationEnergy: '659 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d² 6s²', discoveryDate: '1923',
        discoveredBy: 'Dirk Coster', nameOrigin: 'Do latim "Hafnia" (Copenhague)',
        uses: ['Reatores nucleares', 'Superligas', 'Plasma'],
        funFacts: 'Quimicamente idêntico ao zircônio!',
        valences: ['+4']
    },
    {
        number: 73, symbol: 'Ta', name: 'Tântalo', mass: 180.95, category: 'transition-metal',
        period: 6, group: 5, phase: 'Sólido', meltingPoint: '3017°C', boilingPoint: '5458°C',
        density: '16.4 g/cm³', atomicRadius: '200 pm', electronegativity: '1.5',
        ionizationEnergy: '761 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d³ 6s²', discoveryDate: '1802',
        discoveredBy: 'Anders Ekeberg', nameOrigin: 'De Tântalo, mitologia grega',
        uses: ['Capacitores', 'Implantes médicos', 'Superligas'],
        funFacts: 'Extremamente resistente à corrosão!',
        valences: ['+5']
    },
    {
        number: 74, symbol: 'W', name: 'Tungstênio', mass: 183.84, category: 'transition-metal',
        period: 6, group: 6, phase: 'Sólido', meltingPoint: '3414°C', boilingPoint: '5555°C',
        density: '19.3 g/cm³', atomicRadius: '193 pm', electronegativity: '2.36',
        ionizationEnergy: '770 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d⁴ 6s²', discoveryDate: '1783',
        discoveredBy: 'Juan José Elhuyar', nameOrigin: 'Do sueco "tung sten"',
        uses: ['Filamentos de lâmpadas', 'Ferramentas', 'Blindagem'],
        funFacts: 'Maior ponto de fusão de todos os elementos!',
        valences: ['+6', '+5', '+4', '+3', '+2']
    },
    {
        number: 75, symbol: 'Re', name: 'Rênio', mass: 186.21, category: 'transition-metal',
        period: 6, group: 7, phase: 'Sólido', meltingPoint: '3185°C', boilingPoint: '5596°C',
        density: '20.8 g/cm³', atomicRadius: '188 pm', electronegativity: '1.9',
        ionizationEnergy: '760 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d⁵ 6s²', discoveryDate: '1925',
        discoveredBy: 'Walter Noddack', nameOrigin: 'Do latim "Rhenus" (Reno)',
        uses: ['Superligas', 'Catalisadores', 'Termopares'],
        funFacts: 'Um dos elementos mais raros!',
        valences: ['+7', '+6', '+5', '+4']
    },
    {
        number: 76, symbol: 'Os', name: 'Ósmio', mass: 190.23, category: 'transition-metal',
        period: 6, group: 8, phase: 'Sólido', meltingPoint: '3033°C', boilingPoint: '5012°C',
        density: '22.57 g/cm³', atomicRadius: '185 pm', electronegativity: '2.2',
        ionizationEnergy: '840 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d⁶ 6s²', discoveryDate: '1803',
        discoveredBy: 'Smithson Tennant', nameOrigin: 'Do grego "osme" (odor)',
        uses: ['Pontas de canetas', 'Catalisadores', 'Instrumentos'],
        funFacts: 'Elemento mais denso!',
        valences: ['+4', '+3', '+2']
    },
    {
        number: 77, symbol: 'Ir', name: 'Irídio', mass: 192.22, category: 'transition-metal',
        period: 6, group: 9, phase: 'Sólido', meltingPoint: '2446°C', boilingPoint: '4428°C',
        density: '22.42 g/cm³', atomicRadius: '180 pm', electronegativity: '2.20',
        ionizationEnergy: '880 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d⁷ 6s²', discoveryDate: '1803',
        discoveredBy: 'Smithson Tennant', nameOrigin: 'Do latim "iris" (arco-íris)',
        uses: ['Velas de ignição', 'Joias', 'Padrões de medida'],
        funFacts: 'Segundo elemento mais denso!',
        valences: ['+4', '+3']
    },
    {
        number: 78, symbol: 'Pt', name: 'Platina', mass: 195.08, category: 'transition-metal',
        period: 6, group: 10, phase: 'Sólido', meltingPoint: '1768.3°C', boilingPoint: '3825°C',
        density: '21.46 g/cm³', atomicRadius: '177 pm', electronegativity: '2.28',
        ionizationEnergy: '870 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d⁹ 6s¹', discoveryDate: '1735',
        discoveredBy: 'Antonio de Ulloa', nameOrigin: 'Do espanhol "platina"',
        uses: ['Joias', 'Catalisadores', 'Medicina', 'Padrões'],
        funFacts: 'Metal mais nobre!',
        valences: ['+4', '+3', '+2']
    },
    {
        number: 79, symbol: 'Au', name: 'Ouro', mass: 196.97, category: 'transition-metal',
        period: 6, group: 11, phase: 'Sólido', meltingPoint: '1064.18°C', boilingPoint: '2856°C',
        density: '19.282 g/cm³', atomicRadius: '174 pm', electronegativity: '2.54',
        ionizationEnergy: '890 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 2600 a.C.', nameOrigin: 'Do latim "aurum"',
        uses: ['Joias', 'Eletrônicos', 'Medicina', 'Reservas monetárias'],
        funFacts: 'Padrão monetário por milênios!',
        valences: ['+1', '+3']
    },
    {
        number: 80, symbol: 'Hg', name: 'Mercúrio', mass: 200.59, category: 'transition-metal',
        period: 6, group: 12, phase: 'Líquido', meltingPoint: '-38.83°C', boilingPoint: '356.73°C',
        density: '13.53 g/cm³', atomicRadius: '171 pm', electronegativity: '2.00',
        ionizationEnergy: '1007 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 1500 a.C.', nameOrigin: 'Do deus Mercúrio',
        uses: ['Termômetros', 'Lâmpadas', 'Mineração', 'Interruptores'],
        funFacts: 'Único metal líquido à temperatura ambiente!',
        valences: ['+2', '+1']
    },
    {
        number: 81, symbol: 'Tl', name: 'Tálio', mass: 204.38, category: 'post-transition-metal',
        period: 6, group: 13, phase: 'Sólido', meltingPoint: '304°C', boilingPoint: '1473°C',
        density: '11.8 g/cm³', atomicRadius: '156 pm', electronegativity: '1.62',
        ionizationEnergy: '589 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', discoveryDate: '1861',
        discoveredBy: 'William Crookes', nameOrigin: 'Do grego "thallos" (broto verde)',
        uses: ['Eletrônicos', 'Óptica infravermelha', 'Medicina'],
        funFacts: 'Extremamente tóxico!',
        valences: ['+3', '+1']
    },
    {
        number: 82, symbol: 'Pb', name: 'Chumbo', mass: 207.2, category: 'post-transition-metal',
        period: 6, group: 14, phase: 'Sólido', meltingPoint: '327.46°C', boilingPoint: '1749°C',
        density: '11.342 g/cm³', atomicRadius: '154 pm', electronegativity: '1.87',
        ionizationEnergy: '716 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 3000 a.C.', nameOrigin: 'Do latim "plumbum"',
        uses: ['Baterias', 'Blindagem', 'Soldas', 'Munições'],
        funFacts: 'Usado em aquedutos romanos!',
        valences: ['+4', '+2']
    },
    {
        number: 83, symbol: 'Bi', name: 'Bismuto', mass: 208.98, category: 'post-transition-metal',
        period: 6, group: 15, phase: 'Sólido', meltingPoint: '271.3°C', boilingPoint: '1564°C',
        density: '9.807 g/cm³', atomicRadius: '143 pm', electronegativity: '2.02',
        ionizationEnergy: '703 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', discoveryDate: '1753',
        discoveredBy: 'Claude François Geoffroy', nameOrigin: 'Do alemão "bisemutum"',
        uses: ['Cosméticos', 'Medicamentos', 'Ligas de baixo ponto de fusão'],
        funFacts: 'Menos tóxico dos metais pesados!',
        valences: ['+5', '+3']
    },
    {
        number: 84, symbol: 'Po', name: 'Polônio', mass: 209, category: 'post-transition-metal',
        period: 6, group: 16, phase: 'Sólido', meltingPoint: '254°C', boilingPoint: '962°C',
        density: '9.32 g/cm³', atomicRadius: '135 pm', electronegativity: '2.0',
        ionizationEnergy: '812 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', discoveryDate: '1898',
        discoveredBy: 'Marie e Pierre Curie', nameOrigin: 'Da Polônia',
        uses: ['Fontes de nêutrons', 'Eliminadores de estática'],
        funFacts: 'Descoberto por Marie Curie!',
        valences: ['+6', '+4', '+2']
    },
    {
        number: 85, symbol: 'At', name: 'Astato', mass: 210, category: 'halogen',
        period: 6, group: 17, phase: 'Sólido', meltingPoint: '302°C', boilingPoint: '337°C',
        density: '7 g/cm³', atomicRadius: '127 pm', electronegativity: '2.2',
        ionizationEnergy: '890 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', discoveryDate: '1940',
        discoveredBy: 'Dale Corson', nameOrigin: 'Do grego "astatos" (instável)',
        uses: ['Pesquisa científica', 'Medicina nuclear'],
        funFacts: 'Elemento mais raro na Terra!',
        valences: ['+7', '+5', '+1', '-1']
    },
    {
        number: 86, symbol: 'Rn', name: 'Radônio', mass: 222, category: 'noble-gas',
        period: 6, group: 18, phase: 'Gás', meltingPoint: '-71°C', boilingPoint: '-62°C',
        density: '0.00973 g/cm³', atomicRadius: '120 pm', electronegativity: '2.2',
        ionizationEnergy: '1037 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', discoveryDate: '1900',
        discoveredBy: 'Friedrich Dorn', nameOrigin: 'Do rádio',
        uses: ['Pesquisa científica', 'Sismologia'],
        funFacts: 'Gás nobre radioativo!',
        valences: ['0']
    },

    // Período 7
    {
        number: 87, symbol: 'Fr', name: 'Frâncio', mass: 223, category: 'alkali-metal',
        period: 7, group: 1, phase: 'Sólido', meltingPoint: '27°C', boilingPoint: '677°C',
        density: '1.87 g/cm³', atomicRadius: '348 pm', electronegativity: '0.7',
        ionizationEnergy: '380 kJ/mol', electronConfig: '[Rn] 7s¹', discoveryDate: '1939',
        discoveredBy: 'Marguerite Perey', nameOrigin: 'Da França',
        uses: ['Pesquisa científica'],
        funFacts: 'Elemento mais instável!',
        valences: ['+1']
    },
    {
        number: 88, symbol: 'Ra', name: 'Rádio', mass: 226, category: 'alkaline-earth-metal',
        period: 7, group: 2, phase: 'Sólido', meltingPoint: '700°C', boilingPoint: '1737°C',
        density: '5.5 g/cm³', atomicRadius: '283 pm', electronegativity: '0.9',
        ionizationEnergy: '509 kJ/mol', electronConfig: '[Rn] 7s²', discoveryDate: '1898',
        discoveredBy: 'Marie e Pierre Curie', nameOrigin: 'Do latim "radius" (raio)',
        uses: ['Medicina nuclear', 'Pesquisa científica'],
        funFacts: 'Brilha no escuro devido à radioatividade!',
        valences: ['+2']
    },

    // Actinídeos (89-103)
    {
        number: 89, symbol: 'Ac', name: 'Actínio', mass: 227.0, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1051°C', boilingPoint: '3198°C',
        density: '10.07 g/cm³', atomicRadius: '188 pm', electronegativity: '1.1',
        ionizationEnergy: '499 kJ/mol', electronConfig: '[Rn] 6d¹ 7s²', discoveryDate: '1899',
        discoveredBy: 'André-Louis Debierne', nameOrigin: 'Do grego "aktinos" (raio)',
        uses: ['Pesquisa nuclear', 'Fonte de nêutrons'],
        funFacts: 'Radioativo, brilha no escuro com luz azul-violeta!',
        valences: ['+3']
    },
    {
        number: 90, symbol: 'Th', name: 'Tório', mass: 232.038, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1750°C', boilingPoint: '4788°C',
        density: '11.72 g/cm³', atomicRadius: '180 pm', electronegativity: '1.3',
        ionizationEnergy: '587 kJ/mol', electronConfig: '[Rn] 6d² 7s²', discoveryDate: '1828',
        discoveredBy: 'Jöns Jakob Berzelius', nameOrigin: 'Do deus nórdico Thor',
        uses: ['Combustível nuclear', 'Mantos de lampião'],
        funFacts: 'Potencial combustível nuclear do futuro!',
        valences: ['+4']
    },
    {
        number: 91, symbol: 'Pa', name: 'Protactínio', mass: 231.04, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1572°C', boilingPoint: '4000°C',
        density: '15.37 g/cm³', atomicRadius: '243 pm', electronegativity: '1.5',
        ionizationEnergy: '568 kJ/mol', electronConfig: '[Rn] 5f² 6d¹ 7s²', discoveryDate: '1913',
        discoveredBy: 'Kasimir Fajans', nameOrigin: 'Precursor do actínio',
        uses: ['Pesquisa científica'],
        funFacts: 'Extremamente radioativo e raro!',
        valences: ['+5', '+4', '+3']
    },
    {
        number: 92, symbol: 'U', name: 'Urânio', mass: 238.03, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1135°C', boilingPoint: '4131°C',
        density: '18.95 g/cm³', atomicRadius: '240 pm', electronegativity: '1.38',
        ionizationEnergy: '598 kJ/mol', electronConfig: '[Rn] 5f³ 6d¹ 7s²', discoveryDate: '1789',
        discoveredBy: 'Martin Klaproth', nameOrigin: 'Do planeta Urano',
        uses: ['Energia nuclear', 'Armas nucleares', 'Datação'],
        funFacts: 'Combustível das usinas nucleares!',
        valences: ['+6', '+5', '+4', '+3']
    },
    {
        number: 93, symbol: 'Np', name: 'Netúnio', mass: 237, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '644°C', boilingPoint: '4000°C',
        density: '20.25 g/cm³', atomicRadius: '221 pm', electronegativity: '1.36',
        ionizationEnergy: '604 kJ/mol', electronConfig: '[Rn] 5f⁴ 6d¹ 7s²', discoveryDate: '1940',
        discoveredBy: 'Edwin McMillan', nameOrigin: 'Do planeta Netuno',
        uses: ['Detectores de nêutrons', 'Pesquisa'],
        funFacts: 'Primeiro elemento transuranio!',
        valences: ['+6', '+5', '+4', '+3']
    },
    {
        number: 94, symbol: 'Pu', name: 'Plutônio', mass: 244, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '640°C', boilingPoint: '3228°C',
        density: '19.84 g/cm³', atomicRadius: '243 pm', electronegativity: '1.28',
        ionizationEnergy: '584 kJ/mol', electronConfig: '[Rn] 5f⁶ 7s²', discoveryDate: '1940',
        discoveredBy: 'Glenn Seaborg', nameOrigin: 'Do planeta Plutão',
        uses: ['Armas nucleares', 'Energia nuclear', 'RTGs'],
        funFacts: 'Usado em bombas atômicas!',
        valences: ['+6', '+5', '+4', '+3']
    },
    {
        number: 95, symbol: 'Am', name: 'Amerício', mass: 243, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1176°C', boilingPoint: '2607°C',
        density: '13.69 g/cm³', atomicRadius: '244 pm', electronegativity: '1.13',
        ionizationEnergy: '578 kJ/mol', electronConfig: '[Rn] 5f⁷ 7s²', discoveryDate: '1944',
        discoveredBy: 'Glenn Seaborg', nameOrigin: 'Das Américas',
        uses: ['Detectores de fumaça', 'Medidores de espessura'],
        funFacts: 'Presente em detectores de fumaça!',
        valences: ['+6', '+5', '+4', '+3']
    },
    {
        number: 96, symbol: 'Cm', name: 'Cúrio', mass: 247, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1345°C', boilingPoint: '3110°C',
        density: '13.51 g/cm³', atomicRadius: '245 pm', electronegativity: '1.28',
        ionizationEnergy: '581 kJ/mol', electronConfig: '[Rn] 5f⁷ 6d¹ 7s²', discoveryDate: '1944',
        discoveredBy: 'Glenn Seaborg', nameOrigin: 'De Marie e Pierre Curie',
        uses: ['RTGs', 'Pesquisa científica'],
        funFacts: 'Nomeado em homenagem aos Curies!',
        valences: ['+3']
    },
    {
        number: 97, symbol: 'Bk', name: 'Berquélio', mass: 247, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1050°C', boilingPoint: '2627°C',
        density: '14.79 g/cm³', atomicRadius: '244 pm', electronegativity: '1.3',
        ionizationEnergy: '601 kJ/mol', electronConfig: '[Rn] 5f⁹ 7s²', discoveryDate: '1949',
        discoveredBy: 'Glenn Seaborg', nameOrigin: 'De Berkeley, Califórnia',
        uses: ['Pesquisa científica'],
        funFacts: 'Nomeado pela cidade onde foi descoberto!',
        valences: ['+4', '+3']
    },
    {
        number: 98, symbol: 'Cf', name: 'Califórnio', mass: 251, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '900°C', boilingPoint: '1470°C',
        density: '15.1 g/cm³', atomicRadius: '245 pm', electronegativity: '1.3',
        ionizationEnergy: '608 kJ/mol', electronConfig: '[Rn] 5f¹⁰ 7s²', discoveryDate: '1950',
        discoveredBy: 'Glenn Seaborg', nameOrigin: 'Da Califórnia',
        uses: ['Fonte de nêutrons', 'Detectores de ouro'],
        funFacts: 'Um grama vale milhões de dólares!',
        valences: ['+3']
    },
    {
        number: 99, symbol: 'Es', name: 'Einstênio', mass: 252, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '860°C', boilingPoint: '1130°C',
        density: '8.84 g/cm³', atomicRadius: '245 pm', electronegativity: '1.3',
        ionizationEnergy: '619 kJ/mol', electronConfig: '[Rn] 5f¹¹ 7s²', discoveryDate: '1952',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Albert Einstein',
        uses: ['Pesquisa científica'],
        funFacts: 'Descoberto em detritos de bomba nuclear!',
        valences: ['+3']
    },
    {
        number: 100, symbol: 'Fm', name: 'Férmio', mass: 257, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1527°C', boilingPoint: '1800°C',
        density: '9.7 g/cm³', atomicRadius: '245 pm', electronegativity: '1.3',
        ionizationEnergy: '627 kJ/mol', electronConfig: '[Rn] 5f¹² 7s²', discoveryDate: '1952',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Enrico Fermi',
        uses: ['Pesquisa científica'],
        funFacts: 'Nomeado em homenagem a Fermi!',
        valences: ['+3']
    },
    {
        number: 101, symbol: 'Md', name: 'Mendelévio', mass: 258, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '827°C', boilingPoint: '1100°C',
        density: '10.3 g/cm³', atomicRadius: '246 pm', electronegativity: '1.3',
        ionizationEnergy: '635 kJ/mol', electronConfig: '[Rn] 5f¹³ 7s²', discoveryDate: '1955',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Dmitri Mendeleev',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia o criador da tabela periódica!',
        valences: ['+3']
    },
    {
        number: 102, symbol: 'No', name: 'Nobélio', mass: 259, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '827°C', boilingPoint: '1100°C',
        density: '9.9 g/cm³', atomicRadius: '246 pm', electronegativity: '1.3',
        ionizationEnergy: '642 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 7s²', discoveryDate: '1957',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Alfred Nobel',
        uses: ['Pesquisa científica'],
        funFacts: 'Nomeado em homenagem a Nobel!',
        valences: ['+3']
    },
    {
        number: 103, symbol: 'Lr', name: 'Laurêncio', mass: 262, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1627°C', boilingPoint: '1900°C',
        density: '15.6 g/cm³', atomicRadius: '246 pm', electronegativity: '1.3',
        ionizationEnergy: '470 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 7s² 7p¹', discoveryDate: '1961',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Ernest Lawrence',
        uses: ['Pesquisa científica'],
        funFacts: 'Último dos actinídeos!',
        valences: ['+3']
    },

    // Elementos Superpesados (104-118)
    {
        number: 104, symbol: 'Rf', name: 'Rutherfórdio', mass: 267, category: 'transition-metal',
        period: 7, group: 4, phase: 'Sólido', meltingPoint: '2100°C', boilingPoint: '5500°C',
        density: '23 g/cm³', atomicRadius: '150 pm', electronegativity: '1.3',
        ionizationEnergy: '580 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d² 7s²', discoveryDate: '1964',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Ernest Rutherford',
        uses: ['Pesquisa científica'],
        funFacts: 'Primeiro elemento superpesado!',
        valences: ['+4']
    },
    {
        number: 105, symbol: 'Db', name: 'Dúbnio', mass: 268, category: 'transition-metal',
        period: 7, group: 5, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '29 g/cm³', atomicRadius: '139 pm', electronegativity: '1.5',
        ionizationEnergy: '665 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d³ 7s²', discoveryDate: '1967',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Dubna, Rússia',
        uses: ['Pesquisa científica'],
        funFacts: 'Nome homenageia laboratório russo!',
        valences: ['+5', '+4', '+3']
    },
    {
        number: 106, symbol: 'Sg', name: 'Seabórgio', mass: 271, category: 'transition-metal',
        period: 7, group: 6, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '35 g/cm³', atomicRadius: '132 pm', electronegativity: '1.9',
        ionizationEnergy: '757 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁴ 7s²', discoveryDate: '1974',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Glenn Seaborg',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia o descobridor dos actinídeos!',
        valences: ['+6', '+5', '+4']
    },
    {
        number: 107, symbol: 'Bh', name: 'Bóhrio', mass: 272, category: 'transition-metal',
        period: 7, group: 7, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '37 g/cm³', atomicRadius: '128 pm', electronegativity: '2.0',
        ionizationEnergy: '740 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁵ 7s²', discoveryDate: '1981',
        discoveredBy: 'Peter Armbruster', nameOrigin: 'De Niels Bohr',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia o pioneiro da física quântica!',
        valences: ['+7', '+6', '+5']
    },
    {
        number: 108, symbol: 'Hs', name: 'Hássio', mass: 277, category: 'transition-metal',
        period: 7, group: 8, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '40 g/cm³', atomicRadius: '126 pm', electronegativity: '2.2',
        ionizationEnergy: '800 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁶ 7s²', discoveryDate: '1984',
        discoveredBy: 'Peter Armbruster', nameOrigin: 'De Hesse, Alemanha',
        uses: ['Pesquisa científica'],
        funFacts: 'Nome da região alemã onde foi descoberto!',
        valences: ['+8', '+7', '+6']
    },
    {
        number: 109, symbol: 'Mt', name: 'Meitnério', mass: 276, category: 'transition-metal',
        period: 7, group: 9, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '37 g/cm³', atomicRadius: '125 pm', electronegativity: '2.2',
        ionizationEnergy: '800 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁷ 7s²', discoveryDate: '1982',
        discoveredBy: 'Peter Armbruster', nameOrigin: 'De Lise Meitner',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia a física Lise Meitner!',
        valences: ['+9', '+8', '+7']
    },
    {
        number: 110, symbol: 'Ds', name: 'Darmstádio', mass: 281, category: 'transition-metal',
        period: 7, group: 10, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '34 g/cm³', atomicRadius: '124 pm', electronegativity: '2.2',
        ionizationEnergy: '960 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁸ 7s²', discoveryDate: '1994',
        discoveredBy: 'Sigurd Hofmann', nameOrigin: 'De Darmstadt, Alemanha',
        uses: ['Pesquisa científica'],
        funFacts: 'Nome da cidade alemã onde foi descoberto!',
        valences: ['+10', '+8', '+6']
    },
    {
        number: 111, symbol: 'Rg', name: 'Roentgênio', mass: 280, category: 'transition-metal',
        period: 7, group: 11, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '28 g/cm³', atomicRadius: '121 pm', electronegativity: '2.2',
        ionizationEnergy: '1020 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁹ 7s²', discoveryDate: '1994',
        discoveredBy: 'Sigurd Hofmann', nameOrigin: 'De Wilhelm Röntgen',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia o descobridor dos raios-X!',
        valences: ['+11', '+9', '+3']
    },
    {
        number: 112, symbol: 'Cn', name: 'Copernício', mass: 285, category: 'transition-metal',
        period: 7, group: 12, phase: 'Sólido', meltingPoint: '283°C', boilingPoint: '340°C',
        density: '23 g/cm³', atomicRadius: '122 pm', electronegativity: '2.0',
        ionizationEnergy: '1155 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', discoveryDate: '1996',
        discoveredBy: 'Sigurd Hofmann', nameOrigin: 'De Nicolau Copérnico',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia o astrônomo Copérnico!',
        valences: ['+2']
    },
    {
        number: 113, symbol: 'Nh', name: 'Nihônio', mass: 286.0, category: 'transition-metal',
        period: 7, group: 13, phase: 'Sólido', meltingPoint: 'Desconhecido', boilingPoint: 'Desconhecido',
        density: 'Desconhecida', atomicRadius: 'Desconhecido', electronegativity: 'Desconhecida',
        ionizationEnergy: 'Desconhecida', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', discoveryDate: '2004',
        discoveredBy: 'RIKEN (Japão)', nameOrigin: 'Do japonês "Nihon"',
        uses: ['Pesquisa científica'],
        funFacts: 'Primeiro elemento descoberto no Japão!',
        valences: ['+1', '+3']
    },
    {
        number: 114, symbol: 'Fl', name: 'Fleróvio', mass: 289.0, category: 'transition-metal',
        period: 7, group: 14, phase: 'Sólido', meltingPoint: 'Desconhecido', boilingPoint: 'Desconhecido',
        density: 'Desconhecida', atomicRadius: 'Desconhecido', electronegativity: 'Desconhecida',
        ionizationEnergy: 'Desconhecida', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', discoveryDate: '1999',
        discoveredBy: 'Joint Institute (Rússia)', nameOrigin: 'Homenagem a Flerov',
        uses: ['Pesquisa científica'],
        funFacts: 'Pode ter propriedades similares ao chumbo!',
        valences: ['+2', '+4']
    },
    {
        number: 115, symbol: 'Mc', name: 'Moscóvio', mass: 290.0, category: 'transition-metal',
        period: 7, group: 15, phase: 'Sólido', meltingPoint: 'Desconhecido', boilingPoint: 'Desconhecido',
        density: 'Desconhecida', atomicRadius: 'Desconhecido', electronegativity: 'Desconhecida',
        ionizationEnergy: 'Desconhecida', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', discoveryDate: '2003',
        discoveredBy: 'Joint Institute (Rússia)', nameOrigin: 'Região de Moscou',
        uses: ['Pesquisa científica'],
        funFacts: 'Elemento sintético com meia-vida muito curta!',
        valences: ['+3', '+5']
    },
    {
        number: 116, symbol: 'Lv', name: 'Livermório', mass: 293.0, category: 'transition-metal',
        period: 7, group: 16, phase: 'Sólido', meltingPoint: 'Desconhecido', boilingPoint: 'Desconhecido',
        density: 'Desconhecida', atomicRadius: 'Desconhecido', electronegativity: 'Desconhecida',
        ionizationEnergy: 'Desconhecida', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', discoveryDate: '2000',
        discoveredBy: 'Joint Institute (Rússia)', nameOrigin: 'Lawrence Livermore National Laboratory',
        uses: ['Pesquisa científica'],
        funFacts: 'Previsto para ter propriedades similares ao polônio!',
        valences: ['+2', '+4', '+6']
    },
    {
        number: 117, symbol: 'Ts', name: 'Tenesso', mass: 294.0, category: 'halogen',
        period: 7, group: 17, phase: 'Sólido', meltingPoint: 'Desconhecido', boilingPoint: 'Desconhecido',
        density: 'Desconhecida', atomicRadius: 'Desconhecido', electronegativity: 'Desconhecida',
        ionizationEnergy: 'Desconhecida', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', discoveryDate: '2010',
        discoveredBy: 'Joint Institute (Rússia)', nameOrigin: 'Estado do Tennessee',
        uses: ['Pesquisa científica'],
        funFacts: 'Halogênio mais pesado conhecido!',
        valences: ['-1', '+1', '+3', '+5', '+7']
    },
    {
        number: 118, symbol: 'Og', name: 'Oganessônio', mass: 294.0, category: 'noble-gas',
        period: 7, group: 18, phase: 'Sólido', meltingPoint: 'Desconhecido', boilingPoint: 'Desconhecido',
        density: 'Desconhecida', atomicRadius: 'Desconhecido', electronegativity: 'Desconhecida',
        ionizationEnergy: 'Desconhecida', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', discoveryDate: '2002',
        discoveredBy: 'Joint Institute (Rússia)', nameOrigin: 'Homenagem a Oganessian',
        uses: ['Pesquisa científica'],
        funFacts: 'Gás nobre mais pesado, completa o período 7!',
        valences: ['0']
    }
];

// Classe principal da Tabela Periódica
class PeriodicTable {
    constructor() {
        this.currentFilter = 'all';
        this.currentView = 'standard';
        this.modal = document.getElementById('elementModal');
        this.tableContainer = document.getElementById('periodicTable');
        this.searchInput = document.getElementById('searchInput');

        this.init();
    }

    init() {
        this.createGroupLabels();
        this.createPeriodLabels();
        this.createTable();
        this.setupEventListeners();
        this.setupSearch();
        this.setupFilters();
        this.setupViewToggle();
    }

    createGroupLabels() {
        const table = this.tableContainer;
        for (let group = 1; group <= 18; group++) {
            const label = document.createElement('div');
            label.className = 'group-label';
            label.style.gridColumn = group + 1; // +1 para account para period labels
            label.style.gridRow = 1;
            label.textContent = group;
            table.appendChild(label);
        }
    }

    createPeriodLabels() {
        const table = this.tableContainer;
        for (let period = 1; period <= 7; period++) {
            const label = document.createElement('div');
            label.className = 'period-label';
            label.style.gridRow = period + 1; // +1 para account para group labels
            label.style.gridColumn = 1;
            label.textContent = period;
            table.appendChild(label);
        }
    }

    createTable() {
        // Criar elementos principais
        elements.forEach(element => {
            const elementDiv = this.createElement(element);

            if (element.category === 'lanthanide') {
                this.addToLanthanideSeries(elementDiv);
            } else if (element.category === 'actinide') {
                this.addToActinideSeries(elementDiv);
            } else {
                // Ajustar posicionamento para account para labels
                elementDiv.style.gridRow = element.period + 1;
                elementDiv.style.gridColumn = element.group + 1;
                this.tableContainer.appendChild(elementDiv);
            }
        });

        this.createLanthanideActinideSeries();
    }

    createElement(element) {
        const div = document.createElement('div');
        div.className = `element ${element.category}`;
        div.setAttribute('data-number', element.number);
        div.setAttribute('data-symbol', element.symbol.toLowerCase());
        div.setAttribute('data-name', element.name.toLowerCase());
        div.setAttribute('data-category', element.category);
        div.setAttribute('data-group', element.group);
        div.setAttribute('data-period', element.period);

        const valenceText = element.valences ? element.valences.slice(0, 2).join(',') : '';

        div.innerHTML = `
            <span class="number">${element.number}</span>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
            <span class="mass">${element.mass}</span>
            <span class="valence">${valenceText}</span>
        `;

        div.addEventListener('click', () => this.showElementModal(element));

        return div;
    }

    createLanthanideActinideSeries() {
        const lanthanideContainer = document.createElement('div');
        lanthanideContainer.className = 'lanthanide-series';
        this.tableContainer.appendChild(lanthanideContainer);

        const actinideContainer = document.createElement('div');
        actinideContainer.className = 'actinide-series';
        this.tableContainer.appendChild(actinideContainer);

        // Adicionar lantanídeos armazenados
        if (this.lanthanideElements && this.lanthanideElements.length > 0) {
            this.lanthanideElements.sort((a, b) => {
                return parseInt(a.getAttribute('data-number')) - parseInt(b.getAttribute('data-number'));
            });
            this.lanthanideElements.forEach((elementDiv, index) => {
                elementDiv.style.gridRow = 9;
                elementDiv.style.gridColumn = index + 3;
                lanthanideContainer.appendChild(elementDiv);
            });
        }

        // Adicionar actinídeos armazenados
        if (this.actinideElements && this.actinideElements.length > 0) {
            this.actinideElements.sort((a, b) => {
                return parseInt(a.getAttribute('data-number')) - parseInt(b.getAttribute('data-number'));
            });
            this.actinideElements.forEach((elementDiv, index) => {
                elementDiv.style.gridRow = 10;
                elementDiv.style.gridColumn = index + 3;
                actinideContainer.appendChild(elementDiv);
            });
        }
    }

    addToLanthanideSeries(elementDiv) {
        if (!this.lanthanideElements) this.lanthanideElements = [];
        this.lanthanideElements.push(elementDiv);
        return elementDiv;
    }

    addToActinideSeries(elementDiv) {
        if (!this.actinideElements) this.actinideElements = [];
        this.actinideElements.push(elementDiv);
        return elementDiv;
    }

    showElementModal(element) {
        const modalIcon = document.getElementById('modalElementIcon');
        modalIcon.className = `element-icon ${element.category}`;
        modalIcon.innerHTML = `
            <div class="symbol">${element.symbol}</div>
            <div class="number">${element.number}</div>
        `;

        document.getElementById('modalElementName').textContent = element.name;
        document.getElementById('modalAtomicNumber').textContent = element.number;
        document.getElementById('modalGroup').textContent = element.group || 'N/A';
        document.getElementById('modalPeriod').textContent = element.period;
        document.getElementById('modalValences').textContent = element.valences ? element.valences.join(', ') : 'N/A';

        const propertiesContainer = document.getElementById('modalProperties');
        propertiesContainer.innerHTML = `
            <div class="property">
                <div class="property-label">Massa Atômica</div>
                <div class="property-value">${element.mass} u</div>
            </div>
            <div class="property">
                <div class="property-label">Estado Físico</div>
                <div class="property-value">${element.phase}</div>
            </div>
            <div class="property">
                <div class="property-label">Ponto de Fusão</div>
                <div class="property-value">${element.meltingPoint}</div>
            </div>
            <div class="property">
                <div class="property-label">Ponto de Ebulição</div>
                <div class="property-value">${element.boilingPoint}</div>
            </div>
            <div class="property">
                <div class="property-label">Densidade</div>
                <div class="property-value">${element.density}</div>
            </div>
            <div class="property">
                <div class="property-label">Raio Atômico</div>
                <div class="property-value">${element.atomicRadius}</div>
            </div>
            <div class="property">
                <div class="property-label">Eletronegatividade</div>
                <div class="property-value">${element.electronegativity}</div>
            </div>
            <div class="property">
                <div class="property-label">Energia de Ionização</div>
                <div class="property-value">${element.ionizationEnergy}</div>
            </div>
            <div class="property">
                <div class="property-label">Configuração Eletrônica</div>
                <div class="property-value">${element.electronConfig}</div>
            </div>
            <div class="property">
                <div class="property-label">Descoberto em</div>
                <div class="property-value">${element.discoveryDate}</div>
            </div>
            <div class="property">
                <div class="property-label">Descoberto por</div>
                <div class="property-value">${element.discoveredBy}</div>
            </div>
            <div class="property">
                <div class="property-label">Origem do Nome</div>
                <div class="property-value">${element.nameOrigin}</div>
            </div>
        `;

        const usesContainer = document.getElementById('modalUses');
        usesContainer.innerHTML = element.uses ? element.uses.map(use => 
            `<span class="use-tag">${use}</span>`
        ).join('') : '<span class="use-tag">Dados não disponíveis</span>';

        document.getElementById('modalFunFacts').textContent = element.funFacts || 'Informação não disponível.';

        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    hideElementModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    setupEventListeners() {
        const closeBtn = this.modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => this.hideElementModal());

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideElementModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('show')) {
                this.hideElementModal();
            }
        });
    }

    setupSearch() {
        this.searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            this.filterElements(searchTerm);
        });
    }

    setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');
                this.currentFilter = filter;
                this.applyFilter(filter);

                this.searchInput.value = '';
            });
        });
    }

    setupViewToggle() {
        const toggleButtons = document.querySelectorAll('.toggle-btn');

        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const view = button.getAttribute('data-view');
                this.currentView = view;
                this.updateView(view);
            });
        });
    }

    updateView(view) {
        const elements = document.querySelectorAll('.element');

        elements.forEach(element => {
            const valenceSpan = element.querySelector('.valence');
            const numberSpan = element.querySelector('.number');
            const nameDiv = element.querySelector('.name');

            switch(view) {
                case 'valence':
                    valenceSpan.style.display = 'block';
                    numberSpan.style.display = 'none';
                    nameDiv.style.display = 'none';
                    break;
                case 'groups':
                    const group = element.getAttribute('data-group');
                    numberSpan.textContent = `G${group}`;
                    numberSpan.style.display = 'block';
                    valenceSpan.style.display = 'none';
                    nameDiv.style.display = 'none';
                    break;
                default: // standard
                    valenceSpan.style.display = 'none';
                    numberSpan.style.display = 'block';
                    nameDiv.style.display = 'block';
                    numberSpan.textContent = element.getAttribute('data-number');
            }
        });
    }

    filterElements(searchTerm) {
        const allElements = document.querySelectorAll('.element');

        allElements.forEach(element => {
            const number = element.getAttribute('data-number');
            const symbol = element.getAttribute('data-symbol');
            const name = element.getAttribute('data-name');

            const matchesSearch = !searchTerm || 
                number.includes(searchTerm) ||
                symbol.includes(searchTerm) ||
                name.includes(searchTerm);

            const matchesFilter = this.currentFilter === 'all' || 
                element.getAttribute('data-category') === this.currentFilter;

            if (matchesSearch && matchesFilter) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    }

    applyFilter(filter) {
        const allElements = document.querySelectorAll('.element');

        allElements.forEach(element => {
            const category = element.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const requiredElements = ['periodicTable', 'elementModal', 'searchInput'];
    const missingElements = requiredElements.filter(id => !document.getElementById(id));

    if (missingElements.length > 0) {
        console.error('Elementos HTML necessários não encontrados:', missingElements);
        return;
    }

    window.periodicTable = new PeriodicTable();

    console.log('🚀 Sistema da Tabela Periódica 3D carregado!');
    console.log('✅ Tabela Periódica 3D inicializada com sucesso!');
    console.log(`📊 ${elements.length} elementos carregados`);
    console.log('🧪 Sistema interativo ativo');
});

window.PeriodicTable = PeriodicTable;
window.elements = elements;