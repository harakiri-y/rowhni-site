// Rowhni - DoublePlay.studio Inspired Interactive Experience
// GSAP-powered animations and Islamic app demonstrations

gsap.registerPlugin(ScrollTrigger);

class RowhniExperience {
    constructor() {
        this.init();
    }

    init() {
        this.setupGSAPDefaults();
        this.initializeScrollAnimations();
        this.initializeVoiceDemo();
        this.initializeQuranProgress();
        this.initializeQuizDemo();
        this.initializePrayerTimes();
        this.initializeDhikrProgress();
        this.initializeNavigation();
        this.initializeCounterAnimations();
    }

    setupGSAPDefaults() {
        gsap.set("body", { opacity: 1 });
        
        // Set initial states for animations
        gsap.set(".title-line", { y: 30, opacity: 0 });
        gsap.set(".hero-subtitle", { y: 20, opacity: 0 });
        gsap.set(".hero-actions", { y: 20, opacity: 0 });
        gsap.set(".hero-stats", { y: 20, opacity: 0 });
        gsap.set(".hero-visual", { x: 50, opacity: 0 });
    }

    initializeScrollAnimations() {
        // Hero entrance animations
        const heroTl = gsap.timeline();
        
        heroTl.to(".title-line", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        })
        .to(".hero-subtitle", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4")
        .to(".hero-actions", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4")
        .to(".hero-stats", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4")
        .to(".hero-visual", {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }, "-=0.6");

        // Section headers
        gsap.utils.toArray(".section-header").forEach(header => {
            gsap.fromTo(header, 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: header,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Feature blocks
        gsap.utils.toArray(".feature-block").forEach((block, index) => {
            const content = block.querySelector(".feature-content");
            const demo = block.querySelector(".feature-demo");
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: block,
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none none"
                }
            });

            tl.fromTo(content, 
                { x: block.classList.contains('reverse') ? 50 : -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            )
            .fromTo(demo,
                { x: block.classList.contains('reverse') ? -50 : 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            );
        });

        // Progress cards
        gsap.utils.toArray(".progress-card").forEach((card, index) => {
            gsap.fromTo(card,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Stat cards
        gsap.utils.toArray(".stat-card").forEach((card, index) => {
            gsap.fromTo(card,
                { y: 40, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }

    initializeVoiceDemo() {
        const voiceContainer = document.querySelector('.voice-demo-container');
        if (!voiceContainer) return;

        const waves = voiceContainer.querySelectorAll('.wave-line');
        const dhikrText = voiceContainer.querySelector('.dhikr-text');
        const counterNumber = voiceContainer.querySelector('.counter-number');

        // Animate waves
        gsap.set(waves, { height: 10 });
        
        const waveTimeline = gsap.timeline({ repeat: -1 });
        waves.forEach((wave, index) => {
            waveTimeline.to(wave, {
                height: 40,
                duration: 0.3,
                ease: "power2.inOut"
            }, index * 0.1)
            .to(wave, {
                height: 10,
                duration: 0.3,
                ease: "power2.inOut"
            }, index * 0.1 + 0.3);
        });

        // Trigger voice recognition simulation on scroll
        ScrollTrigger.create({
            trigger: voiceContainer,
            start: "top 60%",
            onEnter: () => {
                this.simulateVoiceRecognition(dhikrText, counterNumber);
            }
        });

        // Click interaction
        voiceContainer.addEventListener('click', () => {
            this.simulateVoiceRecognition(dhikrText, counterNumber);
        });
    }

    simulateVoiceRecognition(textElement, counterElement) {
        const dhikrWords = ['SubhanAllah', 'Alhamdulillah', 'Allahu Akbar'];
        const randomWord = dhikrWords[Math.floor(Math.random() * dhikrWords.length)];
        
        // Fade in dhikr text
        gsap.fromTo(textElement, 
            { opacity: 0, scale: 0.8 },
            { 
                opacity: 1, 
                scale: 1, 
                duration: 0.5,
                ease: "back.out(1.7)",
                onComplete: () => {
                    textElement.textContent = randomWord;
                }
            }
        );

        // Animate counter
        setTimeout(() => {
            const currentCount = parseInt(counterElement.textContent) || 0;
            const newCount = Math.min(currentCount + 1, 33);
            
            gsap.to(counterElement, {
                textContent: newCount,
                duration: 0.8,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function() {
                    counterElement.textContent = Math.round(this.targets()[0].textContent);
                }
            });
        }, 500);
    }

    initializeQuranProgress() {
        const progressFill = document.querySelector('.progress-fill');
        if (!progressFill) return;

        // Set initial state
        gsap.set(progressFill, { strokeDashoffset: 251.2 });

        // Animate progress fill on scroll
        ScrollTrigger.create({
            trigger: '.semicircle-container',
            start: "top 70%",
            onEnter: () => {
                gsap.to(progressFill, {
                    strokeDashoffset: 125.6, // 50% progress
                    duration: 2,
                    ease: "power2.out"
                });

                // Animate percentage text
                const percentage = document.querySelector('.progress-percentage');
                if (percentage) {
                    gsap.fromTo(percentage, 
                        { textContent: 0 },
                        {
                            textContent: 50,
                            duration: 2,
                            ease: "power2.out",
                            snap: { textContent: 1 },
                            onUpdate: function() {
                                percentage.textContent = Math.round(this.targets()[0].textContent) + '%';
                            }
                        }
                    );
                }
            }
        });
    }

    initializeQuizDemo() {
        const quizCard = document.querySelector('.quiz-card');
        if (!quizCard) return;

        const arabicName = quizCard.querySelector('.arabic-name');
        const options = quizCard.querySelectorAll('.quiz-option');

        // Names of Allah data
        const names = [
            { arabic: 'الرَّحْمٰنُ', options: ['The Merciful', 'The Compassionate', 'The Forgiving'], correct: 1 },
            { arabic: 'الرَّحِيمُ', options: ['The Loving', 'The Merciful', 'The Generous'], correct: 1 },
            { arabic: 'الْمَلِكُ', options: ['The King', 'The Creator', 'The Sustainer'], correct: 0 },
            { arabic: 'الْقُدُّوسُ', options: ['The Pure', 'The Holy', 'The Sacred'], correct: 1 }
        ];

        let currentQuestionIndex = 0;

        const showQuestion = (index) => {
            const question = names[index];
            
            // Animate Arabic name
            gsap.fromTo(arabicName,
                { opacity: 0, y: 20 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.6,
                    ease: "power2.out",
                    onStart: () => {
                        arabicName.textContent = question.arabic;
                    }
                }
            );

            // Animate options
            options.forEach((option, i) => {
                option.classList.remove('correct');
                option.textContent = question.options[i];
                
                gsap.fromTo(option,
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.4,
                        delay: 0.2 + (i * 0.1),
                        ease: "power2.out"
                    }
                );

                // Add click handler
                option.onclick = () => {
                    if (i === question.correct) {
                        option.classList.add('correct');
                        
                        setTimeout(() => {
                            currentQuestionIndex = (currentQuestionIndex + 1) % names.length;
                            showQuestion(currentQuestionIndex);
                        }, 1500);
                    } else {
                        gsap.to(option, {
                            x: -10,
                            duration: 0.1,
                            yoyo: true,
                            repeat: 5,
                            ease: "power2.inOut"
                        });
                    }
                };
            });
        };

        // Start quiz when in view
        ScrollTrigger.create({
            trigger: quizCard,
            start: "top 70%",
            onEnter: () => {
                showQuestion(0);
            }
        });

        // Auto-cycle questions
        setInterval(() => {
            currentQuestionIndex = (currentQuestionIndex + 1) % names.length;
            showQuestion(currentQuestionIndex);
        }, 8000);
    }

    initializePrayerTimes() {
        const prayerCards = document.querySelectorAll('.prayer-card');
        if (prayerCards.length === 0) return;

        let currentPrayerIndex = 0;

        const updateActivePrayer = () => {
            prayerCards.forEach((card, index) => {
                if (index === currentPrayerIndex) {
                    card.classList.add('active');
                    gsap.to(card, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                } else {
                    card.classList.remove('active');
                    gsap.to(card, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });

            currentPrayerIndex = (currentPrayerIndex + 1) % prayerCards.length;
        };

        // Initial animation
        ScrollTrigger.create({
            trigger: '.prayer-times-demo',
            start: "top 70%",
            onEnter: () => {
                updateActivePrayer();
            }
        });

        // Auto-cycle prayers
        setInterval(updateActivePrayer, 3000);
    }

    initializeDhikrProgress() {
        const dhikrFills = document.querySelectorAll('.dhikr-fill');
        if (dhikrFills.length === 0) return;

        ScrollTrigger.create({
            trigger: '.dhikr-breakdown',
            start: "top 70%",
            onEnter: () => {
                dhikrFills.forEach((fill, index) => {
                    const targetWidth = fill.style.width || '0%';
                    
                    gsap.fromTo(fill,
                        { width: '0%' },
                        {
                            width: targetWidth,
                            duration: 1.5,
                            delay: index * 0.3,
                            ease: "power2.out"
                        }
                    );
                });
            }
        });
    }

    initializeNavigation() {
        const nav = document.querySelector('.nav');
        
        // Navbar scroll effect
        ScrollTrigger.create({
            start: "top -80",
            end: 99999,
            onUpdate: (self) => {
                if (self.direction === -1) {
                    // Scrolling up
                    gsap.to(nav, { y: 0, duration: 0.3 });
                } else if (self.direction === 1 && self.progress > 0.1) {
                    // Scrolling down
                    gsap.to(nav, { y: -80, duration: 0.3 });
                }
            }
        });

        // Smooth scrolling for nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    gsap.to(window, {
                        duration: 1.5,
                        scrollTo: { y: target, offsetY: 80 },
                        ease: "power2.inOut"
                    });
                }
            });
        });
    }

    initializeCounterAnimations() {
        // Animate stat numbers
        gsap.utils.toArray('.stat-number').forEach(number => {
            ScrollTrigger.create({
                trigger: number,
                start: "top 80%",
                onEnter: () => {
                    const targetText = number.textContent;
                    const targetNumber = parseInt(targetText.replace(/[^\d]/g, '')) || 0;
                    
                    gsap.fromTo(number,
                        { textContent: 0 },
                        {
                            textContent: targetNumber,
                            duration: 2,
                            ease: "power2.out",
                            snap: { textContent: 1 },
                            onUpdate: function() {
                                const current = Math.round(this.targets()[0].textContent);
                                if (targetText.includes('M+')) {
                                    number.textContent = (current / 1000000).toFixed(1) + 'M+';
                                } else if (targetText.includes('+')) {
                                    number.textContent = current.toLocaleString() + '+';
                                } else {
                                    number.textContent = current.toLocaleString();
                                }
                            }
                        }
                    );
                }
            });
        });

        // Large percentage animations
        gsap.utils.toArray('.percentage-large').forEach(percentage => {
            ScrollTrigger.create({
                trigger: percentage,
                start: "top 80%",
                onEnter: () => {
                    const target = parseInt(percentage.textContent) || 0;
                    
                    gsap.fromTo(percentage,
                        { textContent: 0 },
                        {
                            textContent: target,
                            duration: 2,
                            ease: "power2.out",
                            snap: { textContent: 1 },
                            onUpdate: function() {
                                percentage.textContent = Math.round(this.targets()[0].textContent) + '%';
                            }
                        }
                    );
                }
            });
        });
    }

    // Public methods for external interactions
    triggerVoiceDemo() {
        const voiceContainer = document.querySelector('.voice-demo-container');
        if (voiceContainer) {
            const dhikrText = voiceContainer.querySelector('.dhikr-text');
            const counterNumber = voiceContainer.querySelector('.counter-number');
            this.simulateVoiceRecognition(dhikrText, counterNumber);
        }
    }

    resetQuranProgress() {
        const progressFill = document.querySelector('.progress-fill');
        const percentage = document.querySelector('.progress-percentage');
        
        if (progressFill) {
            gsap.set(progressFill, { strokeDashoffset: 251.2 });
        }
        if (percentage) {
            percentage.textContent = '0%';
        }
    }
}

// Enhanced button interactions
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main experience
    const experience = new RowhniExperience();

    // Button hover effects
    gsap.utils.toArray('.btn-primary, .btn-download, .btn-primary-large').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                y: -3,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Demo button interaction
    const demoButton = document.querySelector('.btn-demo');
    if (demoButton) {
        demoButton.addEventListener('click', () => {
            experience.triggerVoiceDemo();
        });
    }

    // Card hover effects
    gsap.utils.toArray('.stat-card, .progress-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Parallax effect for hero mockup
    gsap.to('.mockup-image', {
        y: -50,
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    // Performance optimizations
    gsap.config({
        force3D: true,
        nullTargetWarn: false
    });

    // Export for console access
    window.rowhniExperience = experience;
});

// Additional scroll-triggered animations for mobile
gsap.matchMedia().add("(max-width: 768px)", () => {
    // Simplified mobile animations
    gsap.utils.toArray(".feature-demo").forEach(demo => {
        gsap.fromTo(demo,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: demo,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
});

// Page visibility optimization
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        gsap.globalTimeline.pause();
    } else {
        // Resume animations when page becomes visible
        gsap.globalTimeline.resume();
    }
});