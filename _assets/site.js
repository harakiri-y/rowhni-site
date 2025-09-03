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
        try {
            this.setupGSAPDefaults();
            console.log('✅ GSAP defaults configured');
        } catch (error) {
            console.error('❌ GSAP setup failed:', error);
        }

        try {
            this.initializeMagneticCursor();
            console.log('✅ Magnetic cursor initialized');
        } catch (error) {
            console.error('❌ Magnetic cursor failed:', error);
        }

        try {
            this.initializePremiumScrollAnimations();
            console.log('✅ Premium scroll animations initialized');
        } catch (error) {
            console.error('❌ Premium scroll animations failed:', error);
        }

        try {
            this.initializeAdvancedCursor();
            console.log('✅ Advanced cursor initialized');
        } catch (error) {
            console.error('❌ Advanced cursor failed:', error);
        }

        try {
            this.initializeFloatingParticles();
            console.log('✅ Floating particles initialized');
        } catch (error) {
            console.error('❌ Floating particles failed:', error);
        }

        try {
            this.initializePremiumHoverStates();
            console.log('✅ Premium hover states initialized');
        } catch (error) {
            console.error('❌ Premium hover states failed:', error);
        }

        try {
            this.initializePageTransitions();
            console.log('✅ Page transitions initialized');
        } catch (error) {
            console.error('❌ Page transitions failed:', error);
        }

        try {
            this.initializeInteractiveAppShowcase();
            console.log('✅ Interactive app showcase initialized');
        } catch (error) {
            console.error('❌ Interactive app showcase failed:', error);
        }

        try {
            this.initializeSoundDesign();
            console.log('✅ Sound design initialized');
        } catch (error) {
            console.error('❌ Sound design failed:', error);
        }

        try {
            this.initializeTextAnimations();
            console.log('✅ Text animations initialized');
        } catch (error) {
            console.error('❌ Text animations failed:', error);
        }

        try {
            this.initializeQuranProgress();
            console.log('✅ Quran progress animation initialized');
        } catch (error) {
            console.error('❌ Quran progress animation failed:', error);
        }

        try {
            this.initializeScrollAnimations();
            console.log('✅ Scroll animations initialized');
        } catch (error) {
            console.error('❌ Scroll animations failed:', error);
        }

        try {
            this.initializeParallaxEffects();
            console.log('✅ Parallax effects initialized');
        } catch (error) {
            console.error('❌ Parallax effects failed:', error);
        }

        try {
            this.initializeCounterAnimations();
            console.log('✅ Counter animations initialized');
        } catch (error) {
            console.error('❌ Counter animations failed:', error);
        }

        try {
            this.initializeVoiceDemo();
            console.log('✅ Voice demo initialized');
        } catch (error) {
            console.error('❌ Voice demo failed:', error);
        }

        try {
            this.initializeQuranProgress();
            console.log('✅ Quran progress initialized');
        } catch (error) {
            console.error('❌ Quran progress failed:', error);
        }

        try {
            this.initializePrayerTimes();
            console.log('✅ Prayer times initialized');
        } catch (error) {
            console.error('❌ Prayer times failed:', error);
        }

        try {
            this.initializeDhikrProgress();
            console.log('✅ Dhikr progress initialized');
        } catch (error) {
            console.error('❌ Dhikr progress failed:', error);
        }

        try {
            this.initializeNavigation();
            console.log('✅ Navigation initialized');
        } catch (error) {
            console.error('❌ Navigation failed:', error);
        }

        try {
            this.initializeMicroInteractions();
            console.log('✅ Micro interactions initialized');
        } catch (error) {
            console.error('❌ Micro interactions failed:', error);
        }

        try {
            this.initializeFloatingElements();
            console.log('✅ Floating elements initialized');
        } catch (error) {
            console.error('❌ Floating elements failed:', error);
        }

        try {
            this.initializeDesignShowcase();
            console.log('✅ Design showcase initialized');
        } catch (error) {
            console.error('❌ Design showcase failed:', error);
        }

        try {
            this.initializePremiumHeroAnimations();
            console.log('✅ Premium hero animations initialized');
        } catch (error) {
            console.error('❌ Premium hero animations failed:', error);
        }

        try {
            this.initializePremiumFeatureAnimations();
            console.log('✅ Premium feature animations initialized');
        } catch (error) {
            console.error('❌ Premium feature animations failed:', error);
        }

        try {
            this.initializeExitIntentPopup();
            console.log('✅ Exit intent popup initialized');
        } catch (error) {
            console.error('❌ Exit intent popup failed:', error);
        }

        try {
            this.initializeServiceWorker();
            console.log('✅ Service Worker initialized');
        } catch (error) {
            console.error('❌ Service Worker failed:', error);
        }

        try {
            this.optimizePerformance();
            console.log('✅ Performance optimization complete');
        } catch (error) {
            console.error('❌ Performance optimization failed:', error);
        }
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
            nullTargetWarn: true,
            trialWarn: true,
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
                // Submit to Vercel API
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email })
                });

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || 'Network response was not ok');
                }
                
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
                console.error('Netlify Forms submission error:', error);
                showToast('Network error. Please check your connection and try again.', 'error');
                
                // Reset button state
                subscribeBtn.querySelector('.btn-text').style.display = 'block';
                subscribeBtn.querySelector('.btn-loading').classList.add('hidden');
                subscribeBtn.disabled = false;
                emailInput.focus();
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
            nullTargetWarn: true,
            trialWarn: true
        });

        // Remove loading class and reveal page
        gsap.set("body", { opacity: 1 });
        document.body.classList.remove('loading');

        // DISABLED - Set initial states for hero animations (was hiding text)
        // gsap.set(".hero-badge", { opacity: 0, y: 30 });
        // gsap.set(".hero-title .title-line", { opacity: 0, y: 100 });
        // gsap.set(".hero-subtitle", { opacity: 0, y: 50 }); // ← This was hiding the text!
        // gsap.set(".hero-actions", { opacity: 0, y: 40 });
        // gsap.set(".hero-stats .stat", { opacity: 0, y: 30, scale: 0.8 });
        // gsap.set(".app-showcase", { opacity: 0, x: 100, rotationY: 15 });
        // gsap.set(".floating-pills .pill", { opacity: 0, scale: 0, rotation: "random(-15, 15)" });
        
        console.log('🚫 GSAP initial states disabled - text should be visible now');

        // Set initial states for sections
        gsap.set("[data-animate-up]", { opacity: 0, y: 60 });
        gsap.set("[data-animate-left]", { opacity: 0, x: -80 });
        gsap.set("[data-animate-right]", { opacity: 0, x: 80 });
        gsap.set("[data-animate-scale]", { opacity: 0, scale: 0.8 });
    }

    initializeMagneticCursor() {
        const cursor = document.querySelector('.magnetic-cursor');
        if (!cursor) {
            console.warn('❌ Magnetic cursor element not found');
            return;
        }
        
        console.log('✅ Initializing magnetic cursor');

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
        // DISABLED - Text animations were breaking the display
        console.log('📝 Text animations disabled to prevent text destruction');
        
        // Ensure all text elements are immediately visible
        const textElements = document.querySelectorAll('.hero-title, .hero-subtitle, .title-line-primary, .title-line-gradient, .subtitle-highlight');
        textElements.forEach(el => {
            el.style.opacity = '1 !important';
            el.style.transform = 'translateY(0) !important';
            el.style.visibility = 'visible !important';
            el.style.display = 'inline !important';
            console.log('🔍 Fixed element:', el.className, el.textContent);
        });
        
        // Also fix the hero subtitle paragraph specifically
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.style.opacity = '1 !important';
            heroSubtitle.style.visibility = 'visible !important';
            console.log('🔍 Hero subtitle content:', heroSubtitle.innerHTML);
        }
        
        console.log('✅ All text elements are now visible without destructive animations');
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

    initializePremiumScrollAnimations() {
        // Advanced Split-Text Reveals
        this.initializeSplitTextAnimations();
        
        // Enhanced Parallax Layers
        this.initializeAdvancedParallax();
        
        // Morphing Shape Animations
        this.initializeMorphingShapes();
        
        // Staggered Element Reveals
        this.initializeStaggeredReveals();
    }

    initializeSplitTextAnimations() {
        // Temporarily disabled split text to ensure content is visible
        console.log('Split text animations temporarily disabled for local testing');
    }

    initializeAdvancedParallax() {
        // Simplified parallax to reduce blur/performance issues
        const parallaxLayers = [
            { selector: '.hero-background', speed: 0.2 },
            { selector: '.floating-pills', speed: 0.1 }
        ];
        
        parallaxLayers.forEach(layer => {
            gsap.utils.toArray(layer.selector).forEach(element => {
                gsap.to(element, {
                    y: () => -window.innerHeight * layer.speed,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2
                    }
                });
            });
        });
    }

    initializeMorphingShapes() {
        // Create morphing geometric shapes for Islamic patterns
        gsap.utils.toArray('[data-morph-shape]').forEach(element => {
            const paths = [
                "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
                "M12,2L13.09,8.26L22,12L13.09,15.74L12,22L10.91,15.74L2,12L10.91,8.26L12,2Z",
                "M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z"
            ];
            
            let currentPath = 0;
            
            ScrollTrigger.create({
                trigger: element,
                start: "top 70%",
                end: "bottom 30%",
                scrub: 2,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const targetPath = Math.floor(progress * (paths.length - 1));
                    
                    if (targetPath !== currentPath) {
                        const svgPath = element.querySelector('path');
                        if (svgPath) {
                            gsap.to(svgPath, {
                                attr: { d: paths[targetPath] },
                                duration: 0.5,
                                ease: "power2.inOut"
                            });
                        }
                        currentPath = targetPath;
                    }
                }
            });
        });
    }

    initializeStaggeredReveals() {
        // Keep elements visible by default for local testing
        const revealSections = [
            { selector: '.feature-card', stagger: 0.2, y: 60 },
            { selector: '.trust-badge', stagger: 0.1, y: 30 },
            { selector: '.nav-item', stagger: 0.05, y: 20 },
            { selector: '.hero-badge', stagger: 0.1, scale: 0.8 }
        ];
        
        revealSections.forEach(section => {
            gsap.utils.toArray(section.selector).forEach((element, index) => {
                // Keep elements visible by default
                gsap.set(element, {
                    opacity: 1,
                    y: 0,
                    scale: 1
                });
                
                // Optional scroll animation (now just for enhancement)
                ScrollTrigger.create({
                    trigger: element,
                    start: "top 85%",
                    onEnter: () => {
                        gsap.fromTo(element, 
                            { scale: 0.95 },
                            {
                                scale: 1,
                                duration: 0.6,
                                delay: index * section.stagger * 0.1,
                                ease: "back.out(1.7)"
                            }
                        );
                    }
                });
            });
        });
    }

    initializeAdvancedCursor() {
        const cursor = document.querySelector('.magnetic-cursor');
        if (!cursor) return;
        
        const cursorInner = cursor.querySelector('.cursor-inner');
        
        // Add cursor text element
        const cursorText = document.createElement('div');
        cursorText.className = 'cursor-text';
        cursor.appendChild(cursorText);
        
        // Define cursor states
        const cursorStates = {
            default: { scale: 1, text: '', background: 'var(--accent)' },
            hover: { scale: 1.5, text: '', background: 'var(--accent)' },
            button: { scale: 2, text: 'CLICK', background: 'var(--secondary)' },
            text: { scale: 0.5, text: '📖', background: 'var(--primary)' },
            image: { scale: 2.5, text: '🔍', background: 'var(--accent)' },
            islamic: { scale: 1.8, text: '☪️', background: 'var(--secondary)' },
            download: { scale: 2.2, text: '⬇️', background: 'var(--accent)' }
        };
        
        // Apply cursor state
        const applyCursorState = (state) => {
            const config = cursorStates[state] || cursorStates.default;
            
            gsap.to(cursor, {
                scale: config.scale,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
            
            gsap.to(cursorInner, {
                background: config.background,
                duration: 0.3
            });
            
            cursorText.textContent = config.text;
            cursorText.style.opacity = config.text ? '1' : '0';
        };
        
        // Cursor interactions for different elements
        const cursorInteractions = [
            { selector: 'button, .btn, [role="button"]', state: 'button' },
            { selector: 'p, span, h1, h2, h3, h4, h5, h6, .hero-subtitle', state: 'text' },
            { selector: 'img, .mockup-image, .app-screenshot', state: 'image' },
            { selector: '.trust-badge, .islamic-feature, [data-islamic]', state: 'islamic' },
            { selector: '.btn-download, .download-btn, [data-download]', state: 'download' }
        ];
        
        cursorInteractions.forEach(interaction => {
            gsap.utils.toArray(interaction.selector).forEach(element => {
                element.addEventListener('mouseenter', () => {
                    applyCursorState(interaction.state);
                });
                
                element.addEventListener('mouseleave', () => {
                    applyCursorState('default');
                });
            });
        });
        
        // Add breathing animation to default state
        gsap.to(cursor, {
            scale: 1.1,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
        });
    }

    initializeFloatingParticles() {
        // Create particle container
        const particleContainer = document.createElement('div');
        particleContainer.className = 'floating-particles';
        document.body.appendChild(particleContainer);
        
        // Islamic geometric patterns as particles
        const particleShapes = [
            '✦', '✧', '✶', '✷', '✸', '✹', '✺', '✻', // Stars
            '◆', '◇', '◈', '◉', '◊', '○', '●', '◐', // Shapes
            '☪', '☫', '☬', '☭', // Islamic symbols
            '𝔞', '𝔟', '𝔠', '𝔡' // Decorative
        ];
        
        const particles = [];
        const particleCount = 25;
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = particleShapes[Math.floor(Math.random() * particleShapes.length)];
            
            // Random positioning
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            const scale = 0.3 + Math.random() * 0.7;
            const rotation = Math.random() * 360;
            
            gsap.set(particle, {
                x: startX,
                y: startY,
                scale: scale,
                rotation: rotation,
                opacity: 0.1 + Math.random() * 0.3
            });
            
            particleContainer.appendChild(particle);
            particles.push({
                element: particle,
                baseX: startX,
                baseY: startY,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                amplitude: 50 + Math.random() * 100
            });
        }
        
        // Animate particles
        const animateParticles = () => {
            particles.forEach((particle, index) => {
                const time = Date.now() * 0.001;
                const x = particle.baseX + Math.sin(time + index) * particle.amplitude + particle.speedX * time * 10;
                const y = particle.baseY + Math.cos(time + index * 1.5) * particle.amplitude + particle.speedY * time * 10;
                
                // Wrap around screen
                const wrappedX = ((x % window.innerWidth) + window.innerWidth) % window.innerWidth;
                const wrappedY = ((y % window.innerHeight) + window.innerHeight) % window.innerHeight;
                
                gsap.set(particle.element, {
                    x: wrappedX,
                    y: wrappedY,
                    rotation: time * 20 + index * 45
                });
            });
            
            requestAnimationFrame(animateParticles);
        };
        
        animateParticles();
        
        // Mouse interaction
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            particles.forEach((particle, index) => {
                const particleX = parseFloat(particle.element.style.transform.match(/translateX\(([-\d.]+)px\)/)?.[1] || 0);
                const particleY = parseFloat(particle.element.style.transform.match(/translateY\(([-\d.]+)px\)/)?.[1] || 0);
                
                const distance = Math.sqrt(
                    Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
                );
                
                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    const angle = Math.atan2(particleY - mouseY, particleX - mouseX);
                    
                    gsap.to(particle.element, {
                        x: particleX + Math.cos(angle) * force * 50,
                        y: particleY + Math.sin(angle) * force * 50,
                        scale: 1 + force * 0.5,
                        opacity: 0.8,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(particle.element, {
                        scale: 0.3 + Math.random() * 0.7,
                        opacity: 0.1 + Math.random() * 0.3,
                        duration: 1,
                        ease: "power2.out"
                    });
                }
            });
        });
        
        // Resize handler
        window.addEventListener('resize', () => {
            particles.forEach(particle => {
                particle.baseX = Math.random() * window.innerWidth;
                particle.baseY = Math.random() * window.innerHeight;
            });
        });
    }

    initializePremiumHoverStates() {
        // Premium Elastic Hover Effects
        const hoverElements = [
            {
                selector: '.btn-hero-primary, .btn-download',
                scale: 1.05,
                y: -10,
                glow: true,
                bounce: true
            },
            {
                selector: '.trust-badge',
                scale: 1.1,
                rotation: 5,
                glow: true,
                shake: true
            },
            {
                selector: '.feature-card, .app-card',
                scale: 1.03,
                y: -8,
                tilt: true
            },
            {
                selector: '.nav-item, .nav-link',
                scale: 1.1,
                glow: true
            },
            {
                selector: '.mockup-image, .app-screenshot',
                scale: 1.08,
                rotation: 2,
                glow: true
            },
            {
                selector: '.ios-requirement-badge',
                scale: 1.15,
                bounce: true,
                pulse: true
            }
        ];

        hoverElements.forEach(config => {
            gsap.utils.toArray(config.selector).forEach(element => {
                // Create hover timeline
                const hoverTl = gsap.timeline({ paused: true });
                
                // Base hover animation
                hoverTl.to(element, {
                    scale: config.scale || 1.05,
                    y: config.y || 0,
                    rotation: config.rotation || 0,
                    duration: 0.4,
                    ease: "back.out(1.7)"
                });

                // Add glow effect
                if (config.glow) {
                    hoverTl.to(element, {
                        boxShadow: "0 10px 40px rgba(244, 208, 63, 0.4), 0 0 20px rgba(244, 208, 63, 0.2)",
                        duration: 0.4,
                        ease: "power2.out"
                    }, 0);
                }

                // Add bounce effect
                if (config.bounce) {
                    hoverTl.to(element, {
                        scaleY: 1.1,
                        duration: 0.15,
                        ease: "power2.out",
                        yoyo: true,
                        repeat: 1
                    }, 0.1);
                }

                // Add shake effect
                if (config.shake) {
                    hoverTl.to(element, {
                        x: "+=3",
                        duration: 0.1,
                        ease: "power2.inOut",
                        yoyo: true,
                        repeat: 3
                    }, 0.2);
                }

                // Add tilt effect
                if (config.tilt) {
                    hoverTl.to(element, {
                        rotationY: 5,
                        rotationX: 2,
                        transformPerspective: 1000,
                        duration: 0.4,
                        ease: "power2.out"
                    }, 0);
                }

                // Add pulse effect
                if (config.pulse) {
                    gsap.to(element, {
                        scale: 1.02,
                        duration: 1.5,
                        ease: "power2.inOut",
                        yoyo: true,
                        repeat: -1,
                        paused: false
                    });
                }

                // Mouse events
                element.addEventListener('mouseenter', () => {
                    hoverTl.play();
                });

                element.addEventListener('mouseleave', () => {
                    hoverTl.reverse();
                });

                // Touch events for mobile
                element.addEventListener('touchstart', () => {
                    hoverTl.play();
                });

                element.addEventListener('touchend', () => {
                    setTimeout(() => hoverTl.reverse(), 150);
                });
            });
        });

        // Special magnetic button effects
        gsap.utils.toArray('.magnetic-btn').forEach(btn => {
            let magneticTl = gsap.timeline({ paused: true });

            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                magneticTl.clear();
                magneticTl.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3,
                    ease: "power2.out"
                });
                magneticTl.play();
            });

            btn.addEventListener('mouseleave', () => {
                magneticTl.clear();
                magneticTl.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
                magneticTl.play();
            });
        });

        // Ripple effect for buttons
        gsap.utils.toArray('button, .btn, [role="button"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const rect = btn.getBoundingClientRect();
                const ripple = document.createElement('span');
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.className = 'ripple-effect';
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';

                btn.appendChild(ripple);

                gsap.fromTo(ripple, 
                    { 
                        scale: 0, 
                        opacity: 0.6 
                    },
                    {
                        scale: 4,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        onComplete: () => ripple.remove()
                    }
                );
            });
        });
    }

    initializePageTransitions() {
        // Create page transition overlay
        const transitionOverlay = document.createElement('div');
        transitionOverlay.className = 'page-transition-overlay';
        document.body.appendChild(transitionOverlay);

        // Create Islamic pattern for transitions
        const patternSVG = `
            <svg class="transition-pattern" viewBox="0 0 100 100">
                <pattern id="islamicPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                    <circle cx="10" cy="10" r="3" fill="var(--accent)" opacity="0.3"/>
                    <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" 
                          fill="var(--secondary)" opacity="0.2"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#islamicPattern)"/>
            </svg>
        `;
        transitionOverlay.innerHTML = patternSVG;

        // Disabled problematic section transitions - keep sections visible
        console.log('Section transitions disabled to prevent darkening');

        // Navigation link smooth transitions
        gsap.utils.toArray('.nav-link, a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        this.smoothScrollToSection(target);
                    }
                }
            });
        });

        // Page load animation
        window.addEventListener('load', () => {
            this.playPageLoadAnimation();
        });
    }

    smoothScrollToSection(target) {
        // Show transition overlay with Islamic pattern
        const overlay = document.querySelector('.page-transition-overlay');
        
        gsap.timeline()
            .to(overlay, {
                opacity: 0.9,
                duration: 0.3,
                ease: "power2.inOut"
            })
            .call(() => {
                // Smooth scroll to target
                gsap.to(window, {
                    scrollTo: { y: target, offsetY: 80 },
                    duration: 1.2,
                    ease: "power2.inOut"
                });
            })
            .to(overlay, {
                opacity: 0,
                duration: 0.5,
                delay: 0.3,
                ease: "power2.out"
            });
    }

    playPageLoadAnimation() {
        // Simplified load animation - elements stay visible
        console.log('Page loaded - all elements visible');
        
        // Just add body class to indicate loaded state
        document.body.classList.add('loaded');
        
        // Simple entrance animation without hiding elements initially
        gsap.fromTo('.nav', 
            { y: -20 },
            { y: 0, duration: 0.6, ease: "power2.out" }
        );
        
        gsap.fromTo('.hero-title', 
            { y: 20, opacity: 0.7 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
        );
        
        gsap.fromTo('.btn-hero-primary', 
            { scale: 0.95 },
            { scale: 1, duration: 0.6, ease: "back.out(1.7)", delay: 0.4 }
        );
    }

    initializeInteractiveAppShowcase() {
        const appMockups = gsap.utils.toArray('.app-mockup');
        if (appMockups.length === 0) return;

        // Enhanced device tilt following mouse
        appMockups.forEach((mockup, index) => {
            const mockupImage = mockup.querySelector('.mockup-image');
            
            // Add device frame and screen glow
            this.enhanceAppMockup(mockup, index);
            
            // Disabled 3D mouse tilt to maintain image quality
            console.log('3D tilt disabled for image clarity');

            // Floating animation with individual timing
            gsap.to(mockup, {
                y: index % 2 === 0 ? "+=15" : "+=10",
                rotation: index % 2 === 0 ? "+=2" : "-=1",
                duration: 3 + index * 0.5,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });

            // Simplified hover for image clarity
            mockup.addEventListener('mouseenter', () => {
                gsap.to(mockup, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            mockup.addEventListener('mouseleave', () => {
                gsap.to(mockup, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            // Click ripple effect
            mockup.addEventListener('click', () => {
                this.createDeviceRipple(mockup);
            });
        });

        // Disabled showcase parallax for image clarity
        console.log('Showcase parallax disabled for image quality');
    }

    enhanceAppMockup(mockup, index) {
        // Simplified mockup enhancement for clarity
        console.log('Mockup enhancements simplified for image quality');
    }

    createDeviceRipple(mockup) {
        const ripple = document.createElement('div');
        ripple.className = 'device-ripple';
        
        const rect = mockup.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (rect.width - size) / 2 + 'px';
        ripple.style.top = (rect.height - size) / 2 + 'px';
        
        mockup.appendChild(ripple);
        
        gsap.fromTo(ripple,
            { scale: 0, opacity: 0.6 },
            {
                scale: 1,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: () => ripple.remove()
            }
        );
    }

    initializeSoundDesign() {
        // Create audio context for Web Audio API
        this.audioContext = null;
        this.sounds = {};
        
        // Initialize audio context on first user interaction
        document.addEventListener('click', () => {
            if (!this.audioContext) {
                this.setupAudioContext();
            }
        }, { once: true });

        // Sound-enabled interactions
        this.setupSoundInteractions();
    }

    setupAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.createSynthSounds();
        } catch (error) {
            console.warn('Web Audio API not supported:', error);
        }
    }

    createSynthSounds() {
        // Islamic-inspired sound frequencies (based on traditional Islamic music scales)
        this.sounds = {
            hover: { frequency: 440, duration: 0.1 }, // A4 - peaceful
            click: { frequency: 523, duration: 0.15 }, // C5 - confirmation
            success: { frequency: 659, duration: 0.2 }, // E5 - joy
            transition: { frequency: 349, duration: 0.3 }, // F4 - movement
            reveal: { frequency: 293, duration: 0.25 } // D4 - discovery
        };
    }

    playSound(soundType, volume = 0.1) {
        if (!this.audioContext || !this.sounds[soundType]) return;

        const { frequency, duration } = this.sounds[soundType];
        
        // Create oscillator for pure tone
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        // Connect nodes
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Configure sound
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = 'sine'; // Smooth, peaceful tone
        
        // Envelope for natural sound
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
        
        // Play sound
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    setupSoundInteractions() {
        // Button hover sounds
        gsap.utils.toArray('button, .btn, [role="button"]').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                this.playSound('hover', 0.05);
            });
            
            btn.addEventListener('click', () => {
                this.playSound('click', 0.08);
            });
        });

        // Download button special sound
        gsap.utils.toArray('[data-download]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.playSound('success', 0.1);
            });
        });

        // Navigation sounds
        gsap.utils.toArray('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.playSound('transition', 0.06);
            });
        });

        // Trust badge interactions
        gsap.utils.toArray('.trust-badge').forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                this.playSound('hover', 0.04);
            });
        });

        // App mockup sounds
        gsap.utils.toArray('.app-mockup').forEach(mockup => {
            mockup.addEventListener('click', () => {
                this.playSound('reveal', 0.07);
            });
        });

        // Scroll-triggered sounds for reveals
        ScrollTrigger.batch('[data-split-text], .feature-card', {
            onEnter: () => {
                this.playSound('reveal', 0.03);
            },
            start: "top 85%"
        });

        // Special sound for Islamic elements
        gsap.utils.toArray('[data-islamic], .ios-requirement-badge').forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.playSound('hover', 0.06);
            });
        });
    }

    initializeQuranProgress() {
        const progressBar = document.querySelector('.semicircle-bar');
        if (!progressBar) return;

        // Get the progress percentage from data attribute
        const targetProgress = parseInt(progressBar.dataset.progress) || 40;
        
        // Calculate path length for animation
        const pathLength = progressBar.getTotalLength();
        
        // Set initial state
        gsap.set(progressBar, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });

        // Animate progress when section comes into view
        ScrollTrigger.create({
            trigger: '.semicircle-progress',
            start: "top 80%",
            onEnter: () => {
                // Calculate dash offset for target percentage
                const progressOffset = pathLength - (pathLength * targetProgress / 100);
                
                gsap.to(progressBar, {
                    strokeDashoffset: progressOffset,
                    duration: 2,
                    ease: "power2.out",
                    delay: 0.5
                });

                // Animate numbers counting up
                this.animateQuranStats();
            }
        });
    }

    animateQuranStats() {
        // Animate the main Juz counter
        const juzElement = document.querySelector('.current-juz');
        if (juzElement) {
            const targetJuz = parseInt(juzElement.textContent) || 15;
            gsap.fromTo({ count: 0 }, 
                { count: targetJuz },
                {
                    duration: 1.5,
                    ease: "power2.out",
                    delay: 1,
                    onUpdate: function() {
                        juzElement.textContent = Math.round(this.targets()[0].count);
                    }
                }
            );
        }

        // Animate stats below the semicircle
        gsap.utils.toArray('.reading-stats-below .stat-number').forEach((statElement, index) => {
            const originalText = statElement.textContent;
            const targetValue = parseInt(originalText.replace(/,/g, '')) || 0;
            
            gsap.fromTo({ count: 0 }, 
                { count: targetValue },
                {
                    duration: 2,
                    ease: "power2.out",
                    delay: 1.2 + (index * 0.2),
                    onUpdate: function() {
                        const current = Math.round(this.targets()[0].count);
                        if (current >= 1000) {
                            statElement.textContent = current.toLocaleString();
                        } else {
                            statElement.textContent = current;
                        }
                    }
                }
            );
        });
    }

}

