
// Shared utilities for image upload and common functions
// imgbb API configuration
const IMGBB_API_KEY = '490019b11f119ad684399138b0226ff5';
const IMGBB_API_URL = 'https://api.imgbb.com/1/upload';

/**
 * Upload image to imgbb specifically for articles
 * @param {File} file - The image file to upload
 * @param {Function} progressCallback - Optional callback for progress updates
 * @returns {Promise<string>} - The URL of the uploaded image
 */
export async function uploadArticleImage(file, progressCallback = null) {
    return await uploadToImgbb(file, progressCallback, 'article');
}

/**
 * Upload image to imgbb specifically for news
 * @param {File} file - The image file to upload
 * @param {Function} progressCallback - Optional callback for progress updates
 * @returns {Promise<string>} - The URL of the uploaded image
 */
export async function uploadNewsImage(file, progressCallback = null) {
    return await uploadToImgbb(file, progressCallback, 'news');
}

/**
 * Upload image to imgbb specifically for quizzes
 * @param {File} file - The image file to upload
 * @param {Function} progressCallback - Optional callback for progress updates
 * @returns {Promise<string>} - The URL of the uploaded image
 */
export async function uploadQuizImage(file, progressCallback = null) {
    return await uploadToImgbb(file, progressCallback, 'quiz');
}

/**
 * Upload image to imgbb specifically for user profiles
 * @param {File} file - The image file to upload
 * @param {Function} progressCallback - Optional callback for progress updates
 * @returns {Promise<string>} - The URL of the uploaded image
 */
export async function uploadProfileImage(file, progressCallback = null) {
    return await uploadToImgbb(file, progressCallback, 'profile');
}

/**
 * Core upload function to imgbb
 * @param {File} file - The image file to upload
 * @param {Function} progressCallback - Optional callback for progress updates
 * @param {string} type - Type of upload (article, news, quiz, profile)
 * @returns {Promise<string>} - The URL of the uploaded image
 */
