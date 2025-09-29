// Base de dados COMPLETA dos 118 elementos químicos
const elements = [
    // Período 1
    {
        number: 1, symbol: 'H', name: 'Hidrogênio', mass: 1.008, category: 'reactive-nonmetal',
        period: 1, group: 1, phase: 'Gás', meltingPoint: '-259.16°C', boilingPoint: '-252.87°C',
        density: '0.00009 g/cm³', atomicRadius: '53 pm', electronegativity: '2.20',
        ionizationEnergy: '1312 kJ/mol', electronConfig: '1s¹', discoveryDate: '1766',
        discoveredBy: 'Henry Cavendish', nameOrigin: 'Do grego "hydro" + "genes"',
        uses: ['Combustível de foguetes', 'Produção de amônia', 'Refinamento de petróleo'],
        funFacts: 'É o elemento mais abundante no universo, constituindo cerca de 75% de toda a matéria bariônica.'
    },
    {
        number: 2, symbol: 'He', name: 'Hélio', mass: 4.003, category: 'noble-gas',
        period: 1, group: 18, phase: 'Gás', meltingPoint: '-272.20°C', boilingPoint: '-268.93°C',
        density: '0.0001785 g/cm³', atomicRadius: '31 pm', electronegativity: 'Não definida',
        ionizationEnergy: '2372 kJ/mol', electronConfig: '1s²', discoveryDate: '1868',
        discoveredBy: 'Pierre Janssen', nameOrigin: 'Do grego "helios" (Sol)',
        uses: ['Balões', 'Criogenia', 'Soldagem', 'Respiração artificial'],
        funFacts: 'Foi descoberto no Sol antes de ser encontrado na Terra!'
    },

    // Período 2
    {
        number: 3, symbol: 'Li', name: 'Lítio', mass: 6.94, category: 'alkali-metal',
        period: 2, group: 1, phase: 'Sólido', meltingPoint: '180.50°C', boilingPoint: '1342°C',
        density: '0.534 g/cm³', atomicRadius: '167 pm', electronegativity: '0.98',
        ionizationEnergy: '520 kJ/mol', electronConfig: '[He] 2s¹', discoveryDate: '1817',
        discoveredBy: 'Johan Arfwedson', nameOrigin: 'Do grego "lithos" (pedra)',
        uses: ['Baterias', 'Medicamentos', 'Ligas metálicas', 'Cerâmicas'],
        funFacts: 'É o metal mais leve que existe!'
    },
    {
        number: 4, symbol: 'Be', name: 'Berílio', mass: 9.012, category: 'alkaline-earth-metal',
        period: 2, group: 2, phase: 'Sólido', meltingPoint: '1287°C', boilingPoint: '2471°C',
        density: '1.85 g/cm³', atomicRadius: '112 pm', electronegativity: '1.57',
        ionizationEnergy: '899 kJ/mol', electronConfig: '[He] 2s²', discoveryDate: '1797',
        discoveredBy: 'Louis Vauquelin', nameOrigin: 'Do mineral berilo',
        uses: ['Ligas aeroespaciais', 'Instrumentos de precisão', 'Janelas de raios-X'],
        funFacts: 'Extremamente tóxico mas valioso. Usado em telescópios espaciais.'
    },
    {
        number: 5, symbol: 'B', name: 'Boro', mass: 10.81, category: 'metalloid',
        period: 2, group: 13, phase: 'Sólido', meltingPoint: '2077°C', boilingPoint: '4000°C',
        density: '2.34 g/cm³', atomicRadius: '87 pm', electronegativity: '2.04',
        ionizationEnergy: '801 kJ/mol', electronConfig: '[He] 2s² 2p¹', discoveryDate: '1808',
        discoveredBy: 'Humphry Davy', nameOrigin: 'Do árabe "buraq"',
        uses: ['Vidro borossilicato', 'Detergentes', 'Fertilizantes'],
        funFacts: 'O vidro Pyrex contém boro para resistir ao calor!'
    },
    {
        number: 6, symbol: 'C', name: 'Carbono', mass: 12.011, category: 'reactive-nonmetal',
        period: 2, group: 14, phase: 'Sólido', meltingPoint: '3550°C', boilingPoint: '4027°C',
        density: '2.267 g/cm³', atomicRadius: '67 pm', electronegativity: '2.55',
        ionizationEnergy: '1086 kJ/mol', electronConfig: '[He] 2s² 2p²', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde a antiguidade', nameOrigin: 'Do latim "carbo"',
        uses: ['Base da vida', 'Aço', 'Grafite', 'Diamantes', 'Nanotubos'],
        funFacts: 'Base de toda vida conhecida! Forma mais compostos que qualquer outro elemento.'
    },
    {
        number: 7, symbol: 'N', name: 'Nitrogênio', mass: 14.007, category: 'reactive-nonmetal',
        period: 2, group: 15, phase: 'Gás', meltingPoint: '-210.00°C', boilingPoint: '-195.79°C',
        density: '0.0012506 g/cm³', atomicRadius: '56 pm', electronegativity: '3.04',
        ionizationEnergy: '1402 kJ/mol', electronConfig: '[He] 2s² 2p³', discoveryDate: '1772',
        discoveredBy: 'Daniel Rutherford', nameOrigin: 'Do grego "nitron" + "genes"',
        uses: ['Fertilizantes', 'Explosivos', 'Atmosfera inerte', 'Proteínas'],
        funFacts: 'Compõe 78% da atmosfera terrestre!'
    },
    {
        number: 8, symbol: 'O', name: 'Oxigênio', mass: 15.999, category: 'reactive-nonmetal',
        period: 2, group: 16, phase: 'Gás', meltingPoint: '-218.79°C', boilingPoint: '-182.95°C',
        density: '0.001429 g/cm³', atomicRadius: '48 pm', electronegativity: '3.44',
        ionizationEnergy: '1314 kJ/mol', electronConfig: '[He] 2s² 2p⁴', discoveryDate: '1774',
        discoveredBy: 'Joseph Priestley', nameOrigin: 'Do grego "oxys" + "genes"',
        uses: ['Respiração', 'Combustão', 'Medicina', 'Soldagem'],
        funFacts: 'Essencial para quase toda vida na Terra!'
    },
    {
        number: 9, symbol: 'F', name: 'Flúor', mass: 18.998, category: 'halogen',
        period: 2, group: 17, phase: 'Gás', meltingPoint: '-219.67°C', boilingPoint: '-188.11°C',
        density: '0.001696 g/cm³', atomicRadius: '42 pm', electronegativity: '3.98',
        ionizationEnergy: '1681 kJ/mol', electronConfig: '[He] 2s² 2p⁵', discoveryDate: '1886',
        discoveredBy: 'Henri Moissan', nameOrigin: 'Do latim "fluere"',
        uses: ['Pasta de dente', 'Teflon', 'Refrigerantes', 'Anestésicos'],
        funFacts: 'É o elemento mais eletronegativo! Reage com praticamente tudo.'
    },
    {
        number: 10, symbol: 'Ne', name: 'Neônio', mass: 20.180, category: 'noble-gas',
        period: 2, group: 18, phase: 'Gás', meltingPoint: '-248.59°C', boilingPoint: '-246.08°C',
        density: '0.0008999 g/cm³', atomicRadius: '38 pm', electronegativity: 'Não definida',
        ionizationEnergy: '2081 kJ/mol', electronConfig: '[He] 2s² 2p⁶', discoveryDate: '1898',
        discoveredBy: 'William Ramsay', nameOrigin: 'Do grego "neos"',
        uses: ['Letreiros luminosos', 'Lasers', 'Criogenia'],
        funFacts: 'Produz a famosa luz laranja-vermelha dos letreiros!'
    },

    // Período 3
    {
        number: 11, symbol: 'Na', name: 'Sódio', mass: 22.990, category: 'alkali-metal',
        period: 3, group: 1, phase: 'Sólido', meltingPoint: '97.79°C', boilingPoint: '883°C',
        density: '0.97 g/cm³', atomicRadius: '190 pm', electronegativity: '0.93',
        ionizationEnergy: '496 kJ/mol', electronConfig: '[Ne] 3s¹', discoveryDate: '1807',
        discoveredBy: 'Humphry Davy', nameOrigin: 'Do inglês "soda"',
        uses: ['Sal de cozinha', 'Sabões', 'Lâmpadas de vapor'],
        funFacts: 'Reage explosivamente com água!'
    },
    {
        number: 12, symbol: 'Mg', name: 'Magnésio', mass: 24.305, category: 'alkaline-earth-metal',
        period: 3, group: 2, phase: 'Sólido', meltingPoint: '650°C', boilingPoint: '1090°C',
        density: '1.74 g/cm³', atomicRadius: '145 pm', electronegativity: '1.31',
        ionizationEnergy: '738 kJ/mol', electronConfig: '[Ne] 3s²', discoveryDate: '1808',
        discoveredBy: 'Humphry Davy', nameOrigin: 'De Magnésia, Grécia',
        uses: ['Ligas leves', 'Fogos de artifício', 'Suplementos'],
        funFacts: 'Centro da molécula de clorofila!'
    },
    {
        number: 13, symbol: 'Al', name: 'Alumínio', mass: 26.982, category: 'post-transition-metal',
        period: 3, group: 13, phase: 'Sólido', meltingPoint: '660.32°C', boilingPoint: '2519°C',
        density: '2.70 g/cm³', atomicRadius: '118 pm', electronegativity: '1.61',
        ionizationEnergy: '578 kJ/mol', electronConfig: '[Ne] 3s² 3p¹', discoveryDate: '1825',
        discoveredBy: 'Hans Ørsted', nameOrigin: 'Do latim "alumen"',
        uses: ['Latas', 'Aviação', 'Construção', 'Cabos elétricos'],
        funFacts: 'Era mais caro que ouro no século XIX!'
    },
    {
        number: 14, symbol: 'Si', name: 'Silício', mass: 28.085, category: 'metalloid',
        period: 3, group: 14, phase: 'Sólido', meltingPoint: '1414°C', boilingPoint: '3265°C',
        density: '2.3296 g/cm³', atomicRadius: '111 pm', electronegativity: '1.90',
        ionizationEnergy: '787 kJ/mol', electronConfig: '[Ne] 3s² 3p²', discoveryDate: '1824',
        discoveredBy: 'Jöns Berzelius', nameOrigin: 'Do latim "silex"',
        uses: ['Microchips', 'Vidro', 'Painéis solares', 'Silicones'],
        funFacts: 'Base da revolução digital!'
    },
    {
        number: 15, symbol: 'P', name: 'Fósforo', mass: 30.974, category: 'reactive-nonmetal',
        period: 3, group: 15, phase: 'Sólido', meltingPoint: '44.15°C', boilingPoint: '280.5°C',
        density: '1.82 g/cm³', atomicRadius: '98 pm', electronegativity: '2.19',
        ionizationEnergy: '1012 kJ/mol', electronConfig: '[Ne] 3s² 3p³', discoveryDate: '1669',
        discoveredBy: 'Hennig Brand', nameOrigin: 'Do grego "phosphoros"',
        uses: ['Fertilizantes', 'Fósforos', 'Detergentes', 'DNA/RNA'],
        funFacts: 'Foi o primeiro elemento descoberto por um processo científico!'
    },
    {
        number: 16, symbol: 'S', name: 'Enxofre', mass: 32.06, category: 'reactive-nonmetal',
        period: 3, group: 16, phase: 'Sólido', meltingPoint: '115.21°C', boilingPoint: '444.61°C',
        density: '2.067 g/cm³', atomicRadius: '88 pm', electronegativity: '2.58',
        ionizationEnergy: '1000 kJ/mol', electronConfig: '[Ne] 3s² 3p⁴', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde a antiguidade', nameOrigin: 'Do latim "sulphurium"',
        uses: ['Ácido sulfúrico', 'Vulcanização da borracha', 'Fungicidas'],
        funFacts: 'Responsável pelo cheiro de ovos podres!'
    },
    {
        number: 17, symbol: 'Cl', name: 'Cloro', mass: 35.45, category: 'halogen',
        period: 3, group: 17, phase: 'Gás', meltingPoint: '-101.5°C', boilingPoint: '-34.04°C',
        density: '0.003214 g/cm³', atomicRadius: '79 pm', electronegativity: '3.16',
        ionizationEnergy: '1251 kJ/mol', electronConfig: '[Ne] 3s² 3p⁵', discoveryDate: '1774',
        discoveredBy: 'Carl Scheele', nameOrigin: 'Do grego "chloros" (verde)',
        uses: ['Desinfetante', 'PVC', 'Sal de cozinha', 'Branqueamento'],
        funFacts: 'Usado como arma química na Primeira Guerra Mundial!'
    },
    {
        number: 18, symbol: 'Ar', name: 'Argônio', mass: 39.948, category: 'noble-gas',
        period: 3, group: 18, phase: 'Gás', meltingPoint: '-189.35°C', boilingPoint: '-185.85°C',
        density: '0.0017837 g/cm³', atomicRadius: '71 pm', electronegativity: 'Não definida',
        ionizationEnergy: '1521 kJ/mol', electronConfig: '[Ne] 3s² 3p⁶', discoveryDate: '1894',
        discoveredBy: 'William Ramsay', nameOrigin: 'Do grego "argos" (inativo)',
        uses: ['Soldagem', 'Lâmpadas incandescentes', 'Preservação'],
        funFacts: 'Terceiro gás mais abundante na atmosfera!'
    },

    // Período 4
    {
        number: 19, symbol: 'K', name: 'Potássio', mass: 39.098, category: 'alkali-metal',
        period: 4, group: 1, phase: 'Sólido', meltingPoint: '63.5°C', boilingPoint: '759°C',
        density: '0.89 g/cm³', atomicRadius: '243 pm', electronegativity: '0.82',
        ionizationEnergy: '419 kJ/mol', electronConfig: '[Ar] 4s¹', discoveryDate: '1807',
        discoveredBy: 'Humphry Davy', nameOrigin: 'Do inglês "potash"',
        uses: ['Fertilizantes', 'Sabões', 'Vidro', 'Regulação celular'],
        funFacts: 'Essencial para a contração muscular!'
    },
    {
        number: 20, symbol: 'Ca', name: 'Cálcio', mass: 40.078, category: 'alkaline-earth-metal',
        period: 4, group: 2, phase: 'Sólido', meltingPoint: '842°C', boilingPoint: '1484°C',
        density: '1.54 g/cm³', atomicRadius: '194 pm', electronegativity: '1.00',
        ionizationEnergy: '590 kJ/mol', electronConfig: '[Ar] 4s²', discoveryDate: '1808',
        discoveredBy: 'Humphry Davy', nameOrigin: 'Do latim "calx" (cal)',
        uses: ['Ossos e dentes', 'Cimento', 'Gesso', 'Aditivos alimentares'],
        funFacts: 'Elemento mais abundante no corpo humano!'
    },
    {
        number: 21, symbol: 'Sc', name: 'Escândio', mass: 44.956, category: 'transition-metal',
        period: 4, group: 3, phase: 'Sólido', meltingPoint: '1541°C', boilingPoint: '2836°C',
        density: '2.99 g/cm³', atomicRadius: '184 pm', electronegativity: '1.36',
        ionizationEnergy: '633 kJ/mol', electronConfig: '[Ar] 3d¹ 4s²', discoveryDate: '1879',
        discoveredBy: 'Lars Nilson', nameOrigin: 'Da Escandinávia',
        uses: ['Ligas de alumínio', 'Lâmpadas de alta intensidade'],
        funFacts: 'Primeiro metal de transição da tabela periódica!'
    },
    {
        number: 22, symbol: 'Ti', name: 'Titânio', mass: 47.867, category: 'transition-metal',
        period: 4, group: 4, phase: 'Sólido', meltingPoint: '1668°C', boilingPoint: '3287°C',
        density: '4.5 g/cm³', atomicRadius: '176 pm', electronegativity: '1.54',
        ionizationEnergy: '659 kJ/mol', electronConfig: '[Ar] 3d² 4s²', discoveryDate: '1791',
        discoveredBy: 'William Gregor', nameOrigin: 'Dos Titãs da mitologia grega',
        uses: ['Implantes médicos', 'Aeronáutica', 'Joias', 'Pigmentos'],
        funFacts: 'Forte como o aço, mas 45% mais leve!'
    },
    {
        number: 23, symbol: 'V', name: 'Vanádio', mass: 50.942, category: 'transition-metal',
        period: 4, group: 5, phase: 'Sólido', meltingPoint: '1910°C', boilingPoint: '3407°C',
        density: '6.0 g/cm³', atomicRadius: '171 pm', electronegativity: '1.63',
        ionizationEnergy: '651 kJ/mol', electronConfig: '[Ar] 3d³ 4s²', discoveryDate: '1801',
        discoveredBy: 'Andrés del Río', nameOrigin: 'Da deusa Vanadis',
        uses: ['Ligas de aço', 'Catalisadores', 'Cerâmicas'],
        funFacts: 'Usado para fortalecer o aço!'
    },
    {
        number: 24, symbol: 'Cr', name: 'Cromo', mass: 51.996, category: 'transition-metal',
        period: 4, group: 6, phase: 'Sólido', meltingPoint: '1907°C', boilingPoint: '2671°C',
        density: '7.15 g/cm³', atomicRadius: '166 pm', electronegativity: '1.66',
        ionizationEnergy: '653 kJ/mol', electronConfig: '[Ar] 3d⁵ 4s¹', discoveryDate: '1797',
        discoveredBy: 'Louis Vauquelin', nameOrigin: 'Do grego "chroma" (cor)',
        uses: ['Aço inoxidável', 'Cromagem', 'Pigmentos', 'Curtimento'],
        funFacts: 'Dá o brilho ao aço inoxidável!'
    },
    {
        number: 25, symbol: 'Mn', name: 'Manganês', mass: 54.938, category: 'transition-metal',
        period: 4, group: 7, phase: 'Sólido', meltingPoint: '1246°C', boilingPoint: '2061°C',
        density: '7.3 g/cm³', atomicRadius: '161 pm', electronegativity: '1.55',
        ionizationEnergy: '717 kJ/mol', electronConfig: '[Ar] 3d⁵ 4s²', discoveryDate: '1774',
        discoveredBy: 'Johan Gahn', nameOrigin: 'Do latim "magnes"',
        uses: ['Produção de aço', 'Baterias', 'Fertilizantes'],
        funFacts: 'Essencial para a fotossíntese!'
    },
    {
        number: 26, symbol: 'Fe', name: 'Ferro', mass: 55.845, category: 'transition-metal',
        period: 4, group: 8, phase: 'Sólido', meltingPoint: '1538°C', boilingPoint: '2862°C',
        density: '7.874 g/cm³', atomicRadius: '156 pm', electronegativity: '1.83',
        ionizationEnergy: '762 kJ/mol', electronConfig: '[Ar] 3d⁶ 4s²', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde a antiguidade', nameOrigin: 'Do latim "ferrum"',
        uses: ['Aço', 'Construção', 'Hemoglobina', 'Ímãs'],
        funFacts: 'Metal mais usado pela humanidade!'
    },
    {
        number: 27, symbol: 'Co', name: 'Cobalto', mass: 58.933, category: 'transition-metal',
        period: 4, group: 9, phase: 'Sólido', meltingPoint: '1495°C', boilingPoint: '2927°C',
        density: '8.86 g/cm³', atomicRadius: '152 pm', electronegativity: '1.88',
        ionizationEnergy: '760 kJ/mol', electronConfig: '[Ar] 3d⁷ 4s²', discoveryDate: '1735',
        discoveredBy: 'Georg Brandt', nameOrigin: 'Do alemão "kobold"',
        uses: ['Ímãs permanentes', 'Baterias', 'Pigmentos azuis'],
        funFacts: 'Centro da vitamina B12!'
    },
    {
        number: 28, symbol: 'Ni', name: 'Níquel', mass: 58.693, category: 'transition-metal',
        period: 4, group: 10, phase: 'Sólido', meltingPoint: '1455°C', boilingPoint: '2913°C',
        density: '8.912 g/cm³', atomicRadius: '149 pm', electronegativity: '1.91',
        ionizationEnergy: '737 kJ/mol', electronConfig: '[Ar] 3d⁸ 4s²', discoveryDate: '1751',
        discoveredBy: 'Axel Cronstedt', nameOrigin: 'Do alemão "kupfernickel"',
        uses: ['Moedas', 'Aço inoxidável', 'Baterias', 'Catalisadores'],
        funFacts: 'Abundante no núcleo da Terra!'
    },
    {
        number: 29, symbol: 'Cu', name: 'Cobre', mass: 63.546, category: 'transition-metal',
        period: 4, group: 11, phase: 'Sólido', meltingPoint: '1084.62°C', boilingPoint: '2562°C',
        density: '8.933 g/cm³', atomicRadius: '145 pm', electronegativity: '1.90',
        ionizationEnergy: '745 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s¹', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 9000 a.C.', nameOrigin: 'Do latim "cuprum"',
        uses: ['Fios elétricos', 'Encanamentos', 'Moedas', 'Ligas'],
        funFacts: 'Primeiro metal trabalhado pelo homem!'
    },
    {
        number: 30, symbol: 'Zn', name: 'Zinco', mass: 65.38, category: 'transition-metal',
        period: 4, group: 12, phase: 'Sólido', meltingPoint: '419.53°C', boilingPoint: '907°C',
        density: '7.134 g/cm³', atomicRadius: '142 pm', electronegativity: '1.65',
        ionizationEnergy: '906 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s²', discoveryDate: '1746',
        discoveredBy: 'Andreas Marggraf', nameOrigin: 'Do alemão "zink"',
        uses: ['Galvanização', 'Ligas', 'Suplementos', 'Pilhas'],
        funFacts: 'Essencial para o sistema imunológico!'
    },
    {
        number: 31, symbol: 'Ga', name: 'Gálio', mass: 69.723, category: 'post-transition-metal',
        period: 4, group: 13, phase: 'Sólido', meltingPoint: '29.76°C', boilingPoint: '2204°C',
        density: '5.91 g/cm³', atomicRadius: '136 pm', electronegativity: '1.81',
        ionizationEnergy: '579 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p¹', discoveryDate: '1875',
        discoveredBy: 'Paul Lecoq', nameOrigin: 'Do latim "Gallia" (França)',
        uses: ['Semicondutores', 'LEDs', 'Painéis solares'],
        funFacts: 'Derrete na sua mão (ponto de fusão 29°C)!'
    },
    {
        number: 32, symbol: 'Ge', name: 'Germânio', mass: 72.630, category: 'metalloid',
        period: 4, group: 14, phase: 'Sólido', meltingPoint: '938.25°C', boilingPoint: '2833°C',
        density: '5.323 g/cm³', atomicRadius: '125 pm', electronegativity: '2.01',
        ionizationEnergy: '762 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p²', discoveryDate: '1886',
        discoveredBy: 'Clemens Winkler', nameOrigin: 'Do latim "Germania"',
        uses: ['Fibras ópticas', 'Transistores', 'Células solares'],
        funFacts: 'Sua descoberta confirmou a tabela de Mendeleev!'
    },
    {
        number: 33, symbol: 'As', name: 'Arsênio', mass: 74.922, category: 'metalloid',
        period: 4, group: 15, phase: 'Sólido', meltingPoint: '817°C', boilingPoint: '614°C',
        density: '5.776 g/cm³', atomicRadius: '114 pm', electronegativity: '2.18',
        ionizationEnergy: '947 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p³', discoveryDate: '1250',
        discoveredBy: 'Albertus Magnus', nameOrigin: 'Do grego "arsenikon"',
        uses: ['Semicondutores', 'Pesticidas', 'Medicamentos'],
        funFacts: 'Famoso veneno, mas também usado em medicina!'
    },
    {
        number: 34, symbol: 'Se', name: 'Selênio', mass: 78.971, category: 'reactive-nonmetal',
        period: 4, group: 16, phase: 'Sólido', meltingPoint: '221°C', boilingPoint: '685°C',
        density: '4.809 g/cm³', atomicRadius: '103 pm', electronegativity: '2.55',
        ionizationEnergy: '941 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁴', discoveryDate: '1817',
        discoveredBy: 'Jöns Berzelius', nameOrigin: 'Do grego "selene" (lua)',
        uses: ['Fotocélulas', 'Suplementos', 'Shampoos anticaspa'],
        funFacts: 'Essencial em pequenas quantidades, tóxico em excesso!'
    },
    {
        number: 35, symbol: 'Br', name: 'Bromo', mass: 79.904, category: 'halogen',
        period: 4, group: 17, phase: 'Líquido', meltingPoint: '-7.2°C', boilingPoint: '58.8°C',
        density: '3.11 g/cm³', atomicRadius: '94 pm', electronegativity: '2.96',
        ionizationEnergy: '1140 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁵', discoveryDate: '1826',
        discoveredBy: 'Antoine Balard', nameOrigin: 'Do grego "bromos" (fedor)',
        uses: ['Retardantes de chama', 'Pesticidas', 'Medicamentos'],
        funFacts: 'Único elemento líquido não-metálico!'
    },
    {
        number: 36, symbol: 'Kr', name: 'Criptônio', mass: 83.798, category: 'noble-gas',
        period: 4, group: 18, phase: 'Gás', meltingPoint: '-157.36°C', boilingPoint: '-153.22°C',
        density: '0.003733 g/cm³', atomicRadius: '88 pm', electronegativity: '3.00',
        ionizationEnergy: '1351 kJ/mol', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁶', discoveryDate: '1898',
        discoveredBy: 'William Ramsay', nameOrigin: 'Do grego "kryptos" (oculto)',
        uses: ['Lâmpadas de alta eficiência', 'Lasers', 'Isolamento térmico'],
        funFacts: 'Nome inspirou o planeta natal do Super-Homem!'
    },

    // Período 5
    {
        number: 37, symbol: 'Rb', name: 'Rubídio', mass: 85.468, category: 'alkali-metal',
        period: 5, group: 1, phase: 'Sólido', meltingPoint: '39.31°C', boilingPoint: '688°C',
        density: '1.53 g/cm³', atomicRadius: '265 pm', electronegativity: '0.82',
        ionizationEnergy: '403 kJ/mol', electronConfig: '[Kr] 5s¹', discoveryDate: '1861',
        discoveredBy: 'Robert Bunsen', nameOrigin: 'Do latim "rubidus" (vermelho)',
        uses: ['Relógios atômicos', 'Células fotoelétricas'],
        funFacts: 'Usado para definir o segundo!'
    },
    {
        number: 38, symbol: 'Sr', name: 'Estrôncio', mass: 87.62, category: 'alkaline-earth-metal',
        period: 5, group: 2, phase: 'Sólido', meltingPoint: '777°C', boilingPoint: '1382°C',
        density: '2.64 g/cm³', atomicRadius: '219 pm', electronegativity: '0.95',
        ionizationEnergy: '549 kJ/mol', electronConfig: '[Kr] 5s²', discoveryDate: '1790',
        discoveredBy: 'William Cruickshank', nameOrigin: 'De Strontian, Escócia',
        uses: ['Fogos de artifício', 'Pigmentos', 'Medicina nuclear'],
        funFacts: 'Produz chamas vermelhas brilhantes!'
    },
    {
        number: 39, symbol: 'Y', name: 'Ítrio', mass: 88.906, category: 'transition-metal',
        period: 5, group: 3, phase: 'Sólido', meltingPoint: '1526°C', boilingPoint: '3345°C',
        density: '4.47 g/cm³', atomicRadius: '212 pm', electronegativity: '1.22',
        ionizationEnergy: '600 kJ/mol', electronConfig: '[Kr] 4d¹ 5s²', discoveryDate: '1794',
        discoveredBy: 'Johan Gadolin', nameOrigin: 'De Ytterby, Suécia',
        uses: ['Supercondutores', 'LEDs', 'Lasers'],
        funFacts: 'Quatro elementos foram descobertos na mesma mina sueca!'
    },
    {
        number: 40, symbol: 'Zr', name: 'Zircônio', mass: 91.224, category: 'transition-metal',
        period: 5, group: 4, phase: 'Sólido', meltingPoint: '1855°C', boilingPoint: '4409°C',
        density: '6.52 g/cm³', atomicRadius: '206 pm', electronegativity: '1.33',
        ionizationEnergy: '640 kJ/mol', electronConfig: '[Kr] 4d² 5s²', discoveryDate: '1789',
        discoveredBy: 'Martin Klaproth', nameOrigin: 'Do árabe "zargun"',
        uses: ['Reatores nucleares', 'Implantes', 'Cerâmicas'],
        funFacts: 'Extremamente resistente à corrosão!'
    },
    {
        number: 41, symbol: 'Nb', name: 'Nióbio', mass: 92.906, category: 'transition-metal',
        period: 5, group: 5, phase: 'Sólido', meltingPoint: '2477°C', boilingPoint: '4744°C',
        density: '8.57 g/cm³', atomicRadius: '198 pm', electronegativity: '1.6',
        ionizationEnergy: '652 kJ/mol', electronConfig: '[Kr] 4d⁴ 5s¹', discoveryDate: '1801',
        discoveredBy: 'Charles Hatchett', nameOrigin: 'De Níobe, mitologia grega',
        uses: ['Supercondutores', 'Ligas especiais', 'Joias'],
        funFacts: 'Brasil possui 98% das reservas mundiais!'
    },
    {
        number: 42, symbol: 'Mo', name: 'Molibdênio', mass: 95.95, category: 'transition-metal',
        period: 5, group: 6, phase: 'Sólido', meltingPoint: '2623°C', boilingPoint: '4639°C',
        density: '10.2 g/cm³', atomicRadius: '190 pm', electronegativity: '2.16',
        ionizationEnergy: '684 kJ/mol', electronConfig: '[Kr] 4d⁵ 5s¹', discoveryDate: '1781',
        discoveredBy: 'Peter Woulfe', nameOrigin: 'Do grego "molybdos" (chumbo)',
        uses: ['Ligas de aço', 'Catalisadores', 'Lubrificantes'],
        funFacts: 'Essencial para enzimas!'
    },
    {
        number: 43, symbol: 'Tc', name: 'Tecnécio', mass: 98, category: 'transition-metal',
        period: 5, group: 7, phase: 'Sólido', meltingPoint: '2157°C', boilingPoint: '4265°C',
        density: '11 g/cm³', atomicRadius: '183 pm', electronegativity: '1.9',
        ionizationEnergy: '702 kJ/mol', electronConfig: '[Kr] 4d⁵ 5s²', discoveryDate: '1937',
        discoveredBy: 'Emilio Segrè', nameOrigin: 'Do grego "technetos" (artificial)',
        uses: ['Medicina nuclear', 'Diagnóstico médico'],
        funFacts: 'Primeiro elemento artificial!'
    },
    {
        number: 44, symbol: 'Ru', name: 'Rutênio', mass: 101.07, category: 'transition-metal',
        period: 5, group: 8, phase: 'Sólido', meltingPoint: '2334°C', boilingPoint: '4150°C',
        density: '12.1 g/cm³', atomicRadius: '178 pm', electronegativity: '2.2',
        ionizationEnergy: '710 kJ/mol', electronConfig: '[Kr] 4d⁷ 5s¹', discoveryDate: '1844',
        discoveredBy: 'Karl Klaus', nameOrigin: 'Do latim "Ruthenia" (Rússia)',
        uses: ['Catalisadores', 'Eletrônicos', 'Joias'],
        funFacts: 'Membro da família da platina!'
    },
    {
        number: 45, symbol: 'Rh', name: 'Ródio', mass: 102.91, category: 'transition-metal',
        period: 5, group: 9, phase: 'Sólido', meltingPoint: '1964°C', boilingPoint: '3695°C',
        density: '12.4 g/cm³', atomicRadius: '173 pm', electronegativity: '2.28',
        ionizationEnergy: '720 kJ/mol', electronConfig: '[Kr] 4d⁸ 5s¹', discoveryDate: '1803',
        discoveredBy: 'William Wollaston', nameOrigin: 'Do grego "rhodon" (rosa)',
        uses: ['Catalisadores automotivos', 'Joias', 'Espelhos'],
        funFacts: 'Metal mais caro do mundo!'
    },
    {
        number: 46, symbol: 'Pd', name: 'Paládio', mass: 106.42, category: 'transition-metal',
        period: 5, group: 10, phase: 'Sólido', meltingPoint: '1554.9°C', boilingPoint: '2963°C',
        density: '12.0 g/cm³', atomicRadius: '169 pm', electronegativity: '2.20',
        ionizationEnergy: '804 kJ/mol', electronConfig: '[Kr] 4d¹⁰', discoveryDate: '1803',
        discoveredBy: 'William Wollaston', nameOrigin: 'Do asteróide Pallas',
        uses: ['Catalisadores', 'Joias', 'Eletrônicos', 'Odontologia'],
        funFacts: 'Absorve até 900 vezes seu volume em hidrogênio!'
    },
    {
        number: 47, symbol: 'Ag', name: 'Prata', mass: 107.87, category: 'transition-metal',
        period: 5, group: 11, phase: 'Sólido', meltingPoint: '961.78°C', boilingPoint: '2162°C',
        density: '10.501 g/cm³', atomicRadius: '165 pm', electronegativity: '1.93',
        ionizationEnergy: '731 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s¹', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 4000 a.C.', nameOrigin: 'Do latim "argentum"',
        uses: ['Joias', 'Moedas', 'Eletrônicos', 'Antimicrobiano'],
        funFacts: 'Melhor condutor elétrico de todos os elementos!'
    },
    {
        number: 48, symbol: 'Cd', name: 'Cádmio', mass: 112.41, category: 'transition-metal',
        period: 5, group: 12, phase: 'Sólido', meltingPoint: '321.07°C', boilingPoint: '767°C',
        density: '8.69 g/cm³', atomicRadius: '161 pm', electronegativity: '1.69',
        ionizationEnergy: '868 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s²', discoveryDate: '1817',
        discoveredBy: 'Karl Hermann', nameOrigin: 'Do grego "kadmeia"',
        uses: ['Baterias', 'Pigmentos', 'Galvanização'],
        funFacts: 'Altamente tóxico, usado em baterias recarregáveis!'
    },
    {
        number: 49, symbol: 'In', name: 'Índio', mass: 114.82, category: 'post-transition-metal',
        period: 5, group: 13, phase: 'Sólido', meltingPoint: '156.60°C', boilingPoint: '2072°C',
        density: '7.31 g/cm³', atomicRadius: '156 pm', electronegativity: '1.78',
        ionizationEnergy: '558 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p¹', discoveryDate: '1863',
        discoveredBy: 'Ferdinand Reich', nameOrigin: 'Do índigo (cor)',
        uses: ['Telas touchscreen', 'LEDs', 'Soldas especiais'],
        funFacts: 'Essencial para telas de smartphones!'
    },
    {
        number: 50, symbol: 'Sn', name: 'Estanho', mass: 118.71, category: 'post-transition-metal',
        period: 5, group: 14, phase: 'Sólido', meltingPoint: '231.93°C', boilingPoint: '2602°C',
        density: '7.287 g/cm³', atomicRadius: '145 pm', electronegativity: '1.96',
        ionizationEnergy: '709 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p²', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 3500 a.C.', nameOrigin: 'Do latim "stannum"',
        uses: ['Soldas', 'Latas', 'Liga de bronze', 'Revestimentos'],
        funFacts: 'Era tão valioso quanto ouro na antiguidade!'
    },
    {
        number: 51, symbol: 'Sb', name: 'Antimônio', mass: 121.76, category: 'metalloid',
        period: 5, group: 15, phase: 'Sólido', meltingPoint: '630.63°C', boilingPoint: '1587°C',
        density: '6.685 g/cm³', atomicRadius: '133 pm', electronegativity: '2.05',
        ionizationEnergy: '834 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p³', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 3000 a.C.', nameOrigin: 'Do grego "anti-monos"',
        uses: ['Retardantes de chama', 'Ligas', 'Semicondutores'],
        funFacts: 'Usado como cosmético no antigo Egito!'
    },
    {
        number: 52, symbol: 'Te', name: 'Telúrio', mass: 127.60, category: 'metalloid',
        period: 5, group: 16, phase: 'Sólido', meltingPoint: '449.51°C', boilingPoint: '988°C',
        density: '6.232 g/cm³', atomicRadius: '123 pm', electronegativity: '2.1',
        ionizationEnergy: '869 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁴', discoveryDate: '1783',
        discoveredBy: 'Franz von Reichenstein', nameOrigin: 'Do latim "tellus" (terra)',
        uses: ['Ligas especiais', 'Células solares', 'Termoelétricos'],
        funFacts: 'Mais raro que ouro na crosta terrestre!'
    },
    {
        number: 53, symbol: 'I', name: 'Iodo', mass: 126.90, category: 'halogen',
        period: 5, group: 17, phase: 'Sólido', meltingPoint: '113.7°C', boilingPoint: '184.3°C',
        density: '4.93 g/cm³', atomicRadius: '115 pm', electronegativity: '2.66',
        ionizationEnergy: '1008 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁵', discoveryDate: '1811',
        discoveredBy: 'Bernard Courtois', nameOrigin: 'Do grego "iodes" (violeta)',
        uses: ['Desinfetante', 'Medicina', 'Sal iodado', 'Contrastes'],
        funFacts: 'Essencial para a tireoide!'
    },
    {
        number: 54, symbol: 'Xe', name: 'Xenônio', mass: 131.29, category: 'noble-gas',
        period: 5, group: 18, phase: 'Gás', meltingPoint: '-111.75°C', boilingPoint: '-108.099°C',
        density: '0.005887 g/cm³', atomicRadius: '108 pm', electronegativity: '2.6',
        ionizationEnergy: '1170 kJ/mol', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁶', discoveryDate: '1898',
        discoveredBy: 'William Ramsay', nameOrigin: 'Do grego "xenos" (estranho)',
        uses: ['Anestésicos', 'Lâmpadas de alta intensidade', 'Propulsão espacial'],
        funFacts: 'Primeiro gás nobre a formar compostos químicos!'
    },

    // Período 6
    {
        number: 55, symbol: 'Cs', name: 'Césio', mass: 132.91, category: 'alkali-metal',
        period: 6, group: 1, phase: 'Sólido', meltingPoint: '28.44°C', boilingPoint: '671°C',
        density: '1.93 g/cm³', atomicRadius: '298 pm', electronegativity: '0.79',
        ionizationEnergy: '376 kJ/mol', electronConfig: '[Xe] 6s¹', discoveryDate: '1860',
        discoveredBy: 'Robert Bunsen', nameOrigin: 'Do latim "caesius" (azul celeste)',
        uses: ['Relógios atômicos', 'Células fotoelétricas', 'Medicina'],
        funFacts: 'Metal mais reativo!'
    },
    {
        number: 56, symbol: 'Ba', name: 'Bário', mass: 137.33, category: 'alkaline-earth-metal',
        period: 6, group: 2, phase: 'Sólido', meltingPoint: '727°C', boilingPoint: '1845°C',
        density: '3.62 g/cm³', atomicRadius: '253 pm', electronegativity: '0.89',
        ionizationEnergy: '503 kJ/mol', electronConfig: '[Xe] 6s²', discoveryDate: '1808',
        discoveredBy: 'Humphry Davy', nameOrigin: 'Do grego "barys" (pesado)',
        uses: ['Contrastes médicos', 'Fogos de artifício', 'Vidros especiais'],
        funFacts: 'Produz chamas verdes em fogos de artifício!'
    },

    // Lantanídeos (57-71)
    {
        number: 57, symbol: 'La', name: 'Lantânio', mass: 138.91, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '920°C', boilingPoint: '3464°C',
        density: '6.15 g/cm³', atomicRadius: '240 pm', electronegativity: '1.1',
        ionizationEnergy: '538 kJ/mol', electronConfig: '[Xe] 5d¹ 6s²', discoveryDate: '1839',
        discoveredBy: 'Carl Mosander', nameOrigin: 'Do grego "lanthanein" (ocultar)',
        uses: ['Catalisadores', 'Óptica', 'Ligas especiais'],
        funFacts: 'Primeiro dos lantanídeos!'
    },
    {
        number: 58, symbol: 'Ce', name: 'Cério', mass: 140.12, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '798°C', boilingPoint: '3443°C',
        density: '6.77 g/cm³', atomicRadius: '235 pm', electronegativity: '1.12',
        ionizationEnergy: '534 kJ/mol', electronConfig: '[Xe] 4f¹ 5d¹ 6s²', discoveryDate: '1803',
        discoveredBy: 'Jöns Berzelius', nameOrigin: 'Do asteróide Ceres',
        uses: ['Catalisadores', 'Isqueiros', 'Vidros especiais'],
        funFacts: 'Mais abundante das terras raras!'
    },
    {
        number: 59, symbol: 'Pr', name: 'Praseodímio', mass: 140.91, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '931°C', boilingPoint: '3520°C',
        density: '6.77 g/cm³', atomicRadius: '239 pm', electronegativity: '1.13',
        ionizationEnergy: '527 kJ/mol', electronConfig: '[Xe] 4f³ 6s²', discoveryDate: '1885',
        discoveredBy: 'Carl Auer von Welsbach', nameOrigin: 'Do grego "prasios didymos"',
        uses: ['Ímãs permanentes', 'Ligas especiais', 'Óculos'],
        funFacts: 'Produz sais verdes característicos!'
    },
    {
        number: 60, symbol: 'Nd', name: 'Neodímio', mass: 144.24, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1021°C', boilingPoint: '3074°C',
        density: '7.01 g/cm³', atomicRadius: '229 pm', electronegativity: '1.14',
        ionizationEnergy: '533 kJ/mol', electronConfig: '[Xe] 4f⁴ 6s²', discoveryDate: '1885',
        discoveredBy: 'Carl Auer von Welsbach', nameOrigin: 'Do grego "neos didymos"',
        uses: ['Ímãs permanentes', 'Lasers', 'Óculos especiais'],
        funFacts: 'Ímãs mais fortes conhecidos!'
    },
    {
        number: 61, symbol: 'Pm', name: 'Promécio', mass: 145, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1042°C', boilingPoint: '3000°C',
        density: '7.26 g/cm³', atomicRadius: '228 pm', electronegativity: '1.13',
        ionizationEnergy: '540 kJ/mol', electronConfig: '[Xe] 4f⁵ 6s²', discoveryDate: '1945',
        discoveredBy: 'Charles Coryell', nameOrigin: 'De Prometeu',
        uses: ['Baterias nucleares', 'Pesquisa científica'],
        funFacts: 'Não existe naturalmente na Terra!'
    },
    {
        number: 62, symbol: 'Sm', name: 'Samário', mass: 150.36, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1074°C', boilingPoint: '1794°C',
        density: '7.52 g/cm³', atomicRadius: '229 pm', electronegativity: '1.17',
        ionizationEnergy: '545 kJ/mol', electronConfig: '[Xe] 4f⁶ 6s²', discoveryDate: '1879',
        discoveredBy: 'Paul Lecoq', nameOrigin: 'Do mineral samarskita',
        uses: ['Ímãs permanentes', 'Absorção de nêutrons', 'Lasers'],
        funFacts: 'Crucial para energia nuclear!'
    },
    {
        number: 63, symbol: 'Eu', name: 'Európio', mass: 151.96, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '822°C', boilingPoint: '1529°C',
        density: '5.24 g/cm³', atomicRadius: '233 pm', electronegativity: '1.2',
        ionizationEnergy: '547 kJ/mol', electronConfig: '[Xe] 4f⁷ 6s²', discoveryDate: '1901',
        discoveredBy: 'Eugène Demarçay', nameOrigin: 'Da Europa',
        uses: ['Fósforos em TVs', 'LEDs', 'Detectores'],
        funFacts: 'Mais reativo dos lantanídeos!'
    },
    {
        number: 64, symbol: 'Gd', name: 'Gadolínio', mass: 157.25, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1313°C', boilingPoint: '3273°C',
        density: '7.90 g/cm³', atomicRadius: '237 pm', electronegativity: '1.2',
        ionizationEnergy: '593 kJ/mol', electronConfig: '[Xe] 4f⁷ 5d¹ 6s²', discoveryDate: '1880',
        discoveredBy: 'Jean de Marignac', nameOrigin: 'De Johan Gadolin',
        uses: ['Contraste em MRI', 'Absorção de nêutrons', 'Ímãs'],
        funFacts: 'Melhor absorvedor de nêutrons!'
    },
    {
        number: 65, symbol: 'Tb', name: 'Térbio', mass: 158.93, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1356°C', boilingPoint: '3230°C',
        density: '8.23 g/cm³', atomicRadius: '221 pm', electronegativity: '1.2',
        ionizationEnergy: '565 kJ/mol', electronConfig: '[Xe] 4f⁹ 6s²', discoveryDate: '1843',
        discoveredBy: 'Carl Mosander', nameOrigin: 'De Ytterby, Suécia',
        uses: ['Fósforos verdes', 'Lasers', 'Dispositivos magneto-ópticos'],
        funFacts: 'Produz luz verde intensa!'
    },
    {
        number: 66, symbol: 'Dy', name: 'Disprósio', mass: 162.50, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1412°C', boilingPoint: '2567°C',
        density: '8.55 g/cm³', atomicRadius: '229 pm', electronegativity: '1.22',
        ionizationEnergy: '573 kJ/mol', electronConfig: '[Xe] 4f¹⁰ 6s²', discoveryDate: '1886',
        discoveredBy: 'Paul Lecoq', nameOrigin: 'Do grego "dysprositos" (difícil)',
        uses: ['Ímãs de alta temperatura', 'Lasers', 'Dosímetros'],
        funFacts: 'Nome reflete a dificuldade de sua descoberta!'
    },
    {
        number: 67, symbol: 'Ho', name: 'Hólmio', mass: 164.93, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1474°C', boilingPoint: '2700°C',
        density: '8.80 g/cm³', atomicRadius: '216 pm', electronegativity: '1.23',
        ionizationEnergy: '581 kJ/mol', electronConfig: '[Xe] 4f¹¹ 6s²', discoveryDate: '1878',
        discoveredBy: 'Per Cleve', nameOrigin: 'Do latim "Holmia" (Estocolmo)',
        uses: ['Ímãs especiais', 'Lasers médicos', 'Calibração'],
        funFacts: 'Possui o maior momento magnético!'
    },
    {
        number: 68, symbol: 'Er', name: 'Érbio', mass: 167.26, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1529°C', boilingPoint: '2868°C',
        density: '9.07 g/cm³', atomicRadius: '235 pm', electronegativity: '1.24',
        ionizationEnergy: '589 kJ/mol', electronConfig: '[Xe] 4f¹² 6s²', discoveryDate: '1843',
        discoveredBy: 'Carl Mosander', nameOrigin: 'De Ytterby, Suécia',
        uses: ['Fibras ópticas', 'Lasers', 'Óculos de proteção'],
        funFacts: 'Essencial para internet via fibra óptica!'
    },
    {
        number: 69, symbol: 'Tm', name: 'Túlio', mass: 168.93, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1545°C', boilingPoint: '1950°C',
        density: '9.32 g/cm³', atomicRadius: '227 pm', electronegativity: '1.25',
        ionizationEnergy: '597 kJ/mol', electronConfig: '[Xe] 4f¹³ 6s²', discoveryDate: '1879',
        discoveredBy: 'Per Cleve', nameOrigin: 'Do latim "Thule"',
        uses: ['Lasers médicos', 'Raios-X portáteis', 'Pesquisa'],
        funFacts: 'Mais raro dos lantanídeos!'
    },
    {
        number: 70, symbol: 'Yb', name: 'Itérbio', mass: 173.05, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '824°C', boilingPoint: '1196°C',
        density: '6.90 g/cm³', atomicRadius: '242 pm', electronegativity: '1.1',
        ionizationEnergy: '603 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 6s²', discoveryDate: '1878',
        discoveredBy: 'Jean de Marignac', nameOrigin: 'De Ytterby, Suécia',
        uses: ['Ligas especiais', 'Lasers', 'Detectores'],
        funFacts: 'Quarto elemento descoberto em Ytterby!'
    },
    {
        number: 71, symbol: 'Lu', name: 'Lutécio', mass: 174.97, category: 'lanthanide',
        period: 6, group: 3, phase: 'Sólido', meltingPoint: '1663°C', boilingPoint: '3402°C',
        density: '9.84 g/cm³', atomicRadius: '221 pm', electronegativity: '1.27',
        ionizationEnergy: '524 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹ 6s²', discoveryDate: '1907',
        discoveredBy: 'Georges Urbain', nameOrigin: 'Do latim "Lutetia" (Paris)',
        uses: ['Detectores PET', 'Catalisadores especiais'],
        funFacts: 'Último lantanídeo descoberto!'
    },

    // Continuação Período 6
    {
        number: 72, symbol: 'Hf', name: 'Háfnio', mass: 178.49, category: 'transition-metal',
        period: 6, group: 4, phase: 'Sólido', meltingPoint: '2233°C', boilingPoint: '4603°C',
        density: '13.3 g/cm³', atomicRadius: '208 pm', electronegativity: '1.3',
        ionizationEnergy: '659 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d² 6s²', discoveryDate: '1923',
        discoveredBy: 'Dirk Coster', nameOrigin: 'Do latim "Hafnia" (Copenhague)',
        uses: ['Reatores nucleares', 'Superligas', 'Plasma'],
        funFacts: 'Quimicamente idêntico ao zircônio!'
    },
    {
        number: 73, symbol: 'Ta', name: 'Tântalo', mass: 180.95, category: 'transition-metal',
        period: 6, group: 5, phase: 'Sólido', meltingPoint: '3017°C', boilingPoint: '5458°C',
        density: '16.4 g/cm³', atomicRadius: '200 pm', electronegativity: '1.5',
        ionizationEnergy: '761 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d³ 6s²', discoveryDate: '1802',
        discoveredBy: 'Anders Ekeberg', nameOrigin: 'De Tântalo, mitologia grega',
        uses: ['Capacitores', 'Implantes médicos', 'Superligas'],
        funFacts: 'Extremamente resistente à corrosão!'
    },
    {
        number: 74, symbol: 'W', name: 'Tungstênio', mass: 183.84, category: 'transition-metal',
        period: 6, group: 6, phase: 'Sólido', meltingPoint: '3414°C', boilingPoint: '5555°C',
        density: '19.3 g/cm³', atomicRadius: '193 pm', electronegativity: '2.36',
        ionizationEnergy: '770 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d⁴ 6s²', discoveryDate: '1783',
        discoveredBy: 'Juan José Elhuyar', nameOrigin: 'Do sueco "tung sten"',
        uses: ['Filamentos de lâmpadas', 'Ferramentas', 'Blindagem'],
        funFacts: 'Maior ponto de fusão de todos os elementos!'
    },
    {
        number: 75, symbol: 'Re', name: 'Rênio', mass: 186.21, category: 'transition-metal',
        period: 6, group: 7, phase: 'Sólido', meltingPoint: '3185°C', boilingPoint: '5596°C',
        density: '20.8 g/cm³', atomicRadius: '188 pm', electronegativity: '1.9',
        ionizationEnergy: '760 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d⁵ 6s²', discoveryDate: '1925',
        discoveredBy: 'Walter Noddack', nameOrigin: 'Do latim "Rhenus" (Reno)',
        uses: ['Superligas', 'Catalisadores', 'Termopares'],
        funFacts: 'Um dos elementos mais raros!'
    },
    {
        number: 76, symbol: 'Os', name: 'Ósmio', mass: 190.23, category: 'transition-metal',
        period: 6, group: 8, phase: 'Sólido', meltingPoint: '3033°C', boilingPoint: '5012°C',
        density: '22.57 g/cm³', atomicRadius: '185 pm', electronegativity: '2.2',
        ionizationEnergy: '840 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d⁶ 6s²', discoveryDate: '1803',
        discoveredBy: 'Smithson Tennant', nameOrigin: 'Do grego "osme" (odor)',
        uses: ['Pontas de canetas', 'Catalisadores', 'Instrumentos'],
        funFacts: 'Elemento mais denso!'
    },
    {
        number: 77, symbol: 'Ir', name: 'Irídio', mass: 192.22, category: 'transition-metal',
        period: 6, group: 9, phase: 'Sólido', meltingPoint: '2446°C', boilingPoint: '4428°C',
        density: '22.42 g/cm³', atomicRadius: '180 pm', electronegativity: '2.20',
        ionizationEnergy: '880 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d⁷ 6s²', discoveryDate: '1803',
        discoveredBy: 'Smithson Tennant', nameOrigin: 'Do latim "iris" (arco-íris)',
        uses: ['Velas de ignição', 'Joias', 'Padrões de medida'],
        funFacts: 'Segundo elemento mais denso!'
    },
    {
        number: 78, symbol: 'Pt', name: 'Platina', mass: 195.08, category: 'transition-metal',
        period: 6, group: 10, phase: 'Sólido', meltingPoint: '1768.3°C', boilingPoint: '3825°C',
        density: '21.46 g/cm³', atomicRadius: '177 pm', electronegativity: '2.28',
        ionizationEnergy: '870 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d⁹ 6s¹', discoveryDate: '1735',
        discoveredBy: 'Antonio de Ulloa', nameOrigin: 'Do espanhol "platina"',
        uses: ['Joias', 'Catalisadores', 'Medicina', 'Padrões'],
        funFacts: 'Metal mais nobre!'
    },
    {
        number: 79, symbol: 'Au', name: 'Ouro', mass: 196.97, category: 'transition-metal',
        period: 6, group: 11, phase: 'Sólido', meltingPoint: '1064.18°C', boilingPoint: '2856°C',
        density: '19.282 g/cm³', atomicRadius: '174 pm', electronegativity: '2.54',
        ionizationEnergy: '890 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 2600 a.C.', nameOrigin: 'Do latim "aurum"',
        uses: ['Joias', 'Eletrônicos', 'Medicina', 'Reservas monetárias'],
        funFacts: 'Padrão monetário por milênios!'
    },
    {
        number: 80, symbol: 'Hg', name: 'Mercúrio', mass: 200.59, category: 'transition-metal',
        period: 6, group: 12, phase: 'Líquido', meltingPoint: '-38.83°C', boilingPoint: '356.73°C',
        density: '13.53 g/cm³', atomicRadius: '171 pm', electronegativity: '2.00',
        ionizationEnergy: '1007 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 1500 a.C.', nameOrigin: 'Do deus Mercúrio',
        uses: ['Termômetros', 'Lâmpadas', 'Mineração', 'Interruptores'],
        funFacts: 'Único metal líquido à temperatura ambiente!'
    },
    {
        number: 81, symbol: 'Tl', name: 'Tálio', mass: 204.38, category: 'post-transition-metal',
        period: 6, group: 13, phase: 'Sólido', meltingPoint: '304°C', boilingPoint: '1473°C',
        density: '11.8 g/cm³', atomicRadius: '156 pm', electronegativity: '1.62',
        ionizationEnergy: '589 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', discoveryDate: '1861',
        discoveredBy: 'William Crookes', nameOrigin: 'Do grego "thallos" (broto verde)',
        uses: ['Eletrônicos', 'Óptica infravermelha', 'Medicina'],
        funFacts: 'Extremamente tóxico!'
    },
    {
        number: 82, symbol: 'Pb', name: 'Chumbo', mass: 207.2, category: 'post-transition-metal',
        period: 6, group: 14, phase: 'Sólido', meltingPoint: '327.46°C', boilingPoint: '1749°C',
        density: '11.342 g/cm³', atomicRadius: '154 pm', electronegativity: '1.87',
        ionizationEnergy: '716 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', discoveryDate: 'Pré-histórico',
        discoveredBy: 'Conhecido desde 3000 a.C.', nameOrigin: 'Do latim "plumbum"',
        uses: ['Baterias', 'Blindagem', 'Soldas', 'Munições'],
        funFacts: 'Usado em aquedutos romanos!'
    },
    {
        number: 83, symbol: 'Bi', name: 'Bismuto', mass: 208.98, category: 'post-transition-metal',
        period: 6, group: 15, phase: 'Sólido', meltingPoint: '271.3°C', boilingPoint: '1564°C',
        density: '9.807 g/cm³', atomicRadius: '143 pm', electronegativity: '2.02',
        ionizationEnergy: '703 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', discoveryDate: '1753',
        discoveredBy: 'Claude François Geoffroy', nameOrigin: 'Do alemão "bisemutum"',
        uses: ['Cosméticos', 'Medicamentos', 'Ligas de baixo ponto de fusão'],
        funFacts: 'Menos tóxico dos metais pesados!'
    },
    {
        number: 84, symbol: 'Po', name: 'Polônio', mass: 209, category: 'post-transition-metal',
        period: 6, group: 16, phase: 'Sólido', meltingPoint: '254°C', boilingPoint: '962°C',
        density: '9.32 g/cm³', atomicRadius: '135 pm', electronegativity: '2.0',
        ionizationEnergy: '812 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', discoveryDate: '1898',
        discoveredBy: 'Marie e Pierre Curie', nameOrigin: 'Da Polônia',
        uses: ['Fontes de nêutrons', 'Eliminadores de estática'],
        funFacts: 'Descoberto por Marie Curie!'
    },
    {
        number: 85, symbol: 'At', name: 'Astato', mass: 210, category: 'halogen',
        period: 6, group: 17, phase: 'Sólido', meltingPoint: '302°C', boilingPoint: '337°C',
        density: '7 g/cm³', atomicRadius: '127 pm', electronegativity: '2.2',
        ionizationEnergy: '890 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', discoveryDate: '1940',
        discoveredBy: 'Dale Corson', nameOrigin: 'Do grego "astatos" (instável)',
        uses: ['Pesquisa científica', 'Medicina nuclear'],
        funFacts: 'Elemento mais raro na Terra!'
    },
    {
        number: 86, symbol: 'Rn', name: 'Radônio', mass: 222, category: 'noble-gas',
        period: 6, group: 18, phase: 'Gás', meltingPoint: '-71°C', boilingPoint: '-62°C',
        density: '0.00973 g/cm³', atomicRadius: '120 pm', electronegativity: '2.2',
        ionizationEnergy: '1037 kJ/mol', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', discoveryDate: '1900',
        discoveredBy: 'Friedrich Dorn', nameOrigin: 'Do rádio',
        uses: ['Pesquisa científica', 'Sismologia'],
        funFacts: 'Gás nobre radioativo!'
    },

    // Período 7
    {
        number: 87, symbol: 'Fr', name: 'Frâncio', mass: 223, category: 'alkali-metal',
        period: 7, group: 1, phase: 'Sólido', meltingPoint: '27°C', boilingPoint: '677°C',
        density: '1.87 g/cm³', atomicRadius: '348 pm', electronegativity: '0.7',
        ionizationEnergy: '380 kJ/mol', electronConfig: '[Rn] 7s¹', discoveryDate: '1939',
        discoveredBy: 'Marguerite Perey', nameOrigin: 'Da França',
        uses: ['Pesquisa científica'],
        funFacts: 'Elemento mais instável!'
    },
    {
        number: 88, symbol: 'Ra', name: 'Rádio', mass: 226, category: 'alkaline-earth-metal',
        period: 7, group: 2, phase: 'Sólido', meltingPoint: '700°C', boilingPoint: '1737°C',
        density: '5.5 g/cm³', atomicRadius: '283 pm', electronegativity: '0.9',
        ionizationEnergy: '509 kJ/mol', electronConfig: '[Rn] 7s²', discoveryDate: '1898',
        discoveredBy: 'Marie e Pierre Curie', nameOrigin: 'Do latim "radius" (raio)',
        uses: ['Medicina nuclear', 'Pesquisa científica'],
        funFacts: 'Brilha no escuro devido à radioatividade!'
    },

    // Actinídeos (89-103)
    {
        number: 89, symbol: 'Ac', name: 'Actínio', mass: 227, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1051°C', boilingPoint: '3198°C',
        density: '10.07 g/cm³', atomicRadius: '260 pm', electronegativity: '1.1',
        ionizationEnergy: '499 kJ/mol', electronConfig: '[Rn] 6d¹ 7s²', discoveryDate: '1899',
        discoveredBy: 'André Debierne', nameOrigin: 'Do grego "aktinos" (raio)',
        uses: ['Fonte de nêutrons', 'Pesquisa'],
        funFacts: 'Primeiro dos actinídeos!'
    },
    {
        number: 90, symbol: 'Th', name: 'Tório', mass: 232.04, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1750°C', boilingPoint: '4788°C',
        density: '11.72 g/cm³', atomicRadius: '237 pm', electronegativity: '1.3',
        ionizationEnergy: '587 kJ/mol', electronConfig: '[Rn] 6d² 7s²', discoveryDate: '1828',
        discoveredBy: 'Jöns Berzelius', nameOrigin: 'De Thor, deus nórdico',
        uses: ['Combustível nuclear', 'Lanternas de gás'],
        funFacts: 'Combustível nuclear do futuro!'
    },
    {
        number: 91, symbol: 'Pa', name: 'Protactínio', mass: 231.04, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1572°C', boilingPoint: '4000°C',
        density: '15.37 g/cm³', atomicRadius: '243 pm', electronegativity: '1.5',
        ionizationEnergy: '568 kJ/mol', electronConfig: '[Rn] 5f² 6d¹ 7s²', discoveryDate: '1913',
        discoveredBy: 'Kasimir Fajans', nameOrigin: 'Precursor do actínio',
        uses: ['Pesquisa científica'],
        funFacts: 'Extremamente radioativo e raro!'
    },
    {
        number: 92, symbol: 'U', name: 'Urânio', mass: 238.03, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1135°C', boilingPoint: '4131°C',
        density: '18.95 g/cm³', atomicRadius: '240 pm', electronegativity: '1.38',
        ionizationEnergy: '598 kJ/mol', electronConfig: '[Rn] 5f³ 6d¹ 7s²', discoveryDate: '1789',
        discoveredBy: 'Martin Klaproth', nameOrigin: 'Do planeta Urano',
        uses: ['Energia nuclear', 'Armas nucleares', 'Datação'],
        funFacts: 'Combustível das usinas nucleares!'
    },
    {
        number: 93, symbol: 'Np', name: 'Netúnio', mass: 237, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '644°C', boilingPoint: '4000°C',
        density: '20.25 g/cm³', atomicRadius: '221 pm', electronegativity: '1.36',
        ionizationEnergy: '604 kJ/mol', electronConfig: '[Rn] 5f⁴ 6d¹ 7s²', discoveryDate: '1940',
        discoveredBy: 'Edwin McMillan', nameOrigin: 'Do planeta Netuno',
        uses: ['Detectores de nêutrons', 'Pesquisa'],
        funFacts: 'Primeiro elemento transuranio!'
    },
    {
        number: 94, symbol: 'Pu', name: 'Plutônio', mass: 244, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '640°C', boilingPoint: '3228°C',
        density: '19.84 g/cm³', atomicRadius: '243 pm', electronegativity: '1.28',
        ionizationEnergy: '584 kJ/mol', electronConfig: '[Rn] 5f⁶ 7s²', discoveryDate: '1940',
        discoveredBy: 'Glenn Seaborg', nameOrigin: 'Do planeta Plutão',
        uses: ['Armas nucleares', 'Energia nuclear', 'RTGs'],
        funFacts: 'Usado em bombas atômicas!'
    },
    {
        number: 95, symbol: 'Am', name: 'Amerício', mass: 243, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1176°C', boilingPoint: '2607°C',
        density: '13.69 g/cm³', atomicRadius: '244 pm', electronegativity: '1.13',
        ionizationEnergy: '578 kJ/mol', electronConfig: '[Rn] 5f⁷ 7s²', discoveryDate: '1944',
        discoveredBy: 'Glenn Seaborg', nameOrigin: 'Das Américas',
        uses: ['Detectores de fumaça', 'Medidores de espessura'],
        funFacts: 'Presente em detectores de fumaça!'
    },
    {
        number: 96, symbol: 'Cm', name: 'Cúrio', mass: 247, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1345°C', boilingPoint: '3110°C',
        density: '13.51 g/cm³', atomicRadius: '245 pm', electronegativity: '1.28',
        ionizationEnergy: '581 kJ/mol', electronConfig: '[Rn] 5f⁷ 6d¹ 7s²', discoveryDate: '1944',
        discoveredBy: 'Glenn Seaborg', nameOrigin: 'De Marie e Pierre Curie',
        uses: ['RTGs', 'Pesquisa científica'],
        funFacts: 'Nomeado em homenagem aos Curies!'
    },
    {
        number: 97, symbol: 'Bk', name: 'Berquélio', mass: 247, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1050°C', boilingPoint: '2627°C',
        density: '14.79 g/cm³', atomicRadius: '244 pm', electronegativity: '1.3',
        ionizationEnergy: '601 kJ/mol', electronConfig: '[Rn] 5f⁹ 7s²', discoveryDate: '1949',
        discoveredBy: 'Glenn Seaborg', nameOrigin: 'De Berkeley, Califórnia',
        uses: ['Pesquisa científica'],
        funFacts: 'Nomeado pela cidade onde foi descoberto!'
    },
    {
        number: 98, symbol: 'Cf', name: 'Califórnio', mass: 251, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '900°C', boilingPoint: '1470°C',
        density: '15.1 g/cm³', atomicRadius: '245 pm', electronegativity: '1.3',
        ionizationEnergy: '608 kJ/mol', electronConfig: '[Rn] 5f¹⁰ 7s²', discoveryDate: '1950',
        discoveredBy: 'Glenn Seaborg', nameOrigin: 'Da Califórnia',
        uses: ['Fonte de nêutrons', 'Detectores de ouro'],
        funFacts: 'Um grama vale milhões de dólares!'
    },
    {
        number: 99, symbol: 'Es', name: 'Einstênio', mass: 252, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '860°C', boilingPoint: '1130°C',
        density: '8.84 g/cm³', atomicRadius: '245 pm', electronegativity: '1.3',
        ionizationEnergy: '619 kJ/mol', electronConfig: '[Rn] 5f¹¹ 7s²', discoveryDate: '1952',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Albert Einstein',
        uses: ['Pesquisa científica'],
        funFacts: 'Descoberto em detritos de bomba nuclear!'
    },
    {
        number: 100, symbol: 'Fm', name: 'Férmio', mass: 257, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1527°C', boilingPoint: '1800°C',
        density: '9.7 g/cm³', atomicRadius: '245 pm', electronegativity: '1.3',
        ionizationEnergy: '627 kJ/mol', electronConfig: '[Rn] 5f¹² 7s²', discoveryDate: '1952',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Enrico Fermi',
        uses: ['Pesquisa científica'],
        funFacts: 'Nomeado em homenagem a Fermi!'
    },
    {
        number: 101, symbol: 'Md', name: 'Mendelévio', mass: 258, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '827°C', boilingPoint: '1100°C',
        density: '10.3 g/cm³', atomicRadius: '246 pm', electronegativity: '1.3',
        ionizationEnergy: '635 kJ/mol', electronConfig: '[Rn] 5f¹³ 7s²', discoveryDate: '1955',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Dmitri Mendeleev',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia o criador da tabela periódica!'
    },
    {
        number: 102, symbol: 'No', name: 'Nobélio', mass: 259, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '827°C', boilingPoint: '1100°C',
        density: '9.9 g/cm³', atomicRadius: '246 pm', electronegativity: '1.3',
        ionizationEnergy: '642 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 7s²', discoveryDate: '1957',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Alfred Nobel',
        uses: ['Pesquisa científica'],
        funFacts: 'Nomeado em homenagem a Nobel!'
    },
    {
        number: 103, symbol: 'Lr', name: 'Laurêncio', mass: 262, category: 'actinide',
        period: 7, group: 3, phase: 'Sólido', meltingPoint: '1627°C', boilingPoint: '1900°C',
        density: '15.6 g/cm³', atomicRadius: '246 pm', electronegativity: '1.3',
        ionizationEnergy: '470 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 7s² 7p¹', discoveryDate: '1961',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Ernest Lawrence',
        uses: ['Pesquisa científica'],
        funFacts: 'Último dos actinídeos!'
    },

    // Elementos Superpesados (104-118)
    {
        number: 104, symbol: 'Rf', name: 'Rutherfórdio', mass: 267, category: 'transition-metal',
        period: 7, group: 4, phase: 'Sólido', meltingPoint: '2100°C', boilingPoint: '5500°C',
        density: '23 g/cm³', atomicRadius: '150 pm', electronegativity: '1.3',
        ionizationEnergy: '580 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d² 7s²', discoveryDate: '1964',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Ernest Rutherford',
        uses: ['Pesquisa científica'],
        funFacts: 'Primeiro elemento superpesado!'
    },
    {
        number: 105, symbol: 'Db', name: 'Dúbnio', mass: 268, category: 'transition-metal',
        period: 7, group: 5, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '29 g/cm³', atomicRadius: '139 pm', electronegativity: '1.5',
        ionizationEnergy: '665 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d³ 7s²', discoveryDate: '1967',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Dubna, Rússia',
        uses: ['Pesquisa científica'],
        funFacts: 'Nome homenageia laboratório russo!'
    },
    {
        number: 106, symbol: 'Sg', name: 'Seabórgio', mass: 271, category: 'transition-metal',
        period: 7, group: 6, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '35 g/cm³', atomicRadius: '132 pm', electronegativity: '1.9',
        ionizationEnergy: '757 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁴ 7s²', discoveryDate: '1974',
        discoveredBy: 'Albert Ghiorso', nameOrigin: 'De Glenn Seaborg',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia o descobridor dos actinídeos!'
    },
    {
        number: 107, symbol: 'Bh', name: 'Bóhrio', mass: 272, category: 'transition-metal',
        period: 7, group: 7, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '37 g/cm³', atomicRadius: '128 pm', electronegativity: '2.0',
        ionizationEnergy: '740 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁵ 7s²', discoveryDate: '1981',
        discoveredBy: 'Peter Armbruster', nameOrigin: 'De Niels Bohr',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia o pioneiro da física quântica!'
    },
    {
        number: 108, symbol: 'Hs', name: 'Hássio', mass: 277, category: 'transition-metal',
        period: 7, group: 8, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '40 g/cm³', atomicRadius: '126 pm', electronegativity: '2.2',
        ionizationEnergy: '800 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁶ 7s²', discoveryDate: '1984',
        discoveredBy: 'Peter Armbruster', nameOrigin: 'De Hesse, Alemanha',
        uses: ['Pesquisa científica'],
        funFacts: 'Nome da região alemã onde foi descoberto!'
    },
    {
        number: 109, symbol: 'Mt', name: 'Meitnério', mass: 276, category: 'transition-metal',
        period: 7, group: 9, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '37 g/cm³', atomicRadius: '125 pm', electronegativity: '2.2',
        ionizationEnergy: '800 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁷ 7s²', discoveryDate: '1982',
        discoveredBy: 'Peter Armbruster', nameOrigin: 'De Lise Meitner',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia a física Lise Meitner!'
    },
    {
        number: 110, symbol: 'Ds', name: 'Darmstádio', mass: 281, category: 'transition-metal',
        period: 7, group: 10, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '34 g/cm³', atomicRadius: '124 pm', electronegativity: '2.2',
        ionizationEnergy: '960 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁸ 7s²', discoveryDate: '1994',
        discoveredBy: 'Sigurd Hofmann', nameOrigin: 'De Darmstadt, Alemanha',
        uses: ['Pesquisa científica'],
        funFacts: 'Nome da cidade alemã onde foi descoberto!'
    },
    {
        number: 111, symbol: 'Rg', name: 'Roentgênio', mass: 280, category: 'transition-metal',
        period: 7, group: 11, phase: 'Sólido', meltingPoint: '2000°C', boilingPoint: '4000°C',
        density: '28 g/cm³', atomicRadius: '121 pm', electronegativity: '2.2',
        ionizationEnergy: '1020 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d⁹ 7s²', discoveryDate: '1994',
        discoveredBy: 'Sigurd Hofmann', nameOrigin: 'De Wilhelm Röntgen',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia o descobridor dos raios-X!'
    },
    {
        number: 112, symbol: 'Cn', name: 'Copernício', mass: 285, category: 'transition-metal',
        period: 7, group: 12, phase: 'Sólido', meltingPoint: '283°C', boilingPoint: '340°C',
        density: '23 g/cm³', atomicRadius: '122 pm', electronegativity: '2.0',
        ionizationEnergy: '1155 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', discoveryDate: '1996',
        discoveredBy: 'Sigurd Hofmann', nameOrigin: 'De Nicolau Copérnico',
        uses: ['Pesquisa científica'],
        funFacts: 'Homenageia o astrônomo Copérnico!'
    },
    {
        number: 113, symbol: 'Nh', name: 'Nipônio', mass: 284, category: 'post-transition-metal',
        period: 7, group: 13, phase: 'Sólido', meltingPoint: '430°C', boilingPoint: '1100°C',
        density: '16 g/cm³', atomicRadius: '136 pm', electronegativity: '1.8',
        ionizationEnergy: '704 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', discoveryDate: '2004',
        discoveredBy: 'Kosuke Morita', nameOrigin: 'Do Japão (Nippon)',
        uses: ['Pesquisa científica'],
        funFacts: 'Primeiro elemento descoberto na Ásia!'
    },
    {
        number: 114, symbol: 'Fl', name: 'Fleróvio', mass: 289, category: 'post-transition-metal',
        period: 7, group: 14, phase: 'Sólido', meltingPoint: '200°C', boilingPoint: '380°C',
        density: '14 g/cm³', atomicRadius: '143 pm', electronegativity: '1.9',
        ionizationEnergy: '832 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', discoveryDate: '1998',
        discoveredBy: 'Yuri Oganessian', nameOrigin: 'De Georgiy Flerov',
        uses: ['Pesquisa científica'],
        funFacts: 'Pode ser relativamente estável!'
    },
    {
        number: 115, symbol: 'Mc', name: 'Moscóvio', mass: 288, category: 'post-transition-metal',
        period: 7, group: 15, phase: 'Sólido', meltingPoint: '400°C', boilingPoint: '1400°C',
        density: '13.5 g/cm³', atomicRadius: '162 pm', electronegativity: '1.9',
        ionizationEnergy: '538 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', discoveryDate: '2003',
        discoveredBy: 'Yuri Oganessian', nameOrigin: 'De Moscou',
        uses: ['Pesquisa científica'],
        funFacts: 'Nome homenageia a capital russa!'
    },
    {
        number: 116, symbol: 'Lv', name: 'Livermório', mass: 293, category: 'post-transition-metal',
        period: 7, group: 16, phase: 'Sólido', meltingPoint: '709°C', boilingPoint: '1085°C',
        density: '12.9 g/cm³', atomicRadius: '175 pm', electronegativity: '1.96',
        ionizationEnergy: '663 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', discoveryDate: '2000',
        discoveredBy: 'Yuri Oganessian', nameOrigin: 'De Lawrence Livermore',
        uses: ['Pesquisa científica'],
        funFacts: 'Nome do laboratório americano!'
    },
    {
        number: 117, symbol: 'Ts', name: 'Tenesso', mass: 294, category: 'halogen',
        period: 7, group: 17, phase: 'Sólido', meltingPoint: '723°C', boilingPoint: '883°C',
        density: '7.2 g/cm³', atomicRadius: '165 pm', electronegativity: '1.9',
        ionizationEnergy: '742 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', discoveryDate: '2010',
        discoveredBy: 'Yuri Oganessian', nameOrigin: 'Do Tennessee, EUA',
        uses: ['Pesquisa científica'],
        funFacts: 'Halogênio superpesado!'
    },
    {
        number: 118, symbol: 'Og', name: 'Oganessônio', mass: 294, category: 'noble-gas',
        period: 7, group: 18, phase: 'Sólido', meltingPoint: '52°C', boilingPoint: '177°C',
        density: '5 g/cm³', atomicRadius: '157 pm', electronegativity: '1.65',
        ionizationEnergy: '860 kJ/mol', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', discoveryDate: '2002',
        discoveredBy: 'Yuri Oganessian', nameOrigin: 'De Yuri Oganessian',
        uses: ['Pesquisa científica'],
        funFacts: 'Completa o período 7! Gás nobre mais pesado conhecido!'
    }
];

