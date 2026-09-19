// ========== CONFIGURATION ==========
// Valeurs par défaut - seront remplacées par le profil utilisateur
let USER_WEIGHT_LBS = 250;
let CALORIES_PER_MIN = 3.8; // Sera recalculé selon le poids
let currentLanguage = 'fr';

// ========== TRADUCTIONS ==========
const translations = {
    fr: {
        // Header
        appTitle: 'Marc-he',
        appSubtitle: 'Programme de Marche Progressif',

        // Tabs
        tabProgram: '📋 Programme',
        tabCalendar: '📅 Calendrier',
        tabStats: '📊 Stats',
        tabBadges: '🏆 Badges',
        tabProfile: '👤 Profil',
        tabTips: '💡 Conseils',

        // Buttons
        btnReset: '🔄 Recommencer',
        btnExport: '📥 Exporter',
        btnLogin: 'Se connecter',
        btnLogout: 'Se déconnecter',

        // Progress
        progressGlobal: 'Progression Globale',
        sessions: 'séances',

        // Weeks
        weeks12: 'Semaines 1-2',
        weeks34: 'Semaines 3-4',
        weeks56: 'Semaines 5-6',
        weeks78: 'Semaines 7-8',
        weeks9plus: 'Semaines 9+',

        // Levels
        levelBeginner: 'Débutant',
        levelProgress: 'Progression',
        levelIntermediate: 'Intermédiaire',
        levelAdvanced: 'Avancé',
        levelMaintenance: 'Maintien ✨',

        // Duration
        minutes: 'minutes',
        min: 'min',

        // Instructions
        instr12: 'Rythme lent, ou 2 × 10 min si douleur',
        instr34: 'Rythme modéré, capable de parler',
        instr56: 'Rythme modéré, avec balancement des bras',
        instr78: 'Rythme modéré, progression naturelle',
        instr9plus: 'Félicitations ! Continue à ce rythme pour maintenir ta forme cardiovasculaire.',

        // Days
        myWalkingDays: 'Mes jours de marche :',
        dayL: 'Lundi',
        dayM: 'Mardi',
        dayM2: 'Mercredi',
        dayJ: 'Jeudi',
        dayV: 'Vendredi',
        dayS: 'Samedi',
        dayD: 'Dimanche',

        // Session
        session: 'Séance',
        newWeek: '➡️ Nouvelle semaine',

        // Calendar
        calendarTitle: '📅 Historique',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],

        // Stats
        statsTitle: '📊 Statistiques',
        totalSessions: 'Total séances',
        totalMinutes: 'Minutes totales',
        caloriesBurned: 'Calories brûlées',
        walkingMinutes: 'Minutes de marche',

        // Badges
        badgesTitle: '🏆 Tes Badges',
        badgeFirst: 'Premier Pas',
        badgeFirstDesc: 'Première séance complétée',
        badgeWeek1: 'Une Semaine',
        badgeWeek1Desc: '3 séances en une semaine',
        badgeConsistent: 'Régularité',
        badgeConsistentDesc: '5 séances complétées',
        badgeTenner: 'Double Chiffre',
        badgeTennerDesc: '10 séances complétées',
        badgeHalfWay: 'Mi-Parcours',
        badgeHalfWayDesc: '12 séances (50% du programme)',
        badgeChampion: 'Champion',
        badgeChampionDesc: '24 séances complétées',
        badgeMarathon: 'Marathonien',
        badgeMarathonDesc: '100 minutes cumulées',
        badgeWarrior: 'Guerrier',
        badgeWarriorDesc: '500 minutes cumulées',
        badgeLegend: 'Légende',
        badgeLegendDesc: '1000 minutes cumulées',

        // Profile
        profileTitle: '👤 Mon Profil',
        firstName: 'Prénom / Surnom',
        weight: 'Poids',
        height: 'Taille',
        age: 'Âge (optionnel)',
        goal: 'Mon objectif principal',
        goalCardio: 'Améliorer mon cardio',
        goalWeight: 'Perdre du poids',
        goalJoints: 'Protéger mes articulations',
        goalHealth: 'Santé générale',
        goalHabit: 'Créer une habitude',
        saveProfile: '💾 Sauvegarder mon profil',
        calculatedStats: '📊 Mes statistiques calculées',
        caloriesPerMin: 'Calories/minute (marche modérée)',
        bmi: 'IMC (si taille renseignée)',
        estimatesNote: '* Les calculs sont des estimations basées sur des moyennes',
        weightHelper: 'Utilisé pour calculer les calories brûlées',
        heightHelperCm: 'Ex: 170 cm',
        heightHelperFt: 'Ex: 5.5 pieds (5 pieds 6 pouces) ou 6.0 pieds (6 pieds 0 pouces)',

        // Tips
        tipsTitle: 'Règles d\'Or et Astuces',
        tipTalkTest: 'Le test de la parole',
        tipTalkTestDesc: 'Si tu ne peux pas parler pendant que tu marches, c\'est que tu vas trop vite. Ralentis ton rythme jusqu\'à ce que tu puisses tenir une conversation sans être essoufflé.',
        tipPainRule: 'La règle de la douleur',
        tipPainRuleDesc: 'Une fatigue musculaire est normale, mais si une douleur aiguë au dos ou au genou survient, arrête immédiatement. Divise en deux sessions si nécessaire.',
        tipTerrain: 'Le terrain',
        tipTerrainDesc: 'Marche uniquement sur du plat (asphalte ou poussière de roche). Aucune pente pour les 4 premières semaines. Évite le béton.',
        routineTitle: 'Routine Anti-Bureau (2 minutes)',
        routinePosture: 'Posture de marche',
        routinePostureDesc: 'Regarde à l\'horizon, rentre le nombril à 10-20%.',
        routineWarmup: 'Échauffement',
        routineWarmupDesc: '10 rotations de chevilles de chaque côté.',
        routinePelvis: 'Déblocage du bassin',
        routinePelvisDesc: '10 bascules du bassin.',
        routineActivation: 'Activation',
        routineActivationDesc: '30 secondes de marche sur place.',

        // Footer
        footerText: '💪 Chaque pas compte ! Reste constant et écoute ton corps.',

        // Notes
        noteTitle: '📝 Note de séance',
        notePlaceholder: 'Comment t\'es-tu senti ? Douleurs ? Météo ?',
        noteCancel: 'Annuler',
        noteSave: 'Sauvegarder',

        // Alerts
        alertComplete: '🎉 Félicitations ! Tu as complété les 8 premières semaines !\n\nLe mode maintien est maintenant débloqué ! 💪',
        alertReset: '⚠️ Es-tu sûr de vouloir recommencer au niveau débutant ?\n\nCela effacera toute ta progression.',
        alertResetConfirm: 'Dernière confirmation : Tout sera effacé. Continuer ?',
        alertNewWeek: 'Commencer une nouvelle semaine ? Cela réinitialisera les cases actuelles.',
        alertMaxDays: 'Tu peux sélectionner maximum 3 jours par semaine',
        alertProfileSaved: '✅ Profil sauvegardé !\n\nBienvenue {{name}} ! Tes paramètres ont été mis à jour.',
        alertWelcome: '👋 Bienvenue dans Marc-he !\n\nPour une meilleure expérience personnalisée, veux-tu configurer ton profil maintenant ?\n\n(Poids, taille, objectif...)\n\nTu pourras le faire plus tard dans l\'onglet "Profil".',
        alertNewBadge: '🎉 Nouveau badge débloqué !\n\n{{emoji}} {{name}}\n{{desc}}',
        alertLogout: 'Se déconnecter de Google ?',

        // Sync
        syncToday: 'sync : aujourd\'hui',
        syncYesterday: 'sync : hier',
        syncDaysAgo: 'sync : il y a {{days}}j',

        // Misc
        programTitle: 'Programme de 8 Semaines',
        continuousProgram: 'Programme continu',
        maintenanceDesc: '30 minutes - 3× par semaine',
        exampleName: 'Ex: Marc',
        exampleAge: 'Ex: 35',
        champion: 'Champion'
    },
    en: {
        // Header
        appTitle: 'Walk-On',
        appSubtitle: 'Progressive Walking Program',

        // Tabs
        tabProgram: '📋 Program',
        tabCalendar: '📅 Calendar',
        tabStats: '📊 Stats',
        tabBadges: '🏆 Badges',
        tabProfile: '👤 Profile',
        tabTips: '💡 Tips',

        // Buttons
        btnReset: '🔄 Reset',
        btnExport: '📥 Export',
        btnLogin: 'Sign In',
        btnLogout: 'Sign Out',

        // Progress
        progressGlobal: 'Overall Progress',
        sessions: 'sessions',

        // Weeks
        weeks12: 'Weeks 1-2',
        weeks34: 'Weeks 3-4',
        weeks56: 'Weeks 5-6',
        weeks78: 'Weeks 7-8',
        weeks9plus: 'Weeks 9+',

        // Levels
        levelBeginner: 'Beginner',
        levelProgress: 'Progress',
        levelIntermediate: 'Intermediate',
        levelAdvanced: 'Advanced',
        levelMaintenance: 'Maintenance ✨',

        // Duration
        minutes: 'minutes',
        min: 'min',

        // Instructions
        instr12: 'Slow pace, or 2 × 10 min if pain',
        instr34: 'Moderate pace, able to talk',
        instr56: 'Moderate pace, with arm swing',
        instr78: 'Moderate pace, natural progression',
        instr9plus: 'Congratulations! Keep up this pace to maintain your cardiovascular fitness.',

        // Days
        myWalkingDays: 'My walking days:',
        dayL: 'Monday',
        dayM: 'Tuesday',
        dayM2: 'Wednesday',
        dayJ: 'Thursday',
        dayV: 'Friday',
        dayS: 'Saturday',
        dayD: 'Sunday',

        // Session
        session: 'Session',
        newWeek: '➡️ New week',

        // Calendar
        calendarTitle: '📅 History',
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

        // Stats
        statsTitle: '📊 Statistics',
        totalSessions: 'Total sessions',
        totalMinutes: 'Total minutes',
        caloriesBurned: 'Calories burned',
        walkingMinutes: 'Walking minutes',

        // Badges
        badgesTitle: '🏆 Your Badges',
        badgeFirst: 'First Step',
        badgeFirstDesc: 'First session completed',
        badgeWeek1: 'One Week',
        badgeWeek1Desc: '3 sessions in one week',
        badgeConsistent: 'Consistency',
        badgeConsistentDesc: '5 sessions completed',
        badgeTenner: 'Double Digits',
        badgeTennerDesc: '10 sessions completed',
        badgeHalfWay: 'Halfway There',
        badgeHalfWayDesc: '12 sessions (50% of program)',
        badgeChampion: 'Champion',
        badgeChampionDesc: '24 sessions completed',
        badgeMarathon: 'Marathoner',
        badgeMarathonDesc: '100 cumulative minutes',
        badgeWarrior: 'Warrior',
        badgeWarriorDesc: '500 cumulative minutes',
        badgeLegend: 'Legend',
        badgeLegendDesc: '1000 cumulative minutes',

        // Profile
        profileTitle: '👤 My Profile',
        firstName: 'First Name / Nickname',
        weight: 'Weight',
        height: 'Height',
        age: 'Age (optional)',
        goal: 'My main goal',
        goalCardio: 'Improve my cardio',
        goalWeight: 'Lose weight',
        goalJoints: 'Protect my joints',
        goalHealth: 'General health',
        goalHabit: 'Create a habit',
        saveProfile: '💾 Save my profile',
        calculatedStats: '📊 My calculated statistics',
        caloriesPerMin: 'Calories/minute (moderate walk)',
        bmi: 'BMI (if height provided)',
        estimatesNote: '* Calculations are estimates based on averages',
        weightHelper: 'Used to calculate calories burned',
        heightHelperCm: 'Ex: 170 cm',
        heightHelperFt: 'Ex: 5.5 feet (5 feet 6 inches) or 6.0 feet (6 feet 0 inches)',

        // Tips
        tipsTitle: 'Golden Rules and Tips',
        tipTalkTest: 'The talk test',
        tipTalkTestDesc: 'If you can\'t talk while walking, you\'re going too fast. Slow down until you can hold a conversation without being out of breath.',
        tipPainRule: 'The pain rule',
        tipPainRuleDesc: 'Muscle fatigue is normal, but if sharp back or knee pain occurs, stop immediately. Split into two sessions if necessary.',
        tipTerrain: 'The terrain',
        tipTerrainDesc: 'Walk only on flat surfaces (asphalt or crushed rock). No slopes for the first 4 weeks. Avoid concrete.',
        routineTitle: 'Anti-Desk Routine (2 minutes)',
        routinePosture: 'Walking posture',
        routinePostureDesc: 'Look at the horizon, engage core 10-20%.',
        routineWarmup: 'Warmup',
        routineWarmupDesc: '10 ankle rotations on each side.',
        routinePelvis: 'Pelvis release',
        routinePelvisDesc: '10 pelvic tilts.',
        routineActivation: 'Activation',
        routineActivationDesc: '30 seconds of marching in place.',

        // Footer
        footerText: '💪 Every step counts! Stay consistent and listen to your body.',

        // Notes
        noteTitle: '📝 Session Note',
        notePlaceholder: 'How did you feel? Any pain? Weather?',
        noteCancel: 'Cancel',
        noteSave: 'Save',

        // Alerts
        alertComplete: '🎉 Congratulations! You completed the first 8 weeks!\n\nMaintenance mode is now unlocked! 💪',
        alertReset: '⚠️ Are you sure you want to restart at beginner level?\n\nThis will erase all your progress.',
        alertResetConfirm: 'Final confirmation: Everything will be deleted. Continue?',
        alertNewWeek: 'Start a new week? This will reset the current checkboxes.',
        alertMaxDays: 'You can select a maximum of 3 days per week',
        alertProfileSaved: '✅ Profile saved!\n\nWelcome {{name}}! Your settings have been updated.',
        alertWelcome: '👋 Welcome to Walk-On!\n\nFor a better personalized experience, would you like to configure your profile now?\n\n(Weight, height, goal...)\n\nYou can do it later in the "Profile" tab.',
        alertNewBadge: '🎉 New badge unlocked!\n\n{{emoji}} {{name}}\n{{desc}}',
        alertLogout: 'Sign out of Google?',

        // Sync
        syncToday: 'sync: today',
        syncYesterday: 'sync: yesterday',
        syncDaysAgo: 'sync: {{days}}d ago',

        // Misc
        programTitle: '8-Week Program',
        continuousProgram: 'Continuous program',
        maintenanceDesc: '30 minutes - 3× per week',
        exampleName: 'Ex: John',
        exampleAge: 'Ex: 35',
        champion: 'Champion'
    }
};