export async function uploadToImgbb(file, progressCallback = null, type = 'general') {
    if (!file) {
        throw new Error('Nenhum arquivo fornecido');
    }

    // Validate file type
    if (!file.type.match('image.*')) {
        throw new Error('O arquivo deve ser uma imagem válida (JPG, PNG, GIF, WebP)');
    }

    // Different size limits based on type
    const sizeLimits = {
        profile: 2 * 1024 * 1024, // 2MB for profiles
        article: 8 * 1024 * 1024, // 8MB for articles
        news: 8 * 1024 * 1024,    // 8MB for news
        quiz: 5 * 1024 * 1024,    // 5MB for quizzes
        general: 5 * 1024 * 1024  // 5MB default
    };

    const maxSize = sizeLimits[type] || sizeLimits.general;
    
    if (file.size > maxSize) {
        const maxSizeMB = Math.round(maxSize / (1024 * 1024));
        throw new Error(`A imagem deve ter menos de ${maxSizeMB}MB para ${type}`);
    }

    try {
        // Convert file to base64 with compression based on type
        const base64 = await fileToBase64(file, type);
        
        // Remove the data:image/...;base64, prefix
        const base64Data = base64.split(',')[1];

        // Create form data
        const formData = new FormData();
        formData.append('key', IMGBB_API_KEY);
        formData.append('image', base64Data);
        formData.append('name', `${type}_${Date.now()}`);

        // Upload to imgbb
        if (progressCallback) {
            progressCallback(50);
        }

        const response = await fetch(IMGBB_API_URL, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Falha no upload: ${response.statusText}`);
        }

        const data = await response.json();

        if (progressCallback) {
            progressCallback(100);
        }

        if (data.success && data.data && data.data.url) {
            return data.data.url;
        } else {
            throw new Error('Falha ao obter URL da imagem da resposta');
        }
    } catch (error) {
        console.error(`Erro ao fazer upload ${type}:`, error);
        throw error;
    }
}

/**
 * Convert file to base64 string with compression based on type
 * @param {File} file - The file to convert
 * @param {string} type - Type of upload for compression settings
 * @returns {Promise<string>} - Base64 encoded string
 */
function fileToBase64(file, type = 'general') {
    return new Promise((resolve, reject) => {
        // Validações iniciais mais robustas
        if (!file) {
            reject(new Error('Arquivo não fornecido'));
            return;
        }

        // Verificar se é realmente um File ou Blob
        if (!(file instanceof File) && !(file instanceof Blob)) {
            reject(new Error('O objeto fornecido não é um arquivo válido'));
            return;
        }

        // Verificar tipo de arquivo
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!file.type || !validTypes.some(type => file.type.toLowerCase().includes(type.split('/')[1]))) {
            reject(new Error('O arquivo deve ser uma imagem válida (JPG, PNG, GIF, WebP)'));
            return;
        }

        // Verificar tamanho
        if (file.size === 0) {
            reject(new Error('O arquivo está vazio'));
            return;
        }

        console.log('📁 Iniciando conversão para base64:', {
            name: file.name,
            type: file.type,
            size: file.size
        });

        const reader = new FileReader();
        
        reader.onload = function(e) {
            console.log('✅ FileReader carregou o arquivo');
            
            if (!e.target || !e.target.result) {
                reject(new Error('Falha ao ler o conteúdo do arquivo'));
                return;
            }

            const img = new Image();
            
            img.onload = function() {
                console.log('✅ Imagem carregada no elemento Image');
                
                try {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    if (!ctx) {
                        reject(new Error('Não foi possível criar contexto do canvas'));
                        return;
                    }

                    // Different compression settings based on type
                    const settings = {
                        profile: { maxSize: 150, quality: 0.8 },
                        article: { maxSize: 800, quality: 0.9 },
                        news: { maxSize: 800, quality: 0.9 },
                        quiz: { maxSize: 600, quality: 0.85 },
                        general: { maxSize: 600, quality: 0.85 }
                    };

                    const config = settings[type] || settings.general;
                    let { width, height } = img;

                    console.log('📐 Dimensões originais:', { width, height });

                    // Resize maintaining aspect ratio
                    if (width > height) {
                        if (width > config.maxSize) {
                            height = height * (config.maxSize / width);
                            width = config.maxSize;
                        }
                    } else {
                        if (height > config.maxSize) {
                            width = width * (config.maxSize / height);
                            height = config.maxSize;
                        }
                    }

                    console.log('📐 Dimensões redimensionadas:', { width, height });

                    canvas.width = width;
                    canvas.height = height;

                    // Draw and compress
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    // Determine output format based on input file type
                    let outputFormat = 'image/jpeg';
                    let quality = config.quality;
                    
                    const fileType = file.type.toLowerCase();
                    if (fileType === 'image/png' || fileType.includes('png')) {
                        outputFormat = 'image/png';
                        quality = 1;
                    } else if (fileType === 'image/webp' || fileType.includes('webp')) {
                        outputFormat = 'image/webp';
                    }
                    
                    console.log('🎨 Convertendo para:', outputFormat, 'qualidade:', quality);
                    
                    const base64 = canvas.toDataURL(outputFormat, quality);
                    
                    if (!base64 || base64 === 'data:,') {
                        reject(new Error('Falha ao converter imagem para base64'));
                        return;
                    }
                    
                    console.log('✅ Conversão para base64 concluída');
                    resolve(base64);
                } catch (error) {
                    console.error('❌ Erro no processamento da imagem:', error);
                    reject(new Error('Erro ao processar imagem: ' + error.message));
                }
            };

            img.onerror = (error) => {
                console.error('❌ Erro ao carregar imagem no elemento Image:', error);
                reject(new Error('Erro ao carregar imagem. Verifique se o arquivo é uma imagem válida e não está corrompida.'));
            };
            
            // Set image source
            try {
                img.src = e.target.result;
            } catch (error) {
                console.error('❌ Erro ao definir src da imagem:', error);
                reject(new Error('Erro ao processar dados da imagem'));
            }
        };

        reader.onerror = (error) => {
            console.error('❌ Erro no FileReader:', error);
            console.error('❌ Detalhes do erro:', {
                error: error,
                target: error.target,
                readyState: reader.readyState
            });
            reject(new Error('Erro ao ler arquivo. O arquivo pode estar corrompido ou inacessível.'));
        };

        reader.onabort = () => {
            console.error('❌ Leitura do arquivo foi abortada');
            reject(new Error('Leitura do arquivo foi cancelada'));
        };

        try {
            console.log('🔄 Iniciando leitura do arquivo...');
            reader.readAsDataURL(file);
        } catch (error) {
            console.error('❌ Erro ao iniciar leitura do arquivo:', error);
            reject(new Error('Não foi possível iniciar a leitura do arquivo: ' + error.message));
        }
    });
}

/**
 * Check Firebase collections and create if needed
 * @param {string} collectionName - Name of the collection to check
 * @returns {Promise<boolean>} - True if collection exists or was created
 */
export async function ensureFirebaseCollection(collectionName) {
    try {
        const testQuery = window.firebaseDB.collection(window.firebaseDB.db, collectionName);
        const snapshot = await window.firebaseDB.getDocs(window.firebaseDB.limit(testQuery, 1));
        
        console.log(`✅ Coleção '${collectionName}' verificada`);
        return true;
    } catch (error) {
        console.warn(`⚠️ Erro ao verificar coleção '${collectionName}':`, error);
        
        if (error.code === 'permission-denied' || error.code === 'failed-precondition') {
            try {
                // Try to create the collection with a sample document
                const sampleDoc = {
                    _initialized: true,
                    createdAt: new Date(),
                    type: 'initialization'
                };
                
                await window.firebaseDB.addDoc(
                    window.firebaseDB.collection(window.firebaseDB.db, collectionName),
                    sampleDoc
                );
                
                console.log(`✅ Coleção '${collectionName}' inicializada`);
                return true;
            } catch (initError) {
                console.error(`❌ Falha ao inicializar coleção '${collectionName}':`, initError);
                return false;
            }
        }
        
        return false;
    }
}

/**
 * Verify all required collections exist
 * @returns {Promise<Object>} - Status of all collections
 */
export async function verifyAllCollections() {
    const collections = [
        'news-articles',
        'science-articles', 
        'tech-articles',
        'space-articles',
        'history-articles',
        'eco-articles',
        'med-articles',
        'art-articles',
        'games-articles',
        'sports-articles',
        'mystic-articles',
        'lab-articles',
        'quizzes',
        'quiz-results',
        'quiz-scores',
        'users',
        'comments'
    ];

    const results = {};
    
    for (const collection of collections) {
        results[collection] = await ensureFirebaseCollection(collection);
    }

    return results;
}

/**
 * Format date to PT-BR format (internal use only)
 * @param {Date|string|Object} date - The date to format
 * @returns {string} - Formatted date string
 */
function formatDateInternal(date) {
    if (!date) return new Date().toLocaleDateString('pt-BR');
    
    try {
        let dateObj;
        
        if (date.seconds) {
            // Firebase Timestamp
            dateObj = new Date(date.seconds * 1000);
        } else if (typeof date === 'string') {
            dateObj = new Date(date);
        } else if (date instanceof Date) {
            dateObj = date;
        } else {
            dateObj = new Date();
        }
        
        if (isNaN(dateObj.getTime())) {
            return new Date().toLocaleDateString('pt-BR');
        }
        
        return dateObj.toLocaleDateString('pt-BR');
    } catch (error) {
        console.error('Erro ao formatar data:', error);
        return new Date().toLocaleDateString('pt-BR');
    }
}

/**
 * Show notification to user with specific styling for different types
 * @param {string} message - The message to display
 * @param {string} type - Type of notification (success, error, info, warning)
 * @param {number} duration - Duration in milliseconds (default: 4000)
 */
export function showNotification(message, type = 'info', duration = 4000) {
    // Remove existing notification
    const existingNotification = document.querySelector('.upload-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `upload-notification ${type}`;
    notification.textContent = message;

    // Add notification styles if not already present
    if (!document.getElementById('upload-notification-styles')) {
        const style = document.createElement('style');
        style.id = 'upload-notification-styles';
        style.textContent = `
            .upload-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 25px;
                border-radius: 10px;
                color: white;
                font-weight: 600;
                z-index: 10000;
                opacity: 0;
                transform: translateX(100%);
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                font-family: 'Rajdhani', sans-serif;
                max-width: 350px;
                word-wrap: break-word;
            }
            
            .upload-notification.show {
                opacity: 1;
                transform: translateX(0);
            }
            
            .upload-notification.success {
                background: linear-gradient(135deg, #00e676, #00c853);
            }
            
            .upload-notification.error {
                background: linear-gradient(135deg, #ff3d00, #d32f2f);
            }
            
            .upload-notification.warning {
                background: linear-gradient(135deg, #ffc107, #ff9800);
            }
            
            .upload-notification.info {
                background: linear-gradient(135deg, #00f7ff, #00b8d4);
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Remove notification after specified duration
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, duration);
}

/**
 * Create and show progress bar specifically for uploads
 * @param {number} progress - Progress percentage (0-100)
 * @param {string} message - Progress message
 * @returns {HTMLElement} - The progress bar element
 */
export function showUploadProgress(progress, message = 'Enviando...') {
    let progressBar = document.getElementById('upload-progress-indicator');
    
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'upload-progress-indicator';
        progressBar.innerHTML = `
            <div class="upload-progress-container">
                <div class="upload-progress-bar">
                    <div class="upload-progress-fill"></div>
                </div>
                <div class="upload-progress-text">0%</div>
                <div class="upload-progress-message">Preparando...</div>
            </div>
        `;
        
        // Add styles if not present
        if (!document.getElementById('upload-progress-styles')) {
            const style = document.createElement('style');
            style.id = 'upload-progress-styles';
            style.textContent = `
                #upload-progress-indicator {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(15, 12, 41, 0.95);
                    padding: 30px;
                    border-radius: 15px;
                    border: 2px solid #00f7ff;
                    box-shadow: 0 0 30px rgba(0, 247, 255, 0.3);
                    z-index: 10001;
                    min-width: 300px;
                    font-family: 'Rajdhani', sans-serif;
                }
                
                .upload-progress-container {
                    text-align: center;
                }
                
                .upload-progress-bar {
                    width: 100%;
                    height: 30px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 15px;
                    overflow: hidden;
                    margin-bottom: 15px;
                }
                
                .upload-progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #00f7ff, #6a00ff);
                    transition: width 0.3s ease;
                    width: 0%;
                }
                
                .upload-progress-text {
                    color: #00f7ff;
                    font-weight: 700;
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                }
                
                .upload-progress-message {
                    color: #ffffff;
                    font-size: 1rem;
                    opacity: 0.8;
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(progressBar);
    }
    
    const fill = progressBar.querySelector('.upload-progress-fill');
    const text = progressBar.querySelector('.upload-progress-text');
    const messageEl = progressBar.querySelector('.upload-progress-message');
    
    if (fill) fill.style.width = `${progress}%`;
    if (text) text.textContent = `${Math.round(progress)}%`;
    if (messageEl) messageEl.textContent = message;
    
    if (progress >= 100) {
        setTimeout(() => {
            if (document.body.contains(progressBar)) {
                document.body.removeChild(progressBar);
            }
        }, 1500);
    }
    
    return progressBar;
}
