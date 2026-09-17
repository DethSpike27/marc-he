// ========== CONFIGURATION ==========
// Valeurs par défaut - seront remplacées par le profil utilisateur
let USER_WEIGHT_LBS = 295;
let CALORIES_PER_MIN = 4.5; // Sera recalculé selon le poids

const dayNames = {
    'L': 'Lundi',
    'M': 'Mardi',
    'M2': 'Mercredi',
    'J': 'Jeudi',
    'V': 'Vendredi',
    'S': 'Samedi',
    'D': 'Dimanche'
};

const badges = [
    { id: 'first', name: 'Premier Pas', desc: 'Première séance complétée', emoji: '👟', requirement: 1 },
    { id: 'week1', name: 'Une Semaine', desc: '3 séances en une semaine', emoji: '🗓️', requirement: 3 },
    { id: 'consistent', name: 'Régularité', desc: '5 séances complétées', emoji: '📈', requirement: 5 },
    { id: 'tenner', name: 'Double Chiffre', desc: '10 séances complétées', emoji: '🔟', requirement: 10 },
    { id: 'halfWay', name: 'Mi-Parcours', desc: '12 séances (50% du programme)', emoji: '⭐', requirement: 12 },
    { id: 'champion', name: 'Champion', desc: '24 séances complétées', emoji: '🏆', requirement: 24 },
    { id: 'marathon', name: 'Marathonien', desc: '100 minutes cumulées', emoji: '🎯', requirement: 100, type: 'minutes' },
    { id: 'warrior', name: 'Guerrier', desc: '500 minutes cumulées', emoji: '⚡', requirement: 500, type: 'minutes' },
    { id: 'legend', name: 'Légende', desc: '1000 minutes cumulées', emoji: '👑', requirement: 1000, type: 'minutes' },
];

// ========== ÉTAT DE L'APPLICATION ==========
let currentNoteTarget = null;
let timerInterval = null;
let timerSeconds = 0;
let timerDuration = 900; // 15 min par défaut
let timerRunning = false;
let timerHalfwayAlerted = false; // Pour la mi-temps
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let statsChart = null;

