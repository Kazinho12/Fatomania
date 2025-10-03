# FATOMANIA - Site de Curiosidades Científicas

## Overview
FATOMANIA is a Portuguese scientific curiosities website providing interactive content across various scientific topics. It features a dynamic content management system, user authentication via Firebase, and interactive dashboards, making scientific knowledge accessible and engaging. The project aims to deliver educational content in an interactive format, with a focus on modern web technologies and a responsive user experience.

## User Preferences
I prefer simple language and clear explanations. I want iterative development with frequent, small updates rather than large, infrequent ones. Please ask for my approval before making any major architectural changes or introducing new external dependencies. When implementing features, prioritize user experience and maintain consistency with the existing design language. Do not make changes to the existing file structure without explicit approval.

## System Architecture
The project utilizes a modern web stack consisting of HTML5, CSS3, and ES6 JavaScript for the frontend. Authentication is handled by Firebase Authentication with Google Sign-in. A Python HTTP server serves static files. The architecture supports dynamic content loading through Firestore, interactive dashboards for authenticated users, and a comprehensive content submission and administration system.

**UI/UX Decisions:**
- Modern, responsive design principles.
- Preservation of the Portuguese language and original branding.
- Consistent modal behavior and article viewing across sections.
- Dynamic content display for articles, quizzes, and multimedia.
- Certificate generation for quiz achievements.

**Technical Implementations:**
- **Firebase Integration:** Firebase Authentication for user management and Firestore for dynamic content storage.
- **Content Management:** Dedicated submission forms (e.g., `submit-news.html`, `submit-quiz.html`) and an `admin-panel.html` for centralized content administration.
- **Image Uploads:** Implemented using the `imgbb` API for direct client-side uploads, with a centralized utility (`js/upload-utils.js`).
- **Dynamic Content Sections:** Eight main "mania" sections (e.g., `newsmania-modern.html`, `quizmania-modern.html`) designed for dynamic content display and user interaction.
- **Client-Side Data Handling:** Fallback mechanisms for Firestore queries (client-side ordering when server-side indexes are unavailable) and dynamic filtering.
- **Module-based JavaScript:** Utilizing ES6 modules, with functions explicitly exposed to the `window` object for HTML `onclick` events.

**Feature Specifications:**
- Scientific articles and educational content.
- User authentication and personalized dashboards.
- Interactive quizzes with ranking systems.
- Dynamic news feeds, art galleries, and technology hubs.
- Submission forms for user-generated content.
- Lab tools and simulations (e.g., `lab/periotab.js`).
- WhatsApp integration for contact forms.

**System Design Choices:**
- **Frontend-only with Firebase Backend:** The application operates entirely on the client-side, accessing Firebase services (Auth, Firestore) directly from the browser.
- **Static File Serving:** A Python `http.server` is used for serving static assets, configured for Replit's autoscale deployment.
- **Absolute Paths:** All internal links and resource paths use absolute references.

## External Dependencies
- **Firebase:**
    - **Firebase Authentication:** For user sign-up, login, and session management.
    - **Firestore:** NoSQL cloud database for storing dynamic content (articles, quizzes, user profiles).
- **imgbb API:** Used for image uploads from client-side forms.
- **Python Standard Library:** Specifically, `http.server` for serving static files.

## Replit Environment Setup
**Date:** October 3, 2025

### Development Workflow
- **Workflow Name:** Static Server
- **Command:** `python -m http.server 5000 --bind 0.0.0.0`
- **Port:** 5000 (frontend)
- **Host:** 0.0.0.0 (required for Replit proxy/iframe access)

### Deployment Configuration
- **Deployment Type:** Autoscale
- **Run Command:** `python -m http.server 5000 --bind 0.0.0.0`
- **Build Command:** None (static files only)
- **Notes:** Autoscale deployment is used as the site is stateless with Firebase backend handling all dynamic data.

### Environment Requirements
- Python 3.11+ (http.server module)
- No package dependencies (uses CDN for Firebase and Font Awesome)
- Static file serving only

