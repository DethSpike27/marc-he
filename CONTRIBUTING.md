# 🤝 Guide de Contribution

Merci de vouloir contribuer au Programme de Marche Progressif ! 🎉

## 📋 Table des matières

- [Code de conduite](#code-de-conduite)
- [Comment contribuer](#comment-contribuer)
- [Standards de code](#standards-de-code)
- [Process de Pull Request](#process-de-pull-request)
- [Rapport de bugs](#rapport-de-bugs)
- [Suggestions de fonctionnalités](#suggestions-de-fonctionnalités)

---

## Code de conduite

Ce projet adopte un code de conduite pour assurer un environnement accueillant pour tous. En participant, tu t'engages à respecter ce code.

**Règles de base :**
- ✅ Sois respectueux et bienveillant
- ✅ Accepte les critiques constructives
- ✅ Focus sur ce qui est meilleur pour la communauté
- ❌ Pas de langage offensant ou d'attaques personnelles

---

## Comment contribuer

### 🐛 Rapporter un bug

1. Vérifie que le bug n'a pas déjà été reporté dans les [Issues](https://github.com/TON-USERNAME/programme-marche-progressif/issues)
2. Ouvre une nouvelle issue avec le template "Bug Report"
3. Inclus :
   - Description claire du problème
   - Étapes pour reproduire
   - Comportement attendu vs comportement actuel
   - Screenshots si applicable
   - Navigateur et version

### 💡 Suggérer une fonctionnalité

1. Vérifie que la fonctionnalité n'a pas déjà été suggérée
2. Ouvre une issue avec le template "Feature Request"
3. Explique :
   - Le problème que ça résout
   - La solution proposée
   - Des alternatives envisagées

### 🔧 Contribuer du code

1. **Fork** le repository
2. **Clone** ton fork localement
   ```bash
   git clone https://github.com/TON-USERNAME/programme-marche-progressif.git
   cd programme-marche-progressif
   ```

3. **Crée une branche** pour ta fonctionnalité
   ```bash
   git checkout -b feature/ma-super-feature
   ```

4. **Code** ta fonctionnalité
   - Suis les [standards de code](#standards-de-code)
   - Teste bien tout

5. **Commit** tes changements
   ```bash
   git add .
   git commit -m "feat: ajoute ma super feature"
   ```

6. **Push** vers ton fork
   ```bash
   git push origin feature/ma-super-feature
   ```

7. Ouvre une **Pull Request** sur le repo original

---

## Standards de code

### JavaScript

- ✅ Utilise `const` et `let` (pas `var`)
- ✅ Fonctions fléchées quand approprié
- ✅ Noms de variables descriptifs en camelCase
- ✅ Commentaires pour les parties complexes
- ✅ Évite les duplications de code

**Exemple :**
```javascript
// ✅ BON
const calculateCalories = (minutes, weightLbs) => {
    const caloriesPerMin = (weightLbs / 2.20462) * 0.029 * 5 / 60;
    return Math.round(minutes * caloriesPerMin);
};

// ❌ MAUVAIS
var calc = function(m, w) {
    return m * w * 0.1; // Aucun commentaire, formule floue
};
```

### HTML

- ✅ Indentation de 4 espaces
- ✅ IDs et classes descriptifs en kebab-case
- ✅ Attributs `aria-*` pour l'accessibilité
- ✅ Balises sémantiques (`<section>`, `<article>`, etc.)

**Exemple :**
```html
<!-- ✅ BON -->
<button id="start-timer-btn" aria-label="Démarrer le timer">
    ▶️ Démarrer
</button>

<!-- ❌ MAUVAIS -->
<div onclick="start()">Start</div>
```

### CSS (Tailwind)

- ✅ Classes Tailwind pour le styling
- ✅ Custom CSS uniquement si nécessaire
- ✅ Responsive mobile-first
- ✅ Dark mode supporté

### Structure des commits

Utilise [Conventional Commits](https://www.conventionalcommits.org/) :

```
feat: ajoute la fonctionnalité X
fix: corrige le bug Y
docs: met à jour le README
style: améliore le CSS
refactor: restructure le code Z
test: ajoute des tests
chore: met à jour les dépendances
```

**Exemples :**
```bash
git commit -m "feat: ajoute export PDF des statistiques"
git commit -m "fix: corrige le calcul de calories pour les kg"
git commit -m "docs: ajoute section contribution au README"
```

---

## Process de Pull Request

### Checklist avant de soumettre

- [ ] Mon code suit les standards du projet
- [ ] J'ai testé mes changements sur plusieurs navigateurs
- [ ] J'ai testé la version mobile
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] Mes commits suivent la convention Conventional Commits
- [ ] J'ai vérifié qu'il n'y a pas de console.log oubliés
- [ ] Le mode sombre fonctionne toujours
- [ ] La sync Firebase fonctionne toujours

### Processus de review

1. Un mainteneur reviewera ta PR sous 48-72h
2. Des changements peuvent être demandés
3. Une fois approuvée, ta PR sera merged ! 🎉

---

## Rapport de bugs

### Template de bug report

```markdown
**Description du bug**
Description claire du problème.

**Reproduction**
1. Va sur '...'
2. Clique sur '...'
3. Scroll vers '...'
4. Vois l'erreur

**Comportement attendu**
Ce qui devrait se passer.

**Screenshots**
Si applicable, ajoute des screenshots.

**Environnement:**
 - OS: [ex: Windows 11]
 - Navigateur: [ex: Chrome 120]
 - Version: [ex: 1.0.0]

**Informations supplémentaires**
Tout autre contexte utile.
```

---

## Suggestions de fonctionnalités

### Idées bienvenues

- 🌍 **i18n** : Traduction en plusieurs langues
- 📱 **PWA** : Installation comme app mobile
- 🎵 **Sons** : Sons personnalisables pour le timer
- 📊 **Graphiques** : Plus de visualisations
- 🏃 **Autres sports** : Vélo, natation, course...
- 🤝 **Social** : Partage de progression, défis entre amis
- 🌤️ **Météo** : Intégration API météo
- 📍 **GPS** : Tracking de parcours
- 💪 **Exercices** : Routines d'étirements

### Template de feature request

```markdown
**Problème à résoudre**
Décris le problème que cette feature résoudrait.

**Solution proposée**
Comment tu verrais la solution.

**Alternatives**
Autres approches considérées.

**Contexte additionnel**
Screenshots, mockups, exemples...
```

---

## 📞 Questions ?

Si tu as des questions, n'hésite pas à :
- Ouvrir une [Discussion](https://github.com/TON-USERNAME/programme-marche-progressif/discussions)
- Me contacter directement

---

**Merci pour ta contribution ! 🙌**
