// Rowhni ModernHomeView Experience - Focused & Beautiful
(function() {
    'use strict';

    // Simple app state
    let appState = {
        dhikr: {
            count: 0,
            target: 33,
            currentDhikr: 'subhanallah'
        }
    };

    // Dhikr data with authentic Arabic texts
    const dhikrData = {
        'subhanallah': {
            arabic: 'سُبْحَانَ اللّٰهِ',
            transliteration: 'SubhanAllah',
            translation: 'Glory be to Allah',
            target: 33
        },
        'alhamdulillah': {
            arabic: 'الْحَمْدُ لِلّٰهِ',
            transliteration: 'Alhamdulillah',
            translation: 'Praise be to Allah',
            target: 33
        },
        'allahu-akbar': {
            arabic: 'اللّٰهُ أَكْبَرُ',
            transliteration: 'Allahu Akbar',
            translation: 'Allah is the Greatest',
            target: 34
        },
        'la-ilaha-illallah': {
            arabic: 'لَا إِلٰهَ إِلَّا اللّٰهُ',
            transliteration: 'La ilaha illallah',
            translation: 'There is no god but Allah',
            target: 100
        }
    };

    // Initialize when DOM loads
    document.addEventListener('DOMContentLoaded', function() {
        initializeAnimations();
        initializeTasbihCounter();
        initializePrayerCards();
    });

    // Initialize beautiful animations
    function initializeAnimations() {
        // Scroll-triggered animations
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe animated elements
        document.querySelectorAll('.tasbih-widget, .section-header').forEach(function(el) {
            observer.observe(el);
        });
    }

    // Initialize Tasbih Counter
    function initializeTasbihCounter() {
        const tapButton = document.getElementById('tapButton');
        const resetButton = document.getElementById('resetButton');
        const voiceButton = document.getElementById('voiceButton');
        const dhikrSelect = document.getElementById('dhikrSelect');

        if (!tapButton) return;

        // Tap to count with beautiful animation
        tapButton.addEventListener('click', function(e) {
            incrementCount();
            createRippleEffect(e, tapButton);
            playHapticFeedback();
        });

        // Reset counter
        resetButton?.addEventListener('click', function() {
            resetCounter();
        });

        // Voice mode demo
        voiceButton?.addEventListener('click', function() {
            toggleVoiceMode();
        });

        // Dhikr selection
        dhikrSelect?.addEventListener('change', function(e) {
            changeDhikr(e.target.value);
        });

        // Initialize display
        updateDhikrDisplay();
        updateProgress();
    }

    function incrementCount() {
        appState.dhikr.count++;
        
        // Beautiful count animation
        const countElement = document.getElementById('currentCount');
        if (countElement) {
            countElement.classList.add('count-animation');
            countElement.textContent = appState.dhikr.count;
            
            setTimeout(() => {
                countElement.classList.remove('count-animation');
            }, 400);
        }

        updateProgress();

        // Celebration when target reached
        if (appState.dhikr.count >= appState.dhikr.target) {
            celebrateCompletion();
        }
    }

    function updateProgress() {
        const progress = appState.dhikr.count / appState.dhikr.target;
        const circumference = 2 * Math.PI * 90; // radius = 90
        const offset = circumference - (progress * circumference);
        
        const progressCircle = document.getElementById('progressCircle');
        if (progressCircle) {
            progressCircle.style.strokeDashoffset = offset;
            progressCircle.style.transition = 'stroke-dashoffset 0.5s ease-out';
        }
    }

    function celebrateCompletion() {
        const tapButton = document.getElementById('tapButton');
        const originalBg = tapButton.style.background;
        
        // Golden celebration
        tapButton.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
        tapButton.querySelector('.button-text').textContent = 'SubhanAllah! Completed 🎉';
        
        // Celebration particles (simple)
        createCelebrationEffect();
        
        // Reset after celebration
        setTimeout(() => {
            tapButton.style.background = originalBg;
            tapButton.querySelector('.button-text').textContent = 'Tap to Count';
            resetCounter();
        }, 3000);
    }

    function createCelebrationEffect() {
        // Simple celebration with CSS animation
        const tapButton = document.getElementById('tapButton');
        tapButton.style.animation = 'pulse 0.6s ease-out 3';
    }

    function resetCounter() {
        appState.dhikr.count = 0;
        const countElement = document.getElementById('currentCount');
        if (countElement) {
            countElement.textContent = '0';
        }
        updateProgress();
    }

    function changeDhikr(dhikrKey) {
        appState.dhikr.currentDhikr = dhikrKey;
        const dhikrInfo = dhikrData[dhikrKey];
        appState.dhikr.target = dhikrInfo.target;
        
        document.getElementById('targetCount').textContent = dhikrInfo.target;
        updateDhikrDisplay();
        resetCounter();
    }

    function updateDhikrDisplay() {
        const current = dhikrData[appState.dhikr.currentDhikr];
        document.getElementById('arabicText').textContent = current.arabic;
        document.getElementById('transliteration').textContent = current.transliteration;
        document.getElementById('translation').textContent = current.translation;
    }

    function toggleVoiceMode() {
        const voiceButton = document.getElementById('voiceButton');
        const isListening = voiceButton.classList.toggle('listening');
        
        if (isListening) {
            voiceButton.textContent = '🔴 Listening...';
            startVoiceDemo();
        } else {
            voiceButton.textContent = '🎤 Voice Mode';
            stopVoiceDemo();
        }
    }

    function startVoiceDemo() {
        // Demo: Auto-increment every 2.5 seconds
        window.voiceInterval = setInterval(() => {
            if (Math.random() > 0.4) { // 60% chance to increment
                incrementCount();
            }
        }, 2500);
    }

    function stopVoiceDemo() {
        if (window.voiceInterval) {
            clearInterval(window.voiceInterval);
            window.voiceInterval = null;
        }
    }

    // Beautiful ripple effect
    function createRippleEffect(event, button) {
        const rippleContainer = button.querySelector('.ripple-container');
        if (!rippleContainer) return;

        const ripple = document.createElement('div');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        rippleContainer.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Haptic feedback for mobile
    function playHapticFeedback() {
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }

    // Prayer Cards Animation
    function initializePrayerCards() {
        // Rotate current prayer for demo
        const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
        let currentIndex = 1; // Start with dhuhr as current
        
        setInterval(() => {
            // Remove current class from all cards
            document.querySelectorAll('.prayer-card').forEach(card => {
                card.classList.remove('current');
            });
            
            // Add current class to next prayer
            currentIndex = (currentIndex + 1) % prayers.length;
            const currentCard = document.querySelector(`[data-prayer="${prayers[currentIndex]}"]`);
            if (currentCard) {
                currentCard.classList.add('current');
                
                // Update countdown
                const status = currentCard.querySelector('.prayer-status');
                if (status && !status.classList.contains('current-indicator')) {
                    const randomHours = Math.floor(Math.random() * 6) + 1;
                    const randomMinutes = Math.floor(Math.random() * 59) + 1;
                    status.textContent = `in ${randomHours}h ${randomMinutes}m`;
                }
            }
        }, 15000); // Change every 15 seconds for demo
    }

    // Smooth scrolling
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a[href^="#"]');
        if (!target) return;
        
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // Export for console testing
    window.rowhniDemo = {
        incrementCount,
        resetCounter,
        changeDhikr: changeDhikr
    };

})();