### Project Status
✅ Successfully imported and configured for Replit environment
✅ Development server running on port 5000
✅ Deployment configured for autoscale
✅ All frontend routes functional
✅ Firebase integration active
✅ Sistema de interações implementado e funcional
✅ Sistema de logging centralizado operacional
✅ Painel de administração criado com controle de acesso

## Atualizações Recentes (Outubro 2025)

### 1. Correção Crítica do Firebase ✅
**Data:** 03/10/2025
**Arquivo:** `firebase-config.js`

**Problema Identificado:** Funções `arrayRemove`, `arrayUnion` e `setDoc` não estavam sendo importadas do Firebase, causando erros em funcionalidades de interação.

**Solução Implementada:**
- Adicionadas importações das funções faltantes
- Exportadas no objeto global `window.firebaseDB`
- Todas as funcionalidades de interação agora funcionam corretamente

### 2. Sistema Mestre de Interações ✅
**Arquivos Criados:**
- `js/interactions-master.js` - Gerenciador central de todas as interações
- `js/favorites-modal.js` - Modal de visualização e gerenciamento de favoritos
- `js/init-interactions.js` - Inicializador unificado de todos os módulos

**Funcionalidades Implementadas:**
- **Likes:** Toggle de curtidas com persistência no Firestore
- **Comentários:** Sistema completo de comentários por artigo
- **Favoritos:** Adicionar/remover favoritos com modal de listagem
- **Compartilhamento:** Web Share API com fallback para clipboard
- **Visualizações:** Contador de views automático
- **Jogadas:** Contador de plays para quizzes e experimentos

**Integração:**
✅ newsmania-modern.html - Sistema completo de interações
✅ quizmania-modern.html - Contador de jogadas + favoritos
✅ labmania-modern.html - Preparado para tracking de visualizações

### 3. Modal de Favoritos ✅
**Arquivo:** `js/favorites-modal.js`

**Funcionalidades:**
- Lista todos os artigos favoritados pelo usuário
- Mostra detalhes: título, categoria, imagem
- Permite remover favoritos individualmente
- Abre artigos diretamente do modal
- Design responsivo e moderno

### 4. Sistema de Logging Centralizado ✅
**Arquivo:** `js/error-logger.js`

**Funcionalidades:**
- Captura automática de erros JavaScript globais
- Captura de promessas rejeitadas não tratadas
- Armazenamento duplo: localStorage + Firestore
- Níveis de log: ERROR, WARNING, INFO, DEBUG
- Funções exportadas globalmente para uso em qualquer página
- Metadados completos: timestamp, URL, userId, userAgent, stack trace

**APIs Disponíveis:**
```javascript
window.logError(errorData)    // Registrar erro
window.logWarning(warningData) // Registrar aviso
window.logInfo(infoData)       // Registrar informação
window.getFirebaseLogs(limit)  // Buscar logs do Firebase
window.getLogStats()           // Obter estatísticas
window.deleteLog(logId)        // Deletar log específico
window.clearOldLogs(days)      // Limpar logs antigos
window.clearAllLogs()          // Limpar todos os logs
```

### 5. Painel de Administração de Logs ✅
**Arquivo:** `admin-logs.html`
**URL:** `/admin-logs.html`

**Funcionalidades:**
- Dashboard com estatísticas de erros (total, por nível, últimas 24h)
- Visualização de logs com filtros por nível
- Busca e paginação (50/100/200/500 logs)
- Deletar logs individuais
- Limpar logs antigos (30+ dias)
- Limpar todos os logs (confirmação dupla)
- Design moderno com tema FATOMANIA

**Controle de Acesso:**
- ✅ Verificação de autenticação obrigatória
- ✅ Verificação de role='admin' no documento do usuário
- ✅ Redirecionamento automático de não-autorizados
- ⚠️ **REQUER configuração adicional para produção** (ver SECURITY_GUIDE.md)

### 6. Documentação de Segurança ✅
**Arquivo:** `SECURITY_GUIDE.md`

Documenta:
- Limitações de segurança do sistema atual
- Requisitos obrigatórios para ambiente de produção
- Exemplos de Firestore Security Rules
- Implementação de Custom Claims
- Migração para Cloud Functions
- Checklist completo de segurança

