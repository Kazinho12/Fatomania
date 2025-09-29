// Banco de dados expandido de quizzes com mais categorias e imagens diferentes
const quizzes = [
    {
        id: 1,
        title: "História de Moçambique",
        description: "Teste seus conhecimentos sobre a história do seu país",
        category: "História",
        difficulty: "easy",
        questions: 5,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 1247,
        rating: 4.8,
        questions_data: [
            {
                question: "Em que ano Moçambique conquistou a independência?",
                options: ["1975", "1964", "1980", "1990"],
                correct: 0,
                explanation: "Moçambique conquistou a independência de Portugal em 25 de junho de 1975, após uma longa luta de libertação."
            },
            {
                question: "Quem foi o primeiro presidente de Moçambique?",
                options: ["Samora Machel", "Joaquim Chissano", "Eduardo Mondlane", "Armando Guebuza"],
                correct: 0,
                explanation: "Samora Machel foi o primeiro presidente de Moçambique independente, governando de 1975 até sua morte em 1986."
            },
            {
                question: "Qual era o nome da moeda de Moçambique antes do Metical?",
                options: ["Escudo moçambicano", "Rand moçambicano", "Dólar moçambicano", "Libra moçambicana"],
                correct: 0,
                explanation: "Antes da independência, Moçambique usava o escudo moçambicano, que foi substituído pelo metical em 1980."
            },
            {
                question: "Qual destes é um símbolo nacional de Moçambique?",
                options: ["Leão", "Elefante", "Guepardo", "Águia"],
                correct: 1,
                explanation: "O elefante é um dos símbolos nacionais de Moçambique, representando a rica fauna do país."
            },
            {
                question: "Qual oceano banha Moçambique?",
                options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
                correct: 1,
                explanation: "Moçambique está localizado na costa leste da África, sendo banhado pelo Oceano Índico."
            }
        ]
    },
    {
        id: 2,
        title: "Evolução dos Computadores",
        description: "Conheça a história da tecnologia digital",
        category: "Tecnologia",
        difficulty: "easy",
        questions: 5,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 892,
        rating: 4.6,
        questions_data: [
            {
                question: "Qual foi o primeiro computador eletrônico?",
                options: ["ENIAC", "Apple I", "IBM PC", "Altair 8800"],
                correct: 0,
                explanation: "O ENIAC (Electronic Numerical Integrator and Computer) foi o primeiro computador eletrônico de uso geral, criado em 1946."
            },
            {
                question: "Em que década surgiram os computadores pessoais?",
                options: ["1950", "1960", "1970", "1980"],
                correct: 2,
                explanation: "Os computadores pessoais surgiram na década de 1970, com marcos como o Altair 8800 e o Apple II."
            },
            {
                question: "Quem é considerado o pai da computação?",
                options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Charles Babbage"],
                correct: 3,
                explanation: "Charles Babbage é considerado o pai da computação por ter projetado a Máquina Analítica no século XIX."
            },
            {
                question: "O que significa 'CPU'?",
                options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Computer Processing Unit"],
                correct: 0,
                explanation: "CPU significa Central Processing Unit (Unidade Central de Processamento), o 'cérebro' do computador."
            },
            {
                question: "Qual destes NÃO é um sistema operacional?",
                options: ["Windows", "Linux", "MacOS", "Intel"],
                correct: 3,
                explanation: "Intel é uma empresa de processadores, não um sistema operacional. Windows, Linux e MacOS são sistemas operacionais."
            }
        ]
    },
    {
        id: 3,
        title: "Matemática Básica",
        description: "Equações do 2º grau e modulares",
        category: "Matemática",
        difficulty: "medium",
        questions: 5,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 2156,
        rating: 4.9,
        questions_data: [
            {
                question: "Qual é a solução da equação x² - 5x + 6 = 0?",
                options: ["x = 2 e x = 3", "x = -2 e x = -3", "x = 1 e x = 6", "x = 0 e x = 5"],
                correct: 0,
                explanation: "Usando a fórmula de Bhaskara ou fatoração: (x-2)(x-3) = 0, então x = 2 ou x = 3."
            },
            {
                question: "Qual é o valor de | -7 |?",
                options: ["-7", "7", "0", "14"],
                correct: 1,
                explanation: "O módulo (valor absoluto) de qualquer número é sempre positivo, então |-7| = 7."
            },
            {
                question: "Resolva a equação modular |x - 3| = 5",
                options: ["x = 8", "x = -2 e x = 8", "x = 2", "x = 3"],
                correct: 1,
                explanation: "Para |x - 3| = 5, temos x - 3 = 5 ou x - 3 = -5, logo x = 8 ou x = -2."
            },
            {
                question: "Qual é a fórmula de Bhaskara?",
                options: ["x = (-b ± √(b² - 4ac)) / 2a", "x = b² - 4ac", "x = (-b + √(b² + 4ac)) / 2a", "x = b ± √(b² - 4ac) / a"],
                correct: 0,
                explanation: "A fórmula de Bhaskara é x = (-b ± √(b² - 4ac)) / 2a, usada para resolver equações do 2º grau."
            },
            {
                question: "Qual é o vértice da parábola y = x² - 4x + 3?",
                options: ["(2, -1)", "(1, 0)", "(0, 3)", "(-2, 15)"],
                correct: 0,
                explanation: "O vértice tem coordenada x = -b/2a = 4/2 = 2, e y = 4 - 8 + 3 = -1. Portanto, (2, -1)."
            }
        ]
    },
    {
        id: 4,
        title: "Geografia Mundial",
        description: "Teste seus conhecimentos sobre países e capitais",
        category: "Geografia",
        difficulty: "medium",
        questions: 6,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 1834,
        rating: 4.7,
        questions_data: [
            {
                question: "Qual é a capital da Austrália?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2,
                explanation: "Canberra é a capital da Austrália, apesar de Sydney e Melbourne serem cidades maiores."
            },
            {
                question: "Qual é o maior deserto do mundo?",
                options: ["Saara", "Gobi", "Antártica", "Kalahari"],
                correct: 2,
                explanation: "A Antártica é tecnicamente o maior deserto do mundo, sendo um deserto polar."
            },
            {
                question: "Em que continente fica o Egito?",
                options: ["Ásia", "África", "Europa", "Oriente Médio"],
                correct: 1,
                explanation: "O Egito está localizado no nordeste da África, embora uma pequena parte (Península do Sinai) esteja na Ásia."
            },
            {
                question: "Qual país tem mais fusos horários?",
                options: ["Estados Unidos", "Rússia", "China", "França"],
                correct: 3,
                explanation: "A França tem 12 fusos horários devido aos seus territórios ultramarinos espalhados pelo mundo."
            },
            {
                question: "Qual é o rio mais longo do mundo?",
                options: ["Amazonas", "Nilo", "Mississippi", "Yangtzé"],
                correct: 1,
                explanation: "O rio Nilo, com aproximadamente 6.650 km, é considerado o rio mais longo do mundo."
            },
            {
                question: "Quantos países fazem fronteira com o Brasil?",
                options: ["8", "9", "10", "11"],
                correct: 2,
                explanation: "O Brasil faz fronteira com 10 países: Argentina, Bolívia, Colômbia, Guiana, Guiana Francesa, Paraguai, Peru, Suriname, Uruguai e Venezuela."
            }
        ]
    },
    {
        id: 5,
        title: "Física Fundamental",
        description: "Leis básicas da física e fenômenos naturais",
        category: "Física",
        difficulty: "medium",
        questions: 5,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 1789,
        rating: 4.6,
        questions_data: [
            {
                question: "Qual é a velocidade da luz no vácuo?",
                options: ["300.000 km/s", "150.000 km/s", "299.792.458 m/s", "200.000 km/s"],
                correct: 2,
                explanation: "A velocidade da luz no vácuo é exatamente 299.792.458 metros por segundo, uma constante fundamental da física."
            },
            {
                question: "Quem formulou a teoria da relatividade?",
                options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Stephen Hawking"],
                correct: 1,
                explanation: "Albert Einstein formulou tanto a teoria da relatividade especial (1905) quanto a geral (1915)."
            },
            {
                question: "O que é a aceleração da gravidade na Terra?",
                options: ["9,8 m/s²", "10 m/s²", "8,9 m/s²", "9,81 m/s²"],
                correct: 3,
                explanation: "A aceleração da gravidade na Terra é aproximadamente 9,81 m/s², variando ligeiramente conforme a localização."
            },
            {
                question: "Qual é a unidade de medida da força?",
                options: ["Joule", "Newton", "Watt", "Pascal"],
                correct: 1,
                explanation: "A força é medida em Newtons (N), em homenagem a Isaac Newton. 1 N = 1 kg⋅m/s²."
            },
            {
                question: "O que acontece com a energia em um sistema fechado?",
                options: ["Sempre aumenta", "Sempre diminui", "Se conserva", "Varia aleatoriamente"],
                correct: 2,
                explanation: "Pela Lei da Conservação da Energia, a energia total de um sistema fechado sempre se conserva."
            }
        ]
    },
    {
        id: 6,
        title: "Biologia Celular",
        description: "Estruturas e funções das células",
        category: "Biologia",
        difficulty: "medium",
        questions: 6,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 1456,
        rating: 4.5,
        questions_data: [
            {
                question: "Qual organela é responsável pela respiração celular?",
                options: ["Núcleo", "Mitocôndria", "Ribossomo", "Retículo endoplasmático"],
                correct: 1,
                explanation: "As mitocôndrias são as 'usinas de energia' da célula, onde ocorre a respiração celular e produção de ATP."
            },
            {
                question: "O que é DNA?",
                options: ["Ácido desoxirribonucleico", "Ácido ribonucleico", "Proteína", "Carboidrato"],
                correct: 0,
                explanation: "DNA significa ácido desoxirribonucleico, molécula que contém as informações genéticas dos seres vivos."
            },
            {
                question: "Qual a principal diferença entre células procarióticas e eucarióticas?",
                options: ["Tamanho", "Presença de núcleo organizado", "Forma", "Cor"],
                correct: 1,
                explanation: "Células eucarióticas possuem núcleo organizado (envolvido por membrana), enquanto procarióticas não."
            },
            {
                question: "Onde ocorre a síntese de proteínas?",
                options: ["Núcleo", "Mitocôndria", "Ribossomos", "Lisossomos"],
                correct: 2,
                explanation: "A síntese de proteínas ocorre nos ribossomos, organelas especializadas nesse processo."
            },
            {
                question: "Qual processo permite às plantas produzir seu próprio alimento?",
                options: ["Respiração", "Fotossíntese", "Digestão", "Fermentação"],
                correct: 1,
                explanation: "A fotossíntese permite às plantas converter luz solar, CO₂ e água em glicose e oxigênio."
            },
            {
                question: "Qual organela contém enzimas digestivas?",
                options: ["Vacúolo", "Lisossomo", "Peroxissomo", "Centríolo"],
                correct: 1,
                explanation: "Os lisossomos contêm enzimas digestivas e são responsáveis pela digestão intracelular."
            }
        ]
    },
    {
        id: 7,
        title: "Química Básica",
        description: "Elementos, compostos e reações químicas",
        category: "Química",
        difficulty: "easy",
        questions: 5,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 1123,
        rating: 4.4,
        questions_data: [
            {
                question: "Qual é o símbolo químico do ouro?",
                options: ["O", "Au", "Ag", "Go"],
                correct: 1,
                explanation: "Au vem do latim 'aurum', que significa ouro. É o símbolo químico do elemento ouro."
            },
            {
                question: "Quantos prótons tem o átomo de carbono?",
                options: ["4", "6", "8", "12"],
                correct: 1,
                explanation: "O carbono tem número atômico 6, o que significa que possui 6 prótons em seu núcleo."
            },
            {
                question: "Qual é a fórmula da água?",
                options: ["H₂O", "CO₂", "NaCl", "C₆H₁₂O₆"],
                correct: 0,
                explanation: "A água é formada por 2 átomos de hidrogênio e 1 átomo de oxigênio, daí H₂O."
            },
            {
                question: "O que é pH?",
                options: ["Peso do hidrogênio", "Potencial hidrogeniônico", "Pressão do hidrogênio", "Produto hidratado"],
                correct: 1,
                explanation: "pH significa potencial hidrogeniônico, uma escala que mede a acidez ou basicidade de uma solução."
            },
            {
                question: "Qual gás é mais abundante na atmosfera terrestre?",
                options: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Argônio"],
                correct: 1,
                explanation: "O nitrogênio (N₂) representa cerca de 78% da atmosfera terrestre, sendo o gás mais abundante."
            }
        ]
    },
    {
        id: 8,
        title: "Literatura Lusófona",
        description: "Grandes obras da literatura em língua portuguesa",
        category: "Literatura",
        difficulty: "medium",
        questions: 5,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 987,
        rating: 4.3,
        questions_data: [
            {
                question: "Quem escreveu 'Os Lusíadas'?",
                options: ["Fernando Pessoa", "Luís de Camões", "José Saramago", "Eça de Queirós"],
                correct: 1,
                explanation: "Luís de Camões escreveu 'Os Lusíadas', a grande epopeia portuguesa."
            },
            {
                question: "Qual escritor moçambicano ganhou o Prêmio Camões?",
                options: ["Mia Couto", "José Craveirinha", "Paulina Chiziane", "Ungulani Ba Ka Khosa"],
                correct: 0,
                explanation: "Mia Couto ganhou o Prêmio Camões em 2013."
            },
            {
                question: "Quem é o autor de 'Capitães da Areia'?",
                options: ["Machado de Assis", "Jorge Amado", "Clarice Lispector", "Graciliano Ramos"],
                correct: 1,
                explanation: "Jorge Amado escreveu 'Capitães da Areia', romance sobre meninos de rua em Salvador."
            },
            {
                question: "Qual é o heterônimo mais conhecido de Fernando Pessoa?",
                options: ["Álvaro de Campos", "Alberto Caeiro", "Ricardo Reis", "Bernardo Soares"],
                correct: 1,
                explanation: "Alberto Caeiro é considerado o 'mestre' dos heterônimos de Fernando Pessoa."
            },
            {
                question: "Quem escreveu 'Terra Sonâmbula'?",
                options: ["Mia Couto", "José Eduardo Agualusa", "Pepetela", "Ondjaki"],
                correct: 0,
                explanation: "Mia Couto escreveu 'Terra Sonâmbula', considerado um dos melhores livros africanos do século XX."
            }
        ]
    },
    {
        id: 9,
        title: "Cultura Africana",
        description: "Tradições, arte e história do continente africano",
        category: "África",
        difficulty: "medium",
        questions: 6,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 1432,
        rating: 4.5,
        questions_data: [
            {
                question: "Qual é o berço da humanidade?",
                options: ["Ásia", "Europa", "África", "América"],
                correct: 2,
                explanation: "A África é considerada o berço da humanidade, onde foram encontrados os primeiros fósseis humanos."
            },
            {
                question: "Qual civilização africana antiga era famosa pelo ouro?",
                options: ["Reino de Kush", "Império de Mali", "Reino do Congo", "Império Songhai"],
                correct: 1,
                explanation: "O Império de Mali era famoso por suas riquezas em ouro e sal."
            },
            {
                question: "Quantos países existem na África?",
                options: ["52", "54", "56", "58"],
                correct: 1,
                explanation: "A África tem 54 países reconhecidos pela União Africana."
            },
            {
                question: "Qual é o idioma mais falado na África?",
                options: ["Árabe", "Inglês", "Francês", "Suaíli"],
                correct: 0,
                explanation: "O árabe é o idioma mais falado na África, principalmente no norte do continente."
            },
            {
                question: "Qual país africano nunca foi colonizado?",
                options: ["Egito", "Etiópia", "Marrocos", "Líbia"],
                correct: 1,
                explanation: "A Etiópia é o único país africano que nunca foi formalmente colonizado pelos europeus."
            },
            {
                question: "Qual é o maior país da África?",
                options: ["Nigéria", "Congo", "Argélia", "Sudão"],
                correct: 2,
                explanation: "A Argélia é o maior país da África em área territorial."
            }
        ]
    },
    {
        id: 10,
        title: "PALOPS - Países Lusófonos",
        description: "Conheça melhor os países africanos de língua portuguesa",
        category: "PALOPS",
        difficulty: "medium",
        questions: 6,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 987,
        rating: 4.3,
        questions_data: [
            {
                question: "Quantos países compõem os PALOPS?",
                options: ["4", "5", "6", "7"],
                correct: 2,
                explanation: "Os PALOPS são formados por 6 países: Angola, Cabo Verde, Guiné-Bissau, Moçambique, São Tomé e Príncipe, e Timor-Leste."
            },
            {
                question: "Qual é a capital de Cabo Verde?",
                options: ["Mindelo", "Praia", "Santa Maria", "Assomada"],
                correct: 1,
                explanation: "Praia é a capital de Cabo Verde, localizada na ilha de Santiago."
            },
            {
                question: "Em que ano Angola conquistou a independência?",
                options: ["1973", "1974", "1975", "1976"],
                correct: 2,
                explanation: "Angola conquistou sua independência de Portugal em 11 de novembro de 1975."
            },
            {
                question: "Qual PALOP é formado por ilhas no Atlântico?",
                options: ["Guiné-Bissau", "São Tomé e Príncipe", "Cabo Verde", "Ambos B e C"],
                correct: 3,
                explanation: "Tanto São Tomé e Príncipe quanto Cabo Verde são países insulares no Oceano Atlântico."
            },
            {
                question: "Quem foi Amílcar Cabral?",
                options: [
                    "Presidente de Angola",
                    "Líder da independência da Guiné-Bissau e Cabo Verde",
                    "Primeiro presidente de São Tomé e Príncipe",
                    "Escritor moçambicano"
                ],
                correct: 1,
                explanation: "Amílcar Cabral foi o líder do movimento de independência da Guiné-Bissau e Cabo Verde."
            },
            {
                question: "Qual é a moeda oficial de São Tomé e Príncipe?",
                options: ["Dobra", "Escudo", "Kwanza", "Peso"],
                correct: 0,
                explanation: "A dobra é a moeda oficial de São Tomé e Príncipe."
            }
        ]
    },
    {
        id: 11,
        title: "Filosofia Clássica",
        description: "Grandes pensadores e suas ideias fundamentais",
        category: "Filosofia",
        difficulty: "hard",
        questions: 5,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 756,
        rating: 4.2,
        questions_data: [
            {
                question: "Quem disse 'Só sei que nada sei'?",
                options: ["Platão", "Aristóteles", "Sócrates", "Tales de Mileto"],
                correct: 2,
                explanation: "Sócrates é famoso por esta frase, que representa sua humildade intelectual e método de questionamento."
            },
            {
                question: "Qual filósofo criou a teoria das Ideias ou Formas?",
                options: ["Sócrates", "Platão", "Aristóteles", "Heráclito"],
                correct: 1,
                explanation: "Platão desenvolveu a teoria das Ideias, segundo a qual existe um mundo perfeito de formas ideais."
            },
            {
                question: "O que significa 'cogito ergo sum'?",
                options: [
                    "Viver é pensar",
                    "Penso, logo existo",
                    "Pensar é existir",
                    "Existo, logo penso"
                ],
                correct: 1,
                explanation: "René Descartes cunhou esta frase latina que significa 'Penso, logo existo', base de sua filosofia."
            },
            {
                question: "Qual filósofo escreveu 'A República'?",
                options: ["Sócrates", "Platão", "Aristóteles", "Cícero"],
                correct: 1,
                explanation: "Platão escreveu 'A República', uma das obras mais importantes sobre filosofia política."
            },
            {
                question: "Quem é considerado o 'pai da filosofia moderna'?",
                options: ["Immanuel Kant", "René Descartes", "David Hume", "John Locke"],
                correct: 1,
                explanation: "René Descartes é considerado o pai da filosofia moderna por revolucionar o pensamento com seu método da dúvida."
            }
        ]
    },
    {
        id: 12,
        title: "Economia Global",
        description: "Conceitos básicos de economia e mercados",
        category: "Economia",
        difficulty: "medium",
        questions: 5,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 1234,
        rating: 4.1,
        questions_data: [
            {
                question: "O que é PIB?",
                options: [
                    "Produto Interno Bruto",
                    "Produto Industrial Básico",
                    "Programa de Investimento Bancário",
                    "Produto de Importação Bilateral"
                ],
                correct: 0,
                explanation: "PIB significa Produto Interno Bruto, que mede o valor total de bens e serviços produzidos em um país."
            },
            {
                question: "O que é inflação?",
                options: [
                    "Diminuição dos preços",
                    "Aumento geral dos preços",
                    "Estabilidade econômica",
                    "Crescimento do emprego"
                ],
                correct: 1,
                explanation: "Inflação é o aumento geral e sustentado dos preços de bens e serviços em uma economia."
            },
            {
                question: "Qual é a moeda única da União Europeia?",
                options: ["Libra", "Franco", "Euro", "Marco"],
                correct: 2,
                explanation: "O Euro é a moeda única adotada pela maioria dos países da União Europeia."
            },
            {
                question: "O que significa 'oferta e demanda'?",
                options: [
                    "Compra e venda de ações",
                    "Relação entre quantidade disponível e procura por um produto",
                    "Importação e exportação",
                    "Produção e consumo interno"
                ],
                correct: 1,
                explanation: "Oferta e demanda é o princípio básico que determina preços: quantidade disponível versus procura pelo produto."
            },
            {
                question: "O que é uma recessão econômica?",
                options: [
                    "Período de crescimento acelerado",
                    "Estabilidade econômica",
                    "Período de declínio da atividade econômica",
                    "Aumento da inflação"
                ],
                correct: 2,
                explanation: "Recessão é um período de declínio significativo da atividade econômica, geralmente durando vários meses."
            }
        ]
    },
    {
        id: 13,
        title: "Política Internacional",
        description: "Organizações e relações entre países",
        category: "Internacional",
        difficulty: "medium",
        questions: 6,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 892,
        rating: 4.0,
        questions_data: [
            {
                question: "Onde fica a sede da ONU?",
                options: ["Genebra", "Paris", "Nova York", "Londres"],
                correct: 2,
                explanation: "A sede das Nações Unidas fica em Nova York, Estados Unidos."
            },
            {
                question: "Quantos membros permanentes tem o Conselho de Segurança da ONU?",
                options: ["3", "5", "7", "10"],
                correct: 1,
                explanation: "O Conselho de Segurança da ONU tem 5 membros permanentes: EUA, Rússia, China, França e Reino Unido."
            },
            {
                question: "Qual organização antecedeu a União Europeia?",
                options: [
                    "Liga das Nações",
                    "Comunidade Econômica Europeia",
                    "OTAN",
                    "Conselho da Europa"
                ],
                correct: 1,
                explanation: "A Comunidade Econômica Europeia (CEE) foi a precursora da atual União Europeia."
            },
            {
                question: "O que significa BRICS?",
                options: [
                    "Bloco de países emergentes",
                    "Organização militar",
                    "Acordo comercial",
                    "Moeda internacional"
                ],
                correct: 0,
                explanation: "BRICS é um grupo de países emergentes: Brasil, Rússia, Índia, China e África do Sul."
            },
            {
                question: "Qual é o objetivo principal da NATO/OTAN?",
                options: [
                    "Cooperação econômica",
                    "Defesa coletiva",
                    "Intercâmbio cultural",
                    "Proteção ambiental"
                ],
                correct: 1,
                explanation: "A OTAN (Organização do Tratado do Atlântico Norte) é uma aliança militar para defesa coletiva."
            },
            {
                question: "Quantos países fazem parte da União Africana?",
                options: ["50", "54", "55", "58"],
                correct: 2,
                explanation: "A União Africana é composta por 55 estados membros do continente africano."
            }
        ]
    },
    {
        id: 14,
        title: "Esportes Mundiais",
        description: "História e recordes do mundo esportivo",
        category: "Esportes",
        difficulty: "easy",
        questions: 5,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 2341,
        rating: 4.6,
        questions_data: [
            {
                question: "Quantos jogadores tem uma equipe de futebol em campo?",
                options: ["10", "11", "12", "9"],
                correct: 1,
                explanation: "Uma equipe de futebol tem 11 jogadores em campo (10 jogadores de linha + 1 goleiro)."
            },
            {
                question: "Em que país nasceram as Olimpíadas modernas?",
                options: ["Grécia", "França", "Inglaterra", "Alemanha"],
                correct: 0,
                explanation: "As Olimpíadas modernas foram criadas na Grécia, inspiradas nos jogos da Grécia Antiga."
            },
            {
                question: "Qual esporte Pelé praticava?",
                options: ["Basquete", "Futebol", "Vôlei", "Tênis"],
                correct: 1,
                explanation: "Pelé era jogador de futebol, considerado um dos maiores de todos os tempos."
            },
            {
                question: "Quantos sets tem um jogo de vôlei?",
                options: ["Máximo de 3", "Máximo de 5", "Sempre 3", "Sempre 5"],
                correct: 1,
                explanation: "Um jogo de vôlei pode ter no máximo 5 sets, sendo decidido quando uma equipe vence 3 sets."
            },
            {
                question: "Em que esporte se usa uma raquete?",
                options: ["Futebol", "Basquete", "Tênis", "Natação"],
                correct: 2,
                explanation: "O tênis é um esporte onde se usa raquete para golpear a bola."
            }
        ]
    },
    {
        id: 15,
        title: "Astronomia e Espaço",
        description: "Explore os mistérios do universo",
        category: "Astronomia",
        difficulty: "medium",
        questions: 6,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 1567,
        rating: 4.7,
        questions_data: [
            {
                question: "Qual é o planeta mais próximo do Sol?",
                options: ["Vênus", "Mercúrio", "Terra", "Marte"],
                correct: 1,
                explanation: "Mercúrio é o planeta mais próximo do Sol em nosso sistema solar."
            },
            {
                question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
                options: ["8 minutos", "1 hora", "1 dia", "1 segundo"],
                correct: 0,
                explanation: "A luz do Sol demora aproximadamente 8 minutos e 20 segundos para chegar à Terra."
            },
            {
                question: "Qual é a galáxia mais próxima da Via Láctea?",
                options: ["Galáxia do Triângulo", "Andrômeda", "Galáxia do Sombreiro", "Centaurus A"],
                correct: 1,
                explanation: "A galáxia de Andrômeda é a galáxia espiral mais próxima da Via Láctea."
            },
            {
                question: "Quem foi o primeiro homem a pisar na Lua?",
                options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
                correct: 1,
                explanation: "Neil Armstrong foi o primeiro ser humano a pisar na Lua, em 20 de julho de 1969."
            },
            {
                question: "Qual é o maior planeta do sistema solar?",
                options: ["Saturno", "Netuno", "Júpiter", "Urano"],
                correct: 2,
                explanation: "Júpiter é o maior planeta do nosso sistema solar, sendo maior que todos os outros planetas juntos."
            },
            {
                question: "O que é um buraco negro?",
                options: [
                    "Uma estrela muito pequena",
                    "Uma região onde a gravidade é tão forte que nem a luz escapa",
                    "Um planeta sem atmosfera",
                    "Uma nebulosa escura"
                ],
                correct: 1,
                explanation: "Um buraco negro é uma região do espaço onde a gravidade é tão intensa que nem mesmo a luz consegue escapar."
            }
        ]
    },
    {
        id: 16,
        title: "Arte e Cultura",
        description: "Movimentos artísticos e grandes obras da humanidade",
        category: "Arte",
        difficulty: "medium",
        questions: 5,
        timeLimit: 360,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        participants: 1098,
        rating: 4.4,
        questions_data: [
            {
                question: "Quem pintou a Mona Lisa?",
                options: ["Michelangelo", "Leonardo da Vinci", "Rafael", "Donatello"],
                correct: 1,
                explanation: "Leonardo da Vinci pintou a Mona Lisa, uma das obras de arte mais famosas do mundo."
            },
            {
                question: "Em que museu está a Mona Lisa?",
                options: ["Museu Britânico", "Louvre", "Uffizi", "Prado"],
                correct: 1,
                explanation: "A Mona Lisa está exposta no Museu do Louvre, em Paris, França."
            },
            {
                question: "Qual movimento artístico Pablo Picasso ajudou a fundar?",
                options: ["Impressionismo", "Cubismo", "Surrealismo", "Expressionismo"],
                correct: 1,
                explanation: "Pablo Picasso foi um dos fundadores do Cubismo, junto com Georges Braque."
            },
            {
                question: "Onde fica a Capela Sistina?",
                options: ["França", "Itália", "Espanha", "Grécia"],
                correct: 1,
                explanation: "A Capela Sistina fica no Vaticano, em Roma, Itália, famosa pelos afrescos de Michelangelo."
            },
            {
                question: "Quem compôs 'A Nona Sinfonia'?",
                options: ["Mozart", "Bach", "Beethoven", "Chopin"],
                correct: 2,
                explanation: "Ludwig van Beethoven compôs a Nona Sinfonia, que inclui o famoso 'Hino à Alegria'."
            }
        ]
    }
];