// Classe principal da Tabela Periódica
class PeriodicTable {
    constructor() {
        this.currentFilter = 'all';
        this.modal = document.getElementById('elementModal');
        this.tableContainer = document.getElementById('periodicTable');
        this.searchInput = document.getElementById('searchInput');
        
        this.init();
    }

    init() {
        this.createTable();
        this.setupEventListeners();
        this.setupSearch();
        this.setupFilters();
    }

    createTable() {
        const table = this.tableContainer;
        table.innerHTML = '';

        // Criar elementos principais (períodos 1-7, grupos 1-18)
        elements.forEach(element => {
            const elementDiv = this.createElement(element);
            
            // Posicionamento especial para lantanídeos e actinídeos
            if (element.category === 'lanthanide') {
                this.addToLanthanideSeries(elementDiv);
            } else if (element.category === 'actinide') {
                this.addToActinideSeries(elementDiv);
            } else {
                // Posicionamento normal na grade
                elementDiv.style.gridRow = element.period;
                elementDiv.style.gridColumn = element.group;
                table.appendChild(elementDiv);
            }
        });

        // Criar containers para lantanídeos e actinídeos
        this.createLanthanideActinideContainers();
    }

    createElement(element) {
        const div = document.createElement('div');
        div.className = `element ${element.category}`;
        div.setAttribute('data-number', element.number);
        div.setAttribute('data-symbol', element.symbol.toLowerCase());
        div.setAttribute('data-name', element.name.toLowerCase());
        div.setAttribute('data-category', element.category);

        div.innerHTML = `
            <span class="number">${element.number}</span>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
            <span class="mass">${element.mass}</span>
        `;

        div.addEventListener('click', () => this.showElementModal(element));
        
        return div;
    }

