// Modern JavaScript for Rowhni - Monks.com inspired professional design
// Professional animations and interactions with Islamic app functionality

class RowhniApp {
    constructor() {
        this.init();
    }

    init() {
        this.initializeNavigation();
        this.initializeAnimations();
        this.initializeIntersectionObserver();
        this.initializeSmoothScrolling();
        this.initializeInteractiveElements();
        this.initializeVoiceDemo();
        this.initializeIslamicFeatures();
    }

    initializeNavigation() {
        const nav = document.querySelector('.floating-nav');
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');

        // Mobile navigation toggle
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }

        // Navigation scroll effect
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // Hide/show nav on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            lastScrollY = currentScrollY;
        });
    }

    initializeAnimations() {
        // Staggered animations for solution cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const animateCards = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.solution-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                }
            });
        };

        const solutionsObserver = new IntersectionObserver(animateCards, observerOptions);
        const solutionsGrid = document.querySelector('.solutions-grid');
        if (solutionsGrid) {
            solutionsObserver.observe(solutionsGrid);
        }

        // Stats counter animation
        this.animateCounters();

        // Gradient shift animation trigger
        this.initializeGradientShift();
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-count') || counter.textContent.replace(/\D/g, ''));
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString() + (counter.textContent.includes('M') ? 'M+' : '+');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString() + (counter.textContent.includes('M') ? 'M+' : '+');
                }
            };
            
            updateCounter();
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    animateCounter(counter);
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    initializeGradientShift() {
        const hero = document.querySelector('.hero');
        if (hero) {
            setInterval(() => {
                hero.style.background = `linear-gradient(135deg, 
                    hsl(${Math.random() * 60 + 240}, 75%, ${Math.random() * 20 + 10}%) 0%, 
                    hsl(${Math.random() * 60 + 280}, 65%, ${Math.random() * 15 + 8}%) 100%)`;
            }, 8000);
        }
    }

    initializeIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '-10%'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const elementsToAnimate = document.querySelectorAll(
            '.hero-content, .section-header, .tech-feature, .community-stat, .cta-content'
        );
        
        elementsToAnimate.forEach(el => {
            observer.observe(el);
        });
    }

    initializeSmoothScrolling() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initializeInteractiveElements() {
        // Interactive buttons
        this.initializeButtons();

        // Parallax effects
        this.initializeParallax();

        // Prayer times demo functionality
        this.updatePrayerTimes();
        
        // Tasbih counter demo
        this.initializeTasbihDemo();
    }

    updatePrayerTimes() {
        const prayerTimes = {
            Fajr: '05:42',
            Dhuhr: '12:18',
            Asr: '15:34',
            Maghrib: '18:07',
            Isha: '19:28'
        };

        const prayerElements = document.querySelectorAll('.prayer-time');
        prayerElements.forEach(element => {
            const prayerName = element.dataset.prayer;
            if (prayerTimes[prayerName]) {
                element.textContent = prayerTimes[prayerName];
            }
        });
    }

    initializeTasbihDemo() {
        const tasbihButton = document.querySelector('.tasbih-demo');
        const counterDisplay = document.querySelector('.tasbih-count');
        let count = 0;

        if (tasbihButton && counterDisplay) {
            tasbihButton.addEventListener('click', () => {
                count++;
                counterDisplay.textContent = count;
                
                // Visual feedback
                tasbihButton.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    tasbihButton.style.transform = 'scale(1)';
                }, 100);

                // Haptic feedback simulation
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
            });
        }
    }

    initializeButtons() {
        // Enhanced button interactions
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px) scale(1.02)';
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0) scale(1)';
            });

            button.addEventListener('click', (e) => {
                // Ripple effect
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    initializeParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            // Parallax for hero mockup
            const mockup = document.querySelector('.mockup-container');
            if (mockup) {
                mockup.style.transform = `translateY(${rate * 0.3}px)`;
            }

            // Parallax for floating elements
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    initializeVoiceDemo() {
        const voiceDemoBtn = document.querySelector('.voice-demo-btn');
        if (voiceDemoBtn) {
            voiceDemoBtn.addEventListener('click', () => {
                // Simulate voice recognition
                voiceDemoBtn.textContent = 'Listening...';
                voiceDemoBtn.classList.add('listening');
                
                setTimeout(() => {
                    voiceDemoBtn.textContent = 'SubhanAllah recognized!';
                    voiceDemoBtn.classList.remove('listening');
                    voiceDemoBtn.classList.add('recognized');
                    
                    setTimeout(() => {
                        voiceDemoBtn.textContent = 'Try Voice Tasbih';
                        voiceDemoBtn.classList.remove('recognized');
                    }, 2000);
                }, 3000);
            });
        }
    }

    initializeIslamicFeatures() {
        // Islamic app-specific functionality
        this.initializeQiblaCompass();
        this.initializeDhikrCounter();
        this.initializePrayerNotifications();
    }

    initializeQiblaCompass() {
        const compassDemo = document.querySelector('.qibla-compass');
        if (compassDemo) {
            // Simulate compass rotation
            let rotation = 0;
            setInterval(() => {
                rotation = (rotation + 1) % 360;
                compassDemo.style.transform = `rotate(${rotation}deg)`;
            }, 100);
        }
    }

    initializeDhikrCounter() {
        // Modern dhikr counter with Islamic authenticity
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
            }
        };

        // Store dhikr data for other methods to use
        this.dhikrData = dhikrData;
    }

    initializePrayerNotifications() {
        // Demo prayer time notifications
        const notificationDemo = document.querySelector('.prayer-notification-demo');
        if (notificationDemo) {
            notificationDemo.addEventListener('click', () => {
                this.showPrayerNotification();
            });
        }
    }

    showPrayerNotification() {
        // Create a professional notification demo
        const notification = document.createElement('div');
        notification.className = 'prayer-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">🕌</div>
                <div class="notification-text">
                    <strong>Maghrib Prayer Time</strong>
                    <p>It's time for Maghrib prayer</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

// CSS Animation definitions for professional interactions
const animationStyles = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes animate-in {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-in {
        animation: animate-in 0.8s ease-out forwards;
    }

    .listening {
        background: linear-gradient(45deg, var(--accent), var(--secondary)) !important;
        animation: pulse 1.5s infinite;
    }

    .recognized {
        background: var(--success) !important;
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }

    .solution-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }

    .floating-nav.scrolled {
        background: rgba(17, 17, 24, 0.95) !important;
        backdrop-filter: blur(20px) !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
    }

    .prayer-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(17, 17, 24, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(139, 92, 246, 0.2);
        border-radius: 16px;
        padding: 1rem;
        color: var(--text-primary);
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 10000;
        max-width: 300px;
    }

    .prayer-notification.show {
        transform: translateX(0);
        opacity: 1;
    }

    .prayer-notification.hide {
        transform: translateX(100%);
        opacity: 0;
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .notification-icon {
        font-size: 1.5rem;
    }

    .notification-text strong {
        display: block;
        color: var(--accent);
        margin-bottom: 0.25rem;
    }

    .notification-text p {
        margin: 0;
        font-size: 0.875rem;
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(17, 17, 24, 0.98);
            backdrop-filter: blur(20px);
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
        }

        .nav-toggle {
            display: flex;
            flex-direction: column;
            width: 24px;
            height: 24px;
            cursor: pointer;
        }

        .nav-toggle span {
            width: 100%;
            height: 2px;
            background: var(--text-primary);
            margin: 2px 0;
            transition: all 0.3s ease;
        }

        .prayer-notification {
            left: 20px;
            right: 20px;
            max-width: none;
        }
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RowhniApp();
});

// Performance optimization - Intersection Observer for lazy loading
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RowhniApp;
}