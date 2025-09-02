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
        this.initializeQuranProgress();
        this.initializeNavigation();
        this.initializeMicroInteractions();
        this.initializeFloatingElements();
        this.initializeDesignShowcase();
        this.initializePremiumHeroAnimations();
        this.initializePremiumFeatureAnimations();
        this.initializeExitIntentPopup();
        this.initializeServiceWorker();
        this.optimizePerformance();
    }

    initializePremiumHoverEffects() {
        // Premium card hover animations
        gsap.utils.toArray('.feature-block-premium, .stat-card, .insight-card').forEach(card => {
            const tl = gsap.timeline({ paused: true });
            
            tl.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.6,
                ease: "power3.out"
            })
            .to(card.querySelector('*'), {
                filter: "brightness(1.1)",
                duration: 0.6,
                ease: "power3.out"
            }, 0);

            card.addEventListener('mouseenter', () => tl.play());
            card.addEventListener('mouseleave', () => tl.reverse());
        });

        // Enhanced text reveal on scroll
        gsap.utils.toArray('.section-title, .feature-title-hero').forEach(title => {
            gsap.fromTo(title, 
                { 
                    opacity: 0, 
                    y: 50,
                    filter: "blur(10px)" 
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: title,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }

    initializeIntelligentScrollAnimations() {
        // Progressive reveal system
        gsap.utils.toArray('[data-animate-up]').forEach((element, index) => {
            const delay = element.dataset.delay || 0;
            
            gsap.fromTo(element,
                { 
                    opacity: 0, 
                    y: 60,
                    scale: 0.95 
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8 + (index * 0.1),
                    delay: delay / 1000,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Parallax background elements
        gsap.utils.toArray('[data-parallax]').forEach(element => {
            gsap.to(element, {
                yPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // Staggered animations for lists
        gsap.utils.toArray('[data-animate-stagger]').forEach(container => {
            const children = container.children;
            const delay = container.dataset.delay || 0;
            
            gsap.fromTo(children,
                { 
                    opacity: 0, 
                    x: -30,
                    rotationY: 15 
                },
                {
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    duration: 0.6,
                    stagger: {
                        amount: 0.8,
                        from: "start"
                    },
                    delay: delay / 1000,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }

    initializeAdvancedCursorInteractions() {
        // Magnetic cursor effects for premium elements
        const cursor = document.querySelector('.magnetic-cursor');
        if (!cursor) return;

        const magneticElements = gsap.utils.toArray('.magnetic-btn, .btn-hero-primary, .trust-badge');
        
        magneticElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                gsap.to(cursor, {
                    scale: 1.5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(cursor, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(element, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.6)"
                });
            });
        });
    }

    initializePremiumLoadingSequence() {
        // Page entrance sequence
        const entranceTL = gsap.timeline();
        
        entranceTL
            .from('body', {
                opacity: 0,
                duration: 0.5
            })
            .from('.nav', {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, '-=0.3')
            .from('.hero-background', {
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out"
            }, '-=0.5');

        // Remove loading state
        document.body.classList.remove('loading');
    }

    optimizePerformance() {
        // Performance optimization for GSAP animations
        gsap.config({
            force3D: true,
            nullTargetWarn: false,
            trialWarn: false,
            autoSleep: 60
        });

        // Optimize ScrollTrigger refresh
        ScrollTrigger.config({
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
            ignoreMobileResize: true
        });

        // Lazy load animations for better performance
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '50px 0px'
        };

        const lazyAnimationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Initialize animations only when element is visible
                    if (element.dataset.lazyAnimation) {
                        const animationType = element.dataset.lazyAnimation;
                        this.initializeLazyAnimation(element, animationType);
                        lazyAnimationObserver.unobserve(element);
                    }
                }
            });
        }, observerOptions);

        // Observe elements with lazy animations
        document.querySelectorAll('[data-lazy-animation]').forEach(element => {
            lazyAnimationObserver.observe(element);
        });

        // Debounce resize events for better performance
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 250);
        });

        // Optimize cursor movement tracking
        let cursorFrame;
        document.addEventListener('mousemove', (e) => {
            if (cursorFrame) return;
            
            cursorFrame = requestAnimationFrame(() => {
                this.updateCursorPosition(e.clientX, e.clientY);
                cursorFrame = null;
            });
        });

        // Memory cleanup on page unload
        window.addEventListener('beforeunload', () => {
            ScrollTrigger.killAll();
            gsap.killTweensOf("*");
        });

        // Reduce motion for accessibility
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (prefersReducedMotion.matches) {
            gsap.globalTimeline.timeScale(0.1);
            ScrollTrigger.config({
                autoRefreshEvents: "none"
            });
        }

        console.log('🚀 Rowhni: Performance optimizations applied');
    }

    initializeExitIntentPopup() {
        const popup = document.getElementById('exitPopup');
        const closeBtn = document.getElementById('closePopup');
        const subscribeBtn = document.getElementById('subscribeBtn');
        const emailInput = document.getElementById('popupEmail');
        const overlay = popup.querySelector('.popup-overlay');
        
        let hasShownPopup = false;
        let mouseLeaveCount = 0;
        let isPopupOpen = false;

        // Check if user has already subscribed (localStorage)
        if (localStorage.getItem('rowhni_subscribed') === 'true') {
            return; // Don't show popup if already subscribed
        }

        // Exit intent detection
        const handleMouseLeave = (e) => {
            if (isPopupOpen || hasShownPopup) return;
            
            // Check if mouse is leaving from top of viewport
            if (e.clientY <= 10 && e.relatedTarget === null) {
                mouseLeaveCount++;
                
                // Show popup after 2nd attempt to leave (less aggressive)
                if (mouseLeaveCount >= 2) {
                    showPopup();
                }
            }
        };

        // Time-based trigger (backup - 45 seconds)
        const timeBasedTrigger = setTimeout(() => {
            if (!isPopupOpen && !hasShownPopup) {
                showPopup();
            }
        }, 45000);

        // Scroll-based trigger (80% of page)
        const scrollTrigger = () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 80 && !isPopupOpen && !hasShownPopup) {
                showPopup();
            }
        };

        const showPopup = () => {
            if (hasShownPopup) return;
            
            hasShownPopup = true;
            isPopupOpen = true;
            clearTimeout(timeBasedTrigger);
            
            popup.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            // Focus email input after animation
            setTimeout(() => {
                emailInput.focus();
            }, 400);

            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'popup_shown', {
                    event_category: 'engagement',
                    event_label: 'exit_intent'
                });
            }
        };

        const closePopup = () => {
            popup.classList.remove('show');
            document.body.style.overflow = '';
            isPopupOpen = false;
            
            // Mark as seen to prevent re-showing in this session
            sessionStorage.setItem('rowhni_popup_seen', 'true');
        };

        const handleSubscribe = async (e) => {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            if (!email || !isValidEmail(email)) {
                showToast('Please enter a valid email address', 'error');
                emailInput.focus();
                return;
            }

            // Show loading state
            subscribeBtn.querySelector('.btn-text').style.display = 'none';
            subscribeBtn.querySelector('.btn-loading').classList.remove('hidden');
            subscribeBtn.disabled = true;

            try {
                // Simulate API call (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Success state
                localStorage.setItem('rowhni_subscribed', 'true');
                localStorage.setItem('rowhni_email', email);
                
                // Show success message
                popup.querySelector('.popup-header').innerHTML = `
                    <div class="popup-icon">
                        <span style="font-size: 3rem;">🎉</span>
                    </div>
                    <h3 class="popup-title">Welcome to the Family!</h3>
                    <p class="popup-subtitle">Check your email for exclusive Islamic productivity tips and early access to new features.</p>
                `;
                
                popup.querySelector('.popup-benefits').style.display = 'none';
                popup.querySelector('.popup-form').style.display = 'none';
                popup.querySelector('.popup-social-proof').style.display = 'none';
                
                // Analytics tracking
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'newsletter_signup', {
                        event_category: 'conversion',
                        event_label: 'exit_intent_popup'
                    });
                }
                
                // Auto-close after 3 seconds
                setTimeout(closePopup, 3000);
                
            } catch (error) {
                console.error('Subscription error:', error);
                showToast('Something went wrong. Please try again.', 'error');
                
                // Reset button state
                subscribeBtn.querySelector('.btn-text').style.display = 'block';
                subscribeBtn.querySelector('.btn-loading').classList.add('hidden');
                subscribeBtn.disabled = false;
            }
        };

        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const showToast = (message, type = 'info') => {
            // Simple toast notification
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.textContent = message;
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 24px;
                background: ${type === 'error' ? '#ff4757' : '#2ed573'};
                color: white;
                border-radius: 8px;
                font-weight: 600;
                z-index: 10001;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.transform = 'translateX(0)';
            }, 100);
            
            setTimeout(() => {
                toast.style.transform = 'translateX(100%)';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        };

        // Event listeners
        document.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('scroll', scrollTrigger, { passive: true });
        
        closeBtn.addEventListener('click', closePopup);
        overlay.addEventListener('click', closePopup);
        subscribeBtn.addEventListener('click', handleSubscribe);
        
        // Enter key in email field
        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSubscribe(e);
            }
        });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isPopupOpen) {
                closePopup();
            }
        });

        // Don't show if already seen in this session
        if (sessionStorage.getItem('rowhni_popup_seen') === 'true') {
            hasShownPopup = true;
        }

        console.log('🎯 Exit-intent popup initialized');
    }

    initializeServiceWorker() {
        // Register Service Worker for PWA functionality and caching
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', async () => {
                try {
                    const registration = await navigator.serviceWorker.register('/sw.js', {
                        scope: '/'
                    });

                    console.log('✅ Service Worker registered successfully:', registration.scope);

                    // Listen for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New version available
                                this.showUpdateNotification();
                            }
                        });
                    });

                    // Listen for controller change (new SW took control)
                    navigator.serviceWorker.addEventListener('controllerchange', () => {
                        window.location.reload();
                    });

                    // Check for updates periodically
                    setInterval(() => {
                        registration.update();
                    }, 60000); // Check every minute

                } catch (error) {
                    console.error('❌ Service Worker registration failed:', error);
                }
            });
        }

        // PWA Install Prompt
        let deferredPrompt;
        
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('📱 PWA install prompt available');
            e.preventDefault();
            deferredPrompt = e;
            
            // Show custom install button after some interaction
            setTimeout(() => {
                this.showPWAInstallPrompt(deferredPrompt);
            }, 30000); // Show after 30 seconds
        });

        // Track PWA installation
        window.addEventListener('appinstalled', () => {
            console.log('🎉 PWA was installed');
            
            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'pwa_installed', {
                    event_category: 'engagement',
                    event_label: 'app_install'
                });
            }
            
            deferredPrompt = null;
        });
    }

    showUpdateNotification() {
        // Create update notification
        const notification = document.createElement('div');
        notification.className = 'update-notification';
        notification.innerHTML = `
            <div class="update-content">
                <span class="update-icon">🔄</span>
                <div class="update-text">
                    <strong>New version available!</strong>
                    <p>Refresh to get the latest features</p>
                </div>
                <button class="update-btn" id="updateBtn">Update</button>
                <button class="update-close" id="updateClose">×</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            max-width: 350px;
            background: var(--surface-elevated);
            border: 1px solid rgba(244, 208, 63, 0.3);
            border-radius: 12px;
            padding: var(--space-lg);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            z-index: 10001;
            transform: translateX(100%);
            transition: transform 0.3s var(--ease-smooth);
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Handle update button
        notification.querySelector('#updateBtn').addEventListener('click', () => {
            window.location.reload();
        });

        // Handle close button
        notification.querySelector('#updateClose').addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
    }

    showPWAInstallPrompt(deferredPrompt) {
        if (!deferredPrompt) return;

        // Create install prompt
        const installPrompt = document.createElement('div');
        installPrompt.className = 'pwa-install-prompt';
        installPrompt.innerHTML = `
            <div class="install-content">
                <div class="install-icon">📱</div>
                <div class="install-text">
                    <strong>Install Rowhni App</strong>
                    <p>Get faster access with our web app!</p>
                </div>
                <div class="install-actions">
                    <button class="install-btn" id="installBtn">Install</button>
                    <button class="install-later" id="installLater">Later</button>
                </div>
            </div>
        `;

        installPrompt.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            max-width: 400px;
            margin: 0 auto;
            background: var(--surface-elevated);
            border: 1px solid rgba(244, 208, 63, 0.3);
            border-radius: 16px;
            padding: var(--space-lg);
            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
            z-index: 10001;
            transform: translateY(100%);
            transition: transform 0.4s var(--ease-bounce);
        `;

        document.body.appendChild(installPrompt);

        // Animate in
        setTimeout(() => {
            installPrompt.style.transform = 'translateY(0)';
        }, 100);

        // Handle install button
        installPrompt.querySelector('#installBtn').addEventListener('click', async () => {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                console.log('✅ User accepted PWA install');
            } else {
                console.log('❌ User dismissed PWA install');
            }

            installPrompt.remove();
            deferredPrompt = null;
        });

        // Handle later button
        installPrompt.querySelector('#installLater').addEventListener('click', () => {
            installPrompt.style.transform = 'translateY(100%)';
            setTimeout(() => installPrompt.remove(), 400);
            
            // Don't show again for 7 days
            localStorage.setItem('pwa_prompt_dismissed', Date.now() + (7 * 24 * 60 * 60 * 1000));
        });

        // Auto-hide after 10 seconds
        setTimeout(() => {
            if (installPrompt.parentNode) {
                installPrompt.style.transform = 'translateY(100%)';
                setTimeout(() => installPrompt.remove(), 400);
            }
        }, 10000);
    }

    initializeLazyAnimation(element, type) {
        switch (type) {
            case 'fadeUp':
                gsap.fromTo(element, 
                    { opacity: 0, y: 30 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8, 
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
                break;
            case 'scaleIn':
                gsap.fromTo(element,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
                break;
        }
    }

    updateCursorPosition(x, y) {
        const cursor = document.querySelector('.magnetic-cursor');
        if (cursor) {
            gsap.to(cursor, {
                x: x,
                y: y,
                duration: 0.3,
                ease: "power3.out"
            });
        }
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

        // Typewriter effect for invitation text
        const typewriterTexts = document.querySelectorAll('.typewriter-text');
        typewriterTexts.forEach((text, index) => {
            const originalText = text.getAttribute('data-text');
            const delay = parseFloat(text.getAttribute('data-delay')) || 0;
            
            gsap.delayedCall(delay, () => {
                let currentText = '';
                const targetText = originalText;
                const interval = setInterval(() => {
                    if (currentText.length < targetText.length) {
                        currentText += targetText[currentText.length];
                        text.textContent = currentText;
                    } else {
                        clearInterval(interval);
                    }
                }, 80);
            });
        });

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
                                    counter.textContent = current + 'M+';
                                } else if (originalText.includes('K+')) {
                                    counter.textContent = current + 'K+';
                                } else if (originalText.includes('%')) {
                                    counter.textContent = current + '%';
                                } else {
                                    counter.textContent = current.toLocaleString();
                                }
                            }
                        }
                    );
                }
            });
        });
    }

    // Theme Toggle Implementation
    initializeThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const sunIcon = themeToggle?.querySelector('.sun');
        const moonIcon = themeToggle?.querySelector('.moon');
        
        // Get saved theme or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Update toggle state based on current theme
        this.updateThemeToggle(savedTheme);
        
        themeToggle?.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            this.updateThemeToggle(newTheme);
        });
    }

    updateThemeToggle(theme) {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        
        const sunIcon = themeToggle.querySelector('.sun');
        const moonIcon = themeToggle.querySelector('.moon');
        
        if (theme === 'light') {
            sunIcon?.style.setProperty('opacity', '1');
            sunIcon?.style.setProperty('transform', 'rotate(0deg)');
            moonIcon?.style.setProperty('opacity', '0');
            moonIcon?.style.setProperty('transform', 'rotate(180deg)');
        } else {
            sunIcon?.style.setProperty('opacity', '0');
            sunIcon?.style.setProperty('transform', 'rotate(180deg)');
            moonIcon?.style.setProperty('opacity', '1');
            moonIcon?.style.setProperty('transform', 'rotate(0deg)');
        }
    }

    // Mobile Menu Implementation
    initializeMobileMenu() {
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.querySelector('.nav-menu');
        
        mobileToggle?.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu?.classList.toggle('mobile-open');
            
            // Prevent body scroll when menu is open
            if (navMenu?.classList.contains('mobile-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
                mobileToggle?.classList.remove('active');
                navMenu?.classList.remove('mobile-open');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking nav links
        navMenu?.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle?.classList.remove('active');
                navMenu?.classList.remove('mobile-open');
                document.body.style.overflow = '';
            });
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mobileToggle?.classList.remove('active');
                navMenu?.classList.remove('mobile-open');
                document.body.style.overflow = '';
            }
        });
    }
}