    createLanthanideActinideContainers() {
        // Container para lantanídeos
        const lanthanideContainer = document.createElement('div');
        lanthanideContainer.className = 'lanthanide-series';
        this.tableContainer.appendChild(lanthanideContainer);

        // Container para actinídeos
        const actinideContainer = document.createElement('div');
        actinideContainer.className = 'actinide-series';
        this.tableContainer.appendChild(actinideContainer);

        // Adicionar lantanídeos (57-71)
        elements.filter(el => el.category === 'lanthanide').forEach(element => {
            const elementDiv = this.createElement(element);
            lanthanideContainer.appendChild(elementDiv);
        });

        // Adicionar actinídeos (89-103)
        elements.filter(el => el.category === 'actinide').forEach(element => {
            const elementDiv = this.createElement(element);
            actinideContainer.appendChild(elementDiv);
        });
    }

    addToLanthanideSeries(elementDiv) {
        // Será adicionado depois no container específico
        return elementDiv;
    }

    addToActinideSeries(elementDiv) {
        // Será adicionado depois no container específico
        return elementDiv;
    }

        showElementModal(element) {
        // Atualizar ícone do elemento
        const modalIcon = document.getElementById('modalElementIcon');
        modalIcon.className = `element-icon ${element.category}`;
        modalIcon.innerHTML = `
            <div class="symbol">${element.symbol}</div>
            <div class="number">${element.number}</div>
        `;

        // Atualizar informações principais
        document.getElementById('modalElementName').textContent = element.name;
        document.getElementById('modalAtomicNumber').textContent = `Número Atômico: ${element.number}`;

        // Atualizar propriedades
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

        // Atualizar usos
        const usesContainer = document.getElementById('modalUses');
        usesContainer.innerHTML = element.uses.map(use => 
            `<span class="use-tag">${use}</span>`
        ).join('');

        // Atualizar curiosidades
        document.getElementById('modalFunFacts').textContent = element.funFacts;

        // Mostrar modal
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    hideElementModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    setupEventListeners() {
        // Fechar modal
        const closeBtn = this.modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => this.hideElementModal());

        // Fechar modal clicando fora
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideElementModal();
            }
        });

        // Fechar modal com ESC
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
                // Remover classe active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adicionar classe active ao botão clicado
                button.classList.add('active');
                
                // Aplicar filtro
                const filter = button.getAttribute('data-filter');
                this.currentFilter = filter;
                this.applyFilter(filter);
                
                // Limpar busca
                this.searchInput.value = '';
            });
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

    // Método para destacar um elemento específico
    highlightElement(elementNumber) {
        const allElements = document.querySelectorAll('.element');
        allElements.forEach(el => el.classList.remove('highlighted'));
        
        const targetElement = document.querySelector(`[data-number="${elementNumber}"]`);
        if (targetElement) {
            targetElement.classList.add('highlighted');
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Método para obter estatísticas da tabela
    getStatistics() {
        const stats = {
            total: elements.length,
            categories: {}
        };

        elements.forEach(element => {
            const category = element.category;
            stats.categories[category] = (stats.categories[category] || 0) + 1;
        });

        return stats;
    }

    // Método para exportar dados (futuro)
    exportData(format = 'json') {
        if (format === 'json') {
            return JSON.stringify(elements, null, 2);
        }
        // Outros formatos podem ser adicionados aqui
    }
}

// Função para criar animações de partículas
function createChemistryParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'chemistry-particles';
    document.body.appendChild(particlesContainer);

    // Criar 20 partículas
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'molecule-particle';
        
        // Posição aleatória
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.setProperty('--duration', (15 + Math.random() * 10) + 's');
        
        // Cor aleatória baseada nas cores químicas
        const colors = ['#f72585', '#e91e63', '#ff006e', '#4fc3f7', '#4caf50'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// Função para adicionar efeitos sonoros (opcional)
function playClickSound() {
    // Criar um beep sintético usando Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Função para detectar elementos favoritos (localStorage)
function getFavoriteElements() {
    const favorites = localStorage.getItem('favoriteElements');
    return favorites ? JSON.parse(favorites) : [];
}

function toggleFavoriteElement(elementNumber) {
    let favorites = getFavoriteElements();
    const index = favorites.indexOf(elementNumber);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(elementNumber);
    }
    
    localStorage.setItem('favoriteElements', JSON.stringify(favorites));
    return favorites.includes(elementNumber);
}

// Função para animação de entrada
function animateTableEntrance() {
    const elements = document.querySelectorAll('.element');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.5) rotateY(180deg)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            element.style.opacity = '1';
            element.style.transform = 'scale(1) rotateY(0deg)';
        }, index * 50);
    });
}

