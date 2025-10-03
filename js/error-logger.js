/**
 * SISTEMA DE LOGGING CENTRALIZADO - FATOMANIA
 * Captura, armazena e gerencia erros da aplicação
 */

// Configurações do logger
const LOG_CONFIG = {
    enableConsoleLog: true,
    enableFirebaseLog: true,
    maxLocalLogs: 100,
    logLevels: {
        ERROR: 'error',
        WARNING: 'warning',
        INFO: 'info',
        DEBUG: 'debug'
    }
};

// Armazenamento local de logs (fallback)
let localLogs = [];

/**
 * Inicializar sistema de logging
 */
export function initErrorLogger() {
    // Capturar erros globais
    window.addEventListener('error', (event) => {
        logError({
            type: 'JavaScript Error',
            message: event.message,
            stack: event.error?.stack,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            timestamp: new Date().toISOString()
        });
    });

    // Capturar promessas rejeitadas
    window.addEventListener('unhandledrejection', (event) => {
        logError({
            type: 'Unhandled Promise Rejection',
            message: event.reason?.message || String(event.reason),
            stack: event.reason?.stack,
            timestamp: new Date().toISOString()
        });
    });

    console.log('✅ Sistema de logging inicializado');
}

/**
 * Registrar erro
 */
export async function logError(errorData) {
    const logEntry = {
        id: generateLogId(),
        level: LOG_CONFIG.logLevels.ERROR,
        ...errorData,
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: window.firebaseAuth?.auth?.currentUser?.uid || 'anonymous',
        timestamp: errorData.timestamp || new Date().toISOString()
    };

    // Log no console (desenvolvimento)
    if (LOG_CONFIG.enableConsoleLog) {
        console.error('🔴 [ERROR LOG]:', logEntry);
    }

    // Armazenar localmente
    addToLocalLogs(logEntry);

    // Armazenar no Firebase
    if (LOG_CONFIG.enableFirebaseLog) {
        try {
            await saveToFirebase(logEntry);
        } catch (error) {
            console.error('Falha ao salvar log no Firebase:', error);
        }
    }

    return logEntry;
}

/**
 * Registrar aviso
 */
export async function logWarning(warningData) {
    const logEntry = {
        id: generateLogId(),
        level: LOG_CONFIG.logLevels.WARNING,
        ...warningData,
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: window.firebaseAuth?.auth?.currentUser?.uid || 'anonymous',
        timestamp: warningData.timestamp || new Date().toISOString()
    };

    if (LOG_CONFIG.enableConsoleLog) {
        console.warn('⚠️ [WARNING LOG]:', logEntry);
    }

    addToLocalLogs(logEntry);

    if (LOG_CONFIG.enableFirebaseLog) {
        try {
            await saveToFirebase(logEntry);
        } catch (error) {
            console.error('Falha ao salvar aviso no Firebase:', error);
        }
    }

    return logEntry;
}

/**
 * Registrar informação
 */
export async function logInfo(infoData) {
    const logEntry = {
        id: generateLogId(),
        level: LOG_CONFIG.logLevels.INFO,
        ...infoData,
        url: window.location.href,
        userId: window.firebaseAuth?.auth?.currentUser?.uid || 'anonymous',
        timestamp: infoData.timestamp || new Date().toISOString()
    };

    if (LOG_CONFIG.enableConsoleLog) {
        console.info('ℹ️ [INFO LOG]:', logEntry);
    }

    addToLocalLogs(logEntry);

    if (LOG_CONFIG.enableFirebaseLog) {
        try {
            await saveToFirebase(logEntry);
        } catch (error) {
            console.error('Falha ao salvar info no Firebase:', error);
        }
    }

    return logEntry;
}

/**
 * Salvar log no Firebase
 */
async function saveToFirebase(logEntry) {
    try {
        await window.firebaseDB.addDoc(
            window.firebaseDB.collection(window.firebaseDB.db, 'error-logs'),
            logEntry
        );
    } catch (error) {
        console.error('Erro ao salvar log no Firebase:', error);
        throw error;
    }
}

/**
 * Adicionar ao armazenamento local
 */
function addToLocalLogs(logEntry) {
    localLogs.unshift(logEntry);
    
    // Manter apenas os últimos N logs
    if (localLogs.length > LOG_CONFIG.maxLocalLogs) {
        localLogs = localLogs.slice(0, LOG_CONFIG.maxLocalLogs);
    }
    
    // Salvar no localStorage
    try {
        localStorage.setItem('fatomania-logs', JSON.stringify(localLogs));
    } catch (error) {
        console.error('Erro ao salvar logs localmente:', error);
    }
}

/**
 * Obter logs locais
 */
export function getLocalLogs() {
    try {
        const stored = localStorage.getItem('fatomania-logs');
        if (stored) {
            localLogs = JSON.parse(stored);
        }
    } catch (error) {
        console.error('Erro ao carregar logs locais:', error);
    }
    return localLogs;
}

/**
 * Obter logs do Firebase
 */
