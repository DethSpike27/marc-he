# 🚀 Guide de mise en ligne sur GitHub

Ce document explique comment publier ton application sur GitHub étape par étape.

---

## 📋 Checklist avant publication

### ✅ Fichiers essentiels (tous créés !)

- [x] `README.md` - Documentation principale
- [x] `LICENSE` - Licence MIT
- [x] `.gitignore` - Fichiers à exclure
- [x] `CONTRIBUTING.md` - Guide pour contributeurs
- [x] `SECURITY.md` - Politique de sécurité
- [x] `CHANGELOG.md` - Historique des versions
- [x] Code source (`index.html`, `app.js`)

### 🔍 Vérifications

- [ ] Aucun secret ou mot de passe dans le code
- [ ] Firebase configuré (clé API publique = OK)
- [ ] Tous les fichiers sont UTF-8
- [ ] Pas de `console.log()` debug oublié
- [ ] L'app fonctionne en local
- [ ] Mode sombre fonctionne
- [ ] Responsive testé (mobile, tablette, desktop)

---

## 🎯 Étapes de publication

### 1. Créer un repository GitHub

1. Va sur [github.com](https://github.com)
2. Clique sur **"+"** → **"New repository"**
3. Remplis les infos :
   - **Repository name** : `programme-marche-progressif` (ou autre)
   - **Description** : "Application web de suivi de programme de marche progressif avec sync Firebase"
   - **Public** ou **Private** : À toi de choisir
   - **NE PAS** initialiser avec README (tu en as déjà un)
4. Clique **"Create repository"**

### 2. Initialiser Git localement

Ouvre PowerShell dans le dossier du projet :

```powershell
# Initialise le repository
git init

# Ajoute tous les fichiers
git add .

# Premier commit
git commit -m "feat: version initiale - Programme de Marche Progressif v1.0.0"

# Renomme la branche en 'main'
git branch -M main

# Ajoute l'origine GitHub (remplace par TON URL)
git remote add origin https://github.com/TON-USERNAME/programme-marche-progressif.git

# Push vers GitHub
git push -u origin main
```

### 3. Configurer GitHub Pages (optionnel)

Pour héberger l'app gratuitement sur GitHub Pages :

1. Va dans **Settings** du repo
2. Section **Pages** (menu gauche)
3. **Source** : Deploy from a branch
4. **Branch** : `main` → `/` (root)
5. Clique **Save**
6. Attends 1-2 minutes
7. Ton app sera accessible à : `https://TON-USERNAME.github.io/programme-marche-progressif/`

### 4. Ajouter des Topics

Dans le repo GitHub :
1. Clique sur ⚙️ à côté de "About"
2. Ajoute ces topics :
   - `javascript`
   - `firebase`
   - `tailwindcss`
   - `health`
   - `fitness`
   - `walking`
   - `progressive-web-app`
   - `single-page-app`
   - `chart-js`

### 5. Créer une Release

1. Va dans **Releases** → **Create a new release**
2. **Tag** : `v1.0.0`
3. **Title** : `v1.0.0 - Version initiale`
4. **Description** : Copie le contenu de [Unreleased] du CHANGELOG.md
5. Clique **Publish release**

---

## 🎨 Personnalisation recommandée

### README.md

Modifie ces sections avec tes infos :

```markdown
# Ligne 9 - Remplace le lien Demo
[Demo](#) → [Demo](https://ton-username.github.io/programme-marche-progressif/)

# Ligne 238 - Ajoute tes coordonnées
📧 Email : ton-email@example.com
🐦 Twitter : [@ton-twitter](https://twitter.com/ton-twitter)
💼 LinkedIn : [Ton Profil](https://linkedin.com/in/ton-profil)

# Ligne 186 - Remplace TON-USERNAME
https://github.com/TON-USERNAME/programme-marche-progressif/issues
```

### LICENSE

```
# Ligne 3 - Remplace par ton nom
Copyright (c) 2024 [Ton Nom] → Copyright (c) 2024 Marc-Antoine Dupuis
```

### SECURITY.md

```
# Ligne 20 - Ajoute un vrai email de sécurité
[ton-email-securite@example.com] → marc.antoine@example.com
```

---

## 📸 Ajouter des screenshots (recommandé)

Crée un dossier `/screenshots/` avec :

```
screenshots/
├── homepage.png       # Page d'accueil
├── timer.png          # Timer aller/retour
├── calendar.png       # Vue calendrier
├── stats.png          # Statistiques
├── badges.png         # Badges débloqués
├── profile.png        # Profil utilisateur
└── mobile.png         # Version mobile
```

Puis dans README.md, ajoute après le titre :

```markdown
## 📸 Screenshots

<div align="center">

![Homepage](screenshots/homepage.png)
*Interface principale avec progression*

![Timer](screenshots/timer.png)
*Timer aller/retour avec mi-temps*

![Stats](screenshots/stats.png)
*Graphiques et statistiques*

</div>
```

---

## 🔧 Configuration GitHub Repository

### Settings recommandés

1. **General**
   - ✅ Issues
   - ✅ Discussions (pour questions/feedback)
   - ❌ Wikis (pas nécessaire)
   - ❌ Projects (sauf si tu veux gérer des tâches)

2. **Branches**
   - Protège `main` :
     - ✅ Require pull request reviews
     - ✅ Require status checks to pass

3. **Actions**
   - Optionnel : Configure des GitHub Actions pour :
     - Vérifier le code à chaque commit
     - Déployer automatiquement sur GitHub Pages

### Labels recommandés

Crée ces labels dans **Issues** → **Labels** :

- 🐛 `bug` - rouge
- ✨ `enhancement` - bleu
- 📝 `documentation` - vert
- ❓ `question` - violet
- 🆘 `help wanted` - orange
- 🎉 `good first issue` - rose
- 🔒 `security` - rouge foncé

---

## 🌟 Promouvoir ton projet

### Sur GitHub

1. **Star ton propre projet** (ça montre que tu crois en lui !)
2. Partage le lien avec tes amis
3. Publie dans des communautés :
   - Reddit : r/webdev, r/javascript, r/SideProject
   - Twitter avec hashtags : #100DaysOfCode, #webdev
   - Dev.to : Écris un article sur ton projet

### SEO GitHub

Pour que ton projet soit bien référencé :

1. **Description claire** dans le repo
2. **Topics pertinents** (santé, fitness, marche...)
3. **README complet** avec mots-clés
4. **Release régulières**
5. **Issues actives** (réponds aux questions)

---

## 📊 Après publication

### Suivi

- **GitHub Insights** : Vois les stats (vues, clones, visiteurs)
- **Issues** : Réponds rapidement aux questions/bugs
- **Pull Requests** : Review et merge les contributions

### Maintenance

```bash
# Pull les derniers changements
git pull origin main

# Crée une branche pour une feature
git checkout -b feature/nouvelle-fonctionnalite

# Fais tes changements, puis :
git add .
git commit -m "feat: ajoute la fonctionnalité X"
git push origin feature/nouvelle-fonctionnalite

# Crée une Pull Request sur GitHub
# Merge après review
# Crée une nouvelle release si version majeure
```

---

## 🎯 Checklist finale

Avant de publier, vérifie que :

- [ ] Tous les liens dans README.md fonctionnent
- [ ] Les screenshots sont ajoutés (si applicable)
- [ ] Ton nom/email est correct dans LICENSE et SECURITY.md
- [ ] L'app fonctionne sur GitHub Pages
- [ ] Firebase fonctionne en prod
- [ ] Mode sombre fonctionne
- [ ] Responsive testé
- [ ] Aucun console.log ou TODO laissé
- [ ] Le CHANGELOG est à jour

---

## 🚀 Commandes Git utiles

```bash
# Vérifier le statut
git status

# Voir l'historique
git log --oneline

# Annuler le dernier commit (garde les changements)
git reset --soft HEAD~1

# Voir les différences
git diff

# Créer un tag de version
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0

# Mettre à jour depuis GitHub
git pull origin main

# Voir les branches
git branch -a
```

---

## 🆘 En cas de problème

### Firebase ne fonctionne pas en prod

1. Vérifie les **Firebase Rules** dans la console
2. Ajoute ton domaine GitHub Pages dans **Authorized domains** :
   - Firebase Console → Authentication → Settings → Authorized domains
   - Ajoute `ton-username.github.io`

### GitHub Pages ne s'affiche pas

1. Attends 2-3 minutes (propagation DNS)
2. Vide le cache du navigateur (Ctrl+Shift+R)
3. Vérifie **Settings → Pages** que c'est bien activé
4. Regarde les **Actions** pour voir si le build a réussi

### Problème de CORS

Si Firebase bloque les requêtes :
1. Firebase Console → Database → Rules
2. Change les règles pour autoriser ton domaine

---

**Tu es prêt à publier ! 🎉**

Si tu as des questions, n'hésite pas à consulter :
- [GitHub Docs](https://docs.github.com)
- [Firebase Docs](https://firebase.google.com/docs)