const dayNames = {
    'L': 'Lundi',
    'M': 'Mardi',
    'M2': 'Mercredi',
    'J': 'Jeudi',
    'V': 'Vendredi',
    'S': 'Samedi',
    'D': 'Dimanche'
};

function getBadges() {
    const t = translations[currentLanguage];
    return [
        { id: 'first', name: t.badgeFirst, desc: t.badgeFirstDesc, emoji: '👟', requirement: 1 },
        { id: 'week1', name: t.badgeWeek1, desc: t.badgeWeek1Desc, emoji: '🗓️', requirement: 3 },
        { id: 'consistent', name: t.badgeConsistent, desc: t.badgeConsistentDesc, emoji: '📈', requirement: 5 },
        { id: 'tenner', name: t.badgeTenner, desc: t.badgeTennerDesc, emoji: '🔟', requirement: 10 },
        { id: 'halfWay', name: t.badgeHalfWay, desc: t.badgeHalfWayDesc, emoji: '⭐', requirement: 12 },
        { id: 'champion', name: t.badgeChampion, desc: t.badgeChampionDesc, emoji: '🏆', requirement: 24 },
        { id: 'marathon', name: t.badgeMarathon, desc: t.badgeMarathonDesc, emoji: '🎯', requirement: 100, type: 'minutes' },
        { id: 'warrior', name: t.badgeWarrior, desc: t.badgeWarriorDesc, emoji: '⚡', requirement: 500, type: 'minutes' },
        { id: 'legend', name: t.badgeLegend, desc: t.badgeLegendDesc, emoji: '👑', requirement: 1000, type: 'minutes' },
    ];
}