export async function getFirebaseLogs(limit = 50, level = null) {
    try {
        let q;
        
        if (level) {
            q = window.firebaseDB.query(
                window.firebaseDB.collection(window.firebaseDB.db, 'error-logs'),
                window.firebaseDB.where('level', '==', level),
                window.firebaseDB.orderBy('timestamp', 'desc'),
                window.firebaseDB.limit(limit)
            );
        } else {
            q = window.firebaseDB.query(
                window.firebaseDB.collection(window.firebaseDB.db, 'error-logs'),
                window.firebaseDB.orderBy('timestamp', 'desc'),
                window.firebaseDB.limit(limit)
            );
        }

        const snapshot = await window.firebaseDB.getDocs(q);
        const logs = [];
        
        snapshot.forEach((doc) => {
            logs.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return logs;
    } catch (error) {
        console.error('Erro ao carregar logs do Firebase:', error);
        return [];
    }
}

/**
 * Limpar logs antigos
 */
export async function clearOldLogs(daysOld = 30) {
    try {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - daysOld);
        const cutoffTimestamp = cutoffDate.toISOString();

        const q = window.firebaseDB.query(
            window.firebaseDB.collection(window.firebaseDB.db, 'error-logs'),
            window.firebaseDB.where('timestamp', '<', cutoffTimestamp)
        );

        const snapshot = await window.firebaseDB.getDocs(q);
        let deletedCount = 0;

        const deletePromises = [];
        snapshot.forEach((doc) => {
            deletePromises.push(
                window.firebaseDB.deleteDoc(
                    window.firebaseDB.doc(window.firebaseDB.db, 'error-logs', doc.id)
                )
            );
            deletedCount++;
        });

        await Promise.all(deletePromises);
        console.log(`✅ ${deletedCount} logs antigos removidos`);
        return deletedCount;
    } catch (error) {
        console.error('Erro ao limpar logs antigos:', error);
        return 0;
    }
}

/**
 * Deletar log específico
 */
export async function deleteLog(logId) {
    try {
        await window.firebaseDB.deleteDoc(
            window.firebaseDB.doc(window.firebaseDB.db, 'error-logs', logId)
        );
        console.log(`✅ Log ${logId} removido`);
        return true;
    } catch (error) {
        console.error('Erro ao deletar log:', error);
        return false;
    }
}

/**
 * Limpar todos os logs (usar com cuidado!)
 */
export async function clearAllLogs() {
    try {
        const q = window.firebaseDB.query(
            window.firebaseDB.collection(window.firebaseDB.db, 'error-logs')
        );

        const snapshot = await window.firebaseDB.getDocs(q);
        let deletedCount = 0;

        const deletePromises = [];
        snapshot.forEach((doc) => {
            deletePromises.push(
                window.firebaseDB.deleteDoc(
                    window.firebaseDB.doc(window.firebaseDB.db, 'error-logs', doc.id)
                )
            );
            deletedCount++;
        });

        await Promise.all(deletePromises);
        
        // Limpar logs locais também
        localLogs = [];
        localStorage.removeItem('fatomania-logs');
        
        console.log(`✅ Todos os ${deletedCount} logs foram removidos`);
        return deletedCount;
    } catch (error) {
        console.error('Erro ao limpar todos os logs:', error);
        return 0;
    }
}

/**
 * Gerar ID único para log
 */
function generateLogId() {
    return `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Obter estatísticas de logs
 */
export async function getLogStats() {
    try {
        const logs = await getFirebaseLogs(1000); // Pegar últimos 1000 logs
        
        const stats = {
            total: logs.length,
            byLevel: {
                error: 0,
                warning: 0,
                info: 0,
                debug: 0
            },
            last24h: 0,
            last7days: 0
        };

        const now = new Date();
        const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        logs.forEach(log => {
            // Contar por nível
            if (log.level in stats.byLevel) {
                stats.byLevel[log.level]++;
            }

            // Contar por período
            const logDate = new Date(log.timestamp);
            if (logDate > oneDayAgo) {
                stats.last24h++;
            }
            if (logDate > sevenDaysAgo) {
                stats.last7days++;
            }
        });

        return stats;
    } catch (error) {
        console.error('Erro ao obter estatísticas:', error);
        return null;
    }
}

// Exportar funções globalmente
window.logError = logError;
window.logWarning = logWarning;
window.logInfo = logInfo;
window.getLocalLogs = getLocalLogs;
window.getFirebaseLogs = getFirebaseLogs;
window.clearOldLogs = clearOldLogs;
window.deleteLog = deleteLog;
window.clearAllLogs = clearAllLogs;
window.getLogStats = getLogStats;

// Auto-inicializar
if (typeof window !== 'undefined') {
    initErrorLogger();
}

export default {
    initErrorLogger,
    logError,
    logWarning,
    logInfo,
    getLocalLogs,
    getFirebaseLogs,
    clearOldLogs,
    deleteLog,
    clearAllLogs,
    getLogStats
};
