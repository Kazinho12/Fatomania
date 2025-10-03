# GUIA DE SEGURANÇA - FATOMANIA

## ⚠️ IMPORTANTE: Configuração de Segurança Obrigatória para Produção

O sistema de logs implementado possui controles de acesso no client-side, mas **REQUER** configuração adicional de segurança no Firebase para produção.

## 1. Regras de Segurança do Firestore (OBRIGATÓRIO)

### Adicionar ao Firebase Console > Firestore > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Função helper para verificar se usuário é admin
    function isAdmin() {
      return request.auth != null && 
             request.auth.token.admin == true;
    }
    
    // Função helper para verificar se usuário é autenticado
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // PROTEÇÃO DA COLEÇÃO DE LOGS DE ERROS
    match /error-logs/{logId} {
      // Apenas admins podem LER logs
      allow read: if isAdmin();
      
      // Apenas o sistema pode CRIAR logs (via app autenticado)
      allow create: if isAuthenticated();
      
      // Apenas admins podem DELETAR logs
      allow delete: if isAdmin();
      
      // Ninguém pode ATUALIZAR logs (imutáveis)
      allow update: if false;
    }
    
    // PROTEÇÃO DO DOCUMENTO DE USUÁRIO
    match /users/{userId} {
      // Usuários podem ler seu próprio documento
      allow read: if request.auth.uid == userId || isAdmin();
      
      // Usuários podem atualizar APENAS seus próprios dados
      // MAS NÃO podem alterar o campo 'role'
      allow update: if request.auth.uid == userId && 
                      !request.resource.data.diff(resource.data).affectedKeys().hasAny(['role']);
      
      // Apenas admins podem criar usuários
      allow create: if isAdmin();
      
      // Apenas admins podem deletar usuários
      allow delete: if isAdmin();
    }
    
    // Outras coleções...
    match /news-articles/{articleId} {
      allow read: if true;
      allow write: if isAuthenticated();
    }
    
    // ... adicionar regras para todas as outras coleções
  }
}
```

## 2. Implementar Custom Claims (Recomendado)

### Usando Firebase Admin SDK (Node.js/Cloud Functions):

```javascript
const admin = require('firebase-admin');

// Conceder permissão de admin a um usuário
async function setAdminClaim(uid) {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log(`✅ Permissão de admin concedida para: ${uid}`);
  } catch (error) {
    console.error('Erro ao definir custom claim:', error);
  }
}

// Revogar permissão de admin
async function removeAdminClaim(uid) {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: false });
    console.log(`✅ Permissão de admin removida para: ${uid}`);
  } catch (error) {
    console.error('Erro ao remover custom claim:', error);
  }
}
```

### No Client-Side (atualizar admin-logs.html):

```javascript
async function checkAdminAccess() {
  return new Promise((resolve) => {
    window.firebaseAuth.onAuthStateChanged(window.firebaseAuth.auth, async (user) => {
      if (!user) {
        alert('⛔ Acesso negado!');
        window.location.href = '/logsin.html';
        return;
      }

      // Verificar custom claim de admin
      const token = await user.getIdTokenResult();
      if (!token.claims.admin) {
        alert('⛔ Você não tem permissões de administrador.');
        window.location.href = '/dashboard.html';
        return;
      }

      resolve(true);
    });
  });
}
```

## 3. Migrar Operações Destrutivas para Cloud Functions (Ideal)

### Criar Cloud Functions protegidas:

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Deletar log (apenas admins)
exports.deleteLog = functions.https.onCall(async (data, context) => {
  // Verificar autenticação
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Usuário não autenticado');
  }

  // Verificar permissão de admin
  if (!context.auth.token.admin) {
    throw new functions.https.HttpsError('permission-denied', 'Apenas admins podem deletar logs');
  }

  const { logId } = data;
  
  try {
    await admin.firestore().collection('error-logs').doc(logId).delete();
    return { success: true, message: 'Log deletado com sucesso' };
  } catch (error) {
    throw new functions.https.HttpsError('internal', error.message);
  }
});

// Limpar todos os logs (apenas admins)
exports.clearAllLogs = functions.https.onCall(async (data, context) => {
  if (!context.auth || !context.auth.token.admin) {
    throw new functions.https.HttpsError('permission-denied', 'Acesso negado');
  }

  try {
    const snapshot = await admin.firestore().collection('error-logs').get();
    const batch = admin.firestore().batch();
    
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    
    await batch.commit();
    return { success: true, deletedCount: snapshot.size };
  } catch (error) {
    throw new functions.https.HttpsError('internal', error.message);
  }
});
```

### No Client-Side (chamar Cloud Functions):

```javascript
// Deletar log via Cloud Function
async function deleteLogSecure(logId) {
  const deleteLogFunction = window.firebaseFunctions.httpsCallable(
    window.firebaseFunctions.functions, 
    'deleteLog'
  );
  
  try {
    const result = await deleteLogFunction({ logId });
    console.log(result.data.message);
  } catch (error) {
    console.error('Erro ao deletar log:', error);
  }
}
```

## 4. Estado Atual vs. Estado Ideal

### ✅ Implementado Atualmente:
- Verificação de autenticação no client-side
- Verificação de role='admin' no documento do usuário
- Redirecionamento de usuários não autorizados
- Sistema de logging funcional
- Interface de administração

### ⚠️ Pendente para Produção:
- [ ] Firestore Security Rules configuradas
- [ ] Custom Claims implementados (admin via token)
- [ ] Cloud Functions para operações destrutivas
- [ ] Auditoria de segurança completa

## 5. Checklist de Segurança para Produção

- [ ] Implementar Firestore Security Rules conforme documentado
- [ ] Configurar Custom Claims usando Firebase Admin SDK
- [ ] Migrar operações destrutivas (delete, clear) para Cloud Functions
- [ ] Testar acesso não autorizado e verificar bloqueio
- [ ] Remover funções globalmente exportadas do error-logger.js
- [ ] Implementar rate limiting para operações de log
- [ ] Configurar alerts para atividades suspeitas
- [ ] Realizar auditoria de segurança completa

## 6. Riscos de Segurança Conhecidos (Ambiente Atual)

⚠️ **ALTO RISCO:**
1. Usuários autenticados podem potencialmente editar seu campo 'role' no Firestore
2. Operações destrutivas são executadas diretamente do client
3. Funções de gerenciamento de logs são globalmente acessíveis

⚠️ **MÉDIO RISCO:**
4. Sem rate limiting para operações de log
5. Sem auditoria de quem deletou/modificou logs

## 7. Notas Importantes

- Este sistema foi desenvolvido para **ambiente de desenvolvimento/demonstração**
- Para **ambiente de produção**, as implementações de segurança listadas acima são **OBRIGATÓRIAS**
- Nunca coloque este sistema em produção sem implementar as medidas de segurança adequadas
- Consulte um especialista em segurança Firebase antes do deploy em produção

## 8. Contato e Suporte

Para dúvidas sobre implementação de segurança:
- Documentação Firebase Security Rules: https://firebase.google.com/docs/firestore/security/get-started
- Documentação Custom Claims: https://firebase.google.com/docs/auth/admin/custom-claims
- Documentação Cloud Functions: https://firebase.google.com/docs/functions

---

**AVISO LEGAL:** O desenvolvedor não se responsabiliza por uso inadequado ou deploy em produção sem as devidas medidas de segurança implementadas.