**⚠️ IMPORTANTE:** O painel admin atual usa controle de acesso client-side. Para produção, é **OBRIGATÓRIO** implementar:
1. Firestore Security Rules
2. Firebase Custom Claims
3. Cloud Functions para operações destrutivas

## Padrão de Integração de Interações

### Como adicionar interações em outras páginas mania:

**Passo 1:** Adicionar botão de favoritos no header
```html
<nav>
    <a onclick="window.openFavoritesModal?.()" style="cursor: pointer;">
        <i class="fas fa-bookmark"></i> Favoritos
    </a>
</nav>
```

**Passo 2:** Carregar sistema de interações
```html
<!-- Antes do fechamento do </body> -->
<script type="module" src="/js/init-interactions.js"></script>
```

**Passo 3:** Usar funções de interação
```javascript
// Abrir artigo com interações
window.openArticleWithInteractions(articleId, 'nome-colecao')

// Incrementar visualizações
window.incrementViews('nome-colecao', 'item-id')

// Incrementar jogadas (quiz/lab)
window.incrementPlays('quizzes', 'quiz-id')
```

## Próximos Passos

### Páginas Pendentes de Integração (10 páginas):
- [ ] sciencemania-modern.html
- [ ] techmania-modern.html
- [ ] spacemania-modern.html
- [ ] ecomania-modern.html
- [ ] sportmania-modern.html
- [ ] medmania-modern.html
- [ ] gamesmania-modern.html
- [ ] artmania-modern.html
- [ ] historymania-modern.html
- [ ] misticmania-modern.html

### Segurança (Para Produção):
- [ ] Implementar Firestore Security Rules
- [ ] Configurar Firebase Custom Claims
- [ ] Migrar operações destrutivas para Cloud Functions
- [ ] Auditoria de segurança completa
- [ ] Remover funções globais do error-logger.js
- [ ] Implementar rate limiting

### Melhorias Futuras:
- [ ] Sistema de notificações em tempo real
- [ ] Ranking de usuários mais ativos
- [ ] Badges e conquistas
- [ ] Comentários aninhados (respostas)
- [ ] Moderação de comentários
- [ ] Analytics de engajamento

## Arquivos Importantes

### Configuração e Autenticação:
- `firebase-config.js` - Configuração central do Firebase
- `logsin.html` - Página de login/cadastro
- `dashboard.html` - Dashboard principal do usuário

### Sistema de Interações:
- `js/interactions-master.js` - Gerenciador de interações
- `js/favorites-modal.js` - Modal de favoritos
- `js/init-interactions.js` - Inicializador
- `js/error-logger.js` - Sistema de logging

### Administração:
- `admin-logs.html` - Painel de logs (requer role='admin')
- `admin-panel.html` - Painel de administração de conteúdo

### Páginas Mania (Já Integradas):
- `mania/newsmania-modern.html` - Notícias científicas
- `mania/quizmania-modern.html` - Quizzes interativos
- `mania/labmania-modern.html` - Laboratórios virtuais

### Documentação:
- `SECURITY_GUIDE.md` - Guia de segurança completo
- `RELATORIO_AUDITORIA.md` - Relatório de auditoria e erros corrigidos

## Notas Técnicas

### Firebase Collections:
- `error-logs` - Logs de erros do sistema (NOVA)
- `users` - Dados e perfis de usuários
- `news-articles` - Artigos de notícias
- `quizzes` - Quizzes e perguntas
- `lab-articles` - Experimentos de laboratório
- `comments` - Comentários em artigos (NOVA)
- `notifications` - Notificações do sistema
- ... (outras coleções de artigos)

### Funções Globais Disponíveis:
```javascript
// Firebase
window.firebaseAuth
window.firebaseDB

// Interações
window.openFavoritesModal()
window.openArticleWithInteractions(id, collection)
window.incrementViews(collection, id)
window.incrementPlays(collection, id)
window.toggleLike(collection, id, title)
window.addComment(collection, id, text, author)
window.shareArticle(title, description, url)

// Logging
window.logError(data)
window.logWarning(data)
window.logInfo(data)
```

## Contato e Suporte
Para questões sobre segurança, consulte `SECURITY_GUIDE.md`
Para erros conhecidos e soluções, consulte `RELATORIO_AUDITORIA.md`