// Variáveis globais
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timeRemaining = 360; // 6 minutos em segundos
let timerInterval = null;
let filteredQuizzes = [...quizzes];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadQuizzes();
    setupSearchAndFilter();
});

// Carregar e exibir quizzes
function loadQuizzes() {
    const quizzesGrid = document.getElementById('quizzesGrid');
    const loading = document.getElementById('loading');
    const noResults = document.getElementById('noResults');

    // Simular carregamento
    loading.style.display = 'block';
    quizzesGrid.innerHTML = '';
    noResults.style.display = 'none';

    setTimeout(() => {
        loading.style.display = 'none';

        if (filteredQuizzes.length === 0) {
            noResults.style.display = 'block';
            return;
        }

        filteredQuizzes.forEach(quiz => {
            const quizCard = createQuizCard(quiz);
            quizzesGrid.appendChild(quizCard);
        });
    }, 800);
}

// Criar card do quiz
function createQuizCard(quiz) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.onclick = () => startQuiz(quiz);

    const difficultyText = {
        'easy': 'Fácil',
        'medium': 'Médio',
        'hard': 'Difícil'
    };

    card.innerHTML = `
        <div class="article-image" style="background-image: url('${quiz.image}')">
            <div class="quiz-difficulty ${quiz.difficulty}">${difficultyText[quiz.difficulty]}</div>
            <div class="article-category">${quiz.category}</div>
        </div>
        <div class="article-content">
            <h3 class="article-title">${quiz.title}</h3>
            <p class="article-excerpt">${quiz.description}</p>
            <div class="quiz-stats">
                <div class="quiz-info">
                    <span><i class="fas fa-question-circle"></i> ${quiz.questions} questões</span>
                    <span><i class="fas fa-clock"></i> 6 min</span>
                </div>
                <div class="quiz-info">
                    <span><i class="fas fa-users"></i> ${quiz.participants}</span>
                    <span><i class="fas fa-star"></i> ${quiz.rating}</span>
                </div>
            </div>
            <button class="read-more">Iniciar Quiz</button>
        </div>
    `;

    return card;
}