// ========== FIREBASE ==========
let fbCurrentUser = null;
let fbUserRef = null;
let fbSyncingCount = 0;

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initProfile();
    initTabs();
    initDarkMode();
    initDaySelectors();
    initCheckboxes();
    initTimer();
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
                    alert('Tu peux sélectionner maximum 3 jours par semaine');
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
                    alert('🎉 Félicitations ! Tu as complété les 8 premières semaines !\n\nLe mode maintien est maintenant débloqué ! 💪');
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
        if (confirm('⚠️ Es-tu sûr de vouloir recommencer au niveau débutant ?\n\nCela effacera toute ta progression.')) {
            if (confirm('Dernière confirmation : Tout sera effacé. Continuer ?')) {
                localStorage.clear();
                location.reload();
            }
        }
    });

    if (newWeekBtn) {
        newWeekBtn.addEventListener('click', () => {
            if (confirm('Commencer une nouvelle semaine ? Cela réinitialisera les cases actuelles.')) {
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
    const checkboxes = document.querySelectorAll('.checkbox-custom:not(.maintenance-checkbox)');
    const maintenanceCheckboxes = document.querySelectorAll('.maintenance-checkbox');

    checkboxes.forEach(checkbox => {
        const key = getCheckboxKey(checkbox);
        checkbox.checked = localStorage.getItem(key) === 'true';
    });

    maintenanceCheckboxes.forEach(checkbox => {
        const key = getCheckboxKey(checkbox);
        checkbox.checked = localStorage.getItem(key) === 'true';
    });
}

function saveCheckbox(checkbox) {
    const key = getCheckboxKey(checkbox);
    localStorage.setItem(key, checkbox.checked);

    if (checkbox.checked) {
        const date = new Date().toISOString().split('T')[0];
        const duration = parseInt(checkbox.dataset.duration) || 30;
        saveSessionToHistory(date, duration);
    }

    // Sync Firebase
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

    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${checkedCount}/24 séances`;

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

// ========== TIMER ==========
function initTimer() {
    const durationBtns = document.querySelectorAll('.duration-btn');
    const startBtn = document.getElementById('startTimerBtn');
    const pauseBtn = document.getElementById('pauseTimerBtn');
    const stopBtn = document.getElementById('stopTimerBtn');

    durationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            timerDuration = parseInt(btn.dataset.duration) * 60;
            timerSeconds = 0;
            timerHalfwayAlerted = false;
            updateTimerDisplay();
            updateCaloriesDisplay();
            updatePhaseIndicator();
        });
    });

    startBtn.addEventListener('click', () => {
        if (!timerRunning) {
            timerRunning = true;
            timerHalfwayAlerted = false;
            startBtn.classList.add('hidden');
            pauseBtn.classList.remove('hidden');
            timerInterval = setInterval(() => {
                timerSeconds++;
                updateTimerDisplay();
                updateCaloriesDisplay();
                updatePhaseIndicator();

                // Alerte mi-temps (demi-tour)
                const halfway = Math.floor(timerDuration / 2);
                if (timerSeconds === halfway && !timerHalfwayAlerted) {
                    timerHalfwayAlerted = true;
                    playNotificationSound();
                    playNotificationSound(); // Double son pour la mi-temps

                    if (Notification.permission === 'granted') {
                        new Notification('🔔 Mi-temps - Fais demi-tour !', {
                            body: 'C\'est le moment de retourner vers ton point de départ.',
                            icon: '🔙'
                        });
                    } else {
                        alert('🔔 MI-TEMPS !\n\nFais demi-tour maintenant pour retourner à ton point de départ ! 🔙');
                    }
                }

                // Fin du timer
                if (timerSeconds >= timerDuration) {
                    stopTimer();
                    playNotificationSound();
                    playNotificationSound();
                    playNotificationSound(); // Triple son pour la fin

                    if (Notification.permission === 'granted') {
                        new Notification('🎉 Marche terminée !', {
                            body: 'Bravo ! Tu as complété ta séance.',
                            icon: '👟'
                        });
                    } else {
                        alert('🎉 MARCHE TERMINÉE !\n\nBravo ! Tu as complété ta séance ! 👟');
                    }
                }
            }, 1000);
        }
    });

    pauseBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerRunning = false;
        startBtn.classList.remove('hidden');
        pauseBtn.classList.add('hidden');
    });

    stopBtn.addEventListener('click', () => {
        stopTimer();
    });
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerSeconds = 0;
    timerHalfwayAlerted = false;
    document.getElementById('startTimerBtn').classList.remove('hidden');
    document.getElementById('pauseTimerBtn').classList.add('hidden');
    updateTimerDisplay();
    updateCaloriesDisplay();
    updatePhaseIndicator();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timerDisplay').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Mettre à jour la barre de progression
    const progress = (timerSeconds / timerDuration) * 100;
    document.getElementById('timerProgressBar').style.width = `${progress}%`;
}

function updatePhaseIndicator() {
    const phaseIndicator = document.getElementById('phaseIndicator');
    const phaseText = document.getElementById('phaseText');
    const halfwayLabel = document.getElementById('halfwayLabel');
    const halfway = Math.floor(timerDuration / 2);

    if (!timerRunning && timerSeconds === 0) {
        phaseIndicator.style.background = '#e5e7eb';
        phaseText.textContent = 'Prêt à démarrer';
        phaseText.style.color = '#4b5563';
        halfwayLabel.textContent = 'Mi-temps';
        halfwayLabel.style.color = '';
        halfwayLabel.style.fontWeight = '';
    } else if (timerSeconds < halfway) {
        // Phase ALLER
        const remaining = halfway - timerSeconds;
        const minRemaining = Math.floor(remaining / 60);
        const secRemaining = remaining % 60;
        phaseIndicator.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
        phaseText.textContent = `🚶 ALLER - Demi-tour dans ${minRemaining}:${String(secRemaining).padStart(2, '0')}`;
        phaseText.style.color = 'white';
        halfwayLabel.textContent = 'Mi-temps 🔔';
        halfwayLabel.style.color = '#3b82f6';
        halfwayLabel.style.fontWeight = 'bold';
    } else {
        // Phase RETOUR
        const remaining = timerDuration - timerSeconds;
        const minRemaining = Math.floor(remaining / 60);
        const secRemaining = remaining % 60;
        phaseIndicator.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)';
        phaseText.textContent = `🔙 RETOUR - Arrivée dans ${minRemaining}:${String(secRemaining).padStart(2, '0')}`;
        phaseText.style.color = 'white';
        halfwayLabel.textContent = 'Mi-temps ✅';
        halfwayLabel.style.color = '#8b5cf6';
        halfwayLabel.style.fontWeight = 'bold';
    }
}

function updateCaloriesDisplay() {
    const calories = Math.round((timerSeconds / 60) * CALORIES_PER_MIN);
    document.getElementById('caloriesDisplay').textContent = calories;
}

function playNotificationSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
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
    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
                        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    document.getElementById('calendarMonth').textContent = `${monthNames[currentMonth]} ${currentYear}`;

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
            dayDiv.title = `Séance de ${history[dateStr].duration} min`;
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

    statsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Minutes de marche',
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
    alert(`🎉 Nouveau badge débloqué !\n\n${badge.emoji} ${badge.name}\n${badge.desc}`);
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
    });

    saveBtn.addEventListener('click', () => {
        saveUserProfile();
    });
}

function loadUserProfile() {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');

    document.getElementById('userName').value = profile.name || '';
    document.getElementById('userWeight').value = profile.weight || 295;
    document.getElementById('weightUnit').value = profile.weightUnit || 'lb';
    document.getElementById('userHeight').value = profile.height || '';
    document.getElementById('heightUnit').value = profile.heightUnit || 'cm';
    document.getElementById('userAge').value = profile.age || '';
    document.getElementById('userGoal').value = profile.goal || 'cardio';

    // Charger le poids pour les calculs
    const weightInLbs = profile.weightUnit === 'kg'
        ? (profile.weight || 295) * 2.20462
        : (profile.weight || 295);

    USER_WEIGHT_LBS = weightInLbs;
    updateCaloriesPerMinute();
    updateBMI();
    updateGreeting();
}

function updateGreeting() {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const greetingEl = document.getElementById('userGreeting');
    const objectiveEl = document.getElementById('userObjective');

    if (profile.name) {
        greetingEl.textContent = `Programme de Marche de ${profile.name}`;
    } else {
        greetingEl.textContent = 'Mon Programme de Marche Progressif';
    }

    const goalTexts = {
        'cardio': 'Objectif : Améliorer mon cardio',
        'weight': 'Objectif : Perdre du poids',
        'joints': 'Objectif : Protéger mes articulations',
        'health': 'Objectif : Santé générale',
        'habit': 'Objectif : Créer une habitude de marche'
    };

    if (profile.goal && goalTexts[profile.goal]) {
        objectiveEl.textContent = goalTexts[profile.goal];
    } else {
        objectiveEl.textContent = 'Objectif : Cardio et santé articulaire';
    }
}

function saveUserProfile() {
    const profile = {
        name: document.getElementById('userName').value,
        weight: parseFloat(document.getElementById('userWeight').value) || 295,
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

    const name = profile.name || 'Champion';
    alert(`✅ Profil sauvegardé !\n\nBienvenue ${name} ! Tes paramètres ont été mis à jour.`);
}

function updateCaloriesPerMinute() {
    const weight = parseFloat(document.getElementById('userWeight').value) || 295;
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

    // Convertir en kg et cm
    const weightKg = weightUnit === 'lb' ? weight / 2.20462 : weight;
    const heightCm = heightUnit === 'pi' ? height * 30.48 : height;
    const heightM = heightCm / 100;

    const bmi = weightKg / (heightM * heightM);
    document.getElementById('bmiDisplay').textContent = bmi.toFixed(1);
}

function checkFirstTimeUser() {
    const hasProfile = localStorage.getItem('userProfile');
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');

    if (!hasProfile && !hasSeenWelcome) {
        setTimeout(() => {
            const response = confirm(
                '👋 Bienvenue dans ton Programme de Marche Progressif !\n\n' +
                'Pour une meilleure expérience personnalisée, veux-tu configurer ton profil maintenant ?\n\n' +
                '(Poids, taille, objectif...)\n\n' +
                'Tu pourras le faire plus tard dans l\'onglet "Profil".'
            );

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
    const authBtn = document.getElementById('authBtn');
    const authBtnText = document.getElementById('authBtnText');

    function updateAuthUI(user) {
        if (user) {
            const firstName = (user.displayName || '').split(' ')[0] || 'Utilisateur';
            authBtnText.textContent = firstName;
            authBtn.title = user.email;
            authBtn.onclick = () => {
                if (confirm('Se déconnecter de Google ?')) {
                    firebase.auth().signOut();
                }
            };
            document.getElementById('syncLabel').style.display = 'inline';
        } else {
            authBtnText.textContent = 'Se connecter';
            authBtn.title = 'Se connecter avec Google pour synchroniser';
            authBtn.onclick = () => {
                firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
                    .catch(err => {
                        if (err.code !== 'auth/popup-closed-by-user') {
                            alert('Erreur de connexion : ' + err.message);
                        }
                    });
            };
            document.getElementById('syncLabel').style.display = 'none';
        }
    }

    firebase.auth().onAuthStateChanged(user => {
        fbCurrentUser = user;
        updateAuthUI(user);

        if (!user) {
            if (fbUserRef) {
                fbUserRef.off();
                fbUserRef = null;
            }
            return;
        }

        // Référence Firebase pour cet utilisateur
        fbUserRef = firebase.database().ref(`walking-program/${user.uid}`);
        fbSyncingCount = 0;

        // Écouter les changements depuis Firebase
        fbUserRef.on('value', snapshot => {
            if (fbSyncingCount > 0) return; // Ignore nos propres sauvegardes

            const data = snapshot.val();
            if (data && data.lastModified) {
                updateSyncIndicator(data.lastModified);
            }

            const hasRemote = !!(data && data.profile !== undefined);
            const hasLocal = !!(localStorage.getItem('userProfile'));

            if (!hasRemote && !hasLocal) return;

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

                loadProgress();
                updateProgress();
                renderBadges();
                renderCalendar();
                updateStats();

                if (needsPush) saveToFirebase();
            } else {
                // Pas de données Firebase, envoyer les locales
                saveToFirebase();
            }
        }, err => {
            console.error('Firebase listener error:', err);
        });
    });
}

function updateSyncIndicator(isoDate) {
    const el = document.getElementById('syncLabel');
    if (!el || !isoDate) return;

    const diff = Math.floor((Date.now() - new Date(isoDate)) / 86400000);
    let text;

    if (diff === 0) text = 'sync : aujourd\'hui';
    else if (diff === 1) text = 'sync : hier';
    else text = `sync : il y a ${diff}j`;

    el.textContent = text;
    el.title = new Date(isoDate).toLocaleString();
}

function saveToFirebase() {
    if (!fbCurrentUser || !fbUserRef) return;

    fbSyncingCount++;
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

    fbUserRef.set({
        profile: JSON.parse(localStorage.getItem('userProfile') || '{}'),
        sessions: sessions,
        days: days,
        history: getSessionHistory(),
        badges: getUnlockedBadges(),
        notes: notes,
        darkMode: localStorage.getItem('darkMode') || 'false',
        lastModified: nowIso
    })
    .then(() => {
        fbSyncingCount--;
        updateSyncIndicator(nowIso);
    })
    .catch(err => {
        fbSyncingCount--;
        console.error('Firebase save error:', err);
        alert('Erreur de synchronisation : ' + err.message);
    });
}
