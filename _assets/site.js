// Rowhni - Awwwards Level Interactive Experience
// Advanced GSAP animations with magnetic cursor, parallax, and micro-interactions

gsap.registerPlugin(ScrollTrigger, TextPlugin);

class RowhniExperience {
    constructor() {
        this.mouse = { x: 0, y: 0 };
        this.cursor = { x: 0, y: 0 };
        this.isHovering = false;
        this.isClicking = false;
        
        this.init();
    }

    init() {
        this.setupGSAPDefaults();
        this.initializeMagneticCursor();
        this.initializeTextAnimations();
        this.initializeScrollAnimations();
        this.initializeParallaxEffects();
        this.initializeCounterAnimations();
        this.initializeVoiceDemo();
        this.initializeQuranProgress();
        this.initializePrayerTimes();
        this.initializeDhikrProgress();
        this.initializeNavigation();
        this.initializeMicroInteractions();
        this.initializeFloatingElements();
        this.optimizePerformance();
    }

    setupGSAPDefaults() {
        gsap.config({
            force3D: true,
            nullTargetWarn: false,
            trialWarn: false
        });

        // Remove loading class and reveal page
        gsap.set("body", { opacity: 1 });
        document.body.classList.remove('loading');

        // Set initial states for hero animations
        gsap.set(".hero-badge", { opacity: 0, y: 30 });
        gsap.set(".hero-title .title-line", { opacity: 0, y: 100 });
        gsap.set(".hero-subtitle", { opacity: 0, y: 50 });
        gsap.set(".hero-actions", { opacity: 0, y: 40 });
        gsap.set(".hero-stats .stat", { opacity: 0, y: 30, scale: 0.8 });
        gsap.set(".app-showcase", { opacity: 0, x: 100, rotationY: 15 });
        gsap.set(".floating-pills .pill", { opacity: 0, scale: 0, rotation: "random(-15, 15)" });

        // Set initial states for sections
        gsap.set("[data-animate-up]", { opacity: 0, y: 60 });
        gsap.set("[data-animate-left]", { opacity: 0, x: -80 });
        gsap.set("[data-animate-right]", { opacity: 0, x: 80 });
        gsap.set("[data-animate-scale]", { opacity: 0, scale: 0.8 });
    }

