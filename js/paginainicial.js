// Base de dados expandida das curiosidades para os modals
const curiosidadesData = {
    'fungo-gigante': {
        title: 'O Fungo Gigante de Oregon',
        category: 'Biologia',
        image: '/icon/cogumelo.jpg',
        content: `
            <p><strong>Armillaria ostoyae</strong> é oficialmente o maior organismo vivo do planeta Terra!</p>
            
            <h4>🍄 Dimensões Impressionantes:</h4>
            <ul>
                <li><strong>Área:</strong> 8,9 km² (equivalente a 1.665 campos de futebol)</li>
                <li><strong>Idade:</strong> Entre 2.400 a 8.650 anos</li>
                <li><strong>Peso estimado:</strong> 605 toneladas</li>
                <li><strong>Localização:</strong> Floresta Nacional de Malheur, Oregon, EUA</li>
            </ul>
            
            <h4>🧬 Como Funciona:</h4>
            <p>Este fungo gigante é na verdade uma rede subterrânea interconectada de <em>micélios</em> (filamentos fúngicos). Ele se espalha através de estruturas chamadas <strong>rizomorfos</strong>, que funcionam como cabos subterrâneos transmitindo nutrientes e informações.</p>
            
            <h4>🌲 Impacto Ecológico:</h4>
            <p>O fungo ataca principalmente árvores coníferas, causando a "podridão das raízes". Ironicamente, ao derrubar árvores antigas, ele cria espaço para novas plantas crescerem, desempenhando um papel crucial na renovação da floresta.</p>
            
            <h4>🔬 Descoberta Científica:</h4>
            <p>Foi descoberto em 1998 por pesquisadores que inicialmente pensaram estar lidando com vários organismos diferentes. Análises de DNA revelaram que se tratava de um único indivíduo gigantesco!</p>
        `,
        sources: [
            'Nature Magazine - "The Humongous Fungus"',
            'US Forest Service Research',
            'Mycological Society of America'
        ]
    },
    'venus-retrogrado': {
        title: 'Vênus: O Planeta que Gira ao Contrário',
        category: 'Astronomia',
        image: '/icon/venus.jpg',
        content: `
            <p>Vênus é um planeta de extremos que desafia nossa compreensão do sistema solar!</p>
            
            <h4>🌍 Rotação Única:</h4>
            <ul>
                <li><strong>Dia venusiano:</strong> 243 dias terrestres</li>
                <li><strong>Ano venusiano:</strong> 225 dias terrestres</li>
                <li><strong>Direção:</strong> Rotação retrógrada (sentido anti-horário)</li>
                <li><strong>Resultado:</strong> O Sol nasce no oeste e se põe no leste!</li>
            </ul>
            
            <h4>🔥 Condições Extremas:</h4>
            <p><strong>Temperatura:</strong> 462°C (mais quente que Mercúrio, mesmo estando mais longe do Sol)</p>
            <p><strong>Pressão:</strong> 92 vezes a pressão terrestre (equivale a estar 1km debaixo d'água)</p>
            <p><strong>Atmosfera:</strong> 96% dióxido de carbono com nuvens de ácido sulfúrico</p>
            
            <h4>🌪️ Teorias sobre a Rotação:</h4>
            <p>Cientistas acreditam que a rotação retrógrada pode ter sido causada por:</p>
            <ul>
                <li>Colisão com um grande asteroide</li>
                <li>Efeitos gravitacionais complexos durante a formação</li>
                <li>Marés atmosféricas extremas causadas pelo Sol</li>
            </ul>
            
            <h4>🛸 Exploração Espacial:</h4>
            <p>Mais de 40 missões espaciais visitaram Vênus, incluindo a sonda soviética Venera 7, que foi a primeira a pousar em outro planeta em 1970!</p>
        `,
        sources: [
            'NASA Planetary Science Division',
            'ESA Venus Express Mission',
            'Journal of Geophysical Research'
        ]
    },
    'buraco-negro': {
        title: 'Buracos Negros: Devoradores do Espaço-Tempo',
        category: 'Física',
        image: '/icon/blackhole.jpg',
        content: `
            <p>Buracos negros são os objetos mais extremos do universo, onde as leis da física chegam ao limite!</p>
            
            <h4>🍝 Efeito Espaguete (Spaghettification):</h4>
            <p>Quando você se aproxima de um buraco negro, a diferença gravitacional entre sua cabeça e seus pés se torna tão extrema que você seria literalmente esticado como um espaguete!</p>
            
            <h4>⏰ Dilatação Temporal:</h4>
            <ul>
                <li>Tempo passa mais devagar perto de buracos negros</li>
                <li>No horizonte de eventos, o tempo "para" para observadores externos</li>
                <li>1 hora perto de um buraco negro = 7 anos na Terra (como no filme Interestelar)</li>
            </ul>
            
            <h4>🎯 Tipos de Buracos Negros:</h4>
            <p><strong>Estelares:</strong> 3-20 massas solares (formados pela morte de estrelas)</p>
            <p><strong>Supermassivos:</strong> Milhões/bilhões de massas solares (centro das galáxias)</p>
            <p><strong>Primordiais:</strong> Teóricos, formados no Big Bang</p>
            
            <h4>🔬 Descobertas Recentes:</h4>
            <ul>
                <li><strong>2019:</strong> Primeira foto de um buraco negro (M87*)</li>
                <li><strong>2020:</strong> Sagittarius A* no centro da Via Láctea</li>
                <li><strong>2015:</strong> Detecção de ondas gravitacionais de colisão de buracos negros</li>
            </ul>
            
            <h4>🌌 Paradoxo da Informação:</h4>
            <p>Stephen Hawking descobriu que buracos negros "evaporam" através da radiação Hawking, mas isso cria um paradoxo: onde vai a informação que cai no buraco negro?</p>
        `,
        sources: [
            'Event Horizon Telescope Collaboration',
            'LIGO Scientific Collaboration',
            'Hawking, S. - "A Brief History of Time"'
        ]
    },
    'agua-supergelada': {
        title: 'Água Supergelada: Líquida Abaixo de Zero',
        category: 'Química',
        image: '/icon/aguasuper.avif',
        content: `
            <p>A água pode permanecer líquida em temperaturas muito abaixo de 0°C em um fenômeno fascinante!</p>
            
            <h4>❄️ O Fenômeno:</h4>
            <ul>
                <li><strong>Temperatura limite:</strong> Até -40°C em condições especiais</li>
                <li><strong>Condição:</strong> Ausência de núcleos de cristalização</li>
                <li><strong>Estado:</strong> Metastável (instável mas persistente)</li>
                <li><strong>Gatilho:</strong> Qualquer vibração pode causar congelamento instantâneo</li>
            </ul>
            
            <h4>🧊 Como Acontece:</h4>
            <p>Para a água congelar, ela precisa de "sementes" para iniciar a formação de cristais de gelo. Sem essas sementes (poeira, bolhas, arranhões no recipiente), a água pode permanecer líquida mesmo abaixo de 0°C.</p>
            
            <h4>⚗️ Experimento Caseiro:</h4>
            <ol>
                <li>Use água destilada em garrafa lisa</li>
                <li>Coloque no freezer por 2-3 horas</li>
                <li>Retire cuidadosamente (sem balançar)</li>
                <li>Bata na garrafa ou adicione gelo</li>
                <li>Observe o congelamento instantâneo!</li>
            </ol>
            
            <h4>🌿 Aplicações na Natureza:</h4>
            <ul>
                <li><strong>Plantas:</strong> Sobrevivem ao inverno usando anticongelantes naturais</li>
                <li><strong>Peixes árticos:</strong> Produzem proteínas anticongelantes</li>
                <li><strong>Nuvens:</strong> Gotas de água permanecem líquidas a -40°C na atmosfera</li>
            </ul>
            
            <h4>🔬 Importância Científica:</h4>
            <p>Este fenômeno ajuda a entender como a vida pode existir em condições extremas e é crucial para pesquisas em criobiologia e preservação de tecidos.</p>
        `,
        sources: [
            'Journal of Physical Chemistry',
            'Nature Physics - Supercooling Research',
            'American Chemical Society'
        ]
    },
    'cerebro-humano': {
        title: 'O Cérebro: A Máquina Mais Complexa do Universo',
        category: 'Neurociência',
        image: '/icon/cerebro.jpg',
        content: `
            <p>O cérebro humano é uma obra-prima da evolução com capacidades que superam os melhores supercomputadores!</p>
            
            <h4>🧠 Números Impressionantes:</h4>
            <ul>
                <li><strong>Neurônios:</strong> ~86 bilhões</li>
                <li><strong>Sinapses:</strong> ~100 trilhões de conexões</li>
                <li><strong>Velocidade:</strong> Impulsos até 120 m/s</li>
                <li><strong>Energia:</strong> 20% do consumo corporal total (20 watts)</li>
                <li><strong>Peso:</strong> Apenas 2% do peso corporal</li>
            </ul>
            
            <h4>⚡ Comparação com Computadores:</h4>
            <p><strong>Processamento:</strong> 1 exaFLOP (10¹⁸ operações/segundo)</p>
            <p><strong>Armazenamento:</strong> ~2,5 petabytes de memória</p>
            <p><strong>Eficiência:</strong> 1000x mais eficiente que supercomputadores</p>
            
            <h4>🌟 Capacidades Únicas:</h4>
            <ul>
                <li><strong>Neuroplasticidade:</strong> Reorganiza-se constantemente</li>
                <li><strong>Processamento paralelo:</strong> Milhões de operações simultâneas</li>
                <li><strong>Reconhecimento de padrões:</strong> Instantâneo e automático</li>
                <li><strong>Criatividade:</strong> Gera ideias completamente novas</li>
            </ul>
            
            <h4>🔍 Mistérios Não Resolvidos:</h4>
            <ul>
                <li>Como surge a consciência?</li>
                <li>Como funcionam os sonhos?</li>
                <li>Por que esquecemos?</li>
                <li>Como o cérebro prediz o futuro?</li>
            </ul>
            
            <h4>🚀 Fatos Surpreendentes:</h4>
            <p>• Cada neurônio pode se conectar com até 10.000 outros<br>
            • O cérebro processa informação visual em apenas 13 milissegundos<br>
            • Produz cerca de 12 watts de energia elétrica<br>
            • Tem mais conexões que estrelas na Via Láctea!</p>
        `,
        sources: [
            'Nature Neuroscience',
            'Human Brain Project',
            'Allen Institute for Brain Science'
        ]
    },
    'dna-compartilhado': {
        title: 'DNA: A Receita Universal da Vida',
        category: 'Genética',
        image: '/icon/dna.jpg',
        content: `
            <p>O DNA revela nossa conexão fundamental com toda vida na Terra através de códigos genéticos compartilhados!</p>
            
            <h4>🧬 Semelhanças Genéticas:</h4>
            <ul>
                <li><strong>Chimpanzés:</strong> 98.8% de DNA idêntico</li>
                <li><strong>Camundongos:</strong> 85% de genes similares</li>
                <li><strong>Bananas:</strong> 50% de DNA compartilhado</li>
                <li><strong>Moscas:</strong> 47% de genes em comum</li>
                <li><strong>Leveduras:</strong> 26% de DNA similar</li>
            </ul>
            
            <h4>🌱 Por Que Compartilhamos DNA?</h4>
            <p>Todos os seres vivos descendem de um <strong>ancestral comum universal</strong> que viveu há ~3.5 bilhões de anos. Este organismo primordial desenvolveu o código genético que ainda usamos hoje!</p>
            
            <h4>🔬 O Que os 50% com Bananas Significam:</h4>
            <ul>
                <li>Genes básicos para funções celulares</li>
                <li>Metabolismo energético</li>
                <li>Divisão celular</li>
                <li>Reparo de DNA</li>
                <li>Produção de proteínas</li>
            </ul>
            
            <h4>📊 Projeto Genoma Humano:</h4>
            <p><strong>Descobertas Surpreendentes:</strong></p>
            <ul>
                <li>Apenas 2% do DNA codifica proteínas</li>
                <li>Temos apenas ~20.000 genes (mesma quantidade que minhocas!)</li>
                <li>8% do nosso DNA vem de vírus antigos</li>
                <li>DNA "lixo" pode não ser tão inútil assim</li>
            </ul>
            
            <h4>🧮 Código Genético Universal:</h4>
            <p>O DNA usa apenas 4 "letras" (A, T, G, C) para escrever todas as receitas da vida. É como se toda a diversidade biológica fosse escrita com um alfabeto de 4 letras!</p>
            
            <h4>🎯 Aplicações Modernas:</h4>
            <p>• Medicina personalizada<br>
            • Agricultura sustentável<br>
            • Conservação de espécies<br>
            • Arqueologia genética<br>
            • Biotecnologia avançada</p>
        `,
        sources: [
            'Human Genome Project',
            'Nature Genetics',
            'ENCODE Project Consortium'
        ]
    },
    'infinito-primos': {
        title: 'Números Primos: O Infinito Matemático',
        category: 'Matemática',
        image: '/icon/primos.jpg',
        content: `
            <p>Os números primos são os "átomos" da matemática e escondem mistérios fascinantes!</p>
            
            <h4>🔢 O Que São Números Primos:</h4>
            <p>Números maiores que 1 que só podem ser divididos por 1 e por eles mesmos. Os primeiros são: 2, 3, 5, 7, 11, 13, 17, 19, 23...</p>
            
            <h4>♾️ Prova de Euclides (300 a.C.):</h4>
            <p>Euclides provou que existem infinitos números primos com um argumento elegante:</p>
            <ol>
                <li>Suponha que existe um maior primo P</li>
                <li>Multiplique todos os primos até P e some 1</li>
                <li>Este novo número ou é primo, ou tem fatores primos maiores que P</li>
                <li>Contradição! Logo, não existe maior primo</li>
            </ol>
            
            <h4>🖥️ Recordes Computacionais:</h4>
            <ul>
                <li><strong>Maior primo conhecido:</strong> 2^82.589.933 − 1</li>
                <li><strong>Dígitos:</strong> 24.862.048 dígitos!</li>
                <li><strong>Descoberto:</strong> 2018 pelo projeto GIMPS</li>
                <li><strong>Tipo:</strong> Primo de Mersenne</li>
            </ul>
            
            <h4>🔐 Aplicações Práticas:</h4>
            <ul>
                <li><strong>Criptografia:</strong> Base da segurança digital</li>
                <li><strong>Internet:</strong> Protege cartões de crédito e senhas</li>
                <li><strong>Bitcoin:</strong> Usa números primos para mineração</li>
                <li><strong>Códigos QR:</strong> Correção de erros com primos</li>
            </ul>
            
            <h4>🎲 Distribuição Misteriosa:</h4>
            <p>Os primos ficam mais raros conforme os números crescem, mas sua distribuição segue padrões surpreendentes que ainda intrigam matemáticos!</p>
            
            <h4>💰 Prêmio Clay:</h4>
            <p>A <strong>Hipótese de Riemann</strong> sobre distribuição de primos vale US$ 1 milhão para quem resolver!</p>
        `,
        sources: [
            'GIMPS - Great Internet Mersenne Prime Search',
            'Clay Mathematics Institute',
            'Journal of Number Theory'
        ]
    },
    'oceano-profundo': {
        title: 'Oceanos: O Último Frontier da Terra',
        category: 'Oceanografia',
        image: '/icon/oceano.jpg',
        content: `
            <p>Os oceanos guardam mais mistérios que o espaço sideral!</p>
            
            <h4>🌊 Números Impressionantes:</h4>
            <ul>
                <li><strong>Explorado:</strong> Apenas 5% dos oceanos</li>
                <li><strong>Mapeado:</strong> 20% do fundo oceânico</li>
                <li><strong>Profundidade média:</strong> 3.688 metros</li>
                <li><strong>Fossa das Marianas:</strong> 10.994 metros (ponto mais profundo)</li>
            </ul>
            
            <h4>🏔️ Comparação com o Everest:</h4>
            <p>Se colocássemos o Monte Everest (8.848m) na Fossa das Marianas, ainda haveria 2.146 metros de água acima do pico!</p>
            
            <h4>🦑 Vida nas Profundezas:</h4>
            <ul>
                <li><strong>Lulas colossais:</strong> Até 14 metros de comprimento</li>
                <li><strong>Peixes-lanterna:</strong> Produzem sua própria luz</li>
                <li><strong>Polvos dumbo:</strong> Vivem a 7.000m de profundidade</li>
                <li><strong>Microorganismos:</strong> Sobrevivem sem luz solar</li>
            </ul>
            
            <h4>🔥 Fontes Hidrotermais:</h4>
            <p>Descobertas em 1977, estas "chaminés" do fundo do mar:</p>
            <ul>
                <li>Expelem água a 400°C</li>
                <li>Sustentam ecossistemas únicos</li>
                <li>Podem ter originado a vida na Terra</li>
                <li>Contêm metais preciosos</li>
            </ul>
            
            <h4>🛸 Exploração Espacial vs Oceânica:</h4>
            <p>Mais pessoas visitaram a Lua (12) do que a Fossa das Marianas (3)!</p>
            
            <h4>🌍 Importância Global:</h4>
            <ul>
                <li>Regulam o clima global</li>
                <li>Produzem 70% do oxigênio</li>
                <li>Absorvem 30% do CO₂</li>
                <li>Fonte de alimento para bilhões</li>
            </ul>
        `,
        sources: [
            'NOAA Ocean Exploration',
            'Woods Hole Oceanographic Institution',
            'Deep Ocean Stewardship Initiative'
        ]
    },
    'computacao-quantica': {
        title: 'Computação Quântica: O Futuro da Tecnologia',
        category: 'Tecnologia',
        image: '/icon/quantico.jpg',
        content: `
            <p>Computadores quânticos prometem revolucionar nossa capacidade de processamento usando as leis da física quântica!</p>
            
            <h4>⚛️ Princípios Quânticos:</h4>
            <ul>
                <li><strong>Superposição:</strong> Qubits podem ser 0 e 1 simultaneamente</li>
                <li><strong>Emaranhamento:</strong> Qubits conectados instantaneamente</li>
                <li><strong>Interferência:</strong> Manipulação de probabilidades</li>
                <li><strong>Medição:</strong> Colapsa o estado quântico</li>
            </ul>
            
            <h4>💻 Vantagem Quântica:</h4>
            <p><strong>Bits clássicos:</strong> 0 OU 1 (binário)</p>
            <p><strong>Qubits:</strong> 0 E 1 ao mesmo tempo!</p>
            <p>300 qubits podem representar mais estados que átomos no universo!</p>
            
            <h4>🚀 Supremacia Quântica (Google 2019):</h4>
            <ul>
                <li><strong>Processador:</strong> Sycamore (53 qubits)</li>
                <li><strong>Tempo:</strong> 200 segundos</li>
                <li><strong>Equivalente clássico:</strong> 10.000 anos no melhor supercomputador</li>
                <li><strong>Problema:</strong> Amostragem de circuitos aleatórios</li>
            </ul>
            
            <h4>🔐 Aplicações Revolucionárias:</h4>
            <ul>
                <li><strong>Criptografia:</strong> Quebrar códigos atuais</li>
                <li><strong>Medicina:</strong> Descoberta de novos medicamentos</li>
                <li><strong>IA:</strong> Machine learning exponencial</li>
                <li><strong>Finanças:</strong> Otimização de portfólios</li>
                <li><strong>Clima:</strong> Previsões meteorológicas precisas</li>
            </ul>
            
            <h4>🧊 Desafios Técnicos:</h4>
            <ul>
                <li><strong>Temperatura:</strong> Mais frio que o espaço (-273°C)</li>
                <li><strong>Decoerência:</strong> Estados quânticos são frágeis</li>
                <li><strong>Correção de erros:</strong> Ainda em desenvolvimento</li>
                <li><strong>Custo:</strong> Milhões de dólares por máquina</li>
            </ul>
            
            <h4>🏢 Principais Players:</h4>
            <p>• Google, IBM, Microsoft<br>
            • Startups: Rigetti, IonQ, PsiQuantum<br>
            • Governos: China, EUA, União Europeia<br>
            • Investimento global: >$15 bilhões</p>
        `,
        sources: [
            'Nature Quantum Information',
            'Google AI Quantum Team',
            'IBM Quantum Network'
        ]
    },
    // NOVAS CURIOSIDADES PARA "MAIS CURIOSIDADES CIENTÍFICAS"
    'arvores-comunicacao': {
        title: 'Árvores se Comunicam: A Internet da Floresta',
        category: 'Biologia',
        image: '/icon/arvores-comunicacao.jpg',
        content: `
            <p>As florestas possuem uma rede de comunicação subterrânea mais complexa que a internet!</p>
            
            <h4>🌐 A "Wood Wide Web":</h4>
            <p>Cientistas descobriram que árvores se comunicam através de uma rede de <strong>fungos micorrízicos</strong> que conecta suas raízes. Esta rede foi apelidada de "Wood Wide Web" pelo pesquisador Peter Wohlleben.</p>
            
            <h4>📡 Como Funciona a Comunicação:</h4>
            <ul>
                <li><strong>Sinais químicos:</strong> Transmitem alertas sobre pragas e doenças</li>
                <li><strong>Nutrientes:</strong> Árvores "mães" alimentam mudas através da rede</li>
                <li><strong>Carbono:</strong> Compartilhamento de açúcares entre espécies</li>
                <li><strong>Informações:</strong> Coordenam respostas a mudanças ambientais</li>
            </ul>
            
            <h4>🧠 Inteligência Florestal:</h4>
            <p>Pesquisas mostram que as florestas exibem comportamentos que sugerem uma forma primitiva de inteligência coletiva:</p>
            <ul>
                <li>Reconhecimento de parentes (favorecimento genético)</li>
                <li>Memória de eventos passados</li>
                <li>Tomada de decisões colaborativas</li>
                <li>Altruísmo entre árvores não relacionadas</li>
            </ul>
            
            <h4>🔬 Descobertas Revolucionárias:</h4>
            <p><strong>Suzanne Simard</strong> (UBC) descobriu que:</p>
            <ul>
                <li>Uma única árvore pode se conectar a centenas de outras</li>
                <li>Árvores mais velhas funcionam como "hubs" da rede</li>
                <li>Diferentes espécies colaboram mais do que competem</li>
                <li>A rede pode se estender por quilômetros</li>
            </ul>
            
            <h4>🚨 Sistema de Alerta:</h4>
            <p>Quando atacada por insetos, uma árvore libera compostos químicos que:</p>
            <ul>
                <li>Alertam árvores vizinhas sobre o perigo</li>
                <li>Ativam defesas químicas preventivas</li>
                <li>Atraem predadores dos insetos atacantes</li>
                <li>Modificam o sabor das folhas para desencorajar herbívoros</li>
            </ul>
            
            <h4>🌍 Implicações Ambientais:</h4>
            <p>Esta descoberta revoluciona nossa compreensão das florestas e destaca a importância da preservação de ecossistemas intactos para manter essas redes de comunicação vitais.</p>
        `,
        sources: [
            'Simard, S. - "Finding the Mother Tree"',
            'Nature Communications - Forest Networks',
            'Wohlleben, P. - "The Hidden Life of Trees"'
        ]
    },
    'velocidade-luz': {
        title: 'Velocidade da Luz: O Limite Universal',
        category: 'Física',
        image: '/icon/velocidade-luz.jpg',
        content: `
            <p>A velocidade da luz não é apenas rápida - ela é o limite absoluto do universo!</p>
            
            <h4>⚡ Números Impressionantes:</h4>
            <ul>
                <li><strong>Velocidade:</strong> 299.792.458 metros por segundo</li>
                <li><strong>Em km/h:</strong> 1.079.252.848,8 km/h</li>
                <li><strong>Volta à Terra:</strong> 7,5 vezes por segundo</li>
                <li><strong>Terra-Lua:</strong> 1,3 segundos</li>
                <li><strong>Terra-Sol:</strong> 8 minutos e 20 segundos</li>
            </ul>
            
            <h4>🌟 Por Que Este Limite Existe:</h4>
            <p>Einstein descobriu que a velocidade da luz é o limite universal porque:</p>
            <ul>
                <li>O espaço e o tempo estão entrelaçados</li>
                <li>Massa aumenta com velocidade</li>
                <li>Energia infinita seria necessária para alcançar c</li>
                <li>Objetos se contraem na direção do movimento</li>
            </ul>
            
            <h4>🚀 Consequências Bizarras:</h4>
            <p><strong>Dilatação do Tempo:</strong></p>
            <ul>
                <li>A 90% da velocidade da luz: tempo passa 2,3x mais devagar</li>
                <li>A 99% da velocidade da luz: tempo passa 7x mais devagar</li>
                <li>A 99,9% da velocidade da luz: tempo passa 22x mais devagar</li>
            </ul>
            
            <h4>🔬 Experimentos Incríveis:</h4>
            <p><strong>Primeira Medição (Ole Rømer, 1676):</strong></p>
            <p>Observando eclipses das luas de Júpiter, calculou aproximadamente 220.000 km/s</p>
            
            <p><strong>Experimento de Michelson-Morley (1887):</strong></p>
            <p>Provou que a velocidade da luz é constante em todas as direções</p>
            
            <h4>🌌 Implicações Cósmicas:</h4>
            <ul>
                <li><strong>Viagem no tempo:</strong> Tecnicamente possível para o futuro</li>
                <li><strong>Comunicação interestelar:</strong> Limitada pela velocidade da luz</li>
                <li><strong>Observação do passado:</strong> Vemos estrelas como eram há anos-luz</li>
                <li><strong>Universo observável:</strong> Limitado a 13,8 bilhões de anos-luz</li>
            </ul>
            
            <h4>⚛️ Partículas Especiais:</h4>
            <p><strong>Fótons:</strong> Sempre viajam na velocidade da luz (massa zero)</p>
            <p><strong>Neutrinos:</strong> Quase à velocidade da luz (massa quase zero)</p>
            <p><strong>Táquions:</strong> Teóricos, mais rápidos que a luz</p>
            
            <h4>🔮 Futuro da Física:</h4>
            <p>Cientistas investigam se é possível "quebrar" o limite da velocidade da luz através de conceitos como buracos de minhoca, motor Alcubierre e teletransporte quântico.</p>
        `,
        sources: [
            'Einstein, A. - "Teoria da Relatividade Especial"',
            'Physical Review Letters',
            'CERN - Speed of Light Measurements'
        ]
    },
    'diamantes-espaciais': {
        title: 'Diamantes no Espaço: Chuvas de Pedras Preciosas',
        category: 'Astronomia',
        image: '/icon/diamantes-espaco.jpg',
        content: `
            <p>Planetas gigantes no nosso sistema solar literalmente fazem chover diamantes!</p>
            
            <h4>💎 Chuva de Diamantes:</h4>
            <p>Em <strong>Netuno</strong> e <strong>Urano</strong>, as condições extremas transformam metano em diamantes que "chovem" em direção ao núcleo:</p>
            <ul>
                <li><strong>Pressão:</strong> 6 milhões de vezes a pressão terrestre</li>
                <li><strong>Temperatura:</strong> 5.000°C</li>
                <li><strong>Processo:</strong> Metano (CH₄) se decompõe sob extrema pressão</li>
                <li><strong>Resultado:</strong> Cristais de diamante puro</li>
            </ul>
            
            <h4>🪐 Outros Planetas Diamantíferos:</h4>
            <ul>
                <li><strong>Júpiter:</strong> Também pode ter chuva de diamantes</li>
                <li><strong>Saturno:</strong> Condições similares em camadas profundas</li>
                <li><strong>55 Cancri e:</strong> Exoplaneta com núcleo de diamante</li>
                <li><strong>BPM 37093:</strong> Estrela anã branca cristalizada (diamante do tamanho da Terra!)</li>
            </ul>
            
            <h4>🔬 Como Sabemos Disso:</h4>
            <p>Cientistas descobriram através de:</p>
            <ul>
                <li>Simulações em laboratório com laser de alta potência</li>
                <li>Análise espectroscópica de planetas</li>
                <li>Modelos computacionais de pressão e temperatura</li>
                <li>Dados das sondas Voyager e Cassini</li>
            </ul>
            
            <h4>⚡ Experimentos Terrestres:</h4>
            <p>O <strong>SLAC National Accelerator Laboratory</strong> recriou as condições de Netuno:</p>
            <ul>
                <li>Usaram laser de raios-X para criar 150 GPa de pressão</li>
                <li>Aqueceram poliestireno a milhares de graus</li>
                <li>Observaram formação de nanodiamantes em tempo real</li>
                <li>Confirmaram a teoria da chuva de diamantes</li>
            </ul>
            
            <h4>💰 Valor Econômico Teórico:</h4>
            <p>Se pudéssemos minerar Netuno:</p>
            <ul>
                <li>Bilhões de toneladas de diamantes</li>
                <li>Valor estimado: mais que o PIB mundial</li>
                <li>Problemas: temperatura, pressão, distância</li>
                <li>Diamantes podem ser do tamanho de icebergs!</li>
            </ul>
            
            <h4>🌌 Implicações Cósmicas:</h4>
            <p>Este fenômeno nos ajuda a entender:</p>
            <ul>
                <li>Formação e evolução planetária</li>
                <li>Campos magnéticos de gigantes gasosos</li>
                <li>Possibilidade de vida em condições extremas</li>
                <li>Química do carbono no universo</li>
            </ul>
        `,
        sources: [
            'Nature Astronomy - Diamond Rain',
            'SLAC National Accelerator Laboratory',
            'Journal of Planetary Science'
        ]
    },
    'elementos-raros': {
        title: 'Elementos Raros: Os Tesouros Ocultos da Tabela Periódica',
        category: 'Química',
        image: '/icon/elementos-raros.jpg',
        content: `
            <p>Alguns elementos são tão raros que custam mais que ouro e têm propriedades surpreendentes!</p>
            
            <h4>💰 Os Elementos Mais Caros do Mundo:</h4>
            <ul>
                <li><strong>Califórnio-252:</strong> US$ 62 milhões/grama (mais caro que diamantes!)</li>
                <li><strong>Antimatéria:</strong> US$ 62,5 trilhões/grama (teórico)</li>
                <li><strong>Francium:</strong> Impossível de comprar (meia-vida de 22 minutos)</li>
                <li><strong>Astato:</strong> US$ 15 milhões/grama (menos de 25g na Terra)</li>
            </ul>
            
            <h4>⚛️ Califórnio-252: O Super Elemento:</h4>
            <p>Este elemento artificial tem propriedades incríveis:</p>
            <ul>
                <li><strong>Produção:</strong> Apenas 8 gramas/ano no mundo todo</li>
                <li><strong>Neutrons:</strong> Emite 170 milhões de neutrons/minuto</li>
                <li><strong>Aplicações:</strong> Detectores de ouro, tratamento de câncer</li>
                <li><strong>Localização:</strong> Produzido apenas em 2 reatores (EUA e Rússia)</li>
            </ul>
            
            <h4>👻 Francium: O Elemento Fantasma:</h4>
            <p>O elemento mais raro da natureza:</p>
            <ul>
                <li><strong>Quantidade na Terra:</strong> Menos de 30 gramas no total</li>
                <li><strong>Meia-vida:</strong> 22 minutos (desaparece rapidamente)</li>
                <li><strong>Descoberta:</strong> 1939, por Marguerite Perey</li>
                <li><strong>Propriedades:</strong> Metal alcalino extremamente reativo</li>
            </ul>
            
            <h4>💎 Astato: Mais Raro que Diamantes:</h4>
            <ul>
                <li><strong>Abundância:</strong> 25 gramas em toda a crosta terrestre</li>
                <li><strong>Meia-vida:</strong> 8,1 horas</li>
                <li><strong>Estado:</strong> Sólido metálico (teórico - nunca observado)</li>
                <li><strong>Aplicação:</strong> Pesquisas em medicina nuclear</li>
            </ul>
            
            <h4>🌟 Elementos de Terras Raras:</h4>
            <p>Essenciais para tecnologia moderna:</p>
            <ul>
                <li><strong>Neodímio:</strong> Ímãs superpotentes (turbinas eólicas, carros elétricos)</li>
                <li><strong>Túlio:</strong> Mais raro que ouro, usado em raios-X portáteis</li>
                <li><strong>Lutécio:</strong> US$ 10.000/kg, usado em medicina nuclear</li>
                <li><strong>Térbio:</strong> Fósforos verdes em TVs e lâmpadas</li>
            </ul>
            
            <h4>🔬 Por Que São Tão Raros:</h4>
            <ul>
                <li><strong>Instabilidade nuclear:</strong> Decaem rapidamente</li>
                <li><strong>Formação estelar:</strong> Criados apenas em eventos cósmicos raros</li>
                <li><strong>Produção artificial:</strong> Requer aceleradores de partículas</li>
                <li><strong>Separação difícil:</strong> Propriedades químicas similares</li>
            </ul>
            
            <h4>🚀 Aplicações Surpreendentes:</h4>
            <ul>
                <li><strong>Medicina:</strong> Tratamento de câncer com precisão atômica</li>
                <li><strong>Tecnologia:</strong> Smartphones, computadores, energia renovável</li>
                <li><strong>Pesquisa:</strong> Experimentos de física fundamental</li>
                <li><strong>Defesa:</strong> Detectores de materiais nucleares</li>
            </ul>
            
            <h4>🌍 Geopolítica dos Elementos:</h4>
            <p>A China controla 90% da produção mundial de terras raras, criando dependência tecnológica global e disputas comerciais.</p>
        `,
        sources: [
            'Royal Society of Chemistry',
            'Nature Chemistry - Rare Elements',
            'US Department of Energy - Critical Materials'
        ]
    }
};