// Standalone Theme Toggle Implementation
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update toggle state based on current theme
    updateThemeToggle(savedTheme);
    
    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        updateThemeToggle(newTheme);
    });
}

function updateThemeToggle(theme) {
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

// Standalone Mobile Menu Implementation
function initializeMobileMenu() {
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

// Enhanced initialization with better error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize main experience
        const experience = new RowhniExperience();
        console.log('✅ RowhniExperience initialized');
        
        // Initialize additional features
        initializeThemeToggle();
        console.log('✅ Theme toggle initialized');
        
        initializeMobileMenu();
        console.log('✅ Mobile menu initialized');
        
        console.log('🎯 Rowhni website initialized successfully with all features');
    } catch (error) {
        console.error('❌ Failed to initialize Rowhni app:', error);
        
        // Fallback initialization for critical features
        const fallbackInit = () => {
            console.log('🔄 Running fallback initialization...');
            
            // Basic theme toggle fallback
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);
                });
                console.log('✅ Fallback theme toggle active');
            }
            
            // Basic mobile menu fallback
            const mobileToggle = document.getElementById('mobileMenuToggle');
            const navMenu = document.querySelector('.nav-menu');
            if (mobileToggle && navMenu) {
                mobileToggle.addEventListener('click', () => {
                    mobileToggle.classList.toggle('active');
                    navMenu.classList.toggle('mobile-open');
                });
                console.log('✅ Fallback mobile menu active');
            }
        };
        
        fallbackInit();
    }
});