// ========== GESTION DE LA LANGUE ==========
function initLanguage() {
    currentLanguage = localStorage.getItem('language') || 'fr';
    const selector = document.getElementById('languageSelector');
    if (selector) {
        selector.value = currentLanguage;
        selector.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            localStorage.setItem('language', currentLanguage);
            updateLanguage();
            saveToFirebase();
        });
    }
    updateLanguage();
}

function updateLanguage() {
    const t = translations[currentLanguage];

    // Update day names
    if (currentLanguage === 'fr') {
        dayNames['L'] = 'Lundi';
        dayNames['M'] = 'Mardi';
        dayNames['M2'] = 'Mercredi';
        dayNames['J'] = 'Jeudi';
        dayNames['V'] = 'Vendredi';
        dayNames['S'] = 'Samedi';
        dayNames['D'] = 'Dimanche';
    } else {
        dayNames['L'] = 'Monday';
        dayNames['M'] = 'Tuesday';
        dayNames['M2'] = 'Wednesday';
        dayNames['J'] = 'Thursday';
        dayNames['V'] = 'Friday';
        dayNames['S'] = 'Saturday';
        dayNames['D'] = 'Sunday';
    }

    // Update all text content via data attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update title and subtitle
    const greeting = document.getElementById('userGreeting');
    const objective = document.getElementById('userObjective');
    if (greeting && !greeting.textContent.includes(' de ') && !greeting.textContent.includes(' - ') && !greeting.textContent.includes("'s")) {
        greeting.textContent = t.appTitle;
    }
    if (objective && !objective.textContent.startsWith('Objectif') && !objective.textContent.startsWith('Goal')) {
        objective.textContent = t.appSubtitle;
    }

    // Update manual translations for complex HTML sections
    updateProgramSections();
    updateProfileSection();
    updateTipsSection();
    updateFooter();
    updateNoteModal();

    // Re-render dynamic content
    updateGreeting();
    renderBadges();
    renderCalendar();
    updateStats();
    updateProgress();

    // Update day labels
    for (let week = 1; week <= 4; week++) {
        const saved = JSON.parse(localStorage.getItem(`${week}_days`) || '[]');
        updateDayLabels(week, saved);
    }
    const savedMaintenance = JSON.parse(localStorage.getItem('maintenance_days') || '[]');
    updateDayLabels('maintenance', savedMaintenance);
}