// Função para flipar os cards
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Função para abrir modal
function openModal(curiosityId) {
    const data = curiosidadesData[curiosityId];
    if (!data) return;

    // Criar modal se não existir
    let modal = document.getElementById('curiosityModal');
    if (!modal) {
        createModal();
        modal = document.getElementById('curiosityModal');
    }

    // Preencher dados do modal
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalImage').alt = data.title;
    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalContent').innerHTML = data.content;
    
    const sourcesList = document.getElementById('modalSources');
    sourcesList.innerHTML = data.sources.map(source => `<li>${source}</li>`).join('');

    // Mostrar modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function closeModal() {
    const modal = document.getElementById('curiosityModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Função para compartilhar conteúdo
function shareContent() {
    const title = document.getElementById('modalTitle').textContent;
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: `${title} - FATOMANIA`,
            text: 'Descobri esta curiosidade científica incrível!',
            url: url
        });
    } else {
        // Fallback para navegadores sem suporte
        const text = `Descobri esta curiosidade incrível: "${title}" no FATOMANIA! ${url}`;
        navigator.clipboard.writeText(text).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    }
}

// Função para criar modal HTML
function createModal() {
    const modalHTML = `
        <div id="curiosityModal" class="modal-overlay">
            <div class="modal-container">
                <div class="modal-header">
                    <h2 id="modalTitle"></h2>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-image-container">
                        <img id="modalImage" src="" alt="">
                        <span class="modal-category" id="modalCategory"></span>
                    </div>
                    <div class="modal-content" id="modalContent"></div>
                    <div class="modal-sources">
                        <h4>📚 Fontes Científicas:</h4>
                        <ul id="modalSources"></ul>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn secondary" onclick="shareContent()">
                        <i class="fas fa-share"></i> Compartilhar
                    </button>
                    <button class="modal-btn primary" onclick="closeModal()">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    addModalStyles();
}

// Função para adicionar estilos do modal
function addModalStyles() {
    if (document.getElementById('modalStyles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'modalStyles';
    styles.textContent = `
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            z-index: 10000;
            overflow-y: auto;
            animation: modalFadeIn 0.3s ease;
        }

        .modal-overlay.show {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .modal-container {
            background: var(--fundo-card);
            border-radius: 20px;
            width: 100%;
            max-width: 900px;
            max-height: 90vh;
            overflow: hidden;
            border: 2px solid var(--azul);
            box-shadow: 0 25px 60px rgba(0, 247, 255, 0.3);
            animation: modalSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .modal-header {
            background: linear-gradient(135deg, var(--roxo), var(--azul));
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .modal-header h2 {
            font-family: 'Orbitron', sans-serif;
            color: white;
            margin: 0;
            font-size: 1.8rem;
        }

        .modal-close {
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }

        .modal-close:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: rotate(90deg);
        }

        .modal-body {
            max-height: calc(90vh - 200px);
            overflow-y: auto;
        }

        .modal-image-container {
            position: relative;
            height: 250px;
            overflow: hidden;
        }

        .modal-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.8);
        }

        .modal-category {
            position: absolute;
            top: 20px;
            right: 20px;
            background: var(--roxo);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
        }

        .modal-content {
            padding: 30px;
            color: white;
            line-height: 1.8;
        }

        .modal-content h4 {
            color: var(--azul);
            font-family: 'Orbitron', sans-serif;
            margin: 25px 0 15px;
            font-size: 1.2rem;
        }

        .modal-content ul, .modal-content ol {
            margin: 15px 0;
            padding-left: 25px;
        }

        .modal-content li {
            margin: 8px 0;
            color: rgba(255, 255, 255, 0.9);
        }

        .modal-content strong {
            color: var(--verde);
        }

        .modal-content em {
            color: var(--destaque);
            font-style: normal;
        }

        .modal-sources {
            background: rgba(0, 247, 255, 0.1);
            margin: 0 30px 30px;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid var(--azul);
        }

        .modal-sources h4 {
            color: var(--azul);
            margin: 0 0 15px;
            font-family: 'Orbitron', sans-serif;
        }

        .modal-sources ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .modal-sources li {
            color: rgba(255, 255, 255, 0.8);
            margin: 8px 0;
            padding: 5px 0;
            border-bottom: 1px solid rgba(0, 247, 255, 0.2);
        }

        .modal-footer {
            background: rgba(0, 0, 0, 0.3);
            padding: 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(0, 247, 255, 0.3);
        }

        .modal-btn {
            padding: 12px 24px;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: 'Rajdhani', sans-serif;
            font-size: 1rem;
        }

        .modal-btn.primary {
            background: var(--verde);
            color: black;
        }

        .modal-btn.primary:hover {
            background: #00c853;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 255, 170, 0.4);
        }

        .modal-btn.secondary {
            background: transparent;
            color: var(--azul);
            border: 2px solid var(--azul);
        }

        .modal-btn.secondary:hover {
            background: var(--azul);
            color: white;
            transform: translateY(-2px);
        }

        @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes modalSlideIn {
            from { 
                transform: scale(0.8) translateY(-50px);
                opacity: 0;
            }
            to { 
                transform: scale(1) translateY(0);
                opacity: 1;
            }
        }

        /* Responsividade */
        @media (max-width: 768px) {
            .modal-container {
                margin: 10px;
                max-height: 95vh;
            }

            .modal-header {
                padding: 20px;
            }

            .modal-header h2 {
                font-size: 1.5rem;
            }

            .modal-content {
                padding: 20px;
            }

            .modal-image-container {
                height: 200px;
            }

            .modal-footer {
                padding: 15px 20px;
                flex-direction: column;
                gap: 10px;
            }

            .modal-btn {
                width: 100%;
                justify-content: center;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

// Efeito de partículas no hero e inicializações
document.addEventListener('DOMContentLoaded', function() {
    // Configurar botões "Saiba Mais" nos cards principais
    const cardButtons = document.querySelectorAll('.btn-saiba-mais');
    const cardIds = ['fungo-gigante', 'venus-retrogrado', 'buraco-negro', 'agua-supergelada', 'cerebro-humano', 'dna-compartilhado', 'infinito-primos', 'oceano-profundo', 'computacao-quantica'];
    
    cardButtons.forEach((button, index) => {
        if (cardIds[index]) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(cardIds[index]);
            });
        }
    });

    // Configurar botões "Saiba Mais" na seção "Mais Curiosidades"
    const moreButtons = document.querySelectorAll('.saiba-mais-btn');
    const moreIds = ['arvores-comunicacao', 'velocidade-luz', 'diamantes-espaciais', 'elementos-raros'];
    
    moreButtons.forEach((button, index) => {
        if (moreIds[index]) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(moreIds[index]);
            });
        }
    });

    // Partículas no hero
    const hero = document.querySelector('.hero');
    if (hero) {
        const colors = ['#9a00ff', '#00f6ff', '#00ffaa', '#ff00aa'];
        
        for (let i = 0; i < 80; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            const size = Math.random() * 6 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particle.style.zIndex = '1';
            
            const duration = Math.random() * 15 + 10;
            const delay = Math.random() * -20;
            particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
            
            hero.appendChild(particle);
        }
    }

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de hover nos cards de curiosidades
    const curiosidadeItems = document.querySelectorAll('.curiosidade-item');
    curiosidadeItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Controle do menu de aplicativos
    const appsButton = document.getElementById('apps-button');
    const appsContainer = document.getElementById('apps-container');
    
    if (appsButton && appsContainer) {
        appsButton.addEventListener('click', function(e) {
            e.stopPropagation();
            appsContainer.style.display = appsContainer.style.display === 'none' ? 'block' : 'none';
        });
        
        document.addEventListener('click', function(e) {
            if (!appsContainer.contains(e.target) && e.target !== appsButton) {
                appsContainer.style.display = 'none';
            }
        });
        
        appsContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Animação de digitação para o slogan
    const slogan = document.querySelector('.slogan');
    if (slogan) {
        const originalText = slogan.textContent;
        slogan.textContent = '';
        slogan.style.borderRight = '2px solid var(--azul)';
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                slogan.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
                // Efeito de piscar do cursor
                setTimeout(() => {
                    slogan.style.borderRight = 'none';
                }, 2000);
            }
        }, 100);
    }

    // Efeito parallax para o hero
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Observador de interseção para animar elementos ao rolar
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.curiosidade-item, .card').forEach(el => {
        observer.observe(el);
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Fechar modal clicando no overlay
    document.addEventListener('click', (e) => {
        if (e.target.id === 'curiosityModal') {
            closeModal();
        }
    });
});

