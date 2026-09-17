# 🚶 Programme de Marche Progressif

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)

Une application web moderne pour suivre ton programme de marche progressif, protéger tes articulations et améliorer ton cardio.

[Demo](#) • [Fonctionnalités](#-fonctionnalités) • [Installation](#-installation) • [Utilisation](#-utilisation)

</div>

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Structure du projet](#-structure-du-projet)
- [Contribution](#-contribution)
- [License](#-license)

---

## 🎯 À propos

**Programme de Marche Progressif** est une application web complète conçue pour accompagner les personnes qui souhaitent améliorer leur condition physique par la marche, tout en protégeant leur dos et leurs genoux.

### Pourquoi cette app ?

- 🦴 **Protection articulaire** : Programme progressif adapté pour éviter les blessures
- ❤️ **Santé cardiovasculaire** : Amélioration progressive du cardio
- 📊 **Suivi détaillé** : Calendrier, statistiques, badges de progression
- ☁️ **Synchronisation cloud** : Tes données suivent sur tous tes appareils
- 📱 **100% Responsive** : Fonctionne sur mobile, tablette et ordinateur

---

## ✨ Fonctionnalités

### 📋 Programme de 8 semaines
- **Progression adaptée** : 15 → 20 → 25 → 30 minutes
- **Sélection des jours** : Choisis tes 3 jours de marche par semaine
- **Mode maintien** : Continue indéfiniment après les 8 semaines
- **Notes par séance** : Enregistre tes ressentis, douleurs, météo

### ⏱️ Timer Aller/Retour
- **Mi-temps automatique** : Alerte sonore pour faire demi-tour
- **Indicateur visuel** : Phase ALLER (bleu) / RETOUR (violet)
- **Barre de progression** : Suivi en temps réel
- **Compteur de calories** : Basé sur ton poids personnalisé

### 📅 Calendrier & Historique
- **Vue mensuelle** : Visualise tes séances complétées
- **Navigation temporelle** : Parcours ton historique
- **Pastilles colorées** : Repère rapidement tes jours de marche

### 📊 Statistiques
- **Graphique 30 jours** : Évolution de tes minutes de marche
- **Métriques clés** : Total séances, minutes cumulées, calories brûlées
- **Chart.js** : Graphiques interactifs et élégants

### 🏆 Système de Badges
- **9 badges à débloquer** : Premier Pas, Régularité, Champion, Légende...
- **Progression visuelle** : Barre de progression pour chaque badge
- **Notifications** : Popup à chaque nouveau badge débloqué

### 👤 Profil Personnalisé
- **Informations** : Nom, poids, taille, âge, objectif
- **Unités flexibles** : lb/kg pour le poids, cm/pieds pour la taille
- **Calculs automatiques** : IMC, calories/minute personnalisées
- **Multi-utilisateurs** : Partage l'app avec ta famille

### ☁️ Synchronisation Firebase
- **Connexion Google** : Authentification sécurisée
- **Sync automatique** : Toutes tes données sauvegardées en temps réel
- **Multi-appareils** : Accède depuis n'importe où
- **Merge intelligent** : Combine les données locales et cloud

### 🎨 Thème & Accessibilité
- **Mode sombre/clair** : Toggle facile, synchronisé
- **Design moderne** : Tailwind CSS, gradients élégants
- **Responsive** : Adapté à tous les écrans
- **Performance** : Application ultra-rapide, 0 dépendance serveur

### 💡 Règles d'or & Conseils
- **Test de la parole** : Rythme adapté
- **Règle de la douleur** : Prévention des blessures
- **Choix du terrain** : Conseils pour protéger les articulations
- **Routine anti-bureau** : Échauffement de 2 minutes

---

## 🛠 Technologies

- **Frontend** : HTML5, CSS3, JavaScript (Vanilla)
- **UI Framework** : Tailwind CSS (via CDN)
- **Graphiques** : Chart.js
- **Backend** : Firebase (Auth + Realtime Database)
- **Storage** : localStorage + Firebase Sync
- **Notifications** : Web Notifications API

---

## 🚀 Installation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Connexion internet (pour Tailwind CSS, Chart.js et Firebase)

### Installation locale

1. **Clone le repository**
```bash
git clone https://github.com/TON-USERNAME/programme-marche-progressif.git
cd programme-marche-progressif
```

2. **Ouvre l'application**
```bash
# Ouvre simplement index.html dans ton navigateur
# Ou utilise un serveur local :
python -m http.server 8000
# Puis ouvre http://localhost:8000
```

3. **C'est tout !** 🎉
   - Aucune installation npm/node requise
   - Aucune compilation nécessaire
   - Fonctionne immédiatement

### Configuration Firebase (optionnel)

Si tu veux utiliser ta propre base Firebase :

1. Crée un projet sur [Firebase Console](https://console.firebase.google.com/)
2. Active **Authentication** (Google Sign-In)
3. Active **Realtime Database**
4. Remplace les credentials dans `index.html` (lignes 17-25)

---

## 📖 Utilisation

### Première utilisation

1. **Configure ton profil** (popup automatique)
   - Nom, poids, taille, objectif
   - Ou configure plus tard dans l'onglet "Profil"

2. **Choisis tes jours de marche**
   - Sélectionne 3 jours par semaine
   - Personnalisable pour chaque période (semaines 1-2, 3-4, etc.)

3. **Coche tes séances**
   - Marque chaque séance complétée
   - Ajoute des notes si besoin (📝)

4. **Utilise le timer**
   - Démarre ton chrono aller/retour
   - Fais demi-tour à la mi-temps (alerte sonore 🔔)

### Synchronisation Google

1. Clique sur **"🔑 Se connecter"**
2. Choisis ton compte Google
3. Toutes tes données sont maintenant synchronisées ! ☁️

### Raccourcis clavier

- Aucun pour l'instant (app 100% tactile/souris)

---

## 📁 Structure du projet

```
programme-marche-progressif/
├── index.html          # Page principale
├── app.js              # Logique JavaScript
├── README.md           # Ce fichier
├── LICENSE             # Licence MIT
└── .gitignore          # Fichiers à ignorer
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

1. **Fork** le projet
2. Crée une branche (`git checkout -b feature/AmazingFeature`)
3. Commit tes changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvre une **Pull Request**

### Idées de contributions

- 🌍 Traduction (Anglais, Espagnol...)
- 📱 App mobile native (React Native / Flutter)
- 📊 Nouveaux graphiques (courbes de progression, etc.)
- 🏅 Plus de badges
- 🎵 Sons personnalisables pour le timer
- 📥 Import/Export CSV des données
- 🌤️ Intégration météo API

---

## 🐛 Bugs connus

- Aucun pour l'instant ! 🎉

Si tu trouves un bug, [ouvre une issue](https://github.com/TON-USERNAME/programme-marche-progressif/issues).

---

## 📜 License

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👏 Remerciements

- **Tailwind CSS** - Framework CSS utility-first
- **Chart.js** - Bibliothèque de graphiques
- **Firebase** - Backend-as-a-Service
- **Google Fonts** - Polices web
- Inspiré par les programmes de marche pour la santé articulaire

---

## 📞 Contact

Pour toute question ou suggestion :

- 📧 Email : ton-email@example.com
- 🐦 Twitter : [@ton-twitter](https://twitter.com/ton-twitter)
- 💼 LinkedIn : [Ton Profil](https://linkedin.com/in/ton-profil)

---

<div align="center">

**Fait avec ❤️ pour ta santé**

⭐ Si ce projet t'aide, n'hésite pas à lui donner une étoile !

</div>