// Função para modo escuro/claro (futuro)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Função para compartilhamento (futuro)
function shareElement(element) {
    if (navigator.share) {
        navigator.share({
            title: `${element.name} - Tabela Periódica 3D`,
            text: `Descubra tudo sobre o ${element.name} (${element.symbol}) na nossa Tabela Periódica 3D interativa!`,
            url: window.location.href
        });
    } else {
        // Fallback para navegadores sem suporte
        const url = `${window.location.href}?element=${element.number}`;
        navigator.clipboard.writeText(url);
        alert('Link copiado para a área de transferência!');
    }
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se todos os elementos necessários existem
    const requiredElements = ['periodicTable', 'elementModal', 'searchInput'];
    const missingElements = requiredElements.filter(id => !document.getElementById(id));
    
    if (missingElements.length > 0) {
        console.error('Elementos HTML necessários não encontrados:', missingElements);
        return;
    }

    // Inicializar a tabela periódica
    window.periodicTable = new PeriodicTable();
    
    // Criar efeitos visuais
    createChemistryParticles();
    
    // Animar entrada da tabela
    setTimeout(() => {
        animateTableEntrance();
    }, 500);
    
    // Verificar se há um elemento específico na URL
    const urlParams = new URLSearchParams(window.location.search);
    const elementNumber = urlParams.get('element');
    if (elementNumber) {
        setTimeout(() => {
            window.periodicTable.highlightElement(elementNumber);
        }, 2000);
    }
    
    // Aplicar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    console.log('✅ Tabela Periódica 3D inicializada com sucesso!');
    console.log(`📊 ${elements.length} elementos carregados`);
    console.log('🧪 Sistema interativo ativo');
});

// Adicionar suporte a PWA (futuro)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('🔧 Service Worker registrado com sucesso');
            })
            .catch(error => {
                console.log('❌ Falha ao registrar Service Worker');
            });
    });
}

// Exportar para uso global
window.PeriodicTable = PeriodicTable;
window.elements = elements;

// Função de depuração para desenvolvimento
window.debugPeriodicTable = () => {
    console.log('🔍 Informações de Depuração:');
    console.log('Total de elementos:', elements.length);
    console.log('Estatísticas:', window.periodicTable.getStatistics());
    console.log('Filtro atual:', window.periodicTable.currentFilter);
    console.log('Modal ativo:', window.periodicTable.modal.classList.contains('show'));
};

console.log('🚀 Sistema da Tabela Periódica 3D carregado!');