// Adiciona animações CSS dinâmicas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.1; }
        50% { transform: translateY(-80px) translateX(20px) rotate(180deg); opacity: 0.6; }
        100% { transform: translateY(0) translateX(0) rotate(360deg); opacity: 0.1; }
    }
    
    .curiosidade-item, .card {
        --mouse-x: 50%;
        --mouse-y: 50%;
    }
    
    .curiosidade-item::after, .card::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0, 247, 255, 0.1), transparent 70%);
        opacity: 0;
        transition: opacity 0.3s;
        z-index: -1;
        pointer-events: none;
    }
    
    .curiosidade-item:hover::after, .card:hover::after {
        opacity: 1;
    }
    
    /* Animações ao aparecer na tela */
    .curiosidade-item, .card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .curiosidade-item.animate, .card.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Efeito de digitação */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }
    
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: var(--azul) }
    }
    
    /* Efeito de brilho neon */
    @keyframes neon-glow {
        0%, 100% { text-shadow: 0 0 5px var(--azul), 0 0 10px var(--azul), 0 0 20px var(--azul); }
        50% { text-shadow: 0 0 10px var(--azul), 0 0 20px var(--azul), 0 0 30px var(--azul); }
    }
    
    .logo h1 {
        animation: neon-glow 3s infinite alternate;
    }