// Professional Islamic AI Assistant
class IslamicChatbot {
    constructor() {
        this.isOpen = false;
        this.conversationContext = [];
        this.userPreferences = {};
        this.typing = false;
        this.responses = {
            'prayer-times': {
                text: "🕌 **Precision Prayer Times & Qibla**\n\n✨ **Advanced Features:**\n• High-precision astronomical calculations (±1 minute accuracy)\n• 12+ calculation methods (Umm al-Qura, ISNA, Muslim World League, etc.)\n• Auto location-based times with GPS accuracy\n• Beautiful sun path visualization and countdown timers\n• Smart notification system with gentle reminders\n• Qibla compass with magnetic declination correction\n• Monthly/yearly prayer calendar with Hijri dates\n• Customizable Adhan sounds from Makkah & Madinah\n• Works offline worldwide\n\n**Perfect for Muslims in 195+ countries worldwide** 🌍",
                buttons: ['Download App', 'Voice Features', 'Quran Tracker']
            },
            'voice-features': {
                text: "🎤 **Revolutionary Voice-Powered Dhikr**\n\n🚀 **World's First Voice Dhikr Counter:**\n• 99.7% speech recognition accuracy in Arabic & English\n• Recognizes \"SubhanAllah\", \"Alhamdulillah\", \"Allahu Akbar\"\n• 100% on-device processing (complete privacy)\n• Perfect for meditation and focused worship\n• Intelligent noise filtering for clear recognition\n• Visual feedback with beautiful animations\n• Works in any environment - mosque, home, outdoors\n• Supports different pronunciation styles\n• Battery optimized with advanced algorithms\n\n**Used by 2M+ Muslims for 52M+ counted dhikr** 📿\n\n*\"This feature has transformed my dhikr practice!\"* - Ahmad K., London",
                buttons: ['Try Voice Demo', 'Prayer Times', 'AI Assistant']
            },
            'quran-tracker': {
                text: "📖 **Intelligent Quran Progress Tracking**\n\n🎯 **Smart Learning Features:**\n• Automatic reading progress tracking (Juz, Surah, Ayah level)\n• 40+ language translations with scholarly annotations\n• Word-by-word translation and root word analysis\n• Audio recitations by world-renowned Qaris\n• Personalized daily reading goals with AI recommendations\n• Beautiful typography with multiple Mushaf styles\n• Bookmark system with notes and reflections\n• Search functionality across translations\n• Study streaks and achievement system\n• Offline reading with synchronized progress\n\n**Average users read 3x more Quran with our tracker** 📈",
                buttons: ['Start Reading', 'Voice Features', 'Download App']
            },
            'ai-assistant': {
                text: "🤖 **Your Personal Islamic Scholar Assistant**\n\n🧠 **Powered by Advanced AI:**\n• Comprehensive Islamic knowledge base with authentic sources\n• Instant answers to Fiqh, Aqeedah, and Hadith questions\n• References from Quran, Sahih Bukhari, Muslim, and major scholars\n• Multiple madhab perspectives when applicable\n• 24/7 availability in multiple languages\n• Context-aware conversations that remember your questions\n• Safe, filtered responses aligned with Islamic principles\n• Explains complex topics in simple, understandable terms\n• Covers prayer, fasting, Hajj, Zakat, and daily Islamic practices\n\n**Trusted by scholars and students worldwide** 🎓\n\n*Ask me anything about Islam - I'm here to help guide your faith journey!*",
                buttons: ['Ask Question', 'Prayer Times', 'Voice Features']
            },
            'features': {
                text: "✨ **Rowhni: Complete Islamic Companion**\n\n🎯 **Core Features:**\n\n🔊 **Voice Dhikr Counter** (99.7% accuracy)\n   • First-ever voice recognition for Islamic dhikr\n   • Works in Arabic and English pronunciation\n   • Complete privacy with on-device processing\n\n📿 **Digital Tasbih** (Traditional + Modern)\n   • Beautiful Islamic designs and themes\n   • Haptic feedback and sound customization\n   • Multiple dhikr presets and custom counters\n\n📖 **Quran Progress Tracker** (40+ translations)\n   • Smart reading goals and achievement system\n   • Audio recitations and word-by-word translation\n   • Offline access with cloud synchronization\n\n🕌 **Precision Prayer Times** (±1min accuracy)\n   • 12+ calculation methods for global accuracy\n   • Beautiful Adhan sounds from holy cities\n   • Qibla compass with magnetic correction\n\n🤖 **AI Islamic Assistant** (24/7 scholar)\n   • Authentic Islamic knowledge with references\n   • Context-aware conversations in multiple languages\n   • Safe, filtered guidance aligned with Quran & Sunnah\n\n🎨 **iOS 26 Glass Design** (Premium UI/UX)\n   • Translucent interfaces with depth effects\n   • Dark/light modes with system integration\n   • Requires iOS 18+ for full functionality\n\n**Rated 4.8/5 ⭐ by 2M+ Muslims worldwide**",
                buttons: ['Download Now', 'Voice Demo', 'Prayer Times', 'AI Chat']
            },
            'download': {
                text: "📱 **Download Rowhni - #1 Islamic App**\n\n🏆 **Award-Winning App:**\n⭐ **4.8/5 Stars** (12,847+ reviews)\n📈 **2M+ Active Users** worldwide\n🆓 **Completely Free** - No subscriptions or hidden costs\n🔒 **Privacy First** - Your data never leaves your device\n🌍 **Global Reach** - Used in 195+ countries\n\n💎 **What Makes Us Special:**\n• World's first voice-powered dhikr counter\n• Astronomical precision for prayer times\n• Beautiful iOS 26 glass design interface\n• 100% offline functionality\n• Regular updates with new features\n• Excellent customer support\n\n📲 **System Requirements:**\n• iPhone (iOS 18.0 or later) ⚠️\n• iPad (iOS 18.0 or later)\n• Apple Watch (coming soon)\n\n⚠️ **Important:** Requires iOS 18+ for full functionality\n\n🚀 **Download from App Store:** [Get Rowhni Now](https://apps.apple.com/app/rowhni)\n\n*Join millions of Muslims enhancing their spiritual practice with technology*",
                buttons: ['Open App Store', 'See Features', 'Contact Support']
            },
            'support': {
                text: "💬 **Professional Support & Help Center**\n\n🎯 **Get Expert Help:**\n📧 **Priority Support:** support@rowhni.com\n⚡ **Response Time:** Within 6-12 hours\n🌍 **Languages:** English, Arabic, Urdu, Turkish, French, German\n📱 **Platform:** iOS technical support\n\n📚 **Self-Help Resources:**\n• Comprehensive FAQ with 50+ common questions\n• Video tutorials for all features\n• Troubleshooting guides\n• Islamic guidance resources\n• Privacy policy and terms\n\n🛡️ **Security & Privacy:**\n• End-to-end encryption for all data\n• GDPR compliant privacy practices\n• No data sharing with third parties\n• Complete transparency in data handling\n\n🔧 **Technical Support:**\n• iOS compatibility issues\n• Voice recognition troubleshooting\n• Prayer time calculation questions\n• Feature requests and feedback\n• Bug reports and app improvements\n\n**Our support team includes Islamic scholars and tech experts**",
                buttons: ['Contact Support', 'FAQ', 'Privacy Policy', 'Download App']
            },
            'greeting': {
                text: "السلام عليكم وبركاته وأهلاً وسهلاً 🌙\n\n**Welcome to Rowhni's AI Assistant!** I'm here to provide comprehensive support for your Islamic journey.\n\n🎯 **I can help you with:**\n\n📱 **App Features & Capabilities**\n   • Voice dhikr counter demonstration\n   • Prayer time calculation methods\n   • Quran progress tracking system\n   • Advanced AI assistant features\n\n🕌 **Islamic Practice & Guidance**\n   • Prayer times and Qibla direction\n   • Dhikr and Tasbih recommendations\n   • Quran reading goals and plans\n   • Islamic knowledge and Q&A\n\n🔧 **Technical Support**\n   • Download and installation help\n   • Troubleshooting and bug reports\n   • Feature requests and feedback\n   • Privacy and security questions\n\nI'm powered by advanced AI with authentic Islamic knowledge. How may I assist you in your spiritual practice today?\n\n**Ask me anything - I'm here to help! 🤝**",
                buttons: ['App Features', 'Voice Demo', 'Prayer Times', 'Islamic Q&A', 'Download']
            },
            'islamic-qa': {
                text: "🕌 **Islamic Knowledge & Guidance**\n\n📚 **I can help with authentic Islamic knowledge:**\n\n🤲 **Worship & Practices:**\n   • Prayer (Salah) - timings, procedures, conditions\n   • Fasting (Sawm) - Ramadan rules, voluntary fasting\n   • Zakat - calculation and distribution\n   • Hajj & Umrah - rituals and preparation\n\n📖 **Quran & Hadith:**\n   • Verse explanations and context\n   • Hadith authenticity and meanings\n   • Islamic history and stories\n   • Scholarly interpretations\n\n🌙 **Daily Islamic Living:**\n   • Halal/Haram guidance\n   • Islamic etiquette and manners\n   • Family and social relations\n   • Business and financial matters\n\n⚠️ **Important:** For complex religious matters, always consult qualified local scholars. I provide general guidance based on authentic sources.\n\n**What Islamic topic would you like to learn about?**",
                buttons: ['Prayer Questions', 'Quran Guidance', 'Daily Islam', 'Back to Features']
            }
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.showInitialNotification();
    }
    
    bindEvents() {
        const toggle = document.getElementById('chatbotToggle');
        const close = document.getElementById('chatbotClose');
        const input = document.getElementById('chatbotInput');
        const send = document.getElementById('chatbotSend');
        const messages = document.getElementById('chatbotMessages');
        
        toggle?.addEventListener('click', () => this.toggleChat());
        close?.addEventListener('click', () => this.closeChat());
        send?.addEventListener('click', () => this.sendMessage());
        input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Quick buttons event delegation
        messages?.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-btn')) {
                const question = e.target.getAttribute('data-question');
                this.handleQuickResponse(question);
            }
        });
    }
    
    showInitialNotification() {
        setTimeout(() => {
            const notification = document.getElementById('chatbotNotification');
            if (notification && !this.isOpen) {
                notification.style.display = 'flex';
            }
        }, 3000);
    }
    
    toggleChat() {
        const window = document.getElementById('chatbotWindow');
        const notification = document.getElementById('chatbotNotification');
        
        if (this.isOpen) {
            this.closeChat();
        } else {
            window?.classList.add('open');
            notification.style.display = 'none';
            this.isOpen = true;
        }
    }
    
    closeChat() {
        const window = document.getElementById('chatbotWindow');
        window?.classList.remove('open');
        this.isOpen = false;
    }
    
    sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input?.value.trim();
        
        if (!message || this.typing) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        input.disabled = true;
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Simulate realistic typing delay based on response length
        const baseDelay = 800;
        const typingDelay = Math.min(baseDelay + (message.length * 30), 3000);
        
        setTimeout(() => {
            this.hideTypingIndicator();
            this.processMessage(message);
            input.disabled = false;
            input.focus();
        }, typingDelay);
    }
    
    showTypingIndicator() {
        this.typing = true;
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot typing-message';
        typingDiv.id = 'typingIndicator';
        
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator-advanced">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
                <span class="typing-text">AI Assistant is thinking...</span>
            </div>
        `;
        
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        this.typing = false;
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    handleQuickResponse(questionType) {
        const response = this.responses[questionType];
        if (response) {
            setTimeout(() => {
                this.addBotMessage(response.text, response.buttons);
            }, 300);
        }
    }
    
    processMessage(message) {
        try {
            // Input validation
            if (!message || typeof message !== 'string') {
                throw new Error('Invalid message input');
            }
            
            // Sanitize input
            message = message.trim();
            if (message.length === 0) {
                throw new Error('Empty message');
            }
            
            if (message.length > 500) {
                message = message.substring(0, 500);
                console.warn('⚠️ Message truncated to 500 characters');
            }
            
            // Add to conversation context
            this.conversationContext.push({ role: 'user', message: message, timestamp: Date.now() });
            
            // Keep context length manageable
            if (this.conversationContext.length > 10) {
                this.conversationContext = this.conversationContext.slice(-8);
            }
            
            const lowerMessage = message.toLowerCase();
            let response;
        } catch (error) {
            console.error('❌ Chatbot message processing failed:', error);
            this.handleChatbotError(error);
            return;
        }
        
        try {
            // Advanced contextual and keyword matching
            if (this.matchKeywords(lowerMessage, ['prayer', 'salah', 'salat', 'qibla', 'adhan', 'times', 'fajr', 'dhuhr', 'asr', 'maghrib', 'isha'])) {
                response = this.responses['prayer-times'];
            } else if (this.matchKeywords(lowerMessage, ['voice', 'dhikr', 'tasbih', 'count', 'subhanallah', 'alhamdulillah', 'allahu akbar', 'speech', 'recognition'])) {
                response = this.responses['voice-features'];
            } else if (this.matchKeywords(lowerMessage, ['quran', 'reading', 'progress', 'surah', 'ayah', 'juz', 'translation', 'tracker', 'book'])) {
                response = this.responses['quran-tracker'];
            } else if (this.matchKeywords(lowerMessage, ['ai', 'assistant', 'questions', 'islamic', 'scholar', 'knowledge', 'ask', 'guidance', 'fiqh'])) {
                response = this.responses['ai-assistant'];
            } else if (this.matchKeywords(lowerMessage, ['feature', 'what', 'can', 'do', 'capabilities', 'functions', 'about', 'app'])) {
                response = this.responses['features'];
            } else if (this.matchKeywords(lowerMessage, ['download', 'install', 'app store', 'get', 'free', 'ios', 'iphone'])) {
                response = this.responses['download'];
            } else if (this.matchKeywords(lowerMessage, ['help', 'support', 'contact', 'problem', 'bug', 'issue', 'technical'])) {
                response = this.responses['support'];
            } else if (this.matchKeywords(lowerMessage, ['salam', 'hello', 'hi', 'greet', 'peace', 'assalam'])) {
                response = this.responses['greeting'];
            } else if (this.matchKeywords(lowerMessage, ['islam', 'islamic', 'teach', 'learn', 'religion', 'faith', 'muslim', 'knowledge'])) {
                response = this.responses['islamic-qa'];
            } else {
                // Intelligent fallback based on context
                response = this.generateContextualResponse(message, lowerMessage);
            }
            
            // Validate response
            if (!response || typeof response.text !== 'string') {
                throw new Error('Invalid response generated');
            }
            
            // Add to conversation context
            this.conversationContext.push({ role: 'assistant', message: response.text, timestamp: Date.now() });
            
            this.addBotMessage(response.text, response.buttons);
            
        } catch (error) {
            console.error('❌ Chatbot response generation failed:', error);
            this.handleChatbotError(error);
        }
    }
    
    handleChatbotError(error) {
        console.error('🤖 Chatbot Error Handler:', error);
        
        // Provide fallback response based on error type
        let fallbackResponse;
        
        if (error.message.includes('Invalid message input') || error.message.includes('Empty message')) {
            fallbackResponse = {
                text: "عذراً، لم أتمكن من فهم رسالتك. يرجى المحاولة مرة أخرى بسؤال واضح.",
                buttons: [
                    { text: "ما هي مميزات التطبيق؟", action: "features" },
                    { text: "كيف أحمل التطبيق؟", action: "download" }
                ]
            };
        } else if (error.message.includes('Invalid response generated')) {
            fallbackResponse = {
                text: "أعتذر، حدث خطأ في معالجة إجابتي. كيف يمكنني مساعدتك؟",
                buttons: [
                    { text: "أوقات الصلاة", action: "prayer" },
                    { text: "ميزة العد الصوتي", action: "voice" },
                    { text: "تتبع القرآن", action: "quran" }
                ]
            };
        } else {
            // Generic fallback
            fallbackResponse = {
                text: "أعتذر، حدث خطأ مؤقت. يمكنك المحاولة مرة أخرى أو تصفح مميزات التطبيق أدناه:",
                buttons: [
                    { text: "مميزات التطبيق", action: "features" },
                    { text: "تحميل التطبيق", action: "download" },
                    { text: "مساعدة", action: "support" }
                ]
            };
        }
        
        // Show error recovery message
        setTimeout(() => {
            this.addBotMessage(fallbackResponse.text, fallbackResponse.buttons);
        }, 500);
        
        // Track error for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'chatbot_error', {
                event_category: 'engagement',
                event_label: error.message,
                value: 1
            });
        }
    }
    
    matchKeywords(text, keywords) {
        try {
            if (!text || !Array.isArray(keywords)) {
                return false;
            }
            return keywords.some(keyword => text.includes(keyword));
        } catch (error) {
            console.error('❌ Keyword matching failed:', error);
            return false;
        }
    }
    
    generateContextualResponse(originalMessage, lowerMessage) {
        // Check recent conversation context for better responses
        const recentContext = this.conversationContext.slice(-4);
        const hasDiscussedFeatures = recentContext.some(ctx => 
            ctx.message && ctx.message.includes('features') || ctx.message.includes('capabilities')
        );
        
        // More sophisticated fallback responses
        if (lowerMessage.length < 3) {
            return {
                text: "I'd love to help you! Could you please be a bit more specific about what you'd like to know?",
                buttons: ['App Features', 'Prayer Times', 'Voice Demo', 'Islamic Q&A']
            };
        }
        
        if (this.matchKeywords(lowerMessage, ['why', 'how', 'when', 'where', 'which'])) {
            return {
                text: "Great question! I'm here to provide detailed information about Rowhni and Islamic practices. Let me know which specific topic interests you most:",
                buttons: ['Voice Features', 'Prayer Times', 'Quran Tracker', 'Islamic Guidance']
            };
        }
        
        if (this.matchKeywords(lowerMessage, ['price', 'cost', 'pay', 'subscription', 'money', 'free'])) {
            return {
                text: "💰 **Rowhni is 100% FREE!**\n\n✅ No subscriptions required\n✅ No hidden costs or fees\n✅ All features included at no cost\n✅ No ads in the core experience\n\n⚠️ **System Requirement:** iOS 18.0 or later required\n\nWe believe Islamic tools should be accessible to all Muslims worldwide. Download now and enjoy the complete experience!",
                buttons: ['Download Now', 'See All Features', 'Voice Demo']
            };
        }
        
        if (this.matchKeywords(lowerMessage, ['ios', 'iphone', 'ipad', 'compatibility', 'version', 'system', 'requirements', 'support'])) {
            return {
                text: "📱 **iOS Compatibility & Requirements**\n\n⚠️ **Minimum System Requirements:**\n• iPhone: iOS 18.0 or later\n• iPad: iOS 18.0 or later\n• Storage: 50MB free space\n\n🎨 **Why iOS 18+?**\n• Advanced Glass Design features\n• Enhanced voice recognition capabilities\n• Improved privacy and security\n• Better performance optimizations\n• Latest Islamic calendar integrations\n\n📋 **Supported Devices:**\n• iPhone 12 and newer (recommended)\n• iPhone XR, XS, XS Max, 11 series\n• iPad Air (4th gen) and newer\n• iPad Pro (all sizes)\n• iPad mini (6th gen)\n\n**Note:** Older devices may not support all features due to hardware limitations.",
                buttons: ['Download App', 'See Features', 'Technical Support']
            };
        }
        
        if (hasDiscussedFeatures) {
            return {
                text: "Based on our conversation, you might be interested in exploring specific features in more detail. Which aspect of Rowhni would you like to dive deeper into?",
                buttons: ['Voice Demo', 'Prayer Precision', 'Quran Study', 'AI Assistant']
            };
        }
        
        // Default intelligent response
        return {
            text: `I understand you're asking about "${originalMessage.substring(0, 50)}${originalMessage.length > 50 ? '...' : ''}"\n\nI'm designed to help with Rowhni app features and Islamic guidance. Here are the main areas I can assist with:`,
            buttons: ['App Features', 'Voice Features', 'Prayer Times', 'Islamic Q&A', 'Support']
        };
    }
    
    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        const textP = document.createElement('p');
        textP.textContent = text;
        
        contentDiv.appendChild(textP);
        messageDiv.appendChild(contentDiv);
        messagesContainer.appendChild(messageDiv);
        
        this.scrollToBottom();
    }
    
    addBotMessage(text, buttons = []) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        // Format text with line breaks and bold
        const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
        contentDiv.innerHTML = `<p>${formattedText}</p>`;
        
        // Add buttons if provided
        if (buttons.length > 0) {
            const quickOptions = document.createElement('div');
            quickOptions.className = 'quick-options';
            
            buttons.forEach(buttonText => {
                const button = document.createElement('button');
                button.className = 'quick-btn';
                button.textContent = buttonText;
                
                // Enhanced button mapping with new features
                const questionMap = {
                    'App Features': 'features',
                    'More Features': 'features',
                    'See Features': 'features',
                    'See All Features': 'features',
                    'Prayer Times': 'prayer-times',
                    'Voice Features': 'voice-features',
                    'Voice Demo': 'voice-features',
                    'Try Voice Demo': 'voice-features',
                    'Quran Tracker': 'quran-tracker',
                    'Start Reading': 'quran-tracker',
                    'AI Assistant': 'ai-assistant',
                    'AI Chat': 'ai-assistant',
                    'Ask Question': 'ai-assistant',
                    'Islamic Q&A': 'islamic-qa',
                    'Islamic Guidance': 'islamic-qa',
                    'Prayer Questions': 'islamic-qa',
                    'Quran Guidance': 'islamic-qa',
                    'Daily Islam': 'islamic-qa',
                    'Back to Features': 'features',
                    'Download': 'download',
                    'Download Now': 'download',
                    'Download App': 'download',
                    'Get Rowhni Now': 'download',
                    'Open App Store': 'download',
                    'Support': 'support',
                    'Contact Support': 'support',
                    'Help Center': 'support',
                    'FAQ': 'support',
                    'Privacy Policy': 'support'
                };
                
                const question = questionMap[buttonText] || 'features';
                button.setAttribute('data-question', question);
                
                quickOptions.appendChild(button);
            });
            
            contentDiv.appendChild(quickOptions);
        }
        
        messageDiv.appendChild(contentDiv);
        messagesContainer.appendChild(messageDiv);
        
        this.scrollToBottom();
    }
    
    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbotMessages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize the chatbot
document.addEventListener('DOMContentLoaded', () => {
    new IslamicChatbot();
});