function updateProgramSections() {
    const t = translations[currentLanguage];

    // Update program title
    const programTitle = document.querySelector('#tab-programme h2');
    if (programTitle) programTitle.textContent = t.programTitle;

    // Update session labels (Séance 1, 2, 3...)
    const sessionLabels = document.querySelectorAll('.text-gray-700');
    sessionLabels.forEach((label) => {
        if (label.textContent.trim().startsWith('Séance') || label.textContent.trim().startsWith('Session')) {
            const num = label.textContent.match(/\d+/);
            if (num) {
                label.textContent = `${t.session} ${num[0]}`;
            }
        }
    });

    // Update "Mes jours de marche"
    document.querySelectorAll('p.font-medium').forEach(p => {
        if (p.textContent.includes('jours de marche') || p.textContent.includes('walking days')) {
            p.textContent = t.myWalkingDays;
        }
    });
}

function updateProfileSection() {
    const t = translations[currentLanguage];

    // Update profile title
    const profileTitle = document.querySelector('#tab-profil h2');
    if (profileTitle) profileTitle.textContent = t.profileTitle;

    // Update calculated stats title
    const statsTitle = document.querySelector('#tab-profil h3');
    if (statsTitle && statsTitle.textContent.includes('statistiques')) {
        statsTitle.textContent = t.calculatedStats;
    }

    // Update helper text for height
    updateHeightHelper();
}

function updateTipsSection() {
    const t = translations[currentLanguage];

    // Update tips title
    const tipsTitle = document.querySelector('#tab-conseils section:first-child h2');
    if (tipsTitle) tipsTitle.textContent = t.tipsTitle;

    // Update routine title
    const routineTitle = document.querySelector('#tab-conseils section:last-child h2');
    if (routineTitle) routineTitle.textContent = t.routineTitle;
}

function updateFooter() {
    const t = translations[currentLanguage];
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = t.footerText;
}

function updateNoteModal() {
    const t = translations[currentLanguage];
    const noteTitle = document.querySelector('#noteModal h3');
    const noteText = document.getElementById('noteText');
    const cancelBtn = document.getElementById('cancelNote');
    const saveBtn = document.getElementById('saveNote');

    if (noteTitle) noteTitle.textContent = t.noteTitle;
    if (noteText) noteText.placeholder = t.notePlaceholder;
    if (cancelBtn) cancelBtn.textContent = t.noteCancel;
    if (saveBtn) saveBtn.textContent = t.noteSave;
}

// ========== ÉTAT DE L'APPLICATION ==========
let currentNoteTarget = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let statsChart = null;

// ========== FIREBASE ==========
let fbCurrentUser = null;
let fbUserRef = null;
let fbSyncingCount = 0;

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initProfile();
    initTabs();
    initDarkMode();
    initDaySelectors();
    initCheckboxes();
    initCalendar();
    initStats();
    initBadges();
    initNotes();
    initExport();
    initNotifications();
    initAccordions();
    initFirebase();
    loadProgress();
    updateProgress();
    renderBadges();
    renderCalendar();
    updateStats();
    checkFirstTimeUser();
});

// ========== NAVIGATION PAR ONGLETS ==========
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');

            if (targetTab === 'stats') {
                updateStats();
            }
        });
    });
}

// ========== ACCORDÉONS ==========
function initAccordions() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.accordion-icon');
            content.classList.toggle('active');
            icon.classList.toggle('rotate-180');
        });
    });
}

// ========== MODE SOMBRE ==========
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const isDark = localStorage.getItem('darkMode') === 'true';

    if (isDark) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<span class="text-xl sm:text-2xl">☀️</span>';
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkNow = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkNow);
        darkModeToggle.innerHTML = isDarkNow
            ? '<span class="text-xl sm:text-2xl">☀️</span>'
            : '<span class="text-xl sm:text-2xl">🌙</span>';
        saveToFirebase();
    });
}

// ========== SÉLECTION DES JOURS ==========
function initDaySelectors() {
    for (let week = 1; week <= 4; week++) {
        setupDaySelector(`daySelector${week}`, week);
    }
    setupDaySelector('daySelectorMaintenance', 'maintenance');
}

function setupDaySelector(selectorId, week) {
    const selector = document.getElementById(selectorId);
    if (!selector) return;

    const buttons = selector.querySelectorAll('.day-selector');
    const savedDays = JSON.parse(localStorage.getItem(`${week}_days`) || '[]');

    savedDays.forEach(day => {
        const btn = Array.from(buttons).find(b => b.dataset.day === day);
        if (btn) btn.classList.add('selected');
    });

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedBtns = selector.querySelectorAll('.day-selector.selected');

            if (btn.classList.contains('selected')) {
                btn.classList.remove('selected');
            } else {
                if (selectedBtns.length < 3) {
                    btn.classList.add('selected');
                } else {
                    const t = translations[currentLanguage];
                    alert(t.alertMaxDays);
                    return;
                }
            }

            const selected = Array.from(selector.querySelectorAll('.day-selector.selected'))
                .map(b => b.dataset.day);
            localStorage.setItem(`${week}_days`, JSON.stringify(selected));
            updateDayLabels(week, selected);
            saveToFirebase();
        });
    });

    updateDayLabels(week, savedDays);
}

function updateDayLabels(week, selectedDays) {
    const prefix = week === 'maintenance' ? 'dayMaintenance' : `day${week}`;
    for (let i = 1; i <= 3; i++) {
        const label = document.getElementById(`${prefix}_${i}`);
        if (label) {
            label.textContent = selectedDays[i - 1] ? dayNames[selectedDays[i - 1]] : '';
        }
    }
}

// ========== GESTION DES CHECKBOXES ==========
function initCheckboxes() {
    const checkboxes = document.querySelectorAll('.checkbox-custom:not(.maintenance-checkbox)');
    const maintenanceCheckboxes = document.querySelectorAll('.maintenance-checkbox');
    const resetBtn = document.getElementById('resetBtn');
    const newWeekBtn = document.getElementById('newWeekBtn');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            saveCheckbox(checkbox);
            updateProgress();
            checkBadges();
            updateStats();
            renderCalendar();

            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
            if (checkedCount === 24) {
                setTimeout(() => {
                    const t = translations[currentLanguage];
                    alert(t.alertComplete);
                    document.getElementById('maintenanceSection').classList.remove('hidden');
                }, 300);
            }
        });
    });

    maintenanceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            saveCheckbox(checkbox);
            checkBadges();
            updateStats();
            renderCalendar();
        });
    });

    resetBtn.addEventListener('click', () => {
        const t = translations[currentLanguage];
        if (confirm(t.alertReset)) {
            if (confirm(t.alertResetConfirm)) {
                localStorage.clear();
                location.reload();
            }
        }
    });

    if (newWeekBtn) {
        newWeekBtn.addEventListener('click', () => {
            const t = translations[currentLanguage];
            if (confirm(t.alertNewWeek)) {
                maintenanceCheckboxes.forEach(cb => {
                    cb.checked = false;
                    saveCheckbox(cb);
                });
                updateStats();
                renderCalendar();
            }
        });
    }
}