`;
document.head.appendChild(style);

// Controle de áudio para efeitos sonoros (opcional)
function createAudioContext() {
    try {
        return new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        return null;
    }
}

const audioContext = createAudioContext();

function playSound(frequency, type, duration) {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    gainNode.gain.exponentialRampToValueAtTime(
        0.00001,
        audioContext.currentTime + duration
    );
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

// Efeitos sonoros para interações
document.querySelectorAll('.card, .curiosidade-item, .btn-explorar, .btn-saiba-mais, .saiba-mais-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        playSound(800, 'sine', 0.1);
    });
    
    el.addEventListener('click', () => {
        playSound(1200, 'square', 0.05);
    });
});

// Controle do tema (claro/escuro)
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌓';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.zIndex = '1000';
themeToggle.style.background = 'var(--roxo)';
themeToggle.style.color = 'white';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '50%';
themeToggle.style.width = '50px';
themeToggle.style.height = '50px';
themeToggle.style.cursor = 'pointer';
themeToggle.style.fontSize = '1.5rem';
themeToggle.style.display = 'flex';
themeToggle.style.alignItems = 'center';
themeToggle.style.justifyContent = 'center';
themeToggle.style.transition = 'all 0.3s ease';
themeToggle.style.boxShadow = '0 4px 15px rgba(0, 247, 255, 0.3)';

themeToggle.addEventListener('mouseenter', () => {
    themeToggle.style.transform = 'scale(1.1)';
    themeToggle.style.boxShadow = '0 6px 20px rgba(0, 247, 255, 0.5)';
});

themeToggle.addEventListener('mouseleave', () => {
    themeToggle.style.transform = 'scale(1)';
    themeToggle.style.boxShadow = '0 4px 15px rgba(0, 247, 255, 0.3)';
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = '🌓';
        localStorage.setItem('theme', 'dark');
    }
    
    // Efeito visual ao trocar tema
    themeToggle.style.transform = 'scale(1.2) rotate(180deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
});

// Verificar tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.textContent = '🌙';
}

document.body.appendChild(themeToggle);

// Estilos para tema claro
const themeStyle = document.createElement('style');
themeStyle.textContent = `
    .light-theme {
        --fundo: #f0f2f5;
        --fundo-card: #ffffff;
        --roxo: #7b2aff;
        --azul: #0066ff;
        --verde: #00c853;
        --destaque: #ff4081;
        color: #333;
    }
    
    .light-theme .card,
    .light-theme .curiosidade-item {
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        color: #333;
    }
    
    .light-theme .card p,
    .light-theme .curiosidade-descricao {
        color: #555;
    }
    
    .light-theme header {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        color: #333;
    }
    
    .light-theme .hero {
        background: linear-gradient(135deg, #f0f2f5, #e3f2fd);
    }
    
    .light-theme .modal-container {
        background: #ffffff;
        color: #333;
    }
    
    .light-theme .modal-content {
        color: #333;
    }
    
    .light-theme .modal-content h4 {
        color: var(--azul);
    }
    
    .light-theme .modal-sources {
        background: rgba(0, 102, 255, 0.1);
    }
    
    .light-theme .modal-sources li {
        color: #666;
    }
`;
document.head.appendChild(themeStyle);