// Configurar busca e filtros
function setupSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    // Busca em tempo real
    searchInput.addEventListener('input', function() {
        filterQuizzes();
    });

    // Filtro por categoria
    categoryFilter.addEventListener('change', function() {
        filterQuizzes();
    });

    // Preencher opções de categoria
    const categories = [...new Set(quizzes.map(quiz => quiz.category))].sort();
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Filtrar quizzes
function filterQuizzes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;

    filteredQuizzes = quizzes.filter(quiz => {
        const matchesSearch = quiz.title.toLowerCase().includes(searchTerm) ||
                            quiz.description.toLowerCase().includes(searchTerm) ||
                            quiz.category.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || quiz.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    loadQuizzes();
}

// Iniciar quiz
function startQuiz(quiz) {
    currentQuiz = quiz;
    currentQuestionIndex = 0;
    userAnswers = new Array(quiz.questions_data.length).fill(undefined);
    startTime = Date.now();
    timeRemaining = 360; // Reset para 6 minutos

    // Mostrar modal do quiz
    document.getElementById('quizModal').classList.add('active');
    
    // Iniciar timer
    startTimer();
    
    // Carregar primeira pergunta
    loadQuestion();
}

// Iniciar timer de 6 minutos
function startTimer() {
    // Mostrar timer da sessão
    const sessionTimer = document.getElementById('sessionTimer');
    sessionTimer.style.display = 'flex';

    timerInterval = setInterval(() => {
        timeRemaining--;
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Atualizar timers
        document.getElementById('timeRemaining').textContent = timeString;
        
        // Mudança de cor conforme o tempo
        const timerElement = document.getElementById('timeRemaining');
        if (timeRemaining <= 60) {
            timerElement.parentElement.className = 'session-timer timer danger';
        } else if (timeRemaining <= 120) {
            timerElement.parentElement.className = 'session-timer timer warning';
        }

        // Tempo esgotado
        if (timeRemaining <= 0) {
            finishQuiz();
        }
    }, 1000);
}

// Parar timer
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    document.getElementById('sessionTimer').style.display = 'none';
}