function loadProgress() {
    console.log('📂 Loading progress from localStorage...');
    const checkboxes = document.querySelectorAll('.checkbox-custom:not(.maintenance-checkbox)');
    const maintenanceCheckboxes = document.querySelectorAll('.maintenance-checkbox');

    let loaded = 0;
    checkboxes.forEach(checkbox => {
        const key = getCheckboxKey(checkbox);
        const isChecked = localStorage.getItem(key) === 'true';
        if (checkbox.checked !== isChecked) {
            checkbox.checked = isChecked;
            loaded++;
        }
    });

    maintenanceCheckboxes.forEach(checkbox => {
        const key = getCheckboxKey(checkbox);
        const isChecked = localStorage.getItem(key) === 'true';
        if (checkbox.checked !== isChecked) {
            checkbox.checked = isChecked;
            loaded++;
        }
    });

    console.log(`✅ Loaded ${loaded} checkbox changes`);
}

function saveCheckbox(checkbox) {
    const key = getCheckboxKey(checkbox);
    localStorage.setItem(key, checkbox.checked);
    console.log('📝 Checkbox saved:', key, '=', checkbox.checked);

    if (checkbox.checked) {
        const date = new Date().toISOString().split('T')[0];
        const duration = parseInt(checkbox.dataset.duration) || 30;
        saveSessionToHistory(date, duration);
    }

    // Sync Firebase
    console.log('📤 Triggering Firebase sync from checkbox...');
    saveToFirebase();
}

function getCheckboxKey(checkbox) {
    if (checkbox.classList.contains('maintenance-checkbox')) {
        return `maintenance_session${checkbox.dataset.session}`;
    }
    return `week${checkbox.dataset.week}_day${checkbox.dataset.day}`;
}

function updateProgress() {
    const checkboxes = document.querySelectorAll('.checkbox-custom:not(.maintenance-checkbox)');
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percentage = (checkedCount / 24) * 100;
    const t = translations[currentLanguage];

    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${checkedCount}/24 ${t.sessions}`;

    if (checkedCount >= 24) {
        document.getElementById('maintenanceSection').classList.remove('hidden');
    }
}

// ========== HISTORIQUE DES SÉANCES ==========
function saveSessionToHistory(date, duration) {
    const history = JSON.parse(localStorage.getItem('sessionHistory') || '{}');
    if (!history[date]) {
        history[date] = { duration, date };
        localStorage.setItem('sessionHistory', JSON.stringify(history));
        saveToFirebase();
    }
}

function getSessionHistory() {
    return JSON.parse(localStorage.getItem('sessionHistory') || '{}');
}

// ========== CALENDRIER ==========
function initCalendar() {
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');

    prevBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });
}

function renderCalendar() {
    const t = translations[currentLanguage];

    document.getElementById('calendarMonth').textContent = `${t.monthNames[currentMonth]} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';

    const history = getSessionHistory();

    // Ajuster pour commencer le lundi
    const startDay = firstDay === 0 ? 6 : firstDay - 1;

    // Jours vides avant le premier jour du mois
    for (let i = 0; i < startDay; i++) {
        const emptyDay = document.createElement('div');
        grid.appendChild(emptyDay);
    }

    // Jours du mois
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day bg-gray-100 text-gray-700';
        dayDiv.textContent = day;

        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        if (history[dateStr]) {
            dayDiv.classList.add('has-session');
            const sessionText = currentLanguage === 'fr' ? `Séance de ${history[dateStr].duration} min` : `${history[dateStr].duration} min session`;
            dayDiv.title = sessionText;
        }

        grid.appendChild(dayDiv);
    }
}

// ========== STATISTIQUES ==========
function initStats() {
    updateStats();
}

function updateStats() {
    const checkboxes = document.querySelectorAll('.checkbox-custom');
    const totalSessions = Array.from(checkboxes).filter(cb => cb.checked).length;

    const history = getSessionHistory();
    const totalMinutes = Object.values(history).reduce((sum, session) => sum + session.duration, 0);
    const totalCalories = Math.round(totalMinutes * CALORIES_PER_MIN);

    document.getElementById('totalSessions').textContent = totalSessions;
    document.getElementById('totalMinutes').textContent = totalMinutes;
    document.getElementById('totalCalories').textContent = totalCalories;

    renderChart(history);
}

function renderChart(history) {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;

    // Préparer les données pour les 30 derniers jours
    const today = new Date();
    const labels = [];
    const data = [];

    for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const dayLabel = `${date.getDate()}/${date.getMonth() + 1}`;

        labels.push(dayLabel);
        data.push(history[dateStr] ? history[dateStr].duration : 0);
    }

    if (statsChart) {
        statsChart.destroy();
    }

    const t = translations[currentLanguage];

    statsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: t.walkingMinutes,
                data: data,
                backgroundColor: 'rgba(102, 126, 234, 0.6)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10
                    }
                }
            }
        }
    });
}

// ========== BADGES ==========
function initBadges() {
    renderBadges();
}

function renderBadges() {
    const container = document.getElementById('badgesContainer');
    if (!container) return;

    const unlockedBadges = getUnlockedBadges();
    const checkboxes = document.querySelectorAll('.checkbox-custom');
    const totalSessions = Array.from(checkboxes).filter(cb => cb.checked).length;
    const history = getSessionHistory();
    const totalMinutes = Object.values(history).reduce((sum, session) => sum + session.duration, 0);
    const badges = getBadges();

    container.innerHTML = '';

    badges.forEach(badge => {
        const div = document.createElement('div');
        const isUnlocked = unlockedBadges.includes(badge.id);
        const progress = badge.type === 'minutes' ? totalMinutes : totalSessions;
        const percentage = Math.min((progress / badge.requirement) * 100, 100);

        div.className = `badge-card p-4 rounded-xl text-center ${isUnlocked ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-gray-200 badge-locked'}`;
        div.innerHTML = `
            <div class="text-4xl mb-2">${badge.emoji}</div>
            <h3 class="font-bold text-sm mb-1 ${isUnlocked ? 'text-white' : 'text-gray-700'}">${badge.name}</h3>
            <p class="text-xs ${isUnlocked ? 'text-white opacity-90' : 'text-gray-600'}">${badge.desc}</p>
            ${!isUnlocked ? `<div class="mt-2 bg-gray-300 rounded-full h-2"><div class="bg-purple-500 h-2 rounded-full" style="width: ${percentage}%"></div></div>` : ''}
            ${!isUnlocked ? `<p class="text-xs text-gray-600 mt-1">${progress}/${badge.requirement}</p>` : ''}
        `;

        container.appendChild(div);
    });
}

