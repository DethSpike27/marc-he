# 🔒 Politique de Sécurité

## Versions supportées

| Version | Support         |
| ------- | --------------- |
| 1.0.x   | ✅ Supportée    |
| < 1.0   | ❌ Non supportée |

---

## 🛡️ Rapporter une vulnérabilité

La sécurité de nos utilisateurs est notre priorité. Si tu découvres une vulnérabilité de sécurité, **ne l'expose pas publiquement**.

### Process de rapport

1. **NE PAS** ouvrir une issue publique
2. **Envoie un email** à : [ton-email-securite@example.com]
3. Inclus dans ton rapport :
   - Description de la vulnérabilité
   - Étapes pour reproduire
   - Impact potentiel
   - Suggestions de correction si tu en as

### Ce que tu peux attendre

- **Accusé de réception** sous 48h
- **Évaluation initiale** sous 7 jours
- **Mise à jour régulière** sur le statut
- **Crédit public** dans le changelog (si tu le souhaites)

---

## 🔐 Pratiques de sécurité

### Firebase

L'application utilise Firebase avec une clé API publique. C'est **sécurisé** car :
- ✅ La clé API Firebase est **conçue** pour être publique
- ✅ Les règles de sécurité Firebase protègent les données
- ✅ L'authentification Google est requise pour accéder aux données
- ✅ Chaque utilisateur ne peut accéder qu'à ses propres données

**Règles Firebase appliquées :**
```json
{
  "rules": {
    "walking-program": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

### localStorage

- Les données locales sont stockées dans le navigateur
- Aucune donnée sensible (pas de mots de passe)
- Synchronisation chiffrée via Firebase

### Authentification

- OAuth 2.0 via Google
- Aucun mot de passe stocké dans l'app
- Token géré par Firebase SDK

---

## ⚠️ Problèmes de sécurité connus

Aucun pour l'instant. Dernière mise à jour : 2024-12-19

---

## 📋 Checklist de sécurité pour les contributeurs

Avant de soumettre du code, vérifie que :

- [ ] Aucune clé API privée n'est committée
- [ ] Aucun secret dans le code
- [ ] Validation des inputs utilisateur
- [ ] Pas de XSS possible
- [ ] Pas d'injection de code
- [ ] Les dépendances sont à jour
- [ ] Pas de console.log avec des données sensibles

---

## 🔍 Audits de sécurité

Nous encourageons les audits de sécurité indépendants. Si tu souhaites effectuer un audit :

1. Contacte-nous d'abord
2. Documente tes findings
3. Partage-les de manière responsable

---

## 🏆 Hall of Fame

Merci aux chercheurs en sécurité qui ont contribué :

- *Aucun pour l'instant - sois le premier !*

---

**Merci de nous aider à garder cette application sécurisée ! 🛡️**