// Carregar pergunta atual
function loadQuestion() {
    const question = currentQuiz.questions_data[currentQuestionIndex];
    const quizContainer = document.getElementById('quizContainer');

    // Calcular progresso
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions_data.length) * 100;

    quizContainer.innerHTML = `
        <div class="quiz-header">
            <h3 class="quiz-title">${currentQuiz.title}</h3>
            <div class="timer" id="timer">
                <i class="fas fa-clock"></i>
                <span id="timeDisplay">06:00</span>
            </div>
        </div>
        
        <div class="quiz-progress">
            <div class="quiz-progress-bar" style="width: ${progress}%"></div>
        </div>

        <div class="question-container">
            <div class="question-number">
                Pergunta ${currentQuestionIndex + 1} de ${currentQuiz.questions_data.length}
            </div>
            <div class="question-text">${question.question}</div>
            
            <div class="answers-container" id="answersContainer">
                ${question.options.map((option, index) => `
                    <div class="answer-option ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}" 
                         onclick="selectAnswer(${index})">
                        <div class="answer-letter">${String.fromCharCode(65 + index)}</div>
                        <span>${option}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="quiz-nav">
            <button class="quiz-button secondary" 
                    onclick="previousQuestion()" 
                    ${currentQuestionIndex === 0 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> Anterior
            </button>
            <button class="quiz-button" onclick="nextQuestion()">
                ${currentQuestionIndex === currentQuiz.questions_data.length - 1 ? 'Finalizar' : 'Próxima'}
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;

    // Atualizar timer no modal
    updateTimerDisplay();
}

