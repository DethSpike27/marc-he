# Changements Apportés à Marc-he / Walk-On

## Résumé des Modifications

Cette mise à jour apporte trois changements majeurs à l'application :

### 1. ✅ Valeurs Par Défaut Modifiées

- **Poids par défaut** : Changé de 295 lb à **250 lb**
- **Unité de taille par défaut** : Changée de cm à **pieds (ft)**
- **Placeholder de taille** : Changé de "170" à "5.5" (5 pieds 6 pouces)

### 2. 🗑️ Suppression du Timer

L'onglet "⏱️ Timer" a été complètement supprimé :
- Suppression de l'onglet de navigation
- Suppression de tout le contenu HTML du timer
- Suppression de toutes les fonctions JavaScript associées :
  - `initTimer()`
  - `stopTimer()`
  - `updateTimerDisplay()`
  - `updatePhaseIndicator()`
  - `updateCaloriesDisplay()`
  - `playNotificationSound()`
- Suppression des variables d'état du timer
- Suppression du CSS associé

### 3. 🌍 Système de Traduction Français/Anglais

#### Nouveau Sélecteur de Langue

Un sélecteur de langue a été ajouté dans le header (à côté du bouton mode sombre) :
- 🇫🇷 FR (Français)
- 🇬🇧 EN (English)

#### Traductions Complètes

Toutes les sections de l'application sont traduites :

**Version Française (Marc-he)**
- Titre : "Marc-he"
- Sous-titre : "Programme de Marche Progressif"

**Version Anglaise (Walk-On)**
- Titre : "Walk-On"
- Sous-titre : "Progressive Walking Program"

#### Éléments Traduits

- ✅ Navigation (onglets)
- ✅ Header et progression
- ✅ Boutons d'action
- ✅ Programme de 8 semaines
  - Titres des semaines (Semaines 1-2 → Weeks 1-2)
  - Niveaux (Débutant → Beginner, etc.)
  - Instructions de marche
  - Jours de la semaine (Lundi → Monday, etc.)
- ✅ Calendrier
  - Mois (Janvier → January, etc.)
  - Historique
- ✅ Statistiques
  - Labels des graphiques
  - Titres des cartes
- ✅ Badges
  - Noms et descriptions de tous les badges
- ✅ Profil
  - Formulaire complet
  - Objectifs
  - Statistiques calculées
- ✅ Conseils
  - Règles d'or
  - Routine anti-bureau
- ✅ Footer
- ✅ Modal de notes
- ✅ Alertes et messages

#### Persistance

- La préférence de langue est sauvegardée dans `localStorage`
- La langue est synchronisée avec Firebase (si connecté)
- L'application se souvient de votre choix au prochain chargement

## Fichiers Modifiés

### `app.js`
- Ajout d'un objet `translations` avec toutes les traductions FR/EN
- Ajout de la variable `currentLanguage`
- Ajout de fonctions :
  - `initLanguage()` - Initialise le système de langue
  - `updateLanguage()` - Met à jour tous les textes
  - `updateProgramSections()` - Met à jour les sections du programme
  - `updateProfileSection()` - Met à jour la section profil
  - `updateTipsSection()` - Met à jour la section conseils
  - `updateFooter()` - Met à jour le footer
  - `updateNoteModal()` - Met à jour le modal de notes
  - `getBadges()` - Fonction dynamique pour obtenir les badges traduits
- Modification des valeurs par défaut (250 lb, pieds)
- Suppression de toutes les fonctions du timer
- Mise à jour de toutes les fonctions pour utiliser les traductions :
  - `updateProgress()`
  - `renderCalendar()`
  - `renderBadges()`
  - `checkBadges()`
  - `updateGreeting()`
  - `saveUserProfile()`
  - `showBadgeNotification()`
  - `checkFirstTimeUser()`
  - `updateSyncIndicator()`
  - `updateAuthUI()`
  - Et toutes les alertes/confirmations

### `index.html`
- Ajout du sélecteur de langue dans le header
- Suppression complète de l'onglet Timer
- Suppression du CSS du timer
- Modification des placeholders (poids : 250, taille : 5.5)
- Modification de l'ordre des unités de taille (pieds en premier)
- Ajout d'attributs `data-i18n` aux éléments de navigation
- Ajout d'attributs `data-i18n` aux boutons principaux

## Comment Utiliser

1. **Changer de langue** : Cliquez sur le sélecteur dans le header et choisissez 🇫🇷 FR ou 🇬🇧 EN
2. **Valeurs par défaut** : Les nouveaux utilisateurs verront 250 lb et l'unité en pieds par défaut
3. **Timer supprimé** : L'onglet timer n'est plus disponible - utilisez le timer de votre téléphone

## Notes Techniques

- Le système de traduction utilise un objet JavaScript `translations` avec des clés pour chaque texte
- Les traductions sont appliquées via des attributs `data-i18n` et des fonctions JavaScript
- La langue est sauvegardée dans `localStorage` sous la clé `'language'`
- Les noms de jours sont mis à jour dynamiquement selon la langue choisie
- Les badges sont générés dynamiquement pour supporter la traduction

## Compatibilité

- ✅ Compatible avec la synchronisation Firebase existante
- ✅ Compatible avec le mode sombre
- ✅ Compatible avec toutes les fonctionnalités existantes (badges, stats, calendrier, etc.)
- ✅ Responsive (mobile, tablette, desktop)
