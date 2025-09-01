// Rowhni App Experience - Interactive Widgets
(function() {
    'use strict';

    // App State
    let appState = {
        dhikr: {
            count: 0,
            target: 33,
            currentDhikr: 'subhanallah',
            totalCount: 0
        },
        prayer: {
            times: {},
            nextPrayer: '',
            currentLocation: 'Berlin, Germany'
        },
        qibla: {
            direction: 42,
            distance: 5847
        },
        zakat: {
            cash: 0,
            gold: 0,
            silver: 0,
            currency: 'EUR'
        },
        hijri: {
            day: 15,
            month: 'Muharram',
            year: 1446
        }
    };

    // Dhikr data
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

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initializeTasbihCounter();
        initializePrayerTimes();
        initializeQiblaCompass();
        initializeZakatCalculator();
        initializeHijriCalendar();
        updateStats();
    });

    // Tasbih Counter Functions
    function initializeTasbihCounter() {
        const tapButton = document.getElementById('tapButton');
        const resetButton = document.getElementById('resetButton');
        const voiceButton = document.getElementById('voiceButton');
        const dhikrSelect = document.getElementById('dhikrSelect');

        if (!tapButton) return;

        // Tap to count
        tapButton.addEventListener('click', function(e) {
            incrementCount();
            createRippleEffect(e, tapButton);
            playHapticFeedback();
        });

        // Reset counter
        resetButton?.addEventListener('click', function() {
            resetCounter();
        });

        // Voice recognition demo
        voiceButton?.addEventListener('click', function() {
            toggleVoiceRecognition();
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
        appState.dhikr.totalCount++;
        
        // Add animation class
        const countElement = document.getElementById('currentCount');
        if (countElement) {
            countElement.classList.add('count-animation');
            countElement.textContent = appState.dhikr.count;
            
            setTimeout(() => {
                countElement.classList.remove('count-animation');
            }, 300);
        }

        updateProgress();
        updateStats();

        // Check if target reached
        if (appState.dhikr.count >= appState.dhikr.target) {
            celebrateCompletion();
        }
    }

    function resetCounter() {
        appState.dhikr.count = 0;
        document.getElementById('currentCount').textContent = '0';
        updateProgress();
    }

    function changeDhikr(dhikrKey) {
        appState.dhikr.currentDhikr = dhikrKey;
        appState.dhikr.target = dhikrData[dhikrKey].target;
        document.getElementById('targetCount').textContent = appState.dhikr.target;
        updateDhikrDisplay();
        resetCounter();
    }

    function updateDhikrDisplay() {
        const current = dhikrData[appState.dhikr.currentDhikr];
        document.getElementById('arabicText').textContent = current.arabic;
        document.getElementById('transliteration').textContent = current.transliteration;
        document.getElementById('translation').textContent = current.translation;
        document.getElementById('targetCount').textContent = current.target;
    }

    function updateProgress() {
        const progress = appState.dhikr.count / appState.dhikr.target;
        const circumference = 2 * Math.PI * 54; // radius = 54
        const offset = circumference - (progress * circumference);
        
        const progressCircle = document.getElementById('progressCircle');
        if (progressCircle) {
            progressCircle.style.strokeDashoffset = offset;
        }
    }

    function celebrateCompletion() {
        // Visual celebration
        const tapButton = document.getElementById('tapButton');
        tapButton.style.background = '#FFD700';
        tapButton.querySelector('.button-text').textContent = 'Completed! 🎉';
        
        setTimeout(() => {
            tapButton.style.background = '#00FF88';
            tapButton.querySelector('.button-text').textContent = 'Tap to Count';
        }, 2000);

        // Auto-reset after celebration
        setTimeout(() => {
            resetCounter();
        }, 3000);
    }

    function toggleVoiceRecognition() {
        const voiceButton = document.getElementById('voiceButton');
        const isListening = voiceButton.classList.toggle('listening');
        
        if (isListening) {
            voiceButton.textContent = '🔴';
            // Simulate voice recognition
            startVoiceDemo();
        } else {
            voiceButton.textContent = '🎤';
            stopVoiceDemo();
        }
    }

    function startVoiceDemo() {
        // Demo: Auto-increment every 2 seconds
        window.voiceInterval = setInterval(() => {
            if (Math.random() > 0.3) { // 70% chance to increment
                incrementCount();
            }
        }, 2000);
    }

    function stopVoiceDemo() {
        if (window.voiceInterval) {
            clearInterval(window.voiceInterval);
            window.voiceInterval = null;
        }
    }

    // Prayer Times Functions
    function initializePrayerTimes() {
        updatePrayerTimes();
        setInterval(updatePrayerTimes, 60000); // Update every minute
        
        // Demo: Change current prayer every 30 seconds
        setInterval(rotatePrayerDemo, 30000);
    }

    function updatePrayerTimes() {
        const now = new Date();
        const prayerTimes = {
            fajr: '05:24',
            dhuhr: '12:18',
            asr: '15:42',
            maghrib: '18:35',
            isha: '20:12'
        };

        // Update prayer times display
        Object.keys(prayerTimes).forEach(prayer => {
            const element = document.getElementById(prayer + 'Time');
            if (element) {
                element.textContent = prayerTimes[prayer];
            }
        });

        // Calculate next prayer
        const currentTime = now.getHours() * 60 + now.getMinutes();
        let nextPrayer = 'fajr';
        let nextTime = '05:24';
        
        for (const [prayer, time] of Object.entries(prayerTimes)) {
            const [hours, minutes] = time.split(':').map(Number);
            const prayerMinutes = hours * 60 + minutes;
            
            if (prayerMinutes > currentTime) {
                nextPrayer = prayer;
                nextTime = time;
                break;
            }
        }

        updateNextPrayerCountdown(nextPrayer, nextTime);
    }

    function updateNextPrayerCountdown(prayer, time) {
        const now = new Date();
        const [hours, minutes] = time.split(':').map(Number);
        const prayerTime = new Date(now);
        prayerTime.setHours(hours, minutes, 0, 0);
        
        if (prayerTime < now) {
            prayerTime.setDate(prayerTime.getDate() + 1);
        }

        const diff = prayerTime - now;
        const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
        const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('nextPrayerName').textContent = prayer.charAt(0).toUpperCase() + prayer.slice(1);
        document.getElementById('nextPrayerCountdown').textContent = `in ${hoursLeft}h ${minutesLeft}m`;
    }

    function rotatePrayerDemo() {
        // Highlight different prayers for demo
        const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
        const current = prayers[Math.floor(Math.random() * prayers.length)];
        
        // Remove all current classes
        prayers.forEach(prayer => {
            const element = document.querySelector(`[data-prayer="${prayer}"]`);
            if (element) {
                element.classList.remove('current');
            }
        });
        
        // Add current class to random prayer
        const currentElement = document.querySelector(`[data-prayer="${current}"]`);
        if (currentElement) {
            currentElement.classList.add('current');
        }
    }

    // Qibla Compass Functions
    function initializeQiblaCompass() {
        updateQiblaDirection();
        
        // Animate compass needle
        setInterval(() => {
            const needle = document.getElementById('compassNeedle');
            if (needle) {
                const randomOffset = (Math.random() - 0.5) * 10; // ±5 degrees
                const newAngle = appState.qibla.direction + randomOffset;
                needle.style.transform = `translate(-50%, -50%) rotate(${newAngle}deg)`;
            }
        }, 3000);

        // Calibrate button
        document.getElementById('calibrateButton')?.addEventListener('click', () => {
            calibrateCompass();
        });
    }

    function updateQiblaDirection() {
        document.getElementById('qiblaDirection').textContent = `NE ${appState.qibla.direction}°`;
        document.getElementById('distanceValue').textContent = appState.qibla.distance.toLocaleString();
    }

    function calibrateCompass() {
        const button = document.getElementById('calibrateButton');
        button.textContent = 'Calibrating...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = 'Calibrate Compass';
            button.disabled = false;
            // Simulate slight adjustment
            appState.qibla.direction += (Math.random() - 0.5) * 4;
            updateQiblaDirection();
        }, 2000);
    }

    // Zakat Calculator Functions
    function initializeZakatCalculator() {
        const inputs = ['cashInput', 'goldInput', 'silverInput'];
        
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                input.addEventListener('input', calculateZakat);
            }
        });

        document.getElementById('currencySelect')?.addEventListener('change', (e) => {
            appState.zakat.currency = e.target.value;
            calculateZakat();
        });
    }

    function calculateZakat() {
        const cash = parseFloat(document.getElementById('cashInput').value) || 0;
        const gold = parseFloat(document.getElementById('goldInput').value) || 0;
        const silver = parseFloat(document.getElementById('silverInput').value) || 0;

        // Current prices (demo values)
        const goldPricePerGram = 60; // EUR
        const silverPricePerGram = 0.8; // EUR
        
        const goldValue = gold * goldPricePerGram;
        const silverValue = silver * silverPricePerGram;
        const totalWealth = cash + goldValue + silverValue;

        // Nisab threshold (approximately 595g silver or 85g gold)
        const nisabSilver = 595 * silverPricePerGram; // ~476 EUR
        const nisabGold = 85 * goldPricePerGram; // ~5100 EUR
        const nisab = Math.min(nisabSilver, nisabGold);

        const currencySymbol = getCurrencySymbol(appState.zakat.currency);
        
        if (totalWealth >= nisab) {
            const zakatAmount = totalWealth * 0.025; // 2.5%
            document.getElementById('zakatAmount').textContent = 
                `${currencySymbol}${Math.round(zakatAmount).toLocaleString()}`;
            document.getElementById('nisabStatus').textContent = 
                `Zakat is obligatory (Above Nisab: ${currencySymbol}${Math.round(nisab)})`;
        } else {
            document.getElementById('zakatAmount').textContent = `${currencySymbol}0`;
            document.getElementById('nisabStatus').textContent = 
                `Below Nisab threshold (${currencySymbol}${Math.round(nisab)})`;
        }
    }

    function getCurrencySymbol(currency) {
        const symbols = {
            'EUR': '€',
            'USD': '$',
            'GBP': '£'
        };
        return symbols[currency] || '€';
    }

    // Hijri Calendar Functions
    function initializeHijriCalendar() {
        updateHijriDate();
        
        // Update date every hour
        setInterval(updateHijriDate, 3600000);
    }

    function updateHijriDate() {
        const now = new Date();
        
        // Simple Hijri date calculation (approximate)
        const hijriEpoch = new Date('622-07-16');
        const daysSinceEpoch = Math.floor((now - hijriEpoch) / (1000 * 60 * 60 * 24));
        const hijriYear = 1446; // Current approximate year
        
        const hijriMonths = [
            'Muharram', 'Safar', 'Rabi\' al-Awwal', 'Rabi\' al-Thani',
            'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
            'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'
        ];

        document.getElementById('hijriDay').textContent = appState.hijri.day;
        document.getElementById('hijriMonth').textContent = appState.hijri.month;
        document.getElementById('hijriYear').textContent = appState.hijri.year;
        document.getElementById('gregorianDate').textContent = 
            now.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
    }

    // Utility Functions
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

    function playHapticFeedback() {
        // Vibration API for mobile devices
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }

    function updateStats() {
        // Update total dhikr counter in hero section
        const totalElement = document.getElementById('totalDhikr');
        if (totalElement) {
            animateNumber(totalElement, appState.dhikr.totalCount);
        }
    }

    function animateNumber(element, targetNumber) {
        const currentNumber = parseInt(element.textContent) || 0;
        const increment = Math.max(1, Math.floor((targetNumber - currentNumber) / 10));
        
        if (currentNumber < targetNumber) {
            element.textContent = Math.min(currentNumber + increment, targetNumber);
            requestAnimationFrame(() => animateNumber(element, targetNumber));
        }
    }

    // Location Services (Demo)
    function getUserLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // In a real app, you'd use these coordinates for prayer times
                    console.log('User location:', latitude, longitude);
                },
                (error) => {
                    console.log('Location access denied or unavailable');
                }
            );
        }
    }

    // Export functions for global access
    window.rowhniApp = {
        incrementCount,
        resetCounter,
        calculateZakat,
        calibrateCompass,
        getUserLocation
    };

    // Initialize location services
    getUserLocation();

})();