// Atualizar display do timer
function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timeDisplay');
    if (timerDisplay) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Selecionar resposta
function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Atualizar visualmente
    const options = document.querySelectorAll('.answer-option');
    options.forEach((option, index) => {
        option.classList.toggle('selected', index === answerIndex);
    });
}

// Próxima pergunta
function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions_data.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

// Pergunta anterior
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Finalizar quiz
function finishQuiz() {
    stopTimer();
    
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    
    // Calcular resultados
    let score = 0;
    const results = currentQuiz.questions_data.map((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        if (isCorrect) score++;

        return {
            question: question.question,
            userAnswer: userAnswer !== undefined ? question.options[userAnswer] : 'Não respondida',
            correctAnswer: question.options[question.correct],
            isCorrect,
            explanation: question.explanation
        };
    });

    const percentage = Math.round((score / currentQuiz.questions_data.length) * 100);

    // Mostrar resultados
    showResults({
        quiz: currentQuiz,
        score,
        totalQuestions: currentQuiz.questions_data.length,
        percentage,
        totalTime,
        results
    });
}

// Mostrar resultados com revelação das respostas
function showResults(results) {
    // Fechar modal do quiz
    closeModal();
    
    // Mostrar modal de resultados
    document.getElementById('resultModal').classList.add('active');
    
    const resultContainer = document.getElementById('resultContainer');
    
    // Determinar mensagem baseada na pontuação
    let scoreMessage = '';
    let scoreClass = '';
    
    if (results.percentage >= 80) {
        scoreMessage = 'Excelente! Você domina o assunto!';
        scoreClass = 'excellent';
    } else if (results.percentage >= 60) {
        scoreMessage = 'Bom trabalho! Continue estudando!';
        scoreClass = 'good';
    } else {
        scoreMessage = 'Continue se esforçando! A prática leva à perfeição!';
        scoreClass = 'needs-improvement';
    }

    resultContainer.innerHTML = `
        <div class="result-container">
            <div class="result-title">Quiz Concluído!</div>
            <div class="result-score ${scoreClass}">${results.percentage}%</div>
            <div class="result-message">${scoreMessage}</div>
            <p>Você acertou ${results.score} de ${results.totalQuestions} questões</p>
            <p>Tempo gasto: ${formatTime(results.totalTime)}</p>
            
            <div class="results-review">
                <h4 style="color: var(--destaque); margin-bottom: 20px; text-align: center;">
                    <i class="fas fa-eye"></i> Revisão das Respostas
                </h4>
                ${results.results.map((result, index) => `
                    <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
                        <div class="result-question">
                            <strong>Questão ${index + 1}:</strong> ${result.question}
                        </div>
                        <div class="result-answers">
                            <div class="result-user-answer">
                                <i class="fas fa-user"></i> <strong>Sua resposta:</strong> ${result.userAnswer}
                                ${result.isCorrect ? '<i class="fas fa-check" style="color: var(--sucesso); margin-left: 10px;"></i>' : '<i class="fas fa-times" style="color: var(--perigo); margin-left: 10px;"></i>'}
                            </div>
                            ${!result.isCorrect ? `
                                <div class="result-correct-answer">
                                    <i class="fas fa-check-circle"></i> <strong>Resposta correta:</strong> ${result.correctAnswer}
                                </div>
                            ` : ''}
                        </div>
                        <div class="result-explanation">
                            <i class="fas fa-lightbulb"></i> <strong>Explicação:</strong> ${result.explanation}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button class="quiz-button" onclick="restartQuiz()" style="margin-right: 15px;">
                    <i class="fas fa-redo"></i> Tentar Novamente
                </button>
                <button class="quiz-button secondary" onclick="closeResultModal()">
                    <i class="fas fa-home"></i> Voltar aos Quizzes
                </button>
            </div>
        </div>
    `;
}

// Formatar tempo
function formatTime(timeMs) {
    const minutes = Math.floor(timeMs / 60000);
    const seconds = Math.floor((timeMs % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
}

// Reiniciar quiz
function restartQuiz() {
    closeResultModal();
    if (currentQuiz) {
        startQuiz(currentQuiz);
    }
}

// Fechar modal do quiz
function closeModal() {
    document.getElementById('quizModal').classList.remove('active');
    stopTimer();
    currentQuiz = null;
}

// Fechar modal de resultados
function closeResultModal() {
    document.getElementById('resultModal').classList.remove('active');
}

// Fechar modais ao clicar fora
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        if (e.target.id === 'quizModal') {
            closeModal();
        } else if (e.target.id === 'resultModal') {
            closeResultModal();
        }
    }
});

// Fechar modais com tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeResultModal();
    }
});

// Atualizar timer display periodicamente
setInterval(() => {
    if (timerInterval) {
        updateTimerDisplay();
    }
}, 1000);

console.log('Quizmania carregado com sucesso!');
console.log(`${quizzes.length} quizzes disponíveis`);