function checkBadges() {
    const previouslyUnlocked = getUnlockedBadges();
    const checkboxes = document.querySelectorAll('.checkbox-custom');
    const totalSessions = Array.from(checkboxes).filter(cb => cb.checked).length;
    const history = getSessionHistory();
    const totalMinutes = Object.values(history).reduce((sum, session) => sum + session.duration, 0);
    const badges = getBadges();

    const newlyUnlocked = [];

    badges.forEach(badge => {
        if (!previouslyUnlocked.includes(badge.id)) {
            const progress = badge.type === 'minutes' ? totalMinutes : totalSessions;
            if (progress >= badge.requirement) {
                newlyUnlocked.push(badge.id);
                unlockBadge(badge.id);
                showBadgeNotification(badge);
            }
        }
    });

    if (newlyUnlocked.length > 0) {
        renderBadges();
    }
}

function getUnlockedBadges() {
    return JSON.parse(localStorage.getItem('unlockedBadges') || '[]');
}

function unlockBadge(badgeId) {
    const unlocked = getUnlockedBadges();
    if (!unlocked.includes(badgeId)) {
        unlocked.push(badgeId);
        localStorage.setItem('unlockedBadges', JSON.stringify(unlocked));
        saveToFirebase();
    }
}

function showBadgeNotification(badge) {
    const t = translations[currentLanguage];
    const msg = t.alertNewBadge
        .replace('{{emoji}}', badge.emoji)
        .replace('{{name}}', badge.name)
        .replace('{{desc}}', badge.desc);
    alert(msg);
}

// ========== NOTES ==========
function initNotes() {
    const noteBtns = document.querySelectorAll('.note-btn');
    const modal = document.getElementById('noteModal');
    const saveBtn = document.getElementById('saveNote');
    const cancelBtn = document.getElementById('cancelNote');
    const noteText = document.getElementById('noteText');

    noteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const week = btn.dataset.week;
            const day = btn.dataset.day;
            currentNoteTarget = { week, day };

            const savedNote = localStorage.getItem(`note_${week}_${day}`) || '';
            noteText.value = savedNote;

            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    saveBtn.addEventListener('click', () => {
        if (currentNoteTarget) {
            const { week, day } = currentNoteTarget;
            localStorage.setItem(`note_${week}_${day}`, noteText.value);
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            saveToFirebase();
        }
    });

    cancelBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    });
}

// ========== EXPORT ==========
function initExport() {
    const exportBtn = document.getElementById('exportBtn');

    exportBtn.addEventListener('click', () => {
        const data = getAllData();
        downloadJSON(data);
    });
}

function getAllData() {
    const checkboxes = document.querySelectorAll('.checkbox-custom');
    const sessions = {};

    checkboxes.forEach(cb => {
        const key = getCheckboxKey(cb);
        sessions[key] = cb.checked;
    });

    return {
        version: '1.1',
        exportDate: new Date().toISOString(),
        profile: JSON.parse(localStorage.getItem('userProfile') || '{}'),
        sessions,
        history: getSessionHistory(),
        badges: getUnlockedBadges(),
        notes: getAllNotes(),
        settings: {
            darkMode: localStorage.getItem('darkMode'),
            days: getAllDaySelections()
        }
    };
}

function getAllNotes() {
    const notes = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('note_')) {
            notes[key] = localStorage.getItem(key);
        }
    }
    return notes;
}

function getAllDaySelections() {
    const days = {};
    for (let week = 1; week <= 4; week++) {
        days[`week${week}`] = localStorage.getItem(`${week}_days`);
    }
    days.maintenance = localStorage.getItem('maintenance_days');
    return days;
}

function downloadJSON(data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `marche-progression-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// ========== NOTIFICATIONS ==========
function initNotifications() {
    if ('Notification' in window && Notification.permission === 'default') {
        setTimeout(() => {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Notifications activées !');
                }
            });
        }, 2000);
    }
}

// ========== PROFIL UTILISATEUR ==========
function initProfile() {
    loadUserProfile();

    const saveBtn = document.getElementById('saveProfile');
    const weightInput = document.getElementById('userWeight');
    const heightInput = document.getElementById('userHeight');

    // Mettre à jour les calories quand le poids change
    weightInput.addEventListener('input', () => {
        updateCaloriesPerMinute();
        updateBMI();
    });

    heightInput.addEventListener('input', () => {
        updateBMI();
    });

    document.getElementById('weightUnit').addEventListener('change', () => {
        updateCaloriesPerMinute();
        updateBMI();
    });

    document.getElementById('heightUnit').addEventListener('change', () => {
        updateBMI();
        updateHeightHelper();
    });

    // Initialiser le helper
    updateHeightHelper();

    saveBtn.addEventListener('click', () => {
        saveUserProfile();
    });
}

function loadUserProfile() {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');

    document.getElementById('userName').value = profile.name || '';
    document.getElementById('userWeight').value = profile.weight || 250;
    document.getElementById('weightUnit').value = profile.weightUnit || 'lb';
    document.getElementById('userHeight').value = profile.height || '';
    document.getElementById('heightUnit').value = profile.heightUnit || 'pi';
    document.getElementById('userAge').value = profile.age || '';
    document.getElementById('userGoal').value = profile.goal || 'cardio';

    // Charger le poids pour les calculs
    const weightInLbs = profile.weightUnit === 'kg'
        ? (profile.weight || 250) * 2.20462
        : (profile.weight || 250);

    USER_WEIGHT_LBS = weightInLbs;
    updateCaloriesPerMinute();
    updateBMI();
    updateGreeting();
}

function updateGreeting() {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const greetingEl = document.getElementById('userGreeting');
    const objectiveEl = document.getElementById('userObjective');
    const t = translations[currentLanguage];

    if (profile.name) {
        const appName = currentLanguage === 'fr' ? 'Marc-he' : 'Walk-On';
        greetingEl.textContent = currentLanguage === 'fr' ? `${appName} de ${profile.name}` : `${profile.name}'s ${appName}`;
    } else {
        greetingEl.textContent = t.appTitle;
    }

    const goalTexts = {
        'cardio': currentLanguage === 'fr' ? `Objectif : ${t.goalCardio}` : `Goal: ${t.goalCardio}`,
        'weight': currentLanguage === 'fr' ? `Objectif : ${t.goalWeight}` : `Goal: ${t.goalWeight}`,
        'joints': currentLanguage === 'fr' ? `Objectif : ${t.goalJoints}` : `Goal: ${t.goalJoints}`,
        'health': currentLanguage === 'fr' ? `Objectif : ${t.goalHealth}` : `Goal: ${t.goalHealth}`,
        'habit': currentLanguage === 'fr' ? `Objectif : ${t.goalHabit}` : `Goal: ${t.goalHabit}`
    };

    if (profile.goal && goalTexts[profile.goal]) {
        objectiveEl.textContent = goalTexts[profile.goal];
    } else {
        objectiveEl.textContent = t.appSubtitle;
    }
}