// Enhanced initialization with better error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        const app = new RowhniApp();
        app.initializeThemeToggle();
        app.initializeMobileMenu();
        
        // Initialize other features as before
        app.init();
        
        console.log('🎯 Rowhni website initialized successfully with interactive features');
    } catch (error) {
        console.error('Failed to initialize Rowhni app:', error);
        
        // Fallback initialization for critical features
        const fallbackInit = () => {
            // Basic theme toggle fallback
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);
                });
            }
            
            // Basic mobile menu fallback
            const mobileToggle = document.getElementById('mobileMenuToggle');
            const navMenu = document.querySelector('.nav-menu');
            if (mobileToggle && navMenu) {
                mobileToggle.addEventListener('click', () => {
                    mobileToggle.classList.toggle('active');
                    navMenu.classList.toggle('mobile-open');
                });
            }
        };
        
        fallbackInit();
    }
});
            
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
        const semicircleProgress = document.querySelector('.semicircle-progress');
        if (!semicircleProgress) return;

        ScrollTrigger.create({
            trigger: semicircleProgress,
            start: "top 70%",
            onEnter: () => {
                // Animate the semicircle progress bar with elastic bounce
                const semicircleBar = semicircleProgress.querySelector('.semicircle-bar');
                if (semicircleBar) {
                    const progress = parseInt(semicircleBar.getAttribute('data-progress')) || 50;
                    const circumference = 377; // π * 120 (größerer Radius)
                    const targetOffset = circumference - (circumference * progress / 100);
                    
                    gsap.fromTo(semicircleBar, 
                        { strokeDashoffset: circumference },
                        {
                            strokeDashoffset: targetOffset,
                            duration: 1.2,
                            ease: "elastic.out(1, 0.5)"
                        }
                    );
                }

                // Animate progress center content with snappy counter
                const currentJuz = semicircleProgress.querySelector('.current-juz');
                const totalJuz = semicircleProgress.querySelector('.total-juz');
                const quranLabel = semicircleProgress.querySelector('.quran-label');
                const currentSurah = semicircleProgress.querySelector('.current-surah');
                
                if (currentJuz) {
                    const targetJuz = parseInt(currentJuz.textContent) || 15;
                    gsap.fromTo({ count: 0 },
                        { count: targetJuz },
                        {
                            duration: 0.8,
                            ease: "power3.out",
                            onUpdate: function() {
                                currentJuz.textContent = Math.round(this.targets()[0].count);
                            }
                        }
                    );
                }

                // Quick stagger animation for additional content
                gsap.fromTo([quranLabel, currentSurah],
                    { opacity: 0, y: 15, scale: 0.95 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        duration: 0.4,
                        stagger: 0.1,
                        delay: 0.6,
                        ease: "back.out(1.7)" 
                    }
                );

                // Fast animated reading stats with bounce
                const statNumbers = semicircleProgress.parentElement.querySelectorAll('.stat-number');
                statNumbers.forEach((stat, index) => {
                    const targetValue = parseInt(stat.textContent.replace(/,/g, '')) || 0;
                    gsap.fromTo({ count: 0 },
                        { count: targetValue },
                        {
                            duration: 0.6,
                            ease: "power2.out",
                            delay: 0.8 + (index * 0.1),
                            onUpdate: function() {
                                const value = Math.round(this.targets()[0].count);
                                stat.textContent = value.toLocaleString();
                            }
                        }
                    );
                    
                    // Add bounce effect to stat cards
                    gsap.fromTo(stat.parentElement,
                        { scale: 0.8, opacity: 0 },
                        { 
                            scale: 1, 
                            opacity: 1, 
                            duration: 0.5, 
                            delay: 0.8 + (index * 0.1),
                            ease: "back.out(1.7)" 
                        }
                    );
                });
            }
        });

        // Add snappy hover interactions for quran features
        gsap.utils.toArray('.quran-feature').forEach((feature) => {
            const icon = feature.querySelector('.icon-circle');
            
            feature.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    scale: 1.15,
                    rotation: 8,
                    duration: 0.2,
                    ease: "power2.out"
                });
                
                gsap.to(feature, {
                    y: -3,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
            
            feature.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.2,
                    ease: "power2.out"
                });
                
                gsap.to(feature, {
                    y: 0,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
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
        // Premium micro-interactions for enhanced user engagement
        this.initializePremiumHoverEffects();
        this.initializeIntelligentScrollAnimations();
        this.initializeAdvancedCursorInteractions();
        this.initializePremiumLoadingSequence();
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

    initializeDesignShowcase() {
        // iOS 26 Glass Design showcase animations
        const designShowcase = document.querySelector('.design-showcase');
        if (!designShowcase) return;

        // Animate design features with stagger effect
        gsap.timeline({
            scrollTrigger: {
                trigger: '.design-showcase',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        })
        .from('.design-text .section-badge', {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "back.out(1.7)"
        })
        .from('.design-text .section-title .title-line', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        }, '-=0.3')
        .from('.design-text .section-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out"
        }, '-=0.4')
        .from('.design-feature', {
            opacity: 0,
            x: -50,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out"
        }, '-=0.2');

        // Animate showcase device with glass effect
        gsap.timeline({
            scrollTrigger: {
                trigger: '.design-visual',
                start: 'top 70%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse'
            }
        })
        .from('.design-highlight', {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.out"
        })
        .from('.showcase-device', {
            opacity: 0,
            scale: 0.9,
            y: 30,
            duration: 0.8,
            ease: "power3.out"
        }, '-=0.3')
        .from('.glass-tabbar', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out"
        }, '-=0.4');

        // Animate tab bar items with stagger
        gsap.from('.tab-item', {
            scrollTrigger: {
                trigger: '.glass-tabbar',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            y: 10,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.3
        });

        // Add hover interactions for design features
        gsap.utils.toArray('.design-feature').forEach((feature) => {
            const icon = feature.querySelector('.design-feature-icon');
            
            feature.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    scale: 1.1,
                    rotation: 5,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });
            
            feature.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Glass morphism animation
        const glassTabs = document.querySelectorAll('.tab-item');
        glassTabs.forEach((tab, index) => {
            if (tab.classList.contains('active')) {
                // Animate active tab glow effect
                gsap.timeline({ repeat: -1, yoyo: true })
                    .to(tab, {
                        background: 'rgba(244, 208, 63, 0.25)',
                        duration: 2,
                        ease: "power2.inOut"
                    });
            }
        });

        // Parallax effect for design showcase
        gsap.to('.design-showcase::before', {
            scrollTrigger: {
                trigger: '.design-showcase',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -100,
            ease: "none"
        });

        // New badge pulse animation
        const newBadge = document.querySelector('.new-badge');
        if (newBadge) {
            gsap.timeline({ repeat: -1 })
                .to(newBadge, {
                    scale: 1.05,
                    duration: 1.5,
                    ease: "power2.inOut"
                })
                .to(newBadge, {
                    scale: 1,
                    duration: 1.5,
                    ease: "power2.inOut"
                });
        }

        // Glass effect hover interaction for showcase device
        const showcaseDevice = document.querySelector('.showcase-device');
        if (showcaseDevice) {
            showcaseDevice.addEventListener('mouseenter', () => {
                gsap.to('.glass-background', {
                    opacity: 0.8,
                    scale: 1.05,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
            
            showcaseDevice.addEventListener('mouseleave', () => {
                gsap.to('.glass-background', {
                    opacity: 0.6,
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
        }
    }

    initializePremiumHeroAnimations() {
        // Premium hero animations with sophisticated timing
        const heroTimeline = gsap.timeline({
            delay: 0.5
        });

        // Trust signal animation
        heroTimeline.to('.hero-trust-signal', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        })

        // Main title reveal with stagger
        .to('.title-line-primary', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out"
        }, '-=0.4')

        .to('.title-line-gradient', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out"
        }, '-=0.8')

        // Title decoration draw
        .to('.title-decoration', {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out"
        }, '-=0.4')

        // Subtitle wrapper
        .to('.hero-subtitle-wrapper', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, '-=0.2')

        // Benefits with stagger
        .to('.hero-benefits', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        }, '-=0.2')

        .to('.benefit-item', {
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(1.7)"
        }, '-=0.4')

        // CTA section
        .to('.hero-cta-section', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, '-=0.2')

        // Secondary CTA
        .to('.cta-secondary', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        }, '-=0.4')

        // Scroll indicator
        .to('.hero-scroll-indicator', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        }, '-=0.2');

        // Magnetic button enhancement
        const magneticBtns = document.querySelectorAll('.btn-hero-primary');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }

    initializePremiumFeatureAnimations() {
        // Premium features section animations
        const featureSectionTL = gsap.timeline({
            scrollTrigger: {
                trigger: '.features',
                start: 'top 70%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse'
            }
        });

        // Section header animations
        featureSectionTL
            .from('.section-badge-premium', {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                ease: "back.out(1.7)"
            })
            .from('.section-title-hero .title-line', {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out"
            }, '-=0.3')
            .to('.section-subtitle-premium', {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, '-=0.4');

        // Feature block animations
        gsap.utils.toArray('.feature-block-premium').forEach((block, index) => {
            const content = block.querySelector('.feature-content-premium');
            const visual = block.querySelector('.feature-visual');
            
            gsap.timeline({
                scrollTrigger: {
                    trigger: block,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            })
            .from(content.querySelector('.feature-badge-hero'), {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                ease: "back.out(1.7)"
            })
            .from(content.querySelector('.feature-title-hero'), {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: "power3.out"
            }, '-=0.3')
            .from(content.querySelector('.feature-description-hero'), {
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: "power2.out"
            }, '-=0.4')
            .to(content.querySelector('.feature-proof'), {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            }, '-=0.3')
            .to(content.querySelector('.feature-benefits'), {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            }, '-=0.3')
            .from(content.querySelectorAll('.benefit-check'), {
                opacity: 0,
                x: -20,
                stagger: 0.1,
                duration: 0.4,
                ease: "power2.out"
            }, '-=0.3')
            .from(visual, {
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: "power3.out"
            }, '-=0.8');
        });

        // Enhanced badge pulse animations
        const badgeElements = document.querySelectorAll('.badge-pulse');
        badgeElements.forEach(badge => {
            gsap.to(badge, {
                scale: 1.2,
                opacity: 0.6,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });
        });

        // Proof stat counter animations
        gsap.utils.toArray('.proof-number').forEach(number => {
            ScrollTrigger.create({
                trigger: number,
                start: "top 90%",
                onEnter: () => {
                    const finalText = number.textContent;
                    const hasPercent = finalText.includes('%');
                    const hasPlus = finalText.includes('+');
                    const hasMin = finalText.includes('min');
                    
                    let finalNumber = parseFloat(finalText.replace(/[^\d.]/g, ''));
                    if (isNaN(finalNumber)) finalNumber = 1;
                    
                    gsap.fromTo({value: 0}, {
                        value: finalNumber,
                        duration: 1.5,
                        ease: "power2.out",
                        onUpdate: function() {
                            let currentValue = this.targets()[0].value;
                            let displayValue;
                            
                            if (hasPercent) {
                                displayValue = currentValue.toFixed(1) + '%';
                            } else if (hasPlus) {
                                displayValue = Math.floor(currentValue) + 'M+';
                            } else if (hasMin) {
                                displayValue = '±' + Math.floor(currentValue) + 'min';
                            } else {
                                displayValue = Math.floor(currentValue) + '+';
                            }
                            
                            number.textContent = displayValue;
                        }
                    });
                }
            });
        });

        // Check icon animations on scroll
        gsap.utils.toArray('.check-icon').forEach((icon, index) => {
            ScrollTrigger.create({
                trigger: icon,
                start: "top 90%",
                onEnter: () => {
                    gsap.fromTo(icon, 
                        { 
                            scale: 0,
                            rotation: -45 
                        },
                        {
                            scale: 1,
                            rotation: 0,
                            duration: 0.5,
                            ease: "back.out(1.7)",
                            delay: index * 0.1
                        }
                    );
                }
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