    initializeMagneticCursor() {
        const cursor = document.querySelector('.magnetic-cursor');
        if (!cursor) return;

        const cursorInner = cursor.querySelector('.cursor-inner');

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        // Smooth cursor follow
        gsap.ticker.add(() => {
            const speed = 0.15;
            
            this.cursor.x += (this.mouse.x - this.cursor.x) * speed;
            this.cursor.y += (this.mouse.y - this.cursor.y) * speed;
            
            gsap.set(cursor, {
                x: this.cursor.x,
                y: this.cursor.y,
                xPercent: -50,
                yPercent: -50
            });
        });

        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .app-frame, .stat-card, .dhikr-card, .progress-pill');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.isHovering = true;
                cursor.classList.add('hovering');
                
                // Magnetic effect
                const rect = el.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const moveX = (this.mouse.x - centerX) * 0.3;
                const moveY = (this.mouse.y - centerY) * 0.3;
                
                gsap.to(el, {
                    x: moveX,
                    y: moveY,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            el.addEventListener('mouseleave', () => {
                this.isHovering = false;
                cursor.classList.remove('hovering');
                
                gsap.to(el, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });

        // Click effect
        document.addEventListener('mousedown', () => {
            this.isClicking = true;
            cursor.classList.add('clicking');
        });

        document.addEventListener('mouseup', () => {
            this.isClicking = false;
            cursor.classList.remove('clicking');
        });
    }

    initializeTextAnimations() {
        // Split text for hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const lines = heroTitle.querySelectorAll('.title-line');
            
            lines.forEach(line => {
                const text = line.textContent;
                line.innerHTML = '';
                
                [...text].forEach(char => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.display = 'inline-block';
                    span.style.transform = 'translateY(100px)';
                    span.style.opacity = '0';
                    line.appendChild(span);
                });
            });
        }

        // Animate section titles on scroll
        gsap.utils.toArray('.section-title').forEach(title => {
            ScrollTrigger.create({
                trigger: title,
                start: "top 85%",
                onEnter: () => {
                    const words = title.textContent.split(' ');
                    title.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
                    
                    gsap.fromTo(title.querySelectorAll('.word'), 
                        { opacity: 0, y: 50, rotationX: 90 },
                        { 
                            opacity: 1, 
                            y: 0, 
                            rotationX: 0,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: "back.out(1.7)" 
                        }
                    );
                }
            });
        });
    }

    initializeScrollAnimations() {
        // Hero entrance - masterful timeline
        const heroTl = gsap.timeline({ delay: 0.5 });
        
        heroTl
            .to(".hero-badge", { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power3.out" 
            })
            .to(".hero-title .title-line span", { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: { 
                    each: 0.02,
                    from: "start"
                },
                ease: "back.out(1.7)" 
            }, "-=0.4")
            .to(".hero-subtitle", { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: "power3.out" 
            }, "-=0.6")
            .to(".hero-actions", { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power3.out" 
            }, "-=0.6")
            .to(".hero-stats .stat", { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                duration: 0.6, 
                stagger: 0.15,
                ease: "back.out(1.7)" 
            }, "-=0.4")
            .to(".app-showcase", { 
                opacity: 1, 
                x: 0, 
                rotationY: 0,
                duration: 1.2, 
                ease: "power3.out" 
            }, "-=1")
            .to(".floating-pills .pill", {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.6,
                stagger: { 
                    each: 0.2,
                    from: "random"
                },
                ease: "back.out(1.7)"
            }, "-=0.8");

        // Advanced scroll-triggered animations
        gsap.utils.toArray("[data-animate-up]").forEach((el, index) => {
            gsap.fromTo(el, 
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        gsap.utils.toArray("[data-animate-left]").forEach(el => {
            gsap.fromTo(el, 
                { opacity: 0, x: -80, rotationY: -15 },
                {
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        gsap.utils.toArray("[data-animate-right]").forEach(el => {
            gsap.fromTo(el, 
                { opacity: 0, x: 80, rotationY: 15 },
                {
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        gsap.utils.toArray("[data-animate-stagger]").forEach(container => {
            const children = container.children;
            
            gsap.fromTo(children,
                { opacity: 0, y: 40, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: { 
                        each: 0.1,
                        from: "start"
                    },
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }

    initializeParallaxEffects() {
        // Hero parallax
        gsap.to(".floating-pills .pill", {
            y: -100,
            rotation: 360,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });

        // App mockups parallax
        gsap.to(".main-mockup", {
            y: -80,
            rotationY: 5,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 1.5
            }
        });

        gsap.to(".secondary-mockup", {
            y: -120,
            rotationY: -5,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 2
            }
        });

        // Feature screenshots parallax
        gsap.utils.toArray(".feature-screenshot").forEach(img => {
            gsap.to(img, {
                y: -60,
                rotationX: 2,
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

        // Background elements parallax
        gsap.utils.toArray(".float-element").forEach((el, index) => {
            gsap.to(el, {
                y: -100 * (index + 1),
                rotation: 360,
                scrollTrigger: {
                    trigger: el.closest('section'),
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                }
            });
        });
    }

    initializeCounterAnimations() {
        // Enhanced counter animations with custom easing
        gsap.utils.toArray('[data-counter]').forEach(counter => {
            const targetValue = parseInt(counter.dataset.counter) || parseInt(counter.textContent.replace(/[^\d]/g, ''));
            
            ScrollTrigger.create({
                trigger: counter,
                start: "top 80%",
                onEnter: () => {
                    gsap.fromTo({ count: 0 }, 
                        { count: targetValue },
                        {
                            duration: 2.5,
                            ease: "power2.out",
                            onUpdate: function() {
                                const current = Math.round(this.targets()[0].count);
                                const originalText = counter.textContent;
                                
                                if (originalText.includes('M+')) {
                                    counter.textContent = (current / 1000000).toFixed(1) + 'M+';
                                } else if (originalText.includes('+')) {
                                    counter.textContent = current.toLocaleString() + '+';
                                } else if (originalText.includes('%')) {
                                    counter.textContent = current + '%';
                                } else {
                                    counter.textContent = current.toLocaleString();
                                }
                            },
                            onComplete: () => {
                                // Add completion sparkle effect
                                gsap.to(counter, {
                                    scale: 1.1,
                                    duration: 0.2,
                                    yoyo: true,
                                    repeat: 1,
                                    ease: "power2.inOut"
                                });
                            }
                        }
                    );
                }
            });
        });

        // Progress bars
        gsap.utils.toArray('[data-progress]').forEach(progressBar => {
            const targetProgress = parseInt(progressBar.dataset.progress);
            
            ScrollTrigger.create({
                trigger: progressBar,
                start: "top 80%",
                onEnter: () => {
                    if (progressBar.classList.contains('progress-fill')) {
                        // SVG circle progress
                        const circumference = 2 * Math.PI * 80;
                        const offset = circumference - (targetProgress / 100) * circumference;
                        
                        gsap.to(progressBar, {
                            strokeDashoffset: offset,
                            duration: 2,
                            ease: "power2.out"
                        });
                    } else {
                        // Linear progress
                        gsap.fromTo(progressBar,
                            { width: '0%' },
                            { 
                                width: targetProgress + '%',
                                duration: 1.5,
                                ease: "power2.out"
                            }
                        );
                    }
                }
            });
        });
    }

    initializeVoiceDemo() {
        const voiceContainer = document.querySelector('.voice-demo-container');
        if (!voiceContainer) return;

        const waves = voiceContainer.querySelectorAll('.wave-line');
        const voiceIndicator = document.querySelector('[data-voice-pulse]');

        // Enhanced wave animation
        const waveTimeline = gsap.timeline({ repeat: -1, paused: true });
        
        waves.forEach((wave, index) => {
            gsap.set(wave, { height: 20 });
            
            waveTimeline.to(wave, {
                height: "random(40, 60)",
                duration: 0.4,
                ease: "power2.inOut"
            }, index * 0.05)
            .to(wave, {
                height: 20,
                duration: 0.4,
                ease: "power2.inOut"
            }, index * 0.05 + 0.4);
        });

        // Voice pulse animation
        if (voiceIndicator) {
            gsap.to(voiceIndicator, {
                scale: 1.2,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });
        }

        // Start animations on scroll
        ScrollTrigger.create({
            trigger: voiceContainer,
            start: "top 70%",
            onEnter: () => {
                waveTimeline.play();
                this.simulateVoiceRecognition();
            },
            onLeave: () => {
                waveTimeline.pause();
            }
        });

        // Click interaction
        voiceContainer.addEventListener('click', () => {
            this.simulateVoiceRecognition();
        });
    }

    simulateVoiceRecognition() {
        const dhikrText = document.querySelector('.dhikr-text');
        const counter = document.querySelector('[data-counter-animate]');
        
        const dhikrWords = ['SubhanAllah', 'Alhamdulillah', 'Allahu Akbar'];
        const randomWord = dhikrWords[Math.floor(Math.random() * dhikrWords.length)];
        
        if (dhikrText) {
            gsap.fromTo(dhikrText, 
                { opacity: 0, scale: 0.5, rotationX: 90 },
                { 
                    opacity: 1, 
                    scale: 1, 
                    rotationX: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    onStart: () => {
                        dhikrText.textContent = randomWord;
                    }
                }
            );
        }

        if (counter) {
            const currentCount = parseInt(counter.textContent) || 0;
            const newCount = Math.min(currentCount + 1, 33);
            
            gsap.to(counter, {
                textContent: newCount,
                duration: 0.8,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function() {
                    counter.textContent = Math.round(this.targets()[0].textContent);
                }
            });

            // Counter bounce effect
            gsap.to(counter, {
                scale: 1.3,
                duration: 0.2,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });
        }
    }

    initializeQuranProgress() {
        const progressContainer = document.querySelector('.quran-progress-container');
        if (!progressContainer) return;

        ScrollTrigger.create({
            trigger: progressContainer,
            start: "top 70%",
            onEnter: () => {
                // Animate the circle progress
                const progressFill = progressContainer.querySelector('.progress-fill');
                if (progressFill) {
                    gsap.fromTo(progressFill, 
                        { strokeDashoffset: 502.4 },
                        {
                            strokeDashoffset: 251.2,
                            duration: 2.5,
                            ease: "power2.out"
                        }
                    );
                }

                // Animate progress center content
                const progressMain = progressContainer.querySelector('.progress-main');
                const progressTotal = progressContainer.querySelector('.progress-total');
                const progressSurah = progressContainer.querySelector('.progress-surah');
                
                if (progressMain) {
                    gsap.fromTo({ count: 0 },
                        { count: 15 },
                        {
                            duration: 2.5,
                            ease: "power2.out",
                            onUpdate: function() {
                                progressMain.textContent = Math.round(this.targets()[0].count);
                            }
                        }
                    );
                }

                // Stagger animation for additional text
                gsap.fromTo([progressTotal, progressSurah],
                    { opacity: 0, y: 10 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.6,
                        stagger: 0.2,
                        delay: 1.5,
                        ease: "power2.out" 
                    }
                );
            }
        });
    }

    initializePrayerTimes() {
        const prayerCards = document.querySelectorAll('.prayer-card');
        const sunPath = document.querySelector('[data-sun-animate]');
        const prayerPill = document.querySelector('[data-prayer-pulse]');
        
        if (prayerCards.length === 0) return;

        let currentPrayerIndex = 0;

        const updateActivePrayer = () => {
            prayerCards.forEach((card, index) => {
                if (index === currentPrayerIndex) {
                    card.classList.add('active');
                    gsap.to(card, {
                        scale: 1.05,
                        y: -5,
                        duration: 0.4,
                        ease: "back.out(1.7)"
                    });
                } else {
                    card.classList.remove('active');
                    gsap.to(card, {
                        scale: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                }
            });

            currentPrayerIndex = (currentPrayerIndex + 1) % prayerCards.length;
        };

        // Sun animation
        if (sunPath) {
            gsap.to(sunPath, {
                rotation: 180,
                transformOrigin: "center center",
                duration: 8,
                repeat: -1,
                ease: "none"
            });
        }

        // Prayer pill pulse
        if (prayerPill) {
            gsap.to(prayerPill, {
                scale: 1.1,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });
        }

        // Initialize and auto-cycle
        ScrollTrigger.create({
            trigger: '.prayer-times-demo',
            start: "top 70%",
            onEnter: updateActivePrayer
        });

        setInterval(updateActivePrayer, 3000);
    }

    initializeDhikrProgress() {
        const dhikrCards = document.querySelectorAll('.dhikr-card');
        
        dhikrCards.forEach((card, index) => {
            const progressFill = card.querySelector('.dhikr-progress-fill');
            const count = card.querySelector('.dhikr-count');
            
            ScrollTrigger.create({
                trigger: card,
                start: "top 80%",
                onEnter: () => {
                    // Animate progress bar
                    if (progressFill) {
                        const targetWidth = progressFill.dataset.progress + '%' || '100%';
                        
                        gsap.fromTo(progressFill,
                            { width: '0%' },
                            {
                                width: targetWidth,
                                duration: 1.5,
                                delay: index * 0.2,
                                ease: "power2.out"
                            }
                        );
                    }

                    // Animate counter
                    if (count && count.dataset.counter) {
                        const targetCount = parseInt(count.dataset.counter);
                        
                        gsap.fromTo({ count: 0 },
                            { count: targetCount },
                            {
                                duration: 1.5,
                                delay: index * 0.2,
                                ease: "power2.out",
                                onUpdate: function() {
                                    count.textContent = Math.round(this.targets()[0].count);
                                }
                            }
                        );
                    }

                    // Card scale effect
                    gsap.fromTo(card,
                        { scale: 0.9, opacity: 0.7 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "back.out(1.7)"
                        }
                    );
                }
            });
        });
    }

    initializeNavigation() {
        const nav = document.querySelector('.nav');
        const navBackground = nav.querySelector('.nav-background');
        
        // Enhanced navbar scroll effects
        ScrollTrigger.create({
            start: "top -100",
            end: 99999,
            onUpdate: (self) => {
                if (self.direction === -1) {
                    // Scrolling up
                    gsap.to(nav, { y: 0, duration: 0.4, ease: "power2.out" });
                    nav.classList.add('scrolled');
                } else if (self.direction === 1 && self.progress > 0.05) {
                    // Scrolling down
                    gsap.to(nav, { y: -100, duration: 0.4, ease: "power2.in" });
                    nav.classList.remove('scrolled');
                }
            }
        });

        // Navbar background on scroll
        ScrollTrigger.create({
            start: "top -50",
            end: 99999,
            onEnter: () => nav.classList.add('scrolled'),
            onLeaveBack: () => nav.classList.remove('scrolled')
        });

        // Enhanced smooth scrolling
        document.querySelectorAll('[data-smooth-scroll]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        gsap.to(window, {
                            duration: 1.8,
                            scrollTo: { 
                                y: target, 
                                offsetY: 100 
                            },
                            ease: "power2.inOut"
                        });
                    }
                }
            });
        });
    }

    initializeMicroInteractions() {
        // Enhanced button interactions
        gsap.utils.toArray('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    scale: 1.05,
                    y: -4,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });

            btn.addEventListener('mousedown', () => {
                gsap.to(btn, {
                    scale: 0.95,
                    duration: 0.1
                });
            });

            btn.addEventListener('mouseup', () => {
                gsap.to(btn, {
                    scale: 1.05,
                    duration: 0.2,
                    ease: "back.out(1.7)"
                });
            });
        });

        // Card hover effects
        gsap.utils.toArray('[data-hover-lift]').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -12,
                    rotationX: 5,
                    rotationY: 5,
                    duration: 0.4,
                    ease: "power2.out",
                    transformPerspective: 1000
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });

        // Floating animation for specific elements
        gsap.utils.toArray('[data-float]').forEach((el, index) => {
            gsap.to(el, {
                y: -15,
                duration: 2 + index * 0.5,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                delay: index * 0.3
            });
        });

        // Scale animation on scroll for days
        gsap.utils.toArray('[data-animate-scale]').forEach(day => {
            ScrollTrigger.create({
                trigger: day,
                start: "top 85%",
                onEnter: () => {
                    gsap.fromTo(day,
                        { scale: 0, rotation: -180 },
                        { 
                            scale: 1, 
                            rotation: 0,
                            duration: 0.6,
                            ease: "back.out(1.7)"
                        }
                    );
                }
            });
        });
    }

    initializeFloatingElements() {
        // Enhanced floating animations for pills and elements
        gsap.utils.toArray('.pill').forEach((pill, index) => {
            const floatTl = gsap.timeline({ repeat: -1 });
            
            floatTl
                .to(pill, {
                    y: -20,
                    x: 10,
                    rotation: 5,
                    duration: 3 + index * 0.5,
                    ease: "power2.inOut"
                })
                .to(pill, {
                    y: 0,
                    x: 0,
                    rotation: -5,
                    duration: 3 + index * 0.5,
                    ease: "power2.inOut"
                })
                .to(pill, {
                    y: -10,
                    x: -10,
                    rotation: 0,
                    duration: 3 + index * 0.5,
                    ease: "power2.inOut"
                });
        });

        // App showcase floating
        gsap.utils.toArray('.app-mockup').forEach((mockup, index) => {
            gsap.to(mockup, {
                y: -20,
                duration: 4 + index,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                delay: index * 0.5
            });
        });
    }

    optimizePerformance() {
        // Refresh ScrollTrigger on resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 250);
        });

        // Pause animations when page is hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                gsap.globalTimeline.pause();
            } else {
                gsap.globalTimeline.resume();
            }
        });

        // Reduced motion support
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.globalTimeline.timeScale(0.5);
        }

        // Mobile optimizations
        gsap.matchMedia().add("(max-width: 768px)", () => {
            // Disable complex animations on mobile
            gsap.set('[data-parallax]', { clearProps: "all" });
            
            // Simplified mobile interactions
            gsap.utils.toArray('.magnetic-btn').forEach(btn => {
                btn.addEventListener('touchstart', () => {
                    gsap.to(btn, { scale: 0.95, duration: 0.1 });
                });
                
                btn.addEventListener('touchend', () => {
                    gsap.to(btn, { scale: 1, duration: 0.2 });
                });
            });
        });

        // Reduced animations for privacy and support pages
        if (window.location.pathname.includes('privacy') || window.location.pathname.includes('support')) {
            gsap.globalTimeline.timeScale(0.2); // Much slower animations
            
            // Disable floating animations
            gsap.utils.toArray('[data-float]').forEach(el => {
                gsap.killTweensOf(el);
            });
            
            // Disable complex parallax effects
            gsap.utils.toArray('.floating-pills').forEach(el => {
                gsap.set(el, { opacity: 0.3 });
            });
        }

        // Intersection Observer for better performance
        const observerOptions = {
            rootMargin: '100px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        // Observe elements for reveal animations
        gsap.utils.toArray('[data-animate-up], [data-animate-left], [data-animate-right]').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize experience when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Remove loading state
    document.body.classList.remove('loading');
    
    // Initialize main experience
    const experience = new RowhniExperience();
    
    // Make available globally for console access
    window.rowhniExperience = experience;
    
    // Add some debugging helpers
    if (window.location.hash === '#debug') {
        console.log('Rowhni Experience initialized with debug mode');
        console.log('Available methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(experience)));
    }
});

// Preload critical resources
const preloadCriticalResources = () => {
    const criticalImages = [
        'Screenshots/image1.jpg',
        'Screenshots/image2.jpg', 
        'Screenshots/image3.jpg',
        'Screenshots/image4.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

// Initialize preloading
preloadCriticalResources();

// Service Worker registration (if available)
if ('serviceWorker' in navigator && 'production' === 'production') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.warn('Animation error caught:', e.error);
    // Fallback to basic functionality if animations fail
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RowhniExperience;
}