function saveUserProfile() {
    const profile = {
        name: document.getElementById('userName').value,
        weight: parseFloat(document.getElementById('userWeight').value) || 250,
        weightUnit: document.getElementById('weightUnit').value,
        height: parseFloat(document.getElementById('userHeight').value) || 0,
        heightUnit: document.getElementById('heightUnit').value,
        age: parseInt(document.getElementById('userAge').value) || 0,
        goal: document.getElementById('userGoal').value
    };

    localStorage.setItem('userProfile', JSON.stringify(profile));

    // Mettre à jour le poids global
    const weightInLbs = profile.weightUnit === 'kg'
        ? profile.weight * 2.20462
        : profile.weight;

    USER_WEIGHT_LBS = weightInLbs;
    updateCaloriesPerMinute();
    updateBMI();
    updateGreeting();
    updateStats();
    saveToFirebase();

    const t = translations[currentLanguage];
    const name = profile.name || t.champion;
    alert(t.alertProfileSaved.replace('{{name}}', name));
}

function updateCaloriesPerMinute() {
    const weight = parseFloat(document.getElementById('userWeight').value) || 250;
    const unit = document.getElementById('weightUnit').value;

    const weightInLbs = unit === 'kg' ? weight * 2.20462 : weight;

    // Formule approximative : 0.029 * poids_kg * vitesse_km/h
    // Pour une marche modérée (5 km/h) avec poids en lb
    const weightInKg = weightInLbs / 2.20462;
    CALORIES_PER_MIN = (0.029 * weightInKg * 5) / 60;

    document.getElementById('caloriesPerMin').textContent = CALORIES_PER_MIN.toFixed(1);
}

function updateBMI() {
    const weight = parseFloat(document.getElementById('userWeight').value);
    const height = parseFloat(document.getElementById('userHeight').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;

    if (!weight || !height) {
        document.getElementById('bmiDisplay').textContent = '--';
        return;
    }

    // Convertir en kg et mètres
    const weightKg = weightUnit === 'lb' ? weight / 2.20462 : weight;

    // Conversion pieds en mètres : 1 pied = 0.3048 mètres
    // Si height = 5.5 pieds (5 pieds 6 pouces), ça fait 5.5 * 0.3048 = 1.6764 m
    let heightM;
    if (heightUnit === 'pi') {
        heightM = height * 0.3048; // Pieds directement en mètres
    } else {
        heightM = height / 100; // cm en mètres
    }

    const bmi = weightKg / (heightM * heightM);
    document.getElementById('bmiDisplay').textContent = bmi.toFixed(1);
}

function updateHeightHelper() {
    const heightUnit = document.getElementById('heightUnit').value;
    const helper = document.getElementById('heightHelper');

    if (heightUnit === 'pi') {
        helper.textContent = 'Ex: 5.5 pieds (5 pieds 6 pouces) ou 6.0 pieds (6 pieds 0 pouces)';
    } else {
        helper.textContent = 'Ex: 170 cm';
    }
}

function checkFirstTimeUser() {
    const hasProfile = localStorage.getItem('userProfile');
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');

    if (!hasProfile && !hasSeenWelcome) {
        setTimeout(() => {
            const t = translations[currentLanguage];
            const response = confirm(t.alertWelcome);

            if (response) {
                // Ouvrir l'onglet Profil
                const profilTab = document.querySelector('[data-tab="profil"]');
                if (profilTab) profilTab.click();
            }

            localStorage.setItem('hasSeenWelcome', 'true');
        }, 1000);
    }
}

// ========== FIREBASE SYNC ==========
function initFirebase() {
    console.log('🔥 Initializing Firebase...');
    const authBtn = document.getElementById('authBtn');
    const authBtnText = document.getElementById('authBtnText');

    function updateAuthUI(user) {
        const t = translations[currentLanguage];
        if (user) {
            const firstName = (user.displayName || '').split(' ')[0] || 'User';
            authBtnText.textContent = firstName;
            authBtn.title = user.email;
            authBtn.onclick = () => {
                if (confirm(t.alertLogout)) {
                    firebase.auth().signOut();
                }
            };
            document.getElementById('syncLabel').style.display = 'inline';
        } else {
            authBtnText.textContent = t.btnLogin;
            const tooltipText = currentLanguage === 'fr' ? 'Se connecter avec Google pour synchroniser' : 'Sign in with Google to sync';
            authBtn.title = tooltipText;
            authBtn.onclick = () => {
                const provider = new firebase.auth.GoogleAuthProvider();
                // Force account selection every time
                provider.setCustomParameters({
                    prompt: 'select_account'
                });
                firebase.auth().signInWithPopup(provider)
                    .catch(err => {
                        if (err.code !== 'auth/popup-closed-by-user') {
                            const errorMsg = currentLanguage === 'fr' ? 'Erreur de connexion : ' : 'Connection error: ';
                            alert(errorMsg + err.message);
                        }
                    });
            };
            document.getElementById('syncLabel').style.display = 'none';
        }
    }

    firebase.auth().onAuthStateChanged(user => {
        console.log('🔐 Firebase Auth State Changed:', user ? `Logged in as ${user.email}` : 'Not logged in');
        fbCurrentUser = user;
        updateAuthUI(user);

        if (!user) {
            console.log('❌ User not logged in - Firebase sync disabled');
            if (fbUserRef) {
                fbUserRef.off();
                fbUserRef = null;
            }
            return;
        }

        console.log('✅ User logged in - Setting up Firebase sync for UID:', user.uid);

        // Référence Firebase pour cet utilisateur
        fbUserRef = firebase.database().ref(`walking-program/${user.uid}`);
        fbSyncingCount = 0;

        // Écouter les changements depuis Firebase
        fbUserRef.on('value', snapshot => {
            const data = snapshot.val();
            console.log('📥 Firebase data received:', data ? 'Data exists' : 'No data');

            if (!data) {
                console.log('⚠️ No data received');
                return;
            }

            if (data.lastModified) {
                updateSyncIndicator(data.lastModified);
            }

            console.log('🔄 Syncing data from Firebase...');

            const hasRemote = !!(data.profile !== undefined || data.sessions !== undefined);
            const hasLocal = !!(localStorage.getItem('userProfile'));

            if (!hasRemote && !hasLocal) {
                console.log('⚠️ No remote or local data to sync');
                return;
            }

            let needsPush = false;

            if (hasRemote) {
                // Merge des données
                if (data.profile) {
                    const localProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
                    const mergedProfile = Object.assign({}, data.profile, localProfile);
                    localStorage.setItem('userProfile', JSON.stringify(mergedProfile));
                    loadUserProfile();
                }

                if (data.sessions) {
                    // Merge des sessions
                    Object.keys(data.sessions).forEach(key => {
                        const localValue = localStorage.getItem(key);
                        if (!localValue) {
                            localStorage.setItem(key, data.sessions[key]);
                            needsPush = false;
                        } else if (localValue !== data.sessions[key]) {
                            needsPush = true;
                        }
                    });
                }

                if (data.history) {
                    const localHistory = getSessionHistory();
                    const mergedHistory = Object.assign({}, data.history, localHistory);
                    localStorage.setItem('sessionHistory', JSON.stringify(mergedHistory));
                }

                if (data.badges) {
                    const localBadges = getUnlockedBadges();
                    const remoteBadges = data.badges || [];
                    const merged = [...new Set([...remoteBadges, ...localBadges])];
                    localStorage.setItem('unlockedBadges', JSON.stringify(merged));
                }

                if (data.notes) {
                    Object.keys(data.notes).forEach(key => {
                        if (!localStorage.getItem(key)) {
                            localStorage.setItem(key, data.notes[key]);
                        }
                    });
                }

                if (data.darkMode !== undefined) {
                    const isDark = data.darkMode === 'true';
                    localStorage.setItem('darkMode', data.darkMode);
                    document.body.classList.toggle('dark-mode', isDark);
                    document.getElementById('darkModeToggle').innerHTML = isDark
                        ? '<span class="text-xl sm:text-2xl">☀️</span>'
                        : '<span class="text-xl sm:text-2xl">🌙</span>';
                }

                if (data.language !== undefined) {
                    const oldLanguage = currentLanguage;
                    currentLanguage = data.language;
                    localStorage.setItem('language', data.language);
                    const selector = document.getElementById('languageSelector');
                    if (selector) selector.value = data.language;
                    if (oldLanguage !== data.language) {
                        updateLanguage();
                    }
                }

                console.log('🔄 Updating UI with synced data...');
                console.log('📋 Step 1: Loading checkbox progress...');
                loadProgress();
                console.log('📊 Step 2: Updating progress bar...');
                updateProgress();
                console.log('🏆 Step 3: Rendering badges...');
                renderBadges();
                console.log('📅 Step 4: Rendering calendar...');
                renderCalendar();
                console.log('📈 Step 5: Updating stats...');
                updateStats();
                console.log('✅ UI fully updated!');

                if (needsPush) {
                    console.log('📤 Pushing local changes to Firebase...');
                    saveToFirebase();
                }
            } else {
                // Pas de données Firebase, envoyer les locales
                console.log('📤 No remote data - sending local data to Firebase...');
                saveToFirebase();
            }
        }, err => {
            console.error('Firebase listener error:', err);
            const errorMsg = currentLanguage === 'fr'
                ? `❌ Erreur de synchronisation Firebase :\n\n${err.message}\n\nVérifie les règles de sécurité dans la console Firebase.`
                : `❌ Firebase sync error:\n\n${err.message}\n\nCheck security rules in Firebase console.`;
            alert(errorMsg);
        });
    });
}

function updateSyncIndicator(isoDate) {
    const el = document.getElementById('syncLabel');
    if (!el || !isoDate) return;

    const diff = Math.floor((Date.now() - new Date(isoDate)) / 86400000);
    const t = translations[currentLanguage];
    let text;

    if (diff === 0) text = t.syncToday;
    else if (diff === 1) text = t.syncYesterday;
    else text = t.syncDaysAgo.replace('{{days}}', diff);

    el.textContent = text;
    el.title = new Date(isoDate).toLocaleString();
}

function saveToFirebase() {
    if (!fbCurrentUser || !fbUserRef) {
        console.log('Firebase sync skipped: user not logged in');
        return;
    }

    console.log('Saving to Firebase...');
    const nowIso = new Date().toISOString();

    // Collecter toutes les sessions
    const sessions = {};
    const checkboxes = document.querySelectorAll('.checkbox-custom');
    checkboxes.forEach(cb => {
        const key = getCheckboxKey(cb);
        sessions[key] = String(cb.checked);
    });

    // Collecter les sélections de jours
    const days = {};
    for (let week = 1; week <= 4; week++) {
        days[`${week}_days`] = localStorage.getItem(`${week}_days`);
    }
    days.maintenance_days = localStorage.getItem('maintenance_days');

    // Collecter les notes
    const notes = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('note_')) {
            notes[key] = localStorage.getItem(key);
        }
    }

    const dataToSave = {
        profile: JSON.parse(localStorage.getItem('userProfile') || '{}'),
        sessions: sessions,
        days: days,
        history: getSessionHistory(),
        badges: getUnlockedBadges(),
        notes: notes,
        darkMode: localStorage.getItem('darkMode') || 'false',
        language: localStorage.getItem('language') || 'fr',
        lastModified: nowIso
    };

    console.log('Data to save:', dataToSave);

    fbUserRef.set(dataToSave)
    .then(() => {
        console.log('✅ Firebase sync successful!');
        updateSyncIndicator(nowIso);
    })
    .catch(err => {
        console.error('❌ Firebase save error:', err);
        const errorMsg = currentLanguage === 'fr'
            ? `Erreur de synchronisation : ${err.message}`
            : `Sync error: ${err.message}`;
        alert(errorMsg);
    });
}
